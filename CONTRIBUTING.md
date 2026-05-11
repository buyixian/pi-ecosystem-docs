# 社区贡献规范

感谢你对 PI 扩展生态文档的贡献！

## 如何贡献

### 提交新扩展信息

如果你发现了一个值得收录的 PI 扩展（npm keyword: `pi-package`）：

1. **自动发现**：我们的 GitHub Actions 每周一自动同步 npm registry，大多数新扩展会被自动收录
2. **手动推荐**：对于未被自动采集到的扩展，请提交 Issue：
   - 标题：`[Extension] 包名`
   - 内容：功能描述 + 推荐理由

### 改进分类

如果你认为某个扩展的分类不准确：

1. 提交 PR 修改 `scripts/sync-npm-registry.mjs` 中的 `classify()` 函数
2. 在 PR 描述中说明为什么需要调整分类规则
3. 提供 2+ 个受影响的包作为例证

### 补充分类文档

`docs/extensions/` 下的分类文档欢迎扩展：

- 添加使用示例
- 补充架构对比
- 更新版本兼容信息
- 添加社区评价/反馈

### 提交扩展开发指南改进

`docs/extension-development-guide.md` 的改进：

1. 基于 `pi-mono` 最新版本验证代码示例
2. 添加常见问题解答
3. 补充调试技巧

## PR 流程

1. Fork 本仓库
2. 创建特性分支：`feat/your-change`
3. 提交修改
4. 确保以下命令都能通过：
   - `node scripts/sync-npm-registry.mjs --dry-run`（仅用现有 JSON 重新分类/生成报告）
   - `node scripts/generate-docs-from-data.mjs`（重生成文档）
   - `node scripts/generate-changelog.mjs`（生成本次变更日志条目）
5. 发起 Pull Request

## 自动化管线说明

每周一 03:00 UTC 由 GitHub Actions 按以下顺序执行：

1. `sync-npm-registry.mjs` 拉取 npm 数据，写入 `data/all-packages.json`、`data/classified-v2.json`、`data/ecosystem-report.json`
2. 检测 `data/` 有变化后，运行 `generate-docs-from-data.mjs` 重生成中英双语文档
3. 运行 `generate-changelog.mjs`，对比 `data/.changelog-snapshot.json` 和最新数据，把本周差异（新增/消失包、下载量涨跌 Top 5）追加到 `CHANGELOG.md`
4. `peter-evans/create-pull-request` 把所有改动打包成 PR（分支 `auto/ecosystem-update`）

> ⚠️ `data/.changelog-snapshot.json` 是 CHANGELOG 的对比基线，必须随仓库提交，不能加入 `.gitignore`，否则每次 CI 都会当作首次运行而无法生成条目。

## 行为准则

- 尊重所有扩展作者，避免主观贬低
- 基于数据和事实进行质量评估
- 优先使用社区共识而非个人偏好
