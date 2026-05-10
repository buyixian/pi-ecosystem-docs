# PI 全量插件目录

> 默认中文 · English mirror: [Open the English catalog](./pi-extension-catalog.en.md)

> 这里列出所有 PI 插件，按自动排行展示，并直接附上安装命令。

## 分类索引

| 分类 | 包数 | 总月下载量 | Top 包 |
|---|---|---|---|
| [其他](#other) | 1,158 | 452,951 | [@juicesharp/rpiv-advisor](https://www.npmjs.com/package/@juicesharp/rpiv-advisor) |
| [子代理/多代理](#subagent) | 99 | 152,904 | [pi-subagents](https://www.npmjs.com/package/pi-subagents) |
| [MCP 协议适配](#mcp) | 63 | 152,219 | [pi-mcp-adapter](https://www.npmjs.com/package/pi-mcp-adapter) |
| [网络访问](#web) | 95 | 110,036 | [pi-web-access](https://www.npmjs.com/package/pi-web-access) |
| [终端 UI](#tui) | 95 | 65,065 | [pi-powerline-footer](https://www.npmjs.com/package/pi-powerline-footer) |
| [工作流](#workflow) | 37 | 61,073 | [@plannotator/pi-extension](https://www.npmjs.com/package/@plannotator/pi-extension) |
| [用户交互](#userinteraction) | 30 | 54,760 | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question) |
| [记忆系统](#memory) | 71 | 52,277 | [@samfp/pi-memory](https://www.npmjs.com/package/@samfp/pi-memory) |
| [技能包](#skill) | 113 | 52,008 | [@juicesharp/rpiv-args](https://www.npmjs.com/package/@juicesharp/rpiv-args) |
| [代码质量](#codequality) | 35 | 36,605 | [pi-lens](https://www.npmjs.com/package/pi-lens) |
| [工具与安全](#tool) | 70 | 31,159 | [@gotgenes/pi-permission-system](https://www.npmjs.com/package/@gotgenes/pi-permission-system) |
| [上下文管理](#context) | 83 | 30,680 | [pi-continue](https://www.npmjs.com/package/pi-continue) |
| [提示词管理](#prompt) | 40 | 30,451 | [glimpseui](https://www.npmjs.com/package/glimpseui) |
| [外部集成](#integration) | 24 | 24,724 | [whatsapp-pi](https://www.npmjs.com/package/whatsapp-pi) |
| [元包/管理工具](#meta) | 13 | 18,568 | [pi-depo](https://www.npmjs.com/package/pi-depo) |
| [Markdown 预览](#markdownpreview) | 12 | 17,738 | [pi-markdown-preview](https://www.npmjs.com/package/pi-markdown-preview) |
| [代理自主模式](#agentmode) | 14 | 17,556 | [@tmustier/pi-ralph-wiggum](https://www.npmjs.com/package/@tmustier/pi-ralph-wiggum) |
| [模型供应商](#provider) | 60 | 17,267 | [pi-provider-kimi-code](https://www.npmjs.com/package/pi-provider-kimi-code) |
| [主题美化](#theme) | 37 | 13,769 | [pi-studio](https://www.npmjs.com/package/pi-studio) |
| [会话管理](#session) | 40 | 12,982 | [@kaiserlich-dev/pi-session-search](https://www.npmjs.com/package/@kaiserlich-dev/pi-session-search) |
| [成本/代理管理](#costproxy) | 20 | 11,384 | [pi-antigravity-rotator](https://www.npmjs.com/package/pi-antigravity-rotator) |
| [仪表盘](#dashboard) | 19 | 9,595 | [@blackbelt-technology/pi-agent-dashboard](https://www.npmjs.com/package/@blackbelt-technology/pi-agent-dashboard) |
| [测试与诊断](#testing) | 12 | 9,357 | [@vtstech/pi-model-test](https://www.npmjs.com/package/@vtstech/pi-model-test) |
| [聊天/消息](#chat) | 9 | 8,372 | [pi-intercom](https://www.npmjs.com/package/pi-intercom) |
| [图像处理](#image) | 29 | 8,098 | [pi-better-openai](https://www.npmjs.com/package/pi-better-openai) |
| [文件搜索](#filesearch) | 5 | 7,769 | [@ff-labs/pi-fff](https://www.npmjs.com/package/@ff-labs/pi-fff) |
| [设置管理](#settings) | 7 | 7,249 | [@axnic/pi-extension-settings](https://www.npmjs.com/package/@axnic/pi-extension-settings) |
| [数据可视化](#dataviz) | 5 | 6,928 | [@walterra/pi-charts](https://www.npmjs.com/package/@walterra/pi-charts) |
| [音频与语音](#audio) | 25 | 6,850 | [@codexstar/pi-listen](https://www.npmjs.com/package/@codexstar/pi-listen) |
| [浏览器自动化](#browser) | 9 | 5,898 | [pi-agent-browser-native](https://www.npmjs.com/package/pi-agent-browser-native) |
| [桌面通知](#notification) | 27 | 5,012 | [@pi-unipi/notify](https://www.npmjs.com/package/@pi-unipi/notify) |
| [共享工具库](#utils) | 2 | 4,513 | [@vtstech/pi-shared](https://www.npmjs.com/package/@vtstech/pi-shared) |
| [输出策略](#output) | 4 | 1,315 | [@vanillagreen/pi-output-policy](https://www.npmjs.com/package/@vanillagreen/pi-output-policy) |
| [持续学习](#learning) | 2 | 99 | [@artale/pi-continuous](https://www.npmjs.com/package/@artale/pi-continuous) |

## 使用方式

在你的 PI 项目目录中运行 `npm install <package>` 即可安装；表格中已直接给出每个包的安装命令。

<a id="other"></a>
## 其他
> 1,158 个包 · 总月下载量 452,951

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@juicesharp/rpiv-advisor](https://www.npmjs.com/package/@juicesharp/rpiv-advisor) | 9,294 | `npm install @juicesharp/rpiv-advisor` | Pi extension. A second opinion the model can request from a stronger reviewer model bef… |
| 2 | [@runfusion/fusion](https://www.npmjs.com/package/@runfusion/fusion) | 8,990 | `npm install @runfusion/fusion` | Fusion CLI: HTTP API server, daemon, dashboard launcher, and task tooling for the Fusio… |
| 3 | [@aliou/pi-processes](https://www.npmjs.com/package/@aliou/pi-processes) | 7,675 | `npm install @aliou/pi-processes` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-processes.png) |
| 4 | [@callumvass/forgeflow-dev](https://www.npmjs.com/package/@callumvass/forgeflow-dev) | 7,261 | `npm install @callumvass/forgeflow-dev` | Dev pipeline for Pi — TDD implementation, code review, architecture, and Datadog invest… |
| 5 | [pi-agent-flow](https://www.npmjs.com/package/pi-agent-flow) | 6,507 | `npm install pi-agent-flow` | Flow-state delegation extension for Pi coding agent. |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 1,158 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@juicesharp/rpiv-advisor](https://www.npmjs.com/package/@juicesharp/rpiv-advisor) | 9,294 | `npm install @juicesharp/rpiv-advisor` | Pi extension. A second opinion the model can request from a stronger reviewer model before it acts. |
| 2 | [@runfusion/fusion](https://www.npmjs.com/package/@runfusion/fusion) | 8,990 | `npm install @runfusion/fusion` | Fusion CLI: HTTP API server, daemon, dashboard launcher, and task tooling for the Fusion AI coding agent. |
| 3 | [@aliou/pi-processes](https://www.npmjs.com/package/@aliou/pi-processes) | 7,675 | `npm install @aliou/pi-processes` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-processes.png) |
| 4 | [@callumvass/forgeflow-dev](https://www.npmjs.com/package/@callumvass/forgeflow-dev) | 7,261 | `npm install @callumvass/forgeflow-dev` | Dev pipeline for Pi — TDD implementation, code review, architecture, and Datadog investigations. |
| 5 | [pi-agent-flow](https://www.npmjs.com/package/pi-agent-flow) | 6,507 | `npm install pi-agent-flow` | Flow-state delegation extension for Pi coding agent. |
| 6 | [@companion-ai/feynman](https://www.npmjs.com/package/@companion-ai/feynman) | 5,525 | `npm install @companion-ai/feynman` | Research-first CLI agent built on Pi and alphaXiv |
| 7 | [@astrofoundry/pi-astro](https://www.npmjs.com/package/@astrofoundry/pi-astro) | 5,428 | `npm install @astrofoundry/pi-astro` | Personal pi customizations (extensions, skills, prompts, themes) for the pi coding agent. |
| 8 | [@leing2021/super-pi](https://www.npmjs.com/package/@leing2021/super-pi) | 5,188 | `npm install @leing2021/super-pi` | Pi-native Compound Engineering package for iterative development workflows |
| 9 | [dripline](https://www.npmjs.com/package/dripline) | 4,425 | `npm install dripline` | Query anything, one drip at a time |
| 10 | [@callumvass/forgeflow-pm](https://www.npmjs.com/package/@callumvass/forgeflow-pm) | 4,137 | `npm install @callumvass/forgeflow-pm` | PM pipeline for Pi — PRD refinement, issue creation, and continue. |
| 11 | [@apmantza/greedysearch-pi](https://www.npmjs.com/package/@apmantza/greedysearch-pi) | 4,015 | `npm install @apmantza/greedysearch-pi` | Headless multi-engine AI search (Perplexity, Bing Copilot, Google AI) via browser automation -- NO API KEYS needed. Ext… |
| 12 | [@ifi/oh-pi-themes](https://www.npmjs.com/package/@ifi/oh-pi-themes) | 3,836 | `npm install @ifi/oh-pi-themes` | Color themes for pi: cyberpunk, nord, gruvbox, tokyo-night, catppuccin, and more. |
| 13 | [pi-zotero](https://www.npmjs.com/package/pi-zotero) | 3,645 | `npm install pi-zotero` | Zotero library search, citation export, and PDF annotation tools for pi via Better BibTeX |
| 14 | [pi-oracle](https://www.npmjs.com/package/pi-oracle) | 3,547 | `npm install pi-oracle` | ChatGPT web-oracle extension for pi with isolated browser auth, async jobs, and project-context archives. |
| 15 | [@feniix/pi-specdocs](https://www.npmjs.com/package/@feniix/pi-specdocs) | 3,214 | `npm install @feniix/pi-specdocs` | Structured spec documentation — PRDs, ADRs, and implementation plans with cross-referencing |
| 16 | [@arshan-dev/pi-ideas](https://www.npmjs.com/package/@arshan-dev/pi-ideas) | 3,112 | `npm install @arshan-dev/pi-ideas` | Idea garden extension for pi: capture, browse, expand, combine, and ship ideas from slash commands. |
| 17 | [@vtstech/pi-status](https://www.npmjs.com/package/@vtstech/pi-status) | 3,046 | `npm install @vtstech/pi-status` | System monitor / status bar extension for Pi Coding Agent |
| 18 | [@vtstech/pi-security](https://www.npmjs.com/package/@vtstech/pi-security) | 2,984 | `npm install @vtstech/pi-security` | Security extension for Pi Coding Agent |
| 19 | [@bdsqqq/pi](https://www.npmjs.com/package/@bdsqqq/pi) | 2,967 | `npm install @bdsqqq/pi` | extensions and core utilities for pi-coding-agent |
| 20 | [@vtstech/pi-ollama-sync](https://www.npmjs.com/package/@vtstech/pi-ollama-sync) | 2,877 | `npm install @vtstech/pi-ollama-sync` | Ollama model sync extension for Pi Coding Agent |
| 21 | [pi-qmd-ledger](https://www.npmjs.com/package/pi-qmd-ledger) | 2,871 | `npm install pi-qmd-ledger` | Universal configurable JSONL ledger with qmd hybrid search, tiered HITL, and dynamic context injection. |
| 22 | [@vtstech/pi-api](https://www.npmjs.com/package/@vtstech/pi-api) | 2,766 | `npm install @vtstech/pi-api` | API Mode Switcher extension for Pi Coding Agent |
| 23 | [@eforge-build/pi-eforge](https://www.npmjs.com/package/@eforge-build/pi-eforge) | 2,751 | `npm install @eforge-build/pi-eforge` | eforge integration for Pi - enqueue, run, and monitor builds from within Pi |
| 24 | [@feniix/pi-exa](https://www.npmjs.com/package/@feniix/pi-exa) | 2,696 | `npm install @feniix/pi-exa` | Exa API extension for pi — web search, content fetching, and advanced search via Exa AI |
| 25 | [@0xkobold/pi-codebase-wiki](https://www.npmjs.com/package/@0xkobold/pi-codebase-wiki) | 2,648 | `npm install @0xkobold/pi-codebase-wiki` | Keeps a wiki for your code that updates itself — reads your git history and docs so you can ask questions about your co… |
| 26 | [@vtstech/pi-react-fallback](https://www.npmjs.com/package/@vtstech/pi-react-fallback) | 2,637 | `npm install @vtstech/pi-react-fallback` | ReAct fallback extension for Pi Coding Agent |
| 27 | [@aliou/pi-synthetic](https://www.npmjs.com/package/@aliou/pi-synthetic) | 2,514 | `npm install @aliou/pi-synthetic` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-synthetic.png) |
| 28 | [@tmustier/pi-usage-extension](https://www.npmjs.com/package/@tmustier/pi-usage-extension) | 2,473 | `npm install @tmustier/pi-usage-extension` | Usage statistics dashboard for Pi sessions. |
| 29 | [@howaboua/pi-codex-conversion](https://www.npmjs.com/package/@howaboua/pi-codex-conversion) | 2,464 | `npm install @howaboua/pi-codex-conversion` | Codex-oriented tool and prompt adapter for pi coding agent |
| 30 | [@feniix/pi-devtools](https://www.npmjs.com/package/@feniix/pi-devtools) | 2,429 | `npm install @feniix/pi-devtools` | Devtools extension for pi — branch and PR workflow, release automation, PR feedback resolution, merge commands, with Gi… |
| 31 | [@aretw0/pi-stack](https://www.npmjs.com/package/@aretw0/pi-stack) | 2,304 | `npm install @aretw0/pi-stack` | Meta-pacote que instala a stack curada de extensões pi do agents-lab — cada pacote individualmente |
| 32 | [pi-cider](https://www.npmjs.com/package/pi-cider) | 2,293 | `npm install pi-cider` | Pi extension for Cider Apple Music client - control playback, queue management, and more via RPC |
| 33 | [pi-rtk-optimizer](https://www.npmjs.com/package/pi-rtk-optimizer) | 2,191 | `npm install pi-rtk-optimizer` | Pi extension that optimizes RTK command rewriting and tool output compaction for the coding agent. |
| 34 | [@vtstech/pi-openrouter-sync](https://www.npmjs.com/package/@vtstech/pi-openrouter-sync) | 2,166 | `npm install @vtstech/pi-openrouter-sync` | OpenRouter model sync extension for Pi Coding Agent — add models from OpenRouter URLs or IDs |
| 35 | [@woxqaq/pi-web](https://www.npmjs.com/package/@woxqaq/pi-web) | 2,141 | `npm install @woxqaq/pi-web` | Web Shell for pi coding agent |
| 36 | [@outlit/pi](https://www.npmjs.com/package/@outlit/pi) | 2,133 | `npm install @outlit/pi` | Pi package for Outlit customer intelligence tools |
| 37 | [pi-extensions](https://www.npmjs.com/package/pi-extensions) | 2,114 | `npm install pi-extensions` | Personal extensions for the [Pi coding agent](https://github.com/badlogic/pi-mono). |
| 38 | [pi-cc](https://www.npmjs.com/package/pi-cc) | 2,111 | `npm install pi-cc` | pi extension that auto-publishes autoresearch.jsonl updates to community.computer. |
| 39 | [@heyhuynhgiabuu/pi-pretty](https://www.npmjs.com/package/@heyhuynhgiabuu/pi-pretty) | 2,051 | `npm install @heyhuynhgiabuu/pi-pretty` | Pretty terminal output for pi — syntax-highlighted file reads, colored bash output, tree-view directory listings, and m… |
| 40 | [@marckrenn/pi-sub-core](https://www.npmjs.com/package/@marckrenn/pi-sub-core) | 2,044 | `npm install @marckrenn/pi-sub-core` | Shared usage data core for pi extensions |
| 41 | [pi-extmgr](https://www.npmjs.com/package/pi-extmgr) | 2,023 | `npm install pi-extmgr` | Enhanced UX for managing local Pi extensions and community packages |
| 42 | [@eko24ive/pi-ask](https://www.npmjs.com/package/@eko24ive/pi-ask) | 2,017 | `npm install @eko24ive/pi-ask` | Pi package that adds an interactive ask_user clarification tool. |
| 43 | [pi-claude-bridge](https://www.npmjs.com/package/pi-claude-bridge) | 1,974 | `npm install pi-claude-bridge` | Pi extension that uses Claude Code (via Agent SDK) as a model provider and adds an AskClaude tool. |
| 44 | [@davidorex/pi-project](https://www.npmjs.com/package/@davidorex/pi-project) | 1,950 | `npm install @davidorex/pi-project` | Schema-driven project state management for Pi |
| 45 | [@0xkobold/pi-ollama](https://www.npmjs.com/package/@0xkobold/pi-ollama) | 1,921 | `npm install @0xkobold/pi-ollama` | Ollama extension for pi-coding-agent. Unified local + cloud Ollama support with model management |
| 46 | [@rwese/pi-question](https://www.npmjs.com/package/@rwese/pi-question) | 1,851 | `npm install @rwese/pi-question` | Unified question tool for pi coding agent - single or multi-question interactions with optional notes and custom input… |
| 47 | [pi-runline](https://www.npmjs.com/package/pi-runline) | 1,831 | `npm install pi-runline` | Code mode for pi |
| 48 | [@juicesharp/rpiv-i18n](https://www.npmjs.com/package/@juicesharp/rpiv-i18n) | 1,795 | `npm install @juicesharp/rpiv-i18n` | Pi extension. The localization foundation for rpiv-* skills: locale detection, the /languages command, the --locale fla… |
| 49 | [@ifi/oh-pi-extensions](https://www.npmjs.com/package/@ifi/oh-pi-extensions) | 1,792 | `npm install @ifi/oh-pi-extensions` | Core pi extensions: git-guard, auto-session, custom-footer, and more. |
| 50 | [@beatly/core](https://www.npmjs.com/package/@beatly/core) | 1,778 | `npm install @beatly/core` | Beatly control layer and bundled SuperCollider runtime. |
| 51 | [@ifi/oh-pi-ant-colony](https://www.npmjs.com/package/@ifi/oh-pi-ant-colony) | 1,772 | `npm install @ifi/oh-pi-ant-colony` | Autonomous multi-agent swarm extension for pi — adaptive concurrency, pheromone communication. |
| 52 | [@sentiolabs/pi-arc](https://www.npmjs.com/package/@sentiolabs/pi-arc) | 1,731 | `npm install @sentiolabs/pi-arc` | Arc issue tracker integration for Pi. |
| 53 | [sterlai](https://www.npmjs.com/package/sterlai) | 1,717 | `npm install sterlai` | Terminal AI agent for Stellar. Chat-driven payments, path payments, trustlines, and friendbot funding on testnet, with… |
| 54 | [latchkey](https://www.npmjs.com/package/latchkey) | 1,657 | `npm install latchkey` | A CLI tool that injects API credentials into curl requests to third-party services |
| 55 | [@davidorex/pi-behavior-monitors](https://www.npmjs.com/package/@davidorex/pi-behavior-monitors) | 1,620 | `npm install @davidorex/pi-behavior-monitors` | Behavior monitors for pi that watch agent activity and steer corrections |
| 56 | [pi-agent-extensions](https://www.npmjs.com/package/pi-agent-extensions) | 1,523 | `npm install pi-agent-extensions` | Collection of extensions for pi coding agent |
| 57 | [@diegopetrucci/pi-extensions](https://www.npmjs.com/package/@diegopetrucci/pi-extensions) | 1,453 | `npm install @diegopetrucci/pi-extensions` | A collection of pi extensions, including a minimal custom footer, an Amp-style oracle, a 200k context cap for auto-comp… |
| 58 | [@unbrained/pm-cli](https://www.npmjs.com/package/@unbrained/pm-cli) | 1,439 | `npm install @unbrained/pm-cli` | Git-native project management CLI for humans and agents. |
| 59 | [clickup-cu](https://www.npmjs.com/package/clickup-cu) | 1,429 | `npm install clickup-cu` | Fast ClickUp CLI for daily task workflow, with optional Pi prompt shortcut. |
| 60 | [pi-copy-user-message](https://www.npmjs.com/package/pi-copy-user-message) | 1,429 | `npm install pi-copy-user-message` | pi extension that adds /copy-user to copy the most recent user message to your clipboard |
| 61 | [pi-simocracy](https://www.npmjs.com/package/pi-simocracy) | 1,370 | `npm install pi-simocracy` | Pi extension: load a Simocracy sim into your chat — see its pixel-art sprite render inline in the terminal and roleplay… |
| 62 | [@alexanderfortin/pi-loaded-tools](https://www.npmjs.com/package/@alexanderfortin/pi-loaded-tools) | 1,350 | `npm install @alexanderfortin/pi-loaded-tools` | Pi coding agent extension for listing loaded tools with source provenance |
| 63 | [pi-code-previews](https://www.npmjs.com/package/pi-code-previews) | 1,349 | `npm install pi-code-previews` | Syntax-highlighted previews for pi tool calls. |
| 64 | [bmw-lex](https://www.npmjs.com/package/bmw-lex) | 1,339 | `npm install bmw-lex` | Lex — BMW Legal AI Agent Platform built on Pi |
| 65 | [pi-delegate](https://www.npmjs.com/package/pi-delegate) | 1,327 | `npm install pi-delegate` | Minimal delegate tool for Pi |
| 66 | [@fitchmultz/pi-stash](https://www.npmjs.com/package/@fitchmultz/pi-stash) | 1,322 | `npm install @fitchmultz/pi-stash` | A pi extension for stashing draft messages and restoring them later. |
| 67 | [pi-bridge](https://www.npmjs.com/package/pi-bridge) | 1,320 | `npm install pi-bridge` | Transparent filesystem bridge that makes pi run natively on a remote machine over SSH |
| 68 | [@kinarajv/pi-tps-extensions](https://www.npmjs.com/package/@kinarajv/pi-tps-extensions) | 1,311 | `npm install @kinarajv/pi-tps-extensions` | Token-per-sec extensions — real-time token throughput and TTFT (Time To First Token) display for pi coding agent |
| 69 | [@the-forge-flow/gh-pi](https://www.npmjs.com/package/@the-forge-flow/gh-pi) | 1,273 | `npm install @the-forge-flow/gh-pi` | GH-PI — PI extension for native GitHub CLI (gh) integration |
| 70 | [opencandle](https://www.npmjs.com/package/opencandle) | 1,258 | `npm install opencandle` | Financial trading & investing agent |
| 71 | [pi-llama-cpp](https://www.npmjs.com/package/pi-llama-cpp) | 1,245 | `npm install pi-llama-cpp` | Pi extension for llama.cpp integration. Supports both router and single modes. |
| 72 | [pi-token-burden](https://www.npmjs.com/package/pi-token-burden) | 1,239 | `npm install pi-token-burden` | Pi extension that shows a token-budget breakdown of the assembled system prompt |
| 73 | [@gotgenes/pi-anthropic-auth](https://www.npmjs.com/package/@gotgenes/pi-anthropic-auth) | 1,227 | `npm install @gotgenes/pi-anthropic-auth` | Pi extension package for Anthropic OAuth compatibility |
| 74 | [@micuintus/llm-wiki](https://www.npmjs.com/package/@micuintus/llm-wiki) | 1,211 | `npm install @micuintus/llm-wiki` | As minimal as Pi. Karpathy's LLM Wiki pattern as a minimal, agent-agnostic skill. |
| 75 | [pi-local-agents-only](https://www.npmjs.com/package/pi-local-agents-only) | 1,207 | `npm install pi-local-agents-only` | Pi extension that strips global AGENTS.md and CLAUDE.md from the effective prompt for selected projects. |
| 76 | [pi-wecombot](https://www.npmjs.com/package/pi-wecombot) | 1,204 | `npm install pi-wecombot` | 企业微信智能机器人 WebSocket 长连接扩展 for pi |
| 77 | [@oppiai/pi-package](https://www.npmjs.com/package/@oppiai/pi-package) | 1,200 | `npm install @oppiai/pi-package` | OPPi Pi package: extensions, skills, prompts, and themes. |
| 78 | [@ineersa/my-pi-extensions](https://www.npmjs.com/package/@ineersa/my-pi-extensions) | 1,187 | `npm install @ineersa/my-pi-extensions` | Personal extension bundle for pi-coding-agent |
| 79 | [eslint-plugin-lookup-table](https://www.npmjs.com/package/eslint-plugin-lookup-table) | 1,181 | `npm install eslint-plugin-lookup-table` | Detect redundant conditional chains and suggest lookup tables |
| 80 | [pi-island](https://www.npmjs.com/package/pi-island) | 1,178 | `npm install pi-island` | Dynamic-Island-style status capsule for the pi coding agent on macOS and Windows. Shows what pi is doing in real time,… |
| 81 | [@feniix/pi-code-reasoning](https://www.npmjs.com/package/@feniix/pi-code-reasoning) | 1,175 | `npm install @feniix/pi-code-reasoning` | Code Reasoning extension for pi — reflective problem-solving through sequential thinking with branching and revision su… |
| 82 | [@spences10/pi-telemetry](https://www.npmjs.com/package/@spences10/pi-telemetry) | 1,172 | `npm install @spences10/pi-telemetry` | Pi extension for local SQLite telemetry of runs, turns, tools, and provider requests |
| 83 | [@ineersa/my-pi-themes](https://www.npmjs.com/package/@ineersa/my-pi-themes) | 1,171 | `npm install @ineersa/my-pi-themes` | Color themes for pi: cyberpunk, nord, gruvbox, tokyo-night, catppuccin, and more. |
| 84 | [pi-mempalace-extension](https://www.npmjs.com/package/pi-mempalace-extension) | 1,162 | `npm install pi-mempalace-extension` | Lean MemPalace integration for the Pi coding agent |
| 85 | [pi-gh-my-starred](https://www.npmjs.com/package/pi-gh-my-starred) | 1,154 | `npm install pi-gh-my-starred` | PI extension for browsing GitHub starred repositories and star lists |
| 86 | [pi-answer](https://www.npmjs.com/package/pi-answer) | 1,153 | `npm install pi-answer` | Interactive Q&A extraction extension for pi |
| 87 | [pi-hashline-readmap](https://www.npmjs.com/package/pi-hashline-readmap) | 1,144 | `npm install pi-hashline-readmap` | Unified pi extension: hash-anchored read/edit/grep, structural code maps, AST-grep, file exploration (ls/find), and bas… |
| 88 | [@tmustier/pi-files-widget](https://www.npmjs.com/package/@tmustier/pi-files-widget) | 1,144 | `npm install @tmustier/pi-files-widget` | In-terminal file browser and viewer for Pi. |
| 89 | [pi-workspace-history](https://www.npmjs.com/package/pi-workspace-history) | 1,125 | `npm install pi-workspace-history` | Real workspace undo/redo for Pi. Bring Claude Code style /rewind and OpenCode /undo safety to @mariozechner/pi-coding-a… |
| 90 | [@ineersa/my-pi-scheduler](https://www.npmjs.com/package/@ineersa/my-pi-scheduler) | 1,118 | `npm install @ineersa/my-pi-scheduler` | Scheduler extension for pi: recurring checks, one-time reminders, and the LLM-callable schedule_prompt tool. |
| 91 | [@ineersa/my-pi](https://www.npmjs.com/package/@ineersa/my-pi) | 1,116 | `npm install @ineersa/my-pi` | One-command installer for my pi extension bundle |
| 92 | [pi-knowledge-search](https://www.npmjs.com/package/pi-knowledge-search) | 1,114 | `npm install pi-knowledge-search` | Semantic search over local files for pi. Indexes a directory of text files, watches for changes, and exposes a knowledg… |
| 93 | [pi-ollama-cloud](https://www.npmjs.com/package/pi-ollama-cloud) | 1,113 | `npm install pi-ollama-cloud` | Ollama Cloud provider plugin for [Pi](https://github.com/badlogic/pi-mono) coding agent. |
| 94 | [pi-annotate](https://www.npmjs.com/package/pi-annotate) | 1,109 | `npm install pi-annotate` | Visual annotation tool for Pi coding agent with inline note cards |
| 95 | [@spences10/pi-confirm-destructive](https://www.npmjs.com/package/@spences10/pi-confirm-destructive) | 1,095 | `npm install @spences10/pi-confirm-destructive` | Pi extension that confirms destructive actions before they run |
| 96 | [pi-rewind](https://www.npmjs.com/package/pi-rewind) | 1,094 | `npm install pi-rewind` | Checkpoint/rewind extension for the Pi coding agent — per-tool snapshots, /rewind command, Esc+Esc shortcut, safe resto… |
| 97 | [@ontomics/ontomics](https://www.npmjs.com/package/@ontomics/ontomics) | 1,085 | `npm install @ontomics/ontomics` | MCP server that extracts domain ontologies from Python codebases |
| 98 | [pi-byteplus-modelark](https://www.npmjs.com/package/pi-byteplus-modelark) | 1,082 | `npm install pi-byteplus-modelark` | Pi extension for BytePlus ModelArk Coding Plan — registers ModelArk as a custom OpenAI-compatible provider with all sup… |
| 99 | [pi-constell-plan](https://www.npmjs.com/package/pi-constell-plan) | 1,072 | `npm install pi-constell-plan` | Claude Code-style plan mode for pi: explicit --plan / /plan entry, askUserQuestion gating, and Constellagent-compatible… |
| 100 | [pi-dingtalkbot](https://www.npmjs.com/package/pi-dingtalkbot) | 1,070 | `npm install pi-dingtalkbot` | 钉钉智能机器人 Stream 长连接扩展 for pi |
| 101 | [@spences10/pi-redact](https://www.npmjs.com/package/@spences10/pi-redact) | 1,067 | `npm install @spences10/pi-redact` | Pi extension that redacts secrets from tool output before the model sees them |
| 102 | [pi-cursor-agent](https://www.npmjs.com/package/pi-cursor-agent) | 1,062 | `npm install pi-cursor-agent` | Cursor Agent provider extension for pi |
| 103 | [pi-themes](https://www.npmjs.com/package/pi-themes) | 1,055 | `npm install pi-themes` | A collection of major color themes for pi with a theme switcher extension |
| 104 | [pi-twincat-ads](https://www.npmjs.com/package/pi-twincat-ads) | 1,053 | `npm install pi-twincat-ads` | Pi extension for reading and writing TwinCAT runtime values over ADS. |
| 105 | [@llblab/pi-auto-tools](https://www.npmjs.com/package/@llblab/pi-auto-tools) | 1,047 | `npm install @llblab/pi-auto-tools` | Persistent template-backed tools for pi |
| 106 | [@tmustier/pi-raw-paste](https://www.npmjs.com/package/@tmustier/pi-raw-paste) | 1,035 | `npm install @tmustier/pi-raw-paste` | One-shot raw paste support for Pi (/paste). |
| 107 | [pi-mono-multi-edit](https://www.npmjs.com/package/pi-mono-multi-edit) | 1,034 | `npm install pi-mono-multi-edit` | Pi extension that replaces edit with batch edits and Codex-style patches |
| 108 | [pi-mono-review](https://www.npmjs.com/package/pi-mono-review) | 1,007 | `npm install pi-mono-review` | Pi extension for reviewing GitHub PRs and GitLab MRs |
| 109 | [pi-morphllm-plugin](https://www.npmjs.com/package/pi-morphllm-plugin) | 1,004 | `npm install pi-morphllm-plugin` | Morph runtime extension package for Pi Coding Agent with tools, hooks, and compaction |
| 110 | [@alexanderfortin/pi-zai-usage](https://www.npmjs.com/package/@alexanderfortin/pi-zai-usage) | 999 | `npm install @alexanderfortin/pi-zai-usage` | Pi extension for monitoring Z.ai API token usage quota |
| 111 | [@neuralpartners/pi-yo](https://www.npmjs.com/package/@neuralpartners/pi-yo) | 997 | `npm install @neuralpartners/pi-yo` | Inter-terminal messaging for Pi agents and Claude Code sessions. |
| 112 | [pi-codex-goal](https://www.npmjs.com/package/pi-codex-goal) | 992 | `npm install pi-codex-goal` | Codex-style goal tracking and continuation for pi. |
| 113 | [pi-rewind-hook](https://www.npmjs.com/package/pi-rewind-hook) | 989 | `npm install pi-rewind-hook` | Rewind extension for Pi agent - automatic git checkpoints with file/conversation restore |
| 114 | [@lnilluv/pi-opencode-go-rotation](https://www.npmjs.com/package/@lnilluv/pi-opencode-go-rotation) | 985 | `npm install @lnilluv/pi-opencode-go-rotation` | Rotate between multiple OpenCode Go API keys with best-effort reactive key rotation |
| 115 | [pi-hashline-edit](https://www.npmjs.com/package/pi-hashline-edit) | 982 | `npm install pi-hashline-edit` | Hashline read/edit tool override for pi-coding-agent |
| 116 | [pi-lmstudio](https://www.npmjs.com/package/pi-lmstudio) | 978 | `npm install pi-lmstudio` | LM Studio and llama-server model provider extensions for Pi coding agent |
| 117 | [@devkade/pi-plan](https://www.npmjs.com/package/@devkade/pi-plan) | 962 | `npm install @devkade/pi-plan` | Plan command extension for Pi: read-only planning mode with approval-based execution |
| 118 | [@ahkohd/pi-yagami-search](https://www.npmjs.com/package/@ahkohd/pi-yagami-search) | 952 | `npm install @ahkohd/pi-yagami-search` | Pi package providing Yagami web search tools |
| 119 | [@ogulcancelik/pi-herdr](https://www.npmjs.com/package/@ogulcancelik/pi-herdr) | 945 | `npm install @ogulcancelik/pi-herdr` | Herdr-native workspace, tab, and pane orchestration for pi with output watches and agent status waits. |
| 120 | [pi-mono-status-line](https://www.npmjs.com/package/pi-mono-status-line) | 942 | `npm install pi-mono-status-line` | Pi extension that adds git branch and richer stats to the footer |
| 121 | [pi-snap-edit](https://www.npmjs.com/package/pi-snap-edit) | 937 | `npm install pi-snap-edit` | Fast, precise, script-free edits for Pi agents |
| 122 | [rad-pi](https://www.npmjs.com/package/rad-pi) | 930 | `npm install rad-pi` | Default Radicle package for pi: core deterministic tooling |
| 123 | [pi-json-tools](https://www.npmjs.com/package/pi-json-tools) | 920 | `npm install pi-json-tools` | Smart Recovery for Qwen Coder - Auto hallucination detection, auto reminder, smart recovery for qwen2.5-coder family |
| 124 | [pi-codexbar](https://www.npmjs.com/package/pi-codexbar) | 911 | `npm install pi-codexbar` | Pi extension wrapper for CodexBar provider state and controls |
| 125 | [pi-openrouter-realtime](https://www.npmjs.com/package/pi-openrouter-realtime) | 910 | `npm install pi-openrouter-realtime` | OpenRouter extension for pi — real-time model sync, provider/quantization enrichment, endpoint health, credit balance,… |
| 126 | [@the-forge-flow/lightpanda-pi](https://www.npmjs.com/package/@the-forge-flow/lightpanda-pi) | 908 | `npm install @the-forge-flow/lightpanda-pi` | PI extension for web search using Lightpanda headless browser |
| 127 | [pi-mono-sentinel](https://www.npmjs.com/package/pi-mono-sentinel) | 900 | `npm install pi-mono-sentinel` | Pi extension that guards against content-based secret leaks and indirect script execution |
| 128 | [pi-mono-clear](https://www.npmjs.com/package/pi-mono-clear) | 893 | `npm install pi-mono-clear` | Pi extension that starts a fresh session with /clear |
| 129 | [pi-nvidia-nim](https://www.npmjs.com/package/pi-nvidia-nim) | 879 | `npm install pi-nvidia-nim` | NVIDIA NIM API provider extension for pi coding agent — access 100+ models from build.nvidia.com |
| 130 | [@siddr/pi-review](https://www.npmjs.com/package/@siddr/pi-review) | 877 | `npm install @siddr/pi-review` | Interactive review mode extension for pi |
| 131 | [pi-show-diffs](https://www.npmjs.com/package/pi-show-diffs) | 870 | `npm install pi-show-diffs` | Pi package that adds a diff approval viewer before edit and write tools change files. |
| 132 | [pi-jingle](https://www.npmjs.com/package/pi-jingle) | 864 | `npm install pi-jingle` | Play sounds on pi events like agent_start and agent_end |
| 133 | [@vanillagreen/pi-claude-bridge](https://www.npmjs.com/package/@vanillagreen/pi-claude-bridge) | 856 | `npm install @vanillagreen/pi-claude-bridge` | Pi provider bridge that runs Claude Code through the Claude Agent SDK, with opt-in forwarding for Pi prompt context. |
| 134 | [@ramarivera/pi-kimi-for-coding](https://www.npmjs.com/package/@ramarivera/pi-kimi-for-coding) | 853 | `npm install @ramarivera/pi-kimi-for-coding` | Pi extension that adds Kimi For Coding OAuth support using the official device flow and Kimi-specific request behavior. |
| 135 | [pi-unified-exec](https://www.npmjs.com/package/pi-unified-exec) | 852 | `npm install pi-unified-exec` | Codex-style unified_exec for pi: long-lived shell sessions the LLM polls and drives with write_stdin (Ctrl-C, arrow key… |
| 136 | [@ramarivera/pi-goal](https://www.npmjs.com/package/@ramarivera/pi-goal) | 846 | `npm install @ramarivera/pi-goal` | Pi extension that adds Codex-style persisted goals and hidden continuation pressure. |
| 137 | [@spences10/pi-nopeek](https://www.npmjs.com/package/@spences10/pi-nopeek) | 840 | `npm install @spences10/pi-nopeek` | Pi extension that reminds the model to use nopeek for secret-safe environment loading |
| 138 | [@spences10/pi-recall](https://www.npmjs.com/package/@spences10/pi-recall) | 840 | `npm install @spences10/pi-recall` | Pi extension that reminds the model to use pirecall and syncs session recall data |
| 139 | [@fitchmultz/pi-ephemeral](https://www.npmjs.com/package/@fitchmultz/pi-ephemeral) | 837 | `npm install @fitchmultz/pi-ephemeral` | Pi extension for temporary unsaved conversations. Toggle ephemeral mode on/off, session is deleted on exit. |
| 140 | [pi-extension-manager](https://www.npmjs.com/package/pi-extension-manager) | 827 | `npm install pi-extension-manager` | Interactive extension and package manager for Pi |
| 141 | [@ryan_nookpi/pi-extension-diff-review](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-diff-review) | 826 | `npm install @ryan_nookpi/pi-extension-diff-review` | Native diff review window extension for pi. |
| 142 | [pi-mono-loop](https://www.npmjs.com/package/pi-mono-loop) | 824 | `npm install pi-mono-loop` | Pi extension that runs a prompt or slash command on a recurring interval |
| 143 | [nightmanager](https://www.npmjs.com/package/nightmanager) | 816 | `npm install nightmanager` | Finder, Oracle, Manager, and Worker tools for Pi's Nightmanager workflow |
| 144 | [pi-generate-commit-message](https://www.npmjs.com/package/pi-generate-commit-message) | 813 | `npm install pi-generate-commit-message` | Pi extension for generating commit messages from staged diffs |
| 145 | [@aliou/pi-dev-kit](https://www.npmjs.com/package/@aliou/pi-dev-kit) | 810 | `npm install @aliou/pi-dev-kit` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-dev-kit.png) |
| 146 | [@zenobius/pi-worktrees](https://www.npmjs.com/package/@zenobius/pi-worktrees) | 808 | `npm install @zenobius/pi-worktrees` | Worktrees extension for Pi Coding Agent |
| 147 | [pi-vim](https://www.npmjs.com/package/pi-vim) | 803 | `npm install pi-vim` | Vim-style modal editing for Pi's TUI editor |
| 148 | [pi-minimax-cli](https://www.npmjs.com/package/pi-minimax-cli) | 802 | `npm install pi-minimax-cli` | A pi coding agent extension that wraps the MiniMax mmx CLI as callable tools with self-evolving architecture |
| 149 | [pi-plan-mode](https://www.npmjs.com/package/pi-plan-mode) | 802 | `npm install pi-plan-mode` | Plan mode extension for pi - read-only exploration with plan file editing |
| 150 | [@robhowley/pi-structured-return](https://www.npmjs.com/package/@robhowley/pi-structured-return) | 801 | `npm install @robhowley/pi-structured-return` | Turn noisy CLI output into compact structured results (fewer tokens), full logs preserved. |
| 151 | [@latent-variable/pi-terminal-bench](https://www.npmjs.com/package/@latent-variable/pi-terminal-bench) | 798 | `npm install @latent-variable/pi-terminal-bench` | Self-contained benchmark suite for Pi. Runs QuixBugs and other coding tasks locally — no Docker, no Python frameworks,… |
| 152 | [pi-cyber-ui](https://www.npmjs.com/package/pi-cyber-ui) | 797 | `npm install pi-cyber-ui` | Standalone Pi UI package with a cyber-inspired theme, custom editor, footer, and lightweight working indicator. |
| 153 | [@pi-orca/tasks](https://www.npmjs.com/package/@pi-orca/tasks) | 797 | `npm install @pi-orca/tasks` | File-backed task DAG with locking |
| 154 | [pi-venice-stats](https://www.npmjs.com/package/pi-venice-stats) | 793 | `npm install pi-venice-stats` | Live Venice Protocol stats dashboard for Pi Coding Agent |
| 155 | [@pi-orca/messages](https://www.npmjs.com/package/@pi-orca/messages) | 793 | `npm install @pi-orca/messages` | Inter-session messaging with inbox delivery |
| 156 | [pi-read-map](https://www.npmjs.com/package/pi-read-map) | 790 | `npm install pi-read-map` | Pi extension that adds structural file maps for large files |
| 157 | [@pi-orca/profiles](https://www.npmjs.com/package/@pi-orca/profiles) | 784 | `npm install @pi-orca/profiles` | Named extension sets with CLI flag |
| 158 | [@jeonghyeon.net/pi-supervisor](https://www.npmjs.com/package/@jeonghyeon.net/pi-supervisor) | 778 | `npm install @jeonghyeon.net/pi-supervisor` | A pi extension that supervises the chat and steers it towards a defined outcome |
| 159 | [@pi-orca/models](https://www.npmjs.com/package/@pi-orca/models) | 777 | `npm install @pi-orca/models` | Model alias management |
| 160 | [@timtekno/agentic-template](https://www.npmjs.com/package/@timtekno/agentic-template) | 774 | `npm install @timtekno/agentic-template` | Reusable pi package for company workflows |
| 161 | [@pi-orca/agents](https://www.npmjs.com/package/@pi-orca/agents) | 771 | `npm install @pi-orca/agents` | Subagent lifecycle via SDK/RPC/tmux |
| 162 | [@ineersa/my-pi-jetbrains-index](https://www.npmjs.com/package/@ineersa/my-pi-jetbrains-index) | 757 | `npm install @ineersa/my-pi-jetbrains-index` | JetBrains index diagnostics gate extension for pi-coding-agent |
| 163 | [claude-agent-sdk-pi](https://www.npmjs.com/package/claude-agent-sdk-pi) | 756 | `npm install claude-agent-sdk-pi` | This extension registers a custom provider that routes LLM calls through the **Claude Agent SDK** while **pi executes t… |
| 164 | [@pi-orca/cleanup](https://www.npmjs.com/package/@pi-orca/cleanup) | 756 | `npm install @pi-orca/cleanup` | Retention sweeps and orphan detection |
| 165 | [pi-board](https://www.npmjs.com/package/pi-board) | 754 | `npm install pi-board` | AI-first local task/sprint manager |
| 166 | [@vanillagreen/pi-agents-tmux](https://www.npmjs.com/package/@vanillagreen/pi-agents-tmux) | 745 | `npm install @vanillagreen/pi-agents-tmux` | Pi extension for delegating work to project or user agents, including persistent tmux agent panes. |
| 167 | [@0xkobold/pi-task](https://www.npmjs.com/package/@0xkobold/pi-task) | 738 | `npm install @0xkobold/pi-task` | Kanban-style task management for pi agents — backlog, in-progress, review, blocked, done with SQLite persistence |
| 168 | [pi-cursor-sdk](https://www.npmjs.com/package/pi-cursor-sdk) | 735 | `npm install pi-cursor-sdk` | pi provider extension backed by @cursor/sdk local agents |
| 169 | [@vanillagreen/pi-qol](https://www.npmjs.com/package/@vanillagreen/pi-qol) | 730 | `npm install @vanillagreen/pi-qol` | Pi quality-of-life extension: compact statusline/π prompt, reliable multiline input, styled pasted-image chips, session… |
| 170 | [@nteract/pi](https://www.npmjs.com/package/@nteract/pi) | 730 | `npm install @nteract/pi` | Persistent notebook-backed Python REPL for Pi coding agents. Stateful execution, hot dependency sync, zero cold starts. |
| 171 | [pi-fizzy](https://www.npmjs.com/package/pi-fizzy) | 729 | `npm install pi-fizzy` | Pi extension for fetching Fizzy.do cards and turning them into build or plan prompts. |
| 172 | [@codingcoffee/pi-readonly-ssh](https://www.npmjs.com/package/@codingcoffee/pi-readonly-ssh) | 707 | `npm install @codingcoffee/pi-readonly-ssh` | a pi extension for safely running allow-listed, read-only commands on remote hosts over SSH |
| 173 | [composio-x-pi](https://www.npmjs.com/package/composio-x-pi) | 694 | `npm install composio-x-pi` | Pi extension that exposes Composio-backed runtime and authoring tools. |
| 174 | [pi-claude-cli](https://www.npmjs.com/package/pi-claude-cli) | 691 | `npm install pi-claude-cli` | Pi coding agent extension that routes LLM calls through the Claude Code CLI |
| 175 | [@fink-andreas/pi-linear-tools](https://www.npmjs.com/package/@fink-andreas/pi-linear-tools) | 690 | `npm install @fink-andreas/pi-linear-tools` | Pi extension with Linear SDK tools and configuration commands |
| 176 | [@heyhuynhgiabuu/pi-diff](https://www.npmjs.com/package/@heyhuynhgiabuu/pi-diff) | 682 | `npm install @heyhuynhgiabuu/pi-diff` | Shiki-powered terminal diff renderer for pi — syntax-highlighted, word-level diffs in split and unified views. |
| 177 | [@robhowley/pi-openrouter](https://www.npmjs.com/package/@robhowley/pi-openrouter) | 678 | `npm install @robhowley/pi-openrouter` | Live OpenRouter TUI overlays for spend, credits, key limits, burn rate, model usage, and session tagging. |
| 178 | [pi-research](https://www.npmjs.com/package/pi-research) | 666 | `npm install pi-research` | Pi extension for web research. |
| 179 | [@aliou/pi-neuralwatt](https://www.npmjs.com/package/@aliou/pi-neuralwatt) | 664 | `npm install @aliou/pi-neuralwatt` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-neuralwatt.png) |
| 180 | [@tmustier/pi-nes](https://www.npmjs.com/package/@tmustier/pi-nes) | 664 | `npm install @tmustier/pi-nes` | NES emulator extension for pi |
| 181 | [@aliou/pi-linkup](https://www.npmjs.com/package/@aliou/pi-linkup) | 662 | `npm install @aliou/pi-linkup` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-linkup.png) |
| 182 | [pi-weixinbot](https://www.npmjs.com/package/pi-weixinbot) | 658 | `npm install pi-weixinbot` | 微信机器人 extension for pi，支持扫码登录和消息收发 |
| 183 | [@deevus/pi-zmx](https://www.npmjs.com/package/@deevus/pi-zmx) | 656 | `npm install @deevus/pi-zmx` | Execute shell commands in persistent zmx sessions from pi |
| 184 | [pi-exit](https://www.npmjs.com/package/pi-exit) | 654 | `npm install pi-exit` | Minimal pi package that adds a /exit command. |
| 185 | [@vanillagreen/pi-task-panel](https://www.npmjs.com/package/@vanillagreen/pi-task-panel) | 651 | `npm install @vanillagreen/pi-task-panel` | Persistent Claude-style tasks panel for Pi with slash commands and a structured tasks_write tool. |
| 186 | [pi-plan-md](https://www.npmjs.com/package/pi-plan-md) | 651 | `npm install pi-plan-md` | Branch-based planning workflow extension for pi |
| 187 | [@richardgill/pi-sub-pi](https://www.npmjs.com/package/@richardgill/pi-sub-pi) | 650 | `npm install @richardgill/pi-sub-pi` | Run isolated `pi` subprocesses for **single**, **chain**, or **parallel** work. |
| 188 | [@uadgj/pi-superpowers-support](https://www.npmjs.com/package/@uadgj/pi-superpowers-support) | 649 | `npm install @uadgj/pi-superpowers-support` | Pi extension providing TodoWrite, Task, and Skill tools for official superpowers compatibility |
| 189 | [pi-model-switch](https://www.npmjs.com/package/pi-model-switch) | 642 | `npm install pi-model-switch` | Model switching extension for pi coding agent |
| 190 | [pi-dunnet](https://www.npmjs.com/package/pi-dunnet) | 638 | `npm install pi-dunnet` | Play classic Emacs Dunnet text adventure inside pi — /dunnet |
| 191 | [pi-obsidian-preview](https://www.npmjs.com/package/pi-obsidian-preview) | 637 | `npm install pi-obsidian-preview` | Open the last Pi assistant response in Obsidian — /preview command and configurable keyboard shortcut |
| 192 | [@vanillagreen/pi-background-tasks](https://www.npmjs.com/package/@vanillagreen/pi-background-tasks) | 627 | `npm install @vanillagreen/pi-background-tasks` | Pi extension for explicit non-blocking background shell tasks, log tails, and completion wakeups. |
| 193 | [@open-plan-annotator/pi-extension](https://www.npmjs.com/package/@open-plan-annotator/pi-extension) | 626 | `npm install @open-plan-annotator/pi-extension` | Pi extension for open-plan-annotator that adds plan review tools and commands |
| 194 | [@benvargas/pi-claude-code-use](https://www.npmjs.com/package/@benvargas/pi-claude-code-use) | 625 | `npm install @benvargas/pi-claude-code-use` | Patch Anthropic OAuth payloads and companion tools for Claude Code-style subscription use |
| 195 | [pi-moonshot](https://www.npmjs.com/package/pi-moonshot) | 623 | `npm install pi-moonshot` | Pi extension adding Moonshot AI provider with Kimi K2.6, K2.5 and other models |
| 196 | [@samfp/pi-essentials](https://www.npmjs.com/package/@samfp/pi-essentials) | 621 | `npm install @samfp/pi-essentials` | Essential extensions for pi — auto session naming, compact header, clipboard images, image pruning, markdown viewer, sc… |
| 197 | [@m64/nats-pi-channel](https://www.npmjs.com/package/@m64/nats-pi-channel) | 621 | `npm install @m64/nats-pi-channel` | NATS Agent Protocol channel for PI Agent. Makes every PI session a discoverable, spec-compliant agent on NATS. |
| 198 | [pi-ui-hephaestus](https://www.npmjs.com/package/pi-ui-hephaestus) | 613 | `npm install pi-ui-hephaestus` | Muted thinking blocks, framed editor, animated header, response time, rich footer, and clipboard image paste for pi |
| 199 | [@the-forge-flow/ultra-compress-pi](https://www.npmjs.com/package/@the-forge-flow/ultra-compress-pi) | 613 | `npm install @the-forge-flow/ultra-compress-pi` | PI extension for token-efficient prose — level-based runtime output compression and markdown file compression |
| 200 | [ollama-graceful](https://www.npmjs.com/package/ollama-graceful) | 613 | `npm install ollama-graceful` | Pi extension that gracefully starts and stops the Ollama service on demand when switching between local and cloud models |
| 201 | [@carlosgtrz/pi-codex-aliases](https://www.npmjs.com/package/@carlosgtrz/pi-codex-aliases) | 612 | `npm install @carlosgtrz/pi-codex-aliases` | Pi extension that adds personal and work aliases for the built-in OpenAI Codex provider. |
| 202 | [pi-formatter](https://www.npmjs.com/package/pi-formatter) | 604 | `npm install pi-formatter` | Pi extension that auto-formats files. |
| 203 | [pi-hodor](https://www.npmjs.com/package/pi-hodor) | 601 | `npm install pi-hodor` | A pi extension that automatically continues after transient stream and connection errors. |
| 204 | [@pi-agents/loop](https://www.npmjs.com/package/@pi-agents/loop) | 600 | `npm install @pi-agents/loop` | Recurring prompt execution and cron scheduling for pi-agent — /loop, cron_create, cron_delete, cron_list |
| 205 | [pi-posh-git](https://www.npmjs.com/package/pi-posh-git) | 599 | `npm install pi-posh-git` | posh-git style persistent git status for pi. Displays branch, ahead/behind, staged/unstaged counts, and stash count — a… |
| 206 | [pi-models](https://www.npmjs.com/package/pi-models) | 596 | `npm install pi-models` | Quality-of-life Pi extension for browsing models by provider or family |
| 207 | [pi-telemetry-minimal](https://www.npmjs.com/package/pi-telemetry-minimal) | 594 | `npm install pi-telemetry-minimal` | Minimal token usage telemetry for Pi |
| 208 | [pi-comment-checker](https://www.npmjs.com/package/pi-comment-checker) | 584 | `npm install pi-comment-checker` | Pi extension that enforces self-documenting code by detecting and blocking unnecessary comments |
| 209 | [@marckrenn/pi-sub-bar](https://www.npmjs.com/package/@marckrenn/pi-sub-bar) | 583 | `npm install @marckrenn/pi-sub-bar` | Usage widget extension for pi-coding-agent - shows current provider usage above the editor |
| 210 | [@wind_mask/aw-watcher-agent-pi](https://www.npmjs.com/package/@wind_mask/aw-watcher-agent-pi) | 581 | `npm install @wind_mask/aw-watcher-agent-pi` | Pi extension for ActivityWatch session tracking — records code agent sessions, models, token usage, and costs |
| 211 | [@grafana/sigil-pi](https://www.npmjs.com/package/@grafana/sigil-pi) | 579 | `npm install @grafana/sigil-pi` | Pi agent extension for Grafana Sigil AI telemetry |
| 212 | [@llblab/pi-wakeup](https://www.npmjs.com/package/@llblab/pi-wakeup) | 578 | `npm install @llblab/pi-wakeup` | Singleton wake-up scheduler extension for pi |
| 213 | [@firstpick/pi-extension-fish-user-bash](https://www.npmjs.com/package/@firstpick/pi-extension-fish-user-bash) | 575 | `npm install @firstpick/pi-extension-fish-user-bash` | Use fish shell backend for Pi user bash commands (! and !!). |
| 214 | [pi-must-have-extension](https://www.npmjs.com/package/pi-must-have-extension) | 574 | `npm install pi-must-have-extension` | RFC 2119 keyword normalizer extension for the Pi coding agent. |
| 215 | [pi-jj-auto](https://www.npmjs.com/package/pi-jj-auto) | 571 | `npm install pi-jj-auto` | Automatic jj revision management — guards file edits to keep Jujutsu revisions focused |
| 216 | [pi-friday](https://www.npmjs.com/package/pi-friday) | 571 | `npm install pi-friday` | Dedicated communications side panel for pi — routes all conversation to a separate tmux pane with typewriter effect. Op… |
| 217 | [pi-claude-oauth-adapter](https://www.npmjs.com/package/pi-claude-oauth-adapter) | 566 | `npm install pi-claude-oauth-adapter` | Anthropic OAuth / Claude Code compatibility adapter for Pi. |
| 218 | [pi-napkin](https://www.npmjs.com/package/pi-napkin) | 565 | `npm install pi-napkin` | 🧻 Napkin integration for pi — vault context, knowledge tools, and automatic distillation |
| 219 | [pi-kiro](https://www.npmjs.com/package/pi-kiro) | 564 | `npm install pi-kiro` | [Kiro](https://kiro.dev) provider for [pi](https://github.com/badlogic/pi-mono). |
| 220 | [@guanyilun/pi-ads](https://www.npmjs.com/package/@guanyilun/pi-ads) | 562 | `npm install @guanyilun/pi-ads` | pi extension for querying NASA's Astrophysics Data System (ADS) |
| 221 | [@ryan_nookpi/pi-extension-codex-fast-mode](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-codex-fast-mode) | 556 | `npm install @ryan_nookpi/pi-extension-codex-fast-mode` | Codex fast mode extension for pi. |
| 222 | [@twogiants/pi-anthropic-vertex](https://www.npmjs.com/package/@twogiants/pi-anthropic-vertex) | 544 | `npm install @twogiants/pi-anthropic-vertex` | Anthropic Claude models on Google Cloud Vertex AI for pi |
| 223 | [@latentminds/pi-quotas](https://www.npmjs.com/package/@latentminds/pi-quotas) | 541 | `npm install @latentminds/pi-quotas` | Quota monitoring for the [Pi coding agent](https://github.com/mariozechner/pi). Shows remaining usage and rate limits f… |
| 224 | [pi-anycopy](https://www.npmjs.com/package/pi-anycopy) | 538 | `npm install pi-anycopy` | Pi's /tree with a live syntax-highlighted preview, ability to copy any node(s) to the clipboard, and persistence of fol… |
| 225 | [pi-openresolve](https://www.npmjs.com/package/pi-openresolve) | 537 | `npm install pi-openresolve` | Openresolve extension for pi (currently lists merge conflicts in TypeScript code) |
| 226 | [@markoonakic/pi-working-line](https://www.npmjs.com/package/@markoonakic/pi-working-line) | 536 | `npm install @markoonakic/pi-working-line` | Claude-style working message phrases and elapsed timer for Pi. |
| 227 | [@lnittman/pi-steer](https://www.npmjs.com/package/@lnittman/pi-steer) | 532 | `npm install @lnittman/pi-steer` | Steering compiler for pi — turn-by-turn decision prompts, context-aware handoff synthesis, and pickup-ready prompt pack… |
| 228 | [pi-fzf](https://www.npmjs.com/package/pi-fzf) | 531 | `npm install pi-fzf` | A [Pi](https://github.com/badlogic/pi) extension for fuzzy finding. Define commands that list candidates from any shell… |
| 229 | [@richardgill/pi-preset](https://www.npmjs.com/package/@richardgill/pi-preset) | 530 | `npm install @richardgill/pi-preset` | Pi extension for named presets that can set model, thinking level, tools, and per-preset system prompt instructions. |
| 230 | [@victor-software-house/pi-multicodex](https://www.npmjs.com/package/@victor-software-house/pi-multicodex) | 530 | `npm install @victor-software-house/pi-multicodex` | Codex account rotation extension for pi |
| 231 | [@aliou/pi-ts-aperture](https://www.npmjs.com/package/@aliou/pi-ts-aperture) | 529 | `npm install @aliou/pi-ts-aperture` | Route Pi LLM providers through Tailscale Aperture |
| 232 | [@ryan_nookpi/pi-extension-clipboard](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-clipboard) | 527 | `npm install @ryan_nookpi/pi-extension-clipboard` | Clipboard copy tool extension for pi using OSC52 escape sequences. |
| 233 | [pi-updater](https://www.npmjs.com/package/pi-updater) | 526 | `npm install pi-updater` | Codex-style auto-updater for pi. Checks for new versions on startup and prompts to install. |
| 234 | [@aliou/pi-toolchain](https://www.npmjs.com/package/@aliou/pi-toolchain) | 523 | `npm install @aliou/pi-toolchain` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-toolchain.png) |
| 235 | [@ryan_nookpi/pi-extension-auto-name](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-auto-name) | 523 | `npm install @ryan_nookpi/pi-extension-auto-name` | Auto session name extension for pi. |
| 236 | [pi-neuralwatt](https://www.npmjs.com/package/pi-neuralwatt) | 521 | `npm install pi-neuralwatt` | Neuralwatt provider for pi — auto-discovers models, energy usage tracking, and account quota in your status bar |
| 237 | [pi-phoenix](https://www.npmjs.com/package/pi-phoenix) | 519 | `npm install pi-phoenix` | Phoenix tracing extension for pi |
| 238 | [@code-fixer-23/create-pi-package](https://www.npmjs.com/package/@code-fixer-23/create-pi-package) | 517 | `npm install @code-fixer-23/create-pi-package` | Scaffold PI packages with prompts, skills, and extensions. |
| 239 | [pi-better-ctx](https://www.npmjs.com/package/pi-better-ctx) | 517 | `npm install pi-better-ctx` | Pi Coding Agent extension that routes bash, read, grep, find, and ls through better-ctx for 60-90% token savings |
| 240 | [pi-token-speed](https://www.npmjs.com/package/pi-token-speed) | 515 | `npm install pi-token-speed` | Pi extension to measure tokens per second via sliding window. |
| 241 | [tau-mirror](https://www.npmjs.com/package/tau-mirror) | 514 | `npm install tau-mirror` | Web UI that mirrors your Pi terminal session in the browser |
| 242 | [pi-double-paste](https://www.npmjs.com/package/pi-double-paste) | 514 | `npm install pi-double-paste` | Paste a long block once to collapse it, paste it again to expand it in the editor. |
| 243 | [pi-openai-switcher](https://www.npmjs.com/package/pi-openai-switcher) | 514 | `npm install pi-openai-switcher` | pi extension that switches ChatGPT Codex accounts when 5h or 1w usage limits are exhausted |
| 244 | [pi-pomodoro](https://www.npmjs.com/package/pi-pomodoro) | 514 | `npm install pi-pomodoro` | Pomodoro timer extension for pi coding agent |
| 245 | [pi-poster](https://www.npmjs.com/package/pi-poster) | 511 | `npm install pi-poster` | 🎨 Poster integration for pi — render React posters to PNG/SVG/PDF/JPG/WebP from an agent session. |
| 246 | [@vtstech/pi-soul](https://www.npmjs.com/package/@vtstech/pi-soul) | 509 | `npm install @vtstech/pi-soul` | SoulSpec extension for Pi Coding Agent - Load and manage AI agent personas |
| 247 | [pi-meridian-extension](https://www.npmjs.com/package/pi-meridian-extension) | 507 | `npm install pi-meridian-extension` | Meridian proxy provider for pi — use your Claude Max subscription through the Meridian local proxy |
| 248 | [codecartographer-pi](https://www.npmjs.com/package/codecartographer-pi) | 504 | `npm install codecartographer-pi` | CodeCartographer packaged for Pi as an extension-driven workflow wrapper. |
| 249 | [pi-clojure](https://www.npmjs.com/package/pi-clojure) | 504 | `npm install pi-clojure` | A set of Clojure development tools implemented in pure JavaScript for the [pi-coding-agent](https://github.com/badlogic… |
| 250 | [pi-ask-tool-extension](https://www.npmjs.com/package/pi-ask-tool-extension) | 503 | `npm install pi-ask-tool-extension` | Ask tool extension for pi with tabbed questioning and inline note editing |
| 251 | [pi-file-watcher](https://www.npmjs.com/package/pi-file-watcher) | 500 | `npm install pi-file-watcher` | Watch folders for #pi! comments in source files and send them as prompts to the LLM — aider-style watch mode for pi |
| 252 | [@dreki-gg/pi-modes](https://www.npmjs.com/package/@dreki-gg/pi-modes) | 500 | `npm install @dreki-gg/pi-modes` | Config-driven preset and mode switching for pi — hard-enforced tool whitelists, mode aliases, and session persistence |
| 253 | [pi-superpowers-plus](https://www.npmjs.com/package/pi-superpowers-plus) | 498 | `npm install pi-superpowers-plus` | Superpowers workflow skills adapted for pi |
| 254 | [pi-execution-time](https://www.npmjs.com/package/pi-execution-time) | 497 | `npm install pi-execution-time` | Pi extension that shows prompt execution time in the footer while the agent works. |
| 255 | [pi-multi-pass](https://www.npmjs.com/package/pi-multi-pass) | 496 | `npm install pi-multi-pass` | Multi-subscription extension for pi -- use multiple OAuth accounts per provider (Anthropic, Codex, Copilot, Gemini, Ant… |
| 256 | [@howaboua/pi-vent](https://www.npmjs.com/package/@howaboua/pi-vent) | 494 | `npm install @howaboua/pi-vent` | Pi extension for logging repeated workflow friction to VENT.md. |
| 257 | [pi-mempalace](https://www.npmjs.com/package/pi-mempalace) | 494 | `npm install pi-mempalace` | Persistent agent memory for pi — raw verbatim storage with semantic search. Never lose context again. |
| 258 | [vim-motions-pi](https://www.npmjs.com/package/vim-motions-pi) | 488 | `npm install vim-motions-pi` | A focused Vim-style editing layer for pi, with motions, text objects, visual selections, and clipboard sync |
| 259 | [@casualjim/pi-taskplane-planner](https://www.npmjs.com/package/@casualjim/pi-taskplane-planner) | 488 | `npm install @casualjim/pi-taskplane-planner` | Planner-native pi extension and CLI companion to Taskplane |
| 260 | [@vamsitalupula/pi-run](https://www.npmjs.com/package/@vamsitalupula/pi-run) | 486 | `npm install @vamsitalupula/pi-run` | Run Typescript within the Node.js context of the Pi coding agent |
| 261 | [pi-supersafety](https://www.npmjs.com/package/pi-supersafety) | 484 | `npm install pi-supersafety` | When the example safety extensions don't cover what you need, this should! Simple with approval flow and windows sandbo… |
| 262 | [@alexanderfortin/pi-token-usage](https://www.npmjs.com/package/@alexanderfortin/pi-token-usage) | 480 | `npm install @alexanderfortin/pi-token-usage` | Pi coding agent extension for analyzing token usage and cost across session files |
| 263 | [pi-show](https://www.npmjs.com/package/pi-show) | 479 | `npm install pi-show` | Display pi-coding-agent state: commands, skills, prompts, tools, themes, and model info |
| 264 | [pi-llm-as-verifier](https://www.npmjs.com/package/pi-llm-as-verifier) | 478 | `npm install pi-llm-as-verifier` | Pi skill + extension for llm-as-verifier style pairwise, repeated, criteria-decomposed candidate selection. |
| 265 | [@m64/browser-tools](https://www.npmjs.com/package/@m64/browser-tools) | 470 | `npm install @m64/browser-tools` | Minimal CDP tools for collaborative site exploration |
| 266 | [@alasano/pi-linear](https://www.npmjs.com/package/@alasano/pi-linear) | 465 | `npm install @alasano/pi-linear` | Linear integration for pi with 55+ tools, multi-workspace auth, and per-tool settings |
| 267 | [oh-my-open-pi](https://www.npmjs.com/package/oh-my-open-pi) | 463 | `npm install oh-my-open-pi` | Pi Coding Agent extension package for model routing, tools, background tasks, and safety hooks. |
| 268 | [pi-local-rag](https://www.npmjs.com/package/pi-local-rag) | 463 | `npm install pi-local-rag` | Hybrid RAG pipeline for the Pi coding agent. BM25 + local vector embeddings (Transformers.js) + auto-injection into LLM… |
| 269 | [@firstpick/pi-extension-bang-command-autocomplete](https://www.npmjs.com/package/@firstpick/pi-extension-bang-command-autocomplete) | 461 | `npm install @firstpick/pi-extension-bang-command-autocomplete` | Autocomplete for !<command> in Pi, with optional shell-history indexing. |
| 270 | [@firstpick/pi-extension-notes](https://www.npmjs.com/package/@firstpick/pi-extension-notes) | 461 | `npm install @firstpick/pi-extension-notes` | Local notes CRUD extension for Pi with optional rule-note prompt injection. |
| 271 | [@vahor/pi-hooks](https://www.npmjs.com/package/@vahor/pi-hooks) | 459 | `npm install @vahor/pi-hooks` | Run shell commands on pi lifecycle events. |
| 272 | [@ifi/pi-background-tasks](https://www.npmjs.com/package/@ifi/pi-background-tasks) | 457 | `npm install @ifi/pi-background-tasks` | Reactive background shell tasks for pi with /bg, Ctrl+Shift+B, log viewing, and agent wakeups on output. |
| 273 | [effect-mode](https://www.npmjs.com/package/effect-mode) | 454 | `npm install effect-mode` | Dynamic context resolver effects for pi |
| 274 | [cc-grammar](https://www.npmjs.com/package/cc-grammar) | 450 | `npm install cc-grammar` | Grammar checking for coding agents — Claude Code, Pi, Codex CLI, Gemini CLI |
| 275 | [pi-goal](https://www.npmjs.com/package/pi-goal) | 446 | `npm install pi-goal` | Persistent autonomous goals for pi — /goal loops until complete, paused, or budget-limited |
| 276 | [pi-manage-dirs](https://www.npmjs.com/package/pi-manage-dirs) | 442 | `npm install pi-manage-dirs` | Add external directories to Pi's workspace context with interactive path autocompletion, AGENTS.md loading, and skill r… |
| 277 | [@vahor/pi-keymap](https://www.npmjs.com/package/@vahor/pi-keymap) | 440 | `npm install @vahor/pi-keymap` | Vim-like custom keymaps for binding keyboard shortcuts to shell commands in pi. |
| 278 | [@firstpick/pi-extension-brave-search](https://www.npmjs.com/package/@firstpick/pi-extension-brave-search) | 436 | `npm install @firstpick/pi-extension-brave-search` | Brave Search tool for Pi with API key resolution from env and .env files. |
| 279 | [pi-tmux-window-name](https://www.npmjs.com/package/pi-tmux-window-name) | 436 | `npm install pi-tmux-window-name` | Automatically name tmux windows for pi coding sessions |
| 280 | [pi-usage-bars](https://www.npmjs.com/package/pi-usage-bars) | 427 | `npm install pi-usage-bars` | Production-ready /usage bars extension for pi (Codex, Claude, Z.AI, Gemini CLI, Antigravity) |
| 281 | [@krzyzanowskim/pi-profiles](https://www.npmjs.com/package/@krzyzanowskim/pi-profiles) | 422 | `npm install @krzyzanowskim/pi-profiles` | Run Pi with isolated auth profiles while sharing the standard session store. |
| 282 | [@ryan_nookpi/pi-extension-until](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-until) | 421 | `npm install @ryan_nookpi/pi-extension-until` | Until loop extension for pi. |
| 283 | [@gaodes/pi-dev-kit](https://www.npmjs.com/package/@gaodes/pi-dev-kit) | 415 | `npm install @gaodes/pi-dev-kit` | Developer toolkit for Pi — modular skills for authoring extensions, skills, prompt templates, themes, packages, and con… |
| 284 | [pk-pi-hermes-evolve](https://www.npmjs.com/package/pk-pi-hermes-evolve) | 415 | `npm install pk-pi-hermes-evolve` | Pi package inspired by Hermes Agent Self-Evolution for reflective improvement of skills, prompts, and instruction files. |
| 285 | [pi-desktop-ui](https://www.npmjs.com/package/pi-desktop-ui) | 410 | `npm install pi-desktop-ui` | A native desktop GUI for pi — full chat window with real-time streaming, markdown rendering, and workspace management |
| 286 | [@artale/pi-arena](https://www.npmjs.com/package/@artale/pi-arena) | 405 | `npm install @artale/pi-arena` | Model benchmarking with domain-aware hallucination tracking, per-model leaderboards, and task templates. Track speed, q… |
| 287 | [pi-kimi-coder](https://www.npmjs.com/package/pi-kimi-coder) | 404 | `npm install pi-kimi-coder` | Pi extension for Kimi K2 Coding plan — OAuth-based provider with kimi-for-coding model |
| 288 | [pi-mono-auto-fix](https://www.npmjs.com/package/pi-mono-auto-fix) | 404 | `npm install pi-mono-auto-fix` | Pi extension that runs language-appropriate fixers (eslint, black, prettier, ...) on files touched during a turn |
| 289 | [@sherif-fanous/pi-rtk](https://www.npmjs.com/package/@sherif-fanous/pi-rtk) | 400 | `npm install @sherif-fanous/pi-rtk` | Pi extension that routes bash commands through rtk (Rust Token Killer) for LLM token savings |
| 290 | [pi-hosts](https://www.npmjs.com/package/pi-hosts) | 398 | `npm install pi-hosts` | Run commands on remote hosts from Pi. |
| 291 | [pi-cocoindex](https://www.npmjs.com/package/pi-cocoindex) | 395 | `npm install pi-cocoindex` | Pi extension that exposes CocoIndex Code as a simple semantic search tool. |
| 292 | [pi-effort](https://www.npmjs.com/package/pi-effort) | 391 | `npm install pi-effort` | Pi extension for controlling thinking effort with model-adaptive min/max aliases |
| 293 | [pi-chutes](https://www.npmjs.com/package/pi-chutes) | 389 | `npm install pi-chutes` | Pi coding agent extension to integrate Chutes.ai as a provider. |
| 294 | [@0xkobold/pi-persona](https://www.npmjs.com/package/@0xkobold/pi-persona) | 388 | `npm install @0xkobold/pi-persona` | Persona extension for pi agents — SOUL.md, IDENTITY.md, USER.md loading, scaffolding, and system prompt injection. Insp… |
| 295 | [@aotarola/pi-exit](https://www.npmjs.com/package/@aotarola/pi-exit) | 387 | `npm install @aotarola/pi-exit` | pi package that adds /exit as an alias for /quit |
| 296 | [pi-fxxk](https://www.npmjs.com/package/pi-fxxk) | 386 | `npm install pi-fxxk` | Pi extension that turns /fxxk into a two-stage handoff command. |
| 297 | [@dmille56/openvibes](https://www.npmjs.com/package/@dmille56/openvibes) | 383 | `npm install @dmille56/openvibes` | OpenVibes Pi extension for milli-powered terminal overlays. |
| 298 | [pi-yandex-bridge](https://www.npmjs.com/package/pi-yandex-bridge) | 383 | `npm install pi-yandex-bridge` | Pi Coding Agent provider bridge for Yandex Cloud AI (YandexGPT) |
| 299 | [@browser-annotations/pi](https://www.npmjs.com/package/@browser-annotations/pi) | 381 | `npm install @browser-annotations/pi` | Select an element, add feedback, and send it to pi. |
| 300 | [@burneikis/pi-fzfp](https://www.npmjs.com/package/@burneikis/pi-fzfp) | 376 | `npm install @burneikis/pi-fzfp` | Fuzzy file picker for pi – fzf-powered @file autocomplete |
| 301 | [pi-executor](https://www.npmjs.com/package/pi-executor) | 375 | `npm install pi-executor` | Pi extension to run executor |
| 302 | [pi-super-curl](https://www.npmjs.com/package/pi-super-curl) | 372 | `npm install pi-super-curl` | HTTP request extension for pi shitty coding agent with auto-config, JWT generation, and named endpoints |
| 303 | [@ryan_nookpi/pi-extension-idle-screensaver](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-idle-screensaver) | 372 | `npm install @ryan_nookpi/pi-extension-idle-screensaver` | Standalone Pi extension package for the idle screensaver overlay. |
| 304 | [pi-persistent-term](https://www.npmjs.com/package/pi-persistent-term) | 371 | `npm install pi-persistent-term` | Integrated terminal panel for pi coding agent — persistent PTY shell, colored overlay, LLM tools |
| 305 | [pi-connect](https://www.npmjs.com/package/pi-connect) | 370 | `npm install pi-connect` | Unified OAuth and API key login for pi with an OpenCode-inspired UI. Connect 15+ providers with one /connect command. |
| 306 | [@jrryfn/pi-retune](https://www.npmjs.com/package/@jrryfn/pi-retune) | 368 | `npm install @jrryfn/pi-retune` | One-command session renamer toggle for pi (retune/restore). |
| 307 | [@badliveware/pi-pr-upstream-status](https://www.npmjs.com/package/@badliveware/pi-pr-upstream-status) | 367 | `npm install @badliveware/pi-pr-upstream-status` | Show upstream pull request status for the current branch in Pi. |
| 308 | [@carze/pi-vertex-claude](https://www.npmjs.com/package/@carze/pi-vertex-claude) | 366 | `npm install @carze/pi-vertex-claude` | Google Vertex AI Claude provider for Pi coding agent |
| 309 | [pi-codex-fast](https://www.npmjs.com/package/pi-codex-fast) | 366 | `npm install pi-codex-fast` | Fast mode toggle for OpenAI and Codex models in pi. |
| 310 | [@zcouncil/pi](https://www.npmjs.com/package/@zcouncil/pi) | 364 | `npm install @zcouncil/pi` | Pi package exposing one /chat-style zcouncil tool backed by the zcouncil SDK and bridge-aware backend. |
| 311 | [@agentapprove/pi](https://www.npmjs.com/package/@agentapprove/pi) | 363 | `npm install @agentapprove/pi` | Agent Approve extension for Pi - approve or deny AI agent tool calls from your iPhone and Apple Watch |
| 312 | [pi-model-fusion](https://www.npmjs.com/package/pi-model-fusion) | 362 | `npm install pi-model-fusion` | Pi extension for model-fusion coding tasks with automatic judging and optional merge synthesis |
| 313 | [@e9n/pi-channels](https://www.npmjs.com/package/@e9n/pi-channels) | 360 | `npm install @e9n/pi-channels` | Two-way channel extension for pi — route messages between agents and Telegram, webhooks, and custom adapters |
| 314 | [pi-startup-redraw-fix](https://www.npmjs.com/package/pi-startup-redraw-fix) | 359 | `npm install pi-startup-redraw-fix` | Pi extension that patches terminal full-clear ordering to avoid startup redraw glitches. |
| 315 | [@ryan_nookpi/pi-extension-generative-ui](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-generative-ui) | 359 | `npm install @ryan_nookpi/pi-extension-generative-ui` | Generative UI widget extension for pi. |
| 316 | [@artale/pi-pai](https://www.npmjs.com/package/@artale/pi-pai) | 358 | `npm install @artale/pi-pai` | Personal AI Infrastructure for Pi — synced with PAI v1.0.0 + Daniel Miesslers framework + 9 skill categories |
| 317 | [pi-turtle-rlm](https://www.npmjs.com/package/pi-turtle-rlm) | 357 | `npm install pi-turtle-rlm` | pi-turtle-rlm — RLM for Pi: persistent runtime, llmQuery recursion (it's models all the way down) |
| 318 | [@ryan_nookpi/pi-extension-delayed-action](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-delayed-action) | 356 | `npm install @ryan_nookpi/pi-extension-delayed-action` | Pi extension for scheduling delayed follow-up actions. |
| 319 | [pi-wtf](https://www.npmjs.com/package/pi-wtf) | 352 | `npm install pi-wtf` | Recover, rewind, or undo the last user prompt in pi after you realize you messed up. |
| 320 | [@mcowger/pi-better-messages-cache](https://www.npmjs.com/package/@mcowger/pi-better-messages-cache) | 350 | `npm install @mcowger/pi-better-messages-cache` | Pi extension: dual cache-breakpoint strategy for Anthropic models — marks both the last assistant tool_use block and th… |
| 321 | [pi-ca-leash](https://www.npmjs.com/package/pi-ca-leash) | 349 | `npm install pi-ca-leash` | Harness-aware Claude Code and Codex CLI extension for pi |
| 322 | [@artale/pi-hatch](https://www.npmjs.com/package/@artale/pi-hatch) | 349 | `npm install @artale/pi-hatch` | Digital pet companion for Pi. Hatch, feed, play with your pixel pet! |
| 323 | [pi-edit-last-message](https://www.npmjs.com/package/pi-edit-last-message) | 348 | `npm install pi-edit-last-message` | Pi extension that adds /last to restore the most recent user message into the editor |
| 324 | [@a-canary/pi-choose-wisely](https://www.npmjs.com/package/@a-canary/pi-choose-wisely) | 347 | `npm install @a-canary/pi-choose-wisely` | CHOICES.md management — clarify project vision, mission, UX, operations, architectural decisions with cascading impact… |
| 325 | [pi-openrouter-fallback](https://www.npmjs.com/package/pi-openrouter-fallback) | 343 | `npm install pi-openrouter-fallback` | Pi extension for OpenRouter model scoping and automatic switch to openrouter/free on HTTP 403 with auto-resubmit |
| 326 | [@a-canary/pi-director](https://www.npmjs.com/package/@a-canary/pi-director) | 341 | `npm install @a-canary/pi-director` | Autonomous project director for pi. Recommends actions (NEXT.md), clarifies intent (CHOICES.md), and executes TDD devel… |
| 327 | [@ibvhim/pi-scaffold](https://www.npmjs.com/package/@ibvhim/pi-scaffold) | 341 | `npm install @ibvhim/pi-scaffold` | Pi extension to scaffold a project-local .pi workspace |
| 328 | [@jaggerxtrm/pi-extensions](https://www.npmjs.com/package/@jaggerxtrm/pi-extensions) | 339 | `npm install @jaggerxtrm/pi-extensions` | Unified Pi extension entrypoint for xtrm-managed extensions |
| 329 | [pi-multiloop](https://www.npmjs.com/package/pi-multiloop) | 338 | `npm install pi-multiloop` | Autoloop/autoresearch extension for Pi with multi-lane isolation |
| 330 | [@malinamnam/pi-phone](https://www.npmjs.com/package/@malinamnam/pi-phone) | 337 | `npm install @malinamnam/pi-phone` | Phone-first remote UI extension for Pi with Tailscale-friendly access |
| 331 | [pi-cmux](https://www.npmjs.com/package/pi-cmux) | 335 | `npm install pi-cmux` | Pi package with cmux-powered terminal integrations |
| 332 | [@tribalnerd/pi-notes](https://www.npmjs.com/package/@tribalnerd/pi-notes) | 335 | `npm install @tribalnerd/pi-notes` | A Pi extension for deterministic human notes across project and global scopes. |
| 333 | [better-custom](https://www.npmjs.com/package/better-custom) | 332 | `npm install better-custom` | Pi extension package for adding and deleting custom providers through an interactive wizard. |
| 334 | [pi-agents](https://www.npmjs.com/package/pi-agents) | 332 | `npm install pi-agents` | A generic framework for agent orchestration in pi. |
| 335 | [@calesennett/pi-codex-usage](https://www.npmjs.com/package/@calesennett/pi-codex-usage) | 332 | `npm install @calesennett/pi-codex-usage` | Codex usage footer extension for pi |
| 336 | [@kylebrodeur/pi-model-router](https://www.npmjs.com/package/@kylebrodeur/pi-model-router) | 331 | `npm install @kylebrodeur/pi-model-router` | Intelligent per-turn model router extension for the pi coding agent (Enhanced Fork) |
| 337 | [@helle253/pi-peon](https://www.npmjs.com/package/@helle253/pi-peon) | 329 | `npm install @helle253/pi-peon` | Pi extension that forwards pi lifecycle events to peon-ping / OpenPeon. |
| 338 | [@gugu910/pi-slack-bridge](https://www.npmjs.com/package/@gugu910/pi-slack-bridge) | 329 | `npm install @gugu910/pi-slack-bridge` | Slack assistant integration for pi (Pinet) — multi-agent broker, thread routing, and inbox tools |
| 339 | [pi-fetch](https://www.npmjs.com/package/pi-fetch) | 328 | `npm install pi-fetch` | Efficient web fetch tool for Pi |
| 340 | [pi-hooks](https://www.npmjs.com/package/pi-hooks) | 327 | `npm install pi-hooks` | Collection of pi extensions (checkpoint, lsp, permission, ralph-loop, repeat) |
| 341 | [@codersbrew/pi-tools](https://www.npmjs.com/package/@codersbrew/pi-tools) | 322 | `npm install @codersbrew/pi-tools` | A pi package bundling CodersBrew pi extensions and skills. |
| 342 | [pi-advisor](https://www.npmjs.com/package/pi-advisor) | 320 | `npm install pi-advisor` | Pi extension package that adds a Claude-style advisor tool for strategic guidance during complex agent tasks. |
| 343 | [@josephyoung/pi-exit](https://www.npmjs.com/package/@josephyoung/pi-exit) | 319 | `npm install @josephyoung/pi-exit` | Type 'exit' to quit or use the /exit command. |
| 344 | [@khimaros/pi-webui](https://www.npmjs.com/package/@khimaros/pi-webui) | 318 | `npm install @khimaros/pi-webui` | a simple, standalone webui for pi.dev |
| 345 | [@patriceckhart/pi-chrome-operator](https://www.npmjs.com/package/@patriceckhart/pi-chrome-operator) | 310 | `npm install @patriceckhart/pi-chrome-operator` | Chat with pi agent to control your browser — summarize pages, fill forms, check mail, and save routines. |
| 346 | [pi-nasty-verbs](https://www.npmjs.com/package/pi-nasty-verbs) | 308 | `npm install pi-nasty-verbs` | Replaces Pi's default 'Working...' message with some better words. |
| 347 | [@companionai/bohr](https://www.npmjs.com/package/@companionai/bohr) | 306 | `npm install @companionai/bohr` | Research-first CLI agent built on Pi and alphaXiv |
| 348 | [@gtheys/pi-per-commit-spend](https://www.npmjs.com/package/@gtheys/pi-per-commit-spend) | 304 | `npm install @gtheys/pi-per-commit-spend` | Pi extension that tracks AI spend per git commit across sessions |
| 349 | [pi-usage](https://www.npmjs.com/package/pi-usage) | 304 | `npm install pi-usage` | /usage command for pi – shows current provider's daily & weekly limits |
| 350 | [pi-scheduled-tasks](https://www.npmjs.com/package/pi-scheduled-tasks) | 303 | `npm install pi-scheduled-tasks` | A pi extension for scheduled prompts, recurring checks, and prompt-executable slash commands |
| 351 | [@sincspecv/pi-chutes](https://www.npmjs.com/package/@sincspecv/pi-chutes) | 301 | `npm install @sincspecv/pi-chutes` | pi extension that adds chutes.ai as a model provider |
| 352 | [pi-brave-search](https://www.npmjs.com/package/pi-brave-search) | 300 | `npm install pi-brave-search` | Token-efficient Brave web search + AI grounding extension for Pi, with optional full-page Markdown content extraction |
| 353 | [@saadjs/pi-status](https://www.npmjs.com/package/@saadjs/pi-status) | 299 | `npm install @saadjs/pi-status` | Non-interactive /status command for pi (Codex) |
| 354 | [pi-red-green](https://www.npmjs.com/package/pi-red-green) | 298 | `npm install pi-red-green` | A Pi extension that enforces Test-Driven Development (RED-GREEN-REFACTOR) discipline during agent coding sessions. |
| 355 | [pi-copilot-queue](https://www.npmjs.com/package/pi-copilot-queue) | 297 | `npm install pi-copilot-queue` | Pi extension that queues ask_user responses for Copilot-style workflows |
| 356 | [pi-html-long-answer-extension](https://www.npmjs.com/package/pi-html-long-answer-extension) | 297 | `npm install pi-html-long-answer-extension` | Long-answer HTML export extension for Oh My Pi and Pi. |
| 357 | [pi-agent-selector](https://www.npmjs.com/package/pi-agent-selector) | 293 | `npm install pi-agent-selector` | Pi extension that lets users activate local agent markdown files as the current session profile. |
| 358 | [@artale/pi-procs](https://www.npmjs.com/package/@artale/pi-procs) | 291 | `npm install @artale/pi-procs` | Background process manager for Pi. Start dev servers, watch builds, tail logs — without blocking the agent. |
| 359 | [pi-evaluate](https://www.npmjs.com/package/pi-evaluate) | 287 | `npm install pi-evaluate` | Adversarial post-execute evaluation skill for pi — verifies implementation against contract, GAN-inspired |
| 360 | [pi-buddy](https://www.npmjs.com/package/pi-buddy) | 285 | `npm install pi-buddy` | An animated ASCII companion that lives beside your Pi input box. Hatches buddies with unique species, stats, and person… |
| 361 | [@kmiyh/pi-codex-plan-limits](https://www.npmjs.com/package/@kmiyh/pi-codex-plan-limits) | 285 | `npm install @kmiyh/pi-codex-plan-limits` | Pi extension that shows live Codex plan usage: remaining 5h and weekly limits, reset times, and cached fallback snapsho… |
| 362 | [@dhruv2mars/pi-queue](https://www.npmjs.com/package/@dhruv2mars/pi-queue) | 284 | `npm install @dhruv2mars/pi-queue` | Advanced FIFO message queue and steering for pi — queue follow-ups while the agent works |
| 363 | [pi-kilocode](https://www.npmjs.com/package/pi-kilocode) | 284 | `npm install pi-kilocode` | Kilo Code provider extension for pi |
| 364 | [@ryan_nookpi/pi-extension-claude-mcp-bridge](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-claude-mcp-bridge) | 283 | `npm install @ryan_nookpi/pi-extension-claude-mcp-bridge` | Bridge Claude Code MCP server configs into pi — auto-discovers tools from stdio/sse/http MCP servers. |
| 365 | [pi-generative-ui](https://www.npmjs.com/package/pi-generative-ui) | 281 | `npm install pi-generative-ui` | Generative UI for pi — render interactive HTML/SVG widgets in native macOS windows via Glimpse |
| 366 | [pi-extension-raptor-mini](https://www.npmjs.com/package/pi-extension-raptor-mini) | 279 | `npm install pi-extension-raptor-mini` | pi extension that adds GitHub Copilot's Raptor Mini (oswe-vscode-prime) model to pi's github-copilot provider. |
| 367 | [@paulmupeters/pi-brainstorm](https://www.npmjs.com/package/@paulmupeters/pi-brainstorm) | 278 | `npm install @paulmupeters/pi-brainstorm` | A conversation-only brainstorm mode extension for pi |
| 368 | [pi-edit-hooks](https://www.npmjs.com/package/pi-edit-hooks) | 277 | `npm install pi-edit-hooks` | Code quality hooks for the pi coding agent — runs syntax checks on edit and format/lint/typecheck at turn end |
| 369 | [omniroute-pi-extension](https://www.npmjs.com/package/omniroute-pi-extension) | 277 | `npm install omniroute-pi-extension` | Pi Coding Agent extension for OmniRoute — manage combos, browse providers, and see which model actually served each res… |
| 370 | [@jarcelao/pi-exa-api](https://www.npmjs.com/package/@jarcelao/pi-exa-api) | 276 | `npm install @jarcelao/pi-exa-api` | Web search and content fetching for pi via the Exa API |
| 371 | [@badliveware/pi-model-catalog](https://www.npmjs.com/package/@badliveware/pi-model-catalog) | 275 | `npm install @badliveware/pi-model-catalog` | Expose Pi model listings and selection guidance as an agent tool. |
| 372 | [pi-git-commands-extension](https://www.npmjs.com/package/pi-git-commands-extension) | 274 | `npm install pi-git-commands-extension` | Shareable Pi package that adds /commit, /push, /commit-and-push, and /commit-pr git commands. |
| 373 | [pi-cache-ttl-config](https://www.npmjs.com/package/pi-cache-ttl-config) | 273 | `npm install pi-cache-ttl-config` | Dynamically switch the Anthropic prompt-cache TTL between 5m and 1h mid-conversation in the pi coding agent |
| 374 | [@noahsaso/pi-remote](https://www.npmjs.com/package/@noahsaso/pi-remote) | 271 | `npm install @noahsaso/pi-remote` | Remote terminal access for pi via WebSocket and browser, with Tailscale integration |
| 375 | [pi-supacode](https://www.npmjs.com/package/pi-supacode) | 271 | `npm install pi-supacode` | Pi extension that reports agent lifecycle hooks to Supacode via Unix domain socket |
| 376 | [@baochunli/pi-collaborating-agents](https://www.npmjs.com/package/@baochunli/pi-collaborating-agents) | 271 | `npm install @baochunli/pi-collaborating-agents` | Collaborative multi-agent messaging and remote focus overlay extension for Pi |
| 377 | [pi-notifier](https://www.npmjs.com/package/pi-notifier) | 267 | `npm install pi-notifier` | Lightweight macOS desktop notifications for pi when waiting for input or decision. |
| 378 | [pi-code-rollback](https://www.npmjs.com/package/pi-code-rollback) | 266 | `npm install pi-code-rollback` | Claude Code-style restore for pi with automatic git-backed code snapshots and restore mode selection |
| 379 | [pi-multifix](https://www.npmjs.com/package/pi-multifix) | 265 | `npm install pi-multifix` | Pi extension for multi-repo bugfixing — ClickUp to MR in one command |
| 380 | [pi-sync-suite](https://www.npmjs.com/package/pi-sync-suite) | 263 | `npm install pi-sync-suite` | Cross-platform Pi extension for config sync, chat exports, safe cleanup, and native TUI controls. |
| 381 | [@miclivs/pi-psst](https://www.npmjs.com/package/@miclivs/pi-psst) | 262 | `npm install @miclivs/pi-psst` | Pi extension that injects psst vault secrets into bash and scrubs them from output |
| 382 | [pi-package-search](https://www.npmjs.com/package/pi-package-search) | 262 | `npm install pi-package-search` | Discover and install Pi packages from npm directly inside Pi. |
| 383 | [safe-coder](https://www.npmjs.com/package/safe-coder) | 261 | `npm install safe-coder` | Safe Coder is a configuration package for the [`pi` coding agent](https://www.npmjs.com/package/@mariozechner/pi-coding… |
| 384 | [@dreki-gg/pi-questionnaire](https://www.npmjs.com/package/@dreki-gg/pi-questionnaire) | 261 | `npm install @dreki-gg/pi-questionnaire` | Tool-first questionnaire flow for pi with shared tabbed TUI and custom rendering |
| 385 | [pi-end-turn](https://www.npmjs.com/package/pi-end-turn) | 261 | `npm install pi-end-turn` | Pi extension for ending the agent's turn using tool |
| 386 | [pi-snake-timepass](https://www.npmjs.com/package/pi-snake-timepass) | 260 | `npm install pi-snake-timepass` | A centered Snake game that pops up automatically while Pi is working. Features 'Hard' and 'Easy' modes, adjustable spee… |
| 387 | [pi-import-claude-history](https://www.npmjs.com/package/pi-import-claude-history) | 259 | `npm install pi-import-claude-history` | Pi coding agent extension: import Claude Code JSONL sessions into Pi session format |
| 388 | [pi-current-pr](https://www.npmjs.com/package/pi-current-pr) | 259 | `npm install pi-current-pr` | Pi extension that shows the current GitHub pull request in a widget |
| 389 | [pi-thinking-level](https://www.npmjs.com/package/pi-thinking-level) | 257 | `npm install pi-thinking-level` | A tiny pi package that adds a /thinking command to set and persist pi's default thinking level. |
| 390 | [pi-timer](https://www.npmjs.com/package/pi-timer) | 256 | `npm install pi-timer` | Pi package that shows a per-run elapsed timer inline in the footer. |
| 391 | [@danchamorro/pi-agent-modes](https://www.npmjs.com/package/@danchamorro/pi-agent-modes) | 254 | `npm install @danchamorro/pi-agent-modes` | Agent modes for pi - switch between code, architect, debug, ask, and review modes with enforced tool and bash restricti… |
| 392 | [pi-ui-minimal](https://www.npmjs.com/package/pi-ui-minimal) | 254 | `npm install pi-ui-minimal` | Minimal UI extension for Pi that hides footer info and removes dashed borders around the user input for a cleaner TUI e… |
| 393 | [pi-runtime-extensions](https://www.npmjs.com/package/pi-runtime-extensions) | 254 | `npm install pi-runtime-extensions` | Dynamically load/unload extensions at runtime (inside session) for Pi Coding Agent with /ext:load, /ext:list, and /ext:… |
| 394 | [@artale/pi-git-graph](https://www.npmjs.com/package/@artale/pi-git-graph) | 253 | `npm install @artale/pi-git-graph` | Visual git history — ASCII commit graph, branch map, contributor stats |
| 395 | [expert-ai](https://www.npmjs.com/package/expert-ai) | 252 | `npm install expert-ai` | Domain-Specific Intelligence for Architecture, Engineering & Construction |
| 396 | [@ogulcancelik/pi-ghost](https://www.npmjs.com/package/@ogulcancelik/pi-ghost) | 250 | `npm install @ogulcancelik/pi-ghost` | Like /btw, but as a native ghost overlay for pi |
| 397 | [@byteowlz/pi-auto-rename](https://www.npmjs.com/package/@byteowlz/pi-auto-rename) | 250 | `npm install @byteowlz/pi-auto-rename` | Auto-Rename Extension for pi |
| 398 | [pi-fast-mode](https://www.npmjs.com/package/pi-fast-mode) | 250 | `npm install pi-fast-mode` | Persistent fast-mode toggle for pi that injects service_tier for configured provider/model pairs. |
| 399 | [pi-codesight](https://www.npmjs.com/package/pi-codesight) | 249 | `npm install pi-codesight` | CodeSight repository-context tools for Pi. |
| 400 | [pi-markitdown](https://www.npmjs.com/package/pi-markitdown) | 247 | `npm install pi-markitdown` | pi extension wrapping markitdown CLI |
| 401 | [pi-modes](https://www.npmjs.com/package/pi-modes) | 247 | `npm install pi-modes` | Switchable agent modes for pi-coding-agent (ask, edit, plan, reviewer) |
| 402 | [pi-collapse-tools](https://www.npmjs.com/package/pi-collapse-tools) | 245 | `npm install pi-collapse-tools` | Pi extension that hides tool output by default (expand with Cmd+O / Ctrl+O). |
| 403 | [pi-claude-tasks](https://www.npmjs.com/package/pi-claude-tasks) | 245 | `npm install pi-claude-tasks` | Browse and manage Claude Code tasks from Pi |
| 404 | [@aboutlo/pi-smart-edit](https://www.npmjs.com/package/@aboutlo/pi-smart-edit) | 244 | `npm install @aboutlo/pi-smart-edit` | A [pi](https://github.com/badlogic/pi) extension that overrides the built-in `edit` tool with whitespace-tolerant match… |
| 405 | [pi-dispatch](https://www.npmjs.com/package/pi-dispatch) | 244 | `npm install pi-dispatch` | Dispatch requests across multiple ChatGPT Codex OAuth accounts for pi |
| 406 | [@pi-lab/webfetch](https://www.npmjs.com/package/@pi-lab/webfetch) | 244 | `npm install @pi-lab/webfetch` | WebFetch tool extension for pi coding agent |
| 407 | [pi-workbench](https://www.npmjs.com/package/pi-workbench) | 243 | `npm install pi-workbench` | Terminal workbench for switching between live Pi sessions using tmux. |
| 408 | [pi-llm-council](https://www.npmjs.com/package/pi-llm-council) | 242 | `npm install pi-llm-council` | Multi-model LLM Council for adversarial debate, cross-validation, and synthesized decision-making via pi-teams |
| 409 | [pi-go-bars](https://www.npmjs.com/package/pi-go-bars) | 241 | `npm install pi-go-bars` | Opencode Go plan usage bars for pi — rolling, weekly, and monthly windows in the footer |
| 410 | [pi-package-template](https://www.npmjs.com/package/pi-package-template) | 240 | `npm install pi-package-template` | A minimal starter template for building pi packages |
| 411 | [@benvargas/pi-openai-fast](https://www.npmjs.com/package/@benvargas/pi-openai-fast) | 239 | `npm install @benvargas/pi-openai-fast` | OpenAI fast mode toggle for pi - Enables priority service tier on supported GPT-5.4 models |
| 412 | [pi-linear](https://www.npmjs.com/package/pi-linear) | 239 | `npm install pi-linear` | Pi extension for Linear issue tracking — search, create, update issues, manage teams, and track work from your terminal. |
| 413 | [@agnishc/edb-herald](https://www.npmjs.com/package/@agnishc/edb-herald) | 238 | `npm install @agnishc/edb-herald` | Pi extension: git commit and PR agent with approval gates |
| 414 | [pi-thinking-timer](https://www.npmjs.com/package/pi-thinking-timer) | 237 | `npm install pi-thinking-timer` | Pi extension that shows a live timer next to collapsed Thinking blocks. |
| 415 | [@ifi/pi-remote-tailscale](https://www.npmjs.com/package/@ifi/pi-remote-tailscale) | 236 | `npm install @ifi/pi-remote-tailscale` | Pi extension for secure remote session sharing with Tailscale URLs, QR codes, and TUI status widgets. |
| 416 | [@baggiiiie/pi-codex-usage](https://www.npmjs.com/package/@baggiiiie/pi-codex-usage) | 236 | `npm install @baggiiiie/pi-codex-usage` | A pi package that adds the `/codex-usage` command and status widget. |
| 417 | [@ifi/pi-extension-adaptive-routing](https://www.npmjs.com/package/@ifi/pi-extension-adaptive-routing) | 235 | `npm install @ifi/pi-extension-adaptive-routing` | Optional adaptive and delegated routing extension for pi. |
| 418 | [pi-onecli-extension](https://www.npmjs.com/package/pi-onecli-extension) | 235 | `npm install pi-onecli-extension` | OneCLI gateway integration for pi |
| 419 | [@pi-lab/env](https://www.npmjs.com/package/@pi-lab/env) | 235 | `npm install @pi-lab/env` | Global environment loader extension for pi coding agent |
| 420 | [@e9n/pi-webserver](https://www.npmjs.com/package/@e9n/pi-webserver) | 234 | `npm install @e9n/pi-webserver` | Shared HTTP server for pi — authenticated web host with extension mount points |
| 421 | [@siddr/pi-cmux-status](https://www.npmjs.com/package/@siddr/pi-cmux-status) | 234 | `npm install @siddr/pi-cmux-status` | cmux sidebar status extension for pi |
| 422 | [@agnishc/edb-usage-stats](https://www.npmjs.com/package/@agnishc/edb-usage-stats) | 232 | `npm install @agnishc/edb-usage-stats` | Pi extension: /usage command showing token rates, reset timers, and live provider status |
| 423 | [pi-caffeinated](https://www.npmjs.com/package/pi-caffeinated) | 232 | `npm install pi-caffeinated` | Pi extension that toggles a cross-platform keep-awake process with a centered coffee break modal. |
| 424 | [pi-dj](https://www.npmjs.com/package/pi-dj) | 231 | `npm install pi-dj` | AI music suite for pi — YouTube, global radio (30k+ stations), Suno, Lyria AI, SoundCloud/Bandcamp, mix, trim, BPM. Win… |
| 425 | [pi-toasty](https://www.npmjs.com/package/pi-toasty) | 231 | `npm install pi-toasty` | Pi package that shows desktop toast notifications when pi is ready for input. |
| 426 | [flexoki-pi-theme](https://www.npmjs.com/package/flexoki-pi-theme) | 230 | `npm install flexoki-pi-theme` | Flexoki color scheme theme for pi |
| 427 | [pi-live-terminal](https://www.npmjs.com/package/pi-live-terminal) | 230 | `npm install pi-live-terminal` | Pi extension that runs commands in tmux and displays a live terminal widget. |
| 428 | [pi-cache-timer](https://www.npmjs.com/package/pi-cache-timer) | 230 | `npm install pi-cache-timer` | Footer cache timer extension for Pi |
| 429 | [@sirsyorrz/pi-statusline](https://www.npmjs.com/package/@sirsyorrz/pi-statusline) | 229 | `npm install @sirsyorrz/pi-statusline` | Pi statusline extension — clean one-line footer with context usage and Anthropic rate-limit utilization. |
| 430 | [@gnoviawan/pi-compact-tool-preview](https://www.npmjs.com/package/@gnoviawan/pi-compact-tool-preview) | 228 | `npm install @gnoviawan/pi-compact-tool-preview` | Compact single-line renderers for Pi built-in tools. |
| 431 | [pi-model-profiles](https://www.npmjs.com/package/pi-model-profiles) | 228 | `npm install pi-model-profiles` | Pi extension for saving, importing, and applying agent model frontmatter profiles. |
| 432 | [pi-headroom](https://www.npmjs.com/package/pi-headroom) | 228 | `npm install pi-headroom` | Transparent LLM context compression for Pi using Headroom |
| 433 | [@ogulcancelik/pi-tmux](https://www.npmjs.com/package/@ogulcancelik/pi-tmux) | 228 | `npm install @ogulcancelik/pi-tmux` | Tmux pane management for pi. Run dev servers, watchers, and long-running processes in named panes without blocking the… |
| 434 | [pi-openai-service-tier](https://www.npmjs.com/package/pi-openai-service-tier) | 227 | `npm install pi-openai-service-tier` | Cost-correct OpenAI service tier / fast mode extension for pi |
| 435 | [@brain0pia/pi-ultrathink](https://www.npmjs.com/package/@brain0pia/pi-ultrathink) | 226 | `npm install @brain0pia/pi-ultrathink` | Pi extension for /ultrathink review loops with conditional git commits |
| 436 | [@agnishc/edb-explore](https://www.npmjs.com/package/@agnishc/edb-explore) | 225 | `npm install @agnishc/edb-explore` | Pi extension: explore_dir tool — sub-agent directory search that keeps results out of main context |
| 437 | [pi-semantic](https://www.npmjs.com/package/pi-semantic) | 225 | `npm install pi-semantic` | Semantic density modes + workflow helpers for Pi (toggle via /sem). |
| 438 | [@tmustier/pi-tab-status](https://www.npmjs.com/package/@tmustier/pi-tab-status) | 224 | `npm install @tmustier/pi-tab-status` | Terminal tab status indicators for Pi sessions. |
| 439 | [pi-rustdex](https://www.npmjs.com/package/pi-rustdex) | 224 | `npm install pi-rustdex` | Pi extension for RustDex - universal code indexer and semantic search |
| 440 | [@siddr/pi-status](https://www.npmjs.com/package/@siddr/pi-status) | 223 | `npm install @siddr/pi-status` | Status widget extension for pi |
| 441 | [@ifi/pi-pretty](https://www.npmjs.com/package/@ifi/pi-pretty) | 222 | `npm install @ifi/pi-pretty` | Pretty terminal output for pi — syntax-highlighted file reads, colored bash output, tree-view directory listings, and m… |
| 442 | [@agnishc/edb-diff-files](https://www.npmjs.com/package/@agnishc/edb-diff-files) | 221 | `npm install @agnishc/edb-diff-files` | Pi extension: live widget tracking files changed this session with an inline diff viewer |
| 443 | [@ryan_nookpi/pi-extension-setup-sh](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-setup-sh) | 221 | `npm install @ryan_nookpi/pi-extension-setup-sh` | Auto-run setup.sh extension for pi. |
| 444 | [pi-nvim](https://www.npmjs.com/package/pi-nvim) | 221 | `npm install pi-nvim` | Bridge between pi coding agent and Neovim |
| 445 | [pi-compass](https://www.npmjs.com/package/pi-compass) | 221 | `npm install pi-compass` | A Pi extension that generates structured codebase maps and interactive code tours for agent onboarding. |
| 446 | [@fgladisch/pi-user-select](https://www.npmjs.com/package/@fgladisch/pi-user-select) | 220 | `npm install @fgladisch/pi-user-select` | Multiple-choice user selection tool extension for Pi |
| 447 | [agent-booster-pack-contract-first](https://www.npmjs.com/package/agent-booster-pack-contract-first) | 219 | `npm install agent-booster-pack-contract-first` | Interface Design Gate for Pi plus contract-first skill: pause and require human approval of contract/API shape before i… |
| 448 | [@agnishc/edb-agent-steer](https://www.npmjs.com/package/@agnishc/edb-agent-steer) | 218 | `npm install @agnishc/edb-agent-steer` | Pi extension: intercepts mid-turn messages with a steer / queue / discard / edit prompt |
| 449 | [pi-ask-mode](https://www.npmjs.com/package/pi-ask-mode) | 218 | `npm install pi-ask-mode` | Read-only mode for safe code analysis in pi |
| 450 | [nowledge-mem-pi](https://www.npmjs.com/package/nowledge-mem-pi) | 218 | `npm install nowledge-mem-pi` | Cross-tool memory for Pi. Recall past decisions, search knowledge from every AI tool, and save what matters. |
| 451 | [pi-tutor](https://www.npmjs.com/package/pi-tutor) | 218 | `npm install pi-tutor` | A stateful tutor package for pi that adds hint-first, track-aware teaching workflows. |
| 452 | [@ifi/pi-bash-live-view](https://www.npmjs.com/package/@ifi/pi-bash-live-view) | 216 | `npm install @ifi/pi-bash-live-view` | PTY-backed live bash rendering for pi with a real-time terminal widget and /bash-pty command. |
| 453 | [@fgladisch/pi-bash-approval](https://www.npmjs.com/package/@fgladisch/pi-bash-approval) | 213 | `npm install @fgladisch/pi-bash-approval` | Interactive allow-list guard for Pi bash tool calls |
| 454 | [pi-stock-ticker](https://www.npmjs.com/package/pi-stock-ticker) | 213 | `npm install pi-stock-ticker` | Real-time stock watchlist & scrolling ticker for pi coding agent. Supports US stocks and A-shares. |
| 455 | [@tmustier/pi-agent-guidance](https://www.npmjs.com/package/@tmustier/pi-agent-guidance) | 213 | `npm install @tmustier/pi-agent-guidance` | Loads provider-specific context files (CLAUDE.md, CODEX.md, GEMINI.md) based on current model. |
| 456 | [pi-universal-view](https://www.npmjs.com/package/pi-universal-view) | 212 | `npm install pi-universal-view` | Pi extension that converts any file to markdown via markit |
| 457 | [@the-agency/pi-hashline-edit](https://www.npmjs.com/package/@the-agency/pi-hashline-edit) | 212 | `npm install @the-agency/pi-hashline-edit` | Pi extension providing hashline-based file reading and editing with staleness-checked line addressing. |
| 458 | [@nhalm/pi-specd](https://www.npmjs.com/package/@nhalm/pi-specd) | 210 | `npm install @nhalm/pi-specd` | Spec-driven development workflow for pi |
| 459 | [@artale/pi-comply](https://www.npmjs.com/package/@artale/pi-comply) | 210 | `npm install @artale/pi-comply` | EU AI Act compliance toolkit for pi. Risk tier classification, audit trail, deadline tracking, checklist generation. Th… |
| 460 | [@mrclrchtr/supi](https://www.npmjs.com/package/@mrclrchtr/supi) | 210 | `npm install @mrclrchtr/supi` | SuPi (Super Pi) — The opinionated way to extend PI |
| 461 | [@ogulcancelik/pi-spar](https://www.npmjs.com/package/@ogulcancelik/pi-spar) | 209 | `npm install @ogulcancelik/pi-spar` | Agent-to-agent sparring for pi. Back-and-forth conversations with peer AI models for debugging, design review, and chal… |
| 462 | [@carlosgtrz/pi-ansi-tools](https://www.npmjs.com/package/@carlosgtrz/pi-ansi-tools) | 207 | `npm install @carlosgtrz/pi-ansi-tools` | Pi extension with read_ansi, write_ansi, and edit_ansi tools for legacy-encoded source files. |
| 463 | [@firstpick/pi-extension-stats](https://www.npmjs.com/package/@firstpick/pi-extension-stats) | 207 | `npm install @firstpick/pi-extension-stats` | Token and cost usage analytics command for Pi session history. |
| 464 | [@odradekk/vera-ui](https://www.npmjs.com/package/@odradekk/vera-ui) | 206 | `npm install @odradekk/vera-ui` | Session UI extensions for Vera agent (banner, status line, thinking cycle) |
| 465 | [@the-agency/pi-spec-kit](https://www.npmjs.com/package/@the-agency/pi-spec-kit) | 204 | `npm install @the-agency/pi-spec-kit` | A [Pi](https://github.com/mariozechner/pi-coding-agent) package that integrates GitHub's [Spec Kit](https://github.com/… |
| 466 | [@aedge-io/typed-clone](https://www.npmjs.com/package/@aedge-io/typed-clone) | 204 | `npm install @aedge-io/typed-clone` | Type-safe, performant and extensible clone implementation |
| 467 | [@the-agency/pi-tokenshrink](https://www.npmjs.com/package/@the-agency/pi-tokenshrink) | 204 | `npm install @the-agency/pi-tokenshrink` | Reduce token usage of a Pi agent's conversation context using TokenShrink. |
| 468 | [hive-agent](https://www.npmjs.com/package/hive-agent) | 204 | `npm install hive-agent` | Hive — Lightweight Feature Tracker for AI Coding Agents. Built on Pi. |
| 469 | [@e9n/pi-cron](https://www.npmjs.com/package/@e9n/pi-cron) | 203 | `npm install @e9n/pi-cron` | Cron scheduler extension for pi — schedule recurring prompts as isolated subprocesses |
| 470 | [@artale/pi-wordle](https://www.npmjs.com/package/@artale/pi-wordle) | 203 | `npm install @artale/pi-wordle` | Daily Wordle in the terminal. 6 guesses, color-coded feedback, stats tracking. |
| 471 | [@dreki-gg/pi-plan-mode](https://www.npmjs.com/package/@dreki-gg/pi-plan-mode) | 202 | `npm install @dreki-gg/pi-plan-mode` | Two-phase planning workflow for pi — plan with claude-opus-4-6:medium, execute with gpt-5.5:low, with .plans/ file-base… |
| 472 | [@artale/pi-design](https://www.npmjs.com/package/@artale/pi-design) | 201 | `npm install @artale/pi-design` | AI design tool for Pi. Generate UIs, landing pages, slides from prompts. |
| 473 | [@firstpick/pi-extension-reverse-last](https://www.npmjs.com/package/@firstpick/pi-extension-reverse-last) | 201 | `npm install @firstpick/pi-extension-reverse-last` | Session-aware undo for Pi write/edit tool changes via /reverse-last. |
| 474 | [@stenn/tps-monitor](https://www.npmjs.com/package/@stenn/tps-monitor) | 200 | `npm install @stenn/tps-monitor` | Minimal tokens-per-second display in pi footer |
| 475 | [@parallel-web/pi-extension](https://www.npmjs.com/package/@parallel-web/pi-extension) | 199 | `npm install @parallel-web/pi-extension` | Add web search and web fetch to your pi agent |
| 476 | [pi-insights](https://www.npmjs.com/package/pi-insights) | 199 | `npm install pi-insights` | AI coding assistant session analytics and insights for Pi |
| 477 | [@artale/pi-eval](https://www.npmjs.com/package/@artale/pi-eval) | 198 | `npm install @artale/pi-eval` | Agent evaluation harness. Judge sessions on success, tool usage, efficiency, methodology. Inspired by opencc. |
| 478 | [@siddr/pi-fetch-url](https://www.npmjs.com/package/@siddr/pi-fetch-url) | 198 | `npm install @siddr/pi-fetch-url` | Readable content fetch tool extension for pi |
| 479 | [@siddr/pi-openai-params](https://www.npmjs.com/package/@siddr/pi-openai-params) | 198 | `npm install @siddr/pi-openai-params` | Combined OpenAI fast mode and verbosity settings for pi |
| 480 | [@artale/pi-cost](https://www.npmjs.com/package/@artale/pi-cost) | 196 | `npm install @artale/pi-cost` | LLM cost tracker — track spend per session, model, and project |
| 481 | [@jamesjfoong/pi-ollama](https://www.npmjs.com/package/@jamesjfoong/pi-ollama) | 195 | `npm install @jamesjfoong/pi-ollama` | Auto-discover and register Ollama models in pi. No more manual models.json editing. |
| 482 | [@siesing/pi-shortcuts](https://www.npmjs.com/package/@siesing/pi-shortcuts) | 193 | `npm install @siesing/pi-shortcuts` | Shortcut overlay extension for Pi coding-agent |
| 483 | [pi-beads-extension](https://www.npmjs.com/package/pi-beads-extension) | 193 | `npm install pi-beads-extension` | Pi package that brings Beads-style task tracking commands and workflow context to pi. |
| 484 | [pi-copilot-usage](https://www.npmjs.com/package/pi-copilot-usage) | 191 | `npm install pi-copilot-usage` | GitHub Copilot premium request usage in the pi status bar |
| 485 | [@treentity/pi-imessage](https://www.npmjs.com/package/@treentity/pi-imessage) | 191 | `npm install @treentity/pi-imessage` | iMessage channel for Pi |
| 486 | [@zhangweiii/pi-status-line](https://www.npmjs.com/package/@zhangweiii/pi-status-line) | 189 | `npm install @zhangweiii/pi-status-line` | Natural-language configurable status line extension for pi. |
| 487 | [@claaslange/pi-progress-bar](https://www.npmjs.com/package/@claaslange/pi-progress-bar) | 189 | `npm install @claaslange/pi-progress-bar` | Native terminal progress indicator support for pi via OSC 9;4 |
| 488 | [@artale/pi-http](https://www.npmjs.com/package/@artale/pi-http) | 188 | `npm install @artale/pi-http` | Quick HTTP client for API testing. /http GET url \| POST url -d body |
| 489 | [pi-monitor](https://www.npmjs.com/package/pi-monitor) | 187 | `npm install pi-monitor` | Pi extension for running background processes with live output in a native floating window |
| 490 | [@artale/pi-scaffold](https://www.npmjs.com/package/@artale/pi-scaffold) | 187 | `npm install @artale/pi-scaffold` | Generate new pi extension projects from a template. /scaffold my-extension 'Description here' |
| 491 | [pi-enclave](https://www.npmjs.com/package/pi-enclave) | 187 | `npm install pi-enclave` | VM-isolated sandbox for pi with automatic secret protection · from yapp |
| 492 | [@burneikis/pi-nolo](https://www.npmjs.com/package/@burneikis/pi-nolo) | 187 | `npm install @burneikis/pi-nolo` | No-YOLO mode for pi — gates write, edit, and bash tool calls behind user confirmation with configurable safe-command al… |
| 493 | [pi-perplexity](https://www.npmjs.com/package/pi-perplexity) | 185 | `npm install pi-perplexity` | Perplexity web search for pi — uses your Pro/Max subscription, no API credits needed |
| 494 | [pi-ghostty](https://www.npmjs.com/package/pi-ghostty) | 184 | `npm install pi-ghostty` | Ghostty terminal integration for Pi — dynamic title bar, progress indicators, and error states |
| 495 | [pi-clinical-trial-finder](https://www.npmjs.com/package/pi-clinical-trial-finder) | 182 | `npm install pi-clinical-trial-finder` | Native Pi package for searching WHO clinical trials. For informational and research use only; not medical advice. |
| 496 | [pi-shell-completions](https://www.npmjs.com/package/pi-shell-completions) | 182 | `npm install pi-shell-completions` | Pi extension that adds native shell completions (fish/zsh/bash) to ! and !! bash mode commands |
| 497 | [pi-openai-codex-status](https://www.npmjs.com/package/pi-openai-codex-status) | 182 | `npm install pi-openai-codex-status` | Pi extension that shows OpenAI usage for hourly and weekly subscription limits like Codex with a /status command. |
| 498 | [@davidorex/pi-jit-agents](https://www.npmjs.com/package/@davidorex/pi-jit-agents) | 181 | `npm install @davidorex/pi-jit-agents` | Agent spec compilation and in-process dispatch runtime — the package that owns everything between 'I have a spec' and '… |
| 499 | [@e9n/pi-logger](https://www.npmjs.com/package/@e9n/pi-logger) | 180 | `npm install @e9n/pi-logger` | Event bus logger for pi — writes structured JSONL logs from bus events |
| 500 | [@artale/pi-deps](https://www.npmjs.com/package/@artale/pi-deps) | 179 | `npm install @artale/pi-deps` | Dependency health scanner. Outdated, heavy, licenses, dupes, tree. |
| 501 | [pi-yank](https://www.npmjs.com/package/pi-yank) | 179 | `npm install pi-yank` | Lightweight /yank extension for pi that copies the last assistant message or a selected code block. |
| 502 | [@odradekk/vera-chimeras](https://www.npmjs.com/package/@odradekk/vera-chimeras) | 178 | `npm install @odradekk/vera-chimeras` | Chimera workflow engine for Vera agent |
| 503 | [@gotgenes/pi-autoformat](https://www.npmjs.com/package/@gotgenes/pi-autoformat) | 177 | `npm install @gotgenes/pi-autoformat` | Pi extension package for prompt-end auto-formatting |
| 504 | [@artale/pi-bench](https://www.npmjs.com/package/@artale/pi-bench) | 177 | `npm install @artale/pi-bench` | Microbenchmark runner. Compare code performance. |
| 505 | [@artale/pi-hex](https://www.npmjs.com/package/@artale/pi-hex) | 176 | `npm install @artale/pi-hex` | Hex viewer, binary inspector, magic byte detection, string extraction. |
| 506 | [@artale/pi-port](https://www.npmjs.com/package/@artale/pi-port) | 176 | `npm install @artale/pi-port` | Find what's using a port, kill it. /port 3000 |
| 507 | [@latent-variable/pi-auto-continue](https://www.npmjs.com/package/@latent-variable/pi-auto-continue) | 175 | `npm install @latent-variable/pi-auto-continue` | Pi extension that auto-sends a 'continue' message whenever the agent stops, so local agents can run autonomous overnigh… |
| 508 | [@artale/pi-changelog](https://www.npmjs.com/package/@artale/pi-changelog) | 175 | `npm install @artale/pi-changelog` | Auto-generate changelogs from git history. |
| 509 | [pi-tps-monitor](https://www.npmjs.com/package/pi-tps-monitor) | 174 | `npm install pi-tps-monitor` | Live tokens-per-second display next to the working indicator in pi-coding-agent |
| 510 | [@artale/pi-pong](https://www.npmjs.com/package/@artale/pi-pong) | 174 | `npm install @artale/pi-pong` | Terminal Pong + Breakout for pi — vs AI with difficulty scaling, ball trails, and power-ups |
| 511 | [@kaiserlich-dev/pi-queue-picker](https://www.npmjs.com/package/@kaiserlich-dev/pi-queue-picker) | 174 | `npm install @kaiserlich-dev/pi-queue-picker` | Pick between steering and follow-up when queuing messages in pi |
| 512 | [@artale/pi-typing](https://www.npmjs.com/package/@artale/pi-typing) | 173 | `npm install @artale/pi-typing` | Typing speed test with WPM tracking. Code snippets and quotes. |
| 513 | [pi-rtk](https://www.npmjs.com/package/pi-rtk) | 171 | `npm install pi-rtk` | RTK token reduction extension for pi-coding-agent - reduces LLM token consumption 60-90% by intelligently filtering too… |
| 514 | [@juanibiapina/pi-plan](https://www.npmjs.com/package/@juanibiapina/pi-plan) | 170 | `npm install @juanibiapina/pi-plan` | Pi extension for plan mode - read-only exploration and analysis |
| 515 | [@artale/pi-intel](https://www.npmjs.com/package/@artale/pi-intel) | 170 | `npm install @artale/pi-intel` | Competitor intelligence. Track GitHub repos, npm packages, download trends, weekly digests. |
| 516 | [pi-rollback](https://www.npmjs.com/package/pi-rollback) | 170 | `npm install pi-rollback` | Branch-aware rollback for pi — return to the last relevant point, summarize the detour, and continue from cleaner conte… |
| 517 | [@e9n/pi-telemetry](https://www.npmjs.com/package/@e9n/pi-telemetry) | 169 | `npm install @e9n/pi-telemetry` | Local telemetry extension for pi — captures session events and writes to disk |
| 518 | [@artale/pi-diff](https://www.npmjs.com/package/@artale/pi-diff) | 169 | `npm install @artale/pi-diff` | Beautiful side-by-side and inline diffs. File compare and git diff. |
| 519 | [@e9n/pi-gmail](https://www.npmjs.com/package/@e9n/pi-gmail) | 167 | `npm install @e9n/pi-gmail` | Gmail extension for pi — read, search, compose, and send emails via Gmail API |
| 520 | [psm-bridge](https://www.npmjs.com/package/psm-bridge) | 167 | `npm install psm-bridge` | Bridge Pi agent sessions to Pi Session Manager — session sync, tagging, search, and live mode. |
| 521 | [@burneikis/pi-vim](https://www.npmjs.com/package/@burneikis/pi-vim) | 165 | `npm install @burneikis/pi-vim` | Vim motions extension for pi – normal, insert, visual, and replace modes with operators, motions, text objects, registe… |
| 522 | [@e9n/pi-workon](https://www.npmjs.com/package/@e9n/pi-workon) | 164 | `npm install @e9n/pi-workon` | Project context switching and initialization for pi — switch projects, detect stacks, scaffold AGENTS.md |
| 523 | [@tmustier/extending-pi](https://www.npmjs.com/package/@tmustier/extending-pi) | 163 | `npm install @tmustier/extending-pi` | Guide for extending Pi — skills, extensions, prompt templates, themes, and packaging. |
| 524 | [@e9n/pi-jobs](https://www.npmjs.com/package/@e9n/pi-jobs) | 162 | `npm install @e9n/pi-jobs` | Agent run tracking extension for pi — job history, cost analysis, and session telemetry |
| 525 | [@kushagharahi/pi-llama-extensions](https://www.npmjs.com/package/@kushagharahi/pi-llama-extensions) | 161 | `npm install @kushagharahi/pi-llama-extensions` | Pi extensions for llama.cpp router — auto model discovery and tokens/second display |
| 526 | [@vanillagreen/pi-codex-minimal-tools](https://www.npmjs.com/package/@vanillagreen/pi-codex-minimal-tools) | 161 | `npm install @vanillagreen/pi-codex-minimal-tools` | Minimal Codex/OpenAI native tools for Pi: image_generation, view_image, apply_patch |
| 527 | [@e9n/pi-personal-crm](https://www.npmjs.com/package/@e9n/pi-personal-crm) | 161 | `npm install @e9n/pi-personal-crm` | Personal CRM extension for pi — contacts, companies, interactions, and reminders |
| 528 | [@artale/pi-fi](https://www.npmjs.com/package/@artale/pi-fi) | 161 | `npm install @artale/pi-fi` | Call free LLMs using fi CLI — Gemini, Groq, Cerebras, OpenRouter free pool, Pollinations |
| 529 | [@e9n/pi-kysely](https://www.npmjs.com/package/@e9n/pi-kysely) | 160 | `npm install @e9n/pi-kysely` | Shared Kysely database registry for pi — multi-dialect SQL with table-level RBAC |
| 530 | [pi-command-history](https://www.npmjs.com/package/pi-command-history) | 160 | `npm install pi-command-history` | Folder-based persistent command history for pi. Recall previous commands with ctrl+up/down across sessions. |
| 531 | [@grwnd/pi-governance](https://www.npmjs.com/package/@grwnd/pi-governance) | 160 | `npm install @grwnd/pi-governance` | Governance, RBAC, audit, and HITL for Pi-based coding agents |
| 532 | [pi-betterdiff](https://www.npmjs.com/package/pi-betterdiff) | 160 | `npm install pi-betterdiff` | Tree-inspired pi extension for reviewing session and git diffs. |
| 533 | [pi-edit-replace-all](https://www.npmjs.com/package/pi-edit-replace-all) | 158 | `npm install pi-edit-replace-all` | Pi package that overrides the edit tool with replaceAll support. |
| 534 | [@pfeodrippe/repling-pi](https://www.npmjs.com/package/@pfeodrippe/repling-pi) | 156 | `npm install @pfeodrippe/repling-pi` | Pi extension that runs Repling as the agent runtime/tool loop. |
| 535 | [@e9n/pi-projects](https://www.npmjs.com/package/@e9n/pi-projects) | 156 | `npm install @e9n/pi-projects` | Project tracking extension for pi — auto-discovers git repos with health status dashboard |
| 536 | [@aliou/pi-extension-dev](https://www.npmjs.com/package/@aliou/pi-extension-dev) | 155 | `npm install @aliou/pi-extension-dev` | Tools and commands for developing and updating Pi extensions. |
| 537 | [@wierdbytes/pi-statusline](https://www.npmjs.com/package/@wierdbytes/pi-statusline) | 154 | `npm install @wierdbytes/pi-statusline` | Minimal Tokyo Night statusline footer extension for pi coding agent |
| 538 | [@swairshah/pi-canvas](https://www.npmjs.com/package/@swairshah/pi-canvas) | 154 | `npm install @swairshah/pi-canvas` | Use any Tailscale-connected phone/tablet/browser as a drawing or photo input surface for Pi. |
| 539 | [tasty-pi](https://www.npmjs.com/package/tasty-pi) | 154 | `npm install tasty-pi` | Tasty Pi: a Pi package with custom extensions, skills, and themes. |
| 540 | [@e9n/pi-heartbeat](https://www.npmjs.com/package/@e9n/pi-heartbeat) | 153 | `npm install @e9n/pi-heartbeat` | Periodic health check extension for pi — runs a heartbeat prompt as an isolated subprocess |
| 541 | [@datspike/pi-inline-slash-extension](https://www.npmjs.com/package/@datspike/pi-inline-slash-extension) | 151 | `npm install @datspike/pi-inline-slash-extension` | Pi extension that adds inline slash autocomplete and absolute-path submit bypass without forking core. |
| 542 | [pi-cavekit](https://www.npmjs.com/package/pi-cavekit) | 150 | `npm install pi-cavekit` | Cavekit spec-driven development skills and spec tracker widget for pi |
| 543 | [@artale/pi-bundle](https://www.npmjs.com/package/@artale/pi-bundle) | 149 | `npm install @artale/pi-bundle` | The essential Pi extension bundle by artale. One install, 10 best extensions. Context management, memory, safety, produ… |
| 544 | [@lnittman/pi-tools](https://www.npmjs.com/package/@lnittman/pi-tools) | 149 | `npm install @lnittman/pi-tools` | Tool-pack contract for pi-mono SDK consumers — composable extension factories for code, HIL, orchestration, and annotat… |
| 545 | [pi-glimpse-changes](https://www.npmjs.com/package/pi-glimpse-changes) | 147 | `npm install pi-glimpse-changes` | 暂无描述 |
| 546 | [pi-simple](https://www.npmjs.com/package/pi-simple) | 147 | `npm install pi-simple` | UI and tool rendering customizations to make Pi simpler. |
| 547 | [pi-spec](https://www.npmjs.com/package/pi-spec) | 146 | `npm install pi-spec` | Spec-driven development extension and resource package for Pi. |
| 548 | [pi-treex](https://www.npmjs.com/package/pi-treex) | 146 | `npm install pi-treex` | Enhances pi's native /tree with sticky-left view and a detail pane |
| 549 | [pi-flare](https://www.npmjs.com/package/pi-flare) | 145 | `npm install pi-flare` | Pi custom provider extension for Cloudflare Workers AI. |
| 550 | [@kmiyh/pi-full-text-paste](https://www.npmjs.com/package/@kmiyh/pi-full-text-paste) | 145 | `npm install @kmiyh/pi-full-text-paste` | Pi extension that keeps large pasted text expanded instead of collapsing it into [paste #...] markers. |
| 551 | [pi-token-usage](https://www.npmjs.com/package/pi-token-usage) | 144 | `npm install pi-token-usage` | Pi extension for lifetime token usage tracking and cost analytics across all sessions |
| 552 | [@anistark/iconify](https://www.npmjs.com/package/@anistark/iconify) | 144 | `npm install @anistark/iconify` | Turn a logo into a full favicon set from your terminal — pi extension + CLI |
| 553 | [@kmiyh/pi-extensions-menu](https://www.npmjs.com/package/@kmiyh/pi-extensions-menu) | 144 | `npm install @kmiyh/pi-extensions-menu` | Pi extension that adds a dedicated /extensions menu for browsing, enabling, disabling, and updating installed extension… |
| 554 | [pi-doom](https://www.npmjs.com/package/pi-doom) | 143 | `npm install pi-doom` | Play DOOM in your terminal with pi |
| 555 | [@ryan_nookpi/pi-extension-cross-agent](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-cross-agent) | 142 | `npm install @ryan_nookpi/pi-extension-cross-agent` | Load commands from Claude, Gemini, and Codex agent directories into pi. |
| 556 | [pi-restrict-bash](https://www.npmjs.com/package/pi-restrict-bash) | 142 | `npm install pi-restrict-bash` | Opinionated bash tool restrictions for Pi |
| 557 | [@ryan_nookpi/pi-extension-claude-hooks-bridge](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-claude-hooks-bridge) | 142 | `npm install @ryan_nookpi/pi-extension-claude-hooks-bridge` | Bridge Claude Code hooks (.claude/settings.json) into pi extension lifecycle events. |
| 558 | [pi-augment](https://www.npmjs.com/package/pi-augment) | 141 | `npm install pi-augment` | Augment-style prompt rewriter for Pi — one command, stronger prompts |
| 559 | [pi-fastboot](https://www.npmjs.com/package/pi-fastboot) | 141 | `npm install pi-fastboot` | Make Pi startup feel close to PI_OFFLINE=1 while still letting npm-based extensions update |
| 560 | [pi-window-title](https://www.npmjs.com/package/pi-window-title) | 141 | `npm install pi-window-title` | Automatically manage pi session titles and tmux window titles for coding sessions |
| 561 | [pi-cycle](https://www.npmjs.com/package/pi-cycle) | 141 | `npm install pi-cycle` | Pi extension: /cycle + hotkey cycles model+thinking profiles (OpenAI-focused) with a menu-based config UI for Pi coding… |
| 562 | [@ctogg/pi-cost-counter](https://www.npmjs.com/package/@ctogg/pi-cost-counter) | 141 | `npm install @ctogg/pi-cost-counter` | Pi extension that tracks LLM API costs across all sessions with daily JSONL logging and a /cost command |
| 563 | [pi-commit-message](https://www.npmjs.com/package/pi-commit-message) | 140 | `npm install pi-commit-message` | Pi extension that generates Conventional Commit messages from staged diff and commits via /commit |
| 564 | [pi-model-selector-x](https://www.npmjs.com/package/pi-model-selector-x) | 140 | `npm install pi-model-selector-x` | Enhances pi's /model selector with context window, cost, input modalities, protocol, and reasoning info |
| 565 | [pi-plankton](https://www.npmjs.com/package/pi-plankton) | 140 | `npm install pi-plankton` | A fork of alexfazio/plankton that provides a Pi-exclusive extension for root-aware code quality enforcement. |
| 566 | [pi-minimax-tools](https://www.npmjs.com/package/pi-minimax-tools) | 139 | `npm install pi-minimax-tools` | MiniMax web_search and understand_image tools for pi |
| 567 | [@odradekk/vera-setup](https://www.npmjs.com/package/@odradekk/vera-setup) | 139 | `npm install @odradekk/vera-setup` | Setup CLI for deploying Vera agent resources to Pi coding agent |
| 568 | [@e9n/pi-brave-search](https://www.npmjs.com/package/@e9n/pi-brave-search) | 137 | `npm install @e9n/pi-brave-search` | Brave Search integration for pi — web search via Brave Search API |
| 569 | [pi-agent-config](https://www.npmjs.com/package/pi-agent-config) | 136 | `npm install pi-agent-config` | Personal [pi](https://pi.dev) coding agent configuration: safety extensions, subagent definitions, skills, and prompt t… |
| 570 | [pi-status](https://www.npmjs.com/package/pi-status) | 136 | `npm install pi-status` | Pi extension that shows a terminal tab title spinner while pi is working. |
| 571 | [pi-terminal-signals](https://www.npmjs.com/package/pi-terminal-signals) | 136 | `npm install pi-terminal-signals` | Pi extension that communicates agent lifecycle to the terminal via OSC 9;4 (progress) and OSC 133 (semantic prompts). |
| 572 | [pi-worktree](https://www.npmjs.com/package/pi-worktree) | 136 | `npm install pi-worktree` | Git worktree management for Pi — create isolated workspaces with one command, optionally launch in cmux/tmux. |
| 573 | [@studiosunnyfield/pimagotchi](https://www.npmjs.com/package/@studiosunnyfield/pimagotchi) | 135 | `npm install @studiosunnyfield/pimagotchi` | Pimagotchi — tamagotchi virtual pet for pi coding agent. 18 animated species, behavior-based evolution, rarity system,… |
| 574 | [pi-ollama-keyring](https://www.npmjs.com/package/pi-ollama-keyring) | 135 | `npm install pi-ollama-keyring` | Ollama cloud provider for pi-coding-agent with multi-key rotation, live model discovery, and persistent key-pool manage… |
| 575 | [pi-effect-harness](https://www.npmjs.com/package/pi-effect-harness) | 134 | `npm install pi-effect-harness` | a harness specifically for writing Effect v4 code |
| 576 | [pi-fast-apply](https://www.npmjs.com/package/pi-fast-apply) | 134 | `npm install pi-fast-apply` | Morph Fast Apply extension package for Pi |
| 577 | [@ryan_nookpi/pi-extension-open-pr](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-open-pr) | 134 | `npm install @ryan_nookpi/pi-extension-open-pr` | Open the current branch pull request in your browser via GitHub CLI. |
| 578 | [@pi-lab/websearch](https://www.npmjs.com/package/@pi-lab/websearch) | 133 | `npm install @pi-lab/websearch` | Exa-powered web search tool extension for pi coding agent |
| 579 | [oh-my-pi-typescript](https://www.npmjs.com/package/oh-my-pi-typescript) | 133 | `npm install oh-my-pi-typescript` | TypeScript workflows for pi — test runner, error decoder, deps audit, monorepo nav, pre-commit guard, status line, /ts-… |
| 580 | [@robhowley/pi-spinner-verbs](https://www.npmjs.com/package/@robhowley/pi-spinner-verbs) | 132 | `npm install @robhowley/pi-spinner-verbs` | > "Thinking..." is the most boring thing a genius could say. |
| 581 | [@bonsai-ai/pi-extension](https://www.npmjs.com/package/@bonsai-ai/pi-extension) | 132 | `npm install @bonsai-ai/pi-extension` | Bonsai provider extension for pi-coding-agent |
| 582 | [pi-mpc](https://www.npmjs.com/package/pi-mpc) | 132 | `npm install pi-mpc` | MPC (Mental Preview & Correction) extension for pi coding agent — rehearse and verify before any code is written |
| 583 | [pi-spell-check](https://www.npmjs.com/package/pi-spell-check) | 132 | `npm install pi-spell-check` | Spell-check extension for pi coding agent. Press Ctrl+Shift+S to fix spelling and grammar in the editor. |
| 584 | [pi-sync-config](https://www.npmjs.com/package/pi-sync-config) | 132 | `npm install pi-sync-config` | Sync your pi config (settings, extensions, themes, skills, prompts) to a remote git repository |
| 585 | [pi-open-browser](https://www.npmjs.com/package/pi-open-browser) | 132 | `npm install pi-open-browser` | A pi extension to open URLs in the user's default browser |
| 586 | [ypi](https://www.npmjs.com/package/ypi) | 131 | `npm install ypi` | ypi — a recursive coding agent. Pi that can call itself via rlm_query. |
| 587 | [pi-oneliner](https://www.npmjs.com/package/pi-oneliner) | 131 | `npm install pi-oneliner` | One-line sticky footer extension for pi coding agent. |
| 588 | [pi-cli-dynamic-tools](https://www.npmjs.com/package/pi-cli-dynamic-tools) | 131 | `npm install pi-cli-dynamic-tools` | Pi extension that manages a local toolbox of auto-generated CLI tools |
| 589 | [pi-modalmotion](https://www.npmjs.com/package/pi-modalmotion) | 130 | `npm install pi-modalmotion` | Vim-inspired modal editing and motion experiments for pi's input editor. |
| 590 | [@qmxme/pi-stats](https://www.npmjs.com/package/@qmxme/pi-stats) | 130 | `npm install @qmxme/pi-stats` | Stats widget extension for pi - shows token throughput, usage, and duration |
| 591 | [pi-upgrade](https://www.npmjs.com/package/pi-upgrade) | 130 | `npm install pi-upgrade` | Pi extension that adds a /upgrade command to self-upgrade pi |
| 592 | [@ryan_nookpi/pi-extension-claude-spinner](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-claude-spinner) | 130 | `npm install @ryan_nookpi/pi-extension-claude-spinner` | Standalone Pi extension package for Claude-style spinner frames. |
| 593 | [pi-block-unknown-command](https://www.npmjs.com/package/pi-block-unknown-command) | 130 | `npm install pi-block-unknown-command` | A pi extension that blocks unknown slash commands before they reach the LLM. |
| 594 | [@originintelligence/pi-figma](https://www.npmjs.com/package/@originintelligence/pi-figma) | 129 | `npm install @originintelligence/pi-figma` | pi extension: token-efficient Figma file access via REST. Never returns raw Figma JSON — every tool transforms to a com… |
| 595 | [@banon-labs/pi-inline-format-extensions](https://www.npmjs.com/package/@banon-labs/pi-inline-format-extensions) | 129 | `npm install @banon-labs/pi-inline-format-extensions` | Host/plugin Pi package for inline heredoc formatting and semantic inspection. |
| 596 | [@jd-erreape/pi-questionnaire](https://www.npmjs.com/package/@jd-erreape/pi-questionnaire) | 129 | `npm install @jd-erreape/pi-questionnaire` | Pi package providing an interactive questionnaire extension/tool. |
| 597 | [pi-retune](https://www.npmjs.com/package/pi-retune) | 129 | `npm install pi-retune` | One-command session renamer toggle for pi (retune/restore). |
| 598 | [@akshaykarle/pi-tools](https://www.npmjs.com/package/@akshaykarle/pi-tools) | 128 | `npm install @akshaykarle/pi-tools` | Pi coding agent extensions — security hardening, agent teams and more |
| 599 | [@juicesharp/rpiv-warp](https://www.npmjs.com/package/@juicesharp/rpiv-warp) | 128 | `npm install @juicesharp/rpiv-warp` | Pi extension. Native Warp terminal notifications, dispatched via OSC 777 on Pi lifecycle events. |
| 600 | [@synadia-ai/nats-pi-channel](https://www.npmjs.com/package/@synadia-ai/nats-pi-channel) | 128 | `npm install @synadia-ai/nats-pi-channel` | NATS Agent Protocol channel for PI Agent. Makes every PI session a discoverable, spec-compliant agent on NATS. |
| 601 | [pi-karpathy-guidelines](https://www.npmjs.com/package/pi-karpathy-guidelines) | 128 | `npm install pi-karpathy-guidelines` | Enforces Andrej Karpathy's coding guidelines to reduce common LLM mistakes: think before coding, simplicity first, surg… |
| 602 | [pi-xai-imagine](https://www.npmjs.com/package/pi-xai-imagine) | 128 | `npm install pi-xai-imagine` | Pi extension for xAI image, video, and vision workflows |
| 603 | [@pi-lab/xsearch](https://www.npmjs.com/package/@pi-lab/xsearch) | 127 | `npm install @pi-lab/xsearch` | xAI-powered X search tool extension for pi coding agent |
| 604 | [pi-clawd](https://www.npmjs.com/package/pi-clawd) | 127 | `npm install pi-clawd` | Clawd on Desk integration for the pi coding agent |
| 605 | [pi-extension-toolkit](https://www.npmjs.com/package/pi-extension-toolkit) | 127 | `npm install pi-extension-toolkit` | A Pi Coding Agent extension to create, retrofit, and verify other extensions. |
| 606 | [pi-treequest-parallel-processing](https://www.npmjs.com/package/pi-treequest-parallel-processing) | 127 | `npm install pi-treequest-parallel-processing` | TreeQuest Parallel Processing - multi-provider AI orchestration for pi with parallel queries, smart routing, and agent… |
| 607 | [pi-superpowers](https://www.npmjs.com/package/pi-superpowers) | 126 | `npm install pi-superpowers` | Superpowers workflow skills adapted for pi |
| 608 | [pi-codex-5.5](https://www.npmjs.com/package/pi-codex-5.5) | 126 | `npm install pi-codex-5.5` | Extra LLM models for pi (OpenAI Codex GPT-5.5). |
| 609 | [pi-prefer-rg](https://www.npmjs.com/package/pi-prefer-rg) | 126 | `npm install pi-prefer-rg` | A pi extension that teaches the agent to prefer ripgrep over grep. |
| 610 | [pi-ghcp-headers](https://www.npmjs.com/package/pi-ghcp-headers) | 126 | `npm install pi-ghcp-headers` | Pi extension to customize GitHub Copilot X-Initiator header behavior |
| 611 | [@dustinbyrne/kb](https://www.npmjs.com/package/@dustinbyrne/kb) | 125 | `npm install @dustinbyrne/kb` | An automated Kanban board for [pi](https://github.com/badlogic/pi-mono). You (or an agent) add high level ideas to your… |
| 612 | [code-submit](https://www.npmjs.com/package/code-submit) | 125 | `npm install code-submit` | Pi skill + TUI for generating HTML submission reports and opening GitHub draft PRs |
| 613 | [@ibeex/pi-fetch](https://www.npmjs.com/package/@ibeex/pi-fetch) | 124 | `npm install @ibeex/pi-fetch` | pi extension that fetches web content into session context with Jina/raw fallback and cleaned previews |
| 614 | [pi-agents-local](https://www.npmjs.com/package/pi-agents-local) | 123 | `npm install pi-agents-local` | Pi extension that loads AGENTS.local.md as private project instructions. |
| 615 | [pi-diff](https://www.npmjs.com/package/pi-diff) | 123 | `npm install pi-diff` | Tree-inspired pi extension for reviewing session and git diffs. |
| 616 | [@mcowger/pi-strip-volatile](https://www.npmjs.com/package/@mcowger/pi-strip-volatile) | 122 | `npm install @mcowger/pi-strip-volatile` | A pi extension that prevents volatile runtime data from being persisted to settings.json |
| 617 | [pi-turn-limit](https://www.npmjs.com/package/pi-turn-limit) | 122 | `npm install pi-turn-limit` | Pi coding agent extension to limit number of turns taken by a model |
| 618 | [@artale/pi-budget](https://www.npmjs.com/package/@artale/pi-budget) | 122 | `npm install @artale/pi-budget` | LLM budget alerts: track spend, alert limits, prevent bill shock |
| 619 | [pi-chucknorris](https://www.npmjs.com/package/pi-chucknorris) | 122 | `npm install pi-chucknorris` | Latency-gated Chuck Norris jokes while pi is thinking (before the first token). |
| 620 | [pi-glm-usage](https://www.npmjs.com/package/pi-glm-usage) | 121 | `npm install pi-glm-usage` | A pi extension that displays z.ai (GLM Coding Plan) subscription quota usage in the status bar. Shows 5-hour and weekly… |
| 621 | [@marcfargas/pi-heartbeat](https://www.npmjs.com/package/@marcfargas/pi-heartbeat) | 121 | `npm install @marcfargas/pi-heartbeat` | Non-blocking timers and heartbeats for pi agents — stop using sleep |
| 622 | [pi-constell-tasks](https://www.npmjs.com/package/pi-constell-tasks) | 121 | `npm install pi-constell-tasks` | Companion pi extension for native workspace tasks, manual /tasks control, and cross-instance implementation pickup. |
| 623 | [pi-bib](https://www.npmjs.com/package/pi-bib) | 120 | `npm install pi-bib` | A pi extension for bibliography and BibTeX review workflows. |
| 624 | [pi-sonar](https://www.npmjs.com/package/pi-sonar) | 120 | `npm install pi-sonar` | SonarQube integration for pi coding agent — tools, skills, and workflows for finding and fixing sonar issues |
| 625 | [@benvargas/pi-cut-stack](https://www.npmjs.com/package/@benvargas/pi-cut-stack) | 120 | `npm install @benvargas/pi-cut-stack` | Cut-stack editor shortcuts for pi |
| 626 | [pi-lazy-loader](https://www.npmjs.com/package/pi-lazy-loader) | 119 | `npm install pi-lazy-loader` | Lazy-load pi-coding-agent extensions on first slash-command use. Keeps slash commands discoverable while deferring heav… |
| 627 | [@ferologics/pi-extensions](https://www.npmjs.com/package/@ferologics/pi-extensions) | 119 | `npm install @ferologics/pi-extensions` | Custom Pi extensions bundle (deep-review, pi-ghostty-hunk, pi-ghostty-lazygit, pi-notify, pi-system-theme, plan-mode, p… |
| 628 | [@isaacraja/pi-vertex-claude](https://www.npmjs.com/package/@isaacraja/pi-vertex-claude) | 119 | `npm install @isaacraja/pi-vertex-claude` | Google Vertex AI Claude provider for Pi coding agent |
| 629 | [@haispeed/pi-obsidian](https://www.npmjs.com/package/@haispeed/pi-obsidian) | 118 | `npm install @haispeed/pi-obsidian` | Pi extension + skill for managing Obsidian vaults via Obsidian CLI |
| 630 | [@ogulcancelik/pi-ssh-tools](https://www.npmjs.com/package/@ogulcancelik/pi-ssh-tools) | 118 | `npm install @ogulcancelik/pi-ssh-tools` | Explicit SSH tools for pi. Toggle /ssh on for a host, then use ssh_read, ssh_write, ssh_edit, and ssh_bash without repl… |
| 631 | [@narumitw/pi-jupyter](https://www.npmjs.com/package/@narumitw/pi-jupyter) | 116 | `npm install @narumitw/pi-jupyter` | Pi extension: right-side Jupyter notebook preview while editing .ipynb files. |
| 632 | [pi-enhanced-tools](https://www.npmjs.com/package/pi-enhanced-tools) | 116 | `npm install pi-enhanced-tools` | Enhanced tools extension for PI — replacements and augmentations for built-in coding agent tools |
| 633 | [@yeliu84/pi-model-router](https://www.npmjs.com/package/@yeliu84/pi-model-router) | 116 | `npm install @yeliu84/pi-model-router` | Intelligent per-turn model router extension for the pi coding agent |
| 634 | [pi-initiatives](https://www.npmjs.com/package/pi-initiatives) | 116 | `npm install pi-initiatives` | Initiative and project tracker for pi — manage initiatives, todos, and PRs with a split-panel TUI and LLM-callable tool… |
| 635 | [pi-icompact](https://www.npmjs.com/package/pi-icompact) | 116 | `npm install pi-icompact` | Interactive compaction extension for pi — sort session context into categories and choose how to summarize each one |
| 636 | [think-tags](https://www.npmjs.com/package/think-tags) | 115 | `npm install think-tags` | Pi extension that splits <think> tags into collapsible thinking blocks in assistant messages |
| 637 | [@gnoviawan/pi-tokens-per-second](https://www.npmjs.com/package/@gnoviawan/pi-tokens-per-second) | 114 | `npm install @gnoviawan/pi-tokens-per-second` | Shows rolling tokens-per-second in the Pi status bar. |
| 638 | [pi-shell-autocomplete](https://www.npmjs.com/package/pi-shell-autocomplete) | 114 | `npm install pi-shell-autocomplete` | Shell command autocomplete extension for pi with zsh native completions and local AI ghost text. |
| 639 | [pi-screenshots](https://www.npmjs.com/package/pi-screenshots) | 114 | `npm install pi-screenshots` | Screenshot picker for pi — browse, select, and attach screenshots to your prompts |
| 640 | [token-rate-pi](https://www.npmjs.com/package/token-rate-pi) | 114 | `npm install token-rate-pi` | Token rate status extension for pi-coding-agent - shows average output tokens per second |
| 641 | [pi-video-transcribe](https://www.npmjs.com/package/pi-video-transcribe) | 113 | `npm install pi-video-transcribe` | Video transcription with speaker diarization for Pi. Transcribe videos with per-speaker labels, summaries, chapters, an… |
| 642 | [pi-worktrunk](https://www.npmjs.com/package/pi-worktrunk) | 113 | `npm install pi-worktrunk` | A Worktrunk extension for pi |
| 643 | [pi-vim-motions](https://www.npmjs.com/package/pi-vim-motions) | 111 | `npm install pi-vim-motions` | Vim-style motion extension for Pi. |
| 644 | [pi-alert](https://www.npmjs.com/package/pi-alert) | 111 | `npm install pi-alert` | Pi extension that sends a system notification when the agent ends its turn |
| 645 | [pi-agentation](https://www.npmjs.com/package/pi-agentation) | 111 | `npm install pi-agentation` | Pi extension that receives Agentation webhooks and turns them into queued user messages |
| 646 | [pi-evolve](https://www.npmjs.com/package/pi-evolve) | 111 | `npm install pi-evolve` | Genetic-programming style brainstorming command for pi. /evolve generates 5 alternatives, you pick one, repeat until yo… |
| 647 | [@gnoviawan/pi-token-usage](https://www.npmjs.com/package/@gnoviawan/pi-token-usage) | 110 | `npm install @gnoviawan/pi-token-usage` | Displays session and project token usage across Pi sessions. |
| 648 | [pi-tps](https://www.npmjs.com/package/pi-tps) | 110 | `npm install pi-tps` | TPS stats widget with waterfall trace visualization for pi coding agent |
| 649 | [pi-verbosity-control](https://www.npmjs.com/package/pi-verbosity-control) | 110 | `npm install pi-verbosity-control` | Per-model OpenAI verbosity control for Pi with optional inline footer display |
| 650 | [vendure-pi](https://www.npmjs.com/package/vendure-pi) | 108 | `npm install vendure-pi` | Pi agent extension for Vendure e-commerce management. Connect to your Vendure instance and manage products, orders, cus… |
| 651 | [pi-tilth](https://www.npmjs.com/package/pi-tilth) | 108 | `npm install pi-tilth` | AST-aware code reading via tilth — replaces read/grep/find/ls tools |
| 652 | [@banon-labs/pi-inline-format](https://www.npmjs.com/package/@banon-labs/pi-inline-format) | 108 | `npm install @banon-labs/pi-inline-format` | Strict Pi extension project with a Rust core subproject and a TypeScript extension wrapper. |
| 653 | [@yofriadi/pi-ast](https://www.npmjs.com/package/@yofriadi/pi-ast) | 107 | `npm install @yofriadi/pi-ast` | ```bash pi install git:github.com/yofriadi/pi-extensions@ast-v<version> ``` |
| 654 | [pi-epic-pipeline](https://www.npmjs.com/package/pi-epic-pipeline) | 105 | `npm install pi-epic-pipeline` | BMAD Epic Pipeline orchestrator for pi — autonomous story execution through create, dev, review, and gate phases |
| 655 | [pi-pai](https://www.npmjs.com/package/pi-pai) | 105 | `npm install pi-pai` | Personal AI Infrastructure extension for Pi — full v4.0.3 sync: ISC splitting test, count gates, anti-criteria, capabil… |
| 656 | [@apolosan/unified-process](https://www.npmjs.com/package/@apolosan/unified-process) | 104 | `npm install @apolosan/unified-process` | Pi package that bundles the Object-Oriented Unified Process extension and skills for the pi coding agent. |
| 657 | [pi-multirepo](https://www.npmjs.com/package/pi-multirepo) | 101 | `npm install pi-multirepo` | Pi extension for multi-repo tasks — worktrees, MRs, and tracker integration in one command |
| 658 | [pi-supervisor](https://www.npmjs.com/package/pi-supervisor) | 101 | `npm install pi-supervisor` | A pi extension that supervises the chat and steers it towards a defined outcome |
| 659 | [@baggiiiie/pi-rtk-rewrite](https://www.npmjs.com/package/@baggiiiie/pi-rtk-rewrite) | 101 | `npm install @baggiiiie/pi-rtk-rewrite` | A pi package that rewrites `bash` tool calls through [RTK](https://github.com/rtk-ai/rtk) before execution. |
| 660 | [@artale/pi-anthropic](https://www.npmjs.com/package/@artale/pi-anthropic) | 101 | `npm install @artale/pi-anthropic` | Anthropic API utilities |
| 661 | [@qmxme/pie](https://www.npmjs.com/package/@qmxme/pie) | 101 | `npm install @qmxme/pie` | My favorite pi extensions, all in one package. |
| 662 | [holdpty](https://www.npmjs.com/package/holdpty) | 100 | `npm install holdpty` | Minimal cross-platform detached PTY. Launch commands in a pseudo-terminal, attach/view/record later. |
| 663 | [@marcfargas/pi-powershell](https://www.npmjs.com/package/@marcfargas/pi-powershell) | 98 | `npm install @marcfargas/pi-powershell` | PowerShell tool for pi agents - Windows system integration and background processes |
| 664 | [@artale/pi-marketing](https://www.npmjs.com/package/@artale/pi-marketing) | 97 | `npm install @artale/pi-marketing` | SEO tools, social posting, analytics |
| 665 | [pi-dashscope](https://www.npmjs.com/package/pi-dashscope) | 97 | `npm install pi-dashscope` | Alibaba DashScope (ModelStudio) provider for oh my pi — Qwen3, GLM-5, MiniMax M2.5, Kimi K2.5 via OpenAI-compatible cod… |
| 666 | [pi-glossary](https://www.npmjs.com/package/pi-glossary) | 96 | `npm install pi-glossary` | Pi extension that lazy-loads glossary definitions into the system prompt when prompts mention matching terms |
| 667 | [pi-suggest](https://www.npmjs.com/package/pi-suggest) | 96 | `npm install pi-suggest` | LLM-generated next-step suggestions for Pi autocomplete, chips, and picker UI. |
| 668 | [pi-peon-ping](https://www.npmjs.com/package/pi-peon-ping) | 96 | `npm install pi-peon-ping` | Pi extension for peon-ping sound notifications |
| 669 | [pi-dcp](https://www.npmjs.com/package/pi-dcp) | 95 | `npm install pi-dcp` | Dynamic Context Pruning extension for pi - intelligently removes obsolete messages to optimize token usage |
| 670 | [tokenfactory-pi](https://www.npmjs.com/package/tokenfactory-pi) | 95 | `npm install tokenfactory-pi` | Nebius Token Factory provider extension for pi coding agent. Requires `npm install -g @mariozechner/pi-coding-agent`. I… |
| 671 | [@alasano/pi-panels](https://www.npmjs.com/package/@alasano/pi-panels) | 95 | `npm install @alasano/pi-panels` | Responsive status panels for pi - git info, LLM context usage, and Spotify now-playing below the editor |
| 672 | [@mrclrchtr/supi-bash-timeout](https://www.npmjs.com/package/@mrclrchtr/supi-bash-timeout) | 95 | `npm install @mrclrchtr/supi-bash-timeout` | SuPi bash-timeout extension — injects default timeout on bash tool calls |
| 673 | [@ahkohd/pi-oyo](https://www.npmjs.com/package/@ahkohd/pi-oyo) | 95 | `npm install @ahkohd/pi-oyo` | Pi package providing oyo diff/review commands |
| 674 | [@artale/pi-quant](https://www.npmjs.com/package/@artale/pi-quant) | 94 | `npm install @artale/pi-quant` | Trading data, portfolio analysis, backtesting |
| 675 | [@mrclrchtr/supi-aliases](https://www.npmjs.com/package/@mrclrchtr/supi-aliases) | 94 | `npm install @mrclrchtr/supi-aliases` | SuPi aliases extension — /exit, /e, /clear shortcuts for pi |
| 676 | [@anson-no-bug/pi-pet-plus](https://www.npmjs.com/package/@anson-no-bug/pi-pet-plus) | 94 | `npm install @anson-no-bug/pi-pet-plus` | A real-time pet companion for pi with progression, localization, and optional news delivery |
| 677 | [@marcfargas/go-easy](https://www.npmjs.com/package/@marcfargas/go-easy) | 93 | `npm install @marcfargas/go-easy` | Google APIs made easy — Gmail, Drive, Calendar for AI agents and humans |
| 678 | [@ssweens/pi-vertex](https://www.npmjs.com/package/@ssweens/pi-vertex) | 93 | `npm install @ssweens/pi-vertex` | Google Vertex AI provider for Pi coding agent - supports Gemini, Claude, and all MaaS models |
| 679 | [@howaboua/pi-auto-trees](https://www.npmjs.com/package/@howaboua/pi-auto-trees) | 93 | `npm install @howaboua/pi-auto-trees` | A Pi package that adds /marker and /end commands for incremental long-running coding sessions. |
| 680 | [@artale/pi-openai](https://www.npmjs.com/package/@artale/pi-openai) | 93 | `npm install @artale/pi-openai` | OpenAI API utilities |
| 681 | [@rad-pi/core](https://www.npmjs.com/package/@rad-pi/core) | 92 | `npm install @rad-pi/core` | Deterministic Radicle agent tooling for pi |
| 682 | [omegon-pi](https://www.npmjs.com/package/omegon-pi) | 91 | `npm install omegon-pi` | Omegon — an opinionated distribution of pi (by Mario Zechner) with extensions for lifecycle management, memory, orchest… |
| 683 | [@haphazarddev/pi-vim-quit](https://www.npmjs.com/package/@haphazarddev/pi-vim-quit) | 91 | `npm install @haphazarddev/pi-vim-quit` | A tiny pi extension that quits when you type :q, :qa, or :wq. |
| 684 | [pi-adaptive-finder](https://www.npmjs.com/package/pi-adaptive-finder) | 90 | `npm install pi-adaptive-finder` | Fast local workspace Finder for Pi using rg retrieval plus configurable OpenAI-compatible rerankers |
| 685 | [@0xkobold/pi-suggest](https://www.npmjs.com/package/@0xkobold/pi-suggest) | 90 | `npm install @0xkobold/pi-suggest` | Context-aware suggestion engine for pi-coding-agent |
| 686 | [@robzolkos/pi-nocchio](https://www.npmjs.com/package/@robzolkos/pi-nocchio) | 90 | `npm install @robzolkos/pi-nocchio` | A tiny Pi extension that adds --dump-system-prompt. |
| 687 | [pi-share-redacted-gist](https://www.npmjs.com/package/pi-share-redacted-gist) | 90 | `npm install pi-share-redacted-gist` | Pi package: publish a redacted pi session to GitHub gists and first-class Hugging Face datasets |
| 688 | [@rwese/pi-webfetch](https://www.npmjs.com/package/@rwese/pi-webfetch) | 90 | `npm install @rwese/pi-webfetch` | Webfetch extension for pi coding agent |
| 689 | [pi-magic-docs](https://www.npmjs.com/package/pi-magic-docs) | 89 | `npm install pi-magic-docs` | Living documents that update themselves from your conversation — pi reads them, tracks them, and keeps them current |
| 690 | [@artale/pi-email](https://www.npmjs.com/package/@artale/pi-email) | 89 | `npm install @artale/pi-email` | Email utilities |
| 691 | [@artale/pi-fixes](https://www.npmjs.com/package/@artale/pi-fixes) | 88 | `npm install @artale/pi-fixes` | Auto-fix common errors: lint, format, type errors |
| 692 | [pi-jj](https://www.npmjs.com/package/pi-jj) | 87 | `npm install pi-jj` | Pi extension package for Jujutsu workflows (checkpointing, rewind, and jj onboarding) |
| 693 | [@haphazarddev/pi-copy-code-block](https://www.npmjs.com/package/@haphazarddev/pi-copy-code-block) | 87 | `npm install @haphazarddev/pi-copy-code-block` | A pi extension that copies code blocks from the latest assistant message to the clipboard. |
| 694 | [pi-hash-anchored-edit](https://www.npmjs.com/package/pi-hash-anchored-edit) | 86 | `npm install pi-hash-anchored-edit` | Hash-anchored read/edit replacement tools for Pi coding agent. |
| 695 | [@artale/pi-infer](https://www.npmjs.com/package/@artale/pi-infer) | 86 | `npm install @artale/pi-infer` | Minimum viable free-LLM gateway — stdlib-only Python, no Docker, ~700 LOC |
| 696 | [@devkade/pi-opentelemetry](https://www.npmjs.com/package/@devkade/pi-opentelemetry) | 86 | `npm install @devkade/pi-opentelemetry` | OpenTelemetry trace + metrics + diagnostics extension for Pi Coding Agent |
| 697 | [@artale/pi-triage](https://www.npmjs.com/package/@artale/pi-triage) | 86 | `npm install @artale/pi-triage` | Issue triage: auto-categorize, prioritize, route to labels |
| 698 | [@artale/pi-seo](https://www.npmjs.com/package/@artale/pi-seo) | 86 | `npm install @artale/pi-seo` | SEO utilities |
| 699 | [@artale/pi-wordpress](https://www.npmjs.com/package/@artale/pi-wordpress) | 86 | `npm install @artale/pi-wordpress` | WordPress integration for Pi: WP-CLI wrapper, plugin scaffolding, theme tools |
| 700 | [@howaboua/pi-glm-via-anthropic](https://www.npmjs.com/package/@howaboua/pi-glm-via-anthropic) | 85 | `npm install @howaboua/pi-glm-via-anthropic` | Use Z.ai GLM models in pi through Z.ai's Anthropic-compatible endpoint. |
| 701 | [pi-ephemeral](https://www.npmjs.com/package/pi-ephemeral) | 85 | `npm install pi-ephemeral` | Toggle Pi session persistence mid-session (delete session file on exit) |
| 702 | [vscode-pi-companion](https://www.npmjs.com/package/vscode-pi-companion) | 85 | `npm install vscode-pi-companion` | Share VS Code context with pi coding agent |
| 703 | [@artale/pi-flutter](https://www.npmjs.com/package/@artale/pi-flutter) | 85 | `npm install @artale/pi-flutter` | Flutter utilities |
| 704 | [pi-cline](https://www.npmjs.com/package/pi-cline) | 84 | `npm install pi-cline` | Cline provider extension for pi |
| 705 | [@artale/pi-stocks](https://www.npmjs.com/package/@artale/pi-stocks) | 84 | `npm install @artale/pi-stocks` | Stock market utilities |
| 706 | [@artale/pi-alerts](https://www.npmjs.com/package/@artale/pi-alerts) | 84 | `npm install @artale/pi-alerts` | Alert management |
| 707 | [@victor-software-house/pi-tmux](https://www.npmjs.com/package/@victor-software-house/pi-tmux) | 84 | `npm install @victor-software-house/pi-tmux` | Pi coding agent extension: tmux session management per project |
| 708 | [@pi-lab/input-history](https://www.npmjs.com/package/@pi-lab/input-history) | 84 | `npm install @pi-lab/input-history` | Cross-session input history navigation for pi coding agent |
| 709 | [pi-bash-bg](https://www.npmjs.com/package/pi-bash-bg) | 83 | `npm install pi-bash-bg` | Makes command & work in pi's bash tool by detaching background processes from pipes · from yapp |
| 710 | [@artale/pi-huggingface](https://www.npmjs.com/package/@artale/pi-huggingface) | 83 | `npm install @artale/pi-huggingface` | HuggingFace utilities |
| 711 | [@artale/pi-social](https://www.npmjs.com/package/@artale/pi-social) | 83 | `npm install @artale/pi-social` | Social media utilities |
| 712 | [@artale/pi-terraform](https://www.npmjs.com/package/@artale/pi-terraform) | 83 | `npm install @artale/pi-terraform` | Terraform utilities |
| 713 | [@gugu910/pi-slack-api](https://www.npmjs.com/package/@gugu910/pi-slack-api) | 83 | `npm install @gugu910/pi-slack-api` | Typed Slack Web API client and CLI generated from Slack's OpenAPI spec |
| 714 | [pi-elixir](https://www.npmjs.com/package/pi-elixir) | 82 | `npm install pi-elixir` | BEAM runtime tools for pi — connects to the running Elixir app for live introspection |
| 715 | [@artale/pi-pdf](https://www.npmjs.com/package/@artale/pi-pdf) | 82 | `npm install @artale/pi-pdf` | PDF generation and parsing |
| 716 | [@artale/pi-excel](https://www.npmjs.com/package/@artale/pi-excel) | 82 | `npm install @artale/pi-excel` | Excel file handling |
| 717 | [@carter-mcalister/pi-worktrunk](https://www.npmjs.com/package/@carter-mcalister/pi-worktrunk) | 82 | `npm install @carter-mcalister/pi-worktrunk` | Worktrunk-backed worktree extension for Pi Coding Agent |
| 718 | [@artale/pi-crypto](https://www.npmjs.com/package/@artale/pi-crypto) | 82 | `npm install @artale/pi-crypto` | Cryptocurrency utilities |
| 719 | [@carter-mcalister/pi-profiles](https://www.npmjs.com/package/@carter-mcalister/pi-profiles) | 82 | `npm install @carter-mcalister/pi-profiles` | Session-scoped profile loader for Pi |
| 720 | [@fractary/pi-claude-code](https://www.npmjs.com/package/@fractary/pi-claude-code) | 81 | `npm install @fractary/pi-claude-code` | Pi extensions that shim Claude Code's tool API, letting agents, skills, and prompts built for Claude Code run in pi wit… |
| 721 | [pi-jujutsu](https://www.npmjs.com/package/pi-jujutsu) | 81 | `npm install pi-jujutsu` | Live jj (jujutsu) working copy status and repo context for pi |
| 722 | [@artale/pi-deploy](https://www.npmjs.com/package/@artale/pi-deploy) | 81 | `npm install @artale/pi-deploy` | Deployment tools |
| 723 | [@artale/pi-docker](https://www.npmjs.com/package/@artale/pi-docker) | 81 | `npm install @artale/pi-docker` | Docker utilities |
| 724 | [@onenote/pi-vim-editor](https://www.npmjs.com/package/@onenote/pi-vim-editor) | 81 | `npm install @onenote/pi-vim-editor` | Vim-style modal editor extension for pi |
| 725 | [@carter-mcalister/pi-auto-name](https://www.npmjs.com/package/@carter-mcalister/pi-auto-name) | 81 | `npm install @carter-mcalister/pi-auto-name` | English-only automatic session naming for Pi |
| 726 | [@linioi/pi-fast-mode](https://www.npmjs.com/package/@linioi/pi-fast-mode) | 80 | `npm install @linioi/pi-fast-mode` | A pi extension that adds a protocol-aware /fast command with status indicator and priority service tier injection. |
| 727 | [@artale/pi-type-check](https://www.npmjs.com/package/@artale/pi-type-check) | 79 | `npm install @artale/pi-type-check` | TypeScript type checking |
| 728 | [@artale/pi-logs](https://www.npmjs.com/package/@artale/pi-logs) | 79 | `npm install @artale/pi-logs` | Log parsing utilities |
| 729 | [@artale/pi-cms](https://www.npmjs.com/package/@artale/pi-cms) | 79 | `npm install @artale/pi-cms` | CMS utilities |
| 730 | [@include-tools/toolbox-pi-extension](https://www.npmjs.com/package/@include-tools/toolbox-pi-extension) | 79 | `npm install @include-tools/toolbox-pi-extension` | pi extension for toolbox codemode sessions |
| 731 | [@rad-pi/cob](https://www.npmjs.com/package/@rad-pi/cob) | 78 | `npm install @rad-pi/cob` | Optional Radicle COB integrations for pi (plan and context) |
| 732 | [pi-terminal-browser-search](https://www.npmjs.com/package/pi-terminal-browser-search) | 78 | `npm install pi-terminal-browser-search` | Pi Harness /search extension with system-default and multi-browser support |
| 733 | [@artale/pi-azure](https://www.npmjs.com/package/@artale/pi-azure) | 78 | `npm install @artale/pi-azure` | Azure utilities |
| 734 | [@artale/pi-sms](https://www.npmjs.com/package/@artale/pi-sms) | 78 | `npm install @artale/pi-sms` | SMS utilities |
| 735 | [@tridha643/pi-ask-mode](https://www.npmjs.com/package/@tridha643/pi-ask-mode) | 78 | `npm install @tridha643/pi-ask-mode` | A pi package that adds ask mode: read-only investigative tools plus read-only bash. |
| 736 | [@artale/pi-gcp](https://www.npmjs.com/package/@artale/pi-gcp) | 77 | `npm install @artale/pi-gcp` | GCP utilities |
| 737 | [@sp1in/claude-agent](https://www.npmjs.com/package/@sp1in/claude-agent) | 76 | `npm install @sp1in/claude-agent` | Claude Code bridge — chat with Claude from WeChat |
| 738 | [pi-annotated-reply](https://www.npmjs.com/package/pi-annotated-reply) | 76 | `npm install pi-annotated-reply` | Annotated reply workflow for pi (model responses, file sources, and git diffs) |
| 739 | [@artale/pi-csv](https://www.npmjs.com/package/@artale/pi-csv) | 76 | `npm install @artale/pi-csv` | CSV parsing and generation |
| 740 | [pi-agent-loop](https://www.npmjs.com/package/pi-agent-loop) | 76 | `npm install pi-agent-loop` | General-purpose agent loop extension for pi. Supports goal loops (repeat until done), fixed-pass loops, and multi-stage… |
| 741 | [@artale/pi-e2e](https://www.npmjs.com/package/@artale/pi-e2e) | 76 | `npm install @artale/pi-e2e` | E2E test utilities |
| 742 | [@artale/pi-ansible](https://www.npmjs.com/package/@artale/pi-ansible) | 76 | `npm install @artale/pi-ansible` | Ansible utilities |
| 743 | [@artale/pi-curl](https://www.npmjs.com/package/@artale/pi-curl) | 76 | `npm install @artale/pi-curl` | cURL wrapper |
| 744 | [@artale/pi-slack](https://www.npmjs.com/package/@artale/pi-slack) | 76 | `npm install @artale/pi-slack` | Slack integration |
| 745 | [@gregjohnso/pi-monitor](https://www.npmjs.com/package/@gregjohnso/pi-monitor) | 76 | `npm install @gregjohnso/pi-monitor` | Background shell command runner for the pi coding agent. Each stdout line becomes a live TUI event and enters the LLM's… |
| 746 | [@sp1in/qwen-agent](https://www.npmjs.com/package/@sp1in/qwen-agent) | 75 | `npm install @sp1in/qwen-agent` | Qwen Code bridge — type /qwen, scan QR code, chat with Qwen from WeChat |
| 747 | [@mjakl/pi-kagi-search](https://www.npmjs.com/package/@mjakl/pi-kagi-search) | 75 | `npm install @mjakl/pi-kagi-search` | Kagi search tool for Pi coding agent |
| 748 | [@juanibiapina/pi-tokyonight](https://www.npmjs.com/package/@juanibiapina/pi-tokyonight) | 75 | `npm install @juanibiapina/pi-tokyonight` | Tokyo Night theme for pi coding agent |
| 749 | [@burneikis/pi-plan](https://www.npmjs.com/package/@burneikis/pi-plan) | 75 | `npm install @burneikis/pi-plan` | Claude Code-style plan mode for pi — create, review, edit, and execute structured plans in a fresh context |
| 750 | [@artale/pi-analytics](https://www.npmjs.com/package/@artale/pi-analytics) | 75 | `npm install @artale/pi-analytics` | Analytics utilities |
| 751 | [@artale/pi-blog](https://www.npmjs.com/package/@artale/pi-blog) | 75 | `npm install @artale/pi-blog` | Blog utilities |
| 752 | [@artale/pi-unit](https://www.npmjs.com/package/@artale/pi-unit) | 75 | `npm install @artale/pi-unit` | Unit test utilities |
| 753 | [@rad-pi/autonomy](https://www.npmjs.com/package/@rad-pi/autonomy) | 74 | `npm install @rad-pi/autonomy` | Autonomous Radicle issue, plan, and orchestration workflows for pi |
| 754 | [@sp1in/kimi-agent](https://www.npmjs.com/package/@sp1in/kimi-agent) | 74 | `npm install @sp1in/kimi-agent` | Kimi CLI bridge — type /kimi, scan QR code, chat with Kimi from WeChat |
| 755 | [@alasano/pi-mouse](https://www.npmjs.com/package/@alasano/pi-mouse) | 74 | `npm install @alasano/pi-mouse` | ASCII mouse that follows your cursor above the editor in pi |
| 756 | [@artale/pi-format](https://www.npmjs.com/package/@artale/pi-format) | 74 | `npm install @artale/pi-format` | Code formatting |
| 757 | [@rwese/pi-hooks](https://www.npmjs.com/package/@rwese/pi-hooks) | 74 | `npm install @rwese/pi-hooks` | Run user-defined hooks on pi events (input, agent_end) |
| 758 | [pi-md-export](https://www.npmjs.com/package/pi-md-export) | 74 | `npm install pi-md-export` | Export Pi sessions (last N turns, full branch, or full session) to readable Markdown on clipboard or local file, with o… |
| 759 | [@nonplanarslicer/pi-tps](https://www.npmjs.com/package/@nonplanarslicer/pi-tps) | 73 | `npm install @nonplanarslicer/pi-tps` | Show live TPS in the pi-coding-agent status bar without overwriting it |
| 760 | [@tmustier/pi-arcade](https://www.npmjs.com/package/@tmustier/pi-arcade) | 73 | `npm install @tmustier/pi-arcade` | Arcade minigames for the Pi coding agent. |
| 761 | [@alexgorbatchev/pi-agentation](https://www.npmjs.com/package/@alexgorbatchev/pi-agentation) | 73 | `npm install @alexgorbatchev/pi-agentation` | pi extension launcher for Agentation Fork |
| 762 | [@artale/pi-lint](https://www.npmjs.com/package/@artale/pi-lint) | 73 | `npm install @artale/pi-lint` | Code linting and fixing |
| 763 | [@samfp/pi-meeting-copilot](https://www.npmjs.com/package/@samfp/pi-meeting-copilot) | 73 | `npm install @samfp/pi-meeting-copilot` | Live meeting transcription copilot for pi — captures audio via whisper-cpp on Mac, streams transcripts to your dev mach… |
| 764 | [pi-scheduler](https://www.npmjs.com/package/pi-scheduler) | 72 | `npm install pi-scheduler` | Simple scheduled loop/reminder extension for pi |
| 765 | [pi-bailian-models](https://www.npmjs.com/package/pi-bailian-models) | 72 | `npm install pi-bailian-models` | Adds Alibaba Cloud BaiLian Qwen models to pi with OAuth support |
| 766 | [@artale/pi-load](https://www.npmjs.com/package/@artale/pi-load) | 72 | `npm install @artale/pi-load` | Load testing utilities |
| 767 | [@jeffkafka/pi-nobody](https://www.npmjs.com/package/@jeffkafka/pi-nobody) | 72 | `npm install @jeffkafka/pi-nobody` | Starter Pi package for building and publishing your own Pi agent |
| 768 | [@rakohq/pi-council](https://www.npmjs.com/package/@rakohq/pi-council) | 71 | `npm install @rakohq/pi-council` | Multi-model LLM Council for adversarial debate, cross-validation, and synthesized decision-making via pi-teams |
| 769 | [pi-llama-server](https://www.npmjs.com/package/pi-llama-server) | 71 | `npm install pi-llama-server` | Pi extension for llama-server router — live model listing, load/unload, per-project config |
| 770 | [@odradekk/vera-search-tools](https://www.npmjs.com/package/@odradekk/vera-search-tools) | 71 | `npm install @odradekk/vera-search-tools` | Cross-platform rg/fd search tools for Vera agent |
| 771 | [@artale/pi-k8s](https://www.npmjs.com/package/@artale/pi-k8s) | 71 | `npm install @artale/pi-k8s` | Kubernetes utilities |
| 772 | [pi-aliases](https://www.npmjs.com/package/pi-aliases) | 70 | `npm install pi-aliases` | Pi extension that adds command aliases: /clear → /new, /exit → /quit |
| 773 | [@zenobius/pi-rose-pine](https://www.npmjs.com/package/@zenobius/pi-rose-pine) | 70 | `npm install @zenobius/pi-rose-pine` | Rose Pine themes for Pi Coding Agent |
| 774 | [@mjakl/pi-interlude](https://www.npmjs.com/package/@mjakl/pi-interlude) | 70 | `npm install @mjakl/pi-interlude` | Pi extension for stashing the current draft, sending an interlude message, and restoring the draft. |
| 775 | [@artale/pi-build](https://www.npmjs.com/package/@artale/pi-build) | 70 | `npm install @artale/pi-build` | Build orchestration |
| 776 | [@artale/pi-aws](https://www.npmjs.com/package/@artale/pi-aws) | 70 | `npm install @artale/pi-aws` | AWS utilities |
| 777 | [@andriimartynov/pi-ollama-model-switcher](https://www.npmjs.com/package/@andriimartynov/pi-ollama-model-switcher) | 69 | `npm install @andriimartynov/pi-ollama-model-switcher` | Monitors and manages Ollama model instances within the pi coding agent harness. |
| 778 | [pi-zellij](https://www.npmjs.com/package/pi-zellij) | 69 | `npm install pi-zellij` | Pi package with zellij-powered terminal integrations |
| 779 | [@tmustier/pi-code-actions](https://www.npmjs.com/package/@tmustier/pi-code-actions) | 69 | `npm install @tmustier/pi-code-actions` | Pick code blocks or inline snippets from recent assistant messages to copy or insert. |
| 780 | [@artale/pi-react-native](https://www.npmjs.com/package/@artale/pi-react-native) | 69 | `npm install @artale/pi-react-native` | React Native utilities |
| 781 | [@carter-mcalister/pi-mise-toolchain](https://www.npmjs.com/package/@carter-mcalister/pi-mise-toolchain) | 69 | `npm install @carter-mcalister/pi-mise-toolchain` | Mise-driven toolchain enforcement for Pi |
| 782 | [@cglab/pi-rtk](https://www.npmjs.com/package/@cglab/pi-rtk) | 68 | `npm install @cglab/pi-rtk` | RTK (Rust Token Killer) integration for pi — transparent bash command rewriting for 60-90% token savings |
| 783 | [@code-fixer-23/pi-agent-resource](https://www.npmjs.com/package/@code-fixer-23/pi-agent-resource) | 68 | `npm install @code-fixer-23/pi-agent-resource` | This extension is useful for making agent skills, propmts and subagents |
| 784 | [@fgladisch/pi-welcome-message](https://www.npmjs.com/package/@fgladisch/pi-welcome-message) | 68 | `npm install @fgladisch/pi-welcome-message` | Workspace startup summary message extension for Pi |
| 785 | [@georgetsouvaltzis/pi-working-time](https://www.npmjs.com/package/@georgetsouvaltzis/pi-working-time) | 68 | `npm install @georgetsouvaltzis/pi-working-time` | Pi extension that shows live elapsed working time with configurable formatting |
| 786 | [@agentlogs/pi](https://www.npmjs.com/package/@agentlogs/pi) | 68 | `npm install @agentlogs/pi` | AgentLogs extension for Pi - automatically captures and uploads AI coding session transcripts |
| 787 | [pi-cursor-oauth](https://www.npmjs.com/package/pi-cursor-oauth) | 68 | `npm install pi-cursor-oauth` | Cursor OAuth provider extension for pi-coding-agent |
| 788 | [pi-websearch-router](https://www.npmjs.com/package/pi-websearch-router) | 68 | `npm install pi-websearch-router` | Pi web search tool that auto-detects available API keys and routes to the right provider |
| 789 | [@gnoviawan/pi-litellm-auto-detect](https://www.npmjs.com/package/@gnoviawan/pi-litellm-auto-detect) | 67 | `npm install @gnoviawan/pi-litellm-auto-detect` | Loads LiteLLM models from a remote /model/info endpoint on startup. |
| 790 | [@zenobius/pi-dcp](https://www.npmjs.com/package/@zenobius/pi-dcp) | 67 | `npm install @zenobius/pi-dcp` | Dynamic Context Pruning extension for pi - intelligently removes obsolete messages to optimize token usage |
| 791 | [pi-serena-tools](https://www.npmjs.com/package/pi-serena-tools) | 67 | `npm install pi-serena-tools` | Pi now gains IDE-like editing capabilities by bridging Serena’s semantic code tools into native Pi tools. |
| 792 | [@clanker-extensions/web](https://www.npmjs.com/package/@clanker-extensions/web) | 66 | `npm install @clanker-extensions/web` | Adds web search and fetch tools for public web access. |
| 793 | [@code-fixer-23/nu-bash](https://www.npmjs.com/package/@code-fixer-23/nu-bash) | 66 | `npm install @code-fixer-23/nu-bash` | Pi extension that runs bash and user_bash through Nushell. |
| 794 | [@sp1in/pi-agent](https://www.npmjs.com/package/@sp1in/pi-agent) | 66 | `npm install @sp1in/pi-agent` | Pi extension — type /wechat, scan QR code, chat with Pi from WeChat |
| 795 | [pi-arxiv](https://www.npmjs.com/package/pi-arxiv) | 66 | `npm install pi-arxiv` | arXiv paper search and lookup tools for pi |
| 796 | [pi-slack-bot](https://www.npmjs.com/package/pi-slack-bot) | 66 | `npm install pi-slack-bot` | Slack bot exposing pi as a conversational coding agent. Chat with pi in Slack DMs with streaming responses, tool execut… |
| 797 | [@andrewxhill/pi-be-kind](https://www.npmjs.com/package/@andrewxhill/pi-be-kind) | 66 | `npm install @andrewxhill/pi-be-kind` | Pi agent extension that rewrites unkind prompts to be nicer |
| 798 | [@hsingjui/pi-hooks](https://www.npmjs.com/package/@hsingjui/pi-hooks) | 66 | `npm install @hsingjui/pi-hooks` | Claude Code-compatible command hooks for the Pi coding agent |
| 799 | [pi-websearch-brave](https://www.npmjs.com/package/pi-websearch-brave) | 66 | `npm install pi-websearch-brave` | Pi web search tool powered by Brave Search |
| 800 | [pi-websearch-linkup](https://www.npmjs.com/package/pi-websearch-linkup) | 66 | `npm install pi-websearch-linkup` | Pi web search tool powered by Linkup |
| 801 | [@cmcconomy/pi-qwen-tool-parser](https://www.npmjs.com/package/@cmcconomy/pi-qwen-tool-parser) | 66 | `npm install @cmcconomy/pi-qwen-tool-parser` | A pi-mono extension that parses Qwen XML formatted tool calls and provides a wrapper tool for execution |
| 802 | [@odradekk/vera-ccc-tools](https://www.npmjs.com/package/@odradekk/vera-ccc-tools) | 65 | `npm install @odradekk/vera-ccc-tools` | CocoIndex Code semantic search tools for Vera agent |
| 803 | [@liunuozhi/pi-vi](https://www.npmjs.com/package/@liunuozhi/pi-vi) | 64 | `npm install @liunuozhi/pi-vi` | Minimal vi-style modal editing for Pi's TUI prompt |
| 804 | [pi-excalidraw](https://www.npmjs.com/package/pi-excalidraw) | 64 | `npm install pi-excalidraw` | A pi package that provides a locally hosted Excalidraw canvas plus AI-callable diagramming tools. |
| 805 | [checkpoint-pi](https://www.npmjs.com/package/checkpoint-pi) | 64 | `npm install checkpoint-pi` | Git-based checkpoint extension for pi-coding-agent - creates checkpoints at each turn for code state restoration |
| 806 | [@calesennett/pi-codex-fast](https://www.npmjs.com/package/@calesennett/pi-codex-fast) | 64 | `npm install @calesennett/pi-codex-fast` | pi extension that adds service_tier=priority to OpenAI/OpenAI Codex requests when fast mode is enabled. |
| 807 | [@juanibiapina/pi-gob](https://www.npmjs.com/package/@juanibiapina/pi-gob) | 64 | `npm install @juanibiapina/pi-gob` | Pi extension for managing gob background jobs |
| 808 | [pi-plan-modus](https://www.npmjs.com/package/pi-plan-modus) | 64 | `npm install pi-plan-modus` | Read-only plan mode with RepoPrompt-aware write blocking; restricts tools, bash commands, and RepoPrompt operations (MC… |
| 809 | [@siddr/pi-diff-cmux](https://www.npmjs.com/package/@siddr/pi-diff-cmux) | 64 | `npm install @siddr/pi-diff-cmux` | cmux browser diff review extension for pi |
| 810 | [pi-caffeinate](https://www.npmjs.com/package/pi-caffeinate) | 63 | `npm install pi-caffeinate` | Pi extension that keeps the machine awake while the agent is working (macOS, Linux, Windows) |
| 811 | [pi-opensync-plugin](https://www.npmjs.com/package/pi-opensync-plugin) | 63 | `npm install pi-opensync-plugin` | Pi extension to sync sessions to OpenSync dashboards |
| 812 | [@benvargas/pi-openai-verbosity](https://www.npmjs.com/package/@benvargas/pi-openai-verbosity) | 62 | `npm install @benvargas/pi-openai-verbosity` | Per-model OpenAI Codex text verbosity overrides for pi |
| 813 | [@artale/pi-dash](https://www.npmjs.com/package/@artale/pi-dash) | 62 | `npm install @artale/pi-dash` | Live TUI dashboard widget for Pi. Shows tokens, cost, context %, uptime, and tool stats above the editor in real-time. |
| 814 | [pi-branch-out](https://www.npmjs.com/package/pi-branch-out) | 62 | `npm install pi-branch-out` | Fork the current Pi session into a split terminal pane or new tab with rotating layout policies, and with optional mode… |
| 815 | [pi-command-center](https://www.npmjs.com/package/pi-command-center) | 62 | `npm install pi-command-center` | Scrollable widget displaying available /commands from extensions/prompts/skills, compatible with simultaneous editor us… |
| 816 | [@sp1in/iflow-agent](https://www.npmjs.com/package/@sp1in/iflow-agent) | 61 | `npm install @sp1in/iflow-agent` | iFlow CLI bridge — chat with iFlow from WeChat |
| 817 | [@rbtr/pi](https://www.npmjs.com/package/@rbtr/pi) | 61 | `npm install @rbtr/pi` | pi extension that surfaces rbtr's structural code index to the LLM — symbol search, source read, file outlines, depende… |
| 818 | [@e9n/pi-mobile](https://www.npmjs.com/package/@e9n/pi-mobile) | 60 | `npm install @e9n/pi-mobile` | PWA mobile app for Pi agents — mounts on pi-webserver at /mobile |
| 819 | [pi-claude-boost](https://www.npmjs.com/package/pi-claude-boost) | 60 | `npm install pi-claude-boost` | Shows whether Claude's 2x usage boost is active right now, with countdowns in both directions |
| 820 | [pi-budget-model](https://www.npmjs.com/package/pi-budget-model) | 60 | `npm install pi-budget-model` | Auto-select the cheapest available model for background tasks in pi |
| 821 | [@interleavelove/keating](https://www.npmjs.com/package/@interleavelove/keating) | 60 | `npm install @interleavelove/keating` | A Pi-powered hyperteacher package with self-improving teaching policies, lesson maps, and animated visual teaching arti… |
| 822 | [@badliveware/pi-tool-feedback](https://www.npmjs.com/package/@badliveware/pi-tool-feedback) | 59 | `npm install @badliveware/pi-tool-feedback` | Generic watched-tool feedback prompts and passive summaries for Pi. |
| 823 | [pi-computer-use](https://www.npmjs.com/package/pi-computer-use) | 59 | `npm install pi-computer-use` | Pi extension for GUI computer-use on macOS |
| 824 | [pigibrack](https://www.npmjs.com/package/pigibrack) | 59 | `npm install pigibrack` | Pi extension package for structural Scheme/Guile editing with a persistent REPL sidecar |
| 825 | [@kyuc/pi-cat-loader](https://www.npmjs.com/package/@kyuc/pi-cat-loader) | 58 | `npm install @kyuc/pi-cat-loader` | Animated cat loading indicator for pi. |
| 826 | [@odradekk/vera-theme](https://www.npmjs.com/package/@odradekk/vera-theme) | 58 | `npm install @odradekk/vera-theme` | Vera unified theme package: Obsidian-toned palette plus Kylin-inspired chrome (banner, status line, spinner, thinking c… |
| 827 | [pi-pai-lite](https://www.npmjs.com/package/pi-pai-lite) | 58 | `npm install pi-pai-lite` | Structured thinking modes and lightweight persistent memory for pi |
| 828 | [pi-profiles](https://www.npmjs.com/package/pi-profiles) | 58 | `npm install pi-profiles` | Configuration profile manager for pi (pi.dev) |
| 829 | [@javimolina/pi-rg](https://www.npmjs.com/package/@javimolina/pi-rg) | 58 | `npm install @javimolina/pi-rg` | Pi package that adds a /r command with cached ripgrep-backed file completions |
| 830 | [pi-repl](https://www.npmjs.com/package/pi-repl) | 57 | `npm install pi-repl` | Collaborative tmux-backed REPL sessions for pi |
| 831 | [@ifiokjr/oh-pi-themes](https://www.npmjs.com/package/@ifiokjr/oh-pi-themes) | 57 | `npm install @ifiokjr/oh-pi-themes` | Color themes for pi: cyberpunk, nord, gruvbox, tokyo-night, catppuccin, and more. |
| 832 | [pi-read-mode](https://www.npmjs.com/package/pi-read-mode) | 57 | `npm install pi-read-mode` | Scroll through conversation history while composing a follow-up |
| 833 | [pi-websearch-perplexity](https://www.npmjs.com/package/pi-websearch-perplexity) | 56 | `npm install pi-websearch-perplexity` | Pi web search tool powered by Perplexity Sonar |
| 834 | [@ogulcancelik/pi-sketch](https://www.npmjs.com/package/@ogulcancelik/pi-sketch) | 56 | `npm install @ogulcancelik/pi-sketch` | Quick sketch pad for pi - draw in browser, send to models |
| 835 | [pi-glitchgate](https://www.npmjs.com/package/pi-glitchgate) | 56 | `npm install pi-glitchgate` | Pi coding agent extension providing access to Glitchgate models via API key authentication |
| 836 | [@justram/pi-undo-redo](https://www.npmjs.com/package/@justram/pi-undo-redo) | 55 | `npm install @justram/pi-undo-redo` | Buffered undo/redo extension for Pi coding agent |
| 837 | [pi-websearch-serper](https://www.npmjs.com/package/pi-websearch-serper) | 55 | `npm install pi-websearch-serper` | Pi web search tool powered by Serper (Google Search) |
| 838 | [@romansix/pi-tmux](https://www.npmjs.com/package/@romansix/pi-tmux) | 55 | `npm install @romansix/pi-tmux` | Pi coding agent extension: tmux session management per project |
| 839 | [pi-system-reminders](https://www.npmjs.com/package/pi-system-reminders) | 54 | `npm install pi-system-reminders` | Reactive system reminders for pi - steer agents with contextual nudges during long agentic flows |
| 840 | [pi-websearch-valyu](https://www.npmjs.com/package/pi-websearch-valyu) | 54 | `npm install pi-websearch-valyu` | Pi web search tool powered by Valyu (academic and paywalled sources) |
| 841 | [@pborck/pi-de](https://www.npmjs.com/package/@pborck/pi-de) | 54 | `npm install @pborck/pi-de` | IDE integration for pi coding agent - shows current file/selection from VS Code, JetBrains, etc. |
| 842 | [pi-websearch-parallel](https://www.npmjs.com/package/pi-websearch-parallel) | 54 | `npm install pi-websearch-parallel` | Pi web search tool powered by Parallel |
| 843 | [@trq/pi-colgrep](https://www.npmjs.com/package/@trq/pi-colgrep) | 54 | `npm install @trq/pi-colgrep` | pi extension that adds a colgrep tool and prioritizes semantic/hybrid ColGrep search |
| 844 | [pi-stories](https://www.npmjs.com/package/pi-stories) | 54 | `npm install pi-stories` | Multi-agent orchestration with Blueprint Engine [D]/[N] interleaving and cost routing |
| 845 | [@saibolla/ada](https://www.npmjs.com/package/@saibolla/ada) | 53 | `npm install @saibolla/ada` | The AI research agent for the terminal |
| 846 | [pi-code-index](https://www.npmjs.com/package/pi-code-index) | 53 | `npm install pi-code-index` | Fast, precise codebase exploration via universal-ctags — symbol search, outlines, exact code retrieval, global index st… |
| 847 | [@anthaathi/pi-companion-extensions](https://www.npmjs.com/package/@anthaathi/pi-companion-extensions) | 53 | `npm install @anthaathi/pi-companion-extensions` | Companion extensions for the pi coding agent — plan mode, and more |
| 848 | [pi-websearch-exa](https://www.npmjs.com/package/pi-websearch-exa) | 53 | `npm install pi-websearch-exa` | Pi web search tool powered by Exa |
| 849 | [@ifiokjr/oh-pi-extensions](https://www.npmjs.com/package/@ifiokjr/oh-pi-extensions) | 53 | `npm install @ifiokjr/oh-pi-extensions` | Core pi extensions: safe-guard, git-guard, auto-session, custom-footer, and more. |
| 850 | [@artale/pi-compact](https://www.npmjs.com/package/@artale/pi-compact) | 53 | `npm install @artale/pi-compact` | Smart context compaction for Pi. Topic-aware summarization that preserves code context and drops chatter. Configurable… |
| 851 | [@sherif-fanous/pi-theme-sync](https://www.npmjs.com/package/@sherif-fanous/pi-theme-sync) | 53 | `npm install @sherif-fanous/pi-theme-sync` | Pi package extension that automatically switches Pi themes to match terminal or OS appearance |
| 852 | [shopq](https://www.npmjs.com/package/shopq) | 53 | `npm install shopq` | A zero-dependency Shopify Admin CLI built on Bun |
| 853 | [pi-extension-codex-apply-patch](https://www.npmjs.com/package/pi-extension-codex-apply-patch) | 52 | `npm install pi-extension-codex-apply-patch` | Pi extension that adds Codex-style CFG constrained apply_patch with local verification |
| 854 | [pi-multicodex](https://www.npmjs.com/package/pi-multicodex) | 52 | `npm install pi-multicodex` | Rotate multiple ChatGPT Codex OAuth accounts for pi |
| 855 | [@artale/pi-tokens](https://www.npmjs.com/package/@artale/pi-tokens) | 52 | `npm install @artale/pi-tokens` | Token cost intelligence for Pi. Per-tool cost breakdown, $/call estimates, budget alerts, expensive call finder. |
| 856 | [@sysid/pi-vim](https://www.npmjs.com/package/@sysid/pi-vim) | 52 | `npm install @sysid/pi-vim` | Modal vim editing extension for the pi coding agent |
| 857 | [pi-tau-mux](https://www.npmjs.com/package/pi-tau-mux) | 51 | `npm install pi-tau-mux` | Web UI that mirrors your Pi terminal session in the browser - tmux session aware |
| 858 | [pi-co-authored-by](https://www.npmjs.com/package/pi-co-authored-by) | 51 | `npm install pi-co-authored-by` | A Pi extension that automatically appends Co-Authored-By and Generated-By git trailers to commit messages with the mode… |
| 859 | [@anthnykr/pi-codex-fast-mode](https://www.npmjs.com/package/@anthnykr/pi-codex-fast-mode) | 51 | `npm install @anthnykr/pi-codex-fast-mode` | Pi extension that adds a fast-mode toggle for supported OpenAI Codex models. |
| 860 | [@artale/pi-validate](https://www.npmjs.com/package/@artale/pi-validate) | 51 | `npm install @artale/pi-validate` | Production readiness validator. Score projects on code, tests, docs, config, deploy. Inspired by MrE's system-validator… |
| 861 | [@marckrenn/pi-sub-status](https://www.npmjs.com/package/@marckrenn/pi-sub-status) | 51 | `npm install @marckrenn/pi-sub-status` | Compact status-line client for pi subscription usage |
| 862 | [@e9n/pi-cmux](https://www.npmjs.com/package/@e9n/pi-cmux) | 50 | `npm install @e9n/pi-cmux` | cmux terminal app integration for pi — notifications, pane management, screen reading, and browser automation |
| 863 | [pi-vault-client](https://www.npmjs.com/package/pi-vault-client) | 50 | `npm install pi-vault-client` | pi extension package for vault workflows in monorepo runtime |
| 864 | [pi-timestamps](https://www.npmjs.com/package/pi-timestamps) | 50 | `npm install pi-timestamps` | Timestamps extension for pi coding agent — message timing widget, elapsed timer, and interactive timeline browser |
| 865 | [pi-tetris](https://www.npmjs.com/package/pi-tetris) | 50 | `npm install pi-tetris` | Play Tetris in pi! All 7 tetrominoes, ghost piece, wall kicks, hold piece, score, levels, and session save/restore. |
| 866 | [pi-bash-trim](https://www.npmjs.com/package/pi-bash-trim) | 50 | `npm install pi-bash-trim` | Smart bash output trimming for pi to fit LLM context budgets |
| 867 | [pi-emacs](https://www.npmjs.com/package/pi-emacs) | 50 | `npm install pi-emacs` | A collection of Emacs related pi tools |
| 868 | [pi-terminal](https://www.npmjs.com/package/pi-terminal) | 50 | `npm install pi-terminal` | Adds /terminal and /t commands to run shell commands in the current working directory and display output inline — with… |
| 869 | [pi-mill](https://www.npmjs.com/package/pi-mill) | 49 | `npm install pi-mill` | Pi extension package that routes subagent execution through mill |
| 870 | [pi-stash](https://www.npmjs.com/package/pi-stash) | 49 | `npm install pi-stash` | Pi extension that stashes the current editor draft with Alt+S |
| 871 | [pi-airgun](https://www.npmjs.com/package/pi-airgun) | 49 | `npm install pi-airgun` | Pi extensions for LLM context compression and Anthropic prompt caching. Zero LLM inference cost. |
| 872 | [pi-websearch-serpapi](https://www.npmjs.com/package/pi-websearch-serpapi) | 49 | `npm install pi-websearch-serpapi` | Pi web search tool powered by SerpAPI |
| 873 | [@artale/pi-leads](https://www.npmjs.com/package/@artale/pi-leads) | 49 | `npm install @artale/pi-leads` | Terminal CRM and outreach pipeline. Track prospects, manage follow-ups, draft messages. |
| 874 | [pi-read-many](https://www.npmjs.com/package/pi-read-many) | 49 | `npm install pi-read-many` | Batch file reads for Pi via read_many with adaptive packing under output limits |
| 875 | [@artale/pi-sudoku](https://www.npmjs.com/package/@artale/pi-sudoku) | 49 | `npm install @artale/pi-sudoku` | Classic 9x9 Sudoku puzzle with pencil marks, themes, and stats. |
| 876 | [pi-auto-mode-router](https://www.npmjs.com/package/pi-auto-mode-router) | 49 | `npm install pi-auto-mode-router` | Auto Mode Router extension for Pi: route prompts between frontend, logic, and terminal models with optional mid-turn do… |
| 877 | [pi-no-soft-cursor](https://www.npmjs.com/package/pi-no-soft-cursor) | 49 | `npm install pi-no-soft-cursor` | Remove the editor's reverse-video soft cursor · from yapp |
| 878 | [@artale/pi-params](https://www.npmjs.com/package/@artale/pi-params) | 48 | `npm install @artale/pi-params` | Generation parameter control for Pi. Set temperature, top_p, max_tokens, and other model params per conversation. |
| 879 | [@ssweens/pi-qq](https://www.npmjs.com/package/@ssweens/pi-qq) | 48 | `npm install @ssweens/pi-qq` | Quick questions with /qq or /btw — ask the LLM about the current session without affecting the main conversation |
| 880 | [@anthnykr/pi-study-commits](https://www.npmjs.com/package/@anthnykr/pi-study-commits) | 48 | `npm install @anthnykr/pi-study-commits` | Pi extension for selecting recent git commits and injecting their diffs into the conversation. |
| 881 | [@0xkobold/pi-autoupdate](https://www.npmjs.com/package/@0xkobold/pi-autoupdate) | 47 | `npm install @0xkobold/pi-autoupdate` | Automatically detect and install pi updates on startup |
| 882 | [@artale/pi-rewind](https://www.npmjs.com/package/@artale/pi-rewind) | 47 | `npm install @artale/pi-rewind` | Checkpoint and rewind for Pi. Auto-snapshot before edits, /rewind to restore with diff preview. |
| 883 | [@walterra/pi-graphviz](https://www.npmjs.com/package/@walterra/pi-graphviz) | 47 | `npm install @walterra/pi-graphviz` | Graphviz chart extension for pi coding agent - render DOT diagrams as inline images |
| 884 | [@fnnm/pi-ast-grep](https://www.npmjs.com/package/@fnnm/pi-ast-grep) | 47 | `npm install @fnnm/pi-ast-grep` | ast-grep extension for Pi. |
| 885 | [pi-rtk-noemoji](https://www.npmjs.com/package/pi-rtk-noemoji) | 46 | `npm install pi-rtk-noemoji` | Fork of pi-rtk with all emoji removed from output. Same token reduction, plain text only. |
| 886 | [pi-websearch-jina](https://www.npmjs.com/package/pi-websearch-jina) | 46 | `npm install pi-websearch-jina` | Pi web search tool powered by Jina AI |
| 887 | [pi-websearch-you](https://www.npmjs.com/package/pi-websearch-you) | 46 | `npm install pi-websearch-you` | Pi web search tool powered by You.com |
| 888 | [@yevhen.b/bo-pi](https://www.npmjs.com/package/@yevhen.b/bo-pi) | 45 | `npm install @yevhen.b/bo-pi` | Pi extensions for tool preflight approvals. |
| 889 | [@georgebashi/pi-retry](https://www.npmjs.com/package/@georgebashi/pi-retry) | 45 | `npm install @georgebashi/pi-retry` | pi extension: auto-retry transient streaming errors + /retry command |
| 890 | [@artale/pi-grounded](https://www.npmjs.com/package/@artale/pi-grounded) | 45 | `npm install @artale/pi-grounded` | Evidence-grounded schema discovery. Zero-shot, self-documenting, every decision cited. |
| 891 | [pi-coordinator](https://www.npmjs.com/package/pi-coordinator) | 45 | `npm install pi-coordinator` | Four-phase workflow: Research → Synthesis → Implementation → Verification, based on Claude Code coordinator feature pre… |
| 892 | [@askjo/pi-reflect](https://www.npmjs.com/package/@askjo/pi-reflect) | 45 | `npm install @askjo/pi-reflect` | Self-improving behavioral files for pi coding agents. Analyzes session transcripts for correction patterns and makes su… |
| 893 | [pi-clear](https://www.npmjs.com/package/pi-clear) | 45 | `npm install pi-clear` | Adds /clear and /c commands (plus bare message interception) to wipe the conversation context and start a fresh session… |
| 894 | [pi-captain](https://www.npmjs.com/package/pi-captain) | 44 | `npm install pi-captain` | Captain — multi-agent pipeline orchestrator for pi. Define specialized agents, wire them into sequential/parallel/pool… |
| 895 | [pi-kota](https://www.npmjs.com/package/pi-kota) | 44 | `npm install pi-kota` | KotaDB thin wrapper + context pruning extension for pi |
| 896 | [pi-direnv](https://www.npmjs.com/package/pi-direnv) | 43 | `npm install pi-direnv` | Auto-load direnv environment at session start — ensures bash commands have project-specific env vars from .envrc |
| 897 | [pi-extension-stt](https://www.npmjs.com/package/pi-extension-stt) | 43 | `npm install pi-extension-stt` | Pi extension package that adds local microphone speech-to-text via faster-whisper. |
| 898 | [@artale/pi-gepa](https://www.npmjs.com/package/@artale/pi-gepa) | 43 | `npm install @artale/pi-gepa` | Skill scanner and quality scorer for Pi. Scans, scores, and identifies weak skills. Pairs with pi-evolve for mutation. |
| 899 | [@calesennett/pi-hn](https://www.npmjs.com/package/@calesennett/pi-hn) | 43 | `npm install @calesennett/pi-hn` | Hacker News front-page reader extension for pi |
| 900 | [pi-worlds](https://www.npmjs.com/package/pi-worlds) | 43 | `npm install pi-worlds` | Pi extension for generating 3D worlds via the World Labs Marble API |
| 901 | [pi-refactor-loop](https://www.npmjs.com/package/pi-refactor-loop) | 43 | `npm install pi-refactor-loop` | Iterative refactoring pipeline for pi. Runs analyze → refactor → verify cycles with a TUI progress widget, git commit-a… |
| 902 | [pi-github](https://www.npmjs.com/package/pi-github) | 42 | `npm install pi-github` | GitHub tool extension for Pi: format threads, list issues/PRs, and inspect PR diffs/images. |
| 903 | [@quant-pi/ext](https://www.npmjs.com/package/@quant-pi/ext) | 41 | `npm install @quant-pi/ext` | Small, hand-written, composable modules for pi-agent — inspired by mini.nvim, focused on simple, predictable building b… |
| 904 | [pi-conversation-retro](https://www.npmjs.com/package/pi-conversation-retro) | 41 | `npm install pi-conversation-retro` | Pi extension for session review, conversation analysis, and agent mistake detection. Runs automated postmortem reviews… |
| 905 | [@ujjwalgrover/pi-catppuccin](https://www.npmjs.com/package/@ujjwalgrover/pi-catppuccin) | 41 | `npm install @ujjwalgrover/pi-catppuccin` | Beautiful Catppuccin themes for Pi Coding Agent |
| 906 | [pi-auth-profiles](https://www.npmjs.com/package/pi-auth-profiles) | 41 | `npm install pi-auth-profiles` | Auth profile switching for pi — save and switch between named credential profiles via slash commands |
| 907 | [pi-mem](https://www.npmjs.com/package/pi-mem) | 41 | `npm install pi-mem` | Persistent memory extension for pi — captures observations, compresses them into searchable memories, and injects conte… |
| 908 | [@ghoseb/pi-damage-control](https://www.npmjs.com/package/@ghoseb/pi-damage-control) | 40 | `npm install @ghoseb/pi-damage-control` | AST-based Damage Control extension for Pi |
| 909 | [@aaronmaturen/pi-config](https://www.npmjs.com/package/@aaronmaturen/pi-config) | 40 | `npm install @aaronmaturen/pi-config` | Professional development workflow skills for pi — JIRA integration, PR review, and investigation tools |
| 910 | [pi-google-workspace](https://www.npmjs.com/package/pi-google-workspace) | 40 | `npm install pi-google-workspace` | Google Workspace extension for pi (Drive, Docs, Sheets, Slides with OAuth) |
| 911 | [@baggiiiie/pi-goal](https://www.npmjs.com/package/@baggiiiie/pi-goal) | 39 | `npm install @baggiiiie/pi-goal` | Codex-style persisted goals for pi coding agent sessions. |
| 912 | [@e9n/pi-myfinance](https://www.npmjs.com/package/@e9n/pi-myfinance) | 39 | `npm install @e9n/pi-myfinance` | Personal finance tracking extension for pi |
| 913 | [pi-mdc-rules](https://www.npmjs.com/package/pi-mdc-rules) | 39 | `npm install pi-mdc-rules` | MDC rules extension for pi-coding-agent - loads and enforces rules from Markdown files |
| 914 | [@0xkobold/pi-wallet](https://www.npmjs.com/package/@0xkobold/pi-wallet) | 39 | `npm install @0xkobold/pi-wallet` | CDP Agentic Wallet + x402 payments for pi-coding-agent. Zero-setup agent wallets with Base L2 support |
| 915 | [@ssweens/pi-compaxxt](https://www.npmjs.com/package/@ssweens/pi-compaxxt) | 39 | `npm install @ssweens/pi-compaxxt` | Enhanced compaction for pi — session context and LLM-ranked important files |
| 916 | [@artale/pi-maze](https://www.npmjs.com/package/@artale/pi-maze) | 39 | `npm install @artale/pi-maze` | Procedural maze generator with BFS solver, themes, and timer. |
| 917 | [@versdotsh/reef](https://www.npmjs.com/package/@versdotsh/reef) | 39 | `npm install @versdotsh/reef` | Self-improving fleet infrastructure — the minimum kernel agents need to build their own tools |
| 918 | [@oribish/brainkit](https://www.npmjs.com/package/@oribish/brainkit) | 39 | `npm install @oribish/brainkit` | Second brain extension for pi - capture, organize, and retrieve knowledge with PARA method |
| 919 | [@artale/pi-evolve](https://www.npmjs.com/package/@artale/pi-evolve) | 38 | `npm install @artale/pi-evolve` | Evolutionary self-improvement for Pi. AlphaEvolve-inspired mutation, evaluation, and selection of prompts, skills, and… |
| 920 | [@artale/pi-db](https://www.npmjs.com/package/@artale/pi-db) | 38 | `npm install @artale/pi-db` | Local database with SQL-like queries. JSON-backed tables with where clauses, schema, export. |
| 921 | [pi-psst](https://www.npmjs.com/package/pi-psst) | 38 | `npm install pi-psst` | Ephemeral side questions for pi — ask without cluttering your conversation history |
| 922 | [pi-zenmux](https://www.npmjs.com/package/pi-zenmux) | 38 | `npm install pi-zenmux` | ZenMux provider extension for pi-mono |
| 923 | [@johnnywu/pi-filechanges](https://www.npmjs.com/package/@johnnywu/pi-filechanges) | 37 | `npm install @johnnywu/pi-filechanges` | Tracks files changed by pi via edit and write tools, with a toggleable file changes widget |
| 924 | [pi-sre-mode](https://www.npmjs.com/package/pi-sre-mode) | 37 | `npm install pi-sre-mode` | Pi-native incident investigation workflow with support for private overlays. |
| 925 | [pi-pet-hn](https://www.npmjs.com/package/pi-pet-hn) | 37 | `npm install pi-pet-hn` | Virtual pet that levels up with every tool call + HackerNews scrolling ticker for pi coding agent. |
| 926 | [@e9n/pi-vault](https://www.npmjs.com/package/@e9n/pi-vault) | 37 | `npm install @e9n/pi-vault` | Obsidian vault tool and health dashboard for pi |
| 927 | [@artale/pi-gate](https://www.npmjs.com/package/@artale/pi-gate) | 36 | `npm install @artale/pi-gate` | Conditional execution gates for Pi. Hold, approve, or block tool calls based on rules. Safety layer for dangerous opera… |
| 928 | [@marcfargas/pi-tramp](https://www.npmjs.com/package/@marcfargas/pi-tramp) | 36 | `npm install @marcfargas/pi-tramp` | TRAMP-like transparent remote execution for pi — tools execute remotely, pi stays local |
| 929 | [@artale/pi-infra](https://www.npmjs.com/package/@artale/pi-infra) | 36 | `npm install @artale/pi-infra` | Platform engineering audit tool (Kelsey Hightower edition). |
| 930 | [@gswangg/duncan-pi](https://www.npmjs.com/package/@gswangg/duncan-pi) | 36 | `npm install @gswangg/duncan-pi` | Session memory for pi — query dormant sessions, hand off context across session boundaries |
| 931 | [pi-safety-destructive-commands](https://www.npmjs.com/package/pi-safety-destructive-commands) | 36 | `npm install pi-safety-destructive-commands` | Intercepts dangerous bash commands (dd, mkfs, rm -rf /, fork bombs, iptables flush, shutdown…) and hard-blocks or promp… |
| 932 | [pi-safety-git-operations](https://www.npmjs.com/package/pi-safety-git-operations) | 36 | `npm install pi-safety-git-operations` | Guards destructive git and GitHub/GitLab CLI operations with severity-based confirmation dialogs and session memory. Co… |
| 933 | [pi-ding](https://www.npmjs.com/package/pi-ding) | 35 | `npm install pi-ding` | pi extension: play a sound when the agent finishes a prompt |
| 934 | [pi-gitlab-duo](https://www.npmjs.com/package/pi-gitlab-duo) | 35 | `npm install pi-gitlab-duo` | GitLab Duo provider extension for pi |
| 935 | [@artale/pi-caffeinate](https://www.npmjs.com/package/@artale/pi-caffeinate) | 35 | `npm install @artale/pi-caffeinate` | Keep your machine awake during long Pi sessions. Prevents sleep/screen lock on macOS, Windows, Linux. |
| 936 | [@artale/pi-doc](https://www.npmjs.com/package/@artale/pi-doc) | 35 | `npm install @artale/pi-doc` | Documentation generator. Scan exports, check doc coverage, scaffold READMEs, generate API reference. |
| 937 | [pi-agent-pack](https://www.npmjs.com/package/pi-agent-pack) | 35 | `npm install pi-agent-pack` | 暂无描述 |
| 938 | [pi-file-change-reminder](https://www.npmjs.com/package/pi-file-change-reminder) | 35 | `npm install pi-file-change-reminder` | Pi extension that injects reminder messages when specific files are modified. |
| 939 | [pi-ghostty-notifier](https://www.npmjs.com/package/pi-ghostty-notifier) | 35 | `npm install pi-ghostty-notifier` | Ghostty-first notifications with smart summaries for Pi |
| 940 | [@artale/pi-rag](https://www.npmjs.com/package/@artale/pi-rag) | 34 | `npm install @artale/pi-rag` | Local RAG pipeline. BM25 keyword search over indexed files. Zero cloud, zero deps, fully offline. |
| 941 | [@artale/pi-clipboard](https://www.npmjs.com/package/@artale/pi-clipboard) | 34 | `npm install @artale/pi-clipboard` | Clipboard manager for Pi. Copy/paste with persistent history, search, pin, and GitHub gist creation. |
| 942 | [@elianiva/pi-ckers](https://www.npmjs.com/package/@elianiva/pi-ckers) | 34 | `npm install @elianiva/pi-ckers` | Modular namespace pickers for pi: @file:, @git:, @jj: |
| 943 | [@artale/pi-stack](https://www.npmjs.com/package/@artale/pi-stack) | 34 | `npm install @artale/pi-stack` | Local AI infrastructure generator. Docker compose for Ollama, n8n, Flowise, Supabase, Neo4j, and more. |
| 944 | [pi-non-interactive](https://www.npmjs.com/package/pi-non-interactive) | 34 | `npm install pi-non-interactive` | Prevent agent hangs on interactive commands — sets GIT_EDITOR=true, PAGER=cat, etc. for all bash executions |
| 945 | [@tryinget/pi-extensions-package-template](https://www.npmjs.com/package/@tryinget/pi-extensions-package-template) | 33 | `npm install @tryinget/pi-extensions-package-template` | Copier template + CLI for bootstrapping production-ready pi extension packages inside a monorepo |
| 946 | [@tmustier/pi-clean-slides](https://www.npmjs.com/package/@tmustier/pi-clean-slides) | 33 | `npm install @tmustier/pi-clean-slides` | PowerPoint CLI skill for Pi — inspect, edit, generate table slides from YAML, render to PNG. |
| 947 | [@e9n/pi-td](https://www.npmjs.com/package/@e9n/pi-td) | 33 | `npm install @e9n/pi-td` | Task management extension for pi — issues, sessions, handoffs, and web dashboard |
| 948 | [@artale/pi-json](https://www.npmjs.com/package/@artale/pi-json) | 33 | `npm install @artale/pi-json` | Interactive JSON viewer, query, and formatter for pi. |
| 949 | [pi-2048](https://www.npmjs.com/package/pi-2048) | 33 | `npm install pi-2048` | 2048 sliding tile puzzle for pi coding agent |
| 950 | [pi-cc-router](https://www.npmjs.com/package/pi-cc-router) | 33 | `npm install pi-cc-router` | Pi coding agent extension that routes LLM calls through Claude Code CLI |
| 951 | [@artale/pi-loop](https://www.npmjs.com/package/@artale/pi-loop) | 33 | `npm install @artale/pi-loop` | Agent loop for Pi. Goal-driven, fixed-pass, and pipeline loops with [D]/[N] gates. Inspired by pi-stories Blueprint Eng… |
| 952 | [@ssweens/pi-dynamic-models](https://www.npmjs.com/package/@ssweens/pi-dynamic-models) | 33 | `npm install @ssweens/pi-dynamic-models` | Dynamic model discovery for Pi coding agent — fetches models from any configured API server at startup |
| 953 | [pi-figma](https://www.npmjs.com/package/pi-figma) | 33 | `npm install pi-figma` | Pi package for Figma integration — inspect files, components, styles, nodes, export assets, and read comments directly… |
| 954 | [@artale/pi-api](https://www.npmjs.com/package/@artale/pi-api) | 33 | `npm install @artale/pi-api` | API development toolkit. Route scanning (Express/Next/Flask/FastAPI), endpoint testing, OpenAPI spec generation. |
| 955 | [@artale/pi-statusbar](https://www.npmjs.com/package/@artale/pi-statusbar) | 33 | `npm install @artale/pi-statusbar` | Custom status bar for Pi. Shows context %, tokens, cost estimate, git branch, and uptime in the footer. |
| 956 | [pi-banner](https://www.npmjs.com/package/pi-banner) | 33 | `npm install pi-banner` | A rainbow pi banner extension for pi |
| 957 | [@0xkobold/pi-erc8004](https://www.npmjs.com/package/@0xkobold/pi-erc8004) | 32 | `npm install @0xkobold/pi-erc8004` | ERC-8004 Protocol for pi-coding-agent. Agent identity, reputation, and discovery on Base L2 |
| 958 | [@artale/pi-health](https://www.npmjs.com/package/@artale/pi-health) | 32 | `npm install @artale/pi-health` | Session health with error diagnosis for Pi. Detects error patterns, warns on degradation, tracks tool reliability. |
| 959 | [@e9n/pi-github](https://www.npmjs.com/package/@e9n/pi-github) | 32 | `npm install @e9n/pi-github` | GitHub integration for pi — PR management, issue tracking, and review feedback commands |
| 960 | [pi-pirs](https://www.npmjs.com/package/pi-pirs) | 31 | `npm install pi-pirs` | Pi extension that tracks bash tool token usage with stats, grouping, and export |
| 961 | [@0xkobold/pi-alerts](https://www.npmjs.com/package/@0xkobold/pi-alerts) | 31 | `npm install @0xkobold/pi-alerts` | Customizable chimes and notifications for pi |
| 962 | [@juanibiapina/pi-files](https://www.npmjs.com/package/@juanibiapina/pi-files) | 31 | `npm install @juanibiapina/pi-files` | Pi extension that tracks files read/written/edited by the agent |
| 963 | [@q.roy/pi-remote](https://www.npmjs.com/package/@q.roy/pi-remote) | 31 | `npm install @q.roy/pi-remote` | Remote terminal access for pi via WebSocket and browser |
| 964 | [@prinova/pi-github-tools](https://www.npmjs.com/package/@prinova/pi-github-tools) | 30 | `npm install @prinova/pi-github-tools` | GitHub repository tools extension for pi-coding-agent |
| 965 | [@artale/pi-serial](https://www.npmjs.com/package/@artale/pi-serial) | 30 | `npm install @artale/pi-serial` | Hardware/IoT interface. List serial ports, identify devices (Arduino, ESP32, 3D printers), send/receive data, monitor s… |
| 966 | [@artale/pi-stash](https://www.npmjs.com/package/@artale/pi-stash) | 30 | `npm install @artale/pi-stash` | Prompt stash for Pi. Save, list, and restore prompt drafts. Like git stash for your prompts. |
| 967 | [pi-flow-enforcer](https://www.npmjs.com/package/pi-flow-enforcer) | 29 | `npm install pi-flow-enforcer` | Enforces a strict workflow in pi.dev sessions: |
| 968 | [pi-evalset-lab](https://www.npmjs.com/package/pi-evalset-lab) | 29 | `npm install pi-evalset-lab` | pi extension for fixed-task-set eval runs and prompt/system comparisons |
| 969 | [@edmundmiller/pi-dcp](https://www.npmjs.com/package/@edmundmiller/pi-dcp) | 29 | `npm install @edmundmiller/pi-dcp` | Dynamic Context Pruning extension for pi - intelligently removes obsolete messages to optimize token usage |
| 970 | [@artale/pi-focus](https://www.npmjs.com/package/@artale/pi-focus) | 29 | `npm install @artale/pi-focus` | Focus timer with productivity metrics for Pi. Tracks tok/min during focus vs break. Data-driven productivity. |
| 971 | [@vaayne/pi-rules](https://www.npmjs.com/package/@vaayne/pi-rules) | 29 | `npm install @vaayne/pi-rules` | Pi extension that scans .claude/rules/ and .agents/rules/ folders for project rules |
| 972 | [@brain0pia/pi-extension-times](https://www.npmjs.com/package/@brain0pia/pi-extension-times) | 29 | `npm install @brain0pia/pi-extension-times` | Profile Pi extension startup time, inspect slow extensions, and guide safe performance optimizations. |
| 973 | [@georgebashi/pi-codemode](https://www.npmjs.com/package/@georgebashi/pi-codemode) | 29 | `npm install @georgebashi/pi-codemode` | Code Mode extension for Pi — execute tools via TypeScript code, with type-checking, shell via zx, and MCP integration |
| 974 | [@artale/pi-cron](https://www.npmjs.com/package/@artale/pi-cron) | 29 | `npm install @artale/pi-cron` | Task scheduling and reminders. Cron-like scheduling for AI agents with persistent jobs. |
| 975 | [@ogulcancelik/pi-flicker](https://www.npmjs.com/package/@ogulcancelik/pi-flicker) | 29 | `npm install @ogulcancelik/pi-flicker` | A pi extension that brings Claude Code flicker to pi |
| 976 | [pi-critique](https://www.npmjs.com/package/pi-critique) | 28 | `npm install pi-critique` | Structured AI critique for writing and code. Pairs well with annotated-reply and markdown-preview but works standalone. |
| 977 | [pi-telemetry-otel](https://www.npmjs.com/package/pi-telemetry-otel) | 28 | `npm install pi-telemetry-otel` | OpenTelemetry (OTLP/HTTP) telemetry extension + helper APIs for pi |
| 978 | [pi-vscode-terminal-notification](https://www.npmjs.com/package/pi-vscode-terminal-notification) | 28 | `npm install pi-vscode-terminal-notification` | Pi extension for VS Code terminal notifications when Pi finishes a turn. |
| 979 | [@0xkobold/pi-cursor](https://www.npmjs.com/package/@0xkobold/pi-cursor) | 28 | `npm install @0xkobold/pi-cursor` | pi extension for Cursor AI agent via ACP protocol |
| 980 | [@artale/pi-lean](https://www.npmjs.com/package/@artale/pi-lean) | 28 | `npm install @artale/pi-lean` | Lean tool output for Pi. Auto-truncate verbose bash output, collapse npm/pip noise, keep errors and results visible. |
| 981 | [@clankie/json-ui-render](https://www.npmjs.com/package/@clankie/json-ui-render) | 28 | `npm install @clankie/json-ui-render` | Render structured chat UI in clankie via details.renderHint and details.uiSpec |
| 982 | [@mmcook/pi-brainmaxx](https://www.npmjs.com/package/@mmcook/pi-brainmaxx) | 28 | `npm install @mmcook/pi-brainmaxx` | A project brain for Pi: repo-local memory, reflection, and session-history rumination |
| 983 | [pi-app-server](https://www.npmjs.com/package/pi-app-server) | 27 | `npm install pi-app-server` | Session multiplexer for pi-coding-agent |
| 984 | [@4meta5/pi-shell-cli](https://www.npmjs.com/package/@4meta5/pi-shell-cli) | 27 | `npm install @4meta5/pi-shell-cli` | CLI for generating reproducible pi project instances from pinned manifests. |
| 985 | [pi-minesweeper](https://www.npmjs.com/package/pi-minesweeper) | 27 | `npm install pi-minesweeper` | Minesweeper for pi coding agent — classic mine-clearing puzzle |
| 986 | [pi-which-key](https://www.npmjs.com/package/pi-which-key) | 27 | `npm install pi-which-key` | Searchable keybinding cheatsheet panel for pi (Ctrl+/ or /which-key) |
| 987 | [pi-codex-profile](https://www.npmjs.com/package/pi-codex-profile) | 27 | `npm install pi-codex-profile` | Codex profile extension for pi coding agent (Codex model presets + apply_patch tool) |
| 988 | [pi-readline-search](https://www.npmjs.com/package/pi-readline-search) | 27 | `npm install pi-readline-search` | Pi extension for GNU Readline-style reverse search on Ctrl+R |
| 989 | [@ifiokjr/oh-pi-ant-colony](https://www.npmjs.com/package/@ifiokjr/oh-pi-ant-colony) | 27 | `npm install @ifiokjr/oh-pi-ant-colony` | Autonomous multi-agent swarm extension for pi — adaptive concurrency, pheromone communication. |
| 990 | [pi-safety-network-exfiltration](https://www.npmjs.com/package/pi-safety-network-exfiltration) | 27 | `npm install pi-safety-network-exfiltration` | Blocks data exfiltration, remote code execution via piped downloads, secrets embedded in commands, and unauthorized net… |
| 991 | [@artale/pi-watch](https://www.npmjs.com/package/@artale/pi-watch) | 27 | `npm install @artale/pi-watch` | Watch any video with Pi. Frame extraction, transcription, analysis. |
| 992 | [pi-zellij-tab-namer](https://www.npmjs.com/package/pi-zellij-tab-namer) | 27 | `npm install pi-zellij-tab-namer` | Automatically renames the active Zellij tab to a short summary of the conversation after each agent turn, using a fast… |
| 993 | [msco-pi-lot](https://www.npmjs.com/package/msco-pi-lot) | 26 | `npm install msco-pi-lot` | Microsoft Copilot provider extension for pi coding agent. |
| 994 | [@lukebarton/pi-de-claude](https://www.npmjs.com/package/@lukebarton/pi-de-claude) | 26 | `npm install @lukebarton/pi-de-claude` | IDE integration for pi with any IDE running a Claude Code plugin-including VS Code, Neovim, IntelliJ IDEA, and other Je… |
| 995 | [pi-loop-breaker](https://www.npmjs.com/package/pi-loop-breaker) | 25 | `npm install pi-loop-breaker` | Pi extension that aborts repeated failing tool loops |
| 996 | [pi-set-editor](https://www.npmjs.com/package/pi-set-editor) | 25 | `npm install pi-set-editor` | Choose and save the external editor used by Ctrl+G in pi |
| 997 | [@chrisbielinski/pi-searchxng](https://www.npmjs.com/package/@chrisbielinski/pi-searchxng) | 25 | `npm install @chrisbielinski/pi-searchxng` | Pi package exposing the searchxng CLI as a tool. |
| 998 | [@artale/pi-builder](https://www.npmjs.com/package/@artale/pi-builder) | 25 | `npm install @artale/pi-builder` | Extension builder for Pi. Scaffold, build, test, and publish Pi extensions from a single command. The tool that built 8… |
| 999 | [@elwinliu/pi-neapple](https://www.npmjs.com/package/@elwinliu/pi-neapple) | 25 | `npm install @elwinliu/pi-neapple` | Custom input box with closed rectangular border |
| 1000 | [@ws-rush/conductor](https://www.npmjs.com/package/@ws-rush/conductor) | 25 | `npm install @ws-rush/conductor` | Context-Driven Development framework. Measure twice, code once. |
| 1001 | [pi-pr-status](https://www.npmjs.com/package/pi-pr-status) | 24 | `npm install pi-pr-status` | A Pi extension that shows the current PR link, CI check status, and unresolved review comments in the footer status bar |
| 1002 | [pi-roam](https://www.npmjs.com/package/pi-roam) | 24 | `npm install pi-roam` | Post-hoc handoff of a live Pi session into tmux for remote continuation, with optional Tailscale account switching |
| 1003 | [pi-threads](https://www.npmjs.com/package/pi-threads) | 24 | `npm install pi-threads` | Pi extension for searching and reading past conversation threads with ripgrep-powered search |
| 1004 | [pi-editor](https://www.npmjs.com/package/pi-editor) | 24 | `npm install pi-editor` | Pi extension to open files in your preferred editor ($VISUAL / $EDITOR) |
| 1005 | [@artale/pi-snapshot](https://www.npmjs.com/package/@artale/pi-snapshot) | 24 | `npm install @artale/pi-snapshot` | Session snapshot for Pi. Export conversation as markdown, JSON, or HTML. Share sessions, create reports. |
| 1006 | [git-metadata](https://www.npmjs.com/package/git-metadata) | 24 | `npm install git-metadata` | Pi extension that provides git repository metadata — branch, remotes, commits, tags, status, and contributors |
| 1007 | [pi-amp](https://www.npmjs.com/package/pi-amp) | 23 | `npm install pi-amp` | Retro CLI music player for pi — YouTube streaming, EQ, and an AI DJ |
| 1008 | [@volh/pi-network-monitor](https://www.npmjs.com/package/@volh/pi-network-monitor) | 23 | `npm install @volh/pi-network-monitor` | Network request monitor for pi agent — live overlay showing all HTTP traffic |
| 1009 | [pi-relay](https://www.npmjs.com/package/pi-relay) | 23 | `npm install pi-relay` | Discord bridge extension for pi — route messages, spawn sessions, stream output |
| 1010 | [pi-cmdr](https://www.npmjs.com/package/pi-cmdr) | 23 | `npm install pi-cmdr` | Command picker extension for the Pi coding agent. |
| 1011 | [pi-agui](https://www.npmjs.com/package/pi-agui) | 22 | `npm install pi-agui` | Scaffold an AG-UI + Pi app from the official template |
| 1012 | [@artale/pi-perf](https://www.npmjs.com/package/@artale/pi-perf) | 22 | `npm install @artale/pi-perf` | Performance profiling. Time commands, benchmark with statistics, Node.js profiling. |
| 1013 | [pi-forms](https://www.npmjs.com/package/pi-forms) | 22 | `npm install pi-forms` | Interactive TUI form overlay tool for pi agents. Collect structured input via declarative form schemas. |
| 1014 | [pi-cryptex](https://www.npmjs.com/package/pi-cryptex) | 21 | `npm install pi-cryptex` | Pi extension inspired by fastlane-plugin-cryptex for encrypted project credentials. |
| 1015 | [@artale/pi-refactor](https://www.npmjs.com/package/@artale/pi-refactor) | 21 | `npm install @artale/pi-refactor` | Iterative refactoring for Pi. Analyze → refactor → verify cycles with git commits per pass. |
| 1016 | [pi-xurl](https://www.npmjs.com/package/pi-xurl) | 21 | `npm install pi-xurl` | Cross-agent thread reader — resolve agents:// URIs for Amp, Codex, Claude, Gemini, Pi, OpenCode |
| 1017 | [pi-slot-machine](https://www.npmjs.com/package/pi-slot-machine) | 21 | `npm install pi-slot-machine` | A pi extension that spins a slot machine overlay every time you send a prompt. Hit the jackpot for a fireworks explosio… |
| 1018 | [@artale/pi-migrate](https://www.npmjs.com/package/@artale/pi-migrate) | 21 | `npm install @artale/pi-migrate` | Code migration and codemods. Detect outdated patterns, check dependencies, generate migration plans. |
| 1019 | [@e9n/pi-calendar](https://www.npmjs.com/package/@e9n/pi-calendar) | 21 | `npm install @e9n/pi-calendar` | Calendar tool, web dashboard, and reminders for pi |
| 1020 | [wallhaven-random-pi-extension](https://www.npmjs.com/package/wallhaven-random-pi-extension) | 20 | `npm install wallhaven-random-pi-extension` | Wallhaven random wallpaper extension for pi |
| 1021 | [pi-nudge](https://www.npmjs.com/package/pi-nudge) | 20 | `npm install pi-nudge` | Native terminal notifications for pi. |
| 1022 | [@artale/pi-datasci](https://www.npmjs.com/package/@artale/pi-datasci) | 20 | `npm install @artale/pi-datasci` | Data science toolkit. Profile datasets, correlation matrices, outlier detection, statistical summaries. CSV/JSON/JSONL… |
| 1023 | [@artale/pi-git-hooks](https://www.npmjs.com/package/@artale/pi-git-hooks) | 20 | `npm install @artale/pi-git-hooks` | Git hook manager. Install pre-commit, commit-msg, pre-push hooks from templates. |
| 1024 | [pi-branch-ask](https://www.npmjs.com/package/pi-branch-ask) | 20 | `npm install pi-branch-ask` | Interactive ask tool for pi with branching questionnaire support |
| 1025 | [@patleeman/pi-boy](https://www.npmjs.com/package/@patleeman/pi-boy) | 20 | `npm install @patleeman/pi-boy` | pi-boy: embedded Game Boy emulator inside pi |
| 1026 | [@jademind/pi-tools](https://www.npmjs.com/package/@jademind/pi-tools) | 20 | `npm install @jademind/pi-tools` | pi extension that registers additional CLI tools from local/global config files |
| 1027 | [pi-linear-worktree](https://www.npmjs.com/package/pi-linear-worktree) | 19 | `npm install pi-linear-worktree` | Pi extension that fetches Linear issues and creates git worktrees to solve them |
| 1028 | [@artale/pi-odu](https://www.npmjs.com/package/@artale/pi-odu) | 19 | `npm install @artale/pi-odu` | Odu pattern engine for Pi. 256-state binary classifier based on the Ifa system. Read 8 channels, classify, act. |
| 1029 | [@gordonb/pi-notational](https://www.npmjs.com/package/@gordonb/pi-notational) | 19 | `npm install @gordonb/pi-notational` | Notational Velocity for Pi coding agent |
| 1030 | [pi-watch](https://www.npmjs.com/package/pi-watch) | 19 | `npm install pi-watch` | Pi extension that watches for AI comments in your code and sends them to the agent |
| 1031 | [@tryinget/pi-little-helpers](https://www.npmjs.com/package/@tryinget/pi-little-helpers) | 18 | `npm install @tryinget/pi-little-helpers` | pi extension package for little-helpers workflows in pi |
| 1032 | [@artale/pi-picker](https://www.npmjs.com/package/@artale/pi-picker) | 18 | `npm install @artale/pi-picker` | TUI picker for Pi. Interactive fuzzy selectors for tools, commands, sessions, and files with keyboard navigation. |
| 1033 | [video-paste](https://www.npmjs.com/package/video-paste) | 18 | `npm install video-paste` | Pi extension that adds video paste support and video-aware inspection through the read tool. |
| 1034 | [@artale/pi-i18n](https://www.npmjs.com/package/@artale/pi-i18n) | 18 | `npm install @artale/pi-i18n` | i18n/localization toolkit. Scan translations, find missing keys, validate formats, extract strings. Supports JSON, YAML… |
| 1035 | [@mjakl/pi-ooc](https://www.npmjs.com/package/@mjakl/pi-ooc) | 18 | `npm install @mjakl/pi-ooc` | Pi extension that adds /ooc for out-of-context side questions using the current session context. |
| 1036 | [pi-safety-path-protection](https://www.npmjs.com/package/pi-safety-path-protection) | 18 | `npm install pi-safety-path-protection` | Protects sensitive paths (.env files, .git internals, node_modules, SSH keys) from unauthorized reads and writes across… |
| 1037 | [@tmustier/pi-weather](https://www.npmjs.com/package/@tmustier/pi-weather) | 17 | `npm install @tmustier/pi-weather` | Weather widget for Pi (/weather) |
| 1038 | [@e9n/pi-webnav](https://www.npmjs.com/package/@e9n/pi-webnav) | 17 | `npm install @e9n/pi-webnav` | Unified navigation shell for pi-webserver — wraps all mounts in a shared nav layout with iframe routing |
| 1039 | [@elianiva/pi-starship](https://www.npmjs.com/package/@elianiva/pi-starship) | 17 | `npm install @elianiva/pi-starship` | Starship-style prompt for pi |
| 1040 | [@hemocode/pi-model-selector](https://www.npmjs.com/package/@hemocode/pi-model-selector) | 17 | `npm install @hemocode/pi-model-selector` | A Pi extension that automatically selects the best model based on remaining usage quotas across various providers (Clau… |
| 1041 | [@e9n/pi-supabase](https://www.npmjs.com/package/@e9n/pi-supabase) | 16 | `npm install @e9n/pi-supabase` | Supabase integration for pi — read-only queries, table subscriptions, and pi-channels notifications |
| 1042 | [@marcfargas/go-holded](https://www.npmjs.com/package/@marcfargas/go-holded) | 16 | `npm install @marcfargas/go-holded` | Holded API made easy — invoicing, CRM, accounting, projects, team. Library + CLI for AI agents and humans. |
| 1043 | [pi-dedumbify](https://www.npmjs.com/package/pi-dedumbify) | 16 | `npm install pi-dedumbify` | Pi extension for executable spaced repetition with FSRS scheduling |
| 1044 | [pi-zed-shift-enter](https://www.npmjs.com/package/pi-zed-shift-enter) | 15 | `npm install pi-zed-shift-enter` | Fixes Shift+Enter not creating newlines in pi when running inside Zed's terminal |
| 1045 | [pi-search-agent](https://www.npmjs.com/package/pi-search-agent) | 15 | `npm install pi-search-agent` | Semantic codebase search with sub-agent processing |
| 1046 | [@yofriadi/pi-hashline-edit](https://www.npmjs.com/package/@yofriadi/pi-hashline-edit) | 15 | `npm install @yofriadi/pi-hashline-edit` | ```bash pi install git:github.com/yofriadi/pi-extensions@hashline-edit-v<version> ``` |
| 1047 | [pi-copy-last-response-extension](https://www.npmjs.com/package/pi-copy-last-response-extension) | 15 | `npm install pi-copy-last-response-extension` | pi extension to copy the last assistant response |
| 1048 | [pi-wandb](https://www.npmjs.com/package/pi-wandb) | 15 | `npm install pi-wandb` | Weights & Biases run tracking and metric history tools for pi |
| 1049 | [@atomic-ai/msco-pi-lot](https://www.npmjs.com/package/@atomic-ai/msco-pi-lot) | 15 | `npm install @atomic-ai/msco-pi-lot` | Microsoft Copilot provider extension for pi coding agent. |
| 1050 | [@hyperprior/dissolution](https://www.npmjs.com/package/@hyperprior/dissolution) | 14 | `npm install @hyperprior/dissolution` | pi extension that wires dissolution semantic search into agent tools |
| 1051 | [@yofriadi/pi-commit](https://www.npmjs.com/package/@yofriadi/pi-commit) | 14 | `npm install @yofriadi/pi-commit` | AI-powered conventional commit extension for pi |
| 1052 | [@e9n/pi-npm](https://www.npmjs.com/package/@e9n/pi-npm) | 14 | `npm install @e9n/pi-npm` | NPM workflow extension for pi — run common npm commands including publish |
| 1053 | [pi-wc3-sounds](https://www.npmjs.com/package/pi-wc3-sounds) | 14 | `npm install pi-wc3-sounds` | Warcraft III voice lines for pi agent events. Orc Peon for Claude, Human Peasant for Codex. |
| 1054 | [repeat-pi](https://www.npmjs.com/package/repeat-pi) | 13 | `npm install repeat-pi` | Repeat tool calls in pi-coding-agent |
| 1055 | [@yevhen.b/pi-macos-theme-sync](https://www.npmjs.com/package/@yevhen.b/pi-macos-theme-sync) | 13 | `npm install @yevhen.b/pi-macos-theme-sync` | Sync Pi's theme with macOS appearance changes. |
| 1056 | [@tryinget/pi-editor-registry](https://www.npmjs.com/package/@tryinget/pi-editor-registry) | 12 | `npm install @tryinget/pi-editor-registry` | Editor ownership and mount primitives for pi-interaction runtime |
| 1057 | [@tryinget/pi-trigger-adapter](https://www.npmjs.com/package/@tryinget/pi-trigger-adapter) | 12 | `npm install @tryinget/pi-trigger-adapter` | Trigger broker and picker registration adapter for pi-interaction runtime |
| 1058 | [pi-open-here](https://www.npmjs.com/package/pi-open-here) | 12 | `npm install pi-open-here` | Open current directory (or a path) in external editor from pi |
| 1059 | [@hjanuschka/pi-nanny](https://www.npmjs.com/package/@hjanuschka/pi-nanny) | 11 | `npm install @hjanuschka/pi-nanny` | Parental control extension for Pi - helps you go to bed instead of having 47 creative ideas at 3 AM |
| 1060 | [@tryinget/pi-interaction-kit](https://www.npmjs.com/package/@tryinget/pi-interaction-kit) | 11 | `npm install @tryinget/pi-interaction-kit` | Shared interaction primitives for pi-interaction runtime packages |
| 1061 | [@fnnm/pi-raw-paste](https://www.npmjs.com/package/@fnnm/pi-raw-paste) | 11 | `npm install @fnnm/pi-raw-paste` | One-shot raw paste support for Pi (/paste). |
| 1062 | [@jasonish/pi-default-model](https://www.npmjs.com/package/@jasonish/pi-default-model) | 10 | `npm install @jasonish/pi-default-model` | Set a **real** default model |
| 1063 | [@tryinget/pi-interaction](https://www.npmjs.com/package/@tryinget/pi-interaction) | 10 | `npm install @tryinget/pi-interaction` | Umbrella interaction-runtime extension package for pi |
| 1064 | [@yevhen.b/pi-preflight](https://www.npmjs.com/package/@yevhen.b/pi-preflight) | 10 | `npm install @yevhen.b/pi-preflight` | Tool-call approvals and policy rules for Pi. |
| 1065 | [@lydst/pi-webfetch](https://www.npmjs.com/package/@lydst/pi-webfetch) | 1 | `npm install @lydst/pi-webfetch` | A pi package that fetches public web pages for AI agents. |
| 1066 | [pi-libsecret](https://www.npmjs.com/package/pi-libsecret) | 1 | `npm install pi-libsecret` | Load API keys with secret-tool |
| 1067 | [agent-booster-pack-whiteboard](https://www.npmjs.com/package/agent-booster-pack-whiteboard) | 0 | `npm install agent-booster-pack-whiteboard` | ABP Pi whiteboarding guard plus whiteboarding skill: one user-facing question at a time. |
| 1068 | [pi-chrome](https://www.npmjs.com/package/pi-chrome) | 0 | `npm install pi-chrome` | Drive your existing logged-in Chrome from Pi — no re-login, no throwaway profile, watch the agent work in real time (or… |
| 1069 | [pi-qq](https://www.npmjs.com/package/pi-qq) | 0 | `npm install pi-qq` | Ask side questions in pi without polluting the main transcript — /qq or alt+q. |
| 1070 | [@adamjen/pi-compact-fast](https://www.npmjs.com/package/@adamjen/pi-compact-fast) | 0 | `npm install @adamjen/pi-compact-fast` | /compact-fast command for Pi — compacts sessions with a fast local model instead of your main conversation model. |
| 1071 | [@akuzmenko/rgk](https://www.npmjs.com/package/@akuzmenko/rgk) | 0 | `npm install @akuzmenko/rgk` | ripgrep with an LLM-powered --keep post-filter |
| 1072 | [@alasano/pi-forcefeed](https://www.npmjs.com/package/@alasano/pi-forcefeed) | 0 | `npm install @alasano/pi-forcefeed` | Force-feed complete files into pi conversation context without read-tool truncation |
| 1073 | [@arcanemachine/pi-read](https://www.npmjs.com/package/@arcanemachine/pi-read) | 0 | `npm install @arcanemachine/pi-read` | Customizable read tool for Pi coding agent - configure default line/byte limits |
| 1074 | [@artale/pi-verify](https://www.npmjs.com/package/@artale/pi-verify) | 0 | `npm install @artale/pi-verify` | Auto-verify Pi agent output. Two-agent system: builder runs, verifier checks, auto-corrects. |
| 1075 | [@artale/pi-video](https://www.npmjs.com/package/@artale/pi-video) | 0 | `npm install @artale/pi-video` | Generate videos programmatically with Pi. React-based video generation. |
| 1076 | [@baggiiiie/pi-computer-use](https://www.npmjs.com/package/@baggiiiie/pi-computer-use) | 0 | `npm install @baggiiiie/pi-computer-use` | 暂无描述 |
| 1077 | [@baggiiiie/pi-no-ansi](https://www.npmjs.com/package/@baggiiiie/pi-no-ansi) | 0 | `npm install @baggiiiie/pi-no-ansi` | A minimal pi package that keeps `bash` tool output cleaner for the model by: |
| 1078 | [@bakaschwarz/pi-update-adesso](https://www.npmjs.com/package/@bakaschwarz/pi-update-adesso) | 0 | `npm install @bakaschwarz/pi-update-adesso` | pi extension for syncing providers/models from the Adesso AI Hub and viewing usage spend |
| 1079 | [@capyup/pi-warp](https://www.npmjs.com/package/@capyup/pi-warp) | 0 | `npm install @capyup/pi-warp` | Warp terminal integration for Pi — tab status, spinner, and rich session notifications via the warp://cli-agent protoco… |
| 1080 | [@carter-mcalister/pi-codex-tasks](https://www.npmjs.com/package/@carter-mcalister/pi-codex-tasks) | 0 | `npm install @carter-mcalister/pi-codex-tasks` | Codex-compatible task planning tools for Pi |
| 1081 | [@carter-mcalister/pi-codex-tools](https://www.npmjs.com/package/@carter-mcalister/pi-codex-tools) | 0 | `npm install @carter-mcalister/pi-codex-tools` | Codex-compatible tool surface for Pi |
| 1082 | [@carter-mcalister/pi-multicodex](https://www.npmjs.com/package/@carter-mcalister/pi-multicodex) | 0 | `npm install @carter-mcalister/pi-multicodex` | Codex account rotation extension for pi |
| 1083 | [@codingcoffee/pi-privacy-filter](https://www.npmjs.com/package/@codingcoffee/pi-privacy-filter) | 0 | `npm install @codingcoffee/pi-privacy-filter` | pi extension that redacts PII/secrets before sending to the LLM and restores them in responses |
| 1084 | [@cortexkit/pi-anthropic-auth](https://www.npmjs.com/package/@cortexkit/pi-anthropic-auth) | 0 | `npm install @cortexkit/pi-anthropic-auth` | Pi package for CortexKit Anthropic OAuth support. It overrides Pi's built-in `anthropic` provider with a CortexKit prov… |
| 1085 | [@deevus/pi-wayfinder](https://www.npmjs.com/package/@deevus/pi-wayfinder) | 0 | `npm install @deevus/pi-wayfinder` | Structure-aware code navigation and anchor-stable editing tools for pi agents. |
| 1086 | [@denveous/pi-mcp](https://www.npmjs.com/package/@denveous/pi-mcp) | 0 | `npm install @denveous/pi-mcp` | MCP client extension for pi agent |
| 1087 | [@diegopetrucci/pi-compact-bash](https://www.npmjs.com/package/@diegopetrucci/pi-compact-bash) | 0 | `npm install @diegopetrucci/pi-compact-bash` | A pi extension that renders collapsed bash tool output as a one-line preview. |
| 1088 | [@fgladisch/pi-persistent-history](https://www.npmjs.com/package/@fgladisch/pi-persistent-history) | 0 | `npm install @fgladisch/pi-persistent-history` | Per-project persistent prompt input history for Pi |
| 1089 | [@firstpick/pi-extension-plan-executor](https://www.npmjs.com/package/@firstpick/pi-extension-plan-executor) | 0 | `npm install @firstpick/pi-extension-plan-executor` | Autonomous PLAN.md execution loop for Pi that continues until all checklist items are complete. |
| 1090 | [@firstpick/pi-extension-release-npm](https://www.npmjs.com/package/@firstpick/pi-extension-release-npm) | 0 | `npm install @firstpick/pi-extension-release-npm` | Pi command to run npm package release workflow with publish confirmation. |
| 1091 | [@firstpick/pi-extension-upgrade-extensions](https://www.npmjs.com/package/@firstpick/pi-extension-upgrade-extensions) | 0 | `npm install @firstpick/pi-extension-upgrade-extensions` | Upgrade npm-installed Pi extensions with up-to-date checks. |
| 1092 | [@gaodes/pi-graphify](https://www.npmjs.com/package/@gaodes/pi-graphify) | 0 | `npm install @gaodes/pi-graphify` | Turn any folder into a queryable knowledge graph — build, query, explore, and update graphs from inside Pi |
| 1093 | [@grayolson/pi-treebase](https://www.npmjs.com/package/@grayolson/pi-treebase) | 0 | `npm install @grayolson/pi-treebase` | Interactive-rebase style tree navigation for pi sessions. |
| 1094 | [@hieplp/pi-account-switcher](https://www.npmjs.com/package/@hieplp/pi-account-switcher) | 0 | `npm install @hieplp/pi-account-switcher` | Pi extension for quickly switching between multiple accounts/API keys per provider. |
| 1095 | [@howaboua/pi-auto-reasoning-tool](https://www.npmjs.com/package/@howaboua/pi-auto-reasoning-tool) | 0 | `npm install @howaboua/pi-auto-reasoning-tool` | Pi package that gives agents a change_reasoning tool for adjusting reasoning level when substantial work is likely. |
| 1096 | [@jmfederico/pi-web](https://www.npmjs.com/package/@jmfederico/pi-web) | 0 | `npm install @jmfederico/pi-web` | Browser control plane for persistent Pi Coding Agent sessions. |
| 1097 | [@johnnywu/pi-terminal-signals](https://www.npmjs.com/package/@johnnywu/pi-terminal-signals) | 0 | `npm install @johnnywu/pi-terminal-signals` | Pi extension that communicates agent lifecycle to the terminal via OSC 9;4 (progress) and OSC 133 (semantic prompts). |
| 1098 | [@jwayong/pi-azure-devops](https://www.npmjs.com/package/@jwayong/pi-azure-devops) | 0 | `npm install @jwayong/pi-azure-devops` | Azure DevOps integration for Pi coding agent — work items, pipelines, repos, and more |
| 1099 | [@jyking/jypi](https://www.npmjs.com/package/@jyking/jypi) | 0 | `npm install @jyking/jypi` | 暂无描述 |
| 1100 | [@lhl/pi-vertex](https://www.npmjs.com/package/@lhl/pi-vertex) | 0 | `npm install @lhl/pi-vertex` | Google Vertex AI provider for Pi coding agent - supports Gemini, Claude, and all MaaS models |
| 1101 | [@narumitw/pi-nyaa](https://www.npmjs.com/package/@narumitw/pi-nyaa) | 0 | `npm install @narumitw/pi-nyaa` | Pi extension for querying public metadata from nyaa.si and sukebei.nyaa.si. |
| 1102 | [@narumitw/pi-retry](https://www.npmjs.com/package/@narumitw/pi-retry) | 0 | `npm install @narumitw/pi-retry` | Public pi extension that retries empty-detail provider unknown errors. |
| 1103 | [@oleg_tarasov/pi-zmx-status](https://www.npmjs.com/package/@oleg_tarasov/pi-zmx-status) | 0 | `npm install @oleg_tarasov/pi-zmx-status` | Show the current zmx session name in Pi's status bar. |
| 1104 | [@patimweb/pi-email](https://www.npmjs.com/package/@patimweb/pi-email) | 0 | `npm install @patimweb/pi-email` | IMAP/SMTP email client extension for pi coding agent. Read, search, send, move, and delete emails from your inbox. |
| 1105 | [@rdyson/pi-pushover](https://www.npmjs.com/package/@rdyson/pi-pushover) | 0 | `npm install @rdyson/pi-pushover` | Pushover notifications when Pi finishes agent tasks. |
| 1106 | [@richardgill/pi-file-collector](https://www.npmjs.com/package/@richardgill/pi-file-collector) | 0 | `npm install @richardgill/pi-file-collector` | Pi extension for collecting file/line evidence seen or cited during a session. |
| 1107 | [@robhowley/pi-yolo-seatbelt](https://www.npmjs.com/package/@robhowley/pi-yolo-seatbelt) | 0 | `npm install @robhowley/pi-yolo-seatbelt` | Keep the YOLO workflow but avoid bash catastrophe with configurable guardrails for destructive commands. |
| 1108 | [@sahebjot94/pi-goal](https://www.npmjs.com/package/@sahebjot94/pi-goal) | 0 | `npm install @sahebjot94/pi-goal` | Codex-like /goal command for pi — autonomous goal tracking with continuation loops |
| 1109 | [@sherif-fanous/pi-presets-plus](https://www.npmjs.com/package/@sherif-fanous/pi-presets-plus) | 0 | `npm install @sherif-fanous/pi-presets-plus` | Pi extension: model + thinking + tools + system-prompt presets, with a UI on top. |
| 1110 | [@spences10/pi-coding-preferences](https://www.npmjs.com/package/@spences10/pi-coding-preferences) | 0 | `npm install @spences10/pi-coding-preferences` | Pi extension that nudges agents toward Scott's coding workflow preferences |
| 1111 | [@sztlink/pi-ensemble](https://www.npmjs.com/package/@sztlink/pi-ensemble) | 0 | `npm install @sztlink/pi-ensemble` | Shared workspace coordination for parallel coding agents |
| 1112 | [@unfixed3854/pi-usage](https://www.npmjs.com/package/@unfixed3854/pi-usage) | 0 | `npm install @unfixed3854/pi-usage` | A pi extension that displays active model provider subscription quota usage in the status bar. Supports z.ai (GLM) and… |
| 1113 | [@whynothugo/pi-auto-theme](https://www.npmjs.com/package/@whynothugo/pi-auto-theme) | 0 | `npm install @whynothugo/pi-auto-theme` | Pi extension to automatically switch theme based on terminal dark/light mode. |
| 1114 | [@wierdbytes/pi-anthropic](https://www.npmjs.com/package/@wierdbytes/pi-anthropic) | 0 | `npm install @wierdbytes/pi-anthropic` | Claude Pro/Max OAuth extension for the pi coding agent |
| 1115 | [agent-halter](https://www.npmjs.com/package/agent-halter) | 0 | `npm install agent-halter` | Session-budget extension for AI coding agents. |
| 1116 | [haagent](https://www.npmjs.com/package/haagent) | 0 | `npm install haagent` | ahaasler's agent |
| 1117 | [moonpi](https://www.npmjs.com/package/moonpi) | 0 | `npm install moonpi` | Opinionated set of extensions for pi |
| 1118 | [pi-account-switcher](https://www.npmjs.com/package/pi-account-switcher) | 0 | `npm install pi-account-switcher` | Pi extension for quickly switching between multiple accounts/API keys per provider. |
| 1119 | [pi-agent-shell](https://www.npmjs.com/package/pi-agent-shell) | 0 | `npm install pi-agent-shell` | High-performance interactive shell extension for pi — OS-level read-block detection gives agents a single turn() primit… |
| 1120 | [pi-alibaba-models](https://www.npmjs.com/package/pi-alibaba-models) | 0 | `npm install pi-alibaba-models` | The complete Alibaba provider for pi — Plan subscription + Cloud pay-per-token, International + China endpoints, Anthro… |
| 1121 | [pi-banana](https://www.npmjs.com/package/pi-banana) | 0 | `npm install pi-banana` | Generate and edit images in pi using Google Nano Banana 2 (gemini-3.1-flash-image) and Nano Banana Pro. Inline terminal… |
| 1122 | [pi-batch-tool](https://www.npmjs.com/package/pi-batch-tool) | 0 | `npm install pi-batch-tool` | Batch tool extension for Pi — unified file ops and parallel bash in a single call. |
| 1123 | [pi-codex-limit](https://www.npmjs.com/package/pi-codex-limit) | 0 | `npm install pi-codex-limit` | Codex subscription usage footer widget for Pi |
| 1124 | [pi-cortecs](https://www.npmjs.com/package/pi-cortecs) | 0 | `npm install pi-cortecs` | Cortecs provider extension for pi coding agent. Install with `pi install npm:pi-cortecs`. |
| 1125 | [pi-currency](https://www.npmjs.com/package/pi-currency) | 0 | `npm install pi-currency` | Real-time currency conversion for the pi TUI footer cost display |
| 1126 | [pi-cymbal](https://www.npmjs.com/package/pi-cymbal) | 0 | `npm install pi-cymbal` | Pi extension exposing Cymbal as an agent-native code navigation layer. |
| 1127 | [pi-delegate-tool](https://www.npmjs.com/package/pi-delegate-tool) | 0 | `npm install pi-delegate-tool` | Delegate tool for Pi — fork of drsh4dow/pi-delegate |
| 1128 | [pi-done](https://www.npmjs.com/package/pi-done) | 0 | `npm install pi-done` | Pi package that adds a /done command to reset to the default git branch, pull, and start a new session. |
| 1129 | [pi-fancy-loader](https://www.npmjs.com/package/pi-fancy-loader) | 0 | `npm install pi-fancy-loader` | A fancy loader extension for Pi |
| 1130 | [pi-github-identity](https://www.npmjs.com/package/pi-github-identity) | 0 | `npm install pi-github-identity` | Run selected GitHub CLI actions from Pi through a separate bot identity. |
| 1131 | [pi-goalie](https://www.npmjs.com/package/pi-goalie) | 0 | `npm install pi-goalie` | Autonomous goal DAG for pi — Codex-like /goal with dependency chains, steering, and queue management |
| 1132 | [pi-goals](https://www.npmjs.com/package/pi-goals) | 0 | `npm install pi-goals` | Persistent goal tracking for Pi with /tree-compatible state, budgets, reusable prompts, and churn monitoring. |
| 1133 | [pi-grok-search](https://www.npmjs.com/package/pi-grok-search) | 0 | `npm install pi-grok-search` | Grok Search Extension for pi - 双引擎架构：Grok AI 搜索 + Tavily 抓取 + Firecrawl 托底 |
| 1134 | [pi-jupyter](https://www.npmjs.com/package/pi-jupyter) | 0 | `npm install pi-jupyter` | Pi extension: right-side Jupyter notebook preview while editing .ipynb files. |
| 1135 | [pi-litellm](https://www.npmjs.com/package/pi-litellm) | 0 | `npm install pi-litellm` | LiteLLM integration for Pi — dynamic model sync, accurate cost tracking, and session grouping |
| 1136 | [pi-macos-cua](https://www.npmjs.com/package/pi-macos-cua) | 0 | `npm install pi-macos-cua` | Pi extension that lets Pi drive local macOS apps through cua-driver. |
| 1137 | [pi-mission-control](https://www.npmjs.com/package/pi-mission-control) | 0 | `npm install pi-mission-control` | Visual mission orchestration extension for pi with agent hierarchy and durable state |
| 1138 | [pi-mlx-models](https://www.npmjs.com/package/pi-mlx-models) | 0 | `npm install pi-mlx-models` | Local MLX model launcher extension for Pi |
| 1139 | [pi-modal](https://www.npmjs.com/package/pi-modal) | 0 | `npm install pi-modal` | Kakoune/Helix-like modal editor for pi prompt input - motion-first with selection markers |
| 1140 | [pi-model-suitable-tools](https://www.npmjs.com/package/pi-model-suitable-tools) | 0 | `npm install pi-model-suitable-tools` | Pi extension package that adapts tool names to the active model family. |
| 1141 | [pi-mono-usage](https://www.npmjs.com/package/pi-mono-usage) | 0 | `npm install pi-mono-usage` | Pi extension that aggregates local session usage, cost and sustainability impact |
| 1142 | [pi-nyaa](https://www.npmjs.com/package/pi-nyaa) | 0 | `npm install pi-nyaa` | Pi extension for querying public metadata from nyaa.si and sukebei.nyaa.si. |
| 1143 | [pi-opencode-bridge](https://www.npmjs.com/package/pi-opencode-bridge) | 0 | `npm install pi-opencode-bridge` | OpenCode provider for Pi Agent. Auto-discovers models from OpenCode registry and uses Pi's native OpenAI-compatible han… |
| 1144 | [pi-openrouter-native](https://www.npmjs.com/package/pi-openrouter-native) | 0 | `npm install pi-openrouter-native` | Native OpenRouter live model sync for pi using built-in provider routing support |
| 1145 | [pi-pledit](https://www.npmjs.com/package/pi-pledit) | 0 | `npm install pi-pledit` | Plan mode and Accept-Edits mode for Pi, inspired by Claude Code. |
| 1146 | [pi-prayer-times](https://www.npmjs.com/package/pi-prayer-times) | 0 | `npm install pi-prayer-times` | Islamic prayer time reminders with adzan for pi coding agent |
| 1147 | [pi-prior](https://www.npmjs.com/package/pi-prior) | 0 | `npm install pi-prior` | Pi extension for project-local learned context priors. |
| 1148 | [pi-questions-helper](https://www.npmjs.com/package/pi-questions-helper) | 0 | `npm install pi-questions-helper` | Answer questions from lengthy pi agent responses in an interactive widget. |
| 1149 | [pi-remote-agent](https://www.npmjs.com/package/pi-remote-agent) | 0 | `npm install pi-remote-agent` | Secure remote agent bridge for pi — delegate tasks to another pi instance over Tailscale. Includes /ask-agent command a… |
| 1150 | [pi-see](https://www.npmjs.com/package/pi-see) | 0 | `npm install pi-see` | Vision proxy extension for pi — lets any model describe images, screenshots, diagrams and more |
| 1151 | [pi-solo](https://www.npmjs.com/package/pi-solo) | 0 | `npm install pi-solo` | Pi package for the Solo task tracker — tool, commands, auto-init, and TUI widget. |
| 1152 | [pi-sumopod-connector](https://www.npmjs.com/package/pi-sumopod-connector) | 0 | `npm install pi-sumopod-connector` | SumoPod AI models for Pi coding agent - One-command setup for all SumoPod models |
| 1153 | [pi-thinking-hotkeys](https://www.npmjs.com/package/pi-thinking-hotkeys) | 0 | `npm install pi-thinking-hotkeys` | Pi extension for Codex-style directional thinking effort hotkeys |
| 1154 | [pi-tmux-rename](https://www.npmjs.com/package/pi-tmux-rename) | 0 | `npm install pi-tmux-rename` | Pi extension that automatically renames tmux windows to reflect the current conversation topic |
| 1155 | [pi-token-meter](https://www.npmjs.com/package/pi-token-meter) | 0 | `npm install pi-token-meter` | Display tokens per second in Pi. |
| 1156 | [pi-yaml-hooks](https://www.npmjs.com/package/pi-yaml-hooks) | 0 | `npm install pi-yaml-hooks` | YAML hook automation for the PI coding agent: tool guards, session hooks, prompts, notifications, and bash actions. |
| 1157 | [symphony-pi](https://www.npmjs.com/package/symphony-pi) | 0 | `npm install symphony-pi` | Generic Symphony autonomous issue orchestration extension for pi. |
| 1158 | [tr-pi](https://www.npmjs.com/package/tr-pi) | 0 | `npm install tr-pi` | Umbrella Pi package bundling pi-qq, pi-chrome, and trifecta-footer. |

</details>

<a id="subagent"></a>
## 子代理/多代理
> 99 个包 · 总月下载量 152,904

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-subagents](https://www.npmjs.com/package/pi-subagents) | 70,608 | `npm install pi-subagents` | Pi extension for delegating tasks to subagents with chains, parallel execution, and TUI… |
| 2 | [pi-crew](https://www.npmjs.com/package/pi-crew) | 6,362 | `npm install pi-crew` | Pi extension for coordinated AI teams, workflows, worktrees, and async task orchestrati… |
| 3 | [pi-minions](https://www.npmjs.com/package/pi-minions) | 1,564 | `npm install pi-minions` | Minimal recursive subagent orchestration for pi. No bundled agents, no opinions. |
| 4 | [taskplane](https://www.npmjs.com/package/taskplane) | 7,639 | `npm install taskplane` | AI agent orchestration for pi — parallel task execution with checkpoint discipline |
| 5 | [@tintinweb/pi-subagents](https://www.npmjs.com/package/@tintinweb/pi-subagents) | 7,587 | `npm install @tintinweb/pi-subagents` | A pi extension extension that brings smart Claude Code-style autonomous sub-agents to p… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 99 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-subagents](https://www.npmjs.com/package/pi-subagents) | 70,608 | `npm install pi-subagents` | Pi extension for delegating tasks to subagents with chains, parallel execution, and TUI clarification |
| 2 | [pi-crew](https://www.npmjs.com/package/pi-crew) | 6,362 | `npm install pi-crew` | Pi extension for coordinated AI teams, workflows, worktrees, and async task orchestration |
| 3 | [pi-minions](https://www.npmjs.com/package/pi-minions) | 1,564 | `npm install pi-minions` | Minimal recursive subagent orchestration for pi. No bundled agents, no opinions. |
| 4 | [taskplane](https://www.npmjs.com/package/taskplane) | 7,639 | `npm install taskplane` | AI agent orchestration for pi — parallel task execution with checkpoint discipline |
| 5 | [@tintinweb/pi-subagents](https://www.npmjs.com/package/@tintinweb/pi-subagents) | 7,587 | `npm install @tintinweb/pi-subagents` | A pi extension extension that brings smart Claude Code-style autonomous sub-agents to pi. |
| 6 | [pi-interactive-shell](https://www.npmjs.com/package/pi-interactive-shell) | 3,961 | `npm install pi-interactive-shell` | Run AI coding agents in pi TUI overlays with interactive, hands-free, and dispatch supervision |
| 7 | [pi-teams](https://www.npmjs.com/package/pi-teams) | 3,192 | `npm install pi-teams` | Agent teams for pi, ported from claude-code-teams-mcp |
| 8 | [oira666_pi-subagent](https://www.npmjs.com/package/oira666_pi-subagent) | 2,823 | `npm install oira666_pi-subagent` | Subagent extension for Pi coding agent. Delegate tasks to specialized agents. |
| 9 | [@ifi/pi-extension-subagents](https://www.npmjs.com/package/@ifi/pi-extension-subagents) | 2,551 | `npm install @ifi/pi-extension-subagents` | Full-featured subagent orchestration extension for pi, built on top of nicobailon/pi-subagents. |
| 10 | [pi-multiagent](https://www.npmjs.com/package/pi-multiagent) | 2,301 | `npm install pi-multiagent` | Adds the agent_team delegation tool and pi-multiagent skill to Pi. |
| 11 | [pi-fast-subagent](https://www.npmjs.com/package/pi-fast-subagent) | 2,081 | `npm install pi-fast-subagent` | In-process subagent delegation for pi with single, parallel, and background modes |
| 12 | [@spences10/pi-team-mode](https://www.npmjs.com/package/@spences10/pi-team-mode) | 1,853 | `npm install @spences10/pi-team-mode` | Pi extension for local orchestrator/team mode with RPC teammates, tasks, and mailboxes |
| 13 | [@0xkobold/pi-kobold](https://www.npmjs.com/package/@0xkobold/pi-kobold) | 1,734 | `npm install @0xkobold/pi-kobold` | Meta-extension for 0xKobold that bundles pi-orchestration, pi-gateway, pi-ollama, pi-learn, pi-persona, and development… |
| 14 | [@linimin/pi-letscook](https://www.npmjs.com/package/@linimin/pi-letscook) | 1,729 | `npm install @linimin/pi-letscook` | Pi package for long-running completion workflows with canonical .agent state, role-based subagents, continuity, and ver… |
| 15 | [oh-my-opencode-pi](https://www.npmjs.com/package/oh-my-opencode-pi) | 1,646 | `npm install oh-my-opencode-pi` | Pantheon-style multi-agent orchestration for pi, inspired by oh-my-opencode-slim |
| 16 | [@jessenguyen22/pi-tool-router](https://www.npmjs.com/package/@jessenguyen22/pi-tool-router) | 1,544 | `npm install @jessenguyen22/pi-tool-router` | Intelligent tool routing extension for pi coding agent - automatically selects the best tool stack for each task |
| 17 | [pi-messenger-swarm](https://www.npmjs.com/package/pi-messenger-swarm) | 1,533 | `npm install pi-messenger-swarm` | Swarm-first multi-agent messaging and task orchestration extension for Pi |
| 18 | [@feniix/pi-conductor](https://www.npmjs.com/package/@feniix/pi-conductor) | 1,532 | `npm install @feniix/pi-conductor` | Long-lived multi-session worker orchestration for pi with git worktrees, resumable sessions, and PR flows |
| 19 | [pi-mono-team-mode](https://www.npmjs.com/package/pi-mono-team-mode) | 1,463 | `npm install pi-mono-team-mode` | Pi extension for flat peer-agent orchestration — named, addressable teammates with resumable context (mirrors Claude Co… |
| 20 | [pi-agent-suite](https://www.npmjs.com/package/pi-agent-suite) | 1,388 | `npm install pi-agent-suite` | Adds a configurable multi-agent layer to pi, with context management, Codex quota status, a custom footer, and more. |
| 21 | [pi-faithless-subagents](https://www.npmjs.com/package/pi-faithless-subagents) | 1,206 | `npm install pi-faithless-subagents` | PI-native constrained subagent orchestration library |
| 22 | [pi-link](https://www.npmjs.com/package/pi-link) | 1,140 | `npm install pi-link` | WebSocket-based inter-terminal communication for Pi. Connect multiple Pi terminals over a local link network. |
| 23 | [@teelicht/pi-superagents](https://www.npmjs.com/package/@teelicht/pi-superagents) | 1,099 | `npm install @teelicht/pi-superagents` | Pi extension for Superpowers workflows: recon, research, implementation, review, and debug |
| 24 | [pi-messenger](https://www.npmjs.com/package/pi-messenger) | 1,071 | `npm install pi-messenger` | Inter-agent messaging and file reservation system for pi coding agent |
| 25 | [pi-agentteam](https://www.npmjs.com/package/pi-agentteam) | 1,010 | `npm install pi-agentteam` | Multi-agent team orchestration for pi — leader-coordinator pattern with researcher, planner, and implementer teammates… |
| 26 | [@0xkobold/pi-orchestration](https://www.npmjs.com/package/@0xkobold/pi-orchestration) | 990 | `npm install @0xkobold/pi-orchestration` | Agnostic subagent orchestration for pi-coding-agent. Supports single, chain, parallel, and fork execution modes with de… |
| 27 | [pi-orch-extension](https://www.npmjs.com/package/pi-orch-extension) | 957 | `npm install pi-orch-extension` | Orch multi-agent orchestration extension for Pi |
| 28 | [@melihmucuk/pi-crew](https://www.npmjs.com/package/@melihmucuk/pi-crew) | 938 | `npm install @melihmucuk/pi-crew` | Non-blocking subagent orchestration for pi coding agent |
| 29 | [@alexanderfortin/pi-freestyle-sandbox](https://www.npmjs.com/package/@alexanderfortin/pi-freestyle-sandbox) | 927 | `npm install @alexanderfortin/pi-freestyle-sandbox` | Pi extension for running sandboxed subagents in Freestyle cloud VMs |
| 30 | [@anh-chu/pi-subagents](https://www.npmjs.com/package/@anh-chu/pi-subagents) | 882 | `npm install @anh-chu/pi-subagents` | A pi extension extension that brings smart Claude Code-style autonomous sub-agents to pi. |
| 31 | [@the-forge-flow/sub-agents-pi](https://www.npmjs.com/package/@the-forge-flow/sub-agents-pi) | 882 | `npm install @the-forge-flow/sub-agents-pi` | PI extension for spawning isolated sub-agents with live TUI spying |
| 32 | [@dreki-gg/pi-subagent](https://www.npmjs.com/package/@dreki-gg/pi-subagent) | 836 | `npm install @dreki-gg/pi-subagent` | Subagent tool and direct agent runs for pi — isolated agents, parallel scouts, manager workflows, and bundled prompts |
| 33 | [@wayaans/ramean](https://www.npmjs.com/package/@wayaans/ramean) | 820 | `npm install @wayaans/ramean` | Ramean pi package collections |
| 34 | [@jeonghyeon.net/pi-subagents](https://www.npmjs.com/package/@jeonghyeon.net/pi-subagents) | 818 | `npm install @jeonghyeon.net/pi-subagents` | A pi extension extension that brings smart Claude Code-style autonomous sub-agents to pi. |
| 35 | [@pi-orca/teams](https://www.npmjs.com/package/@pi-orca/teams) | 762 | `npm install @pi-orca/teams` | Team templates and orchestrated spinup |
| 36 | [@vadimcomanescu/pi-teams](https://www.npmjs.com/package/@vadimcomanescu/pi-teams) | 691 | `npm install @vadimcomanescu/pi-teams` | Pi team orchestration extension for named teammates, shared task boards, and coordinated execution |
| 37 | [@dkod/pi](https://www.npmjs.com/package/@dkod/pi) | 663 | `npm install @dkod/pi` | dkod extension for Pi — parallel agent execution with AST-level semantic merging |
| 38 | [@vaayne/pi-subagent](https://www.npmjs.com/package/@vaayne/pi-subagent) | 600 | `npm install @vaayne/pi-subagent` | Pi extension for delegating tasks to specialized agents |
| 39 | [pi-agent-bus](https://www.npmjs.com/package/pi-agent-bus) | 581 | `npm install pi-agent-bus` | Pi Extension to bridge pi-agent-bus-node agents with pi.tools and pi-link |
| 40 | [pi-teammate](https://www.npmjs.com/package/pi-teammate) | 560 | `npm install pi-teammate` | Pi agent-to-agent team communication via shared SQLite message bus with MAMORU guardian |
| 41 | [pi-goal-driven](https://www.npmjs.com/package/pi-goal-driven) | 539 | `npm install pi-goal-driven` | Goal-Driven template workflow for pi |
| 42 | [@howaboua/pi-subagent-review](https://www.npmjs.com/package/@howaboua/pi-subagent-review) | 508 | `npm install @howaboua/pi-subagent-review` | Pi extension that adds /review via an isolated review subagent. |
| 43 | [pi-finder-subagent](https://www.npmjs.com/package/pi-finder-subagent) | 501 | `npm install pi-finder-subagent` | Read-only local workspace scout subagent package for pi agents (code + personal files) |
| 44 | [@0xtiby/looper](https://www.npmjs.com/package/@0xtiby/looper) | 496 | `npm install @0xtiby/looper` | Standalone AI loop orchestration engine |
| 45 | [pi-agent-router](https://www.npmjs.com/package/pi-agent-router) | 495 | `npm install pi-agent-router` | Pi extension for active-agent routing, controlled subagent delegation, and task result rendering. |
| 46 | [@jerryan/pi-subagent-lite](https://www.npmjs.com/package/@jerryan/pi-subagent-lite) | 493 | `npm install @jerryan/pi-subagent-lite` | Minimal pi extension that delegates tasks to isolated subagent processes with optional skill loading |
| 47 | [pi-side-agents](https://www.npmjs.com/package/pi-side-agents) | 481 | `npm install pi-side-agents` | Side-agent orchestration for Pi — spin off parallel child agents in tmux windows and git worktrees. |
| 48 | [pi-subagentura](https://www.npmjs.com/package/pi-subagentura) | 423 | `npm install pi-subagentura` | Public Pi package that adds in-process sub-agents via the SDK |
| 49 | [pi-kanban](https://www.npmjs.com/package/pi-kanban) | 404 | `npm install pi-kanban` | Workspace for the pi coding agent — sessions, todos, subagents, and more. |
| 50 | [pi-shipit](https://www.npmjs.com/package/pi-shipit) | 352 | `npm install pi-shipit` | Quality gates for shipping code with the Pi coding agent. Iterative review loops and fork-to-upstream PR workflows with… |
| 51 | [@tmustier/pi-agent-teams](https://www.npmjs.com/package/@tmustier/pi-agent-teams) | 337 | `npm install @tmustier/pi-agent-teams` | Claude Code agent teams style workflow for Pi. |
| 52 | [apple-pi](https://www.npmjs.com/package/apple-pi) | 312 | `npm install apple-pi` | Opinionated pi extension — lightweight in-process subagent system |
| 53 | [pi-apex-companion-coding](https://www.npmjs.com/package/pi-apex-companion-coding) | 290 | `npm install pi-apex-companion-coding` | Apex Companion Coding extension package for pi / pi-mono with companion review, negotiation contracts, and mutation gua… |
| 54 | [pi-agent-bus-node](https://www.npmjs.com/package/pi-agent-bus-node) | 282 | `npm install pi-agent-bus-node` | Node.js runtime for pi-agent-bus — MessageBus, Agent base class, LLMProvider, TaskQueue |
| 55 | [pi-agents-team](https://www.npmjs.com/package/pi-agents-team) | 260 | `npm install pi-agents-team` | Pi extension that turns one coding session into a multi-agent team with background RPC worker agents. |
| 56 | [pi-agentarium](https://www.npmjs.com/package/pi-agentarium) | 256 | `npm install pi-agentarium` | Ambient multi-agent observability for Pi — a terminal habitat for coding agents. |
| 57 | [pi-agent-colony](https://www.npmjs.com/package/pi-agent-colony) | 246 | `npm install pi-agent-colony` | Agent Colony for Pi — bootstrap and package distribution for a multi-agent Pi plugin for complex coding tasks. |
| 58 | [@mjakl/pi-subagent](https://www.npmjs.com/package/@mjakl/pi-subagent) | 232 | `npm install @mjakl/pi-subagent` | Subagent extension for Pi coding agent. Delegate tasks to specialized agents. |
| 59 | [pi-redteam](https://www.npmjs.com/package/pi-redteam) | 229 | `npm install pi-redteam` | Multi-agent red teaming system for Pi - 10 specialized security agents for vulnerability assessment and penetration tes… |
| 60 | [@diegopetrucci/pi-oracle](https://www.npmjs.com/package/@diegopetrucci/pi-oracle) | 228 | `npm install @diegopetrucci/pi-oracle` | An Amp-style oracle extension for pi that consults the strongest reasoning model on your current provider. |
| 61 | [pi-headless-subagent](https://www.npmjs.com/package/pi-headless-subagent) | 226 | `npm install pi-headless-subagent` | Pi extension for spawning isolated subagents in separate pi --mode rpc subprocesses |
| 62 | [nano-team](https://www.npmjs.com/package/nano-team) | 213 | `npm install nano-team` | A tiny pi.dev extension. It doesn't really do much — just runs your subagents and shows them as a compact little chip r… |
| 63 | [@fulcrum-agent-os/pi-cockpit](https://www.npmjs.com/package/@fulcrum-agent-os/pi-cockpit) | 193 | `npm install @fulcrum-agent-os/pi-cockpit` | Fulcrum Cockpit — control-plane dashboard, task management, memory, lifecycle tools, and policy hook for the PI coding… |
| 64 | [pi-task-subagents](https://www.npmjs.com/package/pi-task-subagents) | 190 | `npm install pi-task-subagents` | Standalone subagent delegation tools for pi |
| 65 | [@odradekk/vera-subagents](https://www.npmjs.com/package/@odradekk/vera-subagents) | 184 | `npm install @odradekk/vera-subagents` | Subagent orchestration for Vera agent (explorer, librarian, thinker, worker) |
| 66 | [compound-engineering-pi](https://www.npmjs.com/package/compound-engineering-pi) | 179 | `npm install compound-engineering-pi` | Pi-first Compound Engineering extension with subagents and MCPorter compatibility. |
| 67 | [pi-bmad-flow](https://www.npmjs.com/package/pi-bmad-flow) | 140 | `npm install pi-bmad-flow` | Pi-native orchestration overlay for BMAD workflows |
| 68 | [pi-missions](https://www.npmjs.com/package/pi-missions) | 139 | `npm install pi-missions` | Orchestrated multi-phase development missions for pi — architect, implement, test, audit, verify |
| 69 | [pi-image-subagent](https://www.npmjs.com/package/pi-image-subagent) | 138 | `npm install pi-image-subagent` | Pi extension that gives non-vision models the ability to analyze images via a vision-capable subagent |
| 70 | [pi-pilot](https://www.npmjs.com/package/pi-pilot) | 128 | `npm install pi-pilot` | A Copilot Autopilot-inspired workflow: research, subagent exploration, questions, plan and execute. |
| 71 | [pi-mesh](https://www.npmjs.com/package/pi-mesh) | 92 | `npm install pi-mesh` | Multi-agent coordination for Pi - presence, messaging, file reservations |
| 72 | [@artale/pi-swarm](https://www.npmjs.com/package/@artale/pi-swarm) | 91 | `npm install @artale/pi-swarm` | Simple parallel task execution |
| 73 | [@adix7/pi-agent-teams](https://www.npmjs.com/package/@adix7/pi-agent-teams) | 90 | `npm install @adix7/pi-agent-teams` | Claude Code agent teams style workflow for Pi. |
| 74 | [pi-symphony](https://www.npmjs.com/package/pi-symphony) | 84 | `npm install pi-symphony` | Unattended issue orchestration for Pi — polls Linear, spawns workers, manages PRs |
| 75 | [@ruizrica/agent-pi](https://www.npmjs.com/package/@ruizrica/agent-pi) | 76 | `npm install @ruizrica/agent-pi` | Multi-agent orchestration suite for Pi — 6 modes, 43 extensions, 11 themes |
| 76 | [@judepayne/picode](https://www.npmjs.com/package/@judepayne/picode) | 75 | `npm install @judepayne/picode` | A Pi package for disciplined, role-based coding workflows with mode switching, permissions, subagents, and prompt vars. |
| 77 | [pi-parallel-agents](https://www.npmjs.com/package/pi-parallel-agents) | 73 | `npm install pi-parallel-agents` | Dynamic parallel agent execution for pi - run multiple agents with different models without pre-defining configurations |
| 78 | [ralph-loop-pi](https://www.npmjs.com/package/ralph-loop-pi) | 71 | `npm install ralph-loop-pi` | Ralph loop extension for pi-coding-agent - looped subagent execution |
| 79 | [pi-thread-engine](https://www.npmjs.com/package/pi-thread-engine) | 71 | `npm install pi-thread-engine` | Thread engineering for pi — all 7 thread types, stories, fusion, zero-touch, TUI dashboard |
| 80 | [pi-shadow-git](https://www.npmjs.com/package/pi-shadow-git) | 68 | `npm install pi-shadow-git` | Git-based orchestration logging for pi subagents with Mission Control dashboard |
| 81 | [pi-a2a-communication](https://www.npmjs.com/package/pi-a2a-communication) | 59 | `npm install pi-a2a-communication` | Enterprise-grade A2A (Agent2Agent) protocol implementation for pi coding agent - enables multi-node, multi-agent collab… |
| 82 | [pi-agents-pool](https://www.npmjs.com/package/pi-agents-pool) | 51 | `npm install pi-agents-pool` | Codex-style multi-agent orchestration for pi — spawn, communicate with, and coordinate sub-agents via LLM tool calls |
| 83 | [@e9n/pi-subagent](https://www.npmjs.com/package/@e9n/pi-subagent) | 49 | `npm install @e9n/pi-subagent` | Parallel task delegation for pi — spawn isolated subagents for single, parallel, and chain execution |
| 84 | [@gericomaverick/pi-team-orchestrator](https://www.npmjs.com/package/@gericomaverick/pi-team-orchestrator) | 44 | `npm install @gericomaverick/pi-team-orchestrator` | Pi extension for team/project orchestration with markdown-defined teams and session-backed state |
| 85 | [pi-toolbox](https://www.npmjs.com/package/pi-toolbox) | 42 | `npm install pi-toolbox` | A comprehensive extension toolkit for the Pi Coding Agent — 17 extensions, 11 themes, skills, agents, and team orchestr… |
| 86 | [@schilderlabs/pitown](https://www.npmjs.com/package/@schilderlabs/pitown) | 42 | `npm install @schilderlabs/pitown` | Globally installable CLI for Pi Town |
| 87 | [pi-rlm](https://www.npmjs.com/package/pi-rlm) | 39 | `npm install pi-rlm` | Recursive Language Model (RLM) extension for Pi coding agent |
| 88 | [@codexstar/pi-agent-teams](https://www.npmjs.com/package/@codexstar/pi-agent-teams) | 37 | `npm install @codexstar/pi-agent-teams` | Claude Code agent teams style workflow for Pi. |
| 89 | [@umgbhalla/pi-gigaplan](https://www.npmjs.com/package/@umgbhalla/pi-gigaplan) | 35 | `npm install @umgbhalla/pi-gigaplan` | Structured AI planning with cross-model critique — gigaplan as a pi extension |
| 90 | [pi-rlm-query](https://www.npmjs.com/package/pi-rlm-query) | 34 | `npm install pi-rlm-query` | Recursive LLM Query extension for pi - enables agent-to-agent delegation with guardrails |
| 91 | [@schilderlabs/pitown-package](https://www.npmjs.com/package/@schilderlabs/pitown-package) | 29 | `npm install @schilderlabs/pitown-package` | Pi package resources for Pi Town |
| 92 | [pi-replicant](https://www.npmjs.com/package/pi-replicant) | 22 | `npm install pi-replicant` | Codebase exploration subagent extension for pi using Offworld CLI |
| 93 | [@hyperprior/pi-subagent](https://www.npmjs.com/package/@hyperprior/pi-subagent) | 12 | `npm install @hyperprior/pi-subagent` | Delegate tasks to isolated sub-agents (pi subprocesses) |
| 94 | [@carter-mcalister/pi-codex-subagents](https://www.npmjs.com/package/@carter-mcalister/pi-codex-subagents) | 0 | `npm install @carter-mcalister/pi-codex-subagents` | Codex-compatible MultiAgentV2 subagent tools for Pi |
| 95 | [@wkronmiller/pi-subagent-extension](https://www.npmjs.com/package/@wkronmiller/pi-subagent-extension) | 0 | `npm install @wkronmiller/pi-subagent-extension` | Durable async Pi subagent as a standalone Pi package |
| 96 | [@x1any/pi-swarm](https://www.npmjs.com/package/@x1any/pi-swarm) | 0 | `npm install @x1any/pi-swarm` | Multi-agent swarm for Pi — parallel & chained subagents with isolated context windows |
| 97 | [pi-spawn](https://www.npmjs.com/package/pi-spawn) | 0 | `npm install pi-spawn` | Minimal subagent extension for pi — one tool, one prompt, orchestrator-driven concurrency |
| 98 | [pi-tmux-harness](https://www.npmjs.com/package/pi-tmux-harness) | 0 | `npm install pi-tmux-harness` | Pi extension exposing tmux as native tools — drive other TUIs (pi, claude, copilot CLI, lazygit, etc.) for adversarial… |
| 99 | [pi-verifier-agent](https://www.npmjs.com/package/pi-verifier-agent) | 0 | `npm install pi-verifier-agent` | Pi Verifier Agent — a second read-only Pi agent that verifies builder output and feeds back concrete corrections. |

</details>

<a id="mcp"></a>
## MCP 协议适配
> 63 个包 · 总月下载量 152,219

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-mcp-adapter](https://www.npmjs.com/package/pi-mcp-adapter) | 59,788 | `npm install pi-mcp-adapter` | MCP (Model Context Protocol) adapter extension for Pi coding agent |
| 2 | [context-mode](https://www.npmjs.com/package/context-mode) | 57,781 | `npm install context-mode` | MCP plugin that saves 98% of your context window. Works with Claude Code, Gemini CLI, V… |
| 3 | [pi-lean-ctx](https://www.npmjs.com/package/pi-lean-ctx) | 4,719 | `npm install pi-lean-ctx` | Pi Coding Agent extension (CLI-first) — routes bash/read/grep/find/ls through lean-ctx… |
| 4 | [agent-comms](https://www.npmjs.com/package/agent-comms) | 3,132 | `npm install agent-comms` | Cross-harness communication mesh for LLM agents — rooms, DMs, presence, and real-time p… |
| 5 | [pi-claude-style-tools](https://www.npmjs.com/package/pi-claude-style-tools) | 2,616 | `npm install pi-claude-style-tools` | Claude Code-style tool rows for pi with Ctrl+O image previews and consistent built-in,… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 63 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-mcp-adapter](https://www.npmjs.com/package/pi-mcp-adapter) | 59,788 | `npm install pi-mcp-adapter` | MCP (Model Context Protocol) adapter extension for Pi coding agent |
| 2 | [context-mode](https://www.npmjs.com/package/context-mode) | 57,781 | `npm install context-mode` | MCP plugin that saves 98% of your context window. Works with Claude Code, Gemini CLI, VS Code Copilot, OpenCode, and Co… |
| 3 | [pi-lean-ctx](https://www.npmjs.com/package/pi-lean-ctx) | 4,719 | `npm install pi-lean-ctx` | Pi Coding Agent extension (CLI-first) — routes bash/read/grep/find/ls through lean-ctx CLI for strong token savings. Op… |
| 4 | [agent-comms](https://www.npmjs.com/package/agent-comms) | 3,132 | `npm install agent-comms` | Cross-harness communication mesh for LLM agents — rooms, DMs, presence, and real-time push delivery over TCP |
| 5 | [pi-claude-style-tools](https://www.npmjs.com/package/pi-claude-style-tools) | 2,616 | `npm install pi-claude-style-tools` | Claude Code-style tool rows for pi with Ctrl+O image previews and consistent built-in, MCP, and custom tool rendering |
| 6 | [@spences10/pi-mcp](https://www.npmjs.com/package/@spences10/pi-mcp) | 2,500 | `npm install @spences10/pi-mcp` | Pi extension for connecting MCP servers and exposing their tools |
| 7 | [runline](https://www.npmjs.com/package/runline) | 2,408 | `npm install runline` | Code mode for agents — turn any API or command into a callable action |
| 8 | [pi-tidy-mcp-adapter](https://www.npmjs.com/package/pi-tidy-mcp-adapter) | 1,583 | `npm install pi-tidy-mcp-adapter` | MCP (Model Context Protocol) adapter extension for Pi coding agent fork form https://github.com/nicobailon/pi-mcp-adapt… |
| 9 | [pi-gemini-acp](https://www.npmjs.com/package/pi-gemini-acp) | 1,581 | `npm install pi-gemini-acp` | Gemini ACP prompt, search, and research provider for Pi. |
| 10 | [@feniix/pi-ref-tools](https://www.npmjs.com/package/@feniix/pi-ref-tools) | 1,449 | `npm install @feniix/pi-ref-tools` | Ref.tools MCP extension for pi — documentation search and URL reading via Ref's Model Context Protocol |
| 11 | [@feniix/pi-sequential-thinking](https://www.npmjs.com/package/@feniix/pi-sequential-thinking) | 1,279 | `npm install @feniix/pi-sequential-thinking` | Sequential Thinking MCP extension for pi — structured progressive thinking through defined stages |
| 12 | [@pi-unipi/mcp](https://www.npmjs.com/package/@pi-unipi/mcp) | 1,252 | `npm install @pi-unipi/mcp` | MCP server management extension for Pi coding agent — browse, add, configure, and use MCP servers |
| 13 | [@ruminaider/notion-cli](https://www.npmjs.com/package/@ruminaider/notion-cli) | 946 | `npm install @ruminaider/notion-cli` | Notion CLI with full workspace access via OAuth. Manage pages, databases, comments, and Notion-flavored Markdown from t… |
| 14 | [@ameno/pi-minimax-mcp](https://www.npmjs.com/package/@ameno/pi-minimax-mcp) | 875 | `npm install @ameno/pi-minimax-mcp` | MiniMax MCP tools for pi - Web search and image understanding via MiniMax's Model Context Protocol |
| 15 | [@spences10/pi-omnisearch](https://www.npmjs.com/package/@spences10/pi-omnisearch) | 857 | `npm install @spences10/pi-omnisearch` | Pi extension that reminds the model to use mcp-omnisearch for verified web research |
| 16 | [@spences10/pi-sqlite-tools](https://www.npmjs.com/package/@spences10/pi-sqlite-tools) | 819 | `npm install @spences10/pi-sqlite-tools` | Pi extension that reminds the model to prefer mcp-sqlite-tools for SQLite database work |
| 17 | [@imsus/pi-extension-minimax-coding-plan-mcp](https://www.npmjs.com/package/@imsus/pi-extension-minimax-coding-plan-mcp) | 738 | `npm install @imsus/pi-extension-minimax-coding-plan-mcp` | MiniMax Coding Plan extension for pi coding agent - provides web_search and understand_image tools |
| 18 | [@leonardorick/pi-web-search](https://www.npmjs.com/package/@leonardorick/pi-web-search) | 686 | `npm install @leonardorick/pi-web-search` | Web search tool for pi — Exa MCP search with DuckDuckGo fallback via wreq-js. |
| 19 | [pi-repoprompt-mcp](https://www.npmjs.com/package/pi-repoprompt-mcp) | 608 | `npm install pi-repoprompt-mcp` | A token-efficient RepoPrompt integration for Pi with automated and branch-safe workspace management |
| 20 | [pi-zai-tools](https://www.npmjs.com/package/pi-zai-tools) | 599 | `npm install pi-zai-tools` | Pi package that exposes Z.AI Web Search, Web Reader, Zread, and Vision MCP tools. |
| 21 | [pi-auggie-router](https://www.npmjs.com/package/pi-auggie-router) | 583 | `npm install pi-auggie-router` | Opinionated sub-agent router for Pi: tightly couples SKILL.md execution with the Augment Code (auggie) Context Engine. |
| 22 | [@jayjanii/pi-minimax-mcp](https://www.npmjs.com/package/@jayjanii/pi-minimax-mcp) | 574 | `npm install @jayjanii/pi-minimax-mcp` | MiniMax MCP tools for pi - Web search and image understanding via MiniMax's Model Context Protocol |
| 23 | [pi-mcp-extension](https://www.npmjs.com/package/pi-mcp-extension) | 531 | `npm install pi-mcp-extension` | MCP (Model Context Protocol) client extension for the Pi coding agent — connect Pi to any MCP server |
| 24 | [@vanillagreen/pi-tool-renderer](https://www.npmjs.com/package/@vanillagreen/pi-tool-renderer) | 510 | `npm install @vanillagreen/pi-tool-renderer` | Compact Claude/opencode-style renderers for Pi tools with rich diffs, apply_patch, generic/MCP rendering, and optional… |
| 25 | [pi-figma-mcp](https://www.npmjs.com/package/pi-figma-mcp) | 427 | `npm install pi-figma-mcp` | Pi package that connects Pi to the Figma desktop MCP server and exposes Figma design tools inside Pi. |
| 26 | [@fancyrobot/agent-vault](https://www.npmjs.com/package/@fancyrobot/agent-vault) | 387 | `npm install @fancyrobot/agent-vault` | Durable project memory for coding agents. Obsidian-compatible vault with MCP server, pi package, and workflow support f… |
| 27 | [pi-mcporter](https://www.npmjs.com/package/pi-mcporter) | 367 | `npm install pi-mcporter` | Single-tool MCPorter bridge extension for pi and Model Context Protocol (MCP) servers. |
| 28 | [pi-tscg](https://www.npmjs.com/package/pi-tscg) | 365 | `npm install pi-tscg` | Drop-in tool-schema and tool-result compression for the Pi coding-agent. Built on TSCG by Furkan Sakizli (SKZL-AI) — wr… |
| 29 | [@0xkobold/pi-mcp](https://www.npmjs.com/package/@0xkobold/pi-mcp) | 353 | `npm install @0xkobold/pi-mcp` | Model Context Protocol (MCP) integration for pi-coding-agent. Connect to any MCP server (stdio, SSE, StreamableHTTP, We… |
| 30 | [@benvargas/pi-exa-mcp](https://www.npmjs.com/package/@benvargas/pi-exa-mcp) | 334 | `npm install @benvargas/pi-exa-mcp` | Exa MCP tools for pi - Web search and code context via Exa's Model Context Protocol |
| 31 | [@h4rvey-g/context-mode](https://www.npmjs.com/package/@h4rvey-g/context-mode) | 264 | `npm install @h4rvey-g/context-mode` | MCP plugin that saves 98% of your context window. Works with Claude Code, Gemini CLI, VS Code Copilot, OpenCode, and Co… |
| 32 | [pi-tokensaver](https://www.npmjs.com/package/pi-tokensaver) | 169 | `npm install pi-tokensaver` | Give your Pi AI agent a semantic memory — bridges tokensave's Rust-powered local graph engine into your coding workflow… |
| 33 | [@vaayne/pi-mcp](https://www.npmjs.com/package/@vaayne/pi-mcp) | 159 | `npm install @vaayne/pi-mcp` | Pi extension for MCP (Model Context Protocol) server integration |
| 34 | [anchor-edit](https://www.npmjs.com/package/anchor-edit) | 122 | `npm install anchor-edit` | Stateful single-token anchored file editing (Dirac-style). MCP server via `anchor-edit mcp`. |
| 35 | [onetool-pi](https://www.npmjs.com/package/onetool-pi) | 117 | `npm install onetool-pi` | 🧿 Pi coding agent extension — the ultimate MCP bridge with 100+ tools including Brave, Google, Context7, Excalidraw, A… |
| 36 | [@sage-protocol/pi-adapter](https://www.npmjs.com/package/@sage-protocol/pi-adapter) | 107 | `npm install @sage-protocol/pi-adapter` | Sage Protocol MCP integration for pi coding agent |
| 37 | [@eliemessiecode/pi-mcp](https://www.npmjs.com/package/@eliemessiecode/pi-mcp) | 90 | `npm install @eliemessiecode/pi-mcp` | Connect MCP (Model Context Protocol) HTTP servers to Pi agent. Auto-discover and use MCP tools. |
| 38 | [@ruminaider/linear-cli](https://www.npmjs.com/package/@ruminaider/linear-cli) | 86 | `npm install @ruminaider/linear-cli` | JSON-first CLI for Linear. Wraps every authenticated Linear MCP tool: projects, issues, comments, attachments, cycles,… |
| 39 | [@skdev-ai/pi-gemini-cli-provider](https://www.npmjs.com/package/@skdev-ai/pi-gemini-cli-provider) | 85 | `npm install @skdev-ai/pi-gemini-cli-provider` | Gemini LLM provider for Pi/GSD via A2A protocol with MCP tool bridge |
| 40 | [@zhafron/pi-mcp-tools](https://www.npmjs.com/package/@zhafron/pi-mcp-tools) | 79 | `npm install @zhafron/pi-mcp-tools` | Universal MCP tools extension for pi coding agent |
| 41 | [@cansiny0320/pi-mcp-adapter](https://www.npmjs.com/package/@cansiny0320/pi-mcp-adapter) | 46 | `npm install @cansiny0320/pi-mcp-adapter` | MCP (Model Context Protocol) adapter extension for Pi coding agent |
| 42 | [@jordyvd/pi-mcp-adapter](https://www.npmjs.com/package/@jordyvd/pi-mcp-adapter) | 43 | `npm install @jordyvd/pi-mcp-adapter` | MCP (Model Context Protocol) adapter extension for Pi coding agent |
| 43 | [@netandreus/pi-auto](https://www.npmjs.com/package/@netandreus/pi-auto) | 38 | `npm install @netandreus/pi-auto` | Pi package: usage-aware model switching and load-balancing for pi-coding-agent. |
| 44 | [oncrawl-mcp-pi-extension](https://www.npmjs.com/package/oncrawl-mcp-pi-extension) | 37 | `npm install oncrawl-mcp-pi-extension` | Pi Agent extension that bridges the Oncrawl MCP Server directly into Pi – no Claude Code or Claude Desktop required. |
| 45 | [@skdev-ai/pi-gemini-cli-search](https://www.npmjs.com/package/@skdev-ai/pi-gemini-cli-search) | 31 | `npm install @skdev-ai/pi-gemini-cli-search` | Pi/GSD extension providing grounded web search via Gemini CLI's A2A and ACP protocols. Uses your existing Google AI Pro… |
| 46 | [@wdalhaj/pi-astro-mcp](https://www.npmjs.com/package/@wdalhaj/pi-astro-mcp) | 31 | `npm install @wdalhaj/pi-astro-mcp` | Pi extension that connects to the Astro Docs MCP server and exposes a search_astro_docs tool |
| 47 | [pi-satori-bridge](https://www.npmjs.com/package/pi-satori-bridge) | 27 | `npm install pi-satori-bridge` | Pi extension package that proxies Satori MCP tools through satori-cli |
| 48 | [@yangnay/pi-mcp-bridge](https://www.npmjs.com/package/@yangnay/pi-mcp-bridge) | 24 | `npm install @yangnay/pi-mcp-bridge` | Standalone pi extension that bridges multiple MCP servers with on-demand connections. |
| 49 | [@yofriadi/pi-mcp](https://www.npmjs.com/package/@yofriadi/pi-mcp) | 17 | `npm install @yofriadi/pi-mcp` | Standalone MCP extension package for pi installs |
| 50 | [@fingerskier/pi-build123d](https://www.npmjs.com/package/@fingerskier/pi-build123d) | 0 | `npm install @fingerskier/pi-build123d` | build123d CAD MCP plugin for Pi with a self-bootstrapping Python server |
| 51 | [@fingerskier/pi-cron](https://www.npmjs.com/package/@fingerskier/pi-cron) | 0 | `npm install @fingerskier/pi-cron` | Cron scheduler plugin for Pi, bridged from the legacy dex-claude-plugin MCP server |
| 52 | [@fingerskier/pi-dude](https://www.npmjs.com/package/@fingerskier/pi-dude) | 0 | `npm install @fingerskier/pi-dude` | Dude local memory plugin for Pi, bridged from dude-claude-plugin MCP |
| 53 | [@fingerskier/pi-fleet](https://www.npmjs.com/package/@fingerskier/pi-fleet) | 0 | `npm install @fingerskier/pi-fleet` | Fleet AWS monitor plugin for Pi, bridged from fleet-claude-plugin MCP |
| 54 | [@fingerskier/pi-kicad](https://www.npmjs.com/package/@fingerskier/pi-kicad) | 0 | `npm install @fingerskier/pi-kicad` | KiCad MCP plugin for Pi |
| 55 | [@fingerskier/pi-micropython](https://www.npmjs.com/package/@fingerskier/pi-micropython) | 0 | `npm install @fingerskier/pi-micropython` | MicroPython device MCP plugin for Pi with a self-bootstrapping Python server |
| 56 | [@fingerskier/pi-mozart](https://www.npmjs.com/package/@fingerskier/pi-mozart) | 0 | `npm install @fingerskier/pi-mozart` | Mozart MIDI plugin for Pi, bridged from mozart-claude-plugin MCP |
| 57 | [@fingerskier/pi-skidl](https://www.npmjs.com/package/@fingerskier/pi-skidl) | 0 | `npm install @fingerskier/pi-skidl` | SKiDL circuit-design MCP plugin for Pi with a self-bootstrapping Python server |
| 58 | [@im4all/pi-jira-extension](https://www.npmjs.com/package/@im4all/pi-jira-extension) | 0 | `npm install @im4all/pi-jira-extension` | Fetch and create jira issues |
| 59 | [@ineersa/my-pi-mcp-adapter](https://www.npmjs.com/package/@ineersa/my-pi-mcp-adapter) | 0 | `npm install @ineersa/my-pi-mcp-adapter` | MCP (Model Context Protocol) adapter extension for Pi coding agent — bridges any MCP server into Pi as first-class tools |
| 60 | [@javiayala/ai-workers](https://www.npmjs.com/package/@javiayala/ai-workers) | 0 | `npm install @javiayala/ai-workers` | Portable Pi/GLM worker tools for offloading low-risk agent work from premium coding agents. |
| 61 | [@khmuhtadin/pi-clickup-mcp](https://www.npmjs.com/package/@khmuhtadin/pi-clickup-mcp) | 0 | `npm install @khmuhtadin/pi-clickup-mcp` | Pi extension that bridges pi to the official ClickUp remote MCP server. |
| 62 | [@kuyavinny/pi-muninn-mem](https://www.npmjs.com/package/@kuyavinny/pi-muninn-mem) | 0 | `npm install @kuyavinny/pi-muninn-mem` | MuninnDB memory provider for Pi — SSE subscription, context injection, vault bridge |
| 63 | [pi-figma-remote-auth](https://www.npmjs.com/package/pi-figma-remote-auth) | 0 | `npm install pi-figma-remote-auth` | Pi extension that authenticates and configures Figma Remote MCP for pi-mcp-adapter. |

</details>

<a id="web"></a>
## 网络访问
> 95 个包 · 总月下载量 110,036

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-web-access](https://www.npmjs.com/package/pi-web-access) | 34,332 | `npm install pi-web-access` | Web search, URL fetching, GitHub repo cloning, PDF extraction, YouTube video understand… |
| 2 | [@ollama/pi-web-search](https://www.npmjs.com/package/@ollama/pi-web-search) | 26,114 | `npm install @ollama/pi-web-search` | Web search and fetch tools for Pi agent - uses Ollama's web search and fetch APIs |
| 3 | [@juicesharp/rpiv-web-tools](https://www.npmjs.com/package/@juicesharp/rpiv-web-tools) | 9,054 | `npm install @juicesharp/rpiv-web-tools` | Pi extension. Web search and fetch for the model, backed by the Brave Search API. |
| 4 | [pi-smart-fetch](https://www.npmjs.com/package/pi-smart-fetch) | 7,255 | `npm install pi-smart-fetch` | Smart web_fetch with desktop-browser TLS impersonation and defuddle extraction. |
| 5 | [@aretw0/web-skills](https://www.npmjs.com/package/@aretw0/web-skills) | 2,457 | `npm install @aretw0/web-skills` | First-party web skills: native search and browser automation via CDP |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 95 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-web-access](https://www.npmjs.com/package/pi-web-access) | 34,332 | `npm install pi-web-access` | Web search, URL fetching, GitHub repo cloning, PDF extraction, YouTube video understanding, and local video analysis fo… |
| 2 | [@ollama/pi-web-search](https://www.npmjs.com/package/@ollama/pi-web-search) | 26,114 | `npm install @ollama/pi-web-search` | Web search and fetch tools for Pi agent - uses Ollama's web search and fetch APIs |
| 3 | [@juicesharp/rpiv-web-tools](https://www.npmjs.com/package/@juicesharp/rpiv-web-tools) | 9,054 | `npm install @juicesharp/rpiv-web-tools` | Pi extension. Web search and fetch for the model, backed by the Brave Search API. |
| 4 | [pi-smart-fetch](https://www.npmjs.com/package/pi-smart-fetch) | 7,255 | `npm install pi-smart-fetch` | Smart web_fetch with desktop-browser TLS impersonation and defuddle extraction. |
| 5 | [@aretw0/web-skills](https://www.npmjs.com/package/@aretw0/web-skills) | 2,457 | `npm install @aretw0/web-skills` | First-party web skills: native search and browser automation via CDP |
| 6 | [@ifi/pi-plan](https://www.npmjs.com/package/@ifi/pi-plan) | 2,446 | `npm install @ifi/pi-plan` | Planning mode extension for pi with persistent plan files, branch-aware planning, and delegated research tasks. |
| 7 | [@pi-unipi/web-api](https://www.npmjs.com/package/@pi-unipi/web-api) | 2,064 | `npm install @pi-unipi/web-api` | Web search, read, and summarize tools with provider-based backend selection for Pi coding agent |
| 8 | [@lincoln504/pi-research](https://www.npmjs.com/package/@lincoln504/pi-research) | 1,719 | `npm install @lincoln504/pi-research` | A set of web research tools (search, scrape, and others) and research agent system that uses them safely and efficientl… |
| 9 | [@alexanderfortin/pi-tavily-tools](https://www.npmjs.com/package/@alexanderfortin/pi-tavily-tools) | 1,504 | `npm install @alexanderfortin/pi-tavily-tools` | Pi coding agent extension for web search and content extraction using Tavily |
| 10 | [pi-web-providers](https://www.npmjs.com/package/pi-web-providers) | 1,377 | `npm install pi-web-providers` | Configurable web access extension for pi with per-tool provider routing and explicit provider option schemas for search… |
| 11 | [pi-librarian](https://www.npmjs.com/package/pi-librarian) | 1,287 | `npm install pi-librarian` | GitHub research subagent package for pi coding agent |
| 12 | [@chewey182/multipi](https://www.npmjs.com/package/@chewey182/multipi) | 1,167 | `npm install @chewey182/multipi` | Multi-agent orchestration system for pi-coding-agent with subagents, web search, and URL fetching |
| 13 | [@demigodmode/pi-web-agent](https://www.npmjs.com/package/@demigodmode/pi-web-agent) | 1,087 | `npm install @demigodmode/pi-web-agent` | Pi package for reliable web access with explicit search, fetch, and headless boundaries. |
| 14 | [@ifi/pi-web-remote](https://www.npmjs.com/package/@ifi/pi-web-remote) | 977 | `npm install @ifi/pi-web-remote` | Pi extension: /remote command for sharing sessions via web UI. |
| 15 | [pi-scraper](https://www.npmjs.com/package/pi-scraper) | 880 | `npm install pi-scraper` | Crawl, map, and structured extraction for Pi — scraper-first, Pi-native, and local-first. |
| 16 | [@the-forge-flow/camoufox-pi](https://www.npmjs.com/package/@the-forge-flow/camoufox-pi) | 836 | `npm install @the-forge-flow/camoufox-pi` | PI extension for stealth web search and URL fetching via Camoufox |
| 17 | [@curio-data/pi-intelli-search](https://www.npmjs.com/package/@curio-data/pi-intelli-search) | 771 | `npm install @curio-data/pi-intelli-search` | Intelligent web research for Pi: search, extract, collate, and cache grounded web context in one tool call. |
| 18 | [@counterposition/pi-web-search](https://www.npmjs.com/package/@counterposition/pi-web-search) | 764 | `npm install @counterposition/pi-web-search` | Multi-provider web search and markdown page fetch for Pi |
| 19 | [@vanillagreen/pi-web-tools](https://www.npmjs.com/package/@vanillagreen/pi-web-tools) | 659 | `npm install @vanillagreen/pi-web-tools` | First-party Pi web tools: provider-toggled web search, Exa deep research, content retrieval, and OpenAI native web_sear… |
| 20 | [@dreadedzombie/pi-init](https://www.npmjs.com/package/@dreadedzombie/pi-init) | 655 | `npm install @dreadedzombie/pi-init` | Generates a typed AGENTS.md for your project — /init, /init research, /init debug, /init code |
| 21 | [pi-webaio](https://www.npmjs.com/package/pi-webaio) | 629 | `npm install pi-webaio` | All-in-one web tools for pi with search (Google, Brave, DDG) and fetch with headless browser AI summarization |
| 22 | [@heyhuynhgiabuu/pi-search](https://www.npmjs.com/package/@heyhuynhgiabuu/pi-search) | 589 | `npm install @heyhuynhgiabuu/pi-search` | Unified search toolkit for pi — web search, code search, docs lookup, and GitHub code search in one extension. |
| 23 | [@0xkobold/pi-web](https://www.npmjs.com/package/@0xkobold/pi-web) | 523 | `npm install @0xkobold/pi-web` | Web search and content extraction for pi agents — DuckDuckGo/SearX search, cascade fetching (fast → readability → Playw… |
| 24 | [pi-searxng](https://www.npmjs.com/package/pi-searxng) | 512 | `npm install pi-searxng` | SearXNG web search extension for Pi with automatic GitHub repo cloning |
| 25 | [pi-web-minimal](https://www.npmjs.com/package/pi-web-minimal) | 506 | `npm install pi-web-minimal` | Minimal web, code, and documentation retrieval distillation tools for Pi |
| 26 | [pi-tavily-tools](https://www.npmjs.com/package/pi-tavily-tools) | 501 | `npm install pi-tavily-tools` | Tavily tools and status panel for pi |
| 27 | [@ogulcancelik/pi-web-browse](https://www.npmjs.com/package/@ogulcancelik/pi-web-browse) | 428 | `npm install @ogulcancelik/pi-web-browse` | Web search and content extraction skill for pi-coding-agent. Search the web and fetch pages via a real headless browser… |
| 28 | [pi-browser-harness](https://www.npmjs.com/package/pi-browser-harness) | 390 | `npm install pi-browser-harness` | Browser control extension for pi — navigate, click, type, screenshot, and extract data from real Chrome via CDP |
| 29 | [pi-crawl4ai](https://www.npmjs.com/package/pi-crawl4ai) | 389 | `npm install pi-crawl4ai` | Crawl4AI extension for pi — web crawling and structured extraction |
| 30 | [pi-exa](https://www.npmjs.com/package/pi-exa) | 377 | `npm install pi-exa` | Web search, deep research and fetch content tools for Pi Agent, powered by Exa. |
| 31 | [@bitcraft-apps/pi-web-tools](https://www.npmjs.com/package/@bitcraft-apps/pi-web-tools) | 351 | `npm install @bitcraft-apps/pi-web-tools` | Shell-only web search and fetch tools for pi.dev. No API keys. |
| 32 | [@leing2021/pi-search](https://www.npmjs.com/package/@leing2021/pi-search) | 337 | `npm install @leing2021/pi-search` | Minimal Secure Evidence Gateway for Pi Coding Agent — search, web_search, web_fetch, research_search. Intent-based prov… |
| 33 | [pi-pubmed](https://www.npmjs.com/package/pi-pubmed) | 326 | `npm install pi-pubmed` | Search PubMed and fetch article abstracts directly from Pi using NCBI E-utilities |
| 34 | [@rwese/minimax-web-search](https://www.npmjs.com/package/@rwese/minimax-web-search) | 325 | `npm install @rwese/minimax-web-search` | MiniMax extension for pi coding agent |
| 35 | [pi-search-multi](https://www.npmjs.com/package/pi-search-multi) | 322 | `npm install pi-search-multi` | Unified web search extension for pi with 9 backend providers — DuckDuckGo, Marginalia, Serper, Brave, Tavily, Exa, Fire… |
| 36 | [@jmcombs/pi-tavily-search](https://www.npmjs.com/package/@jmcombs/pi-tavily-search) | 317 | `npm install @jmcombs/pi-tavily-search` | Pi extension that performs real-time web search via the Tavily API. |
| 37 | [pi-yep-search](https://www.npmjs.com/package/pi-yep-search) | 287 | `npm install pi-yep-search` | Yep Search API extension for pi — adds a web_search tool backed by https://platform.yep.com |
| 38 | [pi-web-fetch](https://www.npmjs.com/package/pi-web-fetch) | 283 | `npm install pi-web-fetch` | Pi extension: fetch web pages via headless Chrome, extract content with trafilatura, and optionally process with an LLM |
| 39 | [@jeonghyeon.net/pi-web-access](https://www.npmjs.com/package/@jeonghyeon.net/pi-web-access) | 264 | `npm install @jeonghyeon.net/pi-web-access` | Web search, URL fetching, GitHub repo cloning, PDF extraction, YouTube video understanding, and local video analysis fo… |
| 40 | [sift-web-tools](https://www.npmjs.com/package/sift-web-tools) | 262 | `npm install sift-web-tools` | Pi agent web search, fetch, and save tools powered by the local sift CLI. |
| 41 | [pi-exa-tools](https://www.npmjs.com/package/pi-exa-tools) | 250 | `npm install pi-exa-tools` | Adds Exa-backed web search and page fetching tools to Pi. |
| 42 | [pi-deep-research](https://www.npmjs.com/package/pi-deep-research) | 245 | `npm install pi-deep-research` | Deep research skill for pi — structured search, reflection, and analysis. |
| 43 | [@arcadia64/pi-ddgs](https://www.npmjs.com/package/@arcadia64/pi-ddgs) | 235 | `npm install @arcadia64/pi-ddgs` | Pi extension for web search and page fetch with curl_cffi + Chrome + Camoufox fallback chain. Backed by a local Docker… |
| 44 | [pi-codex-web-search](https://www.npmjs.com/package/pi-codex-web-search) | 224 | `npm install pi-codex-web-search` | Pi extension that exposes web search through the local Codex CLI |
| 45 | [@benvargas/pi-firecrawl](https://www.npmjs.com/package/@benvargas/pi-firecrawl) | 211 | `npm install @benvargas/pi-firecrawl` | Firecrawl tools for pi - Web scraping, crawling, and data extraction via Firecrawl's REST API |
| 46 | [@e9n/pi-web-dashboard](https://www.npmjs.com/package/@e9n/pi-web-dashboard) | 209 | `npm install @e9n/pi-web-dashboard` | Live agent dashboard for pi — SSE streaming, session view, and prompt submission |
| 47 | [@siddr/pi-web-search](https://www.npmjs.com/package/@siddr/pi-web-search) | 204 | `npm install @siddr/pi-web-search` | Brave web search tool extension for pi |
| 48 | [@rjshrjndrn/pi-fetch](https://www.npmjs.com/package/@rjshrjndrn/pi-fetch) | 183 | `npm install @rjshrjndrn/pi-fetch` | Web content extraction for pi — fetch any URL as clean Markdown using Defuddle |
| 49 | [pi-native-search](https://www.npmjs.com/package/pi-native-search) | 178 | `npm install pi-native-search` | Pi extension that adds web_search and web_fetch tools using each provider's native search backend (ZAI MCP, Anthropic,… |
| 50 | [pi-exa-search](https://www.npmjs.com/package/pi-exa-search) | 165 | `npm install pi-exa-search` | Exa-powered source discovery and search workflows for Pi. |
| 51 | [@wierdbytes/pi-web](https://www.npmjs.com/package/@wierdbytes/pi-web) | 148 | `npm install @wierdbytes/pi-web` | Anthropic-powered web_search tool for the pi coding agent |
| 52 | [pi-llm-wiki](https://www.npmjs.com/package/pi-llm-wiki) | 147 | `npm install pi-llm-wiki` | A Pi package for persistent markdown wikis with source capture, generated metadata, linting, and an LLM wiki-maintainer… |
| 53 | [@vaayne/pi-web-tools](https://www.npmjs.com/package/@vaayne/pi-web-tools) | 141 | `npm install @vaayne/pi-web-tools` | Pi extension for web fetching and search capabilities |
| 54 | [pi-parallel-web-search](https://www.npmjs.com/package/pi-parallel-web-search) | 136 | `npm install pi-parallel-web-search` | A pi extension that adds a web_search tool powered by Parallel AI |
| 55 | [pi-free-web-search](https://www.npmjs.com/package/pi-free-web-search) | 131 | `npm install pi-free-web-search` | Free, hybrid, browser-aware web search and content extraction package for Pi coding agent |
| 56 | [pi-tavily-search](https://www.npmjs.com/package/pi-tavily-search) | 112 | `npm install pi-tavily-search` | AI-powered web search using Tavily API for pi coding-agent |
| 57 | [pi-web-extension](https://www.npmjs.com/package/pi-web-extension) | 106 | `npm install pi-web-extension` | A pi extension that adds web search and web fetch tools to the coding agent. |
| 58 | [@odradekk/vera-web-tools](https://www.npmjs.com/package/@odradekk/vera-web-tools) | 104 | `npm install @odradekk/vera-web-tools` | Web search, web read, docs search, academic search, and PDF parsing tools for Vera agent |
| 59 | [pi-reddit-research](https://www.npmjs.com/package/pi-reddit-research) | 98 | `npm install pi-reddit-research` | Reddit JSON research tools and skill for pi coding agent. |
| 60 | [pi-web-utils](https://www.npmjs.com/package/pi-web-utils) | 97 | `npm install pi-web-utils` | Configurable web search, markdown-first webpage fetching, GitHub local repo search tools for pi coding agent |
| 61 | [@winds-ai/pi-native-codex-web-search](https://www.npmjs.com/package/@winds-ai/pi-native-codex-web-search) | 97 | `npm install @winds-ai/pi-native-codex-web-search` | Native web search for Pi using OpenAI's Responses API via Codex backend (same as Codex CLI) |
| 62 | [@artale/pi-web-search](https://www.npmjs.com/package/@artale/pi-web-search) | 92 | `npm install @artale/pi-web-search` | Simple web search |
| 63 | [pi-websearch-tavily](https://www.npmjs.com/package/pi-websearch-tavily) | 89 | `npm install pi-websearch-tavily` | Pi web search tool powered by Tavily |
| 64 | [@aemonculaba/pi-search](https://www.npmjs.com/package/@aemonculaba/pi-search) | 85 | `npm install @aemonculaba/pi-search` | Web search + fetch extension for pi (OpenAI search + Readability extraction) |
| 65 | [@coctostan/pi-exa-gh-web-tools](https://www.npmjs.com/package/@coctostan/pi-exa-gh-web-tools) | 72 | `npm install @coctostan/pi-exa-gh-web-tools` | Web search via Exa, content extraction, and GitHub repo cloning for Pi coding agent |
| 66 | [pi-ollama-web-search](https://www.npmjs.com/package/pi-ollama-web-search) | 70 | `npm install pi-ollama-web-search` | pi extension adding Ollama web_search and web_fetch tools |
| 67 | [pi-websearch-firecrawl](https://www.npmjs.com/package/pi-websearch-firecrawl) | 65 | `npm install pi-websearch-firecrawl` | Pi web search tool powered by Firecrawl (search + content extraction) |
| 68 | [@venomzen/pi-web-access-enhanced](https://www.npmjs.com/package/@venomzen/pi-web-access-enhanced) | 62 | `npm install @venomzen/pi-web-access-enhanced` | Personal enhanced fork of pi-web-access: web search, content extraction, GitHub repo cloning, PDF extraction, YouTube a… |
| 69 | [pi-webfetch-to-markdown](https://www.npmjs.com/package/pi-webfetch-to-markdown) | 62 | `npm install pi-webfetch-to-markdown` | Fetch web content as clean Markdown for AI consumption. Supports Cloudflare's Markdown for Agents content negotiation w… |
| 70 | [@clankie/web-search](https://www.npmjs.com/package/@clankie/web-search) | 60 | `npm install @clankie/web-search` | Headless web search and page extraction for clankie using CloakBrowser + Playwright |
| 71 | [pi-skill-tavily](https://www.npmjs.com/package/pi-skill-tavily) | 54 | `npm install pi-skill-tavily` | Tavily web search, extract, crawl, and research skills for pi coding agent |
| 72 | [@guwidoe/pi-web-search](https://www.npmjs.com/package/@guwidoe/pi-web-search) | 51 | `npm install @guwidoe/pi-web-search` | pi skill: web search via DuckDuckGo with optional page content extraction |
| 73 | [@marcfargas/skills](https://www.npmjs.com/package/@marcfargas/skills) | 49 | `npm install @marcfargas/skills` | Reusable AI agent skills for pi, Claude Code, Cursor, and any Agent Skills compatible agent |
| 74 | [@yofriadi/pi-web-search](https://www.npmjs.com/package/@yofriadi/pi-web-search) | 49 | `npm install @yofriadi/pi-web-search` | Web search extension package for pi |
| 75 | [@rbwsam/pi-exa](https://www.npmjs.com/package/@rbwsam/pi-exa) | 49 | `npm install @rbwsam/pi-exa` | Pi extension integrating the Exa API for web search and content retrieval |
| 76 | [@wirebabel/pi-web-access](https://www.npmjs.com/package/@wirebabel/pi-web-access) | 43 | `npm install @wirebabel/pi-web-access` | Web search, URL fetching, GitHub repo cloning, PDF extraction, YouTube video understanding, and local video analysis fo… |
| 77 | [@arpagon/pi-web-providers](https://www.npmjs.com/package/@arpagon/pi-web-providers) | 39 | `npm install @arpagon/pi-web-providers` | Configurable web access extension for pi with per-tool provider routing for search, contents, answers, and research acr… |
| 78 | [@joemccann/pi-exa](https://www.npmjs.com/package/@joemccann/pi-exa) | 38 | `npm install @joemccann/pi-exa` | Exa AI semantic search and similarity tools for pi coding agent — search the web by meaning, find similar pages, filter… |
| 79 | [@guwidoe/pi-web-fetch](https://www.npmjs.com/package/@guwidoe/pi-web-fetch) | 34 | `npm install @guwidoe/pi-web-fetch` | pi skill: fetch webpage content as markdown with fallback web search |
| 80 | [pi-scurl](https://www.npmjs.com/package/pi-scurl) | 33 | `npm install pi-scurl` | Secure web fetch for pi – HTML-to-markdown via mdream, secret scanning, prompt injection detection |
| 81 | [pi-surf](https://www.npmjs.com/package/pi-surf) | 33 | `npm install pi-surf` | Surf the web from pi — clean URL fetching, pluggable search, and scout subagent that keeps noise out of your context |
| 82 | [pi-web-tools](https://www.npmjs.com/package/pi-web-tools) | 32 | `npm install pi-web-tools` | Web search via Exa, content extraction, and GitHub repo cloning for Pi coding agent |
| 83 | [@edlsh/pi-web-tools](https://www.npmjs.com/package/@edlsh/pi-web-tools) | 30 | `npm install @edlsh/pi-web-tools` | Multi-provider web search, extract, research, and code-search tools for Pi coding agent |
| 84 | [pi-native-web-search](https://www.npmjs.com/package/pi-native-web-search) | 23 | `npm install pi-native-web-search` | Adds a web_search tool powered by Anthropic's native web search — no third-party API key needed. Always runs via claude… |
| 85 | [@hngye02/pi-web-tools](https://www.npmjs.com/package/@hngye02/pi-web-tools) | 23 | `npm install @hngye02/pi-web-tools` | webfetch + websearch tools for Pi |
| 86 | [@burneikis/pi-web-search](https://www.npmjs.com/package/@burneikis/pi-web-search) | 20 | `npm install @burneikis/pi-web-search` | A claude native web search plugin for Pi. |
| 87 | [@mjakl/pi-git-research](https://www.npmjs.com/package/@mjakl/pi-git-research) | 19 | `npm install @mjakl/pi-git-research` | Tools for researching and exploring Git repositories with Pi agent |
| 88 | [@edmundmiller/pi-scurl](https://www.npmjs.com/package/@edmundmiller/pi-scurl) | 16 | `npm install @edmundmiller/pi-scurl` | Secure web fetch for pi – HTML-to-markdown via mdream, secret scanning, prompt injection detection |
| 89 | [@capyup/pi-exa](https://www.npmjs.com/package/@capyup/pi-exa) | 0 | `npm install @capyup/pi-exa` | Exa web research for pi via five first-class tools + skill + local CLI. Uses the official exa-js SDK directly — no MCP… |
| 90 | [@cltec/pi-ollama-web-search](https://www.npmjs.com/package/@cltec/pi-ollama-web-search) | 0 | `npm install @cltec/pi-ollama-web-search` | A pi extension package that exposes Ollama Web Search as a custom tool. |
| 91 | [@narumitw/pi-web-search](https://www.npmjs.com/package/@narumitw/pi-web-search) | 0 | `npm install @narumitw/pi-web-search` | Pi package that adds a web_search tool backed by Brave Search or DuckDuckGo HTML. |
| 92 | [@pavlokrykh/strip-search](https://www.npmjs.com/package/@pavlokrykh/strip-search) | 0 | `npm install @pavlokrykh/strip-search` | A pi extension for compact DuckDuckGo search results. |
| 93 | [@rejot-dev/pi-openai-search](https://www.npmjs.com/package/@rejot-dev/pi-openai-search) | 0 | `npm install @rejot-dev/pi-openai-search` | A pi package that injects OpenAI's native web_search tool into the provider request payload. |
| 94 | [pi-bangla-news](https://www.npmjs.com/package/pi-bangla-news) | 0 | `npm install pi-bangla-news` | Pi extension for scraping latest Bangladeshi news headlines via Scrapling MCP server |
| 95 | [pi-web-kit](https://www.npmjs.com/package/pi-web-kit) | 0 | `npm install pi-web-kit` | Context-efficient web search and fetch tools for Pi. |

</details>

<a id="tui"></a>
## 终端 UI
> 95 个包 · 总月下载量 65,065

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-powerline-footer](https://www.npmjs.com/package/pi-powerline-footer) | 11,650 | `npm install pi-powerline-footer` | Powerline-style status bar extension for pi coding agent |
| 2 | [pi-btw](https://www.npmjs.com/package/pi-btw) | 9,095 | `npm install pi-btw` | A pi extension for parallel side conversations with /btw |
| 3 | [pi-mermaid](https://www.npmjs.com/package/pi-mermaid) | 5,147 | `npm install pi-mermaid` | 🧜‍♀️ Pi extension that renders Mermaid diagrams as ASCII in the TUI |
| 4 | [pi-tool-display](https://www.npmjs.com/package/pi-tool-display) | 2,867 | `npm install pi-tool-display` | Compact tool call rendering, diff visualization, and output truncation extension for Pi… |
| 5 | [amp-themes](https://www.npmjs.com/package/amp-themes) | 2,853 | `npm install amp-themes` | Amp-inspired Pi UI suite: theme, editor chrome, and compact tool display. |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 95 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-powerline-footer](https://www.npmjs.com/package/pi-powerline-footer) | 11,650 | `npm install pi-powerline-footer` | Powerline-style status bar extension for pi coding agent |
| 2 | [pi-btw](https://www.npmjs.com/package/pi-btw) | 9,095 | `npm install pi-btw` | A pi extension for parallel side conversations with /btw |
| 3 | [pi-mermaid](https://www.npmjs.com/package/pi-mermaid) | 5,147 | `npm install pi-mermaid` | 🧜‍♀️ Pi extension that renders Mermaid diagrams as ASCII in the TUI |
| 4 | [pi-tool-display](https://www.npmjs.com/package/pi-tool-display) | 2,867 | `npm install pi-tool-display` | Compact tool call rendering, diff visualization, and output truncation extension for Pi coding agent. Hides, collapses,… |
| 5 | [amp-themes](https://www.npmjs.com/package/amp-themes) | 2,853 | `npm install amp-themes` | Amp-inspired Pi UI suite: theme, editor chrome, and compact tool display. |
| 6 | [@juanibiapina/pi-powerbar](https://www.npmjs.com/package/@juanibiapina/pi-powerbar) | 2,157 | `npm install @juanibiapina/pi-powerbar` | Pi extension that renders a persistent powerline status bar with left/right segments updated via events |
| 7 | [@codexstar/pi-pompom](https://www.npmjs.com/package/@codexstar/pi-pompom) | 1,942 | `npm install @codexstar/pi-pompom` | Pi-Pompom — A 3D raymarched virtual pet with voice, ambient weather sounds, AI side chat, agent tracking, and 23 layere… |
| 8 | [pi-resource-center](https://www.npmjs.com/package/pi-resource-center) | 1,652 | `npm install pi-resource-center` | Pi package for browsing packages, skills, extensions, prompts, and themes |
| 9 | [pi-glance](https://www.npmjs.com/package/pi-glance) | 1,439 | `npm install pi-glance` | A polished input surface extension for pi, with a rounded multiline editor and inline model/context/status glance. |
| 10 | [pi-thinking-steps](https://www.npmjs.com/package/pi-thinking-steps) | 1,335 | `npm install pi-thinking-steps` | Professional three-mode thinking-step rendering for Pi's TUI. |
| 11 | [@feniix/pi-statusline](https://www.npmjs.com/package/@feniix/pi-statusline) | 1,236 | `npm install @feniix/pi-statusline` | Fixed two-line status footer for pi with model, thinking, context, git, token, worktree, and skill indicators |
| 12 | [awto-pi-lot](https://www.npmjs.com/package/awto-pi-lot) | 1,098 | `npm install awto-pi-lot` | pi-coding-agent extension that adds PPQ.ai provider and their AutoClaw model |
| 13 | [pi-powerline](https://www.npmjs.com/package/pi-powerline) | 936 | `npm install pi-powerline` | Powerline-style UI extensions for pi coding agent (custom editor, breadcrumb, footer, header) |
| 14 | [@ifi/oh-pi](https://www.npmjs.com/package/@ifi/oh-pi) | 918 | `npm install @ifi/oh-pi` | One-click setup for pi-coding-agent — extensions, themes, prompts, skills, and ant-colony swarm. Like oh-my-zsh for pi. |
| 15 | [@axnic/pi-aks-user-question](https://www.npmjs.com/package/@axnic/pi-aks-user-question) | 912 | `npm install @axnic/pi-aks-user-question` | Pi extension — lets LLMs ask structured questions to the user via an interactive TUI form |
| 16 | [pi-fancy-footer](https://www.npmjs.com/package/pi-fancy-footer) | 910 | `npm install pi-fancy-footer` | A fancy footer extension for pi |
| 17 | [pi-questions](https://www.npmjs.com/package/pi-questions) | 898 | `npm install pi-questions` | Minimal ask_questions tool for Pi |
| 18 | [@ocodista/pi-token-bloat](https://www.npmjs.com/package/@ocodista/pi-token-bloat) | 874 | `npm install @ocodista/pi-token-bloat` | Pi extension that estimates model-facing context footprint by resource. |
| 19 | [@termdraw/pi](https://www.npmjs.com/package/@termdraw/pi) | 866 | `npm install @termdraw/pi` | Pi extension package that embeds termDRAW inside Pi via opentui-island. |
| 20 | [pi-jarvis](https://www.npmjs.com/package/pi-jarvis) | 856 | `npm install pi-jarvis` | A /jarvis side-conversation overlay extension for Pi. |
| 21 | [oh-pi](https://www.npmjs.com/package/oh-pi) | 797 | `npm install oh-pi` | One-click setup for pi-coding-agent. Like oh-my-zsh for pi. |
| 22 | [pi-copy-response](https://www.npmjs.com/package/pi-copy-response) | 752 | `npm install pi-copy-response` | Pi package for copying the latest assistant response with a code-block picker, live preview, and optional /copy override |
| 23 | [pi-i18n](https://www.npmjs.com/package/pi-i18n) | 725 | `npm install pi-i18n` | /lang lets pi speak 中文, 日本語, 한국어, Español, Français, Deutsch, and more. |
| 24 | [pi-easy-footer](https://www.npmjs.com/package/pi-easy-footer) | 709 | `npm install pi-easy-footer` | A footer extension and session banner for pi |
| 25 | [pi-powerline-melbourne](https://www.npmjs.com/package/pi-powerline-melbourne) | 682 | `npm install pi-powerline-melbourne` | Custom pi extensions, including a nerd-style powerline footer with context token count |
| 26 | [@badliveware/pi-footer-framework](https://www.npmjs.com/package/@badliveware/pi-footer-framework) | 536 | `npm install @badliveware/pi-footer-framework` | Configurable footer framework extension for Pi. |
| 27 | [pi-thinking](https://www.npmjs.com/package/pi-thinking) | 536 | `npm install pi-thinking` | Muted, themed rendering for thinking blocks in pi. |
| 28 | [pi-screenshots-picker](https://www.npmjs.com/package/pi-screenshots-picker) | 524 | `npm install pi-screenshots-picker` | Screenshot picker extension for pi coding agent - quickly select and attach screenshots to your prompts |
| 29 | [@diegopetrucci/pi-minimal-footer](https://www.npmjs.com/package/@diegopetrucci/pi-minimal-footer) | 502 | `npm install @diegopetrucci/pi-minimal-footer` | A minimal custom footer for pi. |
| 30 | [@todu/pi-extensions](https://www.npmjs.com/package/@todu/pi-extensions) | 495 | `npm install @todu/pi-extensions` | Task manager extensions for the pi agent harness that create UI for handling tasks. |
| 31 | [@firstpick/pi-extension-git-footer-status](https://www.npmjs.com/package/@firstpick/pi-extension-git-footer-status) | 486 | `npm install @firstpick/pi-extension-git-footer-status` | Enhanced Pi footer with git status, token usage, context usage, and model telemetry. |
| 32 | [@qhn/pi-goal](https://www.npmjs.com/package/@qhn/pi-goal) | 453 | `npm install @qhn/pi-goal` | Setup-first autonomous goal mode extension for Pi. |
| 33 | [pi-service-tier](https://www.npmjs.com/package/pi-service-tier) | 436 | `npm install pi-service-tier` | Fast mode and provider service-tier controls for pi |
| 34 | [pi-cache-graph](https://www.npmjs.com/package/pi-cache-graph) | 426 | `npm install pi-cache-graph` | Pi extension for visualizing context cache distribution and statistics |
| 35 | [pi-git-status-line](https://www.npmjs.com/package/pi-git-status-line) | 414 | `npm install pi-git-status-line` | Shareable Pi package that extends the status line with git branch, uncommitted files, and ahead/behind counts. |
| 36 | [pi-bash-live-view](https://www.npmjs.com/package/pi-bash-live-view) | 412 | `npm install pi-bash-live-view` | A pi extension that adds optional PTY-backed live terminal rendering to the bash tool via usePTY=true. |
| 37 | [@pi-unipi/footer](https://www.npmjs.com/package/@pi-unipi/footer) | 406 | `npm install @pi-unipi/footer` | Persistent status bar for Unipi — subscribes to UNIPI_EVENTS and renders key stats from all unipi packages |
| 38 | [pi-kimi-usage](https://www.npmjs.com/package/pi-kimi-usage) | 384 | `npm install pi-kimi-usage` | Shows Kimi usage in the pi status bar when a Kimi model is selected |
| 39 | [@zackify/pi-port-forward](https://www.npmjs.com/package/@zackify/pi-port-forward) | 368 | `npm install @zackify/pi-port-forward` | A pi extension that adds an interactive SSH local port forwarding command. |
| 40 | [@mazli/pi-ask-user-question](https://www.npmjs.com/package/@mazli/pi-ask-user-question) | 349 | `npm install @mazli/pi-ask-user-question` | Claude Code-style AskUserQuestion tool for pi. |
| 41 | [@carlosgtrz/pi-run-timer](https://www.npmjs.com/package/@carlosgtrz/pi-run-timer) | 346 | `npm install @carlosgtrz/pi-run-timer` | Pi extension that shows elapsed, previous, and longest agent run times in the footer. |
| 42 | [pi-zentui](https://www.npmjs.com/package/pi-zentui) | 343 | `npm install pi-zentui` | A Starship-inspired statusline and Opencode-style TUI for Pi. |
| 43 | [@tanvesh01/pierre-diffs](https://www.npmjs.com/package/@tanvesh01/pierre-diffs) | 312 | `npm install @tanvesh01/pierre-diffs` | Pierre-themed inline diff renderer for Pi edit and write tool results. |
| 44 | [pi-vitals](https://www.npmjs.com/package/pi-vitals) | 290 | `npm install pi-vitals` | A customizable powerline-style footer for pi |
| 45 | [pi-codex-footer](https://www.npmjs.com/package/pi-codex-footer) | 290 | `npm install pi-codex-footer` | Pi extension that adds a 2-line footer with live OpenAI Codex 5h/7d quota usage and reset timers. |
| 46 | [@rexkit/pi-lazygit](https://www.npmjs.com/package/@rexkit/pi-lazygit) | 254 | `npm install @rexkit/pi-lazygit` | Pi package that opens Lazygit in a floating overlay window. |
| 47 | [@thurstonsand/pi-powerline-footer](https://www.npmjs.com/package/@thurstonsand/pi-powerline-footer) | 250 | `npm install @thurstonsand/pi-powerline-footer` | Powerline-style status bar extension for pi coding agent |
| 48 | [pi-tmux-cursor-focus](https://www.npmjs.com/package/pi-tmux-cursor-focus) | 233 | `npm install pi-tmux-cursor-focus` | Pi extension that hides the editor cursor in unfocused tmux panes without replacing other editor/status extensions |
| 49 | [pi-model-cycler](https://www.npmjs.com/package/pi-model-cycler) | 227 | `npm install pi-model-cycler` | Interactive model switcher for Pi coding agent — browse, search, favorite, and cycle models from the TUI |
| 50 | [pi-tldr](https://www.npmjs.com/package/pi-tldr) | 223 | `npm install pi-tldr` | A pi coding-agent extension that shows live TLDR summaries above the input bar. |
| 51 | [@agnishc/edb-global-footer](https://www.npmjs.com/package/@agnishc/edb-global-footer) | 221 | `npm install @agnishc/edb-global-footer` | Pi extension: two-line status footer showing path, git branch, token usage, and model |
| 52 | [pi-animations](https://www.npmjs.com/package/pi-animations) | 219 | `npm install pi-animations` | Animated thinking/working/tool indicators for the Pi coding agent — 21 terminal animations with ANSI true color and Ner… |
| 53 | [@haispeed/pi-deck](https://www.npmjs.com/package/@haispeed/pi-deck) | 173 | `npm install @haispeed/pi-deck` | A theme and footer enhancement pack for pi |
| 54 | [pi-session-cleanup](https://www.npmjs.com/package/pi-session-cleanup) | 136 | `npm install pi-session-cleanup` | Pi extension for interactive batch session cleanup and safe deletion. |
| 55 | [pi-overwatch](https://www.npmjs.com/package/pi-overwatch) | 115 | `npm install pi-overwatch` | Minimal TUI observability for Pi sessions, with tmux session awareness and cwd fallback |
| 56 | [pi-session-name-editor](https://www.npmjs.com/package/pi-session-name-editor) | 102 | `npm install pi-session-name-editor` | Pi extension that shows a context-aware label in the editor border and a custom footer with token stats |
| 57 | [@zackify/pi-bg-tasks](https://www.npmjs.com/package/@zackify/pi-bg-tasks) | 97 | `npm install @zackify/pi-bg-tasks` | A pi extension that runs and manages background commands in tmux. |
| 58 | [claudemon](https://www.npmjs.com/package/claudemon) | 84 | `npm install claudemon` | Claude Usage Monitor TUI - monitor your Claude usage in real-time |
| 59 | [@hyperprior/pi-shared](https://www.npmjs.com/package/@hyperprior/pi-shared) | 78 | `npm install @hyperprior/pi-shared` | Shared helpers for Hyperprior pi plugins |
| 60 | [@siddr/pi-tool-display](https://www.npmjs.com/package/@siddr/pi-tool-display) | 78 | `npm install @siddr/pi-tool-display` | Compact built-in tool rendering overrides for pi |
| 61 | [@gravewhisper/pi-theme-monokai-classic](https://www.npmjs.com/package/@gravewhisper/pi-theme-monokai-classic) | 77 | `npm install @gravewhisper/pi-theme-monokai-classic` | A Monokai Classic theme for Pi with softer borders, balanced code colors, and neutral tool panels. |
| 62 | [pi-emote](https://www.npmjs.com/package/pi-emote) | 73 | `npm install pi-emote` | Animated pixel-art emote widget for pi TUI |
| 63 | [@peteturnbull/pi-extensions](https://www.npmjs.com/package/@peteturnbull/pi-extensions) | 72 | `npm install @peteturnbull/pi-extensions` | A pi extension pack with a local task board TUI and a deterministic docs-store with qmd-powered search. |
| 64 | [pi-beads](https://www.npmjs.com/package/pi-beads) | 69 | `npm install pi-beads` | pi extension for beads (bd) task management |
| 65 | [@jqwn/pi-ask-user-question](https://www.npmjs.com/package/@jqwn/pi-ask-user-question) | 66 | `npm install @jqwn/pi-ask-user-question` | A Pi extension that lets the model ask rich multi-question TUI dialogs with options, descriptions, previews, multi-sele… |
| 66 | [@jademind/pi-bridge](https://www.npmjs.com/package/@jademind/pi-bridge) | 63 | `npm install @jademind/pi-bridge` | Minimal secure inbox bridge for Pi: reliable queued/steering message delivery to running sessions. |
| 67 | [pi-statusline](https://www.npmjs.com/package/pi-statusline) | 60 | `npm install pi-statusline` | Claude Code-compatible command-driven statusline extension for the Pi coding agent |
| 68 | [pi-ask-me](https://www.npmjs.com/package/pi-ask-me) | 42 | `npm install pi-ask-me` | A unique question/interview tool for pi coding agent with branched chats within the question interface |
| 69 | [pi-langlearn](https://www.npmjs.com/package/pi-langlearn) | 36 | `npm install pi-langlearn` | Duolingo-esque language learning overlay for Pi |
| 70 | [@hyperprior/pi-ssh](https://www.npmjs.com/package/@hyperprior/pi-ssh) | 33 | `npm install @hyperprior/pi-ssh` | Remote command execution via SSH |
| 71 | [pi-tmux-focus-cursor](https://www.npmjs.com/package/pi-tmux-focus-cursor) | 33 | `npm install pi-tmux-focus-cursor` | Hide Pi's fake editor cursor when the current tmux pane loses focus |
| 72 | [@rhobot-dev/pi-ralph](https://www.npmjs.com/package/@rhobot-dev/pi-ralph) | 29 | `npm install @rhobot-dev/pi-ralph` | pi extension/package to manage ralph loops from within the pi TUI |
| 73 | [pi-model-picker](https://www.npmjs.com/package/pi-model-picker) | 28 | `npm install pi-model-picker` | Categorized, keyboard-driven model selector for the pi coding agent |
| 74 | [@modemdev/glance-pi](https://www.npmjs.com/package/@modemdev/glance-pi) | 28 | `npm install @modemdev/glance-pi` | glance.sh extension package for pi |
| 75 | [@hyperprior/pi-ask](https://www.npmjs.com/package/@hyperprior/pi-ask) | 27 | `npm install @hyperprior/pi-ask` | Structured question/answer tool for pi sessions |
| 76 | [@ifiokjr/oh-pi](https://www.npmjs.com/package/@ifiokjr/oh-pi) | 26 | `npm install @ifiokjr/oh-pi` | One-click setup for pi-coding-agent — extensions, themes, prompts, skills, and ant-colony swarm. Like oh-my-zsh for pi. |
| 77 | [@hyperprior/pi-todo](https://www.npmjs.com/package/@hyperprior/pi-todo) | 25 | `npm install @hyperprior/pi-todo` | Branch-safe todo extension for pi |
| 78 | [@zenobius/pi-footer](https://www.npmjs.com/package/@zenobius/pi-footer) | 24 | `npm install @zenobius/pi-footer` | A customisable footer component for the Pi Coding Agent interface. |
| 79 | [@hyperprior/pi-safety](https://www.npmjs.com/package/@hyperprior/pi-safety) | 23 | `npm install @hyperprior/pi-safety` | Confirmation and protection layer for dangerous git/bash/edit/write actions |
| 80 | [@hyperprior/pi-python](https://www.npmjs.com/package/@hyperprior/pi-python) | 23 | `npm install @hyperprior/pi-python` | Run Python commands from within pi |
| 81 | [@edmundmiller/pi-beads](https://www.npmjs.com/package/@edmundmiller/pi-beads) | 20 | `npm install @edmundmiller/pi-beads` | pi extension for beads (bd) task management |
| 82 | [@hyperprior/pi-web](https://www.npmjs.com/package/@hyperprior/pi-web) | 16 | `npm install @hyperprior/pi-web` | Web helpers for search and fetch |
| 83 | [@hyperprior/pi-commit](https://www.npmjs.com/package/@hyperprior/pi-commit) | 16 | `npm install @hyperprior/pi-commit` | Git commit helper tooling for pi |
| 84 | [@hyperprior/pi-browser](https://www.npmjs.com/package/@hyperprior/pi-browser) | 14 | `npm install @hyperprior/pi-browser` | Lightweight browser helper tools |
| 85 | [@hyperprior/pi-model-roles](https://www.npmjs.com/package/@hyperprior/pi-model-roles) | 13 | `npm install @hyperprior/pi-model-roles` | Role-based model switching utility (/hyper-role) |
| 86 | [@hyperprior/pi-bundle](https://www.npmjs.com/package/@hyperprior/pi-bundle) | 13 | `npm install @hyperprior/pi-bundle` | Meta package installing all Hyperprior pi plugins |
| 87 | [@hyperprior/pi-review](https://www.npmjs.com/package/@hyperprior/pi-review) | 12 | `npm install @hyperprior/pi-review` | Structured review findings for code review workflows |
| 88 | [@diegopetrucci/pi-quiet-tools](https://www.npmjs.com/package/@diegopetrucci/pi-quiet-tools) | 0 | `npm install @diegopetrucci/pi-quiet-tools` | A pi extension that visually compacts collapsed built-in tool output in the TUI without changing tool results sent to t… |
| 89 | [@neilurk12/pi-clean-footer](https://www.npmjs.com/package/@neilurk12/pi-clean-footer) | 0 | `npm install @neilurk12/pi-clean-footer` | Clean adaptive footer extension for pi coding agent. |
| 90 | [@wierdbytes/pi-facelift](https://www.npmjs.com/package/@wierdbytes/pi-facelift) | 0 | `npm install @wierdbytes/pi-facelift` | Cosmetic facelift for built-in pi tool output — open-right rounded frames, syntax-highlighted reads, status-aware bash… |
| 91 | [pi-footer](https://www.npmjs.com/package/pi-footer) | 0 | `npm install pi-footer` | Configurable, Ultimate multi-line footer/statusline extension for pi |
| 92 | [pi-footer-mode](https://www.npmjs.com/package/pi-footer-mode) | 0 | `npm install pi-footer-mode` | Zen/dev footer mode extension for Pi |
| 93 | [pi-model-effort-coloring](https://www.npmjs.com/package/pi-model-effort-coloring) | 0 | `npm install pi-model-effort-coloring` | Pi extension that colors the current model name and thinking/effort level in the footer without changing layout. |
| 94 | [pi-peek](https://www.npmjs.com/package/pi-peek) | 0 | `npm install pi-peek` | A pi extension for browsing current session scrollback in an overlay. |
| 95 | [pi-starship](https://www.npmjs.com/package/pi-starship) | 0 | `npm install pi-starship` | Starship-powered footer for pi — with PR number, model info, token counts, and thinking level |

</details>

<a id="workflow"></a>
## 工作流
> 37 个包 · 总月下载量 61,073

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@plannotator/pi-extension](https://www.npmjs.com/package/@plannotator/pi-extension) | 21,911 | `npm install @plannotator/pi-extension` | Plannotator Pi extension - interactive plan review with annotations, annotate agent mes… |
| 2 | [pi-gsd](https://www.npmjs.com/package/pi-gsd) | 10,542 | `npm install pi-gsd` | Get Shit Done - Unofficial port of the renowned AI-native project-planning spec-driven… |
| 3 | [@juicesharp/rpiv-pi](https://www.npmjs.com/package/@juicesharp/rpiv-pi) | 8,855 | `npm install @juicesharp/rpiv-pi` | A skill-based development workflow for Pi Agent. Five skills (research, design, plan, i… |
| 4 | [@pi-unipi/workflow](https://www.npmjs.com/package/@pi-unipi/workflow) | 2,270 | `npm install @pi-unipi/workflow` | Structured development workflow commands for Pi coding agent |
| 5 | [@tianhai/pi-workflow-kit](https://www.npmjs.com/package/@tianhai/pi-workflow-kit) | 2,144 | `npm install @tianhai/pi-workflow-kit` | Enforce structured brainstorm→plan→execute→finalize workflow with TDD discipline in AI… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 37 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@plannotator/pi-extension](https://www.npmjs.com/package/@plannotator/pi-extension) | 21,911 | `npm install @plannotator/pi-extension` | Plannotator Pi extension - interactive plan review with annotations, annotate agent messages, and review code/PRs |
| 2 | [pi-gsd](https://www.npmjs.com/package/pi-gsd) | 10,542 | `npm install pi-gsd` | Get Shit Done - Unofficial port of the renowned AI-native project-planning spec-driven toolkit |
| 3 | [@juicesharp/rpiv-pi](https://www.npmjs.com/package/@juicesharp/rpiv-pi) | 8,855 | `npm install @juicesharp/rpiv-pi` | A skill-based development workflow for Pi Agent. Five skills (research, design, plan, implement, validate) and the shar… |
| 4 | [@pi-unipi/workflow](https://www.npmjs.com/package/@pi-unipi/workflow) | 2,270 | `npm install @pi-unipi/workflow` | Structured development workflow commands for Pi coding agent |
| 5 | [@tianhai/pi-workflow-kit](https://www.npmjs.com/package/@tianhai/pi-workflow-kit) | 2,144 | `npm install @tianhai/pi-workflow-kit` | Enforce structured brainstorm→plan→execute→finalize workflow with TDD discipline in AI coding agents |
| 6 | [@ifi/pi-spec](https://www.npmjs.com/package/@ifi/pi-spec) | 1,857 | `npm install @ifi/pi-spec` | Native spec-kit workflow for pi with a /spec command, TypeScript scaffolding, and spec-driven prompts. |
| 7 | [@davidorex/pi-workflows](https://www.npmjs.com/package/@davidorex/pi-workflows) | 1,793 | `npm install @davidorex/pi-workflows` | Workflow orchestration extension for Pi |
| 8 | [omni-pi](https://www.npmjs.com/package/omni-pi) | 1,650 | `npm install omni-pi` | Single-agent Pi package that interviews the user, documents the spec, and implements work in bounded slices. |
| 9 | [@davidorex/pi-project-workflows](https://www.npmjs.com/package/@davidorex/pi-project-workflows) | 1,428 | `npm install @davidorex/pi-project-workflows` | Pi extensions for structured project state, workflow orchestration, and behavior monitoring — single install for all th… |
| 10 | [@pi-unipi/kanboard](https://www.npmjs.com/package/@pi-unipi/kanboard) | 941 | `npm install @pi-unipi/kanboard` | Visualization layer for unipi workflow — HTTP server with htmx/Alpine.js UI, modular parsers, TUI overlay, and kanban b… |
| 11 | [gedpi](https://www.npmjs.com/package/gedpi) | 844 | `npm install gedpi` | Single-agent Pi package that clarifies requests, documents the spec, and implements work in bounded slices. |
| 12 | [@artale/pi-skills](https://www.npmjs.com/package/@artale/pi-skills) | 725 | `npm install @artale/pi-skills` | Production-grade engineering skills for Pi |
| 13 | [@apolosan/idea-refinement](https://www.npmjs.com/package/@apolosan/idea-refinement) | 627 | `npm install @apolosan/idea-refinement` | Pi Coding Agent extension that runs a forced iterative idea-refinement workflow via the /idea-refine command. |
| 14 | [pi-obsidian-vault](https://www.npmjs.com/package/pi-obsidian-vault) | 614 | `npm install pi-obsidian-vault` | Agent-safe Obsidian vault access for Pi: auto-detect, retrieve, validate, plan, write, edit, manage, and explicitly des… |
| 15 | [@casualjim/pi-superpowers](https://www.npmjs.com/package/@casualjim/pi-superpowers) | 604 | `npm install @casualjim/pi-superpowers` | Canonical Superpowers workflow skills and runtime guardrails for pi |
| 16 | [@saber7ooth/pi-archon](https://www.npmjs.com/package/@saber7ooth/pi-archon) | 510 | `npm install @saber7ooth/pi-archon` | Archon workflow extension package for Pi coding agent |
| 17 | [visual-explainer](https://www.npmjs.com/package/visual-explainer) | 473 | `npm install visual-explainer` | Agent skill that generates beautiful HTML pages for diagrams, diff reviews, plan reviews, slide decks, and data tables |
| 18 | [pi-ralplan](https://www.npmjs.com/package/pi-ralplan) | 365 | `npm install pi-ralplan` | Consensus-driven planning extension for Pi |
| 19 | [pi-session-router](https://www.npmjs.com/package/pi-session-router) | 352 | `npm install pi-session-router` | Pi extension that uses an LLM to route new prompts into the most relevant existing session before continuing |
| 20 | [@weiping/pi-superpowers](https://www.npmjs.com/package/@weiping/pi-superpowers) | 349 | `npm install @weiping/pi-superpowers` | Superpowers skills library for Pi: TDD, debugging, collaboration workflows with Chinese trigger support |
| 21 | [@rpollard00/pi-materia](https://www.npmjs.com/package/@rpollard00/pi-materia) | 341 | `npm install @rpollard00/pi-materia` | A Pi extension for configurable, materia-themed agent pipelines. |
| 22 | [pi-cutlery](https://www.npmjs.com/package/pi-cutlery) | 300 | `npm install pi-cutlery` | Multi-session workflow toolbox for Pi, centered on session forking |
| 23 | [pi-workflow-agent](https://www.npmjs.com/package/pi-workflow-agent) | 220 | `npm install pi-workflow-agent` | Generic issue, planning, memory, and verification workflow helper for Pi. |
| 24 | [pi-blueprint](https://www.npmjs.com/package/pi-blueprint) | 217 | `npm install pi-blueprint` | A Pi extension that turns high-level objectives into phased, multi-session construction plans with dependency tracking… |
| 25 | [pi-planning-with-files](https://www.npmjs.com/package/pi-planning-with-files) | 205 | `npm install pi-planning-with-files` | Manus-style file-based planning for Pi Coding Agent |
| 26 | [@firstpick/pi-extension-plan-mode-toggle](https://www.npmjs.com/package/@firstpick/pi-extension-plan-mode-toggle) | 191 | `npm install @firstpick/pi-extension-plan-mode-toggle` | Toggleable planning mode extension for Pi with model switching, mandatory planning survey, and PLAN.md quality guards. |
| 27 | [@howaboua/pi-markdown-workflows](https://www.npmjs.com/package/@howaboua/pi-markdown-workflows) | 181 | `npm install @howaboua/pi-markdown-workflows` | Pi extension with workflows tools and embedded subdirectory AGENTS.md context loading |
| 28 | [pi-autopilot-complete](https://www.npmjs.com/package/pi-autopilot-complete) | 130 | `npm install pi-autopilot-complete` | Pi extension that adds a complete tool and autopilot loop so the model keeps working until it explicitly completes |
| 29 | [@kmiyh/pi-plan-mode](https://www.npmjs.com/package/@kmiyh/pi-plan-mode) | 125 | `npm install @kmiyh/pi-plan-mode` | Pi extension that adds a read-only plan mode for safe code analysis, plan extraction, and execution progress tracking. |
| 30 | [@artale/pi-workflow](https://www.npmjs.com/package/@artale/pi-workflow) | 101 | `npm install @artale/pi-workflow` | Simple workflow/task chaining |
| 31 | [pi-feature-dev](https://www.npmjs.com/package/pi-feature-dev) | 79 | `npm install pi-feature-dev` | Portable guided feature development workflow for coding assistants, packaged as a Pi skill. |
| 32 | [@carter-mcalister/pi-rlm](https://www.npmjs.com/package/@carter-mcalister/pi-rlm) | 61 | `npm install @carter-mcalister/pi-rlm` | RLM-first named workflow extension for Pi Coding Agent |
| 33 | [pi-planner](https://www.npmjs.com/package/pi-planner) | 31 | `npm install pi-planner` | Planner workflow extension for Pi (questioning → implementation → summary) |
| 34 | [@tryinget/pi-ontology-workflows](https://www.npmjs.com/package/@tryinget/pi-ontology-workflows) | 25 | `npm install @tryinget/pi-ontology-workflows` | Pi extension package for ontology inspection, routing, and change workflows backed by ROCS. |
| 35 | [@howaboua/pi-todomaster](https://www.npmjs.com/package/@howaboua/pi-todomaster) | 12 | `npm install @howaboua/pi-todomaster` | TodoMaster extension for Pi |
| 36 | [@jecruz/pi-dev-workflow](https://www.npmjs.com/package/@jecruz/pi-dev-workflow) | 0 | `npm install @jecruz/pi-dev-workflow` | Multi-stage development workflow for pi — automated write/test/review/fix/verify cycle with coverage gates and auto-com… |
| 37 | [pi-plan](https://www.npmjs.com/package/pi-plan) | 0 | `npm install pi-plan` | Plan mode for pi — read-only exploration with plan-then-execute workflow |

</details>

<a id="userinteraction"></a>
## 用户交互
> 30 个包 · 总月下载量 54,760

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question) | 11,982 | `npm install @juicesharp/rpiv-ask-user-question` | Pi extension. A structured questionnaire the model can put to you when it would otherwi… |
| 2 | [@juicesharp/rpiv-todo](https://www.npmjs.com/package/@juicesharp/rpiv-todo) | 11,493 | `npm install @juicesharp/rpiv-todo` | Pi extension. A todo list for the model, rendered as a live overlay that survives /relo… |
| 3 | [@juicesharp/rpiv-btw](https://www.npmjs.com/package/@juicesharp/rpiv-btw) | 8,998 | `npm install @juicesharp/rpiv-btw` | Pi extension. The /btw slash command, for putting a one-off side question to the same p… |
| 4 | [pi-ask-user](https://www.npmjs.com/package/pi-ask-user) | 7,740 | `npm install pi-ask-user` | Interactive ask_user tool for pi-coding-agent with searchable split-pane selection UI,… |
| 5 | [pi-interview](https://www.npmjs.com/package/pi-interview) | 3,379 | `npm install pi-interview` | Interactive interview form extension for pi coding agent |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 30 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question) | 11,982 | `npm install @juicesharp/rpiv-ask-user-question` | Pi extension. A structured questionnaire the model can put to you when it would otherwise guess, with typed options ins… |
| 2 | [@juicesharp/rpiv-todo](https://www.npmjs.com/package/@juicesharp/rpiv-todo) | 11,493 | `npm install @juicesharp/rpiv-todo` | Pi extension. A todo list for the model, rendered as a live overlay that survives /reload and conversation compaction. |
| 3 | [@juicesharp/rpiv-btw](https://www.npmjs.com/package/@juicesharp/rpiv-btw) | 8,998 | `npm install @juicesharp/rpiv-btw` | Pi extension. The /btw slash command, for putting a one-off side question to the same primary model without polluting t… |
| 4 | [pi-ask-user](https://www.npmjs.com/package/pi-ask-user) | 7,740 | `npm install pi-ask-user` | Interactive ask_user tool for pi-coding-agent with searchable split-pane selection UI, multi-select, and freeform input |
| 5 | [pi-interview](https://www.npmjs.com/package/pi-interview) | 3,379 | `npm install pi-interview` | Interactive interview form extension for pi coding agent |
| 6 | [pi-quests](https://www.npmjs.com/package/pi-quests) | 1,462 | `npm install pi-quests` | A quest-log for your pi. Keep your agent on track, one quest at a time. |
| 7 | [pi-mono-ask-user-question](https://www.npmjs.com/package/pi-mono-ask-user-question) | 1,407 | `npm install pi-mono-ask-user-question` | Pi extension for asking users structured interactive questions |
| 8 | [@ryan_nookpi/pi-extension-ask-user-question](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-ask-user-question) | 1,271 | `npm install @ryan_nookpi/pi-extension-ask-user-question` | AskUserQuestion tool extension for pi. |
| 9 | [@tintinweb/pi-tasks](https://www.npmjs.com/package/@tintinweb/pi-tasks) | 1,143 | `npm install @tintinweb/pi-tasks` | A pi extension that brings Claude Code-style task tracking and coordination to pi. |
| 10 | [@harlley/todomd](https://www.npmjs.com/package/@harlley/todomd) | 1,029 | `npm install @harlley/todomd` | todo.md — agentic task manager |
| 11 | [pi-mono-btw](https://www.npmjs.com/package/pi-mono-btw) | 1,011 | `npm install pi-mono-btw` | Pi extension that answers side questions while the main agent keeps running |
| 12 | [pi-manage-todo-list](https://www.npmjs.com/package/pi-manage-todo-list) | 667 | `npm install pi-manage-todo-list` | A pi extension that replicates GitHub Copilot's manage_todo_list tool |
| 13 | [@ryan_nookpi/pi-extension-todo-write](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-todo-write) | 653 | `npm install @ryan_nookpi/pi-extension-todo-write` | Todo write tool extension for pi. |
| 14 | [@jeonghyeon.net/pi-tasks](https://www.npmjs.com/package/@jeonghyeon.net/pi-tasks) | 579 | `npm install @jeonghyeon.net/pi-tasks` | A pi extension that brings Claude Code-style task tracking and coordination to pi. |
| 15 | [@ryan_nookpi/pi-extension-todo-write-overlay](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-todo-write-overlay) | 299 | `npm install @ryan_nookpi/pi-extension-todo-write-overlay` | Top-right overlay todo_write tool extension for pi. |
| 16 | [@agnishc/edb-todo](https://www.npmjs.com/package/@agnishc/edb-todo) | 227 | `npm install @agnishc/edb-todo` | Pi extension: structured task list with live widget and system-prompt injection to prevent goal drift |
| 17 | [@shiina18/pi-ask-user-question](https://www.npmjs.com/package/@shiina18/pi-ask-user-question) | 226 | `npm install @shiina18/pi-ask-user-question` | Claude Code-like ask_user_question tool for Pi |
| 18 | [@agnishc/edb-ask-user](https://www.npmjs.com/package/@agnishc/edb-ask-user) | 211 | `npm install @agnishc/edb-ask-user` | Pi extension: ask_user tool for structured questions — text, choice, and multi-step wizard |
| 19 | [@jerryan/pi-task-tree](https://www.npmjs.com/package/@jerryan/pi-task-tree) | 205 | `npm install @jerryan/pi-task-tree` | Nested task list with completed tracking and focus mode for pi |
| 20 | [@firstpick/pi-extension-todo-progress](https://www.npmjs.com/package/@firstpick/pi-extension-todo-progress) | 152 | `npm install @firstpick/pi-extension-todo-progress` | Aggressive automatic todo progress widget for multi-goal prompts in Pi. |
| 21 | [ai-call](https://www.npmjs.com/package/ai-call) | 146 | `npm install ai-call` | AI-driven structured interview skill for coding agents. The agent asks questions one by one, follows up naturally, and… |
| 22 | [@haphazarddev/pi-ask-user-question](https://www.npmjs.com/package/@haphazarddev/pi-ask-user-question) | 93 | `npm install @haphazarddev/pi-ask-user-question` | A pi extension that adds an ask_user_question tool for collecting clarification, confirmation, and input through the UI. |
| 23 | [@mrclrchtr/supi-ask-user](https://www.npmjs.com/package/@mrclrchtr/supi-ask-user) | 88 | `npm install @mrclrchtr/supi-ask-user` | SuPi ask-user extension — rich questionnaire UI for structured agent-user decisions |
| 24 | [@datspike/pi-ask-user](https://www.npmjs.com/package/@datspike/pi-ask-user) | 81 | `npm install @datspike/pi-ask-user` | Interactive ask_user tool for pi-coding-agent with wrapped selection UI, batch clarifications, and freeform input |
| 25 | [@zgltyq/pi-ask-user](https://www.npmjs.com/package/@zgltyq/pi-ask-user) | 65 | `npm install @zgltyq/pi-ask-user` | Interactive ask_user tool for pi-coding-agent with searchable split-pane selection UI, multi-select, and freeform input |
| 26 | [pi-ask-user-question](https://www.npmjs.com/package/pi-ask-user-question) | 47 | `npm install pi-ask-user-question` | Adds an askUserQuestion tool that lets the model pause and ask the user a clarifying question before proceeding. |
| 27 | [@ssweens/pi-huddle](https://www.npmjs.com/package/@ssweens/pi-huddle) | 38 | `npm install @ssweens/pi-huddle` | Huddle mode for pi - safe exploration and structured elicitation before execution |
| 28 | [@patriceckhart/pi-todo](https://www.npmjs.com/package/@patriceckhart/pi-todo) | 37 | `npm install @patriceckhart/pi-todo` | A pi extension for managing todos synced with Apple Reminders |
| 29 | [@artale/pi-todo](https://www.npmjs.com/package/@artale/pi-todo) | 31 | `npm install @artale/pi-todo` | Persistent todo list for Pi. Track tasks across sessions with priorities, tags, and due dates. |
| 30 | [@carter-mcalister/pi-codex-ask-user](https://www.npmjs.com/package/@carter-mcalister/pi-codex-ask-user) | 0 | `npm install @carter-mcalister/pi-codex-ask-user` | Codex-compatible request_user_input tool for Pi |

</details>

<a id="memory"></a>
## 记忆系统
> 71 个包 · 总月下载量 52,277

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@samfp/pi-memory](https://www.npmjs.com/package/@samfp/pi-memory) | 8,013 | `npm install @samfp/pi-memory` | Persistent memory for pi — learns corrections, preferences, and patterns from sessions… |
| 2 | [pi-memctx](https://www.npmjs.com/package/pi-memctx) | 3,883 | `npm install pi-memctx` | Automatic memory context injection for pi coding agent. Load, search, and persist knowl… |
| 3 | [pi-hermes-memory](https://www.npmjs.com/package/pi-hermes-memory) | 3,659 | `npm install pi-hermes-memory` | 🧠 Persistent memory + 🔍 session search + 🛡️ secret scanning for Pi. SQLite FTS5 sear… |
| 4 | [pi-memory-md](https://www.npmjs.com/package/pi-memory-md) | 3,139 | `npm install pi-memory-md` | Letta-like memory management for pi using structured markdown files in a git repository |
| 5 | [pi-total-recall](https://www.npmjs.com/package/pi-total-recall) | 2,264 | `npm install pi-total-recall` | Complete context stack for pi — persistent memory, session history search, and local kn… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 71 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@samfp/pi-memory](https://www.npmjs.com/package/@samfp/pi-memory) | 8,013 | `npm install @samfp/pi-memory` | Persistent memory for pi — learns corrections, preferences, and patterns from sessions and injects them into future con… |
| 2 | [pi-memctx](https://www.npmjs.com/package/pi-memctx) | 3,883 | `npm install pi-memctx` | Automatic memory context injection for pi coding agent. Load, search, and persist knowledge across sessions using Markd… |
| 3 | [pi-hermes-memory](https://www.npmjs.com/package/pi-hermes-memory) | 3,659 | `npm install pi-hermes-memory` | 🧠 Persistent memory + 🔍 session search + 🛡️ secret scanning for Pi. SQLite FTS5 search across every conversation, au… |
| 4 | [pi-memory-md](https://www.npmjs.com/package/pi-memory-md) | 3,139 | `npm install pi-memory-md` | Letta-like memory management for pi using structured markdown files in a git repository |
| 5 | [pi-total-recall](https://www.npmjs.com/package/pi-total-recall) | 2,264 | `npm install pi-total-recall` | Complete context stack for pi — persistent memory, session history search, and local knowledge search in one install. |
| 6 | [pi-observational-memory](https://www.npmjs.com/package/pi-observational-memory) | 1,870 | `npm install pi-observational-memory` | Observational memory extension for pi — cache-friendly tiered compaction with observations and reflections. |
| 7 | [@pi-unipi/memory](https://www.npmjs.com/package/@pi-unipi/memory) | 1,776 | `npm install @pi-unipi/memory` | Persistent cross-session memory with vector search for Pi coding agent |
| 8 | [pi-continuous-learning](https://www.npmjs.com/package/pi-continuous-learning) | 1,706 | `npm install pi-continuous-learning` | A Pi extension that observes coding sessions and distills patterns into reusable instincts. |
| 9 | [@walodayeet/hindsight-pi](https://www.npmjs.com/package/@walodayeet/hindsight-pi) | 1,537 | `npm install @walodayeet/hindsight-pi` | Hindsight-backed persistent memory extension for pi |
| 10 | [pi-agent-memory](https://www.npmjs.com/package/pi-agent-memory) | 1,492 | `npm install pi-agent-memory` | Persistent memory for pi-agents, powered by claude-mem (55k+ stars). Cross-session, cross-engine memory with hybrid sea… |
| 11 | [@sinamtz/pi-mempalace](https://www.npmjs.com/package/@sinamtz/pi-mempalace) | 1,486 | `npm install @sinamtz/pi-mempalace` | hasslefree and self-contained mempalace port for pi-coding-agent with SurrealDB-backed vector search, layered retrieval… |
| 12 | [pi-hindsight](https://www.npmjs.com/package/pi-hindsight) | 1,482 | `npm install pi-hindsight` | Hindsight self-hosted memory extension for Pi |
| 13 | [@touchskyer/memex](https://www.npmjs.com/package/@touchskyer/memex) | 1,449 | `npm install @touchskyer/memex` | Zettelkasten-based agent memory system with bidirectional links |
| 14 | [@the-forge-flow/hippo-memory-pi](https://www.npmjs.com/package/@the-forge-flow/hippo-memory-pi) | 1,288 | `npm install @the-forge-flow/hippo-memory-pi` | PI extension for biologically-inspired long-term memory, powered by hippo-memory |
| 15 | [pi-memory](https://www.npmjs.com/package/pi-memory) | 1,211 | `npm install pi-memory` | Pi coding agent extension for memory with qmd-powered semantic search across daily logs, long-term memory, and scratchp… |
| 16 | [mempalace-pi](https://www.npmjs.com/package/mempalace-pi) | 1,145 | `npm install mempalace-pi` | MemPalace extension package for pi, adding commands, tools, and save reminders for memory workflows. |
| 17 | [graphify-pi](https://www.npmjs.com/package/graphify-pi) | 1,024 | `npm install graphify-pi` | Pi extension and skill package that makes graphify knowledge graphs always-on during coding sessions. |
| 18 | [pi-gitnexus](https://www.npmjs.com/package/pi-gitnexus) | 991 | `npm install pi-gitnexus` | GitNexus knowledge graph integration for pi — enriches searches with call chains, execution flows, and blast radius |
| 19 | [@the-forge-flow/gitnexus-pi](https://www.npmjs.com/package/@the-forge-flow/gitnexus-pi) | 974 | `npm install @the-forge-flow/gitnexus-pi` | PI extension for native GitNexus code-intelligence integration |
| 20 | [pi-simple-memory](https://www.npmjs.com/package/pi-simple-memory) | 904 | `npm install pi-simple-memory` | Simple persistent file-based memory for pi agents. |
| 21 | [@0xkobold/pi-learn](https://www.npmjs.com/package/@0xkobold/pi-learn) | 838 | `npm install @0xkobold/pi-learn` | Open-source memory infrastructure for pi agents - inspired by Honcho. Provides peer representations, reasoning, and con… |
| 22 | [@zhafron/pi-memory](https://www.npmjs.com/package/@zhafron/pi-memory) | 824 | `npm install @zhafron/pi-memory` | Memory management extension for pi coding agent |
| 23 | [@ramarivera/pi-supermemory](https://www.npmjs.com/package/@ramarivera/pi-supermemory) | 804 | `npm install @ramarivera/pi-supermemory` | Pi coding-agent extension that recalls and captures session memory through Supermemory. |
| 24 | [@lehoangvu/pi-memory-extension](https://www.npmjs.com/package/@lehoangvu/pi-memory-extension) | 657 | `npm install @lehoangvu/pi-memory-extension` | Graphiti-lite memory extension package for Pi CLI. |
| 25 | [@p8n.ai/pi-remembers](https://www.npmjs.com/package/@p8n.ai/pi-remembers) | 654 | `npm install @p8n.ai/pi-remembers` | Pi extension for persistent agent memory and project search powered by Cloudflare AI Search. The North Remembers. |
| 26 | [pi-engram](https://www.npmjs.com/package/pi-engram) | 560 | `npm install pi-engram` | Standalone shareable Engram extension package for pi-coding-agent |
| 27 | [tau-coding-agent](https://www.npmjs.com/package/tau-coding-agent) | 544 | `npm install tau-coding-agent` | Opinionated Pi package with web search, review workflows, sandboxing, memory, usage reporting, skills, and a theme |
| 28 | [tau-all-agent](https://www.npmjs.com/package/tau-all-agent) | 512 | `npm install tau-all-agent` | Full Tau package for Pi with coding workflows, web search, sandboxing, memory, Telegram, Home Assistant, OpenSCAD, skil… |
| 29 | [pi-memory-honcho](https://www.npmjs.com/package/pi-memory-honcho) | 478 | `npm install pi-memory-honcho` | Honcho-backed persistent memory extension for PI coding agent. |
| 30 | [pi-byterover](https://www.npmjs.com/package/pi-byterover) | 459 | `npm install pi-byterover` | Pi ByteRover extension |
| 31 | [@firstpick/pi-extension-memory-helper](https://www.npmjs.com/package/@firstpick/pi-extension-memory-helper) | 454 | `npm install @firstpick/pi-extension-memory-helper` | Memory helper commands and remember_note tool for Pi. |
| 32 | [@narumitw/pi-skillforge](https://www.npmjs.com/package/@narumitw/pi-skillforge) | 433 | `npm install @narumitw/pi-skillforge` | Pi package for improving agent skills through verified project memory. |
| 33 | [@luxusai/pi-hindsight](https://www.npmjs.com/package/@luxusai/pi-hindsight) | 335 | `npm install @luxusai/pi-hindsight` | Pi extension for durable Hindsight-backed long-term memory. |
| 34 | [@usememra/pi-extension](https://www.npmjs.com/package/@usememra/pi-extension) | 331 | `npm install @usememra/pi-extension` | Persistent memory for pi coding agent. Hybrid cloud + local backend (Memra). |
| 35 | [pi-subagent-in-memory](https://www.npmjs.com/package/pi-subagent-in-memory) | 322 | `npm install pi-subagent-in-memory` | In-process subagent tool for pi with live TUI card widgets, JSONL session logging, and zero system-prompt overhead. |
| 36 | [pi-brain](https://www.npmjs.com/package/pi-brain) | 295 | `npm install pi-brain` | Versioned memory extension for the pi coding agent |
| 37 | [@the-forge-flow/memory-graph](https://www.npmjs.com/package/@the-forge-flow/memory-graph) | 223 | `npm install @the-forge-flow/memory-graph` | Structured knowledge wiki: Claude Code plugin AND pi-coding-agent extension from one repo. LLM-maintained interlinked m… |
| 38 | [pi-lcm-memory](https://www.npmjs.com/package/pi-lcm-memory) | 218 | `npm install pi-lcm-memory` | Persistent cross-session semantic memory for Pi — a hybrid (FTS5 + vector) recall layer on top of pi-lcm. |
| 39 | [@artale/pi-memory](https://www.npmjs.com/package/@artale/pi-memory) | 212 | `npm install @artale/pi-memory` | Persistent memory for Pi sessions |
| 40 | [@odradekk/vera-memory](https://www.npmjs.com/package/@odradekk/vera-memory) | 210 | `npm install @odradekk/vera-memory` | Structured memory system for Vera agent (SQLite + vector search) |
| 41 | [pi-memd](https://www.npmjs.com/package/pi-memd) | 192 | `npm install pi-memd` | Project-level session memory for the pi coding agent — a single MEMD.md file per project |
| 42 | [@rhobot-dev/rho](https://www.npmjs.com/package/@rhobot-dev/rho) | 149 | `npm install @rhobot-dev/rho` | AI agent with persistent memory, heartbeat check-ins, and a knowledge vault |
| 43 | [pi-compound](https://www.npmjs.com/package/pi-compound) | 141 | `npm install pi-compound` | Turn your past Pi sessions into system-prompt context docs. A two-stage LLM pipeline extracts durable preferences from… |
| 44 | [@i-language/mem-forever](https://www.npmjs.com/package/@i-language/mem-forever) | 137 | `npm install @i-language/mem-forever` | Every AI tool forgets you. This one doesn't. Ever. Persistent memory across sessions and tools. Auto-generates profile,… |
| 45 | [@ryan_nookpi/pi-extension-memory-layer](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-memory-layer) | 137 | `npm install @ryan_nookpi/pi-extension-memory-layer` | Long-term memory layer for pi — remember, recall, forget, and browse memories across sessions. |
| 46 | [@agney/pi-honcho-memory](https://www.npmjs.com/package/@agney/pi-honcho-memory) | 127 | `npm install @agney/pi-honcho-memory` | Honcho persistent memory extension for pi coding agent |
| 47 | [@artale/pi-agentic](https://www.npmjs.com/package/@artale/pi-agentic) | 87 | `npm install @artale/pi-agentic` | Portable agent patterns from agentic-stack: memory, skills, protocols |
| 48 | [@artale/pi-hermes](https://www.npmjs.com/package/@artale/pi-hermes) | 83 | `npm install @artale/pi-hermes` | Self-improving agent for Pi with memory and skills |
| 49 | [@artale/pi-monitor](https://www.npmjs.com/package/@artale/pi-monitor) | 78 | `npm install @artale/pi-monitor` | Real-time system resource monitoring for Pi |
| 50 | [pi-extension-observational-memory](https://www.npmjs.com/package/pi-extension-observational-memory) | 54 | `npm install pi-extension-observational-memory` | Observational-memory compaction strategy for pi with observer/reflector token thresholds |
| 51 | [@askjo/pi-mem](https://www.npmjs.com/package/@askjo/pi-mem) | 53 | `npm install @askjo/pi-mem` | Pi coding agent extension for plain-Markdown memory system — long-term memory, daily logs, and scratchpad checklist |
| 52 | [@e9n/pi-memory](https://www.npmjs.com/package/@e9n/pi-memory) | 37 | `npm install @e9n/pi-memory` | Persistent memory system for pi — long-term facts, daily logs, and search |
| 53 | [pi-breaker](https://www.npmjs.com/package/pi-breaker) | 33 | `npm install pi-breaker` | Prevents macOS freezes during pi sessions. Auto-kills runaway processes when memory runs out. |
| 54 | [@clankie/memory](https://www.npmjs.com/package/@clankie/memory) | 33 | `npm install @clankie/memory` | Persistent memory with TursoDB native vector search for clankie |
| 55 | [@artale/pi-sysmon](https://www.npmjs.com/package/@artale/pi-sysmon) | 32 | `npm install @artale/pi-sysmon` | System monitor & resource manager. RAM/disk dashboard, process audit, memory hog detection, one-click cleanup. Carmack-… |
| 56 | [pi-mnemosyne](https://www.npmjs.com/package/pi-mnemosyne) | 30 | `npm install pi-mnemosyne` | Pi extension for local persistent memory using Mnemosyne — offline semantic search, no cloud required |
| 57 | [pi-episodic-memory](https://www.npmjs.com/package/pi-episodic-memory) | 29 | `npm install pi-episodic-memory` | Episodic memory for pi – semantic search over past sessions |
| 58 | [@gordonb/pi-memory-blocks](https://www.npmjs.com/package/@gordonb/pi-memory-blocks) | 28 | `npm install @gordonb/pi-memory-blocks` | Letta-style persistent memory blocks for Pi coding agents |
| 59 | [@samfp/pi-lesson-extractor](https://www.npmjs.com/package/@samfp/pi-lesson-extractor) | 28 | `npm install @samfp/pi-lesson-extractor` | Pi extension that extracts reusable problem-solving patterns from session transcripts — retry loops, error→fix pairs, u… |
| 60 | [@artale/pi-knowledge](https://www.npmjs.com/package/@artale/pi-knowledge) | 22 | `npm install @artale/pi-knowledge` | Local knowledge graph. User-owned entity/relationship store with search and export. Zero cloud, JSON-backed. |
| 61 | [@marcfargas/brainiac](https://www.npmjs.com/package/@marcfargas/brainiac) | 22 | `npm install @marcfargas/brainiac` | Persistent, searchable agent knowledge store for pi — learn, connect, recall |
| 62 | [pi-context-repo](https://www.npmjs.com/package/pi-context-repo) | 20 | `npm install pi-context-repo` | Git-backed persistent memory filesystem for pi agents, inspired by Letta Code's Context Repositories |
| 63 | [@momomemory/pi-momo](https://www.npmjs.com/package/@momomemory/pi-momo) | 20 | `npm install @momomemory/pi-momo` | Pi plugin that gives agents persistent memory using Momo |
| 64 | [@edmundmiller/pi-context-repo](https://www.npmjs.com/package/@edmundmiller/pi-context-repo) | 17 | `npm install @edmundmiller/pi-context-repo` | Git-backed persistent memory filesystem for pi agents, inspired by Letta Code's Context Repositories |
| 65 | [@harigovindarajan/pi-memory-adapter](https://www.npmjs.com/package/@harigovindarajan/pi-memory-adapter) | 16 | `npm install @harigovindarajan/pi-memory-adapter` | Local-first memory subsystem for Pi |
| 66 | [@gordonb/pi-archive](https://www.npmjs.com/package/@gordonb/pi-archive) | 16 | `npm install @gordonb/pi-archive` | SQLite searchable archive of every conversation with Pi agent |
| 67 | [@pi-unipi/cocoindex](https://www.npmjs.com/package/@pi-unipi/cocoindex) | 0 | `npm install @pi-unipi/cocoindex` | CocoIndex integration for Pi — AST-aware content indexing, semantic vector search, and incremental pipeline management |
| 68 | [@pukljak/pi-memory](https://www.npmjs.com/package/@pukljak/pi-memory) | 0 | `npm install @pukljak/pi-memory` | Persistent memory and observation timeline extension for Pi coding agent |
| 69 | [@reqall/pi-plugin](https://www.npmjs.com/package/@reqall/pi-plugin) | 0 | `npm install @reqall/pi-plugin` | Reqall plugin for Pi — persistent semantic memory for AI agents |
| 70 | [@tanyouqing/pi-openviking](https://www.npmjs.com/package/@tanyouqing/pi-openviking) | 0 | `npm install @tanyouqing/pi-openviking` | OpenViking memory and indexed repository extension for pi-coding-agent |
| 71 | [pi-memoir](https://www.npmjs.com/package/pi-memoir) | 0 | `npm install pi-memoir` | Persistent project memory for pi — the LLM queries the memoire instead of reading all files, saving ~95%+ tokens. |

</details>

<a id="skill"></a>
## 技能包
> 113 个包 · 总月下载量 52,008

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@juicesharp/rpiv-args](https://www.npmjs.com/package/@juicesharp/rpiv-args) | 7,370 | `npm install @juicesharp/rpiv-args` | Pi extension. Shell-style $1 and $ARGUMENTS placeholders, expanded into your Pi skills… |
| 2 | [@heart-of-gold/toolkit](https://www.npmjs.com/package/@heart-of-gold/toolkit) | 6,099 | `npm install @heart-of-gold/toolkit` | Cross-platform installer for Heart of Gold skills — works with Codex, OpenCode, Pi, Cla… |
| 3 | [pi-docparser](https://www.npmjs.com/package/pi-docparser) | 5,343 | `npm install pi-docparser` | Pi package that adds a document_parse tool and companion skill for parsing PDFs, Office… |
| 4 | [@aretw0/git-skills](https://www.npmjs.com/package/@aretw0/git-skills) | 2,425 | `npm install @aretw0/git-skills` | First-party git skills: github (gh), gitlab (glab), workflow and commit conventions |
| 5 | [@aretw0/pi-skills](https://www.npmjs.com/package/@aretw0/pi-skills) | 2,208 | `npm install @aretw0/pi-skills` | Skills para criar, configurar e operar o ecossistema pi — extensões, skills, temas, ter… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 113 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@juicesharp/rpiv-args](https://www.npmjs.com/package/@juicesharp/rpiv-args) | 7,370 | `npm install @juicesharp/rpiv-args` | Pi extension. Shell-style $1 and $ARGUMENTS placeholders, expanded into your Pi skills at invocation. |
| 2 | [@heart-of-gold/toolkit](https://www.npmjs.com/package/@heart-of-gold/toolkit) | 6,099 | `npm install @heart-of-gold/toolkit` | Cross-platform installer for Heart of Gold skills — works with Codex, OpenCode, Pi, Claude Code, and more |
| 3 | [pi-docparser](https://www.npmjs.com/package/pi-docparser) | 5,343 | `npm install pi-docparser` | Pi package that adds a document_parse tool and companion skill for parsing PDFs, Office documents, spreadsheets, and im… |
| 4 | [@aretw0/git-skills](https://www.npmjs.com/package/@aretw0/git-skills) | 2,425 | `npm install @aretw0/git-skills` | First-party git skills: github (gh), gitlab (glab), workflow and commit conventions |
| 5 | [@aretw0/pi-skills](https://www.npmjs.com/package/@aretw0/pi-skills) | 2,208 | `npm install @aretw0/pi-skills` | Skills para criar, configurar e operar o ecossistema pi — extensões, skills, temas, terminal setup e onboarding |
| 6 | [@aretw0/lab-skills](https://www.npmjs.com/package/@aretw0/lab-skills) | 2,206 | `npm install @aretw0/lab-skills` | Skills experimentais do agents-lab — cultivo de primitivas, avaliação de extensões e feedback de stack |
| 7 | [@ifi/oh-pi-skills](https://www.npmjs.com/package/@ifi/oh-pi-skills) | 2,159 | `npm install @ifi/oh-pi-skills` | On-demand skill packs for pi: web-search, debug-helper, git-workflow, and more. |
| 8 | [@spences10/pi-skills](https://www.npmjs.com/package/@spences10/pi-skills) | 1,824 | `npm install @spences10/pi-skills` | Pi extension for managing and importing Agent Skills from Pi, Claude, and plugin sources |
| 9 | [@kmiyh/pi-skills-menu](https://www.npmjs.com/package/@kmiyh/pi-skills-menu) | 1,189 | `npm install @kmiyh/pi-skills-menu` | Pi extension that moves skills into a dedicated /skills menu with browsing, preview, editing, and AI-assisted creation. |
| 10 | [@aholbreich/agent-skills](https://www.npmjs.com/package/@aholbreich/agent-skills) | 1,021 | `npm install @aholbreich/agent-skills` | Handcrafted Agent Skills for browser-authenticated Jira and Confluence ingestion, LLM wiki workflows, and developer aut… |
| 11 | [mitsupi](https://www.npmjs.com/package/mitsupi) | 978 | `npm install mitsupi` | Armin's pi coding agent commands, skills, extensions, and themes |
| 12 | [pi-playwright](https://www.npmjs.com/package/pi-playwright) | 954 | `npm install pi-playwright` | Playwright browser automation skill package for pi |
| 13 | [@the-forge-flow/lumen](https://www.npmjs.com/package/@the-forge-flow/lumen) | 889 | `npm install @the-forge-flow/lumen` | Illuminate code: skills for diagrams, charts, mermaid, slides, galleries, guides, project recaps, and fact-checks. Work… |
| 14 | [@m64/pi-screenshot-tools](https://www.npmjs.com/package/@m64/pi-screenshot-tools) | 829 | `npm install @m64/pi-screenshot-tools` | Screenshot skill and inline screenshot extension for pi |
| 15 | [@ramarivera/pi-skill-selector](https://www.npmjs.com/package/@ramarivera/pi-skill-selector) | 783 | `npm install @ramarivera/pi-skill-selector` | Pi extension that lets you type $ to fuzzy-pick skills and insert /skill:name into the prompt. |
| 16 | [pi-extension-installer](https://www.npmjs.com/package/pi-extension-installer) | 724 | `npm install pi-extension-installer` | Browse and install Pi community packages — interactive TUI browser with arrow-key navigation, search, previews, install… |
| 17 | [@richardgill/pi-sub-pi-skill](https://www.npmjs.com/package/@richardgill/pi-sub-pi-skill) | 657 | `npm install @richardgill/pi-sub-pi-skill` | Route `/skill:` commands and skill file reads to the `sub-pi` tool when the skill frontmatter opts in. |
| 18 | [pi-psql](https://www.npmjs.com/package/pi-psql) | 615 | `npm install pi-psql` | Secure PostgreSQL client skill for pi - query databases with encrypted credentials |
| 19 | [@zosmaai/pi-llm-wiki](https://www.npmjs.com/package/@zosmaai/pi-llm-wiki) | 608 | `npm install @zosmaai/pi-llm-wiki` | LLM Wiki for Pi — self-maintaining knowledge base following Karpathy's pattern. Obsidian-friendly, auto-updating, perso… |
| 20 | [pi-load-skill](https://www.npmjs.com/package/pi-load-skill) | 591 | `npm install pi-load-skill` | Pi extension for loading skills on demand from any location |
| 21 | [pi-claude-plugins](https://www.npmjs.com/package/pi-claude-plugins) | 571 | `npm install pi-claude-plugins` | Pi extension that exposes Claude marketplace plugin skills from ~/.claude/plugins/marketplaces into the current pi sess… |
| 22 | [@counterposition/skill-pi](https://www.npmjs.com/package/@counterposition/skill-pi) | 509 | `npm install @counterposition/skill-pi` | Pi coding agent reference skill — extensions, settings, providers, SDK/RPC, packages, and .pi/ config |
| 23 | [pi-skillful](https://www.npmjs.com/package/pi-skillful) | 502 | `npm install pi-skillful` | Pi package with skill invocation and visibility improvements. |
| 24 | [@alexgorbatchev/pi-skill-library](https://www.npmjs.com/package/@alexgorbatchev/pi-skill-library) | 494 | `npm install @alexgorbatchev/pi-skill-library` | Pi extension that exposes skills-library roots through /library:<skill-name> commands. |
| 25 | [pi-gstack](https://www.npmjs.com/package/pi-gstack) | 446 | `npm install pi-gstack` | Pi package that adapts Garry Tan's gstack skills and workflows for Pi. |
| 26 | [@zhangweiii/skills](https://www.npmjs.com/package/@zhangweiii/skills) | 433 | `npm install @zhangweiii/skills` | Personal agent skills collection for pi, Claude Code, Codex, Cursor, etc. |
| 27 | [drata-cli](https://www.npmjs.com/package/drata-cli) | 408 | `npm install drata-cli` | Unofficial command-line client for Drata's public API. |
| 28 | [@vanillagreen/pi-skills-manager](https://www.npmjs.com/package/@vanillagreen/pi-skills-manager) | 407 | `npm install @vanillagreen/pi-skills-manager` | Polished Pi skills manager with a dedicated /skill menu for browsing, previewing, inserting, creating, editing, renamin… |
| 29 | [pi-conventions](https://www.npmjs.com/package/pi-conventions) | 394 | `npm install pi-conventions` | Pi package for enforcing codebase conventions through structure and naming policies. |
| 30 | [agent-xlsx](https://www.npmjs.com/package/agent-xlsx) | 388 | `npm install agent-xlsx` | Agent-friendly CLI for reading and editing xlsx files (skill package) |
| 31 | [pi-skills-sync](https://www.npmjs.com/package/pi-skills-sync) | 384 | `npm install pi-skills-sync` | Manage pi skills via GitHub Gists |
| 32 | [pi-skillrefs](https://www.npmjs.com/package/pi-skillrefs) | 379 | `npm install pi-skillrefs` | Pi extension package that autocompletes $skill refs and injects referenced skill bodies as visible environment context. |
| 33 | [@a-canary/pi-upskill](https://www.npmjs.com/package/@a-canary/pi-upskill) | 358 | `npm install @a-canary/pi-upskill` | Learn from failures, reduce token waste, improve automatically |
| 34 | [sutras](https://www.npmjs.com/package/sutras) | 324 | `npm install sutras` | Skill development toolkit for pi — /sutras commands + agent skill |
| 35 | [pi-mono-figma](https://www.npmjs.com/package/pi-mono-figma) | 308 | `npm install pi-mono-figma` | Pi extension and skill for Figma design context tools |
| 36 | [pi-skill-palette](https://www.npmjs.com/package/pi-skill-palette) | 282 | `npm install pi-skill-palette` | VS Code-style command palette for selecting and applying skills in pi |
| 37 | [ultimate-pi](https://www.npmjs.com/package/ultimate-pi) | 262 | `npm install ultimate-pi` | Ultimate AI coding harness for pi.dev — extensible skills, Obsidian wiki knowledge layer, compressed context, determini… |
| 38 | [pi-skill-hub](https://www.npmjs.com/package/pi-skill-hub) | 261 | `npm install pi-skill-hub` | Safe provenance-aware Pi skill discovery, inventory, preview, and management hub. |
| 39 | [@tmustier/pi-skill-creator](https://www.npmjs.com/package/@tmustier/pi-skill-creator) | 254 | `npm install @tmustier/pi-skill-creator` | Detailed guidance for creating Pi skills (Agent Skills format). |
| 40 | [pi-mention-skills](https://www.npmjs.com/package/pi-mention-skills) | 251 | `npm install pi-mention-skills` | Skill mention autocomplete and expansion extension for pi |
| 41 | [@blackbelt-technology/pi-dashboard-plugin-skill](https://www.npmjs.com/package/@blackbelt-technology/pi-dashboard-plugin-skill) | 229 | `npm install @blackbelt-technology/pi-dashboard-plugin-skill` | Pi skill that scaffolds new dashboard plugins or augments existing pi-extension projects with dashboard plugin contribu… |
| 42 | [pi-shit](https://www.npmjs.com/package/pi-shit) | 218 | `npm install pi-shit` | Personal Pi package bundling extensions, skills, and Rose Pine themes |
| 43 | [pi-mono-linear](https://www.npmjs.com/package/pi-mono-linear) | 209 | `npm install pi-mono-linear` | Pi extension and skill for Linear GraphQL tools |
| 44 | [pi-smart-sessions](https://www.npmjs.com/package/pi-smart-sessions) | 207 | `npm install pi-smart-sessions` | Auto-names Pi sessions with AI-generated summaries — no more cryptic skill tags in your session list |
| 45 | [pi-fetch-markdown](https://www.npmjs.com/package/pi-fetch-markdown) | 203 | `npm install pi-fetch-markdown` | Pi skill: fetch any web page as clean markdown via Cloudflare content negotiation or Jina Reader |
| 46 | [saasufy-agent-skills](https://www.npmjs.com/package/saasufy-agent-skills) | 198 | `npm install saasufy-agent-skills` | Saasufy skills for AI |
| 47 | [@unseated7635/pi-roxy-seo](https://www.npmjs.com/package/@unseated7635/pi-roxy-seo) | 192 | `npm install @unseated7635/pi-roxy-seo` | Roxy SEO extension for pi-coding-agent with an installable SEO, AEO, and GEO skill companion. |
| 48 | [shitty-extensions](https://www.npmjs.com/package/shitty-extensions) | 192 | `npm install shitty-extensions` | Custom extensions and skills for pi coding agent |
| 49 | [pi-skill-toggle](https://www.npmjs.com/package/pi-skill-toggle) | 186 | `npm install pi-skill-toggle` | Enable/disable skills from loading into pi context at startup |
| 50 | [pi-skill-evolution](https://www.npmjs.com/package/pi-skill-evolution) | 157 | `npm install pi-skill-evolution` | Meta-skill and self-improvement loop for pi — mines session history for repeated workflows, proposes new skills, and tr… |
| 51 | [pi-drawio](https://www.npmjs.com/package/pi-drawio) | 138 | `npm install pi-drawio` | Pi skill for generating native draw.io diagrams and exports |
| 52 | [pi-typst-skill](https://www.npmjs.com/package/pi-typst-skill) | 135 | `npm install pi-typst-skill` | Pi Coding Agent skill that makes Typst the preferred format for document artifacts. |
| 53 | [pi-explorer](https://www.npmjs.com/package/pi-explorer) | 130 | `npm install pi-explorer` | Pi skill + command for deep codebase exploration and HTML architecture reports. |
| 54 | [pi-skill-guard](https://www.npmjs.com/package/pi-skill-guard) | 120 | `npm install pi-skill-guard` | Pi extension for protecting against incorrect skill-in-tool-call behavior |
| 55 | [pi-skills-manager](https://www.npmjs.com/package/pi-skills-manager) | 112 | `npm install pi-skills-manager` | Interactive skill manager for Pi — enable/disable skills with a pi-config-style UI |
| 56 | [pi-skills-sh](https://www.npmjs.com/package/pi-skills-sh) | 107 | `npm install pi-skills-sh` | Browse, install & manage skills.sh skills from inside pi |
| 57 | [@normful/picadillo](https://www.npmjs.com/package/@normful/picadillo) | 96 | `npm install @normful/picadillo` | pi agent skills & extensions: run-in-tmux, parrot, mulch, overstory |
| 58 | [std-c99-proj-skill](https://www.npmjs.com/package/std-c99-proj-skill) | 94 | `npm install std-c99-proj-skill` | Pi skill for pure ANSI C99 projects with memory arena, containerized builds, Valgrind, and static analysis. |
| 59 | [@mrclrchtr/supi-skill-shortcut](https://www.npmjs.com/package/@mrclrchtr/supi-skill-shortcut) | 91 | `npm install @mrclrchtr/supi-skill-shortcut` | SuPi skill-shortcut extension — type $skill-name as shorthand for /skill:skill-name |
| 60 | [pi-auto-agents](https://www.npmjs.com/package/pi-auto-agents) | 89 | `npm install pi-auto-agents` | Pi skill that automatically routes complex coding/development tasks to the sub-agents for multi-agent execution with te… |
| 61 | [pi-skill-smart-read](https://www.npmjs.com/package/pi-skill-smart-read) | 88 | `npm install pi-skill-smart-read` | Skill-aware reading for pi: index large SKILL.md files and load sections on demand. |
| 62 | [pi-chrome-cdp](https://www.npmjs.com/package/pi-chrome-cdp) | 88 | `npm install pi-chrome-cdp` | Give your AI agent access to your live Chrome session — works out of the box, connects to tabs you already have open |
| 63 | [@vaayne/agent-kit](https://www.npmjs.com/package/@vaayne/agent-kit) | 87 | `npm install @vaayne/agent-kit` | Reusable skills and extensions for Pi coding agent |
| 64 | [@robhowley/py-pit-skills](https://www.npmjs.com/package/@robhowley/py-pit-skills) | 80 | `npm install @robhowley/py-pit-skills` | Opinionated Python API development skills for AI coding agents (Pi, Claude Code). |
| 65 | [@alpino13/pi-ask](https://www.npmjs.com/package/@alpino13/pi-ask) | 77 | `npm install @alpino13/pi-ask` | Pi package for interactive multi-question clarification flows, with a model-callable ask_questions tool and tabbed ques… |
| 66 | [@carter-mcalister/pi-skillpacks](https://www.npmjs.com/package/@carter-mcalister/pi-skillpacks) | 74 | `npm install @carter-mcalister/pi-skillpacks` | Session-scoped skill pack loader for Pi |
| 67 | [pi-package-test](https://www.npmjs.com/package/pi-package-test) | 72 | `npm install pi-package-test` | Test package for pi coding agent with extensions, skills, themes, and prompts |
| 68 | [@ferologics/pi-skills](https://www.npmjs.com/package/@ferologics/pi-skills) | 72 | `npm install @ferologics/pi-skills` | Custom skills for Pi coding agent |
| 69 | [@amb007/deep-wiki](https://www.npmjs.com/package/@amb007/deep-wiki) | 68 | `npm install @amb007/deep-wiki` | AI-powered wiki generator for code repositories - Pi Coding Agent skill |
| 70 | [@daviriansu/agent-arena-skill](https://www.npmjs.com/package/@daviriansu/agent-arena-skill) | 67 | `npm install @daviriansu/agent-arena-skill` | Agent Skill for Agent Arena — teaches AI agents how to join the decentralized task marketplace on X-Layer |
| 71 | [@ruliana/pi-insights](https://www.npmjs.com/package/@ruliana/pi-insights) | 66 | `npm install @ruliana/pi-insights` | Pi skill: analyze session history and generate an interactive HTML report with usage patterns and suggestions |
| 72 | [pi-skill-glab](https://www.npmjs.com/package/pi-skill-glab) | 65 | `npm install pi-skill-glab` | Pi skill for interacting with GitLab via the glab CLI |
| 73 | [@marcfargas/odoo-skills](https://www.npmjs.com/package/@marcfargas/odoo-skills) | 65 | `npm install @marcfargas/odoo-skills` | Battle-tested Odoo knowledge modules for AI agents — 5,200+ lines validated against Odoo v17 in CI |
| 74 | [toenobu-agent](https://www.npmjs.com/package/toenobu-agent) | 63 | `npm install toenobu-agent` | toenobu's pi coding agent skills and extensions |
| 75 | [@javimolina/pi-palette](https://www.npmjs.com/package/@javimolina/pi-palette) | 62 | `npm install @javimolina/pi-palette` | Pi package that adds a searchable slash-command palette for commands, prompts, and skills |
| 76 | [pi-skill-martin-fowler](https://www.npmjs.com/package/pi-skill-martin-fowler) | 58 | `npm install pi-skill-martin-fowler` | Pi skill that thinks and advises like Martin Fowler — software design, architecture, refactoring, agile, testing, and d… |
| 77 | [pi-search-skill](https://www.npmjs.com/package/pi-search-skill) | 55 | `npm install pi-search-skill` | DuckDuckGo search skill for pi - lightweight and fast |
| 78 | [@alchemiststudios/pi-harness-skills](https://www.npmjs.com/package/@alchemiststudios/pi-harness-skills) | 52 | `npm install @alchemiststudios/pi-harness-skills` | Harness engineering skills package for pi |
| 79 | [@ifiokjr/oh-pi-skills](https://www.npmjs.com/package/@ifiokjr/oh-pi-skills) | 50 | `npm install @ifiokjr/oh-pi-skills` | On-demand skill packs for pi: web-search, debug-helper, git-workflow, and more. |
| 80 | [@benvargas/pi-ancestor-discovery](https://www.npmjs.com/package/@benvargas/pi-ancestor-discovery) | 45 | `npm install @benvargas/pi-ancestor-discovery` | Recursive ancestor discovery for pi resources (skills, prompts, themes) |
| 81 | [@joemccann/pi-pdf](https://www.npmjs.com/package/@joemccann/pi-pdf) | 43 | `npm install @joemccann/pi-pdf` | PDF manipulation, processing, and management toolkit for Pi coding agent — extract text/tables, merge/split, fill forms… |
| 82 | [@0xkobold/pi-skills](https://www.npmjs.com/package/@0xkobold/pi-skills) | 40 | `npm install @0xkobold/pi-skills` | Dynamic Skill Creator Extension for pi agent |
| 83 | [dnopi](https://www.npmjs.com/package/dnopi) | 39 | `npm install dnopi` | Skills and extensions for pi-coding-agent |
| 84 | [@andamio/coach](https://www.npmjs.com/package/@andamio/coach) | 38 | `npm install @andamio/coach` | Build learning pathways for individuals, teams, and ecosystems |
| 85 | [pjlee-pi-package](https://www.npmjs.com/package/pjlee-pi-package) | 38 | `npm install pjlee-pi-package` | Peter's pi coding agent commands, skills, extensions, and themes |
| 86 | [pi-powerpoint](https://www.npmjs.com/package/pi-powerpoint) | 35 | `npm install pi-powerpoint` | Pi skill for creating and editing PowerPoint files via CLI, wrapping office-powerpoint-mcp-server |
| 87 | [@dpaluy/shaping-skills](https://www.npmjs.com/package/@dpaluy/shaping-skills) | 34 | `npm install @dpaluy/shaping-skills` | Cross-tool shaping, breadboarding, and transcript-to-document skills. |
| 88 | [@vpellegrino/pi-skills](https://www.npmjs.com/package/@vpellegrino/pi-skills) | 33 | `npm install @vpellegrino/pi-skills` | Vitor's collection of pi coding agent skills, extensions, and themes |
| 89 | [@jay-zod/speakturbo](https://www.npmjs.com/package/@jay-zod/speakturbo) | 31 | `npm install @jay-zod/speakturbo` | Ultra-fast TTS with ~90ms latency. Local text-to-speech for AI agents with 8 built-in voices. |
| 90 | [@indiekitai/pi-skills](https://www.npmjs.com/package/@indiekitai/pi-skills) | 30 | `npm install @indiekitai/pi-skills` | IndieKit developer tools as Pi/Claude Code/Codex skills — PostgreSQL health, schema diff, type generation, rate limitin… |
| 91 | [@joemccann/pi-canvas-design](https://www.npmjs.com/package/@joemccann/pi-canvas-design) | 28 | `npm install @joemccann/pi-canvas-design` | Create museum-quality visual art and design philosophies expressed as .png and .pdf canvases using pi |
| 92 | [@alexgorbatchev/agentation-skills](https://www.npmjs.com/package/@alexgorbatchev/agentation-skills) | 21 | `npm install @alexgorbatchev/agentation-skills` | Shared Agentation skills for coding agents |
| 93 | [pi-session-investigator](https://www.npmjs.com/package/pi-session-investigator) | 21 | `npm install pi-session-investigator` | Forensic tools for Pi sessions - file recovery, subagent tracing, timeline reconstruction |
| 94 | [@kaiserlich-dev/pi-skill-picker](https://www.npmjs.com/package/@kaiserlich-dev/pi-skill-picker) | 17 | `npm install @kaiserlich-dev/pi-skill-picker` | Namespace-aware skill palette for pi — groups skills by category folder |
| 95 | [@hyperspaceng/pi-agent-id](https://www.npmjs.com/package/@hyperspaceng/pi-agent-id) | 16 | `npm install @hyperspaceng/pi-agent-id` | Ethereum wallet management tool for pi agent system - HD wallets, secure key storage, and transaction signing |
| 96 | [@capyup/pi-specs](https://www.npmjs.com/package/@capyup/pi-specs) | 0 | `npm install @capyup/pi-specs` | Pi package for spec-driven development workflows: PRODUCT.md, TECH.md, implementation, and audits. Task tracking is del… |
| 97 | [@fingerskier/pi-email](https://www.npmjs.com/package/@fingerskier/pi-email) | 0 | `npm install @fingerskier/pi-email` | Planning skill for the legacy Claude email extension concept, ported as a Pi skill placeholder |
| 98 | [@fingerskier/pi-terse](https://www.npmjs.com/package/@fingerskier/pi-terse) | 0 | `npm install @fingerskier/pi-terse` | Ultra-compressed terse communication mode for Pi |
| 99 | [@fingerskier/pi-theology](https://www.npmjs.com/package/@fingerskier/pi-theology) | 0 | `npm install @fingerskier/pi-theology` | Exegetical theology research skills for Pi |
| 100 | [@geminixiang/pi-cicd-status](https://www.npmjs.com/package/@geminixiang/pi-cicd-status) | 0 | `npm install @geminixiang/pi-cicd-status` | Pi coding agent skill for checking CI/CD status from GitHub check runs, workflow runs, branches, PRs, commits, and rele… |
| 101 | [@gogomi/pi-glsl-shader-vision](https://www.npmjs.com/package/@gogomi/pi-glsl-shader-vision) | 0 | `npm install @gogomi/pi-glsl-shader-vision` | GLSL fragment shader viewer for Pi Agent — live WebGL preview, Tweakpane uniform controls, presets, probe sheets & vide… |
| 102 | [@krone9/pi-superpowers](https://www.npmjs.com/package/@krone9/pi-superpowers) | 0 | `npm install @krone9/pi-superpowers` | Process-discipline skills bundle for pi (brainstorming, systematic debugging, TDD, plans, verification, worktrees, para… |
| 103 | [@nathanhuh/pi-ko](https://www.npmjs.com/package/@nathanhuh/pi-ko) | 0 | `npm install @nathanhuh/pi-ko` | Korean-first prompts and skills for Pi Coding Agent. |
| 104 | [@sentiolabs/pi-frontend-design](https://www.npmjs.com/package/@sentiolabs/pi-frontend-design) | 0 | `npm install @sentiolabs/pi-frontend-design` | Frontend design skill for distinctive, production-grade Pi UI work. |
| 105 | [file-upload-cli](https://www.npmjs.com/package/file-upload-cli) | 0 | `npm install file-upload-cli` | Skill for uploading files with curl to litterbox.catbox.moe |
| 106 | [pi-autoskills](https://www.npmjs.com/package/pi-autoskills) | 0 | `npm install pi-autoskills` | Audited autoskills-style installer for pi. Detect stack, discover vetted skills, audit upstream bundles, cache locally,… |
| 107 | [pi-disable-model-skill-invocation](https://www.npmjs.com/package/pi-disable-model-skill-invocation) | 0 | `npm install pi-disable-model-skill-invocation` | Pi extension that globally hides skills from the model while preserving /skill:name. |
| 108 | [pi-mono-all](https://www.npmjs.com/package/pi-mono-all) | 0 | `npm install pi-mono-all` | All pi-mono extensions and bundled skills |
| 109 | [pi-skill-dollar](https://www.npmjs.com/package/pi-skill-dollar) | 0 | `npm install pi-skill-dollar` | Dollar-sign autocomplete shortcut for pi Agent Skills |
| 110 | [pi-skill-model-effort](https://www.npmjs.com/package/pi-skill-model-effort) | 0 | `npm install pi-skill-model-effort` | Pi extension that honors model, effort, and thinking frontmatter on skills. |
| 111 | [pi-skillshare](https://www.npmjs.com/package/pi-skillshare) | 0 | `npm install pi-skillshare` | Search, install, and manage skillshare AI agent skills from within Pi |
| 112 | [pi-until-done](https://www.npmjs.com/package/pi-until-done) | 0 | `npm install pi-until-done` | Pi extension that brings Hermes Agent's /goal (Ralph loop with judge) to Pi as /until-done. Pi self-judges every turn,… |
| 113 | [pi-zstack](https://www.npmjs.com/package/pi-zstack) | 0 | `npm install pi-zstack` | Rob Zolkos' personal Pi stack as an installable meta package. |

</details>

<a id="codequality"></a>
## 代码质量
> 35 个包 · 总月下载量 36,605

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-lens](https://www.npmjs.com/package/pi-lens) | 13,237 | `npm install pi-lens` | Real-time code feedback for pi — LSP, linters, formatters, type-checking, structural an… |
| 2 | [pi-simplify](https://www.npmjs.com/package/pi-simplify) | 10,180 | `npm install pi-simplify` | A Pi extension that reviews recently changed code for clarity, consistency, and maintai… |
| 3 | [@lpirito/pi-diffloop](https://www.npmjs.com/package/@lpirito/pi-diffloop) | 2,154 | `npm install @lpirito/pi-diffloop` | Pair programming with Pi, be aware of every change made to the codebase. |
| 4 | [@spences10/pi-lsp](https://www.npmjs.com/package/@spences10/pi-lsp) | 2,092 | `npm install @spences10/pi-lsp` | Pi extension that exposes Language Server Protocol diagnostics, hover, definition, and… |
| 5 | [pi-mono-simplify](https://www.npmjs.com/package/pi-mono-simplify) | 915 | `npm install pi-mono-simplify` | Pi extension that reviews changed code for reuse, quality, and efficiency, then fixes a… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 35 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-lens](https://www.npmjs.com/package/pi-lens) | 13,237 | `npm install pi-lens` | Real-time code feedback for pi — LSP, linters, formatters, type-checking, structural analysis & booboo |
| 2 | [pi-simplify](https://www.npmjs.com/package/pi-simplify) | 10,180 | `npm install pi-simplify` | A Pi extension that reviews recently changed code for clarity, consistency, and maintainability. |
| 3 | [@lpirito/pi-diffloop](https://www.npmjs.com/package/@lpirito/pi-diffloop) | 2,154 | `npm install @lpirito/pi-diffloop` | Pair programming with Pi, be aware of every change made to the codebase. |
| 4 | [@spences10/pi-lsp](https://www.npmjs.com/package/@spences10/pi-lsp) | 2,092 | `npm install @spences10/pi-lsp` | Pi extension that exposes Language Server Protocol diagnostics, hover, definition, and reference tools |
| 5 | [pi-mono-simplify](https://www.npmjs.com/package/pi-mono-simplify) | 915 | `npm install pi-mono-simplify` | Pi extension that reviews changed code for reuse, quality, and efficiency, then fixes any issues found |
| 6 | [@haphazarddev/pi-interactive-code-review](https://www.npmjs.com/package/@haphazarddev/pi-interactive-code-review) | 776 | `npm install @haphazarddev/pi-interactive-code-review` | A pi extension for interactive code review against your default branch, including uncommitted changes, with line or hun… |
| 7 | [pi-slopchop](https://www.npmjs.com/package/pi-slopchop) | 723 | `npm install pi-slopchop` | Terminal-native code review and annotation workflow for the Pi coding agent. |
| 8 | [pi-lsp-extension](https://www.npmjs.com/package/pi-lsp-extension) | 700 | `npm install pi-lsp-extension` | Pi coding agent extension for LSP (Language Server Protocol) integration |
| 9 | [pi-codex](https://www.npmjs.com/package/pi-codex) | 690 | `npm install pi-codex` | Use Codex from pi-coding-agent to review code or delegate tasks. |
| 10 | [pi-review-loop](https://www.npmjs.com/package/pi-review-loop) | 677 | `npm install pi-review-loop` | Automated code review loop extension for pi coding agent |
| 11 | [lsp-pi](https://www.npmjs.com/package/lsp-pi) | 552 | `npm install lsp-pi` | LSP extension for pi-coding-agent - provides language server tool and diagnostics feedback for Dart/Flutter, TypeScript… |
| 12 | [@geminixiang/pi-simplify](https://www.npmjs.com/package/@geminixiang/pi-simplify) | 524 | `npm install @geminixiang/pi-simplify` | Simplify: Review changed code for reuse, quality, and efficiency |
| 13 | [@gaodes/pi-lens](https://www.npmjs.com/package/@gaodes/pi-lens) | 438 | `npm install @gaodes/pi-lens` | Real-time code feedback for pi — LSP, linters, formatters, type-checking, structural analysis & booboo |
| 14 | [pi-code-nav](https://www.npmjs.com/package/pi-code-nav) | 434 | `npm install pi-code-nav` | Exact symbol navigation companion for Pi, built to sit between pi-codesight discovery and pi-lens raw LSP operations. |
| 15 | [agent-booster-pack](https://www.npmjs.com/package/agent-booster-pack) | 299 | `npm install agent-booster-pack` | Agent Booster Pack for Pi: skills + Interface Design Gate runtime + proof-first runtime + whiteboarding guard + final v… |
| 16 | [@dreki-gg/pi-lsp](https://www.npmjs.com/package/@dreki-gg/pi-lsp) | 237 | `npm install @dreki-gg/pi-lsp` | Language-agnostic LSP code intelligence for pi — diagnostics, hover, definitions, references, symbols, and call hierarc… |
| 17 | [pi-go-review](https://www.npmjs.com/package/pi-go-review) | 237 | `npm install pi-go-review` | Review Go code changes against the '100 Go Mistakes and How to Avoid Them' checklist (https://100go.co/). Registers a g… |
| 18 | [agent-booster-pack-skills](https://www.npmjs.com/package/agent-booster-pack-skills) | 208 | `npm install agent-booster-pack-skills` | General Agent Booster Pack skills for Pi: data, security, debugging, refactoring, and more. Runtime-owned skills ship w… |
| 19 | [pi-code-review](https://www.npmjs.com/package/pi-code-review) | 156 | `npm install pi-code-review` | A Pi extension that provides automated, language-aware code review after the agent writes or modifies files. |
| 20 | [pi-review](https://www.npmjs.com/package/pi-review) | 149 | `npm install pi-review` | Review current pi work in a new branch with conversation context |
| 21 | [pi-slop-review](https://www.npmjs.com/package/pi-slop-review) | 143 | `npm install pi-slop-review` | Native diff review window for AI coding agents (pi, Claude Code, Codex CLI). Opens a Monaco-powered review UI in a Glim… |
| 22 | [@i-language/autocode](https://www.npmjs.com/package/@i-language/autocode) | 134 | `npm install @i-language/autocode` | You say it, AutoCode ships it. 47 I-Lang skills covering understanding, planning, building, quality, debugging, deploym… |
| 23 | [pi-agent-booster-pack](https://www.npmjs.com/package/pi-agent-booster-pack) | 126 | `npm install pi-agent-booster-pack` | Agent Booster Pack helps Pi produce code that is well-organized, low in complexity and side effects, and is secure and… |
| 24 | [pi-code-reviewer](https://www.npmjs.com/package/pi-code-reviewer) | 121 | `npm install pi-code-reviewer` | Pi-installable code review skill package. |
| 25 | [@wiechsa/pi-ruby-lsp](https://www.npmjs.com/package/@wiechsa/pi-ruby-lsp) | 119 | `npm install @wiechsa/pi-ruby-lsp` | Ruby LSP integration for pi coding agent |
| 26 | [pi-diff-review](https://www.npmjs.com/package/pi-diff-review) | 116 | `npm install pi-diff-review` | Local diff review TUI extension for pi |
| 27 | [@gnoviawan/pi-biome-lsp](https://www.npmjs.com/package/@gnoviawan/pi-biome-lsp) | 103 | `npm install @gnoviawan/pi-biome-lsp` | Biome lint/format/check integration for Pi, including daemon startup and post-edit checks. |
| 28 | [@mrclrchtr/supi-lsp](https://www.npmjs.com/package/@mrclrchtr/supi-lsp) | 102 | `npm install @mrclrchtr/supi-lsp` | SuPi LSP extension — Language Server Protocol integration for pi |
| 29 | [@lustepe/pi-elixir](https://www.npmjs.com/package/@lustepe/pi-elixir) | 75 | `npm install @lustepe/pi-elixir` | Pi package for Elixir projects: Mix post-edit checks, Expert LSP bridge, commands, LLM tools, and Elixir/Phoenix/Ecto/O… |
| 30 | [@lustepe/elixir-pi](https://www.npmjs.com/package/@lustepe/elixir-pi) | 61 | `npm install @lustepe/elixir-pi` | Pi package for Elixir projects: Mix post-edit checks, Expert LSP bridge, commands, LLM tools, and Elixir/Phoenix/Ecto/O… |
| 31 | [pi-deep-review](https://www.npmjs.com/package/pi-deep-review) | 45 | `npm install pi-deep-review` | Deep PR review extension for Pi with deterministic context packing and Responses API streaming |
| 32 | [pi-bitbucket](https://www.npmjs.com/package/pi-bitbucket) | 34 | `npm install pi-bitbucket` | Bitbucket Cloud integration for Pi — repos, PRs, branches, pipelines, and issues |
| 33 | [@hdh/pi-contributions-bot](https://www.npmjs.com/package/@hdh/pi-contributions-bot) | 26 | `npm install @hdh/pi-contributions-bot` | Pi extension that gates git commit on CONTRIBUTING_BOT.md compliance |
| 34 | [@yofriadi/pi-lsp](https://www.npmjs.com/package/@yofriadi/pi-lsp) | 13 | `npm install @yofriadi/pi-lsp` | ```bash pi install git:github.com/yofriadi/pi-extensions@lsp-v<version> ``` |
| 35 | [@yofriadi/pi-review](https://www.npmjs.com/package/@yofriadi/pi-review) | 9 | `npm install @yofriadi/pi-review` | Interactive code review extension package for pi |

</details>

<a id="tool"></a>
## 工具与安全
> 70 个包 · 总月下载量 31,159

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@gotgenes/pi-permission-system](https://www.npmjs.com/package/@gotgenes/pi-permission-system) | 6,421 | `npm install @gotgenes/pi-permission-system` | Permission enforcement extension for the Pi coding agent. |
| 2 | [pi-pkg-guard](https://www.npmjs.com/package/pi-pkg-guard) | 1,692 | `npm install pi-pkg-guard` | Guards against unregistered pi packages — installed via npm but not registered in pi's… |
| 3 | [pi-sandbox](https://www.npmjs.com/package/pi-sandbox) | 1,477 | `npm install pi-sandbox` | OS-level sandboxing for pi with interactive permission prompts |
| 4 | [@aliou/pi-guardrails](https://www.npmjs.com/package/@aliou/pi-guardrails) | 4,145 | `npm install @aliou/pi-guardrails` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-guardrails.png) |
| 5 | [pi-permission-system](https://www.npmjs.com/package/pi-permission-system) | 1,411 | `npm install pi-permission-system` | Permission enforcement extension for the Pi coding agent. |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 70 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@gotgenes/pi-permission-system](https://www.npmjs.com/package/@gotgenes/pi-permission-system) | 6,421 | `npm install @gotgenes/pi-permission-system` | Permission enforcement extension for the Pi coding agent. |
| 2 | [pi-pkg-guard](https://www.npmjs.com/package/pi-pkg-guard) | 1,692 | `npm install pi-pkg-guard` | Guards against unregistered pi packages — installed via npm but not registered in pi's settings |
| 3 | [pi-sandbox](https://www.npmjs.com/package/pi-sandbox) | 1,477 | `npm install pi-sandbox` | OS-level sandboxing for pi with interactive permission prompts |
| 4 | [@aliou/pi-guardrails](https://www.npmjs.com/package/@aliou/pi-guardrails) | 4,145 | `npm install @aliou/pi-guardrails` | ![banner](https://assets.aliou.me/pi-extensions/banners/pi-guardrails.png) |
| 5 | [pi-permission-system](https://www.npmjs.com/package/pi-permission-system) | 1,411 | `npm install pi-permission-system` | Permission enforcement extension for the Pi coding agent. |
| 6 | [@casualjim/pi-heimdall](https://www.npmjs.com/package/@casualjim/pi-heimdall) | 1,289 | `npm install @casualjim/pi-heimdall` | Guardian extension for pi — security guards that block accidental secret exposure, enforce command policies, protect .e… |
| 7 | [pi-container-sandbox](https://www.npmjs.com/package/pi-container-sandbox) | 1,199 | `npm install pi-container-sandbox` | pi coding-agent extension that runs every read/write/edit/bash op inside a per-session Linux container (Apple `containe… |
| 8 | [@jerryan/pi-sanity](https://www.npmjs.com/package/@jerryan/pi-sanity) | 873 | `npm install @jerryan/pi-sanity` | Pi extension for sanity checks on agent operations |
| 9 | [@the-agency/vmpi](https://www.npmjs.com/package/@the-agency/vmpi) | 801 | `npm install @the-agency/vmpi` | Run pi sandboxed in a QEMU microVM via Gondolin |
| 10 | [pi-claude-sandbox](https://www.npmjs.com/package/pi-claude-sandbox) | 781 | `npm install pi-claude-sandbox` | Claude-style OS-level sandboxing for pi with interactive permission prompts. Coexists with pi-tool-display and other ba… |
| 11 | [@pi-lab/permissions](https://www.npmjs.com/package/@pi-lab/permissions) | 737 | `npm install @pi-lab/permissions` | Permission system extension for pi coding agent |
| 12 | [pi-file-permissions](https://www.npmjs.com/package/pi-file-permissions) | 725 | `npm install pi-file-permissions` | Pi extension that enforces file-level permissions via a YAML config. Controls which paths each tool (read, write, edit,… |
| 13 | [@zackify/pi-claude-permissions](https://www.npmjs.com/package/@zackify/pi-claude-permissions) | 674 | `npm install @zackify/pi-claude-permissions` | Claude-style permissions for pi with an opinionated small mode set and built-in plan mode. |
| 14 | [pi-claude-permissions](https://www.npmjs.com/package/pi-claude-permissions) | 664 | `npm install pi-claude-permissions` | Claude-style allow/deny/ask permission lists for Pi tool calls |
| 15 | [@panzenbaby/pi-secure-extension](https://www.npmjs.com/package/@panzenbaby/pi-secure-extension) | 555 | `npm install @panzenbaby/pi-secure-extension` | A Pi extension that performs security audits on other extensions before install or update. Uses the currently selected… |
| 16 | [pi-guard](https://www.npmjs.com/package/pi-guard) | 449 | `npm install pi-guard` | General-purpose permission system for pi tools, handling permissions for bash and file tools with extensible matchers f… |
| 17 | [pi-secret-guard](https://www.npmjs.com/package/pi-secret-guard) | 415 | `npm install pi-secret-guard` | A pi extension that guards against committing secrets, API keys, and credentials to git repositories using hybrid regex… |
| 18 | [pi-sandbox-proxy](https://www.npmjs.com/package/pi-sandbox-proxy) | 386 | `npm install pi-sandbox-proxy` | pi coding-agent extension that intercepts network operations with approval flows, vulnerability scanning, and supply ch… |
| 19 | [@artale/pi-sentinel](https://www.npmjs.com/package/@artale/pi-sentinel) | 380 | `npm install @artale/pi-sentinel` | Agent security framework. Immutable audit trail, permission policies, self-modification detection, destructive command… |
| 20 | [pi-guard-sandbox](https://www.npmjs.com/package/pi-guard-sandbox) | 378 | `npm install pi-guard-sandbox` | A lightweight OS-level guard for Pi: agents stay useful, sensitive paths stay blocked, and writes stay inside the works… |
| 21 | [@0xkobold/pi-secret-guardian](https://www.npmjs.com/package/@0xkobold/pi-secret-guardian) | 378 | `npm install @0xkobold/pi-secret-guardian` | Secret detection and pi-share-hf integration for pi-coding-agent. Scans projects, sessions, and environment for secrets… |
| 22 | [@igormaka/pi-sandbox](https://www.npmjs.com/package/@igormaka/pi-sandbox) | 367 | `npm install @igormaka/pi-sandbox` | A proper sandbox extension for pi, using the Anthropic Sandbox Runtime |
| 23 | [@qmxme/pi-git-guard](https://www.npmjs.com/package/@qmxme/pi-git-guard) | 336 | `npm install @qmxme/pi-git-guard` | Blocks destructive git operations (push, tag -d, reset --hard) in pi |
| 24 | [pi-sec](https://www.npmjs.com/package/pi-sec) | 297 | `npm install pi-sec` | A one-stop shop for Pi Agent security mitigations — prompt injection, malicious commands and packages, credential leaks… |
| 25 | [pi-budget-guard](https://www.npmjs.com/package/pi-budget-guard) | 286 | `npm install pi-budget-guard` | An extension for Pi coding agent that tracks session spend and enforces budget limits. |
| 26 | [@tangle-network/tcloud-agent](https://www.npmjs.com/package/@tangle-network/tcloud-agent) | 285 | `npm install @tangle-network/tcloud-agent` | Agent run-loop primitive over the Tangle sandbox bridge — runs an AgentProfile against a brief with criterion gates, bu… |
| 27 | [@samfp/pi-steering-hooks](https://www.npmjs.com/package/@samfp/pi-steering-hooks) | 271 | `npm install @samfp/pi-steering-hooks` | Deterministic tool-call guardrails for pi — enforce rules with before-tool hooks instead of prompts. Zero token cost, 1… |
| 28 | [pi-thegreataxios-staples](https://www.npmjs.com/package/pi-thegreataxios-staples) | 267 | `npm install pi-thegreataxios-staples` | Personal staple extension for pi coding-agent — protected paths |
| 29 | [pi-git-guardrails](https://www.npmjs.com/package/pi-git-guardrails) | 263 | `npm install pi-git-guardrails` | Native Pi extension that blocks dangerous git operations, including git calls hidden inside scripts. |
| 30 | [@the-forge-flow/security-harness-pi](https://www.npmjs.com/package/@the-forge-flow/security-harness-pi) | 263 | `npm install @the-forge-flow/security-harness-pi` | Security harness for the PI coding agent — forbids dangerous commands and gates sensitive ones behind user approval |
| 31 | [pi-sensitive-guard](https://www.npmjs.com/package/pi-sensitive-guard) | 232 | `npm install pi-sensitive-guard` | Pi extension that protects sensitive files, blocks secret writes, and optionally redacts protected read output. |
| 32 | [@sysid/pi-sandbox](https://www.npmjs.com/package/@sysid/pi-sandbox) | 221 | `npm install @sysid/pi-sandbox` | OS + app sandboxing extension for the pi coding agent |
| 33 | [@firstpick/pi-extension-safety-guard](https://www.npmjs.com/package/@firstpick/pi-extension-safety-guard) | 214 | `npm install @firstpick/pi-extension-safety-guard` | Interactive guardrails for dangerous bash commands and protected file edits in Pi. |
| 34 | [pi-permissions](https://www.npmjs.com/package/pi-permissions) | 165 | `npm install pi-permissions` | Configurable allow/deny permission rules for pi tool calls — control which bash commands, file reads, writes, and edits… |
| 35 | [pi-permission](https://www.npmjs.com/package/pi-permission) | 152 | `npm install pi-permission` | Layered permission control extension for pi-coding-agent (no sound) |
| 36 | [@rhedbull/pi-permissions](https://www.npmjs.com/package/@rhedbull/pi-permissions) | 119 | `npm install @rhedbull/pi-permissions` | Claude Code-style permission modes for pi. Controls approval for file writes, edits, and bash commands with four modes:… |
| 37 | [@eigenwert/pi-gatekeeper](https://www.npmjs.com/package/@eigenwert/pi-gatekeeper) | 116 | `npm install @eigenwert/pi-gatekeeper` | Pi extension that gates file-mutating tool calls behind user approval with AST-based bash command analysis |
| 38 | [pi-bash-confirm](https://www.npmjs.com/package/pi-bash-confirm) | 111 | `npm install pi-bash-confirm` | Pi package for confirming bash commands before execution with Telegram notifications |
| 39 | [@melihmucuk/leash](https://www.npmjs.com/package/@melihmucuk/leash) | 108 | `npm install @melihmucuk/leash` | Security guardrails for AI coding agents |
| 40 | [@diegopetrucci/pi-permission-gate](https://www.npmjs.com/package/@diegopetrucci/pi-permission-gate) | 97 | `npm install @diegopetrucci/pi-permission-gate` | A pi extension that prompts before dangerous bash commands. |
| 41 | [@artale/pi-pentest](https://www.npmjs.com/package/@artale/pi-pentest) | 92 | `npm install @artale/pi-pentest` | Security scanning: nmap wrapper, vulnerability checks |
| 42 | [@4meta5/pi-ozcar](https://www.npmjs.com/package/@4meta5/pi-ozcar) | 87 | `npm install @4meta5/pi-ozcar` | Pi-first audit extension package for structured security reviews and deterministic comparison exports |
| 43 | [@artale/pi-git-guard](https://www.npmjs.com/package/@artale/pi-git-guard) | 80 | `npm install @artale/pi-git-guard` | Git safety guard: protect branches, scan secrets, prevent mistakes |
| 44 | [pi-safeguard](https://www.npmjs.com/package/pi-safeguard) | 77 | `npm install pi-safeguard` | LLM-as-judge guardrail for pi · from yapp |
| 45 | [@odradekk/vera-scheme-sandbox](https://www.npmjs.com/package/@odradekk/vera-scheme-sandbox) | 74 | `npm install @odradekk/vera-scheme-sandbox` | Chez Scheme WASM sandbox for Vera agent — platform-independent Scheme evaluation |
| 46 | [@victor-software-house/pi-credential-vault](https://www.npmjs.com/package/@victor-software-house/pi-credential-vault) | 65 | `npm install @victor-software-house/pi-credential-vault` | Managed-provider credential vault for Pi with built-in age, keychain, and passthrough backends |
| 47 | [pi-bash-readonly](https://www.npmjs.com/package/pi-bash-readonly) | 64 | `npm install pi-bash-readonly` | Sandboxed read-only bash for Pi agents via bwrap |
| 48 | [pi-boundary](https://www.npmjs.com/package/pi-boundary) | 56 | `npm install pi-boundary` | Filesystem boundary enforcement for pi — prompts before the agent escapes your project |
| 49 | [pi-recon-tools](https://www.npmjs.com/package/pi-recon-tools) | 55 | `npm install pi-recon-tools` | Security reconnaissance toolkit. Headers audit, SSL check, DNS, port scan, tech fingerprinting, path discovery. |
| 50 | [pi-opa](https://www.npmjs.com/package/pi-opa) | 54 | `npm install pi-opa` | Enterprise-grade Open Policy Agent (OPA) integration for pi coding agent - comprehensive authorization, authentication,… |
| 51 | [pi-sandbox-profile](https://www.npmjs.com/package/pi-sandbox-profile) | 52 | `npm install pi-sandbox-profile` | Sandbox profiles for Pi: open/intro-sec/engineering with file-tool enforcement and telemetry |
| 52 | [pi-file-protection](https://www.npmjs.com/package/pi-file-protection) | 51 | `npm install pi-file-protection` | Pi extension that confirms before delete/edit operations - protects files from accidental changes |
| 53 | [pi-extension-e2b](https://www.npmjs.com/package/pi-extension-e2b) | 45 | `npm install pi-extension-e2b` | E2B cloud sandbox integration for pi — redirects all tool execution to a remote E2B sandbox |
| 54 | [@rjshrjndrn/pi-sandbox](https://www.npmjs.com/package/@rjshrjndrn/pi-sandbox) | 43 | `npm install @rjshrjndrn/pi-sandbox` | Filesystem boundary enforcement for pi — prompts before the agent escapes your project |
| 55 | [permission-pi](https://www.npmjs.com/package/permission-pi) | 38 | `npm install permission-pi` | Layered permission control extension for pi-coding-agent |
| 56 | [pi-session-guard](https://www.npmjs.com/package/pi-session-guard) | 36 | `npm install pi-session-guard` | Session guard extension for Pi coding agent |
| 57 | [@artale/pi-diff-guard](https://www.npmjs.com/package/@artale/pi-diff-guard) | 32 | `npm install @artale/pi-diff-guard` | Edit awareness for Pi. Tracks file changes, warns on large deletions, shows edit heatmap. /diffguard report for hotspot… |
| 58 | [pi-redactor](https://www.npmjs.com/package/pi-redactor) | 30 | `npm install pi-redactor` | Pi extension that redacts sensitive strings from user input, tool results, and context before the LLM sees them. |
| 59 | [@artale/pi-envman](https://www.npmjs.com/package/@artale/pi-envman) | 24 | `npm install @artale/pi-envman` | Environment and secrets manager. Store API tokens, scan env files, detect leaked secrets in code. |
| 60 | [@4meta5/pi-zsh](https://www.npmjs.com/package/@4meta5/pi-zsh) | 23 | `npm install @4meta5/pi-zsh` | Allowlist-only zsh script runner extension for pi coding agents. |
| 61 | [@clankie/sandbox](https://www.npmjs.com/package/@clankie/sandbox) | 22 | `npm install @clankie/sandbox` | Gondolin micro-VM sandbox for clankie — runs agent tools inside an isolated VM with network policies, secret injection,… |
| 62 | [pi-security-scanner](https://www.npmjs.com/package/pi-security-scanner) | 21 | `npm install pi-security-scanner` | Security scanner and runtime protection for Pi Coding Agent |
| 63 | [pi-agentkernel](https://www.npmjs.com/package/pi-agentkernel) | 20 | `npm install pi-agentkernel` | Route Pi coding agent commands through agentkernel microVM sandboxes |
| 64 | [@artale/pi-recon](https://www.npmjs.com/package/@artale/pi-recon) | 18 | `npm install @artale/pi-recon` | Security reconnaissance toolkit. Headers audit, SSL check, DNS, port scan, tech fingerprinting, path discovery. |
| 65 | [@carter-mcalister/pi-protected-files](https://www.npmjs.com/package/@carter-mcalister/pi-protected-files) | 0 | `npm install @carter-mcalister/pi-protected-files` | Project-configurable protected file gates for Pi edits |
| 66 | [@kky42/pi-sandbox](https://www.npmjs.com/package/@kky42/pi-sandbox) | 0 | `npm install @kky42/pi-sandbox` | Pi-compatible sandbox extension for filesystem-aware bash and tool enforcement |
| 67 | [@spences10/pi-svelte-guardrails](https://www.npmjs.com/package/@spences10/pi-svelte-guardrails) | 0 | `npm install @spences10/pi-svelte-guardrails` | Pi extension that blocks discouraged Svelte patterns before agents write them |
| 68 | [pi-protected-paths](https://www.npmjs.com/package/pi-protected-paths) | 0 | `npm install pi-protected-paths` | Blocks write/edit to sensitive files (.env, .git, node_modules, SSH keys, credentials, and more) |
| 69 | [pi-safety-modes](https://www.npmjs.com/package/pi-safety-modes) | 0 | `npm install pi-safety-modes` | Pi package providing safety modes for tool-call guardrails |
| 70 | [pi-windows-path-guard](https://www.npmjs.com/package/pi-windows-path-guard) | 0 | `npm install pi-windows-path-guard` | Prevents Windows-native Pi file tools from silently writing to mangled paths when agents reuse Git Bash/MSYS paths like… |

</details>

<a id="context"></a>
## 上下文管理
> 83 个包 · 总月下载量 30,680

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-continue](https://www.npmjs.com/package/pi-continue) | 2,677 | `npm install pi-continue` | Mid-turn continuation for long Pi tool runs: compact safely before context overflow, th… |
| 2 | [pi-context-prune](https://www.npmjs.com/package/pi-context-prune) | 2,397 | `npm install pi-context-prune` | Pi extension package for pruning future context while preserving original tool-call his… |
| 3 | [@sting8k/pi-vcc](https://www.npmjs.com/package/@sting8k/pi-vcc) | 2,580 | `npm install @sting8k/pi-vcc` | Algorithmic conversation compactor for pi - transcript-preserving structured summaries,… |
| 4 | [pi-context](https://www.npmjs.com/package/pi-context) | 1,728 | `npm install pi-context` | Agentic Context Management for the Pi |
| 5 | [pi-subdir-context](https://www.npmjs.com/package/pi-subdir-context) | 1,506 | `npm install pi-subdir-context` | Automatically load AGENTS.md context from subdirectories in pi coding agent |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 83 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-continue](https://www.npmjs.com/package/pi-continue) | 2,677 | `npm install pi-continue` | Mid-turn continuation for long Pi tool runs: compact safely before context overflow, then resume the same session from… |
| 2 | [pi-context-prune](https://www.npmjs.com/package/pi-context-prune) | 2,397 | `npm install pi-context-prune` | Pi extension package for pruning future context while preserving original tool-call history. |
| 3 | [@sting8k/pi-vcc](https://www.npmjs.com/package/@sting8k/pi-vcc) | 2,580 | `npm install @sting8k/pi-vcc` | Algorithmic conversation compactor for pi - transcript-preserving structured summaries, no LLM calls |
| 4 | [pi-context](https://www.npmjs.com/package/pi-context) | 1,728 | `npm install pi-context` | Agentic Context Management for the Pi |
| 5 | [pi-subdir-context](https://www.npmjs.com/package/pi-subdir-context) | 1,506 | `npm install pi-subdir-context` | Automatically load AGENTS.md context from subdirectories in pi coding agent |
| 6 | [@dreki-gg/pi-context7](https://www.npmjs.com/package/@dreki-gg/pi-context7) | 1,119 | `npm install @dreki-gg/pi-context7` | Pi-native Context7 documentation tools — direct HTTP, persistent cache, no MCP dependency |
| 7 | [pi-capitals-context](https://www.npmjs.com/package/pi-capitals-context) | 1,098 | `npm install pi-capitals-context` | Auto-inject ALL_CAPS.md files into pi's system prompt from project root and subdirectories |
| 8 | [@pi-unipi/compactor](https://www.npmjs.com/package/@pi-unipi/compactor) | 1,075 | `npm install @pi-unipi/compactor` | Context engine for Pi — zero-LLM compaction, session continuity, sandbox execution, and tool display optimization |
| 9 | [@spences10/pi-context](https://www.npmjs.com/package/@spences10/pi-context) | 1,059 | `npm install @spences10/pi-context` | Pi extension for local SQLite context sidecar storage and retrieval of large tool output |
| 10 | [pi-doc-injector](https://www.npmjs.com/package/pi-doc-injector) | 931 | `npm install pi-doc-injector` | Auto-inject relevant project documentation into Pi's LLM context based on keyword matching |
| 11 | [@ogulcancelik/pi-minimal-footer](https://www.npmjs.com/package/@ogulcancelik/pi-minimal-footer) | 917 | `npm install @ogulcancelik/pi-minimal-footer` | Minimal footer for pi with context gauge and subscription usage bars |
| 12 | [pi-add-dir](https://www.npmjs.com/package/pi-add-dir) | 897 | `npm install pi-add-dir` | Add external directories to your pi session — loads their AGENTS.md, CLAUDE.md, and skills into context. |
| 13 | [pi-mono-context-guard](https://www.npmjs.com/package/pi-mono-context-guard) | 890 | `npm install pi-mono-context-guard` | Pi extension that guards context window growth by auto-limiting read and rg output |
| 14 | [pi-tool-search](https://www.npmjs.com/package/pi-tool-search) | 850 | `npm install pi-tool-search` | Hide all tools behind a manifest-aware tool_search — LLM enables tools by name on demand |
| 15 | [pi-amplike](https://www.npmjs.com/package/pi-amplike) | 702 | `npm install pi-amplike` | Pi skills and extensions that provide Amp Code-like workflows (handoff, permissions, mode selector, web access). |
| 16 | [pi-autocontext](https://www.npmjs.com/package/pi-autocontext) | 582 | `npm install pi-autocontext` | autocontext extension for Pi coding agent — iterative strategy generation, LLM judging, and evaluation tools |
| 17 | [pi-context-usage](https://www.npmjs.com/package/pi-context-usage) | 520 | `npm install pi-context-usage` | Pi extension that shows context window usage visualization |
| 18 | [@badliveware/pi-compaction-continue](https://www.npmjs.com/package/@badliveware/pi-compaction-continue) | 509 | `npm install @badliveware/pi-compaction-continue` | Watchdog nudge extension for Pi after idle compactions or stalled continuation turns. |
| 19 | [@complexthings/pi-dynamic-context-pruning](https://www.npmjs.com/package/@complexthings/pi-dynamic-context-pruning) | 494 | `npm install @complexthings/pi-dynamic-context-pruning` | PI coding agent extension — Dynamic Context Pruning (DCP) |
| 20 | [pi-context-pruning](https://www.npmjs.com/package/pi-context-pruning) | 458 | `npm install pi-context-pruning` | OpenCode-style proactive tool output pruning for pi — reduce token usage by pruning stale tool outputs before each LLM… |
| 21 | [pi-handoff](https://www.npmjs.com/package/pi-handoff) | 453 | `npm install pi-handoff` | Handoff command extension package for pi coding agent |
| 22 | [pi-acm](https://www.npmjs.com/package/pi-acm) | 437 | `npm install pi-acm` | Active Context Management for pi — sliding window context management as a distributable pi extension |
| 23 | [@richardgill/pi-extra-context-files](https://www.npmjs.com/package/@richardgill/pi-extra-context-files) | 433 | `npm install @richardgill/pi-extra-context-files` | pi extension for loading extra context files into the system prompt. |
| 24 | [pi-context-cap](https://www.npmjs.com/package/pi-context-cap) | 390 | `npm install pi-context-cap` | Cap model context windows so pi's built-in auto-compaction fires earlier. Zero-config 200k default for long-context Cla… |
| 25 | [pi-git-context](https://www.npmjs.com/package/pi-git-context) | 351 | `npm install pi-git-context` | Opinionated git state context injection for pi |
| 26 | [pi-session-ask](https://www.npmjs.com/package/pi-session-ask) | 349 | `npm install pi-session-ask` | Allows the agent or user to ask questions about the current session's pre-compaction history, parent (if forked) sessio… |
| 27 | [pi-hide-messages](https://www.npmjs.com/package/pi-hide-messages) | 344 | `npm install pi-hide-messages` | Pi extension for hiding older TUI chat history while preserving full session context, with /hide-messages and /restore-… |
| 28 | [pi-autocontext-lean-verify](https://www.npmjs.com/package/pi-autocontext-lean-verify) | 321 | `npm install pi-autocontext-lean-verify` | Experimental Pi package for Lean-verified proof repair using autocontext and Pi. |
| 29 | [thincontext](https://www.npmjs.com/package/thincontext) | 298 | `npm install thincontext` | Drop-in middleware to compress LLM context before it hits the API |
| 30 | [pi-obsidian-context](https://www.npmjs.com/package/pi-obsidian-context) | 260 | `npm install pi-obsidian-context` | Pi extension that surfaces Obsidian vault context (active file and open tabs) as an editor widget and injects it as hid… |
| 31 | [@ryan_nookpi/pi-extension-codex-large-context](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-codex-large-context) | 254 | `npm install @ryan_nookpi/pi-extension-codex-large-context` | Codex large context window extension for pi. |
| 32 | [@baggiiiie/pi-context-chart](https://www.npmjs.com/package/@baggiiiie/pi-context-chart) | 248 | `npm install @baggiiiie/pi-context-chart` | A pi package that adds the `/context-chart` command. |
| 33 | [pi-grounded-compaction](https://www.npmjs.com/package/pi-grounded-compaction) | 204 | `npm install pi-grounded-compaction` | Compaction and branch summarizer for Pi with model presets, custom prompts, and deterministic files-touched tracking fo… |
| 34 | [pi-custom-compaction](https://www.npmjs.com/package/pi-custom-compaction) | 200 | `npm install pi-custom-compaction` | Custom compaction for pi — swap the model, template, and trigger for context compaction |
| 35 | [@artale/pi-weigh](https://www.npmjs.com/package/@artale/pi-weigh) | 188 | `npm install @artale/pi-weigh` | Weigh your context. Visual HTML report of system prompt token budget — per-tool breakdown, section analysis, health ind… |
| 36 | [@roodriigoooo/trail](https://www.npmjs.com/package/@roodriigoooo/trail) | 179 | `npm install @roodriigoooo/trail` | Trail: session artifacts and fresh-session checkpoints for Pi |
| 37 | [pi-files-touched](https://www.npmjs.com/package/pi-files-touched) | 177 | `npm install pi-files-touched` | Deterministic file-activity tracking for Pi sessions, covering native tools, RepoPrompt, and bash commands. Includes /f… |
| 38 | [pi-model-aware-compaction](https://www.npmjs.com/package/pi-model-aware-compaction) | 157 | `npm install pi-model-aware-compaction` | Per-model context-usage thresholds for Pi's built-in auto-compaction, so models with different context windows and perf… |
| 39 | [pi-reread-instructions](https://www.npmjs.com/package/pi-reread-instructions) | 155 | `npm install pi-reread-instructions` | Pi extension that re-inserts AGENTS.md / CLAUDE.md every N completed final assistant replies |
| 40 | [pi-reduce](https://www.npmjs.com/package/pi-reduce) | 146 | `npm install pi-reduce` | Reduce Pi session context by rebuilding the current branch with only the message types you keep. |
| 41 | [pi-lcm](https://www.npmjs.com/package/pi-lcm) | 141 | `npm install pi-lcm` | Lossless Context Management for Pi — DAG-based summarization with full history recovery |
| 42 | [pi-context-injector](https://www.npmjs.com/package/pi-context-injector) | 131 | `npm install pi-context-injector` | Pi extension that injects project context into first-turn prompts and compaction continuity messages. |
| 43 | [pi-agentic-compaction](https://www.npmjs.com/package/pi-agentic-compaction) | 131 | `npm install pi-agentic-compaction` | Pi extension for agentic conversation compaction using a virtual filesystem and tool-driven exploration |
| 44 | [pi-igotchu](https://www.npmjs.com/package/pi-igotchu) | 126 | `npm install pi-igotchu` | Cheap-first drift monitor for pi (command: /yo). Nudges only at 95+ confidence. |
| 45 | [@ssweens/pi-handoff](https://www.npmjs.com/package/@ssweens/pi-handoff) | 121 | `npm install @ssweens/pi-handoff` | Enhanced handoff extension for pi - context management for agentic coding workflows |
| 46 | [pi-token-killer](https://www.npmjs.com/package/pi-token-killer) | 113 | `npm install pi-token-killer` | Token Killer for Pi -- reduce LLM token consumption by 60-90% on common dev commands |
| 47 | [@aaronmaturen/pi-context7](https://www.npmjs.com/package/@aaronmaturen/pi-context7) | 109 | `npm install @aaronmaturen/pi-context7` | Context7 extension for pi - fetches up-to-date library documentation via context7.com |
| 48 | [pi-session-context](https://www.npmjs.com/package/pi-session-context) | 108 | `npm install pi-session-context` | A pi coding agent extension that tracks and displays session context (worktree, Jira ticket, GitLab MR) in the footer |
| 49 | [pi-context-zone](https://www.npmjs.com/package/pi-context-zone) | 88 | `npm install pi-context-zone` | Visual context health bar for the Pi coding agent — see your smart/warm/dumb zone at a glance |
| 50 | [pi-init](https://www.npmjs.com/package/pi-init) | 88 | `npm install pi-init` | A pi agent skill to initialize or update AGENTS.md context files. |
| 51 | [@davidorex/pi-custom-compactor](https://www.npmjs.com/package/@davidorex/pi-custom-compactor) | 85 | `npm install @davidorex/pi-custom-compactor` | Declarative YAML-driven structured compaction for pi coding agent — multi-pass extraction, artifact persistence, budget… |
| 52 | [pi-llm-debugging](https://www.npmjs.com/package/pi-llm-debugging) | 82 | `npm install pi-llm-debugging` | Saves LLM provider request payloads to the project's .pi folder for per-project debugging |
| 53 | [@agnishc/edb-context-viewer](https://www.npmjs.com/package/@agnishc/edb-context-viewer) | 71 | `npm install @agnishc/edb-context-viewer` | Pi extension: inspect the system prompt and full LLM context in scrollable overlay popups |
| 54 | [pi-omni-compact](https://www.npmjs.com/package/pi-omni-compact) | 70 | `npm install pi-omni-compact` | Pi extension that delegates compaction to a large-context model subprocess |
| 55 | [pi-readcache](https://www.npmjs.com/package/pi-readcache) | 69 | `npm install pi-readcache` | 🧠 Pi extension that optimizes read tool calls with replay-aware caching and compaction-safe trust reconstruction |
| 56 | [@alasano/pi-extra-context](https://www.npmjs.com/package/@alasano/pi-extra-context) | 62 | `npm install @alasano/pi-extra-context` | Load extra configured context files into pi sessions |
| 57 | [@ogulcancelik/pi-handoff](https://www.npmjs.com/package/@ogulcancelik/pi-handoff) | 61 | `npm install @ogulcancelik/pi-handoff` | Context-aware session handoff for pi. Transfer context to a new session via command, tool, or automatic context guard. |
| 58 | [pi-context-saver](https://www.npmjs.com/package/pi-context-saver) | 58 | `npm install pi-context-saver` | Pi extension that prevents context bloat by automatically sandboxing heavy tool outputs (bash, web_search, fetch_conten… |
| 59 | [@jdrly/pi-toolbox](https://www.npmjs.com/package/@jdrly/pi-toolbox) | 56 | `npm install @jdrly/pi-toolbox` | Deferred tool loading for Pi: keep heavy tool schemas out of context until prompts need them. |
| 60 | [pi-dumb](https://www.npmjs.com/package/pi-dumb) | 46 | `npm install pi-dumb` | Context rot indicator for Pi — shows token usage with research-backed degradation warnings |
| 61 | [@e9n/pi-context](https://www.npmjs.com/package/@e9n/pi-context) | 42 | `npm install @e9n/pi-context` | Context window usage command for pi — visual breakdown of token usage by category |
| 62 | [@artale/pi-context](https://www.npmjs.com/package/@artale/pi-context) | 42 | `npm install @artale/pi-context` | Context window intelligence for Pi. Usage prediction, message forecast, rate trending, auto-warnings. |
| 63 | [pi-sift](https://www.npmjs.com/package/pi-sift) | 39 | `npm install pi-sift` | Model-scored compression of large tool results for Pi Coding Agent |
| 64 | [@victor-software-house/pi-context-optimizer](https://www.npmjs.com/package/@victor-software-house/pi-context-optimizer) | 38 | `npm install @victor-software-house/pi-context-optimizer` | Pi extension for command rewriting and tool-output compaction optimization. |
| 65 | [@lajarre/pi-session-ask](https://www.npmjs.com/package/@lajarre/pi-session-ask) | 35 | `npm install @lajarre/pi-session-ask` | Ask questions about any Pi session (by path, UUID, or name) via an isolated subagent, keeping current context clean. |
| 66 | [@ogulcancelik/pi-goal](https://www.npmjs.com/package/@ogulcancelik/pi-goal) | 34 | `npm install @ogulcancelik/pi-goal` | Codex-style long-running goal mode for pi with automatic linked-session handoff. |
| 67 | [@claaslange/pi-context-budget](https://www.npmjs.com/package/@claaslange/pi-context-budget) | 27 | `npm install @claaslange/pi-context-budget` | Pi extension that warns when conversation context usage crosses configured thresholds. |
| 68 | [pi-context-filter](https://www.npmjs.com/package/pi-context-filter) | 26 | `npm install pi-context-filter` | A pi extension that provides .gitignore-style control over which context files and skills appear in the system prompt |
| 69 | [@jordyvd/pi-openai-compaction](https://www.npmjs.com/package/@jordyvd/pi-openai-compaction) | 26 | `npm install @jordyvd/pi-openai-compaction` | OpenAI native standalone compaction replay for Pi. |
| 70 | [@recallnet/codecontext-pi](https://www.npmjs.com/package/@recallnet/codecontext-pi) | 22 | `npm install @recallnet/codecontext-pi` | pi steering extension for surfacing @context annotations during reads |
| 71 | [@baggiiiie/pi-context-status](https://www.npmjs.com/package/@baggiiiie/pi-context-status) | 0 | `npm install @baggiiiie/pi-context-status` | A pi package that shows current context-window usage in the status line or a custom footer. |
| 72 | [@capyup/pi-auto-compact](https://www.npmjs.com/package/@capyup/pi-auto-compact) | 0 | `npm install @capyup/pi-auto-compact` | Pre-turn auto-compaction for pi |
| 73 | [@diegopetrucci/pi-context-cap](https://www.npmjs.com/package/@diegopetrucci/pi-context-cap) | 0 | `npm install @diegopetrucci/pi-context-cap` | A pi extension that caps effective model context windows at 200k tokens for earlier auto-compaction. |
| 74 | [@mario-gc/pi-context7](https://www.npmjs.com/package/@mario-gc/pi-context7) | 0 | `npm install @mario-gc/pi-context7` | Context7 integration for pi coding agent — fetch up-to-date library documentation and code examples |
| 75 | [@oleg_tarasov/pi-compaction-fix](https://www.npmjs.com/package/@oleg_tarasov/pi-compaction-fix) | 0 | `npm install @oleg_tarasov/pi-compaction-fix` | Pi extension that waits for overflow auto-compaction retry before headless prompt completion. |
| 76 | [@taimoorchatha/pi-context-footer](https://www.npmjs.com/package/@taimoorchatha/pi-context-footer) | 0 | `npm install @taimoorchatha/pi-context-footer` | pi coding-agent extension: turn-by-turn context-usage readout in the footer (bar, %, tokens, delta, last event). |
| 77 | [@taimoorchatha/pi-context-pulse](https://www.npmjs.com/package/@taimoorchatha/pi-context-pulse) | 0 | `npm install @taimoorchatha/pi-context-pulse` | pi coding-agent extension: input-editor border pulses yellow → red as the context window fills up, like an FPS damage-v… |
| 78 | [pi-context-breadcrumbs](https://www.npmjs.com/package/pi-context-breadcrumbs) | 0 | `npm install pi-context-breadcrumbs` | Nested path-sensitive context loading for Pi coding agent. |
| 79 | [pi-context-tools](https://www.npmjs.com/package/pi-context-tools) | 0 | `npm install pi-context-tools` | A pi extension for compacting and inspecting agent context. |
| 80 | [pi-mono-context](https://www.npmjs.com/package/pi-mono-context) | 0 | `npm install pi-mono-context` | Pi extension that prints current context-window usage without adding the report to future LLM context |
| 81 | [pi-nano-context](https://www.npmjs.com/package/pi-nano-context) | 0 | `npm install pi-nano-context` | A tiny pi.dev extension. It replaces the default context meter with a compact segmented bar under the editor so you can… |
| 82 | [pi-quiet-tools](https://www.npmjs.com/package/pi-quiet-tools) | 0 | `npm install pi-quiet-tools` | Pi extension that automatically compacts large tool outputs before they enter the model context window, saving tokens w… |
| 83 | [trifecta-footer](https://www.npmjs.com/package/trifecta-footer) | 0 | `npm install trifecta-footer` | Never accidentally run Opus on a typo. Pi footer for model, thinking, and context. |

</details>

<a id="prompt"></a>
## 提示词管理
> 40 个包 · 总月下载量 30,451

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [glimpseui](https://www.npmjs.com/package/glimpseui) | 8,683 | `npm install glimpseui` | Native micro-UI for scripts and agents — cross-platform WebView windows with bidirectio… |
| 2 | [pi-prompt-template-model](https://www.npmjs.com/package/pi-prompt-template-model) | 5,775 | `npm install pi-prompt-template-model` | Prompt template model selector extension for pi coding agent |
| 3 | [pi-schedule-prompt](https://www.npmjs.com/package/pi-schedule-prompt) | 5,006 | `npm install pi-schedule-prompt` | Pi's Heartbeat - A pi extension for scheduling recurring and one-shot agent prompts wit… |
| 4 | [@ifi/oh-pi-prompts](https://www.npmjs.com/package/@ifi/oh-pi-prompts) | 1,755 | `npm install @ifi/oh-pi-prompts` | Prompt templates for pi: review, fix, explain, refactor, test, commit, and more. |
| 5 | [@guwidoe/pi-prompt-suggester](https://www.npmjs.com/package/@guwidoe/pi-prompt-suggester) | 1,157 | `npm install @guwidoe/pi-prompt-suggester` | Intent-aware next-prompt suggestion extension for pi |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 40 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [glimpseui](https://www.npmjs.com/package/glimpseui) | 8,683 | `npm install glimpseui` | Native micro-UI for scripts and agents — cross-platform WebView windows with bidirectional JSON communication |
| 2 | [pi-prompt-template-model](https://www.npmjs.com/package/pi-prompt-template-model) | 5,775 | `npm install pi-prompt-template-model` | Prompt template model selector extension for pi coding agent |
| 3 | [pi-schedule-prompt](https://www.npmjs.com/package/pi-schedule-prompt) | 5,006 | `npm install pi-schedule-prompt` | Pi's Heartbeat - A pi extension for scheduling recurring and one-shot agent prompts with cron-like functionality |
| 4 | [@ifi/oh-pi-prompts](https://www.npmjs.com/package/@ifi/oh-pi-prompts) | 1,755 | `npm install @ifi/oh-pi-prompts` | Prompt templates for pi: review, fix, explain, refactor, test, commit, and more. |
| 5 | [@guwidoe/pi-prompt-suggester](https://www.npmjs.com/package/@guwidoe/pi-prompt-suggester) | 1,157 | `npm install @guwidoe/pi-prompt-suggester` | Intent-aware next-prompt suggestion extension for pi |
| 6 | [@dkmnx/pi-clarify](https://www.npmjs.com/package/@dkmnx/pi-clarify) | 1,132 | `npm install @dkmnx/pi-clarify` | Prompt clarification extension for pi coding agent |
| 7 | [@vanillagreen/pi-questions](https://www.npmjs.com/package/@vanillagreen/pi-questions) | 772 | `npm install @vanillagreen/pi-questions` | Pi extension for structured multi-tab inline questions and bridge-driven replies. |
| 8 | [@vanillagreen/pi-caveman](https://www.npmjs.com/package/@vanillagreen/pi-caveman) | 637 | `npm install @vanillagreen/pi-caveman` | Native Pi caveman communication mode with session persistence, slash command control, status badge, and settings-manage… |
| 9 | [@xl0/show-sysprompt](https://www.npmjs.com/package/@xl0/show-sysprompt) | 614 | `npm install @xl0/show-sysprompt` | Tiny Pi extension that shows the rendered system prompt and active tool schemas at startup. |
| 10 | [@ryan_nookpi/pi-extension-cc-system-prompt](https://www.npmjs.com/package/@ryan_nookpi/pi-extension-cc-system-prompt) | 451 | `npm install @ryan_nookpi/pi-extension-cc-system-prompt` | Claude Code system prompt extension for pi. |
| 11 | [@jmcombs/pi-prompt-enhancer](https://www.npmjs.com/package/@jmcombs/pi-prompt-enhancer) | 409 | `npm install @jmcombs/pi-prompt-enhancer` | Codebase-aware prompt enhancer for the Pi coding agent — rewrites rough prompts into precise ones, with project tree, g… |
| 12 | [@vanillagreen/pi-prompt-stash](https://www.npmjs.com/package/@vanillagreen/pi-prompt-stash) | 403 | `npm install @vanillagreen/pi-prompt-stash` | Pi package for per-session prompt stash history with Alt+S stash/restore workflow. |
| 13 | [@danchamorro/pi-prompt-enhancer](https://www.npmjs.com/package/@danchamorro/pi-prompt-enhancer) | 361 | `npm install @danchamorro/pi-prompt-enhancer` | Enhance prompts to be clearer, more specific, and more actionable before sending |
| 14 | [pi-prompt-translate](https://www.npmjs.com/package/pi-prompt-translate) | 355 | `npm install pi-prompt-translate` | Translate user prompts to a configurable target language in the Pi coding agent |
| 15 | [pi-prompt-shelf](https://www.npmjs.com/package/pi-prompt-shelf) | 341 | `npm install pi-prompt-shelf` | Pi extension: stash prompts into a persistent shelf with keyboard shortcuts and interactive picker |
| 16 | [pi-prompt-composer](https://www.npmjs.com/package/pi-prompt-composer) | 290 | `npm install pi-prompt-composer` | Build multi-option slash commands from plain prompts — variable expansion, arg collection & interactive selectors for Pi |
| 17 | [@ctogg/pi-stash](https://www.npmjs.com/package/@ctogg/pi-stash) | 266 | `npm install @ctogg/pi-stash` | Git-style prompt stashing for pi — save what you're typing, clear the editor, and come back to it later. |
| 18 | [@agnishc/edb-append-system-prompt](https://www.npmjs.com/package/@agnishc/edb-append-system-prompt) | 215 | `npm install @agnishc/edb-append-system-prompt` | Pi extension: manage per-session system prompt snippets with add/delete UI |
| 19 | [@the-forge-flow/pi-rules](https://www.npmjs.com/package/@the-forge-flow/pi-rules) | 201 | `npm install @the-forge-flow/pi-rules` | PI extension that auto-loads path-scoped rule files from .pi/rules and .claude/rules |
| 20 | [@siddr/pi-prompt-thinking](https://www.npmjs.com/package/@siddr/pi-prompt-thinking) | 201 | `npm install @siddr/pi-prompt-thinking` | Per-prompt thinking level override extension for pi |
| 21 | [pi-prompt-save](https://www.npmjs.com/package/pi-prompt-save) | 187 | `npm install pi-prompt-save` | Save, restore, or copy prompts in pi |
| 22 | [pi-per-model-prompt](https://www.npmjs.com/package/pi-per-model-prompt) | 178 | `npm install pi-per-model-prompt` | Model-scoped system prompt correction layers for pi-coding-agent |
| 23 | [@lnittman/pi-prompts](https://www.npmjs.com/package/@lnittman/pi-prompts) | 146 | `npm install @lnittman/pi-prompts` | Shared system-prompt scaffolding for pi-coding-agent forks — date/time injection, context files, skills block, standard… |
| 24 | [pi-promptsmith](https://www.npmjs.com/package/pi-promptsmith) | 138 | `npm install pi-promptsmith` | Intent-aware prompt rewriter and execution-contract compiler for Pi |
| 25 | [@lukemelnik/pi-model-prompt](https://www.npmjs.com/package/@lukemelnik/pi-model-prompt) | 135 | `npm install @lukemelnik/pi-model-prompt` | A Pi extension for global per-model prompt addenda and model prompt tools. |
| 26 | [pi-prompt-autoresearch](https://www.npmjs.com/package/pi-prompt-autoresearch) | 104 | `npm install pi-prompt-autoresearch` | A pi extension that iteratively improves prompts with execution-based evaluation and keep/discard decisions. |
| 27 | [pi-system-prompt](https://www.npmjs.com/package/pi-system-prompt) | 103 | `npm install pi-system-prompt` | Display the full pi coding agent system prompt with injected tools, guidelines, context files, and skills in a scrollab… |
| 28 | [@dxvapor/pi-prompt-enhancer](https://www.npmjs.com/package/@dxvapor/pi-prompt-enhancer) | 83 | `npm install @dxvapor/pi-prompt-enhancer` | Prompt enhancer with comparison popup, version history, searchable model picker, and quick-enhance mode |
| 29 | [pi-repoprompt-tools-lock](https://www.npmjs.com/package/pi-repoprompt-tools-lock) | 66 | `npm install pi-repoprompt-tools-lock` | Forces the agent to use RepoPrompt tools during repo-scoped work by disabling Pi's native tools when RepoPrompt tools a… |
| 30 | [pi-repoprompt-cli](https://www.npmjs.com/package/pi-repoprompt-cli) | 63 | `npm install pi-repoprompt-cli` | Integrates RepoPrompt with Pi via RepoPrompt's `rp-cli` executable |
| 31 | [@ifiokjr/oh-pi-prompts](https://www.npmjs.com/package/@ifiokjr/oh-pi-prompts) | 57 | `npm install @ifiokjr/oh-pi-prompts` | Prompt templates for pi: review, fix, explain, refactor, test, commit, and more. |
| 32 | [@artale/pi-agent](https://www.npmjs.com/package/@artale/pi-agent) | 54 | `npm install @artale/pi-agent` | Agentic engineering toolkit. Token estimation, cost, patterns, templates. |
| 33 | [pi-meta-prompt](https://www.npmjs.com/package/pi-meta-prompt) | 33 | `npm install pi-meta-prompt` | Pi extension that rewrites task descriptions into optimized prompts using customizable meta-prompts |
| 34 | [pi-prompt-stash](https://www.npmjs.com/package/pi-prompt-stash) | 27 | `npm install pi-prompt-stash` | Git-stash for your train of thought — save prompt drafts with ctrl+s, restore with ctrl+shift+s |
| 35 | [pi-model-sysprompt-appendix](https://www.npmjs.com/package/pi-model-sysprompt-appendix) | 20 | `npm install pi-model-sysprompt-appendix` | Append model-specific content to Pi system prompt before Project Context |
| 36 | [shitty-prompt](https://www.npmjs.com/package/shitty-prompt) | 19 | `npm install shitty-prompt` | 💩 Submit your hilariously broken prompts to shitty-prompt — pi coding agent extension |
| 37 | [@jasonish/pi-prompt-history](https://www.npmjs.com/package/@jasonish/pi-prompt-history) | 14 | `npm install @jasonish/pi-prompt-history` | Pi extension: search user prompt history across all sessions with Ctrl+Alt+R |
| 38 | [pi-git-things](https://www.npmjs.com/package/pi-git-things) | 0 | `npm install pi-git-things` | Pi prompt templates for proposing commit messages and pull request descriptions. |
| 39 | [pi-prompt-reviewer](https://www.npmjs.com/package/pi-prompt-reviewer) | 0 | `npm install pi-prompt-reviewer` | Review prompts before sending them to the main pi session. |
| 40 | [pi-sticky-prompt](https://www.npmjs.com/package/pi-sticky-prompt) | 0 | `npm install pi-sticky-prompt` | Always-on-top, full-width macOS prompt bar for pi. A floating native window that survives terminal scrollback and lets… |

</details>

<a id="integration"></a>
## 外部集成
> 24 个包 · 总月下载量 24,724

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [whatsapp-pi](https://www.npmjs.com/package/whatsapp-pi) | 5,802 | `npm install whatsapp-pi` | WhatsApp integration extension for Pi |
| 2 | [@feniix/pi-notion](https://www.npmjs.com/package/@feniix/pi-notion) | 4,872 | `npm install @feniix/pi-notion` | Notion API extension for pi — read, search, and manage Notion pages, databases, and con… |
| 3 | [@llblab/pi-telegram](https://www.npmjs.com/package/@llblab/pi-telegram) | 4,712 | `npm install @llblab/pi-telegram` | Telegram Runtime Adapter for π |
| 4 | [pi-convex](https://www.npmjs.com/package/pi-convex) | 4,573 | `npm install pi-convex` | Pi extension for Convex Cloud - queries, mutations, project management, and best practi… |
| 5 | [@venthezone/picord](https://www.npmjs.com/package/@venthezone/picord) | 1,399 | `npm install @venthezone/picord` | Discord integration extension for pi that maps project channels to workspaces and threa… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 24 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [whatsapp-pi](https://www.npmjs.com/package/whatsapp-pi) | 5,802 | `npm install whatsapp-pi` | WhatsApp integration extension for Pi |
| 2 | [@feniix/pi-notion](https://www.npmjs.com/package/@feniix/pi-notion) | 4,872 | `npm install @feniix/pi-notion` | Notion API extension for pi — read, search, and manage Notion pages, databases, and content |
| 3 | [@llblab/pi-telegram](https://www.npmjs.com/package/@llblab/pi-telegram) | 4,712 | `npm install @llblab/pi-telegram` | Telegram Runtime Adapter for π |
| 4 | [pi-convex](https://www.npmjs.com/package/pi-convex) | 4,573 | `npm install pi-convex` | Pi extension for Convex Cloud - queries, mutations, project management, and best practices validation |
| 5 | [@venthezone/picord](https://www.npmjs.com/package/@venthezone/picord) | 1,399 | `npm install @venthezone/picord` | Discord integration extension for pi that maps project channels to workspaces and threads to native pi sessions. |
| 6 | [pi-1password](https://www.npmjs.com/package/pi-1password) | 1,382 | `npm install pi-1password` | 1Password Pi coding agent secret management |
| 7 | [piscord](https://www.npmjs.com/package/piscord) | 290 | `npm install piscord` | Lightweight Discord gateway for pi coding agent |
| 8 | [@artale/pi-telegram](https://www.npmjs.com/package/@artale/pi-telegram) | 268 | `npm install @artale/pi-telegram` | Control Pi from Telegram. Run commands, check status, get notifications remotely. |
| 9 | [pi-messenger-bridge](https://www.npmjs.com/package/pi-messenger-bridge) | 262 | `npm install pi-messenger-bridge` | Bridge common messengers (Telegram, WhatsApp, Slack, Discord, Matrix) into pi |
| 10 | [pi-discord-activity](https://www.npmjs.com/package/pi-discord-activity) | 249 | `npm install pi-discord-activity` | Discord activity extension and helper for the Pi coding agent. |
| 11 | [pi-secure-env-collect](https://www.npmjs.com/package/pi-secure-env-collect) | 246 | `npm install pi-secure-env-collect` | Secure env var collection tool for Pi with masked input and destination writers |
| 12 | [pi-telebridge](https://www.npmjs.com/package/pi-telebridge) | 216 | `npm install pi-telebridge` | A pi extension that creates a two-way relay between your active pi coding agent session and a Telegram bot. |
| 13 | [@artale/pi-bux](https://www.npmjs.com/package/@artale/pi-bux) | 175 | `npm install @artale/pi-bux` | 24/7 Pi or Hermes agent on a VPS. Run your agent continuously, control via Telegram, browse the web. |
| 14 | [@samfp/pi-telegram-bot](https://www.npmjs.com/package/@samfp/pi-telegram-bot) | 93 | `npm install @samfp/pi-telegram-bot` | Telegram bot exposing pi as a conversational coding agent. Chat with pi in Telegram with streaming responses, tool exec… |
| 15 | [@artale/pi-discord](https://www.npmjs.com/package/@artale/pi-discord) | 79 | `npm install @artale/pi-discord` | Discord integration |
| 16 | [pi-notion](https://www.npmjs.com/package/pi-notion) | 46 | `npm install pi-notion` | Notion integration for Pi Coding Agent — search, fetch, create, and update Notion pages as Markdown with a TUI config e… |
| 17 | [@brain0pia/pi-notify](https://www.npmjs.com/package/@brain0pia/pi-notify) | 33 | `npm install @brain0pia/pi-notify` | Pi package that sends Telegram notifications after each completed agent response. |
| 18 | [@shuyhere/pi-discord-bot](https://www.npmjs.com/package/@shuyhere/pi-discord-bot) | 27 | `npm install @shuyhere/pi-discord-bot` | A small Discord harness built around Pi primitives. |
| 19 | [@artyomspace/pi-telegram-connect](https://www.npmjs.com/package/@artyomspace/pi-telegram-connect) | 0 | `npm install @artyomspace/pi-telegram-connect` | Telegram bridge for the Pi coding agent: pair once, then chat with your local pi-CLI agent from your phone. |
| 20 | [pi-discord-presence](https://www.npmjs.com/package/pi-discord-presence) | 0 | `npm install pi-discord-presence` | Discord Rich Presence extension for pi coding agent. |
| 21 | [pi-discord-remote](https://www.npmjs.com/package/pi-discord-remote) | 0 | `npm install pi-discord-remote` | Control your Pi coding-agent session from Discord — each session gets its own auto-created channel |
| 22 | [pi-kapso-whatsapp](https://www.npmjs.com/package/pi-kapso-whatsapp) | 0 | `npm install pi-kapso-whatsapp` | Pi extension for WhatsApp via Kapso AI — contacts access control with SQLite |
| 23 | [pi-telegram-group-topic](https://www.npmjs.com/package/pi-telegram-group-topic) | 0 | `npm install pi-telegram-group-topic` | Control multiple pi sessions from Telegram forum topics |
| 24 | [telegram-pi](https://www.npmjs.com/package/telegram-pi) | 0 | `npm install telegram-pi` | Telegram Bot integration for Pi Coding Agent |

</details>

<a id="meta"></a>
## 元包/管理工具
> 13 个包 · 总月下载量 18,568

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-depo](https://www.npmjs.com/package/pi-depo) | 5,347 | `npm install pi-depo` | Declarative package manager for Pi Coding Agent - skills, extensions, hooks, MCP servers |
| 2 | [@pi-unipi/core](https://www.npmjs.com/package/@pi-unipi/core) | 3,445 | `npm install @pi-unipi/core` | Shared utilities, event types, and constants for Unipi extension suite |
| 3 | [@pi-unipi/unipi](https://www.npmjs.com/package/@pi-unipi/unipi) | 1,774 | `npm install @pi-unipi/unipi` | All-in-one extension suite for Pi coding agent |
| 4 | [@pi-unipi/ask-user](https://www.npmjs.com/package/@pi-unipi/ask-user) | 1,341 | `npm install @pi-unipi/ask-user` | Structured user input tool for Pi coding agent — single-select, multi-select, freeform |
| 5 | [@pi-unipi/btw](https://www.npmjs.com/package/@pi-unipi/btw) | 1,329 | `npm install @pi-unipi/btw` | A pi extension for parallel side conversations with /btw — part of the Unipi suite |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 13 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-depo](https://www.npmjs.com/package/pi-depo) | 5,347 | `npm install pi-depo` | Declarative package manager for Pi Coding Agent - skills, extensions, hooks, MCP servers |
| 2 | [@pi-unipi/core](https://www.npmjs.com/package/@pi-unipi/core) | 3,445 | `npm install @pi-unipi/core` | Shared utilities, event types, and constants for Unipi extension suite |
| 3 | [@pi-unipi/unipi](https://www.npmjs.com/package/@pi-unipi/unipi) | 1,774 | `npm install @pi-unipi/unipi` | All-in-one extension suite for Pi coding agent |
| 4 | [@pi-unipi/ask-user](https://www.npmjs.com/package/@pi-unipi/ask-user) | 1,341 | `npm install @pi-unipi/ask-user` | Structured user input tool for Pi coding agent — single-select, multi-select, freeform |
| 5 | [@pi-unipi/btw](https://www.npmjs.com/package/@pi-unipi/btw) | 1,329 | `npm install @pi-unipi/btw` | A pi extension for parallel side conversations with /btw — part of the Unipi suite |
| 6 | [@pi-unipi/ralph](https://www.npmjs.com/package/@pi-unipi/ralph) | 1,286 | `npm install @pi-unipi/ralph` | Long-running iterative development loops for Pi coding agent |
| 7 | [@pi-unipi/utility](https://www.npmjs.com/package/@pi-unipi/utility) | 1,110 | `npm install @pi-unipi/utility` | Utility commands and tools for Pi coding agent — lifecycle, diagnostics, cache, analytics, display, batch execution |
| 8 | [@pi-unipi/command-enchantment](https://www.npmjs.com/package/@pi-unipi/command-enchantment) | 1,092 | `npm install @pi-unipi/command-enchantment` | Enhanced TUI autocomplete for /unipi:* commands — colored, sorted, and grouped by package |
| 9 | [@pi-unipi/milestone](https://www.npmjs.com/package/@pi-unipi/milestone) | 961 | `npm install @pi-unipi/milestone` | Lifecycle layer for project-level goals — MILESTONES.md tracking, session hooks, auto-sync |
| 10 | [lazy-pi](https://www.npmjs.com/package/lazy-pi) | 449 | `npm install lazy-pi` | You love LazyVim. You're gonna love LazyPi. |
| 11 | [@pi-unipi/input-shortcuts](https://www.npmjs.com/package/@pi-unipi/input-shortcuts) | 222 | `npm install @pi-unipi/input-shortcuts` | Keyboard shortcuts for stash/restore, undo/redo, clipboard, and thinking toggle — chord-based overlay system |
| 12 | [@pi-unipi/updater](https://www.npmjs.com/package/@pi-unipi/updater) | 212 | `npm install @pi-unipi/updater` | Auto-updater, changelog browser, and readme browser for Unipi — checks npm registry, renders CHANGELOG.md and README.md… |
| 13 | [@vtstech/pi-tgz-installer](https://www.npmjs.com/package/@vtstech/pi-tgz-installer) | 0 | `npm install @vtstech/pi-tgz-installer` | Pi extension that adds /tgz-install command for installing Pi packages from .tgz URLs or local files |

</details>

<a id="markdownpreview"></a>
## Markdown 预览
> 12 个包 · 总月下载量 17,738

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-markdown-preview](https://www.npmjs.com/package/pi-markdown-preview) | 12,052 | `npm install pi-markdown-preview` | Rendered markdown + LaTeX preview for pi, with terminal, browser, and PDF output |
| 2 | [@curl.md/pi](https://www.npmjs.com/package/@curl.md/pi) | 2,326 | `npm install @curl.md/pi` | URL to markdown for Pi |
| 3 | [pi-todo-md](https://www.npmjs.com/package/pi-todo-md) | 772 | `npm install pi-todo-md` | A shareable pi extension for managing a repo-local TODO.md file. |
| 4 | [pi-image-tools](https://www.npmjs.com/package/pi-image-tools) | 749 | `npm install pi-image-tools` | Image attachment and rendering extension for Pi TUI |
| 5 | [@codingcoffee/pi-websearch-crawl4ai](https://www.npmjs.com/package/@codingcoffee/pi-websearch-crawl4ai) | 676 | `npm install @codingcoffee/pi-websearch-crawl4ai` | a pi extension to let your LLM crawl & see the web |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 12 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-markdown-preview](https://www.npmjs.com/package/pi-markdown-preview) | 12,052 | `npm install pi-markdown-preview` | Rendered markdown + LaTeX preview for pi, with terminal, browser, and PDF output |
| 2 | [@curl.md/pi](https://www.npmjs.com/package/@curl.md/pi) | 2,326 | `npm install @curl.md/pi` | URL to markdown for Pi |
| 3 | [pi-todo-md](https://www.npmjs.com/package/pi-todo-md) | 772 | `npm install pi-todo-md` | A shareable pi extension for managing a repo-local TODO.md file. |
| 4 | [pi-image-tools](https://www.npmjs.com/package/pi-image-tools) | 749 | `npm install pi-image-tools` | Image attachment and rendering extension for Pi TUI |
| 5 | [@codingcoffee/pi-websearch-crawl4ai](https://www.npmjs.com/package/@codingcoffee/pi-websearch-crawl4ai) | 676 | `npm install @codingcoffee/pi-websearch-crawl4ai` | a pi extension to let your LLM crawl & see the web |
| 6 | [@dmallory42/pi-read-url](https://www.npmjs.com/package/@dmallory42/pi-read-url) | 377 | `npm install @dmallory42/pi-read-url` | Pi extension for extracting public HTML page URLs into clean markdown via system curl. |
| 7 | [pi-image-preview](https://www.npmjs.com/package/pi-image-preview) | 300 | `npm install pi-image-preview` | Image preview extension for pi coding agent — renders inline image thumbnails above the editor using kitty graphics pro… |
| 8 | [@justestif/wiki-agent](https://www.npmjs.com/package/@justestif/wiki-agent) | 270 | `npm install @justestif/wiki-agent` | AI-powered personal wiki with agent hooks for Pi, Claude Code, Cursor, and OpenCode |
| 9 | [@justestif/nb-agent](https://www.npmjs.com/package/@justestif/nb-agent) | 144 | `npm install @justestif/nb-agent` | nb-native personal wiki plugin with agent-powered ask and distill commands |
| 10 | [pi-confluence](https://www.npmjs.com/package/pi-confluence) | 45 | `npm install pi-confluence` | Confluence integration for Pi Coding Agent — search, fetch, and save Confluence pages as Markdown with a TUI config edi… |
| 11 | [@jademind/pi-visual](https://www.npmjs.com/package/@jademind/pi-visual) | 27 | `npm install @jademind/pi-visual` | Advanced visualization extension for Pi sessions with rich markdown, Mermaid, and chart rendering. |
| 12 | [pi-side-preview](https://www.npmjs.com/package/pi-side-preview) | 0 | `npm install pi-side-preview` | Right-side file and image preview extension for pi. |

</details>

<a id="agentmode"></a>
## 代理自主模式
> 14 个包 · 总月下载量 17,556

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-caveman](https://www.npmjs.com/package/pi-caveman) | 2,357 | `npm install pi-caveman` | Why use many token when few do trick. Caveman mode for pi — cuts ~75% output tokens whi… |
| 2 | [pi-boomerang](https://www.npmjs.com/package/pi-boomerang) | 1,582 | `npm install pi-boomerang` | Token-efficient autonomous task execution with context collapse |
| 3 | [@tmustier/pi-ralph-wiggum](https://www.npmjs.com/package/@tmustier/pi-ralph-wiggum) | 6,130 | `npm install @tmustier/pi-ralph-wiggum` | Long-running agent loops for iterative development in Pi. |
| 4 | [@lnilluv/pi-ralph-loop](https://www.npmjs.com/package/@lnilluv/pi-ralph-loop) | 3,040 | `npm install @lnilluv/pi-ralph-loop` | Pi-native ralph loop — autonomous coding iterations with mid-turn supervision |
| 5 | [pi-agent-mode](https://www.npmjs.com/package/pi-agent-mode) | 1,484 | `npm install pi-agent-mode` | OpenCode-style default agent mode for PI. Markdown agents with YAML frontmatter. Ctrl+S… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 14 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-caveman](https://www.npmjs.com/package/pi-caveman) | 2,357 | `npm install pi-caveman` | Why use many token when few do trick. Caveman mode for pi — cuts ~75% output tokens while keeping full technical accura… |
| 2 | [pi-boomerang](https://www.npmjs.com/package/pi-boomerang) | 1,582 | `npm install pi-boomerang` | Token-efficient autonomous task execution with context collapse |
| 3 | [@tmustier/pi-ralph-wiggum](https://www.npmjs.com/package/@tmustier/pi-ralph-wiggum) | 6,130 | `npm install @tmustier/pi-ralph-wiggum` | Long-running agent loops for iterative development in Pi. |
| 4 | [@lnilluv/pi-ralph-loop](https://www.npmjs.com/package/@lnilluv/pi-ralph-loop) | 3,040 | `npm install @lnilluv/pi-ralph-loop` | Pi-native ralph loop — autonomous coding iterations with mid-turn supervision |
| 5 | [pi-agent-mode](https://www.npmjs.com/package/pi-agent-mode) | 1,484 | `npm install pi-agent-mode` | OpenCode-style default agent mode for PI. Markdown agents with YAML frontmatter. Ctrl+Shift+M to cycle, Alt+S to search… |
| 6 | [pi-autoresearch](https://www.npmjs.com/package/pi-autoresearch) | 1,451 | `npm install pi-autoresearch` | Autonomous experiment loop for pi — run, measure, keep or discard. Inspired by karpathy/autoresearch. |
| 7 | [@rahulmutt/pi-ralph](https://www.npmjs.com/package/@rahulmutt/pi-ralph) | 646 | `npm install @rahulmutt/pi-ralph` | Pi extension that adds the /ralph command — a Ralph Wiggum loop that runs a prompt file over multiple fresh sessions |
| 8 | [@tomooshi/caveman-milk-pi](https://www.npmjs.com/package/@tomooshi/caveman-milk-pi) | 239 | `npm install @tomooshi/caveman-milk-pi` | pi extension that injects caveman terseness rules into the system prompt. Cache-safe, opt-in, plays nicely with condens… |
| 9 | [caveman-pi](https://www.npmjs.com/package/caveman-pi) | 172 | `npm install caveman-pi` | Caveman mode for pi — terse, no-fluff LLM responses with a /caveman toggle |
| 10 | [@manojlds/ralphi](https://www.npmjs.com/package/@manojlds/ralphi) | 159 | `npm install @manojlds/ralphi` | Pi-native ralph extension with skill commands and fresh-context loop sessions. |
| 11 | [pi-caveman-mode](https://www.npmjs.com/package/pi-caveman-mode) | 157 | `npm install pi-caveman-mode` | Caveman Mode extension for pi. Makes assistant responses terse and blunt. |
| 12 | [@fgladisch/pi-caveman](https://www.npmjs.com/package/@fgladisch/pi-caveman) | 74 | `npm install @fgladisch/pi-caveman` | Always-on caveman mode extension for Pi |
| 13 | [pi-ralph](https://www.npmjs.com/package/pi-ralph) | 65 | `npm install pi-ralph` | Hat-based multi-agent orchestration loops for pi. Keeps the agent iterating through specialized roles (Planner, Builder… |
| 14 | [pi-gods](https://www.npmjs.com/package/pi-gods) | 0 | `npm install pi-gods` | Pantheon SDD Agent System — fully autonomous multi-agent pipeline with tool boundary enforcement, file-based handoff, a… |

</details>

<a id="provider"></a>
## 模型供应商
> 60 个包 · 总月下载量 17,267

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-provider-kimi-code](https://www.npmjs.com/package/pi-provider-kimi-code) | 1,392 | `npm install pi-provider-kimi-code` | Pi extension for Kimi Code — reuse your Kimi Code Plan in pi-coding-agent (K2.6, K2.5) |
| 2 | [@ramarivera/pi-ts-aperture-provider](https://www.npmjs.com/package/@ramarivera/pi-ts-aperture-provider) | 1,085 | `npm install @ramarivera/pi-ts-aperture-provider` | Config-driven aperture provider extraction for Pi-compatible extensions. |
| 3 | [@sinamtz/pi-minimax-provider](https://www.npmjs.com/package/@sinamtz/pi-minimax-provider) | 916 | `npm install @sinamtz/pi-minimax-provider` | Pi coding agent provider for MiniMax AI - supports MiniMax M2 series models with Anthro… |
| 4 | [pi-cursor-provider](https://www.npmjs.com/package/pi-cursor-provider) | 912 | `npm install pi-cursor-provider` | Pi extension providing access to Cursor models via OAuth and a local OpenAI-compatible… |
| 5 | [pi-venice](https://www.npmjs.com/package/pi-venice) | 690 | `npm install pi-venice` | Pi Coding Agent extension for using Venice.ai as provider, access to ANY and ALL models… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 60 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-provider-kimi-code](https://www.npmjs.com/package/pi-provider-kimi-code) | 1,392 | `npm install pi-provider-kimi-code` | Pi extension for Kimi Code — reuse your Kimi Code Plan in pi-coding-agent (K2.6, K2.5) |
| 2 | [@ramarivera/pi-ts-aperture-provider](https://www.npmjs.com/package/@ramarivera/pi-ts-aperture-provider) | 1,085 | `npm install @ramarivera/pi-ts-aperture-provider` | Config-driven aperture provider extraction for Pi-compatible extensions. |
| 3 | [@sinamtz/pi-minimax-provider](https://www.npmjs.com/package/@sinamtz/pi-minimax-provider) | 916 | `npm install @sinamtz/pi-minimax-provider` | Pi coding agent provider for MiniMax AI - supports MiniMax M2 series models with Anthropic API compatibility |
| 4 | [pi-cursor-provider](https://www.npmjs.com/package/pi-cursor-provider) | 912 | `npm install pi-cursor-provider` | Pi extension providing access to Cursor models via OAuth and a local OpenAI-compatible gRPC proxy |
| 5 | [pi-venice](https://www.npmjs.com/package/pi-venice) | 690 | `npm install pi-venice` | Pi Coding Agent extension for using Venice.ai as provider, access to ANY and ALL models under the Sun |
| 6 | [pi-xiaomi-mimo-provider](https://www.npmjs.com/package/pi-xiaomi-mimo-provider) | 656 | `npm install pi-xiaomi-mimo-provider` | Xiaomi Mimo provider extension for pi coding agent — registers mimo-v2-pro, mimo-v2-omni, and mimo-v2-tts models |
| 7 | [pi-provider-vertex-anthropic](https://www.npmjs.com/package/pi-provider-vertex-anthropic) | 603 | `npm install pi-provider-vertex-anthropic` | Pi agent extension for Claude models via Google Cloud Vertex AI |
| 8 | [pi-opinionated-mimo](https://www.npmjs.com/package/pi-opinionated-mimo) | 599 | `npm install pi-opinionated-mimo` | Provider-only Pi package that registers the single MiMo model used by pi-excalibur. |
| 9 | [pi-provider-umans](https://www.npmjs.com/package/pi-provider-umans) | 548 | `npm install pi-provider-umans` | Umans.ai provider for pi — OpenAI-compatible endpoint with dynamic model discovery |
| 10 | [pi-zai-glm](https://www.npmjs.com/package/pi-zai-glm) | 530 | `npm install pi-zai-glm` | Extra LLM providers for pi (Z.ai GLM). |
| 11 | [pi-opinionated-glm](https://www.npmjs.com/package/pi-opinionated-glm) | 439 | `npm install pi-opinionated-glm` | Provider-only Pi package that registers a dedicated glm provider backed by OpenCode Zen. |
| 12 | [pi-provider-cc-sdk](https://www.npmjs.com/package/pi-provider-cc-sdk) | 423 | `npm install pi-provider-cc-sdk` | Use your Claude subscription with pi using their official Claude Code SDK. |
| 13 | [pi-opinionated-zenmux](https://www.npmjs.com/package/pi-opinionated-zenmux) | 413 | `npm install pi-opinionated-zenmux` | Provider-only Pi package that registers the curated ZenMux model set used by pi-excalibur. |
| 14 | [@opperai/pi-provider](https://www.npmjs.com/package/@opperai/pi-provider) | 385 | `npm install @opperai/pi-provider` | Opper AI gateway provider and tools for the pi coding agent |
| 15 | [@lesetong/pi-mimo](https://www.npmjs.com/package/@lesetong/pi-mimo) | 384 | `npm install @lesetong/pi-mimo` | Pi extension for Xiaomi MiMo AI models with multi-region & auth.json support |
| 16 | [pi-fireworks](https://www.npmjs.com/package/pi-fireworks) | 384 | `npm install pi-fireworks` | Fireworks AI provider extension package for pi |
| 17 | [@akepka/pi-cursor-cli-provider](https://www.npmjs.com/package/@akepka/pi-cursor-cli-provider) | 352 | `npm install @akepka/pi-cursor-cli-provider` | Cursor CLI provider extension for Pi |
| 18 | [@benvargas/pi-synthetic-provider](https://www.npmjs.com/package/@benvargas/pi-synthetic-provider) | 344 | `npm install @benvargas/pi-synthetic-provider` | Synthetic (synthetic.new) model provider for pi - Dynamic model fetching with reasoning, vision, and tools support |
| 19 | [pi-mimo-provider](https://www.npmjs.com/package/pi-mimo-provider) | 331 | `npm install pi-mimo-provider` | Xiaomi MiMo LLM provider extension for pi coding agent |
| 20 | [pi-opencode-provider](https://www.npmjs.com/package/pi-opencode-provider) | 321 | `npm install pi-opencode-provider` | A pi provider extension that adds OpenCode Zen & OpenCode Go support. |
| 21 | [@netandreus/pi-cursor-provider](https://www.npmjs.com/package/@netandreus/pi-cursor-provider) | 301 | `npm install @netandreus/pi-cursor-provider` | Pi Coding Agent custom provider that routes requests through the Cursor Agent CLI — use your Cursor subscription models… |
| 22 | [pi-provider-utils](https://www.npmjs.com/package/pi-provider-utils) | 292 | `npm install pi-provider-utils` | Shared provider mirror, stream, and agent-path helpers for Pi extension packages |
| 23 | [pi-provider-bedrock](https://www.npmjs.com/package/pi-provider-bedrock) | 291 | `npm install pi-provider-bedrock` | Bedrock provider for pi — routes to AWS Bedrock models via AWS profile auth |
| 24 | [pi-crofai](https://www.npmjs.com/package/pi-crofai) | 286 | `npm install pi-crofai` | CrofAI provider for Pi — self-contained, auto-discovers models, supports env var or /login paste |
| 25 | [@cirthan/pi-cirthan-provider](https://www.npmjs.com/package/@cirthan/pi-cirthan-provider) | 280 | `npm install @cirthan/pi-cirthan-provider` | Pi provider package for the Cirthan API. |
| 26 | [pi-mimo](https://www.npmjs.com/package/pi-mimo) | 264 | `npm install pi-mimo` | Pi extension for Xiaomi MiMo AI models provider |
| 27 | [pi-provider-tama](https://www.npmjs.com/package/pi-provider-tama) | 261 | `npm install pi-provider-tama` | Pi agent extension for tama local AI server auto-discovery and model configuration |
| 28 | [pi-multi-provider-manager](https://www.npmjs.com/package/pi-multi-provider-manager) | 242 | `npm install pi-multi-provider-manager` | Multi-account ChatGPT/Codex OAuth plus Fireworks and Z.ai API-key providers for pi. |
| 29 | [pi-provider-crofai](https://www.npmjs.com/package/pi-provider-crofai) | 239 | `npm install pi-provider-crofai` | CrofAI model provider extension for the pi coding agent. |
| 30 | [pi-models-dev-providers](https://www.npmjs.com/package/pi-models-dev-providers) | 239 | `npm install pi-models-dev-providers` | A pi-coding-agent extension to use model.dev providers |
| 31 | [@ifi/pi-provider-catalog](https://www.npmjs.com/package/@ifi/pi-provider-catalog) | 238 | `npm install @ifi/pi-provider-catalog` | Experimental multi-provider package for pi backed by the OpenCode models.dev catalog. |
| 32 | [@gnoviawan/pi-setup-providers](https://www.npmjs.com/package/@gnoviawan/pi-setup-providers) | 230 | `npm install @gnoviawan/pi-setup-providers` | Overlay wizard for custom providers and model setup. |
| 33 | [@zgltyq/pi-provider-kimi-code](https://www.npmjs.com/package/@zgltyq/pi-provider-kimi-code) | 220 | `npm install @zgltyq/pi-provider-kimi-code` | Kimi Code plan in pi-coding-agent — fork of pi-provider-kimi-code with bearer-auth fix for OAuth tokens |
| 34 | [@ifi/pi-provider-ollama](https://www.npmjs.com/package/@ifi/pi-provider-ollama) | 211 | `npm install @ifi/pi-provider-ollama` | Experimental Ollama provider for pi with local discovery and cloud login support. |
| 35 | [omp-openai-provider-tools](https://www.npmjs.com/package/omp-openai-provider-tools) | 211 | `npm install omp-openai-provider-tools` | Provider-native OpenAI Responses tools for OMP and Pi-family runtimes. |
| 36 | [@ifi/pi-provider-cursor](https://www.npmjs.com/package/@ifi/pi-provider-cursor) | 203 | `npm install @ifi/pi-provider-cursor` | Experimental Cursor provider for pi with OAuth login, model discovery, and direct AgentService streaming. |
| 37 | [@neuron-mr-white/pi-zenmux](https://www.npmjs.com/package/@neuron-mr-white/pi-zenmux) | 175 | `npm install @neuron-mr-white/pi-zenmux` | ZenMux provider extension for Pi — dynamic model discovery with caching |
| 38 | [@thesethrose/pi-zai-provider](https://www.npmjs.com/package/@thesethrose/pi-zai-provider) | 172 | `npm install @thesethrose/pi-zai-provider` | Z.AI (GLM models) provider extension for pi coding agent with API key authentication |
| 39 | [pi-provider-litellm](https://www.npmjs.com/package/pi-provider-litellm) | 159 | `npm install pi-provider-litellm` | LiteLLM proxy provider extension for pi-mono. |
| 40 | [pi-fallback-provider](https://www.npmjs.com/package/pi-fallback-provider) | 150 | `npm install pi-fallback-provider` | Model fallback chain extension for pi — automatic retry and failover across AI providers |
| 41 | [@royalrat-pack/pi-extension-nvidia-build-provider](https://www.npmjs.com/package/@royalrat-pack/pi-extension-nvidia-build-provider) | 146 | `npm install @royalrat-pack/pi-extension-nvidia-build-provider` | Pi extension that adds NVIDIA Build API models with /login support and /model integration. |
| 42 | [pi-ollama-cloud-provider](https://www.npmjs.com/package/pi-ollama-cloud-provider) | 146 | `npm install pi-ollama-cloud-provider` | Ollama Cloud provider extension for pi coding agent with dynamic model discovery |
| 43 | [@bergetai/pi-provider-berget](https://www.npmjs.com/package/@bergetai/pi-provider-berget) | 104 | `npm install @bergetai/pi-provider-berget` | Run [Berget AI](https://berget.ai) models inside [Pi](https://pi.dev). |
| 44 | [pi-setup-custom-providers](https://www.npmjs.com/package/pi-setup-custom-providers) | 104 | `npm install pi-setup-custom-providers` | Interactive wizard to manage custom LLM providers and models for pi coding agent |
| 45 | [pi-qwen-provider](https://www.npmjs.com/package/pi-qwen-provider) | 98 | `npm install pi-qwen-provider` | Qwen AI provider extension for Pi - OAuth authentication with qwen.ai |
| 46 | [@mcowger/pi-env-var-provider](https://www.npmjs.com/package/@mcowger/pi-env-var-provider) | 83 | `npm install @mcowger/pi-env-var-provider` | Pi extension: register a custom OpenAI-compatible provider from environment variables. Configure baseUrl, apiKey, and m… |
| 47 | [cli-pipe-provider](https://www.npmjs.com/package/cli-pipe-provider) | 51 | `npm install cli-pipe-provider` | pi-ai provider for CLI tools that speak the stream-json format, with MCP tool bridge support |
| 48 | [@thesethrose/pi-minimax-provider](https://www.npmjs.com/package/@thesethrose/pi-minimax-provider) | 45 | `npm install @thesethrose/pi-minimax-provider` | MiniMax provider extension for pi coding agent with correct OAuth token handling |
| 49 | [@sinamtz/pi-mlx-provider](https://www.npmjs.com/package/@sinamtz/pi-mlx-provider) | 37 | `npm install @sinamtz/pi-mlx-provider` | Pi coding agent provider for MLX local AI models on Apple Silicon |
| 50 | [@mrexodia/kilo-pi-provider](https://www.npmjs.com/package/@mrexodia/kilo-pi-provider) | 33 | `npm install @mrexodia/kilo-pi-provider` | Kilo provider extension for Pi. Access 300+ AI models through the Kilo Gateway. |
| 51 | [kimicodeprovider](https://www.npmjs.com/package/kimicodeprovider) | 29 | `npm install kimicodeprovider` | pi-coding-agent extension for Kimi/Moonshot API with configurable base URL |
| 52 | [qnaigc-llm-provider](https://www.npmjs.com/package/qnaigc-llm-provider) | 20 | `npm install qnaigc-llm-provider` | QNAIGC provider extension for pi-mono - Anthropic-compatible API for Chinese LLMs |
| 53 | [@bergetai/pi-provider](https://www.npmjs.com/package/@bergetai/pi-provider) | 0 | `npm install @bergetai/pi-provider` | Run [Berget AI](https://berget.ai) models inside [Pi](https://pi.dev). |
| 54 | [@jayteelabs/pi-nous-portal-provider](https://www.npmjs.com/package/@jayteelabs/pi-nous-portal-provider) | 0 | `npm install @jayteelabs/pi-nous-portal-provider` | Pi provider package for Nous Research Portal inference. |
| 55 | [@syedassadullahshah/pi-kilo-provider](https://www.npmjs.com/package/@syedassadullahshah/pi-kilo-provider) | 0 | `npm install @syedassadullahshah/pi-kilo-provider` | Kilo AI Gateway provider extension for Pi. |
| 56 | [@zackify/pi-sambanova](https://www.npmjs.com/package/@zackify/pi-sambanova) | 0 | `npm install @zackify/pi-sambanova` | A pi extension that adds SambaNova as an OpenAI-compatible model provider. |
| 57 | [@zackify/pi-wafer](https://www.npmjs.com/package/@zackify/pi-wafer) | 0 | `npm install @zackify/pi-wafer` | A pi extension that adds the Wafer Pass (wafer.ai) provider with paste-token OAuth and a footer that shows your live re… |
| 58 | [pi-commandcode-provider](https://www.npmjs.com/package/pi-commandcode-provider) | 0 | `npm install pi-commandcode-provider` | pi custom provider for Command Code API (commandcode.ai) |
| 59 | [pi-model-provider-native-prompting](https://www.npmjs.com/package/pi-model-provider-native-prompting) | 0 | `npm install pi-model-provider-native-prompting` | Provider-informed, harness-neutral native prompting guidance for Pi Coding Agent. |
| 60 | [pi-provider-quota](https://www.npmjs.com/package/pi-provider-quota) | 0 | `npm install pi-provider-quota` | Track Z.Ai, Kimi Code, Ollama Cloud, and DeepSeek quota in pi's status bar |

</details>

<a id="theme"></a>
## 主题美化
> 37 个包 · 总月下载量 13,769

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-studio](https://www.npmjs.com/package/pi-studio) | 5,873 | `npm install pi-studio` | Two-pane browser workspace for pi with prompt/response editing, annotations, critiques,… |
| 2 | [pi-terminal-theme](https://www.npmjs.com/package/pi-terminal-theme) | 1,106 | `npm install pi-terminal-theme` | Pi theme that maps UI colors to ANSI 0..15. |
| 3 | [@victor-software-house/pi-curated-themes](https://www.npmjs.com/package/@victor-software-house/pi-curated-themes) | 1,058 | `npm install @victor-software-house/pi-curated-themes` | Curated dark terminal themes for pi, adapted from iTerm2-Color-Schemes |
| 4 | [@open-hax/uxx](https://www.npmjs.com/package/@open-hax/uxx) | 929 | `npm install @open-hax/uxx` | Open Hax UI component library with React primitives, shared design tokens, reusable the… |
| 5 | [@m64/pi-remembra-theme](https://www.npmjs.com/package/@m64/pi-remembra-theme) | 596 | `npm install @m64/pi-remembra-theme` | A beautiful dark theme for pi coding agent inspired by the Remembra web interface, feat… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 37 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-studio](https://www.npmjs.com/package/pi-studio) | 5,873 | `npm install pi-studio` | Two-pane browser workspace for pi with prompt/response editing, annotations, critiques, prompt/response history, and li… |
| 2 | [pi-terminal-theme](https://www.npmjs.com/package/pi-terminal-theme) | 1,106 | `npm install pi-terminal-theme` | Pi theme that maps UI colors to ANSI 0..15. |
| 3 | [@victor-software-house/pi-curated-themes](https://www.npmjs.com/package/@victor-software-house/pi-curated-themes) | 1,058 | `npm install @victor-software-house/pi-curated-themes` | Curated dark terminal themes for pi, adapted from iTerm2-Color-Schemes |
| 4 | [@open-hax/uxx](https://www.npmjs.com/package/@open-hax/uxx) | 929 | `npm install @open-hax/uxx` | Open Hax UI component library with React primitives, shared design tokens, reusable themes, and color palettes. |
| 5 | [@m64/pi-remembra-theme](https://www.npmjs.com/package/@m64/pi-remembra-theme) | 596 | `npm install @m64/pi-remembra-theme` | A beautiful dark theme for pi coding agent inspired by the Remembra web interface, featuring sophisticated purple-blue… |
| 6 | [@spences10/pi-themes](https://www.npmjs.com/package/@spences10/pi-themes) | 563 | `npm install @spences10/pi-themes` | Bundled theme pack for Pi coding agent |
| 7 | [pi-cmux-theme-picker](https://www.npmjs.com/package/pi-cmux-theme-picker) | 508 | `npm install pi-cmux-theme-picker` | Live cmux terminal theme picker for Pi with synchronized pi + cmux theme switching and debounced preview. |
| 8 | [@ogulcancelik/pi-ghostty-theme-sync](https://www.npmjs.com/package/@ogulcancelik/pi-ghostty-theme-sync) | 449 | `npm install @ogulcancelik/pi-ghostty-theme-sync` | Sync pi theme with Ghostty terminal colors |
| 9 | [@sherif-fanous/pi-catppuccin](https://www.npmjs.com/package/@sherif-fanous/pi-catppuccin) | 280 | `npm install @sherif-fanous/pi-catppuccin` | Catppuccin themes for the Pi Coding Agent |
| 10 | [pi-theme-flexoki](https://www.npmjs.com/package/pi-theme-flexoki) | 200 | `npm install pi-theme-flexoki` | Flexoki theme for Pi coding agent - an inky color scheme for prose and code |
| 11 | [@eliemessiecode/pi-code-theme](https://www.npmjs.com/package/@eliemessiecode/pi-code-theme) | 178 | `npm install @eliemessiecode/pi-code-theme` | A warm, earthy dark theme for Pi coding agent with burnt orange and gold accents |
| 12 | [pi-dracula](https://www.npmjs.com/package/pi-dracula) | 146 | `npm install pi-dracula` | Dracula theme for the pi coding agent |
| 13 | [@aliou/pi-theme-jellybeans](https://www.npmjs.com/package/@aliou/pi-theme-jellybeans) | 137 | `npm install @aliou/pi-theme-jellybeans` | Jellybeans Mono themes for Pi in dark and light variants. |
| 14 | [pi-modus-themes](https://www.npmjs.com/package/pi-modus-themes) | 134 | `npm install pi-modus-themes` | Modus Operandi and Modus Vivendi themes for pi coding agent |
| 15 | [pi-kanagawa](https://www.npmjs.com/package/pi-kanagawa) | 118 | `npm install pi-kanagawa` | Kanagawa theme and UI extension for pi — wave animation, Kanagawa-colored footer, git branch widget, and thinking-level… |
| 16 | [pi-themes-rose-pine](https://www.npmjs.com/package/pi-themes-rose-pine) | 113 | `npm install pi-themes-rose-pine` | Rosé Pine themes for pi (main, moon, dawn) |
| 17 | [pi-opencode-theme](https://www.npmjs.com/package/pi-opencode-theme) | 112 | `npm install pi-opencode-theme` | An opencode-inspired theme for pi. |
| 18 | [pi-ssh](https://www.npmjs.com/package/pi-ssh) | 112 | `npm install pi-ssh` | pi extension for local-model plus remote SSH workspace tool execution |
| 19 | [pi-dex](https://www.npmjs.com/package/pi-dex) | 108 | `npm install pi-dex` | Pi, but with Codex's UI — or at least as far as I can go before forking it. |
| 20 | [pi-cursor-theme](https://www.npmjs.com/package/pi-cursor-theme) | 106 | `npm install pi-cursor-theme` | A Cursor-inspired dark theme for pi coding agent |
| 21 | [pi-tokyo-night-storm](https://www.npmjs.com/package/pi-tokyo-night-storm) | 102 | `npm install pi-tokyo-night-storm` | Tokyo Night Storm theme for pi coding agent |
| 22 | [@sherif-fanous/pi-dracula](https://www.npmjs.com/package/@sherif-fanous/pi-dracula) | 101 | `npm install @sherif-fanous/pi-dracula` | Dracula themes for the Pi Coding Agent |
| 23 | [@sherif-fanous/pi-atom-one](https://www.npmjs.com/package/@sherif-fanous/pi-atom-one) | 93 | `npm install @sherif-fanous/pi-atom-one` | Atom One themes for the Pi Coding Agent |
| 24 | [pi-system-theme](https://www.npmjs.com/package/pi-system-theme) | 92 | `npm install pi-system-theme` | Sync Pi theme with macOS light/dark appearance |
| 25 | [@tran-quil/pi-rose-pine](https://www.npmjs.com/package/@tran-quil/pi-rose-pine) | 91 | `npm install @tran-quil/pi-rose-pine` | All 3 Rosé Pine theme variants for Pi Coding Agent - All natural pine, faux fur and a bit of soho vibes for the classy… |
| 26 | [@javiportillo/pi-hackerman](https://www.npmjs.com/package/@javiportillo/pi-hackerman) | 90 | `npm install @javiportillo/pi-hackerman` | A neon hacker-style color theme for pi coding agent |
| 27 | [@thiago__ss/pi-agent-config](https://www.npmjs.com/package/@thiago__ss/pi-agent-config) | 90 | `npm install @thiago__ss/pi-agent-config` | Thiago's shareable Pi agent configuration |
| 28 | [pi-digital-rust-theme](https://www.npmjs.com/package/pi-digital-rust-theme) | 89 | `npm install pi-digital-rust-theme` | A warm, tech-dystopian color scheme for Pi, inspired by corrupted hardware and failing systems. |
| 29 | [pi-workstation](https://www.npmjs.com/package/pi-workstation) | 79 | `npm install pi-workstation` | Custom extensions and themes for pi coding agent. Music, Navi, knowledge graph, LLM council, git TUI, file browser, and… |
| 30 | [pi-theme-sync](https://www.npmjs.com/package/pi-theme-sync) | 46 | `npm install pi-theme-sync` | Sync Pi theme with terminal appearance — works locally and over SSH via OSC 11 terminal queries |
| 31 | [pi-peacock](https://www.npmjs.com/package/pi-peacock) | 30 | `npm install pi-peacock` | Peacock-style workspace coloring, repo badges, and terminal titles for pi coding agent |
| 32 | [@samfp/pi-rose-pine](https://www.npmjs.com/package/@samfp/pi-rose-pine) | 23 | `npm install @samfp/pi-rose-pine` | Rosé Pine theme for pi. Soho vibes for your coding agent. |
| 33 | [@mjakl/pi-dark-or-light](https://www.npmjs.com/package/@mjakl/pi-dark-or-light) | 17 | `npm install @mjakl/pi-dark-or-light` | Auto-switch pi between light and dark themes using hierarchical detection |
| 34 | [@artale/pi-canvas](https://www.npmjs.com/package/@artale/pi-canvas) | 0 | `npm install @artale/pi-canvas` | Visual art for your terminal. Hotline-inspired themes, neon effects, and ASCII aesthetics. |
| 35 | [@baretread/pi-forge](https://www.npmjs.com/package/@baretread/pi-forge) | 0 | `npm install @baretread/pi-forge` | Matte graphite, molten copper Forge theme and visual atmosphere for Pi. |
| 36 | [@wierdbytes/pi-tokyo-night](https://www.npmjs.com/package/@wierdbytes/pi-tokyo-night) | 0 | `npm install @wierdbytes/pi-tokyo-night` | Tokyo Night themes for the pi coding agent — folke's Night, Storm, Moon, and Day palettes mapped to all 51 pi color tok… |
| 37 | [pi-theme-synthwave-84](https://www.npmjs.com/package/pi-theme-synthwave-84) | 0 | `npm install pi-theme-synthwave-84` | Synthwave '84 theme for the Pi coding agent TUI. |

</details>

<a id="session"></a>
## 会话管理
> 40 个包 · 总月下载量 12,982

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@kaiserlich-dev/pi-session-search](https://www.npmjs.com/package/@kaiserlich-dev/pi-session-search) | 4,217 | `npm install @kaiserlich-dev/pi-session-search` | Full-text search across pi sessions with FTS5 index and overlay UI |
| 2 | [pi-session-search](https://www.npmjs.com/package/pi-session-search) | 1,244 | `npm install pi-session-search` | Index, summarize, and search past pi sessions. Covers both active and archived sessions… |
| 3 | [pi-edit-session-in-place](https://www.npmjs.com/package/pi-edit-session-in-place) | 1,221 | `npm install pi-edit-session-in-place` | pi extension that lets you re-edit or delete an earlier user message in the current ses… |
| 4 | [@vanillagreen/pi-session-manager](https://www.npmjs.com/package/@vanillagreen/pi-session-manager) | 743 | `npm install @vanillagreen/pi-session-manager` | Polished Pi session manager overlay for browsing, searching, resuming, renaming, and sa… |
| 5 | [pi-sessions](https://www.npmjs.com/package/pi-sessions) | 492 | `npm install pi-sessions` | Pi session search, ask, handoff, auto-titling, and indexing tools |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 40 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@kaiserlich-dev/pi-session-search](https://www.npmjs.com/package/@kaiserlich-dev/pi-session-search) | 4,217 | `npm install @kaiserlich-dev/pi-session-search` | Full-text search across pi sessions with FTS5 index and overlay UI |
| 2 | [pi-session-search](https://www.npmjs.com/package/pi-session-search) | 1,244 | `npm install pi-session-search` | Index, summarize, and search past pi sessions. Covers both active and archived sessions, enabling semantic search and i… |
| 3 | [pi-edit-session-in-place](https://www.npmjs.com/package/pi-edit-session-in-place) | 1,221 | `npm install pi-edit-session-in-place` | pi extension that lets you re-edit or delete an earlier user message in the current session branch |
| 4 | [@vanillagreen/pi-session-manager](https://www.npmjs.com/package/@vanillagreen/pi-session-manager) | 743 | `npm install @vanillagreen/pi-session-manager` | Polished Pi session manager overlay for browsing, searching, resuming, renaming, and safely deleting sessions. |
| 5 | [pi-sessions](https://www.npmjs.com/package/pi-sessions) | 492 | `npm install pi-sessions` | Pi session search, ask, handoff, auto-titling, and indexing tools |
| 6 | [@vanillagreen/pi-session-bridge](https://www.npmjs.com/package/@vanillagreen/pi-session-bridge) | 441 | `npm install @vanillagreen/pi-session-bridge` | Pi extension and CLI for controlling visible interactive Pi sessions over a structured Unix-socket side channel. |
| 7 | [@agnishc/edb-session-manager](https://www.npmjs.com/package/@agnishc/edb-session-manager) | 331 | `npm install @agnishc/edb-session-manager` | Pi extension: browse, resume, rename, and delete sessions with fuzzy search |
| 8 | [pi-fork-from-first](https://www.npmjs.com/package/pi-fork-from-first) | 314 | `npm install pi-fork-from-first` | Fork the current Pi session from its first user message and switch into the new fork immediately, with sensible default… |
| 9 | [@ogulcancelik/pi-session-recall](https://www.npmjs.com/package/@ogulcancelik/pi-session-recall) | 312 | `npm install @ogulcancelik/pi-session-recall` | Search and query past pi sessions. Recall previous conversations on demand. |
| 10 | [pi-session-switch](https://www.npmjs.com/package/pi-session-switch) | 293 | `npm install pi-session-switch` | Preview each session before switching in a mirror of Pi's native `/resume`-picker UI |
| 11 | [pi-openrouter-session](https://www.npmjs.com/package/pi-openrouter-session) | 286 | `npm install pi-openrouter-session` | OpenRouter session tracking for pi - adds session_id to API requests for OpenRouter console visibility |
| 12 | [pi-move-session](https://www.npmjs.com/package/pi-move-session) | 270 | `npm install pi-move-session` | Move a live Pi session to another working directory, including back to a repository's main worktree |
| 13 | [pi-resume-hint](https://www.npmjs.com/package/pi-resume-hint) | 248 | `npm install pi-resume-hint` | Pi extension that prints a quirky resume command for the current session when Pi exits. |
| 14 | [pi-session-title](https://www.npmjs.com/package/pi-session-title) | 247 | `npm install pi-session-title` | Session-title extension for pi-compatible runtimes, including oh-my-pi |
| 15 | [@tmustier/pi-session-recap](https://www.npmjs.com/package/@tmustier/pi-session-recap) | 241 | `npm install @tmustier/pi-session-recap` | One-line recap above the editor when you refocus a Pi session. Keeps you in flow when multi-agenting. |
| 16 | [pi-session-merge](https://www.npmjs.com/package/pi-session-merge) | 199 | `npm install pi-session-merge` | Pi Coding Agent Extension to import summarized context from another session. |
| 17 | [pi-session-manager](https://www.npmjs.com/package/pi-session-manager) | 188 | `npm install pi-session-manager` | Session browser for pi coding agent — browse, resume, rename, and delete sessions |
| 18 | [@odradekk/vera-session-tools](https://www.npmjs.com/package/@odradekk/vera-session-tools) | 185 | `npm install @odradekk/vera-session-tools` | Session lifecycle tools for Vera agent (ask-user, todo, output-guard, compaction, prompt-rules, system-time, diagnostic… |
| 19 | [@tmustier/pi-session-hud](https://www.npmjs.com/package/@tmustier/pi-session-hud) | 159 | `npm install @tmustier/pi-session-hud` | Persistent session HUD widget for Pi (below-editor bar with git/context/model/activity). |
| 20 | [pi-session-name](https://www.npmjs.com/package/pi-session-name) | 141 | `npm install pi-session-name` | pi extension package that auto-generates a concise session title from the first user prompt. |
| 21 | [pi-session-yank](https://www.npmjs.com/package/pi-session-yank) | 137 | `npm install pi-session-yank` | Pi extension that copies assistant/user message text or fenced code blocks from the current session branch to the clipb… |
| 22 | [@robhowley/pi-session-hygiene](https://www.npmjs.com/package/@robhowley/pi-session-hygiene) | 121 | `npm install @robhowley/pi-session-hygiene` | 暂无描述 |
| 23 | [@gnoviawan/pi-auto-session-name](https://www.npmjs.com/package/@gnoviawan/pi-auto-session-name) | 113 | `npm install @gnoviawan/pi-auto-session-name` | Automatically titles sessions using a custom name_session tool. |
| 24 | [@gnoviawan/pi-session-usage](https://www.npmjs.com/package/@gnoviawan/pi-session-usage) | 102 | `npm install @gnoviawan/pi-session-usage` | Tracks time usage, prompts, turns, and tool calls in a session. |
| 25 | [@gnoviawan/pi-session-delete](https://www.npmjs.com/package/@gnoviawan/pi-session-delete) | 99 | `npm install @gnoviawan/pi-session-delete` | Interactive session deletion command for Pi. |
| 26 | [pi-auto-rename](https://www.npmjs.com/package/pi-auto-rename) | 96 | `npm install pi-auto-rename` | Auto-rename pi sessions with AI via a single /rename command |
| 27 | [@lojacobs/pi-roles](https://www.npmjs.com/package/@lojacobs/pi-roles) | 76 | `npm install @lojacobs/pi-roles` | Role-based session configuration for pi coding agent. Launch a session as a named role and hot-swap roles mid-session,… |
| 28 | [@diegopetrucci/pi-confirm-destructive](https://www.npmjs.com/package/@diegopetrucci/pi-confirm-destructive) | 76 | `npm install @diegopetrucci/pi-confirm-destructive` | A pi extension that confirms destructive session actions. |
| 29 | [pi-session-auto-rename](https://www.npmjs.com/package/pi-session-auto-rename) | 67 | `npm install pi-session-auto-rename` | Automatically names pi sessions with AI, with configurable naming model |
| 30 | [@datspike/pi-fork-resume](https://www.npmjs.com/package/@datspike/pi-fork-resume) | 61 | `npm install @datspike/pi-fork-resume` | Pi extension that forks a session selected through the resume-style session picker without opening the source session. |
| 31 | [@lukemelnik/pi-session-recap](https://www.npmjs.com/package/@lukemelnik/pi-session-recap) | 61 | `npm install @lukemelnik/pi-session-recap` | A Pi extension that shows a one-line recap of what the current session has been about. |
| 32 | [pi-session-summary](https://www.npmjs.com/package/pi-session-summary) | 59 | `npm install pi-session-summary` | A pi extension that maintains an LLM-generated one-line session summary as the session name |
| 33 | [@agnishc/edb-auto-name-session](https://www.npmjs.com/package/@agnishc/edb-auto-name-session) | 54 | `npm install @agnishc/edb-auto-name-session` | Pi extension: replace Pi's first-message session label with a generated title |
| 34 | [pi-almanac](https://www.npmjs.com/package/pi-almanac) | 27 | `npm install pi-almanac` | Pi extension for exporting current session JSONL files for cross-machine resume workflows |
| 35 | [pi-chain](https://www.npmjs.com/package/pi-chain) | 21 | `npm install pi-chain` | Pi extension that starts a new session seeded with recent conversation messages |
| 36 | [pi-open-sessions-files-extension](https://www.npmjs.com/package/pi-open-sessions-files-extension) | 20 | `npm install pi-open-sessions-files-extension` | pi extension to fuzzy-pick and open files edited by the agent in the current session |
| 37 | [@fnnm/pi-session-breakdown](https://www.npmjs.com/package/@fnnm/pi-session-breakdown) | 20 | `npm install @fnnm/pi-session-breakdown` | Interactive TUI for Pi session analysis (usage, cost, models). |
| 38 | [pi-delete-session](https://www.npmjs.com/package/pi-delete-session) | 0 | `npm install pi-delete-session` | Powerful session deletion tool for Pi. Delete multiple sessions at once, grouped by project, with safety confirmations. |
| 39 | [pi-resume-on-exit](https://www.npmjs.com/package/pi-resume-on-exit) | 0 | `npm install pi-resume-on-exit` | Print a copyable Pi resume command when an interactive Pi session exits. |
| 40 | [pi-roles](https://www.npmjs.com/package/pi-roles) | 0 | `npm install pi-roles` | Role-based session configuration for pi coding agent. Launch a session as a named role and hot-swap roles mid-session,… |

</details>

<a id="costproxy"></a>
## 成本/代理管理
> 20 个包 · 总月下载量 11,384

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-antigravity-rotator](https://www.npmjs.com/package/pi-antigravity-rotator) | 3,683 | `npm install pi-antigravity-rotator` | Multi-account rotation proxy for Google Antigravity with per-model routing, real-time q… |
| 2 | [pi-free](https://www.npmjs.com/package/pi-free) | 2,131 | `npm install pi-free` | AI model providers for Pi with free model filtering. Shows only $0 cost models by defau… |
| 3 | [pi-vision-proxy](https://www.npmjs.com/package/pi-vision-proxy) | 979 | `npm install pi-vision-proxy` | Automatic image description for non-vision models in Pi. Routes images to a vision mode… |
| 4 | [pi-edgee-proxy](https://www.npmjs.com/package/pi-edgee-proxy) | 820 | `npm install pi-edgee-proxy` | Route Pi coding agent through Edgee AI Gateway for lossless token compression — any pro… |
| 5 | [pi-multi-auth](https://www.npmjs.com/package/pi-multi-auth) | 715 | `npm install pi-multi-auth` | Pi extension for multi-provider credential management, OAuth login, and account rotatio… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 20 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-antigravity-rotator](https://www.npmjs.com/package/pi-antigravity-rotator) | 3,683 | `npm install pi-antigravity-rotator` | Multi-account rotation proxy for Google Antigravity with per-model routing, real-time quota tracking, and infringement… |
| 2 | [pi-free](https://www.npmjs.com/package/pi-free) | 2,131 | `npm install pi-free` | AI model providers for Pi with free model filtering. Shows only $0 cost models by default. Supports Kilo (free OAuth),… |
| 3 | [pi-vision-proxy](https://www.npmjs.com/package/pi-vision-proxy) | 979 | `npm install pi-vision-proxy` | Automatic image description for non-vision models in Pi. Routes images to a vision model and injects descriptions into… |
| 4 | [pi-edgee-proxy](https://www.npmjs.com/package/pi-edgee-proxy) | 820 | `npm install pi-edgee-proxy` | Route Pi coding agent through Edgee AI Gateway for lossless token compression — any provider, any model |
| 5 | [pi-multi-auth](https://www.npmjs.com/package/pi-multi-auth) | 715 | `npm install pi-multi-auth` | Pi extension for multi-provider credential management, OAuth login, and account rotation. |
| 6 | [pi-proxy-models](https://www.npmjs.com/package/pi-proxy-models) | 543 | `npm install pi-proxy-models` | Pi coding-agent extension that exposes CLIProxyAPIPlus models (Claude, Gemini, OpenAI/Codex, Copilot, Kiro, GLM, Qwen,… |
| 7 | [@the-forge-flow/pi-token-saver](https://www.npmjs.com/package/@the-forge-flow/pi-token-saver) | 524 | `npm install @the-forge-flow/pi-token-saver` | Token-saving proxy for the PI coding agent — intercepts and compresses API calls to reduce token consumption |
| 8 | [@schultzp2020/pi-cursor](https://www.npmjs.com/package/@schultzp2020/pi-cursor) | 517 | `npm install @schultzp2020/pi-cursor` | Pi extension for Cursor subscription models via local OpenAI-compatible proxy |
| 9 | [@victor-software-house/pi-openai-proxy](https://www.npmjs.com/package/@victor-software-house/pi-openai-proxy) | 335 | `npm install @victor-software-house/pi-openai-proxy` | OpenAI-compatible HTTP proxy for pi's multi-provider model registry |
| 10 | [pi-qwen-mode-proxy](https://www.npmjs.com/package/pi-qwen-mode-proxy) | 280 | `npm install pi-qwen-mode-proxy` | Sampling mode proxy for Qwen models served via llama.cpp — switch between thinking, coding, and instruct modes |
| 11 | [@agnishc/edb-claude-proxy](https://www.npmjs.com/package/@agnishc/edb-claude-proxy) | 226 | `npm install @agnishc/edb-claude-proxy` | Pi extension: claude_proxy tool — delegate tasks to Claude Code CLI from within pi |
| 12 | [@agnishc/edb-gemini-proxy](https://www.npmjs.com/package/@agnishc/edb-gemini-proxy) | 219 | `npm install @agnishc/edb-gemini-proxy` | Pi extension: gemini_proxy tool — delegate tasks to Google Gemini CLI from within pi |
| 13 | [@blackbelt-technology/pi-model-proxy](https://www.npmjs.com/package/@blackbelt-technology/pi-model-proxy) | 136 | `npm install @blackbelt-technology/pi-model-proxy` | Pi extension that exposes pi's authenticated models as a local OpenAI-compatible and Anthropic-compatible API server |
| 14 | [pi-cline-free-models](https://www.npmjs.com/package/pi-cline-free-models) | 78 | `npm install pi-cline-free-models` | A Pi extension to use Cline models as a provider. |
| 15 | [pi-high-availability](https://www.npmjs.com/package/pi-high-availability) | 69 | `npm install pi-high-availability` | High Availability extension for pi - automatic failover when quota or capacity is exhausted |
| 16 | [pi-freecad](https://www.npmjs.com/package/pi-freecad) | 55 | `npm install pi-freecad` | Drive FreeCAD from pi with natural language. Create 3D shapes, open and modify .FCStd files, export to STEP/IGES/STL/DX… |
| 17 | [pi-antigravity-quota](https://www.npmjs.com/package/pi-antigravity-quota) | 55 | `npm install pi-antigravity-quota` | Pi extension to check Google Cloud Code (Antigravity) model quotas. |
| 18 | [pi-gemini-cli-quota](https://www.npmjs.com/package/pi-gemini-cli-quota) | 19 | `npm install pi-gemini-cli-quota` | Pi extension to view precise Google Cloud Code Assist (Gemini CLI) quotas. |
| 19 | [pi-codex-status](https://www.npmjs.com/package/pi-codex-status) | 0 | `npm install pi-codex-status` | ChatGPT Codex quota/status CLI and pi extension |
| 20 | [pi-scream](https://www.npmjs.com/package/pi-scream) | 0 | `npm install pi-scream` | Usage limits extension for pi coding agent |

</details>

<a id="dashboard"></a>
## 仪表盘
> 19 个包 · 总月下载量 9,595

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@blackbelt-technology/pi-agent-dashboard](https://www.npmjs.com/package/@blackbelt-technology/pi-agent-dashboard) | 3,082 | `npm install @blackbelt-technology/pi-agent-dashboard` | Web dashboard for monitoring and interacting with pi agent sessions |
| 2 | [@pi-unipi/info-screen](https://www.npmjs.com/package/@pi-unipi/info-screen) | 2,932 | `npm install @pi-unipi/info-screen` | Dashboard and module registry for Unipi — configurable info overlay with tabbed groups |
| 3 | [@braintrust/pi-extension](https://www.npmjs.com/package/@braintrust/pi-extension) | 883 | `npm install @braintrust/pi-extension` | Braintrust extension for pi. Includes automatic tracing for pi sessions, turns, LLM cal… |
| 4 | [pi-observability](https://www.npmjs.com/package/pi-observability) | 580 | `npm install pi-observability` | Live observability dashboard for pi coding agent sessions — tokens, cost, TPS, runtime,… |
| 5 | [@hdkiller/pi-langfuse](https://www.npmjs.com/package/@hdkiller/pi-langfuse) | 486 | `npm install @hdkiller/pi-langfuse` | Production-grade Langfuse observability for Pi. Tracks prompts, turns, tools, and strea… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 19 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@blackbelt-technology/pi-agent-dashboard](https://www.npmjs.com/package/@blackbelt-technology/pi-agent-dashboard) | 3,082 | `npm install @blackbelt-technology/pi-agent-dashboard` | Web dashboard for monitoring and interacting with pi agent sessions |
| 2 | [@pi-unipi/info-screen](https://www.npmjs.com/package/@pi-unipi/info-screen) | 2,932 | `npm install @pi-unipi/info-screen` | Dashboard and module registry for Unipi — configurable info overlay with tabbed groups |
| 3 | [@braintrust/pi-extension](https://www.npmjs.com/package/@braintrust/pi-extension) | 883 | `npm install @braintrust/pi-extension` | Braintrust extension for pi. Includes automatic tracing for pi sessions, turns, LLM calls, and tool executions to Brain… |
| 4 | [pi-observability](https://www.npmjs.com/package/pi-observability) | 580 | `npm install pi-observability` | Live observability dashboard for pi coding agent sessions — tokens, cost, TPS, runtime, git stats, and context usage |
| 5 | [@hdkiller/pi-langfuse](https://www.npmjs.com/package/@hdkiller/pi-langfuse) | 486 | `npm install @hdkiller/pi-langfuse` | Production-grade Langfuse observability for Pi. Tracks prompts, turns, tools, and streaming assistant responses with na… |
| 6 | [@ravan08/pi-langfuse](https://www.npmjs.com/package/@ravan08/pi-langfuse) | 398 | `npm install @ravan08/pi-langfuse` | Langfuse observability extension for Pi coding agent. Sends traces to Langfuse for monitoring tokens, costs, latency, a… |
| 7 | [@artale/pi-test](https://www.npmjs.com/package/@artale/pi-test) | 268 | `npm install @artale/pi-test` | Test runner dashboard — run tests, show pass/fail in TUI, track results |
| 8 | [@ifi/pi-diagnostics](https://www.npmjs.com/package/@ifi/pi-diagnostics) | 231 | `npm install @ifi/pi-diagnostics` | Prompt-completion diagnostics extension for pi with timestamps, durations, per-turn timing, and a live widget. |
| 9 | [pi-wakatime](https://www.npmjs.com/package/pi-wakatime) | 195 | `npm install pi-wakatime` | WakaTime plugin for Pi Coding Agent |
| 10 | [@raindrop-ai/pi-agent](https://www.npmjs.com/package/@raindrop-ai/pi-agent) | 155 | `npm install @raindrop-ai/pi-agent` | Raindrop observability for Pi Agent — automatic tracing via subscriber or pi-coding-agent extension |
| 11 | [pi-sentry-monitor](https://www.npmjs.com/package/pi-sentry-monitor) | 137 | `npm install pi-sentry-monitor` | Sentry AI Monitoring extension for pi coding agent sessions and tool calls |
| 12 | [@posthog/pi](https://www.npmjs.com/package/@posthog/pi) | 77 | `npm install @posthog/pi` | PostHog LLM Analytics extension for pi coding agent |
| 13 | [@dxvapor/pi-splunk-cloud-logs](https://www.npmjs.com/package/@dxvapor/pi-splunk-cloud-logs) | 57 | `npm install @dxvapor/pi-splunk-cloud-logs` | Pi coding agent extension for querying Splunk Cloud logs via REST API. Supports OAuth2 client credentials and bearer to… |
| 14 | [@jademind/pi-telemetry](https://www.npmjs.com/package/@jademind/pi-telemetry) | 45 | `npm install @jademind/pi-telemetry` | Structured runtime telemetry for pi-coding-agent, optimized for external services and observability pipelines. |
| 15 | [@mobrienv/pi-otlp](https://www.npmjs.com/package/@mobrienv/pi-otlp) | 28 | `npm install @mobrienv/pi-otlp` | OpenTelemetry metrics and events extension for pi-coding-agent |
| 16 | [pi-otel-telemetry](https://www.npmjs.com/package/pi-otel-telemetry) | 22 | `npm install pi-otel-telemetry` | OpenTelemetry traces & metrics extension for pi coding agent |
| 17 | [@artale/pi-metrics](https://www.npmjs.com/package/@artale/pi-metrics) | 19 | `npm install @artale/pi-metrics` | Code metrics and health. Lines of code, cyclomatic complexity, tech debt indicators by language. |
| 18 | [@datspike/pi-runtime-info-extension](https://www.npmjs.com/package/@datspike/pi-runtime-info-extension) | 0 | `npm install @datspike/pi-runtime-info-extension` | Pi extension exposing verified runtime model, thinking level, and artifact metadata to agents. |
| 19 | [container-dashboard](https://www.npmjs.com/package/container-dashboard) | 0 | `npm install container-dashboard` | A pi coding agent extension for managing Docker, Podman, and Nerdctl containers — list, logs, prune, stats, inspect, an… |

</details>

<a id="testing"></a>
## 测试与诊断
> 12 个包 · 总月下载量 9,357

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@vtstech/pi-model-test](https://www.npmjs.com/package/@vtstech/pi-model-test) | 2,935 | `npm install @vtstech/pi-model-test` | Model benchmark/testing extension for Pi Coding Agent |
| 2 | [@vtstech/pi-diag](https://www.npmjs.com/package/@vtstech/pi-diag) | 2,853 | `npm install @vtstech/pi-diag` | Diagnostics extension for Pi Coding Agent |
| 3 | [@marcfargas/pi-test-harness](https://www.npmjs.com/package/@marcfargas/pi-test-harness) | 2,552 | `npm install @marcfargas/pi-test-harness` | Test harness for pi extensions — in-process session testing, package install verificati… |
| 4 | [pi-droid](https://www.npmjs.com/package/pi-droid) | 301 | `npm install pi-droid` | Android phone control for pi-agent — 36 tools to see, touch, and automate any device vi… |
| 5 | [@gaodes/pi-test-harness](https://www.npmjs.com/package/@gaodes/pi-test-harness) | 204 | `npm install @gaodes/pi-test-harness` | Test harness for pi extensions — in-process session testing, package install verificati… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 12 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@vtstech/pi-model-test](https://www.npmjs.com/package/@vtstech/pi-model-test) | 2,935 | `npm install @vtstech/pi-model-test` | Model benchmark/testing extension for Pi Coding Agent |
| 2 | [@vtstech/pi-diag](https://www.npmjs.com/package/@vtstech/pi-diag) | 2,853 | `npm install @vtstech/pi-diag` | Diagnostics extension for Pi Coding Agent |
| 3 | [@marcfargas/pi-test-harness](https://www.npmjs.com/package/@marcfargas/pi-test-harness) | 2,552 | `npm install @marcfargas/pi-test-harness` | Test harness for pi extensions — in-process session testing, package install verification, and subprocess mocking |
| 4 | [pi-droid](https://www.npmjs.com/package/pi-droid) | 301 | `npm install pi-droid` | Android phone control for pi-agent — 36 tools to see, touch, and automate any device via ADB |
| 5 | [@gaodes/pi-test-harness](https://www.npmjs.com/package/@gaodes/pi-test-harness) | 204 | `npm install @gaodes/pi-test-harness` | Test harness for pi extensions — in-process session testing, package install verification, and subprocess mocking |
| 6 | [@rxreyn3/pi-azure-devops](https://www.npmjs.com/package/@rxreyn3/pi-azure-devops) | 153 | `npm install @rxreyn3/pi-azure-devops` | Azure DevOps diagnostics extension and CLI for Pi/OMP |
| 7 | [pi-proof](https://www.npmjs.com/package/pi-proof) | 136 | `npm install pi-proof` | Proof-first Pi extension that uses a red-green-refactor cycle when behavior should be specified in tests first, with bu… |
| 8 | [pi-ui-ab-test](https://www.npmjs.com/package/pi-ui-ab-test) | 120 | `npm install pi-ui-ab-test` | Pi extension that lets the model present two visual variants and collect a user preference through an interactive A/B p… |
| 9 | [@artale/pi-test-gen](https://www.npmjs.com/package/@artale/pi-test-gen) | 85 | `npm install @artale/pi-test-gen` | Auto-generate tests from code using AI |
| 10 | [pi-blindtest](https://www.npmjs.com/package/pi-blindtest) | 18 | `npm install pi-blindtest` | Pi extension for blind model testing: hide model in UI and aggregate ratings across sessions. |
| 11 | [@tianzong48/pi-doctor-extension](https://www.npmjs.com/package/@tianzong48/pi-doctor-extension) | 0 | `npm install @tianzong48/pi-doctor-extension` | Pi diagnostics extension package, starting with startup timing probes. |
| 12 | [agent-booster-pack-proof](https://www.npmjs.com/package/agent-booster-pack-proof) | 0 | `npm install agent-booster-pack-proof` | Proof-first Pi extension that uses a red-green-refactor cycle when behavior should be specified in tests first, with bu… |

</details>

<a id="chat"></a>
## 聊天/消息
> 9 个包 · 总月下载量 8,372

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-intercom](https://www.npmjs.com/package/pi-intercom) | 5,430 | `npm install pi-intercom` | <p> <img src="banner.png" alt="pi-intercom" width="1100"> </p> |
| 2 | [@0xkobold/pi-gateway](https://www.npmjs.com/package/@0xkobold/pi-gateway) | 1,319 | `npm install @0xkobold/pi-gateway` | Hermes-style messaging gateway for pi - multi-platform agent with sessions, security, a… |
| 3 | [pi-chatgpt-limit](https://www.npmjs.com/package/pi-chatgpt-limit) | 504 | `npm install pi-chatgpt-limit` | Show ChatGPT Codex subscription usage in pi's footer |
| 4 | [pi-side-chat](https://www.npmjs.com/package/pi-side-chat) | 374 | `npm install pi-side-chat` | Pi extension that forks the current conversation into a side chat |
| 5 | [@wechatbot/pi-agent](https://www.npmjs.com/package/@wechatbot/pi-agent) | 247 | `npm install @wechatbot/pi-agent` | Pi extension — type /wechat, scan QR code, chat with Pi from WeChat |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 9 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-intercom](https://www.npmjs.com/package/pi-intercom) | 5,430 | `npm install pi-intercom` | <p> <img src="banner.png" alt="pi-intercom" width="1100"> </p> |
| 2 | [@0xkobold/pi-gateway](https://www.npmjs.com/package/@0xkobold/pi-gateway) | 1,319 | `npm install @0xkobold/pi-gateway` | Hermes-style messaging gateway for pi - multi-platform agent with sessions, security, and background tasks |
| 3 | [pi-chatgpt-limit](https://www.npmjs.com/package/pi-chatgpt-limit) | 504 | `npm install pi-chatgpt-limit` | Show ChatGPT Codex subscription usage in pi's footer |
| 4 | [pi-side-chat](https://www.npmjs.com/package/pi-side-chat) | 374 | `npm install pi-side-chat` | Pi extension that forks the current conversation into a side chat |
| 5 | [@wechatbot/pi-agent](https://www.npmjs.com/package/@wechatbot/pi-agent) | 247 | `npm install @wechatbot/pi-agent` | Pi extension — type /wechat, scan QR code, chat with Pi from WeChat |
| 6 | [@codexstar/pi-side-chat](https://www.npmjs.com/package/@codexstar/pi-side-chat) | 176 | `npm install @codexstar/pi-side-chat` | Standalone side chat for Pi CLI — parallel AI agent with read-only tools |
| 7 | [@gigachain/pi-gigachat](https://www.npmjs.com/package/@gigachain/pi-gigachat) | 160 | `npm install @gigachain/pi-gigachat` | GigaChat provider extension for pi-coding-agent |
| 8 | [pi-chatgpt-usage-status](https://www.npmjs.com/package/pi-chatgpt-usage-status) | 135 | `npm install pi-chatgpt-usage-status` | Pi extension that shows ChatGPT 5h and weekly rate-limit usage in the status bar. |
| 9 | [pi-wechat](https://www.npmjs.com/package/pi-wechat) | 27 | `npm install pi-wechat` | WeChat iLink bot extension for Pi coding agent |

</details>

<a id="image"></a>
## 图像处理
> 29 个包 · 总月下载量 8,098

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-better-openai](https://www.npmjs.com/package/pi-better-openai) | 1,610 | `npm install pi-better-openai` | Personal pi extension that improves OpenAI with fast mode, usage stats, and footer poli… |
| 2 | [@injaneity/pi-computer-use](https://www.npmjs.com/package/@injaneity/pi-computer-use) | 1,399 | `npm install @injaneity/pi-computer-use` | Codex-style computer-use tools for Pi on macOS. |
| 3 | [pi-codex-image-gen](https://www.npmjs.com/package/pi-codex-image-gen) | 793 | `npm install pi-codex-image-gen` | Image generation for Pi using the ChatGPT Images 2.0 model. |
| 4 | [pi-image-gen-openai](https://www.npmjs.com/package/pi-image-gen-openai) | 412 | `npm install pi-image-gen-openai` | Pi image generation tool powered by OpenAI (GPT Image, DALL-E) |
| 5 | [pi-image-gen-google](https://www.npmjs.com/package/pi-image-gen-google) | 389 | `npm install pi-image-gen-google` | Pi image generation tool powered by Google (Nano Banana, Imagen) |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 29 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-better-openai](https://www.npmjs.com/package/pi-better-openai) | 1,610 | `npm install pi-better-openai` | Personal pi extension that improves OpenAI with fast mode, usage stats, and footer polish. |
| 2 | [@injaneity/pi-computer-use](https://www.npmjs.com/package/@injaneity/pi-computer-use) | 1,399 | `npm install @injaneity/pi-computer-use` | Codex-style computer-use tools for Pi on macOS. |
| 3 | [pi-codex-image-gen](https://www.npmjs.com/package/pi-codex-image-gen) | 793 | `npm install pi-codex-image-gen` | Image generation for Pi using the ChatGPT Images 2.0 model. |
| 4 | [pi-image-gen-openai](https://www.npmjs.com/package/pi-image-gen-openai) | 412 | `npm install pi-image-gen-openai` | Pi image generation tool powered by OpenAI (GPT Image, DALL-E) |
| 5 | [pi-image-gen-google](https://www.npmjs.com/package/pi-image-gen-google) | 389 | `npm install pi-image-gen-google` | Pi image generation tool powered by Google (Nano Banana, Imagen) |
| 6 | [pi-image-gen-replicate](https://www.npmjs.com/package/pi-image-gen-replicate) | 387 | `npm install pi-image-gen-replicate` | Pi image generation tool powered by Replicate (Flux, SD, and more) |
| 7 | [pi-image-gen-xai](https://www.npmjs.com/package/pi-image-gen-xai) | 387 | `npm install pi-image-gen-xai` | Pi image generation tool powered by xAI (Grok Imagine / Aurora) |
| 8 | [pi-imagegen](https://www.npmjs.com/package/pi-imagegen) | 386 | `npm install pi-imagegen` | Pi package for OpenAI/Codex image generation with a local browser studio. |
| 9 | [pi-image-gen-router](https://www.npmjs.com/package/pi-image-gen-router) | 374 | `npm install pi-image-gen-router` | Pi image generation tool that auto-detects available API keys |
| 10 | [pi-image-gen-recraft](https://www.npmjs.com/package/pi-image-gen-recraft) | 374 | `npm install pi-image-gen-recraft` | Pi image generation tool powered by Recraft (V3, V4) |
| 11 | [pi-image-gen-together](https://www.npmjs.com/package/pi-image-gen-together) | 372 | `npm install pi-image-gen-together` | Pi image generation tool powered by Together AI (Flux, Ideogram, and more) |
| 12 | [@zgltyq/pi-minimax-image](https://www.npmjs.com/package/@zgltyq/pi-minimax-image) | 201 | `npm install @zgltyq/pi-minimax-image` | MiniMax Image Understanding extension for pi coding agent - provides understand_image tool |
| 13 | [pi-bash-image](https://www.npmjs.com/package/pi-bash-image) | 157 | `npm install pi-bash-image` | Inject images into bash tool results |
| 14 | [pi-codex-image](https://www.npmjs.com/package/pi-codex-image) | 145 | `npm install pi-codex-image` | Pi extension that exposes Codex CLI image generation as a smoother codex_image tool. |
| 15 | [pi-mac-tools](https://www.npmjs.com/package/pi-mac-tools) | 142 | `npm install pi-mac-tools` | macOS automation tools for Pi via Accessibility APIs and screenshots |
| 16 | [@hewliyang/pi-codex-image](https://www.npmjs.com/package/@hewliyang/pi-codex-image) | 88 | `npm install @hewliyang/pi-codex-image` | Pi extension that exposes OpenAI's hosted image_generation tool to any model, authenticated via the openai-codex (ChatG… |
| 17 | [@georgetsouvaltzis/pi-gpt-image](https://www.npmjs.com/package/@georgetsouvaltzis/pi-gpt-image) | 83 | `npm install @georgetsouvaltzis/pi-gpt-image` | Pi extension for GPT image generation using Pi's existing ChatGPT/Codex login. |
| 18 | [@rwese/minimax-image-understanding](https://www.npmjs.com/package/@rwese/minimax-image-understanding) | 74 | `npm install @rwese/minimax-image-understanding` | MiniMax extension for pi coding agent |
| 19 | [@guwidoe/pi-clipboard-image](https://www.npmjs.com/package/@guwidoe/pi-clipboard-image) | 67 | `npm install @guwidoe/pi-clipboard-image` | pi extension: paste clipboard images into the prompt across Windows, Linux, and macOS |
| 20 | [@kuzat/pi-extension-gpt-image-2](https://www.npmjs.com/package/@kuzat/pi-extension-gpt-image-2) | 66 | `npm install @kuzat/pi-extension-gpt-image-2` | Pi extension that adds a gpt_image_2_generate tool |
| 21 | [@benvargas/pi-antigravity-image-gen](https://www.npmjs.com/package/@benvargas/pi-antigravity-image-gen) | 64 | `npm install @benvargas/pi-antigravity-image-gen` | Google Antigravity image generation tool for pi - Generate images via Gemini and Imagen models with inline terminal ren… |
| 22 | [@jordyvd/pi-image-attachments](https://www.npmjs.com/package/@jordyvd/pi-image-attachments) | 53 | `npm install @jordyvd/pi-image-attachments` | Image attachments for Pi, including draft placeholders and screenshot tool-result promotion. |
| 23 | [pi-glm-image-summary](https://www.npmjs.com/package/pi-glm-image-summary) | 34 | `npm install pi-glm-image-summary` | Pi extension that intercepts image reads when using glm-4.7 and sends them to glm-4.6v for detailed analysis |
| 24 | [@ssweens/pi-image-gen](https://www.npmjs.com/package/@ssweens/pi-image-gen) | 21 | `npm install @ssweens/pi-image-gen` | Provider-agnostic image generation for Pi coding agent |
| 25 | [@guwidoe/pi-wsl-clipboard-image](https://www.npmjs.com/package/@guwidoe/pi-wsl-clipboard-image) | 20 | `npm install @guwidoe/pi-wsl-clipboard-image` | pi extension: paste WSLg clipboard images into the prompt |
| 26 | [@carter-mcalister/pi-codex-image-gen](https://www.npmjs.com/package/@carter-mcalister/pi-codex-image-gen) | 0 | `npm install @carter-mcalister/pi-codex-image-gen` | Codex-compatible image_generation tool for Pi |
| 27 | [@gregjohnso/pi-imgview](https://www.npmjs.com/package/@gregjohnso/pi-imgview) | 0 | `npm install @gregjohnso/pi-imgview` | Display images from inside the pi coding agent: imgcat-style inline rendering in supported terminals, and one-click ope… |
| 28 | [@lumendigitaldev/pi-wsl-images](https://www.npmjs.com/package/@lumendigitaldev/pi-wsl-images) | 0 | `npm install @lumendigitaldev/pi-wsl-images` | WSL image paste support for pi using the Windows clipboard |
| 29 | [pi-codex-image-tool](https://www.npmjs.com/package/pi-codex-image-tool) | 0 | `npm install pi-codex-image-tool` | Pi extension exposing a gpt-5.5+ image generation tool backed by gpt-image-2. |

</details>

<a id="filesearch"></a>
## 文件搜索
> 5 个包 · 总月下载量 7,769

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@ff-labs/pi-fff](https://www.npmjs.com/package/@ff-labs/pi-fff) | 4,963 | `npm install @ff-labs/pi-fff` | pi extension: FFF-powered fuzzy file and content search |
| 2 | [pi-fff](https://www.npmjs.com/package/pi-fff) | 1,658 | `npm install pi-fff` | FFF-powered fuzzy file resolution, autocomplete, and content search extension for pi |
| 3 | [@the-forge-flow/fff-pi](https://www.npmjs.com/package/@the-forge-flow/fff-pi) | 1,138 | `npm install @the-forge-flow/fff-pi` | PI extension for fff |
| 4 | [@yofriadi/pi-fuzzy-match](https://www.npmjs.com/package/@yofriadi/pi-fuzzy-match) | 10 | `npm install @yofriadi/pi-fuzzy-match` | ```bash pi install git:github.com/yofriadi/pi-extensions@fuzzy-match-v<version> ``` |
| 5 | [@edxeth/pi-fff](https://www.npmjs.com/package/@edxeth/pi-fff) | 0 | `npm install @edxeth/pi-fff` | pi extension: FFF-powered fuzzy file and content search |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 5 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@ff-labs/pi-fff](https://www.npmjs.com/package/@ff-labs/pi-fff) | 4,963 | `npm install @ff-labs/pi-fff` | pi extension: FFF-powered fuzzy file and content search |
| 2 | [pi-fff](https://www.npmjs.com/package/pi-fff) | 1,658 | `npm install pi-fff` | FFF-powered fuzzy file resolution, autocomplete, and content search extension for pi |
| 3 | [@the-forge-flow/fff-pi](https://www.npmjs.com/package/@the-forge-flow/fff-pi) | 1,138 | `npm install @the-forge-flow/fff-pi` | PI extension for fff |
| 4 | [@yofriadi/pi-fuzzy-match](https://www.npmjs.com/package/@yofriadi/pi-fuzzy-match) | 10 | `npm install @yofriadi/pi-fuzzy-match` | ```bash pi install git:github.com/yofriadi/pi-extensions@fuzzy-match-v<version> ``` |
| 5 | [@edxeth/pi-fff](https://www.npmjs.com/package/@edxeth/pi-fff) | 0 | `npm install @edxeth/pi-fff` | pi extension: FFF-powered fuzzy file and content search |

</details>

<a id="settings"></a>
## 设置管理
> 7 个包 · 总月下载量 7,249

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@axnic/pi-extension-settings](https://www.npmjs.com/package/@axnic/pi-extension-settings) | 2,255 | `npm install @axnic/pi-extension-settings` | Centralized settings panel for pi extensions. |
| 2 | [@juanibiapina/pi-extension-settings](https://www.npmjs.com/package/@juanibiapina/pi-extension-settings) | 2,137 | `npm install @juanibiapina/pi-extension-settings` | Pi extension for centralized settings management across extensions |
| 3 | [@axnic/pi-extension-settings-sdk](https://www.npmjs.com/package/@axnic/pi-extension-settings-sdk) | 1,815 | `npm install @axnic/pi-extension-settings-sdk` | Type-safe SDK for interacting with the pi-extension-settings panel (for extension autho… |
| 4 | [@vanillagreen/pi-extension-manager](https://www.npmjs.com/package/@vanillagreen/pi-extension-manager) | 526 | `npm install @vanillagreen/pi-extension-manager` | Pi package manager with update/uninstall actions plus a separate schema-driven settings… |
| 5 | [@alexgorbatchev/pi-env](https://www.npmjs.com/package/@alexgorbatchev/pi-env) | 500 | `npm install @alexgorbatchev/pi-env` | Pi extension that injects environment variables from project config settings. |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 7 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@axnic/pi-extension-settings](https://www.npmjs.com/package/@axnic/pi-extension-settings) | 2,255 | `npm install @axnic/pi-extension-settings` | Centralized settings panel for pi extensions. |
| 2 | [@juanibiapina/pi-extension-settings](https://www.npmjs.com/package/@juanibiapina/pi-extension-settings) | 2,137 | `npm install @juanibiapina/pi-extension-settings` | Pi extension for centralized settings management across extensions |
| 3 | [@axnic/pi-extension-settings-sdk](https://www.npmjs.com/package/@axnic/pi-extension-settings-sdk) | 1,815 | `npm install @axnic/pi-extension-settings-sdk` | Type-safe SDK for interacting with the pi-extension-settings panel (for extension authors). |
| 4 | [@vanillagreen/pi-extension-manager](https://www.npmjs.com/package/@vanillagreen/pi-extension-manager) | 526 | `npm install @vanillagreen/pi-extension-manager` | Pi package manager with update/uninstall actions plus a separate schema-driven settings editor for vstack packages. |
| 5 | [@alexgorbatchev/pi-env](https://www.npmjs.com/package/@alexgorbatchev/pi-env) | 500 | `npm install @alexgorbatchev/pi-env` | Pi extension that injects environment variables from project config settings. |
| 6 | [@claaslange/pi-directory-models](https://www.npmjs.com/package/@claaslange/pi-directory-models) | 16 | `npm install @claaslange/pi-directory-models` | pi extension that selects a model from the nearest ancestor .pi/settings.json |
| 7 | [pi-export-config](https://www.npmjs.com/package/pi-export-config) | 0 | `npm install pi-export-config` | Pi extension to export, import, SSH-transfer, and GitHub-sync pi configuration including extension secrets. |

</details>

<a id="dataviz"></a>
## 数据可视化
> 5 个包 · 总月下载量 6,928

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@walterra/pi-charts](https://www.npmjs.com/package/@walterra/pi-charts) | 4,169 | `npm install @walterra/pi-charts` | Vega-Lite chart extension for pi coding agent - render data visualizations as inline im… |
| 2 | [@tungthedev/pi-extensions](https://www.npmjs.com/package/@tungthedev/pi-extensions) | 1,765 | `npm install @tungthedev/pi-extensions` | A Pi package containing editor, mermaid, workspace, web, skill, boomerang, pi-modes, an… |
| 3 | [@the-forge-flow/visual-explainer-pi](https://www.npmjs.com/package/@the-forge-flow/visual-explainer-pi) | 833 | `npm install @the-forge-flow/visual-explainer-pi` | PI extension for generating beautiful HTML visualizations of diagrams, architecture, an… |
| 4 | [@miclivs/pi-charts](https://www.npmjs.com/package/@miclivs/pi-charts) | 102 | `npm install @miclivs/pi-charts` | Pi extension for rendering charts — powered by charts-cli SDK |
| 5 | [@eliemessiecode/pi-render](https://www.npmjs.com/package/@eliemessiecode/pi-render) | 59 | `npm install @eliemessiecode/pi-render` | Extension for pi-coding-agent — displays interactive HTML pages in the browser and auto… |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 5 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@walterra/pi-charts](https://www.npmjs.com/package/@walterra/pi-charts) | 4,169 | `npm install @walterra/pi-charts` | Vega-Lite chart extension for pi coding agent - render data visualizations as inline images |
| 2 | [@tungthedev/pi-extensions](https://www.npmjs.com/package/@tungthedev/pi-extensions) | 1,765 | `npm install @tungthedev/pi-extensions` | A Pi package containing editor, mermaid, workspace, web, skill, boomerang, pi-modes, and ext-manager extensions. |
| 3 | [@the-forge-flow/visual-explainer-pi](https://www.npmjs.com/package/@the-forge-flow/visual-explainer-pi) | 833 | `npm install @the-forge-flow/visual-explainer-pi` | PI extension for generating beautiful HTML visualizations of diagrams, architecture, and data |
| 4 | [@miclivs/pi-charts](https://www.npmjs.com/package/@miclivs/pi-charts) | 102 | `npm install @miclivs/pi-charts` | Pi extension for rendering charts — powered by charts-cli SDK |
| 5 | [@eliemessiecode/pi-render](https://www.npmjs.com/package/@eliemessiecode/pi-render) | 59 | `npm install @eliemessiecode/pi-render` | Extension for pi-coding-agent — displays interactive HTML pages in the browser and auto-saves them |

</details>

<a id="audio"></a>
## 音频与语音
> 25 个包 · 总月下载量 6,850

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@codexstar/pi-listen](https://www.npmjs.com/package/@codexstar/pi-listen) | 2,208 | `npm install @codexstar/pi-listen` | Voice in + voice out for Pi CLI — hold-to-talk STT (Deepgram or 19 offline models) plus… |
| 2 | [voipi](https://www.npmjs.com/package/voipi) | 937 | `npm install voipi` | <p align="center"> <a href="https://voipi.vercel.app/"><img src="logo.svg" alt="voipi"… |
| 3 | [pi-smart-voice-notify](https://www.npmjs.com/package/pi-smart-voice-notify) | 715 | `npm install pi-smart-voice-notify` | Windows-optimized smart voice, sound, and desktop notifications for Pi coding agent. |
| 4 | [@pithings/voipi-pi](https://www.npmjs.com/package/@pithings/voipi-pi) | 477 | `npm install @pithings/voipi-pi` | Pi extension that adds text-to-speech tools and commands powered by VoiPi |
| 5 | [@s1m0n38/pi-voice](https://www.npmjs.com/package/@s1m0n38/pi-voice) | 432 | `npm install @s1m0n38/pi-voice` | HTTP server for Kokoro TTS — text-to-speech via ONNX inference. |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 25 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@codexstar/pi-listen](https://www.npmjs.com/package/@codexstar/pi-listen) | 2,208 | `npm install @codexstar/pi-listen` | Voice in + voice out for Pi CLI — hold-to-talk STT (Deepgram or 19 offline models) plus TTS (Kitten Nano, Piper, Kokoro… |
| 2 | [voipi](https://www.npmjs.com/package/voipi) | 937 | `npm install voipi` | <p align="center"> <a href="https://voipi.vercel.app/"><img src="logo.svg" alt="voipi" width="128" height="128"></a> </… |
| 3 | [pi-smart-voice-notify](https://www.npmjs.com/package/pi-smart-voice-notify) | 715 | `npm install pi-smart-voice-notify` | Windows-optimized smart voice, sound, and desktop notifications for Pi coding agent. |
| 4 | [@pithings/voipi-pi](https://www.npmjs.com/package/@pithings/voipi-pi) | 477 | `npm install @pithings/voipi-pi` | Pi extension that adds text-to-speech tools and commands powered by VoiPi |
| 5 | [@s1m0n38/pi-voice](https://www.npmjs.com/package/@s1m0n38/pi-voice) | 432 | `npm install @s1m0n38/pi-voice` | HTTP server for Kokoro TTS — text-to-speech via ONNX inference. |
| 6 | [pi-elevenlabs-tts](https://www.npmjs.com/package/pi-elevenlabs-tts) | 368 | `npm install pi-elevenlabs-tts` | Pi extension that reads assistant text responses aloud with ElevenLabs text-to-speech. |
| 7 | [pi-whisper-voice](https://www.npmjs.com/package/pi-whisper-voice) | 269 | `npm install pi-whisper-voice` | Minimal hold-SPACE voice input for Pi using an OpenAI-compatible Whisper/STT endpoint. |
| 8 | [@wierdbytes/pi-voice](https://www.npmjs.com/package/@wierdbytes/pi-voice) | 254 | `npm install @wierdbytes/pi-voice` | Spoken summary after each agent turn for the pi coding agent. |
| 9 | [@superwhisper/pi](https://www.npmjs.com/package/@superwhisper/pi) | 251 | `npm install @superwhisper/pi` | Superwhisper voice integration extension for Pi - get voice notifications when tasks complete |
| 10 | [@paulrobello/par-tts-core-ts](https://www.npmjs.com/package/@paulrobello/par-tts-core-ts) | 204 | `npm install @paulrobello/par-tts-core-ts` | Provider-neutral TypeScript text-to-speech library for Node, browsers via proxy, and pi extensions |
| 11 | [pi-ffmpeg](https://www.npmjs.com/package/pi-ffmpeg) | 148 | `npm install pi-ffmpeg` | ffmpeg Swiss Army knife for pi — probe, transcode, trim, concat, GIF, frames, audio extract/mux, thumbnail, compress, s… |
| 12 | [pi-xai-voice](https://www.npmjs.com/package/pi-xai-voice) | 122 | `npm install pi-xai-voice` | Pi extension for xAI voice and audio workflows |
| 13 | [pi-speak](https://www.npmjs.com/package/pi-speak) | 116 | `npm install pi-speak` | Voice readback extension for Pi — reads agent responses aloud via Unreal Speech TTS |
| 14 | [@artale/pi-voice](https://www.npmjs.com/package/@artale/pi-voice) | 110 | `npm install @artale/pi-voice` | Voice input for Pi. Multi-provider STT with Deepgram streaming, Groq Whisper, OpenAI Whisper. 56+ languages. |
| 15 | [pi-listen](https://www.npmjs.com/package/pi-listen) | 70 | `npm install pi-listen` | Voice input, first-run onboarding, and side-channel BTW conversations for Pi |
| 16 | [@swairshah/pi-talk](https://www.npmjs.com/package/@swairshah/pi-talk) | 52 | `npm install @swairshah/pi-talk` | Text-to-speech extension for Pi coding agent using Loqui |
| 17 | [pi-talk](https://www.npmjs.com/package/pi-talk) | 27 | `npm install pi-talk` | Streaming TTS extension for Pi with visible-thinking narration, hidden-thinking TLDRs, and tool announcements |
| 18 | [@agustif/pi-talk](https://www.npmjs.com/package/@agustif/pi-talk) | 22 | `npm install @agustif/pi-talk` | Streaming TTS extension for Pi with visible-thinking narration, hidden-thinking TLDRs, and tool announcements |
| 19 | [pi-voxtype](https://www.npmjs.com/package/pi-voxtype) | 19 | `npm install pi-voxtype` | Voxtype bridge for pi with direct session-scoped voice submission |
| 20 | [@settinghead/pi-voxlert](https://www.npmjs.com/package/@settinghead/pi-voxlert) | 17 | `npm install @settinghead/pi-voxlert` | SHODAN, the StarCraft Adjutant, and GLaDOS narrate your pi coding sessions. LLM-generated voice notifications spoken by… |
| 21 | [@jay-zod/speak](https://www.npmjs.com/package/@jay-zod/speak) | 16 | `npm install @jay-zod/speak` | Convert text to speech using Chatterbox TTS on Apple Silicon |
| 22 | [@rbright/pi-notify-koko](https://www.npmjs.com/package/@rbright/pi-notify-koko) | 16 | `npm install @rbright/pi-notify-koko` | Koko voice notifications for Pi agent turn completion. |
| 23 | [@adidoes/pi-meep](https://www.npmjs.com/package/@adidoes/pi-meep) | 0 | `npm install @adidoes/pi-meep` | Play a short notification sound when pi finishes responding. |
| 24 | [@p8n.ai/pi-listens](https://www.npmjs.com/package/@p8n.ai/pi-listens) | 0 | `npm install @p8n.ai/pi-listens` | Pi package for speech-first interaction using Sarvam AI speech-to-text and text-to-speech. |
| 25 | [pi-voice-loop](https://www.npmjs.com/package/pi-voice-loop) | 0 | `npm install pi-voice-loop` | Pi extension package for voice-loop operation with provider-backed speech in Pi. |

</details>

<a id="browser"></a>
## 浏览器自动化
> 9 个包 · 总月下载量 5,898

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-agent-browser-native](https://www.npmjs.com/package/pi-agent-browser-native) | 4,410 | `npm install pi-agent-browser-native` | pi extension that exposes agent-browser as a native tool for browser automation |
| 2 | [pi-agent-browser](https://www.npmjs.com/package/pi-agent-browser) | 578 | `npm install pi-agent-browser` | Browser automation tool for pi — interactive browsing, screenshots with inline vision,… |
| 3 | [demo-dev](https://www.npmjs.com/package/demo-dev) | 346 | `npm install demo-dev` | Generate polished product demo videos with one command. Just give a URL and a prompt. |
| 4 | [@steel-experiments/pi-steel](https://www.npmjs.com/package/@steel-experiments/pi-steel) | 340 | `npm install @steel-experiments/pi-steel` | Steel browser automation extension package for Pi |
| 5 | [@artale/pi-browser](https://www.npmjs.com/package/@artale/pi-browser) | 98 | `npm install @artale/pi-browser` | Browser automation for Pi using browser-use patterns |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 9 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-agent-browser-native](https://www.npmjs.com/package/pi-agent-browser-native) | 4,410 | `npm install pi-agent-browser-native` | pi extension that exposes agent-browser as a native tool for browser automation |
| 2 | [pi-agent-browser](https://www.npmjs.com/package/pi-agent-browser) | 578 | `npm install pi-agent-browser` | Browser automation tool for pi — interactive browsing, screenshots with inline vision, and session cleanup via agent-br… |
| 3 | [demo-dev](https://www.npmjs.com/package/demo-dev) | 346 | `npm install demo-dev` | Generate polished product demo videos with one command. Just give a URL and a prompt. |
| 4 | [@steel-experiments/pi-steel](https://www.npmjs.com/package/@steel-experiments/pi-steel) | 340 | `npm install @steel-experiments/pi-steel` | Steel browser automation extension package for Pi |
| 5 | [@artale/pi-browser](https://www.npmjs.com/package/@artale/pi-browser) | 98 | `npm install @artale/pi-browser` | Browser automation for Pi using browser-use patterns |
| 6 | [@dreki-gg/pi-browser-tools](https://www.npmjs.com/package/@dreki-gg/pi-browser-tools) | 78 | `npm install @dreki-gg/pi-browser-tools` | Browser automation and web research tools for pi — search, visit, screenshot, interact, and inspect console output |
| 7 | [@victor-software-house/pi-agent-browser](https://www.npmjs.com/package/@victor-software-house/pi-agent-browser) | 48 | `npm install @victor-software-house/pi-agent-browser` | Browser automation tool for Pi via agent-browser CLI |
| 8 | [pi-browser-debug](https://www.npmjs.com/package/pi-browser-debug) | 0 | `npm install pi-browser-debug` | Pi extension for debugging active browser sessions via Chrome DevTools Protocol |
| 9 | [pi-chrome-dev-tools](https://www.npmjs.com/package/pi-chrome-dev-tools) | 0 | `npm install pi-chrome-dev-tools` | Pi extension — lazy-launch Chrome with Playwright, persistent profile, stealth patches, simple browser tools |

</details>

<a id="notification"></a>
## 桌面通知
> 27 个包 · 总月下载量 5,012

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@pi-unipi/notify](https://www.npmjs.com/package/@pi-unipi/notify) | 1,233 | `npm install @pi-unipi/notify` | Cross-platform notification extension for Pi — native OS, Gotify, and Telegram notifica… |
| 2 | [pi-gotify-notifier](https://www.npmjs.com/package/pi-gotify-notifier) | 913 | `npm install pi-gotify-notifier` | Send Gotify notifications for pi agent session events |
| 3 | [pi-notify](https://www.npmjs.com/package/pi-notify) | 458 | `npm install pi-notify` | Desktop notifications for Pi agent via OSC 777/99/9 and Windows toast |
| 4 | [desktop-notify-kitty](https://www.npmjs.com/package/desktop-notify-kitty) | 445 | `npm install desktop-notify-kitty` | Pi extension that sends desktop notifications via kitten notify (kitty) or notify-send… |
| 5 | [@diegopetrucci/pi-notify](https://www.npmjs.com/package/@diegopetrucci/pi-notify) | 406 | `npm install @diegopetrucci/pi-notify` | A pi extension that sends a notification when the agent is ready for input. |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 27 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@pi-unipi/notify](https://www.npmjs.com/package/@pi-unipi/notify) | 1,233 | `npm install @pi-unipi/notify` | Cross-platform notification extension for Pi — native OS, Gotify, and Telegram notifications for agent lifecycle events |
| 2 | [pi-gotify-notifier](https://www.npmjs.com/package/pi-gotify-notifier) | 913 | `npm install pi-gotify-notifier` | Send Gotify notifications for pi agent session events |
| 3 | [pi-notify](https://www.npmjs.com/package/pi-notify) | 458 | `npm install pi-notify` | Desktop notifications for Pi agent via OSC 777/99/9 and Windows toast |
| 4 | [desktop-notify-kitty](https://www.npmjs.com/package/desktop-notify-kitty) | 445 | `npm install desktop-notify-kitty` | Pi extension that sends desktop notifications via kitten notify (kitty) or notify-send when a kitty terminal session ne… |
| 5 | [@diegopetrucci/pi-notify](https://www.npmjs.com/package/@diegopetrucci/pi-notify) | 406 | `npm install @diegopetrucci/pi-notify` | A pi extension that sends a notification when the agent is ready for input. |
| 6 | [pi-tuturu](https://www.npmjs.com/package/pi-tuturu) | 388 | `npm install pi-tuturu` | Completion sound notifications for pi with selectable sound and volume. |
| 7 | [pi-notify-agent](https://www.npmjs.com/package/pi-notify-agent) | 372 | `npm install pi-notify-agent` | Cross-platform desktop notifications and sounds for pi-coding-agent |
| 8 | [@zhaopengme/pi-notify](https://www.npmjs.com/package/@zhaopengme/pi-notify) | 217 | `npm install @zhaopengme/pi-notify` | Native macOS notifications when Pi completes tasks |
| 9 | [@qmxme/pi-lametric-notify](https://www.npmjs.com/package/@qmxme/pi-lametric-notify) | 197 | `npm install @qmxme/pi-lametric-notify` | LaMetric Time notifications for pi when the agent finishes and waits for input |
| 10 | [@jmcombs/pi-notify](https://www.npmjs.com/package/@jmcombs/pi-notify) | 117 | `npm install @jmcombs/pi-notify` | OS-level desktop notifications for the Pi coding agent — alerts you when Pi finishes a turn and is waiting for input. |
| 11 | [@alexgorbatchev/pi-cmux-notify](https://www.npmjs.com/package/@alexgorbatchev/pi-cmux-notify) | 56 | `npm install @alexgorbatchev/pi-cmux-notify` | pi package for cmux notifications |
| 12 | [pi-desktop-notify](https://www.npmjs.com/package/pi-desktop-notify) | 53 | `npm install pi-desktop-notify` | Focus-aware desktop notifications for pi |
| 13 | [@carlosgtrz/pi-terminal-bell](https://www.npmjs.com/package/@carlosgtrz/pi-terminal-bell) | 51 | `npm install @carlosgtrz/pi-terminal-bell` | Pi extension that rings the terminal bell when an agent run finishes after a configurable timeout. |
| 14 | [pi-poly-notify](https://www.npmjs.com/package/pi-poly-notify) | 40 | `npm install pi-poly-notify` | Highly configurable desktop/sound/Pushover notifications when Pi agent turn finishes and took longer than a definable t… |
| 15 | [@artale/pi-notify](https://www.npmjs.com/package/@artale/pi-notify) | 29 | `npm install @artale/pi-notify` | Cross-platform notifications. Desktop toasts (Win/Mac/Linux), Slack/Discord webhooks, notification history. |
| 16 | [@waraq-labs/pi-notify-terminal-notifier](https://www.npmjs.com/package/@waraq-labs/pi-notify-terminal-notifier) | 20 | `npm install @waraq-labs/pi-notify-terminal-notifier` | Pi extension: sends macOS notification-notifier notifications when agent waits for input |
| 17 | [@rbright/pi-notify-desktop](https://www.npmjs.com/package/@rbright/pi-notify-desktop) | 17 | `npm install @rbright/pi-notify-desktop` | OSC desktop notifications for Pi agent turn completion. |
| 18 | [@arcanemachine/pi-notify-marker](https://www.npmjs.com/package/@arcanemachine/pi-notify-marker) | 0 | `npm install @arcanemachine/pi-notify-marker` | Marker file plugin for Pi coding agent - create files when events occur |
| 19 | [@artale/pi-cole](https://www.npmjs.com/package/@artale/pi-cole) | 0 | `npm install @artale/pi-cole` | J. Cole notification sounds. Love yourz, no role modelz. Dreamville. |
| 20 | [@artale/pi-hiphop](https://www.npmjs.com/package/@artale/pi-hiphop) | 0 | `npm install @artale/pi-hiphop` | Hip-hop notification sounds. Drake, Cole, Ye, Kendrick. The GOATs. |
| 21 | [@artale/pi-hotline](https://www.npmjs.com/package/@artale/pi-hotline) | 0 | `npm install @artale/pi-hotline` | Hotline Bling notification sounds. When pi finishes, the vibes hit different. 🔥 |
| 22 | [@artale/pi-kdot](https://www.npmjs.com/package/@artale/pi-kdot) | 0 | `npm install @artale/pi-kdot` | K.Dot notification sounds. Be humble, stack money trees. |
| 23 | [@artale/pi-music](https://www.npmjs.com/package/@artale/pi-music) | 0 | `npm install @artale/pi-music` | Music notification sounds. Rock, Pop, Jazz, Country, EDM. |
| 24 | [@artale/pi-ye](https://www.npmjs.com/package/@artale/pi-ye) | 0 | `npm install @artale/pi-ye` | Ye notification sounds. Its almost like they cant tell that I got money. Pablo. |
| 25 | [@pi-lab/notify](https://www.npmjs.com/package/@pi-lab/notify) | 0 | `npm install @pi-lab/notify` | Desktop notification extension for pi coding agent |
| 26 | [@whynothugo/pi-notify](https://www.npmjs.com/package/@whynothugo/pi-notify) | 0 | `npm install @whynothugo/pi-notify` | Pi extension to emit a terminal bell when the agent ends its turn. |
| 27 | [omp-notify-tool](https://www.npmjs.com/package/omp-notify-tool) | 0 | `npm install omp-notify-tool` | Model-callable non-blocking notify tool for OMP and Pi-family runtimes. |

</details>

<a id="utils"></a>
## 共享工具库
> 2 个包 · 总月下载量 4,513

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@vtstech/pi-shared](https://www.npmjs.com/package/@vtstech/pi-shared) | 4,513 | `npm install @vtstech/pi-shared` | Shared utilities for Pi Coding Agent extensions |
| 2 | [@firstpick/pi-utils](https://www.npmjs.com/package/@firstpick/pi-utils) | 0 | `npm install @firstpick/pi-utils` | Shared utilities for Firstpick Pi extension packages. |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 2 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@vtstech/pi-shared](https://www.npmjs.com/package/@vtstech/pi-shared) | 4,513 | `npm install @vtstech/pi-shared` | Shared utilities for Pi Coding Agent extensions |
| 2 | [@firstpick/pi-utils](https://www.npmjs.com/package/@firstpick/pi-utils) | 0 | `npm install @firstpick/pi-utils` | Shared utilities for Firstpick Pi extension packages. |

</details>

<a id="output"></a>
## 输出策略
> 4 个包 · 总月下载量 1,315

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@vanillagreen/pi-output-policy](https://www.npmjs.com/package/@vanillagreen/pi-output-policy) | 542 | `npm install @vanillagreen/pi-output-policy` | OMP-style large-output policy for Pi tool results: minimization, bounded truncation, an… |
| 2 | [@nonplanarslicer/pi-save-output](https://www.npmjs.com/package/@nonplanarslicer/pi-save-output) | 312 | `npm install @nonplanarslicer/pi-save-output` | Save the last assistant message to a markdown file via /save-output |
| 3 | [@badliveware/pi-rich-output](https://www.npmjs.com/package/@badliveware/pi-rich-output) | 249 | `npm install @badliveware/pi-rich-output` | Terminal-friendly structured timeline cards for Pi. |
| 4 | [pi-copy-output](https://www.npmjs.com/package/pi-copy-output) | 212 | `npm install pi-copy-output` | Copy the last assistant response to clipboard — tables, code, markdown, all of it |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 4 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@vanillagreen/pi-output-policy](https://www.npmjs.com/package/@vanillagreen/pi-output-policy) | 542 | `npm install @vanillagreen/pi-output-policy` | OMP-style large-output policy for Pi tool results: minimization, bounded truncation, and spill-file preservation. |
| 2 | [@nonplanarslicer/pi-save-output](https://www.npmjs.com/package/@nonplanarslicer/pi-save-output) | 312 | `npm install @nonplanarslicer/pi-save-output` | Save the last assistant message to a markdown file via /save-output |
| 3 | [@badliveware/pi-rich-output](https://www.npmjs.com/package/@badliveware/pi-rich-output) | 249 | `npm install @badliveware/pi-rich-output` | Terminal-friendly structured timeline cards for Pi. |
| 4 | [pi-copy-output](https://www.npmjs.com/package/pi-copy-output) | 212 | `npm install pi-copy-output` | Copy the last assistant response to clipboard — tables, code, markdown, all of it |

</details>

<a id="learning"></a>
## 持续学习
> 2 个包 · 总月下载量 99

### 安装速查

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@artale/pi-continuous](https://www.npmjs.com/package/@artale/pi-continuous) | 96 | `npm install @artale/pi-continuous` | Learn from session history |
| 2 | [pi-quiz](https://www.npmjs.com/package/pi-quiz) | 3 | `npm install pi-quiz` | Active quiz for code and document understanding in pi |

### 完整清单

以下清单按自动排名排序，人工覆盖项会优先出现在前列。

<details>
<summary>展开全部 2 个插件</summary>

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@artale/pi-continuous](https://www.npmjs.com/package/@artale/pi-continuous) | 96 | `npm install @artale/pi-continuous` | Learn from session history |
| 2 | [pi-quiz](https://www.npmjs.com/package/pi-quiz) | 3 | `npm install pi-quiz` | Active quiz for code and document understanding in pi |

</details>

