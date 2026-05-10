# Meta & Utilities — 元包与工具

> 46 个包 | 最高月下载量 5,347 (pi-depo)

## 概述

管理扩展生态本身的扩展——包管理、扩展发现、测试诊断、主题/设置。

## 核心方案

### 包管理
| 方案 | 月下载 | 功能 |
|------|--------|------|
| `pi-depo` | 5,347 | ⭐ 声明式包管理（skill/extension/hook/MCP 统一管理） |
| `pi-pack` | custom | 扩展安装器 |
| `pi-pkg-guard` | 1,692 | 未注册包检测 |
| `pi-resource-center` | 1,652 | 浏览包/skill/主题 |

### 扩展套装（All-in-one）
| 方案 | 月下载 | 内容 |
|------|--------|------|
| `@pi-unipi/unipi` | 1,774 | Unipi 全套：memory+btw+ask_user+workflow+notify+info_screen+core |
| `@ifi/oh-pi-extensions` | 1,792 | git-guard+auto-session+custom-footer |
| `@davidorex/pi-project-workflows` | 1,428 | 项目工作流三件套 |

### 测试与诊断
| 方案 | 月下载 | 功能 |
|------|--------|------|
| `@marcfargas/pi-test-harness` | 2,552 | 扩展测试框架 |
| `@vtstech/pi-diag` | 2,853 | 扩展诊断 |
| `@vtstech/pi-model-test` | 2,935 | 模型基准测试 |

### 设置与主题
| 方案 | 月下载 | 功能 |
|------|--------|------|
| `@juanibiapina/pi-extension-settings` | 2,137 | 集中式扩展设置管理 |
| `@ifi/oh-pi-themes` | 3,836 | 主题包（cyberpunk/nord/gruvbox/tokyo-night/catppuccin） |

## 推荐组合

```bash
# 生态管理基础套件
pi-depo                      # 统一包管理
pi-resource-center           # 发现新包
@juanibiapina/pi-extension-settings  # 集中设置
@marcfargas/pi-test-harness  # 扩展测试
```

<!-- AUTO-GENERATED-INSTALL:START -->
## 安装速查

以下为自动排行后的推荐安装入口，命令均可直接复制。

### 包管理与元包

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [pi-depo](https://www.npmjs.com/package/pi-depo) | 5,347 | `npm install pi-depo` | Declarative package manager for Pi Coding Agent - skills, extensions, hooks, MCP servers |
| 2 | [pi-extension-installer](https://www.npmjs.com/package/pi-extension-installer) | 724 | `npm install pi-extension-installer` | Browse and install Pi community packages — interactive TUI browser with arrow-key navig… |
| 3 | [pi-resource-center](https://www.npmjs.com/package/pi-resource-center) | 1,652 | `npm install pi-resource-center` | Pi package for browsing packages, skills, extensions, prompts, and themes |
| 4 | [pi-pkg-guard](https://www.npmjs.com/package/pi-pkg-guard) | 1,692 | `npm install pi-pkg-guard` | Guards against unregistered pi packages — installed via npm but not registered in pi's… |
| 5 | [@pi-unipi/core](https://www.npmjs.com/package/@pi-unipi/core) | 3,445 | `npm install @pi-unipi/core` | Shared utilities, event types, and constants for Unipi extension suite |

### 仪表盘

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@blackbelt-technology/pi-agent-dashboard](https://www.npmjs.com/package/@blackbelt-technology/pi-agent-dashboard) | 3,082 | `npm install @blackbelt-technology/pi-agent-dashboard` | Web dashboard for monitoring and interacting with pi agent sessions |
| 2 | [@pi-unipi/info-screen](https://www.npmjs.com/package/@pi-unipi/info-screen) | 2,932 | `npm install @pi-unipi/info-screen` | Dashboard and module registry for Unipi — configurable info overlay with tabbed groups |
| 3 | [@braintrust/pi-extension](https://www.npmjs.com/package/@braintrust/pi-extension) | 883 | `npm install @braintrust/pi-extension` | Braintrust extension for pi. Includes automatic tracing for pi sessions, turns, LLM cal… |
| 4 | [pi-observability](https://www.npmjs.com/package/pi-observability) | 580 | `npm install pi-observability` | Live observability dashboard for pi coding agent sessions — tokens, cost, TPS, runtime,… |
| 5 | [@hdkiller/pi-langfuse](https://www.npmjs.com/package/@hdkiller/pi-langfuse) | 486 | `npm install @hdkiller/pi-langfuse` | Production-grade Langfuse observability for Pi. Tracks prompts, turns, tools, and strea… |

### 设置与主题

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@axnic/pi-extension-settings](https://www.npmjs.com/package/@axnic/pi-extension-settings) | 2,255 | `npm install @axnic/pi-extension-settings` | Centralized settings panel for pi extensions. |
| 2 | [@juanibiapina/pi-extension-settings](https://www.npmjs.com/package/@juanibiapina/pi-extension-settings) | 2,137 | `npm install @juanibiapina/pi-extension-settings` | Pi extension for centralized settings management across extensions |
| 3 | [@ifi/oh-pi-themes](https://www.npmjs.com/package/@ifi/oh-pi-themes) | 3,836 | `npm install @ifi/oh-pi-themes` | Color themes for pi: cyberpunk, nord, gruvbox, tokyo-night, catppuccin, and more. |
| 4 | [pi-studio](https://www.npmjs.com/package/pi-studio) | 5,873 | `npm install pi-studio` | Two-pane browser workspace for pi with prompt/response editing, annotations, critiques,… |
| 5 | [pi-terminal-theme](https://www.npmjs.com/package/pi-terminal-theme) | 1,106 | `npm install pi-terminal-theme` | Pi theme that maps UI colors to ANSI 0..15. |

### 测试与诊断

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@vtstech/pi-model-test](https://www.npmjs.com/package/@vtstech/pi-model-test) | 2,935 | `npm install @vtstech/pi-model-test` | Model benchmark/testing extension for Pi Coding Agent |
| 2 | [@vtstech/pi-diag](https://www.npmjs.com/package/@vtstech/pi-diag) | 2,853 | `npm install @vtstech/pi-diag` | Diagnostics extension for Pi Coding Agent |
| 3 | [@marcfargas/pi-test-harness](https://www.npmjs.com/package/@marcfargas/pi-test-harness) | 2,552 | `npm install @marcfargas/pi-test-harness` | Test harness for pi extensions — in-process session testing, package install verificati… |
| 4 | [pi-droid](https://www.npmjs.com/package/pi-droid) | 301 | `npm install pi-droid` | Android phone control for pi-agent — 36 tools to see, touch, and automate any device vi… |
| 5 | [@gaodes/pi-test-harness](https://www.npmjs.com/package/@gaodes/pi-test-harness) | 204 | `npm install @gaodes/pi-test-harness` | Test harness for pi extensions — in-process session testing, package install verificati… |

### 全量目录

本分类的完整插件清单与安装命令见 [PI 全量插件目录](../pi-extension-catalog.md)。
<!-- AUTO-GENERATED-INSTALL:END -->
