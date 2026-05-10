#!/usr/bin/env node
/**
 * PI 扩展生态数据采集脚本
 *
 * 定期从 npm registry 拉取所有 pi-package 标签的包，
 * 分类、统计并生成更新后的文档数据。
 *
 * 用法: node scripts/sync-npm-registry.mjs [--dry-run]
 */

import { writeFileSync, mkdirSync, readFileSync } from "fs";
import { classify } from "./classifier.mjs";

const NPM_REGISTRY = "https://registry.npmjs.org";
const PAGE_SIZE = 250;
const DATA_DIR = "data";
const OUTPUT_FILE = "data/all-packages.json";
const CLASSIFIED_FILE = "data/classified-v2.json";
const REPORT_FILE = "data/ecosystem-report.json";

// ============================================================================
// Phase 1: Fetch all packages
// ============================================================================

async function fetchAllPackages() {
	console.log("🔍 Fetching pi-package listings from npm...");
	const allPackages = [];
	let from = 0;
	let total = 0;
	let page = 0;

	do {
		const url = `${NPM_REGISTRY}/-/v1/search?text=keywords:pi-package&size=${PAGE_SIZE}&from=${from}`;
		console.log(`  Page ${page} (from=${from})...`);

		const res = await fetch(url);
		if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);

		const data = await res.json();
		total = data.total;

		const extracted = data.objects.map((o) => {
			const p = o.package;
			return {
				name: p.name,
				desc: (p.description || "").slice(0, 250),
				version: p.version,
				keywords: p.keywords || [],
				publisher: p.publisher?.username || "",
				monthly: o.downloads?.monthly || 0,
				weekly: o.downloads?.weekly || 0,
				dependents: o.dependents || 0,
				repo: p.links?.repository || "",
				license: p.license || "",
				updated: p.date || "",
				npm: p.links?.npm || `https://npm.im/${p.name}`,
			};
		});

		allPackages.push(
			...data.objects.map((o) => {
				const p = o.package;
				return {
					name: p.name,
					desc: (p.description || "").slice(0, 250),
					version: p.version,
					keywords: p.keywords || [],
					publisher: p.publisher?.username || "",
					monthly: o.downloads?.monthly || 0,
					weekly: o.downloads?.weekly || 0,
					dependents: o.dependents || 0,
					repo: p.links?.repository || "",
					license: p.license || "",
					updated: p.date || "",
					npm: p.links?.npm || `https://npm.im/${p.name}`,
				};
			}),
		);

		from += PAGE_SIZE;
		page++;

		// Rate limiting courtesy
		if (allPackages.length < total) {
			await new Promise((r) => setTimeout(r, 500));
		}
	} while (allPackages.length < total);

	// Deduplicate
	const seen = new Set();
	const deduped = allPackages.filter((p) => {
		if (seen.has(p.name)) return false;
		seen.add(p.name);
		return true;
	});

	console.log(`✅ Fetched ${deduped.length} unique packages (total: ${total})`);
	return deduped;
}

// ============================================================================
// Phase 2 & 3: Classify & Generate report (classifier imported from classifier.mjs)
// ============================================================================

function generateReport(packages) {
	const categories = {};
	packages.forEach((p) => {
		const cat = classify(p);
		if (!categories[cat]) categories[cat] = [];
		categories[cat].push(p);
	});

	const summary = {};
	for (const [cat, pkgs] of Object.entries(categories)) {
		const sorted = pkgs.sort((a, b) => b.monthly - a.monthly);
		summary[cat] = {
			count: pkgs.length,
			totalDownloads: pkgs.reduce((s, p) => s + p.monthly, 0),
			top5: sorted
				.slice(0, 5)
				.map((p) => ({ name: p.name, monthly: p.monthly })),
		};
	}

	const report = {
		generatedAt: new Date().toISOString(),
		totalPackages: packages.length,
		totalCategories: Object.keys(categories).length,
		totalDownloads: packages.reduce((s, p) => s + p.monthly, 0),
		topPackages: packages
			.sort((a, b) => b.monthly - a.monthly)
			.slice(0, 20)
			.map((p) => ({
				name: p.name,
				monthly: p.monthly,
				category: classify(p),
			})),
		categories: summary,
	};

	return { categories, report };
}

// ============================================================================
// Main
// ============================================================================

async function main() {
	const dryRun = process.argv.includes("--dry-run");

	mkdirSync(DATA_DIR, { recursive: true });

	let packages;
	if (dryRun) {
		console.log("🔸 DRY RUN: Skipping fetch, using existing data");
		packages = JSON.parse(readFileSync(OUTPUT_FILE, "utf8"));
	} else {
		packages = await fetchAllPackages();
		writeFileSync(OUTPUT_FILE, JSON.stringify(packages, null, 2));
	}

	const { categories, report } = generateReport(packages);
	writeFileSync(CLASSIFIED_FILE, JSON.stringify(categories, null, 2));
	writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));

	// Print summary
	console.log("\n📊 Ecosystem Report:");
	console.log(`   Total packages:     ${report.totalPackages}`);
	console.log(`   Total categories:   ${report.totalCategories}`);
	console.log(
		`   Total monthly DLs:  ${report.totalDownloads.toLocaleString()}`,
	);
	console.log("\n   Top 10:");
	report.topPackages.slice(0, 10).forEach((p, i) => {
		console.log(
			`   ${i + 1}. ${p.name} (${p.monthly.toLocaleString()}/mo) [${p.category}]`,
		);
	});

	console.log("\n   Categories:");
	Object.entries(report.categories)
		.sort((a, b) => b[1].count - a[1].count)
		.slice(0, 15)
		.forEach(([cat, info]) => {
			console.log(
				`   ${cat}: ${info.count} packages, ${info.totalDownloads.toLocaleString()} DLs`,
			);
		});

	console.log("\n✅ Done!");
}

main().catch((err) => {
	console.error("❌", err.message);
	process.exit(1);
});
