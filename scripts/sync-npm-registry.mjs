#!/usr/bin/env node
/**
 * PI 扩展生态数据采集脚本
 * 
 * 定期从 npm registry 拉取所有 pi-package 标签的包，
 * 分类、统计并生成更新后的文档数据。
 * 
 * 用法: node scripts/sync-npm-registry.mjs [--dry-run]
 */

import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { execSync } from 'child_process';

const NPM_REGISTRY = 'https://registry.npmjs.org';
const PAGE_SIZE = 250;
const DATA_DIR = 'data';
const OUTPUT_FILE = 'data/all-packages.json';
const CLASSIFIED_FILE = 'data/classified-v2.json';
const REPORT_FILE = 'data/ecosystem-report.json';

// ============================================================================
// Phase 1: Fetch all packages
// ============================================================================

async function fetchAllPackages() {
  console.log('🔍 Fetching pi-package listings from npm...');
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
    
    const extracted = data.objects.map(o => {
      const p = o.package;
      return {
        name: p.name,
        desc: (p.description || '').slice(0, 250),
        version: p.version,
        keywords: p.keywords || [],
        publisher: p.publisher?.username || '',
        monthly: o.downloads?.monthly || 0,
        weekly: o.downloads?.weekly || 0,
        dependents: o.dependents || 0,
        repo: p.links?.repository || '',
        license: p.license || '',
        updated: p.date || '',
        npm: p.links?.npm || `https://npm.im/${p.name}`,
      };
    });

    allPackages.push(...data.objects.map(o => {
      const p = o.package;
      return {
        name: p.name,
        desc: (p.description || '').slice(0, 250),
        version: p.version,
        keywords: p.keywords || [],
        publisher: p.publisher?.username || '',
        monthly: o.downloads?.monthly || 0,
        weekly: o.downloads?.weekly || 0,
        dependents: o.dependents || 0,
        repo: p.links?.repository || '',
        license: p.license || '',
        updated: p.date || '',
        npm: p.links?.npm || `https://npm.im/${p.name}`,
      };
    }));

    from += PAGE_SIZE;
    page++;

    // Rate limiting courtesy
    if (allPackages.length < total) {
      await new Promise(r => setTimeout(r, 500));
    }
  } while (allPackages.length < total);

  // Deduplicate
  const seen = new Set();
  const deduped = allPackages.filter(p => {
    if (seen.has(p.name)) return false;
    seen.add(p.name);
    return true;
  });

  console.log(`✅ Fetched ${deduped.length} unique packages (total: ${total})`);
  return deduped;
}

// ============================================================================
// Phase 2: Classify
// ============================================================================

function classify(pkg) {
  const name = pkg.name.toLowerCase();
  const desc = (pkg.desc || '').toLowerCase();
  const kw = new Set(pkg.keywords.map(k => k.toLowerCase()));

  if (kw.has('mcp') || kw.has('model-context-protocol') || kw.has('acp')) return 'MCP';
  if (kw.has('provider') || kw.has('llm-provider') || (name.includes('provider') && !name.includes('web'))) return 'Provider';
  if (kw.has('memory') || kw.has('persistent-memory') || kw.has('vector-search') || kw.has('knowledge-graph') ||
      name.includes('memory') || name.includes('hindsight') || name.includes('memctx') || name.includes('total-recall'))
    return 'Memory';
  if (kw.has('context') || kw.has('compaction') || kw.has('context-management') || kw.has('handoff') ||
      kw.has('context-window') || name.includes('context') || name.includes('handoff') || name.includes('prune'))
    return 'Context';
  if (kw.has('web-search') || kw.has('web-fetch') || kw.has('scraping') || 
      name.includes('web-') || name.includes('tavily') || name.includes('firecrawl') ||
      kw.has('research') && kw.has('pi-package'))
    return 'Web';
  if (kw.has('subagent') || kw.has('subagents') || kw.has('multi-agent') || kw.has('orchestration') || kw.has('swarm') ||
      name.includes('subagent') || name.includes('minion') || name.includes('crew') || name.includes('team'))
    return 'SubAgent';
  if (kw.has('workflow') || kw.has('planning') || kw.has('gsd') || kw.has('plan-review') || kw.has('plannotator') ||
      name.includes('workflow') || name.includes('gsd') || name.includes('plannotator'))
    return 'Workflow';
  if (kw.has('code-review') || kw.has('linter') || kw.has('lsp') || kw.has('language-server') || kw.has('refactor') ||
      name.includes('lens') || name.includes('simplify') || name.includes('lsp'))
    return 'CodeQuality';
  if (kw.has('skill') || kw.has('skills') || kw.has('agent-skills') || kw.has('pi-skill') || name.includes('skill'))
    return 'Skill';
  if (kw.has('tui') || kw.has('footer') || kw.has('status-line') || kw.has('powerline') || kw.has('statusbar') ||
      name.includes('footer') || name.includes('powerline') || name.includes('glance') || name.includes('tool-display'))
    return 'TUI';
  if (kw.has('sandbox') || kw.has('permissions') || kw.has('guardrails') || kw.has('security') ||
      name.includes('sandbox') || name.includes('permission') || name.includes('guard'))
    return 'Tool';
  if (kw.has('prompt') || kw.has('prompt-template') || kw.has('prompt-suggester') || name.includes('prompt'))
    return 'Prompt';
  if (kw.has('discord') || kw.has('telegram') || kw.has('whatsapp') || kw.has('notion') || kw.has('convex') ||
      kw.has('1password') || name.includes('telegram') || name.includes('whatsapp') || name.includes('discord'))
    return 'Integration';
  if (kw.has('tts') || kw.has('voice') || kw.has('audio') || name.includes('voice') || name.includes('speech') || name.includes('tts'))
    return 'Audio';
  if (kw.has('notification') || kw.has('notify') || name.includes('notify'))
    return 'Notification';
  if (kw.has('theme') || kw.has('pi-theme') || kw.has('themes'))
    return 'Theme';
  if (kw.has('dashboard') || kw.has('observability') || kw.has('metrics') || name.includes('dashboard'))
    return 'Dashboard';
  if (kw.has('package-manager') || kw.has('unipi') || kw.has('resource') || name.includes('depo'))
    return 'Meta';
  if (kw.has('autonomous') || kw.has('agent-mode') || kw.has('ralph') || name.includes('ralph') || name.includes('boomerang') ||
      name.includes('autoresearch') || name.includes('caveman'))
    return 'AgentMode';
  if (kw.has('browser-automation') || name.includes('agent-browser') || kw.has('playwright'))
    return 'Browser';
  if (kw.has('markdown') && kw.has('pi-package') || kw.has('preview') || name.includes('markdown'))
    return 'MarkdownPreview';
  if (kw.has('fuzzy') || kw.has('file-search') || kw.has('fff') || name.includes('fff'))
    return 'FileSearch';
  if (kw.has('settings') || kw.has('configuration') || kw.has('config') || name.includes('settings'))
    return 'Settings';
  if (kw.has('charts') || kw.has('vega') || kw.has('diagram') || kw.has('mermaid') ||
      name.includes('chart') || name.includes('mermaid') || name.includes('drawio'))
    return 'DataViz';
  if (kw.has('ask') || kw.has('ask-user') || kw.has('interview') || kw.has('todo') ||
      name.includes('ask-user') || name.includes('interview') || name.includes('todo') || name.includes('btw'))
    return 'UserInteraction';
  if (kw.has('testing') || kw.has('test-harness') || kw.has('diagnostics') || 
      name.includes('test') && kw.has('pi-package') || name.includes('diag'))
    return 'Testing';
  if (kw.has('shared') || kw.has('utilities') || kw.has('utility') || name.includes('shared'))
    return 'Utils';
  if (kw.has('learning') || kw.has('continuous-learning') || kw.has('instinct') || name.includes('continuous'))
    return 'Learning';
  if (kw.has('proxy') || kw.has('rotation') || kw.has('quota') || kw.has('free-models') ||
      name.includes('rotator') || name.includes('proxy') || name.includes('free'))
    return 'CostProxy';
  if (kw.has('output') || kw.has('truncation') || name.includes('output') || name.includes('truncat'))
    return 'Output';
  if (kw.has('session') || name.includes('session'))
    return 'Session';
  if (kw.has('chat') || kw.has('messaging') || kw.has('conversation') || name.includes('chat') || name.includes('intercom'))
    return 'Chat';
  if (kw.has('image') || kw.has('screenshot') || name.includes('image'))
    return 'Image';

  return 'Other';
}

// ============================================================================
// Phase 3: Generate report
// ============================================================================

function generateReport(packages) {
  const categories = {};
  packages.forEach(p => {
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
      top5: sorted.slice(0, 5).map(p => ({ name: p.name, monthly: p.monthly })),
    };
  }

  const report = {
    generatedAt: new Date().toISOString(),
    totalPackages: packages.length,
    totalCategories: Object.keys(categories).length,
    totalDownloads: packages.reduce((s, p) => s + p.monthly, 0),
    topPackages: packages.sort((a, b) => b.monthly - a.monthly).slice(0, 20)
      .map(p => ({ name: p.name, monthly: p.monthly, category: classify(p) })),
    categories: summary,
  };

  return { categories, report };
}

// ============================================================================
// Main
// ============================================================================

async function main() {
  const dryRun = process.argv.includes('--dry-run');

  mkdirSync(DATA_DIR, { recursive: true });

  let packages;
  if (dryRun) {
    console.log('🔸 DRY RUN: Skipping fetch, using existing data');
    packages = JSON.parse(readFileSync(OUTPUT_FILE, 'utf8'));
  } else {
    packages = await fetchAllPackages();
    writeFileSync(OUTPUT_FILE, JSON.stringify(packages, null, 2));
  }

  const { categories, report } = generateReport(packages);
  writeFileSync(CLASSIFIED_FILE, JSON.stringify(categories, null, 2));
  writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));

  // Print summary
  console.log('\n📊 Ecosystem Report:');
  console.log(`   Total packages:     ${report.totalPackages}`);
  console.log(`   Total categories:   ${report.totalCategories}`);
  console.log(`   Total monthly DLs:  ${report.totalDownloads.toLocaleString()}`);
  console.log('\n   Top 10:');
  report.topPackages.slice(0, 10).forEach((p, i) => {
    console.log(`   ${i + 1}. ${p.name} (${p.monthly.toLocaleString()}/mo) [${p.category}]`);
  });

  console.log('\n   Categories:');
  Object.entries(report.categories)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 15)
    .forEach(([cat, info]) => {
      console.log(`   ${cat}: ${info.count} packages, ${info.totalDownloads.toLocaleString()} DLs`);
    });

  console.log('\n✅ Done!');
}

main().catch(err => {
  console.error('❌', err.message);
  process.exit(1);
});
