---
name: zc-skill-atlas-industry
description: >-
  梳理赛道结构、关键玩家与业务地图，禁止编造公司名单。
  Use in any Agent Host that can mount stdio MCP. Pair with zc-skill-atlas-industry.
---

# 行业与产业链研判 · Skill

## When to use

- User asks for: 行业与产业链研判
- 梳理赛道结构、关键玩家与业务地图，禁止编造公司名单。

## Tools (`zc-skill-atlas-industry`)

| Tool | Args |
|------|------|
| `research_industry` | query, jdText, profileText, location, notes, limit |

## Example

```json
{
  "query": "Frontend Engineer",
  "location": "remote",
  "jdText": "<paste JD>",
  "profileText": "<paste profile>"
}
```

## Limits

- Do not invent employers, dates, or numbers
- Do not apply or send email unless the user confirms
- Unknown facts must be marked unknown

## Host install

Mount this repo as stdio MCP (see README). Not Zhencheng-only.
