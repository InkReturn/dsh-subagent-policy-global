/* Browser-only lazy module. No Harness Client package is a runtime dependency. */
window.__ModuleLoader__.load({
  id: '@local/dsh-subagent-policy-global',
  factory(require) {
    'use strict';
    const React = require('react');
    const { createElement: h, useCallback, useEffect, useId, useRef, useState } = React;
    const ID = '@local/dsh-subagent-policy-global';
    const KIND = 'lez-subagent-policy';
    const NS = 'lez.subagentPolicy';
    const en = {
      title: 'Global Subagent Model Policy', open: 'Open global subagent model policy', description: 'Global strategies, model pool and delegation limits shared by every session.',
      versionLabel: 'Package version: {version}', repoLink: 'GitHub', repoLinkLabel: 'GitHub repository: {repo} (opens in a new tab)',
      scope: 'Global', loading: 'Reading…', saving: 'Saving…', refreshing: 'Refreshing…', busy: 'Working…',
      refresh: 'Refresh server state', cancel: 'Cancel wait', retry: 'Try again', error: 'Request failed', serverError: 'The Host returned no result.',
      noModelsSelected: 'No models selected', badResponse: 'The Host returned an invalid policy snapshot.', missingCommand: 'The Host did not recognize /subagent-policy.', staleResponse: 'A response for a different session was rejected.',
      conflict: 'Version conflict', conflictHelp: 'The server has a newer revision. Your draft is preserved. Load the server version to continue.', loadServer: 'Load server version', mustRefresh: 'Refresh is required before another write.',
      readOnly: 'This session cannot edit the policy. The inherited snapshot is read-only.', noSession: 'Select a session to view its policy.', noSnapshot: 'No policy snapshot loaded.',
      navLabel: 'Policy management pages', pageSession: 'This session', pageStrategies: 'Global settings', pageModels: 'Model pool', pageRecords: 'Execution insights',
      sessionPickHint: 'Pick which strategy this session uses. To create, edit, delete strategies or set the global default, go to the strategy library.',
      sessionTitle: 'Strategy switch', policyLabelOn: 'Strategy switch: enabled', policyLabelOff: 'Strategy switch: not enabled',
      closedSummary: 'Not enabled; the Host default applies (usually follows the parent model).',
      activeLine: 'Enabled “{name}” · {type} · {target}', targetFixed: '{name}', targetAuto: '{count} candidates',
      strategies: 'Strategies', countSuffix: '{count} saved', newStrategy: 'New strategy', emptyStrategies: 'No strategies yet. Create one.',
      activeBadge: 'Currently enabled', defaultBadge: 'New-session default', defaultStaleBadge: 'New-session default (source not updated)', adjustBadge: 'Needs adjustment', stateOff: 'Not enabled',
      legacyBadge: 'Legacy follow (read-only)', legacyHint: 'This legacy strategy followed the parent model. Saving it as fixed or Agent-chosen converts it explicitly.',
      edit: 'Edit', editLabel: 'Edit strategy: {name}', enable: 'Enable', enableLabel: 'Enable strategy: {name}', disable: 'Disable', disableLabel: 'Disable strategy: {name}',
      setDefault: 'Set as global default', setDefaultLabel: 'Set as global default: {name}', delete: 'Delete', deleteLabel: 'Delete strategy: {name}',
      deleteActiveHint: 'Currently enabled; close it before deleting.', deleteDefaultHint: 'Source of the new-session default; change or clear the default before deleting.', needsAdjustHint: 'Referenced models are not in the session pool; adjust it before enabling.',
      newStrategyTitle: 'New strategy', editStrategyTitle: 'Edit strategy', back: '← Back to strategies', backModels: '← Back to models', unsavedBadge: 'Not saved', savedBadge: 'Saved',
      detailSubNew: 'Saving still does not enable it; after enabling, it takes effect on the next main-Agent model call.',
      detailSubSaved: 'Saving only updates the strategy library; after enabling, it takes effect on the next main-Agent model call.',
      detailSubActive: 'Currently enabled in this session; saving takes effect on the next main-Agent model call.',
      convertedHint: 'This legacy strategy followed the parent model. Saving as fixed or Agent-chosen is an explicit conversion.',
      nameLabel: 'Strategy name', namePlaceholder: 'e.g. Implementation default', typeLabel: 'Strategy type', typeFixed: 'Fixed model', typeAuto: 'Agent chooses',
      typeHintFixed: 'Delegations use only the selected model; no automatic replacement.', typeHintAuto: 'Pick candidates from the pool and describe the choice; no scoring or silent fallback.',
      fixedPanel: 'Fixed model', fixedHint: 'Choose one model from the saved session pool.', autoPanel: 'Candidate subset', autoHint: 'Pick candidates from the session pool; the agent decides only inside this subset.',
      noPoolFixed: 'The session pool is empty. Add and save models on the model pool page first.', noPoolAuto: 'The session pool is empty. Add and save models on the model pool page first.',
      textLabel: 'Selection note', textHint: 'The note only informs selection; it grants no new authorization.', textCount: '{count}/{max}',
      guideStruct: 'Structured rules', guideFree: 'Free text', guideFreeLabel: 'Note text',
      guideRulesHint: 'Rules match top-down; the first hit wins. Models inside a rule are tried in the listed order.',
      guideScenePlaceholder: 'Task scene, e.g. development / polishing', guidePickModel: '+ Pick models', guidePickerHint: 'Multi-select from the candidate subset; check order = priority.',
      guideAddRule: '+ Add rule', guideFallback: 'Fallback (no rule matches)', guidePreview: 'Injection preview', guidePreviewHint: 'This exact text is stored and injected as the selection note.',
      guideMoveUp: 'Move rule up', guideMoveDown: 'Move rule down', guideRemoveRule: 'Delete rule', guideRemoveModel: 'Remove model', guideOrder: 'Priority {order}',
      saveStrategy: 'Save strategy', discard: 'Discard changes', cancelEdit: 'Cancel',
      formError: 'Correct the marked fields before saving.', errNameEmpty: 'Enter a strategy name.', errNameLong: 'The strategy name is too long.', errNameDup: 'Another strategy already uses this name.',
      errFixed: 'Select one fixed model.', errModels: 'Select at least one candidate.', errText: 'The selection note is too long.',
      staleRef: 'Outside the pool', staleRefHint: 'The reference is kept; adjust it before enabling.',
      unavailableRef: 'Currently unavailable, usable again after recovery', unavailableGroupHint: 'The candidates below stay in the pool but are currently unavailable; they sit at the bottom of the list and return to their position after recovery.',
      pendingBadge: 'Recovering', pendingRecoveryHint: 'Referenced models are currently unavailable and usable again after recovery: {models}.',
      warningPendingRecovery: '“{name}” references currently unavailable models ({models}); it can be enabled after recovery. Not enabled; the references are kept.',
      modelsTitle: 'Model pool', modelsSub: 'Select the models allowed as strategy candidates across all sessions.', modelCount: '{count} candidates', modelCountUnavailable: '{count} candidates · {unavailable} unavailable',
      searchModels: 'Search models', searchModelsPlaceholder: 'Name, model id or provider', noModelMatches: 'No matching models',
      selectAll: 'Select all', clearAll: 'Clear all', selectedCount: 'Selected {count}', savedCount: 'Saved: {count} models',
      poolDirty: 'Unsaved model-pool changes; they take effect only after saving.', poolImpact: 'The pool matches the saved state.',
      poolImpactRemove: 'On save, remove: {items}.', poolImpactProtect: 'The currently enabled strategy references some removals; saving will be blocked.',
      poolImpactAdd: 'On save, add: {items}; no strategy is changed automatically.', poolError: 'The model pool was not saved.',
      poolBlockedActive: 'Cannot save: the currently enabled strategy “{name}” still references {models}. Adjust that reference, or close the strategy before removing them.',
      savePool: 'Save model pool', discardPool: 'Discard pool changes', emptyModels: 'No candidates are available in this session.',
      poolSync: 'Refresh candidates',
      poolSynced: 'Revalidated: {count} candidate(s) currently unavailable ({names}); they are kept at the bottom of the list and return to their position after recovery.', poolSyncedNone: 'Revalidated: all candidates are currently available.',
      unavailableKeptHint: 'Currently not authorized or unavailable; usable again after recovery.',
      poolToggleLabel: 'Model pool: {name}', poolToggleLabelStale: 'Model pool: {name} (currently unavailable)', abilityCard: 'Ability card', abilityCardLabel: 'Open ability card: {name} ({provider})', abilityTitle: 'Ability card',
      purposeLabel: 'Short description', noteLabel: 'General usage note', noPurpose: 'No purpose recorded',
      effortLabel: 'Reasoning effort', effortDefault: 'Model default', effortHint: 'Delegations that target this model use the configured effort unless the call states one explicitly.', effortInline: 'Delegation effort: {effort}',
      noteHintUseCase: 'Describe use cases and limits only; do not record prices or performance conclusions.',
      noteHintEffect: 'Saving the note only: it takes effect on the next main-Agent model call.',
      saveNote: 'Save note', discardNote: 'Discard note changes', noteSaved: 'Ability card saved; it takes effect on the next main-Agent model call.',
      reasoningLine: 'Reasoning levels: {names}', reasoningDefault: ' (default {name})', reasoningNone: 'Reasoning levels: —',
      unavailableHint: 'Currently not authorized or available; it cannot be added to the pool.',
      limitsTitle: 'Subagent concurrency and recursion', sharedBadge: 'Global',
      limitsSub: 'Shared by all sessions; an actual delegation must satisfy both the Host and global limits.',
      hostCeiling: 'Host ceilings: maximum recursion depth {depth}; concurrent subagents {active} (read from the Host).',
      hostCeilingUnknown: 'Host depth ceiling: {depth}. The Host concurrent-subagent ceiling cannot be read or verified right now.{reason} This plugin does not guess it; the Host still enforces its own capacity.',
      hostCeilingReason: ' Host reason: {reason}.',
      hostCapacityUnknown: 'The Host concurrent-subagent ceiling is currently unavailable. Until it can be read, saving session limits, enabling a strategy and saving an enabled strategy are blocked; read-only viewing, closing a strategy, saving a non-enabled strategy, and pool or note edits remain available.',
      hostCapacityReason: 'Host reason: {reason}',
      hostCapacityUnknownBlocked: 'The Host concurrent-subagent ceiling is currently unavailable, so this action is blocked. Refresh after the Host can report it; read-only viewing, closing, saving a non-enabled strategy, and pool or note edits remain available.',
      hostCapacityZero: 'The Host reports a concurrent-subagent ceiling of 0; a session limit cannot be saved until the Host reports a positive ceiling.',
      hostLimitBlocked: 'The saved session limits (depth {depth} · concurrency {active}) exceed the current Host ceiling (depth {ceilingDepth} · concurrency {ceilingActive}). Adjust and save the limits on the model pool page first.',
      maxDepth: 'Maximum recursion depth', maxActive: 'Concurrent subagents',
      depthHint: '0–{max}; 0 disables further delegation', depthHintHost: '0–{max} (Host value); 0 disables further delegation',
      activeHint: '1–{max} (Host ceiling {host})', activeHintHost: '1–{max} (Host value)', activeHintUnknown: 'Unavailable while the Host concurrent-subagent ceiling cannot be read.',
      savedLimits: 'Saved: depth {depth} · concurrency {active}', noSavedLimits: 'No session limits saved; no session limit is attached, and enabling does not require saving one.',
      effectiveActive: 'Upper bound while enabled: depth {depth} · concurrency {active} (session limit {local}; Host ceiling {host}).',
      effectiveUnknown: 'Upper bound while enabled: depth {depth} · concurrency {active}; the Host concurrent-subagent ceiling is currently unknown and cannot be verified. The Host still enforces its own capacity.',
      effectiveHostOnly: 'Active: no session limits attached; only the Host limits apply (depth {depth} · concurrency {active}).',
      effectiveHostOnlyUnknown: 'Active: no session limits attached; the Host concurrent-subagent ceiling is currently unavailable, and the Host still enforces its own capacity.',
      effectiveClosed: 'Currently closed: session limits do not intervene; only Host limits apply.', limitsDirty: 'Unsaved limit changes; they take effect only after saving.',
      saveLimits: 'Save session limits', discardLimits: 'Discard limit changes', limitError: 'Correct the marked limits before saving.',
      errDepth: 'Depth must be an integer from 0 through {max}.', errActive: 'Concurrent subagents must be an integer from 1 through {max}.',
      hostConflict: 'Saved session limits (depth {depth} · concurrency {active}) exceed the current Host ceiling (depth {ceilingDepth} · concurrency {ceilingActive}). New enable requests are rejected; enabled content is not stopped automatically. Adjust and save the limits on the model pool page.',
      hostConflictActive: ' Enabled content is not stopped or reverted automatically.',
      defaultTitle: 'Global default', defaultLabelOn: 'Global default: set', defaultLabelOff: 'Global default: not set',
      noDefault: 'Choose a strategy in the strategy pool.',
      defaultSummary: 'Set to “{name}” · {type}', defaultLimitsInline: ' · depth {depth} · concurrency {active}',
      defaultConflict: 'The limits stored with the default (depth {depth} · concurrency {active}) exceed the current Host ceiling (depth {ceilingDepth} · concurrency {ceilingActive}): adjust before use. The original values are kept and are not widened automatically.',
      defaultUnauthorized: 'The new-session default contains models the Host no longer authorizes: {models}. New sessions skip these models; the default itself is unchanged. Update or clear the default to remove this warning.',
      defaultUnavailable: 'The new-session default references models the Host currently reports as unavailable: {models}. Availability can change and does not block import; new sessions still import them and they can be used after recovery, and the default itself is unchanged.',
      defaultSkipped: 'This new session skipped {count} default model(s) the Host no longer authorizes: {models}. The default itself is unchanged.',
      defaultSkippedCovered: 'This new session skipped {count} default model(s) the Host no longer authorizes (listed under the new-session default above). The default itself is unchanged.',
      listSeparator: ', ',
      defaultLimitsUnknown: 'The stored concurrency limit cannot be verified while the Host concurrent-subagent ceiling is unavailable.',
      warningNoDefaultRestore: 'Choose a strategy card and click “Set as new-session default” first.',
      warningNoActiveRestore: 'Choose and enable a strategy in the strategy pool first.',
      warningNeedsAdjust: '“{name}” references models outside the session pool; edit the strategy before enabling it. Not enabled.',
      warningNoLegacy: 'Legacy follow strategies cannot be enabled here; save them as fixed or Agent-chosen.',
      recordsTitle: 'Execution insights', recordsSub: 'Real subagent creations recorded by this plugin; no sample tasks and no statistics.',
      manage: 'Manage', cardsHint: 'Click Edit to open the drawer; the switch enables or closes the strategy.',
      syncDefault: 'Sync now', defaultStaleHint: 'The default snapshot of “{name}” lags behind the saved strategy. Sync to regenerate the new-session default from the latest content.',
      allFilter: 'All', searchRecordsPlaceholder: 'Search task / strategy / model…', recordsCount: '{shown}/{total}',
      choiceExpand: 'Expand list', choiceCollapse: 'Collapse list', selectVisible: 'Select filtered',
      recordsHint: 'Records keep the strategy name from creation, even if the strategy is later renamed or deleted.',
      noRecords: 'No execution insights yet.', task: 'Task', status: 'Status', statusAdmitted: 'Admitted', statusStarted: 'Started', statusDisposed: 'Released',
      requested: 'Requested model', actual: 'Actual model', evidence: 'Evidence', recordedAt: 'Recorded at', noRequest: 'Not recorded', noActual: 'Not confirmed',
      evidencePending: 'pending (no response yet)', evidenceRequested: 'request/header (no response yet)', legacyStrategyName: 'Legacy session strategy', legacyFollowName: 'Legacy follow strategy',
      savedStrategy: 'Saved “{name}”. After enabling, it takes effect on the next main-Agent model call.', savedActive: 'Saved; it takes effect on the next main-Agent model call.',
      deletedNotice: 'Deleted “{name}”.',
      poolSaved: 'Model pool saved: {count} selected; it takes effect on the next main-Agent model call.',
      poolAffected: 'Models referenced by {names} are no longer in the session pool; adjust them before enabling.',
      poolNoChanges: 'No model-pool changes to save.',
      limitsSaved: 'Session limits saved: depth {depth} · concurrency {active}; it takes effect on the next main-Agent model call.',
      noChanges: 'No changes to save.', draftPreserved: 'Server state refreshed; unsaved drafts were preserved.', refreshed: 'Server state refreshed.', readCancelled: 'Reading cancelled; the panel will read again when reopened.',
      writeCancelled: 'Waiting cancelled; the Host may have applied the write. Refresh to confirm.',
      deleteConfirm: 'Delete “{name}”? This does not affect the current session.',
    };
    const zh = {
      title: '全局子智能体模型策略', open: '打开全局子智能体模型策略', description: '所有会话共用的策略、候选池与并发递归限制。',
      versionLabel: '包版本号：{version}', repoLink: 'GitHub', repoLinkLabel: 'GitHub 仓库：{repo}（在新标签页打开）',
      scope: '全局', loading: '正在读取…', saving: '正在保存…', refreshing: '正在刷新…', busy: '处理中…',
      refresh: '刷新服务端状态', cancel: '取消等待', retry: '重试读取', error: '请求失败', serverError: '宿主未返回结果。',
      noModelsSelected: '未选择模型', badResponse: '宿主返回的策略快照不符合约定。', missingCommand: '宿主未识别 /subagent-policy 命令。', staleResponse: '已拒绝属于其他会话的响应。',
      conflict: '版本冲突', conflictHelp: '服务端已有新版本，本地草稿已保留。载入服务端版本后可继续。', loadServer: '载入服务端版本', mustRefresh: '再次写入前需要先刷新确认。',
      readOnly: '当前会话无权编辑策略，继承的快照为只读。', noSession: '请选择会话后查看策略。', noSnapshot: '尚未读取策略快照。',
      navLabel: '策略管理页面', pageSession: '当前会话', pageStrategies: '全局设置', pageModels: '模型池', pageRecords: '执行洞察',
      sessionPickHint: '在这里选择本会话启用哪份策略；新增、编辑、删除策略和全局默认在「全局设置」页。',
      selectVisible: '选中当前筛选',
      sessionTitle: '策略开关', policyLabelOn: '策略开关：已启用', policyLabelOff: '策略开关：未启用',
      closedSummary: '未启用；按宿主默认（通常跟随父模型）。',
      activeLine: '已启用「{name}」· {type} · {target}', targetFixed: '{name}', targetAuto: '{count} 个候选',
      strategies: '策略池', countSuffix: '{count} 份', newStrategy: '新增策略', emptyStrategies: '暂无策略。可新增一份。',
      activeBadge: '当前启用', defaultBadge: '新会话默认', defaultStaleBadge: '新会话默认（来源未更新）', adjustBadge: '需调整', stateOff: '未启用',
      legacyBadge: '旧版跟随（只读）', legacyHint: '该旧版策略跟随父模型；保存为固定或 Agent 自选即为显式转换。',
      edit: '编辑', editLabel: '编辑策略：{name}', enable: '启用', enableLabel: '启用策略：{name}', disable: '停用', disableLabel: '停用策略：{name}',
      setDefault: '设为全局默认', setDefaultLabel: '设为全局默认：{name}', delete: '删除', deleteLabel: '删除策略：{name}',
      deleteActiveHint: '当前启用，删除前需先关闭。', deleteDefaultHint: '新会话默认来源，删除前需先更改或清除新会话默认。', needsAdjustHint: '引用的模型不在会话池，启用前需调整。',
      newStrategyTitle: '新增策略', editStrategyTitle: '编辑策略', back: '← 返回策略列表', backModels: '← 返回模型池', unsavedBadge: '未保存', savedBadge: '已保存',
      detailSubNew: '保存后仍不会自动启用；启用后，在下一次主 Agent 发起模型调用时生效。',
      detailSubSaved: '保存只更新策略库；启用后，在下一次主 Agent 发起模型调用时生效。',
      detailSubActive: '当前会话启用中；保存后，在下一次主 Agent 发起模型调用时生效。',
      convertedHint: '当前为旧版跟随策略；保存为固定或 Agent 自选会显式转换。',
      nameLabel: '策略名称', namePlaceholder: '例如：实现默认', typeLabel: '策略类型', typeFixed: '固定模型', typeAuto: 'Agent 自选',
      typeHintFixed: '委派时只使用选中的这一个模型，不做自动换选。', typeHintAuto: '从会话池勾选候选并写下选择说明；不做评分或静默回退。',
      fixedPanel: '固定模型', fixedHint: '从已保存的会话池中单选一个模型。', autoPanel: '候选子集', autoHint: '从会话池勾选候选；Agent 自选只在这个子集内决策。',
      noPoolFixed: '会话池为空，请先在「模型池」勾选并保存。', noPoolAuto: '会话池为空，请先在「模型池」勾选并保存。',
      textLabel: '选择说明', textHint: '说明只供决策参考，不扩大授权。', textCount: '{count}/{max}',
      guideStruct: '结构化规则', guideFree: '自由文本', guideFreeLabel: '说明文本',
      guideRulesHint: '规则从上到下匹配，命中即停；同一规则内按列出顺序优先。',
      guideScenePlaceholder: '任务场景，例如：开发 / 润色', guidePickModel: '＋ 选模型', guidePickerHint: '在候选子集内多选；勾选顺序 = 优先级顺序。',
      guideAddRule: '＋ 添加规则', guideFallback: '兜底（无规则命中时）', guidePreview: '注入预览', guidePreviewHint: '保存并注入给子会话的就是这段文本。',
      guideMoveUp: '上移规则', guideMoveDown: '下移规则', guideRemoveRule: '删除规则', guideRemoveModel: '移除模型', guideOrder: '优先 {order}',
      saveStrategy: '保存策略', discard: '放弃修改', cancelEdit: '取消',
      formError: '请修正标记的字段后再保存。', errNameEmpty: '请填写策略名称。', errNameLong: '策略名称过长。', errNameDup: '已有同名策略，请换一个名称。',
      errFixed: '请选择一个固定模型。', errModels: '至少勾选一个候选模型。', errText: '选择说明过长。',
      staleRef: '不在会话池', staleRefHint: '引用会保留；启用前需调整。',
      unavailableRef: '当前不可用，恢复后可启用', unavailableGroupHint: '以下候选仍在会话池中但当前不可用；已置于列表底部，恢复后自动回到原位。',
      pendingBadge: '待恢复', pendingRecoveryHint: '引用的模型当前不可用，恢复后可启用：{models}。',
      warningPendingRecovery: '「{name}」引用的模型当前不可用（{models}）；恢复后才能启用。未启用，引用保留。',
      modelsTitle: '模型池', modelsSub: '勾选所有会话允许作为子智能体策略候选的模型。', modelCount: '{count} 个候选', modelCountUnavailable: '{count} 个候选 · {unavailable} 个不可用',
      searchModels: '搜索模型', searchModelsPlaceholder: '名称、模型 id 或 provider', noModelMatches: '没有匹配的模型',
      selectAll: '全选', clearAll: '取消全选', selectedCount: '已选 {count} 个', savedCount: '已保存：{count} 个模型',
      poolDirty: '有未保存的模型池修改；保存前不生效。', poolImpact: '模型池与已保存一致。',
      poolImpactRemove: '保存后移除：{items}。', poolImpactProtect: '当前启用策略引用部分待移除模型，保存会被阻止。',
      poolImpactAdd: '保存后加入：{items}；不会自动加入任何策略。', poolError: '模型池未保存。',
      poolBlockedActive: '无法保存：当前启用策略「{name}」仍引用{models}。请先在策略中调整该引用，或关闭当前策略后再移除。',
      savePool: '保存模型池', discardPool: '放弃池修改', emptyModels: '当前会话没有可用候选。',
      poolSync: '刷新候选',
      poolSynced: '重新校验完成：{count} 个候选当前不可用（{names}）；已保留并置于列表底部，恢复后自动回到原位。', poolSyncedNone: '重新校验完成：全部候选当前可用。',
      unavailableKeptHint: '当前未获宿主授权或不可用；恢复后可启用。',
      poolToggleLabel: '模型池：{name}', poolToggleLabelStale: '模型池：{name}（当前不可用）', abilityCard: '能力卡', abilityCardLabel: '打开能力卡：{name}（{provider}）', abilityTitle: '能力卡',
      purposeLabel: '简短说明', noteLabel: '通用使用说明', noPurpose: '未填写用途',
      effortLabel: '思考强度', effortDefault: '沿用模型默认', effortHint: '委派到该模型时默认使用这里配置的等级；调用时显式指定则以其为准。', effortInline: '委派思考强度：{effort}',
      noteHintUseCase: '只写使用场景与限制，不记录价格或性能结论。',
      noteHintEffect: '仅保存说明：保存后，在下一次主 Agent 发起模型调用时生效。',
      saveNote: '保存说明', discardNote: '放弃说明修改', noteSaved: '已保存能力卡，下次发起模型调用时生效。',
      reasoningLine: '思考等级：{names}', reasoningDefault: '（默认 {name}）', reasoningNone: '思考等级：—',
      unavailableHint: '当前未获宿主授权或不可用，不能加入会话池。',
      limitsTitle: '子智能体并发与递归', sharedBadge: '全局共用',
      limitsSub: '所有会话共用；实际委派须同时满足宿主上限与全局限制。',
      hostCeiling: '宿主上限：最大递归深度 {depth}；并发子智能体数量 {active}（已从宿主读取）。',
      hostCeilingUnknown: '宿主深度上限：{depth}。当前无法读取或校验宿主并发子智能体数量上限。{reason}本插件不猜测该值，宿主仍独立执行自身容量限制。',
      hostCeilingReason: ' 原因：{reason}。',
      hostCapacityUnknown: '当前无法读取宿主并发子智能体数量上限。读取成功前，保存本会话限制、启用策略和保存启用中策略会被禁止；只读查看、关闭策略、保存非启用策略以及模型池或说明修改仍可使用。',
      hostCapacityReason: '宿主原因：{reason}',
      hostCapacityUnknownBlocked: '当前无法读取宿主并发子智能体数量上限，因此该操作被禁止。待宿主可报告后刷新；只读查看、关闭、保存非启用策略以及模型池或说明修改仍可使用。',
      hostCapacityZero: '宿主报告并发子智能体数量上限为 0；在宿主报告正数上限前，无法保存本会话限制。',
      hostLimitBlocked: '已保存的本会话限制（深度 {depth} · 并发 {active}）超出当前宿主上限（深度 {ceilingDepth} · 并发 {ceilingActive}）。请先到「模型池」调整并保存限制。',
      maxDepth: '最大递归深度', maxActive: '并发子智能体数量',
      depthHint: '0–{max}；0 表示不再向下委派', depthHintHost: '0–{max}（宿主值）；0 表示不再向下委派',
      activeHint: '1–{max}（宿主上限 {host}）', activeHintHost: '1–{max}（宿主值）', activeHintUnknown: '当前无法读取宿主并发子智能体数量上限，暂不能保存本会话限制。',
      savedLimits: '已保存：深度 {depth} · 并发 {active}', noSavedLimits: '尚未保存本会话限制；不附加本会话限制，启用时无需保存。',
      effectiveActive: '启用后有效上界：深度 {depth} · 并发 {active}（本会话限制 {local}；宿主上限 {host}）。',
      effectiveUnknown: '启用后有效上界：深度 {depth} · 并发 {active}；当前无法读取或校验宿主并发子智能体数量上限，宿主仍独立执行自身容量限制。',
      effectiveHostOnly: '生效中：未附加本会话限制，仅宿主限制生效（深度 {depth} · 并发 {active}）。',
      effectiveHostOnlyUnknown: '生效中：未附加本会话限制；当前无法读取宿主并发子智能体数量上限，宿主仍独立执行自身容量限制。',
      effectiveClosed: '当前未启用：本会话附加限制不介入，仅宿主限制生效。', limitsDirty: '有未保存的限制修改；保存前不生效。',
      saveLimits: '保存本会话限制', discardLimits: '放弃限制修改', limitError: '请修正标记的限制后再保存。',
      errDepth: '最大递归深度需为 0–{max} 的整数。', errActive: '并发子智能体数量需为 1–{max} 的整数。',
      hostConflict: '已保存的本会话限制（深度 {depth} · 并发 {active}）超出当前宿主上限（深度 {ceilingDepth} · 并发 {ceilingActive}）：新的启用会被拒绝；已启用内容不会自动停用。请到「模型池」调整并保存本会话限制。',
      hostConflictActive: ' 已启用内容不会因此被自动停用或回退。',
      defaultTitle: '全局默认', defaultLabelOn: '全局默认：已设置', defaultLabelOff: '全局默认：未设置',
      noDefault: '请在策略池中进行选择。',
      defaultSummary: '已设置「{name}」· {type}', defaultLimitsInline: ' · 深度 {depth} · 并发 {active}',
      defaultConflict: '默认内容保存的限制（深度 {depth} · 并发 {active}）超出当前宿主上限（深度 {ceilingDepth} · 并发 {ceilingActive}）：需调整后使用；原值保留，不会自动放宽。',
      defaultUnauthorized: '新会话默认包含宿主已不再授权的模型：{models}。新会话会跳过这些模型；默认内容保持不变。请更新或清除默认以消除提示。',
      defaultUnavailable: '新会话默认引用的模型当前不可用：{models}。可用性可能恢复，不阻止导入；新会话仍会导入这些模型，恢复后可启用，默认内容保持不变。',
      defaultSkipped: '本次新会话已跳过 {count} 个默认模型（宿主已不再授权）：{models}。默认内容保持不变。',
      defaultSkippedCovered: '本次新会话已跳过 {count} 个默认模型（宿主已不再授权，名称见上方新会话默认提示）。默认内容保持不变。',
      listSeparator: '、',
      defaultLimitsUnknown: '当前无法读取宿主并发子智能体数量上限，默认内容的并发限制无法校验。',
      warningNoDefaultRestore: '请先在策略卡片上点「设为新会话默认」。',
      warningNoActiveRestore: '请先在策略池选择一份策略并启用。',
      warningNeedsAdjust: '「{name}」引用了不在会话池的模型，需先编辑策略调整引用；未启用。',
      warningNoLegacy: '旧版跟随策略不能在此启用；请保存为固定或 Agent 自选。',
      recordsTitle: '执行洞察', recordsSub: '本插件记录的真实子智能体创建；不创建示例任务，不提供统计。',
      manage: '管理', cardsHint: '点「编辑」打开抽屉；右侧开关控制启用。',
      syncDefault: '一键同步', defaultStaleHint: '「{name}」的默认快照落后于策略当前版本；同步后按最新内容生成新会话默认。',
      allFilter: '全部', searchRecordsPlaceholder: '搜索任务 / 策略 / 模型…', recordsCount: '{shown}/{total} 条',
      choiceExpand: '展开候选列表', choiceCollapse: '收起候选列表',
      recordsHint: '记录保留创建时的策略名，之后重命名或删除策略不会改写历史。',
      noRecords: '暂无执行洞察。', task: '任务', status: '状态', statusAdmitted: '已准入', statusStarted: '执行中', statusDisposed: '已释放',
      requested: '请求模型', actual: '实际模型', evidence: '证据', recordedAt: '记录时间', noRequest: '未记录', noActual: '待确认',
      evidencePending: 'pending（尚无响应）', evidenceRequested: 'request/header（尚无响应）', legacyStrategyName: '旧版会话策略', legacyFollowName: '旧版跟随策略',
      savedStrategy: '已保存「{name}」。启用后，下次发起模型调用时生效。', savedActive: '已保存，下次发起模型调用时生效。',
      deletedNotice: '已删除「{name}」。',
      poolSaved: '已保存模型池：已选 {count} 个；下次发起模型调用时生效。',
      poolAffected: '{names}引用的模型已不在会话池，需调整后才能启用。',
      poolNoChanges: '没有需要保存的模型池修改。',
      limitsSaved: '已保存本会话限制：深度 {depth} · 并发 {active}；下次发起模型调用时生效。',
      noChanges: '没有需要保存的修改。', draftPreserved: '服务端状态已刷新，未保存草稿已保留。', refreshed: '服务端状态已刷新。', readCancelled: '已取消读取；重新打开面板时会再次读取。',
      writeCancelled: '已取消等待；宿主可能已经完成写入。再次保存前，请先刷新确认。',
      deleteConfirm: '删除「{name}」？不影响当前会话。',
    };
    const CSS = `
      .lezsp{box-sizing:border-box;width:100%;height:100%;min-width:0;overflow:auto;overflow-wrap:anywhere;padding:14px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-module-platform);font:inherit;font-size:13px;line-height:1.55}
      .lezsp *,.lezsp-header *{box-sizing:border-box}.lezsp [hidden]{display:none!important}
      .lezsp h1{font-size:17px;line-height:1.3;margin:0}.lezsp h2{font-size:16px;line-height:1.4;margin:0}.lezsp h3{font-size:13px;margin:0;font-weight:600}
      .lezsp p{margin:5px 0}.lezsp section{margin:12px 0}.lezsp small,.lezsp .lezsp-muted{color:var(--dsw-alias-label-tertiary);font-size:12px}
      .lezsp-sub{margin-top:2px;color:var(--dsw-alias-label-tertiary);font-size:12px}
      .lezsp-nav{display:flex;gap:3px;margin-top:12px;padding:3px;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}
      .lezsp-nav button{flex:1 1 0;min-width:0;padding:6px 3px;border:1px solid transparent;border-radius:7px;background:transparent;color:var(--dsw-alias-label-tertiary);font:inherit;font-size:12px;font-weight:600;cursor:pointer;white-space:normal;overflow-wrap:anywhere}
      .lezsp-nav button[aria-current="page"]{border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-label-primary)}
      .lezsp-status{margin:10px 0;padding:10px;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-layer-1);display:grid;gap:6px}
      .lezsp-pill{display:inline-flex;align-items:center;padding:2px 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:999px;font-size:11px;font-weight:700;white-space:nowrap}
      .lezsp-pill.on{border-color:var(--dsw-alias-brand-primary);background:var(--dsw-alias-brand-primary);color:var(--dsw-alias-bg-module-platform)}
      .lezsp-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;min-width:0}.lezsp-between{justify-content:space-between}.lezsp-stack{display:grid;gap:10px;min-width:0}
      .lezsp-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(140px,100%),1fr));gap:10px;min-width:0}
      .lezsp-card{padding:10px;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;min-width:0;background:var(--dsw-alias-bg-layer-1)}
      .lezsp-card.active{border-color:var(--dsw-alias-brand-primary)}
      .lezsp-badges{display:flex;flex-wrap:wrap;gap:4px}.lezsp-badge{padding:1px 6px;border:1px solid var(--dsw-alias-border-l2);border-radius:999px;font-size:11px;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-module-platform)}
      .lezsp-badge.on{border-color:var(--dsw-alias-brand-primary);background:var(--dsw-alias-brand-primary);color:var(--dsw-alias-bg-module-platform);font-weight:700}
      .lezsp-badge.warn{border-color:var(--dsw-alias-state-warn-primary,var(--dsw-alias-label-primary));color:var(--dsw-alias-state-warn-primary,var(--dsw-alias-label-primary));font-weight:700}
      .lezsp-meta{margin-top:3px;color:var(--dsw-alias-label-secondary);font-size:12px}.lezsp-meta strong{color:var(--dsw-alias-label-primary)}
      .lezsp-actions{display:flex;flex-wrap:wrap;gap:6px;margin-top:9px}
      .lezsp .lezsp-switch{position:relative;display:inline-flex;align-items:center;flex:none;cursor:pointer}
      .lezsp .lezsp-seg{display:flex;gap:4px;margin:0 0 10px;padding:3px;border:1px solid var(--dsw-alias-border-l2);border-radius:9px;background:var(--dsw-alias-bg-layer-1)}
      .lezsp .lezsp-seg button{flex:1 1 0;min-width:0;border:1px solid transparent;background:transparent;color:var(--dsw-alias-label-tertiary);font-weight:700}
      .lezsp .lezsp-seg button[aria-pressed="true"]{border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-label-primary)}
      .lezsp input.lezsp-switch-input[type=checkbox]{position:absolute;width:1px;height:1px;opacity:0;margin:0}
      .lezsp .lezsp-switch-track{position:relative;display:inline-block;width:34px;height:18px;border-radius:999px;background:var(--dsw-alias-border-l2);transition:background .15s}
      .lezsp .lezsp-switch-track::after{content:'';position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:var(--dsw-alias-bg-module-platform);box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
      .lezsp .lezsp-switch input:checked+.lezsp-switch-track{background:var(--dsw-alias-brand-primary)}
      .lezsp .lezsp-switch input:checked+.lezsp-switch-track::after{transform:translateX(16px)}
      .lezsp .lezsp-switch input:focus-visible+.lezsp-switch-track{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
      .lezsp .lezsp-card-head{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 6px;margin:0}
      .lezsp .lezsp-card-name{font-size:14px;font-weight:700;line-height:1.4}
      .lezsp .lezsp-card-models{margin:4px 0 0;color:var(--dsw-alias-label-tertiary);font-size:11px}
      .lezsp .lezsp-card-model-line{display:block}
      .lezsp .lezsp-state{color:var(--dsw-alias-label-tertiary);font-size:12px}
      .lezsp .lezsp-state.on{color:var(--dsw-alias-brand-primary);font-weight:700}
      .lezsp .lezsp-state.warn{color:var(--dsw-alias-state-warn-primary,var(--dsw-alias-label-primary));font-weight:700}
      .lezsp .lezsp-detail-meta{margin-left:6px;color:var(--dsw-alias-label-tertiary);font-size:12px;font-weight:400}
      .lezsp button,.lezsp-header button{font:inherit;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;padding:6px 10px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);cursor:pointer;white-space:normal;overflow-wrap:anywhere}
      .lezsp button:hover:not(:disabled),.lezsp-header button:hover:not(:disabled){background:var(--dsw-alias-bg-layer-3)}
      .lezsp button:disabled{opacity:.55;cursor:not-allowed}.lezsp .lezsp-primary{border-color:var(--dsw-alias-brand-primary);background:var(--dsw-alias-brand-primary);color:var(--dsw-alias-bg-module-platform);font-weight:700}
      .lezsp .lezsp-small{padding:4px 8px;font-size:11px}
      .lezsp .lezsp-link{padding:2px 0;border:0;background:transparent;color:var(--dsw-alias-brand-primary);font-weight:600;text-decoration:underline;text-underline-offset:2px}
      .lezsp :is(button,input,textarea,select,summary):focus-visible,.lezsp-header button:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
      .lezsp h1:focus-visible,.lezsp h2:focus-visible,.lezsp h3:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
      .lezsp fieldset{padding:9px 10px;margin:0 0 11px;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;min-width:0}.lezsp legend{padding:0 4px;font-size:12px;font-weight:700}
      .lezsp-field{display:grid;gap:4px;margin:0 0 11px;min-width:0}.lezsp-field>span:first-child{font-size:12px;font-weight:700}
      .lezsp input:not([type=checkbox]):not([type=radio]),.lezsp select,.lezsp textarea{width:100%;min-width:0;max-width:100%;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;padding:7px 9px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;line-height:1.5}
      .lezsp textarea{resize:vertical;min-height:62px;overflow-wrap:anywhere}
      .lezsp input[type=checkbox],.lezsp input[type=radio]{width:16px;height:16px;flex:none;margin:2px 0;accent-color:var(--dsw-alias-brand-primary)}
      .lezsp :is(input,textarea,select,fieldset)[aria-invalid="true"]{border-color:var(--dsw-alias-state-error-primary)}
      .lezsp .lezsp-error{color:var(--dsw-alias-state-error-primary);font-size:11px;font-weight:700}
      .lezsp .lezsp-warn{color:var(--dsw-alias-state-warn-primary,var(--dsw-alias-label-primary));font-size:11px;font-weight:700}
      .lezsp .lezsp-banner{margin:9px 0;padding:8px 10px;border:1px solid var(--dsw-alias-border-l2);border-left:4px solid var(--dsw-alias-brand-primary);border-radius:8px;background:var(--dsw-alias-bg-layer-1);min-width:0}
      .lezsp .lezsp-banner.warn{border-left-color:var(--dsw-alias-state-warn-primary,var(--dsw-alias-label-primary))}
      .lezsp .lezsp-banner.err{border-left-color:var(--dsw-alias-state-error-primary);color:var(--dsw-alias-state-error-primary)}
      .lezsp .lezsp-fold{padding:9px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-layer-1);min-width:0}
      .lezsp .lezsp-fold>summary{cursor:pointer;font-size:12px;font-weight:700}.lezsp .lezsp-fold>div,.lezsp .lezsp-fold>dl{margin-top:8px}
      .lezsp dl{display:grid;grid-template-columns:minmax(76px,auto) minmax(0,1fr);gap:3px 10px;margin:8px 0}.lezsp dt{color:var(--dsw-alias-label-tertiary)}.lezsp dd{margin:0;min-width:0;overflow-wrap:anywhere}
      .lezsp ul,.lezsp ol{padding-left:20px;margin:6px 0}.lezsp .lezsp-route{font-family:ui-monospace,monospace;font-size:11px;color:var(--dsw-alias-label-secondary);overflow-wrap:anywhere}
      .lezsp pre{max-width:100%;white-space:pre-wrap;overflow-wrap:anywhere;font:inherit;font-family:ui-monospace,monospace;font-size:11px;margin:8px 0}
      .lezsp .lezsp-model-choice{display:grid;grid-template-columns:auto minmax(0,1fr);gap:8px;align-items:start;padding:7px 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-module-platform);cursor:pointer;min-width:0}
      .lezsp .lezsp-model-choice.checked{border-color:var(--dsw-alias-brand-primary);background:var(--dsw-alias-interactive-bg-hover)}
      .lezsp .lezsp-model-choice.stale{border-color:var(--dsw-alias-state-warn-primary,var(--dsw-alias-label-primary))}
      .lezsp .lezsp-choice-body{display:grid;gap:1px;min-width:0}.lezsp .lezsp-choice-name{font-size:12px;font-weight:700}
      .lezsp .lezsp-pool-item{display:grid;gap:6px;min-width:0}
      .lezsp .lezsp-pool-row{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;gap:8px;align-items:start;padding:8px 9px;border:1px solid var(--dsw-alias-border-l2);border-radius:9px;background:var(--dsw-alias-bg-layer-1);min-width:0}
      .lezsp select.lezsp-effort{width:auto;min-width:104px;max-width:150px;padding:4px 6px;font-size:12px}
      .lezsp .lezsp-pool-row.stale{border-color:var(--dsw-alias-state-warn-primary,var(--dsw-alias-label-primary))}
      .lezsp .lezsp-provider-group{display:grid;gap:8px;margin:10px 0}
      .lezsp .lezsp-provider-title{display:flex;align-items:center;gap:8px;color:var(--dsw-alias-label-secondary);font-size:12px}
      .lezsp .lezsp-empty{padding:14px;border:1px dashed var(--dsw-alias-border-l2);border-radius:10px;color:var(--dsw-alias-label-tertiary);font-size:12px;text-align:center}
      .lezsp .lezsp-record{border:1px solid var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-layer-1);min-width:0}
      .lezsp .lezsp-record summary{padding:9px 10px;cursor:pointer;list-style-position:inside}.lezsp .lezsp-record-body{padding:0 10px 10px;border-top:1px solid var(--dsw-alias-border-l2)}
      .lezsp .lezsp-record-head{display:flex;flex-wrap:wrap;gap:3px 8px;align-items:baseline}.lezsp .lezsp-time{color:var(--dsw-alias-label-tertiary);font-size:11px;font-variant-numeric:tabular-nums}
      .lezsp .lezsp-status-tag{padding:0 6px;border:1px solid currentColor;border-radius:999px;font-size:11px;font-weight:700;white-space:nowrap;color:var(--dsw-alias-label-secondary)}
      .lezsp .lezsp-form-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;padding-top:10px;border-top:1px solid var(--dsw-alias-border-l2)}
      .lezsp .lezsp-section-head{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;margin:14px 0 8px}
      .lezsp .lezsp-count{color:var(--dsw-alias-label-tertiary);font-weight:400;font-size:12px}
      .lezsp .lezsp-detail-title{margin-top:8px;font-size:16px;line-height:1.35}.lezsp .lezsp-note{margin:9px 0;padding:8px 10px;border:1px solid var(--dsw-alias-border-l2);border-left:4px solid var(--dsw-alias-brand-primary);border-radius:8px;background:var(--dsw-alias-bg-layer-1);font-size:12px}
      .lezsp .lezsp-note.warn{border-left-color:var(--dsw-alias-state-warn-primary,var(--dsw-alias-label-primary))}
      .lezsp .lezsp-session-chip{display:inline-flex;align-items:center;padding:2px 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:999px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-tertiary);font-size:11px;font-weight:600;white-space:nowrap}
      .lezsp .lezsp-title-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:4px 8px;min-width:0}
      .lezsp .lezsp-title-row h1{min-width:0}
      .lezsp .lezsp-head-meta{display:flex;flex-wrap:wrap;align-items:center;gap:6px;min-width:0}
      .lezsp .lezsp-version-badge{color:var(--dsw-alias-label-primary);font-variant-numeric:tabular-nums;font-weight:700}
      .lezsp .lezsp-repo-link{color:var(--dsw-alias-brand-primary);font-size:12px;font-weight:600;text-decoration:underline;text-underline-offset:2px;white-space:nowrap}
      .lezsp .lezsp-repo-link:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
      .lezsp-header{display:inline-flex;gap:4px;align-items:center;min-width:0}.lezsp-header button{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:4px;border:0;background:transparent;color:var(--dsw-alias-label-secondary)}
      .lezsp .lezsp-status-divider{margin-top:8px;padding-top:10px;border-top:1px solid var(--dsw-alias-border-l2)}
      .lezsp .lezsp-guide-rule{display:grid;gap:8px;margin:0 0 10px;padding:9px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}
      .lezsp .lezsp-guide-chips{margin-top:2px}
      .lezsp .lezsp-chip{display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:999px;background:var(--dsw-alias-bg-module-platform);font-family:ui-monospace,monospace;font-size:11px;color:var(--dsw-alias-label-secondary)}
      .lezsp .lezsp-chip-x{padding:0 2px;border:0;background:transparent;color:var(--dsw-alias-state-error-primary);font-size:11px;line-height:1}
      .lezsp .lezsp-guide-picker{margin:4px 0 2px;padding:9px 10px;border:1px dashed var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-module-platform)}
      .lezsp .lezsp-statusbar{display:flex;flex-wrap:wrap;gap:12px 20px;align-items:flex-start;margin:10px 0;padding:12px 14px;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}
      .lezsp .lezsp-sb-item{display:grid;gap:4px;min-width:0}
      .lezsp .lezsp-sb-item+.lezsp-sb-item{padding-left:20px;border-left:1px solid var(--dsw-alias-border-l2)}
      .lezsp .lezsp-sb-label{color:var(--dsw-alias-label-tertiary);font-size:11px;font-weight:700;letter-spacing:.3px}
      .lezsp .lezsp-sb-value{display:flex;flex-wrap:wrap;align-items:center;gap:8px;font-size:13px;font-weight:600}
      .lezsp .lezsp-sb-action{margin-left:auto}
      .lezsp .lezsp-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr));gap:12px}
      .lezsp .lezsp-chip-group{display:flex;flex-wrap:wrap;gap:4px;margin-top:8px}
      .lezsp .lezsp-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:40}
      .lezsp .lezsp-drawer{position:fixed;top:0;right:0;bottom:0;width:min(620px,94vw);z-index:41;overflow:auto;padding:16px 18px;border-left:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-module-platform);box-shadow:-16px 0 40px rgba(0,0,0,.35)}
      .lezsp .lezsp-drawer-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px}
      .lezsp .lezsp-filter-row{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:8px 0}
      .lezsp .lezsp-filter-row button[aria-pressed="true"]{border-color:var(--dsw-alias-brand-primary);color:var(--dsw-alias-brand-primary);font-weight:700}
      .lezsp .lezsp-dirtybar{position:sticky;bottom:10px;z-index:5;display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-top:12px;padding:10px 12px;border:1px solid var(--dsw-alias-brand-primary);border-radius:10px;background:var(--dsw-alias-bg-layer-3);box-shadow:0 8px 24px rgba(0,0,0,.35);font-size:12px}
      @media(max-width:420px){.lezsp{padding:10px}.lezsp-nav button{font-size:11px}.lezsp dl{grid-template-columns:1fr;gap:1px}.lezsp dd{margin-bottom:6px}.lezsp-pool-row{grid-template-columns:auto minmax(0,1fr)}}
    `;

    // @lez-pure-start
    const keyOf = (route) => JSON.stringify([route && route.provider, route && route.model]);
    const routeLabel = (route) => route && route.provider && route.model ? route.provider + '/' + route.model : '';
    // Host issue lists ({provider, model, name?}) are optional and may be absent on
    // older Hosts; malformed entries are ignored so a bad row cannot break a render.
    function routeName(route) {
      if (!route || typeof route.provider !== 'string' || typeof route.model !== 'string') return '';
      const name = typeof route.name === 'string' ? route.name.trim() : '';
      if (name) return route.provider ? `${name} (${route.provider})` : name;
      return routeLabel(route);
    }
    function routeList(routes, separator = ', ') {
      const seen = new Set();
      const names = [];
      for (const route of Array.isArray(routes) ? routes : []) {
        if (!route || typeof route.provider !== 'string' || typeof route.model !== 'string') continue;
        const key = keyOf(route);
        if (seen.has(key)) continue;
        seen.add(key);
        const name = routeName(route);
        if (name) names.push(name);
      }
      return names.join(separator);
    }
    function conflictRoutes(defaultSetting) {
      const conflict = defaultSetting && defaultSetting.modelConflict;
      const pick = (value) => (Array.isArray(value) ? value : []).filter((route) => route && typeof route.provider === 'string' && typeof route.model === 'string');
      return conflict && typeof conflict === 'object'
        ? {unauthorized: pick(conflict.unauthorized), unavailable: pick(conflict.unavailable)}
        : {unauthorized: [], unavailable: []};
    }
    function skippedRoutes(management) {
      const skipped = management && management.initialized && management.initialized.skipped;
      return (Array.isArray(skipped) ? skipped : []).filter((route) => route && typeof route.provider === 'string' && typeof route.model === 'string');
    }
    const sameRoute = (left, right) => !!left && !!right && left.provider === right.provider && left.model === right.model;
    const sameRouteSet = (left, right) => {
      const a = left instanceof Set ? left : new Set(left || []);
      const b = right instanceof Set ? right : new Set(right || []);
      if (a.size !== b.size) return false;
      for (const key of a) if (!b.has(key)) return false;
      return true;
    };
    const isStale = (generation, serial, alive) => !alive || generation !== serial;
    const PLUGIN_MAX_ACTIVE = 32;
    function hostCapacity(host) {
      const raw = host && Number.isSafeInteger(host.maxActive) ? host.maxActive : null;
      const known = Boolean(host && host.maxActiveKnown === true && raw !== null && raw >= 0);
      const reason = host && typeof host.maxActiveReason === 'string' ? host.maxActiveReason.trim() : '';
      const ceiling = known ? Math.min(PLUGIN_MAX_ACTIVE, raw) : PLUGIN_MAX_ACTIVE;
      return {known, raw: known ? raw : null, ceiling, reason, canSave: known && ceiling >= 1};
    }
    // A session without saved limits starts from the Host value it inherits; the
    // same effective ceiling bounds the input and the save validation.
    function hostLimitDefaults(host) {
      return {maxDepth: String(host && Number.isSafeInteger(host.maxDepth) ? host.maxDepth : 0), maxActive: String(hostCapacity(host).ceiling)};
    }
    function repoName(url) {
      const match = typeof url === 'string' ? url.match(/^https:\/\/github\.com\/([^/?#]+)\/([^/?#]+?)\/?$/) : null;
      return match ? `${match[1]}/${match[2]}` : '';
    }
    function strategyDraftOf(strategy) {
      const type = strategy ? (strategy.type === 'inherit' ? 'fixed' : strategy.type) : 'fixed';
      const allModels = new Set((strategy && strategy.models || []).map(keyOf));
      const fixedRoute = strategy && strategy.type === 'fixed' ? keyOf({ provider: strategy.fixedProvider, model: strategy.fixedModel }) : (allModels.size ? [...allModels][0] : '');
      const models = type === 'fixed' ? new Set(fixedRoute ? [fixedRoute] : []) : allModels;
      const strategyText = strategy && strategy.strategyText ? strategy.strategyText : '';
      const parsedGuide = parseGuideText(strategyText);
      return { id: strategy && strategy.id ? strategy.id : null, name: strategy && strategy.name ? strategy.name : '', type, models, fixedRoute, strategyText,
        guideMode: parsedGuide ? 'rules' : 'free',
        guideRules: parsedGuide ? parsedGuide.rules : [],
        guideFallback: parsedGuide ? parsedGuide.fallback : '',
        dirty: false, legacy: Boolean(strategy && strategy.type === 'inherit'), converting: Boolean(strategy && strategy.type === 'inherit') };
    }
    // 结构化选择说明直接编译进 strategyText：存储 schema 与宿主注入逻辑不变，
    // 同一文本既能被 Agent 阅读，也能被编辑器完整解析回规则表单。
    const GUIDE_BEGIN = '【选择规则 v1】';
    const GUIDE_END = '【/选择规则】';
    /**
     * 清理规则片段中的换行与结构字符，避免用户输入破坏可解析格式。
     *
     * @param {unknown} value 场景或兜底说明的原始输入。
     * @returns {string} 单行、不含结构标记的文本。
     */
    function sanitizeGuidePart(value) {
      return String(value ?? '').replace(/[\r\n]+/g, ' ').replace(/[→【】]/g, '').trim();
    }
    /**
     * 把结构化规则编译为注入用的选择说明文本。
     *
     * @param {Array<{scene:string, models:Array<{provider:string, model:string}>}>} rules 有序规则；模型数组顺序即优先级。
     * @param {string} fallback 无规则命中时的兜底说明。
     * @returns {string} 带 GUIDE_BEGIN/END 标记、可解析的完整说明文本。
     */
    function composeGuideText(rules, fallback) {
      // 1. 逐条规则生成「序号. 场景 → provider/model > provider/model」。
      const lines = (rules || []).map((rule, index) => {
        const scene = sanitizeGuidePart(rule.scene) || '未命名场景';
        const routes = (rule.models || []).map((route) => `${route.provider}/${route.model}`);
        return `${index + 1}. ${scene} → ${routes.join(' > ')}`;
      });
      // 2. 兜底说明为空时给出明确默认语义，不让 Agent 猜测。
      const tail = sanitizeGuidePart(fallback) || '无规则命中时在候选子集内自行决策。';
      // 3. 包裹结构标记后返回，解析端依赖标记识别结构化文本。
      return [GUIDE_BEGIN, '按顺序匹配任务场景；命中后优先使用「>」左侧模型，均不可用时在候选子集内自行决策。', ...lines, `兜底：${tail}`, GUIDE_END].join('\n');
    }
    /**
     * 解析 composeGuideText 生成的说明文本；非结构化文本返回 null（走自由文本编辑）。
     *
     * @param {unknown} text 策略里保存的 strategyText。
     * @returns {{rules:Array<{scene:string, models:Array<{provider:string, model:string}>}>, fallback:string}|null} 解析结果或 null。
     */
    function parseGuideText(text) {
      // 1. 只接受完整由编译器生成的文本，混排内容一律回退自由文本。
      if (typeof text !== 'string' || !text.startsWith(GUIDE_BEGIN)) return null;
      const end = text.indexOf(GUIDE_END);
      if (end < 0) return null;
      const lines = text.slice(GUIDE_BEGIN.length, end).split('\n').map((line) => line.trim()).filter(Boolean);
      const rules = [];
      let fallback = '';
      // 2. 逐行解析：固定说明行跳过，兜底行与规则行分别提取。
      for (const line of lines) {
        if (line.startsWith('按顺序匹配')) continue;
        const fb = line.match(/^兜底：(.*)$/);
        if (fb) { fallback = fb[1]; continue; }
        const match = line.match(/^(\d+)\. (.*?) → (.+)$/);
        if (!match) return null;
        // 2.1 路由按「 > 」拆成有序数组，第一个 / 之前是 provider。
        const models = match[3].split(' > ').map((pair) => {
          const slash = pair.indexOf('/');
          return slash > 0 ? { provider: pair.slice(0, slash), model: pair.slice(slash + 1) } : null;
        });
        if (!models.length || models.some((route) => !route || !route.provider || !route.model)) return null;
        rules.push({ scene: match[2], models });
      }
      return { rules, fallback };
    }
    function assertSnapshotShape(snap, sessionId) {      if (!snap || typeof snap !== 'object' || snap.sessionId !== sessionId) {
        const error = new Error(snap && snap.sessionId ? 'stale-session' : 'bad-snapshot');
        error.code = snap && snap.sessionId ? 'staleResponse' : 'badResponse';
        throw error;
      }
      const whole = (value) => Number.isSafeInteger(value) && value >= 0;
      // Reasoning metadata is optional so older Host snapshots stay readable.
      const validReasoning = (value) => value === undefined || value === null || (
        typeof value === 'object' && Array.isArray(value.efforts)
        && (value.defaultEffort === undefined || typeof value.defaultEffort === 'string')
        && value.efforts.every((effort) => effort && typeof effort.id === 'string' && typeof effort.name === 'string'));
      // Newer Hosts add {provider, model, name?} issue rows and a reason string on
      // skipped rows. Both fields stay optional so older Host snapshots remain valid.
      const validIssue = (value, withReason) => Boolean(value) && typeof value === 'object' && !Array.isArray(value)
        && typeof value.provider === 'string' && value.provider.length > 0
        && typeof value.model === 'string' && value.model.length > 0
        && (value.name === undefined || value.name === null || typeof value.name === 'string')
        && (!withReason || value.reason === undefined || value.reason === null || typeof value.reason === 'string');
      const validIssues = (value, withReason) => value === undefined || value === null
        || (Array.isArray(value) && value.every((entry) => validIssue(entry, withReason)));
      if (!whole(snap.revision) || typeof snap.canEdit !== 'boolean' || typeof snap.preview !== 'string') throw new Error('bad-snapshot');
      // Package metadata is additive: older Host snapshots omit it entirely.
      if (snap.version !== undefined && typeof snap.version !== 'string') throw new Error('bad-snapshot');
      if (snap.repository !== undefined && (typeof snap.repository !== 'string' || !/^https:\/\//.test(snap.repository))) throw new Error('bad-snapshot');
      const policy = snap.policy;
      if (!policy || typeof policy.enabled !== 'boolean' || !['inherit', 'fixed', 'auto'].includes(policy.mode) || !Array.isArray(policy.models)) throw new Error('bad-snapshot');
      const management = snap.management;
      if (!management || typeof management !== 'object' || !Array.isArray(management.strategies) || !Array.isArray(management.pool)) throw new Error('bad-snapshot');
      if (management.initialized !== undefined && management.initialized !== null) {
        if (typeof management.initialized !== 'object' || Array.isArray(management.initialized)
          || !validIssues(management.initialized.skipped, true)) throw new Error('bad-snapshot');
      }
      for (const strategy of management.strategies) {
        if (!strategy || typeof strategy.id !== 'string' || typeof strategy.name !== 'string'
          || !['fixed', 'auto', 'inherit'].includes(strategy.type) || !Number.isSafeInteger(strategy.version)
          || !Array.isArray(strategy.models) || !strategy.models.every((route) => route && typeof route.provider === 'string' && typeof route.model === 'string')) throw new Error('bad-snapshot');
      }
      if (management.limits !== null && management.limits !== undefined) {
        if (!whole(management.limits.maxDepth) || !Number.isSafeInteger(management.limits.maxActive)) throw new Error('bad-snapshot');
      }
      if (management.active !== null && management.active !== undefined) {
        const active = management.active;
        if (!active || typeof active.strategyId !== 'string' || !active.snapshot || !Array.isArray(active.snapshot.models)) throw new Error('bad-snapshot');
      }
      const fallback = snap.defaultSetting;
      if (!fallback || !whole(fallback.revision) || !(fallback.snapshot === null || typeof fallback.snapshot === 'object')) throw new Error('bad-snapshot');
      if (fallback.modelConflict !== undefined && fallback.modelConflict !== null) {
        const modelConflict = fallback.modelConflict;
        if (typeof modelConflict !== 'object' || Array.isArray(modelConflict)
          || !validIssues(modelConflict.unauthorized, false) || !validIssues(modelConflict.unavailable, false)) throw new Error('bad-snapshot');
      }
      if (fallback.snapshot) {
        if (typeof fallback.snapshot.name !== 'string' || !['fixed', 'auto'].includes(fallback.snapshot.type) || !Array.isArray(fallback.snapshot.models)) throw new Error('bad-snapshot');
      }
      if (!snap.host || !whole(snap.host.maxDepth) || !(snap.host.maxActive === null || Number.isSafeInteger(snap.host.maxActive)) || typeof snap.host.maxActiveKnown !== 'boolean') throw new Error('bad-snapshot');
      if (snap.host.maxActiveKnown ? !Number.isSafeInteger(snap.host.maxActive) : snap.host.maxActive !== null) throw new Error('bad-snapshot');
      if (snap.host.maxActiveReason !== undefined && snap.host.maxActiveReason !== null && typeof snap.host.maxActiveReason !== 'string') throw new Error('bad-snapshot');
      if (!Array.isArray(snap.candidates) || !Array.isArray(snap.runs) || !Array.isArray(snap.diagnostics) || !Array.isArray(snap.coverage)) throw new Error('bad-snapshot');
      for (const item of snap.candidates) {
        if (!item || typeof item.provider !== 'string' || typeof item.model !== 'string' || typeof item.authorized !== 'boolean' || typeof item.available !== 'boolean' || !validReasoning(item.reasoning)) throw new Error('bad-snapshot');
      }
      return snap;
    }
    // @lez-pure-end

    /**
     * 按 provider 对模型行做稳定分组，保持宿主原有排序和各组内可用性顺序。
     *
     * @param {Array<object>} rows 待分组的模型或选择项，每项必须含 provider 字段。
     * @returns {Map<string, Array<object>>} 按 provider 首次出现顺序排列的分组 Map。
     */
    function groupByProvider(rows) {
      const groups = new Map();
      // 1. 按原始顺序遍历，不向排序结果引入模型名称偏好。
      for (const row of rows) {
        // 2. 同一 provider 归入一组，未提供时归入空字符串组，避免丢弃数据。
        const provider = row.provider || '';
        if (!groups.has(provider)) groups.set(provider, []);
        groups.get(provider).push(row);
      }
      return groups;
    }

    /**
     * 判断模型是否匹配搜索词，搜索范围同时包含显示名、模型 id 和 provider。
     *
     * @param {object} row 模型行，name 可为空，model/provider 来自宿主路由。
     * @param {string} query 用户输入的原始搜索词，大小写不敏感，首尾空格忽略。
     * @returns {boolean} 空搜索词返回 true，否则返回是否包含任一字段。
     */
    function matchesModelQuery(row, query) {
      // 1. 规范化搜索词，避免大小写和无意义空格影响结果。
      const normalized = String(query || '').trim().toLowerCase();
      if (!normalized) return true;
      // 2. 拼接三个可检索字段，空值退化为空字符串。
      return `${row.name || ''}\n${row.model || ''}\n${row.provider || ''}`.toLowerCase().includes(normalized);
    }

    function PolicyIcon({ size = 20 } = {}) {
      return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
        h('rect', { x: 8.3, y: 2, width: 7.4, height: 6.5, rx: 1.3 }),
        h('path', { d: 'M9.8 1v1m4.4-1v1M9.8 8.5v1m4.4-1v1M12 9.5v1.2' }),
        h('rect', { x: 5.4, y: 11.5, width: 13.2, height: 9.3, rx: 2.6 }),
        h('path', { d: 'M9.5 15.7v.4m5-.4v.4' }));
    }

    return {
      inject: ['slots', 'locale', 'remote', 'remote.commands', 'sidebarRight', 'sidebarRightTabs'],
      apply(ctx) {
        const translate = ctx.locale.bind(NS);
        ctx.effect(() => ctx.locale.register(NS, { zh, en }), `${ID}: dictionaries`);
        const fmt = (text, values = {}) => String(text).replace(/\{(\w+)\}/g, (match, key) => values[key] === undefined ? match : String(values[key]));

        function PolicySession({ sessionId, t, visible, tabSignal }) {
          const prefix = useId();
          const [ui, setUi] = useState({ snap: null, page: 'session', detail: null, poolDraft: null, limitDraft: null, strategyDraft: null, modelDraft: null, poolQuery: '', choiceQuery: '', guidePicker: -1, guideQuery: '', recordQuery: '', recordProvider: '', choiceOpen: false, busy: null, error: null, notice: null, noticeKind: '', conflict: false, mustRefresh: false, lastActiveId: null, lastDefault: null });
          const uiRef = useRef(ui);
          const operation = useRef(null);
          const serial = useRef(0);
          const alive = useRef(false);
          const attempted = useRef(false);
          const wasVisible = useRef(visible);
          const commit = useCallback((update) => {
            const next = typeof update === 'function' ? update(uiRef.current) : update;
            uiRef.current = next;
            setUi(next);
          }, []);
          const focusEl = (element) => { if (element && typeof element.focus === 'function') { try { element.focus({ preventScroll: true }); } catch { element.focus(); } } };
          const idFor = (name) => `${prefix}-${name}`;

          useEffect(() => {
            alive.current = true;
            const stop = () => {
              const active = operation.current;
              serial.current += 1;
              active?.controller.abort();
              operation.current = null;
              if (!uiRef.current.snap) attempted.current = false;
              // An abort rejects the pending request, so its catch returns without
              // clearing busy: release the gate here or the panel stays disabled.
              if (active && alive.current) {
                commit((state) => ({
                  ...state,
                  busy: null,
                  mustRefresh: state.mustRefresh || active.kind !== 'read',
                  notice: t(active.kind === 'read' ? 'readCancelled' : 'writeCancelled'),
                  noticeKind: '',
                }));
              }
            };
            tabSignal?.addEventListener('abort', stop, { once: true });
            return () => {
              alive.current = false;
              stop();
              tabSignal?.removeEventListener('abort', stop);
            };
          }, [tabSignal]);

          const draftsFrom = useCallback((snap) => {
            if (!snap) return { poolDraft: null, limitDraft: null, strategyDraft: null, modelDraft: null, detail: null };
            const entries = new Map(snap.management.pool.map((entry) => [keyOf(entry), { provider: entry.provider, model: entry.model, purpose: entry.purpose || '', note: entry.note || '' }]));
            const limits = snap.management.limits;
            return {
              poolDraft: { keys: new Set(entries.keys()), entries },
              limitDraft: limits ? { maxDepth: String(limits.maxDepth), maxActive: String(limits.maxActive) } : hostLimitDefaults(snap.host),
              strategyDraft: null, modelDraft: null, detail: null,
            };
          }, []);
          const dirtyOf = (state) => {
            const snap = state.snap;
            if (!snap) return false;
            if (state.poolDraft && !sameRouteSet(state.poolDraft.keys, new Set(snap.management.pool.map(keyOf)))) return true;
            const limits = snap.management.limits;
            const limitBaseline = limits ? { maxDepth: String(limits.maxDepth), maxActive: String(limits.maxActive) } : hostLimitDefaults(snap.host);
            if (state.limitDraft && (state.limitDraft.maxDepth !== limitBaseline.maxDepth || state.limitDraft.maxActive !== limitBaseline.maxActive)) return true;
            if (state.strategyDraft?.dirty) return true;
            if (state.modelDraft?.dirty) return true;
            return false;
          };

          function noticeFor(key, snap, state, reset) {
            const values = {};
            if (key === 'savedStrategy') values.name = state.strategyDraft?.name?.trim() || reset.name || '';
            else if (key === 'poolSaved') values.count = snap.management.pool.length;
            else if (key === 'limitsSaved') { values.depth = snap.management.limits?.maxDepth ?? ''; values.active = snap.management.limits?.maxActive ?? ''; }
            else values.name = reset.name || (reset.id ? (snap.management.strategies.find((row) => row.id === reset.id)?.name || '') : '');
            return fmt(t(key), values);
          }

          const request = useCallback(async (body, signal) => {
            const reply = await ctx.remote.commands.execute(sessionId, '/subagent-policy ' + JSON.stringify(body), [], signal);
            if (!reply?.ok) { const error = reply?.error || new Error(t('serverError')); error.transport = true; throw error; }
            const outcome = reply.value?.result;
            if (!outcome) throw new Error(t('missingCommand'));
            if (outcome.kind !== 'success') {
              let payload;
              try { payload = JSON.parse(outcome.text); } catch { /* plain text */ }
              const error = new Error(payload?.message || payload?.error?.message || outcome.text || t('error'));
              error.code = payload?.code || '';
              error.definite = true;
              throw error;
            }
            let snap;
            try { snap = JSON.parse(outcome.text); } catch { throw new Error(t('badResponse')); }
            try { return assertSnapshotShape(snap, sessionId); } catch (error) { throw new Error(t(error.code === 'staleResponse' ? 'staleResponse' : 'badResponse')); }
          }, [sessionId, t]);

          const perform = useCallback(async (kind, body, reset = {}) => {
            if (!sessionId || operation.current || tabSignal?.aborted) return;
            const generation = ++serial.current;
            const controller = new AbortController();
            operation.current = { controller, generation, kind };
            const isCurrent = () => !isStale(generation, serial.current, alive.current) && !controller.signal.aborted && !tabSignal?.aborted;
            commit((state) => ({ ...state, busy: kind, error: null, notice: null, noticeKind: '' }));
            try {
              const snap = await request(body || { action: 'read' }, controller.signal);
              if (!isCurrent()) return;
              commit((state) => {
                const kept = dirtyOf(state);
                const patch = {
                  snap, busy: null, conflict: false, mustRefresh: false, error: null, noticeKind: '',
                  lastActiveId: snap.management.active?.strategyId || state.lastActiveId || null,
                  lastDefault: snap.defaultSetting.snapshot || state.lastDefault || null,
                };
                if (kind === 'read') {
                  patch.notice = kept ? t('draftPreserved') : null;
                  return kept ? { ...state, ...patch } : { ...state, ...patch, ...draftsFrom(snap) };
                }
                let notice = '';
                let noticeKind = '';
                if (reset.notice === null) notice = null;
                else {
                  const key = reset.notice || 'refreshed';
                  if ((key === 'savedStrategy' || key === 'savedActive') && state.snap && snap.revision === state.snap.revision) notice = t('noChanges');
                  else if (key === 'poolSaved') {
                    notice = fmt(t('poolSaved'), { count: snap.management.pool.length });
                    if (state.snap) {
                      const oldKeys = new Set(state.snap.management.pool.map(keyOf));
                      const newKeys = new Set(snap.management.pool.map(keyOf));
                      const removed = new Set([...oldKeys].filter((oldKey) => !newKeys.has(oldKey)));
                      const affected = snap.management.strategies.filter((strategy) => strategy.id !== snap.management.active?.strategyId
                        && (strategy.models || []).some((route) => removed.has(keyOf(route))));
                      if (affected.length) {
                        notice += ' ' + fmt(t('poolAffected'), { names: affected.map((strategy) => `「${strategy.name}」`).join('、') });
                        noticeKind = 'warn';
                      }
                    }
                  } else notice = noticeFor(key, snap, state, reset);
                }
                patch.notice = notice;
                patch.noticeKind = noticeKind;
                if (reset.sync) {
                  // F-50: refresh only revalidates. The fresh snapshot carries the
                  // live authorization/availability; unsupported candidates are
                  // reported as kept (the panel sinks them) instead of removed.
                  const stale = snap.candidates.filter((row) => !row.authorized || !row.available);
                  patch.notice = stale.length
                    ? fmt(t('poolSynced'), { count: stale.length, names: stale.map((row) => row.name || row.model).join('、') })
                    : t('poolSyncedNone');
                  patch.noticeKind = stale.length ? 'warn' : '';
                }
                if (!kept) return { ...state, ...patch, ...draftsFrom(snap) };
                if (reset.strategy) {
                  // 保存成功后返回策略库列表并展示顶部提示，避免停留在编辑页"看不出是否保存"。
                  patch.strategyDraft = null;
                  patch.detail = null;
                  patch.guidePicker = -1;
                  patch.guideQuery = '';
                }
                if (reset.pool) patch.poolDraft = draftsFrom(snap).poolDraft;
                if (reset.model) {
                  const currentModel = state.modelDraft;
                  const entry = currentModel ? snap.management.pool.find((row) => sameRoute(row, currentModel)) : null;
                  patch.modelDraft = entry ? { ...entry, name: entry.name || entry.model, purpose: entry.purpose || '', note: entry.note || '', dirty: false } : null;
                  if (!entry) patch.detail = null;
                  else if (state.poolDraft) {
                    const entries = new Map(state.poolDraft.entries);
                    entries.set(keyOf(entry), { provider: entry.provider, model: entry.model, purpose: entry.purpose || '', note: entry.note || '' });
                    patch.poolDraft = { keys: new Set(state.poolDraft.keys), entries };
                  }
                }
                if (reset.limits) patch.limitDraft = draftsFrom(snap).limitDraft;
                return { ...state, ...patch };
              });
            } catch (error) {
              if (!isCurrent()) return;
              const conflict = /conflict|revision|版本|冲突|其他位置更新/i.test(`${error?.code || ''} ${error?.message || ''}`);
              commit((state) => ({
                ...state, busy: null,
                error: { message: error?.message || String(error) },
                conflict: state.conflict || conflict,
                mustRefresh: !error?.definite && kind !== 'read' ? true : state.mustRefresh,
                notice: error?.definite ? null : t(kind === 'read' ? 'readCancelled' : 'writeCancelled'),
                noticeKind: '',
              }));
            } finally {
              if (isCurrent()) { operation.current = null; commit((state) => ({ ...state, busy: null })); }
            }
          }, [sessionId, tabSignal, t, commit, request, draftsFrom]);

          useEffect(() => {
            const becameVisible = visible && !wasVisible.current;
            wasVisible.current = visible;
            if (!visible || operation.current) return;
            if (uiRef.current.conflict || uiRef.current.mustRefresh) return;
            if (!uiRef.current.snap) {
              if (attempted.current) return;
              attempted.current = true;
              void perform('read');
              return;
            }
            if (becameVisible) void perform('read');
          }, [visible, perform]);

          const read = () => void perform('read');
          function capacityBlockMessage(action) {
            if (!snap) return '';
            if (!['strategy.enable', 'limits.save'].includes(action)) return '';
            if (!capacity.known) return t('hostCapacityUnknownBlocked');
            if (action === 'limits.save' && !capacity.canSave) return t('hostCapacityZero');
            if (action === 'strategy.enable' && savedLimitsOver) {
              const limits = snap.management.limits;
              return fmt(t('hostLimitBlocked'), {
                depth: limits.maxDepth, active: limits.maxActive,
                ceilingDepth: snap.host.maxDepth, ceilingActive: capacity.raw,
              });
            }
            return '';
          }
          const mutation = (action, extra, reset) => {
            const snap = uiRef.current.snap;
            if (!snap) return;
            // 不能静默 return：状态不允许写入时必须给出可见原因，否则用户点了像没点。
            if (!snap.canEdit) { warn(t('readOnly')); return; }
            if (uiRef.current.conflict) { warn(t('conflictHelp')); return; }
            if (uiRef.current.mustRefresh) { warn(t('mustRefresh')); return; }
            const blocked = capacityBlockMessage(action);
            if (blocked) {
              commit((state) => ({ ...state, error: { message: blocked }, notice: null }));
              return;
            }
            void perform(action, { action, expectedRevision: snap.revision, ...extra }, reset);
          };

          const cancel = () => {
            const active = operation.current;
            if (!active) return;
            serial.current += 1;
            active.controller.abort();
            operation.current = null;
            commit((state) => ({ ...state, busy: null, mustRefresh: state.mustRefresh || active.kind !== 'read', notice: t(active.kind === 'read' ? 'readCancelled' : 'writeCancelled'), noticeKind: '' }));
          };

          function openStrategy(id) {
            const snap = uiRef.current.snap;
            const strategy = id ? snap.management.strategies.find((row) => row.id === id) : null;
            if (id && !strategy) return;
            commit((state) => ({ ...state, detail: { kind: 'strategy', id: strategy?.id || null }, strategyDraft: strategyDraftOf(strategy), choiceOpen: !strategy, guidePicker: -1, guideQuery: '', error: null, notice: null, noticeKind: '' }));
          }
          function closeDetail() {
            commit((state) => ({ ...state, detail: null, strategyDraft: null, modelDraft: null, guidePicker: -1, guideQuery: '', error: null, notice: null, noticeKind: '' }));
          }
          function discardIfDirty() {
            if (uiRef.current.strategyDraft?.dirty || uiRef.current.modelDraft?.dirty) return window.confirm(t('discard'));
            return true;
          }
          function goPage(page) {
            if (page === uiRef.current.page && !uiRef.current.detail) return;
            if (!discardIfDirty()) return;
            commit((state) => ({ ...state, page, detail: null, strategyDraft: null, modelDraft: null, error: null, notice: null, noticeKind: '' }));
          }

          function editStrategyField(field, value) {
            commit((state) => state.strategyDraft ? { ...state, strategyDraft: { ...state.strategyDraft, [field]: value, dirty: true } } : state);
          }
          /**
           * 更新结构化选择说明并同步重编译 strategyText，保持单一事实源。
           *
           * @param {object} update 要合并进草稿的 guideRules / guideFallback 等字段。
           */
          function editGuide(update) {
            commit((state) => {
              const draft = state.strategyDraft;
              if (!draft) return state;
              const next = { ...draft, ...update, guideMode: 'rules' };
              next.strategyText = composeGuideText(next.guideRules, next.guideFallback);
              next.dirty = true;
              return { ...state, strategyDraft: next };
            });
          }
          /** 切换说明编辑模式；切到结构化时优先解析现有文本，无法解析则把原文保留为兜底说明。 */
          function setGuideMode(mode) {
            commit((state) => {
              const draft = state.strategyDraft;
              if (!draft || draft.guideMode === mode) return state;
              if (mode === 'free') return { ...state, strategyDraft: { ...draft, guideMode: 'free' } };
              const parsed = parseGuideText(draft.strategyText);
              const guideRules = parsed ? parsed.rules : (draft.guideRules || []);
              const guideFallback = parsed ? parsed.fallback : (draft.guideFallback || (draft.guideRules?.length ? '' : draft.strategyText));
              return { ...state, strategyDraft: { ...draft, guideMode: 'rules', guideRules, guideFallback, strategyText: composeGuideText(guideRules, guideFallback), dirty: true } };
            });
          }
          /** 在指定规则末尾追加或移除一个候选模型；数组顺序即优先级。 */
          function toggleRuleModel(ruleIndex, key) {
            const draft = uiRef.current.strategyDraft;
            if (!draft) return;
            const [provider, model] = JSON.parse(key);
            const rules = (draft.guideRules || []).map((rule, index) => {
              if (index !== ruleIndex) return rule;
              const exists = rule.models.some((route) => route.provider === provider && route.model === model);
              return { ...rule, models: exists ? rule.models.filter((route) => !(route.provider === provider && route.model === model)) : [...rule.models, { provider, model }] };
            });
            editGuide({ guideRules: rules });
          }
          /** 新增一条空规则并展开它的模型选择面板。 */
          function addGuideRule() {
            const rules = [...(uiRef.current.strategyDraft?.guideRules || []), { scene: '', models: [] }];
            editGuide({ guideRules: rules });
            commit((state) => ({ ...state, guidePicker: rules.length - 1, guideQuery: '' }));
          }
          /** 删除指定序号的规则。 */
          function removeGuideRule(index) {
            editGuide({ guideRules: (uiRef.current.strategyDraft?.guideRules || []).filter((_, i) => i !== index) });
            commit((state) => ({ ...state, guidePicker: -1 }));
          }
          /** 上移或下移规则，delta 仅取 -1 / 1。 */
          function moveGuideRule(index, delta) {
            const rules = [...(uiRef.current.strategyDraft?.guideRules || [])];
            const target = index + delta;
            if (target < 0 || target >= rules.length) return;
            [rules[index], rules[target]] = [rules[target], rules[index]];
            editGuide({ guideRules: rules });
            commit((state) => ({ ...state, guidePicker: state.guidePicker === index ? target : state.guidePicker === target ? index : state.guidePicker }));
          }
          function switchType(type) {
            commit((state) => {
              const draft = state.strategyDraft;
              if (!draft || draft.type === type) return state;
              const models = new Set(draft.models);
              let fixedRoute = draft.fixedRoute;
              if (type === 'fixed') {
                if (!fixedRoute || !models.has(fixedRoute)) fixedRoute = models.size ? [...models][0] : '';
                models.clear();
                if (fixedRoute) models.add(fixedRoute);
              }
              if (type === 'auto') fixedRoute = '';
              return { ...state, strategyDraft: { ...draft, type, models, fixedRoute, dirty: true, converting: false } };
            });
          }
          function validateStrategyDraft() {
            const snap = uiRef.current.snap;
            const draft = uiRef.current.strategyDraft;
            if (!snap || !draft) return {};
            const errors = {};
            const name = draft.name.trim();
            if (!name) errors.name = t('errNameEmpty');
            else if (name.length > 60) errors.name = t('errNameLong');
            else if (snap.management.strategies.some((row) => row.id !== draft.id && row.name === name)) errors.name = t('errNameDup');
            if (draft.type === 'fixed') { if (!draft.fixedRoute || draft.models.size !== 1 || !draft.models.has(draft.fixedRoute)) errors.fixed = t('errFixed'); }
            else if (!draft.models.size) errors.models = t('errModels');
            if (draft.strategyText.length > 2000) errors.text = t('errText');
            return errors;
          }
          function strategyBody() {
            const draft = uiRef.current.strategyDraft;
            const fixed = draft.type === 'fixed' ? JSON.parse(draft.fixedRoute || '["",""]') : ['', ''];
            const models = draft.type === 'fixed'
              ? (draft.fixedRoute ? [{ provider: fixed[0], model: fixed[1] }] : [])
              : [...draft.models].map((key) => JSON.parse(key)).map(([provider, model]) => ({ provider, model }));
            return { id: draft.id || undefined, name: draft.name.trim(), type: draft.type, models, fixedProvider: fixed[0], fixedModel: fixed[1], strategyText: draft.strategyText };
          }
          function saveStrategy() {
            const errors = validateStrategyDraft();
            if (Object.keys(errors).length) {
              commit((state) => ({ ...state, error: { message: t('formError'), fields: errors } }));
              const first = errors.name ? idFor('sName') : (errors.fixed || errors.models) ? idFor('sChoice') : idFor('sText');
              focusEl(document.getElementById(first));
              return;
            }
            const current = uiRef.current;
            const saved = current.strategyDraft?.id ? current.snap.management.strategies.find((row) => row.id === current.strategyDraft.id) : null;
            const activeSnapshot = current.snap.management.active?.snapshot || null;
            const isActive = Boolean(saved && current.snap.management.active?.strategyId === saved.id);
            // A lagging legacy snapshot is aligned by the Host on a save even
            // without field edits, so that case must still reach the Host.
            const needsAlignment = Boolean(isActive && activeSnapshot && (activeSnapshot.version || 0) < (saved.version || 0));
            if (!current.strategyDraft?.dirty && !needsAlignment) {
              commit((state) => ({ ...state, error: null, notice: t('noChanges'), noticeKind: '' }));
              return;
            }
            if (isActive) {
              const blocked = capacityBlockMessage('strategy.enable');
              if (blocked) { commit((state) => ({ ...state, error: { message: blocked }, notice: null })); return; }
            }
            mutation('strategy.save', { strategy: strategyBody() }, { strategy: true, notice: isActive ? 'savedActive' : 'savedStrategy' });
          }
          function loadServer() {
            operation.current?.controller.abort();
            operation.current = null;
            serial.current += 1;
            commit((state) => ({ ...state, conflict: false, error: null, mustRefresh: false, strategyDraft: null, modelDraft: null }));
            void perform('read');
          }
          function openModel(key) {
            const snap = uiRef.current.snap;
            const entry = snap.management.pool.find((row) => keyOf(row) === key);
            if (!entry) return;
            const candidate = snap.candidates.find((row) => keyOf(row) === key);
            const name = entry.name || candidate?.name || entry.model;
            commit((state) => ({ ...state, detail: { kind: 'model', key }, modelDraft: { provider: entry.provider, model: entry.model, name, purpose: entry.purpose || '', note: entry.note || '', effort: entry.effort || '', efforts: candidate?.reasoning?.efforts || [], dirty: false }, error: null, notice: null, noticeKind: '' }));
          }
          /**
           * 行内直接保存某个池模型的思考强度；用途与说明沿用现有值，不覆盖。
           *
           * @param {object} candidate 宿主候选行，提供 provider/model 与描述兜底。
           * @param {object|undefined} entry 池中已有条目，取用途和说明。
           * @param {string} effort 目标思考强度；空串表示沿用模型默认。
           */
          function savePoolEffort(candidate, entry, effort) {
            mutation('pool.note', {
              provider: candidate.provider, model: candidate.model,
              purpose: entry?.purpose || (candidate.description || '').slice(0, 500),
              note: entry?.note || '', effort,
            }, { pool: true, notice: 'noteSaved' });
          }
          function saveModelNote() {
            const draft = uiRef.current.modelDraft;
            if (!draft) return;
            if (!draft.dirty) { commit((state) => ({ ...state, notice: t('noChanges') })); return; }
            mutation('pool.note', { provider: draft.provider, model: draft.model, purpose: draft.purpose, note: draft.note, effort: draft.effort || '' }, { model: true, notice: 'noteSaved' });
          }
          function togglePool(route) {
            commit((state) => {
              const pool = state.poolDraft;
              if (!pool) return state;
              const keys = new Set(pool.keys); const entries = new Map(pool.entries);
              const key = keyOf(route); const candidate = state.snap.candidates.find((row) => keyOf(row) === key);
              if (keys.has(key)) keys.delete(key);
              else {
                if (!candidate?.authorized || !candidate?.available) return state;
                if (keys.size >= 200) return state;
                keys.add(key);
                if (!entries.has(key)) entries.set(key, { provider: route.provider, model: route.model, purpose: (candidate.description || '').slice(0, 500), note: '' });
              }
              return { ...state, poolDraft: { keys, entries } };
            });
          }
          function selectAllPool() {
            commit((state) => {
              if (!state.poolDraft) return state;
              // F-50: select-all offers the available candidates as the draft —
              // unavailable ones are not silently added, and stale entries that
              // were kept in the pool are deselected with the rest.
              const keys = new Set();
              const entries = new Map(state.poolDraft.entries);
              for (const candidate of state.snap.candidates) {
                if (!candidate.authorized || !candidate.available) continue;
                if (keys.size >= 200) break;
                const key = keyOf(candidate); keys.add(key);
                if (!entries.has(key)) entries.set(key, { provider: candidate.provider, model: candidate.model, purpose: (candidate.description || '').slice(0, 500), note: '' });
              }
              return { ...state, poolDraft: { keys, entries } };
            });
          }
          /** 把当前搜索筛选出的可用候选全部加入池草稿（上限 200），长列表免逐个勾选。 */
          function selectVisiblePool() {
            commit((state) => {
              if (!state.poolDraft) return state;
              const keys = new Set(state.poolDraft.keys);
              const entries = new Map(state.poolDraft.entries);
              for (const candidate of state.snap.candidates) {
                if (!candidate.authorized || !candidate.available) continue;
                if (!matchesModelQuery(candidate, state.poolQuery)) continue;
                if (keys.size >= 200) break;
                const key = keyOf(candidate);
                keys.add(key);
                if (!entries.has(key)) entries.set(key, { provider: candidate.provider, model: candidate.model, purpose: (candidate.description || '').slice(0, 500), note: '' });
              }
              return { ...state, poolDraft: { keys, entries } };
            });
          }
          function clearAllPool() {
            commit((state) => state.poolDraft ? { ...state, poolDraft: { keys: new Set(), entries: new Map(state.poolDraft.entries) } } : state);
          }
          function savePool() {
            const snap = uiRef.current.snap; const pool = uiRef.current.poolDraft;
            if (!snap || !pool) return;
            const savedKeys = new Set(snap.management.pool.map(keyOf));
            const removals = [...savedKeys].filter((key) => !pool.keys.has(key));
            const additions = [...pool.keys].filter((key) => !savedKeys.has(key));
            if (!removals.length && !additions.length) {
              commit((state) => ({ ...state, error: null, notice: t('poolNoChanges'), noticeKind: '' }));
              return;
            }
            const active = snap.management.active || null;
            const activeRoutes = new Set((active?.snapshot?.models || []).map(keyOf));
            const activeStrategy = active ? snap.management.strategies.find((row) => row.id === active.strategyId) : null;
            for (const route of activeStrategy?.models || []) activeRoutes.add(keyOf(route));
            const protectedRemovals = removals.filter((key) => activeRoutes.has(key));
            if (protectedRemovals.length) {
              const names = protectedRemovals.map((key) => {
                const entry = snap.management.pool.find((row) => keyOf(row) === key);
                return entry?.name || JSON.parse(key)[1];
              }).join('、');
              commit((state) => ({ ...state, error: { message: fmt(t('poolBlockedActive'), { name: active?.snapshot?.name || activeStrategy?.name || '', models: names }) }, notice: null }));
              return;
            }
            const order = [...snap.candidates.map(keyOf), ...[...pool.keys].filter((key) => !snap.candidates.some((row) => keyOf(row) === key))];
            const entries = order.filter((key) => pool.keys.has(key)).map((key) => pool.entries.get(key) || (() => { const [provider, model] = JSON.parse(key); return { provider, model, purpose: '', note: '' }; })());
            mutation('pool.save', { pool: entries }, { pool: true, notice: 'poolSaved' });
          }
          function syncPool() {
            // F-50: refresh only revalidates — nothing is removed and nothing is
            // confirmed. The fresh snapshot returned by the Host carries the live
            // authorization/availability; perform() reports the kept stale
            // candidates from it.
            mutation('pool.sync', {}, { pool: true, notice: 'poolSynced', sync: true });
          }
          function saveLimits() {
            const draft = uiRef.current.limitDraft; const snap = uiRef.current.snap;
            if (!draft || !snap) return;
            const blocked = capacityBlockMessage('limits.save');
            if (blocked) {
              commit((state) => ({ ...state, error: { message: blocked } }));
              focusEl(document.getElementById(idFor('limActive')));
              return;
            }
            const depth = Number(draft.maxDepth); const active = Number(draft.maxActive);
            const maxDepth = snap.host.maxDepth;
            const maxActive = capacity.known ? capacity.ceiling : PLUGIN_MAX_ACTIVE;
            if (!Number.isInteger(depth) || depth < 0 || depth > maxDepth) {
              commit((state) => ({ ...state, error: { message: fmt(t('errDepth'), { max: maxDepth }) } }));
              focusEl(document.getElementById(idFor('limDepth')));
              return;
            }
            if (!Number.isInteger(active) || active < 1 || active > maxActive) {
              commit((state) => ({ ...state, error: { message: fmt(t('errActive'), { max: maxActive }) } }));
              focusEl(document.getElementById(idFor('limActive')));
              return;
            }
            mutation('limits.save', { limits: { maxDepth: depth, maxActive: active } }, { limits: true, notice: 'limitsSaved' });
          }
          function warn(message) {
            commit((state) => ({ ...state, error: null, notice: message, noticeKind: 'warn' }));
          }
          function closeActive() {
            const current = uiRef.current.snap?.management.active;
            if (!current) return;
            commit((state) => ({ ...state, lastActiveId: current.strategyId }));
            mutation('strategy.close', {}, { notice: null });
          }
          function restoreActive() {
            const snap = uiRef.current.snap;
            const id = uiRef.current.lastActiveId;
            const target = id && snap ? snap.management.strategies.find((row) => row.id === id) : null;
            if (!target) { warn(t('warningNoActiveRestore')); return; }
            if (target.type === 'inherit') { warn(t('warningNoLegacy')); return; }
            if (target.needsAdjust) { warn(fmt(t('warningNeedsAdjust'), { name: target.name })); return; }
            if (target.pendingRecovery) {
              const pendingNames = (target.models || []).filter((route) => {
                if (!snap.management.pool.some((entry) => keyOf(entry) === keyOf(route))) return false;
                const candidate = snap.candidates.find((row) => keyOf(row) === keyOf(route));
                return !candidate?.authorized || !candidate?.available;
              }).map((route) => modelName(route));
              warn(fmt(t('warningPendingRecovery'), { name: target.name, models: [...new Set(pendingNames)].join('、') }));
              return;
            }
            const blocked = capacityBlockMessage('strategy.enable');
            if (blocked) { warn(blocked); return; }
            mutation('strategy.enable', { id: target.id }, { notice: null });
          }
          function clearDefault() {
            const current = uiRef.current;
            const snap = current.snap;
            if (!snap || !snap.canEdit || current.conflict || current.mustRefresh) return;
            if (snap.defaultSetting.snapshot && !current.lastDefault) {
              commit((state) => ({ ...state, lastDefault: snap.defaultSetting.snapshot }));
            }
            // default.clear accepts only the default revision; the Host rejects
            // an unexpected expectedRevision on this action.
            void perform('default.clear', { action: 'default.clear', expectedDefaultRevision: snap.defaultSetting.revision }, { notice: null });
          }
          function toggleDefault(on) {
            const snap = uiRef.current.snap;
            if (!snap) return;
            if (!on) {
              if (!snap.defaultSetting.snapshot) return;
              clearDefault();
              return;
            }
            if (snap.defaultSetting.snapshot) return;
            const remembered = uiRef.current.lastDefault;
            const source = remembered?.sourceId ? snap.management.strategies.find((row) => row.id === remembered.sourceId) : null;
            if (!source) { warn(t('warningNoDefaultRestore')); return; }
            mutation('strategy.default', { expectedDefaultRevision: snap.defaultSetting.revision, id: source.id }, { notice: null });
          }
          function setDefault(id) {
            const snap = uiRef.current.snap;
            if (!snap) return;
            mutation('strategy.default', { expectedDefaultRevision: snap.defaultSetting.revision, id }, { notice: null });
          }

          const snap = ui.snap;
          const page = ui.page;
          const draft = ui.strategyDraft;
          const busy = Boolean(ui.busy);
          const capacity = hostCapacity(snap && snap.host);
          const savedLimits = snap?.management?.limits || null;
          const savedLimitsOver = Boolean(savedLimits && snap && (savedLimits.maxDepth > snap.host.maxDepth || (capacity.known && savedLimits.maxActive > capacity.raw)));
          const editable = Boolean(snap?.canEdit) && !busy && !ui.conflict && !ui.mustRefresh;
          const titleRefs = useRef({});
          const titleRef = (name) => (element) => { if (element) titleRefs.current[name] = element; else delete titleRefs.current[name]; };
          useEffect(() => {
            if (!snap) return;
            if (ui.detail?.kind === 'strategy') focusEl(titleRefs.current.strategyDetail);
            else if (ui.detail?.kind === 'model') focusEl(titleRefs.current.modelDetail);
            else focusEl(titleRefs.current[page]);
          }, [page, ui.detail, snap?.revision]);

          const button = (label, handler, options = {}) => h('button', { type: 'button', onClick: handler, disabled: options.disabled, className: options.className, title: options.title, 'aria-pressed': options.pressed === undefined ? undefined : String(options.pressed), 'aria-label': options.aria || label }, label);
          const badge = (label, kind = '') => h('span', { className: `lezsp-badge ${kind}`.trim() }, label);
          const banner = (content, kind = '') => h('div', { className: `lezsp-banner ${kind}`.trim(), role: kind === 'err' ? 'alert' : 'status' }, content);
          const hostCapacityNotice = () => {
            if (!snap || capacity.known) return null;
            return h('div', { className: 'lezsp-banner warn', role: 'status' },
              h('p', null, t('hostCapacityUnknown')),
              capacity.reason ? h('p', { className: 'lezsp-muted' }, fmt(t('hostCapacityReason'), { reason: capacity.reason })) : null);
          };
          const formatTime = (value) => {
            if (!value) return '—';
            const date = new Date(value);
            if (Number.isNaN(date.getTime())) return String(value);
            const pad = (number) => String(number).padStart(2, '0');
            return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
          };
          const typeLabel = (type) => type === 'fixed' ? t('typeFixed') : type === 'auto' ? t('typeAuto') : t('legacyBadge');
          const strategyById = (id) => snap?.management.strategies.find((row) => row.id === id) || null;
          const active = snap?.management.active || null;
          const activeStrategy = active ? strategyById(active.strategyId) : null;
          const activeTarget = active ? (active.snapshot.type === 'fixed'
            ? (() => { const info = (active.snapshot.modelsInfo || []).find((row) => row.provider === active.snapshot.fixedProvider && row.model === active.snapshot.fixedModel); return info?.name || active.snapshot.fixedModel; })()
            : (active.snapshot.models || []).length) : null;

          function modelName(route) {
            const found = snap?.management.pool.find((row) => sameRoute(row, route)) || snap?.candidates.find((row) => sameRoute(row, route));
            return found?.name || route?.model || '';
          }

          const switchControl = (suffix, checked, disabled, aria, onChange) => h('label', { className: 'lezsp-switch' },
            h('input', { id: idFor(suffix), type: 'checkbox', role: 'switch', className: 'lezsp-switch-input', checked, disabled, 'aria-label': aria, onChange: (event) => onChange(event.target.checked) }),
            h('span', { className: 'lezsp-switch-track', 'aria-hidden': true }));

          const reasoningText = (candidate, entry) => {
            const reasoning = candidate?.reasoning || entry?.reasoning || null;
            const efforts = Array.isArray(reasoning?.efforts) ? reasoning.efforts : [];
            if (!efforts.length) return t('reasoningNone');
            const names = efforts.map((effort) => effort.name || effort.id).join(' · ');
            const current = reasoning.defaultEffort ? efforts.find((effort) => effort.id === reasoning.defaultEffort) : null;
            return fmt(t('reasoningLine'), { names }) + (current ? fmt(t('reasoningDefault'), { name: current.name || current.id }) : '');
          };

          function strategyCard(strategy) {
            const isActive = active?.strategyId === strategy.id;
            const isDefault = snap.defaultSetting.snapshot?.sourceId === strategy.id;
            const defaultStale = isDefault && (snap.defaultSetting.snapshot.version || 0) < (strategy.version || 1);
            const adjust = Boolean(strategy.needsAdjust);
            // F-50: pendingRecovery = references that stay in the saved pool but
            // are not Host-authorized or cannot be resolved right now. They are
            // kept and reported separately from outside-pool (needsAdjust).
            const pendingRoutes = (strategy.models || []).filter((route) => {
              if (!snap.management.pool.some((entry) => keyOf(entry) === keyOf(route))) return false;
              const candidate = snap.candidates.find((row) => keyOf(row) === keyOf(route));
              return !candidate?.authorized || !candidate?.available;
            });
            const pending = Boolean(strategy.pendingRecovery) && pendingRoutes.length > 0;
            const byProvider = new Map();
            for (const route of strategy.models || []) {
              const entry = snap.management.pool.find((row) => keyOf(row) === keyOf(route));
              // 池里配置了思考强度时卡片直接标出来，避免只在能力卡里才看得到。
              const label = entry?.effort ? `${modelName(route)} (${entry.effort})` : modelName(route);
              if (!byProvider.has(route.provider)) byProvider.set(route.provider, []);
              byProvider.get(route.provider).push(label);
            }
            const modelLines = byProvider.size
              ? [...byProvider].map(([provider, names]) => `${provider}: ${names.join('、')}`)
              : [t('noModelsSelected')];
            const stateText = adjust ? t('adjustBadge') : pending ? t('pendingBadge') : isActive ? t('activeBadge') : t('stateOff');
            const stateClass = `lezsp-state${adjust || pending ? ' warn' : isActive ? ' on' : ''}`;
            // 策略库卡片：编辑（整页）/ 设默认 / 删除；启用选择移到「当前会话」页。
            return h('article', { key: strategy.id, className: `lezsp-card${isActive ? ' active' : ''}`, 'aria-labelledby': idFor(`strategy-${strategy.id}`), tabIndex: -1 },
              h('p', { className: 'lezsp-card-head' },
                h('strong', { className: 'lezsp-card-name', id: idFor(`strategy-${strategy.id}`) }, strategy.name),
                isActive ? badge(t('activeBadge'), 'on') : null,
                isDefault ? badge(defaultStale ? t('defaultStaleBadge') : t('defaultBadge'), defaultStale ? 'warn' : '') : null,
                adjust ? badge(t('adjustBadge'), 'warn') : pending ? badge(t('pendingBadge'), 'warn') : null),
              h('div', { className: 'lezsp-badges', style: { marginTop: '6px' } },
                badge(typeLabel(strategy.type)),
                h('span', { className: stateClass }, stateText)),
              h('div', { className: 'lezsp-chip-group' }, [...byProvider].map(([provider, names]) => names.map((label) => h('span', { key: `${provider}:${label}`, className: 'lezsp-chip' }, `${provider} · ${label}`)))),
              !byProvider.size ? h('p', { className: 'lezsp-muted' }, t('noModelsSelected')) : null,
              adjust ? h('p', { className: 'lezsp-error' }, t('needsAdjustHint'))
                : pending ? h('p', { className: 'lezsp-warn' }, fmt(t('pendingRecoveryHint'), { models: [...new Set(pendingRoutes.map((route) => modelName(route)))].join('、') })) : null,
              strategy.type === 'inherit' ? h('p', { className: 'lezsp-muted' }, t('legacyHint')) : null,
              h('div', { className: 'lezsp-actions' },
                button(t('edit'), () => openStrategy(strategy.id), { className: 'lezsp-small', disabled: busy, aria: fmt(t('editLabel'), { name: strategy.name }) }),
                button(t('setDefault'), () => setDefault(strategy.id), { className: 'lezsp-small', disabled: !editable || isDefault || strategy.type === 'inherit', aria: fmt(t('setDefaultLabel'), { name: strategy.name }) }),
                button(t('delete'), () => {
                  if (!window.confirm(fmt(t('deleteConfirm'), { name: strategy.name }))) return;
                  mutation('strategy.delete', { id: strategy.id }, { notice: 'deletedNotice', name: strategy.name });
                }, { className: 'lezsp-small', disabled: !editable || isActive || isDefault, aria: fmt(t('deleteLabel'), { name: strategy.name }) })),
              isActive ? h('p', { className: 'lezsp-muted' }, t('deleteActiveHint'))
                : isDefault ? h('p', { className: 'lezsp-muted' }, t('deleteDefaultHint')) : null);
          }

          /**
           * 「当前会话」页：只做一件事——为本会话选择启用哪份策略。
           * 策略的新增/编辑/删除与全局默认都在「策略库」页，这里不放管理按钮。
           */
          function sessionPage() {
            const renderRow = (strategy) => {
              const isActive = active?.strategyId === strategy.id;
              const adjust = Boolean(strategy.needsAdjust);
              const pendingRoutes = (strategy.models || []).filter((route) => {
                if (!snap.management.pool.some((entry) => keyOf(entry) === keyOf(route))) return false;
                const candidate = snap.candidates.find((row) => keyOf(row) === keyOf(route));
                return !candidate?.authorized || !candidate?.available;
              });
              const pending = Boolean(strategy.pendingRecovery) && pendingRoutes.length > 0;
              const capacityReason = capacityBlockMessage('strategy.enable');
              const byProvider = new Map();
              for (const route of strategy.models || []) {
                const label = modelName(route);
                if (!byProvider.has(route.provider)) byProvider.set(route.provider, []);
                byProvider.get(route.provider).push(label);
              }
              return h('article', { key: strategy.id, className: `lezsp-card${isActive ? ' active' : ''}` },
                h('p', { className: 'lezsp-card-head' },
                  h('strong', { className: 'lezsp-card-name' }, strategy.name),
                  isActive ? badge(t('activeBadge'), 'on') : null,
                  adjust ? badge(t('adjustBadge'), 'warn') : pending ? badge(t('pendingBadge'), 'warn') : null,
                  badge(typeLabel(strategy.type))),
                h('div', { className: 'lezsp-chip-group' }, [...byProvider].map(([provider, names]) => names.map((label) => h('span', { key: `${provider}:${label}`, className: 'lezsp-chip' }, `${provider} · ${label}`)))),
                adjust ? h('p', { className: 'lezsp-error' }, t('needsAdjustHint'))
                  : pending ? h('p', { className: 'lezsp-warn' }, fmt(t('pendingRecoveryHint'), { models: [...new Set(pendingRoutes.map((route) => modelName(route)))].join('、') })) : null,
                strategy.type === 'inherit' ? h('p', { className: 'lezsp-muted' }, t('legacyHint')) : null,
                h('div', { className: 'lezsp-actions' },
                  isActive
                    ? button(t('disable'), () => mutation('strategy.close', {}, { notice: null }), { className: 'lezsp-small', disabled: !editable, aria: fmt(t('disableLabel'), { name: strategy.name }) })
                    : strategy.type === 'inherit' ? null : button(t('enable'), () => {
                      if (pending) {
                        warn(fmt(t('warningPendingRecovery'), { name: strategy.name, models: [...new Set(pendingRoutes.map((route) => modelName(route)))].join('、') }));
                        return;
                      }
                      mutation('strategy.enable', { id: strategy.id }, { notice: null });
                    }, { className: 'lezsp-small lezsp-primary', disabled: !editable || adjust || Boolean(capacityReason), title: capacityReason || undefined, aria: fmt(t('enableLabel'), { name: strategy.name }) })));
            };
            return h(React.Fragment, null,
              h('section', { className: 'lezsp-status', 'aria-labelledby': idFor('sessionTitle') },
                h('div', { className: 'lezsp-between lezsp-row' },
                  h('h2', { id: idFor('sessionTitle'), tabIndex: -1, ref: titleRef('session') }, t('sessionTitle')),
                  switchControl('policyToggle', Boolean(active), !editable, active ? t('policyLabelOn') : t('policyLabelOff'), (checked) => { if (checked) restoreActive(); else closeActive(); })),
                h('p', null, active
                  ? fmt(t('activeLine'), { name: active.snapshot.name, type: typeLabel(active.snapshot.type), target: active.snapshot.type === 'fixed' ? activeTarget : fmt(t('targetAuto'), { count: activeTarget }) })
                  : t('closedSummary'))),
              hostCapacityNotice(),
              h('p', { className: 'lezsp-muted' }, t('sessionPickHint')),
              snap.management.strategies.length
                ? h('div', { className: 'lezsp-cards' }, snap.management.strategies.map(renderRow))
                : h('div', { className: 'lezsp-empty' }, t('emptyStrategies')));
          }

          function strategiesPage() {
            if (ui.detail?.kind === 'strategy' && draft) return strategyDetail();
            const defaultValue = snap.defaultSetting.snapshot;
            const valueLimits = defaultValue?.limits || null;
            const defaultText = defaultValue
              ? fmt(t('defaultSummary'), { name: defaultValue.name, type: typeLabel(defaultValue.type) })
                + (valueLimits ? fmt(t('defaultLimitsInline'), { depth: valueLimits.maxDepth, active: valueLimits.maxActive }) : '')
              : t('noDefault');
            const defaultConflict = Boolean(valueLimits && (valueLimits.maxDepth > snap.host.maxDepth || (capacity.known && valueLimits.maxActive > capacity.raw)));
            // The Host computes these from the stored default and the live
            // authorization/availability lists; the panel only reports them and
            // adds no action of its own.
            const modelConflict = conflictRoutes(snap.defaultSetting);
            const skipped = skippedRoutes(snap.management);
            const coveredByConflict = new Set(modelConflict.unauthorized.map(keyOf));
            const uncoveredSkipped = skipped.filter((route) => !coveredByConflict.has(keyOf(route)));
            // De-duplication rule: a model already named by the default warning is
            // not named again in the skipped banner; the skipped banner then points
            // at the warning above. Models only recorded as skipped keep their names.
            const skippedNames = modelConflict.unauthorized.length ? uncoveredSkipped : skipped;
            const skippedText = skipped.length
              ? (skippedNames.length
                ? fmt(t('defaultSkipped'), { count: skipped.length, models: routeList(skippedNames, t('listSeparator')) })
                : fmt(t('defaultSkippedCovered'), { count: skipped.length }))
              : '';
            const defaultSource = defaultValue?.sourceId ? strategyById(defaultValue.sourceId) : null;
            const defaultStale = Boolean(defaultValue && defaultSource && (defaultValue.version || 0) < (defaultSource.version || 1));
            // 策略库页：全局默认设置 + 策略增删改；会话内启用选择在「当前会话」页。
            return h(React.Fragment, null,
              h('section', { className: 'lezsp-status', 'aria-labelledby': idFor('defaultTitle') },
                h('div', { className: 'lezsp-between lezsp-row' },
                  h('h2', { id: idFor('defaultTitle'), tabIndex: -1, ref: titleRef('strategies') }, t('defaultTitle')),
                  switchControl('defaultToggle', Boolean(defaultValue), !editable, defaultValue ? t('defaultLabelOn') : t('defaultLabelOff'), toggleDefault)),
                h('p', null, defaultText)),
              defaultStale ? h('div', { className: 'lezsp-banner warn', role: 'status' },
                h('p', null, fmt(t('defaultStaleHint'), { name: defaultValue.name })),
                h('div', { className: 'lezsp-actions' },
                  button(t('syncDefault'), () => setDefault(defaultValue.sourceId), { className: 'lezsp-small lezsp-primary', disabled: !editable }))) : null,
              h(React.Fragment, null,
                defaultConflict ? banner(fmt(t('defaultConflict'), { depth: valueLimits.maxDepth, active: valueLimits.maxActive, ceilingDepth: snap.host.maxDepth, ceilingActive: capacity.known ? capacity.raw : '—' }), 'warn') : null,
                modelConflict.unauthorized.length
                  ? banner(fmt(t('defaultUnauthorized'), { models: routeList(modelConflict.unauthorized, t('listSeparator')) }), 'warn')
                  : modelConflict.unavailable.length
                    ? banner(fmt(t('defaultUnavailable'), { models: routeList(modelConflict.unavailable, t('listSeparator')) }), 'warn')
                    : null),
              skippedText ? banner(skippedText, 'warn') : null,
              hostCapacityNotice(),
              savedLimitsOver && capacity.known ? banner(fmt(t('hostLimitBlocked'), { depth: savedLimits.maxDepth, active: savedLimits.maxActive, ceilingDepth: snap.host.maxDepth, ceilingActive: capacity.raw }) + (active ? t('hostConflictActive') : ''), 'warn') : null,
              h('div', { className: 'lezsp-section-head' },
                h('h2', { id: idFor('strategiesTitle'), tabIndex: -1 }, t('strategies'), ' ', h('span', { className: 'lezsp-count' }, fmt(t('countSuffix'), { count: snap.management.strategies.length }))),
                button(t('newStrategy'), () => openStrategy(null), { className: 'lezsp-small lezsp-primary', disabled: !editable })),
              snap.management.strategies.length
                ? h('div', { className: 'lezsp-cards' }, snap.management.strategies.map(strategyCard))
                : h('div', { className: 'lezsp-empty' }, t('emptyStrategies')),
              modelsPage());
          }

          function strategyDetail() {
            const errors = ui.error?.fields || {};
            const saved = draft.id ? strategyById(draft.id) : null;
            const isActive = Boolean(saved && active?.strategyId === saved.id);
            const saveBlocked = isActive ? capacityBlockMessage('strategy.enable') : '';
            const pool = snap.management.pool;
            const staleKeys = new Set([...draft.models].filter((key) => !pool.some((entry) => keyOf(entry) === key)));
            // F-50: pool choices are shown available-first; in-pool but currently
            // unavailable candidates sink with their reference kept, before the
            // outside-pool references.
            const staleCandidateKeys = new Set(snap.candidates.filter((row) => !row.authorized || !row.available).map(keyOf));
            const poolChoiceKeys = [
              ...pool.map(keyOf).filter((key) => !staleCandidateKeys.has(key)),
              ...pool.map(keyOf).filter((key) => staleCandidateKeys.has(key)),
            ];
            const fixedChoices = [...poolChoiceKeys, ...staleKeys];
            const autoChoices = [...poolChoiceKeys, ...staleKeys];
            const choiceLabel = (key) => {
              const [provider, model] = JSON.parse(key);
              const entry = pool.find((row) => keyOf(row) === key);
              const candidate = snap.candidates.find((row) => keyOf(row) === key);
              return { provider, model, name: entry?.name || candidate?.name || model };
            };
            const choose = (key, checked, type) => {
              if (type === 'fixed') {
                commit((state) => state.strategyDraft ? { ...state, strategyDraft: { ...state.strategyDraft, models: new Set([key]), fixedRoute: key, dirty: true } } : state);
              } else {
                commit((state) => {
                  const current = new Set(state.strategyDraft.models);
                  if (checked) current.add(key); else current.delete(key);
                  return { ...state, strategyDraft: { ...state.strategyDraft, models: current, dirty: true } };
                });
              }
            };
            /**
             * 渲染策略编辑器中的固定/自选模型列表，支持搜索和 provider 分组。
             * 已勾选项始终保留在结果中，避免搜索时误删看不见的历史引用。
             *
             * @param {'fixed'|'auto'} type 当前策略类型，决定 radio 或 checkbox。
             * @returns {object|null} React 分组列表；没有可选模型时返回 null。
             */
            const choiceRows = (type) => {
              const choiceKeys = type === 'fixed' ? fixedChoices : autoChoices;
              if (!choiceKeys.length) return null;
              // 1. 先按搜索词过滤，但已勾选项和池外历史引用始终可见。
              const visibleKeys = choiceKeys.filter((key) => {
                const info = choiceLabel(key);
                const checked = type === 'fixed' ? draft.fixedRoute === key : draft.models.has(key);
                return checked || staleKeys.has(key) || matchesModelQuery(info, ui.choiceQuery);
              });
              if (!visibleKeys.length) return h('div', { className: 'lezsp-empty' }, t('noModelMatches'));
              const rows = visibleKeys.map((key) => ({ key, ...choiceLabel(key) }));
              // 2. 不可用提示只在确实存在对应行时显示。
              const showUnavailableHint = visibleKeys.some((key) => !staleKeys.has(key) && staleCandidateKeys.has(key));
              // 3. 按 provider 分组，组内保留可用/不可用/池外引用的原始顺序。
              return h('div', { className: 'lezsp-stack' },
                showUnavailableHint ? h('p', { className: 'lezsp-muted' }, t('unavailableGroupHint')) : null,
                [...groupByProvider(rows)].map(([provider, providerRows]) => h('section', { key: provider, className: 'lezsp-provider-group', 'aria-label': provider },
                  h('h3', { className: 'lezsp-provider-title' }, provider, h('span', { className: 'lezsp-count' }, providerRows.length)),
                  h('div', { className: 'lezsp-stack' }, providerRows.map(({ key }) => {
                    const outsidePool = staleKeys.has(key);
                    const unavailable = !outsidePool && staleCandidateKeys.has(key);
                    const info = choiceLabel(key);
                    const checked = type === 'fixed' ? draft.fixedRoute === key : draft.models.has(key);
                    return h('label', { key, className: `lezsp-model-choice ${checked ? 'checked' : ''} ${outsidePool || unavailable ? 'stale' : ''}` },
                      h('input', { type: type === 'fixed' ? 'radio' : 'checkbox', name: type === 'fixed' ? idFor('fixedChoice') : undefined, checked, disabled: !editable, 'aria-label': (type === 'fixed' ? t('fixedPanel') : t('autoPanel')) + ': ' + info.name, onChange: (event) => choose(key, event.target.checked, type) }),
                      h('span', { className: 'lezsp-choice-body' },
                        h('span', { className: 'lezsp-choice-name' }, info.name, ' - ', h('span', { className: 'lezsp-muted' }, info.provider),
                          outsidePool ? h('span', { className: 'lezsp-error' }, ' ' + t('staleRef'))
                            : unavailable ? h('span', { className: 'lezsp-warn' }, ' ' + t('unavailableRef')) : null),
                        outsidePool ? h('span', { className: 'lezsp-muted' }, t('staleRefHint')) : null));
                  })))));
            };
            const typeChoices = h('div', { className: 'lezsp-seg', role: 'group', 'aria-label': t('typeLabel') },
              h('button', { type: 'button', 'aria-pressed': draft.type === 'fixed', disabled: !editable, onClick: () => switchType('fixed') }, t('typeFixed')),
              h('button', { type: 'button', 'aria-pressed': draft.type === 'auto', disabled: !editable, onClick: () => switchType('auto') }, t('typeAuto')));
            /**
             * 选择说明编辑器：结构化规则（场景→有序多模型）与自由文本双模式。
             * 规则模式的选模型面板内联展开，带搜索与 provider 分组，不使用任何弹层。
             */
            const guideEditor = () => {
              const rules = draft.guideRules || [];
              const candidateKeys = [...draft.models];
              const modeSeg = h('div', { className: 'lezsp-seg', role: 'group', 'aria-label': t('textLabel') },
                h('button', { type: 'button', 'aria-pressed': draft.guideMode === 'rules', disabled: !editable, onClick: () => setGuideMode('rules') }, t('guideStruct')),
                h('button', { type: 'button', 'aria-pressed': draft.guideMode !== 'rules', disabled: !editable, onClick: () => setGuideMode('free') }, t('guideFree')));
              const freeEditor = h('label', { className: 'lezsp-field', htmlFor: idFor('sText') },
                h('span', null, t('guideFreeLabel')),
                h('textarea', { id: idFor('sText'), rows: 4, maxLength: 2000, value: draft.strategyText, disabled: !editable, 'aria-invalid': errors.text ? 'true' : undefined, onChange: (event) => editStrategyField('strategyText', event.target.value) }),
                h('small', { className: 'lezsp-muted' }, fmt(t('textCount'), { count: draft.strategyText.length, max: 2000 }) + ' · ' + t('textHint')));
              // 单条规则的内联选模型面板：仅列当前候选子集，勾选顺序即优先级。
              const pickerPanel = (rule, index) => {
                if (ui.guidePicker !== index) return null;
                const visibleKeys = candidateKeys.filter((key) => matchesModelQuery(choiceLabel(key), ui.guideQuery));
                return h('div', { className: 'lezsp-guide-picker' },
                  h('label', { className: 'lezsp-field', htmlFor: idFor(`guideSearch-${index}`) },
                    h('span', null, t('searchModels')),
                    h('input', { id: idFor(`guideSearch-${index}`), type: 'search', value: ui.guideQuery, disabled: !editable, placeholder: t('searchModelsPlaceholder'), onChange: (event) => commit((state) => ({ ...state, guideQuery: event.target.value })) })),
                  h('p', { className: 'lezsp-muted' }, t('guidePickerHint')),
                  visibleKeys.length
                    ? h('div', { className: 'lezsp-stack' }, [...groupByProvider(visibleKeys.map((key) => ({ key, ...choiceLabel(key) })))].map(([provider, rows]) => h('section', { key: provider, className: 'lezsp-provider-group', 'aria-label': provider },
                      h('h3', { className: 'lezsp-provider-title' }, provider, h('span', { className: 'lezsp-count' }, rows.length)),
                      h('div', { className: 'lezsp-stack' }, rows.map(({ key, name }) => {
                        const order = rule.models.findIndex((route) => keyOf(route) === key);
                        const checked = order >= 0;
                        return h('label', { key, className: `lezsp-model-choice ${checked ? 'checked' : ''}` },
                          h('input', { type: 'checkbox', checked, disabled: !editable, 'aria-label': `${t('guidePickModel')}: ${name}`, onChange: () => toggleRuleModel(index, key) }),
                          h('span', { className: 'lezsp-choice-body' },
                            h('span', { className: 'lezsp-choice-name' }, name, ' - ', h('span', { className: 'lezsp-muted' }, provider)),
                            checked ? h('span', { className: 'lezsp-muted' }, fmt(t('guideOrder'), { order: order + 1 })) : null));
                      })))))
                    : h('div', { className: 'lezsp-empty' }, t(candidateKeys.length ? 'noModelMatches' : 'errModels')));
              };
              const rulesEditor = h('div', null,
                h('p', { className: 'lezsp-muted' }, t('guideRulesHint')),
                rules.map((rule, index) => h('div', { key: index, className: 'lezsp-guide-rule' },
                  h('div', { className: 'lezsp-row' },
                    h('span', { className: 'lezsp-count' }, `${index + 1}.`),
                    h('input', { type: 'text', value: rule.scene, maxLength: 120, disabled: !editable, placeholder: t('guideScenePlaceholder'), 'aria-label': t('guideScenePlaceholder'), onChange: (event) => editGuide({ guideRules: rules.map((row, i) => i === index ? { ...row, scene: event.target.value } : row) }) }),
                    button('▲', () => moveGuideRule(index, -1), { className: 'lezsp-small', disabled: !editable || index === 0, aria: t('guideMoveUp') }),
                    button('▼', () => moveGuideRule(index, 1), { className: 'lezsp-small', disabled: !editable || index === rules.length - 1, aria: t('guideMoveDown') }),
                    button('✕', () => removeGuideRule(index), { className: 'lezsp-small', disabled: !editable, aria: t('guideRemoveRule') })),
                  h('div', { className: 'lezsp-row lezsp-guide-chips' },
                    rule.models.map((route, k) => h('span', { key: keyOf(route), className: 'lezsp-chip' },
                      `${k + 1}) ${modelName(route)}`,
                      button('✕', () => toggleRuleModel(index, keyOf(route)), { className: 'lezsp-chip-x', disabled: !editable, aria: t('guideRemoveModel') }))),
                    button(t('guidePickModel'), () => commit((state) => ({ ...state, guidePicker: state.guidePicker === index ? -1 : index, guideQuery: '' })), { className: 'lezsp-small', disabled: !editable || !candidateKeys.length })),
                  pickerPanel(rule, index))),
                button(t('guideAddRule'), addGuideRule, { className: 'lezsp-small', disabled: !editable }),
                h('label', { className: 'lezsp-field', htmlFor: idFor('guideFallback') },
                  h('span', null, t('guideFallback')),
                  h('input', { id: idFor('guideFallback'), type: 'text', maxLength: 500, value: draft.guideFallback || '', disabled: !editable, onChange: (event) => editGuide({ guideFallback: event.target.value }) })),
                h('div', { className: 'lezsp-field' },
                  h('span', null, t('guidePreview')),
                  h('pre', null, draft.strategyText),
                  h('small', { className: 'lezsp-muted' }, t('guidePreviewHint'))));
              return h('fieldset', null,
                h('legend', null, t('textLabel')),
                modeSeg,
                draft.guideMode === 'rules' ? rulesEditor : freeEditor,
                errors.text ? h('small', { className: 'lezsp-error' }, errors.text) : null);
            };
            return h('section', { 'aria-label': t('editStrategyTitle') },
              h('div', { className: 'lezsp-between lezsp-row' },
                button(t('back'), () => { if (discardIfDirty()) closeDetail(); }, { className: 'lezsp-link' }),
                badge(saved ? (isActive ? t('activeBadge') : t('savedBadge')) : t('unsavedBadge'), isActive ? 'on' : '')),
              h('h2', { className: 'lezsp-detail-title', tabIndex: -1, id: idFor('strategyDetailTitle'), ref: titleRef('strategyDetail') }, saved ? t('editStrategyTitle') : t('newStrategyTitle')),
              h('p', { className: 'lezsp-muted' }, isActive ? t('detailSubActive') : saved ? t('detailSubSaved') : t('detailSubNew')),
              !capacity.known ? hostCapacityNotice() : saveBlocked ? h('p', { className: 'lezsp-note warn', role: 'status' }, saveBlocked) : null,
              draft.converting ? h('p', { className: 'lezsp-note warn' }, t('convertedHint')) : null,
              h('form', { onSubmit: (event) => { event.preventDefault(); saveStrategy(); } },
                h('div', { className: 'lezsp-grid' },
                  h('label', { className: 'lezsp-field', htmlFor: idFor('sName') },
                    h('span', null, t('nameLabel')),
                    h('input', { id: idFor('sName'), type: 'text', maxLength: 60, autoComplete: 'off', value: draft.name, disabled: !editable, placeholder: t('namePlaceholder'), 'aria-invalid': errors.name ? 'true' : undefined, 'aria-describedby': errors.name ? idFor('sName-error') : undefined, onChange: (event) => editStrategyField('name', event.target.value) }),
                    errors.name ? h('small', { className: 'lezsp-error', id: idFor('sName-error') }, errors.name) : null),
                  h('div', { className: 'lezsp-field' }, h('span', null, t('typeLabel')), typeChoices)),
                h('p', { className: 'lezsp-muted' }, draft.type === 'fixed' ? t('typeHintFixed') : t('typeHintAuto')),
                h('fieldset', { id: idFor('sChoice'), tabIndex: -1, 'aria-label': t(draft.type === 'fixed' ? 'fixedPanel' : 'autoPanel'), 'aria-invalid': (errors.fixed || errors.models) ? 'true' : undefined },
                  h('legend', null, draft.type === 'fixed' ? t('fixedPanel') : t('autoPanel')),
                  h('div', { className: 'lezsp-between lezsp-row' },
                    h('span', { className: 'lezsp-muted' }, fmt(t('selectedCount'), { count: draft.models.size })),
                    button(ui.choiceOpen ? t('choiceCollapse') : t('choiceExpand'), () => commit((state) => ({ ...state, choiceOpen: !state.choiceOpen })), { className: 'lezsp-small' })),
                  h('div', { className: 'lezsp-chip-group' }, [...draft.models].map((key) => h('span', { key, className: 'lezsp-chip' },
                    choiceLabel(key).name,
                    draft.type === 'auto' ? button('✕', () => choose(key, false, 'auto'), { className: 'lezsp-chip-x', disabled: !editable, aria: t('guideRemoveModel') }) : null))),
                  ui.choiceOpen || !draft.models.size ? h(React.Fragment, null,
                    h('p', { className: 'lezsp-muted' }, draft.type === 'fixed' ? t('fixedHint') : t('autoHint')),
                    h('label', { className: 'lezsp-field', htmlFor: idFor('choiceSearch') },
                      h('span', null, t('searchModels')),
                      h('input', { id: idFor('choiceSearch'), type: 'search', value: ui.choiceQuery, disabled: !editable, placeholder: t('searchModelsPlaceholder'), onChange: (event) => commit((state) => ({ ...state, choiceQuery: event.target.value })) })),
                    choiceRows(draft.type) || h('p', { className: 'lezsp-muted' }, t(draft.type === 'fixed' ? 'noPoolFixed' : 'noPoolAuto'))) : null,
                  errors.fixed ? h('small', { className: 'lezsp-error' }, errors.fixed) : null,
                  errors.models ? h('small', { className: 'lezsp-error' }, errors.models) : null),
                draft.type === 'auto' ? guideEditor() : null,
                ui.error?.fields ? h('div', { className: 'lezsp-banner err', role: 'alert' }, t('formError')) : null,
                h('div', { className: 'lezsp-form-actions' },
                  h('button', { type: 'submit', className: 'lezsp-primary', disabled: !editable }, t('saveStrategy')),
                  button(saved ? t('discard') : t('cancelEdit'), () => {
                    if (!saved) { if (discardIfDirty()) closeDetail(); return; }
                    if (discardIfDirty()) openStrategy(saved.id);
                  }, { disabled: busy }))));
          }

          function modelsPage() {
            const pool = ui.poolDraft;
            if (!pool) return null;
            const keys = pool.keys;
            const savedKeys = new Set(snap.management.pool.map(keyOf));
            const draftCount = keys.size;
            const dirty = !sameRouteSet(keys, savedKeys);
            const removals = [...savedKeys].filter((key) => !keys.has(key));
            const additions = [...keys].filter((key) => !savedKeys.has(key));
            const byKey = new Map(snap.management.pool.map((entry) => [keyOf(entry), entry]));
            const applied = snap.management.active?.snapshot || null;
            const protect = removals.filter((key) => applied && (applied.models || []).some((route) => keyOf(route) === key));
            const impact = [];
            if (removals.length) {
              const items = removals.map((key) => { const entry = byKey.get(key); return entry?.name || JSON.parse(key)[1]; });
              impact.push(fmt(t('poolImpactRemove'), { items: items.join('、') }) + (protect.length ? ' ' + t('poolImpactProtect') : ''));
            }
            if (additions.length) impact.push(fmt(t('poolImpactAdd'), { items: additions.map((key) => { const candidate = snap.candidates.find((row) => keyOf(row) === key); return candidate?.name || JSON.parse(key)[1]; }).join('、') }));
            const limits = snap.management.limits;
            const hostDefaults = hostLimitDefaults(snap.host);
            const limitBaseline = limits ? { maxDepth: String(limits.maxDepth), maxActive: String(limits.maxActive) } : hostDefaults;
            const limitDraft = ui.limitDraft || limitBaseline;
            const limitDirty = limitDraft.maxDepth !== limitBaseline.maxDepth || limitDraft.maxActive !== limitBaseline.maxActive;
            // Unsaved limits start from the Host values; the note says so until the
            // draft differs from them. Editing back to the Host values restores it.
            const hostDefaultsShown = !limits && limitDraft.maxDepth === hostDefaults.maxDepth && limitDraft.maxActive === hostDefaults.maxActive;
            const depthOver = Boolean(limits && limits.maxDepth > snap.host.maxDepth);
            const activeOver = Boolean(limits && capacity.known && limits.maxActive > capacity.raw);
            const conflict = depthOver || activeOver;
            const effectiveDepth = limits ? Math.min(limits.maxDepth, snap.host.maxDepth) : null;
            const limitMaxActive = capacity.known ? capacity.ceiling : PLUGIN_MAX_ACTIVE;
            const limitBlocked = capacityBlockMessage('limits.save');
            const hostCeilingText = capacity.known
              ? fmt(t('hostCeiling'), { depth: snap.host.maxDepth, active: capacity.raw })
              : fmt(t('hostCeilingUnknown'), { depth: snap.host.maxDepth, reason: capacity.reason ? fmt(t('hostCeilingReason'), { reason: capacity.reason }) : '' });
            const staleCandidates = snap.candidates.filter((row) => !row.authorized || !row.available);
            // 先保留“可用在前、不可用沉底”的宿主顺序，再应用搜索与 provider 分组。
            const orderedCandidates = [
              ...snap.candidates.filter((row) => row.authorized && row.available),
              ...staleCandidates,
            ];
            const visibleCandidates = orderedCandidates.filter((candidate) => matchesModelQuery(candidate, ui.poolQuery));
            return h(React.Fragment, null,
              h('div', { className: 'lezsp-between lezsp-row' },
                h('div', null, h('h2', { id: idFor('modelsTitle'), tabIndex: -1, ref: titleRef('models') }, t('modelsTitle')), h('p', { className: 'lezsp-sub' }, t('modelsSub'))),
                badge(staleCandidates.length
                  ? fmt(t('modelCountUnavailable'), { count: snap.candidates.length, unavailable: staleCandidates.length })
                  : fmt(t('modelCount'), { count: snap.candidates.length }))),
              h('div', { className: 'lezsp-between lezsp-row' },
                h('div', { className: 'lezsp-row' },
                  button(t('selectAll'), selectAllPool, { className: 'lezsp-small', disabled: !editable }),
                  button(t('clearAll'), clearAllPool, { className: 'lezsp-small', disabled: !editable }),
                  button(t('poolSync'), syncPool, { className: 'lezsp-small', disabled: busy || !snap }),
                  h('span', { className: 'lezsp-count' }, fmt(t('selectedCount'), { count: draftCount }))),
                h('span', { className: 'lezsp-count' }, fmt(t('savedCount'), { count: savedKeys.size }))),
              h('p', { className: 'lezsp-muted' }, impact.length ? impact.join(' ') : t('poolImpact')),
              h('div', { className: 'lezsp-row' },
                h('label', { className: 'lezsp-field', htmlFor: idFor('poolSearch'), style: { flex: '1', minWidth: '180px' } },
                  h('span', null, t('searchModels')),
                  h('input', { id: idFor('poolSearch'), type: 'search', value: ui.poolQuery, disabled: !editable, placeholder: t('searchModelsPlaceholder'), onChange: (event) => commit((state) => ({ ...state, poolQuery: event.target.value })) })),
                button(t('selectVisible'), selectVisiblePool, { className: 'lezsp-small', disabled: !editable })),
              h('div', { className: 'lezsp-stack' }, visibleCandidates.length
                ? [...groupByProvider(visibleCandidates)].map(([provider, providerRows]) => h('section', { key: provider, className: 'lezsp-provider-group', 'aria-label': provider },
                  h('h3', { className: 'lezsp-provider-title' }, provider, h('span', { className: 'lezsp-count' }, providerRows.length)),
                  h('div', { className: 'lezsp-stack' }, providerRows.map((candidate) => {
                    const key = keyOf(candidate);
                    const checked = keys.has(key);
                    const entry = pool.entries.get(key) || byKey.get(key);
                    const stale = !candidate.authorized || !candidate.available;
                    const keptStale = stale && savedKeys.has(key);
                    return h('div', { key, className: 'lezsp-pool-item' },
                      h('div', { className: `lezsp-pool-row${stale ? ' stale' : ''}` },
                        h('input', { type: 'checkbox', checked, disabled: !editable || (!checked && stale), 'aria-label': fmt(stale ? t('poolToggleLabelStale') : t('poolToggleLabel'), { name: candidate.name || candidate.model }), onChange: (event) => { event.stopPropagation(); togglePool(candidate); } }),
                        h('label', { className: 'lezsp-choice-body' },
                          h('span', { className: 'lezsp-choice-name' }, candidate.name || candidate.model, ' ', h('span', { className: 'lezsp-muted' }, candidate.provider)),
                          h('span', { className: 'lezsp-muted' }, entry?.purpose || candidate.description || t('noPurpose')),
                          h('span', { className: 'lezsp-muted' }, reasoningText(candidate, entry)),
                          stale ? h('span', { className: keptStale ? 'lezsp-warn' : 'lezsp-error' }, keptStale ? t('unavailableKeptHint') : t('unavailableHint')) : null),
                        h('select', { className: 'lezsp-effort', value: entry?.effort || '', disabled: !editable || !byKey.has(key), title: t('effortHint'), 'aria-label': `${t('effortLabel')}: ${candidate.name || candidate.model}`, onChange: (event) => savePoolEffort(candidate, entry, event.target.value) },
                          h('option', { value: '' }, t('effortDefault')),
                          ...((candidate.reasoning?.efforts || entry?.efforts || [])).map((effort) => h('option', { key: effort.id, value: effort.id }, effort.name || effort.id))),
                        button(t('abilityCard'), () => ui.detail?.kind === 'model' && ui.detail.key === key ? closeDetail() : openModel(key), { className: 'lezsp-small', disabled: busy || !byKey.has(key), aria: fmt(t('abilityCardLabel'), { name: candidate.name || candidate.model, provider: candidate.provider }) })),
                      ui.detail?.kind === 'model' && ui.detail.key === key && ui.modelDraft ? modelDetail() : null);
                  }))))
                : h('div', { className: 'lezsp-empty' }, t(snap.candidates.length ? 'noModelMatches' : 'emptyModels'))),
              dirty ? h('div', { className: 'lezsp-dirtybar', role: 'status' },
                h('span', null, t('poolDirty')),
                h('span', { style: { flex: '1' } }),
                button(t('discardPool'), () => commit((state) => ({ ...state, poolDraft: draftsFrom(snap).poolDraft, error: null })), { className: 'lezsp-small', disabled: busy }),
                button(t('savePool'), savePool, { className: 'lezsp-small lezsp-primary', disabled: !editable })) : null,
              h('section', { className: 'lezsp-stack', 'aria-labelledby': idFor('limitsTitle') },
                h('div', { className: 'lezsp-between lezsp-row' },
                  h('h2', { id: idFor('limitsTitle'), tabIndex: -1 }, t('limitsTitle')),
                  badge(t('sharedBadge'))),
                h('p', { className: 'lezsp-sub' }, t('limitsSub')),
                hostCapacityNotice(),
                capacity.known ? h('p', { className: 'lezsp-muted' }, hostCeilingText) : null,
                h('div', { className: 'lezsp-grid' },
                  h('label', { className: 'lezsp-field', htmlFor: idFor('limDepth') },
                    h('span', null, t('maxDepth')),
                    h('input', { id: idFor('limDepth'), type: 'number', inputMode: 'numeric', min: 0, max: snap.host.maxDepth, step: 1, value: limitDraft.maxDepth, disabled: !editable, placeholder: '0–' + snap.host.maxDepth, 'aria-describedby': idFor('limDepthHint'), onChange: (event) => commit((state) => ({ ...state, limitDraft: { ...state.limitDraft, maxDepth: event.target.value } })) }),
                    h('small', { className: 'lezsp-muted', id: idFor('limDepthHint') }, fmt(hostDefaultsShown ? t('depthHintHost') : t('depthHint'), { max: snap.host.maxDepth }))),
                  h('label', { className: 'lezsp-field', htmlFor: idFor('limActive') },
                    h('span', null, t('maxActive')),
                    h('input', { id: idFor('limActive'), type: 'number', inputMode: 'numeric', min: 1, max: limitMaxActive, step: 1, value: limitDraft.maxActive, disabled: !editable, placeholder: '1–' + limitMaxActive, 'aria-describedby': idFor('limActiveHint'), onChange: (event) => commit((state) => ({ ...state, limitDraft: { ...state.limitDraft, maxActive: event.target.value } })) }),
                    h('small', { className: 'lezsp-muted', id: idFor('limActiveHint') }, capacity.known
                      ? (hostDefaultsShown ? fmt(t('activeHintHost'), { max: limitMaxActive }) : fmt(t('activeHint'), { max: limitMaxActive, host: capacity.raw }))
                      : t('activeHintUnknown')))),
                h('p', { className: 'lezsp-muted' }, limits ? fmt(t('savedLimits'), { depth: limits.maxDepth, active: limits.maxActive }) : t('noSavedLimits')),
                h('p', { className: 'lezsp-muted' }, active
                  ? (limits
                    ? (capacity.known
                      ? fmt(t('effectiveActive'), { depth: effectiveDepth, active: Math.min(limits.maxActive, capacity.ceiling), local: limits.maxActive, host: capacity.raw })
                      : fmt(t('effectiveUnknown'), { depth: limits.maxDepth, active: limits.maxActive }))
                    : (capacity.known
                      ? fmt(t('effectiveHostOnly'), { depth: snap.host.maxDepth, active: capacity.ceiling })
                      : t('effectiveHostOnlyUnknown')))
                  : t('effectiveClosed')),
                limitDirty ? banner(t('limitsDirty'), 'warn') : null,
                conflict ? banner(fmt(t('hostConflict'), { depth: limits.maxDepth, active: limits.maxActive, ceilingDepth: snap.host.maxDepth, ceilingActive: capacity.known ? capacity.raw : '—' }) + (active ? t('hostConflictActive') : ''), 'warn') : null,
                h('div', { className: 'lezsp-form-actions' },
                  button(t('saveLimits'), saveLimits, { className: 'lezsp-primary', disabled: !editable || !limitDirty || Boolean(limitBlocked), title: limitBlocked || undefined }),
                  button(t('discardLimits'), () => commit((state) => ({ ...state, limitDraft: draftsFrom(snap).limitDraft, error: null })), { disabled: busy || !limitDirty }))));
          }

          function modelDetail() {
            const draft = ui.modelDraft;
            return h('div', { className: 'lezsp-guide-picker', 'aria-label': t('abilityTitle') },
              h('div', { className: 'lezsp-between lezsp-row' },
                h('h3', { tabIndex: -1, id: idFor('modelDetailTitle'), ref: titleRef('modelDetail') },
                  t('abilityTitle'), h('span', { className: 'lezsp-detail-meta' }, `${draft.name || draft.model} · ${draft.provider}`)),
                button('✕', () => { if (discardIfDirty()) closeDetail(); }, { className: 'lezsp-small', aria: t('cancelEdit') })),
              h('label', { className: 'lezsp-field', htmlFor: idFor('mPurpose') },
                h('span', null, t('purposeLabel')),
                h('input', { id: idFor('mPurpose'), type: 'text', maxLength: 200, value: draft.purpose, disabled: !editable, onChange: (event) => commit((state) => ({ ...state, modelDraft: { ...state.modelDraft, purpose: event.target.value, dirty: true } })) })),
              h('label', { className: 'lezsp-field', htmlFor: idFor('mEffort') },
                h('span', null, t('effortLabel')),
                h('select', { id: idFor('mEffort'), value: draft.effort || '', disabled: !editable, onChange: (event) => commit((state) => ({ ...state, modelDraft: { ...state.modelDraft, effort: event.target.value, dirty: true } })) },
                  h('option', { value: '' }, t('effortDefault')),
                  ...(draft.efforts || []).map((effort) => h('option', { key: effort.id, value: effort.id }, effort.name || effort.id)))),
              h('p', { className: 'lezsp-muted' }, t('effortHint')),
              h('label', { className: 'lezsp-field', htmlFor: idFor('mNote') },
                h('span', null, t('noteLabel')),
                h('textarea', { id: idFor('mNote'), rows: 4, maxLength: 500, value: draft.note, disabled: !editable, onChange: (event) => commit((state) => ({ ...state, modelDraft: { ...state.modelDraft, note: event.target.value, dirty: true } })) })),
              h('p', { className: 'lezsp-muted' }, t('noteHintUseCase')),
              h('p', { className: 'lezsp-muted' }, t('noteHintEffect')),
              h('div', { className: 'lezsp-form-actions' },
                button(t('saveNote'), saveModelNote, { className: 'lezsp-primary', disabled: !editable || !draft.dirty }),
                button(t('discardNote'), () => commit((state) => {
                  const current = state.modelDraft;
                  if (!current) return state;
                  const entry = snap.management.pool.find((row) => sameRoute(row, current));
                  return {
                    ...state,
                    modelDraft: { ...current, name: entry?.name || current.name, purpose: entry ? entry.purpose || '' : current.purpose, note: entry ? entry.note || '' : current.note, effort: entry ? entry.effort || '' : current.effort, dirty: false },
                    error: null,
                  };
                }), { disabled: busy || !draft.dirty })));
          }

          function recordsPage() {
            // 观测与配置分离：provider 筛选 + 任务/策略/模型关键词搜索。
            const providers = [...new Set(snap.runs.flatMap((record) => [record.requestedProvider, record.actualProvider]).filter(Boolean))];
            const query = ui.recordQuery.trim().toLowerCase();
            const visibleRuns = snap.runs.filter((record) => {
              if (ui.recordProvider && record.requestedProvider !== ui.recordProvider && record.actualProvider !== ui.recordProvider) return false;
              if (!query) return true;
              return [record.strategyName, record.label, record.requestedModel, record.actualModel].some((value) => String(value || '').toLowerCase().includes(query));
            });
            return h(React.Fragment, null,
              h('div', { className: 'lezsp-between lezsp-row' },
                h('h2', { id: idFor('recordsTitle'), tabIndex: -1, ref: titleRef('records') }, t('recordsTitle')),
                badge(fmt(t('recordsCount'), { shown: visibleRuns.length, total: snap.runs.length }))),
              h('p', { className: 'lezsp-sub' }, t('recordsSub')),
              h('div', { className: 'lezsp-filter-row', role: 'group', 'aria-label': t('recordsTitle') },
                button(t('allFilter'), () => commit((state) => ({ ...state, recordProvider: '' })), { className: 'lezsp-small', pressed: !ui.recordProvider }),
                providers.map((provider) => button(provider, () => commit((state) => ({ ...state, recordProvider: provider })), { className: 'lezsp-small', pressed: ui.recordProvider === provider }))),
              h('label', { className: 'lezsp-field', htmlFor: idFor('recordSearch') },
                h('span', null, t('searchModels')),
                h('input', { id: idFor('recordSearch'), type: 'search', value: ui.recordQuery, placeholder: t('searchRecordsPlaceholder'), onChange: (event) => commit((state) => ({ ...state, recordQuery: event.target.value })) })),
              h('p', { className: 'lezsp-muted' }, t('recordsHint')),
              visibleRuns.length ? h('div', { className: 'lezsp-stack' }, visibleRuns.map((record) => {
                const name = record.strategyName || (record.strategyId === 'legacy' ? t('legacyStrategyName') : '') || t('legacyStrategyName');
                const status = record.status === 'started' ? t('statusStarted') : record.status === 'disposed' ? t('statusDisposed') : t('statusAdmitted');
                const actual = record.evidence === 'assistant/message' && record.actualModel ? routeLabel({ provider: record.actualProvider, model: record.actualModel }) : t('noActual');
                const evidence = record.evidence === 'assistant/message' ? 'assistant/message' : record.evidence === 'request/header (尚无响应)' ? t('evidenceRequested') : record.evidence === 'pending' ? t('evidencePending') : (record.evidence || t('noActual'));
                return h('article', { key: record.id, className: 'lezsp-record' },
                  h('details', null,
                    h('summary', null, h('span', { className: 'lezsp-record-head' },
                      h('span', { className: 'lezsp-time' }, formatTime(record.createdAt)),
                      h('strong', null, name),
                      h('span', { className: 'lezsp-muted' }, record.label || record.id),
                      h('span', { className: 'lezsp-status-tag' }, status))),
                    h('div', { className: 'lezsp-record-body' },
                      h('dl', null,
                        h('dt', null, t('requested')), h('dd', { className: 'lezsp-route' }, routeLabel({ provider: record.requestedProvider, model: record.requestedModel }) || t('noRequest')),
                        h('dt', null, t('actual')), h('dd', { className: 'lezsp-route' }, actual),
                        h('dt', null, t('evidence')), h('dd', null, evidence),
                        h('dt', null, t('status')), h('dd', null, status),
                        h('dt', null, t('recordedAt')), h('dd', null, formatTime(record.createdAt))))));
              })) : h('div', { className: 'lezsp-empty' }, t('noRecords')));
          }

          // Package metadata is optional: a snapshot without it renders no header extras.
          const packageVersion = snap && typeof snap.version === 'string' ? snap.version : '';
          const packageRepository = snap && typeof snap.repository === 'string' ? snap.repository : '';
          const packageRepoName = repoName(packageRepository);

          if (!sessionId) return h('div', { className: 'lezsp' }, h('style', null, CSS), t('noSession'));
          return h('div', { className: 'lezsp', 'aria-label': t('title'), 'aria-busy': busy },
            h('style', null, CSS),
            h('header', null,
              h('div', { className: 'lezsp-title-row' },
                h('h1', null, t('title')),
                packageVersion || packageRepoName ? h('div', { className: 'lezsp-head-meta' },
                  packageVersion
                    ? h('span', { className: 'lezsp-badge lezsp-version-badge', 'aria-label': fmt(t('versionLabel'), { version: packageVersion }) }, packageVersion)
                    : null,
                  packageRepoName
                    ? h('a', { className: 'lezsp-repo-link', href: packageRepository, target: '_blank', rel: 'noopener noreferrer', 'aria-label': fmt(t('repoLinkLabel'), { repo: packageRepoName }) }, t('repoLink'))
                    : null) : null),
              h('div', { className: 'lezsp-between lezsp-row' },
                h('p', { className: 'lezsp-sub' }, t('description')),
                h('div', { className: 'lezsp-row' },
                  h('span', { className: 'lezsp-session-chip', role: busy ? 'status' : undefined, 'aria-live': busy ? 'polite' : undefined }, busy ? t(ui.busy === 'read' ? 'loading' : 'saving') : t('scope')),
                  busy ? button(t('cancel'), cancel, { className: 'lezsp-small' }) : null))),
            h('nav', { className: 'lezsp-nav', 'aria-label': t('navLabel') },
              ['session', 'strategies', 'records'].map((key) => h('button', { key, type: 'button', 'aria-current': page === key ? 'page' : undefined, onClick: () => goPage(key) }, t({ session: 'pageSession', strategies: 'pageStrategies', records: 'pageRecords' }[key])))),
            ui.error ? h('div', { className: 'lezsp-banner err', role: 'alert' },
              h('p', null, `${t('error')}: ${ui.error.message}`),
              snap ? h('div', { className: 'lezsp-actions' }, button(t('retry'), read, { disabled: busy })) : null) : null,
            ui.notice ? banner(ui.notice, ui.noticeKind) : null,
            ui.mustRefresh ? h('div', { className: 'lezsp-banner warn' }, h('p', null, t('mustRefresh')), h('div', { className: 'lezsp-actions' }, button(t('refresh'), read, { disabled: busy }))) : null,
            ui.conflict ? h('div', { className: 'lezsp-banner err', role: 'alert' },
              h('strong', null, t('conflict')), h('p', null, t('conflictHelp')),
              h('div', { className: 'lezsp-actions' }, button(t('loadServer'), loadServer, { disabled: busy }))) : null,
            !snap ? h('div', { className: 'lezsp-banner' },
              h('p', null, t('noSnapshot')),
              button(t('retry'), read, { disabled: busy })) : h(React.Fragment, null,
              !snap.canEdit ? banner(t('readOnly')) : null,
              page === 'session' ? sessionPage() : page === 'strategies' ? strategiesPage() : recordsPage()));
        }

        function PolicyTab(props) {
          const { tab } = props.useTabInfo();
          return h(PolicySession, { key: props.sessionId, sessionId: props.sessionId, t: props.t, visible: tab.visible, tabSignal: tab.signal });
        }
        function HeaderButton({ sessionId, t }) {
          const [error, setError] = useState('');
          return h('span', { className: 'lezsp-header' }, h('style', null, CSS),
            h('button', { type: 'button', title: t('open'), 'aria-label': t('open'), disabled: !sessionId, onClick: () => {
              try { ctx.sidebarRight.openTab(KIND); setError(''); } catch (failure) { setError(failure?.message || String(failure)); }
            } }, h(PolicyIcon, { size: 18 })),
            error ? h('span', { role: 'alert', title: error }, error) : null);
        }
        ctx.effect(() => ctx.sidebarRightTabs.register({
          id: ID, kind: KIND, title: () => translate('title'), keepMounted: true,
          guide: [{ id: 'session-policy', order: 45, title: () => translate('title'), description: () => translate('description'), icon: PolicyIcon }],
        }), `${ID}: tab type and native guide card`);
        ctx.effect(() => ctx.slots.inject('sidebar.right.pane.tab', () => ctx.slots.register({
          name: 'sidebar.right.pane.tab', key: ID, locale: NS,
        }, PolicyTab)), `${ID}: policy tab body`);
        ctx.effect(() => ctx.slots.inject('conversation.session.header.utilities', () => ctx.slots.register({
          name: 'conversation.session.header.utilities', id: ID, order: 45, locale: NS,
        }, HeaderButton)), `${ID}: session header opener`);
      },
    };
  },
});
