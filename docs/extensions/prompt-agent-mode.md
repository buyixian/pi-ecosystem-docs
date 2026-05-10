# Prompt & Agent Mode — 提示词与代理模式

> 62 个包 | 最高月下载量 8,683 (glimpseui)

## 概述

控制代理**如何思考**和**以什么模式运行**——提示词模板、模型选择、自主循环、输出风格。

## 核心方案

### 提示词管理
| 方案 | 月下载 | 功能 |
|------|--------|------|
| `pi-prompt-template-model` | 5,775 | 提示词模板 + 模型选择器 |
| `pi-schedule-prompt` | 5,006 | 定时/循环触发代理提示 |
| `@guwidoe/pi-prompt-suggester` | 1,157 | 意图感知的下一个提示建议 |
| `pi-prompt-shelf` | custom | stash 提示词 + 快捷键取回 |

### 代理模式
| 方案 | 月下载 | 模式 |
|------|--------|------|
| `pi-agent-mode` | 1,484 | OpenCode 式默认代理模式，Markdown+YAML frontmatter |
| `pi-caveman` | 2,357 | Caveman 模式，砍掉 ~75% 输出 token |
| `pi-boomerang` | 1,582 | Token 高效自主任务执行 + 上下文折叠 |
| `@tmustier/pi-ralph-wiggum` | 6,130 | 长循环自主迭代开发 |
| `@lnilluv/pi-ralph-loop` | 3,040 | 自主编码循环 + 中轮监督 |

### UI 桥接
| 方案 | 月下载 | 功能 |
|------|--------|------|
| `glimpseui` | 8,683 | 原生微 UI，跨平台 WebView 窗口 + JSON 双向通信 |

## 自主模式光谱

```
完全交互式 ←————————————————————→ 完全自主
    |              |                    |
 默认模式    prompt-suggester    ralph-loop/boomerang
 (每步确认)   (智能建议)          (多步骤自主)
```

## 选型

- **省 token**：`pi-caveman`
- **批量处理**：`pi-boomerang` 或 `ralph-loop`
- **模板化**：`pi-prompt-template-model`

<!-- AUTO-GENERATED-INSTALL:START -->
## 安装速查

以下为自动排行后的推荐安装入口，命令均可直接复制。

### 提示词管理

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [glimpseui](https://www.npmjs.com/package/glimpseui) | 8,683 | `npm install glimpseui` | Native micro-UI for scripts and agents — cross-platform WebView windows with bidirectio… |
| 2 | [pi-prompt-template-model](https://www.npmjs.com/package/pi-prompt-template-model) | 5,775 | `npm install pi-prompt-template-model` | Prompt template model selector extension for pi coding agent |
| 3 | [pi-schedule-prompt](https://www.npmjs.com/package/pi-schedule-prompt) | 5,006 | `npm install pi-schedule-prompt` | Pi's Heartbeat - A pi extension for scheduling recurring and one-shot agent prompts wit… |
| 4 | [@ifi/oh-pi-prompts](https://www.npmjs.com/package/@ifi/oh-pi-prompts) | 1,755 | `npm install @ifi/oh-pi-prompts` | Prompt templates for pi: review, fix, explain, refactor, test, commit, and more. |
| 5 | [@guwidoe/pi-prompt-suggester](https://www.npmjs.com/package/@guwidoe/pi-prompt-suggester) | 1,157 | `npm install @guwidoe/pi-prompt-suggester` | Intent-aware next-prompt suggestion extension for pi |

### 代理模式

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-caveman](https://www.npmjs.com/package/pi-caveman) | 2,357 | `npm install pi-caveman` | Why use many token when few do trick. Caveman mode for pi — cuts ~75% output tokens whi… |
| 2 | [pi-boomerang](https://www.npmjs.com/package/pi-boomerang) | 1,582 | `npm install pi-boomerang` | Token-efficient autonomous task execution with context collapse |
| 3 | [@tmustier/pi-ralph-wiggum](https://www.npmjs.com/package/@tmustier/pi-ralph-wiggum) | 6,130 | `npm install @tmustier/pi-ralph-wiggum` | Long-running agent loops for iterative development in Pi. |
| 4 | [@lnilluv/pi-ralph-loop](https://www.npmjs.com/package/@lnilluv/pi-ralph-loop) | 3,040 | `npm install @lnilluv/pi-ralph-loop` | Pi-native ralph loop — autonomous coding iterations with mid-turn supervision |
| 5 | [pi-agent-mode](https://www.npmjs.com/package/pi-agent-mode) | 1,484 | `npm install pi-agent-mode` | OpenCode-style default agent mode for PI. Markdown agents with YAML frontmatter. Ctrl+S… |

### 全量目录

本分类的完整插件清单与安装命令见 [PI 全量插件目录](../pi-extension-catalog.md)。
<!-- AUTO-GENERATED-INSTALL:END -->
