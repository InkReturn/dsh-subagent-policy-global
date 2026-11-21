# 全局子智能体模型策略 · dsh-subagent-policy-global

DeepSeek Harness（DSH）插件：为所有会话提供**全局唯一**的子智能体模型策略库、可搜索的 provider 分组模型池，以及按池配置思考强度（effort）的委派路由。

> **Fork 声明 / Credits**
>
> 本项目 fork 自 **lez** 的 [`@lienze/dsh-subagent-model-policy@0.3.3`](https://github.com/ChenMuDX/dsh-subagent-model-policy)。
> 感谢原作者 lez 实现了子智能体模型策略的完整基础：会话级策略管理、候选模型池、并发/递归限制、执行洞察记录，以及清晰的授权边界设计——本项目的全部工作都建立在这套底座之上，特此致敬。🙏
>
> 上游项目：[ChenMuDX/dsh-subagent-model-policy](https://github.com/ChenMuDX/dsh-subagent-model-policy) · 作者：lez · 许可证：MIT（本仓库继续沿用，见 [LICENSE](./LICENSE)）。

## 与上游的差异

1. **全局唯一策略库**：策略、模型池和并发/递归限制写入 `lez_subagent_policy` 存储域的 `global.library`。新旧会话、恢复会话都读取同一份记录，不再为每个会话复制策略。旧版 `global.default` 在首次保存前作为兼容来源，旧 `policies/session-*` 仅在没有全局配置时用于迁移。
2. **主模型与子代理池解耦**：`auto` 模式下，子路由等于父路由的原生创建（包括 `spawn` 和 `fork`）直接放行，主模型不需要加入模型池。只有切换到其他子代理模型时，目标才必须属于全局池；宿主的 `allowedModels` 授权校验仍然保留。
3. **统一模型选择 UI**：模型池和策略编辑器中的固定/自选候选均支持按显示名、模型 id、provider 搜索，并按 provider 稳定分组。客户端选择上限与宿主一致为 200。
4. **思考强度可配置**：模型池每个条目可设 `effort`（空 = 沿用模型默认），能力卡里按宿主元数据下拉选择，非法等级在保存时直接拒绝。`delegate_with_policy` 未显式传 `reasoning_effort` 时使用池中配置，显式参数优先；原生继承委派不改父子绑定。
5. **用户授权边界不变**：Agent 仍不能自行修改策略，策略编辑需要用户从面板或命令发起；本 fork 不会替用户扩大授权。

## 部署与回滚约束

- 启用本 fork 前必须停用 `@lienze/dsh-subagent-model-policy`。两者共用 `lez_subagent_policy` 存储域，同时启用会被宿主以 `already-open` 拒绝。
- 不要直接回滚到旧插件后执行「设为新会话默认 / 清除默认」：旧插件的 `storedGlobal` 不包含 `library`，其 `global.set` 会剥离本 fork 的全局库。需要回滚时先备份 `~/.dsh/storages/lez_subagent_policy/global.json`，并只恢复 `default` 字段。

## 环境要求

- DeepSeek Harness `>=0.2.2-rc.1`
- Node `>=24.12.0`

## 本地验证

```powershell
npm run check
npm test
```

测试使用内存宿主替身和隔离 VM，不访问网络、不读取真实账号。覆盖：新旧会话共享全局默认、跨会话关闭同步、全局库覆盖旧会话副本、父路由继承与池外换型、搜索和 provider 分组、池内思考强度跟随委派与非法等级拒绝、resume/重载后的继承放行。

## 许可证

MIT。保留上游作者 lez 的原始版权声明与许可证文本；本 fork 的修改同样以 MIT 发布。
