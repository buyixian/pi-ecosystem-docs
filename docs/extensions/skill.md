# Skill — 技能包扩展

> 110 个包 | 最高月下载量 7,370 (@juicesharp/rpiv-args)

## 概述

Skill 是封装特定领域能力的可复用模块——Git 操作、文档解析、图表生成、数据库查询等。与 Tool 不同，Skill 更偏向**工作流知识**而非底层能力。

## 核心方案

| 方案 | 月下载 | 领域 |
|------|--------|------|
| `@juicesharp/rpiv-args` | 7,370 | shell 风格 $1 参数传递给 skill |
| `@heart-of-gold/toolkit` | 6,099 | 跨平台 skill 安装器 |
| `pi-docparser` | 5,343 | PDF/文档解析 |
| `pi-drawio` | custom | draw.io 图表 |
| `pi-skill-glab` | custom | GitLab CLI 操作 |
| `pi-llm-as-verifier` | custom | LLM 验证器（成对比较、标准分解） |
| `pi-skill-hub` | custom | skill 发现、预览、管理 |
| `@aretw0/git-skills` | 2,425 | GitHub/GitLab 操作 |

## Skill 机制

```typescript
// Skill 本质是带 frontmatter 的 Markdown 指令文件
// .pi/skills/my-skill.md:
/*
---
description: Search and replace across the codebase
tools: [read, grep, bash, edit]
---
Search for PATTERN and replace with REPLACEMENT...
*/

// 代理通过 skill loader 自动发现和使用
pi-skill-hub  // 管理 skill 的 skill
```

## 社区生态

Skill 是**最去中心化**的类别——任何人可以写，通过 GitHub 分发。`@heart-of-gold/toolkit` 试图成为跨 PI/Codex/OpenCode 的统一 skill 安装器。

<!-- AUTO-GENERATED-INSTALL:START -->
## 安装速查

以下为自动排行后的推荐安装入口，命令均可直接复制。

### 主推安装

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@juicesharp/rpiv-args](https://www.npmjs.com/package/@juicesharp/rpiv-args) | 7,370 | `npm install @juicesharp/rpiv-args` | Pi extension. Shell-style $1 and $ARGUMENTS placeholders, expanded into your Pi skills… |
| 2 | [@heart-of-gold/toolkit](https://www.npmjs.com/package/@heart-of-gold/toolkit) | 6,099 | `npm install @heart-of-gold/toolkit` | Cross-platform installer for Heart of Gold skills — works with Codex, OpenCode, Pi, Cla… |
| 3 | [pi-docparser](https://www.npmjs.com/package/pi-docparser) | 5,343 | `npm install pi-docparser` | Pi package that adds a document_parse tool and companion skill for parsing PDFs, Office… |
| 4 | [@aretw0/git-skills](https://www.npmjs.com/package/@aretw0/git-skills) | 2,425 | `npm install @aretw0/git-skills` | First-party git skills: github (gh), gitlab (glab), workflow and commit conventions |
| 5 | [@aretw0/pi-skills](https://www.npmjs.com/package/@aretw0/pi-skills) | 2,208 | `npm install @aretw0/pi-skills` | Skills para criar, configurar e operar o ecossistema pi — extensões, skills, temas, ter… |

### 全量目录

本分类的完整插件清单与安装命令见 [PI 全量插件目录](../pi-extension-catalog.md)。
<!-- AUTO-GENERATED-INSTALL:END -->
