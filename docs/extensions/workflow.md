# Workflow — 工作流扩展

> 53 个包 | 最高月下载量 21,911 (@plannotator/pi-extension)

## 概述

Workflow 扩展为 PI 注入**结构化开发流程**：规划→执行→审查→验证。让代理不只"写代码"，而是"按工程方法论交付"。

## 核心方案

| 方案 | 月下载 | 核心理念 |
|------|--------|---------|
| `@plannotator/pi-extension` | 21,911 | 交互式计划审查 + 注解式代码评审 |
| `pi-gsd` | 10,542 | Get Shit Done — spec-driven 开发工具包移植 |
| `@juicesharp/rpiv-pi` | 8,855 | 五阶段 skill-based 开发：research→design→implement→review→deploy |
| `@tianhai/pi-workflow-kit` | 2,144 | brainstorm→plan→execute→finalize + TDD 纪律 |
| `@davidorex/pi-workflows` | 1,793 | 工作流编排 + 行为监控 + 项目状态 |

## 三种流派

```
流派 A: 计划驱动 (@plannotator, pi-gsd)
  需求 → 计划 → 审查计划 → 执行 → 验证
  适用: 大型功能、架构变更

流派 B: 技能驱动 (rpiv-pi)
  自动选择 research/design/implement/review/deploy skill
  适用: 端到端交付

流派 C: 纪律驱动 (@tianhai/pi-workflow-kit)
  TDD 强制、guard-rail 检查
  适用: 关键系统、合规要求
```
