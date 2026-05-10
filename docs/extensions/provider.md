# Provider — 模型供应商扩展

> 60 个包 | 最高月下载量 1,581 (pi-gemini-acp)

## 概述

Provider 扩展让 PI 接入不同的 LLM 后端，从 Kimi、Gemini 等云端模型到本地的 Ollama。

与 MCP 不同，Provider 关注的是**"谁来做推理"**而非"能调什么工具"。

## 热门 Provider

### Kimi
- `pi-provider-kimi-code` (1,392/月) — Kimi Code Plan 集成
- `@zgltyq/pi-provider-kimi-code` (fork, OAuth 修复)

### Gemini
- `pi-gemini-acp` (1,581/月) — Gemini ACP prompt + 搜索 + 研究

### OpenCode
- `pi-opencode-provider` — OpenCode Zen & Go 支持

### 本地模型
- `@0xkobold/pi-ollama` (1,792/月) — Ollama 统一本地+云端支持
- `@vtstech/pi-ollama-sync` (2,877/月) — Ollama 模型同步

### AI 编码工具桥接
- `pi-cursor-sdk` — Cursor SDK 代理
- `@vanillagreen/pi-claude-bridge` — Claude Code 通过 Claude Agent SDK 运行

## 对比

| Provider | 后端 | 月下载 | 适用 |
|----------|------|--------|------|
| pi-provider-kimi-code | Kimi K2 | 1,392 | 中文编码场景 |
| pi-gemini-acp | Gemini | 1,581 | 多模态需求 |
| pi-opencode-provider | OpenCode | new | OpenCode 用户 |
| @0xkobold/pi-ollama | Ollama | 1,792 | 本地/离线 |
| pi-cursor-sdk | Cursor SDK | new | Cursor 用户 |

## 技术要点

Provider 通过 `api.registerProvider()` 注册：

```typescript
api.registerProvider("my-llm", {
  createModel: (config) => ({
    sendMessage: async (messages, opts) => { /* LLM 调用 */ }
  })
});
```

关键：PI 的 `@earendil-works/pi-ai` 已提供统一 LLM 抽象，Provider 只需实现 `sendMessage`。

<!-- AUTO-GENERATED-INSTALL:START -->
## 安装速查

以下为自动排行后的推荐安装入口，命令均可直接复制。

### 主推安装

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-provider-kimi-code](https://www.npmjs.com/package/pi-provider-kimi-code) | 1,392 | `npm install pi-provider-kimi-code` | Pi extension for Kimi Code — reuse your Kimi Code Plan in pi-coding-agent (K2.6, K2.5) |
| 2 | [@ramarivera/pi-ts-aperture-provider](https://www.npmjs.com/package/@ramarivera/pi-ts-aperture-provider) | 1,085 | `npm install @ramarivera/pi-ts-aperture-provider` | Config-driven aperture provider extraction for Pi-compatible extensions. |
| 3 | [@sinamtz/pi-minimax-provider](https://www.npmjs.com/package/@sinamtz/pi-minimax-provider) | 916 | `npm install @sinamtz/pi-minimax-provider` | Pi coding agent provider for MiniMax AI - supports MiniMax M2 series models with Anthro… |
| 4 | [pi-cursor-provider](https://www.npmjs.com/package/pi-cursor-provider) | 912 | `npm install pi-cursor-provider` | Pi extension providing access to Cursor models via OAuth and a local OpenAI-compatible… |
| 5 | [pi-venice](https://www.npmjs.com/package/pi-venice) | 690 | `npm install pi-venice` | Pi Coding Agent extension for using Venice.ai as provider, access to ANY and ALL models… |

### 全量目录

本分类的完整插件清单与安装命令见 [PI 全量插件目录](../pi-extension-catalog.md)。
<!-- AUTO-GENERATED-INSTALL:END -->
