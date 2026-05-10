#!/usr/bin/env node
/**
 * 从采集数据重新生成文档
 * 用法: node scripts/generate-docs-from-data.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';

const DATA = JSON.parse(readFileSync('data/all-packages.json', 'utf8'));
const REPORT = JSON.parse(readFileSync('data/ecosystem-report.json', 'utf8'));

const CATEGORY_NAMES = {
  'MCP': 'MCP 协议适配',
  'Provider': '模型供应商',
  'Memory': '记忆系统',
  'Context': '上下文管理',
  'Web': '网络访问',
  'SubAgent': '子代理/多代理',
  'Workflow': '工作流',
  'CodeQuality': '代码质量',
  'Skill': '技能包',
  'TUI': '终端 UI',
  'Tool': '工具与安全',
  'Prompt': '提示词管理',
  'Integration': '外部集成',
  'Audio': '音频与语音',
  'Notification': '桌面通知',
  'Theme': '主题美化',
  'Dashboard': '仪表盘',
  'Meta': '元包/管理工具',
  'AgentMode': '代理自主模式',
  'Browser': '浏览器自动化',
  'MarkdownPreview': 'Markdown 预览',
  'FileSearch': '文件搜索',
  'Settings': '设置管理',
  'DataViz': '数据可视化',
  'UserInteraction': '用户交互',
  'Testing': '测试与诊断',
  'Utils': '共享工具库',
  'Learning': '持续学习',
  'CostProxy': '成本/代理管理',
  'Output': '输出策略',
  'Session': '会话管理',
  'Chat': '聊天/消息',
  'Image': '图像处理',
};

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

  // Classify packages
  const catsMap = {};
  DATA.forEach(p => {
    // Use same classify function (simplified inline)
    const kw = new Set((p.keywords||[]).map(k=>k.toLowerCase()));
    const name = p.name.toLowerCase();
    let cat = 'Other';
    if(kw.has('mcp')||kw.has('model-context-protocol')||kw.has('acp')) cat='MCP';
    else if(kw.has('provider')||name.includes('provider')&&!name.includes('web')) cat='Provider';
    else if(kw.has('memory')||name.includes('memory')||name.includes('hindsight')) cat='Memory';
    else if(kw.has('context')||name.includes('context')||name.includes('handoff')) cat='Context';
    else if(kw.has('web-search')||kw.has('web-fetch')||kw.has('scraping')||name.includes('web-')) cat='Web';
    else if(kw.has('subagent')||kw.has('multi-agent')||kw.has('orchestration')||kw.has('swarm')||name.includes('subagent')||name.includes('crew')) cat='SubAgent';
    else if(kw.has('workflow')||name.includes('workflow')||name.includes('gsd')||name.includes('plannotator')) cat='Workflow';
    else if(kw.has('code-review')||kw.has('linter')||kw.has('lsp')||name.includes('lens')||name.includes('simplify')) cat='CodeQuality';
    else if(kw.has('skill')||name.includes('skill')) cat='Skill';
    else if(kw.has('tui')||kw.has('footer')||kw.has('powerline')||name.includes('footer')||name.includes('glance')) cat='TUI';
    else if(kw.has('sandbox')||kw.has('permissions')||kw.has('security')||name.includes('sandbox')||name.includes('guard')) cat='Tool';
    else if(kw.has('prompt')||name.includes('prompt')) cat='Prompt';
    else if(kw.has('telegram')||kw.has('whatsapp')||kw.has('discord')||name.includes('telegram')||name.includes('whatsapp')) cat='Integration';
    else if(kw.has('tts')||kw.has('voice')||kw.has('audio')||name.includes('voice')||name.includes('tts')) cat='Audio';
    else if(kw.has('notification')||kw.has('notify')) cat='Notification';
    else if(kw.has('theme')||kw.has('themes')) cat='Theme';
    else if(kw.has('dashboard')||kw.has('observability')||name.includes('dashboard')) cat='Dashboard';
    else if(kw.has('package-manager')||kw.has('unipi')||name.includes('depo')) cat='Meta';
    else if(kw.has('autonomous')||kw.has('ralph')||name.includes('ralph')||name.includes('boomerang')) cat='AgentMode';
    else if(kw.has('browser-automation')||name.includes('agent-browser')) cat='Browser';
    else if(kw.has('markdown')||kw.has('preview')||name.includes('markdown')) cat='MarkdownPreview';
    else if(kw.has('fuzzy')||kw.has('fff')||name.includes('fff')) cat='FileSearch';
    else if(kw.has('settings')||kw.has('config')||name.includes('settings')) cat='Settings';
    else if(kw.has('charts')||kw.has('vega')||kw.has('diagram')||kw.has('mermaid')||name.includes('chart')||name.includes('mermaid')) cat='DataViz';
    else if(kw.has('ask')||kw.has('interview')||kw.has('todo')||name.includes('ask-user')||name.includes('btw')) cat='UserInteraction';
    else if(kw.has('testing')||kw.has('diagnostics')||name.includes('test')||name.includes('diag')) cat='Testing';
    else if(kw.has('shared')||kw.has('utilities')||name.includes('shared')) cat='Utils';
    else if(kw.has('learning')||kw.has('continuous')||name.includes('continuous')) cat='Learning';
    else if(kw.has('proxy')||kw.has('rotation')||kw.has('free-models')||name.includes('rotator')||name.includes('proxy')) cat='CostProxy';
    else if(kw.has('output')||kw.has('truncation')||name.includes('output')) cat='Output';
    else if(kw.has('session')||name.includes('session')) cat='Session';
    else if(kw.has('chat')||kw.has('messaging')||name.includes('chat')||name.includes('intercom')) cat='Chat';
    else if(kw.has('image')||name.includes('image')) cat='Image';
    
    if(!catsMap[cat]) catsMap[cat]=[];
    catsMap[cat].push(p);
  });

  // Add top 20 of each category
  Object.entries(catsMap).forEach(([cat, pkgs]) => {
    const sorted = pkgs.sort((a,b)=>b.monthly-a.monthly).slice(0,20);
    lines.push(`### ${CATEGORY_NAMES[cat] || cat}`);
    sorted.forEach(p => {
      lines.push(`| \`${p.name}\` | ${p.monthly.toLocaleString()} | ${CATEGORY_NAMES[cat] || cat} | ${(p.desc||'').slice(0,80)} |`);
    });
  });

  return lines.join('\n');
}

// Execute
mkdirSync('docs', { recursive: true });
writeFileSync('docs/pi-ecosystem-overview.md', generateOverview());
console.log('✅ Generated docs/pi-ecosystem-overview.md');
