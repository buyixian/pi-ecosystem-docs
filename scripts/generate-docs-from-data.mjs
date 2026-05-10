#!/usr/bin/env node
/**
 * 从采集数据重新生成文档。
 * 用法: node scripts/generate-docs-from-data.mjs
 */

import { mkdirSync, readFileSync, writeFileSync } from "fs";

const DATA = JSON.parse(readFileSync("data/all-packages.json", "utf8"));
const REPORT = JSON.parse(readFileSync("data/ecosystem-report.json", "utf8"));

const NUMBER_FORMATS = {
	zh: new Intl.NumberFormat("zh-CN"),
	en: new Intl.NumberFormat("en-US"),
};

const CATEGORY_LABELS = {
	zh: {
		MCP: "MCP 协议适配",
		Provider: "模型供应商",
		Memory: "记忆系统",
		Context: "上下文管理",
		Web: "网络访问",
		SubAgent: "子代理/多代理",
		Workflow: "工作流",
		CodeQuality: "代码质量",
		Skill: "技能包",
		TUI: "终端 UI",
		Tool: "工具与安全",
		Prompt: "提示词管理",
		Integration: "外部集成",
		Audio: "音频与语音",
		Notification: "桌面通知",
		Theme: "主题美化",
		Dashboard: "仪表盘",
		Meta: "元包/管理工具",
		AgentMode: "代理自主模式",
		Browser: "浏览器自动化",
		MarkdownPreview: "Markdown 预览",
		FileSearch: "文件搜索",
		Settings: "设置管理",
		DataViz: "数据可视化",
		UserInteraction: "用户交互",
		Testing: "测试与诊断",
		Utils: "共享工具库",
		Learning: "持续学习",
		CostProxy: "成本/代理管理",
		Output: "输出策略",
		Session: "会话管理",
		Chat: "聊天/消息",
		Image: "图像处理",
		Other: "其他",
	},
	en: {
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
	},
};

const QUICK_PICKS = [
	{
		category: "SubAgent",
		zh: "多代理委派 / 并行协作",
		en: "Subagent delegation / parallel coordination",
		why: {
			zh: "把复杂任务拆给多个子代理并行执行，适合长链路重构和多文件修改。",
			en: "Split complex work across multiple agents for parallel execution and multi-file changes.",
		},
	},
	{
		category: "MCP",
		zh: "接入 MCP 工具与资源",
		en: "Connect MCP tools and resources",
		why: {
			zh: "连接外部 MCP 服务器，把搜索、资源、提示词和工具统一接入 PI。",
			en: "Connect external MCP servers to bring tools, resources, and prompts into PI.",
		},
	},
	{
		category: "Web",
		zh: "Web 搜索 / 抓取 / 读取",
		en: "Web search / fetch / reading",
		why: {
			zh: "做实时搜索、网页抓取、PDF 解析和 GitHub 资料拉取时最直接。",
			en: "Best for live search, scraping, PDF parsing, and GitHub content retrieval.",
		},
	},
	{
		category: "Context",
		zh: "长会话压缩与恢复",
		en: "Long-session compaction and recovery",
		why: {
			zh: "在长任务里控制上下文窗口，保留关键状态并在压缩后继续工作。",
			en: "Control context growth on long tasks while preserving state and resuming cleanly.",
		},
	},
	{
		category: "Workflow",
		zh: "计划、执行、审查",
		en: "Plan, execute, review",
		why: {
			zh: "适合把需求拆成明确步骤，强制进入结构化工作流。",
			en: "Ideal when you want a structured workflow with clear planning and verification steps.",
		},
	},
	{
		category: "UserInteraction",
		zh: "结构化提问与待办",
		en: "Structured questions and task tracking",
		why: {
			zh: "让代理先问清楚再做事，减少猜测和返工。",
			en: "Make the agent ask first, reducing guesswork and rework.",
		},
	},
	{
		category: "CodeQuality",
		zh: "代码审查、LSP、格式化",
		en: "Code review, LSP, formatting",
		why: {
			zh: "用于自动检查代码质量、类型、风格和局部重构。",
			en: "Use it for automated code-quality checks, typing, style, and local refactors.",
		},
	},
	{
		category: "Prompt",
		zh: "提示词模板与代理模式",
		en: "Prompt templates and agent modes",
		why: {
			zh: "当你想明确代理如何思考、如何提问、如何输出时最有用。",
			en: "Best when you want to shape how the agent thinks, asks, and responds.",
		},
	},
	{
		category: "Tool",
		zh: "工具安全与权限控制",
		en: "Tool security and permissions",
		why: {
			zh: "限制高风险工具、隔离权限，适合安全敏感场景。",
			en: "Restrict risky tools and isolate permissions for sensitive workflows.",
		},
	},
];

function localeNumber(locale, value) {
	return NUMBER_FORMATS[locale].format(value);
}

function categoryLabel(locale, category) {
	return CATEGORY_LABELS[locale][category] || category;
}

function escapeCell(value) {
	return String(value ?? "")
		.replace(/\r?\n+/g, " ")
		.replace(/\|/g, "\\|")
		.replace(/\s+/g, " ")
		.trim();
}

function truncate(value, max = 120) {
	const text = escapeCell(value);
	if (text.length <= max) return text;
	return `${text.slice(0, Math.max(0, max - 1)).trimEnd()}…`;
}

function packageRef(name) {
	return `\`${name}\``;
}

function renderTable(headers, rows) {
	const lines = [];
	lines.push(`| ${headers.join(" | ")} |`);
	lines.push(`|${headers.map(() => "---").join("|")}|`);
	rows.forEach((row) => {
		lines.push(`| ${row.join(" | ")} |`);
	});
	return lines.join("\n");
}

function buildPackageIndex() {
	const index = new Map();
	DATA.forEach((pkg) => {
		index.set(pkg.name, pkg);
	});
	return index;
}

function buildQuickPickRows(locale, packageIndex) {
	return QUICK_PICKS.map((item) => {
		const cat = REPORT.categories[item.category] || { top5: [] };
		const topNames = cat.top5.slice(0, 3).map((p) => p.name);
		while (topNames.length < 3) topNames.push("-");
		const topPackage = topNames[0] !== "-" ? packageIndex.get(topNames[0]) : null;
		const alternatives = topNames
			.slice(1)
			.filter((name) => name !== "-")
			.map(packageRef)
			.join(", ");

		return [
			item[locale],
			topPackage ? packageRef(topPackage.name) : "-",
			alternatives || "-",
			truncate(item.why[locale], 108),
		];
	});
}

function buildCategoryRows(locale) {
	return Object.entries(REPORT.categories)
		.sort((a, b) => b[1].count - a[1].count)
		.map(([category, info]) => {
			const topThree = info.top5.slice(0, 3).map((pkg) => packageRef(pkg.name));
			return [
				categoryLabel(locale, category),
				localeNumber(locale, info.count),
				localeNumber(locale, info.totalDownloads),
				topThree.join(", "),
			];
		});
}

function buildTopPackagesRows(locale) {
	return REPORT.topPackages.map((pkg, index) => [
		String(index + 1),
		packageRef(pkg.name),
		localeNumber(locale, pkg.monthly),
		categoryLabel(locale, pkg.category),
	]);
}

function buildLanguageSwitch(locale, alternatePath) {
	if (locale === "zh") {
		return `> 默认中文 · English mirror: [Open the English version](${alternatePath})`;
	}
	return `> Default English · 中文版: [打开中文版本](${alternatePath})`;
}

function generateOverview(locale) {
	const isZh = locale === "zh";
	const packageIndex = buildPackageIndex();
	const lines = [];

	lines.push(isZh ? "# PI 扩展生态系统总览" : "# PI Extension Ecosystem Overview");
	lines.push("");
	lines.push(
		buildLanguageSwitch(
			locale,
			locale === "zh" ? "./pi-ecosystem-overview.en.md" : "./pi-ecosystem-overview.md",
		),
	);
	lines.push("");
	lines.push(
		isZh
			? `> 自动生成于 ${new Date(REPORT.generatedAt).toISOString().split("T")[0]} · ${localeNumber("zh", REPORT.totalPackages)} packages`
			: `> Generated on ${new Date(REPORT.generatedAt).toISOString().split("T")[0]} · ${localeNumber("en", REPORT.totalPackages)} packages`,
	);
	lines.push("");
	lines.push(isZh ? "## 快速选型" : "## Quick Picks");
	lines.push("");
	lines.push(
		renderTable(
			isZh
				? ["目标", "首选插件", "备选", "为什么看它"]
				: ["Need", "Best plugin", "Alternatives", "Why"],
			buildQuickPickRows(locale, packageIndex),
		),
	);
	lines.push("");
	lines.push(isZh ? "## 生态规模" : "## Ecosystem Snapshot");
	lines.push("");
	lines.push(
		renderTable(
			isZh ? ["指标", "数值"] : ["Metric", "Value"],
			[
				[isZh ? "总扩展包数" : "Total packages", localeNumber(locale, REPORT.totalPackages)],
				[isZh ? "分类数" : "Categories", localeNumber(locale, REPORT.totalCategories)],
				[isZh ? "总月下载量" : "Monthly downloads", localeNumber(locale, REPORT.totalDownloads)],
			],
		),
	);
	lines.push("");
	lines.push(isZh ? "## Top 20 热门扩展" : "## Top 20 Popular Extensions");
	lines.push("");
	lines.push(
		renderTable(
			isZh ? ["#", "包名", "月下载量", "分类"] : ["#", "Package", "Monthly downloads", "Category"],
			buildTopPackagesRows(locale),
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
			buildCategoryRows(locale),
		),
	);
	lines.push("");
	lines.push(
		isZh
			? "## 深入阅读\n\n完整的 16 大分类文档请见根目录 `README.md`，这里保留的是面向浏览和选型的总览页。"
			: "## Deep Dives\n\nFor the curated 16-category guide, see the root `README.md`. This page focuses on browseable discovery and fast selection.",
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
				["`data/classified-v2.json`", isZh ? "34 细分类别包列表" : "Package lists by the 34 fine-grained categories"],
				["`data/ecosystem-report.json`", isZh ? "统计报告" : "Aggregate ecosystem report"],
			],
		),
	);

	return `${lines.join("\n")}\n`;
}

function writeDocs() {
	mkdirSync("docs", { recursive: true });
	writeFileSync("docs/pi-ecosystem-overview.md", generateOverview("zh"));
	writeFileSync("docs/pi-ecosystem-overview.en.md", generateOverview("en"));
}

writeDocs();
console.log("✅ Generated docs/pi-ecosystem-overview.md and docs/pi-ecosystem-overview.en.md");
