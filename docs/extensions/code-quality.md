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
