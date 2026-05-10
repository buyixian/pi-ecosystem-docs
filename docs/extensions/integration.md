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

<!-- AUTO-GENERATED-INSTALL:START -->
## 安装速查

以下为自动排行后的推荐安装入口，命令均可直接复制。

### 主推安装

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [whatsapp-pi](https://www.npmjs.com/package/whatsapp-pi) | 5,802 | `npm install whatsapp-pi` | WhatsApp integration extension for Pi |
| 2 | [@feniix/pi-notion](https://www.npmjs.com/package/@feniix/pi-notion) | 4,872 | `npm install @feniix/pi-notion` | Notion API extension for pi — read, search, and manage Notion pages, databases, and con… |
| 3 | [@llblab/pi-telegram](https://www.npmjs.com/package/@llblab/pi-telegram) | 4,712 | `npm install @llblab/pi-telegram` | Telegram Runtime Adapter for π |
| 4 | [pi-convex](https://www.npmjs.com/package/pi-convex) | 4,573 | `npm install pi-convex` | Pi extension for Convex Cloud - queries, mutations, project management, and best practi… |
| 5 | [@venthezone/picord](https://www.npmjs.com/package/@venthezone/picord) | 1,399 | `npm install @venthezone/picord` | Discord integration extension for pi that maps project channels to workspaces and threa… |

### 全量目录

本分类的完整插件清单与安装命令见 [PI 全量插件目录](../pi-extension-catalog.md)。
<!-- AUTO-GENERATED-INSTALL:END -->
