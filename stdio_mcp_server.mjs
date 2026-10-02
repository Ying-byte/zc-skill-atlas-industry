#!/usr/bin/env node
import { createFirstpartyMcp } from '../_shared/create-firstparty-mcp.mjs';

const mcp = createFirstpartyMcp({
  "id": "atlas-industry",
  "titleZh": "行业与产业链研判",
  "summary": "梳理赛道结构、关键玩家与业务地图，禁止编造公司名单。",
  "tools": [
    "research_industry"
  ],
  "proxyTools": {
    "research_industry": "zc_atlas_search"
  },
  "localKind": "research"
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
