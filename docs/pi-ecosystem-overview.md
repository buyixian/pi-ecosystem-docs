# PI 扩展生态系统总览

> 最后更新：2026-05-10 | 自动采集自 npm registry（keywords:pi-package）

## PI 是什么？

**PI** 是一个终端优先的 AI 编码代理（Coding Agent）框架。核心仓库 [pi-mono](https://github.com/badlogic/pi-mono)（⭐47k+）由 Mario Zechner (badlogic) 和 Armin Ronacher (mitsuhiko) 维护，提供：

- `@earendil-works/pi-coding-agent` — CLI 编码代理
- `@earendil-works/pi-agent-core` — 代理运行时核心
- `@earendil-works/pi-ai` — 统一 LLM API 抽象层
- `@earendil-works/pi-tui` — 终端 UI 组件库

PI 通过 **npm 扩展包机制**（keyword: `pi-package`）实现功能扩展。扩展是 TypeScript 模块，通过 jiti 运行时加载，可订阅 25+ 生命周期钩子、注册工具和命令。

---

## 生态规模概览

| 指标 | 数值 |
|------|------|
| 总扩展包数 | **2,361** |
| 分类数 | **16 个主分类** |
| 核心仓库 Stars | **47,425** |
| 最高月下载量（单包） | **70,608** (pi-subagents) |
| 扩展钩子 | **25+** 生命周期事件 |

---

## 扩展架构

### 扩展点 API

扩展通过 `ExtensionAPI` 订阅事件：

```
session_start → session_before_switch → session_before_fork →
session_before_compact → session_compact → session_shutdown

agent_start → turn_start → message_start → message_update →
message_end → turn_end → agent_end

tool_call → tool_execution_start → tool_execution_update →
tool_execution_end → tool_result

context → before_provider_request → after_provider_response
model_select → thinking_level_select
input → user_bash
resources_discover
```

### 扩展能力

扩展可以：
- 注册 LLM 可调用工具 (ToolDefinition)
- 注册命令和快捷键 (ExtensionCommand, ExtensionShortcut)
- 提供 UI 组件（编辑器、覆盖层、状态栏）
- 拦截/修改系统提示词
- 管理会话生命周期
- 注册模型提供商

---

## 16 大分类

### 1. Provider（模型供应商）— 60 包
将不同 LLM 后端接入 PI，包括 Kimi、Gemini、MiniMax、Cursor、OpenCode 等。
- 🔥 `pi-provider-kimi-code` · `pi-opencode-provider` · `@cirthan/pi-cirthan-provider`
- 📦 共 60 个包

### 2. MCP（协议适配）— 63 包
Model Context Protocol 集成，让 PI 连接外部 MCP 服务器。
- 🔥 `pi-mcp-adapter` (59,788/月) · `context-mode` (57,781/月)
- 📦 共 63 个包

### 3. Memory（记忆系统）— 73 包
持久化记忆、向量搜索、知识图谱。
- 🔥 `@samfp/pi-memory` (8,013/月) · `pi-memory-md` · `pi-hindsight`
- 📦 共 73 个包

### 4. Context（上下文管理）— 92 包
上下文压缩、裁剪、手递（handoff）、继续执行。
- 🔥 `pi-context` · `pi-continue` · `pi-context-prune`
- 📦 共 92 个包

### 5. Web（网络访问）— 145 包
网页搜索、内容抓取、研究工具。
- 🔥 `pi-web-access` (34,332/月) · `@ollama/pi-web-search` (26,114/月) · `pi-web-providers`
- 📦 共 145 个包

### 6. SubAgent（子代理/多代理）— 99 包
委派任务、多代理编排、团队协作。
- 🔥 `pi-subagents` (70,608/月) · `pi-crew` · `pi-minions` · `pi-mono-team-mode`
- 📦 共 99 个包

### 7. Workflow（工作流）— 53 包
规划、执行、验证、GSD（Get Shit Done）。
- 🔥 `@plannotator/pi-extension` (21,911/月) · `pi-gsd` (10,542/月)
- 📦 共 53 个包

### 8. Code Quality（代码质量）— 44 包
Lint、代码审查、LSP 集成、简化重构。
- 🔥 `pi-lens` (13,237/月) · `pi-simplify` (10,180/月)
- 📦 共 44 个包

### 9. TUI & Display（界面与展示）— 97 包
状态栏、Powerline、Markdown 预览、图表、Mermaid。
- 🔥 `pi-powerline-footer` (11,650/月) · `pi-markdown-preview` (12,052/月) · `pi-mermaid`
- 📦 共 97 个包

### 10. Tool & Security（工具与安全）— 71 包
权限系统、沙箱、守护规则。
- 🔥 `@gotgenes/pi-permission-system` · `pi-sandbox` · `pi-pkg-guard`
- 📦 共 71 个包

### 11. Skill（技能包）— 110 包
特定领域能力封装：Git 操作、文档解析、数据库。
- 🔥 `pi-docparser` · `pi-drawio` · `pi-git-skills`
- 📦 共 110 个包

### 12. Integration（外部集成）— 27 包
Discord、Telegram、WhatsApp、Notion、1Password 等。
- 🔥 `whatsapp-pi` · `@llblab/pi-telegram` · `@feniix/pi-notion`
- 📦 共 27 个包

### 13. User Interaction（用户交互）— 39 包
结构化提问、访谈表单、待办列表、顾问模式。
- 🔥 `@juicesharp/rpiv-ask-user-question` (11,982/月) · `@juicesharp/rpiv-todo` (11,493/月)
- 📦 共 39 个包

### 14. Prompt & Agent Mode（提示词与代理模式）— 62 包
提示词模板、模型选择、自主循环、Caveman 模式。
- 🔥 `pi-prompt-template-model` · `pi-schedule-prompt` · `pi-caveman`
- 📦 共 62 个包

### 15. Meta & Utilities（元包与工具）— 46 包
包管理器、主题、设置、测试工具、共享库。
- 🔥 `pi-depo` · `@pi-unipi/unipi` · `pi-resource-center`
- 📦 共 46 个包

### 16. Audio & Notification（音频与通知）— 53 包
TTS 语音、桌面通知、声音提示。
- 🔥 `@codexstar/pi-listen` · `voipi` · `pi-notify`
- 📦 共 53 个包

---

## Top 20 热门扩展

| # | 包名 | 月下载量 | 分类 |
|---|------|---------|------|
| 1 | `pi-subagents` | 70,608 | SubAgent |
| 2 | `pi-mcp-adapter` | 59,788 | MCP |
| 3 | `context-mode` | 57,781 | MCP |
| 4 | `pi-web-access` | 34,332 | Web |
| 5 | `@ollama/pi-web-search` | 26,114 | Web |
| 6 | `@plannotator/pi-extension` | 21,911 | Workflow |
| 7 | `pi-lens` | 13,237 | CodeQuality |
| 8 | `pi-markdown-preview` | 12,052 | Display |
| 9 | `@juicesharp/rpiv-ask-user-question` | 11,982 | UserInteraction |
| 10 | `pi-powerline-footer` | 11,650 | TUI |
| 11 | `@juicesharp/rpiv-todo` | 11,493 | UserInteraction |
| 12 | `pi-gsd` | 10,542 | Workflow |
| 13 | `pi-simplify` | 10,180 | CodeQuality |
| 14 | `@juicesharp/rpiv-advisor` | 9,294 | UserInteraction |
| 15 | `pi-btw` | 9,095 | TUI |
| 16 | `@juicesharp/rpiv-web-tools` | 9,054 | Web |
| 17 | `@juicesharp/rpiv-btw` | 8,998 | UserInteraction |
| 18 | `@runfusion/fusion` | 8,990 | APIServer |
| 19 | `@juicesharp/rpiv-pi` | 8,855 | Workflow |
| 20 | `glimpseui` | 8,683 | Prompt |

---

## 开发状态观察

1. **生态爆发期**：过去 30 天新增/更新了大量包，社区活跃度高。
2. **MCP 成为主流**：`pi-mcp-adapter` 和 `context-mode` 下载量远超其他。
3. **多代理是趋势**：`pi-subagents` 是最受欢迎的单一包。
4. **rpiv 家族**：`@juicesharp/rpiv-*` 系列覆盖 12+ 交互场景。
5. **多实现竞争**：同一功能常有多人实现（如多个 memory、mcp、context 包）。
6. **包质量分化**：头部包与尾部包下载量差距达 3-4 个数量级。

---

## 下一步

- 查看各分类详细文档：`docs/extensions/CATEGORY.md`
- 学习开发扩展：`docs/extension-development-guide.md`
- 查看推荐清单：`docs/extension-curation.md`
