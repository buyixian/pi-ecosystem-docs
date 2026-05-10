# MCP — Model Context Protocol 集成

> 63 个包 | 最高月下载量 59,788 (pi-mcp-adapter)

## 概述

MCP（Model Context Protocol）扩展让 PI 连接到外部 MCP 服务器，使用其提供的工具、资源和提示词。这是 PI 生态中仅次于 SubAgent 的第二大热门类别。

## 核心概念

- **MCP Server**：暴露工具、资源和提示词的外部服务
- **MCP Adapter**：PI 与 MCP Server 之间的桥接层
- **传输协议**：stdio、SSE、StreamableHTTP、WebSocket
- **context-mode**：特殊的 MCP 插件，优化上下文窗口使用

---

## 推荐扩展

### pi-mcp-adapter ⭐
- 📦 `pi-mcp-adapter` | 59,788/月 | [GitHub](https://github.com/nicobailon/pi-mcp-adapter)
- 🔧 功能：连接任意 MCP 服务器（stdio/SSE/StreamableHTTP/WebSocket）
- 💡 适用场景：所有需要外部工具集成的情况

### context-mode
- 📦 `context-mode` | 57,781/月
- 🔧 功能：沙箱代码执行 + FTS5 知识库 + 意图驱动搜索
- 💡 适用场景：大型上下文管理，节省 ~98% 上下文窗口

### pi-lean-ctx
- 📦 `pi-lean-ctx` | 4,719/月
- 🔧 功能：CLI 优先的轻量 MCP 上下文路由
- 💡 适用场景：需要最小化上下文占用的场景

### pi-mcp-extension
- 📦 `pi-mcp-extension` | ~3,000/月
- 🔧 功能：MCP 客户端，支持多种传输方式
- 💡 适用场景：替代 pi-mcp-adapter 的另一种选择

---

## 对比选型

| 特性 | pi-mcp-adapter | pi-mcp-extension | context-mode | @spences10/pi-mcp |
|------|:---:|:---:|:---:|:---:|
| stdio | ✅ | ✅ | ✅ | ✅ |
| SSE | ✅ | ✅ | ❌ | ✅ |
| StreamableHTTP | ✅ | ❌ | ❌ | ✅ |
| WebSocket | ✅ | ❌ | ❌ | ❌ |
| FTS5 搜索 | ❌ | ❌ | ✅ | ❌ |
| 下载量 | 59k+ | 3k+ | 57k+ | 2k+ |

---

## 常用 MCP 服务器集成

- `@feniix/pi-ref-tools` — Ref.tools 文档搜索 MCP
- `agent-comms` — 跨代理通信网格
- `context-mode` — 上下文优化 + 沙箱

<!-- AUTO-GENERATED-INSTALL:START -->
## 安装速查

以下为自动排行后的推荐安装入口，命令均可直接复制。

### 主推安装

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-mcp-adapter](https://www.npmjs.com/package/pi-mcp-adapter) | 59,788 | `npm install pi-mcp-adapter` | MCP (Model Context Protocol) adapter extension for Pi coding agent |
| 2 | [context-mode](https://www.npmjs.com/package/context-mode) | 57,781 | `npm install context-mode` | MCP plugin that saves 98% of your context window. Works with Claude Code, Gemini CLI, V… |
| 3 | [pi-lean-ctx](https://www.npmjs.com/package/pi-lean-ctx) | 4,719 | `npm install pi-lean-ctx` | Pi Coding Agent extension (CLI-first) — routes bash/read/grep/find/ls through lean-ctx… |
| 4 | [agent-comms](https://www.npmjs.com/package/agent-comms) | 3,132 | `npm install agent-comms` | Cross-harness communication mesh for LLM agents — rooms, DMs, presence, and real-time p… |
| 5 | [pi-claude-style-tools](https://www.npmjs.com/package/pi-claude-style-tools) | 2,616 | `npm install pi-claude-style-tools` | Claude Code-style tool rows for pi with Ctrl+O image previews and consistent built-in,… |

### 全量目录

本分类的完整插件清单与安装命令见 [PI 全量插件目录](../pi-extension-catalog.md)。
<!-- AUTO-GENERATED-INSTALL:END -->
