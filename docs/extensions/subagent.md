# SubAgent — 多代理与子代理编排

> 99 个包 | 最高月下载量 70,608 (pi-subagents)

## 概述

SubAgent 扩展让 PI 能够将复杂任务委派给子代理（子 PI 实例），支持链式、并行执行和 TUI 澄清交互。这是 PI 生态中最受欢迎的扩展类别。

## 核心概念

- **子代理 (SubAgent)**：独立 PI 会话，接收父代理委派的任务
- **编排 (Orchestration)**：管理多个子代理的启动、通信和结果收集
- **Swarm**：对等代理网格，多个代理协作
- **Team Mode**：命名代理团队，各有角色和上下文

---

## 推荐扩展

### pi-subagents ⭐
- 📦 `pi-subagents` | 70,608/月 | [GitHub](https://github.com/nicopreme/pi-subagents)
- 🔧 功能：链式/并行任务委派、TUI 澄清对话框
- 💡 适用场景：大型重构、多文件并行修改

### pi-crew
- 📦 `pi-crew` | 6,362/月
- 🔧 功能：协调式 AI 团队、Worktree 隔离、异步任务编排
- 💡 适用场景：多分支并行开发、微服务项目

### pi-minions
- 📦 `pi-minions` | 1,564/月
- 🔧 功能：轻量递归子代理，无内置代理，无偏见
- 💡 适用场景：需要灵活定义子代理行为的场景

### pi-mono-team-mode
- 📦 `pi-mono-team-mode` | 1,463/月
- 🔧 功能：对等代理编排，命名队友，可恢复上下文
- 💡 适用场景：模仿 Claude Code team-mate 模型

### pi-messenger-swarm
- 📦 `pi-messenger-swarm` | 1,533/月
- 🔧 功能：Swarm 优先的消息传递和任务编排
- 💡 适用场景：复杂多步骤工作流

---

## 架构模式

### 模式 A：Master-Worker
单个主代理协调多个工作代理。适合任务明确可分拆的场景。

```
PI 主代理 → subagent_1 (修改 frontend)
         → subagent_2 (修改 backend)
         → subagent_3 (更新测试)
```

### 模式 B：Peer-to-Peer
对等代理彼此通信协作。适合需要多视角审视的问题。

```
PI Agent A ↔ PI Agent B ↔ PI Agent C
```

### 模式 C：Recursive
子代理可以进一步创建子代理。适合深度复杂问题。

```
PI Root → Sub PI → Sub-Sub PI → ...
```

---

## 对比选型

| 特性 | pi-subagents | pi-crew | pi-minions | team-mode | swarm |
|------|:---:|:---:|:---:|:---:|:---:|
| 链式委派 | ✅ | ✅ | ✅ | ❌ | ✅ |
| 并行执行 | ✅ | ✅ | ✅ | ✅ | ✅ |
| TUI 界面 | ✅ | ✅ | ❌ | ❌ | ❌ |
| Worktree 隔离 | ❌ | ✅ | ❌ | ❌ | ❌ |
| 可恢复上下文 | ❌ | ❌ | ❌ | ✅ | ❌ |
| 轻量无依赖 | ❌ | ❌ | ✅ | ❌ | ❌ |
| 下载量 | 70k+ | 6k+ | 1.5k | 1.4k | 1.5k |

<!-- AUTO-GENERATED-INSTALL:START -->
## 安装速查

以下为自动排行后的推荐安装入口，命令均可直接复制。

### 主推安装

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-subagents](https://www.npmjs.com/package/pi-subagents) | 70,608 | `npm install pi-subagents` | Pi extension for delegating tasks to subagents with chains, parallel execution, and TUI… |
| 2 | [pi-crew](https://www.npmjs.com/package/pi-crew) | 6,362 | `npm install pi-crew` | Pi extension for coordinated AI teams, workflows, worktrees, and async task orchestrati… |
| 3 | [pi-minions](https://www.npmjs.com/package/pi-minions) | 1,564 | `npm install pi-minions` | Minimal recursive subagent orchestration for pi. No bundled agents, no opinions. |
| 4 | [taskplane](https://www.npmjs.com/package/taskplane) | 7,639 | `npm install taskplane` | AI agent orchestration for pi — parallel task execution with checkpoint discipline |
| 5 | [@tintinweb/pi-subagents](https://www.npmjs.com/package/@tintinweb/pi-subagents) | 7,587 | `npm install @tintinweb/pi-subagents` | A pi extension extension that brings smart Claude Code-style autonomous sub-agents to p… |

### 全量目录

本分类的完整插件清单与安装命令见 [PI 全量插件目录](../pi-extension-catalog.md)。
<!-- AUTO-GENERATED-INSTALL:END -->
