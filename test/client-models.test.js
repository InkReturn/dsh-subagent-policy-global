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
    'globalThis.__modelTest = { groupByProvider, matchesModelQuery }; function PolicyIcon(',
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

test('模型池与策略编辑器都挂载搜索框，并使用同一分组逻辑', () => {
  const { source } = loadClientPureFunctions();
  const searchCount = (source.match(/type: 'search'/g) || []).length;
  assert.equal(searchCount, 2, '模型池和策略候选应各有一个搜索框');
  assert.equal((source.match(/groupByProvider\(/g) || []).length >= 3, true);
  assert.equal(source.includes('keys.size >= 200'), true, '客户端选择上限必须与宿主 200 对齐');
  assert.equal(source.includes('keys.size >= 24'), false);
});
