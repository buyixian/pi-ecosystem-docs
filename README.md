# PI 扩展生态系统文档

> PI 编码代理的 npm 扩展包生态调研（2,364 包）· 16 大分类 · 开发指南 · 自动更新
> 中文为默认版本，英文镜像见 [生态总览英文版](docs/pi-ecosystem-overview.en.md) 和 [全量插件目录英文版](docs/pi-extension-catalog.en.md) · 全量目录见 [PI 全量插件目录](docs/pi-extension-catalog.md) · 文档由 `scripts/generate-docs-from-data.mjs` 自动维护

## 🎯 快速选型

| 目标 | 首选插件 | 安装命令 | 备选 | 看点 |
| ---- | -------- | -------- | ---- | ---- |
| 多代理委派 | [`pi-subagents`](https://www.npmjs.com/package/pi-subagents) | `npm install pi-subagents` | `pi-crew`, `pi-minions` | 链式/并行委派，适合长任务 |
| MCP 工具接入 | [`pi-mcp-adapter`](https://www.npmjs.com/package/pi-mcp-adapter) | `npm install pi-mcp-adapter` | `context-mode`, `@spences10/pi-mcp` | 连接外部 MCP 服务器 |
| Web 搜索/抓取 | [`pi-web-access`](https://www.npmjs.com/package/pi-web-access) | `npm install pi-web-access` | `@ollama/pi-web-search`, `pi-web-providers` | 搜索、抓取、PDF、GitHub |
| 上下文管理 | [`pi-continue`](https://www.npmjs.com/package/pi-continue) | `npm install pi-continue` | `pi-context-prune`, `@sting8k/pi-vcc` | 压缩、裁剪、恢复 |
| 工作流 | [`@plannotator/pi-extension`](https://www.npmjs.com/package/@plannotator/pi-extension) | `npm install @plannotator/pi-extension` | `pi-gsd`, `@juicesharp/rpiv-pi` | 计划、执行、审查 |
| 用户交互 | [`@juicesharp/rpiv-ask-user-question`](https://www.npmjs.com/package/@juicesharp/rpiv-ask-user-question) | `npm install @juicesharp/rpiv-ask-user-question` | `@juicesharp/rpiv-todo`, `pi-interview` | 结构化提问与待办 |
| 代码质量 | [`pi-lens`](https://www.npmjs.com/package/pi-lens) | `npm install pi-lens` | `pi-simplify`, `pi-review-loop` | LSP、审查、格式化 |
| 提示词/代理模式 | [`glimpseui`](https://www.npmjs.com/package/glimpseui) | `npm install glimpseui` | `pi-prompt-template-model`, `pi-boomerang` | 模板、模式、自主执行 |

## 📚 核心文档

| 文档                                                | 说明                                                   |
| --------------------------------------------------- | ------------------------------------------------------ |
| [生态总览](docs/pi-ecosystem-overview.md)           | 中文默认版：快速选型、Top 20 榜单、34 细分类别概览     |
| [生态总览（English）](docs/pi-ecosystem-overview.en.md) | 英文镜像：对应中文版总览，便于英文读者直接浏览        |
| [全量插件目录](docs/pi-extension-catalog.md)       | 中文全量索引：所有插件、自动排行、直接安装命令        |
| [全量插件目录（English）](docs/pi-extension-catalog.en.md) | 英文全量索引：所有插件、自动排行、直接安装命令        |
| [扩展开发指南](docs/extension-development-guide.md) | 25+ 生命周期钩子、ToolDefinition API、5 种开发模式     |
| [推荐与评估](docs/extension-curation.md)            | 精选推荐、质量金标、安装前安全检查清单                 |

## 🧭 文档成熟度与覆盖

| 文档 | 成熟度 | 覆盖范围 | 维护方式 |
| ---- | ------ | -------- | -------- |
| 生态总览 | 高 | 快速选型、热门榜单、分类概览 | 自动生成，中英双语 |
| 全量插件目录 | 高 | 2,364 个插件、直接安装命令 | 自动生成，中英双语 |
| `docs/extensions/*` 子文档 | 高 | 各分类的安装速查与完整清单入口 | 自动生成，人工正文保留 |
| 推荐与评估 | 中高 | 精选推荐、金标方案、使用建议 | 人工维护，参考自动排行 |

自动排行规则是：`月下载量 -> 周下载量 -> 被依赖数 -> 包名`。少量人工矫正统一放在 `scripts/doc-overrides.mjs`，只改精选顺序，不改全量覆盖。

## 🔌 分类文档（16 类）

### 能力层

| 分类                | 包数 | 最高月下载 | 详情                             |
| ------------------- | ---- | ---------- | -------------------------------- |
| Provider 模型供应商 | 60   | 1,792      | [→](docs/extensions/provider.md) |
| MCP 协议适配        | 63   | 59,788     | [→](docs/extensions/mcp.md)      |
| Web 网络访问        | 145  | 34,332     | [→](docs/extensions/web.md)      |
| Memory 记忆系统     | 73   | 8,013      | [→](docs/extensions/memory.md)   |
| Context 上下文管理  | 92   | 2,677      | [→](docs/extensions/context.md)  |

### 行为层

| 分类                   | 包数 | 最高月下载 | 详情                                      |
| ---------------------- | ---- | ---------- | ----------------------------------------- |
| SubAgent 多代理        | 99   | 70,608     | [→](docs/extensions/subagent.md)          |
| Workflow 工作流        | 53   | 21,911     | [→](docs/extensions/workflow.md)          |
| Prompt 提示词/代理模式 | 62   | 8,683      | [→](docs/extensions/prompt-agent-mode.md) |

### 交互层

| 分类                      | 包数 | 最高月下载 | 详情                                       |
| ------------------------- | ---- | ---------- | ------------------------------------------ |
| TUI 终端界面              | 97   | 12,052     | [→](docs/extensions/tui.md)                |
| User Interaction 用户交互 | 39   | 11,982     | [→](docs/extensions/user-interaction.md)   |
| Audio & Notification      | 53   | 2,208      | [→](docs/extensions/audio-notification.md) |

### 质量层

| 分类                     | 包数 | 最高月下载 | 详情                                  |
| ------------------------ | ---- | ---------- | ------------------------------------- |
| Code Quality 代码质量    | 44   | 13,237     | [→](docs/extensions/code-quality.md)  |
| Tool & Security 工具安全 | 71   | 6,421      | [→](docs/extensions/tool-security.md) |

### 生态层

| 分类                      | 包数 | 最高月下载 | 详情                                |
| ------------------------- | ---- | ---------- | ----------------------------------- |
| Skill 技能包              | 110  | 7,370      | [→](docs/extensions/skill.md)       |
| Integration 外部集成      | 27   | 5,802      | [→](docs/extensions/integration.md) |
| Meta & Utilities 元包工具 | 46   | 5,347      | [→](docs/extensions/meta.md)        |

## 🔄 自动更新

- GitHub Actions **每周一 03:00 UTC** 同步 npm registry
- 自动分类、统计、生成报告
- 变更通过自动 PR 提交

## 🤝 贡献

见 [CONTRIBUTING.md](CONTRIBUTING.md)

## 📊 原始数据

| 文件                         | 说明                    |
| ---------------------------- | ----------------------- |
| `data/all-packages.json`     | 全量 2,364 包结构化数据 |
| `data/classified-v2.json`    | 34 细分类别包列表       |
| `data/ecosystem-report.json` | 统计报告                |
