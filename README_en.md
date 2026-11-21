# Global Subagent Model Policy · dsh-subagent-policy-global

[简体中文](./README.md) · English

A DeepSeek Harness (DSH) plugin that provides a **single global** subagent model-policy library shared by all sessions, a searchable provider-grouped model pool, and per-model reasoning effort for delegation routing.

> **Fork notice / Credits**
>
> This project is forked from **`@lienze/dsh-subagent-model-policy@0.3.3`** by **lez**: [ChenMuDX/dsh-subagent-model-policy](https://github.com/ChenMuDX/dsh-subagent-model-policy).
> Many thanks to lez for building the complete foundation of subagent model policies: session-level policy management, the candidate model pool, concurrency/recursion limits, execution insight records, and a clean authorization boundary. Everything here stands on that groundwork. 🙏
>
> License: MIT (retained, see [LICENSE](./LICENSE)).

## Differences from upstream

1. **Single global policy library**: policies, the model pool, and concurrency/recursion limits are stored in `global.library` of the `lez_subagent_policy` storage domain. New, existing, and resumed sessions all read the same record; policies are no longer copied per session. The legacy `global.default` serves as a compatibility source until the first save, and legacy `policies/session-*` records are only used for migration when no global configuration exists.
2. **Main model decoupled from the subagent pool**: in `auto` mode, native delegations whose child route equals the parent route (including `spawn` and `fork`) pass through directly — the main model does not need to be in the pool. Only switching to a different child model requires the target to be in the global pool; the host's `allowedModels` authorization checks still apply.
3. **Unified model selection UI**: fixed/auto candidates in both the model pool and the policy editor support search by display name, model id, or provider, with stable provider grouping. The client selection cap matches the host at 200.
4. **Configurable reasoning effort**: each pool entry can set `effort` (empty = model default), chosen in the capability card from host metadata; invalid levels are rejected on save. `delegate_with_policy` uses the pool configuration when `reasoning_effort` is not explicitly passed; explicit parameters win; native inherited delegations never change parent-child bindings.
5. **User authorization boundary unchanged**: agents still cannot modify policies themselves; policy editing must be initiated by the user from the panel or a command. This fork never expands authorization on the user's behalf.

## Deployment and rollback constraints

- Disable `@lienze/dsh-subagent-model-policy` before enabling this fork. Both share the `lez_subagent_policy` storage domain; enabling both is rejected by the host with `already-open`.
- Do not roll back to the old plugin and then run "set as new-session default / clear default": the old plugin's `storedGlobal` has no `library`, and its `global.set` would strip this fork's global library. To roll back, back up `~/.dsh/storages/lez_subagent_policy/global.json` first and restore only the `default` field.

## Requirements

- DeepSeek Harness `>=0.2.2-rc.1`
- Node `>=24.12.0`

## Local verification

```powershell
npm run check
npm test
```

Tests use in-memory host doubles and isolated VMs; no network access, no real accounts. Coverage: global default shared across new and existing sessions, cross-session disable sync, global library overriding legacy session copies, parent-route inheritance and out-of-pool model switching, search and provider grouping, pool-level effort following delegation and invalid-level rejection, and inheritance pass-through after resume/reload.

## License

MIT. The original copyright notice and license text of upstream author lez are retained; modifications in this fork are also released under MIT.
