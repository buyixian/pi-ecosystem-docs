# Context — 上下文管理扩展

> 92 个包 | 最高月下载量 2,677 (pi-continue)

## 概述

Context 扩展解决 PI 最核心的工程问题：**上下文窗口有限，如何管理长对话**。涵盖压缩、裁剪、手递（handoff）和继续执行。

## 核心问题

LLM 上下文窗口是硬约束。PI 的典型会话轻松达到 50k+ tokens，而后续 prompt 需要历史上下文。Context 扩展回答三个问题：

1. **何时压缩**——上下文达到多少触发压缩？
2. **如何压缩**——保留什么，丢弃什么？
3. **如何恢复**——压缩后如何让代理继续工作？

## 关键方案

| 方案 | 月下载 | 策略 | 适用 |
|------|--------|------|------|
| `pi-context` | 1,728 | 代理自主管理 + checkpoint + time-travel | 通用 |
| `pi-continue` | 2,677 | 中轮压缩 + 结构手递账本 + 同会话恢复 | 长任务 |
| `pi-context-prune` | 2,397 | 裁剪旧上下文，保留工具调用历史 | 上下文优化 |
| `@sting8k/pi-vcc` | 2,580 | 算法压缩，保留对话转录 | 精确压缩 |
| `pi-subdir-context` | 1,506 | 自动加载子目录 AGENTS.md | 多项目 |
| `@ssweens/pi-handoff` | custom | 增强手递 | 代理切换 |

## 压缩策略对比

```
策略 A: 摘要式 (pi-context)
  旧消息 → LLM 摘要 → 替换原始消息
  优点: 信息密度高
  缺点: 摘要质量不稳定

策略 B: 裁剪式 (pi-context-prune)
  旧消息 → 直接删除 → 保留工具调用骨架
  优点: 精确、可预测
  缺点: 丢失对话细节

策略 C: 账本式 (pi-continue)
  关键状态 → 结构化记录 → 新会话载入
  优点: 可跨会话
  缺点: 需要提前规划账本结构
```

## 选型建议

- **长任务（>30 分钟）**：`pi-continue`
- **日常优化**：`pi-context-prune`  
- **多项目管理**：`pi-subdir-context` + `pi-context`

<!-- AUTO-GENERATED-INSTALL:START -->
## 安装速查

以下为自动排行后的推荐安装入口，命令均可直接复制。

### 主推安装

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-continue](https://www.npmjs.com/package/pi-continue) | 3,311 | `npm install pi-continue` | Mid-turn continuation for long Pi tool runs: compact safely before context overflow, th… |
| 2 | [pi-context-prune](https://www.npmjs.com/package/pi-context-prune) | 2,574 | `npm install pi-context-prune` | Pi extension package for pruning future context while preserving original tool-call his… |
| 3 | [@sting8k/pi-vcc](https://www.npmjs.com/package/@sting8k/pi-vcc) | 2,682 | `npm install @sting8k/pi-vcc` | Algorithmic conversation compactor for pi - transcript-preserving structured summaries,… |
| 4 | [pi-bar](https://www.npmjs.com/package/pi-bar) | 4,295 | `npm install pi-bar` | Pi footer/statusline showing active model, thinking level, context pressure, live progr… |
| 5 | [@spences10/pi-context](https://www.npmjs.com/package/@spences10/pi-context) | 2,476 | `npm install @spences10/pi-context` | Searchable local SQLite sidecar that keeps oversized Pi tool output useful without floo… |

### 全量目录

本分类的完整插件清单与安装命令见 [PI 全量插件目录](../pi-extension-catalog.md)。
<!-- AUTO-GENERATED-INSTALL:END -->
