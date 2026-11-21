import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

/**
 * 在隔离 VM 中加载浏览器 client 模块，并只导出纯函数供测试。
 * React 使用最小替身，不创建 DOM、不发起网络请求，也不执行 UI apply。
 *
 * @returns {object} 包含 groupByProvider、matchesModelQuery 与源码文本的夹具。
 */
function loadClientPureFunctions() {
  const file = new URL('../client.js', import.meta.url);
  let source = readFileSync(file, 'utf8');
  source = source.replace(
    'function PolicyIcon(',
    'globalThis.__modelTest = { groupByProvider, matchesModelQuery, composeGuideText, parseGuideText }; function PolicyIcon(',
  );
  const React = {
    createElement: (...args) => args,
    useCallback: (fn) => fn,
    useEffect: () => {},
    useId: () => 'test',
    useRef: (value) => ({ current: value }),
    useState: (value) => [value, () => {}],
  };
  const sandbox = {
    window: {
      __ModuleLoader__: {
        load: (definition) => definition.factory((name) => name === 'react' ? React : {}),
      },
    },
  };
  vm.runInNewContext(source, sandbox, { filename: 'client.js' });
  return { ...sandbox.window.__modelTest || sandbox.__modelTest, source };
}

test('模型搜索同时匹配显示名、模型 id 和 provider，且忽略大小写与空格', () => {
  const { matchesModelQuery } = loadClientPureFunctions();
  const row = { name: 'GLM-5.3', model: 'glm-5.3', provider: 'iflytek-openai' };
  assert.equal(matchesModelQuery(row, '  GLM '), true);
  assert.equal(matchesModelQuery(row, 'IFLYTEK'), true);
  assert.equal(matchesModelQuery(row, '5.3'), true);
  assert.equal(matchesModelQuery(row, 'claude'), false);
  assert.equal(matchesModelQuery(row, ''), true);
});

test('provider 分组保持原顺序，不引入模型名称排序', () => {
  const { groupByProvider } = loadClientPureFunctions();
  const rows = [
    { provider: 'z-provider', model: 'a' },
    { provider: 'a-provider', model: 'b' },
    { provider: 'z-provider', model: 'c' },
  ];
  const groups = groupByProvider(rows);
  assert.deepEqual([...groups.keys()], ['z-provider', 'a-provider']);
  assert.deepEqual(Array.from(groups.get('z-provider'), (row) => row.model), ['a', 'c']);
});

test('模型池、策略候选与规则选模型面板都挂载搜索框，并使用同一分组逻辑', () => {
  const { source } = loadClientPureFunctions();
  const searchCount = (source.match(/type: 'search'/g) || []).length;
  assert.equal(searchCount >= 3, true, '模型池、策略候选、规则选模型面板都应有搜索框');
  assert.equal((source.match(/groupByProvider\(/g) || []).length >= 4, true);
  assert.equal(source.includes('keys.size >= 200'), true, '客户端选择上限必须与宿主 200 对齐');
  assert.equal(source.includes('keys.size >= 24'), false);
});

test('结构化选择说明编译后可完整解析回规则与兜底（round-trip）', () => {
  const { composeGuideText, parseGuideText } = loadClientPureFunctions();
  const rules = [
    { scene: '开发 / 调试', models: [{ provider: 'iflytek-openai', model: 'DeepSeek-V4.1-Flash' }, { provider: 'zzzxin', model: 'kimi-k3.1-pro-2' }] },
    { scene: '润色', models: [{ provider: 'iflytek-gemini', model: 'gemini-3.7-flash' }] },
  ];
  const text = composeGuideText(rules, '复杂重构优先 kimi 系列');
  const parsed = parseGuideText(text);
  assert.equal(JSON.stringify(parsed), JSON.stringify({ rules, fallback: '复杂重构优先 kimi 系列' }));
});

test('规则模型顺序即优先级，场景中的结构字符被清理且解析稳定', () => {
  const { composeGuideText, parseGuideText } = loadClientPureFunctions();
  const rules = [{ scene: '写【代码】\n重构→评审', models: [
    { provider: 'zzzxin', model: 'qwen4-max' },
    { provider: 'iflytek-openai', model: 'Kimi-K3' },
  ] }];
  const parsed = parseGuideText(composeGuideText(rules, ''));
  assert.equal(parsed.rules.length, 1);
  assert.equal(parsed.rules[0].scene.includes('\n'), false);
  assert.equal(parsed.rules[0].scene.includes('→'), false);
  assert.equal(parsed.rules[0].models.map((r) => r.model).join(','), 'qwen4-max,Kimi-K3');
  assert.equal(parsed.fallback, '无规则命中时在候选子集内自行决策。');
});

test('自由文本与非本编译器文本一律解析为 null，走自由文本编辑', () => {
  const { parseGuideText, composeGuideText } = loadClientPureFunctions();
  assert.equal(parseGuideText('安排开发任务时优先使用 deepseek'), null);
  assert.equal(parseGuideText(''), null);
  assert.equal(parseGuideText(null), null);
  assert.equal(parseGuideText(composeGuideText([], '') + '\n手工追加内容') === null, false, '编译文本本体可解析');
});
