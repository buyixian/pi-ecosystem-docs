/**
 * 文档生成的少量人工覆盖。
 *
 * 目标是让自动排行保持默认，同时允许少量“精选顺序”纠偏。
 * 默认排序：月下载量 -> 周下载量 -> 被依赖数 -> 包名。
 * 如果未来某些类别或子文档需要固定推荐项，只改这里即可。
 */

export const DOC_OVERRIDES = {
	featured: {
		SubAgent: ["pi-subagents", "pi-crew", "pi-minions"],
		MCP: ["pi-mcp-adapter", "context-mode", "pi-lean-ctx"],
		Web: ["pi-web-access", "@ollama/pi-web-search", "@juicesharp/rpiv-web-tools"],
		Context: ["pi-continue", "pi-context-prune", "@sting8k/pi-vcc"],
		Workflow: ["@plannotator/pi-extension", "pi-gsd", "@juicesharp/rpiv-pi"],
		Prompt: ["glimpseui", "pi-prompt-template-model", "pi-schedule-prompt"],
		AgentMode: ["pi-caveman", "pi-boomerang", "@tmustier/pi-ralph-wiggum"],
		Tool: ["@gotgenes/pi-permission-system", "pi-pkg-guard", "pi-sandbox"],
		Skill: ["@juicesharp/rpiv-args", "@heart-of-gold/toolkit", "pi-docparser"],
		Meta: ["pi-depo", "pi-extension-installer", "pi-pkg-guard"],
		Dashboard: [
			"@blackbelt-technology/pi-agent-dashboard",
			"@pi-unipi/info-screen",
			"@braintrust/pi-extension",
		],
		Testing: [
			"@vtstech/pi-model-test",
			"@vtstech/pi-diag",
			"@marcfargas/pi-test-harness",
		],
		Settings: ["@axnic/pi-extension-settings", "@juanibiapina/pi-extension-settings"],
		Theme: [
			"pi-studio",
			"pi-terminal-theme",
			"@victor-software-house/pi-curated-themes",
		],
		Audio: ["@codexstar/pi-listen", "voipi", "pi-smart-voice-notify"],
		Notification: ["@pi-unipi/notify", "pi-gotify-notifier", "pi-notify"],
	},
	docFeatured: {
		"docs/extensions/meta.md": {
			"包管理与元包": [
				"pi-depo",
				"pi-extension-installer",
				"pi-resource-center",
				"pi-pkg-guard",
			],
			"设置与主题": [
				"@axnic/pi-extension-settings",
				"@juanibiapina/pi-extension-settings",
				"@ifi/oh-pi-themes",
				"pi-studio",
				"pi-terminal-theme",
			],
		},
	},
};
