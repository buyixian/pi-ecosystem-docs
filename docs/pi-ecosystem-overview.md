# PI 扩展生态系统总览

> 默认中文 · English mirror: [Open the English version](./pi-ecosystem-overview.en.md)

> 自动生成于 2026-05-10 · 2,364 packages

## 快速选型

| 目标 | 首选插件 | 备选 | 为什么看它 |
|---|---|---|---|
| 多代理委派 / 并行协作 | `pi-subagents` | `taskplane`, `@tintinweb/pi-subagents` | 把复杂任务拆给多个子代理并行执行，适合长链路重构和多文件修改。 |
| 接入 MCP 工具与资源 | `pi-mcp-adapter` | `context-mode`, `pi-lean-ctx` | 连接外部 MCP 服务器，把搜索、资源、提示词和工具统一接入 PI。 |
| Web 搜索 / 抓取 / 读取 | `pi-web-access` | `@ollama/pi-web-search`, `@juicesharp/rpiv-web-tools` | 做实时搜索、网页抓取、PDF 解析和 GitHub 资料拉取时最直接。 |
| 长会话压缩与恢复 | `pi-continue` | `@sting8k/pi-vcc`, `pi-context-prune` | 在长任务里控制上下文窗口，保留关键状态并在压缩后继续工作。 |
| 计划、执行、审查 | `@plannotator/pi-extension` | `pi-gsd`, `@juicesharp/rpiv-pi` | 适合把需求拆成明确步骤，强制进入结构化工作流。 |
| 结构化提问与待办 | `@juicesharp/rpiv-ask-user-question` | `@juicesharp/rpiv-todo`, `@juicesharp/rpiv-btw` | 让代理先问清楚再做事，减少猜测和返工。 |
| 代码审查、LSP、格式化 | `pi-lens` | `pi-simplify`, `@lpirito/pi-diffloop` | 用于自动检查代码质量、类型、风格和局部重构。 |
| 提示词模板与代理模式 | `glimpseui` | `pi-prompt-template-model`, `pi-schedule-prompt` | 当你想明确代理如何思考、如何提问、如何输出时最有用。 |
| 工具安全与权限控制 | `@gotgenes/pi-permission-system` | `@aliou/pi-guardrails`, `pi-pkg-guard` | 限制高风险工具、隔离权限，适合安全敏感场景。 |

## 生态规模

| 指标 | 数值 |
|---|---|
| 总扩展包数 | 2,364 |
| 分类数 | 34 |
| 总月下载量 | 1,497,231 |

## Top 20 热门扩展

| # | 包名 | 月下载量 | 分类 |
|---|---|---|---|
| 1 | `pi-subagents` | 70,608 | 子代理/多代理 |
| 2 | `pi-mcp-adapter` | 59,788 | MCP 协议适配 |
| 3 | `context-mode` | 57,781 | MCP 协议适配 |
| 4 | `pi-web-access` | 34,332 | 网络访问 |
| 5 | `@ollama/pi-web-search` | 26,114 | 网络访问 |
| 6 | `@plannotator/pi-extension` | 21,911 | 工作流 |
| 7 | `pi-lens` | 13,237 | 代码质量 |
| 8 | `pi-markdown-preview` | 12,052 | Markdown 预览 |
| 9 | `@juicesharp/rpiv-ask-user-question` | 11,982 | 用户交互 |
| 10 | `pi-powerline-footer` | 11,650 | 终端 UI |
| 11 | `@juicesharp/rpiv-todo` | 11,493 | 用户交互 |
| 12 | `pi-gsd` | 10,542 | 工作流 |
| 13 | `pi-simplify` | 10,180 | 代码质量 |
| 14 | `@juicesharp/rpiv-advisor` | 9,294 | 其他 |
| 15 | `pi-btw` | 9,095 | 终端 UI |
| 16 | `@juicesharp/rpiv-web-tools` | 9,054 | 网络访问 |
| 17 | `@juicesharp/rpiv-btw` | 8,998 | 用户交互 |
| 18 | `@runfusion/fusion` | 8,990 | 其他 |
| 19 | `@juicesharp/rpiv-pi` | 8,855 | 工作流 |
| 20 | `glimpseui` | 8,683 | 提示词管理 |

## 分类概览

| 分类 | 包数 | 总月下载量 | Top 3 插件 |
|---|---|---|---|
| 其他 | 1,158 | 452,951 | `@juicesharp/rpiv-advisor`, `@runfusion/fusion`, `@aliou/pi-processes` |
| 技能包 | 113 | 52,008 | `@juicesharp/rpiv-args`, `@heart-of-gold/toolkit`, `pi-docparser` |
| 子代理/多代理 | 99 | 152,904 | `pi-subagents`, `taskplane`, `@tintinweb/pi-subagents` |
| 网络访问 | 95 | 110,036 | `pi-web-access`, `@ollama/pi-web-search`, `@juicesharp/rpiv-web-tools` |
| 终端 UI | 95 | 65,065 | `pi-powerline-footer`, `pi-btw`, `pi-mermaid` |
| 上下文管理 | 83 | 30,680 | `pi-continue`, `@sting8k/pi-vcc`, `pi-context-prune` |
| 记忆系统 | 71 | 52,277 | `@samfp/pi-memory`, `pi-memctx`, `pi-hermes-memory` |
| 工具与安全 | 70 | 31,159 | `@gotgenes/pi-permission-system`, `@aliou/pi-guardrails`, `pi-pkg-guard` |
| MCP 协议适配 | 63 | 152,219 | `pi-mcp-adapter`, `context-mode`, `pi-lean-ctx` |
| 模型供应商 | 60 | 17,267 | `pi-provider-kimi-code`, `@ramarivera/pi-ts-aperture-provider`, `@sinamtz/pi-minimax-provider` |
| 提示词管理 | 40 | 30,451 | `glimpseui`, `pi-prompt-template-model`, `pi-schedule-prompt` |
| 会话管理 | 40 | 12,982 | `@kaiserlich-dev/pi-session-search`, `pi-session-search`, `pi-edit-session-in-place` |
| 工作流 | 37 | 61,073 | `@plannotator/pi-extension`, `pi-gsd`, `@juicesharp/rpiv-pi` |
| 主题美化 | 37 | 13,769 | `pi-studio`, `pi-terminal-theme`, `@victor-software-house/pi-curated-themes` |
| 代码质量 | 35 | 36,605 | `pi-lens`, `pi-simplify`, `@lpirito/pi-diffloop` |
| 用户交互 | 30 | 54,760 | `@juicesharp/rpiv-ask-user-question`, `@juicesharp/rpiv-todo`, `@juicesharp/rpiv-btw` |
| 图像处理 | 29 | 8,098 | `pi-better-openai`, `@injaneity/pi-computer-use`, `pi-codex-image-gen` |
| 桌面通知 | 27 | 5,012 | `@pi-unipi/notify`, `pi-gotify-notifier`, `pi-notify` |
| 音频与语音 | 25 | 6,850 | `@codexstar/pi-listen`, `voipi`, `pi-smart-voice-notify` |
| 外部集成 | 24 | 24,724 | `whatsapp-pi`, `@feniix/pi-notion`, `@llblab/pi-telegram` |
| 成本/代理管理 | 20 | 11,384 | `pi-antigravity-rotator`, `pi-free`, `pi-vision-proxy` |
| 仪表盘 | 19 | 9,595 | `@blackbelt-technology/pi-agent-dashboard`, `@pi-unipi/info-screen`, `@braintrust/pi-extension` |
| 代理自主模式 | 14 | 17,556 | `@tmustier/pi-ralph-wiggum`, `@lnilluv/pi-ralph-loop`, `pi-caveman` |
| 元包/管理工具 | 13 | 18,568 | `pi-depo`, `@pi-unipi/core`, `@pi-unipi/unipi` |
| Markdown 预览 | 12 | 17,738 | `pi-markdown-preview`, `@curl.md/pi`, `pi-todo-md` |
| 测试与诊断 | 12 | 9,357 | `@vtstech/pi-model-test`, `@vtstech/pi-diag`, `@marcfargas/pi-test-harness` |
| 聊天/消息 | 9 | 8,372 | `pi-intercom`, `@0xkobold/pi-gateway`, `pi-chatgpt-limit` |
| 浏览器自动化 | 9 | 5,898 | `pi-agent-browser-native`, `pi-agent-browser`, `demo-dev` |
| 设置管理 | 7 | 7,249 | `@axnic/pi-extension-settings`, `@juanibiapina/pi-extension-settings`, `@axnic/pi-extension-settings-sdk` |
| 文件搜索 | 5 | 7,769 | `@ff-labs/pi-fff`, `pi-fff`, `@the-forge-flow/fff-pi` |
| 数据可视化 | 5 | 6,928 | `@walterra/pi-charts`, `@tungthedev/pi-extensions`, `@the-forge-flow/visual-explainer-pi` |
| 输出策略 | 4 | 1,315 | `@vanillagreen/pi-output-policy`, `@nonplanarslicer/pi-save-output`, `@badliveware/pi-rich-output` |
| 共享工具库 | 2 | 4,513 | `@vtstech/pi-shared`, `@firstpick/pi-utils` |
| 持续学习 | 2 | 99 | `@artale/pi-continuous`, `pi-quiz` |

## 深入阅读

完整的 16 大分类文档请见根目录 `README.md`，这里保留的是面向浏览和选型的总览页。

## 原始数据

| 文件 | 说明 |
|---|---|
| `data/all-packages.json` | 全量 2,364 包结构化数据 |
| `data/classified-v2.json` | 34 细分类别包列表 |
| `data/ecosystem-report.json` | 统计报告 |
