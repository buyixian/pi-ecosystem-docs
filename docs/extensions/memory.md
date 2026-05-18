# Memory — 记忆系统扩展

> 73 个包 | 最高月下载量 8,013 (@samfp/pi-memory)

## 概述

Memory 扩展让 PI 在跨会话中"记住"信息——编码偏好、项目结构、用户习惯。竞争激烈，多套方案各有优劣。

## 核心方案对比

| 方案 | 月下载 | 存储 | 搜索 | 特点 |
|------|--------|------|------|------|
| `@samfp/pi-memory` | 8,013 | JSON/文件 | 语义 | 从会话中学习修正和偏好 |
| `pi-memory-md` | 3,139 | Git + Markdown | FTS5 | Letta 式结构化文件 |
| `pi-memory` | custom | qmd | 语义 | 日志+长期记忆+草稿本三件套 |
| `pi-hindsight` | 1,482 | 自托管 | 混合 | Hindsight 后端 |
| `@pi-unipi/memory` | 1,776 | SQLite-vec | 向量 | 跨会话向量搜索 |
| `pi-agent-memory` | 1,492 | claude-mem | 混合 | 跨引擎持久记忆 |
| `pi-memctx` | 3,883 | 自动注入 | - | 自动上下文注入，非独立存储 |

## 架构分歧

```
方案 A: 学习式 (@samfp/pi-memory)
  观察会话 → 提取模式 → 注入未来对话
  优点: 无需手动管理
  缺点: 学习质量依赖会话质量

方案 B: 文件式 (pi-memory-md)  
  每次重要信息 → 写 Markdown → Git 追踪
  优点: 透明、可审计
  缺点: 需要代理主动写

方案 C: 向量式 (@pi-unipi/memory)
  所有对话 → embed → SQLite-vec → 语义召回
  优点: 全自动、可搜索
  缺点: 存储成本、噪音
```

## 选型建议

- 想**零配置开始**：`@samfp/pi-memory`（学习式，最热门）
- 想**可控可审计**：`pi-memory-md`（文件式，Git 友好）
- 想**终极搜索能力**：`@pi-unipi/memory`（向量式）
- 想**自托管数据**：`pi-hindsight`

<!-- AUTO-GENERATED-INSTALL:START -->
## 安装速查

以下为自动排行后的推荐安装入口，命令均可直接复制。

### 主推安装

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@samfp/pi-memory](https://www.npmjs.com/package/@samfp/pi-memory) | 10,249 | `npm install @samfp/pi-memory` | Persistent memory for pi — learns corrections, preferences, and patterns from sessions… |
| 2 | [pi-hermes-memory](https://www.npmjs.com/package/pi-hermes-memory) | 6,184 | `npm install pi-hermes-memory` | 🧠 Persistent memory + 🔍 session search + 🛡️ secret scanning for Pi. Token-aware poli… |
| 3 | [pi-memctx](https://www.npmjs.com/package/pi-memctx) | 4,150 | `npm install pi-memctx` | Automatic memory context injection for pi coding agent. Load, search, and persist knowl… |
| 4 | [pi-memory-md](https://www.npmjs.com/package/pi-memory-md) | 3,303 | `npm install pi-memory-md` | Letta-like memory management for pi using structured markdown files in a git repository |
| 5 | [pi-total-recall](https://www.npmjs.com/package/pi-total-recall) | 2,990 | `npm install pi-total-recall` | Complete context stack for pi — persistent memory, session history search, and local kn… |

### 全量目录

本分类的完整插件清单与安装命令见 [PI 全量插件目录](../pi-extension-catalog.md)。
<!-- AUTO-GENERATED-INSTALL:END -->
