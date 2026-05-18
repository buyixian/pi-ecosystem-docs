# PI Extension Ecosystem Overview

> English mirror · 中文默认版: [打开中文版本](./pi-ecosystem-overview.md)

> Generated on 2026-05-18 · 2,766 packages

## Quick Picks

| Need | Best plugin | Install | Alternatives | Why |
|---|---|---|---|---|
| Subagent delegation / parallel coordination | [pi-subagents](https://www.npmjs.com/package/pi-subagents) | `npm install pi-subagents` | [pi-crew](https://www.npmjs.com/package/pi-crew), [pi-minions](https://www.npmjs.com/package/pi-minions) | Split complex work across multiple agents for parallel execution and multi-file changes. |
| Connect MCP tools and resources | [pi-mcp-adapter](https://www.npmjs.com/package/pi-mcp-adapter) | `npm install pi-mcp-adapter` | [context-mode](https://www.npmjs.com/package/context-mode), [pi-lean-ctx](https://www.npmjs.com/package/pi-lean-ctx) | Connect external MCP servers to bring tools, resources, and prompts into PI. |
| Web search / fetch / reading | [pi-web-access](https://www.npmjs.com/package/pi-web-access) | `npm install pi-web-access` | [@ollama/pi-web-search](https://www.npmjs.com/package/@ollama/pi-web-search), [@juicesharp/rpiv-web-tools](https://www.npmjs.com/package/@juicesharp/rpiv-web-tools) | Best for live search, scraping, PDF parsing, and GitHub content retrieval. |
| Long-session compaction and recovery | [pi-continue](https://www.npmjs.com/package/pi-continue) | `npm install pi-continue` | [pi-context-prune](https://www.npmjs.com/package/pi-context-prune), [@sting8k/pi-vcc](https://www.npmjs.com/package/@sting8k/pi-vcc) | Control context growth on long tasks while preserving state and resuming cleanly. |
| Plan, execute, review | [@plannotator/pi-extension](https://www.npmjs.com/package/@plannotator/pi-extension) | `npm install @plannotator/pi-extension` | [pi-gsd](https://www.npmjs.com/package/pi-gsd), [@juicesharp/rpiv-pi](https://www.npmjs.com/package/@juicesharp/rpiv-pi) | Ideal when you want a structured workflow with clear planning and verification steps. |
| Structured questions and task tracking | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question) | `npm install @juicesharp/rpiv-ask-user-question` | [@juicesharp/rpiv-todo](https://www.npmjs.com/package/@juicesharp/rpiv-todo), [@juicesharp/rpiv-btw](https://www.npmjs.com/package/@juicesharp/rpiv-btw) | Make the agent ask first, reducing guesswork and rework. |
| Code review, LSP, formatting | [pi-simplify](https://www.npmjs.com/package/pi-simplify) | `npm install pi-simplify` | [pi-lens](https://www.npmjs.com/package/pi-lens), [@spences10/pi-lsp](https://www.npmjs.com/package/@spences10/pi-lsp) | Use it for automated code-quality checks, typing, style, and local refactors. |
| Prompt templates and agent modes | [glimpseui](https://www.npmjs.com/package/glimpseui) | `npm install glimpseui` | [pi-prompt-template-model](https://www.npmjs.com/package/pi-prompt-template-model), [pi-schedule-prompt](https://www.npmjs.com/package/pi-schedule-prompt) | Best when you want to shape how the agent thinks, asks, and responds. |
| Tool security and permissions | [@gotgenes/pi-permission-system](https://www.npmjs.com/package/@gotgenes/pi-permission-system) | `npm install @gotgenes/pi-permission-system` | [pi-sandbox](https://www.npmjs.com/package/pi-sandbox), [@aliou/pi-guardrails](https://www.npmjs.com/package/@aliou/pi-guardrails) | Restrict risky tools and isolate permissions for sensitive workflows. |

## Ecosystem Snapshot

| Metric | Value |
|---|---|
| Total packages | 2,766 |
| Categories | 34 |
| Monthly downloads | 1,904,299 |

## Top 20 Popular Extensions

| # | Package | Monthly downloads | Category |
|---|---|---|---|
| 1 | [context-mode](https://www.npmjs.com/package/context-mode) | 86,809 | MCP Protocol Adapters |
| 2 | [pi-subagents](https://www.npmjs.com/package/pi-subagents) | 86,724 | Subagents / Multi-agent |
| 3 | [pi-mcp-adapter](https://www.npmjs.com/package/pi-mcp-adapter) | 77,049 | MCP Protocol Adapters |
| 4 | [pi-web-access](https://www.npmjs.com/package/pi-web-access) | 46,602 | Web Access |
| 5 | [@ollama/pi-web-search](https://www.npmjs.com/package/@ollama/pi-web-search) | 25,917 | Web Access |
| 6 | [@plannotator/pi-extension](https://www.npmjs.com/package/@plannotator/pi-extension) | 25,787 | Workflows |
| 7 | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question) | 23,282 | User Interaction |
| 8 | [@juicesharp/rpiv-todo](https://www.npmjs.com/package/@juicesharp/rpiv-todo) | 23,195 | User Interaction |
| 9 | [pi-simplify](https://www.npmjs.com/package/pi-simplify) | 17,131 | Code Quality |
| 10 | [pi-lens](https://www.npmjs.com/package/pi-lens) | 17,114 | Code Quality |
| 11 | [pi-powerline-footer](https://www.npmjs.com/package/pi-powerline-footer) | 13,938 | Terminal UI |
| 12 | [@juicesharp/rpiv-advisor](https://www.npmjs.com/package/@juicesharp/rpiv-advisor) | 13,440 | Other |
| 13 | [@juicesharp/rpiv-web-tools](https://www.npmjs.com/package/@juicesharp/rpiv-web-tools) | 12,818 | Web Access |
| 14 | [@juicesharp/rpiv-btw](https://www.npmjs.com/package/@juicesharp/rpiv-btw) | 12,685 | User Interaction |
| 15 | [pi-agent-flow](https://www.npmjs.com/package/pi-agent-flow) | 11,854 | Other |
| 16 | [@juicesharp/rpiv-pi](https://www.npmjs.com/package/@juicesharp/rpiv-pi) | 11,733 | Workflows |
| 17 | [pi-markdown-preview](https://www.npmjs.com/package/pi-markdown-preview) | 11,260 | Markdown Preview |
| 18 | [@juicesharp/rpiv-args](https://www.npmjs.com/package/@juicesharp/rpiv-args) | 11,043 | Skills |
| 19 | [@runfusion/fusion](https://www.npmjs.com/package/@runfusion/fusion) | 10,984 | Other |
| 20 | [glimpseui](https://www.npmjs.com/package/glimpseui) | 10,505 | Prompt Management |

## Category Overview

| Category | Packages | Monthly downloads | Top 3 plugins |
|---|---|---|---|
| Other | 1,343 | 564,265 | [@juicesharp/rpiv-advisor](https://www.npmjs.com/package/@juicesharp/rpiv-advisor), [pi-agent-flow](https://www.npmjs.com/package/pi-agent-flow), [@runfusion/fusion](https://www.npmjs.com/package/@runfusion/fusion) |
| MCP Protocol Adapters | 75 | 212,840 | [context-mode](https://www.npmjs.com/package/context-mode), [pi-mcp-adapter](https://www.npmjs.com/package/pi-mcp-adapter), [pi-lean-ctx](https://www.npmjs.com/package/pi-lean-ctx) |
| Subagents / Multi-agent | 124 | 185,612 | [pi-subagents](https://www.npmjs.com/package/pi-subagents), [@tintinweb/pi-subagents](https://www.npmjs.com/package/@tintinweb/pi-subagents), [pi-crew](https://www.npmjs.com/package/pi-crew) |
| Web Access | 110 | 134,893 | [pi-web-access](https://www.npmjs.com/package/pi-web-access), [@ollama/pi-web-search](https://www.npmjs.com/package/@ollama/pi-web-search), [@juicesharp/rpiv-web-tools](https://www.npmjs.com/package/@juicesharp/rpiv-web-tools) |
| User Interaction | 34 | 85,716 | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question), [@juicesharp/rpiv-todo](https://www.npmjs.com/package/@juicesharp/rpiv-todo), [@juicesharp/rpiv-btw](https://www.npmjs.com/package/@juicesharp/rpiv-btw) |
| Terminal UI | 111 | 82,376 | [pi-powerline-footer](https://www.npmjs.com/package/pi-powerline-footer), [pi-btw](https://www.npmjs.com/package/pi-btw), [pi-mermaid](https://www.npmjs.com/package/pi-mermaid) |
| Workflows | 49 | 65,325 | [@plannotator/pi-extension](https://www.npmjs.com/package/@plannotator/pi-extension), [@juicesharp/rpiv-pi](https://www.npmjs.com/package/@juicesharp/rpiv-pi), [@pi-unipi/workflow](https://www.npmjs.com/package/@pi-unipi/workflow) |
| Memory Systems | 79 | 64,702 | [@samfp/pi-memory](https://www.npmjs.com/package/@samfp/pi-memory), [pi-hermes-memory](https://www.npmjs.com/package/pi-hermes-memory), [pi-memctx](https://www.npmjs.com/package/pi-memctx) |
| Skills | 127 | 61,777 | [@juicesharp/rpiv-args](https://www.npmjs.com/package/@juicesharp/rpiv-args), [pi-docparser](https://www.npmjs.com/package/pi-docparser), [@spences10/pi-skills](https://www.npmjs.com/package/@spences10/pi-skills) |
| Code Quality | 53 | 60,452 | [pi-simplify](https://www.npmjs.com/package/pi-simplify), [pi-lens](https://www.npmjs.com/package/pi-lens), [@spences10/pi-lsp](https://www.npmjs.com/package/@spences10/pi-lsp) |
| Context Management | 100 | 46,010 | [pi-bar](https://www.npmjs.com/package/pi-bar), [pi-continue](https://www.npmjs.com/package/pi-continue), [@sting8k/pi-vcc](https://www.npmjs.com/package/@sting8k/pi-vcc) |
| Tooling & Security | 87 | 41,374 | [@gotgenes/pi-permission-system](https://www.npmjs.com/package/@gotgenes/pi-permission-system), [@aliou/pi-guardrails](https://www.npmjs.com/package/@aliou/pi-guardrails), [pi-permission-system](https://www.npmjs.com/package/pi-permission-system) |
| Prompt Management | 46 | 35,678 | [glimpseui](https://www.npmjs.com/package/glimpseui), [pi-prompt-template-model](https://www.npmjs.com/package/pi-prompt-template-model), [pi-schedule-prompt](https://www.npmjs.com/package/pi-schedule-prompt) |
| Meta & Management Tools | 13 | 26,910 | [pi-depo](https://www.npmjs.com/package/pi-depo), [@pi-unipi/core](https://www.npmjs.com/package/@pi-unipi/core), [@pi-unipi/unipi](https://www.npmjs.com/package/@pi-unipi/unipi) |
| External Integrations | 27 | 26,473 | [@llblab/pi-telegram](https://www.npmjs.com/package/@llblab/pi-telegram), [whatsapp-pi](https://www.npmjs.com/package/whatsapp-pi), [pi-convex](https://www.npmjs.com/package/pi-convex) |
| Model Providers | 65 | 19,112 | [pi-provider-kimi-code](https://www.npmjs.com/package/pi-provider-kimi-code), [pi-provider-litellm](https://www.npmjs.com/package/pi-provider-litellm), [pi-xiaomi-mimo-provider](https://www.npmjs.com/package/pi-xiaomi-mimo-provider) |
| Autonomous Agent Modes | 17 | 18,943 | [@tmustier/pi-ralph-wiggum](https://www.npmjs.com/package/@tmustier/pi-ralph-wiggum), [pi-caveman](https://www.npmjs.com/package/pi-caveman), [@lnilluv/pi-ralph-loop](https://www.npmjs.com/package/@lnilluv/pi-ralph-loop) |
| Themes | 44 | 18,183 | [pi-studio](https://www.npmjs.com/package/pi-studio), [pi-terminal-theme](https://www.npmjs.com/package/pi-terminal-theme), [@victor-software-house/pi-curated-themes](https://www.npmjs.com/package/@victor-software-house/pi-curated-themes) |
| Markdown Preview | 16 | 17,741 | [pi-markdown-preview](https://www.npmjs.com/package/pi-markdown-preview), [@curl.md/pi](https://www.npmjs.com/package/@curl.md/pi), [pi-image-tools](https://www.npmjs.com/package/pi-image-tools) |
| Session Management | 47 | 16,498 | [@kaiserlich-dev/pi-session-search](https://www.npmjs.com/package/@kaiserlich-dev/pi-session-search), [pi-session-search](https://www.npmjs.com/package/pi-session-search), [pi-edit-session-in-place](https://www.npmjs.com/package/pi-edit-session-in-place) |
| Browser Automation | 14 | 16,017 | [pi-chrome](https://www.npmjs.com/package/pi-chrome), [pi-agent-browser-native](https://www.npmjs.com/package/pi-agent-browser-native), [pi-agent-browser](https://www.npmjs.com/package/pi-agent-browser) |
| Cost & Proxy Management | 23 | 15,023 | [pi-antigravity-rotator](https://www.npmjs.com/package/pi-antigravity-rotator), [pi-free](https://www.npmjs.com/package/pi-free), [@schultzp2020/pi-cursor](https://www.npmjs.com/package/@schultzp2020/pi-cursor) |
| Dashboards | 25 | 12,339 | [@pi-unipi/info-screen](https://www.npmjs.com/package/@pi-unipi/info-screen), [@posthog/pi](https://www.npmjs.com/package/@posthog/pi), [@raindrop-ai/pi-agent](https://www.npmjs.com/package/@raindrop-ai/pi-agent) |
| File Search | 5 | 12,198 | [@ff-labs/pi-fff](https://www.npmjs.com/package/@ff-labs/pi-fff), [pi-fff](https://www.npmjs.com/package/pi-fff), [@edxeth/pi-fff](https://www.npmjs.com/package/@edxeth/pi-fff) |
| Audio & Voice | 28 | 11,759 | [@codexstar/pi-listen](https://www.npmjs.com/package/@codexstar/pi-listen), [pi-voice-input](https://www.npmjs.com/package/pi-voice-input), [@juicesharp/rpiv-voice](https://www.npmjs.com/package/@juicesharp/rpiv-voice) |
| Chat & Messaging | 9 | 9,216 | [pi-intercom](https://www.npmjs.com/package/pi-intercom), [pi-chatgpt-limit](https://www.npmjs.com/package/pi-chatgpt-limit), [@0xkobold/pi-gateway](https://www.npmjs.com/package/@0xkobold/pi-gateway) |
| Desktop Notifications | 27 | 8,327 | [@pi-unipi/notify](https://www.npmjs.com/package/@pi-unipi/notify), [pi-gotify-notifier](https://www.npmjs.com/package/pi-gotify-notifier), [@diegopetrucci/pi-notify](https://www.npmjs.com/package/@diegopetrucci/pi-notify) |
| Settings | 9 | 8,219 | [@juanibiapina/pi-extension-settings](https://www.npmjs.com/package/@juanibiapina/pi-extension-settings), [@axnic/pi-extension-settings](https://www.npmjs.com/package/@axnic/pi-extension-settings), [@axnic/pi-extension-settings-sdk](https://www.npmjs.com/package/@axnic/pi-extension-settings-sdk) |
| Image Processing | 29 | 8,016 | [pi-better-openai](https://www.npmjs.com/package/pi-better-openai), [@injaneity/pi-computer-use](https://www.npmjs.com/package/@injaneity/pi-computer-use), [pi-codex-image-gen](https://www.npmjs.com/package/pi-codex-image-gen) |
| Testing & Diagnostics | 13 | 7,790 | [@marcfargas/pi-test-harness](https://www.npmjs.com/package/@marcfargas/pi-test-harness), [@vtstech/pi-model-test](https://www.npmjs.com/package/@vtstech/pi-model-test), [@vtstech/pi-diag](https://www.npmjs.com/package/@vtstech/pi-diag) |
| Data Visualization | 7 | 5,217 | [@walterra/pi-charts](https://www.npmjs.com/package/@walterra/pi-charts), [@tungthedev/pi-extensions](https://www.npmjs.com/package/@tungthedev/pi-extensions), [@the-forge-flow/visual-explainer-pi](https://www.npmjs.com/package/@the-forge-flow/visual-explainer-pi) |
| Shared Utilities | 2 | 2,629 | [@vtstech/pi-shared](https://www.npmjs.com/package/@vtstech/pi-shared), [@firstpick/pi-utils](https://www.npmjs.com/package/@firstpick/pi-utils) |
| Output Policies | 4 | 1,412 | [@vanillagreen/pi-output-policy](https://www.npmjs.com/package/@vanillagreen/pi-output-policy), [@nonplanarslicer/pi-save-output](https://www.npmjs.com/package/@nonplanarslicer/pi-save-output), [@badliveware/pi-rich-output](https://www.npmjs.com/package/@badliveware/pi-rich-output) |
| Continuous Learning | 4 | 1,257 | [@majorgilles/pi-learning-tutor](https://www.npmjs.com/package/@majorgilles/pi-learning-tutor), [teach-me](https://www.npmjs.com/package/teach-me), [@artale/pi-continuous](https://www.npmjs.com/package/@artale/pi-continuous) |

## Full Catalog

See the [PI extension catalog](./pi-extension-catalog.en.md) for every package and install command.

## Source Data

| File | Purpose |
|---|---|
| `data/all-packages.json` | Full structured dataset for all packages |
| `data/classified-v2.json` | Package lists for the 34 fine-grained categories |
| `data/ecosystem-report.json` | Aggregate ecosystem report |
