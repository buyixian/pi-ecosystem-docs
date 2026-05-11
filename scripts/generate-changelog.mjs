#!/usr/bin/env node
/**
 * 自动生成 CHANGELOG 条目。
 *
 * 策略：
 *   1. 读取当前 data/all-packages.json（本次采集）
 *   2. 读取 data/.changelog-snapshot.json（上次采集快照）
 *   3. 对比两者，提取：新增包、消失包、下载量涨幅 Top、下载量跌幅 Top
 *   4. 将新条目插入 CHANGELOG.md 顶部（占位符 <!-- CHANGELOG-ENTRIES --> 之后）
 *   5. 用当前数据覆盖快照，供下次对比
 *
 * 首次运行（无快照）：只写入 snapshot，不生成条目。
 * 幂等：若同一天多次运行，会追加新条目；workflow 每周跑一次，实际不会冲突。
 */

import { readFileSync, writeFileSync, existsSync } from "fs";

const ALL_PACKAGES = "data/all-packages.json";
const SNAPSHOT = "data/.changelog-snapshot.json";
const CHANGELOG = "CHANGELOG.md";
const TOP_N = 5; // 涨幅/跌幅榜各显示几个

function loadJson(path) {
	return JSON.parse(readFileSync(path, "utf8"));
}

function formatDate(date = new Date()) {
	return date.toISOString().split("T")[0];
}

function formatNumber(value) {
	return new Intl.NumberFormat("en-US").format(value);
}

function buildSnapshot(packages) {
	const byName = {};
	for (const pkg of packages) {
		byName[pkg.name] = {
			monthly: pkg.monthly || 0,
			weekly: pkg.weekly || 0,
		};
	}
	return {
		capturedAt: new Date().toISOString(),
		total: packages.length,
		byName,
	};
}

function diffAgainstSnapshot(current, previous) {
	const currentNames = new Set(current.map((p) => p.name));
	const previousNames = new Set(Object.keys(previous.byName));

	const added = current
		.filter((p) => !previousNames.has(p.name))
		.sort((a, b) => (b.monthly || 0) - (a.monthly || 0));

	const removed = [...previousNames]
		.filter((name) => !currentNames.has(name))
		.map((name) => ({ name, ...previous.byName[name] }));

	const changes = [];
	for (const pkg of current) {
		const prev = previous.byName[pkg.name];
		if (!prev) continue;
		const delta = (pkg.monthly || 0) - (prev.monthly || 0);
		if (delta === 0) continue;
		const pct = prev.monthly > 0 ? (delta / prev.monthly) * 100 : null;
		changes.push({
			name: pkg.name,
			from: prev.monthly || 0,
			to: pkg.monthly || 0,
			delta,
			pct,
		});
	}

	const gainers = changes
		.filter((c) => c.delta > 0)
		.sort((a, b) => b.delta - a.delta)
		.slice(0, TOP_N);

	const decliners = changes
		.filter((c) => c.delta < 0)
		.sort((a, b) => a.delta - b.delta)
		.slice(0, TOP_N);

	return {
		added,
		removed,
		gainers,
		decliners,
		totalsFrom: previous.total,
		totalsTo: current.length,
	};
}

function renderPctSuffix(pct) {
	if (pct === null) return "(new)";
	const sign = pct >= 0 ? "+" : "";
	return `(${sign}${pct.toFixed(1)}%)`;
}

function renderEntry(diff) {
	const date = formatDate();
	const lines = [];
	lines.push(`## ${date}`);
	lines.push("");
	lines.push(
		`- 📦 Total packages: **${formatNumber(diff.totalsTo)}** (previously ${formatNumber(diff.totalsFrom)}, Δ ${diff.totalsTo - diff.totalsFrom >= 0 ? "+" : ""}${diff.totalsTo - diff.totalsFrom})`,
	);

	if (diff.added.length > 0) {
		lines.push("");
		lines.push(`### ➕ New packages (${diff.added.length})`);
		lines.push("");
		const shown = diff.added.slice(0, 10);
		for (const pkg of shown) {
			const dl = pkg.monthly ? ` — ${formatNumber(pkg.monthly)} monthly` : "";
			lines.push(`- \`${pkg.name}\`${dl}`);
		}
		if (diff.added.length > 10) {
			lines.push(`- _…and ${diff.added.length - 10} more_`);
		}
	}

	if (diff.removed.length > 0) {
		lines.push("");
		lines.push(`### ➖ Removed / unpublished (${diff.removed.length})`);
		lines.push("");
		for (const pkg of diff.removed.slice(0, 10)) {
			lines.push(`- \`${pkg.name}\``);
		}
		if (diff.removed.length > 10) {
			lines.push(`- _…and ${diff.removed.length - 10} more_`);
		}
	}

	if (diff.gainers.length > 0) {
		lines.push("");
		lines.push(`### 📈 Biggest download gainers`);
		lines.push("");
		lines.push("| Package | Before | After | Δ |");
		lines.push("|---|---:|---:|---:|");
		for (const c of diff.gainers) {
			lines.push(
				`| \`${c.name}\` | ${formatNumber(c.from)} | ${formatNumber(c.to)} | +${formatNumber(c.delta)} ${renderPctSuffix(c.pct)} |`,
			);
		}
	}

	if (diff.decliners.length > 0) {
		lines.push("");
		lines.push(`### 📉 Biggest download declines`);
		lines.push("");
		lines.push("| Package | Before | After | Δ |");
		lines.push("|---|---:|---:|---:|");
		for (const c of diff.decliners) {
			lines.push(
				`| \`${c.name}\` | ${formatNumber(c.from)} | ${formatNumber(c.to)} | ${formatNumber(c.delta)} ${renderPctSuffix(c.pct)} |`,
			);
		}
	}

	if (
		diff.added.length === 0 &&
		diff.removed.length === 0 &&
		diff.gainers.length === 0 &&
		diff.decliners.length === 0
	) {
		lines.push("");
		lines.push("_No changes detected since last snapshot._");
	}

	lines.push("");
	return lines.join("\n");
}

function insertEntry(entry) {
	const marker = "<!-- CHANGELOG-ENTRIES -->";
	const existing = existsSync(CHANGELOG) ? readFileSync(CHANGELOG, "utf8") : "";

	if (existing.includes(marker)) {
		const [head, tail] = existing.split(marker);
		const trimmedTail = tail.trimStart();
		const separator = trimmedTail ? "\n" : "";
		const updated = `${head}${marker}\n\n${entry.trimEnd()}\n${separator}${trimmedTail}`;
		writeFileSync(CHANGELOG, updated);
		return;
	}

	// Fallback: prepend with a minimal header if no marker present
	const header = `# Changelog\n\nAuto-generated weekly from npm registry sync. Latest entries appear first.\n\n${marker}\n\n`;
	writeFileSync(CHANGELOG, `${header}${entry}${existing ? `\n${existing}` : ""}`);
}

function main() {
	const current = loadJson(ALL_PACKAGES);

	if (!existsSync(SNAPSHOT)) {
		console.log("🆕 No previous snapshot; writing baseline only.");
		writeFileSync(SNAPSHOT, JSON.stringify(buildSnapshot(current), null, 2));
		console.log(`✅ Baseline snapshot saved: ${current.length} packages`);
		return;
	}

	const previous = loadJson(SNAPSHOT);
	const diff = diffAgainstSnapshot(current, previous);
	const entry = renderEntry(diff);

	insertEntry(entry);
	writeFileSync(SNAPSHOT, JSON.stringify(buildSnapshot(current), null, 2));

	console.log(
		`✅ Changelog entry written: +${diff.added.length} added, -${diff.removed.length} removed, ${diff.gainers.length} gainers, ${diff.decliners.length} decliners`,
	);
}

main();
