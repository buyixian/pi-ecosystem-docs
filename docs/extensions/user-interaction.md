# User Interaction — 用户交互扩展

> 39 个包 | 最高月下载量 11,982 (@juicesharp/rpiv-ask-user-question)

## 概述

让代理**知道何时该问人**。这不是传统的 UI 组件，而是"代理向上管理"的能力——结构化提问、待办跟踪、第二意见请求。

## rpiv 家族（@juicesharp）

同一作者用 12 个微包覆盖了代理-人交互的全链路：

| 包 | 月下载 | 解决的问题 |
|------|--------|----------|
| `rpiv-ask-user-question` | 11,982 | 代理不瞎猜，用结构化问卷问 |
| `rpiv-todo` | 11,493 | 持久待办，跨 /reload 存活 |
| `rpiv-advisor` | 9,294 | 行动前问更强模型（第二意见） |
| `rpiv-btw` | 8,998 | 不污染主对话的侧提问 |
| `rpiv-args` | 7,370 | shell 风格参数传递给 skill |
| `rpiv-i18n` | 1,795 | 多语言支持 |
| `rpiv-web-tools` | 9,054 | Brave 搜索集成 |

## 其他重要方案

| 方案 | 月下载 | 特点 |
|------|--------|------|
| `pi-ask-user` | 7,740 | 可分屏选择的交互式 ask_user |
| `pi-interview` | 3,379 | 访谈表单 |
| `pi-mono-ask-user-question` | 1,407 | 结构化用户输入（单选/多选/自由文本） |
| `@pi-unipi/ask-user` | 1,341 | Unipi 套件中的用户输入组件 |

## 设计理念

rpiv 系列的核心洞察：**代理的瓶颈不是能力，是信息不对称**。

```
传统模式: 代理猜测 → 执行 → 用户纠正
rpiv 模式: 代理识别不确定性 → 结构化提问 → 获得明确答案 → 执行
```

<!-- AUTO-GENERATED-INSTALL:START -->
## 安装速查

以下为自动排行后的推荐安装入口，命令均可直接复制。

### 主推安装

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@juicesharp/rpiv-ask-user-question](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question) | 23,282 | `npm install @juicesharp/rpiv-ask-user-question` | Pi extension. A structured questionnaire the model can put to you when it would otherwi… |
| 2 | [@juicesharp/rpiv-todo](https://www.npmjs.com/package/@juicesharp/rpiv-todo) | 23,195 | `npm install @juicesharp/rpiv-todo` | Pi extension. A todo list for the model, rendered as a live overlay that survives /relo… |
| 3 | [@juicesharp/rpiv-btw](https://www.npmjs.com/package/@juicesharp/rpiv-btw) | 12,685 | `npm install @juicesharp/rpiv-btw` | Pi extension. The /btw slash command, for putting a one-off side question to the same p… |
| 4 | [pi-ask-user](https://www.npmjs.com/package/pi-ask-user) | 9,864 | `npm install pi-ask-user` | Interactive ask_user tool for pi-coding-agent with searchable split-pane selection UI,… |
| 5 | [pi-interview](https://www.npmjs.com/package/pi-interview) | 3,393 | `npm install pi-interview` | Interactive interview form extension for pi coding agent |

### 全量目录

本分类的完整插件清单与安装命令见 [PI 全量插件目录](../pi-extension-catalog.md)。
<!-- AUTO-GENERATED-INSTALL:END -->
