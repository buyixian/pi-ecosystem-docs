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
