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
