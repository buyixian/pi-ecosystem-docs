# Code Quality — 代码质量扩展

> 44 个包 | 最高月下载量 13,237 (pi-lens)

## 概述

让 PI 生成的代码**经过机器审查**——Lint、LSP、格式化、类型检查，在代理输出后立即反馈。

## 核心方案

| 方案 | 月下载 | 覆盖 |
|------|--------|------|
| `pi-lens` | 13,237 | ⭐ 一体化：LSP + Biome + ast-grep + ruff + TypeScript + jscpd + knip |
| `pi-simplify` | 10,180 | AI 审查：可读性、一致性、可维护性 |
| `pi-code-review` | custom | 自动化语言感知代码审查 |
| `pi-code-previews` | 1,349 | 语法高亮工具调用预览 |
| `@lpirito/pi-diffloop` | 2,154 | pair programming，实时感知变更 |
| `@spences10/pi-lsp` | 2,092 | LSP 诊断、悬停、定义跳转 |

## 审查维度

`pi-lens` 的六层检查：
```
LSP 诊断 → Biome 格式化 → ast-grep 结构 → ruff Python → 
TypeScript 类型覆盖 → jscpd 重复检测 → knip 死代码
```

## 选型

- **全能选手**：`pi-lens`（6 种工具一次配齐）
- **AI 辅助**：`pi-simplify`（语义级建议，非规则匹配）
- **实时编码**：`@lpirito/pi-diffloop`（结对编程风格）

<!-- AUTO-GENERATED-INSTALL:START -->
## 安装速查

以下为自动排行后的推荐安装入口，命令均可直接复制。

### 主推安装

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-simplify](https://www.npmjs.com/package/pi-simplify) | 17,131 | `npm install pi-simplify` | A Pi extension that reviews recently changed code for clarity, consistency, and maintai… |
| 2 | [pi-lens](https://www.npmjs.com/package/pi-lens) | 17,114 | `npm install pi-lens` | Real-time code feedback for pi — LSP, linters, formatters, type-checking, structural an… |
| 3 | [@spences10/pi-lsp](https://www.npmjs.com/package/@spences10/pi-lsp) | 3,430 | `npm install @spences10/pi-lsp` | Language Server Protocol tools for Pi agents to inspect diagnostics, hovers, definition… |
| 4 | [@nahuelcio/opencode-ado](https://www.npmjs.com/package/@nahuelcio/opencode-ado) | 2,870 | `npm install @nahuelcio/opencode-ado` | Azure DevOps plugin for OpenCode — PR reviews, profiles, sidebar panel |
| 5 | [pi-slopchop](https://www.npmjs.com/package/pi-slopchop) | 1,422 | `npm install pi-slopchop` | Terminal-native code review and annotation workflow for the Pi coding agent. |

### 全量目录

本分类的完整插件清单与安装命令见 [PI 全量插件目录](../pi-extension-catalog.md)。
<!-- AUTO-GENERATED-INSTALL:END -->
