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
