#!/usr/bin/env node
/**
 * 从采集数据重新生成文档。
 *
 * 产物：
 * - 生态总览（中英双语）
 * - 全量插件目录（中英双语）
 * - 子文档安装速查块（保留人工正文，仅追加自动生成区）
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { DOC_OVERRIDES } from "./doc-overrides.mjs";
import { CATEGORY_NAMES } from "./classifier.mjs";

const DATA = JSON.parse(readFileSync("data/all-packages.json", "utf8"));
const CLASSIFIED = JSON.parse(readFileSync("data/classified-v2.json", "utf8"));
const REPORT = JSON.parse(readFileSync("data/ecosystem-report.json", "utf8"));
const PACKAGES_BY_NAME = new Map(DATA.map((pkg) => [pkg.name, pkg]));

const NUMBER_FORMATS = {
	zh: new Intl.NumberFormat("zh-CN"),
	en: new Intl.NumberFormat("en-US"),
};

const CATEGORY_NAMES_EN = {
	MCP: "MCP Protocol Adapters",
	Provider: "Model Providers",
	Memory: "Memory Systems",
	Context: "Context Management",
	Web: "Web Access",
	SubAgent: "Subagents / Multi-agent",
	Workflow: "Workflows",
	CodeQuality: "Code Quality",
	Skill: "Skills",
	TUI: "Terminal UI",
	Tool: "Tooling & Security",
	Prompt: "Prompt Management",
	Integration: "External Integrations",
	Audio: "Audio & Voice",
	Notification: "Desktop Notifications",
	Theme: "Themes",
	Dashboard: "Dashboards",
	Meta: "Meta & Management Tools",
	AgentMode: "Autonomous Agent Modes",
	Browser: "Browser Automation",
	MarkdownPreview: "Markdown Preview",
	FileSearch: "File Search",
	Settings: "Settings",
	DataViz: "Data Visualization",
	UserInteraction: "User Interaction",
	Testing: "Testing & Diagnostics",
	Utils: "Shared Utilities",
	Learning: "Continuous Learning",
	CostProxy: "Cost & Proxy Management",
	Output: "Output Policies",
	Session: "Session Management",
	Chat: "Chat & Messaging",
	Image: "Image Processing",
	Other: "Other",
};

const OVERVIEW_QUICK_PICKS = [
	{
		category: "SubAgent",
		zh: "多代理委派 / 并行协作",
		en: "Subagent delegation / parallel coordination",
		whyZh: "把复杂任务拆给多个子代理并行执行，适合长链路重构和多文件修改。",
		whyEn: "Split complex work across multiple agents for parallel execution and multi-file changes.",
	},
	{
		category: "MCP",
		zh: "接入 MCP 工具与资源",
		en: "Connect MCP tools and resources",
		whyZh: "连接外部 MCP 服务器，把搜索、资源、提示词和工具统一接入 PI。",
		whyEn: "Connect external MCP servers to bring tools, resources, and prompts into PI.",
	},
	{
		category: "Web",
		zh: "Web 搜索 / 抓取 / 读取",
		en: "Web search / fetch / reading",
		whyZh: "做实时搜索、网页抓取、PDF 解析和 GitHub 资料拉取时最直接。",
		whyEn: "Best for live search, scraping, PDF parsing, and GitHub content retrieval.",
	},
	{
		category: "Context",
		zh: "长会话压缩与恢复",
		en: "Long-session compaction and recovery",
		whyZh: "在长任务里控制上下文窗口，保留关键状态并在压缩后继续工作。",
		whyEn: "Control context growth on long tasks while preserving state and resuming cleanly.",
	},
	{
		category: "Workflow",
		zh: "计划、执行、审查",
		en: "Plan, execute, review",
		whyZh: "适合把需求拆成明确步骤，强制进入结构化工作流。",
		whyEn: "Ideal when you want a structured workflow with clear planning and verification steps.",
	},
	{
		category: "UserInteraction",
		zh: "结构化提问与待办",
		en: "Structured questions and task tracking",
		whyZh: "让代理先问清楚再做事，减少猜测和返工。",
		whyEn: "Make the agent ask first, reducing guesswork and rework.",
	},
	{
		category: "CodeQuality",
		zh: "代码审查、LSP、格式化",
		en: "Code review, LSP, formatting",
		whyZh: "用于自动检查代码质量、类型、风格和局部重构。",
		whyEn: "Use it for automated code-quality checks, typing, style, and local refactors.",
	},
	{
		category: "Prompt",
		zh: "提示词模板与代理模式",
		en: "Prompt templates and agent modes",
		whyZh: "当你想明确代理如何思考、如何提问、如何输出时最有用。",
		whyEn: "Best when you want to shape how the agent thinks, asks, and responds.",
	},
	{
		category: "Tool",
		zh: "工具安全与权限控制",
		en: "Tool security and permissions",
		whyZh: "限制高风险工具、隔离权限，适合安全敏感场景。",
		whyEn: "Restrict risky tools and isolate permissions for sensitive workflows.",
	},
];

const DOC_TARGETS = [
	{
		file: "docs/extensions/mcp.md",
		categories: ["MCP"],
		sectionTitleZh: "主推安装",
		sectionTitleEn: "Top Picks",
	},
	{
		file: "docs/extensions/provider.md",
		categories: ["Provider"],
		sectionTitleZh: "主推安装",
		sectionTitleEn: "Top Picks",
	},
	{
		file: "docs/extensions/web.md",
		categories: ["Web"],
		sectionTitleZh: "主推安装",
		sectionTitleEn: "Top Picks",
	},
	{
		file: "docs/extensions/memory.md",
		categories: ["Memory"],
		sectionTitleZh: "主推安装",
		sectionTitleEn: "Top Picks",
	},
	{
		file: "docs/extensions/context.md",
		categories: ["Context"],
		sectionTitleZh: "主推安装",
		sectionTitleEn: "Top Picks",
	},
	{
		file: "docs/extensions/subagent.md",
		categories: ["SubAgent"],
		sectionTitleZh: "主推安装",
		sectionTitleEn: "Top Picks",
	},
	{
		file: "docs/extensions/workflow.md",
		categories: ["Workflow"],
		sectionTitleZh: "主推安装",
		sectionTitleEn: "Top Picks",
	},
	{
		file: "docs/extensions/prompt-agent-mode.md",
		sections: [
			{
				titleZh: "提示词管理",
				titleEn: "Prompt Management",
				categories: ["Prompt"],
			},
			{
				titleZh: "代理模式",
				titleEn: "Agent Modes",
				categories: ["AgentMode"],
			},
		],
	},
	{
		file: "docs/extensions/tui.md",
		categories: ["TUI"],
		sectionTitleZh: "主推安装",
		sectionTitleEn: "Top Picks",
	},
	{
		file: "docs/extensions/user-interaction.md",
		categories: ["UserInteraction"],
		sectionTitleZh: "主推安装",
		sectionTitleEn: "Top Picks",
	},
	{
		file: "docs/extensions/audio-notification.md",
		sections: [
			{
				titleZh: "音频",
				titleEn: "Audio",
				categories: ["Audio"],
			},
			{
				titleZh: "通知",
				titleEn: "Notifications",
				categories: ["Notification"],
			},
		],
	},
	{
		file: "docs/extensions/code-quality.md",
		categories: ["CodeQuality"],
		sectionTitleZh: "主推安装",
		sectionTitleEn: "Top Picks",
	},
	{
		file: "docs/extensions/tool-security.md",
		categories: ["Tool"],
		sectionTitleZh: "主推安装",
		sectionTitleEn: "Top Picks",
	},
	{
		file: "docs/extensions/skill.md",
		categories: ["Skill"],
		sectionTitleZh: "主推安装",
		sectionTitleEn: "Top Picks",
	},
	{
		file: "docs/extensions/integration.md",
		categories: ["Integration"],
		sectionTitleZh: "主推安装",
		sectionTitleEn: "Top Picks",
	},
	{
		file: "docs/extensions/meta.md",
		sections: [
			{
				titleZh: "包管理与元包",
				titleEn: "Package Management & Meta",
				categories: ["Meta"],
			},
			{
				titleZh: "仪表盘",
				titleEn: "Dashboards",
				categories: ["Dashboard"],
			},
			{
				titleZh: "设置与主题",
				titleEn: "Settings & Themes",
				categories: ["Settings", "Theme"],
			},
			{
				titleZh: "测试与诊断",
				titleEn: "Testing & Diagnostics",
				categories: ["Testing"],
			},
		],
	},
];

function num(locale, value) {
	return NUMBER_FORMATS[locale].format(value);
}

function getCategoryLabel(locale, category) {
	return locale === "zh" ? CATEGORY_NAMES[category] || category : CATEGORY_NAMES_EN[category] || category;
}

function packageUrl(pkg) {
	return pkg.npm || `https://www.npmjs.com/package/${pkg.name}`;
}

function packageLink(pkg) {
	return `[${pkg.name}](${packageUrl(pkg)})`;
}

function escapeCell(value) {
	return String(value ?? "")
		.replace(/\r?\n+/g, " ")
		.replace(/\|/g, "\\|")
		.replace(/\s+/g, " ")
		.trim();
}

function truncate(value, max = 110) {
	const text = escapeCell(value);
	if (text.length <= max) return text;
	return `${text.slice(0, Math.max(0, max - 1)).trimEnd()}…`;
}

function comparePackages(a, b) {
	if ((b.monthly || 0) !== (a.monthly || 0)) return (b.monthly || 0) - (a.monthly || 0);
	if ((b.weekly || 0) !== (a.weekly || 0)) return (b.weekly || 0) - (a.weekly || 0);
	if (Number(b.dependents || 0) !== Number(a.dependents || 0))
		return Number(b.dependents || 0) - Number(a.dependents || 0);
	return a.name.localeCompare(b.name);
}

function uniquePackages(packages) {
	const seen = new Set();
	return packages.filter((pkg) => {
		if (!pkg || seen.has(pkg.name)) return false;
		seen.add(pkg.name);
		return true;
	});
}

function uniqueNames(names) {
	const seen = new Set();
	return names.filter((name) => {
		if (!name || seen.has(name)) return false;
		seen.add(name);
		return true;
	});
}

function sortByFeatured(packages, featuredNames = []) {
	const order = new Map(featuredNames.map((name, index) => [name, index]));
	return [...packages].sort((a, b) => {
		const aPinned = order.has(a.name);
		const bPinned = order.has(b.name);
		if (aPinned && bPinned && order.get(a.name) !== order.get(b.name))
			return order.get(a.name) - order.get(b.name);
		if (aPinned && !bPinned) return -1;
		if (!aPinned && bPinned) return 1;
		return comparePackages(a, b);
	});
}

function packagesForCategories(categories) {
	const collected = categories.flatMap((category) => CLASSIFIED[category] || []);
	const resolved = collected.map((pkg) => PACKAGES_BY_NAME.get(pkg.name) || pkg);
	return uniquePackages(resolved).sort(comparePackages);
}

function packagesByNames(names = []) {
	return uniqueNames(names)
		.map((name) => PACKAGES_BY_NAME.get(name))
		.filter(Boolean);
}

function featuredForCategories(categories = []) {
	return categories.flatMap((category) => DOC_OVERRIDES.featured?.[category] || []);
}

function docFeaturedForSection(file, section) {
	const docFeatured = DOC_OVERRIDES.docFeatured?.[file];
	if (!docFeatured) return [];
	if (Array.isArray(docFeatured)) return docFeatured;

	const keys = [section.key, section.titleZh, section.titleEn].filter(Boolean);
	return keys.flatMap((key) => docFeatured[key] || []);
}

function packagesForInstallSection(categories = [], featuredNames = []) {
	return uniquePackages([...packagesByNames(featuredNames), ...packagesForCategories(categories)]);
}

function categorySummaryRows(locale, sortField = "totalDownloads") {
	const rows = Object.entries(REPORT.categories)
		.map(([category, info]) => ({
			category,
			label: getCategoryLabel(locale, category),
			count: info.count,
			totalDownloads: info.totalDownloads,
			top5: info.top5 || [],
		}))
		.sort((a, b) => {
			if (sortField === "count") {
				if (b.count !== a.count) return b.count - a.count;
				if (b.totalDownloads !== a.totalDownloads) return b.totalDownloads - a.totalDownloads;
			} else {
				if (b.totalDownloads !== a.totalDownloads) return b.totalDownloads - a.totalDownloads;
				if (b.count !== a.count) return b.count - a.count;
			}
			return a.label.localeCompare(b.label);
		});

	return rows;
}

function renderTable(headers, rows) {
	const lines = [];
	lines.push(`| ${headers.join(" | ")} |`);
	lines.push(`|${headers.map(() => "---").join("|")}|`);
	for (const row of rows) {
		lines.push(`| ${row.join(" | ")} |`);
	}
	return lines.join("\n");
}

function buildOverviewQuickPickRows(locale) {
	return OVERVIEW_QUICK_PICKS.map((pick) => {
		const featured = featuredForCategories([pick.category]);
		const categoryPackages = packagesForInstallSection([pick.category], featured);
		const ordered = sortByFeatured(categoryPackages, featured);
		const best = ordered[0] || PACKAGES_BY_NAME.get(featured[0]);
		const alternatives = ordered.slice(1, 3).map((pkg) => packageLink(pkg)).join(", ") || "-";
		const why = locale === "zh" ? pick.whyZh : pick.whyEn;
		return [
			pick[locale],
			best ? packageLink(best) : "-",
			best ? `\`npm install ${escapeCell(best.name)}\`` : "-",
			alternatives,
			truncate(why, 96),
		];
	});
}

function buildOverview(locale) {
	const isZh = locale === "zh";
	const lines = [];
	lines.push(isZh ? "# PI 扩展生态系统总览" : "# PI Extension Ecosystem Overview");
	lines.push("");
	lines.push(
		isZh
			? "> 默认中文 · English mirror: [Open the English version](./pi-ecosystem-overview.en.md)"
			: "> English mirror · 中文默认版: [打开中文版本](./pi-ecosystem-overview.md)",
	);
	lines.push("");
	lines.push(
		isZh
			? `> 自动生成于 ${new Date(REPORT.generatedAt).toISOString().split("T")[0]} · ${num("zh", REPORT.totalPackages)} packages`
			: `> Generated on ${new Date(REPORT.generatedAt).toISOString().split("T")[0]} · ${num("en", REPORT.totalPackages)} packages`,
	);
	lines.push("");
	lines.push(isZh ? "## 快速选型" : "## Quick Picks");
	lines.push("");
	lines.push(
		renderTable(
			isZh
				? ["目标", "首选插件", "安装命令", "备选", "为什么看它"]
				: ["Need", "Best plugin", "Install", "Alternatives", "Why"],
			buildOverviewQuickPickRows(locale),
		),
	);
	lines.push("");
	lines.push(isZh ? "## 生态规模" : "## Ecosystem Snapshot");
	lines.push("");
	lines.push(
		renderTable(
			isZh ? ["指标", "数值"] : ["Metric", "Value"],
			[
				[isZh ? "总扩展包数" : "Total packages", num(locale, REPORT.totalPackages)],
				[isZh ? "分类数" : "Categories", num(locale, REPORT.totalCategories)],
				[isZh ? "总月下载量" : "Monthly downloads", num(locale, REPORT.totalDownloads)],
			],
		),
	);
	lines.push("");
	lines.push(isZh ? "## Top 20 热门扩展" : "## Top 20 Popular Extensions");
	lines.push("");
	lines.push(
		renderTable(
			isZh ? ["#", "包名", "月下载量", "分类"] : ["#", "Package", "Monthly downloads", "Category"],
			REPORT.topPackages.map((pkg, index) => [
				String(index + 1),
				packageLink(pkg),
				num(locale, pkg.monthly),
				getCategoryLabel(locale, pkg.category),
			]),
		),
	);
	lines.push("");
	lines.push(isZh ? "## 分类概览" : "## Category Overview");
	lines.push("");
	lines.push(
		renderTable(
			isZh
				? ["分类", "包数", "总月下载量", "Top 3 插件"]
				: ["Category", "Packages", "Monthly downloads", "Top 3 plugins"],
			categorySummaryRows(locale).map((item) => [
				item.label,
				num(locale, item.count),
				num(locale, item.totalDownloads),
				(item.top5 || []).slice(0, 3).map((pkg) => packageLink(pkg)).join(", ") || "-",
			]),
		),
	);
	lines.push("");
	lines.push(
		isZh
			? "## 全量目录\n\n完整插件与安装命令请见 [PI 全量插件目录](./pi-extension-catalog.md)。"
			: "## Full Catalog\n\nSee the [PI extension catalog](./pi-extension-catalog.en.md) for every package and install command.",
	);
	lines.push("");
	lines.push(
		isZh
			? "## 原始数据"
			: "## Source Data",
	);
	lines.push("");
	lines.push(
		renderTable(
			isZh ? ["文件", "说明"] : ["File", "Purpose"],
			[
				["`data/all-packages.json`", isZh ? "全量 2,364 包结构化数据" : "Full structured dataset for all packages"],
				["`data/classified-v2.json`", isZh ? "34 细分类别包列表" : "Package lists for the 34 fine-grained categories"],
				["`data/ecosystem-report.json`", isZh ? "统计报告" : "Aggregate ecosystem report"],
			],
		),
	);
	return `${lines.join("\n")}\n`;
}

function buildCatalogIndexRows(locale) {
	return categorySummaryRows(locale).map((item) => [
		`[${item.label}](#${item.category.toLowerCase()})`,
		num(locale, item.count),
		num(locale, item.totalDownloads),
		(item.top5 || []).slice(0, 1).map((pkg) => packageLink(pkg)).join("") || "-",
	]);
}

function buildCatalogSection(locale, category, packages) {
	const label = getCategoryLabel(locale, category);
	const title = locale === "zh" ? `## ${label}` : `## ${label}`;
	const summary = REPORT.categories[category] || {
		count: packages.length,
		totalDownloads: packages.reduce((sum, pkg) => sum + (pkg.monthly || 0), 0),
	};
	const featured = DOC_OVERRIDES.featured?.[category] || [];
	const ordered = sortByFeatured(packages, featured);
	const top = ordered.slice(0, Math.min(5, ordered.length));
	const topRows = top.map((pkg, index) => [
		String(index + 1),
		packageLink(pkg),
		num(locale, pkg.monthly || 0),
		`\`npm install ${escapeCell(pkg.name)}\``,
		truncate(pkg.desc || (locale === "zh" ? "暂无描述" : "No description"), 88),
	]);
	const fullRows = ordered.map((pkg, index) => [
		String(index + 1),
		packageLink(pkg),
		num(locale, pkg.monthly || 0),
		`\`npm install ${escapeCell(pkg.name)}\``,
		truncate(pkg.desc || (locale === "zh" ? "暂无描述" : "No description"), 120),
	]);

	const lines = [];
	lines.push(`<a id="${category.toLowerCase()}"></a>`);
	lines.push(title);
	lines.push(
		locale === "zh"
			? `> ${num(locale, summary.count)} 个包 · 总月下载量 ${num(locale, summary.totalDownloads)}`
			: `> ${num(locale, summary.count)} packages · ${num(locale, summary.totalDownloads)} monthly downloads`,
	);
	lines.push("");
	lines.push(locale === "zh" ? "### 安装速查" : "### Quick Install");
	lines.push("");
	lines.push(
		renderTable(
			locale === "zh"
				? ["#", "插件", "月下载量", "安装命令", "说明"]
				: ["#", "Plugin", "Monthly downloads", "Install", "Description"],
			topRows,
		),
	);
	lines.push("");
	lines.push(
		locale === "zh"
			? "### 完整清单"
			: "### Full Catalog",
	);
	lines.push("");
	lines.push(
		locale === "zh"
			? "以下清单按自动排名排序，人工覆盖项会优先出现在前列。"
			: "The list is auto-ranked, with any manual overrides pinned to the top.",
	);
	lines.push("");
	lines.push("<details>");
	lines.push(locale === "zh" ? `<summary>展开全部 ${num(locale, summary.count)} 个插件</summary>` : `<summary>Show all ${num(locale, summary.count)} packages</summary>`);
	lines.push("");
	lines.push(
		renderTable(
			locale === "zh"
				? ["#", "插件", "月下载量", "安装命令", "说明"]
				: ["#", "Plugin", "Monthly downloads", "Install", "Description"],
			fullRows,
		),
	);
	lines.push("");
	lines.push("</details>");
	lines.push("");
	return lines.join("\n");
}

function buildCatalog(locale) {
	const isZh = locale === "zh";
	const categories = categorySummaryRows(locale).map((item) => item.category);
	const lines = [];
	lines.push(
		isZh ? "# PI 全量插件目录" : "# PI Extension Catalog",
	);
	lines.push("");
	lines.push(
		isZh
			? "> 默认中文 · English mirror: [Open the English catalog](./pi-extension-catalog.en.md)"
			: "> English mirror · 中文默认目录: [打开中文目录](./pi-extension-catalog.md)",
	);
	lines.push("");
	lines.push(
		isZh
			? "> 这里列出所有 PI 插件，按自动排行展示，并直接附上安装命令。"
			: "> Every PI plugin is listed here, ranked automatically and paired with an install command.",
	);
	lines.push("");
	lines.push(isZh ? "## 分类索引" : "## Category Index");
	lines.push("");
	lines.push(
		renderTable(
			isZh ? ["分类", "包数", "总月下载量", "Top 包"] : ["Category", "Packages", "Monthly downloads", "Top package"],
			buildCatalogIndexRows(locale),
		),
	);
	lines.push("");
	lines.push(isZh ? "## 使用方式" : "## How to Use");
	lines.push("");
	lines.push(
		isZh
			? "在你的 PI 项目目录中运行 `npm install <package>` 即可安装；表格中已直接给出每个包的安装命令。"
			: "Run `npm install <package>` inside your PI project directory; every row already includes the exact install command.",
	);
	lines.push("");
	for (const category of categories) {
		const packages = packagesForCategories([category]);
		lines.push(buildCatalogSection(locale, category, packages));
	}
	return `${lines.join("\n")}\n`;
}

function escapeRegExp(text) {
	return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildDocInstallBlock(target) {
	const lines = [];
	lines.push("## 安装速查");
	lines.push("");
	lines.push("以下为自动排行后的推荐安装入口，命令均可直接复制。");
	lines.push("");

	for (const section of target.sections || [{ titleZh: target.sectionTitleZh, titleEn: target.sectionTitleEn, categories: target.categories }]) {
		const title = section.titleZh || section.titleEn || "推荐";
		const categories = section.categories || [];
		const featured = uniqueNames([
			...docFeaturedForSection(target.file, section),
			...(section.featured || []),
			...featuredForCategories(categories),
		]);
		const packages = packagesForInstallSection(categories, featured);
		const ordered = sortByFeatured(packages, featured);
		const top = ordered.slice(0, 5);
		lines.push(`### ${title}`);
		lines.push("");
		lines.push(
			renderTable(
				["#", "插件", "月下载量", "安装命令", "说明"],
				top.map((pkg, index) => [
					String(index + 1),
					packageLink(pkg),
					num("zh", pkg.monthly || 0),
					`\`npm install ${escapeCell(pkg.name)}\``,
					truncate(pkg.desc || "暂无描述", 88),
				]),
			),
		);
		lines.push("");
	}

	lines.push("### 全量目录");
	lines.push("");
	lines.push("本分类的完整插件清单与安装命令见 [PI 全量插件目录](../pi-extension-catalog.md)。");
	lines.push("");
	return lines.join("\n");
}

function applyDocInstallBlock(file, block) {
	const marker = "AUTO-GENERATED-INSTALL";
	const start = `<!-- ${marker}:START -->`;
	const end = `<!-- ${marker}:END -->`;
	const existing = readFileSync(file, "utf8");
	const replacement = `${start}\n${block.trimEnd()}\n${end}`;
	let updated;
	if (existing.includes(start) && existing.includes(end)) {
		updated = existing.replace(new RegExp(`${escapeRegExp(start)}[\\s\\S]*?${escapeRegExp(end)}`), replacement);
	} else {
		updated = `${existing.trimEnd()}\n\n${replacement}\n`;
	}
	writeFileSync(file, `${updated.trimEnd()}\n`);
}

function main() {
	mkdirSync("docs", { recursive: true });

	const overviewZh = buildOverview("zh");
	const overviewEn = buildOverview("en");
	writeFileSync("docs/pi-ecosystem-overview.md", overviewZh);
	writeFileSync("docs/pi-ecosystem-overview.en.md", overviewEn);

	const catalogZh = buildCatalog("zh");
	const catalogEn = buildCatalog("en");
	writeFileSync("docs/pi-extension-catalog.md", catalogZh);
	writeFileSync("docs/pi-extension-catalog.en.md", catalogEn);

	for (const target of DOC_TARGETS) {
		if (!existsSync(target.file)) continue;
		applyDocInstallBlock(target.file, buildDocInstallBlock(target));
	}

	console.log("✅ Generated overview, catalog, and installation blocks");
}

main();
