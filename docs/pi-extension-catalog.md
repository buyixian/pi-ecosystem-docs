# PI 全量插件目录

> 默认中文 · English mirror: [Open the English catalog](./pi-extension-catalog.en.md)

> 这里列出所有 PI 插件，按自动排行展示，并直接附上安装命令。

## 分类索引

| 分类 | 包数 | 总月下载量 | Top 包 |
|---|---|---|---|
| [其他](#other) | 1,343 | 564,265 | [@juicesharp/rpiv-advisor](https://www.npmjs.com/package/@juicesharp/rpiv-advisor) |
| [MCP 协议适配](#mcp) | 75 | 212,840 | [context-mode](https://www.npmjs.com/package/context-mode) |
| [子代理/多代理](#subagent) | 124 | 185,612 | [pi-subagents](https://www.npmjs.com/package/pi-subagents) |
| [网络访问](#web) | 110 | 134,893 | [pi-web-access](https://www.npmjs.com/package/pi-web-access) |
| [用户交互](#userinteraction) | 34 | 85,716 | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question) |
| [终端 UI](#tui) | 111 | 82,376 | [pi-powerline-footer](https://www.npmjs.com/package/pi-powerline-footer) |
| [工作流](#workflow) | 49 | 65,325 | [@plannotator/pi-extension](https://www.npmjs.com/package/@plannotator/pi-extension) |
| [记忆系统](#memory) | 79 | 64,702 | [@samfp/pi-memory](https://www.npmjs.com/package/@samfp/pi-memory) |
| [技能包](#skill) | 127 | 61,777 | [@juicesharp/rpiv-args](https://www.npmjs.com/package/@juicesharp/rpiv-args) |
| [代码质量](#codequality) | 53 | 60,452 | [pi-simplify](https://www.npmjs.com/package/pi-simplify) |
| [上下文管理](#context) | 100 | 46,010 | [pi-bar](https://www.npmjs.com/package/pi-bar) |
| [工具与安全](#tool) | 87 | 41,374 | [@gotgenes/pi-permission-system](https://www.npmjs.com/package/@gotgenes/pi-permission-system) |
| [提示词管理](#prompt) | 46 | 35,678 | [glimpseui](https://www.npmjs.com/package/glimpseui) |
| [元包/管理工具](#meta) | 13 | 26,910 | [pi-depo](https://www.npmjs.com/package/pi-depo) |
| [外部集成](#integration) | 27 | 26,473 | [@llblab/pi-telegram](https://www.npmjs.com/package/@llblab/pi-telegram) |
| [模型供应商](#provider) | 65 | 19,112 | [pi-provider-kimi-code](https://www.npmjs.com/package/pi-provider-kimi-code) |
| [代理自主模式](#agentmode) | 17 | 18,943 | [@tmustier/pi-ralph-wiggum](https://www.npmjs.com/package/@tmustier/pi-ralph-wiggum) |
| [主题美化](#theme) | 44 | 18,183 | [pi-studio](https://www.npmjs.com/package/pi-studio) |
| [Markdown 预览](#markdownpreview) | 16 | 17,741 | [pi-markdown-preview](https://www.npmjs.com/package/pi-markdown-preview) |
| [会话管理](#session) | 47 | 16,498 | [@kaiserlich-dev/pi-session-search](https://www.npmjs.com/package/@kaiserlich-dev/pi-session-search) |
| [浏览器自动化](#browser) | 14 | 16,017 | [pi-chrome](https://www.npmjs.com/package/pi-chrome) |
| [成本/代理管理](#costproxy) | 23 | 15,023 | [pi-antigravity-rotator](https://www.npmjs.com/package/pi-antigravity-rotator) |
| [仪表盘](#dashboard) | 25 | 12,339 | [@pi-unipi/info-screen](https://www.npmjs.com/package/@pi-unipi/info-screen) |
| [文件搜索](#filesearch) | 5 | 12,198 | [@ff-labs/pi-fff](https://www.npmjs.com/package/@ff-labs/pi-fff) |
| [音频与语音](#audio) | 28 | 11,759 | [@codexstar/pi-listen](https://www.npmjs.com/package/@codexstar/pi-listen) |
| [聊天/消息](#chat) | 9 | 9,216 | [pi-intercom](https://www.npmjs.com/package/pi-intercom) |
| [桌面通知](#notification) | 27 | 8,327 | [@pi-unipi/notify](https://www.npmjs.com/package/@pi-unipi/notify) |
| [设置管理](#settings) | 9 | 8,219 | [@juanibiapina/pi-extension-settings](https://www.npmjs.com/package/@juanibiapina/pi-extension-settings) |
| [图像处理](#image) | 29 | 8,016 | [pi-better-openai](https://www.npmjs.com/package/pi-better-openai) |
| [测试与诊断](#testing) | 13 | 7,790 | [@marcfargas/pi-test-harness](https://www.npmjs.com/package/@marcfargas/pi-test-harness) |
| [数据可视化](#dataviz) | 7 | 5,217 | [@walterra/pi-charts](https://www.npmjs.com/package/@walterra/pi-charts) |
| [共享工具库](#utils) | 2 | 2,629 | [@vtstech/pi-shared](https://www.npmjs.com/package/@vtstech/pi-shared) |
| [输出策略](#output) | 4 | 1,412 | [@vanillagreen/pi-output-policy](https://www.npmjs.com/package/@vanillagreen/pi-output-policy) |
| [持续学习](#learning) | 4 | 1,257 | [@majorgilles/pi-learning-tutor](https://www.npmjs.com/package/@majorgilles/pi-learning-tutor) |

## 使用方式

在你的 PI 项目目录中运行 `npm install <package>` 即可安装；表格中已直接给出每个包的安装命令。

<a id="other"></a>
## 其他
> 1,343 个包 · 总月下载量 564,265

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@juicesharp/rpiv-advisor](https://www.npmjs.com/package/@juicesharp/rpiv-advisor) | 13,440 | `npm install @juicesharp/rpiv-advisor` | Pi extension. A second opinion the model can request from a stronger reviewer model bef… |
| 2 | [pi-agent-flow](https://www.npmjs.com/package/pi-agent-flow) | 11,854 | `npm install pi-agent-flow` | Flow-state transition extension for Pi coding agent. |
| 3 | [@runfusion/fusion](https://www.npmjs.com/package/@runfusion/fusion) | 10,984 | `npm install @runfusion/fusion` | Fusion CLI: HTTP API server, daemon, dashboard launcher, and task tooling for the Fusio… |
| 4 | [@companion-ai/feynman](https://www.npmjs.com/package/@companion-ai/feynman) | 7,078 | `npm install @companion-ai/feynman` | Research-first CLI agent built on Pi and alphaXiv |
| 5 | [@howaboua/pi-codex-conversion](https://www.npmjs.com/package/@howaboua/pi-codex-conversion) | 6,484 | `npm install @howaboua/pi-codex-conversion` | Codex-oriented tool and prompt adapter for pi coding agent |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 1,343 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@juicesharp/rpiv-advisor](https://www.npmjs.com/package/@juicesharp/rpiv-advisor) | 13,440 | `npm install @juicesharp/rpiv-advisor` | Pi extension. A second opinion the model can request from a stronger reviewer model before it acts. |
| 2 | [pi-agent-flow](https://www.npmjs.com/package/pi-agent-flow) | 11,854 | `npm install pi-agent-flow` | Flow-state transition extension for Pi coding agent. |
| 3 | [@runfusion/fusion](https://www.npmjs.com/package/@runfusion/fusion) | 10,984 | `npm install @runfusion/fusion` | Fusion CLI: HTTP API server, daemon, dashboard launcher, and task tooling for the Fusion AI coding agent. |
| 4 | [@companion-ai/feynman](https://www.npmjs.com/package/@companion-ai/feynman) | 7,078 | `npm install @companion-ai/feynman` | Research-first CLI agent built on Pi and alphaXiv |
| 5 | [@howaboua/pi-codex-conversion](https://www.npmjs.com/package/@howaboua/pi-codex-conversion) | 6,484 | `npm install @howaboua/pi-codex-conversion` | Codex-oriented tool and prompt adapter for pi coding agent |
| 6 | [@aliou/pi-processes](https://www.npmjs.com/package/@aliou/pi-processes) | 6,394 | `npm install @aliou/pi-processes` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-processes.png) |
| 7 | [@leing2021/super-pi](https://www.npmjs.com/package/@leing2021/super-pi) | 5,678 | `npm install @leing2021/super-pi` | Pi-native Compound Engineering package for iterative development workflows |
| 8 | [@astrofoundry/pi-astro](https://www.npmjs.com/package/@astrofoundry/pi-astro) | 5,624 | `npm install @astrofoundry/pi-astro` | Personal pi customizations (extensions, skills, prompts, themes) for the pi coding agent. |
| 9 | [@juicesharp/rpiv-i18n](https://www.npmjs.com/package/@juicesharp/rpiv-i18n) | 5,414 | `npm install @juicesharp/rpiv-i18n` | Pi extension. The localization foundation for rpiv-* skills: locale detection, the /languages command, the --locale fla… |
| 10 | [@os-eco/mulch-cli](https://www.npmjs.com/package/@os-eco/mulch-cli) | 4,358 | `npm install @os-eco/mulch-cli` | Let your agents grow 🌱 — structured expertise files that accumulate over time, live in git, work with any agent |
| 11 | [dripline](https://www.npmjs.com/package/dripline) | 4,073 | `npm install dripline` | Query anything, one drip at a time |
| 12 | [@apmantza/greedysearch-pi](https://www.npmjs.com/package/@apmantza/greedysearch-pi) | 3,893 | `npm install @apmantza/greedysearch-pi` | Headless multi-engine AI search (Perplexity, Bing Copilot, Google AI) via browser automation -- NO API KEYS needed. Ext… |
| 13 | [@ifi/oh-pi-themes](https://www.npmjs.com/package/@ifi/oh-pi-themes) | 3,768 | `npm install @ifi/oh-pi-themes` | Color themes for pi: cyberpunk, nord, gruvbox, tokyo-night, catppuccin, and more. |
| 14 | [pi-rtk-optimizer](https://www.npmjs.com/package/pi-rtk-optimizer) | 3,632 | `npm install pi-rtk-optimizer` | Pi extension that optimizes RTK command rewriting and tool output compaction for the coding agent. |
| 15 | [@arshan-dev/pi-ideas](https://www.npmjs.com/package/@arshan-dev/pi-ideas) | 3,189 | `npm install @arshan-dev/pi-ideas` | Idea garden extension for pi: capture, browse, expand, combine, and ship ideas from slash commands. |
| 16 | [@eforge-build/pi-eforge](https://www.npmjs.com/package/@eforge-build/pi-eforge) | 3,120 | `npm install @eforge-build/pi-eforge` | eforge integration for Pi - enqueue, run, and monitor builds from within Pi |
| 17 | [@tmustier/pi-usage-extension](https://www.npmjs.com/package/@tmustier/pi-usage-extension) | 3,110 | `npm install @tmustier/pi-usage-extension` | Usage statistics dashboard for Pi sessions. |
| 18 | [pi-qmd-ledger](https://www.npmjs.com/package/pi-qmd-ledger) | 3,032 | `npm install pi-qmd-ledger` | Universal configurable JSONL ledger with qmd hybrid search, tiered HITL, and dynamic context injection. |
| 19 | [@bdsqqq/pi](https://www.npmjs.com/package/@bdsqqq/pi) | 2,933 | `npm install @bdsqqq/pi` | extensions and core utilities for pi-coding-agent |
| 20 | [@diegopetrucci/pi-extensions](https://www.npmjs.com/package/@diegopetrucci/pi-extensions) | 2,861 | `npm install @diegopetrucci/pi-extensions` | A collection of pi extensions for context management, review-comment triage, notifications, safety guards, GitHub resea… |
| 21 | [@woxqaq/pi-web](https://www.npmjs.com/package/@woxqaq/pi-web) | 2,838 | `npm install @woxqaq/pi-web` | Web Shell for pi coding agent |
| 22 | [pi-cyber-ui](https://www.npmjs.com/package/pi-cyber-ui) | 2,830 | `npm install pi-cyber-ui` | Standalone Pi UI package with a cyber-inspired theme, custom editor, footer, and lightweight working indicator. |
| 23 | [@narumitw/pi-goal](https://www.npmjs.com/package/@narumitw/pi-goal) | 2,760 | `npm install @narumitw/pi-goal` | Pi extension that keeps working on a /goal until the agent marks it complete. |
| 24 | [@narumitw/pi-chrome-devtools](https://www.npmjs.com/package/@narumitw/pi-chrome-devtools) | 2,751 | `npm install @narumitw/pi-chrome-devtools` | Pi extension that exposes Chrome DevTools Protocol tools. |
| 25 | [@narumitw/pi-caffeinate](https://www.npmjs.com/package/@narumitw/pi-caffeinate) | 2,740 | `npm install @narumitw/pi-caffeinate` | Pi extension that keeps the computer awake while the agent is running. |
| 26 | [@feniix/pi-exa](https://www.npmjs.com/package/@feniix/pi-exa) | 2,695 | `npm install @feniix/pi-exa` | Exa API extension for pi — web search, content fetching, and advanced search via Exa AI |
| 27 | [@feniix/pi-specdocs](https://www.npmjs.com/package/@feniix/pi-specdocs) | 2,652 | `npm install @feniix/pi-specdocs` | Structured spec documentation — PRDs, ADRs, and implementation plans with cross-referencing |
| 28 | [pi-json-tools](https://www.npmjs.com/package/pi-json-tools) | 2,567 | `npm install pi-json-tools` | Smart Recovery for Qwen Coder - Auto hallucination detection, auto reminder, smart recovery for qwen2.5-coder family |
| 29 | [@eko24ive/pi-ask](https://www.npmjs.com/package/@eko24ive/pi-ask) | 2,434 | `npm install @eko24ive/pi-ask` | Pi package that adds an interactive ask_user clarification tool. |
| 30 | [pi-llama-cpp](https://www.npmjs.com/package/pi-llama-cpp) | 2,420 | `npm install pi-llama-cpp` | Pi extension for llama.cpp integration. Supports both router and single modes. |
| 31 | [pi-extmgr](https://www.npmjs.com/package/pi-extmgr) | 2,394 | `npm install pi-extmgr` | Enhanced UX for managing local Pi extensions and community packages |
| 32 | [@0xkobold/pi-codebase-wiki](https://www.npmjs.com/package/@0xkobold/pi-codebase-wiki) | 2,377 | `npm install @0xkobold/pi-codebase-wiki` | Keeps a wiki for your code that updates itself — reads your git history and docs so you can ask questions about your co… |
| 33 | [@spences10/pi-telemetry](https://www.npmjs.com/package/@spences10/pi-telemetry) | 2,364 | `npm install @spences10/pi-telemetry` | Local SQLite telemetry for Pi runs, turns, tool calls, provider requests, usage, and latency |
| 34 | [@marckrenn/pi-sub-core](https://www.npmjs.com/package/@marckrenn/pi-sub-core) | 2,351 | `npm install @marckrenn/pi-sub-core` | Shared usage data core for pi extensions |
| 35 | [pi-cider](https://www.npmjs.com/package/pi-cider) | 2,317 | `npm install pi-cider` | Pi extension for Cider Apple Music client - control playback, queue management, and more via RPC |
| 36 | [pi-code-previews](https://www.npmjs.com/package/pi-code-previews) | 2,205 | `npm install pi-code-previews` | Syntax-highlighted previews for pi tool calls. |
| 37 | [pi-cc](https://www.npmjs.com/package/pi-cc) | 2,173 | `npm install pi-cc` | pi extension that auto-publishes autoresearch.jsonl updates to community.computer. |
| 38 | [pi-extensions](https://www.npmjs.com/package/pi-extensions) | 2,078 | `npm install pi-extensions` | Personal extensions for the [Pi coding agent](https://github.com/badlogic/pi-mono). |
| 39 | [pi-qq](https://www.npmjs.com/package/pi-qq) | 2,075 | `npm install pi-qq` | Ask side questions in pi without polluting the main transcript — /qq or alt+q. |
| 40 | [@aliou/pi-synthetic](https://www.npmjs.com/package/@aliou/pi-synthetic) | 2,073 | `npm install @aliou/pi-synthetic` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-synthetic.png) |
| 41 | [latchkey](https://www.npmjs.com/package/latchkey) | 1,951 | `npm install latchkey` | A CLI tool that injects API credentials into curl requests to third-party services |
| 42 | [pi-oracle](https://www.npmjs.com/package/pi-oracle) | 1,917 | `npm install pi-oracle` | ChatGPT and Grok web-oracle extension for pi with isolated browser auth, async jobs, and project-context archives. |
| 43 | [@rwese/pi-question](https://www.npmjs.com/package/@rwese/pi-question) | 1,901 | `npm install @rwese/pi-question` | Unified question tool for pi coding agent - single or multi-question interactions with optional notes and custom input… |
| 44 | [@outlit/pi](https://www.npmjs.com/package/@outlit/pi) | 1,892 | `npm install @outlit/pi` | Pi package for Outlit customer intelligence tools |
| 45 | [@vtstech/pi-security](https://www.npmjs.com/package/@vtstech/pi-security) | 1,885 | `npm install @vtstech/pi-security` | Security extension for Pi Coding Agent |
| 46 | [pi-claude-bridge](https://www.npmjs.com/package/pi-claude-bridge) | 1,870 | `npm install pi-claude-bridge` | Pi extension that uses Claude Code (via Agent SDK) as a model provider and adds an AskClaude tool. |
| 47 | [@sentiolabs/pi-arc](https://www.npmjs.com/package/@sentiolabs/pi-arc) | 1,858 | `npm install @sentiolabs/pi-arc` | Arc issue tracker integration for Pi. |
| 48 | [@vtstech/pi-status](https://www.npmjs.com/package/@vtstech/pi-status) | 1,826 | `npm install @vtstech/pi-status` | System monitor / status bar extension for Pi Coding Agent |
| 49 | [@beatly/core](https://www.npmjs.com/package/@beatly/core) | 1,826 | `npm install @beatly/core` | Beatly control layer and bundled SuperCollider runtime. |
| 50 | [pi-bridge](https://www.npmjs.com/package/pi-bridge) | 1,821 | `npm install pi-bridge` | Transparent filesystem bridge that makes pi run natively on a remote machine over SSH |
| 51 | [@spences10/pi-redact](https://www.npmjs.com/package/@spences10/pi-redact) | 1,817 | `npm install @spences10/pi-redact` | Tool-output redaction for Pi that replaces likely secrets before they reach the model context |
| 52 | [@vtstech/pi-openrouter-sync](https://www.npmjs.com/package/@vtstech/pi-openrouter-sync) | 1,800 | `npm install @vtstech/pi-openrouter-sync` | OpenRouter model sync extension for Pi Coding Agent — add models from OpenRouter URLs or IDs |
| 53 | [@vtstech/pi-ollama-sync](https://www.npmjs.com/package/@vtstech/pi-ollama-sync) | 1,789 | `npm install @vtstech/pi-ollama-sync` | Ollama model sync extension for Pi Coding Agent |
| 54 | [pi-hashline-readmap](https://www.npmjs.com/package/pi-hashline-readmap) | 1,776 | `npm install pi-hashline-readmap` | Unified pi extension: hash-anchored read/edit/grep, structural code maps, AST-grep, file exploration (ls/find), and bas… |
| 55 | [pi-runline](https://www.npmjs.com/package/pi-runline) | 1,776 | `npm install pi-runline` | Code mode for pi |
| 56 | [@firstpick/pi-extension-release-npm](https://www.npmjs.com/package/@firstpick/pi-extension-release-npm) | 1,774 | `npm install @firstpick/pi-extension-release-npm` | Pi command to run npm package release workflow with publish confirmation. |
| 57 | [@spences10/pi-confirm-destructive](https://www.npmjs.com/package/@spences10/pi-confirm-destructive) | 1,758 | `npm install @spences10/pi-confirm-destructive` | Git-aware Pi guardrail that asks for confirmation before destructive shell actions can change or lose work |
| 58 | [sterlai](https://www.npmjs.com/package/sterlai) | 1,756 | `npm install sterlai` | Terminal AI agent for Stellar. Chat-driven payments, path payments, trustlines, and friendbot funding on testnet, with… |
| 59 | [pi-graphite](https://www.npmjs.com/package/pi-graphite) | 1,752 | `npm install pi-graphite` | Opinionated pi tools + skill for stacked PR workflows with the Graphite (gt) CLI. |
| 60 | [@feniix/pi-devtools](https://www.npmjs.com/package/@feniix/pi-devtools) | 1,734 | `npm install @feniix/pi-devtools` | Devtools extension for pi — branch and PR workflow, release automation, PR feedback resolution, merge commands, with Gi… |
| 61 | [@capyup/pi-basic-tools](https://www.npmjs.com/package/@capyup/pi-basic-tools) | 1,727 | `npm install @capyup/pi-basic-tools` | Standalone core productivity tools for pi: repo_map, read_block, symbol_outline, apply_patch, exec_command, write_stdin… |
| 62 | [@vtstech/pi-api](https://www.npmjs.com/package/@vtstech/pi-api) | 1,715 | `npm install @vtstech/pi-api` | API Mode Switcher extension for Pi Coding Agent |
| 63 | [@ifi/oh-pi-extensions](https://www.npmjs.com/package/@ifi/oh-pi-extensions) | 1,715 | `npm install @ifi/oh-pi-extensions` | Core pi extensions: git-guard, auto-session, custom-footer, and more. |
| 64 | [pi-workspace-history](https://www.npmjs.com/package/pi-workspace-history) | 1,693 | `npm install pi-workspace-history` | Real workspace undo/redo for Pi. Bring Claude Code style /rewind and OpenCode /undo safety to @mariozechner/pi-coding-a… |
| 65 | [@ifi/oh-pi-ant-colony](https://www.npmjs.com/package/@ifi/oh-pi-ant-colony) | 1,672 | `npm install @ifi/oh-pi-ant-colony` | Autonomous multi-agent swarm extension for pi — adaptive concurrency, pheromone communication. |
| 66 | [claude-code-tmux](https://www.npmjs.com/package/claude-code-tmux) | 1,668 | `npm install claude-code-tmux` | Durable tmux controller for interactive Claude Code sessions, with a Pi extension and skill. |
| 67 | [pi-packs](https://www.npmjs.com/package/pi-packs) | 1,664 | `npm install pi-packs` | Umbrella Pi package: /install picker for a curated set of pi extensions (pi-qq, pi-chrome, pi-intercom, pi-linter, pi-b… |
| 68 | [clickup-cu](https://www.npmjs.com/package/clickup-cu) | 1,664 | `npm install clickup-cu` | Fast ClickUp CLI for daily task workflow, with optional Pi prompt shortcut. |
| 69 | [@juicesharp/rpiv-warp](https://www.npmjs.com/package/@juicesharp/rpiv-warp) | 1,652 | `npm install @juicesharp/rpiv-warp` | Pi extension. Native Warp terminal notifications, dispatched via OSC 777 on Pi lifecycle events. |
| 70 | [pi-zotero](https://www.npmjs.com/package/pi-zotero) | 1,651 | `npm install pi-zotero` | Zotero library search, citation export, and PDF annotation tools for pi via Better BibTeX |
| 71 | [@tmustier/pi-raw-paste](https://www.npmjs.com/package/@tmustier/pi-raw-paste) | 1,623 | `npm install @tmustier/pi-raw-paste` | One-shot raw paste support for Pi (/paste). |
| 72 | [@gotgenes/pi-anthropic-auth](https://www.npmjs.com/package/@gotgenes/pi-anthropic-auth) | 1,590 | `npm install @gotgenes/pi-anthropic-auth` | Pi extension package for Anthropic OAuth compatibility |
| 73 | [@llblab/pi-auto-tools](https://www.npmjs.com/package/@llblab/pi-auto-tools) | 1,580 | `npm install @llblab/pi-auto-tools` | Persistent template-backed tools for pi |
| 74 | [@darkhorseprojects/pi-circuitry](https://www.npmjs.com/package/@darkhorseprojects/pi-circuitry) | 1,567 | `npm install @darkhorseprojects/pi-circuitry` | Pi extension for Circuitry - agentic workflows on Excalidraw |
| 75 | [@open-plan-annotator/pi-extension](https://www.npmjs.com/package/@open-plan-annotator/pi-extension) | 1,564 | `npm install @open-plan-annotator/pi-extension` | Pi extension for open-plan-annotator that adds plan review tools and commands |
| 76 | [pi-simocracy](https://www.npmjs.com/package/pi-simocracy) | 1,551 | `npm install pi-simocracy` | Pi extension: load a Simocracy sim into your chat — see its pixel-art sprite render inline in the terminal and roleplay… |
| 77 | [pi-token-burden](https://www.npmjs.com/package/pi-token-burden) | 1,533 | `npm install pi-token-burden` | Pi extension that shows a token-budget breakdown of the assembled system prompt |
| 78 | [@vtstech/pi-react-fallback](https://www.npmjs.com/package/@vtstech/pi-react-fallback) | 1,526 | `npm install @vtstech/pi-react-fallback` | ReAct fallback extension for Pi Coding Agent |
| 79 | [@micuintus/llm-wiki](https://www.npmjs.com/package/@micuintus/llm-wiki) | 1,505 | `npm install @micuintus/llm-wiki` | As minimal as Pi. Karpathy's LLM Wiki pattern as a minimal, agent-agnostic skill. |
| 80 | [@oppiai/pi-package](https://www.npmjs.com/package/@oppiai/pi-package) | 1,504 | `npm install @oppiai/pi-package` | OPPi Pi package: extensions, skills, prompts, and themes. |
| 81 | [@capyup/pi-goal](https://www.npmjs.com/package/@capyup/pi-goal) | 1,499 | `npm install @capyup/pi-goal` | Goal mode extension for pi: persistent long-running objectives, /goal-set drafting, Sisyphus prompt style, autoContinue… |
| 82 | [pi-ollama-cloud](https://www.npmjs.com/package/pi-ollama-cloud) | 1,496 | `npm install pi-ollama-cloud` | Ollama Cloud provider plugin for [Pi](https://github.com/badlogic/pi-mono) coding agent. |
| 83 | [@spences10/pi-recall](https://www.npmjs.com/package/@spences10/pi-recall) | 1,487 | `npm install @spences10/pi-recall` | Pi extension that syncs pirecall and nudges agents to query past Pi sessions when history matters |
| 84 | [@narumitw/pi-retry](https://www.npmjs.com/package/@narumitw/pi-retry) | 1,483 | `npm install @narumitw/pi-retry` | Public pi extension that retries empty-detail provider unknown errors. |
| 85 | [@spences10/pi-nopeek](https://www.npmjs.com/package/@spences10/pi-nopeek) | 1,480 | `npm install @spences10/pi-nopeek` | Secret-safe workflow reminder that steers Pi agents to use nopeek instead of exposing .env values |
| 86 | [@ineersa/my-pi-extensions](https://www.npmjs.com/package/@ineersa/my-pi-extensions) | 1,457 | `npm install @ineersa/my-pi-extensions` | Personal extension bundle for pi-coding-agent |
| 87 | [@ineersa/my-pi-themes](https://www.npmjs.com/package/@ineersa/my-pi-themes) | 1,449 | `npm install @ineersa/my-pi-themes` | Color themes for pi: cyberpunk, nord, gruvbox, tokyo-night, catppuccin, and more. |
| 88 | [@kinarajv/pi-tps-extensions](https://www.npmjs.com/package/@kinarajv/pi-tps-extensions) | 1,438 | `npm install @kinarajv/pi-tps-extensions` | Token-per-sec extensions — real-time token throughput and TTFT (Time To First Token) display for pi coding agent |
| 89 | [@heyhuynhgiabuu/pi-pretty](https://www.npmjs.com/package/@heyhuynhgiabuu/pi-pretty) | 1,436 | `npm install @heyhuynhgiabuu/pi-pretty` | Pretty terminal output for pi — syntax-highlighted file reads, colored bash output, tree-view directory listings, and m… |
| 90 | [pi-lmstudio](https://www.npmjs.com/package/pi-lmstudio) | 1,430 | `npm install pi-lmstudio` | LM Studio and llama-server model provider extensions for Pi coding agent |
| 91 | [pi-knowledge-search](https://www.npmjs.com/package/pi-knowledge-search) | 1,415 | `npm install pi-knowledge-search` | Semantic search over local files for pi. Indexes a directory of text files, watches for changes, and exposes a knowledg… |
| 92 | [bmw-lex](https://www.npmjs.com/package/bmw-lex) | 1,401 | `npm install bmw-lex` | Lex — BMW Legal AI Agent Platform built on Pi |
| 93 | [@tmustier/pi-files-widget](https://www.npmjs.com/package/@tmustier/pi-files-widget) | 1,394 | `npm install @tmustier/pi-files-widget` | In-terminal file browser and viewer for Pi. |
| 94 | [@ineersa/my-pi-scheduler](https://www.npmjs.com/package/@ineersa/my-pi-scheduler) | 1,393 | `npm install @ineersa/my-pi-scheduler` | Scheduler extension for pi: recurring checks, one-time reminders, and the LLM-callable schedule_prompt tool. |
| 95 | [pi-gh-my-starred](https://www.npmjs.com/package/pi-gh-my-starred) | 1,392 | `npm install pi-gh-my-starred` | PI extension for browsing GitHub starred repositories and star lists |
| 96 | [opencandle](https://www.npmjs.com/package/opencandle) | 1,383 | `npm install opencandle` | Financial trading & investing agent |
| 97 | [pi-delegate](https://www.npmjs.com/package/pi-delegate) | 1,374 | `npm install pi-delegate` | Minimal delegate tool for Pi |
| 98 | [@ineersa/my-pi](https://www.npmjs.com/package/@ineersa/my-pi) | 1,369 | `npm install @ineersa/my-pi` | One-command installer for my pi extension bundle |
| 99 | [pi-cursor-sdk](https://www.npmjs.com/package/pi-cursor-sdk) | 1,367 | `npm install pi-cursor-sdk` | pi provider extension backed by @cursor/sdk local agents |
| 100 | [pi-codex-goal](https://www.npmjs.com/package/pi-codex-goal) | 1,365 | `npm install pi-codex-goal` | Codex-style goal tracking and continuation for pi. |
| 101 | [pi-snap-edit](https://www.npmjs.com/package/pi-snap-edit) | 1,355 | `npm install pi-snap-edit` | Fast, precise, script-free edits for Pi agents |
| 102 | [pi-claude-marketplace](https://www.npmjs.com/package/pi-claude-marketplace) | 1,340 | `npm install pi-claude-marketplace` | Access Claude plugin marketplaces from Pi. |
| 103 | [pi-themes](https://www.npmjs.com/package/pi-themes) | 1,300 | `npm install pi-themes` | A collection of major color themes for pi with a theme switcher extension |
| 104 | [pi-twincat-ads](https://www.npmjs.com/package/pi-twincat-ads) | 1,289 | `npm install pi-twincat-ads` | Pi extension for reading and writing TwinCAT runtime values over ADS. |
| 105 | [@devkade/pi-plan](https://www.npmjs.com/package/@devkade/pi-plan) | 1,276 | `npm install @devkade/pi-plan` | Plan command extension for Pi: read-only planning mode with approval-based execution |
| 106 | [@os-eco/seeds-cli](https://www.npmjs.com/package/@os-eco/seeds-cli) | 1,250 | `npm install @os-eco/seeds-cli` | Git-native issue tracker for AI agent workflows |
| 107 | [pi-nvidia-nim](https://www.npmjs.com/package/pi-nvidia-nim) | 1,244 | `npm install pi-nvidia-nim` | NVIDIA NIM API provider extension for pi coding agent — access 100+ models from build.nvidia.com |
| 108 | [@vanillagreen/pi-qol](https://www.npmjs.com/package/@vanillagreen/pi-qol) | 1,240 | `npm install @vanillagreen/pi-qol` | Pi quality-of-life extension: compact statusline/π prompt, reliable multiline input, styled pasted-image chips, session… |
| 109 | [pi-island](https://www.npmjs.com/package/pi-island) | 1,239 | `npm install pi-island` | Dynamic-Island-style status capsule for the pi coding agent on macOS and Windows. Shows what pi is doing in real time,… |
| 110 | [pi-contrib-gate](https://www.npmjs.com/package/pi-contrib-gate) | 1,238 | `npm install pi-contrib-gate` | Contribution gateway for AI agents — enforce branch naming, conventional commits, pre-commit quality gates, and PR auto… |
| 111 | [@fitchmultz/pi-stash](https://www.npmjs.com/package/@fitchmultz/pi-stash) | 1,237 | `npm install @fitchmultz/pi-stash` | A pi extension for stashing draft messages and restoring them later. |
| 112 | [pi-answer](https://www.npmjs.com/package/pi-answer) | 1,211 | `npm install pi-answer` | Interactive Q&A extraction extension for pi |
| 113 | [pi-mempalace-extension](https://www.npmjs.com/package/pi-mempalace-extension) | 1,207 | `npm install pi-mempalace-extension` | Lean MemPalace integration for the Pi coding agent |
| 114 | [pi-morphllm-plugin](https://www.npmjs.com/package/pi-morphllm-plugin) | 1,203 | `npm install pi-morphllm-plugin` | Morph runtime extension package for Pi Coding Agent with tools, hooks, and compaction |
| 115 | [pi-mono-sentinel](https://www.npmjs.com/package/pi-mono-sentinel) | 1,196 | `npm install pi-mono-sentinel` | Pi extension that guards against content-based secret leaks and indirect script execution |
| 116 | [pi-yandex-bridge](https://www.npmjs.com/package/pi-yandex-bridge) | 1,187 | `npm install pi-yandex-bridge` | Pi Coding Agent provider bridge for Yandex Cloud AI (YandexGPT) |
| 117 | [@0xkobold/pi-ollama](https://www.npmjs.com/package/@0xkobold/pi-ollama) | 1,171 | `npm install @0xkobold/pi-ollama` | Ollama extension for pi-coding-agent. Unified local + cloud Ollama support with model management |
| 118 | [@ryan_nookpi/pi-extension-diff-review](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-diff-review) | 1,167 | `npm install @ryan_nookpi/pi-extension-diff-review` | Native diff review window extension for pi. |
| 119 | [@ramarivera/pi-kimi-for-coding](https://www.npmjs.com/package/@ramarivera/pi-kimi-for-coding) | 1,159 | `npm install @ramarivera/pi-kimi-for-coding` | Pi extension that adds Kimi For Coding OAuth support using the official device flow and Kimi-specific request behavior. |
| 120 | [pi-hashline-edit](https://www.npmjs.com/package/pi-hashline-edit) | 1,158 | `npm install pi-hashline-edit` | Hashline read/edit tool override for pi-coding-agent |
| 121 | [@firstpick/pi-extension-notes](https://www.npmjs.com/package/@firstpick/pi-extension-notes) | 1,156 | `npm install @firstpick/pi-extension-notes` | Local notes CRUD extension for Pi with optional rule-note prompt injection. |
| 122 | [pi-cursor-agent](https://www.npmjs.com/package/pi-cursor-agent) | 1,149 | `npm install pi-cursor-agent` | Cursor Agent provider extension for pi |
| 123 | [pi-copy-user-message](https://www.npmjs.com/package/pi-copy-user-message) | 1,145 | `npm install pi-copy-user-message` | pi extension that adds /copy-user to copy the most recent user message to your clipboard |
| 124 | [pi-wecombot](https://www.npmjs.com/package/pi-wecombot) | 1,136 | `npm install pi-wecombot` | 企业微信智能机器人 WebSocket 长连接扩展 for pi |
| 125 | [pi-constell-plan](https://www.npmjs.com/package/pi-constell-plan) | 1,120 | `npm install pi-constell-plan` | Claude Code-style plan mode for pi: explicit --plan / /plan entry, askUserQuestion gating, and Constellagent-compatible… |
| 126 | [pi-byteplus-modelark](https://www.npmjs.com/package/pi-byteplus-modelark) | 1,109 | `npm install pi-byteplus-modelark` | Pi extension for BytePlus ModelArk Coding Plan — registers ModelArk as a custom OpenAI-compatible provider with all sup… |
| 127 | [nightmanager](https://www.npmjs.com/package/nightmanager) | 1,107 | `npm install nightmanager` | Finder, Oracle, Manager, and Worker tools for Pi's Nightmanager workflow |
| 128 | [pi-dingtalkbot](https://www.npmjs.com/package/pi-dingtalkbot) | 1,098 | `npm install pi-dingtalkbot` | 钉钉智能机器人 Stream 长连接扩展 for pi |
| 129 | [@vanillagreen/pi-background-tasks](https://www.npmjs.com/package/@vanillagreen/pi-background-tasks) | 1,087 | `npm install @vanillagreen/pi-background-tasks` | Pi extension for explicit non-blocking background shell tasks, log tails, and completion wakeups. |
| 130 | [@ramarivera/pi-goal](https://www.npmjs.com/package/@ramarivera/pi-goal) | 1,087 | `npm install @ramarivera/pi-goal` | Pi extension that adds Codex-style persisted goals and hidden continuation pressure. |
| 131 | [pi-rewind](https://www.npmjs.com/package/pi-rewind) | 1,082 | `npm install pi-rewind` | Checkpoint/rewind extension for the Pi coding agent — per-tool snapshots, /rewind command, Esc+Esc shortcut, safe resto… |
| 132 | [@aretw0/pi-stack](https://www.npmjs.com/package/@aretw0/pi-stack) | 1,081 | `npm install @aretw0/pi-stack` | Meta-pacote que instala a stack curada de extensões pi do agents-lab — cada pacote individualmente |
| 133 | [pi-annotate](https://www.npmjs.com/package/pi-annotate) | 1,078 | `npm install pi-annotate` | Visual annotation tool for Pi coding agent with inline note cards |
| 134 | [pi-rewind-hook](https://www.npmjs.com/package/pi-rewind-hook) | 1,076 | `npm install pi-rewind-hook` | Rewind extension for Pi agent - automatic git checkpoints with file/conversation restore |
| 135 | [claude-agent-sdk-pi](https://www.npmjs.com/package/claude-agent-sdk-pi) | 1,068 | `npm install claude-agent-sdk-pi` | This extension registers a custom provider that routes LLM calls through the **Claude Agent SDK** while **pi executes t… |
| 136 | [pi-banana](https://www.npmjs.com/package/pi-banana) | 1,067 | `npm install pi-banana` | Generate, edit, and analyze images in pi using Google Nano Banana (image gen) and Gemini Vision (analysis). Inline term… |
| 137 | [@latentminds/pi-quotas](https://www.npmjs.com/package/@latentminds/pi-quotas) | 1,067 | `npm install @latentminds/pi-quotas` | Quota monitoring for Pi. Shows remaining usage and rate limits for Anthropic, OpenAI Codex, GitHub Copilot, OpenRouter,… |
| 138 | [@vanillagreen/pi-claude-bridge](https://www.npmjs.com/package/@vanillagreen/pi-claude-bridge) | 1,056 | `npm install @vanillagreen/pi-claude-bridge` | Pi provider bridge that runs Claude Code through the Claude Agent SDK, with opt-in forwarding for Pi prompt context. |
| 139 | [@jeonghyeon.net/pi-supervisor](https://www.npmjs.com/package/@jeonghyeon.net/pi-supervisor) | 1,055 | `npm install @jeonghyeon.net/pi-supervisor` | A pi extension that supervises the chat and steers it towards a defined outcome |
| 140 | [pi-goal](https://www.npmjs.com/package/pi-goal) | 1,045 | `npm install pi-goal` | Persistent autonomous goals for pi — /goal loops until complete, paused, or budget-limited |
| 141 | [pi-local-agents-only](https://www.npmjs.com/package/pi-local-agents-only) | 1,037 | `npm install pi-local-agents-only` | Pi extension that strips global AGENTS.md and CLAUDE.md from the effective prompt for selected projects. |
| 142 | [@vanillagreen/pi-agents-tmux](https://www.npmjs.com/package/@vanillagreen/pi-agents-tmux) | 1,035 | `npm install @vanillagreen/pi-agents-tmux` | Pi extension for delegating work to project or user agents, including persistent tmux agent panes. |
| 143 | [@neuralpartners/pi-yo](https://www.npmjs.com/package/@neuralpartners/pi-yo) | 1,026 | `npm install @neuralpartners/pi-yo` | Inter-terminal messaging for Pi agents and Claude Code sessions. |
| 144 | [@ineersa/my-pi-jetbrains-index](https://www.npmjs.com/package/@ineersa/my-pi-jetbrains-index) | 1,017 | `npm install @ineersa/my-pi-jetbrains-index` | JetBrains index diagnostics gate extension for pi-coding-agent |
| 145 | [pi-research](https://www.npmjs.com/package/pi-research) | 987 | `npm install pi-research` | Pi extension for web research. |
| 146 | [@robhowley/pi-openrouter](https://www.npmjs.com/package/@robhowley/pi-openrouter) | 982 | `npm install @robhowley/pi-openrouter` | Live OpenRouter spend/account TUI overlays, user-scoped model sync, and session tagging for Pi. |
| 147 | [@vanillagreen/pi-codex-minimal-tools](https://www.npmjs.com/package/@vanillagreen/pi-codex-minimal-tools) | 979 | `npm install @vanillagreen/pi-codex-minimal-tools` | Minimal Codex/OpenAI native tools for Pi: image_generation, view_image, apply_patch |
| 148 | [@vanillagreen/pi-task-panel](https://www.npmjs.com/package/@vanillagreen/pi-task-panel) | 977 | `npm install @vanillagreen/pi-task-panel` | Persistent Claude-style tasks panel for Pi with slash commands and a structured tasks_write tool. |
| 149 | [composio-x-pi](https://www.npmjs.com/package/composio-x-pi) | 975 | `npm install composio-x-pi` | Pi extension that exposes Composio-backed runtime and authoring tools. |
| 150 | [pi-mono-multi-edit](https://www.npmjs.com/package/pi-mono-multi-edit) | 965 | `npm install pi-mono-multi-edit` | Pi extension that replaces edit with batch edits and Codex-style patches |
| 151 | [pi-read-map](https://www.npmjs.com/package/pi-read-map) | 960 | `npm install pi-read-map` | Pi extension that adds structural file maps for large files |
| 152 | [pi-codexbar](https://www.npmjs.com/package/pi-codexbar) | 953 | `npm install pi-codexbar` | Pi extension wrapper for CodexBar provider state and controls |
| 153 | [pi-posh-git](https://www.npmjs.com/package/pi-posh-git) | 945 | `npm install pi-posh-git` | posh-git style persistent git status for pi. Displays branch, ahead/behind, staged/unstaged counts, and stash count — a… |
| 154 | [pi-ilo-lang](https://www.npmjs.com/package/pi-ilo-lang) | 943 | `npm install pi-ilo-lang` | Pi extension for the ilo programming language: run programs, hold an interactive ilo serv session, and load the ilo ski… |
| 155 | [@firstpick/pi-extension-plan-executor](https://www.npmjs.com/package/@firstpick/pi-extension-plan-executor) | 935 | `npm install @firstpick/pi-extension-plan-executor` | Autonomous PLAN.md execution loop for Pi that continues until all checklist items are complete. |
| 156 | [pi-token-speed](https://www.npmjs.com/package/pi-token-speed) | 933 | `npm install pi-token-speed` | Pi extension to measure tokens per second via sliding window. |
| 157 | [rad-pi](https://www.npmjs.com/package/rad-pi) | 932 | `npm install rad-pi` | Default Radicle package for pi: core deterministic tooling |
| 158 | [@aliou/pi-dev-kit](https://www.npmjs.com/package/@aliou/pi-dev-kit) | 922 | `npm install @aliou/pi-dev-kit` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-dev-kit.png) |
| 159 | [@feniix/pi-code-reasoning](https://www.npmjs.com/package/@feniix/pi-code-reasoning) | 905 | `npm install @feniix/pi-code-reasoning` | Code Reasoning extension for pi — reflective problem-solving through sequential thinking with branching and revision su… |
| 160 | [pi-jingle](https://www.npmjs.com/package/pi-jingle) | 904 | `npm install pi-jingle` | Play sounds on pi events like agent_start and agent_end |
| 161 | [pi-unified-exec](https://www.npmjs.com/package/pi-unified-exec) | 897 | `npm install pi-unified-exec` | Codex-style unified_exec for pi: long-lived shell sessions the LLM polls and drives with write_stdin (Ctrl-C, arrow key… |
| 162 | [@jaggerxtrm/pi-extensions](https://www.npmjs.com/package/@jaggerxtrm/pi-extensions) | 890 | `npm install @jaggerxtrm/pi-extensions` | Unified Pi extension entrypoint for xtrm-managed extensions |
| 163 | [pi-goals](https://www.npmjs.com/package/pi-goals) | 889 | `npm install pi-goals` | Persistent goal tracking for Pi with /tree-compatible state, budgets, reusable prompts, and churn monitoring. |
| 164 | [pi-ui-hephaestus](https://www.npmjs.com/package/pi-ui-hephaestus) | 887 | `npm install pi-ui-hephaestus` | Muted thinking blocks, framed editor, animated header, response time, rich footer, and clipboard image paste for pi |
| 165 | [@nteract/pi](https://www.npmjs.com/package/@nteract/pi) | 879 | `npm install @nteract/pi` | Persistent notebook-backed Python REPL for Pi coding agents. Stateful execution, hot dependency sync, zero cold starts. |
| 166 | [pi-claude-cli](https://www.npmjs.com/package/pi-claude-cli) | 867 | `npm install pi-claude-cli` | Pi coding agent extension that routes LLM calls through the Claude Code CLI |
| 167 | [pi-msgpack-rpc](https://www.npmjs.com/package/pi-msgpack-rpc) | 866 | `npm install pi-msgpack-rpc` | A MessagePack RPC tool for Pi |
| 168 | [@agnishc/edb-herald](https://www.npmjs.com/package/@agnishc/edb-herald) | 863 | `npm install @agnishc/edb-herald` | Pi extension: git commit and PR agent with approval gates |
| 169 | [@grafana/sigil-pi](https://www.npmjs.com/package/@grafana/sigil-pi) | 862 | `npm install @grafana/sigil-pi` | Pi agent extension for Grafana Sigil AI telemetry |
| 170 | [pi-agent-extensions](https://www.npmjs.com/package/pi-agent-extensions) | 855 | `npm install pi-agent-extensions` | Collection of extensions for pi coding agent |
| 171 | [@dreki-gg/pi-plan-mode](https://www.npmjs.com/package/@dreki-gg/pi-plan-mode) | 850 | `npm install @dreki-gg/pi-plan-mode` | Two-phase planning workflow for pi — plan with claude-opus-4-6:medium, execute with gpt-5.5:low, with .plans/ file-base… |
| 172 | [@agnishc/edb-diff-files](https://www.npmjs.com/package/@agnishc/edb-diff-files) | 850 | `npm install @agnishc/edb-diff-files` | Pi extension: live widget tracking files changed this session with an inline diff viewer |
| 173 | [pi-generate-commit-message](https://www.npmjs.com/package/pi-generate-commit-message) | 847 | `npm install pi-generate-commit-message` | Pi extension for generating commit messages from staged diffs |
| 174 | [@vtstech/pi-soul](https://www.npmjs.com/package/@vtstech/pi-soul) | 846 | `npm install @vtstech/pi-soul` | SoulSpec extension for Pi Coding Agent - Load and manage AI agent personas |
| 175 | [@agnishc/edb-agent-steer](https://www.npmjs.com/package/@agnishc/edb-agent-steer) | 844 | `npm install @agnishc/edb-agent-steer` | Pi extension: intercepts mid-turn messages with a steer / queue / discard / edit prompt |
| 176 | [pi-minimax-cli](https://www.npmjs.com/package/pi-minimax-cli) | 837 | `npm install pi-minimax-cli` | A pi coding agent extension that wraps the MiniMax mmx CLI as callable tools with self-evolving architecture |
| 177 | [@firstpick/pi-extension-brave-search](https://www.npmjs.com/package/@firstpick/pi-extension-brave-search) | 835 | `npm install @firstpick/pi-extension-brave-search` | Brave Search tool for Pi with API key resolution from env and .env files. |
| 178 | [@davidorex/pi-project](https://www.npmjs.com/package/@davidorex/pi-project) | 833 | `npm install @davidorex/pi-project` | Schema-driven project state management for Pi |
| 179 | [@jmfederico/pi-web](https://www.npmjs.com/package/@jmfederico/pi-web) | 830 | `npm install @jmfederico/pi-web` | Remote web UI and browser control plane for persistent Pi Coding Agent sessions. |
| 180 | [@fink-andreas/pi-linear-tools](https://www.npmjs.com/package/@fink-andreas/pi-linear-tools) | 827 | `npm install @fink-andreas/pi-linear-tools` | Pi extension with Linear SDK tools and configuration commands |
| 181 | [pi-mono-review](https://www.npmjs.com/package/pi-mono-review) | 822 | `npm install pi-mono-review` | Pi extension for reviewing GitHub PRs and GitLab MRs |
| 182 | [@howaboua/pi-vent](https://www.npmjs.com/package/@howaboua/pi-vent) | 821 | `npm install @howaboua/pi-vent` | Pi extension for logging repeated workflow friction to VENT.md. |
| 183 | [@agnishc/edb-usage-stats](https://www.npmjs.com/package/@agnishc/edb-usage-stats) | 820 | `npm install @agnishc/edb-usage-stats` | Pi extension: /usage command showing token rates, reset timers, and live provider status |
| 184 | [@wierdbytes/pi-statusline](https://www.npmjs.com/package/@wierdbytes/pi-statusline) | 816 | `npm install @wierdbytes/pi-statusline` | Minimal modular statusline extension for pi coding agent |
| 185 | [@alexanderfortin/pi-zai-usage](https://www.npmjs.com/package/@alexanderfortin/pi-zai-usage) | 808 | `npm install @alexanderfortin/pi-zai-usage` | Pi extension for monitoring Z.ai API token usage quota |
| 186 | [codecartographer-pi](https://www.npmjs.com/package/codecartographer-pi) | 805 | `npm install codecartographer-pi` | CodeCartographer packaged for Pi as an extension-driven workflow wrapper. |
| 187 | [@khimaros/pi-webui](https://www.npmjs.com/package/@khimaros/pi-webui) | 799 | `npm install @khimaros/pi-webui` | a simple, standalone webui for pi.dev |
| 188 | [@richardgill/pi-sub-pi](https://www.npmjs.com/package/@richardgill/pi-sub-pi) | 797 | `npm install @richardgill/pi-sub-pi` | Run isolated `pi` subprocesses for **single**, **chain**, or **parallel** work. |
| 189 | [pi-board](https://www.npmjs.com/package/pi-board) | 797 | `npm install pi-board` | AI-first local task/sprint manager |
| 190 | [pi-fizzy](https://www.npmjs.com/package/pi-fizzy) | 794 | `npm install pi-fizzy` | Pi extension for fetching Fizzy.do cards and turning them into build or plan prompts. |
| 191 | [pi-show-diffs](https://www.npmjs.com/package/pi-show-diffs) | 788 | `npm install pi-show-diffs` | Pi package that adds a diff approval viewer before edit and write tools change files. |
| 192 | [@carlosgtrz/pi-codex-aliases](https://www.npmjs.com/package/@carlosgtrz/pi-codex-aliases) | 783 | `npm install @carlosgtrz/pi-codex-aliases` | Pi extension that adds personal and work aliases for the built-in OpenAI Codex provider. |
| 193 | [@zenobius/pi-worktrees](https://www.npmjs.com/package/@zenobius/pi-worktrees) | 776 | `npm install @zenobius/pi-worktrees` | Worktrees extension for Pi Coding Agent |
| 194 | [@firstpick/pi-extension-stats](https://www.npmjs.com/package/@firstpick/pi-extension-stats) | 771 | `npm install @firstpick/pi-extension-stats` | Token and cost usage analytics command for Pi session history. |
| 195 | [@narumitw/pi-codex-usage](https://www.npmjs.com/package/@narumitw/pi-codex-usage) | 767 | `npm install @narumitw/pi-codex-usage` | Pi extension that shows Codex ChatGPT subscription usage without requiring Codex CLI. |
| 196 | [pi-vim](https://www.npmjs.com/package/pi-vim) | 766 | `npm install pi-vim` | Vim-style modal editing for Pi's TUI editor |
| 197 | [pi-mono-status-line](https://www.npmjs.com/package/pi-mono-status-line) | 761 | `npm install pi-mono-status-line` | Pi extension that adds git branch and richer stats to the footer |
| 198 | [pi-committer](https://www.npmjs.com/package/pi-committer) | 760 | `npm install pi-committer` | Conventional commit automation for the pi coding agent — auto-commits on goal completion with intelligent, subagent-gen… |
| 199 | [@vahor/pi-hooks](https://www.npmjs.com/package/@vahor/pi-hooks) | 757 | `npm install @vahor/pi-hooks` | Run shell commands on pi lifecycle events. |
| 200 | [@aliou/pi-linkup](https://www.npmjs.com/package/@aliou/pi-linkup) | 755 | `npm install @aliou/pi-linkup` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-linkup.png) |
| 201 | [@gotgenes/pi-github-tools](https://www.npmjs.com/package/@gotgenes/pi-github-tools) | 749 | `npm install @gotgenes/pi-github-tools` | Pi extension providing deterministic GitHub CI, release, and issue tools. |
| 202 | [@robhowley/pi-structured-return](https://www.npmjs.com/package/@robhowley/pi-structured-return) | 749 | `npm install @robhowley/pi-structured-return` | Turn noisy CLI output into compact structured results (fewer tokens), full logs preserved. |
| 203 | [@firstpick/pi-extension-fish-user-bash](https://www.npmjs.com/package/@firstpick/pi-extension-fish-user-bash) | 746 | `npm install @firstpick/pi-extension-fish-user-bash` | Use fish shell backend for Pi user bash commands (! and !!). |
| 204 | [pi-extension-manager](https://www.npmjs.com/package/pi-extension-manager) | 745 | `npm install pi-extension-manager` | Interactive extension and package manager for Pi |
| 205 | [@codingcoffee/pi-readonly-ssh](https://www.npmjs.com/package/@codingcoffee/pi-readonly-ssh) | 738 | `npm install @codingcoffee/pi-readonly-ssh` | a pi extension for safely running allow-listed, read-only commands on remote hosts over SSH |
| 206 | [@callumvass/forgeflow-dev](https://www.npmjs.com/package/@callumvass/forgeflow-dev) | 736 | `npm install @callumvass/forgeflow-dev` | Dev pipeline for Pi — TDD implementation, code review, architecture, and Datadog investigations. |
| 207 | [@vahor/pi-keymap](https://www.npmjs.com/package/@vahor/pi-keymap) | 733 | `npm install @vahor/pi-keymap` | Vim-like custom keymaps for binding keyboard shortcuts to shell commands in pi. |
| 208 | [@llblab/pi-wakeup](https://www.npmjs.com/package/@llblab/pi-wakeup) | 729 | `npm install @llblab/pi-wakeup` | Singleton wake-up scheduler extension for pi |
| 209 | [@sherif-fanous/pi-rtk](https://www.npmjs.com/package/@sherif-fanous/pi-rtk) | 727 | `npm install @sherif-fanous/pi-rtk` | Pi extension that routes bash commands through rtk (Rust Token Killer) for LLM token savings |
| 210 | [@firstpick/pi-extension-reverse-last](https://www.npmjs.com/package/@firstpick/pi-extension-reverse-last) | 726 | `npm install @firstpick/pi-extension-reverse-last` | Session-aware undo for Pi write/edit tool changes via /reverse-last. |
| 211 | [pi-crof](https://www.npmjs.com/package/pi-crof) | 720 | `npm install pi-crof` | CrofAI provider extension for pi |
| 212 | [pi-jj-auto](https://www.npmjs.com/package/pi-jj-auto) | 719 | `npm install pi-jj-auto` | Automatic jj revision management — guards file edits to keep Jujutsu revisions focused |
| 213 | [@aliou/pi-neuralwatt](https://www.npmjs.com/package/@aliou/pi-neuralwatt) | 719 | `npm install @aliou/pi-neuralwatt` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-neuralwatt.png) |
| 214 | [@ogulcancelik/pi-herdr](https://www.npmjs.com/package/@ogulcancelik/pi-herdr) | 716 | `npm install @ogulcancelik/pi-herdr` | Herdr-native workspace, tab, and pane orchestration for pi with output watches and agent status waits. |
| 215 | [pi-xai-oauth](https://www.npmjs.com/package/pi-xai-oauth) | 711 | `npm install pi-xai-oauth` | One-command installer for xAI (Grok) OAuth provider + Grok 4.3 in pi |
| 216 | [@ahkohd/pi-yagami-search](https://www.npmjs.com/package/@ahkohd/pi-yagami-search) | 698 | `npm install @ahkohd/pi-yagami-search` | Pi package providing Yagami web search tools |
| 217 | [pi-plan-mode](https://www.npmjs.com/package/pi-plan-mode) | 692 | `npm install pi-plan-mode` | Plan mode extension for pi - read-only exploration with plan file editing |
| 218 | [@deevus/pi-zmx](https://www.npmjs.com/package/@deevus/pi-zmx) | 692 | `npm install @deevus/pi-zmx` | Execute shell commands in persistent zmx sessions from pi |
| 219 | [pi-weixinbot](https://www.npmjs.com/package/pi-weixinbot) | 688 | `npm install pi-weixinbot` | 微信机器人 extension for pi，支持扫码登录和消息收发 |
| 220 | [pi-dunnet](https://www.npmjs.com/package/pi-dunnet) | 687 | `npm install pi-dunnet` | Play classic Emacs Dunnet text adventure inside pi — /dunnet |
| 221 | [pi-exit](https://www.npmjs.com/package/pi-exit) | 686 | `npm install pi-exit` | Minimal pi package that adds a /exit command. |
| 222 | [@dmille56/openvibes](https://www.npmjs.com/package/@dmille56/openvibes) | 685 | `npm install @dmille56/openvibes` | OpenVibes Pi extension for milli-powered terminal overlays. |
| 223 | [pi-codesight](https://www.npmjs.com/package/pi-codesight) | 679 | `npm install pi-codesight` | CodeSight repository-context tools for Pi. |
| 224 | [@uadgj/pi-superpowers-support](https://www.npmjs.com/package/@uadgj/pi-superpowers-support) | 679 | `npm install @uadgj/pi-superpowers-support` | Pi extension providing TodoWrite, Task, and Skill tools for official superpowers compatibility |
| 225 | [pi-model-switch](https://www.npmjs.com/package/pi-model-switch) | 678 | `npm install pi-model-switch` | Model switching extension for pi coding agent |
| 226 | [@pi-lab/webfetch](https://www.npmjs.com/package/@pi-lab/webfetch) | 677 | `npm install @pi-lab/webfetch` | WebFetch tool extension for pi coding agent |
| 227 | [@davidorex/pi-behavior-monitors](https://www.npmjs.com/package/@davidorex/pi-behavior-monitors) | 677 | `npm install @davidorex/pi-behavior-monitors` | Behavior monitors for pi that watch agent activity and steer corrections |
| 228 | [pi-kimi-coder](https://www.npmjs.com/package/pi-kimi-coder) | 676 | `npm install pi-kimi-coder` | Pi extension for Kimi K2 Coding plan — OAuth-based provider with kimi-for-coding model |
| 229 | [@pi-agents/loop](https://www.npmjs.com/package/@pi-agents/loop) | 675 | `npm install @pi-agents/loop` | Recurring prompt execution and cron scheduling for pi-agent — /loop, cron_create, cron_delete, cron_list |
| 230 | [oh-my-open-pi](https://www.npmjs.com/package/oh-my-open-pi) | 670 | `npm install oh-my-open-pi` | Pi Coding Agent extension package for model routing, tools, background tasks, and safety hooks. |
| 231 | [pi-obsidian-preview](https://www.npmjs.com/package/pi-obsidian-preview) | 668 | `npm install pi-obsidian-preview` | Open the last Pi assistant response in Obsidian — /preview command and configurable keyboard shortcut |
| 232 | [@richardgill/pi-preset](https://www.npmjs.com/package/@richardgill/pi-preset) | 665 | `npm install @richardgill/pi-preset` | Pi extension for named presets that can set model, thinking level, tools, and per-preset system prompt instructions. |
| 233 | [pi-ask-tool-extension](https://www.npmjs.com/package/pi-ask-tool-extension) | 657 | `npm install pi-ask-tool-extension` | Ask tool extension for pi with tabbed questioning and inline note editing |
| 234 | [pi-wiki](https://www.npmjs.com/package/pi-wiki) | 654 | `npm install pi-wiki` | LLM Wiki - compounding knowledge base for pi + Obsidian. Based on Karpathy's pattern + Ar9av's obsidian-wiki framework. |
| 235 | [@aveltens/pi-kit-linked-data](https://www.npmjs.com/package/@aveltens/pi-kit-linked-data) | 651 | `npm install @aveltens/pi-kit-linked-data` | Pi Coding Agent skills and extensions to work with RDF, SPARQL and other Linked Data technologies |
| 236 | [pi-bench](https://www.npmjs.com/package/pi-bench) | 650 | `npm install pi-bench` | LLM benchmark toolkit for pi coding agent. Probes every available model with real streaming API calls and ranks by late… |
| 237 | [@samfp/pi-essentials](https://www.npmjs.com/package/@samfp/pi-essentials) | 649 | `npm install @samfp/pi-essentials` | Essential extensions for pi — auto session naming, compact header, clipboard images, image pruning, markdown viewer, sc… |
| 238 | [ollama-graceful](https://www.npmjs.com/package/ollama-graceful) | 647 | `npm install ollama-graceful` | Pi extension that gracefully starts and stops the Ollama service on demand when switching between local and cloud models |
| 239 | [pi-kiro](https://www.npmjs.com/package/pi-kiro) | 642 | `npm install pi-kiro` | [Kiro](https://kiro.dev) provider for [pi](https://github.com/badlogic/pi-mono). |
| 240 | [@benvargas/pi-claude-code-use](https://www.npmjs.com/package/@benvargas/pi-claude-code-use) | 641 | `npm install @benvargas/pi-claude-code-use` | Patch Anthropic OAuth payloads and companion tools for Claude Code-style subscription use |
| 241 | [@siddr/pi-review](https://www.npmjs.com/package/@siddr/pi-review) | 638 | `npm install @siddr/pi-review` | Interactive review mode extension for pi |
| 242 | [@firstpick/pi-extension-bang-command-autocomplete](https://www.npmjs.com/package/@firstpick/pi-extension-bang-command-autocomplete) | 631 | `npm install @firstpick/pi-extension-bang-command-autocomplete` | Autocomplete for !<command> in Pi, with optional shell-history indexing. |
| 243 | [@that-yolanda/pi-statusline](https://www.npmjs.com/package/@that-yolanda/pi-statusline) | 626 | `npm install @that-yolanda/pi-statusline` | Capsule-style persistent status footer for PI coding agent. |
| 244 | [pi-multiloop](https://www.npmjs.com/package/pi-multiloop) | 625 | `npm install pi-multiloop` | Autoloop/autoresearch extension for Pi with multi-lane isolation |
| 245 | [@marckrenn/pi-sub-bar](https://www.npmjs.com/package/@marckrenn/pi-sub-bar) | 625 | `npm install @marckrenn/pi-sub-bar` | Usage widget extension for pi-coding-agent - shows current provider usage above the editor |
| 246 | [@aliou/pi-toolchain](https://www.npmjs.com/package/@aliou/pi-toolchain) | 622 | `npm install @aliou/pi-toolchain` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-toolchain.png) |
| 247 | [pi-venice-stats](https://www.npmjs.com/package/pi-venice-stats) | 620 | `npm install pi-venice-stats` | Live Venice Protocol stats dashboard for Pi Coding Agent |
| 248 | [@twogiants/pi-anthropic-vertex](https://www.npmjs.com/package/@twogiants/pi-anthropic-vertex) | 615 | `npm install @twogiants/pi-anthropic-vertex` | Anthropic Claude models on Google Cloud Vertex AI for pi |
| 249 | [pi-mono-clear](https://www.npmjs.com/package/pi-mono-clear) | 615 | `npm install pi-mono-clear` | Pi extension that starts a fresh session with /clear |
| 250 | [@m64/nats-pi-channel](https://www.npmjs.com/package/@m64/nats-pi-channel) | 608 | `npm install @m64/nats-pi-channel` | NATS Agent Protocol channel for PI Agent. Makes every PI session a discoverable, spec-compliant agent on NATS. |
| 251 | [pi-telemetry-minimal](https://www.npmjs.com/package/pi-telemetry-minimal) | 607 | `npm install pi-telemetry-minimal` | Minimal token usage telemetry for Pi |
| 252 | [@johnnywu/pi-filechanges](https://www.npmjs.com/package/@johnnywu/pi-filechanges) | 605 | `npm install @johnnywu/pi-filechanges` | Tracks files changed by pi via edit and write tools, with a toggleable file changes widget |
| 253 | [@synadia-ai/nats-pi-channel](https://www.npmjs.com/package/@synadia-ai/nats-pi-channel) | 605 | `npm install @synadia-ai/nats-pi-channel` | Synadia Agent Protocol for NATS channel for PI Agent. Makes every PI session a discoverable, spec-compliant agent on NA… |
| 254 | [@ifi/pi-background-tasks](https://www.npmjs.com/package/@ifi/pi-background-tasks) | 600 | `npm install @ifi/pi-background-tasks` | Reactive background shell tasks for pi with /bg, Ctrl+Shift+B, log viewing, and agent wakeups on output. |
| 255 | [@wind_mask/aw-watcher-agent-pi](https://www.npmjs.com/package/@wind_mask/aw-watcher-agent-pi) | 598 | `npm install @wind_mask/aw-watcher-agent-pi` | Pi extension for ActivityWatch session tracking — records code agent sessions, models, token usage, and costs |
| 256 | [pi-formatter](https://www.npmjs.com/package/pi-formatter) | 595 | `npm install pi-formatter` | Pi extension that auto-formats files. |
| 257 | [pi-napkin](https://www.npmjs.com/package/pi-napkin) | 594 | `npm install pi-napkin` | 🧻 Napkin integration for pi — vault context, knowledge tools, and automatic distillation |
| 258 | [@firstpick/pi-extension-tech-news](https://www.npmjs.com/package/@firstpick/pi-extension-tech-news) | 590 | `npm install @firstpick/pi-extension-tech-news` | Tech news tools and commands for Pi using Hacker News, Reddit, Socket.dev, and daily.dev sources. |
| 259 | [@mcowger/pi-better-messages-cache](https://www.npmjs.com/package/@mcowger/pi-better-messages-cache) | 590 | `npm install @mcowger/pi-better-messages-cache` | Pi extension: dual cache-breakpoint strategy for Anthropic models — marks both the last assistant tool_use block and th… |
| 260 | [@parallel-web/pi-extension](https://www.npmjs.com/package/@parallel-web/pi-extension) | 589 | `npm install @parallel-web/pi-extension` | Add web search and web fetch to your pi agent |
| 261 | [@krzyzanowskim/pi-profiles](https://www.npmjs.com/package/@krzyzanowskim/pi-profiles) | 589 | `npm install @krzyzanowskim/pi-profiles` | Run Pi with isolated auth profiles while sharing the standard session store. |
| 262 | [@juanibiapina/pi-plan](https://www.npmjs.com/package/@juanibiapina/pi-plan) | 587 | `npm install @juanibiapina/pi-plan` | Pi extension for plan mode - read-only exploration and analysis |
| 263 | [@latent-variable/pi-terminal-bench](https://www.npmjs.com/package/@latent-variable/pi-terminal-bench) | 587 | `npm install @latent-variable/pi-terminal-bench` | Self-contained benchmark suite for Pi. Runs QuixBugs and other coding tasks locally — no Docker, no Python frameworks,… |
| 264 | [@alexanderfortin/pi-token-usage](https://www.npmjs.com/package/@alexanderfortin/pi-token-usage) | 582 | `npm install @alexanderfortin/pi-token-usage` | Pi coding agent extension for analyzing token usage and cost across session files |
| 265 | [@dhruv2mars/pi-queue](https://www.npmjs.com/package/@dhruv2mars/pi-queue) | 572 | `npm install @dhruv2mars/pi-queue` | Advanced FIFO message queue and steering for pi — queue follow-ups while the agent works |
| 266 | [pi-mono-auto-fix](https://www.npmjs.com/package/pi-mono-auto-fix) | 572 | `npm install pi-mono-auto-fix` | Pi extension that runs language-appropriate fixers (eslint, black, prettier, ...) on files touched during a turn |
| 267 | [pi-must-have-extension](https://www.npmjs.com/package/pi-must-have-extension) | 572 | `npm install pi-must-have-extension` | RFC 2119 keyword normalizer extension for the Pi coding agent. |
| 268 | [pi-fzf](https://www.npmjs.com/package/pi-fzf) | 568 | `npm install pi-fzf` | A [Pi](https://github.com/badlogic/pi) extension for fuzzy finding. Define commands that list candidates from any shell… |
| 269 | [pi-tmux-window-name](https://www.npmjs.com/package/pi-tmux-window-name) | 567 | `npm install pi-tmux-window-name` | Automatically name tmux windows for pi coding sessions |
| 270 | [pi-poster](https://www.npmjs.com/package/pi-poster) | 559 | `npm install pi-poster` | 🎨 Poster integration for pi — render React posters to PNG/SVG/PDF/JPG/WebP from an agent session. |
| 271 | [@fgladisch/pi-persistent-history](https://www.npmjs.com/package/@fgladisch/pi-persistent-history) | 557 | `npm install @fgladisch/pi-persistent-history` | Per-project persistent prompt input history for Pi |
| 272 | [pi-updater](https://www.npmjs.com/package/pi-updater) | 556 | `npm install pi-updater` | Codex-style auto-updater for pi. Checks for new versions on startup and prompts to install. |
| 273 | [pi-models](https://www.npmjs.com/package/pi-models) | 555 | `npm install pi-models` | Quality-of-life Pi extension for browsing models by provider or family |
| 274 | [pi-phoenix](https://www.npmjs.com/package/pi-phoenix) | 555 | `npm install pi-phoenix` | Phoenix tracing extension for pi |
| 275 | [pi-mono-loop](https://www.npmjs.com/package/pi-mono-loop) | 553 | `npm install pi-mono-loop` | Pi extension that runs a prompt or slash command on a recurring interval |
| 276 | [pi-hodor](https://www.npmjs.com/package/pi-hodor) | 553 | `npm install pi-hodor` | A pi extension that automatically continues after transient stream and connection errors. |
| 277 | [pi-execution-time](https://www.npmjs.com/package/pi-execution-time) | 551 | `npm install pi-execution-time` | Pi extension that shows prompt execution time in the footer while the agent works. |
| 278 | [pi-neuralwatt](https://www.npmjs.com/package/pi-neuralwatt) | 551 | `npm install pi-neuralwatt` | Neuralwatt provider for pi — auto-discovers models, energy usage tracking, and account quota in your status bar |
| 279 | [pi-effort](https://www.npmjs.com/package/pi-effort) | 549 | `npm install pi-effort` | Pi extension for controlling thinking effort with model-adaptive min/max aliases |
| 280 | [pi-supersafety](https://www.npmjs.com/package/pi-supersafety) | 549 | `npm install pi-supersafety` | When the example safety extensions don't cover what you need, this should! Simple with approval flow and windows sandbo… |
| 281 | [@gaodes/pi-dev-kit](https://www.npmjs.com/package/@gaodes/pi-dev-kit) | 547 | `npm install @gaodes/pi-dev-kit` | Developer toolkit for Pi — modular skills for authoring extensions, skills, prompt templates, themes, packages, and con… |
| 282 | [pi-openai-switcher](https://www.npmjs.com/package/pi-openai-switcher) | 546 | `npm install pi-openai-switcher` | pi extension that switches ChatGPT Codex accounts when 5h or 1w usage limits are exhausted |
| 283 | [pi-codex-fast](https://www.npmjs.com/package/pi-codex-fast) | 545 | `npm install pi-codex-fast` | Fast mode toggle for OpenAI and Codex models in pi. |
| 284 | [spotme](https://www.npmjs.com/package/spotme) | 544 | `npm install spotme` | SpotMe — gym mode for agentic coding. Works with OpenCode and Pi. |
| 285 | [vim-motions-pi](https://www.npmjs.com/package/vim-motions-pi) | 544 | `npm install vim-motions-pi` | A focused Vim-style editing layer for pi, with motions, text objects, visual selections, and clipboard sync |
| 286 | [pi-dj](https://www.npmjs.com/package/pi-dj) | 542 | `npm install pi-dj` | AI music suite for pi — YouTube, global radio (30k+ stations), Suno, Lyria AI, SoundCloud/Bandcamp, mix, trim, BPM. Win… |
| 287 | [pi-pomodoro](https://www.npmjs.com/package/pi-pomodoro) | 538 | `npm install pi-pomodoro` | Pomodoro timer extension for pi coding agent |
| 288 | [pi-mlx-models](https://www.npmjs.com/package/pi-mlx-models) | 536 | `npm install pi-mlx-models` | Local MLX model launcher extension for Pi |
| 289 | [pi-double-paste](https://www.npmjs.com/package/pi-double-paste) | 536 | `npm install pi-double-paste` | Paste a long block once to collapse it, paste it again to expand it in the editor. |
| 290 | [@code-fixer-23/create-pi-package](https://www.npmjs.com/package/@code-fixer-23/create-pi-package) | 533 | `npm install @code-fixer-23/create-pi-package` | Scaffold PI packages with prompts, skills, and extensions. |
| 291 | [@narumitw/pi-nyaa](https://www.npmjs.com/package/@narumitw/pi-nyaa) | 530 | `npm install @narumitw/pi-nyaa` | Pi extension for querying public metadata from nyaa.si and sukebei.nyaa.si. |
| 292 | [@aliou/pi-ts-aperture](https://www.npmjs.com/package/@aliou/pi-ts-aperture) | 529 | `npm install @aliou/pi-ts-aperture` | Route Pi LLM providers through Tailscale Aperture |
| 293 | [@santiago-r/pi-ml-intern](https://www.npmjs.com/package/@santiago-r/pi-ml-intern) | 528 | `npm install @santiago-r/pi-ml-intern` | ML Intern extension for Pi — autonomous ML research & implementation with literature-backed recipes. Inspired by Huggin… |
| 294 | [pi-claude-oauth-adapter](https://www.npmjs.com/package/pi-claude-oauth-adapter) | 527 | `npm install pi-claude-oauth-adapter` | Anthropic OAuth / Claude Code compatibility adapter for Pi. |
| 295 | [pi-superpowers-plus](https://www.npmjs.com/package/pi-superpowers-plus) | 525 | `npm install pi-superpowers-plus` | Superpowers workflow skills adapted for pi |
| 296 | [pi-repo-baby](https://www.npmjs.com/package/pi-repo-baby) | 522 | `npm install pi-repo-baby` | Repository map generator for Pi — gives the agent structural awareness of any codebase via Tree-sitter |
| 297 | [@sherif-fanous/pi-presets-plus](https://www.npmjs.com/package/@sherif-fanous/pi-presets-plus) | 521 | `npm install @sherif-fanous/pi-presets-plus` | Pi extension: model + thinking + tools + system-prompt presets, with a UI on top. |
| 298 | [pi-clojure](https://www.npmjs.com/package/pi-clojure) | 518 | `npm install pi-clojure` | A set of Clojure development tools implemented in pure JavaScript for the [pi-coding-agent](https://github.com/badlogic… |
| 299 | [glm-buddy](https://www.npmjs.com/package/glm-buddy) | 517 | `npm install glm-buddy` | Pi extension: Rate-limits GLM model usage during z.ai peak hours (14:00-18:00 UTC+8) to prevent token burn |
| 300 | [@spences10/pi-coding-preferences](https://www.npmjs.com/package/@spences10/pi-coding-preferences) | 517 | `npm install @spences10/pi-coding-preferences` | Configurable Pi guardrails that keep agents aligned with local coding workflow preferences before bad commands run |
| 301 | [pi-llm-as-verifier](https://www.npmjs.com/package/pi-llm-as-verifier) | 513 | `npm install pi-llm-as-verifier` | Pi skill + extension for llm-as-verifier style pairwise, repeated, criteria-decomposed candidate selection. |
| 302 | [pi-wtf](https://www.npmjs.com/package/pi-wtf) | 512 | `npm install pi-wtf` | Recover, rewind, or undo the last user prompt in pi after you realize you messed up. |
| 303 | [@dreki-gg/pi-questionnaire](https://www.npmjs.com/package/@dreki-gg/pi-questionnaire) | 506 | `npm install @dreki-gg/pi-questionnaire` | Tool-first questionnaire flow for pi with shared tabbed TUI and custom rendering |
| 304 | [@zcouncil/pi](https://www.npmjs.com/package/@zcouncil/pi) | 505 | `npm install @zcouncil/pi` | Pi package exposing one /chat-style zcouncil tool backed by the zcouncil SDK and bridge-aware backend. |
| 305 | [pi-sub-agent](https://www.npmjs.com/package/pi-sub-agent) | 503 | `npm install pi-sub-agent` | A Pi package extension that provides sub-agent functionality. |
| 306 | [@alexleekt/pi-bump](https://www.npmjs.com/package/@alexleekt/pi-bump) | 501 | `npm install @alexleekt/pi-bump` | Invisible continuation for the Pi agent. Double-tap Enter on empty chat to resume the agentic loop without sending the… |
| 307 | [@ryan_nookpi/pi-extension-setup-sh](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-setup-sh) | 500 | `npm install @ryan_nookpi/pi-extension-setup-sh` | Auto-run setup.sh extension for pi. |
| 308 | [pi-show](https://www.npmjs.com/package/pi-show) | 498 | `npm install pi-show` | Display pi-coding-agent state: commands, skills, prompts, tools, themes, and model info |
| 309 | [moonpi](https://www.npmjs.com/package/moonpi) | 497 | `npm install moonpi` | Opinionated set of extensions for pi |
| 310 | [@ryan_nookpi/pi-extension-generative-ui](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-generative-ui) | 490 | `npm install @ryan_nookpi/pi-extension-generative-ui` | Generative UI widget extension for pi. |
| 311 | [@josephyoung/pi-exit](https://www.npmjs.com/package/@josephyoung/pi-exit) | 489 | `npm install @josephyoung/pi-exit` | Type 'exit' to quit or use the /exit command. |
| 312 | [@that-yolanda/pi-questionnaire](https://www.npmjs.com/package/@that-yolanda/pi-questionnaire) | 488 | `npm install @that-yolanda/pi-questionnaire` | Interactive single/multi-question UI tool for PI coding agent. |
| 313 | [pi-zellij-tools](https://www.npmjs.com/package/pi-zellij-tools) | 488 | `npm install pi-zellij-tools` | Pi extension tools for running shell commands and independent Pi sessions in terminal targets. |
| 314 | [tau-mirror](https://www.npmjs.com/package/tau-mirror) | 488 | `npm install tau-mirror` | Web UI that mirrors your Pi terminal session in the browser |
| 315 | [@vamsitalupula/pi-run](https://www.npmjs.com/package/@vamsitalupula/pi-run) | 488 | `npm install @vamsitalupula/pi-run` | Run Typescript within the Node.js context of the Pi coding agent |
| 316 | [pi-git-assistant](https://www.npmjs.com/package/pi-git-assistant) | 487 | `npm install pi-git-assistant` | AI-powered git commit assistant for the Pi coding agent. Automatically analyzes diffs, manages branches, writes convent… |
| 317 | [@nhalm/pi-specd](https://www.npmjs.com/package/@nhalm/pi-specd) | 486 | `npm install @nhalm/pi-specd` | Spec-driven development workflow for pi |
| 318 | [@ontomics/ontomics](https://www.npmjs.com/package/@ontomics/ontomics) | 485 | `npm install @ontomics/ontomics` | MCP server that extracts domain ontologies from Python codebases |
| 319 | [pi-plan-md](https://www.npmjs.com/package/pi-plan-md) | 483 | `npm install pi-plan-md` | Branch-based planning workflow extension for pi |
| 320 | [pi-manage-dirs](https://www.npmjs.com/package/pi-manage-dirs) | 481 | `npm install pi-manage-dirs` | Add external directories to Pi's workspace context with interactive path autocompletion, AGENTS.md loading, and skill r… |
| 321 | [pi-comment-checker](https://www.npmjs.com/package/pi-comment-checker) | 479 | `npm install pi-comment-checker` | Pi extension that enforces self-documenting code by detecting and blocking unnecessary comments |
| 322 | [@bytesbrains/pi-contrib-gate](https://www.npmjs.com/package/@bytesbrains/pi-contrib-gate) | 477 | `npm install @bytesbrains/pi-contrib-gate` | Contribution gateway for AI agents — enforce branch naming, conventional commits, pre-commit quality gates, and PR auto… |
| 323 | [pi-agents](https://www.npmjs.com/package/pi-agents) | 476 | `npm install pi-agents` | A generic framework for agent orchestration in pi. |
| 324 | [@heyhuynhgiabuu/pi-diff](https://www.npmjs.com/package/@heyhuynhgiabuu/pi-diff) | 473 | `npm install @heyhuynhgiabuu/pi-diff` | Shiki-powered terminal diff renderer for pi — syntax-highlighted, word-level diffs in split and unified views. |
| 325 | [effect-mode](https://www.npmjs.com/package/effect-mode) | 470 | `npm install effect-mode` | Dynamic context resolver effects for pi |
| 326 | [@ryan_nookpi/pi-extension-claude-mcp-bridge](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-claude-mcp-bridge) | 467 | `npm install @ryan_nookpi/pi-extension-claude-mcp-bridge` | Bridge Claude Code MCP server configs into pi — auto-discovers tools from stdio/sse/http MCP servers. |
| 327 | [@gtheys/pi-per-commit-spend](https://www.npmjs.com/package/@gtheys/pi-per-commit-spend) | 467 | `npm install @gtheys/pi-per-commit-spend` | Pi extension that tracks AI spend per git commit across sessions |
| 328 | [pi-anycopy](https://www.npmjs.com/package/pi-anycopy) | 465 | `npm install pi-anycopy` | Pi's /tree with a live syntax-highlighted preview, ability to copy any node(s) to the clipboard, and persistence of fol… |
| 329 | [@agnishc/edb-explore](https://www.npmjs.com/package/@agnishc/edb-explore) | 464 | `npm install @agnishc/edb-explore` | Pi extension: explore_dir tool — sub-agent directory search that keeps results out of main context |
| 330 | [@casualjim/pi-taskplane-planner](https://www.npmjs.com/package/@casualjim/pi-taskplane-planner) | 461 | `npm install @casualjim/pi-taskplane-planner` | Planner-native pi extension and CLI companion to Taskplane |
| 331 | [pi-hash-anchored-edit](https://www.npmjs.com/package/pi-hash-anchored-edit) | 457 | `npm install pi-hash-anchored-edit` | Hash-anchored read/edit replacement tools for Pi coding agent. |
| 332 | [@ryan_nookpi/pi-extension-codex-fast-mode](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-codex-fast-mode) | 457 | `npm install @ryan_nookpi/pi-extension-codex-fast-mode` | Codex fast mode extension for pi. |
| 333 | [pi-usage-bars](https://www.npmjs.com/package/pi-usage-bars) | 457 | `npm install pi-usage-bars` | Production-ready /usage bars extension for pi (Codex, Claude, Z.AI, Gemini CLI, Antigravity) |
| 334 | [@gotgenes/pi-autoformat](https://www.npmjs.com/package/@gotgenes/pi-autoformat) | 456 | `npm install @gotgenes/pi-autoformat` | Pi extension package for prompt-end auto-formatting |
| 335 | [pi-cocoindex](https://www.npmjs.com/package/pi-cocoindex) | 452 | `npm install pi-cocoindex` | Pi extension that exposes CocoIndex Code as a simple semantic search tool. |
| 336 | [pi-super-curl](https://www.npmjs.com/package/pi-super-curl) | 445 | `npm install pi-super-curl` | HTTP request extension for pi shitty coding agent with auto-config, JWT generation, and named endpoints |
| 337 | [@asermax/pi-save](https://www.npmjs.com/package/@asermax/pi-save) | 442 | `npm install @asermax/pi-save` | Stash and restore your Pi prompt via alt+s |
| 338 | [pi-brave-search](https://www.npmjs.com/package/pi-brave-search) | 442 | `npm install pi-brave-search` | Token-efficient Brave web search + AI grounding extension for Pi, with optional full-page Markdown content extraction |
| 339 | [@lnilluv/pi-opencode-go-rotation](https://www.npmjs.com/package/@lnilluv/pi-opencode-go-rotation) | 442 | `npm install @lnilluv/pi-opencode-go-rotation` | Rotate between multiple OpenCode Go API keys with best-effort reactive key rotation |
| 340 | [pi-go-bars](https://www.npmjs.com/package/pi-go-bars) | 439 | `npm install pi-go-bars` | Opencode Go plan usage bars for pi — rolling, weekly, and monthly windows in the footer |
| 341 | [pi-moonshot](https://www.npmjs.com/package/pi-moonshot) | 438 | `npm install pi-moonshot` | Pi extension adding Moonshot AI provider with Kimi K2.6, K2.5 and other models |
| 342 | [@the-forge-flow/gh-pi](https://www.npmjs.com/package/@the-forge-flow/gh-pi) | 438 | `npm install @the-forge-flow/gh-pi` | GH-PI — PI extension for native GitHub CLI (gh) integration |
| 343 | [pi-cmux](https://www.npmjs.com/package/pi-cmux) | 437 | `npm install pi-cmux` | Pi package with cmux-powered terminal integrations |
| 344 | [@alasano/pi-linear](https://www.npmjs.com/package/@alasano/pi-linear) | 437 | `npm install @alasano/pi-linear` | Linear integration for pi with 55+ tools, multi-workspace auth, and per-tool settings |
| 345 | [@dreki-gg/pi-modes](https://www.npmjs.com/package/@dreki-gg/pi-modes) | 434 | `npm install @dreki-gg/pi-modes` | Config-driven preset and mode switching for pi — hard-enforced tool whitelists, mode aliases, and session persistence |
| 346 | [@jarcelao/pi-exa-api](https://www.npmjs.com/package/@jarcelao/pi-exa-api) | 433 | `npm install @jarcelao/pi-exa-api` | Web search and content fetching for pi via the Exa API |
| 347 | [@ogulcancelik/pi-ghost](https://www.npmjs.com/package/@ogulcancelik/pi-ghost) | 430 | `npm install @ogulcancelik/pi-ghost` | Like /btw, but as a native ghost overlay for pi |
| 348 | [pi-hosts](https://www.npmjs.com/package/pi-hosts) | 422 | `npm install pi-hosts` | Run commands on remote hosts from Pi. |
| 349 | [@callumvass/forgeflow-pm](https://www.npmjs.com/package/@callumvass/forgeflow-pm) | 420 | `npm install @callumvass/forgeflow-pm` | PM pipeline for Pi — PRD refinement, issue creation, and continue. |
| 350 | [pi-model-suitable-tools](https://www.npmjs.com/package/pi-model-suitable-tools) | 418 | `npm install pi-model-suitable-tools` | Pi extension package that adapts tool names to the active model family. |
| 351 | [pi-collapse-tools](https://www.npmjs.com/package/pi-collapse-tools) | 413 | `npm install pi-collapse-tools` | Pi extension that hides tool output by default (expand with Cmd+O / Ctrl+O). |
| 352 | [pi-multi-pass](https://www.npmjs.com/package/pi-multi-pass) | 413 | `npm install pi-multi-pass` | Multi-subscription extension for pi -- use multiple OAuth accounts per provider (Anthropic, Codex, Copilot, Gemini, Ant… |
| 353 | [pi-fxxk](https://www.npmjs.com/package/pi-fxxk) | 410 | `npm install pi-fxxk` | Pi extension that turns /fxxk into a two-stage handoff command. |
| 354 | [@hieplp/pi-account-switcher](https://www.npmjs.com/package/@hieplp/pi-account-switcher) | 407 | `npm install @hieplp/pi-account-switcher` | Pi extension for quickly switching between multiple accounts/API keys per provider. |
| 355 | [@firstpick/pi-extension-upgrade-extensions](https://www.npmjs.com/package/@firstpick/pi-extension-upgrade-extensions) | 406 | `npm install @firstpick/pi-extension-upgrade-extensions` | Upgrade npm-installed Pi extensions with up-to-date checks. |
| 356 | [pi-chutes](https://www.npmjs.com/package/pi-chutes) | 406 | `npm install pi-chutes` | Pi coding agent extension to integrate Chutes.ai as a provider. |
| 357 | [@burneikis/pi-fzfp](https://www.npmjs.com/package/@burneikis/pi-fzfp) | 405 | `npm install @burneikis/pi-fzfp` | Fuzzy file picker for pi – fzf-powered @file autocomplete |
| 358 | [@artale/pi-arena](https://www.npmjs.com/package/@artale/pi-arena) | 403 | `npm install @artale/pi-arena` | Model benchmarking with domain-aware hallucination tracking, per-model leaderboards, and task templates. Track speed, q… |
| 359 | [@aotarola/pi-exit](https://www.npmjs.com/package/@aotarola/pi-exit) | 403 | `npm install @aotarola/pi-exit` | pi package that adds /exit as an alias for /quit |
| 360 | [@badliveware/pi-pr-upstream-status](https://www.npmjs.com/package/@badliveware/pi-pr-upstream-status) | 399 | `npm install @badliveware/pi-pr-upstream-status` | Show upstream pull request status for the current branch in Pi. |
| 361 | [@paulmupeters/pi-brainstorm](https://www.npmjs.com/package/@paulmupeters/pi-brainstorm) | 398 | `npm install @paulmupeters/pi-brainstorm` | A conversation-only brainstorm mode extension for pi |
| 362 | [@adamjen/pi-compact-fast](https://www.npmjs.com/package/@adamjen/pi-compact-fast) | 395 | `npm install @adamjen/pi-compact-fast` | /compact-fast command for Pi — compacts sessions with a fast local model instead of your main conversation model. |
| 363 | [pi-thinking-level](https://www.npmjs.com/package/pi-thinking-level) | 394 | `npm install pi-thinking-level` | A tiny pi package that adds a /thinking command to set and persist pi's default thinking level. |
| 364 | [@carze/pi-vertex-claude](https://www.npmjs.com/package/@carze/pi-vertex-claude) | 394 | `npm install @carze/pi-vertex-claude` | Google Vertex AI Claude provider for Pi coding agent |
| 365 | [@pi-lab/websearch](https://www.npmjs.com/package/@pi-lab/websearch) | 393 | `npm install @pi-lab/websearch` | Exa-powered web search tool extension for pi coding agent |
| 366 | [@tmustier/pi-nes](https://www.npmjs.com/package/@tmustier/pi-nes) | 391 | `npm install @tmustier/pi-nes` | NES emulator extension for pi |
| 367 | [pi-live-terminal](https://www.npmjs.com/package/pi-live-terminal) | 389 | `npm install pi-live-terminal` | Pi extension that runs commands in tmux and displays a live terminal widget. |
| 368 | [@artale/pi-pai](https://www.npmjs.com/package/@artale/pi-pai) | 389 | `npm install @artale/pi-pai` | Personal AI Infrastructure for Pi — synced with PAI v1.0.0 + Daniel Miesslers framework + 9 skill categories |
| 369 | [pi-executor](https://www.npmjs.com/package/pi-executor) | 389 | `npm install pi-executor` | Pi extension to run executor |
| 370 | [@catdaemon/pi-cmux](https://www.npmjs.com/package/@catdaemon/pi-cmux) | 388 | `npm install @catdaemon/pi-cmux` | cmux status and notification integration for Pi. |
| 371 | [@victor-software-house/pi-multicodex](https://www.npmjs.com/package/@victor-software-house/pi-multicodex) | 388 | `npm install @victor-software-house/pi-multicodex` | Codex account rotation extension for pi |
| 372 | [@pi-lab/xsearch](https://www.npmjs.com/package/@pi-lab/xsearch) | 385 | `npm install @pi-lab/xsearch` | xAI-powered X search tool extension for pi coding agent |
| 373 | [@agentapprove/pi](https://www.npmjs.com/package/@agentapprove/pi) | 384 | `npm install @agentapprove/pi` | Agent Approve extension for Pi - approve or deny AI agent tool calls from your iPhone and Apple Watch |
| 374 | [eslint-plugin-lookup-table](https://www.npmjs.com/package/eslint-plugin-lookup-table) | 383 | `npm install eslint-plugin-lookup-table` | Detect redundant conditional chains and suggest lookup tables |
| 375 | [pi-model-fusion](https://www.npmjs.com/package/pi-model-fusion) | 383 | `npm install pi-model-fusion` | Pi extension for model-fusion coding tasks with automatic judging and optional merge synthesis |
| 376 | [pi-workbench](https://www.npmjs.com/package/pi-workbench) | 381 | `npm install pi-workbench` | Terminal workbench for switching between live Pi sessions using tmux. |
| 377 | [better-custom](https://www.npmjs.com/package/better-custom) | 380 | `npm install better-custom` | Pi extension package for adding and deleting custom providers through an interactive wizard. |
| 378 | [@tmustier/pi-tab-status](https://www.npmjs.com/package/@tmustier/pi-tab-status) | 379 | `npm install @tmustier/pi-tab-status` | Terminal tab status indicators for Pi sessions. |
| 379 | [pi-package-template](https://www.npmjs.com/package/pi-package-template) | 379 | `npm install pi-package-template` | A minimal starter template for building pi packages |
| 380 | [@capyup/pi-warp](https://www.npmjs.com/package/@capyup/pi-warp) | 378 | `npm install @capyup/pi-warp` | Warp terminal integration for Pi — tab status, spinner, and rich session notifications via the warp://cli-agent protoco… |
| 381 | [@jrryfn/pi-retune](https://www.npmjs.com/package/@jrryfn/pi-retune) | 378 | `npm install @jrryfn/pi-retune` | One-command session renamer toggle for pi (retune/restore). |
| 382 | [pi-better-ctx](https://www.npmjs.com/package/pi-better-ctx) | 378 | `npm install pi-better-ctx` | Pi Coding Agent extension that routes bash, read, grep, find, and ls through better-ctx for 60-90% token savings |
| 383 | [@mrclrchtr/supi-web](https://www.npmjs.com/package/@mrclrchtr/supi-web) | 376 | `npm install @mrclrchtr/supi-web` | SuPi Web extension — fetch web pages as clean Markdown (web_fetch_md) and library docs via Context7 (web_docs_search, w… |
| 384 | [@patimweb/pi-email](https://www.npmjs.com/package/@patimweb/pi-email) | 376 | `npm install @patimweb/pi-email` | IMAP/SMTP email client extension for pi coding agent. Read, search, send, move, and delete emails from your inbox. |
| 385 | [agent-booster-pack-contract-first](https://www.npmjs.com/package/agent-booster-pack-contract-first) | 376 | `npm install agent-booster-pack-contract-first` | Interface Design Gate for Pi plus contract-first skill: pause and require human approval of contract/API shape before i… |
| 386 | [pi-edit-last-message](https://www.npmjs.com/package/pi-edit-last-message) | 376 | `npm install pi-edit-last-message` | Pi extension that adds /last to restore the most recent user message into the editor |
| 387 | [@howaboua/pi-auto-reasoning-tool](https://www.npmjs.com/package/@howaboua/pi-auto-reasoning-tool) | 375 | `npm install @howaboua/pi-auto-reasoning-tool` | Pi package that gives agents a change_reasoning tool for adjusting reasoning level when substantial work is likely. |
| 388 | [pi-ask-lite](https://www.npmjs.com/package/pi-ask-lite) | 375 | `npm install pi-ask-lite` | A tiny, pleasant Markdown ask tool for Pi. |
| 389 | [pi-caffeinated](https://www.npmjs.com/package/pi-caffeinated) | 375 | `npm install pi-caffeinated` | Pi extension that toggles a cross-platform keep-awake process with a centered coffee break modal. |
| 390 | [pi-file-watcher](https://www.npmjs.com/package/pi-file-watcher) | 373 | `npm install pi-file-watcher` | Watch folders for #pi! comments in source files and send them as prompts to the LLM — aider-style watch mode for pi |
| 391 | [@pi-lab/env](https://www.npmjs.com/package/@pi-lab/env) | 370 | `npm install @pi-lab/env` | Global environment loader extension for pi coding agent |
| 392 | [@kylebrodeur/pi-model-router](https://www.npmjs.com/package/@kylebrodeur/pi-model-router) | 370 | `npm install @kylebrodeur/pi-model-router` | Intelligent per-turn model router extension for the pi coding agent (Enhanced Fork) |
| 393 | [@mrclrchtr/supi-insights](https://www.npmjs.com/package/@mrclrchtr/supi-insights) | 369 | `npm install @mrclrchtr/supi-insights` | SuPi Insights extension — generate usage reports analyzing your PI sessions |
| 394 | [@artale/pi-hatch](https://www.npmjs.com/package/@artale/pi-hatch) | 368 | `npm install @artale/pi-hatch` | Digital pet companion for Pi. Hatch, feed, play with your pixel pet! |
| 395 | [pi-openrouter-realtime](https://www.npmjs.com/package/pi-openrouter-realtime) | 367 | `npm install pi-openrouter-realtime` | OpenRouter extension for pi — real-time model sync, provider/quantization enrichment, endpoint health, credit balance,… |
| 396 | [@carlosgtrz/pi-ansi-tools](https://www.npmjs.com/package/@carlosgtrz/pi-ansi-tools) | 366 | `npm install @carlosgtrz/pi-ansi-tools` | Pi extension with read_ansi, write_ansi, and edit_ansi tools for legacy-encoded source files. |
| 397 | [@artale/pi-procs](https://www.npmjs.com/package/@artale/pi-procs) | 364 | `npm install @artale/pi-procs` | Background process manager for Pi. Start dev servers, watch builds, tail logs — without blocking the agent. |
| 398 | [pi-startup-redraw-fix](https://www.npmjs.com/package/pi-startup-redraw-fix) | 364 | `npm install pi-startup-redraw-fix` | Pi extension that patches terminal full-clear ordering to avoid startup redraw glitches. |
| 399 | [pi-casefile](https://www.npmjs.com/package/pi-casefile) | 363 | `npm install pi-casefile` | Offensive security case tracker for pi — bug bounties, CTFs, security audits |
| 400 | [pi-openrouter-fallback](https://www.npmjs.com/package/pi-openrouter-fallback) | 363 | `npm install pi-openrouter-fallback` | Pi extension for OpenRouter model scoping and automatic switch to openrouter/free on HTTP 403 with auto-resubmit |
| 401 | [@catdaemon/pi-sidebar](https://www.npmjs.com/package/@catdaemon/pi-sidebar) | 362 | `npm install @catdaemon/pi-sidebar` | Shared status-card sidebar helpers for Pi extensions. |
| 402 | [@ogulcancelik/pi-spar](https://www.npmjs.com/package/@ogulcancelik/pi-spar) | 356 | `npm install @ogulcancelik/pi-spar` | Agent-to-agent sparring for pi. Back-and-forth conversations with peer AI models for debugging, design review, and chal… |
| 403 | [@ibvhim/pi-scaffold](https://www.npmjs.com/package/@ibvhim/pi-scaffold) | 355 | `npm install @ibvhim/pi-scaffold` | Pi extension to scaffold a project-local .pi workspace |
| 404 | [@haphazarddev/pi-copy-code-block](https://www.npmjs.com/package/@haphazarddev/pi-copy-code-block) | 354 | `npm install @haphazarddev/pi-copy-code-block` | A pi extension that copies code blocks from the latest assistant message to the clipboard. |
| 405 | [@calesennett/pi-codex-usage](https://www.npmjs.com/package/@calesennett/pi-codex-usage) | 352 | `npm install @calesennett/pi-codex-usage` | Codex usage footer extension for pi |
| 406 | [pi-alibaba-models](https://www.npmjs.com/package/pi-alibaba-models) | 351 | `npm install pi-alibaba-models` | The complete Alibaba provider for pi — Plan subscription + Cloud pay-per-token, International + China endpoints, Anthro… |
| 407 | [@fgladisch/pi-bash-approval](https://www.npmjs.com/package/@fgladisch/pi-bash-approval) | 349 | `npm install @fgladisch/pi-bash-approval` | Interactive allow-list guard for Pi bash tool calls |
| 408 | [expert-ai](https://www.npmjs.com/package/expert-ai) | 349 | `npm install expert-ai` | Domain-Specific Intelligence for Architecture, Engineering & Construction |
| 409 | [pi-generative-ui](https://www.npmjs.com/package/pi-generative-ui) | 348 | `npm install pi-generative-ui` | Generative UI for pi — render interactive HTML/SVG widgets in native macOS windows via Glimpse |
| 410 | [pi-hooks](https://www.npmjs.com/package/pi-hooks) | 347 | `npm install pi-hooks` | Collection of pi extensions (checkpoint, lsp, permission, ralph-loop, repeat) |
| 411 | [@helle253/pi-peon](https://www.npmjs.com/package/@helle253/pi-peon) | 347 | `npm install @helle253/pi-peon` | Pi extension that forwards pi lifecycle events to peon-ping / OpenPeon. |
| 412 | [@ghoseb/pi-damage-control](https://www.npmjs.com/package/@ghoseb/pi-damage-control) | 346 | `npm install @ghoseb/pi-damage-control` | AST-based Damage Control extension for Pi |
| 413 | [@ryan_nookpi/pi-extension-delayed-action](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-delayed-action) | 345 | `npm install @ryan_nookpi/pi-extension-delayed-action` | Pi extension for scheduling delayed follow-up actions. |
| 414 | [pi-sticky-usermessage](https://www.npmjs.com/package/pi-sticky-usermessage) | 342 | `npm install pi-sticky-usermessage` | Sticky header showing your last user message above the editor in Pi coding agent |
| 415 | [@mporenta/pi-trading-quant-chain](https://www.npmjs.com/package/@mporenta/pi-trading-quant-chain) | 338 | `npm install @mporenta/pi-trading-quant-chain` | Pi extension package for a sequential ML/algo-trading quant agent chain. |
| 416 | [@fgladisch/pi-welcome-message](https://www.npmjs.com/package/@fgladisch/pi-welcome-message) | 338 | `npm install @fgladisch/pi-welcome-message` | Workspace startup summary message extension for Pi |
| 417 | [@tmustier/pi-agent-guidance](https://www.npmjs.com/package/@tmustier/pi-agent-guidance) | 338 | `npm install @tmustier/pi-agent-guidance` | Loads provider-specific context files (CLAUDE.md, CODEX.md, GEMINI.md) based on current model. |
| 418 | [pi-meridian-extension](https://www.npmjs.com/package/pi-meridian-extension) | 336 | `npm install pi-meridian-extension` | Meridian proxy provider for pi — use your Claude Max subscription through the Meridian local proxy |
| 419 | [@richardgill/pi-file-collector](https://www.npmjs.com/package/@richardgill/pi-file-collector) | 335 | `npm install @richardgill/pi-file-collector` | Pi extension for collecting file/line evidence seen or cited during a session. |
| 420 | [@akuzmenko/rgk](https://www.npmjs.com/package/@akuzmenko/rgk) | 334 | `npm install @akuzmenko/rgk` | ripgrep with an LLM-powered --keep post-filter |
| 421 | [pi-desktop-ui](https://www.npmjs.com/package/pi-desktop-ui) | 333 | `npm install pi-desktop-ui` | A native desktop GUI for pi — full chat window with real-time streaming, markdown rendering, and workspace management |
| 422 | [pi-currency](https://www.npmjs.com/package/pi-currency) | 332 | `npm install pi-currency` | Real-time currency conversion for the pi TUI footer cost display |
| 423 | [@mrclrchtr/supi](https://www.npmjs.com/package/@mrclrchtr/supi) | 332 | `npm install @mrclrchtr/supi` | SuPi (Super Pi) — A curated extension stack for PI. Meta-package bundling the full SuPi collection. |
| 424 | [@ryan_nookpi/pi-extension-until](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-until) | 330 | `npm install @ryan_nookpi/pi-extension-until` | Until loop extension for pi. |
| 425 | [@companionai/bohr](https://www.npmjs.com/package/@companionai/bohr) | 328 | `npm install @companionai/bohr` | Research-first CLI agent built on Pi and alphaXiv |
| 426 | [pi-modes](https://www.npmjs.com/package/pi-modes) | 327 | `npm install pi-modes` | Switchable agent modes for pi-coding-agent (ask, edit, plan, reviewer) |
| 427 | [@ryan_nookpi/pi-extension-claude-hooks-bridge](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-claude-hooks-bridge) | 323 | `npm install @ryan_nookpi/pi-extension-claude-hooks-bridge` | Bridge Claude Code hooks (.claude/settings.json) into pi extension lifecycle events. |
| 428 | [pi-stock-ticker](https://www.npmjs.com/package/pi-stock-ticker) | 319 | `npm install pi-stock-ticker` | Real-time stock watchlist & scrolling ticker for pi coding agent. Supports US stocks and A-shares. |
| 429 | [pi-nasty-verbs](https://www.npmjs.com/package/pi-nasty-verbs) | 319 | `npm install pi-nasty-verbs` | Replaces Pi's default 'Working...' message with some better words. |
| 430 | [pi-package-search](https://www.npmjs.com/package/pi-package-search) | 318 | `npm install pi-package-search` | Discover and install Pi packages from npm directly inside Pi. |
| 431 | [@fiale-plus/repo-arch](https://www.npmjs.com/package/@fiale-plus/repo-arch) | 317 | `npm install @fiale-plus/repo-arch` | Project archaeology and repo memory tooling — CLI-first project-memory engine |
| 432 | [pi-smart-compact](https://www.npmjs.com/package/pi-smart-compact) | 315 | `npm install pi-smart-compact` | EESV smart compaction extension for Pi Coding Agent — deterministic extraction, exploration, synthesis, verification wi… |
| 433 | [pi-restrict-bash](https://www.npmjs.com/package/pi-restrict-bash) | 314 | `npm install pi-restrict-bash` | Opinionated bash tool restrictions for Pi |
| 434 | [@saadjs/pi-status](https://www.npmjs.com/package/@saadjs/pi-status) | 313 | `npm install @saadjs/pi-status` | Non-interactive /status command for pi (Codex) |
| 435 | [pi-nyaa](https://www.npmjs.com/package/pi-nyaa) | 311 | `npm install pi-nyaa` | Pi extension for querying public metadata from nyaa.si and sukebei.nyaa.si. |
| 436 | [pi-html-long-answer-extension](https://www.npmjs.com/package/pi-html-long-answer-extension) | 311 | `npm install pi-html-long-answer-extension` | Long-answer HTML export extension for Oh My Pi and Pi. |
| 437 | [@odradekk/vera-chimeras](https://www.npmjs.com/package/@odradekk/vera-chimeras) | 308 | `npm install @odradekk/vera-chimeras` | Chimera workflow engine for Vera agent |
| 438 | [@codersbrew/pi-tools](https://www.npmjs.com/package/@codersbrew/pi-tools) | 308 | `npm install @codersbrew/pi-tools` | A pi package bundling CodersBrew pi extensions and skills. |
| 439 | [@kmiyh/pi-codex-plan-limits](https://www.npmjs.com/package/@kmiyh/pi-codex-plan-limits) | 308 | `npm install @kmiyh/pi-codex-plan-limits` | Pi extension that shows live Codex plan usage: remaining 5h and weekly limits, reset times, and cached fallback snapsho… |
| 440 | [pi-buddy](https://www.npmjs.com/package/pi-buddy) | 306 | `npm install pi-buddy` | An animated ASCII companion that lives beside your Pi input box. Hatches buddies with unique species, stats, and person… |
| 441 | [pi-edit-hooks](https://www.npmjs.com/package/pi-edit-hooks) | 306 | `npm install pi-edit-hooks` | Code quality hooks for the pi coding agent — runs syntax checks on edit and format/lint/typecheck at turn end |
| 442 | [@ryan_nookpi/pi-extension-open-pr](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-open-pr) | 304 | `npm install @ryan_nookpi/pi-extension-open-pr` | Open the current branch pull request in your browser via GitHub CLI. |
| 443 | [pi-evaluate](https://www.npmjs.com/package/pi-evaluate) | 299 | `npm install pi-evaluate` | Adversarial post-execute evaluation skill for pi — verifies implementation against contract, GAN-inspired |
| 444 | [@narumitw/pi-jupyter](https://www.npmjs.com/package/@narumitw/pi-jupyter) | 298 | `npm install @narumitw/pi-jupyter` | Pi extension: right-side Jupyter notebook preview while editing .ipynb files. |
| 445 | [pi-usage](https://www.npmjs.com/package/pi-usage) | 296 | `npm install pi-usage` | /usage command for pi – shows current provider's daily & weekly limits |
| 446 | [@0xkobold/pi-task](https://www.npmjs.com/package/@0xkobold/pi-task) | 295 | `npm install @0xkobold/pi-task` | Kanban-style task management for pi agents — backlog, in-progress, review, blocked, done with SQLite persistence |
| 447 | [@patriceckhart/pi-chrome-operator](https://www.npmjs.com/package/@patriceckhart/pi-chrome-operator) | 295 | `npm install @patriceckhart/pi-chrome-operator` | Chat with pi agent to control your browser — summarize pages, fill forms, check mail, and save routines. |
| 448 | [@ryan_nookpi/pi-extension-claude-spinner](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-claude-spinner) | 294 | `npm install @ryan_nookpi/pi-extension-claude-spinner` | Standalone Pi extension package for Claude-style spinner frames. |
| 449 | [@aboutlo/pi-smart-edit](https://www.npmjs.com/package/@aboutlo/pi-smart-edit) | 294 | `npm install @aboutlo/pi-smart-edit` | A [pi](https://github.com/badlogic/pi) extension that overrides the built-in `edit` tool with whitespace-tolerant match… |
| 450 | [pi-cache-ttl-config](https://www.npmjs.com/package/pi-cache-ttl-config) | 291 | `npm install pi-cache-ttl-config` | Dynamically switch the Anthropic prompt-cache TTL between 5m and 1h mid-conversation in the pi coding agent |
| 451 | [pi-openrouter-native](https://www.npmjs.com/package/pi-openrouter-native) | 290 | `npm install pi-openrouter-native` | Native OpenRouter model sync for pi using built-in provider routing support |
| 452 | [@badliveware/pi-model-catalog](https://www.npmjs.com/package/@badliveware/pi-model-catalog) | 289 | `npm install @badliveware/pi-model-catalog` | Expose Pi model listings and selection guidance as an agent tool. |
| 453 | [pi-extension-raptor-mini](https://www.npmjs.com/package/pi-extension-raptor-mini) | 289 | `npm install pi-extension-raptor-mini` | pi extension that adds GitHub Copilot's Raptor Mini (oswe-vscode-prime) model to pi's github-copilot provider. |
| 454 | [pi-supacode](https://www.npmjs.com/package/pi-supacode) | 288 | `npm install pi-supacode` | Pi extension that reports agent lifecycle hooks to Supacode via Unix domain socket |
| 455 | [pi-nvim](https://www.npmjs.com/package/pi-nvim) | 286 | `npm install pi-nvim` | Bridge between pi coding agent and Neovim |
| 456 | [@e9n/pi-channels](https://www.npmjs.com/package/@e9n/pi-channels) | 285 | `npm install @e9n/pi-channels` | Two-way channel extension for pi — route messages between agents and Telegram, webhooks, and custom adapters |
| 457 | [pi-prayer-times](https://www.npmjs.com/package/pi-prayer-times) | 283 | `npm install pi-prayer-times` | Islamic prayer time reminders with adzan for pi coding agent |
| 458 | [@anistark/iconify](https://www.npmjs.com/package/@anistark/iconify) | 283 | `npm install @anistark/iconify` | Turn a logo into a full favicon set from your terminal — pi extension + CLI |
| 459 | [@haispeed/pi-obsidian](https://www.npmjs.com/package/@haispeed/pi-obsidian) | 282 | `npm install @haispeed/pi-obsidian` | Pi extension + skill for managing Obsidian vaults via Obsidian CLI |
| 460 | [@mrclrchtr/supi-bash-timeout](https://www.npmjs.com/package/@mrclrchtr/supi-bash-timeout) | 282 | `npm install @mrclrchtr/supi-bash-timeout` | SuPi bash-timeout extension — injects default timeout on bash tool calls |
| 461 | [@odradekk/vera-setup](https://www.npmjs.com/package/@odradekk/vera-setup) | 282 | `npm install @odradekk/vera-setup` | Setup CLI for deploying Vera agent resources to Pi coding agent |
| 462 | [pi-current-pr](https://www.npmjs.com/package/pi-current-pr) | 280 | `npm install pi-current-pr` | Pi extension that shows the current GitHub pull request in a widget |
| 463 | [pi-mempalace](https://www.npmjs.com/package/pi-mempalace) | 279 | `npm install pi-mempalace` | Persistent agent memory for pi — raw verbatim storage with semantic search. Never lose context again. |
| 464 | [pi-import-claude-history](https://www.npmjs.com/package/pi-import-claude-history) | 279 | `npm install pi-import-claude-history` | Pi coding agent extension: import Claude Code JSONL sessions into Pi session format |
| 465 | [pi-thinking-timer](https://www.npmjs.com/package/pi-thinking-timer) | 278 | `npm install pi-thinking-timer` | Pi extension that shows a live timer next to collapsed Thinking blocks. |
| 466 | [@0xkobold/pi-persona](https://www.npmjs.com/package/@0xkobold/pi-persona) | 277 | `npm install @0xkobold/pi-persona` | Persona extension for pi agents — SOUL.md, IDENTITY.md, USER.md loading, scaffolding, and system prompt injection. Insp… |
| 467 | [@malinamnam/pi-phone](https://www.npmjs.com/package/@malinamnam/pi-phone) | 276 | `npm install @malinamnam/pi-phone` | Phone-first remote UI extension for Pi with Tailscale-friendly access |
| 468 | [pi-code-rollback](https://www.npmjs.com/package/pi-code-rollback) | 276 | `npm install pi-code-rollback` | Claude Code-style restore for pi with automatic git-backed code snapshots and restore mode selection |
| 469 | [pi-cache-optimizer](https://www.npmjs.com/package/pi-cache-optimizer) | 275 | `npm install pi-cache-optimizer` | Pi extension that improves provider-side KV/prompt cache hit rates (DeepSeek, OpenAI, Claude, Gemini) by reordering the… |
| 470 | [pi-supervisor](https://www.npmjs.com/package/pi-supervisor) | 275 | `npm install pi-supervisor` | A pi extension that supervises the chat and steers it towards a defined outcome |
| 471 | [pi-aliases](https://www.npmjs.com/package/pi-aliases) | 275 | `npm install pi-aliases` | Pi extension that adds command aliases: /clear → /new, /exit → /quit |
| 472 | [pi-markitdown](https://www.npmjs.com/package/pi-markitdown) | 275 | `npm install pi-markitdown` | pi extension wrapping markitdown CLI |
| 473 | [pi-tps](https://www.npmjs.com/package/pi-tps) | 274 | `npm install pi-tps` | TPS stats widget with waterfall trace visualization for pi coding agent |
| 474 | [pi-glm-usage](https://www.npmjs.com/package/pi-glm-usage) | 274 | `npm install pi-glm-usage` | A pi extension that displays z.ai (GLM Coding Plan) subscription quota usage in the status bar. Shows 5-hour and weekly… |
| 475 | [pi-snake-timepass](https://www.npmjs.com/package/pi-snake-timepass) | 274 | `npm install pi-snake-timepass` | A centered Snake game that pops up automatically while Pi is working. Features 'Hard' and 'Easy' modes, adjustable spee… |
| 476 | [pi-sync-suite](https://www.npmjs.com/package/pi-sync-suite) | 274 | `npm install pi-sync-suite` | Cross-platform Pi extension for config sync, chat exports, safe cleanup, and native TUI controls. |
| 477 | [pi-multifix](https://www.npmjs.com/package/pi-multifix) | 274 | `npm install pi-multifix` | Pi extension for multi-repo bugfixing — ClickUp to MR in one command |
| 478 | [@artale/pi-git-graph](https://www.npmjs.com/package/@artale/pi-git-graph) | 273 | `npm install @artale/pi-git-graph` | Visual git history — ASCII commit graph, branch map, contributor stats |
| 479 | [@gnoviawan/pi-compact-tool-preview](https://www.npmjs.com/package/@gnoviawan/pi-compact-tool-preview) | 272 | `npm install @gnoviawan/pi-compact-tool-preview` | Compact single-line renderers for Pi built-in tools. |
| 480 | [pi-ui-minimal](https://www.npmjs.com/package/pi-ui-minimal) | 271 | `npm install pi-ui-minimal` | Minimal UI extension for Pi that hides footer info and removes dashed borders around the user input for a cleaner TUI e… |
| 481 | [safe-coder](https://www.npmjs.com/package/safe-coder) | 270 | `npm install safe-coder` | Safe Coder is a configuration package for the [`pi` coding agent](https://www.npmjs.com/package/@mariozechner/pi-coding… |
| 482 | [pi-pledit](https://www.npmjs.com/package/pi-pledit) | 270 | `npm install pi-pledit` | Plan mode and Accept-Edits mode for Pi, inspired by Claude Code. |
| 483 | [@unfixed3854/pi-usage](https://www.npmjs.com/package/@unfixed3854/pi-usage) | 268 | `npm install @unfixed3854/pi-usage` | A pi extension that displays active model provider subscription quota usage in the status bar. Supports z.ai (GLM) and… |
| 484 | [pi-treex](https://www.npmjs.com/package/pi-treex) | 268 | `npm install pi-treex` | Enhances pi's native /tree with sticky-left view and a detail pane |
| 485 | [@e9n/pi-webserver](https://www.npmjs.com/package/@e9n/pi-webserver) | 268 | `npm install @e9n/pi-webserver` | Shared HTTP server for pi — authenticated web host with extension mount points |
| 486 | [pi-fast-mode](https://www.npmjs.com/package/pi-fast-mode) | 268 | `npm install pi-fast-mode` | Persistent fast-mode toggle for pi that injects service_tier for configured provider/model pairs. |
| 487 | [@mcowger/pi-strip-volatile](https://www.npmjs.com/package/@mcowger/pi-strip-volatile) | 267 | `npm install @mcowger/pi-strip-volatile` | A pi extension that prevents volatile runtime data from being persisted to settings.json |
| 488 | [pi-fancy-loader](https://www.npmjs.com/package/pi-fancy-loader) | 266 | `npm install pi-fancy-loader` | A fancy loader extension for Pi |
| 489 | [@ctogg/pi-cost-counter](https://www.npmjs.com/package/@ctogg/pi-cost-counter) | 266 | `npm install @ctogg/pi-cost-counter` | Pi extension that tracks LLM API costs across all sessions with daily JSONL logging and a /cost command |
| 490 | [@ryan_nookpi/pi-extension-auto-name](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-auto-name) | 264 | `npm install @ryan_nookpi/pi-extension-auto-name` | Auto session name extension for pi. |
| 491 | [@noahsaso/pi-remote](https://www.npmjs.com/package/@noahsaso/pi-remote) | 264 | `npm install @noahsaso/pi-remote` | Remote terminal access for pi via WebSocket and browser, with Tailscale integration |
| 492 | [@akshaykarle/pi-tools](https://www.npmjs.com/package/@akshaykarle/pi-tools) | 263 | `npm install @akshaykarle/pi-tools` | Pi coding agent extensions — security hardening, agent teams and more |
| 493 | [agent-booster-pack-whiteboard](https://www.npmjs.com/package/agent-booster-pack-whiteboard) | 262 | `npm install agent-booster-pack-whiteboard` | ABP Pi whiteboarding guard plus whiteboarding skill: one user-facing question at a time. |
| 494 | [pi-remote-control](https://www.npmjs.com/package/pi-remote-control) | 261 | `npm install pi-remote-control` | Authenticated remote control for Pi sessions. |
| 495 | [pi-mono-usage](https://www.npmjs.com/package/pi-mono-usage) | 261 | `npm install pi-mono-usage` | Pi extension that aggregates local session usage, cost and sustainability impact |
| 496 | [pi-copilot-queue](https://www.npmjs.com/package/pi-copilot-queue) | 261 | `npm install pi-copilot-queue` | Pi extension that queues ask_user responses for Copilot-style workflows |
| 497 | [pi-llama-server](https://www.npmjs.com/package/pi-llama-server) | 260 | `npm install pi-llama-server` | Pi extension for llama-server router — live model listing, load/unload, per-project config |
| 498 | [cc-grammar](https://www.npmjs.com/package/cc-grammar) | 259 | `npm install cc-grammar` | Grammar checking for coding agents — Claude Code, Pi, Codex CLI, Gemini CLI |
| 499 | [pi-linear](https://www.npmjs.com/package/pi-linear) | 259 | `npm install pi-linear` | Pi extension for Linear issue tracking — search, create, update issues, manage teams, and track work from your terminal. |
| 500 | [pi-solo](https://www.npmjs.com/package/pi-solo) | 258 | `npm install pi-solo` | Pi package for the Solo task tracker — tool, commands, auto-init, and TUI widget. |
| 501 | [@robzolkos/pi-nocchio](https://www.npmjs.com/package/@robzolkos/pi-nocchio) | 257 | `npm install @robzolkos/pi-nocchio` | A tiny Pi extension that adds --dump-system-prompt. |
| 502 | [@ifi/pi-extension-adaptive-routing](https://www.npmjs.com/package/@ifi/pi-extension-adaptive-routing) | 256 | `npm install @ifi/pi-extension-adaptive-routing` | Optional adaptive and delegated routing extension for pi. |
| 503 | [pi-suggest](https://www.npmjs.com/package/pi-suggest) | 255 | `npm install pi-suggest` | LLM-generated next-step suggestions for Pi autocomplete, chips, and picker UI. |
| 504 | [@baggiiiie/pi-goal](https://www.npmjs.com/package/@baggiiiie/pi-goal) | 254 | `npm install @baggiiiie/pi-goal` | Codex-style persisted goals for pi coding agent sessions. |
| 505 | [pi-claude-tasks](https://www.npmjs.com/package/pi-claude-tasks) | 254 | `npm install pi-claude-tasks` | Browse and manage Claude Code tasks from Pi |
| 506 | [@ifi/pi-remote-tailscale](https://www.npmjs.com/package/@ifi/pi-remote-tailscale) | 253 | `npm install @ifi/pi-remote-tailscale` | Pi extension for secure remote session sharing with Tailscale URLs, QR codes, and TUI status widgets. |
| 507 | [pi-gh-cli](https://www.npmjs.com/package/pi-gh-cli) | 252 | `npm install pi-gh-cli` | Structured GitHub CLI tools for Pi agents |
| 508 | [pi-llm-council](https://www.npmjs.com/package/pi-llm-council) | 252 | `npm install pi-llm-council` | Multi-model LLM Council for adversarial debate, cross-validation, and synthesized decision-making via pi-teams |
| 509 | [pi-annotated-reply](https://www.npmjs.com/package/pi-annotated-reply) | 251 | `npm install pi-annotated-reply` | Annotated reply workflow for pi (model responses, file sources, and git diffs) |
| 510 | [pi-advisor](https://www.npmjs.com/package/pi-advisor) | 251 | `npm install pi-advisor` | Pi extension package that adds a Claude-style advisor tool for strategic guidance during complex agent tasks. |
| 511 | [pi-enhanced-tools](https://www.npmjs.com/package/pi-enhanced-tools) | 251 | `npm install pi-enhanced-tools` | Enhanced tools extension for PI — replacements and augmentations for built-in coding agent tools |
| 512 | [@mrclrchtr/supi-code-intelligence](https://www.npmjs.com/package/@mrclrchtr/supi-code-intelligence) | 250 | `npm install @mrclrchtr/supi-code-intelligence` | SuPi Code Intelligence extension — architecture briefs, caller/callee analysis, impact assessment, and pattern search f… |
| 513 | [pi-openai-service-tier](https://www.npmjs.com/package/pi-openai-service-tier) | 250 | `npm install pi-openai-service-tier` | Cost-correct OpenAI service tier / fast mode extension for pi |
| 514 | [pi-tutor](https://www.npmjs.com/package/pi-tutor) | 248 | `npm install pi-tutor` | A stateful tutor package for pi that adds hint-first, track-aware teaching workflows. |
| 515 | [pi-onecli-extension](https://www.npmjs.com/package/pi-onecli-extension) | 248 | `npm install pi-onecli-extension` | OneCLI gateway integration for pi |
| 516 | [@fgladisch/pi-user-select](https://www.npmjs.com/package/@fgladisch/pi-user-select) | 247 | `npm install @fgladisch/pi-user-select` | Multiple-choice user selection tool extension for Pi |
| 517 | [@ogulcancelik/pi-ssh-tools](https://www.npmjs.com/package/@ogulcancelik/pi-ssh-tools) | 245 | `npm install @ogulcancelik/pi-ssh-tools` | Explicit SSH tools for pi. Toggle /ssh on for a host, then use ssh_read, ssh_write, ssh_edit, and ssh_bash without repl… |
| 518 | [symphony-pi](https://www.npmjs.com/package/symphony-pi) | 245 | `npm install symphony-pi` | Generic Symphony autonomous issue orchestration extension for pi. |
| 519 | [pi-tmux-rename](https://www.npmjs.com/package/pi-tmux-rename) | 243 | `npm install pi-tmux-rename` | Pi extension that automatically renames tmux windows to reflect the current conversation topic |
| 520 | [@mrclrchtr/supi-extras](https://www.npmjs.com/package/@mrclrchtr/supi-extras) | 242 | `npm install @mrclrchtr/supi-extras` | SuPi extras — command aliases, skill shorthand, tab spinner, /supi-stash prompt stash with TUI overlay, and other small… |
| 521 | [pi-toasty](https://www.npmjs.com/package/pi-toasty) | 242 | `npm install pi-toasty` | Pi package that shows desktop toast notifications when pi is ready for input. |
| 522 | [pi-zk](https://www.npmjs.com/package/pi-zk) | 241 | `npm install pi-zk` | Pi extension exposing the zk note-taking CLI as agent-native tools. |
| 523 | [@baggiiiie/pi-rtk-rewrite](https://www.npmjs.com/package/@baggiiiie/pi-rtk-rewrite) | 241 | `npm install @baggiiiie/pi-rtk-rewrite` | A pi package that rewrites `bash` tool calls through [RTK](https://github.com/rtk-ai/rtk) before execution. |
| 524 | [pi-headroom](https://www.npmjs.com/package/pi-headroom) | 240 | `npm install pi-headroom` | Transparent LLM context compression for Pi using Headroom |
| 525 | [pi-cache-timer](https://www.npmjs.com/package/pi-cache-timer) | 240 | `npm install pi-cache-timer` | Footer cache timer extension for Pi |
| 526 | [vendure-pi](https://www.npmjs.com/package/vendure-pi) | 239 | `npm install vendure-pi` | Pi agent extension for Vendure e-commerce management. Connect to your Vendure instance and manage products, orders, cus… |
| 527 | [pi-ask-mode](https://www.npmjs.com/package/pi-ask-mode) | 239 | `npm install pi-ask-mode` | Read-only mode for safe code analysis in pi |
| 528 | [@the-forge-flow/ultra-compress-pi](https://www.npmjs.com/package/@the-forge-flow/ultra-compress-pi) | 238 | `npm install @the-forge-flow/ultra-compress-pi` | PI extension for token-efficient prose — level-based runtime output compression and markdown file compression |
| 529 | [@davidorex/pi-jit-agents](https://www.npmjs.com/package/@davidorex/pi-jit-agents) | 238 | `npm install @davidorex/pi-jit-agents` | Agent spec compilation and in-process dispatch runtime — the package that owns everything between 'I have a spec' and '… |
| 530 | [@badliveware/pi-tool-feedback](https://www.npmjs.com/package/@badliveware/pi-tool-feedback) | 238 | `npm install @badliveware/pi-tool-feedback` | Generic watched-tool feedback prompts and passive summaries for Pi. |
| 531 | [pi-model-profiles](https://www.npmjs.com/package/pi-model-profiles) | 238 | `npm install pi-model-profiles` | Pi extension for saving, importing, and applying agent model frontmatter profiles. |
| 532 | [flexoki-pi-theme](https://www.npmjs.com/package/flexoki-pi-theme) | 237 | `npm install flexoki-pi-theme` | Flexoki color scheme theme for pi |
| 533 | [@robhowley/pi-yolo-seatbelt](https://www.npmjs.com/package/@robhowley/pi-yolo-seatbelt) | 236 | `npm install @robhowley/pi-yolo-seatbelt` | Keep the YOLO workflow but avoid bash catastrophe with configurable guardrails for destructive commands. |
| 534 | [@ifi/pi-pretty](https://www.npmjs.com/package/@ifi/pi-pretty) | 236 | `npm install @ifi/pi-pretty` | Pretty terminal output for pi — syntax-highlighted file reads, colored bash output, tree-view directory listings, and m… |
| 535 | [pi-semantic](https://www.npmjs.com/package/pi-semantic) | 236 | `npm install pi-semantic` | Semantic density modes + workflow helpers for Pi (toggle via /sem). |
| 536 | [pi-md-export](https://www.npmjs.com/package/pi-md-export) | 235 | `npm install pi-md-export` | Export Pi sessions (last N turns, full branch, or full session) to readable Markdown on clipboard or local file, with o… |
| 537 | [@mrclrchtr/supi-cache](https://www.npmjs.com/package/@mrclrchtr/supi-cache) | 234 | `npm install @mrclrchtr/supi-cache` | SuPi Cache — prompt cache health monitoring and cross-session forensics |
| 538 | [@mrclrchtr/supi-debug](https://www.npmjs.com/package/@mrclrchtr/supi-debug) | 234 | `npm install @mrclrchtr/supi-debug` | SuPi Debug extension — shared debug event inspection for SuPi extensions |
| 539 | [@artale/pi-design](https://www.npmjs.com/package/@artale/pi-design) | 234 | `npm install @artale/pi-design` | AI design tool for Pi. Generate UIs, landing pages, slides from prompts. |
| 540 | [@ogulcancelik/pi-tmux](https://www.npmjs.com/package/@ogulcancelik/pi-tmux) | 233 | `npm install @ogulcancelik/pi-tmux` | Tmux pane management for pi. Run dev servers, watchers, and long-running processes in named panes without blocking the… |
| 541 | [pi-litellm](https://www.npmjs.com/package/pi-litellm) | 232 | `npm install pi-litellm` | LiteLLM integration for Pi — dynamic model sync, accurate cost tracking, and session grouping |
| 542 | [pi-timer](https://www.npmjs.com/package/pi-timer) | 232 | `npm install pi-timer` | Pi package that shows a per-run elapsed timer inline in the footer. |
| 543 | [@artale/pi-comply](https://www.npmjs.com/package/@artale/pi-comply) | 231 | `npm install @artale/pi-comply` | EU AI Act compliance toolkit for pi. Risk tier classification, audit trail, deadline tracking, checklist generation. Th… |
| 544 | [@ifi/pi-bash-live-view](https://www.npmjs.com/package/@ifi/pi-bash-live-view) | 231 | `npm install @ifi/pi-bash-live-view` | PTY-backed live bash rendering for pi with a real-time terminal widget and /bash-pty command. |
| 545 | [@mrclrchtr/supi-rtk](https://www.npmjs.com/package/@mrclrchtr/supi-rtk) | 230 | `npm install @mrclrchtr/supi-rtk` | SuPi RTK extension — transparent bash command rewriting via RTK for token savings |
| 546 | [pi-cymbal](https://www.npmjs.com/package/pi-cymbal) | 230 | `npm install pi-cymbal` | Pi extension exposing Cymbal as an agent-native code navigation layer. |
| 547 | [@yeliu84/pi-model-router](https://www.npmjs.com/package/@yeliu84/pi-model-router) | 230 | `npm install @yeliu84/pi-model-router` | Intelligent per-turn model router extension for the pi coding agent |
| 548 | [@mrclrchtr/supi-claude-md](https://www.npmjs.com/package/@mrclrchtr/supi-claude-md) | 228 | `npm install @mrclrchtr/supi-claude-md` | SuPi claude-md extension — automatic subdirectory context injection for pi |
| 549 | [pi-adaptive-finder](https://www.npmjs.com/package/pi-adaptive-finder) | 227 | `npm install pi-adaptive-finder` | Fast local workspace Finder for Pi using rg retrieval plus configurable OpenAI-compatible rerankers |
| 550 | [pi-bib](https://www.npmjs.com/package/pi-bib) | 227 | `npm install pi-bib` | A pi extension for bibliography and BibTeX review workflows. |
| 551 | [@mrclrchtr/supi-review](https://www.npmjs.com/package/@mrclrchtr/supi-review) | 226 | `npm install @mrclrchtr/supi-review` | SuPi Review extension — structured code review via /supi-review command |
| 552 | [@the-agency/pi-spec-kit](https://www.npmjs.com/package/@the-agency/pi-spec-kit) | 226 | `npm install @the-agency/pi-spec-kit` | A [Pi](https://github.com/mariozechner/pi-coding-agent) package that integrates GitHub's [Spec Kit](https://github.com/… |
| 553 | [@deevus/pi-wayfinder](https://www.npmjs.com/package/@deevus/pi-wayfinder) | 225 | `npm install @deevus/pi-wayfinder` | Structure-aware code navigation and anchor-stable editing tools for pi agents. |
| 554 | [pi-rtk](https://www.npmjs.com/package/pi-rtk) | 224 | `npm install pi-rtk` | RTK token reduction extension for pi-coding-agent - reduces LLM token consumption 60-90% by intelligently filtering too… |
| 555 | [@ogulcancelik/pi-sketch](https://www.npmjs.com/package/@ogulcancelik/pi-sketch) | 223 | `npm install @ogulcancelik/pi-sketch` | Quick sketch pad for pi - draw in browser, send to models |
| 556 | [@tmustier/pi-code-actions](https://www.npmjs.com/package/@tmustier/pi-code-actions) | 223 | `npm install @tmustier/pi-code-actions` | Pick code blocks or inline snippets from recent assistant messages to copy or insert. |
| 557 | [@whynothugo/pi-auto-theme](https://www.npmjs.com/package/@whynothugo/pi-auto-theme) | 223 | `npm install @whynothugo/pi-auto-theme` | Pi extension to automatically switch theme based on terminal dark/light mode. |
| 558 | [@tmustier/pi-arcade](https://www.npmjs.com/package/@tmustier/pi-arcade) | 222 | `npm install @tmustier/pi-arcade` | Arcade minigames for the Pi coding agent. |
| 559 | [@asermax/pi-cc-plugins](https://www.npmjs.com/package/@asermax/pi-cc-plugins) | 221 | `npm install @asermax/pi-cc-plugins` | Use Claude Code plugins (skills) directly in Pi |
| 560 | [@jamesjfoong/pi-ollama](https://www.npmjs.com/package/@jamesjfoong/pi-ollama) | 221 | `npm install @jamesjfoong/pi-ollama` | Auto-discover and register Ollama models in pi. No more manual models.json editing. |
| 561 | [pi-template-kit](https://www.npmjs.com/package/pi-template-kit) | 220 | `npm install pi-template-kit` | Shared LiquidJS prompt-template engine, filters, XML tag, and file loader for Pi packages. |
| 562 | [pi-youtube-transcript](https://www.npmjs.com/package/pi-youtube-transcript) | 220 | `npm install pi-youtube-transcript` | Pi extension to fetch YouTube video transcripts |
| 563 | [@mrclrchtr/supi-tree-sitter](https://www.npmjs.com/package/@mrclrchtr/supi-tree-sitter) | 219 | `npm install @mrclrchtr/supi-tree-sitter` | SuPi Tree-sitter extension — structural AST analysis for pi |
| 564 | [pi-command-history](https://www.npmjs.com/package/pi-command-history) | 219 | `npm install pi-command-history` | Folder-based persistent command history for pi. Recall previous commands with ctrl+up/down across sessions. |
| 565 | [pi-connect](https://www.npmjs.com/package/pi-connect) | 219 | `npm install pi-connect` | Unified OAuth and API key login for pi with an OpenCode-inspired UI. Connect 15+ providers with one /connect command. |
| 566 | [pi-modal](https://www.npmjs.com/package/pi-modal) | 218 | `npm install pi-modal` | Kakoune/Helix-like modal editor for pi prompt input - motion-first with selection markers |
| 567 | [@wierdbytes/pi-anthropic](https://www.npmjs.com/package/@wierdbytes/pi-anthropic) | 217 | `npm install @wierdbytes/pi-anthropic` | Claude Pro/Max OAuth extension for the pi coding agent |
| 568 | [@siddr/pi-cmux-status](https://www.npmjs.com/package/@siddr/pi-cmux-status) | 217 | `npm install @siddr/pi-cmux-status` | cmux sidebar status extension for pi |
| 569 | [@danchamorro/pi-agent-modes](https://www.npmjs.com/package/@danchamorro/pi-agent-modes) | 216 | `npm install @danchamorro/pi-agent-modes` | Agent modes for pi - switch between code, architect, debug, ask, and review modes with enforced tool and bash restricti… |
| 570 | [@gaodes/pi-graphify](https://www.npmjs.com/package/@gaodes/pi-graphify) | 214 | `npm install @gaodes/pi-graphify` | Turn any folder into a queryable knowledge graph — build, query, explore, and update graphs from inside Pi |
| 571 | [@the-agency/pi-tokenshrink](https://www.npmjs.com/package/@the-agency/pi-tokenshrink) | 214 | `npm install @the-agency/pi-tokenshrink` | Reduce token usage of a Pi agent's conversation context using TokenShrink. |
| 572 | [@jackice/pi-annotate](https://www.npmjs.com/package/@jackice/pi-annotate) | 213 | `npm install @jackice/pi-annotate` | Visual annotation extension for pi coding agent - annotate context messages and markdown documents |
| 573 | [pi-opencode-bridge](https://www.npmjs.com/package/pi-opencode-bridge) | 213 | `npm install pi-opencode-bridge` | OpenCode provider for Pi Agent. Auto-discovers models from OpenCode registry and uses Pi's native OpenAI-compatible han… |
| 574 | [@stenn/tps-monitor](https://www.npmjs.com/package/@stenn/tps-monitor) | 213 | `npm install @stenn/tps-monitor` | Minimal tokens-per-second display in pi footer |
| 575 | [@odradekk/vera-ui](https://www.npmjs.com/package/@odradekk/vera-ui) | 213 | `npm install @odradekk/vera-ui` | Session UI extensions for Vera agent (banner, status line, thinking cycle) |
| 576 | [@benvargas/pi-openai-fast](https://www.npmjs.com/package/@benvargas/pi-openai-fast) | 211 | `npm install @benvargas/pi-openai-fast` | OpenAI fast mode toggle for pi - Enables priority service tier on supported GPT-5.4 models |
| 577 | [@pi-lab/input-history](https://www.npmjs.com/package/@pi-lab/input-history) | 210 | `npm install @pi-lab/input-history` | Cross-session input history navigation for pi coding agent |
| 578 | [pi-universal-view](https://www.npmjs.com/package/pi-universal-view) | 210 | `npm install pi-universal-view` | Pi extension that converts any file to markdown via markit |
| 579 | [pi-terminal-browser-search](https://www.npmjs.com/package/pi-terminal-browser-search) | 209 | `npm install pi-terminal-browser-search` | Pi Harness /search extension with system-default and multi-browser support |
| 580 | [@the-agency/pi-hashline-edit](https://www.npmjs.com/package/@the-agency/pi-hashline-edit) | 209 | `npm install @the-agency/pi-hashline-edit` | Pi extension providing hashline-based file reading and editing with staleness-checked line addressing. |
| 581 | [@bakaschwarz/pi-update-adesso](https://www.npmjs.com/package/@bakaschwarz/pi-update-adesso) | 208 | `npm install @bakaschwarz/pi-update-adesso` | pi extension for syncing providers/models from the Adesso AI Hub and viewing usage spend |
| 582 | [@e9n/pi-gmail](https://www.npmjs.com/package/@e9n/pi-gmail) | 208 | `npm install @e9n/pi-gmail` | Gmail extension for pi — read, search, compose, and send emails via Gmail API |
| 583 | [@kaiserlich-dev/pi-queue-picker](https://www.npmjs.com/package/@kaiserlich-dev/pi-queue-picker) | 208 | `npm install @kaiserlich-dev/pi-queue-picker` | Pick between steering and follow-up when queuing messages in pi |
| 584 | [pi-copilot-usage](https://www.npmjs.com/package/pi-copilot-usage) | 208 | `npm install pi-copilot-usage` | GitHub Copilot premium request usage in the pi status bar |
| 585 | [pi-command-center](https://www.npmjs.com/package/pi-command-center) | 207 | `npm install pi-command-center` | Scrollable widget displaying available /commands from extensions/prompts/skills, compatible with simultaneous editor us… |
| 586 | [@ryan_nookpi/pi-extension-clipboard](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-clipboard) | 207 | `npm install @ryan_nookpi/pi-extension-clipboard` | Clipboard copy tool extension for pi using OSC52 escape sequences. |
| 587 | [@artale/pi-wordle](https://www.npmjs.com/package/@artale/pi-wordle) | 206 | `npm install @artale/pi-wordle` | Daily Wordle in the terminal. 6 guesses, color-coded feedback, stats tracking. |
| 588 | [@carter-mcalister/pi-profiles](https://www.npmjs.com/package/@carter-mcalister/pi-profiles) | 205 | `npm install @carter-mcalister/pi-profiles` | Session-scoped profile loader for Pi |
| 589 | [@hsingjui/pi-hooks](https://www.npmjs.com/package/@hsingjui/pi-hooks) | 205 | `npm install @hsingjui/pi-hooks` | Claude Code-compatible command hooks for the Pi coding agent |
| 590 | [@kushagharahi/pi-llama-extensions](https://www.npmjs.com/package/@kushagharahi/pi-llama-extensions) | 205 | `npm install @kushagharahi/pi-llama-extensions` | Pi extensions for llama.cpp router — auto model discovery and tokens/second display |
| 591 | [@siesing/pi-shortcuts](https://www.npmjs.com/package/@siesing/pi-shortcuts) | 204 | `npm install @siesing/pi-shortcuts` | Shortcut overlay extension for Pi coding-agent |
| 592 | [@artale/pi-eval](https://www.npmjs.com/package/@artale/pi-eval) | 203 | `npm install @artale/pi-eval` | Agent evaluation harness. Judge sessions on success, tool usage, efficiency, methodology. Inspired by opencc. |
| 593 | [@e9n/pi-cron](https://www.npmjs.com/package/@e9n/pi-cron) | 203 | `npm install @e9n/pi-cron` | Cron scheduler extension for pi — schedule recurring prompts as isolated subprocesses |
| 594 | [@ryan_nookpi/pi-extension-cross-agent](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-cross-agent) | 202 | `npm install @ryan_nookpi/pi-extension-cross-agent` | Load commands from Claude, Gemini, and Codex agent directories into pi. |
| 595 | [@artale/pi-http](https://www.npmjs.com/package/@artale/pi-http) | 202 | `npm install @artale/pi-http` | Quick HTTP client for API testing. /http GET url \| POST url -d body |
| 596 | [@a-canary/pi-director](https://www.npmjs.com/package/@a-canary/pi-director) | 201 | `npm install @a-canary/pi-director` | Autonomous project director for pi. Recommends actions (NEXT.md), clarifies intent (CHOICES.md), and executes TDD devel… |
| 597 | [@a-canary/pi-choose-wisely](https://www.npmjs.com/package/@a-canary/pi-choose-wisely) | 201 | `npm install @a-canary/pi-choose-wisely` | CHOICES.md management — clarify project vision, mission, UX, operations, architectural decisions with cascading impact… |
| 598 | [@carter-mcalister/pi-auto-name](https://www.npmjs.com/package/@carter-mcalister/pi-auto-name) | 199 | `npm install @carter-mcalister/pi-auto-name` | English-only automatic session naming for Pi |
| 599 | [@artale/pi-bench](https://www.npmjs.com/package/@artale/pi-bench) | 199 | `npm install @artale/pi-bench` | Microbenchmark runner. Compare code performance. |
| 600 | [@artale/pi-cost](https://www.npmjs.com/package/@artale/pi-cost) | 198 | `npm install @artale/pi-cost` | LLM cost tracker — track spend per session, model, and project |
| 601 | [@artale/pi-scaffold](https://www.npmjs.com/package/@artale/pi-scaffold) | 198 | `npm install @artale/pi-scaffold` | Generate new pi extension projects from a template. /scaffold my-extension 'Description here' |
| 602 | [@treentity/pi-imessage](https://www.npmjs.com/package/@treentity/pi-imessage) | 198 | `npm install @treentity/pi-imessage` | iMessage channel for Pi |
| 603 | [@artale/pi-pong](https://www.npmjs.com/package/@artale/pi-pong) | 197 | `npm install @artale/pi-pong` | Terminal Pong + Breakout for pi — vs AI with difficulty scaling, ball trails, and power-ups |
| 604 | [@artale/pi-changelog](https://www.npmjs.com/package/@artale/pi-changelog) | 196 | `npm install @artale/pi-changelog` | Auto-generate changelogs from git history. |
| 605 | [@artale/pi-watch](https://www.npmjs.com/package/@artale/pi-watch) | 195 | `npm install @artale/pi-watch` | Watch any video with Pi. Frame extraction, transcription, analysis. |
| 606 | [@artale/pi-deps](https://www.npmjs.com/package/@artale/pi-deps) | 195 | `npm install @artale/pi-deps` | Dependency health scanner. Outdated, heavy, licenses, dupes, tree. |
| 607 | [@baggiiiie/pi-codex-usage](https://www.npmjs.com/package/@baggiiiie/pi-codex-usage) | 194 | `npm install @baggiiiie/pi-codex-usage` | A pi package that adds the `/codex-usage` command and status widget. |
| 608 | [@ryan_nookpi/pi-extension-idle-screensaver](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-idle-screensaver) | 193 | `npm install @ryan_nookpi/pi-extension-idle-screensaver` | Standalone Pi extension package for the idle screensaver overlay. |
| 609 | [pi-ephemeral](https://www.npmjs.com/package/pi-ephemeral) | 193 | `npm install pi-ephemeral` | Toggle Pi session persistence mid-session (delete session file on exit) |
| 610 | [@odradekk/vera-theme](https://www.npmjs.com/package/@odradekk/vera-theme) | 193 | `npm install @odradekk/vera-theme` | Vera unified theme package: Obsidian-toned palette plus Kylin-inspired chrome (banner, status line, spinner, thinking c… |
| 611 | [@odradekk/vera-search-tools](https://www.npmjs.com/package/@odradekk/vera-search-tools) | 193 | `npm install @odradekk/vera-search-tools` | Cross-platform rg/fd search tools for Vera agent |
| 612 | [pi-tps-monitor](https://www.npmjs.com/package/pi-tps-monitor) | 193 | `npm install pi-tps-monitor` | Live tokens-per-second display next to the working indicator in pi-coding-agent |
| 613 | [pi-end-turn](https://www.npmjs.com/package/pi-end-turn) | 192 | `npm install pi-end-turn` | Pi extension for ending the agent's turn using tool |
| 614 | [pi-set-editor](https://www.npmjs.com/package/pi-set-editor) | 191 | `npm install pi-set-editor` | Choose and save the external editor used by Ctrl+G in pi |
| 615 | [@alasano/pi-forcefeed](https://www.npmjs.com/package/@alasano/pi-forcefeed) | 188 | `npm install @alasano/pi-forcefeed` | Force-feed complete files into pi conversation context without read-tool truncation |
| 616 | [@artale/pi-diff](https://www.npmjs.com/package/@artale/pi-diff) | 188 | `npm install @artale/pi-diff` | Beautiful side-by-side and inline diffs. File compare and git diff. |
| 617 | [@artale/pi-typing](https://www.npmjs.com/package/@artale/pi-typing) | 188 | `npm install @artale/pi-typing` | Typing speed test with WPM tracking. Code snippets and quotes. |
| 618 | [pi-shell-completions](https://www.npmjs.com/package/pi-shell-completions) | 188 | `npm install pi-shell-completions` | Pi extension that adds native shell completions (fish/zsh/bash) to ! and !! bash mode commands |
| 619 | [@tmustier/pi-clean-slides](https://www.npmjs.com/package/@tmustier/pi-clean-slides) | 187 | `npm install @tmustier/pi-clean-slides` | PowerPoint CLI skill for Pi — inspect, edit, generate table slides from YAML, render to PNG. |
| 620 | [@artale/pi-hex](https://www.npmjs.com/package/@artale/pi-hex) | 187 | `npm install @artale/pi-hex` | Hex viewer, binary inspector, magic byte detection, string extraction. |
| 621 | [pi-critique](https://www.npmjs.com/package/pi-critique) | 186 | `npm install pi-critique` | Structured AI critique for writing and code. Pairs well with annotated-reply and markdown-preview but works standalone. |
| 622 | [pi-plan-modus](https://www.npmjs.com/package/pi-plan-modus) | 186 | `npm install pi-plan-modus` | Read-only plan mode with RepoPrompt-aware write blocking; restricts tools, bash commands, and RepoPrompt operations (MC… |
| 623 | [pi-ghostty](https://www.npmjs.com/package/pi-ghostty) | 186 | `npm install pi-ghostty` | Ghostty terminal integration for Pi — dynamic title bar, progress indicators, and error states |
| 624 | [@siddr/pi-fetch-url](https://www.npmjs.com/package/@siddr/pi-fetch-url) | 186 | `npm install @siddr/pi-fetch-url` | Readable content fetch tool extension for pi |
| 625 | [@oleg_tarasov/pi-zmx-status](https://www.npmjs.com/package/@oleg_tarasov/pi-zmx-status) | 185 | `npm install @oleg_tarasov/pi-zmx-status` | Show the current zmx session name in Pi's status bar. |
| 626 | [@sztlink/pi-ensemble](https://www.npmjs.com/package/@sztlink/pi-ensemble) | 185 | `npm install @sztlink/pi-ensemble` | Shared workspace coordination for parallel coding agents |
| 627 | [@siddr/pi-openai-params](https://www.npmjs.com/package/@siddr/pi-openai-params) | 185 | `npm install @siddr/pi-openai-params` | Combined OpenAI fast mode and verbosity settings for pi |
| 628 | [pi-insights](https://www.npmjs.com/package/pi-insights) | 185 | `npm install pi-insights` | AI coding assistant session analytics and insights for Pi |
| 629 | [@artale/pi-port](https://www.npmjs.com/package/@artale/pi-port) | 184 | `npm install @artale/pi-port` | Find what's using a port, kill it. /port 3000 |
| 630 | [@e9n/pi-telemetry](https://www.npmjs.com/package/@e9n/pi-telemetry) | 183 | `npm install @e9n/pi-telemetry` | Local telemetry extension for pi — captures session events and writes to disk |
| 631 | [@zhangweiii/pi-status-line](https://www.npmjs.com/package/@zhangweiii/pi-status-line) | 183 | `npm install @zhangweiii/pi-status-line` | Natural-language configurable status line extension for pi. |
| 632 | [@artale/pi-intel](https://www.npmjs.com/package/@artale/pi-intel) | 182 | `npm install @artale/pi-intel` | Competitor intelligence. Track GitHub repos, npm packages, download trends, weekly digests. |
| 633 | [pi-perplexity](https://www.npmjs.com/package/pi-perplexity) | 180 | `npm install pi-perplexity` | Perplexity web search for pi — uses your Pro/Max subscription, no API credits needed |
| 634 | [pi-rollback](https://www.npmjs.com/package/pi-rollback) | 180 | `npm install pi-rollback` | Branch-aware rollback for pi — return to the last relevant point, summarize the detour, and continue from cleaner conte… |
| 635 | [pi-figma](https://www.npmjs.com/package/pi-figma) | 178 | `npm install pi-figma` | Pi package for Figma integration — inspect files, components, styles, nodes, export assets, and read comments directly… |
| 636 | [@odradekk/vera-ccc-tools](https://www.npmjs.com/package/@odradekk/vera-ccc-tools) | 178 | `npm install @odradekk/vera-ccc-tools` | CocoIndex Code semantic search tools for Vera agent |
| 637 | [@artale/pi-fi](https://www.npmjs.com/package/@artale/pi-fi) | 178 | `npm install @artale/pi-fi` | Call free LLMs using fi CLI — Gemini, Groq, Cerebras, OpenRouter free pool, Pollinations |
| 638 | [@aliou/pi-extension-dev](https://www.npmjs.com/package/@aliou/pi-extension-dev) | 177 | `npm install @aliou/pi-extension-dev` | Tools and commands for developing and updating Pi extensions. |
| 639 | [pi-worktrunk](https://www.npmjs.com/package/pi-worktrunk) | 175 | `npm install pi-worktrunk` | A Worktrunk extension for pi |
| 640 | [pi-betterdiff](https://www.npmjs.com/package/pi-betterdiff) | 175 | `npm install pi-betterdiff` | Tree-inspired pi extension for reviewing session and git diffs. |
| 641 | [@e9n/pi-jobs](https://www.npmjs.com/package/@e9n/pi-jobs) | 175 | `npm install @e9n/pi-jobs` | Agent run tracking extension for pi — job history, cost analysis, and session telemetry |
| 642 | [@e9n/pi-workon](https://www.npmjs.com/package/@e9n/pi-workon) | 175 | `npm install @e9n/pi-workon` | Project context switching and initialization for pi — switch projects, detect stacks, scaffold AGENTS.md |
| 643 | [@siddr/pi-status](https://www.npmjs.com/package/@siddr/pi-status) | 175 | `npm install @siddr/pi-status` | Status widget extension for pi |
| 644 | [pi-banner](https://www.npmjs.com/package/pi-banner) | 172 | `npm install pi-banner` | A rainbow pi banner extension for pi |
| 645 | [holdpty](https://www.npmjs.com/package/holdpty) | 172 | `npm install holdpty` | Minimal cross-platform detached PTY. Launch commands in a pseudo-terminal, attach/view/record later. |
| 646 | [@e9n/pi-kysely](https://www.npmjs.com/package/@e9n/pi-kysely) | 172 | `npm install @e9n/pi-kysely` | Shared Kysely database registry for pi — multi-dialect SQL with table-level RBAC |
| 647 | [pi-cortecs](https://www.npmjs.com/package/pi-cortecs) | 169 | `npm install pi-cortecs` | Cortecs provider extension for pi coding agent. Install with `pi install npm:pi-cortecs`. |
| 648 | [@e9n/pi-personal-crm](https://www.npmjs.com/package/@e9n/pi-personal-crm) | 169 | `npm install @e9n/pi-personal-crm` | Personal CRM extension for pi — contacts, companies, interactions, and reminders |
| 649 | [@tmustier/extending-pi](https://www.npmjs.com/package/@tmustier/extending-pi) | 169 | `npm install @tmustier/extending-pi` | Guide for extending Pi — skills, extensions, prompt templates, themes, and packaging. |
| 650 | [@pfeodrippe/repling-pi](https://www.npmjs.com/package/@pfeodrippe/repling-pi) | 169 | `npm install @pfeodrippe/repling-pi` | Pi extension that runs Repling as the agent runtime/tool loop. |
| 651 | [@e9n/pi-projects](https://www.npmjs.com/package/@e9n/pi-projects) | 166 | `npm install @e9n/pi-projects` | Project tracking extension for pi — auto-discovers git repos with health status dashboard |
| 652 | [pi-kilocode](https://www.npmjs.com/package/pi-kilocode) | 165 | `npm install pi-kilocode` | Kilo Code provider extension for pi |
| 653 | [@swairshah/pi-canvas](https://www.npmjs.com/package/@swairshah/pi-canvas) | 165 | `npm install @swairshah/pi-canvas` | Use any Tailscale-connected phone/tablet/browser as a drawing or photo input surface for Pi. |
| 654 | [@e9n/pi-logger](https://www.npmjs.com/package/@e9n/pi-logger) | 165 | `npm install @e9n/pi-logger` | Event bus logger for pi — writes structured JSONL logs from bus events |
| 655 | [@burneikis/pi-vim](https://www.npmjs.com/package/@burneikis/pi-vim) | 164 | `npm install @burneikis/pi-vim` | Vim motions extension for pi – normal, insert, visual, and replace modes with operators, motions, text objects, registe… |
| 656 | [pi-superpowers](https://www.npmjs.com/package/pi-superpowers) | 163 | `npm install pi-superpowers` | Superpowers workflow skills adapted for pi |
| 657 | [ypi](https://www.npmjs.com/package/ypi) | 163 | `npm install ypi` | ypi — a recursive coding agent. Pi that can call itself via rlm_query. |
| 658 | [@ferologics/pi-extensions](https://www.npmjs.com/package/@ferologics/pi-extensions) | 163 | `npm install @ferologics/pi-extensions` | Custom Pi extensions bundle (deep-review, pi-ghostty-hunk, pi-ghostty-lazygit, pi-notify, pi-system-theme, plan-mode, p… |
| 659 | [@lnittman/pi-tools](https://www.npmjs.com/package/@lnittman/pi-tools) | 163 | `npm install @lnittman/pi-tools` | Tool-pack contract for pi-mono SDK consumers — composable extension factories for code, HIL, orchestration, and annotat… |
| 660 | [pi-branch-out](https://www.npmjs.com/package/pi-branch-out) | 162 | `npm install pi-branch-out` | Fork the current Pi session into a split terminal pane or new tab with rotating layout policies, and with optional mode… |
| 661 | [pi-simple](https://www.npmjs.com/package/pi-simple) | 162 | `npm install pi-simple` | UI and tool rendering customizations to make Pi simpler. |
| 662 | [@e9n/pi-heartbeat](https://www.npmjs.com/package/@e9n/pi-heartbeat) | 162 | `npm install @e9n/pi-heartbeat` | Periodic health check extension for pi — runs a heartbeat prompt as an isolated subprocess |
| 663 | [pi-mpc](https://www.npmjs.com/package/pi-mpc) | 161 | `npm install pi-mpc` | MPC (Mental Preview & Correction) extension for pi coding agent — rehearse and verify before any code is written |
| 664 | [@artale/pi-verify](https://www.npmjs.com/package/@artale/pi-verify) | 160 | `npm install @artale/pi-verify` | Auto-verify Pi agent output. Two-agent system: builder runs, verifier checks, auto-corrects. |
| 665 | [pi-doom](https://www.npmjs.com/package/pi-doom) | 160 | `npm install pi-doom` | Play DOOM in your terminal with pi |
| 666 | [@artale/pi-bundle](https://www.npmjs.com/package/@artale/pi-bundle) | 160 | `npm install @artale/pi-bundle` | The essential Pi extension bundle by artale. One install, 10 best extensions. Context management, memory, safety, produ… |
| 667 | [@brain0pia/pi-ultrathink](https://www.npmjs.com/package/@brain0pia/pi-ultrathink) | 159 | `npm install @brain0pia/pi-ultrathink` | Pi extension for /ultrathink review loops with conditional git commits |
| 668 | [pi-glimpse-changes](https://www.npmjs.com/package/pi-glimpse-changes) | 159 | `npm install pi-glimpse-changes` | 暂无描述 |
| 669 | [pi-plankton](https://www.npmjs.com/package/pi-plankton) | 159 | `npm install pi-plankton` | A fork of alexfazio/plankton that provides a Pi-exclusive extension for root-aware code quality enforcement. |
| 670 | [pi-status](https://www.npmjs.com/package/pi-status) | 158 | `npm install pi-status` | Pi extension that shows a terminal tab title spinner while pi is working. |
| 671 | [pi-cavekit](https://www.npmjs.com/package/pi-cavekit) | 158 | `npm install pi-cavekit` | Cavekit spec-driven development skills and spec tracker widget for pi |
| 672 | [pi-roam](https://www.npmjs.com/package/pi-roam) | 157 | `npm install pi-roam` | Post-hoc handoff of a live Pi session into tmux for remote continuation, with optional Tailscale account switching |
| 673 | [pi-cycle](https://www.npmjs.com/package/pi-cycle) | 156 | `npm install pi-cycle` | Pi extension: /cycle + hotkey cycles model+thinking profiles (OpenAI-focused) with a menu-based config UI for Pi coding… |
| 674 | [pi-open-here](https://www.npmjs.com/package/pi-open-here) | 154 | `npm install pi-open-here` | Open current directory (or a path) in external editor from pi |
| 675 | [pi-treequest-parallel-processing](https://www.npmjs.com/package/pi-treequest-parallel-processing) | 154 | `npm install pi-treequest-parallel-processing` | TreeQuest Parallel Processing - multi-provider AI orchestration for pi with parallel queries, smart routing, and agent… |
| 676 | [@kmiyh/pi-full-text-paste](https://www.npmjs.com/package/@kmiyh/pi-full-text-paste) | 154 | `npm install @kmiyh/pi-full-text-paste` | Pi extension that keeps large pasted text expanded instead of collapsing it into [paste #...] markers. |
| 677 | [pi-commit-message](https://www.npmjs.com/package/pi-commit-message) | 153 | `npm install pi-commit-message` | Pi extension that generates Conventional Commit messages from staged diff and commits via /commit |
| 678 | [pi-flare](https://www.npmjs.com/package/pi-flare) | 153 | `npm install pi-flare` | Pi custom provider extension for Cloudflare Workers AI. |
| 679 | [@quant-pi/ext](https://www.npmjs.com/package/@quant-pi/ext) | 152 | `npm install @quant-pi/ext` | Small, hand-written, composable modules for pi-agent — inspired by mini.nvim, focused on simple, predictable building b… |
| 680 | [pi-screenshots](https://www.npmjs.com/package/pi-screenshots) | 152 | `npm install pi-screenshots` | Screenshot picker for pi — browse, select, and attach screenshots to your prompts |
| 681 | [pi-model-selector-x](https://www.npmjs.com/package/pi-model-selector-x) | 152 | `npm install pi-model-selector-x` | Enhances pi's /model selector with context window, cost, input modalities, protocol, and reasoning info |
| 682 | [pi-spec](https://www.npmjs.com/package/pi-spec) | 152 | `npm install pi-spec` | Spec-driven development extension and resource package for Pi. |
| 683 | [@gnoviawan/pi-tokens-per-second](https://www.npmjs.com/package/@gnoviawan/pi-tokens-per-second) | 151 | `npm install @gnoviawan/pi-tokens-per-second` | Shows rolling tokens-per-second in the Pi status bar. |
| 684 | [pi-window-title](https://www.npmjs.com/package/pi-window-title) | 151 | `npm install pi-window-title` | Automatically manage pi session titles and tmux window titles for coding sessions |
| 685 | [pi-cli-dynamic-tools](https://www.npmjs.com/package/pi-cli-dynamic-tools) | 150 | `npm install pi-cli-dynamic-tools` | Pi extension that manages a local toolbox of auto-generated CLI tools |
| 686 | [pi-fastboot](https://www.npmjs.com/package/pi-fastboot) | 150 | `npm install pi-fastboot` | Make Pi startup feel close to PI_OFFLINE=1 while still letting npm-based extensions update |
| 687 | [@kmiyh/pi-extensions-menu](https://www.npmjs.com/package/@kmiyh/pi-extensions-menu) | 150 | `npm install @kmiyh/pi-extensions-menu` | Pi extension that adds a dedicated /extensions menu for browsing, enabling, disabling, and updating installed extension… |
| 688 | [@latent-variable/pi-auto-continue](https://www.npmjs.com/package/@latent-variable/pi-auto-continue) | 149 | `npm install @latent-variable/pi-auto-continue` | Pi extension that auto-sends a 'continue' message whenever the agent stops, so local agents can run autonomous overnigh… |
| 689 | [pi-effect-harness](https://www.npmjs.com/package/pi-effect-harness) | 149 | `npm install pi-effect-harness` | a harness specifically for writing Effect v4 code |
| 690 | [@e9n/pi-brave-search](https://www.npmjs.com/package/@e9n/pi-brave-search) | 149 | `npm install @e9n/pi-brave-search` | Brave Search integration for pi — web search via Brave Search API |
| 691 | [@gnoviawan/pi-token-usage](https://www.npmjs.com/package/@gnoviawan/pi-token-usage) | 148 | `npm install @gnoviawan/pi-token-usage` | Displays session and project token usage across Pi sessions. |
| 692 | [@m4riok/pi-ide-bridge](https://www.npmjs.com/package/@m4riok/pi-ide-bridge) | 147 | `npm install @m4riok/pi-ide-bridge` | Pi extension for VS Code diff approval workflows and editor context bridging. |
| 693 | [pi-karpathy-guidelines](https://www.npmjs.com/package/pi-karpathy-guidelines) | 147 | `npm install pi-karpathy-guidelines` | Enforces Andrej Karpathy's coding guidelines to reduce common LLM mistakes: think before coding, simplicity first, surg… |
| 694 | [pi-xai-imagine](https://www.npmjs.com/package/pi-xai-imagine) | 147 | `npm install pi-xai-imagine` | Pi extension for xAI image, video, and vision workflows |
| 695 | [pi-agent-config](https://www.npmjs.com/package/pi-agent-config) | 147 | `npm install pi-agent-config` | Personal [pi](https://pi.dev) coding agent configuration: safety extensions, subagent definitions, skills, and prompt t… |
| 696 | [@tmustier/pi-weather](https://www.npmjs.com/package/@tmustier/pi-weather) | 146 | `npm install @tmustier/pi-weather` | Weather widget for Pi (/weather) |
| 697 | [code-submit](https://www.npmjs.com/package/code-submit) | 145 | `npm install code-submit` | Pi skill + TUI for generating HTML submission reports and opening GitHub draft PRs |
| 698 | [pi-edit-replace-all](https://www.npmjs.com/package/pi-edit-replace-all) | 145 | `npm install pi-edit-replace-all` | Pi package that overrides the edit tool with replaceAll support. |
| 699 | [pi-extension-toolkit](https://www.npmjs.com/package/pi-extension-toolkit) | 144 | `npm install pi-extension-toolkit` | A Pi Coding Agent extension to create, retrofit, and verify other extensions. |
| 700 | [@arcanemachine/pi-read](https://www.npmjs.com/package/@arcanemachine/pi-read) | 144 | `npm install @arcanemachine/pi-read` | Customizable read tool for Pi coding agent - configure default line/byte limits |
| 701 | [oh-my-pi-typescript](https://www.npmjs.com/package/oh-my-pi-typescript) | 143 | `npm install oh-my-pi-typescript` | TypeScript workflows for pi — test runner, error decoder, deps audit, monorepo nav, pre-commit guard, status line, /ts-… |
| 702 | [@bonsai-ai/pi-extension](https://www.npmjs.com/package/@bonsai-ai/pi-extension) | 142 | `npm install @bonsai-ai/pi-extension` | Bonsai provider extension for pi-coding-agent |
| 703 | [pi-sumopod-connector](https://www.npmjs.com/package/pi-sumopod-connector) | 142 | `npm install pi-sumopod-connector` | SumoPod AI models for Pi coding agent - One-command setup for all SumoPod models |
| 704 | [@originintelligence/pi-figma](https://www.npmjs.com/package/@originintelligence/pi-figma) | 141 | `npm install @originintelligence/pi-figma` | pi extension: token-efficient Figma file access via REST. Never returns raw Figma JSON — every tool transforms to a com… |
| 705 | [@robhowley/pi-spinner-verbs](https://www.npmjs.com/package/@robhowley/pi-spinner-verbs) | 141 | `npm install @robhowley/pi-spinner-verbs` | > "Thinking..." is the most boring thing a genius could say. |
| 706 | [pi-lazy-loader](https://www.npmjs.com/package/pi-lazy-loader) | 141 | `npm install pi-lazy-loader` | Lazy-load pi-coding-agent extensions on first slash-command use. Keeps slash commands discoverable while deferring heav… |
| 707 | [pi-block-unknown-command](https://www.npmjs.com/package/pi-block-unknown-command) | 140 | `npm install pi-block-unknown-command` | A pi extension that blocks unknown slash commands before they reach the LLM. |
| 708 | [pi-oneliner](https://www.npmjs.com/package/pi-oneliner) | 140 | `npm install pi-oneliner` | One-line sticky footer extension for pi coding agent. |
| 709 | [pi-modalmotion](https://www.npmjs.com/package/pi-modalmotion) | 139 | `npm install pi-modalmotion` | Vim-inspired modal editing and motion experiments for pi's input editor. |
| 710 | [pi-retune](https://www.npmjs.com/package/pi-retune) | 137 | `npm install pi-retune` | One-command session renamer toggle for pi (retune/restore). |
| 711 | [@artale/pi-budget](https://www.npmjs.com/package/@artale/pi-budget) | 136 | `npm install @artale/pi-budget` | LLM budget alerts: track spend, alert limits, prevent bill shock |
| 712 | [pi-diff](https://www.npmjs.com/package/pi-diff) | 136 | `npm install pi-diff` | Tree-inspired pi extension for reviewing session and git diffs. |
| 713 | [@baochunli/pi-collaborating-agents](https://www.npmjs.com/package/@baochunli/pi-collaborating-agents) | 135 | `npm install @baochunli/pi-collaborating-agents` | Collaborative multi-agent messaging and remote focus overlay extension for Pi |
| 714 | [pi-constell-tasks](https://www.npmjs.com/package/pi-constell-tasks) | 135 | `npm install pi-constell-tasks` | Companion pi extension for native workspace tasks, manual /tasks control, and cross-instance implementation pickup. |
| 715 | [@jd-erreape/pi-questionnaire](https://www.npmjs.com/package/@jd-erreape/pi-questionnaire) | 135 | `npm install @jd-erreape/pi-questionnaire` | Pi package providing an interactive questionnaire extension/tool. |
| 716 | [pi-julia](https://www.npmjs.com/package/pi-julia) | 134 | `npm install pi-julia` | Julia TTFX eliminator for pi — persistent DaemonMode server + exec tools |
| 717 | [@ogulcancelik/pi-flicker](https://www.npmjs.com/package/@ogulcancelik/pi-flicker) | 134 | `npm install @ogulcancelik/pi-flicker` | A pi extension that brings Claude Code flicker to pi |
| 718 | [@ibeex/pi-fetch](https://www.npmjs.com/package/@ibeex/pi-fetch) | 134 | `npm install @ibeex/pi-fetch` | pi extension that fetches web content into session context with Jina/raw fallback and cleaned previews |
| 719 | [pi-token-meter](https://www.npmjs.com/package/pi-token-meter) | 133 | `npm install pi-token-meter` | Display tokens per second in Pi. |
| 720 | [@marcfargas/pi-powershell](https://www.npmjs.com/package/@marcfargas/pi-powershell) | 133 | `npm install @marcfargas/pi-powershell` | PowerShell tool for pi agents - Windows system integration and background processes |
| 721 | [pi-token-usage](https://www.npmjs.com/package/pi-token-usage) | 133 | `npm install pi-token-usage` | Pi extension for lifetime token usage tracking and cost analytics across all sessions |
| 722 | [pi-chucknorris](https://www.npmjs.com/package/pi-chucknorris) | 133 | `npm install pi-chucknorris` | Latency-gated Chuck Norris jokes while pi is thinking (before the first token). |
| 723 | [pi-clawd](https://www.npmjs.com/package/pi-clawd) | 133 | `npm install pi-clawd` | Clawd on Desk integration for the pi coding agent |
| 724 | [@marcfargas/go-easy](https://www.npmjs.com/package/@marcfargas/go-easy) | 132 | `npm install @marcfargas/go-easy` | Google APIs made easy — Gmail, Drive, Calendar for AI agents and humans |
| 725 | [pi-fetch](https://www.npmjs.com/package/pi-fetch) | 132 | `npm install pi-fetch` | Efficient web fetch tool for Pi |
| 726 | [pi-sonar](https://www.npmjs.com/package/pi-sonar) | 132 | `npm install pi-sonar` | SonarQube integration for pi coding agent — tools, skills, and workflows for finding and fixing sonar issues |
| 727 | [pi-prefer-rg](https://www.npmjs.com/package/pi-prefer-rg) | 132 | `npm install pi-prefer-rg` | A pi extension that teaches the agent to prefer ripgrep over grep. |
| 728 | [pi-agents-local](https://www.npmjs.com/package/pi-agents-local) | 131 | `npm install pi-agents-local` | Pi extension that loads AGENTS.local.md as private project instructions. |
| 729 | [pi-codex-limit](https://www.npmjs.com/package/pi-codex-limit) | 130 | `npm install pi-codex-limit` | Codex subscription usage footer widget for Pi |
| 730 | [pi-yaml-hooks](https://www.npmjs.com/package/pi-yaml-hooks) | 130 | `npm install pi-yaml-hooks` | YAML hook automation for the PI coding agent: tool guards, session hooks, prompts, notifications, and bash actions. |
| 731 | [@studiosunnyfield/pimagotchi](https://www.npmjs.com/package/@studiosunnyfield/pimagotchi) | 130 | `npm install @studiosunnyfield/pimagotchi` | Pimagotchi — tamagotchi virtual pet for pi coding agent. 18 animated species, behavior-based evolution, rarity system,… |
| 732 | [@dustinbyrne/kb](https://www.npmjs.com/package/@dustinbyrne/kb) | 130 | `npm install @dustinbyrne/kb` | An automated Kanban board for [pi](https://github.com/badlogic/pi-mono). You (or an agent) add high level ideas to your… |
| 733 | [pi-turn-limit](https://www.npmjs.com/package/pi-turn-limit) | 130 | `npm install pi-turn-limit` | Pi coding agent extension to limit number of turns taken by a model |
| 734 | [pi-codex-5.5](https://www.npmjs.com/package/pi-codex-5.5) | 129 | `npm install pi-codex-5.5` | Extra LLM models for pi (OpenAI Codex GPT-5.5). |
| 735 | [pi-review-mode](https://www.npmjs.com/package/pi-review-mode) | 128 | `npm install pi-review-mode` | Pi extension that opens a native review surface for frozen Git diffs. |
| 736 | [pi-goalie](https://www.npmjs.com/package/pi-goalie) | 126 | `npm install pi-goalie` | Autonomous goal DAG for pi — Codex-like /goal with dependency chains, steering, and queue management |
| 737 | [pi-local-rag](https://www.npmjs.com/package/pi-local-rag) | 126 | `npm install pi-local-rag` | Hybrid RAG pipeline for the Pi coding agent. BM25 + local vector embeddings (Transformers.js) + auto-injection into LLM… |
| 738 | [pi-augment](https://www.npmjs.com/package/pi-augment) | 126 | `npm install pi-augment` | Augment-style prompt rewriter for Pi — one command, stronger prompts |
| 739 | [pi-grok-search](https://www.npmjs.com/package/pi-grok-search) | 125 | `npm install pi-grok-search` | Grok Search Extension for pi - 双引擎架构：Grok AI 搜索 + Tavily 抓取 + Firecrawl 托底 |
| 740 | [@qmxme/pi-stats](https://www.npmjs.com/package/@qmxme/pi-stats) | 125 | `npm install @qmxme/pi-stats` | Stats widget extension for pi - shows token throughput, usage, and duration |
| 741 | [pi-chroma](https://www.npmjs.com/package/pi-chroma) | 124 | `npm install pi-chroma` | A Pi extension that indexes your local TypeScript/TSX codebase into Chroma Cloud, enabling semantic and symbol-based co… |
| 742 | [pi-shell-autocomplete](https://www.npmjs.com/package/pi-shell-autocomplete) | 124 | `npm install pi-shell-autocomplete` | Shell command autocomplete extension for pi with zsh native completions and local AI ghost text. |
| 743 | [think-tags](https://www.npmjs.com/package/think-tags) | 124 | `npm install think-tags` | Pi extension that splits <think> tags into collapsible thinking blocks in assistant messages |
| 744 | [pk-pi-hermes-evolve](https://www.npmjs.com/package/pk-pi-hermes-evolve) | 123 | `npm install pk-pi-hermes-evolve` | Pi package inspired by Hermes Agent Self-Evolution for reflective improvement of skills, prompts, and instruction files. |
| 745 | [pi-terminal-signals](https://www.npmjs.com/package/pi-terminal-signals) | 123 | `npm install pi-terminal-signals` | Pi extension that communicates agent lifecycle to the terminal via OSC 9;4 (progress) and OSC 133 (semantic prompts). |
| 746 | [pi-questions-helper](https://www.npmjs.com/package/pi-questions-helper) | 122 | `npm install pi-questions-helper` | Answer questions from lengthy pi agent responses in an interactive widget. |
| 747 | [pi-jupyter](https://www.npmjs.com/package/pi-jupyter) | 121 | `npm install pi-jupyter` | Pi extension: right-side Jupyter notebook preview while editing .ipynb files. |
| 748 | [token-rate-pi](https://www.npmjs.com/package/token-rate-pi) | 121 | `npm install token-rate-pi` | Token rate status extension for pi-coding-agent - shows average output tokens per second |
| 749 | [pi-vim-motions](https://www.npmjs.com/package/pi-vim-motions) | 120 | `npm install pi-vim-motions` | Vim-style motion extension for Pi. |
| 750 | [pi-initiatives](https://www.npmjs.com/package/pi-initiatives) | 120 | `npm install pi-initiatives` | Initiative and project tracker for pi — manage initiatives, todos, and PRs with a split-panel TUI and LLM-callable tool… |
| 751 | [@benvargas/pi-cut-stack](https://www.npmjs.com/package/@benvargas/pi-cut-stack) | 119 | `npm install @benvargas/pi-cut-stack` | Cut-stack editor shortcuts for pi |
| 752 | [pi-prior](https://www.npmjs.com/package/pi-prior) | 118 | `npm install pi-prior` | Pi extension for project-local learned context priors. |
| 753 | [pi-minimax-tools](https://www.npmjs.com/package/pi-minimax-tools) | 118 | `npm install pi-minimax-tools` | MiniMax web_search and understand_image tools for pi |
| 754 | [@haphazarddev/pi-vim-quit](https://www.npmjs.com/package/@haphazarddev/pi-vim-quit) | 118 | `npm install @haphazarddev/pi-vim-quit` | A tiny pi extension that quits when you type :q, :qa, or :wq. |
| 755 | [pi-verbosity-control](https://www.npmjs.com/package/pi-verbosity-control) | 118 | `npm install pi-verbosity-control` | Per-model OpenAI verbosity control for Pi with optional inline footer display |
| 756 | [pi-icompact](https://www.npmjs.com/package/pi-icompact) | 118 | `npm install pi-icompact` | Interactive compaction extension for pi — sort session context into categories and choose how to summarize each one |
| 757 | [pi-agentation](https://www.npmjs.com/package/pi-agentation) | 117 | `npm install pi-agentation` | Pi extension that receives Agentation webhooks and turns them into queued user messages |
| 758 | [pi-evolve](https://www.npmjs.com/package/pi-evolve) | 117 | `npm install pi-evolve` | Genetic-programming style brainstorming command for pi. /evolve generates 5 alternatives, you pick one, repeat until yo… |
| 759 | [ears-spec-engine](https://www.npmjs.com/package/ears-spec-engine) | 116 | `npm install ears-spec-engine` | EARS Spec-Driven Development — Kiro-inspired SDD with EARS notation, design docs, and dependency-tracked tasks |
| 760 | [pi-dcp](https://www.npmjs.com/package/pi-dcp) | 116 | `npm install pi-dcp` | Dynamic Context Pruning extension for pi - intelligently removes obsolete messages to optimize token usage |
| 761 | [@howaboua/pi-auto-trees](https://www.npmjs.com/package/@howaboua/pi-auto-trees) | 116 | `npm install @howaboua/pi-auto-trees` | A Pi package that adds /marker and /end commands for incremental long-running coding sessions. |
| 762 | [agent-halter](https://www.npmjs.com/package/agent-halter) | 115 | `npm install agent-halter` | Session-budget extension for AI coding agents. |
| 763 | [pi-root-grant](https://www.npmjs.com/package/pi-root-grant) | 115 | `npm install pi-root-grant` | Pi extension that lets agents request temporary sudo-backed root access with explicit user approval. |
| 764 | [@the-forge-flow/lightpanda-pi](https://www.npmjs.com/package/@the-forge-flow/lightpanda-pi) | 115 | `npm install @the-forge-flow/lightpanda-pi` | PI extension for web search using Lightpanda headless browser |
| 765 | [pi-epic-pipeline](https://www.npmjs.com/package/pi-epic-pipeline) | 115 | `npm install pi-epic-pipeline` | BMAD Epic Pipeline orchestrator for pi — autonomous story execution through create, dev, review, and gate phases |
| 766 | [haagent](https://www.npmjs.com/package/haagent) | 114 | `npm install haagent` | ahaasler's agent |
| 767 | [pi-done](https://www.npmjs.com/package/pi-done) | 114 | `npm install pi-done` | Pi package that adds a /done command to reset to the default git branch, pull, and start a new session. |
| 768 | [pi-thinking-hotkeys](https://www.npmjs.com/package/pi-thinking-hotkeys) | 114 | `npm install pi-thinking-hotkeys` | Pi extension for Codex-style directional thinking effort hotkeys |
| 769 | [@banon-labs/pi-inline-format-extensions](https://www.npmjs.com/package/@banon-labs/pi-inline-format-extensions) | 114 | `npm install @banon-labs/pi-inline-format-extensions` | Host/plugin Pi package for inline heredoc formatting and semantic inspection. |
| 770 | [@artale/pi-marketing](https://www.npmjs.com/package/@artale/pi-marketing) | 114 | `npm install @artale/pi-marketing` | SEO tools, social posting, analytics |
| 771 | [pi-agent-shell](https://www.npmjs.com/package/pi-agent-shell) | 113 | `npm install pi-agent-shell` | High-performance interactive shell extension for pi — OS-level read-block detection gives agents a single turn() primit… |
| 772 | [@artale/pi-anthropic](https://www.npmjs.com/package/@artale/pi-anthropic) | 113 | `npm install @artale/pi-anthropic` | Anthropic API utilities |
| 773 | [@alexanderfortin/pi-loaded-tools](https://www.npmjs.com/package/@alexanderfortin/pi-loaded-tools) | 112 | `npm install @alexanderfortin/pi-loaded-tools` | Pi coding agent extension for listing loaded tools with source provenance |
| 774 | [pi-remote-agent](https://www.npmjs.com/package/pi-remote-agent) | 112 | `npm install pi-remote-agent` | Secure remote agent bridge for pi — delegate tasks to another pi instance over Tailscale. Includes /ask-agent command a… |
| 775 | [@grwnd/pi-governance](https://www.npmjs.com/package/@grwnd/pi-governance) | 112 | `npm install @grwnd/pi-governance` | Governance, RBAC, audit, and HITL for Pi-based coding agents |
| 776 | [@byteowlz/pi-auto-rename](https://www.npmjs.com/package/@byteowlz/pi-auto-rename) | 112 | `npm install @byteowlz/pi-auto-rename` | Auto-Rename Extension for pi |
| 777 | [pi-see](https://www.npmjs.com/package/pi-see) | 110 | `npm install pi-see` | Vision proxy extension for pi — lets any model describe images, screenshots, diagrams and more |
| 778 | [tokenfactory-pi](https://www.npmjs.com/package/tokenfactory-pi) | 110 | `npm install tokenfactory-pi` | Nebius Token Factory provider extension for pi coding agent. Requires `npm install -g @mariozechner/pi-coding-agent`. I… |
| 779 | [@artale/pi-quant](https://www.npmjs.com/package/@artale/pi-quant) | 110 | `npm install @artale/pi-quant` | Trading data, portfolio analysis, backtesting |
| 780 | [pi-multirepo](https://www.npmjs.com/package/pi-multirepo) | 110 | `npm install pi-multirepo` | Pi extension for multi-repo tasks — worktrees, MRs, and tracker integration in one command |
| 781 | [pi-worktree](https://www.npmjs.com/package/pi-worktree) | 109 | `npm install pi-worktree` | Git worktree management for Pi — create isolated workspaces with one command, optionally launch in cmux/tmux. |
| 782 | [@nonplanarslicer/pi-tps](https://www.npmjs.com/package/@nonplanarslicer/pi-tps) | 108 | `npm install @nonplanarslicer/pi-tps` | Show live TPS in the pi-coding-agent status bar without overwriting it |
| 783 | [@grayolson/pi-treebase](https://www.npmjs.com/package/@grayolson/pi-treebase) | 107 | `npm install @grayolson/pi-treebase` | Interactive-rebase style tree navigation for pi sessions. |
| 784 | [omegon-pi](https://www.npmjs.com/package/omegon-pi) | 106 | `npm install omegon-pi` | Omegon — an opinionated distribution of pi (by Mario Zechner) with extensions for lifecycle management, memory, orchest… |
| 785 | [pi-tilth](https://www.npmjs.com/package/pi-tilth) | 106 | `npm install pi-tilth` | AST-aware code reading via tilth — replaces read/grep/find/ls tools |
| 786 | [@yofriadi/pi-ast](https://www.npmjs.com/package/@yofriadi/pi-ast) | 105 | `npm install @yofriadi/pi-ast` | ```bash pi install git:github.com/yofriadi/pi-extensions@ast-v<version> ``` |
| 787 | [pi-glossary](https://www.npmjs.com/package/pi-glossary) | 105 | `npm install pi-glossary` | Pi extension that lazy-loads glossary definitions into the system prompt when prompts mention matching terms |
| 788 | [@devkade/pi-opentelemetry](https://www.npmjs.com/package/@devkade/pi-opentelemetry) | 104 | `npm install @devkade/pi-opentelemetry` | OpenTelemetry trace + metrics + diagnostics extension for Pi Coding Agent |
| 789 | [pi-peon-ping](https://www.npmjs.com/package/pi-peon-ping) | 103 | `npm install pi-peon-ping` | Pi extension for peon-ping sound notifications |
| 790 | [pi-macos-cua](https://www.npmjs.com/package/pi-macos-cua) | 102 | `npm install pi-macos-cua` | Pi extension that lets Pi drive local macOS apps through cua-driver. |
| 791 | [pi-tmux-branch](https://www.npmjs.com/package/pi-tmux-branch) | 102 | `npm install pi-tmux-branch` | Pi extension for branching the current session into a new tmux pane. |
| 792 | [pi-dashscope](https://www.npmjs.com/package/pi-dashscope) | 102 | `npm install pi-dashscope` | Alibaba DashScope (ModelStudio) provider for oh my pi — Qwen3, GLM-5, MiniMax M2.5, Kimi K2.5 via OpenAI-compatible cod… |
| 793 | [@artale/pi-stocks](https://www.npmjs.com/package/@artale/pi-stocks) | 102 | `npm install @artale/pi-stocks` | Stock market utilities |
| 794 | [@marcfargas/pi-heartbeat](https://www.npmjs.com/package/@marcfargas/pi-heartbeat) | 102 | `npm install @marcfargas/pi-heartbeat` | Non-blocking timers and heartbeats for pi agents — stop using sleep |
| 795 | [pi-elixir](https://www.npmjs.com/package/pi-elixir) | 101 | `npm install pi-elixir` | BEAM runtime tools for pi — connects to the running Elixir app for live introspection |
| 796 | [pi-turtle-rlm](https://www.npmjs.com/package/pi-turtle-rlm) | 101 | `npm install pi-turtle-rlm` | pi-turtle-rlm — RLM for Pi: persistent runtime, llmQuery recursion (it's models all the way down) |
| 797 | [@artale/pi-fixes](https://www.npmjs.com/package/@artale/pi-fixes) | 101 | `npm install @artale/pi-fixes` | Auto-fix common errors: lint, format, type errors |
| 798 | [@rwese/pi-webfetch](https://www.npmjs.com/package/@rwese/pi-webfetch) | 101 | `npm install @rwese/pi-webfetch` | Webfetch extension for pi coding agent |
| 799 | [@artale/pi-openai](https://www.npmjs.com/package/@artale/pi-openai) | 101 | `npm install @artale/pi-openai` | OpenAI API utilities |
| 800 | [pi-github-identity](https://www.npmjs.com/package/pi-github-identity) | 100 | `npm install pi-github-identity` | Run selected GitHub CLI actions from Pi through a separate bot identity. |
| 801 | [pi-alert](https://www.npmjs.com/package/pi-alert) | 100 | `npm install pi-alert` | Pi extension that sends a system notification when the agent ends its turn |
| 802 | [pi-rustdex](https://www.npmjs.com/package/pi-rustdex) | 99 | `npm install pi-rustdex` | Pi extension for RustDex - universal code indexer and semantic search |
| 803 | [@isaacraja/pi-vertex-claude](https://www.npmjs.com/package/@isaacraja/pi-vertex-claude) | 99 | `npm install @isaacraja/pi-vertex-claude` | Google Vertex AI Claude provider for Pi coding agent |
| 804 | [@artale/pi-triage](https://www.npmjs.com/package/@artale/pi-triage) | 99 | `npm install @artale/pi-triage` | Issue triage: auto-categorize, prioritize, route to labels |
| 805 | [@qmxme/pie](https://www.npmjs.com/package/@qmxme/pie) | 98 | `npm install @qmxme/pie` | My favorite pi extensions, all in one package. |
| 806 | [pi-compass](https://www.npmjs.com/package/pi-compass) | 97 | `npm install pi-compass` | A Pi extension that generates structured codebase maps and interactive code tours for agent onboarding. |
| 807 | [@artale/pi-huggingface](https://www.npmjs.com/package/@artale/pi-huggingface) | 96 | `npm install @artale/pi-huggingface` | HuggingFace utilities |
| 808 | [@artale/pi-seo](https://www.npmjs.com/package/@artale/pi-seo) | 96 | `npm install @artale/pi-seo` | SEO utilities |
| 809 | [@artale/pi-email](https://www.npmjs.com/package/@artale/pi-email) | 96 | `npm install @artale/pi-email` | Email utilities |
| 810 | [@rad-pi/core](https://www.npmjs.com/package/@rad-pi/core) | 96 | `npm install @rad-pi/core` | Deterministic Radicle agent tooling for pi |
| 811 | [@markoonakic/pi-working-line](https://www.npmjs.com/package/@markoonakic/pi-working-line) | 95 | `npm install @markoonakic/pi-working-line` | Claude-style working message phrases and elapsed timer for Pi. |
| 812 | [pi-beads-extension](https://www.npmjs.com/package/pi-beads-extension) | 93 | `npm install pi-beads-extension` | Pi package that brings Beads-style task tracking commands and workflow context to pi. |
| 813 | [@artale/pi-excel](https://www.npmjs.com/package/@artale/pi-excel) | 93 | `npm install @artale/pi-excel` | Excel file handling |
| 814 | [@artale/pi-infer](https://www.npmjs.com/package/@artale/pi-infer) | 93 | `npm install @artale/pi-infer` | Minimum viable free-LLM gateway — stdlib-only Python, no Docker, ~700 LOC |
| 815 | [@0xkobold/pi-suggest](https://www.npmjs.com/package/@0xkobold/pi-suggest) | 92 | `npm install @0xkobold/pi-suggest` | Context-aware suggestion engine for pi-coding-agent |
| 816 | [@artale/pi-docker](https://www.npmjs.com/package/@artale/pi-docker) | 92 | `npm install @artale/pi-docker` | Docker utilities |
| 817 | [@agentlogs/pi](https://www.npmjs.com/package/@agentlogs/pi) | 91 | `npm install @agentlogs/pi` | AgentLogs extension for Pi - automatically captures and uploads AI coding session transcripts |
| 818 | [@cglab/pi-rtk](https://www.npmjs.com/package/@cglab/pi-rtk) | 91 | `npm install @cglab/pi-rtk` | RTK (Rust Token Killer) integration for pi — transparent bash command rewriting for 60-90% token savings |
| 819 | [@e9n/pi-mobile](https://www.npmjs.com/package/@e9n/pi-mobile) | 91 | `npm install @e9n/pi-mobile` | PWA mobile app for Pi agents — mounts on pi-webserver at /mobile |
| 820 | [pi-pai](https://www.npmjs.com/package/pi-pai) | 91 | `npm install pi-pai` | Personal AI Infrastructure extension for Pi — full v4.0.3 sync: ISC splitting test, count gates, anti-criteria, capabil… |
| 821 | [@artale/pi-flutter](https://www.npmjs.com/package/@artale/pi-flutter) | 91 | `npm install @artale/pi-flutter` | Flutter utilities |
| 822 | [hive-agent](https://www.npmjs.com/package/hive-agent) | 90 | `npm install hive-agent` | Hive — Lightweight Feature Tracker for AI Coding Agents. Built on Pi. |
| 823 | [@zenobius/pi-rose-pine](https://www.npmjs.com/package/@zenobius/pi-rose-pine) | 90 | `npm install @zenobius/pi-rose-pine` | Rose Pine themes for Pi Coding Agent |
| 824 | [@artale/pi-deploy](https://www.npmjs.com/package/@artale/pi-deploy) | 90 | `npm install @artale/pi-deploy` | Deployment tools |
| 825 | [@artale/pi-social](https://www.npmjs.com/package/@artale/pi-social) | 90 | `npm install @artale/pi-social` | Social media utilities |
| 826 | [@artale/pi-terraform](https://www.npmjs.com/package/@artale/pi-terraform) | 90 | `npm install @artale/pi-terraform` | Terraform utilities |
| 827 | [@artale/pi-wordpress](https://www.npmjs.com/package/@artale/pi-wordpress) | 90 | `npm install @artale/pi-wordpress` | WordPress integration for Pi: WP-CLI wrapper, plugin scaffolding, theme tools |
| 828 | [@artale/pi-video](https://www.npmjs.com/package/@artale/pi-video) | 89 | `npm install @artale/pi-video` | Generate videos programmatically with Pi. React-based video generation. |
| 829 | [pi-vault-client](https://www.npmjs.com/package/pi-vault-client) | 89 | `npm install pi-vault-client` | pi extension package for vault workflows in monorepo runtime |
| 830 | [@juanibiapina/pi-tokyonight](https://www.npmjs.com/package/@juanibiapina/pi-tokyonight) | 89 | `npm install @juanibiapina/pi-tokyonight` | Tokyo Night theme for pi coding agent |
| 831 | [@m64/browser-tools](https://www.npmjs.com/package/@m64/browser-tools) | 89 | `npm install @m64/browser-tools` | Minimal CDP tools for collaborative site exploration |
| 832 | [@alexgorbatchev/pi-agentation](https://www.npmjs.com/package/@alexgorbatchev/pi-agentation) | 88 | `npm install @alexgorbatchev/pi-agentation` | pi extension launcher for Agentation Fork |
| 833 | [@guanyilun/pi-ads](https://www.npmjs.com/package/@guanyilun/pi-ads) | 88 | `npm install @guanyilun/pi-ads` | pi extension for querying NASA's Astrophysics Data System (ADS) |
| 834 | [pi-excalidraw](https://www.npmjs.com/package/pi-excalidraw) | 88 | `npm install pi-excalidraw` | A pi package that provides a locally hosted Excalidraw canvas plus AI-callable diagramming tools. |
| 835 | [pi-jj](https://www.npmjs.com/package/pi-jj) | 88 | `npm install pi-jj` | Pi extension package for Jujutsu workflows (checkpointing, rewind, and jj onboarding) |
| 836 | [@samfp/pi-meeting-copilot](https://www.npmjs.com/package/@samfp/pi-meeting-copilot) | 88 | `npm install @samfp/pi-meeting-copilot` | Live meeting transcription copilot for pi — captures audio via whisper-cpp on Mac, streams transcripts to your dev mach… |
| 837 | [@sp1in/claude-agent](https://www.npmjs.com/package/@sp1in/claude-agent) | 88 | `npm install @sp1in/claude-agent` | Claude Code bridge — chat with Claude from WeChat |
| 838 | [@onenote/pi-vim-editor](https://www.npmjs.com/package/@onenote/pi-vim-editor) | 88 | `npm install @onenote/pi-vim-editor` | Vim-style modal editor extension for pi |
| 839 | [@artale/pi-crypto](https://www.npmjs.com/package/@artale/pi-crypto) | 88 | `npm install @artale/pi-crypto` | Cryptocurrency utilities |
| 840 | [@artale/pi-alerts](https://www.npmjs.com/package/@artale/pi-alerts) | 88 | `npm install @artale/pi-alerts` | Alert management |
| 841 | [@sp1in/qwen-agent](https://www.npmjs.com/package/@sp1in/qwen-agent) | 87 | `npm install @sp1in/qwen-agent` | Qwen Code bridge — type /qwen, scan QR code, chat with Qwen from WeChat |
| 842 | [@gregjohnso/pi-monitor](https://www.npmjs.com/package/@gregjohnso/pi-monitor) | 87 | `npm install @gregjohnso/pi-monitor` | Background shell command runner for the pi coding agent. Each stdout line becomes a live TUI event and enters the LLM's… |
| 843 | [@artale/pi-gcp](https://www.npmjs.com/package/@artale/pi-gcp) | 87 | `npm install @artale/pi-gcp` | GCP utilities |
| 844 | [@artale/pi-pdf](https://www.npmjs.com/package/@artale/pi-pdf) | 87 | `npm install @artale/pi-pdf` | PDF generation and parsing |
| 845 | [@gnoviawan/pi-litellm-auto-detect](https://www.npmjs.com/package/@gnoviawan/pi-litellm-auto-detect) | 86 | `npm install @gnoviawan/pi-litellm-auto-detect` | Loads LiteLLM models from a remote /model/info endpoint on startup. |
| 846 | [@sp1in/kimi-agent](https://www.npmjs.com/package/@sp1in/kimi-agent) | 86 | `npm install @sp1in/kimi-agent` | Kimi CLI bridge — type /kimi, scan QR code, chat with Kimi from WeChat |
| 847 | [@artale/pi-cms](https://www.npmjs.com/package/@artale/pi-cms) | 86 | `npm install @artale/pi-cms` | CMS utilities |
| 848 | [@artale/pi-logs](https://www.npmjs.com/package/@artale/pi-logs) | 86 | `npm install @artale/pi-logs` | Log parsing utilities |
| 849 | [@linioi/pi-fast-mode](https://www.npmjs.com/package/@linioi/pi-fast-mode) | 86 | `npm install @linioi/pi-fast-mode` | A pi extension that adds a protocol-aware /fast command with status indicator and priority service tier injection. |
| 850 | [@tryinget/pi-extensions-package-template](https://www.npmjs.com/package/@tryinget/pi-extensions-package-template) | 85 | `npm install @tryinget/pi-extensions-package-template` | Copier template + CLI for bootstrapping production-ready pi extension packages inside a monorepo |
| 851 | [pi-pai-lite](https://www.npmjs.com/package/pi-pai-lite) | 85 | `npm install pi-pai-lite` | Structured thinking modes and lightweight persistent memory for pi |
| 852 | [pi-share-redacted-gist](https://www.npmjs.com/package/pi-share-redacted-gist) | 85 | `npm install pi-share-redacted-gist` | Pi package: publish a redacted pi session to GitHub gists and first-class Hugging Face datasets |
| 853 | [@apolosan/unified-process](https://www.npmjs.com/package/@apolosan/unified-process) | 85 | `npm install @apolosan/unified-process` | Pi package that bundles the Object-Oriented Unified Process extension and skills for the pi coding agent. |
| 854 | [@banon-labs/pi-inline-format](https://www.npmjs.com/package/@banon-labs/pi-inline-format) | 84 | `npm install @banon-labs/pi-inline-format` | Strict Pi extension project with a Rust core subproject and a TypeScript extension wrapper. |
| 855 | [pi-arxiv](https://www.npmjs.com/package/pi-arxiv) | 84 | `npm install pi-arxiv` | arXiv paper search and lookup tools for pi |
| 856 | [pi-upgrade](https://www.npmjs.com/package/pi-upgrade) | 84 | `npm install pi-upgrade` | Pi extension that adds a /upgrade command to self-upgrade pi |
| 857 | [@artale/pi-azure](https://www.npmjs.com/package/@artale/pi-azure) | 84 | `npm install @artale/pi-azure` | Azure utilities |
| 858 | [@artale/pi-sms](https://www.npmjs.com/package/@artale/pi-sms) | 84 | `npm install @artale/pi-sms` | SMS utilities |
| 859 | [@include-tools/toolbox-pi-extension](https://www.npmjs.com/package/@include-tools/toolbox-pi-extension) | 84 | `npm install @include-tools/toolbox-pi-extension` | pi extension for toolbox codemode sessions |
| 860 | [@baggiiiie/pi-computer-use](https://www.npmjs.com/package/@baggiiiie/pi-computer-use) | 83 | `npm install @baggiiiie/pi-computer-use` | 暂无描述 |
| 861 | [@artale/pi-csv](https://www.npmjs.com/package/@artale/pi-csv) | 83 | `npm install @artale/pi-csv` | CSV parsing and generation |
| 862 | [@artale/pi-slack](https://www.npmjs.com/package/@artale/pi-slack) | 83 | `npm install @artale/pi-slack` | Slack integration |
| 863 | [@jeffkafka/pi-nobody](https://www.npmjs.com/package/@jeffkafka/pi-nobody) | 83 | `npm install @jeffkafka/pi-nobody` | Starter Pi package for building and publishing your own Pi agent |
| 864 | [@artale/pi-type-check](https://www.npmjs.com/package/@artale/pi-type-check) | 83 | `npm install @artale/pi-type-check` | TypeScript type checking |
| 865 | [pi-enclave](https://www.npmjs.com/package/pi-enclave) | 82 | `npm install pi-enclave` | VM-isolated sandbox for pi with automatic secret protection · from yapp |
| 866 | [pi-serena-tools](https://www.npmjs.com/package/pi-serena-tools) | 82 | `npm install pi-serena-tools` | Pi now gains IDE-like editing capabilities by bridging Serena’s semantic code tools into native Pi tools. |
| 867 | [@artale/pi-analytics](https://www.npmjs.com/package/@artale/pi-analytics) | 82 | `npm install @artale/pi-analytics` | Analytics utilities |
| 868 | [@artale/pi-ansible](https://www.npmjs.com/package/@artale/pi-ansible) | 82 | `npm install @artale/pi-ansible` | Ansible utilities |
| 869 | [@artale/pi-curl](https://www.npmjs.com/package/@artale/pi-curl) | 82 | `npm install @artale/pi-curl` | cURL wrapper |
| 870 | [@artale/pi-e2e](https://www.npmjs.com/package/@artale/pi-e2e) | 82 | `npm install @artale/pi-e2e` | E2E test utilities |
| 871 | [@rad-pi/cob](https://www.npmjs.com/package/@rad-pi/cob) | 82 | `npm install @rad-pi/cob` | Optional Radicle COB integrations for pi (plan and context) |
| 872 | [@mjakl/pi-interlude](https://www.npmjs.com/package/@mjakl/pi-interlude) | 81 | `npm install @mjakl/pi-interlude` | Pi extension for stashing the current draft, sending an interlude message, and restoring the draft. |
| 873 | [@baggiiiie/pi-no-ansi](https://www.npmjs.com/package/@baggiiiie/pi-no-ansi) | 81 | `npm install @baggiiiie/pi-no-ansi` | A minimal pi package that keeps `bash` tool output cleaner for the model by: |
| 874 | [pi-zellij](https://www.npmjs.com/package/pi-zellij) | 81 | `npm install pi-zellij` | Pi package with zellij-powered terminal integrations |
| 875 | [@artale/pi-format](https://www.npmjs.com/package/@artale/pi-format) | 81 | `npm install @artale/pi-format` | Code formatting |
| 876 | [@artale/pi-blog](https://www.npmjs.com/package/@artale/pi-blog) | 81 | `npm install @artale/pi-blog` | Blog utilities |
| 877 | [@tridha643/pi-ask-mode](https://www.npmjs.com/package/@tridha643/pi-ask-mode) | 81 | `npm install @tridha643/pi-ask-mode` | A pi package that adds ask mode: read-only investigative tools plus read-only bash. |
| 878 | [pi-cline](https://www.npmjs.com/package/pi-cline) | 80 | `npm install pi-cline` | Cline provider extension for pi |
| 879 | [@artale/pi-lint](https://www.npmjs.com/package/@artale/pi-lint) | 80 | `npm install @artale/pi-lint` | Code linting and fixing |
| 880 | [@andriimartynov/pi-ollama-model-switcher](https://www.npmjs.com/package/@andriimartynov/pi-ollama-model-switcher) | 80 | `npm install @andriimartynov/pi-ollama-model-switcher` | Monitors and manages Ollama model instances within the pi coding agent harness. |
| 881 | [@artale/pi-unit](https://www.npmjs.com/package/@artale/pi-unit) | 80 | `npm install @artale/pi-unit` | Unit test utilities |
| 882 | [@sp1in/iflow-agent](https://www.npmjs.com/package/@sp1in/iflow-agent) | 79 | `npm install @sp1in/iflow-agent` | iFlow CLI bridge — chat with iFlow from WeChat |
| 883 | [@zenobius/pi-dcp](https://www.npmjs.com/package/@zenobius/pi-dcp) | 79 | `npm install @zenobius/pi-dcp` | Dynamic Context Pruning extension for pi - intelligently removes obsolete messages to optimize token usage |
| 884 | [@code-fixer-23/pi-agent-resource](https://www.npmjs.com/package/@code-fixer-23/pi-agent-resource) | 79 | `npm install @code-fixer-23/pi-agent-resource` | This extension is useful for making agent skills, propmts and subagents |
| 885 | [@artale/pi-load](https://www.npmjs.com/package/@artale/pi-load) | 79 | `npm install @artale/pi-load` | Load testing utilities |
| 886 | [@rwese/pi-hooks](https://www.npmjs.com/package/@rwese/pi-hooks) | 79 | `npm install @rwese/pi-hooks` | Run user-defined hooks on pi events (input, agent_end) |
| 887 | [pi-bash-bg](https://www.npmjs.com/package/pi-bash-bg) | 78 | `npm install pi-bash-bg` | Makes command & work in pi's bash tool by detaching background processes from pipes · from yapp |
| 888 | [@alasano/pi-panels](https://www.npmjs.com/package/@alasano/pi-panels) | 78 | `npm install @alasano/pi-panels` | Responsive status panels for pi - git info, LLM context usage, and Spotify now-playing below the editor |
| 889 | [@johnnywu/pi-terminal-signals](https://www.npmjs.com/package/@johnnywu/pi-terminal-signals) | 77 | `npm install @johnnywu/pi-terminal-signals` | Pi extension that communicates agent lifecycle to the terminal via OSC 9;4 (progress) and OSC 133 (semantic prompts). |
| 890 | [@juanibiapina/pi-gob](https://www.npmjs.com/package/@juanibiapina/pi-gob) | 77 | `npm install @juanibiapina/pi-gob` | Pi extension for managing gob background jobs |
| 891 | [@mjakl/pi-kagi-search](https://www.npmjs.com/package/@mjakl/pi-kagi-search) | 77 | `npm install @mjakl/pi-kagi-search` | Kagi search tool for Pi coding agent |
| 892 | [@clanker-extensions/web](https://www.npmjs.com/package/@clanker-extensions/web) | 77 | `npm install @clanker-extensions/web` | Adds web search and fetch tools for public web access. |
| 893 | [@sp1in/pi-agent](https://www.npmjs.com/package/@sp1in/pi-agent) | 77 | `npm install @sp1in/pi-agent` | Pi extension — type /wechat, scan QR code, chat with Pi from WeChat |
| 894 | [@georgetsouvaltzis/pi-working-time](https://www.npmjs.com/package/@georgetsouvaltzis/pi-working-time) | 77 | `npm install @georgetsouvaltzis/pi-working-time` | Pi extension that shows live elapsed working time with configurable formatting |
| 895 | [@artale/pi-build](https://www.npmjs.com/package/@artale/pi-build) | 77 | `npm install @artale/pi-build` | Build orchestration |
| 896 | [@rad-pi/autonomy](https://www.npmjs.com/package/@rad-pi/autonomy) | 77 | `npm install @rad-pi/autonomy` | Autonomous Radicle issue, plan, and orchestration workflows for pi |
| 897 | [@sahebjot94/pi-goal](https://www.npmjs.com/package/@sahebjot94/pi-goal) | 76 | `npm install @sahebjot94/pi-goal` | Codex-like /goal command for pi — autonomous goal tracking with continuation loops |
| 898 | [pi-profiles](https://www.npmjs.com/package/pi-profiles) | 76 | `npm install pi-profiles` | Configuration profile manager for pi (pi.dev) |
| 899 | [pi-system-reminders](https://www.npmjs.com/package/pi-system-reminders) | 76 | `npm install pi-system-reminders` | Reactive system reminders for pi - steer agents with contextual nudges during long agentic flows |
| 900 | [@artale/pi-aws](https://www.npmjs.com/package/@artale/pi-aws) | 76 | `npm install @artale/pi-aws` | AWS utilities |
| 901 | [@artale/pi-k8s](https://www.npmjs.com/package/@artale/pi-k8s) | 76 | `npm install @artale/pi-k8s` | Kubernetes utilities |
| 902 | [@burneikis/pi-plan](https://www.npmjs.com/package/@burneikis/pi-plan) | 75 | `npm install @burneikis/pi-plan` | Claude Code-style plan mode for pi — create, review, edit, and execute structured plans in a fresh context |
| 903 | [@e9n/pi-cmux](https://www.npmjs.com/package/@e9n/pi-cmux) | 75 | `npm install @e9n/pi-cmux` | cmux terminal app integration for pi — notifications, pane management, screen reading, and browser automation |
| 904 | [@rakohq/pi-council](https://www.npmjs.com/package/@rakohq/pi-council) | 75 | `npm install @rakohq/pi-council` | Multi-model LLM Council for adversarial debate, cross-validation, and synthesized decision-making via pi-teams |
| 905 | [@carter-mcalister/pi-multicodex](https://www.npmjs.com/package/@carter-mcalister/pi-multicodex) | 74 | `npm install @carter-mcalister/pi-multicodex` | Codex account rotation extension for pi |
| 906 | [pi-caffeinate](https://www.npmjs.com/package/pi-caffeinate) | 74 | `npm install pi-caffeinate` | Pi extension that keeps the machine awake while the agent is working (macOS, Linux, Windows) |
| 907 | [pi-magic-docs](https://www.npmjs.com/package/pi-magic-docs) | 74 | `npm install pi-magic-docs` | Living documents that update themselves from your conversation — pi reads them, tracks them, and keeps them current |
| 908 | [pi-red-green](https://www.npmjs.com/package/pi-red-green) | 74 | `npm install pi-red-green` | A Pi extension that enforces Test-Driven Development (RED-GREEN-REFACTOR) discipline during agent coding sessions. |
| 909 | [@fractary/pi-claude-code](https://www.npmjs.com/package/@fractary/pi-claude-code) | 74 | `npm install @fractary/pi-claude-code` | Pi extensions that shim Claude Code's tool API, letting agents, skills, and prompts built for Claude Code run in pi wit… |
| 910 | [@liunuozhi/pi-vi](https://www.npmjs.com/package/@liunuozhi/pi-vi) | 74 | `npm install @liunuozhi/pi-vi` | Minimal vi-style modal editing for Pi's TUI prompt |
| 911 | [@ssweens/pi-vertex](https://www.npmjs.com/package/@ssweens/pi-vertex) | 74 | `npm install @ssweens/pi-vertex` | Google Vertex AI provider for Pi coding agent - supports Gemini, Claude, and all MaaS models |
| 912 | [pi-agent-selector](https://www.npmjs.com/package/pi-agent-selector) | 74 | `npm install pi-agent-selector` | Pi extension that lets users activate local agent markdown files as the current session profile. |
| 913 | [pi-friday](https://www.npmjs.com/package/pi-friday) | 73 | `npm install pi-friday` | Dedicated communications side panel for pi — routes all conversation to a separate tmux pane with typewriter effect. Op… |
| 914 | [@artale/pi-react-native](https://www.npmjs.com/package/@artale/pi-react-native) | 73 | `npm install @artale/pi-react-native` | React Native utilities |
| 915 | [@kyuc/pi-cat-loader](https://www.npmjs.com/package/@kyuc/pi-cat-loader) | 72 | `npm install @kyuc/pi-cat-loader` | Animated cat loading indicator for pi. |
| 916 | [@benvargas/pi-openai-verbosity](https://www.npmjs.com/package/@benvargas/pi-openai-verbosity) | 72 | `npm install @benvargas/pi-openai-verbosity` | Per-model OpenAI Codex text verbosity overrides for pi |
| 917 | [@lhl/pi-vertex](https://www.npmjs.com/package/@lhl/pi-vertex) | 71 | `npm install @lhl/pi-vertex` | Google Vertex AI provider for Pi coding agent - supports Gemini, Claude, and all MaaS models |
| 918 | [pi-jujutsu](https://www.npmjs.com/package/pi-jujutsu) | 71 | `npm install pi-jujutsu` | Live jj (jujutsu) working copy status and repo context for pi |
| 919 | [@denveous/pi-mcp](https://www.npmjs.com/package/@denveous/pi-mcp) | 70 | `npm install @denveous/pi-mcp` | Pi extension: MCP client for pi agent |
| 920 | [@firstpick/pi-extension-archwiki-local](https://www.npmjs.com/package/@firstpick/pi-extension-archwiki-local) | 70 | `npm install @firstpick/pi-extension-archwiki-local` | Local ArchWiki search and retrieval tools for Pi using the installed arch-wiki-docs package. |
| 921 | [pi-openresolve](https://www.npmjs.com/package/pi-openresolve) | 70 | `npm install pi-openresolve` | Openresolve extension for pi (currently lists merge conflicts in TypeScript code) |
| 922 | [@pborck/pi-de](https://www.npmjs.com/package/@pborck/pi-de) | 70 | `npm install @pborck/pi-de` | IDE integration for pi coding agent - shows current file/selection from VS Code, JetBrains, etc. |
| 923 | [@siddr/pi-diff-cmux](https://www.npmjs.com/package/@siddr/pi-diff-cmux) | 70 | `npm install @siddr/pi-diff-cmux` | cmux browser diff review extension for pi |
| 924 | [@jyking/jypi](https://www.npmjs.com/package/@jyking/jypi) | 69 | `npm install @jyking/jypi` | 暂无描述 |
| 925 | [@andrewxhill/pi-be-kind](https://www.npmjs.com/package/@andrewxhill/pi-be-kind) | 69 | `npm install @andrewxhill/pi-be-kind` | Pi agent extension that rewrites unkind prompts to be nicer |
| 926 | [pi-websearch-router](https://www.npmjs.com/package/pi-websearch-router) | 69 | `npm install pi-websearch-router` | Pi web search tool that auto-detects available API keys and routes to the right provider |
| 927 | [pi-slack-bot](https://www.npmjs.com/package/pi-slack-bot) | 69 | `npm install pi-slack-bot` | Slack bot exposing pi as a conversational coding agent. Chat with pi in Slack DMs with streaming responses, tool execut… |
| 928 | [checkpoint-pi](https://www.npmjs.com/package/checkpoint-pi) | 69 | `npm install checkpoint-pi` | Git-based checkpoint extension for pi-coding-agent - creates checkpoints at each turn for code state restoration |
| 929 | [@codingcoffee/pi-privacy-filter](https://www.npmjs.com/package/@codingcoffee/pi-privacy-filter) | 68 | `npm install @codingcoffee/pi-privacy-filter` | pi extension that redacts PII/secrets before sending to the LLM and restores them in responses |
| 930 | [@the-forge-flow/pi-verifier](https://www.npmjs.com/package/@the-forge-flow/pi-verifier) | 68 | `npm install @the-forge-flow/pi-verifier` | PI extension that runs a verifier subagent to observe and correct builder sessions |
| 931 | [pi-app-server](https://www.npmjs.com/package/pi-app-server) | 68 | `npm install pi-app-server` | Session multiplexer for pi-coding-agent |
| 932 | [nowledge-mem-pi](https://www.npmjs.com/package/nowledge-mem-pi) | 68 | `npm install nowledge-mem-pi` | Cross-tool memory for Pi. Recall past decisions, search knowledge from every AI tool, and save what matters. |
| 933 | [@rbtr/pi](https://www.npmjs.com/package/@rbtr/pi) | 68 | `npm install @rbtr/pi` | pi extension that surfaces rbtr's structural code index to the LLM — symbol search, source read, file outlines, depende… |
| 934 | [@justram/pi-undo-redo](https://www.npmjs.com/package/@justram/pi-undo-redo) | 67 | `npm install @justram/pi-undo-redo` | Buffered undo/redo extension for Pi coding agent |
| 935 | [pi-agent-loop](https://www.npmjs.com/package/pi-agent-loop) | 67 | `npm install pi-agent-loop` | General-purpose agent loop extension for pi. Supports goal loops (repeat until done), fixed-pass loops, and multi-stage… |
| 936 | [vscode-pi-companion](https://www.npmjs.com/package/vscode-pi-companion) | 67 | `npm install vscode-pi-companion` | Share VS Code context with pi coding agent |
| 937 | [pi-persistent-term](https://www.npmjs.com/package/pi-persistent-term) | 66 | `npm install pi-persistent-term` | Integrated terminal panel for pi coding agent — persistent PTY shell, colored overlay, LLM tools |
| 938 | [@saibolla/ada](https://www.npmjs.com/package/@saibolla/ada) | 66 | `npm install @saibolla/ada` | The AI research agent for the terminal |
| 939 | [omniroute-pi-extension](https://www.npmjs.com/package/omniroute-pi-extension) | 65 | `npm install omniroute-pi-extension` | Pi Coding Agent extension for OmniRoute — manage combos, browse providers, and see which model actually served each res… |
| 940 | [@whynothugo/pi-aliyun](https://www.npmjs.com/package/@whynothugo/pi-aliyun) | 64 | `npm install @whynothugo/pi-aliyun` | Aliyun CodingPlan provider extension for pi |
| 941 | [@marckrenn/pi-sub-status](https://www.npmjs.com/package/@marckrenn/pi-sub-status) | 64 | `npm install @marckrenn/pi-sub-status` | Compact status-line client for pi subscription usage |
| 942 | [@interleavelove/keating](https://www.npmjs.com/package/@interleavelove/keating) | 64 | `npm install @interleavelove/keating` | A Pi-powered hyperteacher package with self-improving teaching policies, lesson maps, and animated visual teaching arti… |
| 943 | [@cortexkit/pi-anthropic-auth](https://www.npmjs.com/package/@cortexkit/pi-anthropic-auth) | 64 | `npm install @cortexkit/pi-anthropic-auth` | Pi package for CortexKit Anthropic OAuth support. It overrides Pi's built-in `anthropic` provider with a CortexKit prov… |
| 944 | [pi-cursor-oauth](https://www.npmjs.com/package/pi-cursor-oauth) | 64 | `npm install pi-cursor-oauth` | Cursor OAuth provider extension for pi-coding-agent |
| 945 | [pi-openai-codex-status](https://www.npmjs.com/package/pi-openai-codex-status) | 64 | `npm install pi-openai-codex-status` | Pi extension that shows OpenAI usage for hourly and weekly subscription limits like Codex with a /status command. |
| 946 | [@claaslange/pi-progress-bar](https://www.npmjs.com/package/@claaslange/pi-progress-bar) | 63 | `npm install @claaslange/pi-progress-bar` | Native terminal progress indicator support for pi via OSC 9;4 |
| 947 | [pi-code-index](https://www.npmjs.com/package/pi-code-index) | 63 | `npm install pi-code-index` | Fast, precise codebase exploration via universal-ctags — symbol search, outlines, exact code retrieval, global index st… |
| 948 | [pi-multicodex](https://www.npmjs.com/package/pi-multicodex) | 63 | `npm install pi-multicodex` | Rotate multiple ChatGPT Codex OAuth accounts for pi |
| 949 | [pi-repl](https://www.npmjs.com/package/pi-repl) | 62 | `npm install pi-repl` | Collaborative tmux-backed REPL sessions for pi |
| 950 | [@sirsyorrz/pi-statusline](https://www.npmjs.com/package/@sirsyorrz/pi-statusline) | 62 | `npm install @sirsyorrz/pi-statusline` | Pi statusline extension — clean one-line footer with context usage and Anthropic rate-limit utilization. |
| 951 | [@burneikis/pi-nolo](https://www.npmjs.com/package/@burneikis/pi-nolo) | 62 | `npm install @burneikis/pi-nolo` | No-YOLO mode for pi — gates write, edit, and bash tool calls behind user confirmation with configurable safe-command al… |
| 952 | [@prinova/pi-github-tools](https://www.npmjs.com/package/@prinova/pi-github-tools) | 61 | `npm install @prinova/pi-github-tools` | GitHub repository tools extension for pi-coding-agent |
| 953 | [@calesennett/pi-hn](https://www.npmjs.com/package/@calesennett/pi-hn) | 61 | `npm install @calesennett/pi-hn` | Hacker News front-page reader extension for pi |
| 954 | [pi-captain](https://www.npmjs.com/package/pi-captain) | 61 | `npm install pi-captain` | Captain — multi-agent pipeline orchestrator for pi. Define specialized agents, wire them into sequential/parallel/pool… |
| 955 | [@artale/pi-params](https://www.npmjs.com/package/@artale/pi-params) | 61 | `npm install @artale/pi-params` | Generation parameter control for Pi. Set temperature, top_p, max_tokens, and other model params per conversation. |
| 956 | [pi-budget-model](https://www.npmjs.com/package/pi-budget-model) | 61 | `npm install pi-budget-model` | Auto-select the cheapest available model for background tasks in pi |
| 957 | [@artale/pi-validate](https://www.npmjs.com/package/@artale/pi-validate) | 61 | `npm install @artale/pi-validate` | Production readiness validator. Score projects on code, tests, docs, config, deploy. Inspired by MrE's system-validator… |
| 958 | [@calesennett/pi-codex-fast](https://www.npmjs.com/package/@calesennett/pi-codex-fast) | 61 | `npm install @calesennett/pi-codex-fast` | pi extension that adds service_tier=priority to OpenAI/OpenAI Codex requests when fast mode is enabled. |
| 959 | [@rdyson/pi-pushover](https://www.npmjs.com/package/@rdyson/pi-pushover) | 60 | `npm install @rdyson/pi-pushover` | Pushover notifications when Pi finishes agent tasks. |
| 960 | [pi-mill](https://www.npmjs.com/package/pi-mill) | 60 | `npm install pi-mill` | Pi extension package that routes subagent execution through mill |
| 961 | [pi-conversation-retro](https://www.npmjs.com/package/pi-conversation-retro) | 60 | `npm install pi-conversation-retro` | Pi extension for session review, conversation analysis, and agent mistake detection. Runs automated postmortem reviews… |
| 962 | [pi-bailian-models](https://www.npmjs.com/package/pi-bailian-models) | 60 | `npm install pi-bailian-models` | Adds Alibaba Cloud BaiLian Qwen models to pi with OAuth support |
| 963 | [@alasano/pi-mouse](https://www.npmjs.com/package/@alasano/pi-mouse) | 60 | `npm install @alasano/pi-mouse` | ASCII mouse that follows your cursor above the editor in pi |
| 964 | [@vedssharma/pi-pet](https://www.npmjs.com/package/@vedssharma/pi-pet) | 59 | `npm install @vedssharma/pi-pet` | A virtual pet for your pi terminal sessions. Pick a pet, feed it tokens, and watch it grow! |
| 965 | [pi-tetris](https://www.npmjs.com/package/pi-tetris) | 59 | `npm install pi-tetris` | Play Tetris in pi! All 7 tetrominoes, ghost piece, wall kicks, hold piece, score, levels, and session save/restore. |
| 966 | [@javimolina/pi-rg](https://www.npmjs.com/package/@javimolina/pi-rg) | 59 | `npm install @javimolina/pi-rg` | Pi package that adds a /r command with cached ripgrep-backed file completions |
| 967 | [@yevhen.b/bo-pi](https://www.npmjs.com/package/@yevhen.b/bo-pi) | 59 | `npm install @yevhen.b/bo-pi` | Pi extensions for tool preflight approvals. |
| 968 | [pi-extension-codex-apply-patch](https://www.npmjs.com/package/pi-extension-codex-apply-patch) | 59 | `npm install pi-extension-codex-apply-patch` | Pi extension that adds Codex-style CFG constrained apply_patch with local verification |
| 969 | [pi-computer-use](https://www.npmjs.com/package/pi-computer-use) | 59 | `npm install pi-computer-use` | Pi extension for GUI computer-use on macOS |
| 970 | [pi-opensync-plugin](https://www.npmjs.com/package/pi-opensync-plugin) | 59 | `npm install pi-opensync-plugin` | Pi extension to sync sessions to OpenSync dashboards |
| 971 | [@howaboua/pi-glm-via-anthropic](https://www.npmjs.com/package/@howaboua/pi-glm-via-anthropic) | 59 | `npm install @howaboua/pi-glm-via-anthropic` | Use Z.ai GLM models in pi through Z.ai's Anthropic-compatible endpoint. |
| 972 | [@firstpick/pi-extension-hyprland-wiki-local](https://www.npmjs.com/package/@firstpick/pi-extension-hyprland-wiki-local) | 58 | `npm install @firstpick/pi-extension-hyprland-wiki-local` | Local Hyprland Wiki search and retrieval tools for Pi backed by a cloned official hyprland-wiki repository. |
| 973 | [pi-co-authored-by](https://www.npmjs.com/package/pi-co-authored-by) | 58 | `npm install pi-co-authored-by` | A Pi extension that automatically appends Co-Authored-By and Generated-By git trailers to commit messages with the mode… |
| 974 | [pi-emacs](https://www.npmjs.com/package/pi-emacs) | 58 | `npm install pi-emacs` | A collection of Emacs related pi tools |
| 975 | [@lnittman/pi-steer](https://www.npmjs.com/package/@lnittman/pi-steer) | 57 | `npm install @lnittman/pi-steer` | Steering compiler for pi — turn-by-turn decision prompts, context-aware handoff synthesis, and pickup-ready prompt pack… |
| 976 | [@versdotsh/reef](https://www.npmjs.com/package/@versdotsh/reef) | 57 | `npm install @versdotsh/reef` | Self-improving fleet infrastructure — the minimum kernel agents need to build their own tools |
| 977 | [@romansix/pi-tmux](https://www.npmjs.com/package/@romansix/pi-tmux) | 57 | `npm install @romansix/pi-tmux` | Pi coding agent extension: tmux session management per project |
| 978 | [pi-stories](https://www.npmjs.com/package/pi-stories) | 57 | `npm install pi-stories` | Multi-agent orchestration with Blueprint Engine [D]/[N] interleaving and cost routing |
| 979 | [@ifiokjr/oh-pi-themes](https://www.npmjs.com/package/@ifiokjr/oh-pi-themes) | 57 | `npm install @ifiokjr/oh-pi-themes` | Color themes for pi: cyberpunk, nord, gruvbox, tokyo-night, catppuccin, and more. |
| 980 | [pi-yank](https://www.npmjs.com/package/pi-yank) | 56 | `npm install pi-yank` | Lightweight /yank extension for pi that copies the last assistant message or a selected code block. |
| 981 | [pi-websearch-brave](https://www.npmjs.com/package/pi-websearch-brave) | 56 | `npm install pi-websearch-brave` | Pi web search tool powered by Brave Search |
| 982 | [pi-git-commands-extension](https://www.npmjs.com/package/pi-git-commands-extension) | 56 | `npm install pi-git-commands-extension` | Shareable Pi package that adds /commit, /push, /commit-and-push, and /commit-pr git commands. |
| 983 | [pi-websearch-perplexity](https://www.npmjs.com/package/pi-websearch-perplexity) | 56 | `npm install pi-websearch-perplexity` | Pi web search tool powered by Perplexity Sonar |
| 984 | [pi-direnv](https://www.npmjs.com/package/pi-direnv) | 55 | `npm install pi-direnv` | Auto-load direnv environment at session start — ensures bash commands have project-specific env vars from .envrc |
| 985 | [pi-monitor](https://www.npmjs.com/package/pi-monitor) | 55 | `npm install pi-monitor` | Pi extension for running background processes with live output in a native floating window |
| 986 | [pi-runtime-extensions](https://www.npmjs.com/package/pi-runtime-extensions) | 55 | `npm install pi-runtime-extensions` | Dynamically load/unload extensions at runtime (inside session) for Pi Coding Agent with /ext:load, /ext:list, and /ext:… |
| 987 | [pi-websearch-valyu](https://www.npmjs.com/package/pi-websearch-valyu) | 55 | `npm install pi-websearch-valyu` | Pi web search tool powered by Valyu (academic and paywalled sources) |
| 988 | [@artale/pi-dash](https://www.npmjs.com/package/@artale/pi-dash) | 55 | `npm install @artale/pi-dash` | Live TUI dashboard widget for Pi. Shows tokens, cost, context %, uptime, and tool stats above the editor in real-time. |
| 989 | [@anthaathi/pi-companion-extensions](https://www.npmjs.com/package/@anthaathi/pi-companion-extensions) | 54 | `npm install @anthaathi/pi-companion-extensions` | Companion extensions for the pi coding agent — plan mode, and more |
| 990 | [@fnnm/pi-ast-grep](https://www.npmjs.com/package/@fnnm/pi-ast-grep) | 54 | `npm install @fnnm/pi-ast-grep` | ast-grep extension for Pi. |
| 991 | [@sherif-fanous/pi-theme-sync](https://www.npmjs.com/package/@sherif-fanous/pi-theme-sync) | 54 | `npm install @sherif-fanous/pi-theme-sync` | Pi package extension that automatically switches Pi themes to match terminal or OS appearance |
| 992 | [pi-stash](https://www.npmjs.com/package/pi-stash) | 54 | `npm install pi-stash` | Pi extension that stashes the current editor draft with Alt+S |
| 993 | [@carter-mcalister/pi-codex-tools](https://www.npmjs.com/package/@carter-mcalister/pi-codex-tools) | 53 | `npm install @carter-mcalister/pi-codex-tools` | Codex-compatible tool surface for Pi |
| 994 | [@georgebashi/pi-retry](https://www.npmjs.com/package/@georgebashi/pi-retry) | 53 | `npm install @georgebashi/pi-retry` | pi extension: auto-retry transient streaming errors + /retry command |
| 995 | [pi-airgun](https://www.npmjs.com/package/pi-airgun) | 53 | `npm install pi-airgun` | Pi extensions for LLM context compression and Anthropic prompt caching. Zero LLM inference cost. |
| 996 | [pi-claude-boost](https://www.npmjs.com/package/pi-claude-boost) | 53 | `npm install pi-claude-boost` | Shows whether Claude's 2x usage boost is active right now, with countdowns in both directions |
| 997 | [@carter-mcalister/pi-codex-tasks](https://www.npmjs.com/package/@carter-mcalister/pi-codex-tasks) | 52 | `npm install @carter-mcalister/pi-codex-tasks` | Codex-compatible task planning tools for Pi |
| 998 | [shopq](https://www.npmjs.com/package/shopq) | 52 | `npm install shopq` | A zero-dependency Shopify Admin CLI built on Bun |
| 999 | [@ifiokjr/oh-pi-extensions](https://www.npmjs.com/package/@ifiokjr/oh-pi-extensions) | 52 | `npm install @ifiokjr/oh-pi-extensions` | Core pi extensions: safe-guard, git-guard, auto-session, custom-footer, and more. |
| 1000 | [pi-read-many](https://www.npmjs.com/package/pi-read-many) | 51 | `npm install pi-read-many` | Batch file reads for Pi via read_many with adaptive packing under output limits |
| 1001 | [pi-timestamps](https://www.npmjs.com/package/pi-timestamps) | 51 | `npm install pi-timestamps` | Timestamps extension for pi coding agent — message timing widget, elapsed timer, and interactive timeline browser |
| 1002 | [pi-dispatch](https://www.npmjs.com/package/pi-dispatch) | 51 | `npm install pi-dispatch` | Dispatch requests across multiple ChatGPT Codex OAuth accounts for pi |
| 1003 | [pi-read-mode](https://www.npmjs.com/package/pi-read-mode) | 51 | `npm install pi-read-mode` | Scroll through conversation history while composing a follow-up |
| 1004 | [@marcfargas/pi-tramp](https://www.npmjs.com/package/@marcfargas/pi-tramp) | 50 | `npm install @marcfargas/pi-tramp` | TRAMP-like transparent remote execution for pi — tools execute remotely, pi stays local |
| 1005 | [pi-websearch-jina](https://www.npmjs.com/package/pi-websearch-jina) | 50 | `npm install pi-websearch-jina` | Pi web search tool powered by Jina AI |
| 1006 | [pi-websearch-serpapi](https://www.npmjs.com/package/pi-websearch-serpapi) | 50 | `npm install pi-websearch-serpapi` | Pi web search tool powered by SerpAPI |
| 1007 | [pi-websearch-serper](https://www.npmjs.com/package/pi-websearch-serper) | 50 | `npm install pi-websearch-serper` | Pi web search tool powered by Serper (Google Search) |
| 1008 | [pigibrack](https://www.npmjs.com/package/pigibrack) | 50 | `npm install pigibrack` | Pi extension package for structural Scheme/Guile editing with a persistent REPL sidecar |
| 1009 | [pi-tau-mux](https://www.npmjs.com/package/pi-tau-mux) | 50 | `npm install pi-tau-mux` | Web UI that mirrors your Pi terminal session in the browser - tmux session aware |
| 1010 | [pi-scheduler](https://www.npmjs.com/package/pi-scheduler) | 50 | `npm install pi-scheduler` | Simple scheduled loop/reminder extension for pi |
| 1011 | [@vanillagreen/pi-hooks](https://www.npmjs.com/package/@vanillagreen/pi-hooks) | 49 | `npm install @vanillagreen/pi-hooks` | First-class Pi port of the vstack safety hooks: bare-cd blocking, pre-commit fmt+clippy, post-edit clippy, end-of-turn… |
| 1012 | [pi-google-workspace](https://www.npmjs.com/package/pi-google-workspace) | 49 | `npm install pi-google-workspace` | Google Workspace extension for pi (Drive, Docs, Sheets, Slides with OAuth) |
| 1013 | [@artale/pi-stack](https://www.npmjs.com/package/@artale/pi-stack) | 49 | `npm install @artale/pi-stack` | Local AI infrastructure generator. Docker compose for Ollama, n8n, Flowise, Supabase, Neo4j, and more. |
| 1014 | [@tribalnerd/pi-notes](https://www.npmjs.com/package/@tribalnerd/pi-notes) | 49 | `npm install @tribalnerd/pi-notes` | A Pi extension for deterministic human notes across project and global scopes. |
| 1015 | [@artale/pi-leads](https://www.npmjs.com/package/@artale/pi-leads) | 49 | `npm install @artale/pi-leads` | Terminal CRM and outreach pipeline. Track prospects, manage follow-ups, draft messages. |
| 1016 | [pi-websearch-linkup](https://www.npmjs.com/package/pi-websearch-linkup) | 49 | `npm install pi-websearch-linkup` | Pi web search tool powered by Linkup |
| 1017 | [@anthnykr/pi-codex-fast-mode](https://www.npmjs.com/package/@anthnykr/pi-codex-fast-mode) | 49 | `npm install @anthnykr/pi-codex-fast-mode` | Pi extension that adds a fast-mode toggle for supported OpenAI Codex models. |
| 1018 | [@ogulcancelik/pi-worktree](https://www.npmjs.com/package/@ogulcancelik/pi-worktree) | 48 | `npm install @ogulcancelik/pi-worktree` | Relocate the active pi session to another git working tree while preserving conversation history. |
| 1019 | [@askjo/pi-reflect](https://www.npmjs.com/package/@askjo/pi-reflect) | 48 | `npm install @askjo/pi-reflect` | Self-improving behavioral files for pi coding agents. Analyzes session transcripts for correction patterns and makes su… |
| 1020 | [@artale/pi-tokens](https://www.npmjs.com/package/@artale/pi-tokens) | 48 | `npm install @artale/pi-tokens` | Token cost intelligence for Pi. Per-tool cost breakdown, $/call estimates, budget alerts, expensive call finder. |
| 1021 | [pi-websearch-parallel](https://www.npmjs.com/package/pi-websearch-parallel) | 48 | `npm install pi-websearch-parallel` | Pi web search tool powered by Parallel |
| 1022 | [@artale/pi-gepa](https://www.npmjs.com/package/@artale/pi-gepa) | 47 | `npm install @artale/pi-gepa` | Skill scanner and quality scorer for Pi. Scans, scores, and identifies weak skills. Pairs with pi-evolve for mutation. |
| 1023 | [@artale/pi-compact](https://www.npmjs.com/package/@artale/pi-compact) | 47 | `npm install @artale/pi-compact` | Smart context compaction for Pi. Topic-aware summarization that preserves code context and drops chatter. Configurable… |
| 1024 | [@aedge-io/typed-clone](https://www.npmjs.com/package/@aedge-io/typed-clone) | 47 | `npm install @aedge-io/typed-clone` | Type-safe, performant and extensible clone implementation |
| 1025 | [pi-rtk-noemoji](https://www.npmjs.com/package/pi-rtk-noemoji) | 47 | `npm install pi-rtk-noemoji` | Fork of pi-rtk with all emoji removed from output. Same token reduction, plain text only. |
| 1026 | [pi-telemetry-otel](https://www.npmjs.com/package/pi-telemetry-otel) | 46 | `npm install pi-telemetry-otel` | OpenTelemetry (OTLP/HTTP) telemetry extension + helper APIs for pi |
| 1027 | [pi-scheduled-tasks](https://www.npmjs.com/package/pi-scheduled-tasks) | 46 | `npm install pi-scheduled-tasks` | A pi extension for scheduled prompts, recurring checks, and prompt-executable slash commands |
| 1028 | [pi-mem](https://www.npmjs.com/package/pi-mem) | 46 | `npm install pi-mem` | Persistent memory extension for pi — captures observations, compresses them into searchable memories, and injects conte… |
| 1029 | [pi-github](https://www.npmjs.com/package/pi-github) | 46 | `npm install pi-github` | GitHub tool extension for Pi: format threads, list issues/PRs, and inspect PR diffs/images. |
| 1030 | [pi-sre-mode](https://www.npmjs.com/package/pi-sre-mode) | 46 | `npm install pi-sre-mode` | Pi-native incident investigation workflow with support for private overlays. |
| 1031 | [pi-websearch-exa](https://www.npmjs.com/package/pi-websearch-exa) | 46 | `npm install pi-websearch-exa` | Pi web search tool powered by Exa |
| 1032 | [@bytesbrains/pi-project-gate](https://www.npmjs.com/package/@bytesbrains/pi-project-gate) | 45 | `npm install @bytesbrains/pi-project-gate` | Project orchestration gate for AI agents — structured issues, WIP limits, dependency blocking, and auto-generated relea… |
| 1033 | [pi-websearch-you](https://www.npmjs.com/package/pi-websearch-you) | 45 | `npm install pi-websearch-you` | Pi web search tool powered by You.com |
| 1034 | [pi-worlds](https://www.npmjs.com/package/pi-worlds) | 45 | `npm install pi-worlds` | Pi extension for generating 3D worlds via the World Labs Marble API |
| 1035 | [pi-ding](https://www.npmjs.com/package/pi-ding) | 45 | `npm install pi-ding` | pi extension: play a sound when the agent finishes a prompt |
| 1036 | [@alexanderfortin/pi-deepseek-usage](https://www.npmjs.com/package/@alexanderfortin/pi-deepseek-usage) | 44 | `npm install @alexanderfortin/pi-deepseek-usage` | Pi extension for monitoring DeepSeek API balance |
| 1037 | [pi-forms](https://www.npmjs.com/package/pi-forms) | 44 | `npm install pi-forms` | Interactive TUI form overlay tool for pi agents. Collect structured input via declarative form schemas. |
| 1038 | [@ssweens/pi-compaxxt](https://www.npmjs.com/package/@ssweens/pi-compaxxt) | 44 | `npm install @ssweens/pi-compaxxt` | Enhanced compaction for pi — session context and LLM-ranked important files |
| 1039 | [pi-clear](https://www.npmjs.com/package/pi-clear) | 44 | `npm install pi-clear` | Adds /clear and /c commands (plus bare message interception) to wipe the conversation context and start a fresh session… |
| 1040 | [pi-kota](https://www.npmjs.com/package/pi-kota) | 44 | `npm install pi-kota` | KotaDB thin wrapper + context pruning extension for pi |
| 1041 | [@e9n/pi-myfinance](https://www.npmjs.com/package/@e9n/pi-myfinance) | 44 | `npm install @e9n/pi-myfinance` | Personal finance tracking extension for pi |
| 1042 | [@sysid/pi-vim](https://www.npmjs.com/package/@sysid/pi-vim) | 44 | `npm install @sysid/pi-vim` | Modal vim editing extension for the pi coding agent |
| 1043 | [pi-pet-hn](https://www.npmjs.com/package/pi-pet-hn) | 44 | `npm install pi-pet-hn` | Virtual pet that levels up with every tool call + HackerNews scrolling ticker for pi coding agent. |
| 1044 | [@artale/pi-grounded](https://www.npmjs.com/package/@artale/pi-grounded) | 44 | `npm install @artale/pi-grounded` | Evidence-grounded schema discovery. Zero-shot, self-documenting, every decision cited. |
| 1045 | [@teelicht/pi-grepai](https://www.npmjs.com/package/@teelicht/pi-grepai) | 43 | `npm install @teelicht/pi-grepai` | Pi extension package that bridges an installed grepai CLI into Pi slash commands and LLM tools |
| 1046 | [pi-ghostty-notifier](https://www.npmjs.com/package/pi-ghostty-notifier) | 43 | `npm install pi-ghostty-notifier` | Ghostty-first notifications with smart summaries for Pi |
| 1047 | [pi-zenmux](https://www.npmjs.com/package/pi-zenmux) | 43 | `npm install pi-zenmux` | ZenMux provider extension for pi-mono |
| 1048 | [pi-gitlab-duo](https://www.npmjs.com/package/pi-gitlab-duo) | 43 | `npm install pi-gitlab-duo` | GitLab Duo provider extension for pi |
| 1049 | [@sincspecv/pi-chutes](https://www.npmjs.com/package/@sincspecv/pi-chutes) | 43 | `npm install @sincspecv/pi-chutes` | pi extension that adds chutes.ai as a model provider |
| 1050 | [@anthnykr/pi-study-commits](https://www.npmjs.com/package/@anthnykr/pi-study-commits) | 43 | `npm install @anthnykr/pi-study-commits` | Pi extension for selecting recent git commits and injecting their diffs into the conversation. |
| 1051 | [pi-auto-mode-router](https://www.npmjs.com/package/pi-auto-mode-router) | 43 | `npm install pi-auto-mode-router` | Auto Mode Router extension for Pi: route prompts between frontend, logic, and terminal models with optional mid-turn do… |
| 1052 | [@browser-annotations/pi](https://www.npmjs.com/package/@browser-annotations/pi) | 43 | `npm install @browser-annotations/pi` | Select an element, add feedback, and send it to pi. |
| 1053 | [@miclivs/pi-psst](https://www.npmjs.com/package/@miclivs/pi-psst) | 43 | `npm install @miclivs/pi-psst` | Pi extension that injects psst vault secrets into bash and scrubs them from output |
| 1054 | [@0xkobold/pi-autoupdate](https://www.npmjs.com/package/@0xkobold/pi-autoupdate) | 43 | `npm install @0xkobold/pi-autoupdate` | Automatically detect and install pi updates on startup |
| 1055 | [@artale/pi-rewind](https://www.npmjs.com/package/@artale/pi-rewind) | 43 | `npm install @artale/pi-rewind` | Checkpoint and rewind for Pi. Auto-snapshot before edits, /rewind to restore with diff preview. |
| 1056 | [msco-pi-lot](https://www.npmjs.com/package/msco-pi-lot) | 42 | `npm install msco-pi-lot` | Microsoft Copilot provider extension for pi coding agent. |
| 1057 | [@0xkobold/pi-wallet](https://www.npmjs.com/package/@0xkobold/pi-wallet) | 42 | `npm install @0xkobold/pi-wallet` | CDP Agentic Wallet + x402 payments for pi-coding-agent. Zero-setup agent wallets with Base L2 support |
| 1058 | [pi-bash-trim](https://www.npmjs.com/package/pi-bash-trim) | 42 | `npm install pi-bash-trim` | Smart bash output trimming for pi to fit LLM context budgets |
| 1059 | [pi-extension-stt](https://www.npmjs.com/package/pi-extension-stt) | 42 | `npm install pi-extension-stt` | Pi extension package that adds local microphone speech-to-text via faster-whisper. |
| 1060 | [@vaayne/pi-rules](https://www.npmjs.com/package/@vaayne/pi-rules) | 41 | `npm install @vaayne/pi-rules` | Pi extension that scans .claude/rules/ and .agents/rules/ folders for project rules |
| 1061 | [@artale/pi-infra](https://www.npmjs.com/package/@artale/pi-infra) | 41 | `npm install @artale/pi-infra` | Platform engineering audit tool (Kelsey Hightower edition). |
| 1062 | [pi-agent-pack](https://www.npmjs.com/package/pi-agent-pack) | 41 | `npm install pi-agent-pack` | 暂无描述 |
| 1063 | [pi-glitchgate](https://www.npmjs.com/package/pi-glitchgate) | 41 | `npm install pi-glitchgate` | Pi coding agent extension providing access to Glitchgate models via API key authentication |
| 1064 | [@trq/pi-colgrep](https://www.npmjs.com/package/@trq/pi-colgrep) | 41 | `npm install @trq/pi-colgrep` | pi extension that adds a colgrep tool and prioritizes semantic/hybrid ColGrep search |
| 1065 | [@artale/pi-sudoku](https://www.npmjs.com/package/@artale/pi-sudoku) | 41 | `npm install @artale/pi-sudoku` | Classic 9x9 Sudoku puzzle with pencil marks, themes, and stats. |
| 1066 | [@ahkohd/pi-oyo](https://www.npmjs.com/package/@ahkohd/pi-oyo) | 41 | `npm install @ahkohd/pi-oyo` | Pi package providing oyo diff/review commands |
| 1067 | [@lukebarton/pi-de-claude](https://www.npmjs.com/package/@lukebarton/pi-de-claude) | 40 | `npm install @lukebarton/pi-de-claude` | IDE integration for pi with any IDE running a Claude Code plugin-including VS Code, Neovim, IntelliJ IDEA, and other Je… |
| 1068 | [@e9n/pi-github](https://www.npmjs.com/package/@e9n/pi-github) | 40 | `npm install @e9n/pi-github` | GitHub integration for pi — PR management, issue tracking, and review feedback commands |
| 1069 | [pi-ollama-keyring](https://www.npmjs.com/package/pi-ollama-keyring) | 40 | `npm install pi-ollama-keyring` | Ollama cloud provider for pi-coding-agent with multi-key rotation, live model discovery, and persistent key-pool manage… |
| 1070 | [@artale/pi-maze](https://www.npmjs.com/package/@artale/pi-maze) | 40 | `npm install @artale/pi-maze` | Procedural maze generator with BFS solver, themes, and timer. |
| 1071 | [@walterra/pi-graphviz](https://www.npmjs.com/package/@walterra/pi-graphviz) | 40 | `npm install @walterra/pi-graphviz` | Graphviz chart extension for pi coding agent - render DOT diagrams as inline images |
| 1072 | [@tryinget/pi-little-helpers](https://www.npmjs.com/package/@tryinget/pi-little-helpers) | 39 | `npm install @tryinget/pi-little-helpers` | pi extension package for little-helpers workflows in pi |
| 1073 | [pi-mission-control](https://www.npmjs.com/package/pi-mission-control) | 39 | `npm install pi-mission-control` | Visual mission orchestration extension for pi with agent hierarchy and durable state |
| 1074 | [pi-pr-status](https://www.npmjs.com/package/pi-pr-status) | 39 | `npm install pi-pr-status` | A Pi extension that shows the current PR link, CI check status, and unresolved review comments in the footer status bar |
| 1075 | [@0xkobold/pi-erc8004](https://www.npmjs.com/package/@0xkobold/pi-erc8004) | 39 | `npm install @0xkobold/pi-erc8004` | ERC-8004 Protocol for pi-coding-agent. Agent identity, reputation, and discovery on Base L2 |
| 1076 | [pi-vscode-terminal-notification](https://www.npmjs.com/package/pi-vscode-terminal-notification) | 39 | `npm install pi-vscode-terminal-notification` | Pi extension for VS Code terminal notifications when Pi finishes a turn. |
| 1077 | [@anson-no-bug/pi-pet-plus](https://www.npmjs.com/package/@anson-no-bug/pi-pet-plus) | 39 | `npm install @anson-no-bug/pi-pet-plus` | A real-time pet companion for pi with progression, localization, and optional news delivery |
| 1078 | [pi-refactor-loop](https://www.npmjs.com/package/pi-refactor-loop) | 39 | `npm install pi-refactor-loop` | Iterative refactoring pipeline for pi. Runs analyze → refactor → verify cycles with a TUI progress widget, git commit-a… |
| 1079 | [@artale/pi-clipboard](https://www.npmjs.com/package/@artale/pi-clipboard) | 38 | `npm install @artale/pi-clipboard` | Clipboard manager for Pi. Copy/paste with persistent history, search, pin, and GitHub gist creation. |
| 1080 | [pi-2048](https://www.npmjs.com/package/pi-2048) | 38 | `npm install pi-2048` | 2048 sliding tile puzzle for pi coding agent |
| 1081 | [@e9n/pi-vault](https://www.npmjs.com/package/@e9n/pi-vault) | 38 | `npm install @e9n/pi-vault` | Obsidian vault tool and health dashboard for pi |
| 1082 | [@oribish/brainkit](https://www.npmjs.com/package/@oribish/brainkit) | 38 | `npm install @oribish/brainkit` | Second brain extension for pi - capture, organize, and retrieve knowledge with PARA method |
| 1083 | [pi-notifier](https://www.npmjs.com/package/pi-notifier) | 38 | `npm install pi-notifier` | Lightweight macOS desktop notifications for pi when waiting for input or decision. |
| 1084 | [@ujjwalgrover/pi-catppuccin](https://www.npmjs.com/package/@ujjwalgrover/pi-catppuccin) | 38 | `npm install @ujjwalgrover/pi-catppuccin` | Beautiful Catppuccin themes for Pi Coding Agent |
| 1085 | [pi-auth-profiles](https://www.npmjs.com/package/pi-auth-profiles) | 38 | `npm install pi-auth-profiles` | Auth profile switching for pi — save and switch between named credential profiles via slash commands |
| 1086 | [pi-non-interactive](https://www.npmjs.com/package/pi-non-interactive) | 37 | `npm install pi-non-interactive` | Prevent agent hangs on interactive commands — sets GIT_EDITOR=true, PAGER=cat, etc. for all bash executions |
| 1087 | [@aaronmaturen/pi-config](https://www.npmjs.com/package/@aaronmaturen/pi-config) | 37 | `npm install @aaronmaturen/pi-config` | Professional development workflow skills for pi — JIRA integration, PR review, and investigation tools |
| 1088 | [@artale/pi-json](https://www.npmjs.com/package/@artale/pi-json) | 37 | `npm install @artale/pi-json` | Interactive JSON viewer, query, and formatter for pi. |
| 1089 | [@gugu910/pi-slack-bridge](https://www.npmjs.com/package/@gugu910/pi-slack-bridge) | 36 | `npm install @gugu910/pi-slack-bridge` | Slack assistant integration for pi (Pinet) — multi-agent broker, thread routing, and inbox tools |
| 1090 | [@georgebashi/pi-codemode](https://www.npmjs.com/package/@georgebashi/pi-codemode) | 36 | `npm install @georgebashi/pi-codemode` | Code Mode extension for Pi — execute tools via TypeScript code, with type-checking, shell via zx, and MCP integration |
| 1091 | [pi-cmdr](https://www.npmjs.com/package/pi-cmdr) | 36 | `npm install pi-cmdr` | Command picker extension for the Pi coding agent. |
| 1092 | [@artale/pi-db](https://www.npmjs.com/package/@artale/pi-db) | 36 | `npm install @artale/pi-db` | Local database with SQL-like queries. JSON-backed tables with where clauses, schema, export. |
| 1093 | [@edmundmiller/pi-dcp](https://www.npmjs.com/package/@edmundmiller/pi-dcp) | 36 | `npm install @edmundmiller/pi-dcp` | Dynamic Context Pruning extension for pi - intelligently removes obsolete messages to optimize token usage |
| 1094 | [@artale/pi-gate](https://www.npmjs.com/package/@artale/pi-gate) | 36 | `npm install @artale/pi-gate` | Conditional execution gates for Pi. Hold, approve, or block tool calls based on rules. Safety layer for dangerous opera… |
| 1095 | [pi-mdc-rules](https://www.npmjs.com/package/pi-mdc-rules) | 36 | `npm install pi-mdc-rules` | MDC rules extension for pi-coding-agent - loads and enforces rules from Markdown files |
| 1096 | [@ssweens/pi-qq](https://www.npmjs.com/package/@ssweens/pi-qq) | 36 | `npm install @ssweens/pi-qq` | Quick questions with /qq or /btw — ask the LLM about the current session without affecting the main conversation |
| 1097 | [@cmcconomy/pi-qwen-tool-parser](https://www.npmjs.com/package/@cmcconomy/pi-qwen-tool-parser) | 36 | `npm install @cmcconomy/pi-qwen-tool-parser` | A pi-mono extension that parses Qwen XML formatted tool calls and provides a wrapper tool for execution |
| 1098 | [@carter-mcalister/pi-worktrunk](https://www.npmjs.com/package/@carter-mcalister/pi-worktrunk) | 36 | `npm install @carter-mcalister/pi-worktrunk` | Worktrunk-backed worktree extension for Pi Coding Agent |
| 1099 | [@artale/pi-rag](https://www.npmjs.com/package/@artale/pi-rag) | 36 | `npm install @artale/pi-rag` | Local RAG pipeline. BM25 keyword search over indexed files. Zero cloud, zero deps, fully offline. |
| 1100 | [pi-codex-profile](https://www.npmjs.com/package/pi-codex-profile) | 35 | `npm install pi-codex-profile` | Codex profile extension for pi coding agent (Codex model presets + apply_patch tool) |
| 1101 | [@clankie/json-ui-render](https://www.npmjs.com/package/@clankie/json-ui-render) | 35 | `npm install @clankie/json-ui-render` | Render structured chat UI in clankie via details.renderHint and details.uiSpec |
| 1102 | [@4meta5/pi-shell-cli](https://www.npmjs.com/package/@4meta5/pi-shell-cli) | 35 | `npm install @4meta5/pi-shell-cli` | CLI for generating reproducible pi project instances from pinned manifests. |
| 1103 | [@ssweens/pi-huddle](https://www.npmjs.com/package/@ssweens/pi-huddle) | 35 | `npm install @ssweens/pi-huddle` | Huddle mode for pi - safe exploration and structured elicitation before execution |
| 1104 | [pi-flow-enforcer](https://www.npmjs.com/package/pi-flow-enforcer) | 35 | `npm install pi-flow-enforcer` | Enforces a strict workflow in pi.dev sessions: |
| 1105 | [pi-terminal](https://www.npmjs.com/package/pi-terminal) | 35 | `npm install pi-terminal` | Adds /terminal and /t commands to run shell commands in the current working directory and display output inline — with… |
| 1106 | [psm-bridge](https://www.npmjs.com/package/psm-bridge) | 35 | `npm install psm-bridge` | Bridge Pi agent sessions to Pi Session Manager — session sync, tagging, search, and live mode. |
| 1107 | [pi-pirs](https://www.npmjs.com/package/pi-pirs) | 34 | `npm install pi-pirs` | Pi extension that tracks bash tool token usage with stats, grouping, and export |
| 1108 | [pi-safety-destructive-commands](https://www.npmjs.com/package/pi-safety-destructive-commands) | 34 | `npm install pi-safety-destructive-commands` | Intercepts dangerous bash commands (dd, mkfs, rm -rf /, fork bombs, iptables flush, shutdown…) and hard-blocks or promp… |
| 1109 | [@e9n/pi-td](https://www.npmjs.com/package/@e9n/pi-td) | 34 | `npm install @e9n/pi-td` | Task management extension for pi — issues, sessions, handoffs, and web dashboard |
| 1110 | [pi-file-change-reminder](https://www.npmjs.com/package/pi-file-change-reminder) | 34 | `npm install pi-file-change-reminder` | Pi extension that injects reminder messages when specific files are modified. |
| 1111 | [pi-sync-config](https://www.npmjs.com/package/pi-sync-config) | 34 | `npm install pi-sync-config` | Sync your pi config (settings, extensions, themes, skills, prompts) to a remote git repository |
| 1112 | [@artale/pi-doc](https://www.npmjs.com/package/@artale/pi-doc) | 34 | `npm install @artale/pi-doc` | Documentation generator. Scan exports, check doc coverage, scaffold READMEs, generate API reference. |
| 1113 | [pi-no-soft-cursor](https://www.npmjs.com/package/pi-no-soft-cursor) | 33 | `npm install pi-no-soft-cursor` | Remove the editor's reverse-video soft cursor · from yapp |
| 1114 | [pi-loop-breaker](https://www.npmjs.com/package/pi-loop-breaker) | 33 | `npm install pi-loop-breaker` | Pi extension that aborts repeated failing tool loops |
| 1115 | [@ssweens/pi-dynamic-models](https://www.npmjs.com/package/@ssweens/pi-dynamic-models) | 33 | `npm install @ssweens/pi-dynamic-models` | Dynamic model discovery for Pi coding agent — fetches models from any configured API server at startup |
| 1116 | [pi-fast-apply](https://www.npmjs.com/package/pi-fast-apply) | 33 | `npm install pi-fast-apply` | Morph Fast Apply extension package for Pi |
| 1117 | [@mmcook/pi-brainmaxx](https://www.npmjs.com/package/@mmcook/pi-brainmaxx) | 32 | `npm install @mmcook/pi-brainmaxx` | A project brain for Pi: repo-local memory, reflection, and session-history rumination |
| 1118 | [@artale/pi-focus](https://www.npmjs.com/package/@artale/pi-focus) | 32 | `npm install @artale/pi-focus` | Focus timer with productivity metrics for Pi. Tracks tok/min during focus vs break. Data-driven productivity. |
| 1119 | [@artale/pi-datasci](https://www.npmjs.com/package/@artale/pi-datasci) | 32 | `npm install @artale/pi-datasci` | Data science toolkit. Profile datasets, correlation matrices, outlier detection, statistical summaries. CSV/JSON/JSONL… |
| 1120 | [@e9n/pi-calendar](https://www.npmjs.com/package/@e9n/pi-calendar) | 31 | `npm install @e9n/pi-calendar` | Calendar tool, web dashboard, and reminders for pi |
| 1121 | [pi-zellij-tab-namer](https://www.npmjs.com/package/pi-zellij-tab-namer) | 31 | `npm install pi-zellij-tab-namer` | Automatically renames the active Zellij tab to a short summary of the conversation after each agent turn, using a fast… |
| 1122 | [pi-agui](https://www.npmjs.com/package/pi-agui) | 31 | `npm install pi-agui` | Scaffold an AG-UI + Pi app from the official template |
| 1123 | [pi-safety-git-operations](https://www.npmjs.com/package/pi-safety-git-operations) | 31 | `npm install pi-safety-git-operations` | Guards destructive git and GitHub/GitLab CLI operations with severity-based confirmation dialogs and session memory. Co… |
| 1124 | [pi-open-browser](https://www.npmjs.com/package/pi-open-browser) | 31 | `npm install pi-open-browser` | A pi extension to open URLs in the user's default browser |
| 1125 | [@elianiva/pi-ckers](https://www.npmjs.com/package/@elianiva/pi-ckers) | 31 | `npm install @elianiva/pi-ckers` | Modular namespace pickers for pi: @file:, @git:, @jj: |
| 1126 | [pi-coordinator](https://www.npmjs.com/package/pi-coordinator) | 31 | `npm install pi-coordinator` | Four-phase workflow: Research → Synthesis → Implementation → Verification, based on Claude Code coordinator feature pre… |
| 1127 | [@artale/pi-health](https://www.npmjs.com/package/@artale/pi-health) | 30 | `npm install @artale/pi-health` | Session health with error diagnosis for Pi. Detects error patterns, warns on degradation, tracks tool reliability. |
| 1128 | [@0xkobold/pi-alerts](https://www.npmjs.com/package/@0xkobold/pi-alerts) | 30 | `npm install @0xkobold/pi-alerts` | Customizable chimes and notifications for pi |
| 1129 | [@artale/pi-evolve](https://www.npmjs.com/package/@artale/pi-evolve) | 30 | `npm install @artale/pi-evolve` | Evolutionary self-improvement for Pi. AlphaEvolve-inspired mutation, evaluation, and selection of prompts, skills, and… |
| 1130 | [@artale/pi-caffeinate](https://www.npmjs.com/package/@artale/pi-caffeinate) | 30 | `npm install @artale/pi-caffeinate` | Keep your machine awake during long Pi sessions. Prevents sleep/screen lock on macOS, Windows, Linux. |
| 1131 | [@artale/pi-lean](https://www.npmjs.com/package/@artale/pi-lean) | 29 | `npm install @artale/pi-lean` | Lean tool output for Pi. Auto-truncate verbose bash output, collapse npm/pip noise, keep errors and results visible. |
| 1132 | [@juanibiapina/pi-files](https://www.npmjs.com/package/@juanibiapina/pi-files) | 29 | `npm install @juanibiapina/pi-files` | Pi extension that tracks files read/written/edited by the agent |
| 1133 | [@ws-rush/conductor](https://www.npmjs.com/package/@ws-rush/conductor) | 29 | `npm install @ws-rush/conductor` | Context-Driven Development framework. Measure twice, code once. |
| 1134 | [@artale/pi-serial](https://www.npmjs.com/package/@artale/pi-serial) | 29 | `npm install @artale/pi-serial` | Hardware/IoT interface. List serial ports, identify devices (Arduino, ESP32, 3D printers), send/receive data, monitor s… |
| 1135 | [@artale/pi-statusbar](https://www.npmjs.com/package/@artale/pi-statusbar) | 29 | `npm install @artale/pi-statusbar` | Custom status bar for Pi. Shows context %, tokens, cost estimate, git branch, and uptime in the footer. |
| 1136 | [@artale/pi-loop](https://www.npmjs.com/package/@artale/pi-loop) | 29 | `npm install @artale/pi-loop` | Agent loop for Pi. Goal-driven, fixed-pass, and pipeline loops with [D]/[N] gates. Inspired by pi-stories Blueprint Eng… |
| 1137 | [pi-cc-router](https://www.npmjs.com/package/pi-cc-router) | 29 | `npm install pi-cc-router` | Pi coding agent extension that routes LLM calls through Claude Code CLI |
| 1138 | [@carter-mcalister/pi-mise-toolchain](https://www.npmjs.com/package/@carter-mcalister/pi-mise-toolchain) | 29 | `npm install @carter-mcalister/pi-mise-toolchain` | Mise-driven toolchain enforcement for Pi |
| 1139 | [pi-psst](https://www.npmjs.com/package/pi-psst) | 29 | `npm install pi-psst` | Ephemeral side questions for pi — ask without cluttering your conversation history |
| 1140 | [@gugu910/pi-slack-api](https://www.npmjs.com/package/@gugu910/pi-slack-api) | 29 | `npm install @gugu910/pi-slack-api` | Typed Slack Web API client and CLI generated from Slack's OpenAPI spec |
| 1141 | [pi-threads](https://www.npmjs.com/package/pi-threads) | 28 | `npm install pi-threads` | Pi extension for searching and reading past conversation threads with ripgrep-powered search |
| 1142 | [@elwinliu/pi-neapple](https://www.npmjs.com/package/@elwinliu/pi-neapple) | 28 | `npm install @elwinliu/pi-neapple` | Custom input box with closed rectangular border |
| 1143 | [pi-relay](https://www.npmjs.com/package/pi-relay) | 28 | `npm install pi-relay` | Discord bridge extension for pi — route messages, spawn sessions, stream output |
| 1144 | [@brain0pia/pi-extension-times](https://www.npmjs.com/package/@brain0pia/pi-extension-times) | 28 | `npm install @brain0pia/pi-extension-times` | Profile Pi extension startup time, inspect slow extensions, and guide safe performance optimizations. |
| 1145 | [@artale/pi-stash](https://www.npmjs.com/package/@artale/pi-stash) | 28 | `npm install @artale/pi-stash` | Prompt stash for Pi. Save, list, and restore prompt drafts. Like git stash for your prompts. |
| 1146 | [pi-zed-shift-enter](https://www.npmjs.com/package/pi-zed-shift-enter) | 28 | `npm install pi-zed-shift-enter` | Fixes Shift+Enter not creating newlines in pi when running inside Zed's terminal |
| 1147 | [@artale/pi-api](https://www.npmjs.com/package/@artale/pi-api) | 28 | `npm install @artale/pi-api` | API development toolkit. Route scanning (Express/Next/Flask/FastAPI), endpoint testing, OpenAPI spec generation. |
| 1148 | [@artale/pi-cron](https://www.npmjs.com/package/@artale/pi-cron) | 28 | `npm install @artale/pi-cron` | Task scheduling and reminders. Cron-like scheduling for AI agents with persistent jobs. |
| 1149 | [@q.roy/pi-remote](https://www.npmjs.com/package/@q.roy/pi-remote) | 27 | `npm install @q.roy/pi-remote` | Remote terminal access for pi via WebSocket and browser |
| 1150 | [pi-ghcp-headers](https://www.npmjs.com/package/pi-ghcp-headers) | 27 | `npm install pi-ghcp-headers` | Pi extension to customize GitHub Copilot X-Initiator header behavior |
| 1151 | [pi-editor](https://www.npmjs.com/package/pi-editor) | 27 | `npm install pi-editor` | Pi extension to open files in your preferred editor ($VISUAL / $EDITOR) |
| 1152 | [@hjanuschka/pi-nanny](https://www.npmjs.com/package/@hjanuschka/pi-nanny) | 26 | `npm install @hjanuschka/pi-nanny` | Parental control extension for Pi - helps you go to bed instead of having 47 creative ideas at 3 AM |
| 1153 | [pi-linear-worktree](https://www.npmjs.com/package/pi-linear-worktree) | 26 | `npm install pi-linear-worktree` | Pi extension that fetches Linear issues and creates git worktrees to solve them |
| 1154 | [pi-minesweeper](https://www.npmjs.com/package/pi-minesweeper) | 26 | `npm install pi-minesweeper` | Minesweeper for pi coding agent — classic mine-clearing puzzle |
| 1155 | [pi-which-key](https://www.npmjs.com/package/pi-which-key) | 26 | `npm install pi-which-key` | Searchable keybinding cheatsheet panel for pi (Ctrl+/ or /which-key) |
| 1156 | [pi-amp](https://www.npmjs.com/package/pi-amp) | 26 | `npm install pi-amp` | Retro CLI music player for pi — YouTube streaming, EQ, and an AI DJ |
| 1157 | [wallhaven-random-pi-extension](https://www.npmjs.com/package/wallhaven-random-pi-extension) | 25 | `npm install wallhaven-random-pi-extension` | Wallhaven random wallpaper extension for pi |
| 1158 | [@0xkobold/pi-cursor](https://www.npmjs.com/package/@0xkobold/pi-cursor) | 25 | `npm install @0xkobold/pi-cursor` | pi extension for Cursor AI agent via ACP protocol |
| 1159 | [tasty-pi](https://www.npmjs.com/package/tasty-pi) | 25 | `npm install tasty-pi` | Tasty Pi: a Pi package with custom extensions, skills, and themes. |
| 1160 | [@ifiokjr/oh-pi-ant-colony](https://www.npmjs.com/package/@ifiokjr/oh-pi-ant-colony) | 25 | `npm install @ifiokjr/oh-pi-ant-colony` | Autonomous multi-agent swarm extension for pi — adaptive concurrency, pheromone communication. |
| 1161 | [pi-readline-search](https://www.npmjs.com/package/pi-readline-search) | 25 | `npm install pi-readline-search` | Pi extension for GNU Readline-style reverse search on Ctrl+R |
| 1162 | [@gordonb/pi-notational](https://www.npmjs.com/package/@gordonb/pi-notational) | 24 | `npm install @gordonb/pi-notational` | Notational Velocity for Pi coding agent |
| 1163 | [pi-xurl](https://www.npmjs.com/package/pi-xurl) | 24 | `npm install pi-xurl` | Cross-agent thread reader — resolve agents:// URIs for Amp, Codex, Claude, Gemini, Pi, OpenCode |
| 1164 | [@chrisbielinski/pi-searchxng](https://www.npmjs.com/package/@chrisbielinski/pi-searchxng) | 24 | `npm install @chrisbielinski/pi-searchxng` | Pi package exposing the searchxng CLI as a tool. |
| 1165 | [pi-cryptex](https://www.npmjs.com/package/pi-cryptex) | 24 | `npm install pi-cryptex` | Pi extension inspired by fastlane-plugin-cryptex for encrypted project credentials. |
| 1166 | [git-metadata](https://www.npmjs.com/package/git-metadata) | 24 | `npm install git-metadata` | Pi extension that provides git repository metadata — branch, remotes, commits, tags, status, and contributors |
| 1167 | [@datspike/pi-inline-slash-extension](https://www.npmjs.com/package/@datspike/pi-inline-slash-extension) | 24 | `npm install @datspike/pi-inline-slash-extension` | Pi extension that adds inline slash autocomplete and absolute-path submit bypass without forking core. |
| 1168 | [@artale/pi-odu](https://www.npmjs.com/package/@artale/pi-odu) | 23 | `npm install @artale/pi-odu` | Odu pattern engine for Pi. 256-state binary classifier based on the Ifa system. Read 8 channels, classify, act. |
| 1169 | [@artale/pi-builder](https://www.npmjs.com/package/@artale/pi-builder) | 23 | `npm install @artale/pi-builder` | Extension builder for Pi. Scaffold, build, test, and publish Pi extensions from a single command. The tool that built 8… |
| 1170 | [@artale/pi-migrate](https://www.npmjs.com/package/@artale/pi-migrate) | 23 | `npm install @artale/pi-migrate` | Code migration and codemods. Detect outdated patterns, check dependencies, generate migration plans. |
| 1171 | [pi-nudge](https://www.npmjs.com/package/pi-nudge) | 23 | `npm install pi-nudge` | Native terminal notifications for pi. |
| 1172 | [pi-search-agent](https://www.npmjs.com/package/pi-search-agent) | 22 | `npm install pi-search-agent` | Semantic codebase search with sub-agent processing |
| 1173 | [@e9n/pi-webnav](https://www.npmjs.com/package/@e9n/pi-webnav) | 22 | `npm install @e9n/pi-webnav` | Unified navigation shell for pi-webserver — wraps all mounts in a shared nav layout with iframe routing |
| 1174 | [@victor-software-house/pi-tmux](https://www.npmjs.com/package/@victor-software-house/pi-tmux) | 22 | `npm install @victor-software-house/pi-tmux` | Pi coding agent extension: tmux session management per project |
| 1175 | [pi-branch-ask](https://www.npmjs.com/package/pi-branch-ask) | 22 | `npm install pi-branch-ask` | Interactive ask tool for pi with branching questionnaire support |
| 1176 | [@artale/pi-perf](https://www.npmjs.com/package/@artale/pi-perf) | 22 | `npm install @artale/pi-perf` | Performance profiling. Time commands, benchmark with statistics, Node.js profiling. |
| 1177 | [@diegopetrucci/pi-compact-bash](https://www.npmjs.com/package/@diegopetrucci/pi-compact-bash) | 21 | `npm install @diegopetrucci/pi-compact-bash` | A pi extension that renders collapsed bash tool output as a one-line preview. |
| 1178 | [@marcfargas/go-holded](https://www.npmjs.com/package/@marcfargas/go-holded) | 21 | `npm install @marcfargas/go-holded` | Holded API made easy — invoicing, CRM, accounting, projects, team. Library + CLI for AI agents and humans. |
| 1179 | [pi-safety-path-protection](https://www.npmjs.com/package/pi-safety-path-protection) | 21 | `npm install pi-safety-path-protection` | Protects sensitive paths (.env files, .git internals, node_modules, SSH keys) from unauthorized reads and writes across… |
| 1180 | [@jasonish/pi-default-model](https://www.npmjs.com/package/@jasonish/pi-default-model) | 21 | `npm install @jasonish/pi-default-model` | Set a **real** default model |
| 1181 | [pi-slot-machine](https://www.npmjs.com/package/pi-slot-machine) | 21 | `npm install pi-slot-machine` | A pi extension that spins a slot machine overlay every time you send a prompt. Hit the jackpot for a fireworks explosio… |
| 1182 | [@artale/pi-git-hooks](https://www.npmjs.com/package/@artale/pi-git-hooks) | 21 | `npm install @artale/pi-git-hooks` | Git hook manager. Install pre-commit, commit-msg, pre-push hooks from templates. |
| 1183 | [@gswangg/duncan-pi](https://www.npmjs.com/package/@gswangg/duncan-pi) | 21 | `npm install @gswangg/duncan-pi` | Session memory for pi — query dormant sessions, hand off context across session boundaries |
| 1184 | [@volh/pi-network-monitor](https://www.npmjs.com/package/@volh/pi-network-monitor) | 21 | `npm install @volh/pi-network-monitor` | Network request monitor for pi agent — live overlay showing all HTTP traffic |
| 1185 | [@jademind/pi-tools](https://www.npmjs.com/package/@jademind/pi-tools) | 20 | `npm install @jademind/pi-tools` | pi extension that registers additional CLI tools from local/global config files |
| 1186 | [pi-copy-last-response-extension](https://www.npmjs.com/package/pi-copy-last-response-extension) | 20 | `npm install pi-copy-last-response-extension` | pi extension to copy the last assistant response |
| 1187 | [@e9n/pi-supabase](https://www.npmjs.com/package/@e9n/pi-supabase) | 20 | `npm install @e9n/pi-supabase` | Supabase integration for pi — read-only queries, table subscriptions, and pi-channels notifications |
| 1188 | [@patleeman/pi-boy](https://www.npmjs.com/package/@patleeman/pi-boy) | 20 | `npm install @patleeman/pi-boy` | pi-boy: embedded Game Boy emulator inside pi |
| 1189 | [@artale/pi-snapshot](https://www.npmjs.com/package/@artale/pi-snapshot) | 20 | `npm install @artale/pi-snapshot` | Session snapshot for Pi. Export conversation as markdown, JSON, or HTML. Share sessions, create reports. |
| 1190 | [video-paste](https://www.npmjs.com/package/video-paste) | 20 | `npm install video-paste` | Pi extension that adds video paste support and video-aware inspection through the read tool. |
| 1191 | [pi-watch](https://www.npmjs.com/package/pi-watch) | 20 | `npm install pi-watch` | Pi extension that watches for AI comments in your code and sends them to the agent |
| 1192 | [@yofriadi/pi-hashline-edit](https://www.npmjs.com/package/@yofriadi/pi-hashline-edit) | 19 | `npm install @yofriadi/pi-hashline-edit` | ```bash pi install git:github.com/yofriadi/pi-extensions@hashline-edit-v<version> ``` |
| 1193 | [pi-wandb](https://www.npmjs.com/package/pi-wandb) | 19 | `npm install pi-wandb` | Weights & Biases run tracking and metric history tools for pi |
| 1194 | [@elianiva/pi-starship](https://www.npmjs.com/package/@elianiva/pi-starship) | 18 | `npm install @elianiva/pi-starship` | Starship-style prompt for pi |
| 1195 | [pi-spell-check](https://www.npmjs.com/package/pi-spell-check) | 18 | `npm install pi-spell-check` | Spell-check extension for pi coding agent. Press Ctrl+Shift+S to fix spelling and grammar in the editor. |
| 1196 | [@artale/pi-picker](https://www.npmjs.com/package/@artale/pi-picker) | 17 | `npm install @artale/pi-picker` | TUI picker for Pi. Interactive fuzzy selectors for tools, commands, sessions, and files with keyboard navigation. |
| 1197 | [@artale/pi-refactor](https://www.npmjs.com/package/@artale/pi-refactor) | 17 | `npm install @artale/pi-refactor` | Iterative refactoring for Pi. Analyze → refactor → verify cycles with git commits per pass. |
| 1198 | [pi-dedumbify](https://www.npmjs.com/package/pi-dedumbify) | 17 | `npm install pi-dedumbify` | Pi extension for executable spaced repetition with FSRS scheduling |
| 1199 | [@hemocode/pi-model-selector](https://www.npmjs.com/package/@hemocode/pi-model-selector) | 17 | `npm install @hemocode/pi-model-selector` | A Pi extension that automatically selects the best model based on remaining usage quotas across various providers (Clau… |
| 1200 | [pi-libsecret](https://www.npmjs.com/package/pi-libsecret) | 16 | `npm install pi-libsecret` | Load API keys with secret-tool |
| 1201 | [@e9n/pi-npm](https://www.npmjs.com/package/@e9n/pi-npm) | 16 | `npm install @e9n/pi-npm` | NPM workflow extension for pi — run common npm commands including publish |
| 1202 | [@hyperprior/dissolution](https://www.npmjs.com/package/@hyperprior/dissolution) | 16 | `npm install @hyperprior/dissolution` | pi extension that wires dissolution semantic search into agent tools |
| 1203 | [@atomic-ai/msco-pi-lot](https://www.npmjs.com/package/@atomic-ai/msco-pi-lot) | 16 | `npm install @atomic-ai/msco-pi-lot` | Microsoft Copilot provider extension for pi coding agent. |
| 1204 | [@artale/pi-i18n](https://www.npmjs.com/package/@artale/pi-i18n) | 16 | `npm install @artale/pi-i18n` | i18n/localization toolkit. Scan translations, find missing keys, validate formats, extract strings. Supports JSON, YAML… |
| 1205 | [@tryinget/pi-trigger-adapter](https://www.npmjs.com/package/@tryinget/pi-trigger-adapter) | 15 | `npm install @tryinget/pi-trigger-adapter` | Trigger broker and picker registration adapter for pi-interaction runtime |
| 1206 | [@yofriadi/pi-commit](https://www.npmjs.com/package/@yofriadi/pi-commit) | 15 | `npm install @yofriadi/pi-commit` | AI-powered conventional commit extension for pi |
| 1207 | [@mjakl/pi-ooc](https://www.npmjs.com/package/@mjakl/pi-ooc) | 15 | `npm install @mjakl/pi-ooc` | Pi extension that adds /ooc for out-of-context side questions using the current session context. |
| 1208 | [pi-safety-network-exfiltration](https://www.npmjs.com/package/pi-safety-network-exfiltration) | 15 | `npm install pi-safety-network-exfiltration` | Blocks data exfiltration, remote code execution via piped downloads, secrets embedded in commands, and unauthorized net… |
| 1209 | [@yevhen.b/pi-macos-theme-sync](https://www.npmjs.com/package/@yevhen.b/pi-macos-theme-sync) | 14 | `npm install @yevhen.b/pi-macos-theme-sync` | Sync Pi's theme with macOS appearance changes. |
| 1210 | [pi-wc3-sounds](https://www.npmjs.com/package/pi-wc3-sounds) | 14 | `npm install pi-wc3-sounds` | Warcraft III voice lines for pi agent events. Orc Peon for Claude, Human Peasant for Codex. |
| 1211 | [@tryinget/pi-interaction](https://www.npmjs.com/package/@tryinget/pi-interaction) | 13 | `npm install @tryinget/pi-interaction` | Umbrella interaction-runtime extension package for pi |
| 1212 | [@pi-orca/tasks](https://www.npmjs.com/package/@pi-orca/tasks) | 12 | `npm install @pi-orca/tasks` | File-backed task DAG with locking |
| 1213 | [@yevhen.b/pi-preflight](https://www.npmjs.com/package/@yevhen.b/pi-preflight) | 12 | `npm install @yevhen.b/pi-preflight` | Tool-call approvals and policy rules for Pi. |
| 1214 | [@fnnm/pi-raw-paste](https://www.npmjs.com/package/@fnnm/pi-raw-paste) | 12 | `npm install @fnnm/pi-raw-paste` | One-shot raw paste support for Pi (/paste). |
| 1215 | [@pi-orca/models](https://www.npmjs.com/package/@pi-orca/models) | 11 | `npm install @pi-orca/models` | Model alias management |
| 1216 | [@tryinget/pi-editor-registry](https://www.npmjs.com/package/@tryinget/pi-editor-registry) | 11 | `npm install @tryinget/pi-editor-registry` | Editor ownership and mount primitives for pi-interaction runtime |
| 1217 | [repeat-pi](https://www.npmjs.com/package/repeat-pi) | 11 | `npm install repeat-pi` | Repeat tool calls in pi-coding-agent |
| 1218 | [@pi-orca/cleanup](https://www.npmjs.com/package/@pi-orca/cleanup) | 10 | `npm install @pi-orca/cleanup` | Retention sweeps and orphan detection |
| 1219 | [@pi-orca/messages](https://www.npmjs.com/package/@pi-orca/messages) | 10 | `npm install @pi-orca/messages` | Inter-session messaging with inbox delivery |
| 1220 | [@tryinget/pi-interaction-kit](https://www.npmjs.com/package/@tryinget/pi-interaction-kit) | 10 | `npm install @tryinget/pi-interaction-kit` | Shared interaction primitives for pi-interaction runtime packages |
| 1221 | [@lydst/pi-webfetch](https://www.npmjs.com/package/@lydst/pi-webfetch) | 9 | `npm install @lydst/pi-webfetch` | A pi package that fetches public web pages for AI agents. |
| 1222 | [@pi-orca/agents](https://www.npmjs.com/package/@pi-orca/agents) | 3 | `npm install @pi-orca/agents` | Subagent lifecycle via SDK/RPC/tmux |
| 1223 | [@pi-orca/profiles](https://www.npmjs.com/package/@pi-orca/profiles) | 3 | `npm install @pi-orca/profiles` | Named extension sets with CLI switcher |
| 1224 | [@agnishc/edb-compact-tools](https://www.npmjs.com/package/@agnishc/edb-compact-tools) | 0 | `npm install @agnishc/edb-compact-tools` | Pi extension: compact outlined tool-call renderers with ctrl+o expansion |
| 1225 | [@anfilat/bit-by-bit](https://www.npmjs.com/package/@anfilat/bit-by-bit) | 0 | `npm install @anfilat/bit-by-bit` | Step-by-step task management for Pi — splits LLM output into isolated task branches |
| 1226 | [@arnavpadwal/pi-backup](https://www.npmjs.com/package/@arnavpadwal/pi-backup) | 0 | `npm install @arnavpadwal/pi-backup` | Backup and restore your entire pi configuration — shareable zip, excludes API keys |
| 1227 | [@arvoretech/hub-pi](https://www.npmjs.com/package/@arvoretech/hub-pi) | 0 | `npm install @arvoretech/hub-pi` | Pi runtime package for hub.yaml workspaces — interprets config at runtime with no static generation |
| 1228 | [@atlas.labs/pi-goal](https://www.npmjs.com/package/@atlas.labs/pi-goal) | 0 | `npm install @atlas.labs/pi-goal` | Persistent goal tracking for Pi with /tree-compatible state, budgets, reusable prompts, and churn monitoring. |
| 1229 | [@aveltens/pi-kit-software-development](https://www.npmjs.com/package/@aveltens/pi-kit-software-development) | 0 | `npm install @aveltens/pi-kit-software-development` | Pi Coding Agent skills and extensions for software development |
| 1230 | [@blackbelt-technology/pi-flows](https://www.npmjs.com/package/@blackbelt-technology/pi-flows) | 0 | `npm install @blackbelt-technology/pi-flows` | Flow engine, dashboard, and orchestration extensions for pi |
| 1231 | [@brianmichel/pi-awake](https://www.npmjs.com/package/@brianmichel/pi-awake) | 0 | `npm install @brianmichel/pi-awake` | Pi extension package that keeps macOS awake while pi is actively working. |
| 1232 | [@burneikis/pi-copy-code](https://www.npmjs.com/package/@burneikis/pi-copy-code) | 0 | `npm install @burneikis/pi-copy-code` | Pi coding-agent extension that copies fenced code blocks from recent assistant (and tool result) messages into the syst… |
| 1233 | [@burneikis/pi-sticky](https://www.npmjs.com/package/@burneikis/pi-sticky) | 0 | `npm install @burneikis/pi-sticky` | Keeps the chat input and footer pinned to the bottom of the terminal while you scroll — works alongside pi-vim, pi-stat… |
| 1234 | [@bytesbrains/pi-agent-supervisor](https://www.npmjs.com/package/@bytesbrains/pi-agent-supervisor) | 0 | `npm install @bytesbrains/pi-agent-supervisor` | Runtime safety net for AI agents — blocks dangerous commands, protects files, enforces rate limits, and records session… |
| 1235 | [@bytesbrains/pi-auditor](https://www.npmjs.com/package/@bytesbrains/pi-auditor) | 0 | `npm install @bytesbrains/pi-auditor` | Audit repo files for RAG digestibility — find god files, measure chunk fragmentation, and generate split suggestions. |
| 1236 | [@bytesbrains/pi-docker-logs](https://www.npmjs.com/package/@bytesbrains/pi-docker-logs) | 0 | `npm install @bytesbrains/pi-docker-logs` | Docker log gateway for pi agents — tail logs from Docker containers in the wrok.in AI Factory via the docker CLI. |
| 1237 | [@bytesbrains/pi-loki-gate](https://www.npmjs.com/package/@bytesbrains/pi-loki-gate) | 0 | `npm install @bytesbrains/pi-loki-gate` | Loki log gateway for pi agents — query Grafana Loki for container/job/worker logs from the wrok.in AI Factory. |
| 1238 | [@capyup/pi-jobs](https://www.npmjs.com/package/@capyup/pi-jobs) | 0 | `npm install @capyup/pi-jobs` | Supervised job runtime extension for pi with isolated workers, audit artifacts, and retry-aware orchestration. |
| 1239 | [@capyup/pi-rtk](https://www.npmjs.com/package/@capyup/pi-rtk) | 0 | `npm install @capyup/pi-rtk` | pi integration for rtk (Rust Token Killer) — transparently rewrites bash tool calls to rtk equivalents for 60-90% token… |
| 1240 | [@codella/pi-plan-mode](https://www.npmjs.com/package/@codella/pi-plan-mode) | 0 | `npm install @codella/pi-plan-mode` | Approval-gated read-only plan mode extension for Pi. |
| 1241 | [@davecodes/pi-dcp](https://www.npmjs.com/package/@davecodes/pi-dcp) | 0 | `npm install @davecodes/pi-dcp` | Dynamic Context Pruning for Pi — port of opencode-dcp. Deduplication, error-input purge, and an LLM-callable compress t… |
| 1242 | [@davehardy20/pi-ast-grep-tools](https://www.npmjs.com/package/@davehardy20/pi-ast-grep-tools) | 0 | `npm install @davehardy20/pi-ast-grep-tools` | Pi package for structural code search and replace using AST matching via ast-grep. |
| 1243 | [@davehardy20/pi-hashline-tools](https://www.npmjs.com/package/@davehardy20/pi-hashline-tools) | 0 | `npm install @davehardy20/pi-hashline-tools` | Pi package for hash-anchored file reading and editing (read_hashed / hashline_edit). |
| 1244 | [@davehardy20/pi-mulch](https://www.npmjs.com/package/@davehardy20/pi-mulch) | 0 | `npm install @davehardy20/pi-mulch` | Pi package that integrates Mulch priming, search, draft review, and session-aware learning workflows. |
| 1245 | [@davehardy20/pi-safe-tools](https://www.npmjs.com/package/@davehardy20/pi-safe-tools) | 0 | `npm install @davehardy20/pi-safe-tools` | Pi safety bundle: safe command runners, damage prevention, and secret redaction. |
| 1246 | [@davehardy20/pi-seeds](https://www.npmjs.com/package/@davehardy20/pi-seeds) | 0 | `npm install @davehardy20/pi-seeds` | Pi package for per-project issue management via the Seeds CLI (sd). |
| 1247 | [@devilnside/pi-auto-improve](https://www.npmjs.com/package/@devilnside/pi-auto-improve) | 0 | `npm install @devilnside/pi-auto-improve` | Auto-improvement skill for Pi Coding Agent — feedback analysis, lesson generation and consolidation |
| 1248 | [@diegopetrucci/pi-openai-fast](https://www.npmjs.com/package/@diegopetrucci/pi-openai-fast) | 0 | `npm install @diegopetrucci/pi-openai-fast` | A pi extension that enables OpenAI Codex Fast mode for ChatGPT-auth GPT-5.4 and GPT-5.5 by injecting the priority servi… |
| 1249 | [@dreki-gg/pi-ask-mode](https://www.npmjs.com/package/@dreki-gg/pi-ask-mode) | 0 | `npm install @dreki-gg/pi-ask-mode` | Read-only ask mode for pi — restricts tools to read-only operations, blocking file creation, editing, and deletion |
| 1250 | [@eamode/pi-commit](https://www.npmjs.com/package/@eamode/pi-commit) | 0 | `npm install @eamode/pi-commit` | pi extension for automatic changelog-friendly Conventional Commits with submodule support. |
| 1251 | [@fgladisch/pi-zsh-shell](https://www.npmjs.com/package/@fgladisch/pi-zsh-shell) | 0 | `npm install @fgladisch/pi-zsh-shell` | Run Pi user bash commands through zsh with Pi-specific functions |
| 1252 | [@firstpick/pi-extension-nixos-wiki-local](https://www.npmjs.com/package/@firstpick/pi-extension-nixos-wiki-local) | 0 | `npm install @firstpick/pi-extension-nixos-wiki-local` | Local NixOS/Nix documentation search and retrieval tools for Pi backed by minimal sparse clones of official repositorie… |
| 1253 | [@furbyhaxx/pi-teardown-screen](https://www.npmjs.com/package/@furbyhaxx/pi-teardown-screen) | 0 | `npm install @furbyhaxx/pi-teardown-screen` | Slim Pi extension that prints a teardown screen with session stats when the user quits a pi session. Uses the default p… |
| 1254 | [@gogomi/pi-windows-shell](https://www.npmjs.com/package/@gogomi/pi-windows-shell) | 0 | `npm install @gogomi/pi-windows-shell` | Windows PowerShell and process-management tools for Pi coding agent. |
| 1255 | [@gonrocca/zero-pi](https://www.npmjs.com/package/@gonrocca/zero-pi) | 0 | `npm install @gonrocca/zero-pi` | zero-pi — an installable layer for pi (pi.dev): the zero spec-driven development workflow, skill auto-learning, and an… |
| 1256 | [@johnnywu/pi-default-tools](https://www.npmjs.com/package/@johnnywu/pi-default-tools) | 0 | `npm install @johnnywu/pi-default-tools` | Activate default tools from settings.json — reads project or global settings to enable built-in tools like grep, find,… |
| 1257 | [@kata-sh/pi-symphony-extension](https://www.npmjs.com/package/@kata-sh/pi-symphony-extension) | 0 | `npm install @kata-sh/pi-symphony-extension` | Pi extension for launching, attaching to, and monitoring Kata Symphony |
| 1258 | [@khimaros/pi-evolve](https://www.npmjs.com/package/@khimaros/pi-evolve) | 0 | `npm install @khimaros/pi-evolve` | self-modifying hook extension for pi-coding-agent — implements the hook protocol so opencode-evolve hooks run in pi unc… |
| 1259 | [@khimaros/pi-omni](https://www.npmjs.com/package/@khimaros/pi-omni) | 0 | `npm install @khimaros/pi-omni` | pi.dev extension: push-to-talk voice mode (STT + TTS via OpenAI-compatible endpoint) |
| 1260 | [@kmalkenneth/pi-watch](https://www.npmjs.com/package/@kmalkenneth/pi-watch) | 0 | `npm install @kmalkenneth/pi-watch` | Pi extension that watches for AI comments in your code and sends them to the agent |
| 1261 | [@lukemelnik/pi-monitor](https://www.npmjs.com/package/@lukemelnik/pi-monitor) | 0 | `npm install @lukemelnik/pi-monitor` | A Pi extension and CLI for monitoring live Pi agents and jumping to their tmux panes. |
| 1262 | [@m4riok/pi-openai-tweaks](https://www.npmjs.com/package/@m4riok/pi-openai-tweaks) | 0 | `npm install @m4riok/pi-openai-tweaks` | Pi extension for Codex usage visibility and fast-mode control |
| 1263 | [@matheusbbarni/pi-goal-extension](https://www.npmjs.com/package/@matheusbbarni/pi-goal-extension) | 0 | `npm install @matheusbbarni/pi-goal-extension` | Interactive Codex /goal sessions for Pi with persistent start/resume/status commands. |
| 1264 | [@matheusbbarni/pi-message-queue](https://www.npmjs.com/package/@matheusbbarni/pi-message-queue) | 0 | `npm install @matheusbbarni/pi-message-queue` | A Pi extension for queueing user messages and sending them one after another. |
| 1265 | [@mporenta/pi-verifier-agent](https://www.npmjs.com/package/@mporenta/pi-verifier-agent) | 0 | `npm install @mporenta/pi-verifier-agent` | Pi extension package for a read-only verifier agent that runs beside a builder session. |
| 1266 | [@narumitw/pi-auto-thinking](https://www.npmjs.com/package/@narumitw/pi-auto-thinking) | 0 | `npm install @narumitw/pi-auto-thinking` | Pi extension that automatically adjusts thinking level from model capability and task difficulty. |
| 1267 | [@nielpattin/pi-station](https://www.npmjs.com/package/@nielpattin/pi-station) | 0 | `npm install @nielpattin/pi-station` | Station bar status extension for pi coding agent |
| 1268 | [@nqbao/pi-alchemy](https://www.npmjs.com/package/@nqbao/pi-alchemy) | 0 | `npm install @nqbao/pi-alchemy` | Turn raw data into insights — query, transform, and visualize data files from the terminal |
| 1269 | [@nqbao/pi-json-schema](https://www.npmjs.com/package/@nqbao/pi-json-schema) | 0 | `npm install @nqbao/pi-json-schema` | Pi extension for validating and writing structured JSON output against a JSON Schema. |
| 1270 | [@open-pets/pi](https://www.npmjs.com/package/@open-pets/pi) | 0 | `npm install @open-pets/pi` | 暂无描述 |
| 1271 | [@penumbral-labs/pi-copy-code](https://www.npmjs.com/package/@penumbral-labs/pi-copy-code) | 0 | `npm install @penumbral-labs/pi-copy-code` | A pi extension for ergonomic copying of assistant code blocks. |
| 1272 | [@pi-orca/debug](https://www.npmjs.com/package/@pi-orca/debug) | 0 | `npm install @pi-orca/debug` | Debug log viewer and diagnostics overlay |
| 1273 | [@porche/pi-usage](https://www.npmjs.com/package/@porche/pi-usage) | 0 | `npm install @porche/pi-usage` | Pi Coding Agent extension for tracking session token usage, provider account limits, and historical local consumption. |
| 1274 | [@ramarivera/pi-grok-build](https://www.npmjs.com/package/@ramarivera/pi-grok-build) | 0 | `npm install @ramarivera/pi-grok-build` | Pi extension providing Grok Build / Grok CLI integration. |
| 1275 | [@s1m0n38/pi-html](https://www.npmjs.com/package/@s1m0n38/pi-html) | 0 | `npm install @s1m0n38/pi-html` | Convert agent markdown output to beautiful self-contained HTML |
| 1276 | [@season179/pi-worktree](https://www.npmjs.com/package/@season179/pi-worktree) | 0 | `npm install @season179/pi-worktree` | Adds a Claude Code-like --worktree flag to Pi. |
| 1277 | [@shaurya-sethi/primus](https://www.npmjs.com/package/@shaurya-sethi/primus) | 0 | `npm install @shaurya-sethi/primus` | CAD generation agent built on Pi and build123d |
| 1278 | [@thinkscape/pi-status](https://www.npmjs.com/package/@thinkscape/pi-status) | 0 | `npm install @thinkscape/pi-status` | Configurable, auto-updating terminal title and Ghostty native progress bar for pi coding agent. |
| 1279 | [@tifan/pi-copy-all](https://www.npmjs.com/package/@tifan/pi-copy-all) | 0 | `npm install @tifan/pi-copy-all` | Copy all assistant messages from the current pi session to the clipboard. |
| 1280 | [@tifan/pi-friction](https://www.npmjs.com/package/@tifan/pi-friction) | 0 | `npm install @tifan/pi-friction` | Append workflow-friction feedback to .pi/FRICTION.md. |
| 1281 | [@tifan/pi-recap](https://www.npmjs.com/package/@tifan/pi-recap) | 0 | `npm install @tifan/pi-recap` | Rolling session recap shown in the pi titlebar. |
| 1282 | [@tifan/pi-titlebar-spinner](https://www.npmjs.com/package/@tifan/pi-titlebar-spinner) | 0 | `npm install @tifan/pi-titlebar-spinner` | Show a spinner in the pi titlebar while the agent runs. |
| 1283 | [@tryinget/pi-evalset-lab](https://www.npmjs.com/package/@tryinget/pi-evalset-lab) | 0 | `npm install @tryinget/pi-evalset-lab` | pi extension for fixed-task-set eval runs and prompt/system comparisons |
| 1284 | [@tryinget/pi-society-orchestrator](https://www.npmjs.com/package/@tryinget/pi-society-orchestrator) | 0 | `npm install @tryinget/pi-society-orchestrator` | Cognitive-driven multi-agent orchestration for society.db, prompt-vault, and agent-kernel |
| 1285 | [@tryinget/pi-toolbox-discovery](https://www.npmjs.com/package/@tryinget/pi-toolbox-discovery) | 0 | `npm install @tryinget/pi-toolbox-discovery` | pi extension package for toolbox workflows in monorepo runtime |
| 1286 | [@tryinget/pi-vault-client](https://www.npmjs.com/package/@tryinget/pi-vault-client) | 0 | `npm install @tryinget/pi-vault-client` | pi extension package for vault workflows in monorepo runtime |
| 1287 | [@victor-software-house/pi-terminal-env](https://www.npmjs.com/package/@victor-software-house/pi-terminal-env) | 0 | `npm install @victor-software-house/pi-terminal-env` | Tiny zero-dep helpers to detect the terminal emulator pi is running in (iTerm2, tmux, etc.). Pure env-var probes, no I/… |
| 1288 | [@victormilk/pi-droid](https://www.npmjs.com/package/@victormilk/pi-droid) | 0 | `npm install @victormilk/pi-droid` | Pi Coding Agent extension that registers Factory.AI Droid models as a custom-streamSimple provider backed by a long-liv… |
| 1289 | [@vtstech/pi-hex-edit](https://www.npmjs.com/package/@vtstech/pi-hex-edit) | 0 | `npm install @vtstech/pi-hex-edit` | Hex stream-based edit replacement for reliable file editing |
| 1290 | [@wierdbytes/pi-peon](https://www.npmjs.com/package/@wierdbytes/pi-peon) | 0 | `npm install @wierdbytes/pi-peon` | Play CESP/OpenPeon sound packs on pi lifecycle events — peons, GLaDOS, battlecruisers and 300+ more community sound pac… |
| 1291 | [@wissem_hajbi/pi-nointl](https://www.npmjs.com/package/@wissem_hajbi/pi-nointl) | 0 | `npm install @wissem_hajbi/pi-nointl` | pi package for scanning Next.js projects for untranslated strings with nointl |
| 1292 | [@xl0/pi-ide-integration](https://www.npmjs.com/package/@xl0/pi-ide-integration) | 0 | `npm install @xl0/pi-ide-integration` | Pi package template for an IDE integration extension. |
| 1293 | [@ygncode/pi-insights](https://www.npmjs.com/package/@ygncode/pi-insights) | 0 | `npm install @ygncode/pi-insights` | Beautiful analytics reports for pi coding-agent sessions. |
| 1294 | [9router-pi-ext-integration](https://www.npmjs.com/package/9router-pi-ext-integration) | 0 | `npm install 9router-pi-ext-integration` | Pi Coding Agent extension for 9router — manage combos, browse providers, track limits, and see which model actually ser… |
| 1295 | [fito-plugin](https://www.npmjs.com/package/fito-plugin) | 0 | `npm install fito-plugin` | Fito Plugin — fetch web content, extract knowledge components (execution facts, domain concepts, usage scenarios) from… |
| 1296 | [keating](https://www.npmjs.com/package/keating) | 0 | `npm install keating` | A Pi-powered hyperteacher package with self-improving teaching policies, lesson maps, and animated visual teaching arti… |
| 1297 | [omniroute-pi-ext-integration](https://www.npmjs.com/package/omniroute-pi-ext-integration) | 0 | `npm install omniroute-pi-ext-integration` | Pi Coding Agent extension for OmniRoute — view combos, browse providers, and sync models with enriched metadata (contex… |
| 1298 | [pi-agent-supervisor](https://www.npmjs.com/package/pi-agent-supervisor) | 0 | `npm install pi-agent-supervisor` | Runtime safety net for AI agents — blocks dangerous commands, protects files, enforces rate limits, and records session… |
| 1299 | [pi-agenticoding](https://www.npmjs.com/package/pi-agenticoding) | 0 | `npm install pi-agenticoding` | Context management primitives for the pi coding agent — spawn, ledger, handoff |
| 1300 | [pi-auditor](https://www.npmjs.com/package/pi-auditor) | 0 | `npm install pi-auditor` | Audit repo files for RAG digestibility — find god files, measure chunk fragmentation, and generate split suggestions. |
| 1301 | [pi-auto-mode](https://www.npmjs.com/package/pi-auto-mode) | 0 | `npm install pi-auto-mode` | A pi extension that re-implements Claude Code style auto mode with a two-stage tool-call classifier. |
| 1302 | [pi-axiom](https://www.npmjs.com/package/pi-axiom) | 0 | `npm install pi-axiom` | pi extension for querying Axiom logs, monitors, and debugging alerts |
| 1303 | [pi-blue-minimal-header](https://www.npmjs.com/package/pi-blue-minimal-header) | 0 | `npm install pi-blue-minimal-header` | A blue minimal custom header and footer for pi |
| 1304 | [pi-branch-agent](https://www.npmjs.com/package/pi-branch-agent) | 0 | `npm install pi-branch-agent` | Branch agent extension for Pi Coding Agent. |
| 1305 | [pi-browser-cdp-extension](https://www.npmjs.com/package/pi-browser-cdp-extension) | 0 | `npm install pi-browser-cdp-extension` | Pi coding-agent extension exposing BrowserCode CDP browser_execute |
| 1306 | [pi-cavallo](https://www.npmjs.com/package/pi-cavallo) | 0 | `npm install pi-cavallo` | Generate and edit video in pi using Alibaba HappyHorse models (I2V, T2V, R2V, Video-Edit). |
| 1307 | [pi-chime](https://www.npmjs.com/package/pi-chime) | 0 | `npm install pi-chime` | Terminal bell notification for Pi — chimes when the agent finishes responding |
| 1308 | [pi-daily-cost](https://www.npmjs.com/package/pi-daily-cost) | 0 | `npm install pi-daily-cost` | Daily spend tracker for the Pi coding agent — shows total API cost across all of today's sessions in the footer status… |
| 1309 | [pi-docker-logs](https://www.npmjs.com/package/pi-docker-logs) | 0 | `npm install pi-docker-logs` | Docker log gateway for pi agents — tail logs from Docker containers in the wrok.in AI Factory via the docker CLI. |
| 1310 | [pi-event-monitor](https://www.npmjs.com/package/pi-event-monitor) | 0 | `npm install pi-event-monitor` | Event-driven monitors for pi sessions: shell streams and file watchers that wake the session that started them. |
| 1311 | [pi-exit-resume](https://www.npmjs.com/package/pi-exit-resume) | 0 | `npm install pi-exit-resume` | Pi extension that copies the resume command when Pi exits. |
| 1312 | [pi-extension-too-dumb](https://www.npmjs.com/package/pi-extension-too-dumb) | 0 | `npm install pi-extension-too-dumb` | A pi extension that warns when session reasoning ability may be compromised |
| 1313 | [pi-favorites-commands](https://www.npmjs.com/package/pi-favorites-commands) | 0 | `npm install pi-favorites-commands` | Star and reorder your favorite slash commands in pi. Favorites appear at the top of the / autocomplete dropdown with a… |
| 1314 | [pi-git-commands](https://www.npmjs.com/package/pi-git-commands) | 0 | `npm install pi-git-commands` | Pi agent extension: /git-commit, /git-push, and /git-tag for commits, pushes, and tag management |
| 1315 | [pi-goal-x](https://www.npmjs.com/package/pi-goal-x) | 0 | `npm install pi-goal-x` | Goal mode extension for pi: persistent long-running objectives, /goal-set drafting, Sisyphus prompt style, autoContinue… |
| 1316 | [pi-gograph](https://www.npmjs.com/package/pi-gograph) | 0 | `npm install pi-gograph` | Gograph integration for pi — AST-aware Go code navigation |
| 1317 | [pi-gpt-cache](https://www.npmjs.com/package/pi-gpt-cache) | 0 | `npm install pi-gpt-cache` | Pi extension that adds prompt_cache_key to OpenAI Responses API requests for better prompt caching. |
| 1318 | [pi-grok-oauth](https://www.npmjs.com/package/pi-grok-oauth) | 0 | `npm install pi-grok-oauth` | Pi extension that adds xAI Grok OAuth provider and xAI utility tools. |
| 1319 | [pi-idle](https://www.npmjs.com/package/pi-idle) | 0 | `npm install pi-idle` | Pi extension: shows ✓ in terminal title when idle, spinner (◰◳◲◱) while working, with context-usage percentage beside t… |
| 1320 | [pi-konjac](https://www.npmjs.com/package/pi-konjac) | 0 | `npm install pi-konjac` | Pi coding agent input translation extension using Bergamot language pair models. |
| 1321 | [pi-lifeline](https://www.npmjs.com/package/pi-lifeline) | 0 | `npm install pi-lifeline` | Pi extension that lets smaller models phone a stronger advisor model when autoresearch gets stuck. |
| 1322 | [pi-live](https://www.npmjs.com/package/pi-live) | 0 | `npm install pi-live` | Expose the current Pi Coding Agent session through a protected live web app. |
| 1323 | [pi-local-websearch](https://www.npmjs.com/package/pi-local-websearch) | 0 | `npm install pi-local-websearch` | Pi web search and extraction tools backed by ddgr and trafilatura. |
| 1324 | [pi-logo](https://www.npmjs.com/package/pi-logo) | 0 | `npm install pi-logo` | Pi extension logo |
| 1325 | [pi-marathon-theme](https://www.npmjs.com/package/pi-marathon-theme) | 0 | `npm install pi-marathon-theme` | Cyberpunk UI theme for pi, inspired by Marathon (2026) and 80s/90s hacking aesthetics |
| 1326 | [pi-minimax-pack](https://www.npmjs.com/package/pi-minimax-pack) | 0 | `npm install pi-minimax-pack` | Pi agent harness with policy gates, project detection, verification loop, drift protection, artifact validation, and ru… |
| 1327 | [pi-model-staging](https://www.npmjs.com/package/pi-model-staging) | 0 | `npm install pi-model-staging` | A pi extension that adds plan-then-implement mode with a single model ladder. Steps the model and thinking level down a… |
| 1328 | [pi-onnx](https://www.npmjs.com/package/pi-onnx) | 0 | `npm install pi-onnx` | Run Hugging Face onnx-community models locally inside pi: registers a chat provider for ONNX text-generation models and… |
| 1329 | [pi-openai-codex-fast](https://www.npmjs.com/package/pi-openai-codex-fast) | 0 | `npm install pi-openai-codex-fast` | Pi package that adds an openai-codex-fast provider backed by openai-codex with priority service tier |
| 1330 | [pi-openapi-tools](https://www.npmjs.com/package/pi-openapi-tools) | 0 | `npm install pi-openapi-tools` | Pi extension that generates LLM tools from any OpenAPI/Swagger URL. |
| 1331 | [pi-paster](https://www.npmjs.com/package/pi-paster) | 0 | `npm install pi-paster` | Pi extension that turns pasted image paths into first-class image attachments. |
| 1332 | [pi-poolside](https://www.npmjs.com/package/pi-poolside) | 0 | `npm install pi-poolside` | Poolside AI provider extension for Pi - registers Poolside models as OpenAI-compatible provider |
| 1333 | [pi-precognition](https://www.npmjs.com/package/pi-precognition) | 0 | `npm install pi-precognition` | Validated tool futures for low-latency Pi coding agents. Predict the wait, not the answer. |
| 1334 | [pi-processes-git-bash](https://www.npmjs.com/package/pi-processes-git-bash) | 0 | `npm install pi-processes-git-bash` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-processes.png) |
| 1335 | [pi-project-gate](https://www.npmjs.com/package/pi-project-gate) | 0 | `npm install pi-project-gate` | Project orchestration gate for AI agents — structured issues, WIP limits, dependency blocking, and auto-generated relea… |
| 1336 | [pi-repos](https://www.npmjs.com/package/pi-repos) | 0 | `npm install pi-repos` | Read GitHub repositories as if local in Pi: find repos, list files, read code, and grep cached archives. |
| 1337 | [pi-searxng-aggregator](https://www.npmjs.com/package/pi-searxng-aggregator) | 0 | `npm install pi-searxng-aggregator` | Search via a local SearXNG instance and aggregate results into per-topic JSON files |
| 1338 | [pi-spinner-lyrics](https://www.npmjs.com/package/pi-spinner-lyrics) | 0 | `npm install pi-spinner-lyrics` | Replaces pi's spinner verb with rotating Phish-lyric verbs. |
| 1339 | [pi-tau](https://www.npmjs.com/package/pi-tau) | 0 | `npm install pi-tau` | Quality-of-Life Extension for pi — background tasks, notifications, status lines, and more |
| 1340 | [pi-use-claude-seo](https://www.npmjs.com/package/pi-use-claude-seo) | 0 | `npm install pi-use-claude-seo` | Claude SEO ported to pi runtime. 25 SEO skills, 18 subagents, and 30 Python scripts for comprehensive SEO analysis — te… |
| 1341 | [pi-warp](https://www.npmjs.com/package/pi-warp) | 0 | `npm install pi-warp` | Pi <> Warp. Multi-task to your heart's content and get notified the moment your agent finishes. |
| 1342 | [rstack-agents](https://www.npmjs.com/package/rstack-agents) | 0 | `npm install rstack-agents` | Production-ready agentic SDLC framework for Pi and coding agents — orchestrator, builder/validator teams, lifecycle sta… |
| 1343 | [split-editor](https://www.npmjs.com/package/split-editor) | 0 | `npm install split-editor` | Open pi prompt editing in a live tmux split editor without freezing the pi UI. |

</details>

<a id="mcp"></a>
## MCP 协议适配
> 75 个包 · 总月下载量 212,840

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-mcp-adapter](https://www.npmjs.com/package/pi-mcp-adapter) | 77,049 | `npm install pi-mcp-adapter` | MCP (Model Context Protocol) adapter extension for Pi coding agent |
| 2 | [context-mode](https://www.npmjs.com/package/context-mode) | 86,809 | `npm install context-mode` | MCP plugin that saves 98% of your context window. Works with Claude Code, Gemini CLI, V… |
| 3 | [pi-lean-ctx](https://www.npmjs.com/package/pi-lean-ctx) | 7,394 | `npm install pi-lean-ctx` | Pi Coding Agent extension (CLI-first) — routes bash/read/grep/find/ls through lean-ctx… |
| 4 | [@spences10/pi-mcp](https://www.npmjs.com/package/@spences10/pi-mcp) | 3,869 | `npm install @spences10/pi-mcp` | MCP server integration for Pi that exposes configured MCP tools safely and manages larg… |
| 5 | [agent-comms](https://www.npmjs.com/package/agent-comms) | 3,331 | `npm install agent-comms` | Cross-harness communication mesh for LLM agents — rooms, DMs, presence, and real-time p… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 75 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-mcp-adapter](https://www.npmjs.com/package/pi-mcp-adapter) | 77,049 | `npm install pi-mcp-adapter` | MCP (Model Context Protocol) adapter extension for Pi coding agent |
| 2 | [context-mode](https://www.npmjs.com/package/context-mode) | 86,809 | `npm install context-mode` | MCP plugin that saves 98% of your context window. Works with Claude Code, Gemini CLI, VS Code Copilot, OpenCode, and Co… |
| 3 | [pi-lean-ctx](https://www.npmjs.com/package/pi-lean-ctx) | 7,394 | `npm install pi-lean-ctx` | Pi Coding Agent extension (CLI-first) — routes bash/read/grep/find/ls through lean-ctx CLI for strong token savings. Op… |
| 4 | [@spences10/pi-mcp](https://www.npmjs.com/package/@spences10/pi-mcp) | 3,869 | `npm install @spences10/pi-mcp` | MCP server integration for Pi that exposes configured MCP tools safely and manages large responses |
| 5 | [agent-comms](https://www.npmjs.com/package/agent-comms) | 3,331 | `npm install agent-comms` | Cross-harness communication mesh for LLM agents — rooms, DMs, presence, and real-time push delivery over TCP |
| 6 | [runline](https://www.npmjs.com/package/runline) | 3,302 | `npm install runline` | Code mode for agents — turn any API or command into a callable action |
| 7 | [pi-claude-style-tools](https://www.npmjs.com/package/pi-claude-style-tools) | 2,981 | `npm install pi-claude-style-tools` | Claude Code-style tool rows for pi with Ctrl+O image previews and consistent built-in, MCP, and custom tool rendering |
| 8 | [pi-gemini-acp](https://www.npmjs.com/package/pi-gemini-acp) | 2,444 | `npm install pi-gemini-acp` | Gemini ACP chat, prompt, search, and research provider for Pi. |
| 9 | [@pi-unipi/mcp](https://www.npmjs.com/package/@pi-unipi/mcp) | 1,918 | `npm install @pi-unipi/mcp` | MCP server management extension for Pi coding agent — browse, add, configure, and use MCP servers |
| 10 | [pi-tidy-mcp-adapter](https://www.npmjs.com/package/pi-tidy-mcp-adapter) | 1,627 | `npm install pi-tidy-mcp-adapter` | MCP (Model Context Protocol) adapter extension for Pi coding agent fork form https://github.com/nicobailon/pi-mcp-adapt… |
| 11 | [@spences10/pi-omnisearch](https://www.npmjs.com/package/@spences10/pi-omnisearch) | 1,509 | `npm install @spences10/pi-omnisearch` | Verified web research workflow reminder that steers Pi agents to use mcp-omnisearch for current sourced answers |
| 12 | [@spences10/pi-sqlite-tools](https://www.npmjs.com/package/@spences10/pi-sqlite-tools) | 1,294 | `npm install @spences10/pi-sqlite-tools` | SQLite safety workflow reminder that steers Pi agents to use gated mcp-sqlite-tools instead of raw sqlite3 |
| 13 | [@feniix/pi-sequential-thinking](https://www.npmjs.com/package/@feniix/pi-sequential-thinking) | 1,148 | `npm install @feniix/pi-sequential-thinking` | Sequential Thinking MCP extension for pi — structured progressive thinking through defined stages |
| 14 | [@feniix/pi-ref-tools](https://www.npmjs.com/package/@feniix/pi-ref-tools) | 1,080 | `npm install @feniix/pi-ref-tools` | Ref.tools MCP extension for pi — documentation search and URL reading via Ref's Model Context Protocol |
| 15 | [pi-auggie-router](https://www.npmjs.com/package/pi-auggie-router) | 1,025 | `npm install pi-auggie-router` | Opinionated sub-agent router for Pi: tightly couples SKILL.md execution with the Augment Code (auggie) Context Engine. |
| 16 | [@ameno/pi-minimax-mcp](https://www.npmjs.com/package/@ameno/pi-minimax-mcp) | 806 | `npm install @ameno/pi-minimax-mcp` | MiniMax MCP tools for pi - Web search and image understanding via MiniMax's Model Context Protocol |
| 17 | [@leonardorick/pi-web-search](https://www.npmjs.com/package/@leonardorick/pi-web-search) | 756 | `npm install @leonardorick/pi-web-search` | Web search tool for pi — Exa MCP search with DuckDuckGo fallback via wreq-js. |
| 18 | [@kuyavinny/pi-muninn-mem](https://www.npmjs.com/package/@kuyavinny/pi-muninn-mem) | 737 | `npm install @kuyavinny/pi-muninn-mem` | MuninnDB memory provider for Pi — SSE subscription, context injection, vault bridge |
| 19 | [gentle-engram](https://www.npmjs.com/package/gentle-engram) | 728 | `npm install gentle-engram` | Persistent memory for Pi agents — one local-or-cloud brain shared across sessions, compactions, and MCP agents |
| 20 | [pi-repoprompt-mcp](https://www.npmjs.com/package/pi-repoprompt-mcp) | 716 | `npm install pi-repoprompt-mcp` | A token-efficient RepoPrompt integration for Pi with automated and branch-safe workspace management |
| 21 | [@jayjanii/pi-minimax-mcp](https://www.npmjs.com/package/@jayjanii/pi-minimax-mcp) | 700 | `npm install @jayjanii/pi-minimax-mcp` | MiniMax MCP tools for pi - Web search and image understanding via MiniMax's Model Context Protocol |
| 22 | [@vanillagreen/pi-tool-renderer](https://www.npmjs.com/package/@vanillagreen/pi-tool-renderer) | 678 | `npm install @vanillagreen/pi-tool-renderer` | Compact Claude/opencode-style renderers for Pi tools with rich diffs, apply_patch, generic/MCP rendering, and optional… |
| 23 | [pi-mcp-extension](https://www.npmjs.com/package/pi-mcp-extension) | 620 | `npm install pi-mcp-extension` | MCP (Model Context Protocol) client extension for the Pi coding agent — connect Pi to any MCP server |
| 24 | [@ruminaider/notion-cli](https://www.npmjs.com/package/@ruminaider/notion-cli) | 599 | `npm install @ruminaider/notion-cli` | Notion CLI with full workspace access via OAuth. Manage pages, databases, comments, and Notion-flavored Markdown from t… |
| 25 | [pi-mcporter](https://www.npmjs.com/package/pi-mcporter) | 582 | `npm install pi-mcporter` | Single-tool MCPorter bridge extension for pi and Model Context Protocol (MCP) servers. |
| 26 | [pi-zai-tools](https://www.npmjs.com/package/pi-zai-tools) | 557 | `npm install pi-zai-tools` | Pi package that exposes Z.AI Web Search, Web Reader, Zread, and Vision MCP tools. |
| 27 | [@javiayala/ai-workers](https://www.npmjs.com/package/@javiayala/ai-workers) | 470 | `npm install @javiayala/ai-workers` | Portable Pi/GLM worker tools for offloading low-risk agent work from premium coding agents. |
| 28 | [pi-figma-mcp](https://www.npmjs.com/package/pi-figma-mcp) | 463 | `npm install pi-figma-mcp` | Pi package that connects Pi to the Figma desktop MCP server and exposes Figma design tools inside Pi. |
| 29 | [pi-tscg](https://www.npmjs.com/package/pi-tscg) | 398 | `npm install pi-tscg` | Drop-in tool-schema and tool-result compression for the Pi coding-agent. Built on TSCG by Furkan Sakizli (SKZL-AI) — wr… |
| 30 | [pi-agent-hub](https://www.npmjs.com/package/pi-agent-hub) | 385 | `npm install pi-agent-hub` | Pi-native tmux hub for long-running coding-agent sessions, skills, and MCP |
| 31 | [@fancyrobot/agent-vault](https://www.npmjs.com/package/@fancyrobot/agent-vault) | 385 | `npm install @fancyrobot/agent-vault` | Durable project memory for coding agents. Obsidian-compatible vault with MCP server, pi package, and workflow support f… |
| 32 | [@imsus/pi-extension-minimax-coding-plan-mcp](https://www.npmjs.com/package/@imsus/pi-extension-minimax-coding-plan-mcp) | 377 | `npm install @imsus/pi-extension-minimax-coding-plan-mcp` | MiniMax Coding Plan extension for pi coding agent - provides web_search and understand_image tools |
| 33 | [@micka33/pi-tasks](https://www.npmjs.com/package/@micka33/pi-tasks) | 354 | `npm install @micka33/pi-tasks` | Persistent shared task lists for Pi agents and MCP clients. |
| 34 | [pi-tokensaver](https://www.npmjs.com/package/pi-tokensaver) | 313 | `npm install pi-tokensaver` | Give your Pi AI agent a semantic memory — bridges tokensave's Rust-powered local graph engine into your coding workflow… |
| 35 | [@khmuhtadin/pi-clickup-mcp](https://www.npmjs.com/package/@khmuhtadin/pi-clickup-mcp) | 304 | `npm install @khmuhtadin/pi-clickup-mcp` | Pi extension that bridges pi to the official ClickUp remote MCP server. |
| 36 | [role-persona](https://www.npmjs.com/package/role-persona) | 295 | `npm install role-persona` | Role-based persona system for AI agents — memory, knowledge, embedding. CLI, MCP, daemon, Pi extension. |
| 37 | [@0xkobold/pi-mcp](https://www.npmjs.com/package/@0xkobold/pi-mcp) | 285 | `npm install @0xkobold/pi-mcp` | Model Context Protocol (MCP) integration for pi-coding-agent. Connect to any MCP server (stdio, SSE, StreamableHTTP, We… |
| 38 | [@h4rvey-g/context-mode](https://www.npmjs.com/package/@h4rvey-g/context-mode) | 283 | `npm install @h4rvey-g/context-mode` | MCP plugin that saves 98% of your context window. Works with Claude Code, Gemini CLI, VS Code Copilot, OpenCode, and Co… |
| 39 | [@benvargas/pi-exa-mcp](https://www.npmjs.com/package/@benvargas/pi-exa-mcp) | 280 | `npm install @benvargas/pi-exa-mcp` | Exa MCP tools for pi - Web search and code context via Exa's Model Context Protocol |
| 40 | [anchor-edit](https://www.npmjs.com/package/anchor-edit) | 258 | `npm install anchor-edit` | Stateful single-token anchored file editing (Dirac-style). MCP server via `anchor-edit mcp`. |
| 41 | [@fingerskier/pi-mozart](https://www.npmjs.com/package/@fingerskier/pi-mozart) | 245 | `npm install @fingerskier/pi-mozart` | Mozart MIDI plugin for Pi, bridged from mozart-claude-plugin MCP |
| 42 | [pi-figma-remote-auth](https://www.npmjs.com/package/pi-figma-remote-auth) | 245 | `npm install pi-figma-remote-auth` | Pi extension that authenticates and configures Figma Remote MCP for pi-mcp-adapter. |
| 43 | [@fingerskier/pi-cron](https://www.npmjs.com/package/@fingerskier/pi-cron) | 244 | `npm install @fingerskier/pi-cron` | Cron scheduler plugin for Pi, bridged from the legacy dex-claude-plugin MCP server |
| 44 | [@fingerskier/pi-kicad](https://www.npmjs.com/package/@fingerskier/pi-kicad) | 242 | `npm install @fingerskier/pi-kicad` | KiCad MCP plugin for Pi |
| 45 | [@fingerskier/pi-micropython](https://www.npmjs.com/package/@fingerskier/pi-micropython) | 232 | `npm install @fingerskier/pi-micropython` | MicroPython device MCP plugin for Pi with a self-bootstrapping Python server |
| 46 | [@fingerskier/pi-fleet](https://www.npmjs.com/package/@fingerskier/pi-fleet) | 229 | `npm install @fingerskier/pi-fleet` | Fleet AWS monitor plugin for Pi, bridged from fleet-claude-plugin MCP |
| 47 | [@fingerskier/pi-build123d](https://www.npmjs.com/package/@fingerskier/pi-build123d) | 223 | `npm install @fingerskier/pi-build123d` | build123d CAD MCP plugin for Pi with a self-bootstrapping Python server |
| 48 | [@fingerskier/pi-dude](https://www.npmjs.com/package/@fingerskier/pi-dude) | 221 | `npm install @fingerskier/pi-dude` | Dude local memory plugin for Pi, bridged from dude-claude-plugin MCP |
| 49 | [@im4all/pi-jira-extension](https://www.npmjs.com/package/@im4all/pi-jira-extension) | 217 | `npm install @im4all/pi-jira-extension` | Fetch and create jira issues |
| 50 | [@cansiny0320/pi-mcp-adapter](https://www.npmjs.com/package/@cansiny0320/pi-mcp-adapter) | 204 | `npm install @cansiny0320/pi-mcp-adapter` | MCP (Model Context Protocol) adapter extension for Pi coding agent |
| 51 | [@ineersa/my-pi-mcp-adapter](https://www.npmjs.com/package/@ineersa/my-pi-mcp-adapter) | 197 | `npm install @ineersa/my-pi-mcp-adapter` | MCP (Model Context Protocol) adapter extension for Pi coding agent — bridges any MCP server into Pi as first-class tools |
| 52 | [@vaayne/pi-mcp](https://www.npmjs.com/package/@vaayne/pi-mcp) | 162 | `npm install @vaayne/pi-mcp` | Pi extension for MCP (Model Context Protocol) server integration |
| 53 | [@sage-protocol/pi-adapter](https://www.npmjs.com/package/@sage-protocol/pi-adapter) | 128 | `npm install @sage-protocol/pi-adapter` | Sage Protocol MCP integration for pi coding agent |
| 54 | [platypus-pi](https://www.npmjs.com/package/platypus-pi) | 119 | `npm install platypus-pi` | Pi package for first-class Platypus MCP project-management integration |
| 55 | [@fingerskier/pi-skidl](https://www.npmjs.com/package/@fingerskier/pi-skidl) | 109 | `npm install @fingerskier/pi-skidl` | SKiDL circuit-design MCP plugin for Pi with a self-bootstrapping Python server |
| 56 | [onetool-pi](https://www.npmjs.com/package/onetool-pi) | 104 | `npm install onetool-pi` | 🧿 Pi coding agent extension — the ultimate MCP bridge with 100+ tools including Brave, Google, Context7, Excalidraw, A… |
| 57 | [@zhafron/pi-mcp-tools](https://www.npmjs.com/package/@zhafron/pi-mcp-tools) | 100 | `npm install @zhafron/pi-mcp-tools` | Universal MCP tools extension for pi coding agent |
| 58 | [@ruminaider/linear-cli](https://www.npmjs.com/package/@ruminaider/linear-cli) | 90 | `npm install @ruminaider/linear-cli` | JSON-first CLI for Linear. Wraps every authenticated Linear MCP tool: projects, issues, comments, attachments, cycles,… |
| 59 | [@skdev-ai/pi-gemini-cli-provider](https://www.npmjs.com/package/@skdev-ai/pi-gemini-cli-provider) | 78 | `npm install @skdev-ai/pi-gemini-cli-provider` | Gemini LLM provider for Pi/GSD via A2A protocol with MCP tool bridge |
| 60 | [@eliemessiecode/pi-mcp](https://www.npmjs.com/package/@eliemessiecode/pi-mcp) | 73 | `npm install @eliemessiecode/pi-mcp` | Connect MCP (Model Context Protocol) HTTP servers to Pi agent. Auto-discover and use MCP tools. |
| 61 | [@netandreus/pi-auto](https://www.npmjs.com/package/@netandreus/pi-auto) | 52 | `npm install @netandreus/pi-auto` | Pi package: usage-aware model switching and load-balancing for pi-coding-agent. |
| 62 | [@jordyvd/pi-mcp-adapter](https://www.npmjs.com/package/@jordyvd/pi-mcp-adapter) | 44 | `npm install @jordyvd/pi-mcp-adapter` | MCP (Model Context Protocol) adapter extension for Pi coding agent |
| 63 | [@skdev-ai/pi-gemini-cli-search](https://www.npmjs.com/package/@skdev-ai/pi-gemini-cli-search) | 38 | `npm install @skdev-ai/pi-gemini-cli-search` | Pi/GSD extension providing grounded web search via Gemini CLI's A2A and ACP protocols. Uses your existing Google AI Pro… |
| 64 | [@wdalhaj/pi-astro-mcp](https://www.npmjs.com/package/@wdalhaj/pi-astro-mcp) | 38 | `npm install @wdalhaj/pi-astro-mcp` | Pi extension that connects to the Astro Docs MCP server and exposes a search_astro_docs tool |
| 65 | [pi-satori-bridge](https://www.npmjs.com/package/pi-satori-bridge) | 29 | `npm install pi-satori-bridge` | Pi extension package that proxies Satori MCP tools through satori-cli |
| 66 | [oncrawl-mcp-pi-extension](https://www.npmjs.com/package/oncrawl-mcp-pi-extension) | 28 | `npm install oncrawl-mcp-pi-extension` | Pi Agent extension that bridges the Oncrawl MCP Server directly into Pi – no Claude Code or Claude Desktop required. |
| 67 | [@yofriadi/pi-mcp](https://www.npmjs.com/package/@yofriadi/pi-mcp) | 25 | `npm install @yofriadi/pi-mcp` | Standalone MCP extension package for pi installs |
| 68 | [@yangnay/pi-mcp-bridge](https://www.npmjs.com/package/@yangnay/pi-mcp-bridge) | 15 | `npm install @yangnay/pi-mcp-bridge` | Standalone pi extension that bridges multiple MCP servers with on-demand connections. |
| 69 | [@blackbelt-technology/pi-anthropic-messages](https://www.npmjs.com/package/@blackbelt-technology/pi-anthropic-messages) | 0 | `npm install @blackbelt-technology/pi-anthropic-messages` | Anthropic-messages protocol bridge for pi. Activates for any anthropic-messages API session (Anthropic OAuth/API-key +… |
| 70 | [@codella/pi-mcp-support](https://www.npmjs.com/package/@codella/pi-mcp-support) | 0 | `npm install @codella/pi-mcp-support` | Generic Model Context Protocol support extension for Pi. |
| 71 | [@eovidiu/pi-extensions](https://www.npmjs.com/package/@eovidiu/pi-extensions) | 0 | `npm install @eovidiu/pi-extensions` | Pi extensions, including an opt-in MCP bridge. |
| 72 | [@matheusbbarni/pi-stitch-mcp](https://www.npmjs.com/package/@matheusbbarni/pi-stitch-mcp) | 0 | `npm install @matheusbbarni/pi-stitch-mcp` | Pi extension that bridges Google Stitch MCP tools into Pi. |
| 73 | [pi-mom](https://www.npmjs.com/package/pi-mom) | 0 | `npm install pi-mom` | MOM native Pi extension — registers MOM tools directly in the Pi coding agent |
| 74 | [pi-semantic-memory](https://www.npmjs.com/package/pi-semantic-memory) | 0 | `npm install pi-semantic-memory` | Local-first semantic memory for Pi coding agent. Powered by LogosDB MCP server — vector search, zero cloud, stdio-only. |
| 75 | [pi-zai-mcp](https://www.npmjs.com/package/pi-zai-mcp) | 0 | `npm install pi-zai-mcp` | Unofficial pi package that exposes Z.ai MCP server tools for web search, URL reading, repository reading, and vision wo… |

</details>

<a id="subagent"></a>
## 子代理/多代理
> 124 个包 · 总月下载量 185,612

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-subagents](https://www.npmjs.com/package/pi-subagents) | 86,724 | `npm install pi-subagents` | Pi extension for delegating tasks to subagents with chains, parallel execution, and TUI… |
| 2 | [pi-crew](https://www.npmjs.com/package/pi-crew) | 9,381 | `npm install pi-crew` | Pi extension for coordinated AI teams, workflows, worktrees, and async task orchestrati… |
| 3 | [pi-minions](https://www.npmjs.com/package/pi-minions) | 638 | `npm install pi-minions` | Minimal recursive subagent orchestration for pi. No bundled agents, no opinions. |
| 4 | [@tintinweb/pi-subagents](https://www.npmjs.com/package/@tintinweb/pi-subagents) | 10,324 | `npm install @tintinweb/pi-subagents` | A pi extension extension that brings smart Claude Code-style autonomous sub-agents to p… |
| 5 | [taskplane](https://www.npmjs.com/package/taskplane) | 6,900 | `npm install taskplane` | AI agent orchestration for pi — parallel task execution with checkpoint discipline |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 124 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-subagents](https://www.npmjs.com/package/pi-subagents) | 86,724 | `npm install pi-subagents` | Pi extension for delegating tasks to subagents with chains, parallel execution, and TUI clarification |
| 2 | [pi-crew](https://www.npmjs.com/package/pi-crew) | 9,381 | `npm install pi-crew` | Pi extension for coordinated AI teams, workflows, worktrees, and async task orchestration |
| 3 | [pi-minions](https://www.npmjs.com/package/pi-minions) | 638 | `npm install pi-minions` | Minimal recursive subagent orchestration for pi. No bundled agents, no opinions. |
| 4 | [@tintinweb/pi-subagents](https://www.npmjs.com/package/@tintinweb/pi-subagents) | 10,324 | `npm install @tintinweb/pi-subagents` | A pi extension extension that brings smart Claude Code-style autonomous sub-agents to pi. |
| 5 | [taskplane](https://www.npmjs.com/package/taskplane) | 6,900 | `npm install taskplane` | AI agent orchestration for pi — parallel task execution with checkpoint discipline |
| 6 | [gentle-pi](https://www.npmjs.com/package/gentle-pi) | 5,373 | `npm install gentle-pi` | Turn Pi into el Gentleman: a senior-architect development harness with SDD/OpenSpec, subagents, strict TDD evidence, re… |
| 7 | [pi-interactive-shell](https://www.npmjs.com/package/pi-interactive-shell) | 3,473 | `npm install pi-interactive-shell` | Run AI coding agents in pi TUI overlays with interactive, hands-free, and dispatch supervision |
| 8 | [@spences10/pi-team-mode](https://www.npmjs.com/package/@spences10/pi-team-mode) | 3,081 | `npm install @spences10/pi-team-mode` | Local team orchestration for Pi with RPC teammates, task tracking, and mailbox coordination |
| 9 | [@linimin/pi-letscook](https://www.npmjs.com/package/@linimin/pi-letscook) | 2,864 | `npm install @linimin/pi-letscook` | Pi package for long-running completion workflows with canonical .agent state, role-based subagents, continuity, and ver… |
| 10 | [pi-multiagent](https://www.npmjs.com/package/pi-multiagent) | 2,838 | `npm install pi-multiagent` | Adds the agent_team delegation tool and pi-multiagent skill to Pi. |
| 11 | [oira666_pi-subagent](https://www.npmjs.com/package/oira666_pi-subagent) | 2,698 | `npm install oira666_pi-subagent` | Subagent extension for Pi coding agent. Delegate tasks to specialized agents. |
| 12 | [@ifi/pi-extension-subagents](https://www.npmjs.com/package/@ifi/pi-extension-subagents) | 2,487 | `npm install @ifi/pi-extension-subagents` | Full-featured subagent orchestration extension for pi, built on top of nicobailon/pi-subagents. |
| 13 | [@narumitw/pi-subagents](https://www.npmjs.com/package/@narumitw/pi-subagents) | 2,396 | `npm install @narumitw/pi-subagents` | Pi extension for delegating work to specialized isolated subagents. |
| 14 | [pi-agent-suite](https://www.npmjs.com/package/pi-agent-suite) | 2,323 | `npm install pi-agent-suite` | Adds a configurable multi-agent layer to pi, with context management, Codex quota status, a custom footer, and more. |
| 15 | [pi-fast-subagent](https://www.npmjs.com/package/pi-fast-subagent) | 2,180 | `npm install pi-fast-subagent` | In-process subagent delegation for pi with single, parallel, and background modes |
| 16 | [@boofpackdev/pi-morph](https://www.npmjs.com/package/@boofpackdev/pi-morph) | 2,129 | `npm install @boofpackdev/pi-morph` | Agent orchestration layer for pi — guided 5-stage pipeline: spark → plan → work → review → ship. Mission-control TUI, b… |
| 17 | [pi-teams](https://www.npmjs.com/package/pi-teams) | 2,052 | `npm install pi-teams` | Agent teams for pi, ported from claude-code-teams-mcp |
| 18 | [@jessenguyen22/pi-tool-router](https://www.npmjs.com/package/@jessenguyen22/pi-tool-router) | 1,612 | `npm install @jessenguyen22/pi-tool-router` | Intelligent tool routing extension for pi coding agent - automatically selects the best tool stack for each task |
| 19 | [pi-link](https://www.npmjs.com/package/pi-link) | 1,402 | `npm install pi-link` | WebSocket-based inter-terminal communication for Pi. Connect multiple Pi terminals over a local link network. |
| 20 | [oh-my-opencode-pi](https://www.npmjs.com/package/oh-my-opencode-pi) | 1,374 | `npm install oh-my-opencode-pi` | Pantheon-style multi-agent orchestration for pi, inspired by oh-my-opencode-slim |
| 21 | [pi-rnd](https://www.npmjs.com/package/pi-rnd) | 1,362 | `npm install pi-rnd` | Scientific-method R&D orchestration for PI Coding Agent — methodology skills, subagent definitions, /rnd-start pipeline… |
| 22 | [pi-messenger-swarm](https://www.npmjs.com/package/pi-messenger-swarm) | 1,351 | `npm install pi-messenger-swarm` | Swarm-first multi-agent messaging and task orchestration extension for Pi |
| 23 | [@dreki-gg/pi-subagent](https://www.npmjs.com/package/@dreki-gg/pi-subagent) | 1,257 | `npm install @dreki-gg/pi-subagent` | Subagent tool and direct agent runs for pi — isolated agents, parallel scouts, manager workflows, and bundled prompts |
| 24 | [pi-mono-team-mode](https://www.npmjs.com/package/pi-mono-team-mode) | 1,252 | `npm install pi-mono-team-mode` | Pi extension for flat peer-agent orchestration — named, addressable teammates with resumable context (mirrors Claude Co… |
| 25 | [pi-faithless-subagents](https://www.npmjs.com/package/pi-faithless-subagents) | 1,241 | `npm install pi-faithless-subagents` | PI-native constrained subagent orchestration library |
| 26 | [pi-orch-extension](https://www.npmjs.com/package/pi-orch-extension) | 1,133 | `npm install pi-orch-extension` | Orch multi-agent orchestration extension for Pi |
| 27 | [@anh-chu/pi-subagents](https://www.npmjs.com/package/@anh-chu/pi-subagents) | 1,083 | `npm install @anh-chu/pi-subagents` | A pi extension extension that brings smart Claude Code-style autonomous sub-agents to pi. |
| 28 | [pi-messenger](https://www.npmjs.com/package/pi-messenger) | 1,013 | `npm install pi-messenger` | Inter-agent messaging and file reservation system for pi coding agent |
| 29 | [@timtekno/agentic-template](https://www.npmjs.com/package/@timtekno/agentic-template) | 972 | `npm install @timtekno/agentic-template` | Reusable pi package for company workflows |
| 30 | [@melihmucuk/pi-crew](https://www.npmjs.com/package/@melihmucuk/pi-crew) | 900 | `npm install @melihmucuk/pi-crew` | Non-blocking subagent orchestration for pi coding agent |
| 31 | [@jeonghyeon.net/pi-subagents](https://www.npmjs.com/package/@jeonghyeon.net/pi-subagents) | 853 | `npm install @jeonghyeon.net/pi-subagents` | A pi extension extension that brings smart Claude Code-style autonomous sub-agents to pi. |
| 32 | [@wayaans/ramean](https://www.npmjs.com/package/@wayaans/ramean) | 837 | `npm install @wayaans/ramean` | Ramean pi package collections |
| 33 | [pi-thread-engine](https://www.npmjs.com/package/pi-thread-engine) | 804 | `npm install pi-thread-engine` | Thread-Based Engineering for pi — all 7 thread types + stories + fusion + zero-touch + TUI dashboard. Based on @IndyDev… |
| 34 | [pi-agents-team](https://www.npmjs.com/package/pi-agents-team) | 796 | `npm install pi-agents-team` | Pi extension that turns one coding session into a multi-agent team with background RPC worker agents. |
| 35 | [@0xtiby/looper](https://www.npmjs.com/package/@0xtiby/looper) | 751 | `npm install @0xtiby/looper` | Standalone AI loop orchestration engine |
| 36 | [pi-finder-subagent](https://www.npmjs.com/package/pi-finder-subagent) | 717 | `npm install pi-finder-subagent` | Read-only local workspace scout subagent package for pi agents (code + personal files) |
| 37 | [pi-agent-router](https://www.npmjs.com/package/pi-agent-router) | 691 | `npm install pi-agent-router` | Pi extension for active-agent routing, controlled subagent delegation, and task result rendering. |
| 38 | [pi-agentteam](https://www.npmjs.com/package/pi-agentteam) | 653 | `npm install pi-agentteam` | Multi-agent team orchestration for pi — leader-coordinator pattern with researcher, planner, and implementer teammates… |
| 39 | [pi-agent-bus](https://www.npmjs.com/package/pi-agent-bus) | 625 | `npm install pi-agent-bus` | Pi Extension bridging pi-agent-bus-node agents with pi.tools and pi-link. Includes the core MessageBus, Agent, and Task… |
| 40 | [@vaayne/pi-subagent](https://www.npmjs.com/package/@vaayne/pi-subagent) | 620 | `npm install @vaayne/pi-subagent` | Pi extension for delegating tasks to specialized agents |
| 41 | [pi-subagentura](https://www.npmjs.com/package/pi-subagentura) | 597 | `npm install pi-subagentura` | Public Pi package that adds in-process sub-agents via the SDK |
| 42 | [pi-goal-driven](https://www.npmjs.com/package/pi-goal-driven) | 569 | `npm install pi-goal-driven` | Goal-Driven template workflow for pi |
| 43 | [@jerryan/pi-subagent-lite](https://www.npmjs.com/package/@jerryan/pi-subagent-lite) | 522 | `npm install @jerryan/pi-subagent-lite` | Minimal pi extension that delegates tasks to isolated subagent processes with optional skill loading |
| 44 | [@howaboua/pi-subagent-review](https://www.npmjs.com/package/@howaboua/pi-subagent-review) | 513 | `npm install @howaboua/pi-subagent-review` | Pi extension that adds /review via an isolated review subagent. |
| 45 | [pi-kanban](https://www.npmjs.com/package/pi-kanban) | 503 | `npm install pi-kanban` | Workspace for the pi coding agent — sessions, todos, subagents, and more. |
| 46 | [@martintrojer/mu](https://www.npmjs.com/package/@martintrojer/mu) | 492 | `npm install @martintrojer/mu` | A persistent, observable crew of pi agents running in one tmux session per workstream, coordinated through a built-in t… |
| 47 | [@0xkobold/pi-kobold](https://www.npmjs.com/package/@0xkobold/pi-kobold) | 475 | `npm install @0xkobold/pi-kobold` | Meta-extension for 0xKobold that bundles pi-orchestration, pi-gateway, pi-ollama, pi-learn, pi-persona, and development… |
| 48 | [@tmustier/pi-agent-teams](https://www.npmjs.com/package/@tmustier/pi-agent-teams) | 436 | `npm install @tmustier/pi-agent-teams` | Claude Code agent teams style workflow for Pi. |
| 49 | [pi-teammate](https://www.npmjs.com/package/pi-teammate) | 418 | `npm install pi-teammate` | Pi agent-to-agent team communication via shared SQLite message bus with MAMORU guardian |
| 50 | [@vadimcomanescu/pi-teams](https://www.npmjs.com/package/@vadimcomanescu/pi-teams) | 388 | `npm install @vadimcomanescu/pi-teams` | Pi team orchestration extension for named teammates, shared task boards, and coordinated execution |
| 51 | [pi-xai](https://www.npmjs.com/package/pi-xai) | 378 | `npm install pi-xai` | Pi extension for xAI text generation via Responses API — reasoning, multi-agent, structured outputs, tools |
| 52 | [@diegopetrucci/pi-oracle](https://www.npmjs.com/package/@diegopetrucci/pi-oracle) | 375 | `npm install @diegopetrucci/pi-oracle` | An Amp-style oracle extension for pi that consults the strongest reasoning model on your current provider. |
| 53 | [pi-shipit](https://www.npmjs.com/package/pi-shipit) | 374 | `npm install pi-shipit` | Quality gates for shipping code with the Pi coding agent. Iterative review loops and fork-to-upstream PR workflows with… |
| 54 | [pi-side-agents](https://www.npmjs.com/package/pi-side-agents) | 343 | `npm install pi-side-agents` | Side-agent orchestration for Pi — spin off parallel child agents in tmux windows and git worktrees. |
| 55 | [aptive-airflow-agent-team](https://www.npmjs.com/package/aptive-airflow-agent-team) | 342 | `npm install aptive-airflow-agent-team` | Pi package for the Aptive Airflow sequential agent chain. |
| 56 | [@0xkobold/pi-orchestration](https://www.npmjs.com/package/@0xkobold/pi-orchestration) | 338 | `npm install @0xkobold/pi-orchestration` | Agnostic subagent orchestration for pi-coding-agent. Supports single, chain, parallel, and fork execution modes with de… |
| 57 | [@odradekk/vera-subagents](https://www.npmjs.com/package/@odradekk/vera-subagents) | 333 | `npm install @odradekk/vera-subagents` | Subagent orchestration for Vera agent (explorer, librarian, thinker, worker) |
| 58 | [@alexanderfortin/pi-freestyle-sandbox](https://www.npmjs.com/package/@alexanderfortin/pi-freestyle-sandbox) | 325 | `npm install @alexanderfortin/pi-freestyle-sandbox` | Pi extension for running sandboxed subagents in Freestyle cloud VMs |
| 59 | [@gotgenes/pi-subagents](https://www.npmjs.com/package/@gotgenes/pi-subagents) | 324 | `npm install @gotgenes/pi-subagents` | A pi extension that brings Claude Code-style autonomous sub-agents to pi. Friendly fork of @tintinweb/pi-subagents. |
| 60 | [@catdaemon/pi-subagents](https://www.npmjs.com/package/@catdaemon/pi-subagents) | 318 | `npm install @catdaemon/pi-subagents` | Persistent subagent tools and UI for Pi. |
| 61 | [pi-apex-companion-coding](https://www.npmjs.com/package/pi-apex-companion-coding) | 303 | `npm install pi-apex-companion-coding` | Apex Companion Coding extension package for pi / pi-mono with companion review, negotiation contracts, and mutation gua… |
| 62 | [pi-agent-bus-node](https://www.npmjs.com/package/pi-agent-bus-node) | 299 | `npm install pi-agent-bus-node` | Node.js runtime for pi-agent-bus — MessageBus, Agent base class, LLMProvider, TaskQueue |
| 63 | [pi-agentarium](https://www.npmjs.com/package/pi-agentarium) | 297 | `npm install pi-agentarium` | Ambient multi-agent observability for Pi — a terminal habitat for coding agents. |
| 64 | [pi-agent-colony](https://www.npmjs.com/package/pi-agent-colony) | 267 | `npm install pi-agent-colony` | Agent Colony for Pi — bootstrap and package distribution for a multi-agent Pi plugin for complex coding tasks. |
| 65 | [@dkod/pi](https://www.npmjs.com/package/@dkod/pi) | 243 | `npm install @dkod/pi` | dkod extension for Pi — parallel agent execution with AST-level semantic merging |
| 66 | [pi-headless-subagent](https://www.npmjs.com/package/pi-headless-subagent) | 241 | `npm install pi-headless-subagent` | Pi extension for spawning isolated subagents in separate pi --mode rpc subprocesses |
| 67 | [nano-team](https://www.npmjs.com/package/nano-team) | 235 | `npm install nano-team` | A tiny pi.dev extension. It doesn't really do much — just runs your subagents and shows them as a compact little chip r… |
| 68 | [@mjakl/pi-subagent](https://www.npmjs.com/package/@mjakl/pi-subagent) | 234 | `npm install @mjakl/pi-subagent` | Subagent extension for Pi coding agent. Delegate tasks to specialized agents. |
| 69 | [@howaboua/pi-explore-subagents](https://www.npmjs.com/package/@howaboua/pi-explore-subagents) | 209 | `npm install @howaboua/pi-explore-subagents` | Isolated discovery-only explore subagents for Pi. |
| 70 | [@mystilleef/pi-subagent](https://www.npmjs.com/package/@mystilleef/pi-subagent) | 198 | `npm install @mystilleef/pi-subagent` | Pi subagent for the SPAE Framework |
| 71 | [@fulcrum-agent-os/pi-cockpit](https://www.npmjs.com/package/@fulcrum-agent-os/pi-cockpit) | 198 | `npm install @fulcrum-agent-os/pi-cockpit` | Fulcrum Cockpit — control-plane dashboard, task management, memory, lifecycle tools, and policy hook for the PI coding… |
| 72 | [pi-task-subagents](https://www.npmjs.com/package/pi-task-subagents) | 195 | `npm install pi-task-subagents` | Standalone subagent delegation tools for pi |
| 73 | [compound-engineering-pi](https://www.npmjs.com/package/compound-engineering-pi) | 189 | `npm install compound-engineering-pi` | Pi-first Compound Engineering extension with subagents and MCPorter compatibility. |
| 74 | [pi-image-subagent](https://www.npmjs.com/package/pi-image-subagent) | 177 | `npm install pi-image-subagent` | Pi extension that gives non-vision models the ability to analyze images via a vision-capable subagent |
| 75 | [pi-bmad-flow](https://www.npmjs.com/package/pi-bmad-flow) | 158 | `npm install pi-bmad-flow` | Pi-native orchestration overlay for BMAD workflows |
| 76 | [pi-pilot](https://www.npmjs.com/package/pi-pilot) | 143 | `npm install pi-pilot` | A Copilot Autopilot-inspired workflow: research, subagent exploration, questions, plan and execute. |
| 77 | [@harrypan-12138/pi-superpower](https://www.npmjs.com/package/@harrypan-12138/pi-superpower) | 141 | `npm install @harrypan-12138/pi-superpower` | Superpower workflow extension for pi coding agent — Scout→Think→Plan→Implement→Review→Debug pipeline with 8 specialized… |
| 78 | [pi-verifier-agent](https://www.npmjs.com/package/pi-verifier-agent) | 141 | `npm install pi-verifier-agent` | Pi Verifier Agent — a second read-only Pi agent that verifies builder output and feeds back concrete corrections. |
| 79 | [@the-forge-flow/sub-agents-pi](https://www.npmjs.com/package/@the-forge-flow/sub-agents-pi) | 132 | `npm install @the-forge-flow/sub-agents-pi` | PI extension for spawning isolated sub-agents with live TUI spying |
| 80 | [pi-symphony](https://www.npmjs.com/package/pi-symphony) | 130 | `npm install pi-symphony` | Unattended issue orchestration for Pi — polls Linear, spawns workers, manages PRs |
| 81 | [pi-skill-test-subagent](https://www.npmjs.com/package/pi-skill-test-subagent) | 118 | `npm install pi-skill-test-subagent` | Pi extension for isolated skill pressure testing with baseline and skill-present subagents. |
| 82 | [pi-spawn](https://www.npmjs.com/package/pi-spawn) | 118 | `npm install pi-spawn` | Minimal subagent extension for pi — one tool, one prompt, orchestrator-driven concurrency |
| 83 | [pi-tmux-harness](https://www.npmjs.com/package/pi-tmux-harness) | 108 | `npm install pi-tmux-harness` | Pi extension exposing tmux as native tools — drive other TUIs (pi, claude, copilot CLI, lazygit, etc.) for adversarial… |
| 84 | [@artale/pi-swarm](https://www.npmjs.com/package/@artale/pi-swarm) | 104 | `npm install @artale/pi-swarm` | Simple parallel task execution |
| 85 | [pi-missions](https://www.npmjs.com/package/pi-missions) | 101 | `npm install pi-missions` | Orchestrated multi-phase development missions for pi — architect, implement, test, audit, verify |
| 86 | [@judepayne/picode](https://www.npmjs.com/package/@judepayne/picode) | 90 | `npm install @judepayne/picode` | A Pi package for disciplined, role-based coding workflows with mode switching, permissions, subagents, and prompt vars. |
| 87 | [pi-shadow-git](https://www.npmjs.com/package/pi-shadow-git) | 89 | `npm install pi-shadow-git` | Git-based orchestration logging for pi subagents with Mission Control dashboard |
| 88 | [pi-mesh](https://www.npmjs.com/package/pi-mesh) | 89 | `npm install pi-mesh` | Multi-agent coordination for Pi - presence, messaging, file reservations |
| 89 | [@wkronmiller/pi-subagent-extension](https://www.npmjs.com/package/@wkronmiller/pi-subagent-extension) | 84 | `npm install @wkronmiller/pi-subagent-extension` | Durable async Pi subagent as a standalone Pi package |
| 90 | [pi-parallel-agents](https://www.npmjs.com/package/pi-parallel-agents) | 82 | `npm install pi-parallel-agents` | Dynamic parallel agent execution for pi - run multiple agents with different models without pre-defining configurations |
| 91 | [@ruizrica/agent-pi](https://www.npmjs.com/package/@ruizrica/agent-pi) | 79 | `npm install @ruizrica/agent-pi` | Multi-agent orchestration suite for Pi — 6 modes, 43 extensions, 11 themes |
| 92 | [ralph-loop-pi](https://www.npmjs.com/package/ralph-loop-pi) | 77 | `npm install ralph-loop-pi` | Ralph loop extension for pi-coding-agent - looped subagent execution |
| 93 | [@adix7/pi-agent-teams](https://www.npmjs.com/package/@adix7/pi-agent-teams) | 73 | `npm install @adix7/pi-agent-teams` | Claude Code agent teams style workflow for Pi. |
| 94 | [pi-a2a-communication](https://www.npmjs.com/package/pi-a2a-communication) | 72 | `npm install pi-a2a-communication` | Enterprise-grade A2A (Agent2Agent) protocol implementation for pi coding agent - enables multi-node, multi-agent collab… |
| 95 | [pi-toolbox](https://www.npmjs.com/package/pi-toolbox) | 70 | `npm install pi-toolbox` | A comprehensive extension toolkit for the Pi Coding Agent — 17 extensions, 11 themes, skills, agents, and team orchestr… |
| 96 | [@whynothugo/pi-subagents](https://www.npmjs.com/package/@whynothugo/pi-subagents) | 63 | `npm install @whynothugo/pi-subagents` | Subagent extension for pi coding agent |
| 97 | [@carter-mcalister/pi-codex-subagents](https://www.npmjs.com/package/@carter-mcalister/pi-codex-subagents) | 55 | `npm install @carter-mcalister/pi-codex-subagents` | Codex-compatible MultiAgentV2 subagent tools for Pi |
| 98 | [apple-pi](https://www.npmjs.com/package/apple-pi) | 55 | `npm install apple-pi` | Opinionated pi extension — lightweight in-process subagent system |
| 99 | [pi-agents-pool](https://www.npmjs.com/package/pi-agents-pool) | 52 | `npm install pi-agents-pool` | Codex-style multi-agent orchestration for pi — spawn, communicate with, and coordinate sub-agents via LLM tool calls |
| 100 | [@gericomaverick/pi-team-orchestrator](https://www.npmjs.com/package/@gericomaverick/pi-team-orchestrator) | 50 | `npm install @gericomaverick/pi-team-orchestrator` | Pi extension for team/project orchestration with markdown-defined teams and session-backed state |
| 101 | [@e9n/pi-subagent](https://www.npmjs.com/package/@e9n/pi-subagent) | 46 | `npm install @e9n/pi-subagent` | Parallel task delegation for pi — spawn isolated subagents for single, parallel, and chain execution |
| 102 | [pi-rlm](https://www.npmjs.com/package/pi-rlm) | 44 | `npm install pi-rlm` | Recursive Language Model (RLM) extension for Pi coding agent |
| 103 | [@schilderlabs/pitown](https://www.npmjs.com/package/@schilderlabs/pitown) | 42 | `npm install @schilderlabs/pitown` | Globally installable CLI for Pi Town |
| 104 | [@umgbhalla/pi-gigaplan](https://www.npmjs.com/package/@umgbhalla/pi-gigaplan) | 40 | `npm install @umgbhalla/pi-gigaplan` | Structured AI planning with cross-model critique — gigaplan as a pi extension |
| 105 | [@codexstar/pi-agent-teams](https://www.npmjs.com/package/@codexstar/pi-agent-teams) | 39 | `npm install @codexstar/pi-agent-teams` | Claude Code agent teams style workflow for Pi. |
| 106 | [pi-rlm-query](https://www.npmjs.com/package/pi-rlm-query) | 38 | `npm install pi-rlm-query` | Recursive LLM Query extension for pi - enables agent-to-agent delegation with guardrails |
| 107 | [pi-replicant](https://www.npmjs.com/package/pi-replicant) | 29 | `npm install pi-replicant` | Codebase exploration subagent extension for pi using Offworld CLI |
| 108 | [@schilderlabs/pitown-package](https://www.npmjs.com/package/@schilderlabs/pitown-package) | 28 | `npm install @schilderlabs/pitown-package` | Pi package resources for Pi Town |
| 109 | [@hyperprior/pi-subagent](https://www.npmjs.com/package/@hyperprior/pi-subagent) | 17 | `npm install @hyperprior/pi-subagent` | Delegate tasks to isolated sub-agents (pi subprocesses) |
| 110 | [@pi-orca/teams](https://www.npmjs.com/package/@pi-orca/teams) | 4 | `npm install @pi-orca/teams` | Team templates and orchestrated spinup |
| 111 | [pi-redteam](https://www.npmjs.com/package/pi-redteam) | 3 | `npm install pi-redteam` | Multi-agent red teaming system for Pi - 10 specialized security agents for vulnerability assessment and penetration tes… |
| 112 | [@agnishc/edb-subagents](https://www.npmjs.com/package/@agnishc/edb-subagents) | 0 | `npm install @agnishc/edb-subagents` | Pi extension: Claude Code-style autonomous sub-agents with live widget, parallel execution, mid-run steering, and custo… |
| 113 | [@awtotty/pi-missions](https://www.npmjs.com/package/@awtotty/pi-missions) | 0 | `npm install @awtotty/pi-missions` | Pi extension for long-running, milestone-based coding missions. |
| 114 | [@diegopetrucci/pi-triage-comments](https://www.npmjs.com/package/@diegopetrucci/pi-triage-comments) | 0 | `npm install @diegopetrucci/pi-triage-comments` | A pi extension that adds /triage-comments and a read-only triage_comments subagent tool for review-comment triage. |
| 115 | [@ineersa/my-pi-subagents](https://www.npmjs.com/package/@ineersa/my-pi-subagents) | 0 | `npm install @ineersa/my-pi-subagents` | Subagent orchestration extension for Pi coding agent — single and parallel foreground execution, agent discovery, skill… |
| 116 | [@marks/pi-subagent](https://www.npmjs.com/package/@marks/pi-subagent) | 0 | `npm install @marks/pi-subagent` | Minimal Pi extension: one subagent tool that spawns role-shaped child pi processes. Roles defined as markdown in ~/.pi/… |
| 117 | [@patimweb/pi-team](https://www.npmjs.com/package/@patimweb/pi-team) | 0 | `npm install @patimweb/pi-team` | Team agent orchestration extension for pi coding agent. Role-based profiles, shared memory, sprint phases, and structur… |
| 118 | [@rhinos0608/pi-subagents](https://www.npmjs.com/package/@rhinos0608/pi-subagents) | 0 | `npm install @rhinos0608/pi-subagents` | A pi extension that brings Claude Code-style autonomous sub-agents to pi. Fork of @tintinweb/pi-subagents. |
| 119 | [@teelicht/pi-superagents](https://www.npmjs.com/package/@teelicht/pi-superagents) | 0 | `npm install @teelicht/pi-superagents` | Pi extension for Superpowers workflows: recon, research, implementation, review, and debug |
| 120 | [@vigolium/piolium](https://www.npmjs.com/package/@vigolium/piolium) | 0 | `npm install @vigolium/piolium` | Pi-native port of archon-audit. Multi-phase security audits with specialist sub-agents, isolated context windows, cappe… |
| 121 | [devkit-pi](https://www.npmjs.com/package/devkit-pi) | 0 | `npm install devkit-pi` | Personal all-in-one pi coding toolkit: subagents, web research, LSP code intelligence, and developer commands |
| 122 | [pi-tmux-subagents](https://www.npmjs.com/package/pi-tmux-subagents) | 0 | `npm install pi-tmux-subagents` | Pi extension for Markdown-defined, tmux-backed subagents and parallel coding-agent delegation |
| 123 | [simple-subs](https://www.npmjs.com/package/simple-subs) | 0 | `npm install simple-subs` | Lightweight subagent dispatch for Pi — single, parallel, async with peer messaging |
| 124 | [tap-skill](https://www.npmjs.com/package/tap-skill) | 0 | `npm install tap-skill` | thalix-auto — multi-agent orchestration skill for Claude Code, Codex CLI, and Pi (pi.dev). Forked from oh-my-claudecode. |

</details>

<a id="web"></a>
## 网络访问
> 110 个包 · 总月下载量 134,893

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-web-access](https://www.npmjs.com/package/pi-web-access) | 46,602 | `npm install pi-web-access` | Web search, URL fetching, GitHub repo cloning, PDF extraction, YouTube video understand… |
| 2 | [@ollama/pi-web-search](https://www.npmjs.com/package/@ollama/pi-web-search) | 25,917 | `npm install @ollama/pi-web-search` | Web search and fetch tools for Pi agent - uses Ollama's web search and fetch APIs |
| 3 | [@juicesharp/rpiv-web-tools](https://www.npmjs.com/package/@juicesharp/rpiv-web-tools) | 12,818 | `npm install @juicesharp/rpiv-web-tools` | Pi extension. Web search and fetch for the model with pluggable providers (Brave, Tavil… |
| 4 | [pi-smart-fetch](https://www.npmjs.com/package/pi-smart-fetch) | 5,745 | `npm install pi-smart-fetch` | Smart web_fetch with desktop-browser TLS impersonation and defuddle extraction. |
| 5 | [@pi-unipi/web-api](https://www.npmjs.com/package/@pi-unipi/web-api) | 2,864 | `npm install @pi-unipi/web-api` | Web search, read, and summarize tools with provider-based backend selection for Pi codi… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 110 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-web-access](https://www.npmjs.com/package/pi-web-access) | 46,602 | `npm install pi-web-access` | Web search, URL fetching, GitHub repo cloning, PDF extraction, YouTube video understanding, and local video analysis fo… |
| 2 | [@ollama/pi-web-search](https://www.npmjs.com/package/@ollama/pi-web-search) | 25,917 | `npm install @ollama/pi-web-search` | Web search and fetch tools for Pi agent - uses Ollama's web search and fetch APIs |
| 3 | [@juicesharp/rpiv-web-tools](https://www.npmjs.com/package/@juicesharp/rpiv-web-tools) | 12,818 | `npm install @juicesharp/rpiv-web-tools` | Pi extension. Web search and fetch for the model with pluggable providers (Brave, Tavily, Serper, Exa, Jina, Firecrawl). |
| 4 | [pi-smart-fetch](https://www.npmjs.com/package/pi-smart-fetch) | 5,745 | `npm install pi-smart-fetch` | Smart web_fetch with desktop-browser TLS impersonation and defuddle extraction. |
| 5 | [@pi-unipi/web-api](https://www.npmjs.com/package/@pi-unipi/web-api) | 2,864 | `npm install @pi-unipi/web-api` | Web search, read, and summarize tools with provider-based backend selection for Pi coding agent |
| 6 | [@ifi/pi-plan](https://www.npmjs.com/package/@ifi/pi-plan) | 2,420 | `npm install @ifi/pi-plan` | Planning mode extension for pi with persistent plan files, branch-aware planning, and delegated research tasks. |
| 7 | [@lincoln504/pi-research](https://www.npmjs.com/package/@lincoln504/pi-research) | 1,822 | `npm install @lincoln504/pi-research` | A set of web research tools (search, scrape, and others) and research agent system that uses them safely and efficientl… |
| 8 | [pi-librarian](https://www.npmjs.com/package/pi-librarian) | 1,586 | `npm install pi-librarian` | GitHub research subagent package for pi coding agent |
| 9 | [@darkhorseprojects/pi-gnosis](https://www.npmjs.com/package/@darkhorseprojects/pi-gnosis) | 1,511 | `npm install @darkhorseprojects/pi-gnosis` | Circuitry-first Pi package for source-grounded research, non-linear tutoring, Obsidian learning memory, and Manim lectu… |
| 10 | [@narumitw/pi-firecrawl](https://www.npmjs.com/package/@narumitw/pi-firecrawl) | 1,431 | `npm install @narumitw/pi-firecrawl` | Pi extension that exposes Firecrawl web scraping and crawling tools. |
| 11 | [@demigodmode/pi-web-agent](https://www.npmjs.com/package/@demigodmode/pi-web-agent) | 1,424 | `npm install @demigodmode/pi-web-agent` | Pi package for reliable web access with explicit search, fetch, and headless boundaries. |
| 12 | [pi-web-providers](https://www.npmjs.com/package/pi-web-providers) | 1,356 | `npm install pi-web-providers` | Configurable web access extension for pi with per-tool provider routing and explicit provider option schemas for search… |
| 13 | [@chewey182/multipi](https://www.npmjs.com/package/@chewey182/multipi) | 1,218 | `npm install @chewey182/multipi` | Multi-agent orchestration system for pi-coding-agent with subagents, web search, and URL fetching |
| 14 | [@aretw0/web-skills](https://www.npmjs.com/package/@aretw0/web-skills) | 1,167 | `npm install @aretw0/web-skills` | First-party web skills: native search and browser automation via CDP |
| 15 | [@curio-data/pi-intelli-search](https://www.npmjs.com/package/@curio-data/pi-intelli-search) | 1,145 | `npm install @curio-data/pi-intelli-search` | Intelligent web research for Pi: search, extract, collate, and cache grounded web context in one tool call. |
| 16 | [pi-scraper](https://www.npmjs.com/package/pi-scraper) | 1,061 | `npm install pi-scraper` | Crawl, map, and structured extraction for Pi — scraper-first, Pi-native, and local-first. |
| 17 | [pi-webaio](https://www.npmjs.com/package/pi-webaio) | 1,029 | `npm install pi-webaio` | All-in-one web tools for pi with search (Google, Brave, DDG) and fetch with headless browser AI summarization |
| 18 | [@leing2021/pi-search](https://www.npmjs.com/package/@leing2021/pi-search) | 949 | `npm install @leing2021/pi-search` | Minimal Secure Evidence Gateway for Pi Coding Agent — search, web_search, web_fetch, research_search. Intent-based prov… |
| 19 | [@ifi/pi-web-remote](https://www.npmjs.com/package/@ifi/pi-web-remote) | 924 | `npm install @ifi/pi-web-remote` | Pi extension: /remote command for sharing sessions via web UI. |
| 20 | [@the-forge-flow/camoufox-pi](https://www.npmjs.com/package/@the-forge-flow/camoufox-pi) | 903 | `npm install @the-forge-flow/camoufox-pi` | PI extension for stealth web search and URL fetching via Camoufox |
| 21 | [@vanillagreen/pi-web-tools](https://www.npmjs.com/package/@vanillagreen/pi-web-tools) | 819 | `npm install @vanillagreen/pi-web-tools` | First-party Pi web tools: provider-toggled web search, Exa deep research, content retrieval, and OpenAI native web_sear… |
| 22 | [@bitcraft-apps/pi-web-tools](https://www.npmjs.com/package/@bitcraft-apps/pi-web-tools) | 804 | `npm install @bitcraft-apps/pi-web-tools` | Shell-only web search and fetch tools for pi.dev. No API keys. |
| 23 | [@capyup/pi-exa](https://www.npmjs.com/package/@capyup/pi-exa) | 718 | `npm install @capyup/pi-exa` | Exa web research for pi via five first-class tools + skill + local CLI. Uses the official exa-js SDK directly — no MCP… |
| 24 | [pi-browser-harness](https://www.npmjs.com/package/pi-browser-harness) | 686 | `npm install pi-browser-harness` | Browser control extension for pi — navigate, click, type, screenshot, and extract data from real Chrome via CDP |
| 25 | [pi-web-kit](https://www.npmjs.com/package/pi-web-kit) | 675 | `npm install pi-web-kit` | Context-efficient web search and fetch tools for Pi. |
| 26 | [@heyhuynhgiabuu/pi-search](https://www.npmjs.com/package/@heyhuynhgiabuu/pi-search) | 653 | `npm install @heyhuynhgiabuu/pi-search` | Unified search toolkit for pi — web search, code search, docs lookup, and GitHub code search in one extension. |
| 27 | [pi-tavily-tools](https://www.npmjs.com/package/pi-tavily-tools) | 646 | `npm install pi-tavily-tools` | Tavily tools and status panel for pi |
| 28 | [@ogulcancelik/pi-web-browse](https://www.npmjs.com/package/@ogulcancelik/pi-web-browse) | 645 | `npm install @ogulcancelik/pi-web-browse` | Web search and content extraction skill for pi-coding-agent. Search the web and fetch pages via a real headless browser… |
| 29 | [pi-searxng](https://www.npmjs.com/package/pi-searxng) | 567 | `npm install pi-searxng` | SearXNG web search extension for Pi with automatic GitHub repo cloning |
| 30 | [pi-bangla-news](https://www.npmjs.com/package/pi-bangla-news) | 559 | `npm install pi-bangla-news` | Pi extension for scraping latest Bangladeshi news headlines via Scrapling MCP server |
| 31 | [pi-web-minimal](https://www.npmjs.com/package/pi-web-minimal) | 539 | `npm install pi-web-minimal` | Minimal web, code, and documentation retrieval distillation tools for Pi |
| 32 | [@alexanderfortin/pi-tavily-tools](https://www.npmjs.com/package/@alexanderfortin/pi-tavily-tools) | 524 | `npm install @alexanderfortin/pi-tavily-tools` | Pi coding agent extension for web search and content extraction using Tavily |
| 33 | [pi-web-fetch](https://www.npmjs.com/package/pi-web-fetch) | 521 | `npm install pi-web-fetch` | Pi extension: fetch web pages via headless Chrome, extract content with trafilatura, and optionally process with an LLM |
| 34 | [pi-exa](https://www.npmjs.com/package/pi-exa) | 512 | `npm install pi-exa` | Web search, deep research and fetch content tools for Pi Agent, powered by Exa. |
| 35 | [@wierdbytes/pi-web](https://www.npmjs.com/package/@wierdbytes/pi-web) | 510 | `npm install @wierdbytes/pi-web` | Anthropic-powered web_search tool for the pi coding agent |
| 36 | [pi-exa-tools](https://www.npmjs.com/package/pi-exa-tools) | 488 | `npm install pi-exa-tools` | Adds Exa-backed web search and page fetching tools to Pi. |
| 37 | [@jmcombs/pi-tavily-search](https://www.npmjs.com/package/@jmcombs/pi-tavily-search) | 481 | `npm install @jmcombs/pi-tavily-search` | Pi extension that performs real-time web search via the Tavily API. |
| 38 | [sift-web-tools](https://www.npmjs.com/package/sift-web-tools) | 438 | `npm install sift-web-tools` | Pi agent web search, fetch, and save tools powered by the local sift CLI. |
| 39 | [pi-crawl4ai](https://www.npmjs.com/package/pi-crawl4ai) | 406 | `npm install pi-crawl4ai` | Crawl4AI extension for pi — web crawling and structured extraction |
| 40 | [pi-reddit-research](https://www.npmjs.com/package/pi-reddit-research) | 401 | `npm install pi-reddit-research` | Reddit JSON research tools and skill for pi coding agent. |
| 41 | [@counterposition/pi-web-search](https://www.npmjs.com/package/@counterposition/pi-web-search) | 400 | `npm install @counterposition/pi-web-search` | Multi-provider web search and markdown page fetch for Pi |
| 42 | [pi-pubmed](https://www.npmjs.com/package/pi-pubmed) | 397 | `npm install pi-pubmed` | Search PubMed and fetch article abstracts directly from Pi using NCBI E-utilities |
| 43 | [@narumitw/pi-web-search](https://www.npmjs.com/package/@narumitw/pi-web-search) | 378 | `npm install @narumitw/pi-web-search` | Pi package that adds a web_search tool backed by Brave Search or DuckDuckGo HTML. |
| 44 | [pi-searxng-suite](https://www.npmjs.com/package/pi-searxng-suite) | 370 | `npm install pi-searxng-suite` | SearxNG-based web search with category filtering and multi-format URL extraction for pi. |
| 45 | [@0xkobold/pi-web](https://www.npmjs.com/package/@0xkobold/pi-web) | 348 | `npm install @0xkobold/pi-web` | Web search and content extraction for pi agents — DuckDuckGo/SearX search, cascade fetching (fast → readability → Playw… |
| 46 | [@rwese/minimax-web-search](https://www.npmjs.com/package/@rwese/minimax-web-search) | 337 | `npm install @rwese/minimax-web-search` | MiniMax extension for pi coding agent |
| 47 | [@rejot-dev/pi-openai-search](https://www.npmjs.com/package/@rejot-dev/pi-openai-search) | 328 | `npm install @rejot-dev/pi-openai-search` | A pi package that injects OpenAI's native web_search tool into the provider request payload. |
| 48 | [@jeonghyeon.net/pi-web-access](https://www.npmjs.com/package/@jeonghyeon.net/pi-web-access) | 307 | `npm install @jeonghyeon.net/pi-web-access` | Web search, URL fetching, GitHub repo cloning, PDF extraction, YouTube video understanding, and local video analysis fo… |
| 49 | [pi-yep-search](https://www.npmjs.com/package/pi-yep-search) | 294 | `npm install pi-yep-search` | Yep Search API extension for pi — adds a web_search tool backed by https://platform.yep.com |
| 50 | [@cltec/pi-ollama-web-search](https://www.npmjs.com/package/@cltec/pi-ollama-web-search) | 272 | `npm install @cltec/pi-ollama-web-search` | A local-first, context-safe pi extension package for Ollama web search and fetch. |
| 51 | [@arcadia64/pi-ddgs](https://www.npmjs.com/package/@arcadia64/pi-ddgs) | 251 | `npm install @arcadia64/pi-ddgs` | Pi extension for web search and page fetch with curl_cffi + Chrome + Camoufox fallback chain. Backed by a local Docker… |
| 52 | [@odradekk/vera-web-tools](https://www.npmjs.com/package/@odradekk/vera-web-tools) | 244 | `npm install @odradekk/vera-web-tools` | Web search, web read, docs search, academic search, and PDF parsing tools for Vera agent |
| 53 | [@catdaemon/pi-web-tools](https://www.npmjs.com/package/@catdaemon/pi-web-tools) | 240 | `npm install @catdaemon/pi-web-tools` | Web search and fetch tools for Pi. |
| 54 | [pi-deep-research](https://www.npmjs.com/package/pi-deep-research) | 230 | `npm install pi-deep-research` | Deep research skill for pi — structured search, reflection, and analysis. |
| 55 | [@benvargas/pi-firecrawl](https://www.npmjs.com/package/@benvargas/pi-firecrawl) | 228 | `npm install @benvargas/pi-firecrawl` | Firecrawl tools for pi - Web scraping, crawling, and data extraction via Firecrawl's REST API |
| 56 | [pi-native-search](https://www.npmjs.com/package/pi-native-search) | 222 | `npm install pi-native-search` | Pi extension that adds web_search and web_fetch tools using each provider's native search backend (ZAI MCP, Anthropic,… |
| 57 | [@e9n/pi-web-dashboard](https://www.npmjs.com/package/@e9n/pi-web-dashboard) | 219 | `npm install @e9n/pi-web-dashboard` | Live agent dashboard for pi — SSE streaming, session view, and prompt submission |
| 58 | [pi-codex-web-search](https://www.npmjs.com/package/pi-codex-web-search) | 210 | `npm install pi-codex-web-search` | Pi extension that exposes web search through the local Codex CLI |
| 59 | [@pavlokrykh/strip-search](https://www.npmjs.com/package/@pavlokrykh/strip-search) | 208 | `npm install @pavlokrykh/strip-search` | A pi extension for compact DuckDuckGo search results. |
| 60 | [@j6e/pi-md-web-surfer](https://www.npmjs.com/package/@j6e/pi-md-web-surfer) | 199 | `npm install @j6e/pi-md-web-surfer` | Pi extension: fetch web pages as markdown and search the web, powered by Jina AI |
| 61 | [@siddr/pi-web-search](https://www.npmjs.com/package/@siddr/pi-web-search) | 198 | `npm install @siddr/pi-web-search` | Brave web search tool extension for pi |
| 62 | [@rjshrjndrn/pi-fetch](https://www.npmjs.com/package/@rjshrjndrn/pi-fetch) | 188 | `npm install @rjshrjndrn/pi-fetch` | Web content extraction for pi — fetch any URL as clean Markdown using Defuddle |
| 63 | [pi-parallel-web-search](https://www.npmjs.com/package/pi-parallel-web-search) | 161 | `npm install pi-parallel-web-search` | A pi extension that adds a web_search tool powered by Parallel AI |
| 64 | [pi-exa-search](https://www.npmjs.com/package/pi-exa-search) | 160 | `npm install pi-exa-search` | Exa-powered source discovery and search workflows for Pi. |
| 65 | [@dreadedzombie/pi-init](https://www.npmjs.com/package/@dreadedzombie/pi-init) | 155 | `npm install @dreadedzombie/pi-init` | Generates a typed AGENTS.md for your project — /init, /init research, /init debug, /init code |
| 66 | [pi-free-web-search](https://www.npmjs.com/package/pi-free-web-search) | 152 | `npm install pi-free-web-search` | Free, hybrid, browser-aware web search and content extraction package for Pi coding agent |
| 67 | [@vaayne/pi-web-tools](https://www.npmjs.com/package/@vaayne/pi-web-tools) | 145 | `npm install @vaayne/pi-web-tools` | Pi extension for web fetching and search capabilities |
| 68 | [pi-web-utils](https://www.npmjs.com/package/pi-web-utils) | 134 | `npm install pi-web-utils` | Configurable web search, markdown-first webpage fetching, GitHub local repo search tools for pi coding agent |
| 69 | [pi-mono-web-search](https://www.npmjs.com/package/pi-mono-web-search) | 129 | `npm install pi-mono-web-search` | Pi extension for web search and page reading using DuckDuckGo and readability extraction |
| 70 | [@coctostan/pi-exa-gh-web-tools](https://www.npmjs.com/package/@coctostan/pi-exa-gh-web-tools) | 127 | `npm install @coctostan/pi-exa-gh-web-tools` | Web search via Exa, content extraction, and GitHub repo cloning for Pi coding agent |
| 71 | [pi-llm-wiki](https://www.npmjs.com/package/pi-llm-wiki) | 124 | `npm install pi-llm-wiki` | A Pi package for persistent markdown wikis with source capture, generated metadata, linting, and an LLM wiki-maintainer… |
| 72 | [pi-tinyfish](https://www.npmjs.com/package/pi-tinyfish) | 123 | `npm install pi-tinyfish` | TinyFish Search and Fetch tools for Pi |
| 73 | [pi-tavily-search](https://www.npmjs.com/package/pi-tavily-search) | 122 | `npm install pi-tavily-search` | AI-powered web search using Tavily API for pi coding-agent |
| 74 | [@marcfargas/skills](https://www.npmjs.com/package/@marcfargas/skills) | 115 | `npm install @marcfargas/skills` | Reusable AI agent skills for pi, Claude Code, Cursor, and any Agent Skills compatible agent |
| 75 | [browse97](https://www.npmjs.com/package/browse97) | 109 | `npm install browse97` | Chrome browser automation for pi coding agent via CDP. Open tabs, snapshot, click, fill forms, upload files, evaluate J… |
| 76 | [@aemonculaba/pi-search](https://www.npmjs.com/package/@aemonculaba/pi-search) | 108 | `npm install @aemonculaba/pi-search` | Web search + fetch extension for pi (OpenAI search + Readability extraction) |
| 77 | [pi-web-extension](https://www.npmjs.com/package/pi-web-extension) | 108 | `npm install pi-web-extension` | A pi extension that adds web search and web fetch tools to the coding agent. |
| 78 | [@artale/pi-web-search](https://www.npmjs.com/package/@artale/pi-web-search) | 104 | `npm install @artale/pi-web-search` | Simple web search |
| 79 | [@winds-ai/pi-native-codex-web-search](https://www.npmjs.com/package/@winds-ai/pi-native-codex-web-search) | 88 | `npm install @winds-ai/pi-native-codex-web-search` | Native web search for Pi using OpenAI's Responses API via Codex backend (same as Codex CLI) |
| 80 | [pi-websearch-tavily](https://www.npmjs.com/package/pi-websearch-tavily) | 88 | `npm install pi-websearch-tavily` | Pi web search tool powered by Tavily |
| 81 | [@venomzen/pi-web-access-enhanced](https://www.npmjs.com/package/@venomzen/pi-web-access-enhanced) | 74 | `npm install @venomzen/pi-web-access-enhanced` | Personal enhanced fork of pi-web-access: web search, content extraction, GitHub repo cloning, PDF extraction, YouTube a… |
| 82 | [@diegopetrucci/pi-librarian](https://www.npmjs.com/package/@diegopetrucci/pi-librarian) | 69 | `npm install @diegopetrucci/pi-librarian` | A pi GitHub research scout with a toggleable local repo checkout cache under the user's OS cache directory. |
| 83 | [@boti-ormandi/pi-web](https://www.npmjs.com/package/@boti-ormandi/pi-web) | 68 | `npm install @boti-ormandi/pi-web` | web_search and web_fetch tools for the pi coding agent. Runs on your Anthropic Claude subscription, the way Claude Code… |
| 84 | [pi-websearch-firecrawl](https://www.npmjs.com/package/pi-websearch-firecrawl) | 67 | `npm install pi-websearch-firecrawl` | Pi web search tool powered by Firecrawl (search + content extraction) |
| 85 | [pi-ollama-web-search](https://www.npmjs.com/package/pi-ollama-web-search) | 65 | `npm install pi-ollama-web-search` | pi extension adding Ollama web_search and web_fetch tools |
| 86 | [pi-skill-tavily](https://www.npmjs.com/package/pi-skill-tavily) | 62 | `npm install pi-skill-tavily` | Tavily web search, extract, crawl, and research skills for pi coding agent |
| 87 | [@wirebabel/pi-web-access](https://www.npmjs.com/package/@wirebabel/pi-web-access) | 60 | `npm install @wirebabel/pi-web-access` | Web search, URL fetching, GitHub repo cloning, PDF extraction, YouTube video understanding, and local video analysis fo… |
| 88 | [pi-webfetch-to-markdown](https://www.npmjs.com/package/pi-webfetch-to-markdown) | 53 | `npm install pi-webfetch-to-markdown` | Fetch web content as clean Markdown for AI consumption. Supports Cloudflare's Markdown for Agents content negotiation w… |
| 89 | [@clankie/web-search](https://www.npmjs.com/package/@clankie/web-search) | 52 | `npm install @clankie/web-search` | Headless web search and page extraction for clankie using CloakBrowser + Playwright |
| 90 | [@joemccann/pi-exa](https://www.npmjs.com/package/@joemccann/pi-exa) | 49 | `npm install @joemccann/pi-exa` | Exa AI semantic search and similarity tools for pi coding agent — search the web by meaning, find similar pages, filter… |
| 91 | [@yofriadi/pi-web-search](https://www.npmjs.com/package/@yofriadi/pi-web-search) | 49 | `npm install @yofriadi/pi-web-search` | Web search extension package for pi |
| 92 | [@arpagon/pi-web-providers](https://www.npmjs.com/package/@arpagon/pi-web-providers) | 47 | `npm install @arpagon/pi-web-providers` | Configurable web access extension for pi with per-tool provider routing for search, contents, answers, and research acr… |
| 93 | [@guwidoe/pi-web-search](https://www.npmjs.com/package/@guwidoe/pi-web-search) | 44 | `npm install @guwidoe/pi-web-search` | pi skill: web search via DuckDuckGo with optional page content extraction |
| 94 | [pi-scurl](https://www.npmjs.com/package/pi-scurl) | 43 | `npm install pi-scurl` | Secure web fetch for pi – HTML-to-markdown via mdream, secret scanning, prompt injection detection |
| 95 | [@rbwsam/pi-exa](https://www.npmjs.com/package/@rbwsam/pi-exa) | 40 | `npm install @rbwsam/pi-exa` | Pi extension integrating the Exa API for web search and content retrieval |
| 96 | [@edlsh/pi-web-tools](https://www.npmjs.com/package/@edlsh/pi-web-tools) | 37 | `npm install @edlsh/pi-web-tools` | Multi-provider web search, extract, research, and code-search tools for Pi coding agent |
| 97 | [pi-surf](https://www.npmjs.com/package/pi-surf) | 36 | `npm install pi-surf` | Surf the web from pi — clean URL fetching, pluggable search, and scout subagent that keeps noise out of your context |
| 98 | [@guwidoe/pi-web-fetch](https://www.npmjs.com/package/@guwidoe/pi-web-fetch) | 34 | `npm install @guwidoe/pi-web-fetch` | pi skill: fetch webpage content as markdown with fallback web search |
| 99 | [pi-native-web-search](https://www.npmjs.com/package/pi-native-web-search) | 27 | `npm install pi-native-web-search` | Adds a web_search tool powered by Anthropic's native web search — no third-party API key needed. Always runs via claude… |
| 100 | [pi-web-tools](https://www.npmjs.com/package/pi-web-tools) | 27 | `npm install pi-web-tools` | Web search via Exa, content extraction, and GitHub repo cloning for Pi coding agent |
| 101 | [@hngye02/pi-web-tools](https://www.npmjs.com/package/@hngye02/pi-web-tools) | 24 | `npm install @hngye02/pi-web-tools` | webfetch + websearch tools for Pi |
| 102 | [@burneikis/pi-web-search](https://www.npmjs.com/package/@burneikis/pi-web-search) | 22 | `npm install @burneikis/pi-web-search` | A claude native web search plugin for Pi. |
| 103 | [@mjakl/pi-git-research](https://www.npmjs.com/package/@mjakl/pi-git-research) | 22 | `npm install @mjakl/pi-git-research` | Tools for researching and exploring Git repositories with Pi agent |
| 104 | [@edmundmiller/pi-scurl](https://www.npmjs.com/package/@edmundmiller/pi-scurl) | 18 | `npm install @edmundmiller/pi-scurl` | Secure web fetch for pi – HTML-to-markdown via mdream, secret scanning, prompt injection detection |
| 105 | [@anhkhoa2109/pi-you-search](https://www.npmjs.com/package/@anhkhoa2109/pi-you-search) | 0 | `npm install @anhkhoa2109/pi-you-search` | Pi extension for web_you_search and web_you_fetch tools powered by You.com |
| 106 | [@davehardy20/pi-web-search](https://www.npmjs.com/package/@davehardy20/pi-web-search) | 0 | `npm install @davehardy20/pi-web-search` | Pi package for web search via Tavily API. |
| 107 | [@ersintarhan/pi-toolkit](https://www.npmjs.com/package/@ersintarhan/pi-toolkit) | 0 | `npm install @ersintarhan/pi-toolkit` | pi extension that registers Kimi, MiniMax, Xiaomi MiMo, and CrofAI providers with cache fix, Anthropic OAuth adapter, a… |
| 108 | [@xl0/pi-firecrawl](https://www.npmjs.com/package/@xl0/pi-firecrawl) | 0 | `npm install @xl0/pi-firecrawl` | 暂无描述 |
| 109 | [pi-agent-web-access](https://www.npmjs.com/package/pi-agent-web-access) | 0 | `npm install pi-agent-web-access` | Web search (Exa + Brave) and content extraction for Pi |
| 110 | [pi-search-hub](https://www.npmjs.com/package/pi-search-hub) | 0 | `npm install pi-search-hub` | Unified web search + content extraction extension for pi with 12 backends (DuckDuckGo, Jina AI, Tavily, Brave, Exa, Ser… |

</details>

<a id="userinteraction"></a>
## 用户交互
> 34 个包 · 总月下载量 85,716

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question) | 23,282 | `npm install @juicesharp/rpiv-ask-user-question` | Pi extension. A structured questionnaire the model can put to you when it would otherwi… |
| 2 | [@juicesharp/rpiv-todo](https://www.npmjs.com/package/@juicesharp/rpiv-todo) | 23,195 | `npm install @juicesharp/rpiv-todo` | Pi extension. A todo list for the model, rendered as a live overlay that survives /relo… |
| 3 | [@juicesharp/rpiv-btw](https://www.npmjs.com/package/@juicesharp/rpiv-btw) | 12,685 | `npm install @juicesharp/rpiv-btw` | Pi extension. The /btw slash command, for putting a one-off side question to the same p… |
| 4 | [pi-ask-user](https://www.npmjs.com/package/pi-ask-user) | 9,864 | `npm install pi-ask-user` | Interactive ask_user tool for pi-coding-agent with searchable split-pane selection UI,… |
| 5 | [pi-interview](https://www.npmjs.com/package/pi-interview) | 3,393 | `npm install pi-interview` | Interactive interview form extension for pi coding agent |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 34 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question) | 23,282 | `npm install @juicesharp/rpiv-ask-user-question` | Pi extension. A structured questionnaire the model can put to you when it would otherwise guess, with typed options ins… |
| 2 | [@juicesharp/rpiv-todo](https://www.npmjs.com/package/@juicesharp/rpiv-todo) | 23,195 | `npm install @juicesharp/rpiv-todo` | Pi extension. A todo list for the model, rendered as a live overlay that survives /reload and conversation compaction. |
| 3 | [@juicesharp/rpiv-btw](https://www.npmjs.com/package/@juicesharp/rpiv-btw) | 12,685 | `npm install @juicesharp/rpiv-btw` | Pi extension. The /btw slash command, for putting a one-off side question to the same primary model without polluting t… |
| 4 | [pi-ask-user](https://www.npmjs.com/package/pi-ask-user) | 9,864 | `npm install pi-ask-user` | Interactive ask_user tool for pi-coding-agent with searchable split-pane selection UI, multi-select, and freeform input |
| 5 | [pi-interview](https://www.npmjs.com/package/pi-interview) | 3,393 | `npm install pi-interview` | Interactive interview form extension for pi coding agent |
| 6 | [@narumitw/pi-btw](https://www.npmjs.com/package/@narumitw/pi-btw) | 1,419 | `npm install @narumitw/pi-btw` | Pi extension that adds a /btw side-question command. |
| 7 | [@tintinweb/pi-tasks](https://www.npmjs.com/package/@tintinweb/pi-tasks) | 1,400 | `npm install @tintinweb/pi-tasks` | A pi extension that brings Claude Code-style task tracking and coordination to pi. |
| 8 | [@ryan_nookpi/pi-extension-ask-user-question](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-ask-user-question) | 1,160 | `npm install @ryan_nookpi/pi-extension-ask-user-question` | AskUserQuestion tool extension for pi. |
| 9 | [pi-mono-ask-user-question](https://www.npmjs.com/package/pi-mono-ask-user-question) | 1,149 | `npm install pi-mono-ask-user-question` | Pi extension for asking users structured interactive questions |
| 10 | [pi-quests](https://www.npmjs.com/package/pi-quests) | 1,007 | `npm install pi-quests` | A quest-log for your pi. Keep your agent on track, one quest at a time. |
| 11 | [@agnishc/edb-todo](https://www.npmjs.com/package/@agnishc/edb-todo) | 855 | `npm install @agnishc/edb-todo` | Pi extension: structured task list with live widget and system-prompt injection to prevent goal drift |
| 12 | [@agnishc/edb-ask-user](https://www.npmjs.com/package/@agnishc/edb-ask-user) | 825 | `npm install @agnishc/edb-ask-user` | Pi extension: ask_user tool for structured questions — text, choice, and multi-step wizard |
| 13 | [pi-mono-btw](https://www.npmjs.com/package/pi-mono-btw) | 772 | `npm install pi-mono-btw` | Pi extension that answers side questions while the main agent keeps running |
| 14 | [@firstpick/pi-extension-todo-progress](https://www.npmjs.com/package/@firstpick/pi-extension-todo-progress) | 666 | `npm install @firstpick/pi-extension-todo-progress` | Aggressive automatic todo progress widget for multi-goal prompts in Pi. |
| 15 | [pi-manage-todo-list](https://www.npmjs.com/package/pi-manage-todo-list) | 666 | `npm install pi-manage-todo-list` | A pi extension that replicates GitHub Copilot's manage_todo_list tool |
| 16 | [@jeonghyeon.net/pi-tasks](https://www.npmjs.com/package/@jeonghyeon.net/pi-tasks) | 609 | `npm install @jeonghyeon.net/pi-tasks` | A pi extension that brings Claude Code-style task tracking and coordination to pi. |
| 17 | [@ryan_nookpi/pi-extension-todo-write-overlay](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-todo-write-overlay) | 593 | `npm install @ryan_nookpi/pi-extension-todo-write-overlay` | Top-right overlay todo_write tool extension for pi. |
| 18 | [@catdaemon/pi-agent-todos](https://www.npmjs.com/package/@catdaemon/pi-agent-todos) | 562 | `npm install @catdaemon/pi-agent-todos` | Conversation todo tools, prompt guidance, and status sidebar for Pi. |
| 19 | [@ryan_nookpi/pi-extension-todo-write](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-todo-write) | 351 | `npm install @ryan_nookpi/pi-extension-todo-write` | Todo write tool extension for pi. |
| 20 | [@mrclrchtr/supi-ask-user](https://www.npmjs.com/package/@mrclrchtr/supi-ask-user) | 267 | `npm install @mrclrchtr/supi-ask-user` | SuPi ask-user extension — rich questionnaire UI for structured agent-user decisions |
| 21 | [@haphazarddev/pi-ask-user-question](https://www.npmjs.com/package/@haphazarddev/pi-ask-user-question) | 259 | `npm install @haphazarddev/pi-ask-user-question` | A pi extension that adds an ask_user_question tool for collecting clarification, confirmation, and input through the UI. |
| 22 | [@shiina18/pi-ask-user-question](https://www.npmjs.com/package/@shiina18/pi-ask-user-question) | 233 | `npm install @shiina18/pi-ask-user-question` | Claude Code-like ask_user_question tool for Pi |
| 23 | [ai-call](https://www.npmjs.com/package/ai-call) | 156 | `npm install ai-call` | AI-driven structured interview skill for coding agents. The agent asks questions one by one, follows up naturally, and… |
| 24 | [@datspike/pi-ask-user](https://www.npmjs.com/package/@datspike/pi-ask-user) | 104 | `npm install @datspike/pi-ask-user` | Interactive ask_user tool for pi-coding-agent with wrapped selection UI, batch clarifications, and freeform input |
| 25 | [@zgltyq/pi-ask-user](https://www.npmjs.com/package/@zgltyq/pi-ask-user) | 79 | `npm install @zgltyq/pi-ask-user` | Interactive ask_user tool for pi-coding-agent with searchable split-pane selection UI, multi-select, and freeform input |
| 26 | [@carter-mcalister/pi-codex-ask-user](https://www.npmjs.com/package/@carter-mcalister/pi-codex-ask-user) | 40 | `npm install @carter-mcalister/pi-codex-ask-user` | Codex-compatible request_user_input tool for Pi |
| 27 | [pi-ask-user-question](https://www.npmjs.com/package/pi-ask-user-question) | 35 | `npm install pi-ask-user-question` | Adds an askUserQuestion tool that lets the model pause and ask the user a clarifying question before proceeding. |
| 28 | [@jerryan/pi-task-tree](https://www.npmjs.com/package/@jerryan/pi-task-tree) | 32 | `npm install @jerryan/pi-task-tree` | Nested task list with completed tracking and focus mode for pi |
| 29 | [@patriceckhart/pi-todo](https://www.npmjs.com/package/@patriceckhart/pi-todo) | 30 | `npm install @patriceckhart/pi-todo` | A pi extension for managing todos synced with Apple Reminders |
| 30 | [@artale/pi-todo](https://www.npmjs.com/package/@artale/pi-todo) | 28 | `npm install @artale/pi-todo` | Persistent todo list for Pi. Track tasks across sessions with priorities, tags, and due dates. |
| 31 | [@alexleekt/pi-ask-user-glimpse](https://www.npmjs.com/package/@alexleekt/pi-ask-user-glimpse) | 0 | `npm install @alexleekt/pi-ask-user-glimpse` | Pi extension that replaces ask_user with rich native WebView dialogs via glimpseui and shadcn/ui |
| 32 | [@bumpyclock/pi-tasque](https://www.npmjs.com/package/@bumpyclock/pi-tasque) | 0 | `npm install @bumpyclock/pi-tasque` | Pi extension package for Tasque durable tasks plus in-session todos. |
| 33 | [@diegopetrucci/pi-todo](https://www.npmjs.com/package/@diegopetrucci/pi-todo) | 0 | `npm install @diegopetrucci/pi-todo` | A pi extension that adds a branch-aware todo tool and /todos viewer. |
| 34 | [@hugo-hsi-dev/pi-interactive-questionnaire](https://www.npmjs.com/package/@hugo-hsi-dev/pi-interactive-questionnaire) | 0 | `npm install @hugo-hsi-dev/pi-interactive-questionnaire` | Pi extension for asking users structured questions with choices and a custom answer path. |

</details>

<a id="tui"></a>
## 终端 UI
> 111 个包 · 总月下载量 82,376

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-powerline-footer](https://www.npmjs.com/package/pi-powerline-footer) | 13,938 | `npm install pi-powerline-footer` | Powerline-style status bar extension for pi coding agent |
| 2 | [pi-btw](https://www.npmjs.com/package/pi-btw) | 9,524 | `npm install pi-btw` | A pi extension for parallel side conversations with /btw |
| 3 | [pi-mermaid](https://www.npmjs.com/package/pi-mermaid) | 4,384 | `npm install pi-mermaid` | 🧜‍♀️ Pi extension that renders Mermaid diagrams as ASCII in the TUI |
| 4 | [pi-tool-display](https://www.npmjs.com/package/pi-tool-display) | 3,636 | `npm install pi-tool-display` | Compact tool call rendering, diff visualization, and output truncation extension for Pi… |
| 5 | [amp-themes](https://www.npmjs.com/package/amp-themes) | 3,264 | `npm install amp-themes` | Amp-inspired Pi UI suite: theme, editor chrome, and compact tool display. |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 111 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-powerline-footer](https://www.npmjs.com/package/pi-powerline-footer) | 13,938 | `npm install pi-powerline-footer` | Powerline-style status bar extension for pi coding agent |
| 2 | [pi-btw](https://www.npmjs.com/package/pi-btw) | 9,524 | `npm install pi-btw` | A pi extension for parallel side conversations with /btw |
| 3 | [pi-mermaid](https://www.npmjs.com/package/pi-mermaid) | 4,384 | `npm install pi-mermaid` | 🧜‍♀️ Pi extension that renders Mermaid diagrams as ASCII in the TUI |
| 4 | [pi-tool-display](https://www.npmjs.com/package/pi-tool-display) | 3,636 | `npm install pi-tool-display` | Compact tool call rendering, diff visualization, and output truncation extension for Pi coding agent. Hides, collapses,… |
| 5 | [amp-themes](https://www.npmjs.com/package/amp-themes) | 3,264 | `npm install amp-themes` | Amp-inspired Pi UI suite: theme, editor chrome, and compact tool display. |
| 6 | [@narumitw/pi-statusline](https://www.npmjs.com/package/@narumitw/pi-statusline) | 2,651 | `npm install @narumitw/pi-statusline` | Pi extension that replaces the footer with an information-rich statusline. |
| 7 | [@juanibiapina/pi-powerbar](https://www.npmjs.com/package/@juanibiapina/pi-powerbar) | 2,472 | `npm install @juanibiapina/pi-powerbar` | Pi extension that renders a persistent powerline status bar with left/right segments updated via events |
| 8 | [pi-powerline](https://www.npmjs.com/package/pi-powerline) | 1,768 | `npm install pi-powerline` | Powerline-style UI extensions for pi coding agent (custom editor, breadcrumb, footer, header) |
| 9 | [pi-glance](https://www.npmjs.com/package/pi-glance) | 1,747 | `npm install pi-glance` | A polished input surface extension for pi, with a rounded multiline editor and inline model/context/status glance. |
| 10 | [pi-resource-center](https://www.npmjs.com/package/pi-resource-center) | 1,615 | `npm install pi-resource-center` | Pi package for browsing packages, skills, extensions, prompts, and themes |
| 11 | [pi-thinking-steps](https://www.npmjs.com/package/pi-thinking-steps) | 1,553 | `npm install pi-thinking-steps` | Professional three-mode thinking-step rendering for Pi's TUI. |
| 12 | [@feniix/pi-statusline](https://www.npmjs.com/package/@feniix/pi-statusline) | 1,515 | `npm install @feniix/pi-statusline` | Fixed two-line status footer for pi with model, thinking, context, git, token, worktree, and skill indicators |
| 13 | [@mazli/pi-ask-user-question](https://www.npmjs.com/package/@mazli/pi-ask-user-question) | 1,105 | `npm install @mazli/pi-ask-user-question` | Claude Code-style AskUserQuestion tool for pi. |
| 14 | [pi-questions](https://www.npmjs.com/package/pi-questions) | 1,092 | `npm install pi-questions` | Minimal ask_questions tool for Pi |
| 15 | [pi-tldr](https://www.npmjs.com/package/pi-tldr) | 1,071 | `npm install pi-tldr` | A pi coding-agent extension that shows live TLDRs above the input bar. |
| 16 | [awto-pi-lot](https://www.npmjs.com/package/awto-pi-lot) | 1,055 | `npm install awto-pi-lot` | pi-coding-agent extension that adds PPQ.ai provider and their AutoClaw model |
| 17 | [@codexstar/pi-pompom](https://www.npmjs.com/package/@codexstar/pi-pompom) | 1,041 | `npm install @codexstar/pi-pompom` | Pi-Pompom — A 3D raymarched virtual pet with voice, ambient weather sounds, AI side chat, agent tracking, and 23 layere… |
| 18 | [@firstpick/pi-extension-git-footer-status](https://www.npmjs.com/package/@firstpick/pi-extension-git-footer-status) | 1,027 | `npm install @firstpick/pi-extension-git-footer-status` | Enhanced Pi footer with git status, token usage, context usage, and model telemetry. |
| 19 | [@pi-unipi/footer](https://www.npmjs.com/package/@pi-unipi/footer) | 1,025 | `npm install @pi-unipi/footer` | Persistent status bar for Unipi — subscribes to UNIPI_EVENTS and renders key stats from all unipi packages |
| 20 | [@axnic/pi-aks-user-question](https://www.npmjs.com/package/@axnic/pi-aks-user-question) | 967 | `npm install @axnic/pi-aks-user-question` | Pi extension — lets LLMs ask structured questions to the user via an interactive TUI form |
| 21 | [@neilurk12/pi-clean-footer](https://www.npmjs.com/package/@neilurk12/pi-clean-footer) | 941 | `npm install @neilurk12/pi-clean-footer` | Clean, minimal, and lightweight powerline-style footer extension for pi coding agent. |
| 22 | [pi-fancy-footer](https://www.npmjs.com/package/pi-fancy-footer) | 927 | `npm install pi-fancy-footer` | A fancy footer extension for pi |
| 23 | [@ocodista/pi-token-bloat](https://www.npmjs.com/package/@ocodista/pi-token-bloat) | 911 | `npm install @ocodista/pi-token-bloat` | Pi extension that estimates model-facing context footprint by resource. |
| 24 | [pi-jarvis](https://www.npmjs.com/package/pi-jarvis) | 884 | `npm install pi-jarvis` | A /jarvis side-conversation overlay extension for Pi. |
| 25 | [oh-pi](https://www.npmjs.com/package/oh-pi) | 872 | `npm install oh-pi` | One-click setup for pi-coding-agent. Like oh-my-zsh for pi. |
| 26 | [pi-powerline-melbourne](https://www.npmjs.com/package/pi-powerline-melbourne) | 868 | `npm install pi-powerline-melbourne` | Custom pi extensions, including a nerd-style powerline footer with context token count |
| 27 | [@ifi/oh-pi](https://www.npmjs.com/package/@ifi/oh-pi) | 867 | `npm install @ifi/oh-pi` | One-click setup for pi-coding-agent — extensions, themes, prompts, skills, and ant-colony swarm. Like oh-my-zsh for pi. |
| 28 | [@termdraw/pi](https://www.npmjs.com/package/@termdraw/pi) | 821 | `npm install @termdraw/pi` | Pi extension package that embeds termDRAW inside Pi via opentui-island. |
| 29 | [@agnishc/edb-global-footer](https://www.npmjs.com/package/@agnishc/edb-global-footer) | 815 | `npm install @agnishc/edb-global-footer` | Pi extension: two-line status footer showing path, git branch, token usage, and model |
| 30 | [@spences10/pi-git-ui](https://www.npmjs.com/package/@spences10/pi-git-ui) | 794 | `npm install @spences10/pi-git-ui` | Focused in-Pi Git staging, diff review, and commit modal for agent-assisted coding workflows |
| 31 | [pi-i18n](https://www.npmjs.com/package/pi-i18n) | 751 | `npm install pi-i18n` | /lang lets pi speak 中文, 日本語, 한국어, Español, Français, Deutsch, and more. |
| 32 | [@badliveware/pi-footer-framework](https://www.npmjs.com/package/@badliveware/pi-footer-framework) | 745 | `npm install @badliveware/pi-footer-framework` | Configurable footer framework extension for Pi. |
| 33 | [pi-easy-footer](https://www.npmjs.com/package/pi-easy-footer) | 721 | `npm install pi-easy-footer` | A footer extension and session banner for pi |
| 34 | [@qhn/pi-goal](https://www.npmjs.com/package/@qhn/pi-goal) | 667 | `npm install @qhn/pi-goal` | Setup-first autonomous goal mode extension for Pi. |
| 35 | [pi-vitals](https://www.npmjs.com/package/pi-vitals) | 650 | `npm install pi-vitals` | A customizable powerline-style footer for pi |
| 36 | [pi-footer](https://www.npmjs.com/package/pi-footer) | 637 | `npm install pi-footer` | Configurable, Ultimate multi-line footer/statusline extension for pi |
| 37 | [@todu/pi-extensions](https://www.npmjs.com/package/@todu/pi-extensions) | 625 | `npm install @todu/pi-extensions` | Task manager extensions for the pi agent harness that create UI for handling tasks. |
| 38 | [@wierdbytes/pi-facelift](https://www.npmjs.com/package/@wierdbytes/pi-facelift) | 605 | `npm install @wierdbytes/pi-facelift` | Cosmetic facelift for built-in pi tool output — open-right rounded frames, syntax-highlighted reads, status-aware bash… |
| 39 | [pi-thinking-box](https://www.npmjs.com/package/pi-thinking-box) | 596 | `npm install pi-thinking-box` | Wrap Pi agent thinking blocks in a styled background box. |
| 40 | [pi-screenshots-picker](https://www.npmjs.com/package/pi-screenshots-picker) | 590 | `npm install pi-screenshots-picker` | Screenshot picker extension for pi coding agent - quickly select and attach screenshots to your prompts |
| 41 | [pi-service-tier](https://www.npmjs.com/package/pi-service-tier) | 580 | `npm install pi-service-tier` | Fast mode and provider service-tier controls for pi |
| 42 | [pi-cache-graph](https://www.npmjs.com/package/pi-cache-graph) | 542 | `npm install pi-cache-graph` | Pi extension for visualizing context cache distribution and statistics |
| 43 | [@diegopetrucci/pi-minimal-footer](https://www.npmjs.com/package/@diegopetrucci/pi-minimal-footer) | 527 | `npm install @diegopetrucci/pi-minimal-footer` | A minimal custom footer for pi. |
| 44 | [@carlosgtrz/pi-run-timer](https://www.npmjs.com/package/@carlosgtrz/pi-run-timer) | 519 | `npm install @carlosgtrz/pi-run-timer` | Pi extension that shows elapsed, previous, and longest agent run times in the footer. |
| 45 | [pi-model-effort-coloring](https://www.npmjs.com/package/pi-model-effort-coloring) | 495 | `npm install pi-model-effort-coloring` | Pi extension that colors the current model name and thinking/effort level in the footer without changing layout. |
| 46 | [pi-kimi-usage](https://www.npmjs.com/package/pi-kimi-usage) | 409 | `npm install pi-kimi-usage` | Shows Kimi usage in the pi status bar when a Kimi model is selected |
| 47 | [pi-footer-mode](https://www.npmjs.com/package/pi-footer-mode) | 407 | `npm install pi-footer-mode` | Zen/dev footer mode extension for Pi |
| 48 | [@zackify/pi-bg-tasks](https://www.npmjs.com/package/@zackify/pi-bg-tasks) | 385 | `npm install @zackify/pi-bg-tasks` | A pi extension that runs and manages background commands in tmux. |
| 49 | [pi-zentui](https://www.npmjs.com/package/pi-zentui) | 382 | `npm install pi-zentui` | A Starship-inspired statusline and Opencode-style TUI for Pi. |
| 50 | [@zackify/pi-port-forward](https://www.npmjs.com/package/@zackify/pi-port-forward) | 381 | `npm install @zackify/pi-port-forward` | A pi extension that adds an interactive SSH local port forwarding command. |
| 51 | [pi-thinking](https://www.npmjs.com/package/pi-thinking) | 371 | `npm install pi-thinking` | Muted, themed rendering for thinking blocks in pi. |
| 52 | [pi-starship](https://www.npmjs.com/package/pi-starship) | 355 | `npm install pi-starship` | Starship-powered footer for pi — with PR number, model info, token counts, and thinking level |
| 53 | [pi-bash-live-view](https://www.npmjs.com/package/pi-bash-live-view) | 352 | `npm install pi-bash-live-view` | A pi extension that adds optional PTY-backed live terminal rendering to the bash tool via usePTY=true. |
| 54 | [pi-recap](https://www.npmjs.com/package/pi-recap) | 343 | `npm install pi-recap` | Session recap panel for pi coding agent. Always-visible widget showing the current goal and last few conversation turns… |
| 55 | [pi-peek](https://www.npmjs.com/package/pi-peek) | 341 | `npm install pi-peek` | A pi extension for browsing current session scrollback in an overlay. |
| 56 | [@thurstonsand/pi-powerline-footer](https://www.npmjs.com/package/@thurstonsand/pi-powerline-footer) | 336 | `npm install @thurstonsand/pi-powerline-footer` | Powerline-style status bar extension for pi coding agent |
| 57 | [pi-session-cleanup](https://www.npmjs.com/package/pi-session-cleanup) | 289 | `npm install pi-session-cleanup` | Pi extension for interactive batch session cleanup and safe deletion. |
| 58 | [@rexkit/pi-lazygit](https://www.npmjs.com/package/@rexkit/pi-lazygit) | 266 | `npm install @rexkit/pi-lazygit` | Pi package that opens Lazygit in a floating overlay window. |
| 59 | [pi-tmux-cursor-focus](https://www.npmjs.com/package/pi-tmux-cursor-focus) | 252 | `npm install pi-tmux-cursor-focus` | Pi extension that hides the editor cursor in unfocused tmux panes without replacing other editor/status extensions |
| 60 | [pi-model-cycler](https://www.npmjs.com/package/pi-model-cycler) | 248 | `npm install pi-model-cycler` | Interactive model switcher for Pi coding agent — browse, search, favorite, and cycle models from the TUI |
| 61 | [pi-emote](https://www.npmjs.com/package/pi-emote) | 244 | `npm install pi-emote` | Animated pixel-art emote widget for pi TUI |
| 62 | [pi-statusline](https://www.npmjs.com/package/pi-statusline) | 231 | `npm install pi-statusline` | Claude Code-compatible command-driven statusline extension for the Pi coding agent |
| 63 | [@jqwn/pi-ask-user-question](https://www.npmjs.com/package/@jqwn/pi-ask-user-question) | 213 | `npm install @jqwn/pi-ask-user-question` | A Pi extension that lets the model ask rich multi-question TUI dialogs with options, descriptions, previews, multi-sele… |
| 64 | [pi-animations](https://www.npmjs.com/package/pi-animations) | 203 | `npm install pi-animations` | Animated thinking/working/tool indicators for the Pi coding agent — 21 terminal animations with ANSI true color and Ner… |
| 65 | [@haispeed/pi-deck](https://www.npmjs.com/package/@haispeed/pi-deck) | 171 | `npm install @haispeed/pi-deck` | A theme and footer enhancement pack for pi |
| 66 | [pi-overwatch](https://www.npmjs.com/package/pi-overwatch) | 134 | `npm install pi-overwatch` | Minimal TUI observability for Pi sessions, with tmux session awareness and cwd fallback |
| 67 | [pi-copy-response](https://www.npmjs.com/package/pi-copy-response) | 121 | `npm install pi-copy-response` | Pi package for copying the latest assistant response with a code-block picker, live preview, and optional /copy override |
| 68 | [pi-session-name-editor](https://www.npmjs.com/package/pi-session-name-editor) | 107 | `npm install pi-session-name-editor` | Pi extension that shows a context-aware label in the editor border and a custom footer with token stats |
| 69 | [pi-git-status-line](https://www.npmjs.com/package/pi-git-status-line) | 101 | `npm install pi-git-status-line` | Shareable Pi package that extends the status line with git branch, uncommitted files, and ahead/behind counts. |
| 70 | [@gravewhisper/pi-theme-monokai-classic](https://www.npmjs.com/package/@gravewhisper/pi-theme-monokai-classic) | 85 | `npm install @gravewhisper/pi-theme-monokai-classic` | A Monokai Classic theme for Pi with softer borders, balanced code colors, and neutral tool panels. |
| 71 | [@jademind/pi-bridge](https://www.npmjs.com/package/@jademind/pi-bridge) | 84 | `npm install @jademind/pi-bridge` | Minimal secure inbox bridge for Pi: reliable queued/steering message delivery to running sessions. |
| 72 | [@hyperprior/pi-shared](https://www.npmjs.com/package/@hyperprior/pi-shared) | 82 | `npm install @hyperprior/pi-shared` | Shared helpers for Hyperprior pi plugins |
| 73 | [@siddr/pi-tool-display](https://www.npmjs.com/package/@siddr/pi-tool-display) | 82 | `npm install @siddr/pi-tool-display` | Compact built-in tool rendering overrides for pi |
| 74 | [@peteturnbull/pi-extensions](https://www.npmjs.com/package/@peteturnbull/pi-extensions) | 79 | `npm install @peteturnbull/pi-extensions` | A pi extension pack with a local task board TUI and a deterministic docs-store with qmd-powered search. |
| 75 | [pi-beads](https://www.npmjs.com/package/pi-beads) | 77 | `npm install pi-beads` | pi extension for beads (bd) task management |
| 76 | [claudemon](https://www.npmjs.com/package/claudemon) | 77 | `npm install claudemon` | Claude Usage Monitor TUI - monitor your Claude usage in real-time |
| 77 | [@tanvesh01/pierre-diffs](https://www.npmjs.com/package/@tanvesh01/pierre-diffs) | 74 | `npm install @tanvesh01/pierre-diffs` | Pierre-themed inline diff renderer for Pi edit and write tool results. |
| 78 | [pi-codex-footer](https://www.npmjs.com/package/pi-codex-footer) | 71 | `npm install pi-codex-footer` | Pi extension that adds a 2-line footer with live OpenAI Codex 5h/7d quota usage and reset timers. |
| 79 | [pi-langlearn](https://www.npmjs.com/package/pi-langlearn) | 56 | `npm install pi-langlearn` | Duolingo-esque language learning overlay for Pi |
| 80 | [@diegopetrucci/pi-quiet-tools](https://www.npmjs.com/package/@diegopetrucci/pi-quiet-tools) | 54 | `npm install @diegopetrucci/pi-quiet-tools` | A pi extension that visually compacts collapsed built-in tool rows in the TUI without changing tool results sent to the… |
| 81 | [@zenobius/pi-footer](https://www.npmjs.com/package/@zenobius/pi-footer) | 46 | `npm install @zenobius/pi-footer` | A customisable footer component for the Pi Coding Agent interface. |
| 82 | [pi-ask-me](https://www.npmjs.com/package/pi-ask-me) | 44 | `npm install pi-ask-me` | A unique question/interview tool for pi coding agent with branched chats within the question interface |
| 83 | [@modemdev/glance-pi](https://www.npmjs.com/package/@modemdev/glance-pi) | 37 | `npm install @modemdev/glance-pi` | glance.sh extension package for pi |
| 84 | [@hyperprior/pi-browser](https://www.npmjs.com/package/@hyperprior/pi-browser) | 35 | `npm install @hyperprior/pi-browser` | Lightweight browser helper tools |
| 85 | [@rhobot-dev/pi-ralph](https://www.npmjs.com/package/@rhobot-dev/pi-ralph) | 33 | `npm install @rhobot-dev/pi-ralph` | pi extension/package to manage ralph loops from within the pi TUI |
| 86 | [pi-model-picker](https://www.npmjs.com/package/pi-model-picker) | 33 | `npm install pi-model-picker` | Categorized, keyboard-driven model selector for the pi coding agent |
| 87 | [@hyperprior/pi-ssh](https://www.npmjs.com/package/@hyperprior/pi-ssh) | 30 | `npm install @hyperprior/pi-ssh` | Remote command execution via SSH |
| 88 | [pi-tmux-focus-cursor](https://www.npmjs.com/package/pi-tmux-focus-cursor) | 29 | `npm install pi-tmux-focus-cursor` | Hide Pi's fake editor cursor when the current tmux pane loses focus |
| 89 | [@hyperprior/pi-ask](https://www.npmjs.com/package/@hyperprior/pi-ask) | 26 | `npm install @hyperprior/pi-ask` | Structured question/answer tool for pi sessions |
| 90 | [@hyperprior/pi-safety](https://www.npmjs.com/package/@hyperprior/pi-safety) | 26 | `npm install @hyperprior/pi-safety` | Confirmation and protection layer for dangerous git/bash/edit/write actions |
| 91 | [@edmundmiller/pi-beads](https://www.npmjs.com/package/@edmundmiller/pi-beads) | 25 | `npm install @edmundmiller/pi-beads` | pi extension for beads (bd) task management |
| 92 | [@ifiokjr/oh-pi](https://www.npmjs.com/package/@ifiokjr/oh-pi) | 24 | `npm install @ifiokjr/oh-pi` | One-click setup for pi-coding-agent — extensions, themes, prompts, skills, and ant-colony swarm. Like oh-my-zsh for pi. |
| 93 | [@hyperprior/pi-python](https://www.npmjs.com/package/@hyperprior/pi-python) | 22 | `npm install @hyperprior/pi-python` | Run Python commands from within pi |
| 94 | [@hyperprior/pi-todo](https://www.npmjs.com/package/@hyperprior/pi-todo) | 21 | `npm install @hyperprior/pi-todo` | Branch-safe todo extension for pi |
| 95 | [@hyperprior/pi-web](https://www.npmjs.com/package/@hyperprior/pi-web) | 19 | `npm install @hyperprior/pi-web` | Web helpers for search and fetch |
| 96 | [@hyperprior/pi-commit](https://www.npmjs.com/package/@hyperprior/pi-commit) | 18 | `npm install @hyperprior/pi-commit` | Git commit helper tooling for pi |
| 97 | [@hyperprior/pi-review](https://www.npmjs.com/package/@hyperprior/pi-review) | 18 | `npm install @hyperprior/pi-review` | Structured review findings for code review workflows |
| 98 | [@hyperprior/pi-model-roles](https://www.npmjs.com/package/@hyperprior/pi-model-roles) | 14 | `npm install @hyperprior/pi-model-roles` | Role-based model switching utility (/hyper-role) |
| 99 | [@hyperprior/pi-bundle](https://www.npmjs.com/package/@hyperprior/pi-bundle) | 13 | `npm install @hyperprior/pi-bundle` | Meta package installing all Hyperprior pi plugins |
| 100 | [@bumpyclock/pi-statusbar](https://www.npmjs.com/package/@bumpyclock/pi-statusbar) | 0 | `npm install @bumpyclock/pi-statusbar` | Status bar extension for pi coding agent |
| 101 | [@dustydonkey/pi-spinner](https://www.npmjs.com/package/@dustydonkey/pi-spinner) | 0 | `npm install @dustydonkey/pi-spinner` | Smooth working spinner with shimmering verbs for Pi — inspired by Claude Code |
| 102 | [@furbyhaxx/pi-fancy-editor](https://www.npmjs.com/package/@furbyhaxx/pi-fancy-editor) | 0 | `npm install @furbyhaxx/pi-fancy-editor` | Pi extension that replaces the input editor with a responsive status-border editor and compact footer using the active… |
| 103 | [@oddsjam/pi-sandbox](https://www.npmjs.com/package/@oddsjam/pi-sandbox) | 0 | `npm install @oddsjam/pi-sandbox` | OS-level sandbox for pi using @anthropic-ai/sandbox-runtime, with an in-pi configure wizard, shift+tab toggle, and long… |
| 104 | [@spences10/pi-footer](https://www.npmjs.com/package/@spences10/pi-footer) | 0 | `npm install @spences10/pi-footer` | Configurable Pi footer/statusline that keeps model, project, Git, token, and runtime state visible |
| 105 | [pi-catppuccin-footer](https://www.npmjs.com/package/pi-catppuccin-footer) | 0 | `npm install pi-catppuccin-footer` | A Catppuccin/tmux-style configurable footer extension for Pi. |
| 106 | [pi-coder-theme](https://www.npmjs.com/package/pi-coder-theme) | 0 | `npm install pi-coder-theme` | Pi Coder Theme UI suite for Pi: theme, editor chrome, and compact tool display. |
| 107 | [pi-ghost-autocomplete](https://www.npmjs.com/package/pi-ghost-autocomplete) | 0 | `npm install pi-ghost-autocomplete` | Inline ghost-text autocomplete extension for the Pi coding agent (pi.dev). Cloud and local LLM providers, zero-flicker… |
| 108 | [pi-git-graph-sidebar](https://www.npmjs.com/package/pi-git-graph-sidebar) | 0 | `npm install pi-git-graph-sidebar` | A VS Code Git Graph-style sidebar overlay for the Pi coding agent TUI. |
| 109 | [pi-toast](https://www.npmjs.com/package/pi-toast) | 0 | `npm install pi-toast` | Ephemeral toast overlays for the Pi TUI |
| 110 | [pi-working-phrase](https://www.npmjs.com/package/pi-working-phrase) | 0 | `npm install pi-working-phrase` | A tiny Pi extension that replaces Pi's working status with shuffled phrases, a colored spinner, and an animated shine g… |
| 111 | [pi-working-vibe](https://www.npmjs.com/package/pi-working-vibe) | 0 | `npm install pi-working-vibe` | Custom Working… message + tool-aware spinner for pi. Vibe files with [default] and [tool:<name>] sections; ships with m… |

</details>

<a id="workflow"></a>
## 工作流
> 49 个包 · 总月下载量 65,325

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@plannotator/pi-extension](https://www.npmjs.com/package/@plannotator/pi-extension) | 25,787 | `npm install @plannotator/pi-extension` | Plannotator Pi extension - interactive plan review with annotations, annotate agent mes… |
| 2 | [pi-gsd](https://www.npmjs.com/package/pi-gsd) | 2,503 | `npm install pi-gsd` | Get Shit Done - Unofficial port of the renowned AI-native project-planning spec-driven… |
| 3 | [@juicesharp/rpiv-pi](https://www.npmjs.com/package/@juicesharp/rpiv-pi) | 11,733 | `npm install @juicesharp/rpiv-pi` | A skill-based development workflow for Pi Agent. Five skills (research, design, plan, i… |
| 4 | [@pi-unipi/workflow](https://www.npmjs.com/package/@pi-unipi/workflow) | 2,979 | `npm install @pi-unipi/workflow` | Structured development workflow commands for Pi coding agent |
| 5 | [@tianhai/pi-workflow-kit](https://www.npmjs.com/package/@tianhai/pi-workflow-kit) | 1,986 | `npm install @tianhai/pi-workflow-kit` | Enforce structured brainstorm→plan→execute→finalize workflow with TDD discipline in AI… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 49 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@plannotator/pi-extension](https://www.npmjs.com/package/@plannotator/pi-extension) | 25,787 | `npm install @plannotator/pi-extension` | Plannotator Pi extension - interactive plan review with annotations, annotate agent messages, and review code/PRs |
| 2 | [pi-gsd](https://www.npmjs.com/package/pi-gsd) | 2,503 | `npm install pi-gsd` | Get Shit Done - Unofficial port of the renowned AI-native project-planning spec-driven toolkit |
| 3 | [@juicesharp/rpiv-pi](https://www.npmjs.com/package/@juicesharp/rpiv-pi) | 11,733 | `npm install @juicesharp/rpiv-pi` | A skill-based development workflow for Pi Agent. Five skills (research, design, plan, implement, validate) and the shar… |
| 4 | [@pi-unipi/workflow](https://www.npmjs.com/package/@pi-unipi/workflow) | 2,979 | `npm install @pi-unipi/workflow` | Structured development workflow commands for Pi coding agent |
| 5 | [@tianhai/pi-workflow-kit](https://www.npmjs.com/package/@tianhai/pi-workflow-kit) | 1,986 | `npm install @tianhai/pi-workflow-kit` | Enforce structured brainstorm→plan→execute→finalize workflow with TDD discipline in AI coding agents |
| 6 | [@apolosan/idea-refinement](https://www.npmjs.com/package/@apolosan/idea-refinement) | 1,969 | `npm install @apolosan/idea-refinement` | Pi Coding Agent extension that runs a forced iterative idea-refinement workflow via the /idea-refine command. |
| 7 | [@ifi/pi-spec](https://www.npmjs.com/package/@ifi/pi-spec) | 1,778 | `npm install @ifi/pi-spec` | Native spec-kit workflow for pi with a /spec command, TypeScript scaffolding, and spec-driven prompts. |
| 8 | [@pi-unipi/kanboard](https://www.npmjs.com/package/@pi-unipi/kanboard) | 1,610 | `npm install @pi-unipi/kanboard` | Visualization layer for unipi workflow — HTTP server with htmx/Alpine.js UI, modular parsers, TUI overlay, and kanban b… |
| 9 | [@narumitw/pi-plan-mode](https://www.npmjs.com/package/@narumitw/pi-plan-mode) | 1,414 | `npm install @narumitw/pi-plan-mode` | Pi extension that adds a Codex-like read-only /plan collaboration mode. |
| 10 | [gedpi](https://www.npmjs.com/package/gedpi) | 1,126 | `npm install gedpi` | Single-agent Pi package that clarifies requests, documents the spec, and implements work in bounded slices. |
| 11 | [omni-pi](https://www.npmjs.com/package/omni-pi) | 1,120 | `npm install omni-pi` | Single-agent Pi package that interviews the user, documents the spec, and implements work in bounded slices. |
| 12 | [pi-obsidian-vault](https://www.npmjs.com/package/pi-obsidian-vault) | 946 | `npm install pi-obsidian-vault` | Agent-safe Obsidian vault access for Pi: auto-detect, retrieve, validate, plan, write, edit, manage, and explicitly des… |
| 13 | [@howaboua/pi-markdown-workflows](https://www.npmjs.com/package/@howaboua/pi-markdown-workflows) | 885 | `npm install @howaboua/pi-markdown-workflows` | Pi extension with workflows tools and embedded subdirectory AGENTS.md context loading |
| 14 | [@saber7ooth/pi-archon](https://www.npmjs.com/package/@saber7ooth/pi-archon) | 815 | `npm install @saber7ooth/pi-archon` | Archon workflow extension package for Pi coding agent |
| 15 | [@firstpick/pi-extension-plan-mode-toggle](https://www.npmjs.com/package/@firstpick/pi-extension-plan-mode-toggle) | 783 | `npm install @firstpick/pi-extension-plan-mode-toggle` | Toggleable planning mode extension for Pi with model switching, mandatory planning survey, and PLAN.md quality guards. |
| 16 | [@davidorex/pi-workflows](https://www.npmjs.com/package/@davidorex/pi-workflows) | 759 | `npm install @davidorex/pi-workflows` | Workflow orchestration extension for Pi |
| 17 | [@artale/pi-skills](https://www.npmjs.com/package/@artale/pi-skills) | 756 | `npm install @artale/pi-skills` | Production-grade engineering skills for Pi |
| 18 | [@casualjim/pi-superpowers](https://www.npmjs.com/package/@casualjim/pi-superpowers) | 693 | `npm install @casualjim/pi-superpowers` | Canonical Superpowers workflow skills and runtime guardrails for pi |
| 19 | [visual-explainer](https://www.npmjs.com/package/visual-explainer) | 683 | `npm install visual-explainer` | Agent skill that generates beautiful HTML pages for diagrams, diff reviews, plan reviews, slide decks, and data tables |
| 20 | [pi-ralplan](https://www.npmjs.com/package/pi-ralplan) | 562 | `npm install pi-ralplan` | Consensus-driven planning extension for Pi |
| 21 | [@davidorex/pi-project-workflows](https://www.npmjs.com/package/@davidorex/pi-project-workflows) | 493 | `npm install @davidorex/pi-project-workflows` | Pi extensions for structured project state, workflow orchestration, and behavior monitoring — single install for all th… |
| 22 | [@majorgilles/pi-grill-me](https://www.npmjs.com/package/@majorgilles/pi-grill-me) | 472 | `npm install @majorgilles/pi-grill-me` | Socratic planning and shared-understanding sessions for pi. |
| 23 | [pi-agent-codebase-workflows](https://www.npmjs.com/package/pi-agent-codebase-workflows) | 396 | `npm install pi-agent-codebase-workflows` | Pi skills and prompt templates for safe greenfield starts, codebase reconstruction, architecture-aware review, and safe… |
| 24 | [pi-session-router](https://www.npmjs.com/package/pi-session-router) | 368 | `npm install pi-session-router` | Pi extension that uses an LLM to route new prompts into the most relevant existing session before continuing |
| 25 | [@rpollard00/pi-materia](https://www.npmjs.com/package/@rpollard00/pi-materia) | 355 | `npm install @rpollard00/pi-materia` | A Pi extension for configurable, materia-themed agent pipelines. |
| 26 | [pi-cutlery](https://www.npmjs.com/package/pi-cutlery) | 335 | `npm install pi-cutlery` | Multi-session workflow toolbox for Pi, centered on session forking |
| 27 | [@kmiyh/pi-plan-mode](https://www.npmjs.com/package/@kmiyh/pi-plan-mode) | 256 | `npm install @kmiyh/pi-plan-mode` | Pi extension that adds a read-only plan mode for safe code analysis, plan extraction, and execution progress tracking. |
| 28 | [pi-planning-with-files](https://www.npmjs.com/package/pi-planning-with-files) | 236 | `npm install pi-planning-with-files` | Manus-style file-based planning for Pi Coding Agent |
| 29 | [pi-workflow-agent](https://www.npmjs.com/package/pi-workflow-agent) | 229 | `npm install pi-workflow-agent` | Generic issue, planning, memory, and verification workflow helper for Pi. |
| 30 | [@jecruz/pi-dev-workflow](https://www.npmjs.com/package/@jecruz/pi-dev-workflow) | 221 | `npm install @jecruz/pi-dev-workflow` | Multi-stage development workflow for pi — automated write/test/review/fix/verify cycle with coverage gates and auto-com… |
| 31 | [@mrclrchtr/supi-flow](https://www.npmjs.com/package/@mrclrchtr/supi-flow) | 205 | `npm install @mrclrchtr/supi-flow` | PI extension for spec-driven workflow (brainstorm → plan → apply → archive) with TNDM ticket coordination, custom tools… |
| 32 | [pi-autopilot-complete](https://www.npmjs.com/package/pi-autopilot-complete) | 137 | `npm install pi-autopilot-complete` | Pi extension that adds a complete tool and autopilot loop so the model keeps working until it explicitly completes |
| 33 | [pi-plan](https://www.npmjs.com/package/pi-plan) | 120 | `npm install pi-plan` | Plan mode for pi — read-only exploration with plan-then-execute workflow |
| 34 | [@artale/pi-workflow](https://www.npmjs.com/package/@artale/pi-workflow) | 115 | `npm install @artale/pi-workflow` | Simple workflow/task chaining |
| 35 | [pi-blueprint](https://www.npmjs.com/package/pi-blueprint) | 96 | `npm install pi-blueprint` | A Pi extension that turns high-level objectives into phased, multi-session construction plans with dependency tracking… |
| 36 | [pi-agent-goal](https://www.npmjs.com/package/pi-agent-goal) | 93 | `npm install pi-agent-goal` | Pi extension that gives coding agents persistent /goal workflows with branch-aware state, source imports, progress tool… |
| 37 | [@weiping/pi-superpowers](https://www.npmjs.com/package/@weiping/pi-superpowers) | 90 | `npm install @weiping/pi-superpowers` | Superpowers skills library for Pi: TDD, debugging, collaboration workflows with Chinese trigger support |
| 38 | [@carter-mcalister/pi-rlm](https://www.npmjs.com/package/@carter-mcalister/pi-rlm) | 72 | `npm install @carter-mcalister/pi-rlm` | RLM-first named workflow extension for Pi Coding Agent |
| 39 | [@bytesbrains/pi-ci-gate](https://www.npmjs.com/package/@bytesbrains/pi-ci-gate) | 44 | `npm install @bytesbrains/pi-ci-gate` | CI observability gate for AI agents — view workflow runs, job statuses, and logs from Gitea Actions with safety control… |
| 40 | [pi-planner](https://www.npmjs.com/package/pi-planner) | 32 | `npm install pi-planner` | Planner workflow extension for Pi (questioning → implementation → summary) |
| 41 | [@ghyper9023/pi-dev-workflow](https://www.npmjs.com/package/@ghyper9023/pi-dev-workflow) | 31 | `npm install @ghyper9023/pi-dev-workflow` | Developer workflow toolkit for pi: git agents, code review, Karpathy guidelines, themes |
| 42 | [@tryinget/pi-ontology-workflows](https://www.npmjs.com/package/@tryinget/pi-ontology-workflows) | 30 | `npm install @tryinget/pi-ontology-workflows` | Pi extension package for ontology inspection, routing, and change workflows backed by ROCS. |
| 43 | [@howaboua/pi-todomaster](https://www.npmjs.com/package/@howaboua/pi-todomaster) | 12 | `npm install @howaboua/pi-todomaster` | TodoMaster extension for Pi |
| 44 | [@bytesbrains/pi-factory-gate](https://www.npmjs.com/package/@bytesbrains/pi-factory-gate) | 0 | `npm install @bytesbrains/pi-factory-gate` | AI Factory gateway for pi agents — dispatch jobs, manage environments, list agents/workers/workflows, stream results fr… |
| 45 | [@fingerskier/pi-collab-ext](https://www.npmjs.com/package/@fingerskier/pi-collab-ext) | 0 | `npm install @fingerskier/pi-collab-ext` | Sequential multi-model collaboration workflows for Pi |
| 46 | [pi-ci-gate](https://www.npmjs.com/package/pi-ci-gate) | 0 | `npm install pi-ci-gate` | CI observability gate for AI agents — view workflow runs, job statuses, and logs from Gitea Actions with safety control… |
| 47 | [pi-dev-workflow](https://www.npmjs.com/package/pi-dev-workflow) | 0 | `npm install pi-dev-workflow` | Developer workflow toolkit for pi: git agents, code review, Karpathy guidelines, themes |
| 48 | [pi-factory-gate](https://www.npmjs.com/package/pi-factory-gate) | 0 | `npm install pi-factory-gate` | AI Factory gateway for pi agents — dispatch jobs, manage environments, list agents/workers/workflows, stream results fr… |
| 49 | [pi-wiggum](https://www.npmjs.com/package/pi-wiggum) | 0 | `npm install pi-wiggum` | Ralph Wiggum loop for pi — autonomous agentic software development workflow. Agents clarify, plan, implement, review, f… |

</details>

<a id="memory"></a>
## 记忆系统
> 79 个包 · 总月下载量 64,702

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@samfp/pi-memory](https://www.npmjs.com/package/@samfp/pi-memory) | 10,249 | `npm install @samfp/pi-memory` | Persistent memory for pi — learns corrections, preferences, and patterns from sessions… |
| 2 | [pi-hermes-memory](https://www.npmjs.com/package/pi-hermes-memory) | 6,184 | `npm install pi-hermes-memory` | 🧠 Persistent memory + 🔍 session search + 🛡️ secret scanning for Pi. Token-aware poli… |
| 3 | [pi-memctx](https://www.npmjs.com/package/pi-memctx) | 4,150 | `npm install pi-memctx` | Automatic memory context injection for pi coding agent. Load, search, and persist knowl… |
| 4 | [pi-memory-md](https://www.npmjs.com/package/pi-memory-md) | 3,303 | `npm install pi-memory-md` | Letta-like memory management for pi using structured markdown files in a git repository |
| 5 | [pi-total-recall](https://www.npmjs.com/package/pi-total-recall) | 2,990 | `npm install pi-total-recall` | Complete context stack for pi — persistent memory, session history search, and local kn… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 79 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@samfp/pi-memory](https://www.npmjs.com/package/@samfp/pi-memory) | 10,249 | `npm install @samfp/pi-memory` | Persistent memory for pi — learns corrections, preferences, and patterns from sessions and injects them into future con… |
| 2 | [pi-hermes-memory](https://www.npmjs.com/package/pi-hermes-memory) | 6,184 | `npm install pi-hermes-memory` | 🧠 Persistent memory + 🔍 session search + 🛡️ secret scanning for Pi. Token-aware policy-only memory by default, SQLit… |
| 3 | [pi-memctx](https://www.npmjs.com/package/pi-memctx) | 4,150 | `npm install pi-memctx` | Automatic memory context injection for pi coding agent. Load, search, and persist knowledge across sessions using Markd… |
| 4 | [pi-memory-md](https://www.npmjs.com/package/pi-memory-md) | 3,303 | `npm install pi-memory-md` | Letta-like memory management for pi using structured markdown files in a git repository |
| 5 | [pi-total-recall](https://www.npmjs.com/package/pi-total-recall) | 2,990 | `npm install pi-total-recall` | Complete context stack for pi — persistent memory, session history search, and local knowledge search in one install. |
| 6 | [pi-observational-memory](https://www.npmjs.com/package/pi-observational-memory) | 2,561 | `npm install pi-observational-memory` | Observational memory extension for pi — cache-friendly tiered compaction with observations and reflections. |
| 7 | [@pi-unipi/memory](https://www.npmjs.com/package/@pi-unipi/memory) | 2,474 | `npm install @pi-unipi/memory` | Persistent cross-session memory with vector search for Pi coding agent |
| 8 | [@zosmaai/pi-llm-wiki](https://www.npmjs.com/package/@zosmaai/pi-llm-wiki) | 2,116 | `npm install @zosmaai/pi-llm-wiki` | Self-maintaining LLM Wiki for Pi — Karpathy-pattern knowledge base with immutable source capture, automated ingestion,… |
| 9 | [pi-agent-memory](https://www.npmjs.com/package/pi-agent-memory) | 1,593 | `npm install pi-agent-memory` | Persistent memory for pi-agents, powered by claude-mem (55k+ stars). Cross-session, cross-engine memory with hybrid sea… |
| 10 | [@walodayeet/hindsight-pi](https://www.npmjs.com/package/@walodayeet/hindsight-pi) | 1,588 | `npm install @walodayeet/hindsight-pi` | Hindsight-backed persistent memory extension for pi |
| 11 | [pi-hindsight](https://www.npmjs.com/package/pi-hindsight) | 1,528 | `npm install pi-hindsight` | Hindsight self-hosted memory extension for Pi |
| 12 | [pi-gitnexus](https://www.npmjs.com/package/pi-gitnexus) | 1,380 | `npm install pi-gitnexus` | GitNexus knowledge graph integration for pi — enriches searches with call chains, execution flows, and blast radius |
| 13 | [pi-memory](https://www.npmjs.com/package/pi-memory) | 1,373 | `npm install pi-memory` | Pi coding agent extension for memory with qmd-powered semantic search across daily logs, long-term memory, and scratchp… |
| 14 | [graphify-pi](https://www.npmjs.com/package/graphify-pi) | 1,202 | `npm install graphify-pi` | Pi extension and skill package that makes graphify knowledge graphs always-on during coding sessions. |
| 15 | [@touchskyer/memex](https://www.npmjs.com/package/@touchskyer/memex) | 1,180 | `npm install @touchskyer/memex` | Zettelkasten-based agent memory system with bidirectional links |
| 16 | [@zhafron/pi-memory](https://www.npmjs.com/package/@zhafron/pi-memory) | 1,139 | `npm install @zhafron/pi-memory` | Memory management extension for pi coding agent |
| 17 | [@firstpick/pi-extension-memory-helper](https://www.npmjs.com/package/@firstpick/pi-extension-memory-helper) | 1,004 | `npm install @firstpick/pi-extension-memory-helper` | Memory helper commands and remember_note tool for Pi. |
| 18 | [@ramarivera/pi-supermemory](https://www.npmjs.com/package/@ramarivera/pi-supermemory) | 983 | `npm install @ramarivera/pi-supermemory` | Pi coding-agent extension that recalls and captures session memory through Supermemory. |
| 19 | [mempalace-pi](https://www.npmjs.com/package/mempalace-pi) | 981 | `npm install mempalace-pi` | MemPalace extension package for pi, adding commands, tools, and save reminders for memory workflows. |
| 20 | [pi-simple-memory](https://www.npmjs.com/package/pi-simple-memory) | 939 | `npm install pi-simple-memory` | Simple persistent file-based memory for pi agents. |
| 21 | [titan-pi-memory](https://www.npmjs.com/package/titan-pi-memory) | 900 | `npm install titan-pi-memory` | Persistent evolutionary memory for the Pi coding agent |
| 22 | [@narumitw/pi-skillforge](https://www.npmjs.com/package/@narumitw/pi-skillforge) | 826 | `npm install @narumitw/pi-skillforge` | Pi package for improving agent skills through verified project memory. |
| 23 | [pi-continuous-learning](https://www.npmjs.com/package/pi-continuous-learning) | 815 | `npm install pi-continuous-learning` | A Pi extension that observes coding sessions and distills patterns into reusable instincts. |
| 24 | [@luxusai/pi-hindsight](https://www.npmjs.com/package/@luxusai/pi-hindsight) | 802 | `npm install @luxusai/pi-hindsight` | Pi extension for durable Hindsight-backed long-term memory. |
| 25 | [tau-coding-agent](https://www.npmjs.com/package/tau-coding-agent) | 709 | `npm install tau-coding-agent` | Opinionated Pi package with web search, review workflows, sandboxing, memory, usage reporting, skills, and a theme |
| 26 | [@p8n.ai/pi-remembers](https://www.npmjs.com/package/@p8n.ai/pi-remembers) | 693 | `npm install @p8n.ai/pi-remembers` | Pi extension for persistent agent memory and project search powered by Cloudflare AI Search. The North Remembers. |
| 27 | [@lehoangvu/pi-memory-extension](https://www.npmjs.com/package/@lehoangvu/pi-memory-extension) | 685 | `npm install @lehoangvu/pi-memory-extension` | Graphiti-lite memory extension package for Pi CLI. |
| 28 | [@pukljak/pi-memory](https://www.npmjs.com/package/@pukljak/pi-memory) | 651 | `npm install @pukljak/pi-memory` | Persistent memory and observation timeline extension for Pi coding agent |
| 29 | [pi-engram](https://www.npmjs.com/package/pi-engram) | 604 | `npm install pi-engram` | Standalone shareable Engram extension package for pi-coding-agent |
| 30 | [tau-all-agent](https://www.npmjs.com/package/tau-all-agent) | 546 | `npm install tau-all-agent` | Full Tau package for Pi with coding workflows, web search, sandboxing, memory, Telegram, Home Assistant, OpenSCAD, skil… |
| 31 | [@pi-unipi/cocoindex](https://www.npmjs.com/package/@pi-unipi/cocoindex) | 542 | `npm install @pi-unipi/cocoindex` | CocoIndex integration for Pi — AST-aware content indexing, semantic vector search, and incremental pipeline management |
| 32 | [@the-forge-flow/hippo-memory-pi](https://www.npmjs.com/package/@the-forge-flow/hippo-memory-pi) | 532 | `npm install @the-forge-flow/hippo-memory-pi` | PI extension for biologically-inspired long-term memory, powered by hippo-memory |
| 33 | [pi-byterover](https://www.npmjs.com/package/pi-byterover) | 484 | `npm install pi-byterover` | Pi ByteRover extension |
| 34 | [@the-forge-flow/gitnexus-pi](https://www.npmjs.com/package/@the-forge-flow/gitnexus-pi) | 431 | `npm install @the-forge-flow/gitnexus-pi` | PI extension for native GitNexus code-intelligence integration |
| 35 | [pi-memd](https://www.npmjs.com/package/pi-memd) | 420 | `npm install pi-memd` | Project-level session memory for the pi coding agent — a single MEMD.md file per project |
| 36 | [@sinamtz/pi-mempalace](https://www.npmjs.com/package/@sinamtz/pi-mempalace) | 410 | `npm install @sinamtz/pi-mempalace` | hasslefree and self-contained mempalace port for pi-coding-agent with SurrealDB-backed vector search, layered retrieval… |
| 37 | [@0xkobold/pi-learn](https://www.npmjs.com/package/@0xkobold/pi-learn) | 395 | `npm install @0xkobold/pi-learn` | Open-source memory infrastructure for pi agents - inspired by Honcho. Provides peer representations, reasoning, and con… |
| 38 | [@usememra/pi-extension](https://www.npmjs.com/package/@usememra/pi-extension) | 335 | `npm install @usememra/pi-extension` | Persistent memory for pi coding agent. Hybrid cloud + local backend (Memra). |
| 39 | [@ryan_nookpi/pi-extension-memory-layer](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-memory-layer) | 317 | `npm install @ryan_nookpi/pi-extension-memory-layer` | Long-term memory layer for pi — remember, recall, forget, and browse memories across sessions. |
| 40 | [@odradekk/vera-memory](https://www.npmjs.com/package/@odradekk/vera-memory) | 315 | `npm install @odradekk/vera-memory` | Structured memory system for Vera agent (SQLite + vector search) |
| 41 | [pi-subagent-in-memory](https://www.npmjs.com/package/pi-subagent-in-memory) | 291 | `npm install pi-subagent-in-memory` | In-process subagent tool for pi with live TUI card widgets, JSONL session logging, and zero system-prompt overhead. |
| 42 | [pi-persistent-intelligence](https://www.npmjs.com/package/pi-persistent-intelligence) | 275 | `npm install pi-persistent-intelligence` | Governed long-term memory, built-in session search, and Obsidian vault integration for the pi coding agent. |
| 43 | [@the-forge-flow/memory-graph](https://www.npmjs.com/package/@the-forge-flow/memory-graph) | 252 | `npm install @the-forge-flow/memory-graph` | Structured knowledge wiki: Claude Code plugin AND pi-coding-agent extension from one repo. LLM-maintained interlinked m… |
| 44 | [pi-memoir](https://www.npmjs.com/package/pi-memoir) | 246 | `npm install pi-memoir` | Persistent project memory for pi — the LLM queries the memoire instead of reading all files, saving ~95%+ tokens. |
| 45 | [pi-flow-skills](https://www.npmjs.com/package/pi-flow-skills) | 237 | `npm install pi-flow-skills` | BMAD-inspired sprint workflow for Pi with parent + parallel sub-agent orchestration and long-term memory. Story/dev/rev… |
| 46 | [pi-lcm-memory](https://www.npmjs.com/package/pi-lcm-memory) | 236 | `npm install pi-lcm-memory` | Persistent cross-session semantic memory for Pi — a hybrid (FTS5 + vector) recall layer on top of pi-lcm. |
| 47 | [@that-yolanda/pi-memory-honcho](https://www.npmjs.com/package/@that-yolanda/pi-memory-honcho) | 231 | `npm install @that-yolanda/pi-memory-honcho` | Honcho-backed persistent memory extension for PI coding agent. |
| 48 | [@artale/pi-memory](https://www.npmjs.com/package/@artale/pi-memory) | 231 | `npm install @artale/pi-memory` | Persistent memory for Pi sessions |
| 49 | [@tanyouqing/pi-openviking](https://www.npmjs.com/package/@tanyouqing/pi-openviking) | 224 | `npm install @tanyouqing/pi-openviking` | OpenViking memory and indexed repository extension for pi-coding-agent |
| 50 | [@vtstech/pi-long-term-memory](https://www.npmjs.com/package/@vtstech/pi-long-term-memory) | 169 | `npm install @vtstech/pi-long-term-memory` | Long-term memory extension for Pi - persistent memory across sessions |
| 51 | [pi-compound](https://www.npmjs.com/package/pi-compound) | 157 | `npm install pi-compound` | Turn your past Pi sessions into system-prompt context docs. A two-stage LLM pipeline extracts durable preferences from… |
| 52 | [@i-language/mem-forever](https://www.npmjs.com/package/@i-language/mem-forever) | 153 | `npm install @i-language/mem-forever` | Every AI tool forgets you. This one doesn't. Ever. Persistent memory across sessions and tools. Auto-generates profile,… |
| 53 | [@rhobot-dev/rho](https://www.npmjs.com/package/@rhobot-dev/rho) | 152 | `npm install @rhobot-dev/rho` | AI agent with persistent memory, heartbeat check-ins, and a knowledge vault |
| 54 | [pi-brain](https://www.npmjs.com/package/pi-brain) | 147 | `npm install pi-brain` | Versioned memory extension for the pi coding agent |
| 55 | [@agney/pi-honcho-memory](https://www.npmjs.com/package/@agney/pi-honcho-memory) | 140 | `npm install @agney/pi-honcho-memory` | Honcho persistent memory extension for pi coding agent |
| 56 | [@reqall/pi-plugin](https://www.npmjs.com/package/@reqall/pi-plugin) | 127 | `npm install @reqall/pi-plugin` | Reqall plugin for Pi — persistent semantic memory for AI agents |
| 57 | [pi-memory-honcho](https://www.npmjs.com/package/pi-memory-honcho) | 117 | `npm install pi-memory-honcho` | Honcho-backed persistent memory extension for PI coding agent. |
| 58 | [pi-portia](https://www.npmjs.com/package/pi-portia) | 113 | `npm install pi-portia` | Pi-native spatial project memory extension backed by SQLite. |
| 59 | [@artale/pi-agentic](https://www.npmjs.com/package/@artale/pi-agentic) | 102 | `npm install @artale/pi-agentic` | Portable agent patterns from agentic-stack: memory, skills, protocols |
| 60 | [@remnic/plugin-pi](https://www.npmjs.com/package/@remnic/plugin-pi) | 100 | `npm install @remnic/plugin-pi` | Remnic memory extension for Pi Coding Agent |
| 61 | [@artale/pi-hermes](https://www.npmjs.com/package/@artale/pi-hermes) | 92 | `npm install @artale/pi-hermes` | Self-improving agent for Pi with memory and skills |
| 62 | [@artale/pi-monitor](https://www.npmjs.com/package/@artale/pi-monitor) | 83 | `npm install @artale/pi-monitor` | Real-time system resource monitoring for Pi |
| 63 | [pi-extension-observational-memory](https://www.npmjs.com/package/pi-extension-observational-memory) | 60 | `npm install pi-extension-observational-memory` | Observational-memory compaction strategy for pi with observer/reflector token thresholds |
| 64 | [@askjo/pi-mem](https://www.npmjs.com/package/@askjo/pi-mem) | 48 | `npm install @askjo/pi-mem` | Pi coding agent extension for plain-Markdown memory system — long-term memory, daily logs, and scratchpad checklist |
| 65 | [@clankie/memory](https://www.npmjs.com/package/@clankie/memory) | 44 | `npm install @clankie/memory` | Persistent memory with TursoDB native vector search for clankie |
| 66 | [pi-breaker](https://www.npmjs.com/package/pi-breaker) | 37 | `npm install pi-breaker` | Prevents macOS freezes during pi sessions. Auto-kills runaway processes when memory runs out. |
| 67 | [@artale/pi-sysmon](https://www.npmjs.com/package/@artale/pi-sysmon) | 36 | `npm install @artale/pi-sysmon` | System monitor & resource manager. RAM/disk dashboard, process audit, memory hog detection, one-click cleanup. Carmack-… |
| 68 | [pi-episodic-memory](https://www.npmjs.com/package/pi-episodic-memory) | 35 | `npm install pi-episodic-memory` | Episodic memory for pi – semantic search over past sessions |
| 69 | [@momomemory/pi-momo](https://www.npmjs.com/package/@momomemory/pi-momo) | 31 | `npm install @momomemory/pi-momo` | Pi plugin that gives agents persistent memory using Momo |
| 70 | [@e9n/pi-memory](https://www.npmjs.com/package/@e9n/pi-memory) | 30 | `npm install @e9n/pi-memory` | Persistent memory system for pi — long-term facts, daily logs, and search |
| 71 | [@gordonb/pi-memory-blocks](https://www.npmjs.com/package/@gordonb/pi-memory-blocks) | 30 | `npm install @gordonb/pi-memory-blocks` | Letta-style persistent memory blocks for Pi coding agents |
| 72 | [@marcfargas/brainiac](https://www.npmjs.com/package/@marcfargas/brainiac) | 28 | `npm install @marcfargas/brainiac` | Persistent, searchable agent knowledge store for pi — learn, connect, recall |
| 73 | [pi-context-repo](https://www.npmjs.com/package/pi-context-repo) | 26 | `npm install pi-context-repo` | Git-backed persistent memory filesystem for pi agents, inspired by Letta Code's Context Repositories |
| 74 | [@edmundmiller/pi-context-repo](https://www.npmjs.com/package/@edmundmiller/pi-context-repo) | 25 | `npm install @edmundmiller/pi-context-repo` | Git-backed persistent memory filesystem for pi agents, inspired by Letta Code's Context Repositories |
| 75 | [pi-mnemosyne](https://www.npmjs.com/package/pi-mnemosyne) | 21 | `npm install pi-mnemosyne` | Pi extension for local persistent memory using Mnemosyne — offline semantic search, no cloud required |
| 76 | [@harigovindarajan/pi-memory-adapter](https://www.npmjs.com/package/@harigovindarajan/pi-memory-adapter) | 18 | `npm install @harigovindarajan/pi-memory-adapter` | Local-first memory subsystem for Pi |
| 77 | [@artale/pi-knowledge](https://www.npmjs.com/package/@artale/pi-knowledge) | 18 | `npm install @artale/pi-knowledge` | Local knowledge graph. User-owned entity/relationship store with search and export. Zero cloud, JSON-backed. |
| 78 | [@gordonb/pi-archive](https://www.npmjs.com/package/@gordonb/pi-archive) | 11 | `npm install @gordonb/pi-archive` | SQLite searchable archive of every conversation with Pi agent |
| 79 | [pi-gitnexus-plus](https://www.npmjs.com/package/pi-gitnexus-plus) | 0 | `npm install pi-gitnexus-plus` | GitNexus knowledge graph integration for pi — enriches searches with call chains, execution flows, and blast radius. Su… |

</details>

<a id="skill"></a>
## 技能包
> 127 个包 · 总月下载量 61,777

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@juicesharp/rpiv-args](https://www.npmjs.com/package/@juicesharp/rpiv-args) | 11,043 | `npm install @juicesharp/rpiv-args` | Pi extension. Shell-style $1 and $ARGUMENTS placeholders, expanded into your Pi skills… |
| 2 | [@heart-of-gold/toolkit](https://www.npmjs.com/package/@heart-of-gold/toolkit) | 1,948 | `npm install @heart-of-gold/toolkit` | Cross-platform installer for Heart of Gold skills — works with Codex, OpenCode, Pi, Cla… |
| 3 | [pi-docparser](https://www.npmjs.com/package/pi-docparser) | 4,456 | `npm install pi-docparser` | Pi package that adds a document_parse tool and companion skill for parsing PDFs, Office… |
| 4 | [@spences10/pi-skills](https://www.npmjs.com/package/@spences10/pi-skills) | 3,108 | `npm install @spences10/pi-skills` | Agent Skills management for Pi with profiles, enablement rules, GitHub search/install,… |
| 5 | [pi-loadout](https://www.npmjs.com/package/pi-loadout) | 2,913 | `npm install pi-loadout` | Interactive tool and skill loadouts for Pi sessions. |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 127 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@juicesharp/rpiv-args](https://www.npmjs.com/package/@juicesharp/rpiv-args) | 11,043 | `npm install @juicesharp/rpiv-args` | Pi extension. Shell-style $1 and $ARGUMENTS placeholders, expanded into your Pi skills at invocation. |
| 2 | [@heart-of-gold/toolkit](https://www.npmjs.com/package/@heart-of-gold/toolkit) | 1,948 | `npm install @heart-of-gold/toolkit` | Cross-platform installer for Heart of Gold skills — works with Codex, OpenCode, Pi, Claude Code, and more |
| 3 | [pi-docparser](https://www.npmjs.com/package/pi-docparser) | 4,456 | `npm install pi-docparser` | Pi package that adds a document_parse tool and companion skill for parsing PDFs, Office documents, spreadsheets, and im… |
| 4 | [@spences10/pi-skills](https://www.npmjs.com/package/@spences10/pi-skills) | 3,108 | `npm install @spences10/pi-skills` | Agent Skills management for Pi with profiles, enablement rules, GitHub search/install, and update flows |
| 5 | [pi-loadout](https://www.npmjs.com/package/pi-loadout) | 2,913 | `npm install pi-loadout` | Interactive tool and skill loadouts for Pi sessions. |
| 6 | [@ifi/oh-pi-skills](https://www.npmjs.com/package/@ifi/oh-pi-skills) | 2,111 | `npm install @ifi/oh-pi-skills` | On-demand skill packs for pi: web-search, debug-helper, git-workflow, and more. |
| 7 | [ultimate-pi](https://www.npmjs.com/package/ultimate-pi) | 2,074 | `npm install ultimate-pi` | Ultimate AI coding harness for pi.dev — extensible skills, Obsidian wiki knowledge layer, compressed context, determini… |
| 8 | [@dotdotgod/pi](https://www.npmjs.com/package/@dotdotgod/pi) | 1,890 | `npm install @dotdotgod/pi` | Pi adapter for dotdotgod: project-initializer skill, shared docs scaffold, plan/archive workflow, and project loading e… |
| 9 | [@aholbreich/agent-skills](https://www.npmjs.com/package/@aholbreich/agent-skills) | 1,217 | `npm install @aholbreich/agent-skills` | Handcrafted Agent Skills for browser-authenticated Jira and Confluence ingestion, LLM wiki workflows, and developer aut… |
| 10 | [@aretw0/git-skills](https://www.npmjs.com/package/@aretw0/git-skills) | 1,200 | `npm install @aretw0/git-skills` | First-party git skills: github (gh), gitlab (glab), workflow and commit conventions |
| 11 | [mitsupi](https://www.npmjs.com/package/mitsupi) | 1,113 | `npm install mitsupi` | Armin's pi coding agent commands, skills, extensions, and themes |
| 12 | [pi-skillful](https://www.npmjs.com/package/pi-skillful) | 1,085 | `npm install pi-skillful` | Pi package with skill invocation and visibility improvements. |
| 13 | [@the-forge-flow/lumen](https://www.npmjs.com/package/@the-forge-flow/lumen) | 1,072 | `npm install @the-forge-flow/lumen` | Illuminate code: skills for diagrams, charts, mermaid, slides, galleries, guides, project recaps, and fact-checks. Work… |
| 14 | [@kmiyh/pi-skills-menu](https://www.npmjs.com/package/@kmiyh/pi-skills-menu) | 1,068 | `npm install @kmiyh/pi-skills-menu` | Pi extension that moves skills into a dedicated /skills menu with browsing, preview, editing, and AI-assisted creation. |
| 15 | [@aretw0/pi-skills](https://www.npmjs.com/package/@aretw0/pi-skills) | 1,066 | `npm install @aretw0/pi-skills` | Skills para criar, configurar e operar o ecossistema pi — extensões, skills, temas, terminal setup e onboarding |
| 16 | [@aretw0/lab-skills](https://www.npmjs.com/package/@aretw0/lab-skills) | 1,058 | `npm install @aretw0/lab-skills` | Skills experimentais do agents-lab — cultivo de primitivas, avaliação de extensões e feedback de stack |
| 17 | [@gogomi/pi-glsl-shader-vision](https://www.npmjs.com/package/@gogomi/pi-glsl-shader-vision) | 959 | `npm install @gogomi/pi-glsl-shader-vision` | GLSL fragment shader viewer for Pi Agent — live WebGL preview, Tweakpane uniform controls, presets, probe sheets & vide… |
| 18 | [@ramarivera/pi-skill-selector](https://www.npmjs.com/package/@ramarivera/pi-skill-selector) | 884 | `npm install @ramarivera/pi-skill-selector` | Pi extension that lets you type $ to fuzzy-pick skills and insert /skill:name into the prompt. |
| 19 | [pi-conventions](https://www.npmjs.com/package/pi-conventions) | 883 | `npm install pi-conventions` | Pi package for enforcing codebase conventions through structure and naming policies. |
| 20 | [@richardgill/pi-sub-pi-skill](https://www.npmjs.com/package/@richardgill/pi-sub-pi-skill) | 818 | `npm install @richardgill/pi-sub-pi-skill` | Route `/skill:` commands and skill file reads to the `sub-pi` tool when the skill frontmatter opts in. |
| 21 | [pi-extension-installer](https://www.npmjs.com/package/pi-extension-installer) | 786 | `npm install pi-extension-installer` | Browse and install Pi community packages — interactive TUI browser with arrow-key navigation, search, previews, install… |
| 22 | [pi-playwright](https://www.npmjs.com/package/pi-playwright) | 736 | `npm install pi-playwright` | Playwright browser automation skill package for pi |
| 23 | [pi-mono-all](https://www.npmjs.com/package/pi-mono-all) | 699 | `npm install pi-mono-all` | All pi-mono extensions and bundled skills |
| 24 | [pi-psql](https://www.npmjs.com/package/pi-psql) | 654 | `npm install pi-psql` | Secure PostgreSQL client skill for pi - query databases with encrypted credentials |
| 25 | [@vanillagreen/pi-skills-manager](https://www.npmjs.com/package/@vanillagreen/pi-skills-manager) | 615 | `npm install @vanillagreen/pi-skills-manager` | Polished Pi skills manager with a dedicated /skill menu for browsing, previewing, inserting, creating, editing, renamin… |
| 26 | [pi-mono-figma](https://www.npmjs.com/package/pi-mono-figma) | 601 | `npm install pi-mono-figma` | Pi extension and skill for Figma design context tools |
| 27 | [pi-zstack](https://www.npmjs.com/package/pi-zstack) | 573 | `npm install pi-zstack` | Rob Zolkos' personal Pi stack as an installable meta package. |
| 28 | [pi-skills-sync](https://www.npmjs.com/package/pi-skills-sync) | 535 | `npm install pi-skills-sync` | Manage pi skills via GitHub Gists |
| 29 | [pi-gstack](https://www.npmjs.com/package/pi-gstack) | 504 | `npm install pi-gstack` | Pi package that adapts Garry Tan's gstack skills and workflows for Pi. |
| 30 | [pi-until-done](https://www.npmjs.com/package/pi-until-done) | 483 | `npm install pi-until-done` | Pi extension that brings Hermes Agent's /goal (Ralph loop with judge) to Pi as /until-done. Pi self-judges every turn,… |
| 31 | [@zhangweiii/skills](https://www.npmjs.com/package/@zhangweiii/skills) | 465 | `npm install @zhangweiii/skills` | Personal agent skills collection for pi, Claude Code, Codex, Cursor, etc. |
| 32 | [pi-mono-linear](https://www.npmjs.com/package/pi-mono-linear) | 439 | `npm install pi-mono-linear` | Pi extension and skill for Linear GraphQL tools |
| 33 | [drata-cli](https://www.npmjs.com/package/drata-cli) | 436 | `npm install drata-cli` | Unofficial command-line client for Drata's public API. |
| 34 | [pi-skillrefs](https://www.npmjs.com/package/pi-skillrefs) | 429 | `npm install pi-skillrefs` | Pi extension package that autocompletes $skill refs and injects referenced skill bodies as visible environment context. |
| 35 | [agent-xlsx](https://www.npmjs.com/package/agent-xlsx) | 420 | `npm install agent-xlsx` | Agent-friendly CLI for reading and editing xlsx files (skill package) |
| 36 | [pi-load-skill](https://www.npmjs.com/package/pi-load-skill) | 399 | `npm install pi-load-skill` | Pi extension for loading skills on demand from any location |
| 37 | [file-upload-cli](https://www.npmjs.com/package/file-upload-cli) | 390 | `npm install file-upload-cli` | Skill for uploading files with curl to litterbox.catbox.moe |
| 38 | [@counterposition/skill-pi](https://www.npmjs.com/package/@counterposition/skill-pi) | 384 | `npm install @counterposition/skill-pi` | Pi coding agent reference skill — extensions, settings, providers, SDK/RPC, packages, and .pi/ config |
| 39 | [@unseated7635/pi-roxy-seo](https://www.npmjs.com/package/@unseated7635/pi-roxy-seo) | 353 | `npm install @unseated7635/pi-roxy-seo` | Roxy SEO extension for pi-coding-agent with an installable SEO, AEO, and GEO skill companion. |
| 40 | [pi-skill-model-effort](https://www.npmjs.com/package/pi-skill-model-effort) | 349 | `npm install pi-skill-model-effort` | Pi extension that honors model, effort, and thinking frontmatter on skills. |
| 41 | [@blackbelt-technology/pi-dashboard-plugin-skill](https://www.npmjs.com/package/@blackbelt-technology/pi-dashboard-plugin-skill) | 335 | `npm install @blackbelt-technology/pi-dashboard-plugin-skill` | Pi skill that scaffolds new dashboard plugins or augments existing pi-extension projects with dashboard plugin contribu… |
| 42 | [saasufy-agent-skills](https://www.npmjs.com/package/saasufy-agent-skills) | 333 | `npm install saasufy-agent-skills` | Saasufy skills for AI |
| 43 | [pi-skill-guard](https://www.npmjs.com/package/pi-skill-guard) | 329 | `npm install pi-skill-guard` | Pi extension for protecting against incorrect skill-in-tool-call behavior |
| 44 | [pi-skill-palette](https://www.npmjs.com/package/pi-skill-palette) | 317 | `npm install pi-skill-palette` | VS Code-style command palette for selecting and applying skills in pi |
| 45 | [pi-claude-plugins](https://www.npmjs.com/package/pi-claude-plugins) | 295 | `npm install pi-claude-plugins` | Pi extension that exposes Claude marketplace plugin skills from ~/.claude/plugins/marketplaces into the current pi sess… |
| 46 | [pi-skillshare](https://www.npmjs.com/package/pi-skillshare) | 291 | `npm install pi-skillshare` | Search, install, and manage skillshare AI agent skills from within Pi |
| 47 | [pi-skill-hub](https://www.npmjs.com/package/pi-skill-hub) | 278 | `npm install pi-skill-hub` | Safe provenance-aware Pi skill discovery, inventory, preview, and management hub. |
| 48 | [pi-smart-sessions](https://www.npmjs.com/package/pi-smart-sessions) | 257 | `npm install pi-smart-sessions` | Auto-names Pi sessions with AI-generated summaries — no more cryptic skill tags in your session list |
| 49 | [@tmustier/pi-skill-creator](https://www.npmjs.com/package/@tmustier/pi-skill-creator) | 256 | `npm install @tmustier/pi-skill-creator` | Detailed guidance for creating Pi skills (Agent Skills format). |
| 50 | [pi-fetch-markdown](https://www.npmjs.com/package/pi-fetch-markdown) | 229 | `npm install pi-fetch-markdown` | Pi skill: fetch any web page as clean markdown via Cloudflare content negotiation or Jina Reader |
| 51 | [pi-mention-skills](https://www.npmjs.com/package/pi-mention-skills) | 229 | `npm install pi-mention-skills` | Skill mention autocomplete and expansion extension for pi |
| 52 | [pi-disable-model-skill-invocation](https://www.npmjs.com/package/pi-disable-model-skill-invocation) | 227 | `npm install pi-disable-model-skill-invocation` | Pi extension that globally hides skills from the model while preserving /skill:name. |
| 53 | [pi-skill-toggle](https://www.npmjs.com/package/pi-skill-toggle) | 225 | `npm install pi-skill-toggle` | Enable/disable skills from loading into pi context at startup |
| 54 | [@sentiolabs/pi-frontend-design](https://www.npmjs.com/package/@sentiolabs/pi-frontend-design) | 217 | `npm install @sentiolabs/pi-frontend-design` | Frontend design skill for distinctive, production-grade Pi UI work. |
| 55 | [@capyup/pi-specs](https://www.npmjs.com/package/@capyup/pi-specs) | 213 | `npm install @capyup/pi-specs` | Pi package for spec-driven development workflows: PRODUCT.md, TECH.md, implementation, and audits. |
| 56 | [@a-canary/pi-upskill](https://www.npmjs.com/package/@a-canary/pi-upskill) | 209 | `npm install @a-canary/pi-upskill` | Learn from failures, reduce token waste, improve automatically |
| 57 | [shitty-extensions](https://www.npmjs.com/package/shitty-extensions) | 206 | `npm install shitty-extensions` | Custom extensions and skills for pi coding agent |
| 58 | [sutras](https://www.npmjs.com/package/sutras) | 194 | `npm install sutras` | Skill development toolkit for pi — /sutras commands + agent skill |
| 59 | [@kaiserlich-dev/pi-skill-picker](https://www.npmjs.com/package/@kaiserlich-dev/pi-skill-picker) | 193 | `npm install @kaiserlich-dev/pi-skill-picker` | Namespace-aware skill palette for pi — groups skills by category folder |
| 60 | [@carter-mcalister/pi-skillpacks](https://www.npmjs.com/package/@carter-mcalister/pi-skillpacks) | 179 | `npm install @carter-mcalister/pi-skillpacks` | Session-scoped skill pack loader for Pi |
| 61 | [pi-shit](https://www.npmjs.com/package/pi-shit) | 174 | `npm install pi-shit` | Personal Pi package bundling extensions, skills, and Rose Pine themes |
| 62 | [pi-explorer](https://www.npmjs.com/package/pi-explorer) | 163 | `npm install pi-explorer` | Pi skill + command for deep codebase exploration and HTML architecture reports. |
| 63 | [pi-drawio](https://www.npmjs.com/package/pi-drawio) | 160 | `npm install pi-drawio` | Pi skill for generating native draw.io diagrams and exports |
| 64 | [pi-skill-evolution](https://www.npmjs.com/package/pi-skill-evolution) | 149 | `npm install pi-skill-evolution` | Meta-skill and self-improvement loop for pi — mines session history for repeated workflows, proposes new skills, and tr… |
| 65 | [pi-autoskills](https://www.npmjs.com/package/pi-autoskills) | 148 | `npm install pi-autoskills` | Audited autoskills-style installer for pi. Detect stack, discover vetted skills, audit upstream bundles, cache locally,… |
| 66 | [pi-typst-skill](https://www.npmjs.com/package/pi-typst-skill) | 141 | `npm install pi-typst-skill` | Pi Coding Agent skill that makes Typst the preferred format for document artifacts. |
| 67 | [@fingerskier/pi-theology](https://www.npmjs.com/package/@fingerskier/pi-theology) | 131 | `npm install @fingerskier/pi-theology` | Exegetical theology research skills for Pi |
| 68 | [@fingerskier/pi-email](https://www.npmjs.com/package/@fingerskier/pi-email) | 125 | `npm install @fingerskier/pi-email` | Planning skill for the legacy Claude email extension concept, ported as a Pi skill placeholder |
| 69 | [pi-skill-dollar](https://www.npmjs.com/package/pi-skill-dollar) | 118 | `npm install pi-skill-dollar` | Dollar-sign autocomplete shortcut for pi Agent Skills |
| 70 | [@m64/pi-screenshot-tools](https://www.npmjs.com/package/@m64/pi-screenshot-tools) | 117 | `npm install @m64/pi-screenshot-tools` | Screenshot skill and inline screenshot extension for pi |
| 71 | [pi-skills-sh](https://www.npmjs.com/package/pi-skills-sh) | 115 | `npm install pi-skills-sh` | Browse, install & manage skills.sh skills from inside pi |
| 72 | [@normful/picadillo](https://www.npmjs.com/package/@normful/picadillo) | 115 | `npm install @normful/picadillo` | pi agent skills & extensions: run-in-tmux, parrot, mulch, overstory |
| 73 | [@fingerskier/pi-terse](https://www.npmjs.com/package/@fingerskier/pi-terse) | 114 | `npm install @fingerskier/pi-terse` | Ultra-compressed terse communication mode for Pi |
| 74 | [@alexgorbatchev/pi-skill-library](https://www.npmjs.com/package/@alexgorbatchev/pi-skill-library) | 111 | `npm install @alexgorbatchev/pi-skill-library` | Pi extension that exposes skills-library roots through /library:<skill-name> commands. |
| 75 | [@amb007/deep-wiki](https://www.npmjs.com/package/@amb007/deep-wiki) | 109 | `npm install @amb007/deep-wiki` | AI-powered wiki generator for code repositories - Pi Coding Agent skill |
| 76 | [pi-skills-manager](https://www.npmjs.com/package/pi-skills-manager) | 108 | `npm install pi-skills-manager` | Interactive skill manager for Pi — enable/disable skills with a pi-config-style UI |
| 77 | [@marcfargas/odoo-skills](https://www.npmjs.com/package/@marcfargas/odoo-skills) | 107 | `npm install @marcfargas/odoo-skills` | Battle-tested Odoo knowledge modules for AI agents — 5,200+ lines validated against Odoo v17 in CI |
| 78 | [@vaayne/agent-kit](https://www.npmjs.com/package/@vaayne/agent-kit) | 103 | `npm install @vaayne/agent-kit` | Reusable skills and extensions for Pi coding agent |
| 79 | [@robhowley/py-pit-skills](https://www.npmjs.com/package/@robhowley/py-pit-skills) | 95 | `npm install @robhowley/py-pit-skills` | Opinionated Python API development skills for AI coding agents (Pi, Claude Code). |
| 80 | [pi-skill-glab](https://www.npmjs.com/package/pi-skill-glab) | 90 | `npm install pi-skill-glab` | Pi skill for interacting with GitLab via the glab CLI |
| 81 | [@alpino13/pi-ask](https://www.npmjs.com/package/@alpino13/pi-ask) | 90 | `npm install @alpino13/pi-ask` | Pi package for interactive multi-question clarification flows, with a model-callable ask_questions tool and tabbed ques… |
| 82 | [pi-package-test](https://www.npmjs.com/package/pi-package-test) | 89 | `npm install pi-package-test` | Test package for pi coding agent with extensions, skills, themes, and prompts |
| 83 | [pi-auto-agents](https://www.npmjs.com/package/pi-auto-agents) | 89 | `npm install pi-auto-agents` | Pi skill that automatically routes complex coding/development tasks to the sub-agents for multi-agent execution with te… |
| 84 | [@ferologics/pi-skills](https://www.npmjs.com/package/@ferologics/pi-skills) | 87 | `npm install @ferologics/pi-skills` | Custom skills for Pi coding agent |
| 85 | [pi-skill-smart-read](https://www.npmjs.com/package/pi-skill-smart-read) | 86 | `npm install pi-skill-smart-read` | Skill-aware reading for pi: index large SKILL.md files and load sections on demand. |
| 86 | [std-c99-proj-skill](https://www.npmjs.com/package/std-c99-proj-skill) | 83 | `npm install std-c99-proj-skill` | Pi skill for pure ANSI C99 projects with memory arena, containerized builds, Valgrind, and static analysis. |
| 87 | [@krone9/pi-superpowers](https://www.npmjs.com/package/@krone9/pi-superpowers) | 81 | `npm install @krone9/pi-superpowers` | Process-discipline skills bundle for pi (brainstorming, systematic debugging, TDD, plans, verification, worktrees, para… |
| 88 | [@daviriansu/agent-arena-skill](https://www.npmjs.com/package/@daviriansu/agent-arena-skill) | 81 | `npm install @daviriansu/agent-arena-skill` | Agent Skill for Agent Arena — teaches AI agents how to join the decentralized task marketplace on X-Layer |
| 89 | [@ruliana/pi-insights](https://www.npmjs.com/package/@ruliana/pi-insights) | 80 | `npm install @ruliana/pi-insights` | Pi skill: analyze session history and generate an interactive HTML report with usage patterns and suggestions |
| 90 | [pi-chrome-cdp](https://www.npmjs.com/package/pi-chrome-cdp) | 75 | `npm install pi-chrome-cdp` | Give your AI agent access to your live Chrome session — works out of the box, connects to tabs you already have open |
| 91 | [@nathanhuh/pi-ko](https://www.npmjs.com/package/@nathanhuh/pi-ko) | 74 | `npm install @nathanhuh/pi-ko` | Korean-first prompts and skills for Pi Coding Agent. |
| 92 | [@micka33/pi-npm-version-release-skill](https://www.npmjs.com/package/@micka33/pi-npm-version-release-skill) | 73 | `npm install @micka33/pi-npm-version-release-skill` | Pi package providing skills and scripts for versioned GitHub release workflows. |
| 93 | [@javimolina/pi-palette](https://www.npmjs.com/package/@javimolina/pi-palette) | 69 | `npm install @javimolina/pi-palette` | Pi package that adds a searchable slash-command palette for commands, prompts, and skills |
| 94 | [@joemccann/pi-pdf](https://www.npmjs.com/package/@joemccann/pi-pdf) | 66 | `npm install @joemccann/pi-pdf` | PDF manipulation, processing, and management toolkit for Pi coding agent — extract text/tables, merge/split, fill forms… |
| 95 | [@geminixiang/pi-cicd-status](https://www.npmjs.com/package/@geminixiang/pi-cicd-status) | 66 | `npm install @geminixiang/pi-cicd-status` | Pi coding agent skill for checking CI/CD status from GitHub check runs, workflow runs, branches, PRs, commits, and rele… |
| 96 | [pi-skill-martin-fowler](https://www.npmjs.com/package/pi-skill-martin-fowler) | 60 | `npm install pi-skill-martin-fowler` | Pi skill that thinks and advises like Martin Fowler — software design, architecture, refactoring, agile, testing, and d… |
| 97 | [@alchemiststudios/pi-harness-skills](https://www.npmjs.com/package/@alchemiststudios/pi-harness-skills) | 56 | `npm install @alchemiststudios/pi-harness-skills` | Harness engineering skills package for pi |
| 98 | [@benvargas/pi-ancestor-discovery](https://www.npmjs.com/package/@benvargas/pi-ancestor-discovery) | 55 | `npm install @benvargas/pi-ancestor-discovery` | Recursive ancestor discovery for pi resources (skills, prompts, themes) |
| 99 | [dnopi](https://www.npmjs.com/package/dnopi) | 51 | `npm install dnopi` | Skills and extensions for pi-coding-agent |
| 100 | [toenobu-agent](https://www.npmjs.com/package/toenobu-agent) | 50 | `npm install toenobu-agent` | toenobu's pi coding agent skills and extensions |
| 101 | [@joemccann/pi-canvas-design](https://www.npmjs.com/package/@joemccann/pi-canvas-design) | 48 | `npm install @joemccann/pi-canvas-design` | Create museum-quality visual art and design philosophies expressed as .png and .pdf canvases using pi |
| 102 | [@spences10/pi-skill-importer](https://www.npmjs.com/package/@spences10/pi-skill-importer) | 47 | `npm install @spences10/pi-skill-importer` | Helpers for importing external Agent Skills-compatible sources into Pi-native skill storage |
| 103 | [@jay-zod/speakturbo](https://www.npmjs.com/package/@jay-zod/speakturbo) | 47 | `npm install @jay-zod/speakturbo` | Ultra-fast TTS with ~90ms latency. Local text-to-speech for AI agents with 8 built-in voices. |
| 104 | [@ifiokjr/oh-pi-skills](https://www.npmjs.com/package/@ifiokjr/oh-pi-skills) | 47 | `npm install @ifiokjr/oh-pi-skills` | On-demand skill packs for pi: web-search, debug-helper, git-workflow, and more. |
| 105 | [pi-powerpoint](https://www.npmjs.com/package/pi-powerpoint) | 46 | `npm install pi-powerpoint` | Pi skill for creating and editing PowerPoint files via CLI, wrapping office-powerpoint-mcp-server |
| 106 | [pjlee-pi-package](https://www.npmjs.com/package/pjlee-pi-package) | 45 | `npm install pjlee-pi-package` | Peter's pi coding agent commands, skills, extensions, and themes |
| 107 | [@vpellegrino/pi-skills](https://www.npmjs.com/package/@vpellegrino/pi-skills) | 43 | `npm install @vpellegrino/pi-skills` | Vitor's collection of pi coding agent skills, extensions, and themes |
| 108 | [@andamio/coach](https://www.npmjs.com/package/@andamio/coach) | 42 | `npm install @andamio/coach` | Build learning pathways for individuals, teams, and ecosystems |
| 109 | [pi-search-skill](https://www.npmjs.com/package/pi-search-skill) | 41 | `npm install pi-search-skill` | DuckDuckGo search skill for pi - lightweight and fast |
| 110 | [@0xkobold/pi-skills](https://www.npmjs.com/package/@0xkobold/pi-skills) | 38 | `npm install @0xkobold/pi-skills` | Dynamic Skill Creator Extension for pi agent |
| 111 | [@indiekitai/pi-skills](https://www.npmjs.com/package/@indiekitai/pi-skills) | 35 | `npm install @indiekitai/pi-skills` | IndieKit developer tools as Pi/Claude Code/Codex skills — PostgreSQL health, schema diff, type generation, rate limitin… |
| 112 | [pi-session-investigator](https://www.npmjs.com/package/pi-session-investigator) | 35 | `npm install pi-session-investigator` | Forensic tools for Pi sessions - file recovery, subagent tracing, timeline reconstruction |
| 113 | [@dpaluy/shaping-skills](https://www.npmjs.com/package/@dpaluy/shaping-skills) | 25 | `npm install @dpaluy/shaping-skills` | Cross-tool shaping, breadboarding, and transcript-to-document skills. |
| 114 | [@entelligentsia/pi-claude-compat](https://www.npmjs.com/package/@entelligentsia/pi-claude-compat) | 19 | `npm install @entelligentsia/pi-claude-compat` | Claude CLI compatibility layer for pi — loads .claude/commands and .claude/skills as native pi resources |
| 115 | [@hyperspaceng/pi-agent-id](https://www.npmjs.com/package/@hyperspaceng/pi-agent-id) | 19 | `npm install @hyperspaceng/pi-agent-id` | Ethereum wallet management tool for pi agent system - HD wallets, secure key storage, and transaction signing |
| 116 | [@alexgorbatchev/agentation-skills](https://www.npmjs.com/package/@alexgorbatchev/agentation-skills) | 18 | `npm install @alexgorbatchev/agentation-skills` | Shared Agentation skills for coding agents |
| 117 | [@arnavpadwal/pi-skills-onboarding](https://www.npmjs.com/package/@arnavpadwal/pi-skills-onboarding) | 0 | `npm install @arnavpadwal/pi-skills-onboarding` | Onboarding skill for pi — analyzes a project and produces a comprehensive context document covering architecture, depen… |
| 118 | [@capyup/pi-codex-image](https://www.npmjs.com/package/@capyup/pi-codex-image) | 0 | `npm install @capyup/pi-codex-image` | Pi package that exposes Codex-style image_generation and view_image tools with dynamic model routing. |
| 119 | [@felipefontoura/pi-sdd-kit](https://www.npmjs.com/package/@felipefontoura/pi-sdd-kit) | 0 | `npm install @felipefontoura/pi-sdd-kit` | Pi skill pack for practical Specification-Driven Development workflows |
| 120 | [@felipefontoura/pi-strategy](https://www.npmjs.com/package/@felipefontoura/pi-strategy) | 0 | `npm install @felipefontoura/pi-strategy` | Pi Strategy skills for Pi Agent: turn ideas into market, offer, MVP, proof, messaging, and acquisition strategy. |
| 121 | [@micka33/pi-karpathy-skill](https://www.npmjs.com/package/@micka33/pi-karpathy-skill) | 0 | `npm install @micka33/pi-karpathy-skill` | Pi package providing the Karpathy Guidelines skill for safer, simpler coding-agent behavior. |
| 122 | [@season179/pi-skills-status](https://www.npmjs.com/package/@season179/pi-skills-status) | 0 | `npm install @season179/pi-skills-status` | Shows the skills used in the current Pi session. |
| 123 | [@sentiolabs/pi-scriptable-statusline](https://www.npmjs.com/package/@sentiolabs/pi-scriptable-statusline) | 0 | `npm install @sentiolabs/pi-scriptable-statusline` | Scriptable footer and statusline UI package for Pi. |
| 124 | [@skill-pack/pi](https://www.npmjs.com/package/@skill-pack/pi) | 0 | `npm install @skill-pack/pi` | pi extension package for skill-pack: contributes the /skillpack prompt template + meta-skills. |
| 125 | [@sttronn/pi-sheets](https://www.npmjs.com/package/@sttronn/pi-sheets) | 0 | `npm install @sttronn/pi-sheets` | Spreadsheet-editing skill for agentic coding hosts (Claude Code, Codex, Pi). openpyxl + formualizer + a unified CLI; wo… |
| 126 | [@tifan/pi-inline-skills](https://www.npmjs.com/package/@tifan/pi-inline-skills) | 0 | `npm install @tifan/pi-inline-skills` | Inline $skill autocomplete in the pi editor. |
| 127 | [pi-frontend-create](https://www.npmjs.com/package/pi-frontend-create) | 0 | `npm install pi-frontend-create` | A Pi skill that creates distinctive, production-grade frontend interfaces that avoid common AI design patterns. Generat… |

</details>

<a id="codequality"></a>
## 代码质量
> 53 个包 · 总月下载量 60,452

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-simplify](https://www.npmjs.com/package/pi-simplify) | 17,131 | `npm install pi-simplify` | A Pi extension that reviews recently changed code for clarity, consistency, and maintai… |
| 2 | [pi-lens](https://www.npmjs.com/package/pi-lens) | 17,114 | `npm install pi-lens` | Real-time code feedback for pi — LSP, linters, formatters, type-checking, structural an… |
| 3 | [@spences10/pi-lsp](https://www.npmjs.com/package/@spences10/pi-lsp) | 3,430 | `npm install @spences10/pi-lsp` | Language Server Protocol tools for Pi agents to inspect diagnostics, hovers, definition… |
| 4 | [@nahuelcio/opencode-ado](https://www.npmjs.com/package/@nahuelcio/opencode-ado) | 2,870 | `npm install @nahuelcio/opencode-ado` | Azure DevOps plugin for OpenCode — PR reviews, profiles, sidebar panel |
| 5 | [pi-slopchop](https://www.npmjs.com/package/pi-slopchop) | 1,422 | `npm install pi-slopchop` | Terminal-native code review and annotation workflow for the Pi coding agent. |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 53 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-simplify](https://www.npmjs.com/package/pi-simplify) | 17,131 | `npm install pi-simplify` | A Pi extension that reviews recently changed code for clarity, consistency, and maintainability. |
| 2 | [pi-lens](https://www.npmjs.com/package/pi-lens) | 17,114 | `npm install pi-lens` | Real-time code feedback for pi — LSP, linters, formatters, type-checking, structural analysis & booboo |
| 3 | [@spences10/pi-lsp](https://www.npmjs.com/package/@spences10/pi-lsp) | 3,430 | `npm install @spences10/pi-lsp` | Language Server Protocol tools for Pi agents to inspect diagnostics, hovers, definitions, references, and symbols |
| 4 | [@nahuelcio/opencode-ado](https://www.npmjs.com/package/@nahuelcio/opencode-ado) | 2,870 | `npm install @nahuelcio/opencode-ado` | Azure DevOps plugin for OpenCode — PR reviews, profiles, sidebar panel |
| 5 | [pi-slopchop](https://www.npmjs.com/package/pi-slopchop) | 1,422 | `npm install pi-slopchop` | Terminal-native code review and annotation workflow for the Pi coding agent. |
| 6 | [@lpirito/pi-diffloop](https://www.npmjs.com/package/@lpirito/pi-diffloop) | 1,355 | `npm install @lpirito/pi-diffloop` | Pair programming with Pi, be aware of every change made to the codebase. |
| 7 | [@narumitw/pi-python-lsp](https://www.npmjs.com/package/@narumitw/pi-python-lsp) | 1,319 | `npm install @narumitw/pi-python-lsp` | Pi extension that exposes ty and Ruff language-server tools for Python. |
| 8 | [pi-lsp-extension](https://www.npmjs.com/package/pi-lsp-extension) | 1,229 | `npm install pi-lsp-extension` | Pi coding agent extension for LSP (Language Server Protocol) integration |
| 9 | [@narumitw/pi-biome-lsp](https://www.npmjs.com/package/@narumitw/pi-biome-lsp) | 1,152 | `npm install @narumitw/pi-biome-lsp` | Pi extension that exposes Biome language-server tools for diagnostics, formatting, and fixes. |
| 10 | [@catdaemon/pi-code-intelligence](https://www.npmjs.com/package/@catdaemon/pi-code-intelligence) | 1,082 | `npm install @catdaemon/pi-code-intelligence` | Local codebase graph, semantic search, repo learnings, and review tools for Pi. |
| 11 | [@haphazarddev/pi-interactive-code-review](https://www.npmjs.com/package/@haphazarddev/pi-interactive-code-review) | 951 | `npm install @haphazarddev/pi-interactive-code-review` | A pi extension for interactive code review against your default branch, including uncommitted changes, with line or hun… |
| 12 | [pi-lsp-lite](https://www.npmjs.com/package/pi-lsp-lite) | 831 | `npm install pi-lsp-lite` | LSP diagnostics for pi — errors and warnings on every edit, same turn. Go, Rust, TypeScript, Python, C/C++. |
| 13 | [pi-diff-review](https://www.npmjs.com/package/pi-diff-review) | 766 | `npm install pi-diff-review` | Local diff review TUI extension for pi |
| 14 | [agent-booster-pack](https://www.npmjs.com/package/agent-booster-pack) | 743 | `npm install agent-booster-pack` | Agent Booster Pack for Pi: skills + Interface Design Gate runtime + proof-first runtime + whiteboarding guard + final v… |
| 15 | [pi-codex](https://www.npmjs.com/package/pi-codex) | 723 | `npm install pi-codex` | Use Codex from pi-coding-agent to review code or delegate tasks. |
| 16 | [pi-mono-simplify](https://www.npmjs.com/package/pi-mono-simplify) | 686 | `npm install pi-mono-simplify` | Pi extension that reviews changed code for reuse, quality, and efficiency, then fixes any issues found |
| 17 | [pi-code-nav](https://www.npmjs.com/package/pi-code-nav) | 684 | `npm install pi-code-nav` | Exact symbol navigation companion for Pi, built to sit between pi-codesight discovery and pi-lens raw LSP operations. |
| 18 | [pi-review-loop](https://www.npmjs.com/package/pi-review-loop) | 663 | `npm install pi-review-loop` | Automated code review loop extension for pi coding agent |
| 19 | [pi-linter](https://www.npmjs.com/package/pi-linter) | 656 | `npm install pi-linter` | Inline session linter for Pi — flags vague openers, pronoun soup, scope creep, and other input anti-patterns above the… |
| 20 | [@gaodes/pi-lens](https://www.npmjs.com/package/@gaodes/pi-lens) | 631 | `npm install @gaodes/pi-lens` | Real-time code feedback for pi — LSP, linters, formatters, type-checking, structural analysis & booboo |
| 21 | [@dreki-gg/pi-lsp](https://www.npmjs.com/package/@dreki-gg/pi-lsp) | 617 | `npm install @dreki-gg/pi-lsp` | Language-agnostic LSP code intelligence for pi — diagnostics, hover, definitions, references, symbols, and call hierarc… |
| 22 | [lsp-pi](https://www.npmjs.com/package/lsp-pi) | 535 | `npm install lsp-pi` | LSP extension for pi-coding-agent - provides language server tool and diagnostics feedback for Dart/Flutter, TypeScript… |
| 23 | [agent-booster-pack-skills](https://www.npmjs.com/package/agent-booster-pack-skills) | 520 | `npm install agent-booster-pack-skills` | General Agent Booster Pack skills for Pi: data, security, debugging, refactoring, and more. Runtime-owned skills ship w… |
| 24 | [pi-review](https://www.npmjs.com/package/pi-review) | 503 | `npm install pi-review` | Review current pi work in a new branch with conversation context |
| 25 | [@geminixiang/pi-simplify](https://www.npmjs.com/package/@geminixiang/pi-simplify) | 396 | `npm install @geminixiang/pi-simplify` | Simplify: Review changed code for reuse, quality, and efficiency |
| 26 | [pi-slop-review](https://www.npmjs.com/package/pi-slop-review) | 297 | `npm install pi-slop-review` | Native diff review window for AI coding agents (pi, Claude Code, Codex CLI). Opens a Monaco-powered review UI in a Glim… |
| 27 | [@mrclrchtr/supi-lsp](https://www.npmjs.com/package/@mrclrchtr/supi-lsp) | 294 | `npm install @mrclrchtr/supi-lsp` | SuPi LSP extension — Language Server Protocol integration for pi |
| 28 | [@jwayong/pi-azure-devops](https://www.npmjs.com/package/@jwayong/pi-azure-devops) | 277 | `npm install @jwayong/pi-azure-devops` | Azure DevOps integration for Pi coding agent — work items, pipelines, repos, test plans, and more |
| 29 | [@wiechsa/pi-ruby-lsp](https://www.npmjs.com/package/@wiechsa/pi-ruby-lsp) | 276 | `npm install @wiechsa/pi-ruby-lsp` | Ruby LSP integration for pi coding agent |
| 30 | [pi-go-review](https://www.npmjs.com/package/pi-go-review) | 255 | `npm install pi-go-review` | Review Go code changes against the '100 Go Mistakes and How to Avoid Them' checklist (https://100go.co/). Registers a g… |
| 31 | [@i-language/autocode](https://www.npmjs.com/package/@i-language/autocode) | 149 | `npm install @i-language/autocode` | You say it, AutoCode ships it. 47 I-Lang skills covering understanding, planning, building, quality, debugging, deploym… |
| 32 | [@gnoviawan/pi-biome-lsp](https://www.npmjs.com/package/@gnoviawan/pi-biome-lsp) | 144 | `npm install @gnoviawan/pi-biome-lsp` | Biome lint/format/check integration for Pi, including daemon startup and post-edit checks. |
| 33 | [pi-code-reviewer](https://www.npmjs.com/package/pi-code-reviewer) | 132 | `npm install pi-code-reviewer` | Pi-installable code review skill package. |
| 34 | [pi-agent-booster-pack](https://www.npmjs.com/package/pi-agent-booster-pack) | 132 | `npm install pi-agent-booster-pack` | Agent Booster Pack helps Pi produce code that is well-organized, low in complexity and side effects, and is secure and… |
| 35 | [@lustepe/pi-elixir](https://www.npmjs.com/package/@lustepe/pi-elixir) | 86 | `npm install @lustepe/pi-elixir` | Pi package for Elixir projects: Mix post-edit checks, Expert LSP bridge, commands, LLM tools, and Elixir/Phoenix/Ecto/O… |
| 36 | [@lustepe/elixir-pi](https://www.npmjs.com/package/@lustepe/elixir-pi) | 73 | `npm install @lustepe/elixir-pi` | Pi package for Elixir projects: Mix post-edit checks, Expert LSP bridge, commands, LLM tools, and Elixir/Phoenix/Ecto/O… |
| 37 | [pi-lsp](https://www.npmjs.com/package/pi-lsp) | 73 | `npm install pi-lsp` | Declarative Pi extension for LSP diagnostics and language-server navigation tools. |
| 38 | [pi-code-review](https://www.npmjs.com/package/pi-code-review) | 63 | `npm install pi-code-review` | A Pi extension that provides automated, language-aware code review after the agent writes or modifies files. |
| 39 | [pi-deep-review](https://www.npmjs.com/package/pi-deep-review) | 56 | `npm install pi-deep-review` | Deep PR review extension for Pi with deterministic context packing and Responses API streaming |
| 40 | [@bytesbrains/pi-review-gate](https://www.npmjs.com/package/@bytesbrains/pi-review-gate) | 47 | `npm install @bytesbrains/pi-review-gate` | CI-level merge guardian for AI agents — required reviewers, breaking change detection, stale PR cleanup, and review aut… |
| 41 | [pi-bitbucket](https://www.npmjs.com/package/pi-bitbucket) | 43 | `npm install pi-bitbucket` | Bitbucket Cloud integration for Pi — repos, PRs, branches, pipelines, and issues |
| 42 | [@hdh/pi-contributions-bot](https://www.npmjs.com/package/@hdh/pi-contributions-bot) | 22 | `npm install @hdh/pi-contributions-bot` | Pi extension that gates git commit on CONTRIBUTING_BOT.md compliance |
| 43 | [@yofriadi/pi-lsp](https://www.npmjs.com/package/@yofriadi/pi-lsp) | 15 | `npm install @yofriadi/pi-lsp` | ```bash pi install git:github.com/yofriadi/pi-extensions@lsp-v<version> ``` |
| 44 | [@yofriadi/pi-review](https://www.npmjs.com/package/@yofriadi/pi-review) | 9 | `npm install @yofriadi/pi-review` | Interactive code review extension package for pi |
| 45 | [@davehardy20/pi-lsp-tools](https://www.npmjs.com/package/@davehardy20/pi-lsp-tools) | 0 | `npm install @davehardy20/pi-lsp-tools` | Pi package for LSP-powered code navigation: goto definition, find references, diagnostics, symbols, and rename. |
| 46 | [@davehardy20/pi-quality-gates](https://www.npmjs.com/package/@davehardy20/pi-quality-gates) | 0 | `npm install @davehardy20/pi-quality-gates` | Pi quality-gates bundle: post-turn linting, LSP diagnostics, and automated code review. |
| 47 | [@narumitw/pi-lsp](https://www.npmjs.com/package/@narumitw/pi-lsp) | 0 | `npm install @narumitw/pi-lsp` | Pi extension that exposes language-server tools for Biome, ty, and Ruff through a shared LSP runner. |
| 48 | [@nielpattin/pi-simplify](https://www.npmjs.com/package/@nielpattin/pi-simplify) | 0 | `npm install @nielpattin/pi-simplify` | A Pi extension that reviews recently changed code for clarity, consistency, and maintainability. |
| 49 | [decorated-pi](https://www.npmjs.com/package/decorated-pi) | 0 | `npm install decorated-pi` | Essential utilities for pi: safety gates, secret redaction, smart @ completion, dynamic AGENTS loading, image fallback,… |
| 50 | [pi-annotated-review](https://www.npmjs.com/package/pi-annotated-review) | 0 | `npm install pi-annotated-review` | Pi extension that creates annotated HTML code-review pages for git changes. |
| 51 | [pi-code-quality](https://www.npmjs.com/package/pi-code-quality) | 0 | `npm install pi-code-quality` | Declarative Pi extension that automatically formats and lints files after write/edit. |
| 52 | [pi-redline](https://www.npmjs.com/package/pi-redline) | 0 | `npm install pi-redline` | Redline pi sessions: an overlay TUI showing every file changed in the current pi session with syntax-highlighted diffs,… |
| 53 | [pi-review-gate](https://www.npmjs.com/package/pi-review-gate) | 0 | `npm install pi-review-gate` | CI-level merge guardian for AI agents — required reviewers, breaking change detection, stale PR cleanup, and review aut… |

</details>

<a id="context"></a>
## 上下文管理
> 100 个包 · 总月下载量 46,010

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-continue](https://www.npmjs.com/package/pi-continue) | 3,311 | `npm install pi-continue` | Mid-turn continuation for long Pi tool runs: compact safely before context overflow, th… |
| 2 | [pi-context-prune](https://www.npmjs.com/package/pi-context-prune) | 2,574 | `npm install pi-context-prune` | Pi extension package for pruning future context while preserving original tool-call his… |
| 3 | [@sting8k/pi-vcc](https://www.npmjs.com/package/@sting8k/pi-vcc) | 2,682 | `npm install @sting8k/pi-vcc` | Algorithmic conversation compactor for pi - transcript-preserving structured summaries,… |
| 4 | [pi-bar](https://www.npmjs.com/package/pi-bar) | 4,295 | `npm install pi-bar` | Pi footer/statusline showing active model, thinking level, context pressure, live progr… |
| 5 | [@spences10/pi-context](https://www.npmjs.com/package/@spences10/pi-context) | 2,476 | `npm install @spences10/pi-context` | Searchable local SQLite sidecar that keeps oversized Pi tool output useful without floo… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 100 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-continue](https://www.npmjs.com/package/pi-continue) | 3,311 | `npm install pi-continue` | Mid-turn continuation for long Pi tool runs: compact safely before context overflow, then resume the same session from… |
| 2 | [pi-context-prune](https://www.npmjs.com/package/pi-context-prune) | 2,574 | `npm install pi-context-prune` | Pi extension package for pruning future context while preserving original tool-call history. |
| 3 | [@sting8k/pi-vcc](https://www.npmjs.com/package/@sting8k/pi-vcc) | 2,682 | `npm install @sting8k/pi-vcc` | Algorithmic conversation compactor for pi - transcript-preserving structured summaries, no LLM calls |
| 4 | [pi-bar](https://www.npmjs.com/package/pi-bar) | 4,295 | `npm install pi-bar` | Pi footer/statusline showing active model, thinking level, context pressure, live progress updates, and extension statu… |
| 5 | [@spences10/pi-context](https://www.npmjs.com/package/@spences10/pi-context) | 2,476 | `npm install @spences10/pi-context` | Searchable local SQLite sidecar that keeps oversized Pi tool output useful without flooding model context |
| 6 | [pi-context](https://www.npmjs.com/package/pi-context) | 1,944 | `npm install pi-context` | Agentic Context Management for the Pi |
| 7 | [pi-subdir-context](https://www.npmjs.com/package/pi-subdir-context) | 1,753 | `npm install pi-subdir-context` | Automatically load AGENTS.md context from subdirectories in pi coding agent |
| 8 | [@pi-unipi/compactor](https://www.npmjs.com/package/@pi-unipi/compactor) | 1,748 | `npm install @pi-unipi/compactor` | Context engine for Pi — zero-LLM compaction, session continuity, sandbox execution, and tool display optimization |
| 9 | [@dreki-gg/pi-context7](https://www.npmjs.com/package/@dreki-gg/pi-context7) | 1,719 | `npm install @dreki-gg/pi-context7` | Pi-native Context7 documentation tools — direct HTTP, persistent cache, no MCP dependency |
| 10 | [pi-capitals-context](https://www.npmjs.com/package/pi-capitals-context) | 1,234 | `npm install pi-capitals-context` | Auto-inject ALL_CAPS.md files into pi's system prompt from project root and subdirectories |
| 11 | [pi-autocontext-lean-verify](https://www.npmjs.com/package/pi-autocontext-lean-verify) | 1,171 | `npm install pi-autocontext-lean-verify` | Experimental Pi package for Lean-verified proof repair using autocontext and Pi. |
| 12 | [pi-add-dir](https://www.npmjs.com/package/pi-add-dir) | 1,091 | `npm install pi-add-dir` | Add external directories to your pi session — loads their AGENTS.md, CLAUDE.md, and skills into context. |
| 13 | [pi-context-usage](https://www.npmjs.com/package/pi-context-usage) | 1,001 | `npm install pi-context-usage` | Pi extension that shows context window usage visualization |
| 14 | [@ogulcancelik/pi-minimal-footer](https://www.npmjs.com/package/@ogulcancelik/pi-minimal-footer) | 973 | `npm install @ogulcancelik/pi-minimal-footer` | Minimal footer for pi with context gauge and subscription usage bars |
| 15 | [pi-doc-injector](https://www.npmjs.com/package/pi-doc-injector) | 966 | `npm install pi-doc-injector` | Auto-inject relevant project documentation into Pi's LLM context based on keyword matching |
| 16 | [pi-tool-search](https://www.npmjs.com/package/pi-tool-search) | 897 | `npm install pi-tool-search` | Hide all tools behind a manifest-aware tool_search — LLM enables tools by name on demand |
| 17 | [@badliveware/pi-compaction-continue](https://www.npmjs.com/package/@badliveware/pi-compaction-continue) | 705 | `npm install @badliveware/pi-compaction-continue` | Watchdog nudge extension for Pi after idle compactions or stalled continuation turns. |
| 18 | [@agnishc/edb-context-viewer](https://www.npmjs.com/package/@agnishc/edb-context-viewer) | 689 | `npm install @agnishc/edb-context-viewer` | Pi extension: inspect the system prompt and full LLM context in scrollable overlay popups |
| 19 | [pi-amplike](https://www.npmjs.com/package/pi-amplike) | 689 | `npm install pi-amplike` | Pi skills and extensions that provide Amp Code-like workflows (handoff, permissions, mode selector, web access). |
| 20 | [pi-mono-context-guard](https://www.npmjs.com/package/pi-mono-context-guard) | 673 | `npm install pi-mono-context-guard` | Pi extension that guards context window growth by auto-limiting read and rg output |
| 21 | [pi-autocontext](https://www.npmjs.com/package/pi-autocontext) | 604 | `npm install pi-autocontext` | autocontext extension for Pi coding agent — iterative strategy generation, LLM judging, and evaluation tools |
| 22 | [@capyup/pi-auto-compact](https://www.npmjs.com/package/@capyup/pi-auto-compact) | 592 | `npm install @capyup/pi-auto-compact` | Pre-turn auto-compaction for pi |
| 23 | [@richardgill/pi-extra-context-files](https://www.npmjs.com/package/@richardgill/pi-extra-context-files) | 582 | `npm install @richardgill/pi-extra-context-files` | pi extension for loading extra context files into the system prompt. |
| 24 | [pi-handoff](https://www.npmjs.com/package/pi-handoff) | 579 | `npm install pi-handoff` | Handoff command extension package for pi coding agent |
| 25 | [@ryan_nookpi/pi-extension-codex-large-context](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-codex-large-context) | 555 | `npm install @ryan_nookpi/pi-extension-codex-large-context` | Codex large context window extension for pi. |
| 26 | [@roodriigoooo/trail](https://www.npmjs.com/package/@roodriigoooo/trail) | 502 | `npm install @roodriigoooo/trail` | Trail: session artifacts and fresh-session checkpoints for Pi |
| 27 | [pi-session-ask](https://www.npmjs.com/package/pi-session-ask) | 484 | `npm install pi-session-ask` | Allows the agent or user to ask questions about the current session's pre-compaction history, parent (if forked) sessio… |
| 28 | [pi-acm](https://www.npmjs.com/package/pi-acm) | 447 | `npm install pi-acm` | Active Context Management for pi — sliding window context management as a distributable pi extension |
| 29 | [pi-context-cap](https://www.npmjs.com/package/pi-context-cap) | 433 | `npm install pi-context-cap` | Cap model context windows so pi's built-in auto-compaction fires earlier. Zero-config 200k default for long-context Cla… |
| 30 | [pi-hide-messages](https://www.npmjs.com/package/pi-hide-messages) | 366 | `npm install pi-hide-messages` | Pi extension for hiding older TUI chat history while preserving full session context, with /hide-messages and /restore-… |
| 31 | [pi-git-context](https://www.npmjs.com/package/pi-git-context) | 364 | `npm install pi-git-context` | Opinionated git state context injection for pi |
| 32 | [@complexthings/pi-dynamic-context-pruning](https://www.npmjs.com/package/@complexthings/pi-dynamic-context-pruning) | 360 | `npm install @complexthings/pi-dynamic-context-pruning` | PI coding agent extension — Dynamic Context Pruning (DCP) |
| 33 | [pi-grounded-compaction](https://www.npmjs.com/package/pi-grounded-compaction) | 336 | `npm install pi-grounded-compaction` | Compaction and branch summarizer for Pi with model presets, custom prompts, and deterministic files-touched tracking fo… |
| 34 | [pi-files-touched](https://www.npmjs.com/package/pi-files-touched) | 305 | `npm install pi-files-touched` | Deterministic file-activity tracking for Pi sessions, covering native tools, RepoPrompt, and bash commands. Includes /f… |
| 35 | [pi-obsidian-context](https://www.npmjs.com/package/pi-obsidian-context) | 299 | `npm install pi-obsidian-context` | Pi extension that surfaces Obsidian vault context (active file and open tabs) as an editor widget and injects it as hid… |
| 36 | [pi-context-tools](https://www.npmjs.com/package/pi-context-tools) | 290 | `npm install pi-context-tools` | A pi extension for compacting and inspecting agent context. |
| 37 | [pi-mono-context](https://www.npmjs.com/package/pi-mono-context) | 277 | `npm install pi-mono-context` | Pi extension that prints current context-window usage without adding the report to future LLM context |
| 38 | [@oleg_tarasov/pi-compaction-fix](https://www.npmjs.com/package/@oleg_tarasov/pi-compaction-fix) | 270 | `npm install @oleg_tarasov/pi-compaction-fix` | Pi extension that waits for overflow auto-compaction retry before headless prompt completion. |
| 39 | [pi-model-aware-compaction](https://www.npmjs.com/package/pi-model-aware-compaction) | 269 | `npm install pi-model-aware-compaction` | Per-model context-usage thresholds for Pi's built-in auto-compaction, so models with different context windows and perf… |
| 40 | [pi-quiet-tools](https://www.npmjs.com/package/pi-quiet-tools) | 264 | `npm install pi-quiet-tools` | Pi extension that automatically compacts large tool outputs before they enter the model context window, saving tokens w… |
| 41 | [pi-session-context](https://www.npmjs.com/package/pi-session-context) | 242 | `npm install pi-session-context` | A pi coding agent extension that tracks and displays session context (worktree, Jira ticket, GitLab MR) in the footer |
| 42 | [@that-yolanda/pi-context](https://www.npmjs.com/package/@that-yolanda/pi-context) | 240 | `npm install @that-yolanda/pi-context` | Context window usage visualization for PI coding agent. |
| 43 | [@baggiiiie/pi-context-chart](https://www.npmjs.com/package/@baggiiiie/pi-context-chart) | 234 | `npm install @baggiiiie/pi-context-chart` | A pi package that adds the `/context-chart` command. |
| 44 | [@mrclrchtr/supi-context](https://www.npmjs.com/package/@mrclrchtr/supi-context) | 231 | `npm install @mrclrchtr/supi-context` | SuPi Context extension — detailed context usage report via /supi-context command |
| 45 | [pi-context-pruning](https://www.npmjs.com/package/pi-context-pruning) | 227 | `npm install pi-context-pruning` | OpenCode-style proactive tool output pruning for pi — reduce token usage by pruning stale tool outputs before each LLM… |
| 46 | [pi-custom-compaction](https://www.npmjs.com/package/pi-custom-compaction) | 226 | `npm install pi-custom-compaction` | Custom compaction for pi — swap the model, template, and trigger for context compaction |
| 47 | [pi-nano-context](https://www.npmjs.com/package/pi-nano-context) | 224 | `npm install pi-nano-context` | A tiny pi.dev extension. It replaces the default context meter with a compact segmented bar under the editor so you can… |
| 48 | [@ersintarhan/pi-auto-context](https://www.npmjs.com/package/@ersintarhan/pi-auto-context) | 208 | `npm install @ersintarhan/pi-auto-context` | Automatic context management for pi sessions: anchors, pivots, and cross-session recall — with a status line and auto-t… |
| 49 | [@artale/pi-weigh](https://www.npmjs.com/package/@artale/pi-weigh) | 200 | `npm install @artale/pi-weigh` | Weigh your context. Visual HTML report of system prompt token budget — per-tool breakdown, section analysis, health ind… |
| 50 | [@ogulcancelik/pi-handoff](https://www.npmjs.com/package/@ogulcancelik/pi-handoff) | 190 | `npm install @ogulcancelik/pi-handoff` | Context-aware session handoff for pi. Transfer context to a new session via command, tool, or automatic context guard. |
| 51 | [@ogulcancelik/pi-goal](https://www.npmjs.com/package/@ogulcancelik/pi-goal) | 177 | `npm install @ogulcancelik/pi-goal` | Codex-style long-running goal mode for pi with automatic linked-session handoff. |
| 52 | [pi-llm-debugging](https://www.npmjs.com/package/pi-llm-debugging) | 173 | `npm install pi-llm-debugging` | Saves LLM provider request payloads to the project's .pi folder for per-project debugging |
| 53 | [pi-reduce](https://www.npmjs.com/package/pi-reduce) | 155 | `npm install pi-reduce` | Reduce Pi session context by rebuilding the current branch with only the message types you keep. |
| 54 | [@taimoorchatha/pi-context-footer](https://www.npmjs.com/package/@taimoorchatha/pi-context-footer) | 143 | `npm install @taimoorchatha/pi-context-footer` | pi coding-agent extension: turn-by-turn context-usage readout in the footer (bar, %, tokens, delta, last event). |
| 55 | [pi-context-injector](https://www.npmjs.com/package/pi-context-injector) | 140 | `npm install pi-context-injector` | Pi extension that injects project context into first-turn prompts and compaction continuity messages. |
| 56 | [pi-lcm](https://www.npmjs.com/package/pi-lcm) | 135 | `npm install pi-lcm` | Lossless Context Management for Pi — DAG-based summarization with full history recovery |
| 57 | [pi-igotchu](https://www.npmjs.com/package/pi-igotchu) | 135 | `npm install pi-igotchu` | Cheap-first drift monitor for pi (command: /yo). Nudges only at 95+ confidence. |
| 58 | [pi-agentic-compaction](https://www.npmjs.com/package/pi-agentic-compaction) | 131 | `npm install pi-agentic-compaction` | Pi extension for agentic conversation compaction using a virtual filesystem and tool-driven exploration |
| 59 | [pi-context-breadcrumbs](https://www.npmjs.com/package/pi-context-breadcrumbs) | 121 | `npm install pi-context-breadcrumbs` | Nested path-sensitive context loading for Pi coding agent. |
| 60 | [@ssweens/pi-handoff](https://www.npmjs.com/package/@ssweens/pi-handoff) | 115 | `npm install @ssweens/pi-handoff` | Enhanced handoff extension for pi - context management for agentic coding workflows |
| 61 | [pi-token-killer](https://www.npmjs.com/package/pi-token-killer) | 112 | `npm install pi-token-killer` | Token Killer for Pi -- reduce LLM token consumption by 60-90% on common dev commands |
| 62 | [pi-init](https://www.npmjs.com/package/pi-init) | 111 | `npm install pi-init` | A pi agent skill to initialize or update AGENTS.md context files. |
| 63 | [@aaronmaturen/pi-context7](https://www.npmjs.com/package/@aaronmaturen/pi-context7) | 106 | `npm install @aaronmaturen/pi-context7` | Context7 extension for pi - fetches up-to-date library documentation via context7.com |
| 64 | [pi-context-zone](https://www.npmjs.com/package/pi-context-zone) | 100 | `npm install pi-context-zone` | Visual context health bar for the Pi coding agent — see your smart/warm/dumb zone at a glance |
| 65 | [@taimoorchatha/pi-context-pulse](https://www.npmjs.com/package/@taimoorchatha/pi-context-pulse) | 87 | `npm install @taimoorchatha/pi-context-pulse` | pi coding-agent extension: input-editor border pulses yellow → red as the context window fills up, like an FPS damage-v… |
| 66 | [@diegopetrucci/pi-context-cap](https://www.npmjs.com/package/@diegopetrucci/pi-context-cap) | 77 | `npm install @diegopetrucci/pi-context-cap` | A pi extension that caps effective model context windows at 200k tokens for earlier auto-compaction. |
| 67 | [pi-readcache](https://www.npmjs.com/package/pi-readcache) | 76 | `npm install pi-readcache` | 🧠 Pi extension that optimizes read tool calls with replay-aware caching and compaction-safe trust reconstruction |
| 68 | [pi-omni-compact](https://www.npmjs.com/package/pi-omni-compact) | 73 | `npm install pi-omni-compact` | Pi extension that delegates compaction to a large-context model subprocess |
| 69 | [@baggiiiie/pi-context-status](https://www.npmjs.com/package/@baggiiiie/pi-context-status) | 73 | `npm install @baggiiiie/pi-context-status` | A pi package that shows current context-window usage in the status line or a custom footer. |
| 70 | [@mario-gc/pi-context7](https://www.npmjs.com/package/@mario-gc/pi-context7) | 69 | `npm install @mario-gc/pi-context7` | Context7 integration for pi coding agent — fetch up-to-date library documentation and code examples |
| 71 | [@jdrly/pi-toolbox](https://www.npmjs.com/package/@jdrly/pi-toolbox) | 69 | `npm install @jdrly/pi-toolbox` | Deferred tool loading for Pi: keep heavy tool schemas out of context until prompts need them. |
| 72 | [@alasano/pi-extra-context](https://www.npmjs.com/package/@alasano/pi-extra-context) | 68 | `npm install @alasano/pi-extra-context` | Load extra configured context files into pi sessions |
| 73 | [@davidorex/pi-custom-compactor](https://www.npmjs.com/package/@davidorex/pi-custom-compactor) | 67 | `npm install @davidorex/pi-custom-compactor` | Declarative YAML-driven structured compaction for pi coding agent — multi-pass extraction, artifact persistence, budget… |
| 74 | [pi-sift](https://www.npmjs.com/package/pi-sift) | 66 | `npm install pi-sift` | Model-scored compression of large tool results for Pi Coding Agent |
| 75 | [pi-context-saver](https://www.npmjs.com/package/pi-context-saver) | 56 | `npm install pi-context-saver` | Pi extension that prevents context bloat by automatically sandboxing heavy tool outputs (bash, web_search, fetch_conten… |
| 76 | [thincontext](https://www.npmjs.com/package/thincontext) | 50 | `npm install thincontext` | Drop-in middleware to compress LLM context before it hits the API |
| 77 | [@victor-software-house/pi-context-optimizer](https://www.npmjs.com/package/@victor-software-house/pi-context-optimizer) | 44 | `npm install @victor-software-house/pi-context-optimizer` | Pi extension for command rewriting and tool-output compaction optimization. |
| 78 | [@e9n/pi-context](https://www.npmjs.com/package/@e9n/pi-context) | 43 | `npm install @e9n/pi-context` | Context window usage command for pi — visual breakdown of token usage by category |
| 79 | [@artale/pi-context](https://www.npmjs.com/package/@artale/pi-context) | 42 | `npm install @artale/pi-context` | Context window intelligence for Pi. Usage prediction, message forecast, rate trending, auto-warnings. |
| 80 | [pi-dumb](https://www.npmjs.com/package/pi-dumb) | 38 | `npm install pi-dumb` | Context rot indicator for Pi — shows token usage with research-backed degradation warnings |
| 81 | [pi-reread-instructions](https://www.npmjs.com/package/pi-reread-instructions) | 38 | `npm install pi-reread-instructions` | Pi extension that re-inserts AGENTS.md / CLAUDE.md every N completed final assistant replies |
| 82 | [@lajarre/pi-session-ask](https://www.npmjs.com/package/@lajarre/pi-session-ask) | 36 | `npm install @lajarre/pi-session-ask` | Ask questions about any Pi session (by path, UUID, or name) via an isolated subagent, keeping current context clean. |
| 83 | [@jordyvd/pi-openai-compaction](https://www.npmjs.com/package/@jordyvd/pi-openai-compaction) | 30 | `npm install @jordyvd/pi-openai-compaction` | OpenAI native standalone compaction replay for Pi. |
| 84 | [pi-context-filter](https://www.npmjs.com/package/pi-context-filter) | 26 | `npm install pi-context-filter` | A pi extension that provides .gitignore-style control over which context files and skills appear in the system prompt |
| 85 | [@recallnet/codecontext-pi](https://www.npmjs.com/package/@recallnet/codecontext-pi) | 23 | `npm install @recallnet/codecontext-pi` | pi steering extension for surfacing @context annotations during reads |
| 86 | [@claaslange/pi-context-budget](https://www.npmjs.com/package/@claaslange/pi-context-budget) | 14 | `npm install @claaslange/pi-context-budget` | Pi extension that warns when conversation context usage crosses configured thresholds. |
| 87 | [@danchamorro/pi-handoff-agent](https://www.npmjs.com/package/@danchamorro/pi-handoff-agent) | 0 | `npm install @danchamorro/pi-handoff-agent` | Export clean Pi session handoffs for portable agent continuity |
| 88 | [@davehardy20/pi-compact-plus](https://www.npmjs.com/package/@davehardy20/pi-compact-plus) | 0 | `npm install @davehardy20/pi-compact-plus` | Pi package for advanced context compaction with mode-aware triggers, structured summaries, current-focus extraction, co… |
| 89 | [@davehardy20/pi-context7](https://www.npmjs.com/package/@davehardy20/pi-context7) | 0 | `npm install @davehardy20/pi-context7` | Pi package for fetching current library/framework/API docs via Context7. |
| 90 | [@diegopetrucci/pi-context-inspector](https://www.npmjs.com/package/@diegopetrucci/pi-context-inspector) | 0 | `npm install @diegopetrucci/pi-context-inspector` | A pi extension that opens a local HTML dashboard explaining where the current session context is going. |
| 91 | [@felipefontoura/pi-skill-model-handoff](https://www.npmjs.com/package/@felipefontoura/pi-skill-model-handoff) | 0 | `npm install @felipefontoura/pi-skill-model-handoff` | Pi extension that switches model/thinking from skill frontmatter |
| 92 | [@josephyoung/pi-file-reference](https://www.npmjs.com/package/@josephyoung/pi-file-reference) | 0 | `npm install @josephyoung/pi-file-reference` | Pi extension: resolve @filepath (files & directories) in AGENTS.md, inject into system prompt |
| 93 | [@ogulcancelik/pi-model-agents](https://www.npmjs.com/package/@ogulcancelik/pi-model-agents) | 0 | `npm install @ogulcancelik/pi-model-agents` | Load model-specific AGENTS.md instructions in pi |
| 94 | [@supierior/pi-rules](https://www.npmjs.com/package/@supierior/pi-rules) | 0 | `npm install @supierior/pi-rules` | Pi package for generating, injecting, and maintaining path-scoped project rules in .pi/rules. |
| 95 | [@tifan/pi-handoff](https://www.npmjs.com/package/@tifan/pi-handoff) | 0 | `npm install @tifan/pi-handoff` | Transfer pi session context to a new session and query past sessions. |
| 96 | [@victorhsb/pi-auto-context-files](https://www.npmjs.com/package/@victorhsb/pi-auto-context-files) | 0 | `npm install @victorhsb/pi-auto-context-files` | Auto-inject AGENTS.md and CLAUDE.md context files into pi read tool results |
| 97 | [pi-assistant-provenance](https://www.npmjs.com/package/pi-assistant-provenance) | 0 | `npm install pi-assistant-provenance` | Gives models awareness of mid-session model switches in Pi |
| 98 | [pi-auto-context-files](https://www.npmjs.com/package/pi-auto-context-files) | 0 | `npm install pi-auto-context-files` | Auto-inject AGENTS.md and CLAUDE.md context files into pi read tool results |
| 99 | [pi-workspace-context](https://www.npmjs.com/package/pi-workspace-context) | 0 | `npm install pi-workspace-context` | Pi extension for adding extra local workspace roots to the agent context. |
| 100 | [tmlpd-pi](https://www.npmjs.com/package/tmlpd-pi) | 0 | `npm install tmlpd-pi` | Research-backed Multi-LLM Router with parallel execution, learned routing (RouteLLM), prefix caching (RadixAttention),… |

</details>

<a id="tool"></a>
## 工具与安全
> 87 个包 · 总月下载量 41,374

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@gotgenes/pi-permission-system](https://www.npmjs.com/package/@gotgenes/pi-permission-system) | 10,021 | `npm install @gotgenes/pi-permission-system` | Permission enforcement extension for the Pi coding agent. |
| 2 | [pi-sandbox](https://www.npmjs.com/package/pi-sandbox) | 1,821 | `npm install pi-sandbox` | OS-level sandboxing for pi with interactive permission prompts |
| 3 | [@aliou/pi-guardrails](https://www.npmjs.com/package/@aliou/pi-guardrails) | 4,820 | `npm install @aliou/pi-guardrails` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-guardrails.png) |
| 4 | [pi-permission-system](https://www.npmjs.com/package/pi-permission-system) | 2,029 | `npm install pi-permission-system` | Permission enforcement extension for the Pi coding agent. |
| 5 | [@casualjim/pi-heimdall](https://www.npmjs.com/package/@casualjim/pi-heimdall) | 1,755 | `npm install @casualjim/pi-heimdall` | Guardian extension for pi — security guards that block accidental secret exposure, enfo… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 87 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@gotgenes/pi-permission-system](https://www.npmjs.com/package/@gotgenes/pi-permission-system) | 10,021 | `npm install @gotgenes/pi-permission-system` | Permission enforcement extension for the Pi coding agent. |
| 2 | [pi-sandbox](https://www.npmjs.com/package/pi-sandbox) | 1,821 | `npm install pi-sandbox` | OS-level sandboxing for pi with interactive permission prompts |
| 3 | [@aliou/pi-guardrails](https://www.npmjs.com/package/@aliou/pi-guardrails) | 4,820 | `npm install @aliou/pi-guardrails` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-guardrails.png) |
| 4 | [pi-permission-system](https://www.npmjs.com/package/pi-permission-system) | 2,029 | `npm install pi-permission-system` | Permission enforcement extension for the Pi coding agent. |
| 5 | [@casualjim/pi-heimdall](https://www.npmjs.com/package/@casualjim/pi-heimdall) | 1,755 | `npm install @casualjim/pi-heimdall` | Guardian extension for pi — security guards that block accidental secret exposure, enforce command policies, protect .e… |
| 6 | [pi-container-sandbox](https://www.npmjs.com/package/pi-container-sandbox) | 1,287 | `npm install pi-container-sandbox` | pi coding-agent extension that runs every read/write/edit/bash op inside a per-session Linux container (Apple `containe… |
| 7 | [pi-agent-permissions](https://www.npmjs.com/package/pi-agent-permissions) | 1,242 | `npm install pi-agent-permissions` | Pi CLI extension — configurable permission policy from .agents/permissions.json and native agent configs |
| 8 | [pi-perms](https://www.npmjs.com/package/pi-perms) | 1,218 | `npm install pi-perms` | Pi CLI extension — configurable permission policy from .agents/permissions.json and native agent configs |
| 9 | [@jerryan/pi-sanity](https://www.npmjs.com/package/@jerryan/pi-sanity) | 920 | `npm install @jerryan/pi-sanity` | Pi extension for sanity checks on agent operations |
| 10 | [@pi-lab/permissions](https://www.npmjs.com/package/@pi-lab/permissions) | 890 | `npm install @pi-lab/permissions` | Permission system extension for pi coding agent |
| 11 | [@firstpick/pi-extension-safety-guard](https://www.npmjs.com/package/@firstpick/pi-extension-safety-guard) | 860 | `npm install @firstpick/pi-extension-safety-guard` | Interactive guardrails for dangerous bash commands and protected file edits in Pi. |
| 12 | [@zackify/pi-claude-permissions](https://www.npmjs.com/package/@zackify/pi-claude-permissions) | 853 | `npm install @zackify/pi-claude-permissions` | Claude-style permissions for pi with an opinionated small mode set and built-in plan mode. |
| 13 | [pi-claude-sandbox](https://www.npmjs.com/package/pi-claude-sandbox) | 825 | `npm install pi-claude-sandbox` | Claude-style OS-level sandboxing for pi with interactive permission prompts. Coexists with pi-tool-display and other ba… |
| 14 | [@the-agency/vmpi](https://www.npmjs.com/package/@the-agency/vmpi) | 820 | `npm install @the-agency/vmpi` | Run pi sandboxed in a QEMU microVM via Gondolin |
| 15 | [pi-claude-permissions](https://www.npmjs.com/package/pi-claude-permissions) | 690 | `npm install pi-claude-permissions` | Claude-style allow/deny/ask permission lists for Pi tool calls |
| 16 | [@spences10/pi-svelte-guardrails](https://www.npmjs.com/package/@spences10/pi-svelte-guardrails) | 664 | `npm install @spences10/pi-svelte-guardrails` | Svelte 5 guardrails for Pi that block discouraged agent-written patterns before they land in code |
| 17 | [@panzenbaby/pi-secure-extension](https://www.npmjs.com/package/@panzenbaby/pi-secure-extension) | 569 | `npm install @panzenbaby/pi-secure-extension` | A Pi extension that performs security audits on other extensions before install or update. Uses the currently selected… |
| 18 | [pi-guard-sandbox](https://www.npmjs.com/package/pi-guard-sandbox) | 558 | `npm install pi-guard-sandbox` | A lightweight OS-level guard for Pi: agents stay useful, sensitive paths stay blocked, and writes stay inside the works… |
| 19 | [pi-sandbox-proxy](https://www.npmjs.com/package/pi-sandbox-proxy) | 541 | `npm install pi-sandbox-proxy` | pi coding-agent extension that intercepts network operations with approval flows, vulnerability scanning, and supply ch… |
| 20 | [@igormaka/pi-sandbox](https://www.npmjs.com/package/@igormaka/pi-sandbox) | 534 | `npm install @igormaka/pi-sandbox` | A proper sandbox extension for pi, using the Anthropic Sandbox Runtime |
| 21 | [pi-guard](https://www.npmjs.com/package/pi-guard) | 462 | `npm install pi-guard` | General-purpose permission system for pi tools, handling permissions for bash and file tools with extensible matchers f… |
| 22 | [pi-secret-guard](https://www.npmjs.com/package/pi-secret-guard) | 455 | `npm install pi-secret-guard` | A pi extension that guards against committing secrets, API keys, and credentials to git repositories using hybrid regex… |
| 23 | [@tangle-network/tcloud-agent](https://www.npmjs.com/package/@tangle-network/tcloud-agent) | 431 | `npm install @tangle-network/tcloud-agent` | Agent run-loop primitive over the Tangle sandbox bridge — runs an AgentProfile against a brief with criterion gates, bu… |
| 24 | [pi-sensitive-guard](https://www.npmjs.com/package/pi-sensitive-guard) | 399 | `npm install pi-sensitive-guard` | Pi extension that protects sensitive files, blocks secret writes, and optionally redacts protected read output. |
| 25 | [@artale/pi-sentinel](https://www.npmjs.com/package/@artale/pi-sentinel) | 394 | `npm install @artale/pi-sentinel` | Agent security framework. Immutable audit trail, permission policies, self-modification detection, destructive command… |
| 26 | [pi-sec](https://www.npmjs.com/package/pi-sec) | 348 | `npm install pi-sec` | A one-stop shop for Pi Agent security mitigations — prompt injection, malicious commands and packages, credential leaks… |
| 27 | [@samfp/pi-steering-hooks](https://www.npmjs.com/package/@samfp/pi-steering-hooks) | 290 | `npm install @samfp/pi-steering-hooks` | Deterministic tool-call guardrails for pi — enforce rules with before-tool hooks instead of prompts. Zero token cost, 1… |
| 28 | [@the-forge-flow/security-harness-pi](https://www.npmjs.com/package/@the-forge-flow/security-harness-pi) | 284 | `npm install @the-forge-flow/security-harness-pi` | Security harness for the PI coding agent — forbids dangerous commands and gates sensitive ones behind user approval |
| 29 | [pi-thegreataxios-staples](https://www.npmjs.com/package/pi-thegreataxios-staples) | 277 | `npm install pi-thegreataxios-staples` | Personal staple extension for pi coding-agent — protected paths |
| 30 | [@diegopetrucci/pi-permission-gate](https://www.npmjs.com/package/@diegopetrucci/pi-permission-gate) | 276 | `npm install @diegopetrucci/pi-permission-gate` | A pi extension that prompts before dangerous bash commands. |
| 31 | [pi-protected-paths](https://www.npmjs.com/package/pi-protected-paths) | 276 | `npm install pi-protected-paths` | Blocks write/edit/read of sensitive files (.env, .git, node_modules, SSH keys, credentials, and more) |
| 32 | [pi-git-guardrails](https://www.npmjs.com/package/pi-git-guardrails) | 273 | `npm install pi-git-guardrails` | Native Pi extension that blocks dangerous git operations, including git calls hidden inside scripts. |
| 33 | [@0xkobold/pi-secret-guardian](https://www.npmjs.com/package/@0xkobold/pi-secret-guardian) | 258 | `npm install @0xkobold/pi-secret-guardian` | Secret detection and pi-share-hf integration for pi-coding-agent. Scans projects, sessions, and environment for secrets… |
| 34 | [pi-windows-path-guard](https://www.npmjs.com/package/pi-windows-path-guard) | 244 | `npm install pi-windows-path-guard` | Prevents Windows-native Pi file tools from silently writing to mangled paths when agents reuse Git Bash/MSYS paths like… |
| 35 | [pi-safety-modes](https://www.npmjs.com/package/pi-safety-modes) | 222 | `npm install pi-safety-modes` | Pi package providing safety modes for tool-call guardrails |
| 36 | [@majorgilles/pi-permissions](https://www.npmjs.com/package/@majorgilles/pi-permissions) | 212 | `npm install @majorgilles/pi-permissions` | Claude-Code-like permission gates for pi tool calls. |
| 37 | [@odradekk/vera-scheme-sandbox](https://www.npmjs.com/package/@odradekk/vera-scheme-sandbox) | 203 | `npm install @odradekk/vera-scheme-sandbox` | Chez Scheme WASM sandbox for Vera agent — platform-independent Scheme evaluation |
| 38 | [@qmxme/pi-git-guard](https://www.npmjs.com/package/@qmxme/pi-git-guard) | 201 | `npm install @qmxme/pi-git-guard` | Blocks destructive git operations (push, tag -d, reset --hard) in pi |
| 39 | [@nqbao/pi-sandbox](https://www.npmjs.com/package/@nqbao/pi-sandbox) | 196 | `npm install @nqbao/pi-sandbox` | OS-level sandbox for pi coding agent — macOS sandbox-exec / Linux bubblewrap kernel-enforced isolation |
| 40 | [pi-extension-e2b](https://www.npmjs.com/package/pi-extension-e2b) | 195 | `npm install pi-extension-e2b` | E2B cloud sandbox integration for pi — redirects all tool execution to a remote E2B sandbox |
| 41 | [pi-budget-guard](https://www.npmjs.com/package/pi-budget-guard) | 176 | `npm install pi-budget-guard` | An extension for Pi coding agent that tracks session spend and enforces budget limits. |
| 42 | [@sysid/pi-sandbox](https://www.npmjs.com/package/@sysid/pi-sandbox) | 163 | `npm install @sysid/pi-sandbox` | OS + app sandboxing extension for the pi coding agent |
| 43 | [pi-permissions](https://www.npmjs.com/package/pi-permissions) | 158 | `npm install pi-permissions` | Configurable allow/deny permission rules for pi tool calls — control which bash commands, file reads, writes, and edits… |
| 44 | [@rhedbull/pi-permissions](https://www.npmjs.com/package/@rhedbull/pi-permissions) | 146 | `npm install @rhedbull/pi-permissions` | Claude Code-style permission modes for pi. Controls approval for file writes, edits, and bash commands with four modes:… |
| 45 | [@melihmucuk/leash](https://www.npmjs.com/package/@melihmucuk/leash) | 141 | `npm install @melihmucuk/leash` | Security guardrails for AI coding agents |
| 46 | [@kky42/pi-sandbox](https://www.npmjs.com/package/@kky42/pi-sandbox) | 127 | `npm install @kky42/pi-sandbox` | Pi-compatible sandbox extension for filesystem-aware bash and tool enforcement |
| 47 | [pi-file-permissions](https://www.npmjs.com/package/pi-file-permissions) | 121 | `npm install pi-file-permissions` | Pi extension that enforces file-level permissions via a YAML config. Controls which paths each tool (read, write, edit,… |
| 48 | [pi-permission](https://www.npmjs.com/package/pi-permission) | 117 | `npm install pi-permission` | Layered permission control extension for pi-coding-agent (no sound) |
| 49 | [pi-bash-confirm](https://www.npmjs.com/package/pi-bash-confirm) | 114 | `npm install pi-bash-confirm` | Pi package for confirming bash commands before execution with Telegram notifications |
| 50 | [@artale/pi-pentest](https://www.npmjs.com/package/@artale/pi-pentest) | 106 | `npm install @artale/pi-pentest` | Security scanning: nmap wrapper, vulnerability checks |
| 51 | [@artale/pi-git-guard](https://www.npmjs.com/package/@artale/pi-git-guard) | 105 | `npm install @artale/pi-git-guard` | Git safety guard: protect branches, scan secrets, prevent mistakes |
| 52 | [@eigenwert/pi-gatekeeper](https://www.npmjs.com/package/@eigenwert/pi-gatekeeper) | 99 | `npm install @eigenwert/pi-gatekeeper` | Pi extension that gates file-mutating tool calls behind user approval with AST-based bash command analysis |
| 53 | [@4meta5/pi-ozcar](https://www.npmjs.com/package/@4meta5/pi-ozcar) | 96 | `npm install @4meta5/pi-ozcar` | Pi-first audit extension package for structured security reviews and deterministic comparison exports |
| 54 | [pi-safeguard](https://www.npmjs.com/package/pi-safeguard) | 77 | `npm install pi-safeguard` | LLM-as-judge guardrail for pi · from yapp |
| 55 | [pi-opa](https://www.npmjs.com/package/pi-opa) | 67 | `npm install pi-opa` | Enterprise-grade Open Policy Agent (OPA) integration for pi coding agent - comprehensive authorization, authentication,… |
| 56 | [pi-recon-tools](https://www.npmjs.com/package/pi-recon-tools) | 65 | `npm install pi-recon-tools` | Security reconnaissance toolkit. Headers audit, SSL check, DNS, port scan, tech fingerprinting, path discovery. |
| 57 | [pi-boundary](https://www.npmjs.com/package/pi-boundary) | 61 | `npm install pi-boundary` | Filesystem boundary enforcement for pi — prompts before the agent escapes your project |
| 58 | [@carter-mcalister/pi-protected-files](https://www.npmjs.com/package/@carter-mcalister/pi-protected-files) | 60 | `npm install @carter-mcalister/pi-protected-files` | Project-configurable protected file gates for Pi edits |
| 59 | [pi-bash-readonly](https://www.npmjs.com/package/pi-bash-readonly) | 60 | `npm install pi-bash-readonly` | Sandboxed read-only bash for Pi agents via bwrap |
| 60 | [pi-sandbox-profile](https://www.npmjs.com/package/pi-sandbox-profile) | 56 | `npm install pi-sandbox-profile` | Sandbox profiles for Pi: open/intro-sec/engineering with file-tool enforcement and telemetry |
| 61 | [pi-file-protection](https://www.npmjs.com/package/pi-file-protection) | 54 | `npm install pi-file-protection` | Pi extension that confirms before delete/edit operations - protects files from accidental changes |
| 62 | [@victor-software-house/pi-credential-vault](https://www.npmjs.com/package/@victor-software-house/pi-credential-vault) | 47 | `npm install @victor-software-house/pi-credential-vault` | Managed-provider credential vault for Pi with built-in age, keychain, and passthrough backends |
| 63 | [pi-session-guard](https://www.npmjs.com/package/pi-session-guard) | 45 | `npm install pi-session-guard` | Session guard extension for Pi coding agent |
| 64 | [permission-pi](https://www.npmjs.com/package/permission-pi) | 44 | `npm install permission-pi` | Layered permission control extension for pi-coding-agent |
| 65 | [@clankie/sandbox](https://www.npmjs.com/package/@clankie/sandbox) | 35 | `npm install @clankie/sandbox` | Gondolin micro-VM sandbox for clankie — runs agent tools inside an isolated VM with network policies, secret injection,… |
| 66 | [@4meta5/pi-zsh](https://www.npmjs.com/package/@4meta5/pi-zsh) | 34 | `npm install @4meta5/pi-zsh` | Allowlist-only zsh script runner extension for pi coding agents. |
| 67 | [@rjshrjndrn/pi-sandbox](https://www.npmjs.com/package/@rjshrjndrn/pi-sandbox) | 34 | `npm install @rjshrjndrn/pi-sandbox` | Filesystem boundary enforcement for pi — prompts before the agent escapes your project |
| 68 | [pi-redactor](https://www.npmjs.com/package/pi-redactor) | 30 | `npm install pi-redactor` | Pi extension that redacts sensitive strings from user input, tool results, and context before the LLM sees them. |
| 69 | [pi-security-scanner](https://www.npmjs.com/package/pi-security-scanner) | 30 | `npm install pi-security-scanner` | Security scanner and runtime protection for Pi Coding Agent |
| 70 | [@artale/pi-diff-guard](https://www.npmjs.com/package/@artale/pi-diff-guard) | 27 | `npm install @artale/pi-diff-guard` | Edit awareness for Pi. Tracks file changes, warns on large deletions, shows edit heatmap. /diffguard report for hotspot… |
| 71 | [pi-agentkernel](https://www.npmjs.com/package/pi-agentkernel) | 23 | `npm install pi-agentkernel` | Route Pi coding agent commands through agentkernel microVM sandboxes |
| 72 | [@artale/pi-envman](https://www.npmjs.com/package/@artale/pi-envman) | 22 | `npm install @artale/pi-envman` | Environment and secrets manager. Store API tokens, scan env files, detect leaked secrets in code. |
| 73 | [@artale/pi-recon](https://www.npmjs.com/package/@artale/pi-recon) | 21 | `npm install @artale/pi-recon` | Security reconnaissance toolkit. Headers audit, SSL check, DNS, port scan, tech fingerprinting, path discovery. |
| 74 | [@0xkobold/pi-whitelist](https://www.npmjs.com/package/@0xkobold/pi-whitelist) | 0 | `npm install @0xkobold/pi-whitelist` | Tri-state tool permission system (allow/deny/ask) for AI agent tool invocations |
| 75 | [@alexleekt/pi-pkg-guard](https://www.npmjs.com/package/@alexleekt/pi-pkg-guard) | 0 | `npm install @alexleekt/pi-pkg-guard` | Guards against unregistered pi packages — installed via npm but not registered in pi's settings |
| 76 | [@architectit/pi-guardrails](https://www.npmjs.com/package/@architectit/pi-guardrails) | 0 | `npm install @architectit/pi-guardrails` | Four Laws guardrails enforcement for pi coding agent — standalone + MCP bridge |
| 77 | [@boozedog/pi-codemode](https://www.npmjs.com/package/@boozedog/pi-codemode) | 0 | `npm install @boozedog/pi-codemode` | Pi Codemode plugin - TypeScript code execution with sandboxed tools, just-bash shell, and MCP integration |
| 78 | [@diegopetrucci/pi-dirty-repo-guard](https://www.npmjs.com/package/@diegopetrucci/pi-dirty-repo-guard) | 0 | `npm install @diegopetrucci/pi-dirty-repo-guard` | A pi extension that prompts before session changes when the current git repo has uncommitted changes. |
| 79 | [@grothesque/sandburg](https://www.npmjs.com/package/@grothesque/sandburg) | 0 | `npm install @grothesque/sandburg` | Pi sandbox balancing security, usability and agent autonomy; for Linux |
| 80 | [@smallbatchcode/pi-slash-command-guard](https://www.npmjs.com/package/@smallbatchcode/pi-slash-command-guard) | 0 | `npm install @smallbatchcode/pi-slash-command-guard` | Pi extension that blocks mistyped or unknown slash commands from being sent as messages. |
| 81 | [@ssweens/pi-leash](https://www.npmjs.com/package/@ssweens/pi-leash) | 0 | `npm install @ssweens/pi-leash` | 暂无描述 |
| 82 | [pi-defender](https://www.npmjs.com/package/pi-defender) | 0 | `npm install pi-defender` | Defense-in-depth protection for Pi coding agent. Blocks dangerous commands and protects sensitive files — rename of pi-… |
| 83 | [pi-minimal-permission-system](https://www.npmjs.com/package/pi-minimal-permission-system) | 0 | `npm install pi-minimal-permission-system` | Minimal permission enforcement extension for the Pi coding agent. |
| 84 | [pi-permission-layers](https://www.npmjs.com/package/pi-permission-layers) | 0 | `npm install pi-permission-layers` | Pi extension to handle permissions using a layered approach |
| 85 | [pi-quick-perms](https://www.npmjs.com/package/pi-quick-perms) | 0 | `npm install pi-quick-perms` | Permission enforcement and quick policy commands for the Pi coding agent. |
| 86 | [pi-shield](https://www.npmjs.com/package/pi-shield) | 0 | `npm install pi-shield` | Pi extension that shields your files and system from accidental destructive operations |
| 87 | [pirmission-bash-guard](https://www.npmjs.com/package/pirmission-bash-guard) | 0 | `npm install pirmission-bash-guard` | Pi extension that replaces the bash tool with permission-gated execution and exact-match allowlist persistence. |

</details>

<a id="prompt"></a>
## 提示词管理
> 46 个包 · 总月下载量 35,678

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [glimpseui](https://www.npmjs.com/package/glimpseui) | 10,505 | `npm install glimpseui` | Native micro-UI for scripts and agents — cross-platform WebView windows with bidirectio… |
| 2 | [pi-prompt-template-model](https://www.npmjs.com/package/pi-prompt-template-model) | 6,324 | `npm install pi-prompt-template-model` | Prompt template model selector extension for pi coding agent |
| 3 | [pi-schedule-prompt](https://www.npmjs.com/package/pi-schedule-prompt) | 3,827 | `npm install pi-schedule-prompt` | Pi's Heartbeat - A pi extension for scheduling recurring and one-shot agent prompts wit… |
| 4 | [@ifi/oh-pi-prompts](https://www.npmjs.com/package/@ifi/oh-pi-prompts) | 1,702 | `npm install @ifi/oh-pi-prompts` | Prompt templates for pi: review, fix, explain, refactor, test, commit, and more. |
| 5 | [@dkmnx/pi-clarify](https://www.npmjs.com/package/@dkmnx/pi-clarify) | 997 | `npm install @dkmnx/pi-clarify` | Prompt clarification extension for pi coding agent |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 46 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [glimpseui](https://www.npmjs.com/package/glimpseui) | 10,505 | `npm install glimpseui` | Native micro-UI for scripts and agents — cross-platform WebView windows with bidirectional JSON communication |
| 2 | [pi-prompt-template-model](https://www.npmjs.com/package/pi-prompt-template-model) | 6,324 | `npm install pi-prompt-template-model` | Prompt template model selector extension for pi coding agent |
| 3 | [pi-schedule-prompt](https://www.npmjs.com/package/pi-schedule-prompt) | 3,827 | `npm install pi-schedule-prompt` | Pi's Heartbeat - A pi extension for scheduling recurring and one-shot agent prompts with cron-like functionality |
| 4 | [@ifi/oh-pi-prompts](https://www.npmjs.com/package/@ifi/oh-pi-prompts) | 1,702 | `npm install @ifi/oh-pi-prompts` | Prompt templates for pi: review, fix, explain, refactor, test, commit, and more. |
| 5 | [@dkmnx/pi-clarify](https://www.npmjs.com/package/@dkmnx/pi-clarify) | 997 | `npm install @dkmnx/pi-clarify` | Prompt clarification extension for pi coding agent |
| 6 | [@xl0/show-sysprompt](https://www.npmjs.com/package/@xl0/show-sysprompt) | 964 | `npm install @xl0/show-sysprompt` | Tiny Pi extension that shows the rendered system prompt and active tool schemas at startup. |
| 7 | [@vanillagreen/pi-caveman](https://www.npmjs.com/package/@vanillagreen/pi-caveman) | 960 | `npm install @vanillagreen/pi-caveman` | Native Pi caveman communication mode with session persistence, slash command control, status badge, and settings-manage… |
| 8 | [@vanillagreen/pi-questions](https://www.npmjs.com/package/@vanillagreen/pi-questions) | 951 | `npm install @vanillagreen/pi-questions` | Pi extension for structured multi-tab inline questions and bridge-driven replies. |
| 9 | [@guwidoe/pi-prompt-suggester](https://www.npmjs.com/package/@guwidoe/pi-prompt-suggester) | 946 | `npm install @guwidoe/pi-prompt-suggester` | Intent-aware next-prompt suggestion extension for pi |
| 10 | [pi-prompt-composer](https://www.npmjs.com/package/pi-prompt-composer) | 923 | `npm install pi-prompt-composer` | Build multi-option slash commands from plain prompts — variable expansion, arg collection & interactive selectors for Pi |
| 11 | [@agnishc/edb-append-system-prompt](https://www.npmjs.com/package/@agnishc/edb-append-system-prompt) | 813 | `npm install @agnishc/edb-append-system-prompt` | Pi extension: manage per-session system prompt snippets with add/delete UI |
| 12 | [@jmcombs/pi-prompt-enhancer](https://www.npmjs.com/package/@jmcombs/pi-prompt-enhancer) | 590 | `npm install @jmcombs/pi-prompt-enhancer` | Codebase-aware prompt enhancer for the Pi coding agent — rewrites rough prompts into precise ones, with project tree, g… |
| 13 | [@vanillagreen/pi-prompt-stash](https://www.npmjs.com/package/@vanillagreen/pi-prompt-stash) | 580 | `npm install @vanillagreen/pi-prompt-stash` | Pi package for per-session prompt stash history with alt+s stash/restore workflow. |
| 14 | [pi-prompt-translate](https://www.npmjs.com/package/pi-prompt-translate) | 509 | `npm install pi-prompt-translate` | Translate user prompts to a configurable target language in the Pi coding agent |
| 15 | [pi-prompt-shelf](https://www.npmjs.com/package/pi-prompt-shelf) | 467 | `npm install pi-prompt-shelf` | Pi extension: stash prompts into a persistent shelf with keyboard shortcuts and interactive picker |
| 16 | [@ctogg/pi-stash](https://www.npmjs.com/package/@ctogg/pi-stash) | 419 | `npm install @ctogg/pi-stash` | Git-style prompt stashing for pi — save what you're typing, clear the editor, and come back to it later. |
| 17 | [pi-prompt-reviewer](https://www.npmjs.com/package/pi-prompt-reviewer) | 394 | `npm install pi-prompt-reviewer` | Review prompts before sending them to the main pi session. |
| 18 | [pi-system-prompt](https://www.npmjs.com/package/pi-system-prompt) | 391 | `npm install pi-system-prompt` | Display the full pi coding agent system prompt with injected tools, guidelines, context files, and skills in a scrollab… |
| 19 | [@danchamorro/pi-prompt-enhancer](https://www.npmjs.com/package/@danchamorro/pi-prompt-enhancer) | 383 | `npm install @danchamorro/pi-prompt-enhancer` | Enhance prompts to be clearer, more specific, and more actionable before sending |
| 20 | [@ryan_nookpi/pi-extension-cc-system-prompt](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-cc-system-prompt) | 372 | `npm install @ryan_nookpi/pi-extension-cc-system-prompt` | Claude Code system prompt extension for pi. |
| 21 | [pi-promptsmith](https://www.npmjs.com/package/pi-promptsmith) | 315 | `npm install pi-promptsmith` | Intent-aware prompt rewriter and execution-contract compiler for Pi |
| 22 | [pi-git-things](https://www.npmjs.com/package/pi-git-things) | 228 | `npm install pi-git-things` | Pi prompt templates for proposing commit messages and pull request descriptions. |
| 23 | [@the-forge-flow/pi-rules](https://www.npmjs.com/package/@the-forge-flow/pi-rules) | 211 | `npm install @the-forge-flow/pi-rules` | PI extension that auto-loads path-scoped rule files from .pi/rules and .claude/rules |
| 24 | [pi-per-model-prompt](https://www.npmjs.com/package/pi-per-model-prompt) | 196 | `npm install pi-per-model-prompt` | Model-scoped system prompt correction layers for pi-coding-agent |
| 25 | [@siddr/pi-prompt-thinking](https://www.npmjs.com/package/@siddr/pi-prompt-thinking) | 190 | `npm install @siddr/pi-prompt-thinking` | Per-prompt thinking level override extension for pi |
| 26 | [pi-repoprompt-cli](https://www.npmjs.com/package/pi-repoprompt-cli) | 189 | `npm install pi-repoprompt-cli` | Integrates RepoPrompt with Pi via RepoPrompt's `rp-cli` executable |
| 27 | [pi-repoprompt-tools-lock](https://www.npmjs.com/package/pi-repoprompt-tools-lock) | 181 | `npm install pi-repoprompt-tools-lock` | Forces the agent to use RepoPrompt tools during repo-scoped work by disabling Pi's native tools when RepoPrompt tools a… |
| 28 | [pi-prompt-save](https://www.npmjs.com/package/pi-prompt-save) | 181 | `npm install pi-prompt-save` | Save, restore, or copy prompts in pi |
| 29 | [@lnittman/pi-prompts](https://www.npmjs.com/package/@lnittman/pi-prompts) | 156 | `npm install @lnittman/pi-prompts` | Shared system-prompt scaffolding for pi-coding-agent forks — date/time injection, context files, skills block, standard… |
| 30 | [pi-model-sysprompt-appendix](https://www.npmjs.com/package/pi-model-sysprompt-appendix) | 145 | `npm install pi-model-sysprompt-appendix` | Append model-specific content to Pi system prompt before Project Context |
| 31 | [@lukemelnik/pi-model-prompt](https://www.npmjs.com/package/@lukemelnik/pi-model-prompt) | 144 | `npm install @lukemelnik/pi-model-prompt` | A Pi extension for global per-model prompt addenda and model prompt tools. |
| 32 | [pi-sticky-prompt](https://www.npmjs.com/package/pi-sticky-prompt) | 132 | `npm install pi-sticky-prompt` | Always-on-top, full-width macOS prompt bar for pi. A floating native window that survives terminal scrollback and lets… |
| 33 | [@dxvapor/pi-prompt-enhancer](https://www.npmjs.com/package/@dxvapor/pi-prompt-enhancer) | 96 | `npm install @dxvapor/pi-prompt-enhancer` | Prompt enhancer with comparison popup, version history, searchable model picker, and quick-enhance mode |
| 34 | [pi-prompt-autoresearch](https://www.npmjs.com/package/pi-prompt-autoresearch) | 83 | `npm install pi-prompt-autoresearch` | A pi extension that iteratively improves prompts with execution-based evaluation and keep/discard decisions. |
| 35 | [@artale/pi-agent](https://www.npmjs.com/package/@artale/pi-agent) | 61 | `npm install @artale/pi-agent` | Agentic engineering toolkit. Token estimation, cost, patterns, templates. |
| 36 | [@ifiokjr/oh-pi-prompts](https://www.npmjs.com/package/@ifiokjr/oh-pi-prompts) | 53 | `npm install @ifiokjr/oh-pi-prompts` | Prompt templates for pi: review, fix, explain, refactor, test, commit, and more. |
| 37 | [pi-prompt-stash](https://www.npmjs.com/package/pi-prompt-stash) | 31 | `npm install pi-prompt-stash` | Git-stash for your train of thought — save prompt drafts with ctrl+s, restore with ctrl+shift+s |
| 38 | [pi-meta-prompt](https://www.npmjs.com/package/pi-meta-prompt) | 28 | `npm install pi-meta-prompt` | Pi extension that rewrites task descriptions into optimized prompts using customizable meta-prompts |
| 39 | [shitty-prompt](https://www.npmjs.com/package/shitty-prompt) | 22 | `npm install shitty-prompt` | 💩 Submit your hilariously broken prompts to shitty-prompt — pi coding agent extension |
| 40 | [@jasonish/pi-prompt-history](https://www.npmjs.com/package/@jasonish/pi-prompt-history) | 19 | `npm install @jasonish/pi-prompt-history` | Pi extension: search user prompt history across all sessions with Ctrl+Alt+R |
| 41 | [@diegopetrucci/pi-inline-bash](https://www.npmjs.com/package/@diegopetrucci/pi-inline-bash) | 0 | `npm install @diegopetrucci/pi-inline-bash` | A pi extension that expands inline bash commands in user prompts. |
| 42 | [@furbyhaxx/pi-prompt-history](https://www.npmjs.com/package/@furbyhaxx/pi-prompt-history) | 0 | `npm install @furbyhaxx/pi-prompt-history` | Slim Pi extension that keeps session-scoped prompt history and loads prior prompts into pi's native editor. |
| 43 | [@tryinget/pi-model-selection](https://www.npmjs.com/package/@tryinget/pi-model-selection) | 0 | `npm install @tryinget/pi-model-selection` | Shared Pi model selection and auth resolution primitives. |
| 44 | [@tryinget/pi-prompt-template-accelerator](https://www.npmjs.com/package/@tryinget/pi-prompt-template-accelerator) | 0 | `npm install @tryinget/pi-prompt-template-accelerator` | pi extension package: pi-prompt-template-accelerator |
| 45 | [pi-rules](https://www.npmjs.com/package/pi-rules) | 0 | `npm install pi-rules` | PI extension that injects markdown rules for any pi tool, including custom registered tools |
| 46 | [pi-slim](https://www.npmjs.com/package/pi-slim) | 0 | `npm install pi-slim` | Slim Pi's default system prompt by making Pi documentation guidance opt-in via /pi. |

</details>

<a id="meta"></a>
## 元包/管理工具
> 13 个包 · 总月下载量 26,910

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-depo](https://www.npmjs.com/package/pi-depo) | 5,782 | `npm install pi-depo` | Declarative package manager for Pi Coding Agent - skills, extensions, hooks, MCP servers |
| 2 | [@pi-unipi/core](https://www.npmjs.com/package/@pi-unipi/core) | 5,210 | `npm install @pi-unipi/core` | Shared utilities, event types, and constants for Unipi extension suite |
| 3 | [@pi-unipi/unipi](https://www.npmjs.com/package/@pi-unipi/unipi) | 2,425 | `npm install @pi-unipi/unipi` | All-in-one extension suite for Pi coding agent |
| 4 | [@pi-unipi/btw](https://www.npmjs.com/package/@pi-unipi/btw) | 1,995 | `npm install @pi-unipi/btw` | A pi extension for parallel side conversations with /unipi:btw — part of the Unipi suite |
| 5 | [@pi-unipi/ask-user](https://www.npmjs.com/package/@pi-unipi/ask-user) | 1,986 | `npm install @pi-unipi/ask-user` | Structured user input tool for Pi coding agent — single-select, multi-select, freeform |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 13 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-depo](https://www.npmjs.com/package/pi-depo) | 5,782 | `npm install pi-depo` | Declarative package manager for Pi Coding Agent - skills, extensions, hooks, MCP servers |
| 2 | [@pi-unipi/core](https://www.npmjs.com/package/@pi-unipi/core) | 5,210 | `npm install @pi-unipi/core` | Shared utilities, event types, and constants for Unipi extension suite |
| 3 | [@pi-unipi/unipi](https://www.npmjs.com/package/@pi-unipi/unipi) | 2,425 | `npm install @pi-unipi/unipi` | All-in-one extension suite for Pi coding agent |
| 4 | [@pi-unipi/btw](https://www.npmjs.com/package/@pi-unipi/btw) | 1,995 | `npm install @pi-unipi/btw` | A pi extension for parallel side conversations with /unipi:btw — part of the Unipi suite |
| 5 | [@pi-unipi/ask-user](https://www.npmjs.com/package/@pi-unipi/ask-user) | 1,986 | `npm install @pi-unipi/ask-user` | Structured user input tool for Pi coding agent — single-select, multi-select, freeform |
| 6 | [@pi-unipi/ralph](https://www.npmjs.com/package/@pi-unipi/ralph) | 1,962 | `npm install @pi-unipi/ralph` | Long-running iterative development loops for Pi coding agent |
| 7 | [@pi-unipi/utility](https://www.npmjs.com/package/@pi-unipi/utility) | 1,772 | `npm install @pi-unipi/utility` | Utility commands and tools for Pi coding agent — lifecycle, diagnostics, cache, analytics, display, batch execution |
| 8 | [@pi-unipi/command-enchantment](https://www.npmjs.com/package/@pi-unipi/command-enchantment) | 1,698 | `npm install @pi-unipi/command-enchantment` | Enhanced TUI autocomplete for /unipi:* commands — colored, sorted, and grouped by package |
| 9 | [@pi-unipi/milestone](https://www.npmjs.com/package/@pi-unipi/milestone) | 1,618 | `npm install @pi-unipi/milestone` | Lifecycle layer for project-level goals — MILESTONES.md tracking, session hooks, auto-sync |
| 10 | [@pi-unipi/updater](https://www.npmjs.com/package/@pi-unipi/updater) | 819 | `npm install @pi-unipi/updater` | Auto-updater, changelog browser, and readme browser for Unipi — checks npm registry, renders CHANGELOG.md and README.md… |
| 11 | [@pi-unipi/input-shortcuts](https://www.npmjs.com/package/@pi-unipi/input-shortcuts) | 805 | `npm install @pi-unipi/input-shortcuts` | Keyboard shortcuts for stash/restore, undo/redo, clipboard, and thinking toggle — chord-based overlay system |
| 12 | [lazy-pi](https://www.npmjs.com/package/lazy-pi) | 531 | `npm install lazy-pi` | You love LazyVim. You're gonna love LazyPi. |
| 13 | [@vtstech/pi-tgz-installer](https://www.npmjs.com/package/@vtstech/pi-tgz-installer) | 307 | `npm install @vtstech/pi-tgz-installer` | Pi extension that does one thing and does it well. Installs pi-packages from .tgz archives. Adds /tgz-install command f… |

</details>

<a id="integration"></a>
## 外部集成
> 27 个包 · 总月下载量 26,473

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@llblab/pi-telegram](https://www.npmjs.com/package/@llblab/pi-telegram) | 6,984 | `npm install @llblab/pi-telegram` | Telegram runtime adapter for π |
| 2 | [whatsapp-pi](https://www.npmjs.com/package/whatsapp-pi) | 4,676 | `npm install whatsapp-pi` | WhatsApp integration extension for Pi |
| 3 | [pi-convex](https://www.npmjs.com/package/pi-convex) | 4,622 | `npm install pi-convex` | Pi extension for Convex Cloud - queries, mutations, project management, and best practi… |
| 4 | [@feniix/pi-notion](https://www.npmjs.com/package/@feniix/pi-notion) | 1,912 | `npm install @feniix/pi-notion` | Notion API extension for pi — read, search, and manage Notion pages, databases, and con… |
| 5 | [@bytesbrains/pi-telegram-bridge](https://www.npmjs.com/package/@bytesbrains/pi-telegram-bridge) | 1,443 | `npm install @bytesbrains/pi-telegram-bridge` | Telegram bot bridge for pi agents — send messages, ask questions, and listen for human… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 27 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@llblab/pi-telegram](https://www.npmjs.com/package/@llblab/pi-telegram) | 6,984 | `npm install @llblab/pi-telegram` | Telegram runtime adapter for π |
| 2 | [whatsapp-pi](https://www.npmjs.com/package/whatsapp-pi) | 4,676 | `npm install whatsapp-pi` | WhatsApp integration extension for Pi |
| 3 | [pi-convex](https://www.npmjs.com/package/pi-convex) | 4,622 | `npm install pi-convex` | Pi extension for Convex Cloud - queries, mutations, project management, and best practices validation |
| 4 | [@feniix/pi-notion](https://www.npmjs.com/package/@feniix/pi-notion) | 1,912 | `npm install @feniix/pi-notion` | Notion API extension for pi — read, search, and manage Notion pages, databases, and content |
| 5 | [@bytesbrains/pi-telegram-bridge](https://www.npmjs.com/package/@bytesbrains/pi-telegram-bridge) | 1,443 | `npm install @bytesbrains/pi-telegram-bridge` | Telegram bot bridge for pi agents — send messages, ask questions, and listen for human replies via Telegram. |
| 6 | [pi-discord-remote](https://www.npmjs.com/package/pi-discord-remote) | 1,162 | `npm install pi-discord-remote` | Control your Pi coding-agent session from Discord — each session gets its own auto-created channel |
| 7 | [pi-1password](https://www.npmjs.com/package/pi-1password) | 1,132 | `npm install pi-1password` | 1Password Pi coding agent secret management |
| 8 | [@venthezone/picord](https://www.npmjs.com/package/@venthezone/picord) | 683 | `npm install @venthezone/picord` | Discord integration extension for pi that maps project channels to workspaces and threads to native pi sessions. |
| 9 | [pi-discord-activity](https://www.npmjs.com/package/pi-discord-activity) | 611 | `npm install pi-discord-activity` | Discord activity extension and helper for the Pi coding agent. |
| 10 | [piscord](https://www.npmjs.com/package/piscord) | 539 | `npm install piscord` | Lightweight Discord gateway for pi coding agent |
| 11 | [@mporenta/pi-discord-remote](https://www.npmjs.com/package/@mporenta/pi-discord-remote) | 326 | `npm install @mporenta/pi-discord-remote` | Pi extension: bidirectional Discord remote control for a local Pi coding-agent session. |
| 12 | [pi-kapso-whatsapp](https://www.npmjs.com/package/pi-kapso-whatsapp) | 302 | `npm install pi-kapso-whatsapp` | Pi extension for WhatsApp via Kapso AI — contacts access control with SQLite |
| 13 | [pi-messenger-bridge](https://www.npmjs.com/package/pi-messenger-bridge) | 293 | `npm install pi-messenger-bridge` | Bridge common messengers (Telegram, WhatsApp, Slack, Discord, Matrix) into pi |
| 14 | [@artale/pi-telegram](https://www.npmjs.com/package/@artale/pi-telegram) | 285 | `npm install @artale/pi-telegram` | Control Pi from Telegram. Run commands, check status, get notifications remotely. |
| 15 | [pi-secure-env-collect](https://www.npmjs.com/package/pi-secure-env-collect) | 258 | `npm install pi-secure-env-collect` | Secure env var collection tool for Pi with masked input and destination writers |
| 16 | [@artale/pi-bux](https://www.npmjs.com/package/@artale/pi-bux) | 226 | `npm install @artale/pi-bux` | 24/7 Pi or Hermes agent on a VPS. Run your agent continuously, control via Telegram, browse the web. |
| 17 | [pi-telebridge](https://www.npmjs.com/package/pi-telebridge) | 174 | `npm install pi-telebridge` | A pi extension that creates a two-way relay between your active pi coding agent session and a Telegram bot. |
| 18 | [telegram-pi](https://www.npmjs.com/package/telegram-pi) | 161 | `npm install telegram-pi` | Telegram Bot integration for Pi Coding Agent |
| 19 | [@artyomspace/pi-telegram-connect](https://www.npmjs.com/package/@artyomspace/pi-telegram-connect) | 144 | `npm install @artyomspace/pi-telegram-connect` | Telegram bridge for the Pi coding agent: pair once, then chat with your local pi-CLI agent from your phone. |
| 20 | [pi-discord-presence](https://www.npmjs.com/package/pi-discord-presence) | 128 | `npm install pi-discord-presence` | Discord Rich Presence extension for pi coding agent. |
| 21 | [pi-telegram-group-topic](https://www.npmjs.com/package/pi-telegram-group-topic) | 117 | `npm install pi-telegram-group-topic` | Control multiple pi sessions from Telegram forum topics |
| 22 | [@samfp/pi-telegram-bot](https://www.npmjs.com/package/@samfp/pi-telegram-bot) | 108 | `npm install @samfp/pi-telegram-bot` | Telegram bot exposing pi as a conversational coding agent. Chat with pi in Telegram with streaming responses, tool exec… |
| 23 | [@artale/pi-discord](https://www.npmjs.com/package/@artale/pi-discord) | 87 | `npm install @artale/pi-discord` | Discord integration |
| 24 | [pi-notion](https://www.npmjs.com/package/pi-notion) | 48 | `npm install pi-notion` | Notion integration for Pi Coding Agent — search, fetch, create, and update Notion pages as Markdown with a TUI config e… |
| 25 | [@brain0pia/pi-notify](https://www.npmjs.com/package/@brain0pia/pi-notify) | 31 | `npm install @brain0pia/pi-notify` | Pi package that sends Telegram notifications after each completed agent response. |
| 26 | [@shuyhere/pi-discord-bot](https://www.npmjs.com/package/@shuyhere/pi-discord-bot) | 21 | `npm install @shuyhere/pi-discord-bot` | A small Discord harness built around Pi primitives. |
| 27 | [pi-telegram-tool-status](https://www.npmjs.com/package/pi-telegram-tool-status) | 0 | `npm install pi-telegram-tool-status` | Companion extension for pi-telegram (by llblab) — posts a compact live-updating service message listing tools used by t… |

</details>

<a id="provider"></a>
## 模型供应商
> 65 个包 · 总月下载量 19,112

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-provider-kimi-code](https://www.npmjs.com/package/pi-provider-kimi-code) | 1,322 | `npm install pi-provider-kimi-code` | Pi extension for Kimi Code — reuse your Kimi Code Plan in pi-coding-agent (K2.6, K2.5) |
| 2 | [pi-provider-litellm](https://www.npmjs.com/package/pi-provider-litellm) | 800 | `npm install pi-provider-litellm` | LiteLLM proxy provider extension for Pi |
| 3 | [pi-xiaomi-mimo-provider](https://www.npmjs.com/package/pi-xiaomi-mimo-provider) | 748 | `npm install pi-xiaomi-mimo-provider` | Xiaomi Mimo provider extension for pi coding agent — registers mimo-v2-pro, mimo-v2-omn… |
| 4 | [@cirthan/pi-cirthan-provider](https://www.npmjs.com/package/@cirthan/pi-cirthan-provider) | 740 | `npm install @cirthan/pi-cirthan-provider` | Pi provider package for the Cirthan API. |
| 5 | [pi-provider-umans](https://www.npmjs.com/package/pi-provider-umans) | 700 | `npm install pi-provider-umans` | Umans.ai provider for pi — OpenAI-compatible endpoint with dynamic model discovery |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 65 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-provider-kimi-code](https://www.npmjs.com/package/pi-provider-kimi-code) | 1,322 | `npm install pi-provider-kimi-code` | Pi extension for Kimi Code — reuse your Kimi Code Plan in pi-coding-agent (K2.6, K2.5) |
| 2 | [pi-provider-litellm](https://www.npmjs.com/package/pi-provider-litellm) | 800 | `npm install pi-provider-litellm` | LiteLLM proxy provider extension for Pi |
| 3 | [pi-xiaomi-mimo-provider](https://www.npmjs.com/package/pi-xiaomi-mimo-provider) | 748 | `npm install pi-xiaomi-mimo-provider` | Xiaomi Mimo provider extension for pi coding agent — registers mimo-v2-pro, mimo-v2-omni, and mimo-v2-tts models |
| 4 | [@cirthan/pi-cirthan-provider](https://www.npmjs.com/package/@cirthan/pi-cirthan-provider) | 740 | `npm install @cirthan/pi-cirthan-provider` | Pi provider package for the Cirthan API. |
| 5 | [pi-provider-umans](https://www.npmjs.com/package/pi-provider-umans) | 700 | `npm install pi-provider-umans` | Umans.ai provider for pi — OpenAI-compatible endpoint with dynamic model discovery |
| 6 | [pi-provider-vertex-anthropic](https://www.npmjs.com/package/pi-provider-vertex-anthropic) | 659 | `npm install pi-provider-vertex-anthropic` | Pi agent extension for Claude models via Google Cloud Vertex AI |
| 7 | [omp-openai-provider-tools](https://www.npmjs.com/package/omp-openai-provider-tools) | 513 | `npm install omp-openai-provider-tools` | Provider-native OpenAI Responses tools for OMP and Pi-family runtimes. |
| 8 | [pi-crofai](https://www.npmjs.com/package/pi-crofai) | 476 | `npm install pi-crofai` | CrofAI provider for Pi — self-contained, auto-discovers models, supports env var or /login paste |
| 9 | [pi-opencode-provider](https://www.npmjs.com/package/pi-opencode-provider) | 475 | `npm install pi-opencode-provider` | A pi provider extension that adds OpenCode Zen & OpenCode Go support. |
| 10 | [pi-model-provider-native-prompting](https://www.npmjs.com/package/pi-model-provider-native-prompting) | 464 | `npm install pi-model-provider-native-prompting` | Provider-informed, harness-neutral native prompting guidance for Pi Coding Agent. |
| 11 | [pi-opinionated-glm](https://www.npmjs.com/package/pi-opinionated-glm) | 453 | `npm install pi-opinionated-glm` | Provider-only Pi package that registers a dedicated glm provider backed by OpenCode Zen. |
| 12 | [@sinamtz/pi-minimax-provider](https://www.npmjs.com/package/@sinamtz/pi-minimax-provider) | 432 | `npm install @sinamtz/pi-minimax-provider` | Pi coding agent provider for MiniMax AI - supports MiniMax M2 series models with Anthropic API compatibility |
| 13 | [@lesetong/pi-mimo](https://www.npmjs.com/package/@lesetong/pi-mimo) | 412 | `npm install @lesetong/pi-mimo` | Pi extension for Xiaomi MiMo AI models with multi-region & auth.json support |
| 14 | [pi-fireworks](https://www.npmjs.com/package/pi-fireworks) | 409 | `npm install pi-fireworks` | Fireworks AI provider extension package for pi |
| 15 | [@opperai/pi-provider](https://www.npmjs.com/package/@opperai/pi-provider) | 398 | `npm install @opperai/pi-provider` | Opper AI gateway provider and tools for the pi coding agent |
| 16 | [@akepka/pi-cursor-cli-provider](https://www.npmjs.com/package/@akepka/pi-cursor-cli-provider) | 396 | `npm install @akepka/pi-cursor-cli-provider` | Cursor CLI provider extension for Pi |
| 17 | [@benvargas/pi-synthetic-provider](https://www.npmjs.com/package/@benvargas/pi-synthetic-provider) | 384 | `npm install @benvargas/pi-synthetic-provider` | Synthetic (synthetic.new) model provider for pi - Dynamic model fetching with reasoning, vision, and tools support |
| 18 | [pi-multi-provider-manager](https://www.npmjs.com/package/pi-multi-provider-manager) | 373 | `npm install pi-multi-provider-manager` | Multi-account ChatGPT/Codex OAuth plus Fireworks and Z.ai API-key providers for pi. |
| 19 | [pi-mimo-provider](https://www.npmjs.com/package/pi-mimo-provider) | 357 | `npm install pi-mimo-provider` | Xiaomi MiMo LLM provider extension for pi coding agent |
| 20 | [pi-cursor-provider](https://www.npmjs.com/package/pi-cursor-provider) | 338 | `npm install pi-cursor-provider` | Pi extension providing access to Cursor models via OAuth and a local OpenAI-compatible gRPC proxy |
| 21 | [pi-setup-custom-providers](https://www.npmjs.com/package/pi-setup-custom-providers) | 335 | `npm install pi-setup-custom-providers` | Interactive wizard to manage custom LLM providers and models for pi coding agent |
| 22 | [@ramarivera/pi-ts-aperture-provider](https://www.npmjs.com/package/@ramarivera/pi-ts-aperture-provider) | 319 | `npm install @ramarivera/pi-ts-aperture-provider` | Config-driven aperture provider extraction for Pi-compatible extensions. |
| 23 | [pi-opinionated-zenmux](https://www.npmjs.com/package/pi-opinionated-zenmux) | 318 | `npm install pi-opinionated-zenmux` | Provider-only Pi package that registers the curated ZenMux model set used by pi-excalibur. |
| 24 | [pi-provider-cc-sdk](https://www.npmjs.com/package/pi-provider-cc-sdk) | 317 | `npm install pi-provider-cc-sdk` | Use your Claude subscription with pi using their official Claude Code SDK. |
| 25 | [pi-zai-glm](https://www.npmjs.com/package/pi-zai-glm) | 315 | `npm install pi-zai-glm` | Extra LLM providers for pi (Z.ai GLM). |
| 26 | [pi-provider-bedrock](https://www.npmjs.com/package/pi-provider-bedrock) | 313 | `npm install pi-provider-bedrock` | Bedrock provider for pi — routes to AWS Bedrock models via AWS profile auth |
| 27 | [@jayteelabs/pi-nous-portal-provider](https://www.npmjs.com/package/@jayteelabs/pi-nous-portal-provider) | 297 | `npm install @jayteelabs/pi-nous-portal-provider` | Pi provider package for Nous Research Portal inference. |
| 28 | [@netandreus/pi-cursor-provider](https://www.npmjs.com/package/@netandreus/pi-cursor-provider) | 294 | `npm install @netandreus/pi-cursor-provider` | Pi Coding Agent custom provider that routes requests through the Cursor Agent CLI — use your Cursor subscription models… |
| 29 | [pi-provider-utils](https://www.npmjs.com/package/pi-provider-utils) | 292 | `npm install pi-provider-utils` | Shared provider mirror, stream, and agent-path helpers for Pi extension packages |
| 30 | [@mcowger/pi-suppress-providers](https://www.npmjs.com/package/@mcowger/pi-suppress-providers) | 289 | `npm install @mcowger/pi-suppress-providers` | Pi extension that limits which providers appear in model selection by suppressing env vars for non-enabled providers |
| 31 | [pi-ollama-cloud-provider](https://www.npmjs.com/package/pi-ollama-cloud-provider) | 288 | `npm install pi-ollama-cloud-provider` | Ollama Cloud provider extension for pi coding agent with dynamic model discovery |
| 32 | [pi-provider-tama](https://www.npmjs.com/package/pi-provider-tama) | 273 | `npm install pi-provider-tama` | Pi agent extension for tama local AI server auto-discovery and model configuration |
| 33 | [@gnoviawan/pi-setup-providers](https://www.npmjs.com/package/@gnoviawan/pi-setup-providers) | 270 | `npm install @gnoviawan/pi-setup-providers` | Overlay wizard for custom providers and model setup. |
| 34 | [pi-mimo](https://www.npmjs.com/package/pi-mimo) | 270 | `npm install pi-mimo` | Pi extension for Xiaomi MiMo AI models provider |
| 35 | [pi-provider-crofai](https://www.npmjs.com/package/pi-provider-crofai) | 258 | `npm install pi-provider-crofai` | CrofAI model provider extension for the pi coding agent. |
| 36 | [pi-opinionated-mimo](https://www.npmjs.com/package/pi-opinionated-mimo) | 256 | `npm install pi-opinionated-mimo` | Provider-only Pi package that registers the single MiMo model used by pi-excalibur. |
| 37 | [@ifi/pi-provider-catalog](https://www.npmjs.com/package/@ifi/pi-provider-catalog) | 255 | `npm install @ifi/pi-provider-catalog` | Experimental multi-provider package for pi backed by the OpenCode models.dev catalog. |
| 38 | [opencode-pi](https://www.npmjs.com/package/opencode-pi) | 244 | `npm install opencode-pi` | Pi extension: OpenCode Zen free models provider for Pi agent |
| 39 | [@mcowger/pi-plexus](https://www.npmjs.com/package/@mcowger/pi-plexus) | 242 | `npm install @mcowger/pi-plexus` | Plexus AI provider extension package for pi |
| 40 | [pi-venice](https://www.npmjs.com/package/pi-venice) | 242 | `npm install pi-venice` | Pi Coding Agent extension for using Venice.ai as provider, access to ANY and ALL models under the Sun |
| 41 | [@zgltyq/pi-provider-kimi-code](https://www.npmjs.com/package/@zgltyq/pi-provider-kimi-code) | 237 | `npm install @zgltyq/pi-provider-kimi-code` | Kimi Code plan in pi-coding-agent — fork of pi-provider-kimi-code with bearer-auth fix for OAuth tokens |
| 42 | [@ifi/pi-provider-ollama](https://www.npmjs.com/package/@ifi/pi-provider-ollama) | 234 | `npm install @ifi/pi-provider-ollama` | Experimental Ollama provider for pi with local discovery and cloud login support. |
| 43 | [@ifi/pi-provider-cursor](https://www.npmjs.com/package/@ifi/pi-provider-cursor) | 216 | `npm install @ifi/pi-provider-cursor` | Experimental Cursor provider for pi with OAuth login, model discovery, and direct AgentService streaming. |
| 44 | [@neuron-mr-white/pi-zenmux](https://www.npmjs.com/package/@neuron-mr-white/pi-zenmux) | 193 | `npm install @neuron-mr-white/pi-zenmux` | ZenMux provider extension for Pi — dynamic model discovery with caching |
| 45 | [@zackify/pi-wafer](https://www.npmjs.com/package/@zackify/pi-wafer) | 189 | `npm install @zackify/pi-wafer` | A pi extension that adds the Wafer Pass (wafer.ai) provider with paste-token OAuth and a footer that shows your live re… |
| 46 | [pi-fallback-provider](https://www.npmjs.com/package/pi-fallback-provider) | 179 | `npm install pi-fallback-provider` | Model fallback chain extension for pi — automatic retry and failover across AI providers |
| 47 | [@royalrat-pack/pi-extension-nvidia-build-provider](https://www.npmjs.com/package/@royalrat-pack/pi-extension-nvidia-build-provider) | 169 | `npm install @royalrat-pack/pi-extension-nvidia-build-provider` | Pi extension that adds NVIDIA Build API models with /login support and /model integration. |
| 48 | [@bergetai/pi-provider-berget](https://www.npmjs.com/package/@bergetai/pi-provider-berget) | 150 | `npm install @bergetai/pi-provider-berget` | Run [Berget AI](https://berget.ai) models inside [Pi](https://pi.dev). |
| 49 | [@thesethrose/pi-zai-provider](https://www.npmjs.com/package/@thesethrose/pi-zai-provider) | 141 | `npm install @thesethrose/pi-zai-provider` | Z.AI (GLM models) provider extension for pi coding agent with API key authentication |
| 50 | [pi-commandcode-provider](https://www.npmjs.com/package/pi-commandcode-provider) | 138 | `npm install pi-commandcode-provider` | pi custom provider for Command Code API (commandcode.ai) |
| 51 | [@zackify/pi-sambanova](https://www.npmjs.com/package/@zackify/pi-sambanova) | 121 | `npm install @zackify/pi-sambanova` | A pi extension that adds SambaNova as an OpenAI-compatible model provider. |
| 52 | [@mcowger/pi-env-var-provider](https://www.npmjs.com/package/@mcowger/pi-env-var-provider) | 94 | `npm install @mcowger/pi-env-var-provider` | Pi extension: register a custom OpenAI-compatible provider from environment variables. Configure baseUrl, apiKey, and m… |
| 53 | [@offbynan/pi-cursor-provider](https://www.npmjs.com/package/@offbynan/pi-cursor-provider) | 78 | `npm install @offbynan/pi-cursor-provider` | Pi extension providing access to Cursor models via OAuth and a local OpenAI-compatible gRPC proxy |
| 54 | [@syedassadullahshah/pi-kilo-provider](https://www.npmjs.com/package/@syedassadullahshah/pi-kilo-provider) | 65 | `npm install @syedassadullahshah/pi-kilo-provider` | Kilo AI Gateway provider extension for Pi. |
| 55 | [pi-qwen-provider](https://www.npmjs.com/package/pi-qwen-provider) | 65 | `npm install pi-qwen-provider` | Qwen AI provider extension for Pi - OAuth authentication with qwen.ai |
| 56 | [cli-pipe-provider](https://www.npmjs.com/package/cli-pipe-provider) | 62 | `npm install cli-pipe-provider` | pi-ai provider for CLI tools that speak the stream-json format, with MCP tool bridge support |
| 57 | [@bergetai/pi-provider](https://www.npmjs.com/package/@bergetai/pi-provider) | 49 | `npm install @bergetai/pi-provider` | Run [Berget AI](https://berget.ai) models inside [Pi](https://pi.dev). |
| 58 | [@sinamtz/pi-mlx-provider](https://www.npmjs.com/package/@sinamtz/pi-mlx-provider) | 46 | `npm install @sinamtz/pi-mlx-provider` | Pi coding agent provider for MLX local AI models on Apple Silicon |
| 59 | [pi-models-dev-providers](https://www.npmjs.com/package/pi-models-dev-providers) | 35 | `npm install pi-models-dev-providers` | A pi-coding-agent extension to use model.dev providers |
| 60 | [@mrexodia/kilo-pi-provider](https://www.npmjs.com/package/@mrexodia/kilo-pi-provider) | 32 | `npm install @mrexodia/kilo-pi-provider` | Kilo provider extension for Pi. Access 300+ AI models through the Kilo Gateway. |
| 61 | [kimicodeprovider](https://www.npmjs.com/package/kimicodeprovider) | 30 | `npm install kimicodeprovider` | pi-coding-agent extension for Kimi/Moonshot API with configurable base URL |
| 62 | [qnaigc-llm-provider](https://www.npmjs.com/package/qnaigc-llm-provider) | 27 | `npm install qnaigc-llm-provider` | QNAIGC provider extension for pi-mono - Anthropic-compatible API for Chinese LLMs |
| 63 | [@thesethrose/pi-minimax-provider](https://www.npmjs.com/package/@thesethrose/pi-minimax-provider) | 26 | `npm install @thesethrose/pi-minimax-provider` | MiniMax provider extension for pi coding agent with correct OAuth token handling |
| 64 | [@nvaughn/pi-asu-provider](https://www.npmjs.com/package/@nvaughn/pi-asu-provider) | 0 | `npm install @nvaughn/pi-asu-provider` | ASU provider extension for pi coding agent |
| 65 | [@ogulcancelik/pi-model-thinking](https://www.npmjs.com/package/@ogulcancelik/pi-model-thinking) | 0 | `npm install @ogulcancelik/pi-model-thinking` | Auto-set thinking levels per model/provider in pi |

</details>

<a id="agentmode"></a>
## 代理自主模式
> 17 个包 · 总月下载量 18,943

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-caveman](https://www.npmjs.com/package/pi-caveman) | 2,792 | `npm install pi-caveman` | Why use many token when few do trick. Caveman mode for pi — cuts ~75% output tokens whi… |
| 2 | [pi-boomerang](https://www.npmjs.com/package/pi-boomerang) | 1,908 | `npm install pi-boomerang` | Token-efficient autonomous task execution with context collapse |
| 3 | [@tmustier/pi-ralph-wiggum](https://www.npmjs.com/package/@tmustier/pi-ralph-wiggum) | 5,521 | `npm install @tmustier/pi-ralph-wiggum` | Long-running agent loops for iterative development in Pi. |
| 4 | [@lnilluv/pi-ralph-loop](https://www.npmjs.com/package/@lnilluv/pi-ralph-loop) | 2,707 | `npm install @lnilluv/pi-ralph-loop` | Pi-native ralph loop — autonomous coding iterations with mid-turn supervision |
| 5 | [pi-autoresearch](https://www.npmjs.com/package/pi-autoresearch) | 2,459 | `npm install pi-autoresearch` | Autonomous experiment loop for pi — run, measure, keep or discard. Inspired by karpathy… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 17 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-caveman](https://www.npmjs.com/package/pi-caveman) | 2,792 | `npm install pi-caveman` | Why use many token when few do trick. Caveman mode for pi — cuts ~75% output tokens while keeping full technical accura… |
| 2 | [pi-boomerang](https://www.npmjs.com/package/pi-boomerang) | 1,908 | `npm install pi-boomerang` | Token-efficient autonomous task execution with context collapse |
| 3 | [@tmustier/pi-ralph-wiggum](https://www.npmjs.com/package/@tmustier/pi-ralph-wiggum) | 5,521 | `npm install @tmustier/pi-ralph-wiggum` | Long-running agent loops for iterative development in Pi. |
| 4 | [@lnilluv/pi-ralph-loop](https://www.npmjs.com/package/@lnilluv/pi-ralph-loop) | 2,707 | `npm install @lnilluv/pi-ralph-loop` | Pi-native ralph loop — autonomous coding iterations with mid-turn supervision |
| 5 | [pi-autoresearch](https://www.npmjs.com/package/pi-autoresearch) | 2,459 | `npm install pi-autoresearch` | Autonomous experiment loop for pi — run, measure, keep or discard. Inspired by karpathy/autoresearch. |
| 6 | [pi-agent-mode](https://www.npmjs.com/package/pi-agent-mode) | 1,504 | `npm install pi-agent-mode` | OpenCode-style default agent mode for PI. Markdown agents with YAML frontmatter. Ctrl+Shift+M to cycle, Alt+S to search… |
| 7 | [pi-gods](https://www.npmjs.com/package/pi-gods) | 599 | `npm install pi-gods` | Pantheon SDD Agent System — fully autonomous multi-agent pipeline with tool boundary enforcement, file-based handoff, a… |
| 8 | [@rahulmutt/pi-ralph](https://www.npmjs.com/package/@rahulmutt/pi-ralph) | 345 | `npm install @rahulmutt/pi-ralph` | Pi extension that adds the /ralph command — a Ralph Wiggum loop that runs a prompt file over multiple fresh sessions |
| 9 | [@tomooshi/caveman-milk-pi](https://www.npmjs.com/package/@tomooshi/caveman-milk-pi) | 257 | `npm install @tomooshi/caveman-milk-pi` | pi extension that injects caveman terseness rules into the system prompt. Cache-safe, opt-in, plays nicely with condens… |
| 10 | [pi-ralph-loop](https://www.npmjs.com/package/pi-ralph-loop) | 205 | `npm install pi-ralph-loop` | Pi extension that reruns a prompt from a clean session checkpoint for bounded Ralph loops. |
| 11 | [caveman-pi](https://www.npmjs.com/package/caveman-pi) | 179 | `npm install caveman-pi` | Caveman mode for pi — terse, no-fluff LLM responses with a /caveman toggle |
| 12 | [pi-caveman-mode](https://www.npmjs.com/package/pi-caveman-mode) | 174 | `npm install pi-caveman-mode` | Caveman Mode extension for pi. Makes assistant responses terse and blunt. |
| 13 | [@manojlds/ralphi](https://www.npmjs.com/package/@manojlds/ralphi) | 149 | `npm install @manojlds/ralphi` | Pi-native ralph extension with skill commands and fresh-context loop sessions. |
| 14 | [@fgladisch/pi-caveman](https://www.npmjs.com/package/@fgladisch/pi-caveman) | 87 | `npm install @fgladisch/pi-caveman` | Always-on caveman mode extension for Pi |
| 15 | [pi-ralph](https://www.npmjs.com/package/pi-ralph) | 57 | `npm install pi-ralph` | Hat-based multi-agent orchestration loops for pi. Keeps the agent iterating through specialized roles (Planner, Builder… |
| 16 | [@nielpattin/pi-caveman](https://www.npmjs.com/package/@nielpattin/pi-caveman) | 0 | `npm install @nielpattin/pi-caveman` | Caveman mode for pi — terse output, ~75% fewer tokens, full technical accuracy |
| 17 | [@sarthakxv/pi-goal](https://www.npmjs.com/package/@sarthakxv/pi-goal) | 0 | `npm install @sarthakxv/pi-goal` | Durable goals for Pi — keeps the agent working toward an objective across turns. |

</details>

<a id="theme"></a>
## 主题美化
> 44 个包 · 总月下载量 18,183

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-studio](https://www.npmjs.com/package/pi-studio) | 7,279 | `npm install pi-studio` | Two-pane browser workspace for pi with prompt/response editing, annotations, critiques,… |
| 2 | [pi-terminal-theme](https://www.npmjs.com/package/pi-terminal-theme) | 1,726 | `npm install pi-terminal-theme` | Pi theme that maps UI colors to ANSI 0..15. |
| 3 | [@victor-software-house/pi-curated-themes](https://www.npmjs.com/package/@victor-software-house/pi-curated-themes) | 1,677 | `npm install @victor-software-house/pi-curated-themes` | Curated dark terminal themes for pi, adapted from iTerm2-Color-Schemes |
| 4 | [@spences10/pi-themes](https://www.npmjs.com/package/@spences10/pi-themes) | 930 | `npm install @spences10/pi-themes` | Polished theme pack for Pi that improves contrast, mood, and visual hierarchy in the te… |
| 5 | [@open-hax/uxx](https://www.npmjs.com/package/@open-hax/uxx) | 919 | `npm install @open-hax/uxx` | Open Hax UI component library with React primitives, shared design tokens, reusable the… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 44 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-studio](https://www.npmjs.com/package/pi-studio) | 7,279 | `npm install pi-studio` | Two-pane browser workspace for pi with prompt/response editing, annotations, critiques, active quiz, prompt/response hi… |
| 2 | [pi-terminal-theme](https://www.npmjs.com/package/pi-terminal-theme) | 1,726 | `npm install pi-terminal-theme` | Pi theme that maps UI colors to ANSI 0..15. |
| 3 | [@victor-software-house/pi-curated-themes](https://www.npmjs.com/package/@victor-software-house/pi-curated-themes) | 1,677 | `npm install @victor-software-house/pi-curated-themes` | Curated dark terminal themes for pi, adapted from iTerm2-Color-Schemes |
| 4 | [@spences10/pi-themes](https://www.npmjs.com/package/@spences10/pi-themes) | 930 | `npm install @spences10/pi-themes` | Polished theme pack for Pi that improves contrast, mood, and visual hierarchy in the terminal UI |
| 5 | [@open-hax/uxx](https://www.npmjs.com/package/@open-hax/uxx) | 919 | `npm install @open-hax/uxx` | Open Hax UI component library with React primitives, shared design tokens, reusable themes, and color palettes. |
| 6 | [osdy-pi](https://www.npmjs.com/package/osdy-pi) | 755 | `npm install osdy-pi` | Osdy Pi package: themes, header, and custom editor for Pi. |
| 7 | [@ogulcancelik/pi-ghostty-theme-sync](https://www.npmjs.com/package/@ogulcancelik/pi-ghostty-theme-sync) | 650 | `npm install @ogulcancelik/pi-ghostty-theme-sync` | Sync pi theme with Ghostty terminal colors |
| 8 | [pi-opencode-theme](https://www.npmjs.com/package/pi-opencode-theme) | 493 | `npm install pi-opencode-theme` | An opencode-inspired theme for pi. |
| 9 | [@sherif-fanous/pi-catppuccin](https://www.npmjs.com/package/@sherif-fanous/pi-catppuccin) | 297 | `npm install @sherif-fanous/pi-catppuccin` | Catppuccin themes for the Pi Coding Agent |
| 10 | [@aliou/pi-theme-jellybeans](https://www.npmjs.com/package/@aliou/pi-theme-jellybeans) | 295 | `npm install @aliou/pi-theme-jellybeans` | Jellybeans Mono themes for Pi in dark and light variants. |
| 11 | [pi-theme-synthwave-84](https://www.npmjs.com/package/pi-theme-synthwave-84) | 294 | `npm install pi-theme-synthwave-84` | Synthwave '84 theme for the Pi coding agent TUI. |
| 12 | [@m64/pi-remembra-theme](https://www.npmjs.com/package/@m64/pi-remembra-theme) | 241 | `npm install @m64/pi-remembra-theme` | A beautiful dark theme for pi coding agent inspired by the Remembra web interface, featuring sophisticated purple-blue… |
| 13 | [@baretread/pi-forge](https://www.npmjs.com/package/@baretread/pi-forge) | 193 | `npm install @baretread/pi-forge` | Matte graphite, molten copper Forge theme and visual atmosphere for Pi. |
| 14 | [pi-cmux-theme-picker](https://www.npmjs.com/package/pi-cmux-theme-picker) | 180 | `npm install pi-cmux-theme-picker` | Live cmux terminal theme picker for Pi with synchronized pi + cmux theme switching and debounced preview. |
| 15 | [@eliemessiecode/pi-code-theme](https://www.npmjs.com/package/@eliemessiecode/pi-code-theme) | 173 | `npm install @eliemessiecode/pi-code-theme` | A warm, earthy dark theme for Pi coding agent with burnt orange and gold accents |
| 16 | [pi-dracula](https://www.npmjs.com/package/pi-dracula) | 168 | `npm install pi-dracula` | Dracula theme for the pi coding agent |
| 17 | [pi-modus-themes](https://www.npmjs.com/package/pi-modus-themes) | 151 | `npm install pi-modus-themes` | Modus Operandi and Modus Vivendi themes for pi coding agent |
| 18 | [pi-kanagawa](https://www.npmjs.com/package/pi-kanagawa) | 138 | `npm install pi-kanagawa` | Kanagawa theme and UI extension for pi — wave animation, Kanagawa-colored footer, git branch widget, and thinking-level… |
| 19 | [pi-themes-rose-pine](https://www.npmjs.com/package/pi-themes-rose-pine) | 125 | `npm install pi-themes-rose-pine` | Rosé Pine themes for pi (main, moon, dawn) |
| 20 | [pi-ssh](https://www.npmjs.com/package/pi-ssh) | 123 | `npm install pi-ssh` | pi extension for local-model plus remote SSH workspace tool execution |
| 21 | [pi-tokyo-night-storm](https://www.npmjs.com/package/pi-tokyo-night-storm) | 119 | `npm install pi-tokyo-night-storm` | Tokyo Night Storm theme for pi coding agent |
| 22 | [pi-workstation](https://www.npmjs.com/package/pi-workstation) | 118 | `npm install pi-workstation` | Custom extensions and themes for pi coding agent. Music, Navi, knowledge graph, LLM council, git TUI, file browser, and… |
| 23 | [pi-cursor-theme](https://www.npmjs.com/package/pi-cursor-theme) | 114 | `npm install pi-cursor-theme` | A Cursor-inspired dark theme for pi coding agent |
| 24 | [pi-theme-flexoki](https://www.npmjs.com/package/pi-theme-flexoki) | 109 | `npm install pi-theme-flexoki` | Flexoki theme for Pi coding agent - an inky color scheme for prose and code |
| 25 | [pi-system-theme](https://www.npmjs.com/package/pi-system-theme) | 108 | `npm install pi-system-theme` | Sync Pi theme with macOS light/dark appearance |
| 26 | [pi-dex](https://www.npmjs.com/package/pi-dex) | 101 | `npm install pi-dex` | Pi, but with Codex's UI — or at least as far as I can go before forking it. |
| 27 | [@sherif-fanous/pi-dracula](https://www.npmjs.com/package/@sherif-fanous/pi-dracula) | 93 | `npm install @sherif-fanous/pi-dracula` | Dracula themes for the Pi Coding Agent |
| 28 | [@tran-quil/pi-rose-pine](https://www.npmjs.com/package/@tran-quil/pi-rose-pine) | 87 | `npm install @tran-quil/pi-rose-pine` | All 3 Rosé Pine theme variants for Pi Coding Agent - All natural pine, faux fur and a bit of soho vibes for the classy… |
| 29 | [@wierdbytes/pi-tokyo-night](https://www.npmjs.com/package/@wierdbytes/pi-tokyo-night) | 86 | `npm install @wierdbytes/pi-tokyo-night` | Tokyo Night themes for the pi coding agent — folke's Night, Storm, Moon, and Day palettes mapped to all 51 pi color tok… |
| 30 | [@javiportillo/pi-hackerman](https://www.npmjs.com/package/@javiportillo/pi-hackerman) | 86 | `npm install @javiportillo/pi-hackerman` | A neon hacker-style color theme for pi coding agent |
| 31 | [@sherif-fanous/pi-atom-one](https://www.npmjs.com/package/@sherif-fanous/pi-atom-one) | 85 | `npm install @sherif-fanous/pi-atom-one` | Atom One themes for the Pi Coding Agent |
| 32 | [@artale/pi-canvas](https://www.npmjs.com/package/@artale/pi-canvas) | 69 | `npm install @artale/pi-canvas` | Visual art for your terminal. Hotline-inspired themes, neon effects, and ASCII aesthetics. |
| 33 | [pi-digital-rust-theme](https://www.npmjs.com/package/pi-digital-rust-theme) | 62 | `npm install pi-digital-rust-theme` | A warm, tech-dystopian color scheme for Pi, inspired by corrupted hardware and failing systems. |
| 34 | [pi-theme-sync](https://www.npmjs.com/package/pi-theme-sync) | 38 | `npm install pi-theme-sync` | Sync Pi theme with terminal appearance — works locally and over SSH via OSC 11 terminal queries |
| 35 | [@thiago__ss/pi-agent-config](https://www.npmjs.com/package/@thiago__ss/pi-agent-config) | 29 | `npm install @thiago__ss/pi-agent-config` | Thiago's shareable Pi agent configuration |
| 36 | [pi-peacock](https://www.npmjs.com/package/pi-peacock) | 28 | `npm install pi-peacock` | Peacock-style workspace coloring, repo badges, and terminal titles for pi coding agent |
| 37 | [@samfp/pi-rose-pine](https://www.npmjs.com/package/@samfp/pi-rose-pine) | 23 | `npm install @samfp/pi-rose-pine` | Rosé Pine theme for pi. Soho vibes for your coding agent. |
| 38 | [@mjakl/pi-dark-or-light](https://www.npmjs.com/package/@mjakl/pi-dark-or-light) | 21 | `npm install @mjakl/pi-dark-or-light` | Auto-switch pi between light and dark themes using hierarchical detection |
| 39 | [@codella/pi-theme-cyberpunk](https://www.npmjs.com/package/@codella/pi-theme-cyberpunk) | 0 | `npm install @codella/pi-theme-cyberpunk` | Neon cyberpunk theme for Pi. |
| 40 | [@davehardy20/pi-theme-switcher](https://www.npmjs.com/package/@davehardy20/pi-theme-switcher) | 0 | `npm install @davehardy20/pi-theme-switcher` | Pi package for switching TUI themes on the fly. |
| 41 | [my-pi-themes](https://www.npmjs.com/package/my-pi-themes) | 0 | `npm install my-pi-themes` | 14 custom themes for Pi Coding Agent: neapple, monokai-pro, onedark, e-ink, tokyo-dark, and more |
| 42 | [pi-blackboard-theme](https://www.npmjs.com/package/pi-blackboard-theme) | 0 | `npm install pi-blackboard-theme` | Blackboard theme for Pi, based on the Sublime Text Blackboard color scheme. |
| 43 | [pi-theme-flip](https://www.npmjs.com/package/pi-theme-flip) | 0 | `npm install pi-theme-flip` | Pi package adding a non-blocking command to toggle light and dark themes |
| 44 | [pi-theme-switcher](https://www.npmjs.com/package/pi-theme-switcher) | 0 | `npm install pi-theme-switcher` | Pi extension that automatically sets the theme to dark or light based on env vars, THEME_MODE, or time of day. |

</details>

<a id="markdownpreview"></a>
## Markdown 预览
> 16 个包 · 总月下载量 17,741

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-markdown-preview](https://www.npmjs.com/package/pi-markdown-preview) | 11,260 | `npm install pi-markdown-preview` | Rendered markdown + LaTeX preview for pi, with terminal, browser, and PDF output |
| 2 | [@curl.md/pi](https://www.npmjs.com/package/@curl.md/pi) | 2,219 | `npm install @curl.md/pi` | URL to markdown for Pi |
| 3 | [pi-image-tools](https://www.npmjs.com/package/pi-image-tools) | 1,175 | `npm install pi-image-tools` | Image attachment and rendering extension for Pi TUI |
| 4 | [pi-todo-md](https://www.npmjs.com/package/pi-todo-md) | 811 | `npm install pi-todo-md` | A shareable pi extension for managing a repo-local TODO.md file. |
| 5 | [@codingcoffee/pi-websearch-crawl4ai](https://www.npmjs.com/package/@codingcoffee/pi-websearch-crawl4ai) | 753 | `npm install @codingcoffee/pi-websearch-crawl4ai` | a pi extension to let your LLM crawl & see the web |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 16 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-markdown-preview](https://www.npmjs.com/package/pi-markdown-preview) | 11,260 | `npm install pi-markdown-preview` | Rendered markdown + LaTeX preview for pi, with terminal, browser, and PDF output |
| 2 | [@curl.md/pi](https://www.npmjs.com/package/@curl.md/pi) | 2,219 | `npm install @curl.md/pi` | URL to markdown for Pi |
| 3 | [pi-image-tools](https://www.npmjs.com/package/pi-image-tools) | 1,175 | `npm install pi-image-tools` | Image attachment and rendering extension for Pi TUI |
| 4 | [pi-todo-md](https://www.npmjs.com/package/pi-todo-md) | 811 | `npm install pi-todo-md` | A shareable pi extension for managing a repo-local TODO.md file. |
| 5 | [@codingcoffee/pi-websearch-crawl4ai](https://www.npmjs.com/package/@codingcoffee/pi-websearch-crawl4ai) | 753 | `npm install @codingcoffee/pi-websearch-crawl4ai` | a pi extension to let your LLM crawl & see the web |
| 6 | [@dmallory42/pi-read-url](https://www.npmjs.com/package/@dmallory42/pi-read-url) | 402 | `npm install @dmallory42/pi-read-url` | Pi extension for extracting public HTML page URLs into clean markdown via system curl. |
| 7 | [@justestif/wiki-agent](https://www.npmjs.com/package/@justestif/wiki-agent) | 286 | `npm install @justestif/wiki-agent` | AI-powered personal wiki with agent hooks for Pi, Claude Code, Cursor, and OpenCode |
| 8 | [pi-image-preview](https://www.npmjs.com/package/pi-image-preview) | 283 | `npm install pi-image-preview` | Image preview extension for pi coding agent — renders inline image thumbnails above the editor using kitty graphics pro… |
| 9 | [pi-side-preview](https://www.npmjs.com/package/pi-side-preview) | 221 | `npm install pi-side-preview` | Right-side file and image preview extension for pi. |
| 10 | [@justestif/nb-agent](https://www.npmjs.com/package/@justestif/nb-agent) | 159 | `npm install @justestif/nb-agent` | nb-native personal wiki plugin with agent-powered ask and distill commands |
| 11 | [@capyup/pi-obsidian](https://www.npmjs.com/package/@capyup/pi-obsidian) | 57 | `npm install @capyup/pi-obsidian` | pi extension that wraps the Obsidian CLI as typed tools — read, list, search, outline, create, append, open, backlinks,… |
| 12 | [pi-confluence](https://www.npmjs.com/package/pi-confluence) | 46 | `npm install pi-confluence` | Confluence integration for Pi Coding Agent — search, fetch, and save Confluence pages as Markdown with a TUI config edi… |
| 13 | [deword](https://www.npmjs.com/package/deword) | 37 | `npm install deword` | 🪱 De-Words your documents for AI agents. Read, edit, fill forms, replace text — all without breaking formatting. |
| 14 | [@jademind/pi-visual](https://www.npmjs.com/package/@jademind/pi-visual) | 32 | `npm install @jademind/pi-visual` | Advanced visualization extension for Pi sessions with rich markdown, Mermaid, and chart rendering. |
| 15 | [@cad0p/pi-napkin](https://www.npmjs.com/package/@cad0p/pi-napkin) | 0 | `npm install @cad0p/pi-napkin` | 🧻 Napkin integration for pi — vault context, knowledge tools, and automatic distillation with git-worktree concurrency… |
| 16 | [pi-obsidian](https://www.npmjs.com/package/pi-obsidian) | 0 | `npm install pi-obsidian` | Pi package for Obsidian vaults — read, write, search, visualize (Mermaid, Canvas), and plan projects (Kanban, dashboard… |

</details>

<a id="session"></a>
## 会话管理
> 47 个包 · 总月下载量 16,498

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@kaiserlich-dev/pi-session-search](https://www.npmjs.com/package/@kaiserlich-dev/pi-session-search) | 2,682 | `npm install @kaiserlich-dev/pi-session-search` | Full-text search across pi sessions with FTS5 index and overlay UI |
| 2 | [pi-session-search](https://www.npmjs.com/package/pi-session-search) | 1,663 | `npm install pi-session-search` | Index, summarize, and search past pi sessions. Covers both active and archived sessions… |
| 3 | [pi-edit-session-in-place](https://www.npmjs.com/package/pi-edit-session-in-place) | 1,137 | `npm install pi-edit-session-in-place` | pi extension that lets you re-edit or delete an earlier user message in the current ses… |
| 4 | [@vanillagreen/pi-session-manager](https://www.npmjs.com/package/@vanillagreen/pi-session-manager) | 1,132 | `npm install @vanillagreen/pi-session-manager` | Polished Pi session manager overlay for browsing, searching, resuming, renaming, and sa… |
| 5 | [@agnishc/edb-session-manager](https://www.npmjs.com/package/@agnishc/edb-session-manager) | 954 | `npm install @agnishc/edb-session-manager` | Pi extension: browse, resume, rename, and delete sessions with fuzzy search |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 47 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@kaiserlich-dev/pi-session-search](https://www.npmjs.com/package/@kaiserlich-dev/pi-session-search) | 2,682 | `npm install @kaiserlich-dev/pi-session-search` | Full-text search across pi sessions with FTS5 index and overlay UI |
| 2 | [pi-session-search](https://www.npmjs.com/package/pi-session-search) | 1,663 | `npm install pi-session-search` | Index, summarize, and search past pi sessions. Covers both active and archived sessions, enabling semantic search and i… |
| 3 | [pi-edit-session-in-place](https://www.npmjs.com/package/pi-edit-session-in-place) | 1,137 | `npm install pi-edit-session-in-place` | pi extension that lets you re-edit or delete an earlier user message in the current session branch |
| 4 | [@vanillagreen/pi-session-manager](https://www.npmjs.com/package/@vanillagreen/pi-session-manager) | 1,132 | `npm install @vanillagreen/pi-session-manager` | Polished Pi session manager overlay for browsing, searching, resuming, renaming, and safely deleting sessions. |
| 5 | [@agnishc/edb-session-manager](https://www.npmjs.com/package/@agnishc/edb-session-manager) | 954 | `npm install @agnishc/edb-session-manager` | Pi extension: browse, resume, rename, and delete sessions with fuzzy search |
| 6 | [@vanillagreen/pi-session-bridge](https://www.npmjs.com/package/@vanillagreen/pi-session-bridge) | 743 | `npm install @vanillagreen/pi-session-bridge` | Pi extension and CLI for controlling visible interactive Pi sessions over a structured Unix-socket side channel. |
| 7 | [@agnishc/edb-auto-name-session](https://www.npmjs.com/package/@agnishc/edb-auto-name-session) | 696 | `npm install @agnishc/edb-auto-name-session` | Pi extension: replace Pi's first-message session label with a generated title |
| 8 | [pi-sessions](https://www.npmjs.com/package/pi-sessions) | 591 | `npm install pi-sessions` | Pi session search, ask, handoff, auto-titling, and indexing tools |
| 9 | [pi-delete-session](https://www.npmjs.com/package/pi-delete-session) | 488 | `npm install pi-delete-session` | Powerful session deletion tool for Pi. Delete multiple sessions at once, grouped by project, with safety confirmations. |
| 10 | [pi-roles](https://www.npmjs.com/package/pi-roles) | 486 | `npm install pi-roles` | Role-based session configuration for pi coding agent. Launch a session as a named role and hot-swap roles mid-session,… |
| 11 | [pi-openrouter-session](https://www.npmjs.com/package/pi-openrouter-session) | 460 | `npm install pi-openrouter-session` | OpenRouter session tracking for pi - adds session_id to API requests for OpenRouter console visibility |
| 12 | [pi-fork-from-first](https://www.npmjs.com/package/pi-fork-from-first) | 454 | `npm install pi-fork-from-first` | Fork the current Pi session from its first user message and switch into the new fork immediately, with sensible default… |
| 13 | [@ogulcancelik/pi-session-recall](https://www.npmjs.com/package/@ogulcancelik/pi-session-recall) | 424 | `npm install @ogulcancelik/pi-session-recall` | Search and query past pi sessions. Recall previous conversations on demand. |
| 14 | [pi-move-session](https://www.npmjs.com/package/pi-move-session) | 421 | `npm install pi-move-session` | Move a live Pi session to another working directory, including back to a repository's main worktree |
| 15 | [pi-session-merge](https://www.npmjs.com/package/pi-session-merge) | 393 | `npm install pi-session-merge` | Pi Coding Agent Extension to import summarized context from another session. |
| 16 | [@tmustier/pi-session-recap](https://www.npmjs.com/package/@tmustier/pi-session-recap) | 361 | `npm install @tmustier/pi-session-recap` | One-line recap above the editor when you refocus a Pi session. Keeps you in flow when multi-agenting. |
| 17 | [@odradekk/vera-session-tools](https://www.npmjs.com/package/@odradekk/vera-session-tools) | 329 | `npm install @odradekk/vera-session-tools` | Session lifecycle tools for Vera agent (ask-user, todo, output-guard, compaction, prompt-rules, system-time, diagnostic… |
| 18 | [@tmustier/pi-session-hud](https://www.npmjs.com/package/@tmustier/pi-session-hud) | 277 | `npm install @tmustier/pi-session-hud` | Persistent session HUD widget for Pi (below-editor bar with git/context/model/activity). |
| 19 | [pi-session-switch](https://www.npmjs.com/package/pi-session-switch) | 262 | `npm install pi-session-switch` | Preview each session before switching in a mirror of Pi's native `/resume`-picker UI |
| 20 | [pi-resume-hint](https://www.npmjs.com/package/pi-resume-hint) | 262 | `npm install pi-resume-hint` | Pi extension that prints a quirky resume command for the current session when Pi exits. |
| 21 | [@diegopetrucci/pi-confirm-destructive](https://www.npmjs.com/package/@diegopetrucci/pi-confirm-destructive) | 242 | `npm install @diegopetrucci/pi-confirm-destructive` | A pi extension that confirms destructive session actions. |
| 22 | [pi-resume-on-exit](https://www.npmjs.com/package/pi-resume-on-exit) | 233 | `npm install pi-resume-on-exit` | Print a copyable Pi resume command when an interactive Pi session exits. |
| 23 | [@lukemelnik/pi-session-recap](https://www.npmjs.com/package/@lukemelnik/pi-session-recap) | 196 | `npm install @lukemelnik/pi-session-recap` | A Pi extension that shows a one-line recap of what the current session has been about. |
| 24 | [pi-session-auto-rename](https://www.npmjs.com/package/pi-session-auto-rename) | 194 | `npm install pi-session-auto-rename` | Automatically names pi sessions with AI, with configurable naming model |
| 25 | [pi-session-title](https://www.npmjs.com/package/pi-session-title) | 170 | `npm install pi-session-title` | Session-title extension for pi-compatible runtimes, including oh-my-pi |
| 26 | [@gnoviawan/pi-auto-session-name](https://www.npmjs.com/package/@gnoviawan/pi-auto-session-name) | 162 | `npm install @gnoviawan/pi-auto-session-name` | Automatically titles sessions using a custom name_session tool. |
| 27 | [@gnoviawan/pi-session-usage](https://www.npmjs.com/package/@gnoviawan/pi-session-usage) | 152 | `npm install @gnoviawan/pi-session-usage` | Tracks time usage, prompts, turns, and tool calls in a session. |
| 28 | [pi-session-name](https://www.npmjs.com/package/pi-session-name) | 149 | `npm install pi-session-name` | pi extension package that auto-generates a concise session title from the first user prompt. |
| 29 | [pi-session-manager](https://www.npmjs.com/package/pi-session-manager) | 144 | `npm install pi-session-manager` | Session browser for pi coding agent — browse, resume, rename, and delete sessions |
| 30 | [@gnoviawan/pi-session-delete](https://www.npmjs.com/package/@gnoviawan/pi-session-delete) | 138 | `npm install @gnoviawan/pi-session-delete` | Interactive session deletion command for Pi. |
| 31 | [@robhowley/pi-session-hygiene](https://www.npmjs.com/package/@robhowley/pi-session-hygiene) | 134 | `npm install @robhowley/pi-session-hygiene` | 暂无描述 |
| 32 | [@lojacobs/pi-roles](https://www.npmjs.com/package/@lojacobs/pi-roles) | 87 | `npm install @lojacobs/pi-roles` | Role-based session configuration for pi coding agent. Launch a session as a named role and hot-swap roles mid-session,… |
| 33 | [@datspike/pi-fork-resume](https://www.npmjs.com/package/@datspike/pi-fork-resume) | 70 | `npm install @datspike/pi-fork-resume` | Pi extension that forks a session selected through the resume-style session picker without opening the source session. |
| 34 | [pi-auto-rename](https://www.npmjs.com/package/pi-auto-rename) | 58 | `npm install pi-auto-rename` | Auto-rename pi sessions with AI via a single /rename command |
| 35 | [pi-session-summary](https://www.npmjs.com/package/pi-session-summary) | 42 | `npm install pi-session-summary` | A pi extension that maintains an LLM-generated one-line session summary as the session name |
| 36 | [pi-almanac](https://www.npmjs.com/package/pi-almanac) | 31 | `npm install pi-almanac` | Pi extension for exporting current session JSONL files for cross-machine resume workflows |
| 37 | [pi-open-sessions-files-extension](https://www.npmjs.com/package/pi-open-sessions-files-extension) | 27 | `npm install pi-open-sessions-files-extension` | pi extension to fuzzy-pick and open files edited by the agent in the current session |
| 38 | [pi-session-yank](https://www.npmjs.com/package/pi-session-yank) | 20 | `npm install pi-session-yank` | Pi extension that copies assistant/user message text or fenced code blocks from the current session branch to the clipb… |
| 39 | [pi-chain](https://www.npmjs.com/package/pi-chain) | 17 | `npm install pi-chain` | Pi extension that starts a new session seeded with recent conversation messages |
| 40 | [@fnnm/pi-session-breakdown](https://www.npmjs.com/package/@fnnm/pi-session-breakdown) | 17 | `npm install @fnnm/pi-session-breakdown` | Interactive TUI for Pi session analysis (usage, cost, models). |
| 41 | [@arnavpadwal/pi-universal-sessions](https://www.npmjs.com/package/@arnavpadwal/pi-universal-sessions) | 0 | `npm install @arnavpadwal/pi-universal-sessions` | Universal session switch for pi — browse, switch, delete, and rename sessions from ANY project |
| 42 | [@eissar/pi-openrouter-session](https://www.npmjs.com/package/@eissar/pi-openrouter-session) | 0 | `npm install @eissar/pi-openrouter-session` | highly minimal extension to send pi agent session ID to OpenRouter |
| 43 | [@furbyhaxx/pi-session-naming](https://www.npmjs.com/package/@furbyhaxx/pi-session-naming) | 0 | `npm install @furbyhaxx/pi-session-naming` | Pi extension for automatic session titles, rename, browsing, and session listing. |
| 44 | [@ogulcancelik/pi-quit-and-delete](https://www.npmjs.com/package/@ogulcancelik/pi-quit-and-delete) | 0 | `npm install @ogulcancelik/pi-quit-and-delete` | Keyboard shortcut to quit pi and permanently delete the active session file. |
| 45 | [@tryinget/pi-autonomous-session-control](https://www.npmjs.com/package/@tryinget/pi-autonomous-session-control) | 0 | `npm install @tryinget/pi-autonomous-session-control` | pi extension package for autonomy-control workflows in pi |
| 46 | [pi-autonomous-session-control](https://www.npmjs.com/package/pi-autonomous-session-control) | 0 | `npm install pi-autonomous-session-control` | pi extension package for autonomy-control workflows in pi |
| 47 | [pi-session-name-border](https://www.npmjs.com/package/pi-session-name-border) | 0 | `npm install pi-session-name-border` | Show the current Pi session name on the prompt editor border. |

</details>

<a id="browser"></a>
## 浏览器自动化
> 14 个包 · 总月下载量 16,017

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-chrome](https://www.npmjs.com/package/pi-chrome) | 9,502 | `npm install pi-chrome` | Let Pi use your existing signed-in Chrome profile after explicit authorization. |
| 2 | [pi-agent-browser-native](https://www.npmjs.com/package/pi-agent-browser-native) | 4,623 | `npm install pi-agent-browser-native` | pi extension that exposes agent-browser as a native tool for browser automation |
| 3 | [pi-agent-browser](https://www.npmjs.com/package/pi-agent-browser) | 789 | `npm install pi-agent-browser` | Browser automation tool for pi — interactive browsing, screenshots with inline vision,… |
| 4 | [@steel-experiments/pi-steel](https://www.npmjs.com/package/@steel-experiments/pi-steel) | 360 | `npm install @steel-experiments/pi-steel` | Steel browser automation extension package for Pi |
| 5 | [@dreki-gg/pi-browser-tools](https://www.npmjs.com/package/@dreki-gg/pi-browser-tools) | 231 | `npm install @dreki-gg/pi-browser-tools` | Browser automation and web research tools for pi — search, visit, screenshot, interact,… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 14 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-chrome](https://www.npmjs.com/package/pi-chrome) | 9,502 | `npm install pi-chrome` | Let Pi use your existing signed-in Chrome profile after explicit authorization. |
| 2 | [pi-agent-browser-native](https://www.npmjs.com/package/pi-agent-browser-native) | 4,623 | `npm install pi-agent-browser-native` | pi extension that exposes agent-browser as a native tool for browser automation |
| 3 | [pi-agent-browser](https://www.npmjs.com/package/pi-agent-browser) | 789 | `npm install pi-agent-browser` | Browser automation tool for pi — interactive browsing, screenshots with inline vision, and session cleanup via agent-br… |
| 4 | [@steel-experiments/pi-steel](https://www.npmjs.com/package/@steel-experiments/pi-steel) | 360 | `npm install @steel-experiments/pi-steel` | Steel browser automation extension package for Pi |
| 5 | [@dreki-gg/pi-browser-tools](https://www.npmjs.com/package/@dreki-gg/pi-browser-tools) | 231 | `npm install @dreki-gg/pi-browser-tools` | Browser automation and web research tools for pi — search, visit, screenshot, interact, and inspect console output |
| 6 | [pi-chrome-dev-tools](https://www.npmjs.com/package/pi-chrome-dev-tools) | 128 | `npm install pi-chrome-dev-tools` | Pi extension — lazy-launch Chrome with Playwright, persistent profile, stealth patches, simple browser tools |
| 7 | [pi-browser-debug](https://www.npmjs.com/package/pi-browser-debug) | 124 | `npm install pi-browser-debug` | Pi extension for debugging active browser sessions via Chrome DevTools Protocol |
| 8 | [@artale/pi-browser](https://www.npmjs.com/package/@artale/pi-browser) | 112 | `npm install @artale/pi-browser` | Browser automation for Pi using browser-use patterns |
| 9 | [demo-dev](https://www.npmjs.com/package/demo-dev) | 95 | `npm install demo-dev` | Generate polished product demo videos with one command. Just give a URL and a prompt. |
| 10 | [@victor-software-house/pi-agent-browser](https://www.npmjs.com/package/@victor-software-house/pi-agent-browser) | 53 | `npm install @victor-software-house/pi-agent-browser` | Browser automation tool for Pi via agent-browser CLI |
| 11 | [@bytesbrains/pi-textbrowser](https://www.npmjs.com/package/@bytesbrains/pi-textbrowser) | 0 | `npm install @bytesbrains/pi-textbrowser` | Headless browser for Pi — browse the web with DOM + OCR text maps. No image tokens, 10-50x cheaper than screenshot-base… |
| 12 | [@jonghyun/pi-playwright-browser](https://www.npmjs.com/package/@jonghyun/pi-playwright-browser) | 0 | `npm install @jonghyun/pi-playwright-browser` | Playwright browser automation extension for pi - runs Chromium in Microsoft Docker container in headless mode |
| 13 | [pi-lightpanda-extension](https://www.npmjs.com/package/pi-lightpanda-extension) | 0 | `npm install pi-lightpanda-extension` | Pi extension exposing Lightpanda web tools plus Playwright-backed real visual screenshots. |
| 14 | [pi-textbrowser](https://www.npmjs.com/package/pi-textbrowser) | 0 | `npm install pi-textbrowser` | Headless browser for Pi — browse the web with DOM + OCR text maps. No image tokens, 10-50x cheaper than screenshot-base… |

</details>

<a id="costproxy"></a>
## 成本/代理管理
> 23 个包 · 总月下载量 15,023

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-antigravity-rotator](https://www.npmjs.com/package/pi-antigravity-rotator) | 3,898 | `npm install pi-antigravity-rotator` | Multi-account rotation proxy for Google Antigravity with per-model routing, real-time q… |
| 2 | [pi-free](https://www.npmjs.com/package/pi-free) | 2,535 | `npm install pi-free` | AI model providers for Pi with free model filtering and dynamic model fetching |
| 3 | [@schultzp2020/pi-cursor](https://www.npmjs.com/package/@schultzp2020/pi-cursor) | 1,293 | `npm install @schultzp2020/pi-cursor` | Pi extension for Cursor subscription models via local OpenAI-compatible proxy |
| 4 | [pi-vision-proxy](https://www.npmjs.com/package/pi-vision-proxy) | 1,166 | `npm install pi-vision-proxy` | Automatic image description for non-vision models in Pi. Routes images to a vision mode… |
| 5 | [pi-multi-auth](https://www.npmjs.com/package/pi-multi-auth) | 962 | `npm install pi-multi-auth` | Pi extension for multi-provider credential management, OAuth login, and account rotatio… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 23 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-antigravity-rotator](https://www.npmjs.com/package/pi-antigravity-rotator) | 3,898 | `npm install pi-antigravity-rotator` | Multi-account rotation proxy for Google Antigravity with per-model routing, real-time quota tracking, and infringement… |
| 2 | [pi-free](https://www.npmjs.com/package/pi-free) | 2,535 | `npm install pi-free` | AI model providers for Pi with free model filtering and dynamic model fetching |
| 3 | [@schultzp2020/pi-cursor](https://www.npmjs.com/package/@schultzp2020/pi-cursor) | 1,293 | `npm install @schultzp2020/pi-cursor` | Pi extension for Cursor subscription models via local OpenAI-compatible proxy |
| 4 | [pi-vision-proxy](https://www.npmjs.com/package/pi-vision-proxy) | 1,166 | `npm install pi-vision-proxy` | Automatic image description for non-vision models in Pi. Routes images to a vision model and injects descriptions into… |
| 5 | [pi-multi-auth](https://www.npmjs.com/package/pi-multi-auth) | 962 | `npm install pi-multi-auth` | Pi extension for multi-provider credential management, OAuth login, and account rotation. |
| 6 | [pi-edgee-proxy](https://www.npmjs.com/package/pi-edgee-proxy) | 831 | `npm install pi-edgee-proxy` | Route Pi coding agent through Edgee AI Gateway for lossless token compression — any provider, any model |
| 7 | [@agnishc/edb-gemini-proxy](https://www.npmjs.com/package/@agnishc/edb-gemini-proxy) | 817 | `npm install @agnishc/edb-gemini-proxy` | Pi extension: gemini_proxy tool — delegate tasks to Google Gemini CLI from within pi |
| 8 | [@agnishc/edb-claude-proxy](https://www.npmjs.com/package/@agnishc/edb-claude-proxy) | 814 | `npm install @agnishc/edb-claude-proxy` | Pi extension: claude_proxy tool — delegate tasks to Claude Code CLI from within pi |
| 9 | [@victor-software-house/pi-openai-proxy](https://www.npmjs.com/package/@victor-software-house/pi-openai-proxy) | 623 | `npm install @victor-software-house/pi-openai-proxy` | OpenAI-compatible HTTP proxy for pi's multi-provider model registry |
| 10 | [pi-proxy-models](https://www.npmjs.com/package/pi-proxy-models) | 609 | `npm install pi-proxy-models` | Pi coding-agent extension that exposes CLIProxyAPIPlus models (Claude, Gemini, OpenAI/Codex, Copilot, Kiro, GLM, Qwen,… |
| 11 | [@the-forge-flow/pi-token-saver](https://www.npmjs.com/package/@the-forge-flow/pi-token-saver) | 540 | `npm install @the-forge-flow/pi-token-saver` | Token-saving proxy for the PI coding agent — intercepts and compresses API calls to reduce token consumption |
| 12 | [pi-qwen-mode-proxy](https://www.npmjs.com/package/pi-qwen-mode-proxy) | 293 | `npm install pi-qwen-mode-proxy` | Sampling mode proxy for Qwen models served via llama.cpp — switch between thinking, coding, and instruct modes |
| 13 | [@blackbelt-technology/pi-model-proxy](https://www.npmjs.com/package/@blackbelt-technology/pi-model-proxy) | 143 | `npm install @blackbelt-technology/pi-model-proxy` | Pi extension that exposes pi's authenticated models as a local OpenAI-compatible and Anthropic-compatible API server |
| 14 | [pi-codex-status](https://www.npmjs.com/package/pi-codex-status) | 123 | `npm install pi-codex-status` | ChatGPT Codex quota/status CLI and pi extension |
| 15 | [pi-cline-free-models](https://www.npmjs.com/package/pi-cline-free-models) | 91 | `npm install pi-cline-free-models` | A Pi extension to use Cline models as a provider. |
| 16 | [pi-high-availability](https://www.npmjs.com/package/pi-high-availability) | 83 | `npm install pi-high-availability` | High Availability extension for pi - automatic failover when quota or capacity is exhausted |
| 17 | [pi-antigravity-quota](https://www.npmjs.com/package/pi-antigravity-quota) | 75 | `npm install pi-antigravity-quota` | Pi extension to check Google Cloud Code (Antigravity) model quotas. |
| 18 | [pi-freecad](https://www.npmjs.com/package/pi-freecad) | 61 | `npm install pi-freecad` | Drive FreeCAD from pi with natural language. Create 3D shapes, open and modify .FCStd files, export to STEP/IGES/STL/DX… |
| 19 | [pi-scream](https://www.npmjs.com/package/pi-scream) | 36 | `npm install pi-scream` | Usage limits extension for pi coding agent |
| 20 | [pi-gemini-cli-quota](https://www.npmjs.com/package/pi-gemini-cli-quota) | 30 | `npm install pi-gemini-cli-quota` | Pi extension to view precise Google Cloud Code Assist (Gemini CLI) quotas. |
| 21 | [@victormilk/pi-vibeproxy](https://www.npmjs.com/package/@victormilk/pi-vibeproxy) | 0 | `npm install @victormilk/pi-vibeproxy` | Pi Coding Agent extension that exposes a CLIProxyAPIPlus (VibeProxy) instance as Anthropic and OpenAI model providers. |
| 22 | [pi-multimodal-proxy](https://www.npmjs.com/package/pi-multimodal-proxy) | 0 | `npm install pi-multimodal-proxy` | Automatic image, video and audio description for any model in Pi. Routes media to a multimodal model and injects descri… |
| 23 | [pi-proxy](https://www.npmjs.com/package/pi-proxy) | 0 | `npm install pi-proxy` | Smart proxy routing extension for pi - rule-based direct/proxy/fallback per domain |

</details>

<a id="dashboard"></a>
## 仪表盘
> 25 个包 · 总月下载量 12,339

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@pi-unipi/info-screen](https://www.npmjs.com/package/@pi-unipi/info-screen) | 3,784 | `npm install @pi-unipi/info-screen` | Dashboard and module registry for Unipi — configurable info overlay with tabbed groups |
| 2 | [@braintrust/pi-extension](https://www.npmjs.com/package/@braintrust/pi-extension) | 722 | `npm install @braintrust/pi-extension` | Braintrust extension for pi. Includes automatic tracing for pi sessions, turns, LLM cal… |
| 3 | [@posthog/pi](https://www.npmjs.com/package/@posthog/pi) | 2,544 | `npm install @posthog/pi` | PostHog LLM Analytics extension for pi coding agent |
| 4 | [@raindrop-ai/pi-agent](https://www.npmjs.com/package/@raindrop-ai/pi-agent) | 2,017 | `npm install @raindrop-ai/pi-agent` | Raindrop observability for Pi Agent — automatic tracing via subscriber or pi-coding-age… |
| 5 | [pi-observability](https://www.npmjs.com/package/pi-observability) | 678 | `npm install pi-observability` | Live observability dashboard for pi coding agent sessions — tokens, cost, TPS, runtime,… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 25 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@pi-unipi/info-screen](https://www.npmjs.com/package/@pi-unipi/info-screen) | 3,784 | `npm install @pi-unipi/info-screen` | Dashboard and module registry for Unipi — configurable info overlay with tabbed groups |
| 2 | [@braintrust/pi-extension](https://www.npmjs.com/package/@braintrust/pi-extension) | 722 | `npm install @braintrust/pi-extension` | Braintrust extension for pi. Includes automatic tracing for pi sessions, turns, LLM calls, and tool executions to Brain… |
| 3 | [@posthog/pi](https://www.npmjs.com/package/@posthog/pi) | 2,544 | `npm install @posthog/pi` | PostHog LLM Analytics extension for pi coding agent |
| 4 | [@raindrop-ai/pi-agent](https://www.npmjs.com/package/@raindrop-ai/pi-agent) | 2,017 | `npm install @raindrop-ai/pi-agent` | Raindrop observability for Pi Agent — automatic tracing via subscriber or pi-coding-agent extension |
| 5 | [pi-observability](https://www.npmjs.com/package/pi-observability) | 678 | `npm install pi-observability` | Live observability dashboard for pi coding agent sessions — tokens, cost, TPS, runtime, git stats, and context usage |
| 6 | [@hdkiller/pi-langfuse](https://www.npmjs.com/package/@hdkiller/pi-langfuse) | 617 | `npm install @hdkiller/pi-langfuse` | Production-grade Langfuse observability for Pi. Tracks prompts, turns, tools, and streaming assistant responses with na… |
| 7 | [@ravan08/pi-langfuse](https://www.npmjs.com/package/@ravan08/pi-langfuse) | 430 | `npm install @ravan08/pi-langfuse` | Langfuse observability extension for Pi coding agent. Sends traces to Langfuse for monitoring tokens, costs, latency, a… |
| 8 | [@artale/pi-test](https://www.npmjs.com/package/@artale/pi-test) | 283 | `npm install @artale/pi-test` | Test runner dashboard — run tests, show pass/fail in TUI, track results |
| 9 | [@ifi/pi-diagnostics](https://www.npmjs.com/package/@ifi/pi-diagnostics) | 254 | `npm install @ifi/pi-diagnostics` | Prompt-completion diagnostics extension for pi with timestamps, durations, per-turn timing, and a live widget. |
| 10 | [container-dashboard](https://www.npmjs.com/package/container-dashboard) | 228 | `npm install container-dashboard` | A pi coding agent extension for managing Docker, Podman, and Nerdctl containers — list, logs, prune, stats, inspect, an… |
| 11 | [pi-wakatime](https://www.npmjs.com/package/pi-wakatime) | 219 | `npm install pi-wakatime` | WakaTime plugin for Pi Coding Agent |
| 12 | [@datspike/pi-runtime-info-extension](https://www.npmjs.com/package/@datspike/pi-runtime-info-extension) | 145 | `npm install @datspike/pi-runtime-info-extension` | Pi extension exposing verified runtime model, thinking level, and artifact metadata to agents. |
| 13 | [pi-inspect](https://www.npmjs.com/package/pi-inspect) | 125 | `npm install pi-inspect` | Introspection dashboard for the pi coding agent — tools, slash commands, skills, and the system prompt injected on init. |
| 14 | [pi-sentry-monitor](https://www.npmjs.com/package/pi-sentry-monitor) | 95 | `npm install pi-sentry-monitor` | Sentry AI Monitoring extension for pi coding agent sessions and tool calls |
| 15 | [@dxvapor/pi-splunk-cloud-logs](https://www.npmjs.com/package/@dxvapor/pi-splunk-cloud-logs) | 63 | `npm install @dxvapor/pi-splunk-cloud-logs` | Pi coding agent extension for querying Splunk Cloud logs via REST API. Supports OAuth2 client credentials and bearer to… |
| 16 | [@jademind/pi-telemetry](https://www.npmjs.com/package/@jademind/pi-telemetry) | 57 | `npm install @jademind/pi-telemetry` | Structured runtime telemetry for pi-coding-agent, optimized for external services and observability pipelines. |
| 17 | [@mobrienv/pi-otlp](https://www.npmjs.com/package/@mobrienv/pi-otlp) | 34 | `npm install @mobrienv/pi-otlp` | OpenTelemetry metrics and events extension for pi-coding-agent |
| 18 | [@artale/pi-metrics](https://www.npmjs.com/package/@artale/pi-metrics) | 24 | `npm install @artale/pi-metrics` | Code metrics and health. Lines of code, cyclomatic complexity, tech debt indicators by language. |
| 19 | [pi-otel-telemetry](https://www.npmjs.com/package/pi-otel-telemetry) | 20 | `npm install pi-otel-telemetry` | OpenTelemetry traces & metrics extension for pi coding agent |
| 20 | [@bytesbrains/pi-tool-awareness-gate](https://www.npmjs.com/package/@bytesbrains/pi-tool-awareness-gate) | 0 | `npm install @bytesbrains/pi-tool-awareness-gate` | Tool limitation awareness layer for AI agents — intercepts tool results, infers quality signals, injects limitation rem… |
| 21 | [@the-agency/pi-observability](https://www.npmjs.com/package/@the-agency/pi-observability) | 0 | `npm install @the-agency/pi-observability` | Record tool usage, tokens, models, skills, and sessions as JSONL timeseries data in OpenTelemetry format. |
| 22 | [pi-cost](https://www.npmjs.com/package/pi-cost) | 0 | `npm install pi-cost` | Cost dashboard for the pi coding agent |
| 23 | [pi-langfuse](https://www.npmjs.com/package/pi-langfuse) | 0 | `npm install pi-langfuse` | Langfuse extension for Pi coding agent |
| 24 | [pi-otel](https://www.npmjs.com/package/pi-otel) | 0 | `npm install pi-otel` | OpenTelemetry traces for pi-coding-agent — per-prompt span tree (interaction → llm_request, tool.<name>) exported via O… |
| 25 | [pi-tool-awareness-gate](https://www.npmjs.com/package/pi-tool-awareness-gate) | 0 | `npm install pi-tool-awareness-gate` | Tool limitation awareness layer for AI agents — intercepts tool results, infers quality signals, injects limitation rem… |

</details>

<a id="filesearch"></a>
## 文件搜索
> 5 个包 · 总月下载量 12,198

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@ff-labs/pi-fff](https://www.npmjs.com/package/@ff-labs/pi-fff) | 7,617 | `npm install @ff-labs/pi-fff` | pi extension: FFF-powered fuzzy file and content search |
| 2 | [pi-fff](https://www.npmjs.com/package/pi-fff) | 2,884 | `npm install pi-fff` | FFF-powered fuzzy file resolution, autocomplete, and content search extension for pi |
| 3 | [@edxeth/pi-fff](https://www.npmjs.com/package/@edxeth/pi-fff) | 1,150 | `npm install @edxeth/pi-fff` | pi extension: FFF-powered fuzzy file and content search |
| 4 | [@the-forge-flow/fff-pi](https://www.npmjs.com/package/@the-forge-flow/fff-pi) | 537 | `npm install @the-forge-flow/fff-pi` | PI extension for fff |
| 5 | [@yofriadi/pi-fuzzy-match](https://www.npmjs.com/package/@yofriadi/pi-fuzzy-match) | 10 | `npm install @yofriadi/pi-fuzzy-match` | ```bash pi install git:github.com/yofriadi/pi-extensions@fuzzy-match-v<version> ``` |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 5 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@ff-labs/pi-fff](https://www.npmjs.com/package/@ff-labs/pi-fff) | 7,617 | `npm install @ff-labs/pi-fff` | pi extension: FFF-powered fuzzy file and content search |
| 2 | [pi-fff](https://www.npmjs.com/package/pi-fff) | 2,884 | `npm install pi-fff` | FFF-powered fuzzy file resolution, autocomplete, and content search extension for pi |
| 3 | [@edxeth/pi-fff](https://www.npmjs.com/package/@edxeth/pi-fff) | 1,150 | `npm install @edxeth/pi-fff` | pi extension: FFF-powered fuzzy file and content search |
| 4 | [@the-forge-flow/fff-pi](https://www.npmjs.com/package/@the-forge-flow/fff-pi) | 537 | `npm install @the-forge-flow/fff-pi` | PI extension for fff |
| 5 | [@yofriadi/pi-fuzzy-match](https://www.npmjs.com/package/@yofriadi/pi-fuzzy-match) | 10 | `npm install @yofriadi/pi-fuzzy-match` | ```bash pi install git:github.com/yofriadi/pi-extensions@fuzzy-match-v<version> ``` |

</details>

<a id="audio"></a>
## 音频与语音
> 28 个包 · 总月下载量 11,759

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@codexstar/pi-listen](https://www.npmjs.com/package/@codexstar/pi-listen) | 2,263 | `npm install @codexstar/pi-listen` | Voice in + voice out for Pi CLI — hold-to-talk STT (Deepgram or 19 offline models) plus… |
| 2 | [voipi](https://www.npmjs.com/package/voipi) | 977 | `npm install voipi` | <p align="center"> <a href="https://voipi.vercel.app/"><img src="logo.svg" alt="voipi"… |
| 3 | [pi-smart-voice-notify](https://www.npmjs.com/package/pi-smart-voice-notify) | 725 | `npm install pi-smart-voice-notify` | Windows-optimized smart voice, sound, and desktop notifications for Pi coding agent. |
| 4 | [pi-voice-input](https://www.npmjs.com/package/pi-voice-input) | 1,844 | `npm install pi-voice-input` | Press Ctrl+Shift+R to dictate prompts into Pi using VolcEngine ASR |
| 5 | [@juicesharp/rpiv-voice](https://www.npmjs.com/package/@juicesharp/rpiv-voice) | 1,133 | `npm install @juicesharp/rpiv-voice` | Pi extension. Voice dictation via /voice — local on-device STT with sherpa-onnx Whisper… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 28 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@codexstar/pi-listen](https://www.npmjs.com/package/@codexstar/pi-listen) | 2,263 | `npm install @codexstar/pi-listen` | Voice in + voice out for Pi CLI — hold-to-talk STT (Deepgram or 19 offline models) plus TTS (Kitten Nano, Piper, Kokoro… |
| 2 | [voipi](https://www.npmjs.com/package/voipi) | 977 | `npm install voipi` | <p align="center"> <a href="https://voipi.vercel.app/"><img src="logo.svg" alt="voipi" width="128" height="128"></a> </… |
| 3 | [pi-smart-voice-notify](https://www.npmjs.com/package/pi-smart-voice-notify) | 725 | `npm install pi-smart-voice-notify` | Windows-optimized smart voice, sound, and desktop notifications for Pi coding agent. |
| 4 | [pi-voice-input](https://www.npmjs.com/package/pi-voice-input) | 1,844 | `npm install pi-voice-input` | Press Ctrl+Shift+R to dictate prompts into Pi using VolcEngine ASR |
| 5 | [@juicesharp/rpiv-voice](https://www.npmjs.com/package/@juicesharp/rpiv-voice) | 1,133 | `npm install @juicesharp/rpiv-voice` | Pi extension. Voice dictation via /voice — local on-device STT with sherpa-onnx Whisper (base multilingual int8), micro… |
| 6 | [@p8n.ai/pi-listens](https://www.npmjs.com/package/@p8n.ai/pi-listens) | 965 | `npm install @p8n.ai/pi-listens` | Pi package for speech-first interaction with pluggable STT/TTS providers, defaulting to Sarvam AI. |
| 7 | [@s1m0n38/pi-voice](https://www.npmjs.com/package/@s1m0n38/pi-voice) | 624 | `npm install @s1m0n38/pi-voice` | HTTP server for Kokoro TTS — text-to-speech via ONNX inference. |
| 8 | [@wierdbytes/pi-voice](https://www.npmjs.com/package/@wierdbytes/pi-voice) | 510 | `npm install @wierdbytes/pi-voice` | Spoken summary after each agent turn for the pi coding agent. |
| 9 | [@pithings/voipi-pi](https://www.npmjs.com/package/@pithings/voipi-pi) | 499 | `npm install @pithings/voipi-pi` | Pi extension that adds text-to-speech tools and commands powered by VoiPi |
| 10 | [pi-elevenlabs-tts](https://www.npmjs.com/package/pi-elevenlabs-tts) | 389 | `npm install pi-elevenlabs-tts` | Pi extension that reads assistant text responses aloud with ElevenLabs text-to-speech. |
| 11 | [pi-whisper-voice](https://www.npmjs.com/package/pi-whisper-voice) | 315 | `npm install pi-whisper-voice` | Minimal hold-SPACE voice input for Pi using an OpenAI-compatible Whisper/STT endpoint. |
| 12 | [@superwhisper/pi](https://www.npmjs.com/package/@superwhisper/pi) | 271 | `npm install @superwhisper/pi` | Superwhisper voice integration extension for Pi - get voice notifications when tasks complete |
| 13 | [@paulrobello/par-tts-core-ts](https://www.npmjs.com/package/@paulrobello/par-tts-core-ts) | 212 | `npm install @paulrobello/par-tts-core-ts` | Provider-neutral TypeScript text-to-speech library for Node, browsers via proxy, and pi extensions |
| 14 | [pi-xai-voice](https://www.npmjs.com/package/pi-xai-voice) | 174 | `npm install pi-xai-voice` | Pi extension for xAI voice and audio workflows |
| 15 | [pi-ffmpeg](https://www.npmjs.com/package/pi-ffmpeg) | 153 | `npm install pi-ffmpeg` | ffmpeg Swiss Army knife for pi — probe, transcode, trim, concat, GIF, frames, audio extract/mux, thumbnail, compress, s… |
| 16 | [@adidoes/pi-meep](https://www.npmjs.com/package/@adidoes/pi-meep) | 143 | `npm install @adidoes/pi-meep` | Play a short notification sound when pi finishes responding. |
| 17 | [pi-speak](https://www.npmjs.com/package/pi-speak) | 119 | `npm install pi-speak` | Voice readback extension for Pi — reads agent responses aloud via Unreal Speech TTS |
| 18 | [pi-voice-loop](https://www.npmjs.com/package/pi-voice-loop) | 102 | `npm install pi-voice-loop` | Pi extension package for voice-loop operation with provider-backed speech in Pi. |
| 19 | [@artale/pi-voice](https://www.npmjs.com/package/@artale/pi-voice) | 88 | `npm install @artale/pi-voice` | Voice input for Pi. Multi-provider STT with Deepgram streaming, Groq Whisper, OpenAI Whisper. 56+ languages. |
| 20 | [pi-listen](https://www.npmjs.com/package/pi-listen) | 68 | `npm install pi-listen` | Voice input, first-run onboarding, and side-channel BTW conversations for Pi |
| 21 | [@swairshah/pi-talk](https://www.npmjs.com/package/@swairshah/pi-talk) | 49 | `npm install @swairshah/pi-talk` | Text-to-speech extension for Pi coding agent using Loqui |
| 22 | [pi-talk](https://www.npmjs.com/package/pi-talk) | 30 | `npm install pi-talk` | Streaming TTS extension for Pi with visible-thinking narration, hidden-thinking TLDRs, and tool announcements |
| 23 | [@agustif/pi-talk](https://www.npmjs.com/package/@agustif/pi-talk) | 23 | `npm install @agustif/pi-talk` | Streaming TTS extension for Pi with visible-thinking narration, hidden-thinking TLDRs, and tool announcements |
| 24 | [@jay-zod/speak](https://www.npmjs.com/package/@jay-zod/speak) | 22 | `npm install @jay-zod/speak` | Convert text to speech using Chatterbox TTS on Apple Silicon |
| 25 | [@rbright/pi-notify-koko](https://www.npmjs.com/package/@rbright/pi-notify-koko) | 22 | `npm install @rbright/pi-notify-koko` | Koko voice notifications for Pi agent turn completion. |
| 26 | [pi-voxtype](https://www.npmjs.com/package/pi-voxtype) | 20 | `npm install pi-voxtype` | Voxtype bridge for pi with direct session-scoped voice submission |
| 27 | [@settinghead/pi-voxlert](https://www.npmjs.com/package/@settinghead/pi-voxlert) | 19 | `npm install @settinghead/pi-voxlert` | SHODAN, the StarCraft Adjutant, and GLaDOS narrate your pi coding sessions. LLM-generated voice notifications spoken by… |
| 28 | [@dmille56/pi-piper-tts](https://www.npmjs.com/package/@dmille56/pi-piper-tts) | 0 | `npm install @dmille56/pi-piper-tts` | A Pi package that adds a /piper-tts command (and /tts alias) for speaking the latest assistant message with Piper TTS. |

</details>

<a id="chat"></a>
## 聊天/消息
> 9 个包 · 总月下载量 9,216

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-intercom](https://www.npmjs.com/package/pi-intercom) | 6,957 | `npm install pi-intercom` | <p> <img src="banner.png" alt="pi-intercom" width="1100"> </p> |
| 2 | [pi-chatgpt-limit](https://www.npmjs.com/package/pi-chatgpt-limit) | 801 | `npm install pi-chatgpt-limit` | Show ChatGPT Codex subscription usage in pi's footer |
| 3 | [@0xkobold/pi-gateway](https://www.npmjs.com/package/@0xkobold/pi-gateway) | 468 | `npm install @0xkobold/pi-gateway` | Hermes-style messaging gateway for pi - multi-platform agent with sessions, security, a… |
| 4 | [pi-side-chat](https://www.npmjs.com/package/pi-side-chat) | 378 | `npm install pi-side-chat` | Pi extension that forks the current conversation into a side chat |
| 5 | [@codexstar/pi-side-chat](https://www.npmjs.com/package/@codexstar/pi-side-chat) | 175 | `npm install @codexstar/pi-side-chat` | Standalone side chat for Pi CLI — parallel AI agent with read-only tools |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 9 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-intercom](https://www.npmjs.com/package/pi-intercom) | 6,957 | `npm install pi-intercom` | <p> <img src="banner.png" alt="pi-intercom" width="1100"> </p> |
| 2 | [pi-chatgpt-limit](https://www.npmjs.com/package/pi-chatgpt-limit) | 801 | `npm install pi-chatgpt-limit` | Show ChatGPT Codex subscription usage in pi's footer |
| 3 | [@0xkobold/pi-gateway](https://www.npmjs.com/package/@0xkobold/pi-gateway) | 468 | `npm install @0xkobold/pi-gateway` | Hermes-style messaging gateway for pi - multi-platform agent with sessions, security, and background tasks |
| 4 | [pi-side-chat](https://www.npmjs.com/package/pi-side-chat) | 378 | `npm install pi-side-chat` | Pi extension that forks the current conversation into a side chat |
| 5 | [@codexstar/pi-side-chat](https://www.npmjs.com/package/@codexstar/pi-side-chat) | 175 | `npm install @codexstar/pi-side-chat` | Standalone side chat for Pi CLI — parallel AI agent with read-only tools |
| 6 | [@gigachain/pi-gigachat](https://www.npmjs.com/package/@gigachain/pi-gigachat) | 168 | `npm install @gigachain/pi-gigachat` | GigaChat provider extension for pi-coding-agent |
| 7 | [pi-chatgpt-usage-status](https://www.npmjs.com/package/pi-chatgpt-usage-status) | 143 | `npm install pi-chatgpt-usage-status` | Pi extension that shows ChatGPT 5h and weekly rate-limit usage in the status bar. |
| 8 | [@wechatbot/pi-agent](https://www.npmjs.com/package/@wechatbot/pi-agent) | 97 | `npm install @wechatbot/pi-agent` | Pi extension — type /wechat, scan QR code, chat with Pi from WeChat |
| 9 | [pi-wechat](https://www.npmjs.com/package/pi-wechat) | 29 | `npm install pi-wechat` | WeChat iLink bot extension for Pi coding agent |

</details>

<a id="notification"></a>
## 桌面通知
> 27 个包 · 总月下载量 8,327

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@pi-unipi/notify](https://www.npmjs.com/package/@pi-unipi/notify) | 2,024 | `npm install @pi-unipi/notify` | Cross-platform notification extension for Pi — native OS, Gotify, and Telegram notifica… |
| 2 | [pi-gotify-notifier](https://www.npmjs.com/package/pi-gotify-notifier) | 730 | `npm install pi-gotify-notifier` | Send Gotify notifications for pi agent session events |
| 3 | [pi-notify](https://www.npmjs.com/package/pi-notify) | 509 | `npm install pi-notify` | Desktop notifications for Pi agent via OSC 777/99/9 and Windows toast |
| 4 | [@diegopetrucci/pi-notify](https://www.npmjs.com/package/@diegopetrucci/pi-notify) | 583 | `npm install @diegopetrucci/pi-notify` | A pi extension that sends a notification when the agent is ready for input. |
| 5 | [desktop-notify-kitty](https://www.npmjs.com/package/desktop-notify-kitty) | 460 | `npm install desktop-notify-kitty` | Pi extension that sends desktop notifications via kitten notify (kitty) or notify-send… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 27 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@pi-unipi/notify](https://www.npmjs.com/package/@pi-unipi/notify) | 2,024 | `npm install @pi-unipi/notify` | Cross-platform notification extension for Pi — native OS, Gotify, and Telegram notifications for agent lifecycle events |
| 2 | [pi-gotify-notifier](https://www.npmjs.com/package/pi-gotify-notifier) | 730 | `npm install pi-gotify-notifier` | Send Gotify notifications for pi agent session events |
| 3 | [pi-notify](https://www.npmjs.com/package/pi-notify) | 509 | `npm install pi-notify` | Desktop notifications for Pi agent via OSC 777/99/9 and Windows toast |
| 4 | [@diegopetrucci/pi-notify](https://www.npmjs.com/package/@diegopetrucci/pi-notify) | 583 | `npm install @diegopetrucci/pi-notify` | A pi extension that sends a notification when the agent is ready for input. |
| 5 | [desktop-notify-kitty](https://www.npmjs.com/package/desktop-notify-kitty) | 460 | `npm install desktop-notify-kitty` | Pi extension that sends desktop notifications via kitten notify (kitty) or notify-send when a kitty terminal session ne… |
| 6 | [omp-notify-tool](https://www.npmjs.com/package/omp-notify-tool) | 454 | `npm install omp-notify-tool` | Model-callable non-blocking notify tool for OMP and Pi-family runtimes. |
| 7 | [pi-tuturu](https://www.npmjs.com/package/pi-tuturu) | 409 | `npm install pi-tuturu` | Completion sound notifications for pi with selectable sound and volume. |
| 8 | [pi-notify-agent](https://www.npmjs.com/package/pi-notify-agent) | 404 | `npm install pi-notify-agent` | Cross-platform desktop notifications and sounds for pi-coding-agent |
| 9 | [@jmcombs/pi-notify](https://www.npmjs.com/package/@jmcombs/pi-notify) | 283 | `npm install @jmcombs/pi-notify` | OS-level desktop notifications for the Pi coding agent — alerts you when Pi finishes a turn and is waiting for input. |
| 10 | [@arcanemachine/pi-notify-marker](https://www.npmjs.com/package/@arcanemachine/pi-notify-marker) | 267 | `npm install @arcanemachine/pi-notify-marker` | Marker file plugin for Pi coding agent - create files when events occur |
| 11 | [@whynothugo/pi-notify](https://www.npmjs.com/package/@whynothugo/pi-notify) | 241 | `npm install @whynothugo/pi-notify` | Pi extension to emit a terminal bell when the agent ends its turn. |
| 12 | [@zhaopengme/pi-notify](https://www.npmjs.com/package/@zhaopengme/pi-notify) | 224 | `npm install @zhaopengme/pi-notify` | Native macOS notifications when Pi completes tasks |
| 13 | [@carlosgtrz/pi-terminal-bell](https://www.npmjs.com/package/@carlosgtrz/pi-terminal-bell) | 219 | `npm install @carlosgtrz/pi-terminal-bell` | Pi extension that rings the terminal bell when an agent run finishes after a configurable timeout. |
| 14 | [@qmxme/pi-lametric-notify](https://www.npmjs.com/package/@qmxme/pi-lametric-notify) | 208 | `npm install @qmxme/pi-lametric-notify` | LaMetric Time notifications for pi when the agent finishes and waits for input |
| 15 | [@artale/pi-hiphop](https://www.npmjs.com/package/@artale/pi-hiphop) | 207 | `npm install @artale/pi-hiphop` | Hip-hop notification sounds. Drake, Cole, Ye, Kendrick. The GOATs. |
| 16 | [@artale/pi-hotline](https://www.npmjs.com/package/@artale/pi-hotline) | 195 | `npm install @artale/pi-hotline` | Hotline Bling notification sounds. When pi finishes, the vibes hit different. 🔥 |
| 17 | [pi-poly-notify](https://www.npmjs.com/package/pi-poly-notify) | 177 | `npm install pi-poly-notify` | Highly configurable desktop/sound/Pushover notifications when Pi agent turn finishes and took longer than a definable t… |
| 18 | [@artale/pi-ye](https://www.npmjs.com/package/@artale/pi-ye) | 125 | `npm install @artale/pi-ye` | Ye notification sounds. Its almost like they cant tell that I got money. Pablo. |
| 19 | [@artale/pi-music](https://www.npmjs.com/package/@artale/pi-music) | 123 | `npm install @artale/pi-music` | Music notification sounds. Rock, Pop, Jazz, Country, EDM. |
| 20 | [@artale/pi-cole](https://www.npmjs.com/package/@artale/pi-cole) | 116 | `npm install @artale/pi-cole` | J. Cole notification sounds. Love yourz, no role modelz. Dreamville. |
| 21 | [@pi-lab/notify](https://www.npmjs.com/package/@pi-lab/notify) | 116 | `npm install @pi-lab/notify` | Desktop notification extension for pi coding agent |
| 22 | [@artale/pi-kdot](https://www.npmjs.com/package/@artale/pi-kdot) | 89 | `npm install @artale/pi-kdot` | K.Dot notification sounds. Be humble, stack money trees. |
| 23 | [pi-desktop-notify](https://www.npmjs.com/package/pi-desktop-notify) | 47 | `npm install pi-desktop-notify` | Focus-aware desktop notifications for pi |
| 24 | [@alexgorbatchev/pi-cmux-notify](https://www.npmjs.com/package/@alexgorbatchev/pi-cmux-notify) | 41 | `npm install @alexgorbatchev/pi-cmux-notify` | pi package for cmux notifications |
| 25 | [@artale/pi-notify](https://www.npmjs.com/package/@artale/pi-notify) | 31 | `npm install @artale/pi-notify` | Cross-platform notifications. Desktop toasts (Win/Mac/Linux), Slack/Discord webhooks, notification history. |
| 26 | [@rbright/pi-notify-desktop](https://www.npmjs.com/package/@rbright/pi-notify-desktop) | 24 | `npm install @rbright/pi-notify-desktop` | OSC desktop notifications for Pi agent turn completion. |
| 27 | [@waraq-labs/pi-notify-terminal-notifier](https://www.npmjs.com/package/@waraq-labs/pi-notify-terminal-notifier) | 21 | `npm install @waraq-labs/pi-notify-terminal-notifier` | Pi extension: sends macOS notification-notifier notifications when agent waits for input |

</details>

<a id="settings"></a>
## 设置管理
> 9 个包 · 总月下载量 8,219

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@axnic/pi-extension-settings](https://www.npmjs.com/package/@axnic/pi-extension-settings) | 2,376 | `npm install @axnic/pi-extension-settings` | Centralized settings panel for pi extensions. |
| 2 | [@juanibiapina/pi-extension-settings](https://www.npmjs.com/package/@juanibiapina/pi-extension-settings) | 2,787 | `npm install @juanibiapina/pi-extension-settings` | Pi extension for centralized settings management across extensions |
| 3 | [@axnic/pi-extension-settings-sdk](https://www.npmjs.com/package/@axnic/pi-extension-settings-sdk) | 1,840 | `npm install @axnic/pi-extension-settings-sdk` | Type-safe SDK for interacting with the pi-extension-settings panel (for extension autho… |
| 4 | [@vanillagreen/pi-extension-manager](https://www.npmjs.com/package/@vanillagreen/pi-extension-manager) | 855 | `npm install @vanillagreen/pi-extension-manager` | Pi package manager with update/uninstall actions plus a separate schema-driven settings… |
| 5 | [pi-sync-extension](https://www.npmjs.com/package/pi-sync-extension) | 139 | `npm install pi-sync-extension` | Secure sync for Pi configuration (settings, extensions, skills) |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 9 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@axnic/pi-extension-settings](https://www.npmjs.com/package/@axnic/pi-extension-settings) | 2,376 | `npm install @axnic/pi-extension-settings` | Centralized settings panel for pi extensions. |
| 2 | [@juanibiapina/pi-extension-settings](https://www.npmjs.com/package/@juanibiapina/pi-extension-settings) | 2,787 | `npm install @juanibiapina/pi-extension-settings` | Pi extension for centralized settings management across extensions |
| 3 | [@axnic/pi-extension-settings-sdk](https://www.npmjs.com/package/@axnic/pi-extension-settings-sdk) | 1,840 | `npm install @axnic/pi-extension-settings-sdk` | Type-safe SDK for interacting with the pi-extension-settings panel (for extension authors). |
| 4 | [@vanillagreen/pi-extension-manager](https://www.npmjs.com/package/@vanillagreen/pi-extension-manager) | 855 | `npm install @vanillagreen/pi-extension-manager` | Pi package manager with update/uninstall actions plus a separate schema-driven settings editor for vstack packages. |
| 5 | [pi-sync-extension](https://www.npmjs.com/package/pi-sync-extension) | 139 | `npm install pi-sync-extension` | Secure sync for Pi configuration (settings, extensions, skills) |
| 6 | [pi-export-config](https://www.npmjs.com/package/pi-export-config) | 128 | `npm install pi-export-config` | Pi extension to export, import, SSH-transfer, and GitHub-sync pi configuration including extension secrets. |
| 7 | [@alexgorbatchev/pi-env](https://www.npmjs.com/package/@alexgorbatchev/pi-env) | 79 | `npm install @alexgorbatchev/pi-env` | Pi extension that injects environment variables from project config settings. |
| 8 | [@claaslange/pi-directory-models](https://www.npmjs.com/package/@claaslange/pi-directory-models) | 15 | `npm install @claaslange/pi-directory-models` | pi extension that selects a model from the nearest ancestor .pi/settings.json |
| 9 | [@tifan/pi-preferred-thinking](https://www.npmjs.com/package/@tifan/pi-preferred-thinking) | 0 | `npm install @tifan/pi-preferred-thinking` | Persist preferred thinking level per model in pi. |

</details>

<a id="image"></a>
## 图像处理
> 29 个包 · 总月下载量 8,016

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-better-openai](https://www.npmjs.com/package/pi-better-openai) | 2,102 | `npm install pi-better-openai` | Personal pi extension that improves OpenAI with fast mode, usage stats, and footer poli… |
| 2 | [@injaneity/pi-computer-use](https://www.npmjs.com/package/@injaneity/pi-computer-use) | 1,648 | `npm install @injaneity/pi-computer-use` | Codex-style computer-use tools for Pi on macOS. |
| 3 | [pi-codex-image-gen](https://www.npmjs.com/package/pi-codex-image-gen) | 1,416 | `npm install pi-codex-image-gen` | Image generation for Pi using the ChatGPT Images 2.0 model. |
| 4 | [pi-imagegen](https://www.npmjs.com/package/pi-imagegen) | 417 | `npm install pi-imagegen` | Pi package for OpenAI/Codex image generation with a local browser studio. |
| 5 | [pi-codex-image](https://www.npmjs.com/package/pi-codex-image) | 285 | `npm install pi-codex-image` | Pi extension that exposes Codex CLI image generation as a smoother codex_image tool. |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 29 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-better-openai](https://www.npmjs.com/package/pi-better-openai) | 2,102 | `npm install pi-better-openai` | Personal pi extension that improves OpenAI with fast mode, usage stats, and footer polish. |
| 2 | [@injaneity/pi-computer-use](https://www.npmjs.com/package/@injaneity/pi-computer-use) | 1,648 | `npm install @injaneity/pi-computer-use` | Codex-style computer-use tools for Pi on macOS. |
| 3 | [pi-codex-image-gen](https://www.npmjs.com/package/pi-codex-image-gen) | 1,416 | `npm install pi-codex-image-gen` | Image generation for Pi using the ChatGPT Images 2.0 model. |
| 4 | [pi-imagegen](https://www.npmjs.com/package/pi-imagegen) | 417 | `npm install pi-imagegen` | Pi package for OpenAI/Codex image generation with a local browser studio. |
| 5 | [pi-codex-image](https://www.npmjs.com/package/pi-codex-image) | 285 | `npm install pi-codex-image` | Pi extension that exposes Codex CLI image generation as a smoother codex_image tool. |
| 6 | [pi-codex-image-tool](https://www.npmjs.com/package/pi-codex-image-tool) | 214 | `npm install pi-codex-image-tool` | Pi extension exposing a gpt-5.5+ image generation tool backed by gpt-image-2. |
| 7 | [@zgltyq/pi-minimax-image](https://www.npmjs.com/package/@zgltyq/pi-minimax-image) | 212 | `npm install @zgltyq/pi-minimax-image` | MiniMax Image Understanding extension for pi coding agent - provides understand_image tool |
| 8 | [pi-bash-image](https://www.npmjs.com/package/pi-bash-image) | 165 | `npm install pi-bash-image` | Inject images into bash tool results |
| 9 | [pi-mac-tools](https://www.npmjs.com/package/pi-mac-tools) | 153 | `npm install pi-mac-tools` | macOS automation tools for Pi via Accessibility APIs and screenshots |
| 10 | [@lumendigitaldev/pi-wsl-images](https://www.npmjs.com/package/@lumendigitaldev/pi-wsl-images) | 130 | `npm install @lumendigitaldev/pi-wsl-images` | WSL image paste support for pi using the Windows clipboard |
| 11 | [@hewliyang/pi-codex-image](https://www.npmjs.com/package/@hewliyang/pi-codex-image) | 102 | `npm install @hewliyang/pi-codex-image` | Pi extension that exposes OpenAI's hosted image_generation tool to any model, authenticated via the openai-codex (ChatG… |
| 12 | [@georgetsouvaltzis/pi-gpt-image](https://www.npmjs.com/package/@georgetsouvaltzis/pi-gpt-image) | 96 | `npm install @georgetsouvaltzis/pi-gpt-image` | Pi extension for GPT image generation using Pi's existing ChatGPT/Codex login. |
| 13 | [pi-image-gen-openai](https://www.npmjs.com/package/pi-image-gen-openai) | 94 | `npm install pi-image-gen-openai` | Pi image generation tool powered by OpenAI (GPT Image, DALL-E) |
| 14 | [@rwese/minimax-image-understanding](https://www.npmjs.com/package/@rwese/minimax-image-understanding) | 82 | `npm install @rwese/minimax-image-understanding` | MiniMax extension for pi coding agent |
| 15 | [pi-image-gen-together](https://www.npmjs.com/package/pi-image-gen-together) | 77 | `npm install pi-image-gen-together` | Pi image generation tool powered by Together AI (Flux, Ideogram, and more) |
| 16 | [@kuzat/pi-extension-gpt-image-2](https://www.npmjs.com/package/@kuzat/pi-extension-gpt-image-2) | 76 | `npm install @kuzat/pi-extension-gpt-image-2` | Pi extension that adds a gpt_image_2_generate tool |
| 17 | [@gregjohnso/pi-imgview](https://www.npmjs.com/package/@gregjohnso/pi-imgview) | 74 | `npm install @gregjohnso/pi-imgview` | Display images from inside the pi coding agent: imgcat-style inline rendering in supported terminals, and one-click ope… |
| 18 | [pi-image-gen-google](https://www.npmjs.com/package/pi-image-gen-google) | 73 | `npm install pi-image-gen-google` | Pi image generation tool powered by Google (Nano Banana, Imagen) |
| 19 | [@guwidoe/pi-clipboard-image](https://www.npmjs.com/package/@guwidoe/pi-clipboard-image) | 72 | `npm install @guwidoe/pi-clipboard-image` | pi extension: paste clipboard images into the prompt across Windows, Linux, and macOS |
| 20 | [@benvargas/pi-antigravity-image-gen](https://www.npmjs.com/package/@benvargas/pi-antigravity-image-gen) | 71 | `npm install @benvargas/pi-antigravity-image-gen` | Google Antigravity image generation tool for pi - Generate images via Gemini and Imagen models with inline terminal ren… |
| 21 | [pi-image-gen-router](https://www.npmjs.com/package/pi-image-gen-router) | 70 | `npm install pi-image-gen-router` | Pi image generation tool that auto-detects available API keys |
| 22 | [pi-image-gen-replicate](https://www.npmjs.com/package/pi-image-gen-replicate) | 66 | `npm install pi-image-gen-replicate` | Pi image generation tool powered by Replicate (Flux, SD, and more) |
| 23 | [pi-image-gen-recraft](https://www.npmjs.com/package/pi-image-gen-recraft) | 65 | `npm install pi-image-gen-recraft` | Pi image generation tool powered by Recraft (V3, V4) |
| 24 | [@jordyvd/pi-image-attachments](https://www.npmjs.com/package/@jordyvd/pi-image-attachments) | 60 | `npm install @jordyvd/pi-image-attachments` | Image attachments for Pi, including draft placeholders and screenshot tool-result promotion. |
| 25 | [pi-image-gen-xai](https://www.npmjs.com/package/pi-image-gen-xai) | 59 | `npm install pi-image-gen-xai` | Pi image generation tool powered by xAI (Grok Imagine / Aurora) |
| 26 | [@carter-mcalister/pi-codex-image-gen](https://www.npmjs.com/package/@carter-mcalister/pi-codex-image-gen) | 56 | `npm install @carter-mcalister/pi-codex-image-gen` | Codex-compatible image_generation tool for Pi |
| 27 | [pi-glm-image-summary](https://www.npmjs.com/package/pi-glm-image-summary) | 37 | `npm install pi-glm-image-summary` | Pi extension that intercepts image reads when using glm-4.7 and sends them to glm-4.6v for detailed analysis |
| 28 | [@ssweens/pi-image-gen](https://www.npmjs.com/package/@ssweens/pi-image-gen) | 24 | `npm install @ssweens/pi-image-gen` | Provider-agnostic image generation for Pi coding agent |
| 29 | [@guwidoe/pi-wsl-clipboard-image](https://www.npmjs.com/package/@guwidoe/pi-wsl-clipboard-image) | 20 | `npm install @guwidoe/pi-wsl-clipboard-image` | pi extension: paste WSLg clipboard images into the prompt |

</details>

<a id="testing"></a>
## 测试与诊断
> 13 个包 · 总月下载量 7,790

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@vtstech/pi-model-test](https://www.npmjs.com/package/@vtstech/pi-model-test) | 1,857 | `npm install @vtstech/pi-model-test` | Model benchmark/testing extension for Pi Coding Agent |
| 2 | [@vtstech/pi-diag](https://www.npmjs.com/package/@vtstech/pi-diag) | 1,773 | `npm install @vtstech/pi-diag` | Diagnostics extension for Pi Coding Agent |
| 3 | [@marcfargas/pi-test-harness](https://www.npmjs.com/package/@marcfargas/pi-test-harness) | 1,984 | `npm install @marcfargas/pi-test-harness` | Test harness for pi extensions — in-process session testing, package install verificati… |
| 4 | [@tianzong48/pi-doctor-extension](https://www.npmjs.com/package/@tianzong48/pi-doctor-extension) | 420 | `npm install @tianzong48/pi-doctor-extension` | Pi diagnostics extension package, starting with startup timing probes. |
| 5 | [pi-droid](https://www.npmjs.com/package/pi-droid) | 377 | `npm install pi-droid` | Android phone control for pi-agent — 36 tools to see, touch, and automate any device vi… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 13 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@vtstech/pi-model-test](https://www.npmjs.com/package/@vtstech/pi-model-test) | 1,857 | `npm install @vtstech/pi-model-test` | Model benchmark/testing extension for Pi Coding Agent |
| 2 | [@vtstech/pi-diag](https://www.npmjs.com/package/@vtstech/pi-diag) | 1,773 | `npm install @vtstech/pi-diag` | Diagnostics extension for Pi Coding Agent |
| 3 | [@marcfargas/pi-test-harness](https://www.npmjs.com/package/@marcfargas/pi-test-harness) | 1,984 | `npm install @marcfargas/pi-test-harness` | Test harness for pi extensions — in-process session testing, package install verification, and subprocess mocking |
| 4 | [@tianzong48/pi-doctor-extension](https://www.npmjs.com/package/@tianzong48/pi-doctor-extension) | 420 | `npm install @tianzong48/pi-doctor-extension` | Pi diagnostics extension package, starting with startup timing probes. |
| 5 | [pi-droid](https://www.npmjs.com/package/pi-droid) | 377 | `npm install pi-droid` | Android phone control for pi-agent — 36 tools to see, touch, and automate any device via ADB |
| 6 | [@gaodes/pi-test-harness](https://www.npmjs.com/package/@gaodes/pi-test-harness) | 333 | `npm install @gaodes/pi-test-harness` | Test harness for pi extensions — in-process session testing, package install verification, and subprocess mocking |
| 7 | [@rxreyn3/pi-azure-devops](https://www.npmjs.com/package/@rxreyn3/pi-azure-devops) | 284 | `npm install @rxreyn3/pi-azure-devops` | Azure DevOps diagnostics extension and CLI for Pi/OMP |
| 8 | [agent-booster-pack-proof](https://www.npmjs.com/package/agent-booster-pack-proof) | 241 | `npm install agent-booster-pack-proof` | Proof-first Pi extension that uses a red-green-refactor cycle when behavior should be specified in tests first, with bu… |
| 9 | [pi-proof](https://www.npmjs.com/package/pi-proof) | 152 | `npm install pi-proof` | Proof-first Pi extension that uses a red-green-refactor cycle when behavior should be specified in tests first, with bu… |
| 10 | [pi-verify](https://www.npmjs.com/package/pi-verify) | 132 | `npm install pi-verify` | Pi extension that runs configurable, staged code verification checks. |
| 11 | [pi-ui-ab-test](https://www.npmjs.com/package/pi-ui-ab-test) | 129 | `npm install pi-ui-ab-test` | Pi extension that lets the model present two visual variants and collect a user preference through an interactive A/B p… |
| 12 | [@artale/pi-test-gen](https://www.npmjs.com/package/@artale/pi-test-gen) | 92 | `npm install @artale/pi-test-gen` | Auto-generate tests from code using AI |
| 13 | [pi-blindtest](https://www.npmjs.com/package/pi-blindtest) | 16 | `npm install pi-blindtest` | Pi extension for blind model testing: hide model in UI and aggregate ratings across sessions. |

</details>

<a id="dataviz"></a>
## 数据可视化
> 7 个包 · 总月下载量 5,217

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@walterra/pi-charts](https://www.npmjs.com/package/@walterra/pi-charts) | 3,120 | `npm install @walterra/pi-charts` | Vega-Lite chart extension for pi coding agent - render data visualizations as inline im… |
| 2 | [@tungthedev/pi-extensions](https://www.npmjs.com/package/@tungthedev/pi-extensions) | 1,691 | `npm install @tungthedev/pi-extensions` | A Pi package containing editor, mermaid, workspace, web, skill, boomerang, goal, pi-mod… |
| 3 | [@the-forge-flow/visual-explainer-pi](https://www.npmjs.com/package/@the-forge-flow/visual-explainer-pi) | 285 | `npm install @the-forge-flow/visual-explainer-pi` | PI extension for generating beautiful HTML visualizations of diagrams, architecture, an… |
| 4 | [@miclivs/pi-charts](https://www.npmjs.com/package/@miclivs/pi-charts) | 62 | `npm install @miclivs/pi-charts` | Pi extension for rendering charts — powered by charts-cli SDK |
| 5 | [@eliemessiecode/pi-render](https://www.npmjs.com/package/@eliemessiecode/pi-render) | 59 | `npm install @eliemessiecode/pi-render` | Extension for pi-coding-agent — displays interactive HTML pages in the browser and auto… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 7 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@walterra/pi-charts](https://www.npmjs.com/package/@walterra/pi-charts) | 3,120 | `npm install @walterra/pi-charts` | Vega-Lite chart extension for pi coding agent - render data visualizations as inline images |
| 2 | [@tungthedev/pi-extensions](https://www.npmjs.com/package/@tungthedev/pi-extensions) | 1,691 | `npm install @tungthedev/pi-extensions` | A Pi package containing editor, mermaid, workspace, web, skill, boomerang, goal, pi-modes, and ext-manager extensions. |
| 3 | [@the-forge-flow/visual-explainer-pi](https://www.npmjs.com/package/@the-forge-flow/visual-explainer-pi) | 285 | `npm install @the-forge-flow/visual-explainer-pi` | PI extension for generating beautiful HTML visualizations of diagrams, architecture, and data |
| 4 | [@miclivs/pi-charts](https://www.npmjs.com/package/@miclivs/pi-charts) | 62 | `npm install @miclivs/pi-charts` | Pi extension for rendering charts — powered by charts-cli SDK |
| 5 | [@eliemessiecode/pi-render](https://www.npmjs.com/package/@eliemessiecode/pi-render) | 59 | `npm install @eliemessiecode/pi-render` | Extension for pi-coding-agent — displays interactive HTML pages in the browser and auto-saves them |
| 6 | [@tifan/pi-mermaid-open](https://www.npmjs.com/package/@tifan/pi-mermaid-open) | 0 | `npm install @tifan/pi-mermaid-open` | Extract and open Mermaid diagrams from pi agent responses. |
| 7 | [pi-mermaid-viewer](https://www.npmjs.com/package/pi-mermaid-viewer) | 0 | `npm install pi-mermaid-viewer` | Render Mermaid diagrams from Pi user and assistant messages in the TUI |

</details>

<a id="utils"></a>
## 共享工具库
> 2 个包 · 总月下载量 2,629

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@vtstech/pi-shared](https://www.npmjs.com/package/@vtstech/pi-shared) | 1,863 | `npm install @vtstech/pi-shared` | Shared utilities for Pi Coding Agent extensions |
| 2 | [@firstpick/pi-utils](https://www.npmjs.com/package/@firstpick/pi-utils) | 766 | `npm install @firstpick/pi-utils` | Shared utilities for Firstpick Pi extension packages. |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 2 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@vtstech/pi-shared](https://www.npmjs.com/package/@vtstech/pi-shared) | 1,863 | `npm install @vtstech/pi-shared` | Shared utilities for Pi Coding Agent extensions |
| 2 | [@firstpick/pi-utils](https://www.npmjs.com/package/@firstpick/pi-utils) | 766 | `npm install @firstpick/pi-utils` | Shared utilities for Firstpick Pi extension packages. |

</details>

<a id="output"></a>
## 输出策略
> 4 个包 · 总月下载量 1,412

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@vanillagreen/pi-output-policy](https://www.npmjs.com/package/@vanillagreen/pi-output-policy) | 728 | `npm install @vanillagreen/pi-output-policy` | OMP-style large-output policy for Pi tool results: minimization, bounded truncation, an… |
| 2 | [@nonplanarslicer/pi-save-output](https://www.npmjs.com/package/@nonplanarslicer/pi-save-output) | 338 | `npm install @nonplanarslicer/pi-save-output` | Save the last assistant message to a markdown file via /save-output |
| 3 | [@badliveware/pi-rich-output](https://www.npmjs.com/package/@badliveware/pi-rich-output) | 263 | `npm install @badliveware/pi-rich-output` | Terminal-friendly structured timeline cards for Pi. |
| 4 | [pi-copy-output](https://www.npmjs.com/package/pi-copy-output) | 83 | `npm install pi-copy-output` | Copy the last assistant response to clipboard — tables, code, markdown, all of it |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 4 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@vanillagreen/pi-output-policy](https://www.npmjs.com/package/@vanillagreen/pi-output-policy) | 728 | `npm install @vanillagreen/pi-output-policy` | OMP-style large-output policy for Pi tool results: minimization, bounded truncation, and spill-file preservation. |
| 2 | [@nonplanarslicer/pi-save-output](https://www.npmjs.com/package/@nonplanarslicer/pi-save-output) | 338 | `npm install @nonplanarslicer/pi-save-output` | Save the last assistant message to a markdown file via /save-output |
| 3 | [@badliveware/pi-rich-output](https://www.npmjs.com/package/@badliveware/pi-rich-output) | 263 | `npm install @badliveware/pi-rich-output` | Terminal-friendly structured timeline cards for Pi. |
| 4 | [pi-copy-output](https://www.npmjs.com/package/pi-copy-output) | 83 | `npm install pi-copy-output` | Copy the last assistant response to clipboard — tables, code, markdown, all of it |

</details>

<a id="learning"></a>
## 持续学习
> 4 个包 · 总月下载量 1,257

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@majorgilles/pi-learning-tutor](https://www.npmjs.com/package/@majorgilles/pi-learning-tutor) | 967 | `npm install @majorgilles/pi-learning-tutor` | Learning-mode tutoring, review loops, and definition overlays for pi. |
| 2 | [teach-me](https://www.npmjs.com/package/teach-me) | 150 | `npm install teach-me` | A Socratic learning system with literature review and curriculum building |
| 3 | [@artale/pi-continuous](https://www.npmjs.com/package/@artale/pi-continuous) | 109 | `npm install @artale/pi-continuous` | Learn from session history |
| 4 | [pi-quiz](https://www.npmjs.com/package/pi-quiz) | 31 | `npm install pi-quiz` | Active quiz for code and document understanding in pi |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 4 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@majorgilles/pi-learning-tutor](https://www.npmjs.com/package/@majorgilles/pi-learning-tutor) | 967 | `npm install @majorgilles/pi-learning-tutor` | Learning-mode tutoring, review loops, and definition overlays for pi. |
| 2 | [teach-me](https://www.npmjs.com/package/teach-me) | 150 | `npm install teach-me` | A Socratic learning system with literature review and curriculum building |
| 3 | [@artale/pi-continuous](https://www.npmjs.com/package/@artale/pi-continuous) | 109 | `npm install @artale/pi-continuous` | Learn from session history |
| 4 | [pi-quiz](https://www.npmjs.com/package/pi-quiz) | 31 | `npm install pi-quiz` | Active quiz for code and document understanding in pi |

</details>

