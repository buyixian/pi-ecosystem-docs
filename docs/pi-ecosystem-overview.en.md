# PI Extension Ecosystem Overview

> English mirror · 中文默认版: [打开中文版本](./pi-ecosystem-overview.md)

> Generated on 2026-05-10 · 2,364 packages

## Quick Picks

| Need | Best plugin | Install | Alternatives | Why |
|---|---|---|---|---|
| Subagent delegation / parallel coordination | [pi-subagents](https://www.npmjs.com/package/pi-subagents) | `npm install pi-subagents` | [pi-crew](https://www.npmjs.com/package/pi-crew), [pi-minions](https://www.npmjs.com/package/pi-minions) | Split complex work across multiple agents for parallel execution and multi-file changes. |
| Connect MCP tools and resources | [pi-mcp-adapter](https://www.npmjs.com/package/pi-mcp-adapter) | `npm install pi-mcp-adapter` | [context-mode](https://www.npmjs.com/package/context-mode), [pi-lean-ctx](https://www.npmjs.com/package/pi-lean-ctx) | Connect external MCP servers to bring tools, resources, and prompts into PI. |
| Web search / fetch / reading | [pi-web-access](https://www.npmjs.com/package/pi-web-access) | `npm install pi-web-access` | [@ollama/pi-web-search](https://www.npmjs.com/package/@ollama/pi-web-search), [@juicesharp/rpiv-web-tools](https://www.npmjs.com/package/@juicesharp/rpiv-web-tools) | Best for live search, scraping, PDF parsing, and GitHub content retrieval. |
| Long-session compaction and recovery | [pi-continue](https://www.npmjs.com/package/pi-continue) | `npm install pi-continue` | [pi-context-prune](https://www.npmjs.com/package/pi-context-prune), [@sting8k/pi-vcc](https://www.npmjs.com/package/@sting8k/pi-vcc) | Control context growth on long tasks while preserving state and resuming cleanly. |
| Plan, execute, review | [@plannotator/pi-extension](https://www.npmjs.com/package/@plannotator/pi-extension) | `npm install @plannotator/pi-extension` | [pi-gsd](https://www.npmjs.com/package/pi-gsd), [@juicesharp/rpiv-pi](https://www.npmjs.com/package/@juicesharp/rpiv-pi) | Ideal when you want a structured workflow with clear planning and verification steps. |
| Structured questions and task tracking | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question) | `npm install @juicesharp/rpiv-ask-user-question` | [@juicesharp/rpiv-todo](https://www.npmjs.com/package/@juicesharp/rpiv-todo), [@juicesharp/rpiv-btw](https://www.npmjs.com/package/@juicesharp/rpiv-btw) | Make the agent ask first, reducing guesswork and rework. |
| Code review, LSP, formatting | [pi-lens](https://www.npmjs.com/package/pi-lens) | `npm install pi-lens` | [pi-simplify](https://www.npmjs.com/package/pi-simplify), [@lpirito/pi-diffloop](https://www.npmjs.com/package/@lpirito/pi-diffloop) | Use it for automated code-quality checks, typing, style, and local refactors. |
| Prompt templates and agent modes | [glimpseui](https://www.npmjs.com/package/glimpseui) | `npm install glimpseui` | [pi-prompt-template-model](https://www.npmjs.com/package/pi-prompt-template-model), [pi-schedule-prompt](https://www.npmjs.com/package/pi-schedule-prompt) | Best when you want to shape how the agent thinks, asks, and responds. |
| Tool security and permissions | [@gotgenes/pi-permission-system](https://www.npmjs.com/package/@gotgenes/pi-permission-system) | `npm install @gotgenes/pi-permission-system` | [pi-pkg-guard](https://www.npmjs.com/package/pi-pkg-guard), [pi-sandbox](https://www.npmjs.com/package/pi-sandbox) | Restrict risky tools and isolate permissions for sensitive workflows. |

## Ecosystem Snapshot

| Metric | Value |
|---|---|
| Total packages | 2,364 |
| Categories | 34 |
| Monthly downloads | 1,497,231 |

## Top 20 Popular Extensions

| # | Package | Monthly downloads | Category |
|---|---|---|---|
| 1 | [pi-subagents](https://www.npmjs.com/package/pi-subagents) | 70,608 | Subagents / Multi-agent |
| 2 | [pi-mcp-adapter](https://www.npmjs.com/package/pi-mcp-adapter) | 59,788 | MCP Protocol Adapters |
| 3 | [context-mode](https://www.npmjs.com/package/context-mode) | 57,781 | MCP Protocol Adapters |
| 4 | [pi-web-access](https://www.npmjs.com/package/pi-web-access) | 34,332 | Web Access |
| 5 | [@ollama/pi-web-search](https://www.npmjs.com/package/@ollama/pi-web-search) | 26,114 | Web Access |
| 6 | [@plannotator/pi-extension](https://www.npmjs.com/package/@plannotator/pi-extension) | 21,911 | Workflows |
| 7 | [pi-lens](https://www.npmjs.com/package/pi-lens) | 13,237 | Code Quality |
| 8 | [pi-markdown-preview](https://www.npmjs.com/package/pi-markdown-preview) | 12,052 | Markdown Preview |
| 9 | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question) | 11,982 | User Interaction |
| 10 | [pi-powerline-footer](https://www.npmjs.com/package/pi-powerline-footer) | 11,650 | Terminal UI |
| 11 | [@juicesharp/rpiv-todo](https://www.npmjs.com/package/@juicesharp/rpiv-todo) | 11,493 | User Interaction |
| 12 | [pi-gsd](https://www.npmjs.com/package/pi-gsd) | 10,542 | Workflows |
| 13 | [pi-simplify](https://www.npmjs.com/package/pi-simplify) | 10,180 | Code Quality |
| 14 | [@juicesharp/rpiv-advisor](https://www.npmjs.com/package/@juicesharp/rpiv-advisor) | 9,294 | Other |
| 15 | [pi-btw](https://www.npmjs.com/package/pi-btw) | 9,095 | Terminal UI |
| 16 | [@juicesharp/rpiv-web-tools](https://www.npmjs.com/package/@juicesharp/rpiv-web-tools) | 9,054 | Web Access |
| 17 | [@juicesharp/rpiv-btw](https://www.npmjs.com/package/@juicesharp/rpiv-btw) | 8,998 | User Interaction |
| 18 | [@runfusion/fusion](https://www.npmjs.com/package/@runfusion/fusion) | 8,990 | Other |
| 19 | [@juicesharp/rpiv-pi](https://www.npmjs.com/package/@juicesharp/rpiv-pi) | 8,855 | Workflows |
| 20 | [glimpseui](https://www.npmjs.com/package/glimpseui) | 8,683 | Prompt Management |

## Category Overview

| Category | Packages | Monthly downloads | Top 3 plugins |
|---|---|---|---|
| Other | 1,158 | 452,951 | [@juicesharp/rpiv-advisor](https://www.npmjs.com/package/@juicesharp/rpiv-advisor), [@runfusion/fusion](https://www.npmjs.com/package/@runfusion/fusion), [@aliou/pi-processes](https://www.npmjs.com/package/@aliou/pi-processes) |
| Subagents / Multi-agent | 99 | 152,904 | [pi-subagents](https://www.npmjs.com/package/pi-subagents), [taskplane](https://www.npmjs.com/package/taskplane), [@tintinweb/pi-subagents](https://www.npmjs.com/package/@tintinweb/pi-subagents) |
| MCP Protocol Adapters | 63 | 152,219 | [pi-mcp-adapter](https://www.npmjs.com/package/pi-mcp-adapter), [context-mode](https://www.npmjs.com/package/context-mode), [pi-lean-ctx](https://www.npmjs.com/package/pi-lean-ctx) |
| Web Access | 95 | 110,036 | [pi-web-access](https://www.npmjs.com/package/pi-web-access), [@ollama/pi-web-search](https://www.npmjs.com/package/@ollama/pi-web-search), [@juicesharp/rpiv-web-tools](https://www.npmjs.com/package/@juicesharp/rpiv-web-tools) |
| Terminal UI | 95 | 65,065 | [pi-powerline-footer](https://www.npmjs.com/package/pi-powerline-footer), [pi-btw](https://www.npmjs.com/package/pi-btw), [pi-mermaid](https://www.npmjs.com/package/pi-mermaid) |
| Workflows | 37 | 61,073 | [@plannotator/pi-extension](https://www.npmjs.com/package/@plannotator/pi-extension), [pi-gsd](https://www.npmjs.com/package/pi-gsd), [@juicesharp/rpiv-pi](https://www.npmjs.com/package/@juicesharp/rpiv-pi) |
| User Interaction | 30 | 54,760 | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question), [@juicesharp/rpiv-todo](https://www.npmjs.com/package/@juicesharp/rpiv-todo), [@juicesharp/rpiv-btw](https://www.npmjs.com/package/@juicesharp/rpiv-btw) |
| Memory Systems | 71 | 52,277 | [@samfp/pi-memory](https://www.npmjs.com/package/@samfp/pi-memory), [pi-memctx](https://www.npmjs.com/package/pi-memctx), [pi-hermes-memory](https://www.npmjs.com/package/pi-hermes-memory) |
| Skills | 113 | 52,008 | [@juicesharp/rpiv-args](https://www.npmjs.com/package/@juicesharp/rpiv-args), [@heart-of-gold/toolkit](https://www.npmjs.com/package/@heart-of-gold/toolkit), [pi-docparser](https://www.npmjs.com/package/pi-docparser) |
| Code Quality | 35 | 36,605 | [pi-lens](https://www.npmjs.com/package/pi-lens), [pi-simplify](https://www.npmjs.com/package/pi-simplify), [@lpirito/pi-diffloop](https://www.npmjs.com/package/@lpirito/pi-diffloop) |
| Tooling & Security | 70 | 31,159 | [@gotgenes/pi-permission-system](https://www.npmjs.com/package/@gotgenes/pi-permission-system), [@aliou/pi-guardrails](https://www.npmjs.com/package/@aliou/pi-guardrails), [pi-pkg-guard](https://www.npmjs.com/package/pi-pkg-guard) |
| Context Management | 83 | 30,680 | [pi-continue](https://www.npmjs.com/package/pi-continue), [@sting8k/pi-vcc](https://www.npmjs.com/package/@sting8k/pi-vcc), [pi-context-prune](https://www.npmjs.com/package/pi-context-prune) |
| Prompt Management | 40 | 30,451 | [glimpseui](https://www.npmjs.com/package/glimpseui), [pi-prompt-template-model](https://www.npmjs.com/package/pi-prompt-template-model), [pi-schedule-prompt](https://www.npmjs.com/package/pi-schedule-prompt) |
| External Integrations | 24 | 24,724 | [whatsapp-pi](https://www.npmjs.com/package/whatsapp-pi), [@feniix/pi-notion](https://www.npmjs.com/package/@feniix/pi-notion), [@llblab/pi-telegram](https://www.npmjs.com/package/@llblab/pi-telegram) |
| Meta & Management Tools | 13 | 18,568 | [pi-depo](https://www.npmjs.com/package/pi-depo), [@pi-unipi/core](https://www.npmjs.com/package/@pi-unipi/core), [@pi-unipi/unipi](https://www.npmjs.com/package/@pi-unipi/unipi) |
| Markdown Preview | 12 | 17,738 | [pi-markdown-preview](https://www.npmjs.com/package/pi-markdown-preview), [@curl.md/pi](https://www.npmjs.com/package/@curl.md/pi), [pi-todo-md](https://www.npmjs.com/package/pi-todo-md) |
| Autonomous Agent Modes | 14 | 17,556 | [@tmustier/pi-ralph-wiggum](https://www.npmjs.com/package/@tmustier/pi-ralph-wiggum), [@lnilluv/pi-ralph-loop](https://www.npmjs.com/package/@lnilluv/pi-ralph-loop), [pi-caveman](https://www.npmjs.com/package/pi-caveman) |
| Model Providers | 60 | 17,267 | [pi-provider-kimi-code](https://www.npmjs.com/package/pi-provider-kimi-code), [@ramarivera/pi-ts-aperture-provider](https://www.npmjs.com/package/@ramarivera/pi-ts-aperture-provider), [@sinamtz/pi-minimax-provider](https://www.npmjs.com/package/@sinamtz/pi-minimax-provider) |
| Themes | 37 | 13,769 | [pi-studio](https://www.npmjs.com/package/pi-studio), [pi-terminal-theme](https://www.npmjs.com/package/pi-terminal-theme), [@victor-software-house/pi-curated-themes](https://www.npmjs.com/package/@victor-software-house/pi-curated-themes) |
| Session Management | 40 | 12,982 | [@kaiserlich-dev/pi-session-search](https://www.npmjs.com/package/@kaiserlich-dev/pi-session-search), [pi-session-search](https://www.npmjs.com/package/pi-session-search), [pi-edit-session-in-place](https://www.npmjs.com/package/pi-edit-session-in-place) |
| Cost & Proxy Management | 20 | 11,384 | [pi-antigravity-rotator](https://www.npmjs.com/package/pi-antigravity-rotator), [pi-free](https://www.npmjs.com/package/pi-free), [pi-vision-proxy](https://www.npmjs.com/package/pi-vision-proxy) |
| Dashboards | 19 | 9,595 | [@blackbelt-technology/pi-agent-dashboard](https://www.npmjs.com/package/@blackbelt-technology/pi-agent-dashboard), [@pi-unipi/info-screen](https://www.npmjs.com/package/@pi-unipi/info-screen), [@braintrust/pi-extension](https://www.npmjs.com/package/@braintrust/pi-extension) |
| Testing & Diagnostics | 12 | 9,357 | [@vtstech/pi-model-test](https://www.npmjs.com/package/@vtstech/pi-model-test), [@vtstech/pi-diag](https://www.npmjs.com/package/@vtstech/pi-diag), [@marcfargas/pi-test-harness](https://www.npmjs.com/package/@marcfargas/pi-test-harness) |
| Chat & Messaging | 9 | 8,372 | [pi-intercom](https://www.npmjs.com/package/pi-intercom), [@0xkobold/pi-gateway](https://www.npmjs.com/package/@0xkobold/pi-gateway), [pi-chatgpt-limit](https://www.npmjs.com/package/pi-chatgpt-limit) |
| Image Processing | 29 | 8,098 | [pi-better-openai](https://www.npmjs.com/package/pi-better-openai), [@injaneity/pi-computer-use](https://www.npmjs.com/package/@injaneity/pi-computer-use), [pi-codex-image-gen](https://www.npmjs.com/package/pi-codex-image-gen) |
| File Search | 5 | 7,769 | [@ff-labs/pi-fff](https://www.npmjs.com/package/@ff-labs/pi-fff), [pi-fff](https://www.npmjs.com/package/pi-fff), [@the-forge-flow/fff-pi](https://www.npmjs.com/package/@the-forge-flow/fff-pi) |
| Settings | 7 | 7,249 | [@axnic/pi-extension-settings](https://www.npmjs.com/package/@axnic/pi-extension-settings), [@juanibiapina/pi-extension-settings](https://www.npmjs.com/package/@juanibiapina/pi-extension-settings), [@axnic/pi-extension-settings-sdk](https://www.npmjs.com/package/@axnic/pi-extension-settings-sdk) |
| Data Visualization | 5 | 6,928 | [@walterra/pi-charts](https://www.npmjs.com/package/@walterra/pi-charts), [@tungthedev/pi-extensions](https://www.npmjs.com/package/@tungthedev/pi-extensions), [@the-forge-flow/visual-explainer-pi](https://www.npmjs.com/package/@the-forge-flow/visual-explainer-pi) |
| Audio & Voice | 25 | 6,850 | [@codexstar/pi-listen](https://www.npmjs.com/package/@codexstar/pi-listen), [voipi](https://www.npmjs.com/package/voipi), [pi-smart-voice-notify](https://www.npmjs.com/package/pi-smart-voice-notify) |
| Browser Automation | 9 | 5,898 | [pi-agent-browser-native](https://www.npmjs.com/package/pi-agent-browser-native), [pi-agent-browser](https://www.npmjs.com/package/pi-agent-browser), [demo-dev](https://www.npmjs.com/package/demo-dev) |
| Desktop Notifications | 27 | 5,012 | [@pi-unipi/notify](https://www.npmjs.com/package/@pi-unipi/notify), [pi-gotify-notifier](https://www.npmjs.com/package/pi-gotify-notifier), [pi-notify](https://www.npmjs.com/package/pi-notify) |
| Shared Utilities | 2 | 4,513 | [@vtstech/pi-shared](https://www.npmjs.com/package/@vtstech/pi-shared), [@firstpick/pi-utils](https://www.npmjs.com/package/@firstpick/pi-utils) |
| Output Policies | 4 | 1,315 | [@vanillagreen/pi-output-policy](https://www.npmjs.com/package/@vanillagreen/pi-output-policy), [@nonplanarslicer/pi-save-output](https://www.npmjs.com/package/@nonplanarslicer/pi-save-output), [@badliveware/pi-rich-output](https://www.npmjs.com/package/@badliveware/pi-rich-output) |
| Continuous Learning | 2 | 99 | [@artale/pi-continuous](https://www.npmjs.com/package/@artale/pi-continuous), [pi-quiz](https://www.npmjs.com/package/pi-quiz) |

## Full Catalog

See the [PI extension catalog](./pi-extension-catalog.en.md) for every package and install command.

## Source Data

| File | Purpose |
|---|---|
| `data/all-packages.json` | Full structured dataset for all packages |
| `data/classified-v2.json` | Package lists for the 34 fine-grained categories |
| `data/ecosystem-report.json` | Aggregate ecosystem report |
