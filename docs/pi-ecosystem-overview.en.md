# PI Extension Ecosystem Overview

> Default English · 中文版: [打开中文版本](./pi-ecosystem-overview.md)

> Generated on 2026-05-10 · 2,364 packages

## Quick Picks

| Need | Best plugin | Alternatives | Why |
|---|---|---|---|
| Subagent delegation / parallel coordination | `pi-subagents` | `taskplane`, `@tintinweb/pi-subagents` | Split complex work across multiple agents for parallel execution and multi-file changes. |
| Connect MCP tools and resources | `pi-mcp-adapter` | `context-mode`, `pi-lean-ctx` | Connect external MCP servers to bring tools, resources, and prompts into PI. |
| Web search / fetch / reading | `pi-web-access` | `@ollama/pi-web-search`, `@juicesharp/rpiv-web-tools` | Best for live search, scraping, PDF parsing, and GitHub content retrieval. |
| Long-session compaction and recovery | `pi-continue` | `@sting8k/pi-vcc`, `pi-context-prune` | Control context growth on long tasks while preserving state and resuming cleanly. |
| Plan, execute, review | `@plannotator/pi-extension` | `pi-gsd`, `@juicesharp/rpiv-pi` | Ideal when you want a structured workflow with clear planning and verification steps. |
| Structured questions and task tracking | `@juicesharp/rpiv-ask-user-question` | `@juicesharp/rpiv-todo`, `@juicesharp/rpiv-btw` | Make the agent ask first, reducing guesswork and rework. |
| Code review, LSP, formatting | `pi-lens` | `pi-simplify`, `@lpirito/pi-diffloop` | Use it for automated code-quality checks, typing, style, and local refactors. |
| Prompt templates and agent modes | `glimpseui` | `pi-prompt-template-model`, `pi-schedule-prompt` | Best when you want to shape how the agent thinks, asks, and responds. |
| Tool security and permissions | `@gotgenes/pi-permission-system` | `@aliou/pi-guardrails`, `pi-pkg-guard` | Restrict risky tools and isolate permissions for sensitive workflows. |

## Ecosystem Snapshot

| Metric | Value |
|---|---|
| Total packages | 2,364 |
| Categories | 34 |
| Monthly downloads | 1,497,231 |

## Top 20 Popular Extensions

| # | Package | Monthly downloads | Category |
|---|---|---|---|
| 1 | `pi-subagents` | 70,608 | Subagents / Multi-agent |
| 2 | `pi-mcp-adapter` | 59,788 | MCP Protocol Adapters |
| 3 | `context-mode` | 57,781 | MCP Protocol Adapters |
| 4 | `pi-web-access` | 34,332 | Web Access |
| 5 | `@ollama/pi-web-search` | 26,114 | Web Access |
| 6 | `@plannotator/pi-extension` | 21,911 | Workflows |
| 7 | `pi-lens` | 13,237 | Code Quality |
| 8 | `pi-markdown-preview` | 12,052 | Markdown Preview |
| 9 | `@juicesharp/rpiv-ask-user-question` | 11,982 | User Interaction |
| 10 | `pi-powerline-footer` | 11,650 | Terminal UI |
| 11 | `@juicesharp/rpiv-todo` | 11,493 | User Interaction |
| 12 | `pi-gsd` | 10,542 | Workflows |
| 13 | `pi-simplify` | 10,180 | Code Quality |
| 14 | `@juicesharp/rpiv-advisor` | 9,294 | Other |
| 15 | `pi-btw` | 9,095 | Terminal UI |
| 16 | `@juicesharp/rpiv-web-tools` | 9,054 | Web Access |
| 17 | `@juicesharp/rpiv-btw` | 8,998 | User Interaction |
| 18 | `@runfusion/fusion` | 8,990 | Other |
| 19 | `@juicesharp/rpiv-pi` | 8,855 | Workflows |
| 20 | `glimpseui` | 8,683 | Prompt Management |

## Category Overview

| Category | Packages | Monthly downloads | Top 3 plugins |
|---|---|---|---|
| Other | 1,158 | 452,951 | `@juicesharp/rpiv-advisor`, `@runfusion/fusion`, `@aliou/pi-processes` |
| Skills | 113 | 52,008 | `@juicesharp/rpiv-args`, `@heart-of-gold/toolkit`, `pi-docparser` |
| Subagents / Multi-agent | 99 | 152,904 | `pi-subagents`, `taskplane`, `@tintinweb/pi-subagents` |
| Web Access | 95 | 110,036 | `pi-web-access`, `@ollama/pi-web-search`, `@juicesharp/rpiv-web-tools` |
| Terminal UI | 95 | 65,065 | `pi-powerline-footer`, `pi-btw`, `pi-mermaid` |
| Context Management | 83 | 30,680 | `pi-continue`, `@sting8k/pi-vcc`, `pi-context-prune` |
| Memory Systems | 71 | 52,277 | `@samfp/pi-memory`, `pi-memctx`, `pi-hermes-memory` |
| Tooling & Security | 70 | 31,159 | `@gotgenes/pi-permission-system`, `@aliou/pi-guardrails`, `pi-pkg-guard` |
| MCP Protocol Adapters | 63 | 152,219 | `pi-mcp-adapter`, `context-mode`, `pi-lean-ctx` |
| Model Providers | 60 | 17,267 | `pi-provider-kimi-code`, `@ramarivera/pi-ts-aperture-provider`, `@sinamtz/pi-minimax-provider` |
| Prompt Management | 40 | 30,451 | `glimpseui`, `pi-prompt-template-model`, `pi-schedule-prompt` |
| Session Management | 40 | 12,982 | `@kaiserlich-dev/pi-session-search`, `pi-session-search`, `pi-edit-session-in-place` |
| Workflows | 37 | 61,073 | `@plannotator/pi-extension`, `pi-gsd`, `@juicesharp/rpiv-pi` |
| Themes | 37 | 13,769 | `pi-studio`, `pi-terminal-theme`, `@victor-software-house/pi-curated-themes` |
| Code Quality | 35 | 36,605 | `pi-lens`, `pi-simplify`, `@lpirito/pi-diffloop` |
| User Interaction | 30 | 54,760 | `@juicesharp/rpiv-ask-user-question`, `@juicesharp/rpiv-todo`, `@juicesharp/rpiv-btw` |
| Image Processing | 29 | 8,098 | `pi-better-openai`, `@injaneity/pi-computer-use`, `pi-codex-image-gen` |
| Desktop Notifications | 27 | 5,012 | `@pi-unipi/notify`, `pi-gotify-notifier`, `pi-notify` |
| Audio & Voice | 25 | 6,850 | `@codexstar/pi-listen`, `voipi`, `pi-smart-voice-notify` |
| External Integrations | 24 | 24,724 | `whatsapp-pi`, `@feniix/pi-notion`, `@llblab/pi-telegram` |
| Cost & Proxy Management | 20 | 11,384 | `pi-antigravity-rotator`, `pi-free`, `pi-vision-proxy` |
| Dashboards | 19 | 9,595 | `@blackbelt-technology/pi-agent-dashboard`, `@pi-unipi/info-screen`, `@braintrust/pi-extension` |
| Autonomous Agent Modes | 14 | 17,556 | `@tmustier/pi-ralph-wiggum`, `@lnilluv/pi-ralph-loop`, `pi-caveman` |
| Meta & Management Tools | 13 | 18,568 | `pi-depo`, `@pi-unipi/core`, `@pi-unipi/unipi` |
| Markdown Preview | 12 | 17,738 | `pi-markdown-preview`, `@curl.md/pi`, `pi-todo-md` |
| Testing & Diagnostics | 12 | 9,357 | `@vtstech/pi-model-test`, `@vtstech/pi-diag`, `@marcfargas/pi-test-harness` |
| Chat & Messaging | 9 | 8,372 | `pi-intercom`, `@0xkobold/pi-gateway`, `pi-chatgpt-limit` |
| Browser Automation | 9 | 5,898 | `pi-agent-browser-native`, `pi-agent-browser`, `demo-dev` |
| Settings | 7 | 7,249 | `@axnic/pi-extension-settings`, `@juanibiapina/pi-extension-settings`, `@axnic/pi-extension-settings-sdk` |
| File Search | 5 | 7,769 | `@ff-labs/pi-fff`, `pi-fff`, `@the-forge-flow/fff-pi` |
| Data Visualization | 5 | 6,928 | `@walterra/pi-charts`, `@tungthedev/pi-extensions`, `@the-forge-flow/visual-explainer-pi` |
| Output Policies | 4 | 1,315 | `@vanillagreen/pi-output-policy`, `@nonplanarslicer/pi-save-output`, `@badliveware/pi-rich-output` |
| Shared Utilities | 2 | 4,513 | `@vtstech/pi-shared`, `@firstpick/pi-utils` |
| Continuous Learning | 2 | 99 | `@artale/pi-continuous`, `pi-quiz` |

## Deep Dives

For the curated 16-category guide, see the root `README.md`. This page focuses on browseable discovery and fast selection.

## Source Data

| File | Purpose |
|---|---|
| `data/all-packages.json` | Full structured dataset for all packages |
| `data/classified-v2.json` | Package lists by the 34 fine-grained categories |
| `data/ecosystem-report.json` | Aggregate ecosystem report |
