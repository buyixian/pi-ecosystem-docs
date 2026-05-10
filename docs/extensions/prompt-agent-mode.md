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
