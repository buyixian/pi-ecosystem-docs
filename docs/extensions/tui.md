# TUI & Display — 终端界面扩展

> 97 个包 | 最高月下载量 12,052 (pi-markdown-preview)

## 概述

美化 PI 的终端体验：状态栏、工具渲染、Markdown 预览、代码高亮。

## 核心方案

### 状态栏
| 方案 | 月下载 | 特点 |
|------|--------|------|
| `pi-powerline-footer` | 11,650 | ⭐ Powerline 风格，最受欢迎 |
| `pi-glance` | 1,439 | 圆角多行编辑器 + inline 模型状态 |
| `pi-git-status-line` | custom | Git 分支、未提交文件显示 |
| `@alasano/pi-panels` | custom | Git + LLM 上下文 + Spotify 面板 |

### 内容渲染
| 方案 | 月下载 | 特点 |
|------|--------|------|
| `pi-markdown-preview` | 12,052 | ⭐ Markdown+LaTeX，支持终端/浏览器/PDF |
| `pi-tool-display` | 2,867 | 工具调用紧凑渲染 + diff 可视化 |
| `pi-code-previews` | 1,349 | 语法高亮代码预览 |

### 可视化
| 方案 | 月下载 | 特点 |
|------|--------|------|
| `pi-mermaid` | 5,147 | Mermaid 图 ASCII 渲染 |
| `@walterra/pi-charts` | 4,169 | Vega-Lite 图表内联渲染 |
| `pi-drawio` | custom | draw.io 图表生成 |

## UI 扩展 API

```typescript
// Footer 定制
api.on("resources_discover", () => ({
  footerDataProvider: { getFooterData: () => ({ segments: [...] }) }
}));

// Widget 挂载
ctx.ui.setWidget("my-panel", content, { placement: "aboveEditor" });
```
