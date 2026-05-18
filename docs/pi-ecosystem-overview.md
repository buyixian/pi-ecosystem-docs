# PI 扩展生态系统总览

> 默认中文 · English mirror: [Open the English version](./pi-ecosystem-overview.en.md)

> 自动生成于 2026-05-18 · 2,766 packages

## 快速选型

| 目标 | 首选插件 | 安装命令 | 备选 | 为什么看它 |
|---|---|---|---|---|
| 多代理委派 / 并行协作 | [pi-subagents](https://www.npmjs.com/package/pi-subagents) | `npm install pi-subagents` | [pi-crew](https://www.npmjs.com/package/pi-crew), [pi-minions](https://www.npmjs.com/package/pi-minions) | 把复杂任务拆给多个子代理并行执行，适合长链路重构和多文件修改。 |
| 接入 MCP 工具与资源 | [pi-mcp-adapter](https://www.npmjs.com/package/pi-mcp-adapter) | `npm install pi-mcp-adapter` | [context-mode](https://www.npmjs.com/package/context-mode), [pi-lean-ctx](https://www.npmjs.com/package/pi-lean-ctx) | 连接外部 MCP 服务器，把搜索、资源、提示词和工具统一接入 PI。 |
| Web 搜索 / 抓取 / 读取 | [pi-web-access](https://www.npmjs.com/package/pi-web-access) | `npm install pi-web-access` | [@ollama/pi-web-search](https://www.npmjs.com/package/@ollama/pi-web-search), [@juicesharp/rpiv-web-tools](https://www.npmjs.com/package/@juicesharp/rpiv-web-tools) | 做实时搜索、网页抓取、PDF 解析和 GitHub 资料拉取时最直接。 |
| 长会话压缩与恢复 | [pi-continue](https://www.npmjs.com/package/pi-continue) | `npm install pi-continue` | [pi-context-prune](https://www.npmjs.com/package/pi-context-prune), [@sting8k/pi-vcc](https://www.npmjs.com/package/@sting8k/pi-vcc) | 在长任务里控制上下文窗口，保留关键状态并在压缩后继续工作。 |
| 计划、执行、审查 | [@plannotator/pi-extension](https://www.npmjs.com/package/@plannotator/pi-extension) | `npm install @plannotator/pi-extension` | [pi-gsd](https://www.npmjs.com/package/pi-gsd), [@juicesharp/rpiv-pi](https://www.npmjs.com/package/@juicesharp/rpiv-pi) | 适合把需求拆成明确步骤，强制进入结构化工作流。 |
| 结构化提问与待办 | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question) | `npm install @juicesharp/rpiv-ask-user-question` | [@juicesharp/rpiv-todo](https://www.npmjs.com/package/@juicesharp/rpiv-todo), [@juicesharp/rpiv-btw](https://www.npmjs.com/package/@juicesharp/rpiv-btw) | 让代理先问清楚再做事，减少猜测和返工。 |
| 代码审查、LSP、格式化 | [pi-simplify](https://www.npmjs.com/package/pi-simplify) | `npm install pi-simplify` | [pi-lens](https://www.npmjs.com/package/pi-lens), [@spences10/pi-lsp](https://www.npmjs.com/package/@spences10/pi-lsp) | 用于自动检查代码质量、类型、风格和局部重构。 |
| 提示词模板与代理模式 | [glimpseui](https://www.npmjs.com/package/glimpseui) | `npm install glimpseui` | [pi-prompt-template-model](https://www.npmjs.com/package/pi-prompt-template-model), [pi-schedule-prompt](https://www.npmjs.com/package/pi-schedule-prompt) | 当你想明确代理如何思考、如何提问、如何输出时最有用。 |
| 工具安全与权限控制 | [@gotgenes/pi-permission-system](https://www.npmjs.com/package/@gotgenes/pi-permission-system) | `npm install @gotgenes/pi-permission-system` | [pi-sandbox](https://www.npmjs.com/package/pi-sandbox), [@aliou/pi-guardrails](https://www.npmjs.com/package/@aliou/pi-guardrails) | 限制高风险工具、隔离权限，适合安全敏感场景。 |

## 生态规模

| 指标 | 数值 |
|---|---|
| 总扩展包数 | 2,766 |
| 分类数 | 34 |
| 总月下载量 | 1,904,299 |

## Top 20 热门扩展

| # | 包名 | 月下载量 | 分类 |
|---|---|---|---|
| 1 | [context-mode](https://www.npmjs.com/package/context-mode) | 86,809 | MCP 协议适配 |
| 2 | [pi-subagents](https://www.npmjs.com/package/pi-subagents) | 86,724 | 子代理/多代理 |
| 3 | [pi-mcp-adapter](https://www.npmjs.com/package/pi-mcp-adapter) | 77,049 | MCP 协议适配 |
| 4 | [pi-web-access](https://www.npmjs.com/package/pi-web-access) | 46,602 | 网络访问 |
| 5 | [@ollama/pi-web-search](https://www.npmjs.com/package/@ollama/pi-web-search) | 25,917 | 网络访问 |
| 6 | [@plannotator/pi-extension](https://www.npmjs.com/package/@plannotator/pi-extension) | 25,787 | 工作流 |
| 7 | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question) | 23,282 | 用户交互 |
| 8 | [@juicesharp/rpiv-todo](https://www.npmjs.com/package/@juicesharp/rpiv-todo) | 23,195 | 用户交互 |
| 9 | [pi-simplify](https://www.npmjs.com/package/pi-simplify) | 17,131 | 代码质量 |
| 10 | [pi-lens](https://www.npmjs.com/package/pi-lens) | 17,114 | 代码质量 |
| 11 | [pi-powerline-footer](https://www.npmjs.com/package/pi-powerline-footer) | 13,938 | 终端 UI |
| 12 | [@juicesharp/rpiv-advisor](https://www.npmjs.com/package/@juicesharp/rpiv-advisor) | 13,440 | 其他 |
| 13 | [@juicesharp/rpiv-web-tools](https://www.npmjs.com/package/@juicesharp/rpiv-web-tools) | 12,818 | 网络访问 |
| 14 | [@juicesharp/rpiv-btw](https://www.npmjs.com/package/@juicesharp/rpiv-btw) | 12,685 | 用户交互 |
| 15 | [pi-agent-flow](https://www.npmjs.com/package/pi-agent-flow) | 11,854 | 其他 |
| 16 | [@juicesharp/rpiv-pi](https://www.npmjs.com/package/@juicesharp/rpiv-pi) | 11,733 | 工作流 |
| 17 | [pi-markdown-preview](https://www.npmjs.com/package/pi-markdown-preview) | 11,260 | Markdown 预览 |
| 18 | [@juicesharp/rpiv-args](https://www.npmjs.com/package/@juicesharp/rpiv-args) | 11,043 | 技能包 |
| 19 | [@runfusion/fusion](https://www.npmjs.com/package/@runfusion/fusion) | 10,984 | 其他 |
| 20 | [glimpseui](https://www.npmjs.com/package/glimpseui) | 10,505 | 提示词管理 |

## 分类概览

| 分类 | 包数 | 总月下载量 | Top 3 插件 |
|---|---|---|---|
| 其他 | 1,343 | 564,265 | [@juicesharp/rpiv-advisor](https://www.npmjs.com/package/@juicesharp/rpiv-advisor), [pi-agent-flow](https://www.npmjs.com/package/pi-agent-flow), [@runfusion/fusion](https://www.npmjs.com/package/@runfusion/fusion) |
| MCP 协议适配 | 75 | 212,840 | [context-mode](https://www.npmjs.com/package/context-mode), [pi-mcp-adapter](https://www.npmjs.com/package/pi-mcp-adapter), [pi-lean-ctx](https://www.npmjs.com/package/pi-lean-ctx) |
| 子代理/多代理 | 124 | 185,612 | [pi-subagents](https://www.npmjs.com/package/pi-subagents), [@tintinweb/pi-subagents](https://www.npmjs.com/package/@tintinweb/pi-subagents), [pi-crew](https://www.npmjs.com/package/pi-crew) |
| 网络访问 | 110 | 134,893 | [pi-web-access](https://www.npmjs.com/package/pi-web-access), [@ollama/pi-web-search](https://www.npmjs.com/package/@ollama/pi-web-search), [@juicesharp/rpiv-web-tools](https://www.npmjs.com/package/@juicesharp/rpiv-web-tools) |
| 用户交互 | 34 | 85,716 | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question), [@juicesharp/rpiv-todo](https://www.npmjs.com/package/@juicesharp/rpiv-todo), [@juicesharp/rpiv-btw](https://www.npmjs.com/package/@juicesharp/rpiv-btw) |
| 终端 UI | 111 | 82,376 | [pi-powerline-footer](https://www.npmjs.com/package/pi-powerline-footer), [pi-btw](https://www.npmjs.com/package/pi-btw), [pi-mermaid](https://www.npmjs.com/package/pi-mermaid) |
| 工作流 | 49 | 65,325 | [@plannotator/pi-extension](https://www.npmjs.com/package/@plannotator/pi-extension), [@juicesharp/rpiv-pi](https://www.npmjs.com/package/@juicesharp/rpiv-pi), [@pi-unipi/workflow](https://www.npmjs.com/package/@pi-unipi/workflow) |
| 记忆系统 | 79 | 64,702 | [@samfp/pi-memory](https://www.npmjs.com/package/@samfp/pi-memory), [pi-hermes-memory](https://www.npmjs.com/package/pi-hermes-memory), [pi-memctx](https://www.npmjs.com/package/pi-memctx) |
| 技能包 | 127 | 61,777 | [@juicesharp/rpiv-args](https://www.npmjs.com/package/@juicesharp/rpiv-args), [pi-docparser](https://www.npmjs.com/package/pi-docparser), [@spences10/pi-skills](https://www.npmjs.com/package/@spences10/pi-skills) |
| 代码质量 | 53 | 60,452 | [pi-simplify](https://www.npmjs.com/package/pi-simplify), [pi-lens](https://www.npmjs.com/package/pi-lens), [@spences10/pi-lsp](https://www.npmjs.com/package/@spences10/pi-lsp) |
| 上下文管理 | 100 | 46,010 | [pi-bar](https://www.npmjs.com/package/pi-bar), [pi-continue](https://www.npmjs.com/package/pi-continue), [@sting8k/pi-vcc](https://www.npmjs.com/package/@sting8k/pi-vcc) |
| 工具与安全 | 87 | 41,374 | [@gotgenes/pi-permission-system](https://www.npmjs.com/package/@gotgenes/pi-permission-system), [@aliou/pi-guardrails](https://www.npmjs.com/package/@aliou/pi-guardrails), [pi-permission-system](https://www.npmjs.com/package/pi-permission-system) |
| 提示词管理 | 46 | 35,678 | [glimpseui](https://www.npmjs.com/package/glimpseui), [pi-prompt-template-model](https://www.npmjs.com/package/pi-prompt-template-model), [pi-schedule-prompt](https://www.npmjs.com/package/pi-schedule-prompt) |
| 元包/管理工具 | 13 | 26,910 | [pi-depo](https://www.npmjs.com/package/pi-depo), [@pi-unipi/core](https://www.npmjs.com/package/@pi-unipi/core), [@pi-unipi/unipi](https://www.npmjs.com/package/@pi-unipi/unipi) |
| 外部集成 | 27 | 26,473 | [@llblab/pi-telegram](https://www.npmjs.com/package/@llblab/pi-telegram), [whatsapp-pi](https://www.npmjs.com/package/whatsapp-pi), [pi-convex](https://www.npmjs.com/package/pi-convex) |
| 模型供应商 | 65 | 19,112 | [pi-provider-kimi-code](https://www.npmjs.com/package/pi-provider-kimi-code), [pi-provider-litellm](https://www.npmjs.com/package/pi-provider-litellm), [pi-xiaomi-mimo-provider](https://www.npmjs.com/package/pi-xiaomi-mimo-provider) |
| 代理自主模式 | 17 | 18,943 | [@tmustier/pi-ralph-wiggum](https://www.npmjs.com/package/@tmustier/pi-ralph-wiggum), [pi-caveman](https://www.npmjs.com/package/pi-caveman), [@lnilluv/pi-ralph-loop](https://www.npmjs.com/package/@lnilluv/pi-ralph-loop) |
| 主题美化 | 44 | 18,183 | [pi-studio](https://www.npmjs.com/package/pi-studio), [pi-terminal-theme](https://www.npmjs.com/package/pi-terminal-theme), [@victor-software-house/pi-curated-themes](https://www.npmjs.com/package/@victor-software-house/pi-curated-themes) |
| Markdown 预览 | 16 | 17,741 | [pi-markdown-preview](https://www.npmjs.com/package/pi-markdown-preview), [@curl.md/pi](https://www.npmjs.com/package/@curl.md/pi), [pi-image-tools](https://www.npmjs.com/package/pi-image-tools) |
| 会话管理 | 47 | 16,498 | [@kaiserlich-dev/pi-session-search](https://www.npmjs.com/package/@kaiserlich-dev/pi-session-search), [pi-session-search](https://www.npmjs.com/package/pi-session-search), [pi-edit-session-in-place](https://www.npmjs.com/package/pi-edit-session-in-place) |
| 浏览器自动化 | 14 | 16,017 | [pi-chrome](https://www.npmjs.com/package/pi-chrome), [pi-agent-browser-native](https://www.npmjs.com/package/pi-agent-browser-native), [pi-agent-browser](https://www.npmjs.com/package/pi-agent-browser) |
| 成本/代理管理 | 23 | 15,023 | [pi-antigravity-rotator](https://www.npmjs.com/package/pi-antigravity-rotator), [pi-free](https://www.npmjs.com/package/pi-free), [@schultzp2020/pi-cursor](https://www.npmjs.com/package/@schultzp2020/pi-cursor) |
| 仪表盘 | 25 | 12,339 | [@pi-unipi/info-screen](https://www.npmjs.com/package/@pi-unipi/info-screen), [@posthog/pi](https://www.npmjs.com/package/@posthog/pi), [@raindrop-ai/pi-agent](https://www.npmjs.com/package/@raindrop-ai/pi-agent) |
| 文件搜索 | 5 | 12,198 | [@ff-labs/pi-fff](https://www.npmjs.com/package/@ff-labs/pi-fff), [pi-fff](https://www.npmjs.com/package/pi-fff), [@edxeth/pi-fff](https://www.npmjs.com/package/@edxeth/pi-fff) |
| 音频与语音 | 28 | 11,759 | [@codexstar/pi-listen](https://www.npmjs.com/package/@codexstar/pi-listen), [pi-voice-input](https://www.npmjs.com/package/pi-voice-input), [@juicesharp/rpiv-voice](https://www.npmjs.com/package/@juicesharp/rpiv-voice) |
| 聊天/消息 | 9 | 9,216 | [pi-intercom](https://www.npmjs.com/package/pi-intercom), [pi-chatgpt-limit](https://www.npmjs.com/package/pi-chatgpt-limit), [@0xkobold/pi-gateway](https://www.npmjs.com/package/@0xkobold/pi-gateway) |
| 桌面通知 | 27 | 8,327 | [@pi-unipi/notify](https://www.npmjs.com/package/@pi-unipi/notify), [pi-gotify-notifier](https://www.npmjs.com/package/pi-gotify-notifier), [@diegopetrucci/pi-notify](https://www.npmjs.com/package/@diegopetrucci/pi-notify) |
| 设置管理 | 9 | 8,219 | [@juanibiapina/pi-extension-settings](https://www.npmjs.com/package/@juanibiapina/pi-extension-settings), [@axnic/pi-extension-settings](https://www.npmjs.com/package/@axnic/pi-extension-settings), [@axnic/pi-extension-settings-sdk](https://www.npmjs.com/package/@axnic/pi-extension-settings-sdk) |
| 图像处理 | 29 | 8,016 | [pi-better-openai](https://www.npmjs.com/package/pi-better-openai), [@injaneity/pi-computer-use](https://www.npmjs.com/package/@injaneity/pi-computer-use), [pi-codex-image-gen](https://www.npmjs.com/package/pi-codex-image-gen) |
| 测试与诊断 | 13 | 7,790 | [@marcfargas/pi-test-harness](https://www.npmjs.com/package/@marcfargas/pi-test-harness), [@vtstech/pi-model-test](https://www.npmjs.com/package/@vtstech/pi-model-test), [@vtstech/pi-diag](https://www.npmjs.com/package/@vtstech/pi-diag) |
| 数据可视化 | 7 | 5,217 | [@walterra/pi-charts](https://www.npmjs.com/package/@walterra/pi-charts), [@tungthedev/pi-extensions](https://www.npmjs.com/package/@tungthedev/pi-extensions), [@the-forge-flow/visual-explainer-pi](https://www.npmjs.com/package/@the-forge-flow/visual-explainer-pi) |
| 共享工具库 | 2 | 2,629 | [@vtstech/pi-shared](https://www.npmjs.com/package/@vtstech/pi-shared), [@firstpick/pi-utils](https://www.npmjs.com/package/@firstpick/pi-utils) |
| 输出策略 | 4 | 1,412 | [@vanillagreen/pi-output-policy](https://www.npmjs.com/package/@vanillagreen/pi-output-policy), [@nonplanarslicer/pi-save-output](https://www.npmjs.com/package/@nonplanarslicer/pi-save-output), [@badliveware/pi-rich-output](https://www.npmjs.com/package/@badliveware/pi-rich-output) |
| 持续学习 | 4 | 1,257 | [@majorgilles/pi-learning-tutor](https://www.npmjs.com/package/@majorgilles/pi-learning-tutor), [teach-me](https://www.npmjs.com/package/teach-me), [@artale/pi-continuous](https://www.npmjs.com/package/@artale/pi-continuous) |

## 全量目录

完整插件与安装命令请见 [PI 全量插件目录](./pi-extension-catalog.md)。

## 原始数据

| 文件 | 说明 |
|---|---|
| `data/all-packages.json` | 全量 2,364 包结构化数据 |
| `data/classified-v2.json` | 34 细分类别包列表 |
| `data/ecosystem-report.json` | 统计报告 |
