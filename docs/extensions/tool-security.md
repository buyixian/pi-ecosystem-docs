# Tool & Security — 工具与安全扩展

> 71 个包 | 最高月下载量 6,421 (@gotgenes/pi-permission-system)

## 概述

限制 PI 的破坏力：权限系统、沙箱隔离、守护规则、包安全检测。

## 核心方案

| 方案 | 月下载 | 机制 |
|------|--------|------|
| `@gotgenes/pi-permission-system` | 6,421 | ⭐ 权限执行引擎 |
| `@aliou/pi-guardrails` | 4,145 | 守护规则引擎 |
| `pi-sandbox` | 1,477 | OS 级沙箱 + 交互式权限提示 |
| `pi-claude-permissions` | custom | Claude 式 allow/deny/ask 列表 |
| `pi-pkg-guard` | 1,692 | 检测未注册/未授权 npm 包 |
| `@vtstech/pi-security` | 2,984 | 安全扫描扩展 |

## 安全层级

```
L1: 包注册检查 (pi-pkg-guard)
  → 安装的 npm 包是否在 PI 设置中注册？

L2: 权限控制 (pi-claude-permissions, @gotgenes/pi-permission-system)  
  → 工具调用前：allow / deny / ask？

L3: 沙箱隔离 (pi-sandbox)
  → bash 命令是否在隔离环境执行？

L4: 行为守护 (@aliou/pi-guardrails)
  → 代理行为是否符合预设规则？
```

## 最佳实践

```bash
# 最小安全配置
npm install pi-pkg-guard pi-sandbox @gotgenes/pi-permission-system
```
