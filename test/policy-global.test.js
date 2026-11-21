import test from 'node:test';
import assert from 'node:assert/strict';
import { applyWithPackageMeta } from '../index.js';
import { defaultFromStrategy } from '../management.js';
import { checkAdmission } from '../policy.js';

const PARENT = { provider: 'iflytek-openai', model: 'DeepSeek-V4.1-Flash' };
const GLM = { provider: 'iflytek-openai', model: 'GLM-5.3' };
const CLAUDE = { provider: 'aircodeclaude', model: 'claude-opus-5' };

/**
 * 创建只使用内存的宿主替身，用于验证全局策略的跨会话读取与写入。
 * 不访问网络、不读取真实凭据，也不触达真实 DSH 存储。
 *
 * @param {object} options 测试夹具参数。
 * @param {object} options.global 全局存储记录，可包含 default/library/policy/revision。
 * @param {Map<string, object>} [options.policies] 旧版按会话存储，用于验证全局覆盖优先级。
 * @returns {object} 包含 ctx、命令、工具、全局状态和写入计数的测试替身。
 */
function createHost({ global, policies = new Map() }) {
  const runs = new Map();
  const commands = new Map();
  const tools = new Map();
  const listeners = new Map();
  const sessions = new Map();
  const liveAgents = [];
  const callConfigs = [];
  let globalState = global;
  let policyWrites = 0;
  const table = (map, counter = false) => ({
    get: (id) => map.get(id),
    entries: () => [...map.entries()],
    put: async (id, value) => { if (counter) policyWrites += 1; map.set(id, value); },
    update: async (id, updater) => { map.set(id, updater(map.get(id))); },
  });
  const domain = {
    global: {
      get: () => globalState,
      set: async (value) => { globalState = value; },
    },
    table: (name) => table(name === 'policies' ? policies : runs, name === 'policies'),
    close: async () => {},
  };
  const ctx = {
    storageDomain: { open: async () => domain },
    effect: (fn) => fn,
    sessionProjections: { register: () => {}, stateOf: () => undefined },
    systemPrompt: { context: () => {} },
    commands: { register: (definition) => commands.set(definition.name, definition) },
    tools: { register: (definition) => tools.set(definition.name, definition) },
    on: (event, handler) => listeners.set(event, handler),
    agents: {
      currentInitiator: () => undefined,
      list: () => liveAgents,
      get: (id) => sessions.get(id)?.agent,
    },
    sessions: { get: (id) => sessions.get(id) },
    get: (name) => name === 'settings' ? ctx.settings : undefined,
    subagents: {
      resolveMaxDepth: () => 1,
      getProvider: (name) => ({
        name,
        prepareContinuable: () => undefined,
        capabilities: { agentOptions: true, depthLimit: true },
      }),
      startActivation: async (spec) => ({ childId: spec.childId }),
    },
    subagentModelSelection: {
      current: () => ({ enabled: true, allowedModels: [PARENT, GLM, CLAUDE] }),
    },
    settings: {
      describe: () => [{ ns: 'subagent', applies: 'live', value: { maxActiveSubagents: 8 }, revision: 1 }],
    },
    llm: {
      listProviders: () => [...new Set([PARENT, GLM, CLAUDE].map((route) => route.provider))].map((id) => ({ id })),
      resolveModelInfo: async (_provider, model) => ({
        name: model,
        description: '',
        // 宿主元数据里的思考等级：池条目只能配置这里出现过的 id。
        reasoning: model === GLM.model
          ? { efforts: [{ id: 'low', name: 'Low' }, { id: 'max', name: 'Max' }], defaultEffort: 'max' }
          : { efforts: [], defaultEffort: '' },
      }),
      resolveCallConfig: async (options) => { callConfigs.push({ ...options }); return { ...options, resolved: true }; },
    },
    logger: { warn: () => {} },
  };
  const addSession = (id, route = PARENT) => {
    const session = {
      header: { origin: 'root', isSeeded: false, delegationDepth: 0 },
      requestHeader: () => ({ config: route }),
    };
    const agent = { id, options: route };
    session.agent = agent;
    sessions.set(id, session);
    return agent;
  };
  const addChildSession = (id, parentId, route = PARENT) => {
    const session = {
      header: { origin: 'subagent', parentSession: parentId, isSeeded: false, delegationDepth: 1 },
      requestHeader: () => ({ config: route }),
    };
    const agent = { id, options: route };
    session.agent = agent;
    sessions.set(id, session);
    liveAgents.push(agent);
    return agent;
  };
  return { ctx, commands, tools, listeners, sessions, liveAgents, callConfigs, addSession, addChildSession, domain, policies, runs, getGlobal: () => globalState, policyWriteCount: () => policyWrites };
}

/** 生成一个合法的 auto 全局默认记录，避免手写上流水化快照字段。 */
function autoDefault() {
  const strategy = {
    id: 'global-auto', name: '全局默认', type: 'auto', models: [GLM],
    fixedProvider: '', fixedModel: '', strategyText: '', version: 1,
  };
  const pool = [{ ...GLM, name: 'GLM-5.3', purpose: '', note: '' }];
  return defaultFromStrategy(strategy, pool, null, { now: 1 });
}

test('旧会话与新会话都读取同一全局默认，关闭后同步生效且不写会话副本', async () => {
  const host = createHost({ global: { revision: 1, default: autoDefault() } });
  const oldAgent = host.addSession('old-session');
  const newAgent = host.addSession('new-session');
  await applyWithPackageMeta(host.ctx, {});

  // 1. 两个没有任何 policies 记录的会话，均应直接继承全局启用策略。
  const readOld = await host.tools.get('subagent_policy').execute({}, { agent: oldAgent });
  const readNew = await host.tools.get('subagent_policy').execute({}, { agent: newAgent });
  assert.equal(readOld.policy.enabled, true);
  assert.equal(readNew.policy.enabled, true);
  assert.equal(readOld.policy.mode, 'auto');
  assert.deepEqual(readOld.management.pool.map((row) => row.model), ['GLM-5.3']);
  assert.deepEqual(readNew.management.pool.map((row) => row.model), ['GLM-5.3']);
  assert.equal(readOld.revision, 1);

  // 2. 由用户在一个会话关闭策略，另一个会话随后读取也必须关闭。
  const result = await host.commands.get('subagent-policy').handler({
    agent: oldAgent,
    rawInput: JSON.stringify({ action: 'strategy.close', expectedRevision: 1 }),
    signal: new AbortController().signal,
  });
  assert.equal(result.kind, 'success');
  assert.equal(host.getGlobal().library.active, null);
  const afterOld = await host.tools.get('subagent_policy').execute({}, { agent: oldAgent });
  const afterNew = await host.tools.get('subagent_policy').execute({}, { agent: newAgent });
  assert.equal(afterOld.policy.enabled, false);
  assert.equal(afterNew.policy.enabled, false);
  assert.equal(host.policyWriteCount(), 0, '统一策略不得再写 policies/session-* 副本');
});

test('全局库覆盖旧会话副本，不会回退到各自历史策略', async () => {
  const legacyPolicies = new Map([
    ['old-session', { revision: 9, policy: { enabled: false, mode: 'inherit', models: [] } }],
  ]);
  const host = createHost({ global: { revision: 2, default: autoDefault() }, policies: legacyPolicies });
  const agent = host.addSession('old-session');
  await applyWithPackageMeta(host.ctx, {});
  const snapshot = await host.tools.get('subagent_policy').execute({}, { agent });
  assert.equal(snapshot.policy.enabled, true);
  assert.equal(snapshot.policy.mode, 'auto');
  assert.equal(snapshot.revision, 2, 'CAS 必须使用全局 revision，而不是旧会话 revision');
});

/** 生成仅允许 GLM 的 auto 策略，PARENT 故意不在池内。 */
function autoPolicy() {
  return {
    enabled: true, mode: 'auto', preset: 'custom', strategyText: '',
    maxDepth: 1, maxActive: 8, limitsUnset: true,
    fixedProvider: '', fixedModel: '', models: [GLM],
  };
}

test('auto 准入允许继承父路由，只拒绝切换到池外模型', () => {
  const policy = {
    enabled: true, mode: 'auto', maxDepth: 1, maxActive: 8,
    fixedProvider: '', fixedModel: '', models: [GLM],
  };
  // 1. 主模型不在池内，但子代理没有切换路由：spawn/fork 均应放行。
  assert.doesNotThrow(() => checkAdmission(policy, PARENT, PARENT, 1, 0, 1, 8, { inheritsParentContext: true }));
  // 2. 切到池内模型：放行。
  assert.doesNotThrow(() => checkAdmission(policy, GLM, PARENT, 1, 0, 1, 8, { inheritsParentContext: false }));
  // 3. 切到池外模型：拒绝。
  assert.throws(
    () => checkAdmission(policy, CLAUDE, PARENT, 1, 0, 1, 8, { inheritsParentContext: false }),
    /原生入口模型不在会话授权子集中/,
  );
});

test('池中配置的思考强度会跟随委派，显式参数仍然优先', async () => {
  const host = createHost({ global: { revision: 1, default: autoDefault() } });
  const agent = host.addSession('root');
  await applyWithPackageMeta(host.ctx, {});
  // 1. 在全局池里给 GLM-5.3 配上 high 之外的 max 等级（宿主元数据支持）。
  const saved = await host.commands.get('subagent-policy').handler({
    agent,
    rawInput: JSON.stringify({
      action: 'pool.note', expectedRevision: 1, provider: GLM.provider, model: GLM.model,
      purpose: '', note: '', effort: 'max',
    }),
    signal: new AbortController().signal,
  });
  assert.equal(saved.kind, 'success');
  // 2. 委派不传 reasoning_effort 时使用池中配置。
  const first = await host.tools.get('delegate_with_policy').execute({
    prompt: '自测', description: '自测委派', reason: '验证池内思考强度跟随委派',
    provider: GLM.provider, model: GLM.model,
  }, { agent, signal: new AbortController().signal });
  assert.equal(first.reasoningEffort, 'max');
  assert.equal(host.callConfigs.at(-1).reasoningEffort, 'max');
  // 3. 显式传入时以调用参数为准。
  const second = await host.tools.get('delegate_with_policy').execute({
    prompt: '自测', description: '自测委派', reason: '验证显式思考强度覆盖池配置',
    provider: GLM.provider, model: GLM.model, reasoning_effort: 'low',
  }, { agent, signal: new AbortController().signal });
  assert.equal(second.reasoningEffort, 'low');
  assert.equal(host.callConfigs.at(-1).reasoningEffort, 'low');
});

test('模型不支持的思考强度在保存时被拒绝', async () => {
  const host = createHost({ global: { revision: 1, default: autoDefault() } });
  const agent = host.addSession('root');
  await applyWithPackageMeta(host.ctx, {});
  const result = await host.commands.get('subagent-policy').handler({
    agent,
    rawInput: JSON.stringify({
      action: 'pool.note', expectedRevision: 1, provider: GLM.provider, model: GLM.model,
      purpose: '', note: '', effort: 'ultra',
    }),
    signal: new AbortController().signal,
  });
  assert.equal(result.kind, 'error');
  assert.match(result.text, /不支持思考强度/);
});

test('resume 时父 Agent 缺失仍按 native-inherit 记录放行，并允许后续 LLM 请求', async () => {
  const host = createHost({ global: { revision: 1, default: null } });
  const child = host.addChildSession('child-resume', 'missing-parent', PARENT);
  host.runs.set(child.id, {
    id: child.id, rootId: 'missing-parent', entry: 'native-inherit',
    requestedProvider: PARENT.provider, requestedModel: PARENT.model,
    version: 1, policy: autoPolicy(), createdAt: 1,
  });
  await applyWithPackageMeta(host.ctx, {});
  // 1. 恢复 attach 使用 runs 中的继承标记，不再要求父 Agent 必须在线。
  await host.listeners.get('agent/created')({ agent: child, source: 'resume' });
  // 2. 出站 LLM 请求同样按继承处理，而不是要求主模型在池内。
  const result = await host.listeners.get('llm/stream')(
    { sessionId: child.id, provider: PARENT.provider, model: PARENT.model },
    () => 'allowed',
  );
  assert.equal(result, 'allowed');
});

test('插件重载恢复租约后保留 inheritParent，LLM 请求不被池校验误伤', async () => {
  const host = createHost({ global: { revision: 1, default: null } });
  const child = host.addChildSession('child-reload', 'missing-parent', PARENT);
  host.runs.set(child.id, {
    id: child.id, rootId: 'missing-parent', entry: 'native-inherit',
    requestedProvider: PARENT.provider, requestedModel: PARENT.model,
    version: 1, policy: autoPolicy(), createdAt: 1,
  });
  // apply 的存量 Agent 恢复循环直接重建 lease，不经过 attach。
  await applyWithPackageMeta(host.ctx, {});
  const result = await host.listeners.get('llm/stream')(
    { sessionId: child.id, provider: PARENT.provider, model: PARENT.model },
    () => 'allowed-after-reload',
  );
  assert.equal(result, 'allowed-after-reload');
});

test('全局写入保留旧 default，关闭后的 active=null 不会被默认投影重新启用', async () => {
  const host = createHost({ global: { revision: 1, default: autoDefault() } });
  const agent = host.addSession('root');
  await applyWithPackageMeta(host.ctx, {});
  await host.commands.get('subagent-policy').handler({
    agent,
    rawInput: JSON.stringify({ action: 'strategy.close', expectedRevision: 1 }),
    signal: new AbortController().signal,
  });
  assert.equal(host.getGlobal().default.name, '全局默认');
  const first = await host.tools.get('subagent_policy').execute({}, { agent });
  const second = await host.tools.get('subagent_policy').execute({}, { agent });
  assert.equal(first.policy.enabled, false);
  assert.equal(second.policy.enabled, false);
  assert.equal(second.defaultSetting.snapshot.name, '全局默认');
});

test('strategy.save 支持 poolAdditions 原子入池，未入池模型随策略一次性落盘', async () => {
  const host = createHost({ global: { revision: 1, default: autoDefault() } });
  const agent = host.addSession('root');
  await applyWithPackageMeta(host.ctx, {});
  const result = await host.commands.get('subagent-policy').handler({
    agent,
    rawInput: JSON.stringify({
      action: 'strategy.save', expectedRevision: 1,
      strategy: { name: '自动入池策略', type: 'auto', models: [GLM, CLAUDE], fixedProvider: '', fixedModel: '', strategyText: '' },
      poolAdditions: [{ provider: CLAUDE.provider, model: CLAUDE.model, purpose: '', note: '', effort: '' }],
    }),
    signal: new AbortController().signal,
  });
  assert.equal(result.kind, 'success', result.text);
  const library = host.getGlobal().library;
  assert.equal(library.pool.length, 2);
  assert.deepEqual(library.pool.map((row) => row.model), ['GLM-5.3', 'claude-opus-5']);
  const created = library.strategies.find((row) => row.name === '自动入池策略');
  assert.ok(created, '应创建自动入池策略');
  assert.equal(created.models.length, 2);
});

test('strategy.save 的 poolAdditions 在池满 200 时明确报错，不静默截断', async () => {
  const bigPool = Array.from({ length: 200 }, (_, i) => ({ provider: 'iflytek-openai', model: `model-${i}`, purpose: '', note: '' }));
  const host = createHost({ global: { revision: 1, default: autoDefault(), library: { version: 1, strategies: [], pool: bigPool, limits: null, active: null } } });
  const agent = host.addSession('root');
  await applyWithPackageMeta(host.ctx, {});
  const result = await host.commands.get('subagent-policy').handler({
    agent,
    rawInput: JSON.stringify({
      action: 'strategy.save', expectedRevision: 1,
      strategy: { name: '超池策略', type: 'auto', models: [CLAUDE], fixedProvider: '', fixedModel: '', strategyText: '' },
      poolAdditions: [{ provider: CLAUDE.provider, model: CLAUDE.model, purpose: '', note: '', effort: '' }],
    }),
    signal: new AbortController().signal,
  });
  assert.equal(result.kind, 'error');
  assert.match(result.text, /最多 200 个模型/);
});

test('savePool 删除默认快照引用的模型会被拒绝', async () => {
  const host = createHost({ global: { revision: 1, default: autoDefault(), library: { version: 1, strategies: [{ id: 'global-auto', name: '全局默认', type: 'auto', models: [GLM], fixedProvider: '', fixedModel: '', strategyText: '', version: 1 }], pool: [{ ...GLM, name: 'GLM-5.3', purpose: '', note: '' }], limits: null, active: null } } });
  const agent = host.addSession('root');
  await applyWithPackageMeta(host.ctx, {});
  const result = await host.commands.get('subagent-policy').handler({
    agent,
    rawInput: JSON.stringify({ action: 'pool.save', expectedRevision: 1, pool: [] }),
    signal: new AbortController().signal,
  });
  assert.equal(result.kind, 'error');
  assert.match(result.text, /新会话默认.*仍引用/);
});

test('persistUnified 会把池说明与限制回灌到默认快照', async () => {
  const host = createHost({ global: { revision: 1, default: autoDefault() } });
  const agent = host.addSession('root');
  await applyWithPackageMeta(host.ctx, {});
  await host.commands.get('subagent-policy').handler({
    agent,
    rawInput: JSON.stringify({ action: 'pool.note', expectedRevision: 1, provider: GLM.provider, model: GLM.model, purpose: '代码主力', note: '仅开发', effort: 'max' }),
    signal: new AbortController().signal,
  });
  const limitResult = await host.commands.get('subagent-policy').handler({
    agent,
    rawInput: JSON.stringify({ action: 'limits.save', expectedRevision: 2, limits: { maxDepth: 1, maxActive: 8 } }),
    signal: new AbortController().signal,
  });
  assert.equal(limitResult.kind, 'success', limitResult.text);
  const def = host.getGlobal().default;
  const info = def.modelsInfo.find((row) => row.model === GLM.model);
  assert.equal(info.purpose, '代码主力');
  assert.equal(info.note, '仅开发');
  assert.equal(info.effort, 'max');
  assert.deepEqual(def.limits, { maxDepth: 1, maxActive: 8 });
});
