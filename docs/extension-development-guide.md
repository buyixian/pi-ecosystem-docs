# PI 扩展开发指南

## 概述

PI 扩展是 **TypeScript 模块**，在运行时由 jiti 加载。通过 `ExtensionFactory` 函数创建扩展实例，订阅生命周期事件、注册工具和命令。

---

## 快速开始

### 最小扩展结构

```typescript
// my-extension.ts
import type { Extension, ExtensionFactory, ExtensionAPI } from "@earendil-works/pi-coding-agent";

const factory: ExtensionFactory = (api: ExtensionAPI): Extension => {
  // 1. 订阅事件
  api.on("session_start", (event, ctx) => {
    console.log("Session started:", event.sessionFile);
  });

  // 2. 注册工具
  api.registerTool({
    name: "my_tool",
    description: "An example tool",
    schema: { type: "object", properties: {} },
    execute: async (input, ctx) => {
      return { content: [{ type: "text", text: "Hello from my extension!" }] };
    }
  });

  // 3. 返回扩展对象
  return {
    // 可选：清理逻辑
  };
};

export default factory;
```

### 安装

```bash
npm install -g my-extension
# PI 自动从 node_modules 发现 pi-package 关键词的包
```

---

## 生命周期钩子

### 会话生命周期

| 钩子 | 触发时机 | 可返回值 |
|------|---------|---------|
| `session_start` | 新会话创建 | - |
| `session_before_switch` | 切换会话前 | - |
| `session_before_fork` | Fork 会话前 | `SessionBeforeForkResult` |
| `session_before_compact` | 压缩前准备 | `CompactionPreparation` |
| `session_compact` | 压缩完成后 | - |
| `session_shutdown` | 会话关闭 | - |
| `session_before_tree` | 树形展示前 | `SessionBeforeTreeResult` |
| `session_tree` | 树形展示后 | - |

### 代理生命周期

| 钩子 | 触发时机 | 可返回值 |
|------|---------|---------|
| `before_agent_start` | 代理启动前 | `BeforeAgentStartEventResult` |
| `agent_start` | 代理启动后 | - |
| `agent_end` | 代理结束 | - |

### 轮次生命周期

| 钩子 | 触发时机 | 可返回值 |
|------|---------|---------|
| `turn_start` | 每轮开始 | - |
| `turn_end` | 每轮结束 | - |
| `message_start` | 消息开始 | - |
| `message_update` | 消息更新 | - |
| `message_end` | 消息结束 | `MessageEndEventResult` |

### 工具生命周期

| 钩子 | 触发时机 | 可返回值 |
|------|---------|---------|
| `tool_call` | 工具调用前 | `ToolCallEventResult` |
| `tool_execution_start` | 执行开始 | - |
| `tool_execution_update` | 执行更新 | - |
| `tool_execution_end` | 执行结束 | - |
| `tool_result` | 工具结果 | `ToolResultEventResult` |

### 模型/上下文

| 钩子 | 触发时机 | 可返回值 |
|------|---------|---------|
| `context` | 上下文构建 | `ContextEventResult` |
| `before_provider_request` | 请求发送前 | - |
| `after_provider_response` | 响应返回后 | - |
| `model_select` | 模型选择 | - |
| `thinking_level_select` | 思考层级选择 | - |

### 用户交互

| 钩子 | 触发时机 | 可返回值 |
|------|---------|---------|
| `input` | 用户输入 | `InputEventResult` |
| `user_bash` | 用户执行 bash | `UserBashEventResult` |
| `resources_discover` | 资源发现 | `ResourcesDiscoverResult` |

---

## 扩展接口详解

### ExtensionAPI

```typescript
interface ExtensionAPI {
  // 事件订阅
  on(event: string, handler: (...args: any[]) => void | Promise<void>): void;

  // 工具注册
  registerTool(definition: ToolDefinition): void;

  // 命令注册
  registerCommand(command: RegisteredCommand): void;

  // 快捷键注册
  registerShortcut(shortcut: ExtensionShortcut): void;

  // CLI 标志注册
  registerFlag(flag: ExtensionFlag): void;

  // 模型提供商注册
  registerProvider(name: string, config: ProviderConfig): void;
}
```

### ExtensionContext（事件处理中可用）

```typescript
interface ExtensionContext {
  ui: ExtensionUIContext;       // UI 交互方法
  hasUI: boolean;               // 是否有 UI（无头模式为 false）
  sessionManager: ReadonlySessionManager; // 只读会话管理器
  messageHistory: AgentMessage[];         // 消息历史
  currentSessionFile?: string;
  // ... 更多
}

interface ExtensionUIContext {
  select(title: string, options: string[], opts?: DialogOptions): Promise<string | undefined>;
  confirm(title: string, message: string, opts?: DialogOptions): Promise<boolean>;
  input(title: string, placeholder?: string, opts?: DialogOptions): Promise<string | undefined>;
  showOverlay(content: Component, opts?: OverlayOptions): OverlayHandle;
  setWidget(key: string, content: string[] | undefined, opts?: WidgetOptions): void;
  onTerminalInput(handler: TerminalInputHandler): () => void;
}
```

### ToolDefinition 工具定义

```typescript
interface ToolDefinition {
  name: string;                 // 工具名（对模型可见）
  description: string;          // 描述（影响模型何时调用）
  schema: TSchema;              // TypeBox 或 JSON Schema
  execute: (input: any, ctx: ExtensionContext) => Promise<ToolResult>;
  // 可选
  executionMode?: ToolExecutionMode; // 执行模式
  renderer?: MessageRenderer;   // 自定义渲染
}
```

---

## 常见模式

### 模式 1：给代理添加新能力

```typescript
// 注册 LLM 可调用工具
api.registerTool({
  name: "web_search",
  description: "Search the web for current information",
  schema: Type.Object({ query: Type.String() }),
  execute: async (input, ctx) => {
    const results = await doSearch(input.query);
    return { content: [{ type: "text", text: formatResults(results) }] };
  }
});
```

### 模式 2：注入系统提示词

```typescript
api.on("context", (event, ctx) => {
  return {
    additionalContext: "Always use TypeScript strict mode.",
    prependToSystemPrompt: "You are an expert TypeScript developer."
  };
});
```

### 模式 3：在工具前后介入

```typescript
api.on("tool_call", (event, ctx) => {
  if (event.toolName === "bash" && isDangerous(event.input)) {
    const confirmed = await ctx.ui.confirm("⚠️ 危险操作", "确认执行?");
    if (!confirmed) return { block: true, reason: "User denied" };
  }
});

api.on("tool_result", (event, ctx) => {
  if (event.toolName === "read") {
    return { additionalContext: "(Note: this file is deprecated)" };
  }
});
```

### 模式 4：会话管理

```typescript
api.on("session_start", (event, ctx) => {
  // 注入会话级上下文
  logger.info(`Session started: ${event.sessionFile}`);
});

api.on("session_before_compact", (event, ctx) => {
  return {
    // 自定义压缩策略
    messagesToKeep: event.messages.filter(m => m.role === "user").slice(-5)
  };
});
```

### 模式 5：注册 UI 组件

```typescript
// 自定义 Footer
api.on("resources_discover", () => {
  return {
    footerDataProvider: {
      getFooterData: () => ({
        segments: [{ text: "My Extension v1.0", style: "dim" }]
      })
    }
  };
});
```

---

## 多文件扩展

对于复杂扩展，使用 npm 包标准结构：

```
my-extension/
├── package.json       # keywords 必须包含 "pi-package"
├── tsconfig.json
└── src/
    ├── index.ts       # 默认导出 ExtensionFactory
    ├── tools.ts       # 工具定义
    ├── hooks.ts       # 事件处理
    └── ui.ts          # UI 组件
```

**package.json 关键字段：**

```json
{
  "name": "my-pi-extension",
  "version": "1.0.0",
  "keywords": ["pi-package", "pi-extension", "pi-coding-agent"],
  "main": "./dist/index.js",
  "files": ["dist/"]
}
```

---

## 调试与测试

### 使用测试工具

```typescript
import { createTestHarness } from "@marcfargas/pi-test-harness";

const harness = await createTestHarness({
  extensions: ["./src/index.ts"],
  mockLLM: true
});

await harness.sendMessage("Hello");
const response = await harness.waitForResponse();
```

### 使用诊断工具

- `@vtstech/pi-diag` — 扩展诊断
- `@vtstech/pi-model-test` — 模型测试
- `pi-pkg-guard` — 检测未注册的扩展包

---

## 发布

1. 确保 `keywords` 包含 `"pi-package"`
2. 发布到 npm：`npm publish`
3. 用户在 PI 中通过 `pi-pack` 或直接 `npm install` 安装

---

## 参考

- [pi-mono 源码](https://github.com/badlogic/pi-mono)
- [扩展类型定义](https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/src/core/extensions/types.ts)
- [扩展加载器](https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/src/core/extensions/loader.ts)
