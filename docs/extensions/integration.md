# Integration — 外部平台集成

> 27 个包 | 最高月下载量 5,802 (whatsapp-pi)

## 概述

让 PI 与外部平台双向通信：消息平台、项目管理工具、密码管理器、数据库后端。

## 核心方案

### 消息平台
| 方案 | 月下载 | 平台 |
|------|--------|------|
| `whatsapp-pi` | 5,802 | WhatsApp |
| `@llblab/pi-telegram` | 4,712 | Telegram Runtime Adapter |
| `@venthezone/picord` | 1,399 | Discord（频道→workspace 映射） |
| `@friendlyrobot/discord-pi-agent` | custom | Discord Gateway |

### 生产力工具
| 方案 | 月下载 | 平台 |
|------|--------|------|
| `@feniix/pi-notion` | 4,872 | Notion（读/搜/管页面和数据库） |
| `pi-convex` | 4,573 | Convex Cloud（查询/变更/项目管理） |
| `pi-1password` | 1,382 | 1Password 密钥管理 |
| `clickup-cu` | custom | ClickUp CLI + PI prompt 快捷方式 |

### 开发平台
| 方案 | 月下载 | 平台 |
|------|--------|------|
| `@eforge-build/pi-eforge` | 2,751 | eforge 构建系统 |
| `@unbrained/pm-cli` | 1,439 | Git-native 项目管理 |

## 集成模式

```
单向通知: PI → 外部平台（通知/状态推送）
双向交互: PI ↔ 外部平台（命令+响应）
深度嵌入: 外部平台作为 PI 运行载体（Telegram Runtime）
```
