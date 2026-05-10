#!/usr/bin/env node
/**
 * 从采集数据重新生成文档
 * 用法: node scripts/generate-docs-from-data.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { classify, CATEGORY_NAMES } from './classifier.mjs';

const DATA = JSON.parse(readFileSync('data/all-packages.json', 'utf8'));
const REPORT = JSON.parse(readFileSync('data/ecosystem-report.json', 'utf8'));

// Generate overview
function generateOverview() {
  const cats = Object.entries(REPORT.categories)
    .sort((a, b) => b[1].count - a[1].count);

  const lines = [
    '# PI 扩展生态系统总览',
    '',
    `> 自动生成于 ${new Date(REPORT.generatedAt).toISOString().split('T')[0]} | ${REPORT.totalPackages} packages`,
    '',
    '## 生态规模',
    '',
    `| 指标 | 数值 |`,
    `|------|------|`,
    `| 总扩展包数 | ${REPORT.totalPackages} |`,
    `| 分类数 | ${REPORT.totalCategories} |`,
    `| 总月下载量 | ${REPORT.totalDownloads.toLocaleString()} |`,
    '',
    '## Top 20 热门扩展',
    '',
    '| # | 包名 | 月下载量 | 分类 |',
    '|---|------|---------|------|',
    ...REPORT.topPackages.map((p, i) => 
      `| ${i + 1} | \`${p.name}\` | ${p.monthly.toLocaleString()} | ${CATEGORY_NAMES[p.category] || p.category} |`
    ),
    '',
    '## 分类概览',
    '',
    '| 分类 | 包数量 | 总下载量 | Top 包 |',
    '|------|--------|---------|--------|',
    ...cats.map(([cat, info]) => {
      const topPkg = info.top5[0] || { name: '-', monthly: 0 };
      return `| ${CATEGORY_NAMES[cat] || cat} | ${info.count} | ${info.totalDownloads.toLocaleString()} | \`${topPkg.name}\` (${topPkg.monthly.toLocaleString()}/mo) |`;
    }),
    '',
    '## 所有包列表',
    '',
    '| 包名 | 月下载 | 分类 | 描述 |',
    '|------|--------|------|------|',
  ];

  // Classify packages using shared classifier
  const catsMap = {};
  DATA.forEach(p => {
    const cat = classify(p);
    if (!catsMap[cat]) catsMap[cat] = [];
    catsMap[cat].push(p);
  });

  // Add top 20 of each category
  Object.entries(catsMap).forEach(([cat, pkgs]) => {
    const sorted = pkgs.sort((a, b) => b.monthly - a.monthly).slice(0, 20);
    lines.push(`### ${CATEGORY_NAMES[cat] || cat}`);
    sorted.forEach(p => {
      lines.push(`| \`${p.name}\` | ${p.monthly.toLocaleString()} | ${CATEGORY_NAMES[cat] || cat} | ${(p.desc||'').slice(0, 80)} |`);
    });
  });

  return lines.join('\n');
}

// Execute
mkdirSync('docs', { recursive: true });
writeFileSync('docs/pi-ecosystem-overview.md', generateOverview());
console.log('✅ Generated docs/pi-ecosystem-overview.md');
