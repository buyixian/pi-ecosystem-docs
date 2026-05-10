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
4. 确保 `node scripts/sync-npm-registry.mjs --dry-run` 通过
5. 发起 Pull Request

## 行为准则

- 尊重所有扩展作者，避免主观贬低
- 基于数据和事实进行质量评估
- 优先使用社区共识而非个人偏好
