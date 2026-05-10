/**
 * 共享分类模块 — sync-npm-registry.mjs 和 generate-docs-from-data.mjs 共用。
 * 修改分类规则只需改这一处。
 */

/**
 * 对单个包做关键词+名称启发式分类，返回分类标识符。
 * @param {{ name: string, desc?: string, keywords: string[] }} pkg
 * @returns {string} 分类名（如 'MCP', 'SubAgent', 'Web', 'Other' 等）
 */
export function classify(pkg) {
	const name = pkg.name.toLowerCase();
	const desc = (pkg.desc || "").toLowerCase();
	const kw = new Set((pkg.keywords || []).map((k) => k.toLowerCase()));

	if (kw.has("mcp") || kw.has("model-context-protocol") || kw.has("acp"))
		return "MCP";
	if (
		kw.has("provider") ||
		kw.has("llm-provider") ||
		(name.includes("provider") && !name.includes("web"))
	)
		return "Provider";
	if (
		kw.has("memory") ||
		kw.has("persistent-memory") ||
		kw.has("vector-search") ||
		kw.has("knowledge-graph") ||
		name.includes("memory") ||
		name.includes("hindsight") ||
		name.includes("memctx") ||
		name.includes("total-recall")
	)
		return "Memory";
	if (
		kw.has("context") ||
		kw.has("compaction") ||
		kw.has("context-management") ||
		kw.has("handoff") ||
		kw.has("context-window") ||
		name.includes("context") ||
		name.includes("handoff") ||
		name.includes("prune")
	)
		return "Context";
	if (
		kw.has("web-search") ||
		kw.has("web-fetch") ||
		kw.has("scraping") ||
		name.includes("web-") ||
		name.includes("tavily") ||
		name.includes("firecrawl") ||
		(kw.has("research") && kw.has("pi-package"))
	)
		return "Web";
	if (
		kw.has("subagent") ||
		kw.has("subagents") ||
		kw.has("multi-agent") ||
		kw.has("orchestration") ||
		kw.has("swarm") ||
		name.includes("subagent") ||
		name.includes("minion") ||
		name.includes("crew") ||
		name.includes("team")
	)
		return "SubAgent";
	if (
		kw.has("workflow") ||
		kw.has("planning") ||
		kw.has("gsd") ||
		kw.has("plan-review") ||
		kw.has("plannotator") ||
		name.includes("workflow") ||
		name.includes("gsd") ||
		name.includes("plannotator")
	)
		return "Workflow";
	if (
		kw.has("code-review") ||
		kw.has("linter") ||
		kw.has("lsp") ||
		kw.has("language-server") ||
		kw.has("refactor") ||
		name.includes("lens") ||
		name.includes("simplify") ||
		name.includes("lsp")
	)
		return "CodeQuality";
	if (
		kw.has("skill") ||
		kw.has("skills") ||
		kw.has("agent-skills") ||
		kw.has("pi-skill") ||
		name.includes("skill")
	)
		return "Skill";
	if (
		kw.has("tui") ||
		kw.has("footer") ||
		kw.has("status-line") ||
		kw.has("powerline") ||
		kw.has("statusbar") ||
		name.includes("footer") ||
		name.includes("powerline") ||
		name.includes("glance") ||
		name.includes("tool-display")
	)
		return "TUI";
	if (
		kw.has("sandbox") ||
		kw.has("permissions") ||
		kw.has("guardrails") ||
		kw.has("security") ||
		name.includes("sandbox") ||
		name.includes("permission") ||
		name.includes("guard")
	)
		return "Tool";
	if (
		kw.has("prompt") ||
		kw.has("prompt-template") ||
		kw.has("prompt-suggester") ||
		name.includes("prompt")
	)
		return "Prompt";
	if (
		kw.has("discord") ||
		kw.has("telegram") ||
		kw.has("whatsapp") ||
		kw.has("notion") ||
		kw.has("convex") ||
		kw.has("1password") ||
		name.includes("telegram") ||
		name.includes("whatsapp") ||
		name.includes("discord")
	)
		return "Integration";
	if (
		kw.has("tts") ||
		kw.has("voice") ||
		kw.has("audio") ||
		name.includes("voice") ||
		name.includes("speech") ||
		name.includes("tts")
	)
		return "Audio";
	if (kw.has("notification") || kw.has("notify") || name.includes("notify"))
		return "Notification";
	if (kw.has("theme") || kw.has("pi-theme") || kw.has("themes")) return "Theme";
	if (
		kw.has("dashboard") ||
		kw.has("observability") ||
		kw.has("metrics") ||
		name.includes("dashboard")
	)
		return "Dashboard";
	if (
		kw.has("package-manager") ||
		kw.has("unipi") ||
		kw.has("resource") ||
		name.includes("depo")
	)
		return "Meta";
	if (
		kw.has("autonomous") ||
		kw.has("agent-mode") ||
		kw.has("ralph") ||
		name.includes("ralph") ||
		name.includes("boomerang") ||
		name.includes("autoresearch") ||
		name.includes("caveman")
	)
		return "AgentMode";
	if (
		kw.has("browser-automation") ||
		name.includes("agent-browser") ||
		kw.has("playwright")
	)
		return "Browser";
	if (
		(kw.has("markdown") && kw.has("pi-package")) ||
		kw.has("preview") ||
		name.includes("markdown")
	)
		return "MarkdownPreview";
	if (
		kw.has("fuzzy") ||
		kw.has("file-search") ||
		kw.has("fff") ||
		name.includes("fff")
	)
		return "FileSearch";
	if (
		kw.has("settings") ||
		kw.has("configuration") ||
		kw.has("config") ||
		name.includes("settings")
	)
		return "Settings";
	if (
		kw.has("charts") ||
		kw.has("vega") ||
		kw.has("diagram") ||
		kw.has("mermaid") ||
		name.includes("chart") ||
		name.includes("mermaid") ||
		name.includes("drawio")
	)
		return "DataViz";
	if (
		kw.has("ask") ||
		kw.has("ask-user") ||
		kw.has("interview") ||
		kw.has("todo") ||
		name.includes("ask-user") ||
		name.includes("interview") ||
		name.includes("todo") ||
		name.includes("btw")
	)
		return "UserInteraction";
	if (
		kw.has("testing") ||
		kw.has("test-harness") ||
		kw.has("diagnostics") ||
		(name.includes("test") && kw.has("pi-package")) ||
		name.includes("diag")
	)
		return "Testing";
	if (
		kw.has("shared") ||
		kw.has("utilities") ||
		kw.has("utility") ||
		name.includes("shared")
	)
		return "Utils";
	if (
		kw.has("learning") ||
		kw.has("continuous-learning") ||
		kw.has("instinct") ||
		name.includes("continuous")
	)
		return "Learning";
	if (
		kw.has("proxy") ||
		kw.has("rotation") ||
		kw.has("quota") ||
		kw.has("free-models") ||
		name.includes("rotator") ||
		name.includes("proxy") ||
		name.includes("free")
	)
		return "CostProxy";
	if (
		kw.has("output") ||
		kw.has("truncation") ||
		name.includes("output") ||
		name.includes("truncat")
	)
		return "Output";
	if (kw.has("session") || name.includes("session")) return "Session";
	if (
		kw.has("chat") ||
		kw.has("messaging") ||
		kw.has("conversation") ||
		name.includes("chat") ||
		name.includes("intercom")
	)
		return "Chat";
	if (kw.has("image") || kw.has("screenshot") || name.includes("image"))
		return "Image";

	return "Other";
}

/**
 * 分类中文名映射
 */
export const CATEGORY_NAMES = {
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
};
