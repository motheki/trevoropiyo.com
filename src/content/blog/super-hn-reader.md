---
title: "Super HN: A Focused Hacker News Reader"
description: "A server-rendered Hacker News reader built with Astro and Cloudflare Workers, with a focus on readable discussions and resilient data access."
pubDate: "2026-11-16"
heroImage: "../../images/super-hn-logo.png"
project:
  name: "Super HN"
  role: "Web Development & Deployment"
  category: "Open Source · Reading Experience"
  order: 3
  tags: ["Astro", "TypeScript", "Cloudflare Workers"]
  theme: "light"
  website: "https://superhn.org"
  repository: "https://github.com/motheki/super-hacker-news"
---

[Super HN](https://superhn.org) is a focused interface for reading Hacker News. My work on the project brings together server-rendered web development, interface design, and deployment on Cloudflare Workers.

The project builds on [Better HN by pajecawav](https://github.com/pajecawav/better-hn), with the original attribution retained in the repository.

## Product Scope

The reading experience keeps the emphasis on stories and conversations:

- Top, New, Ask HN, and Show HN feeds with pagination.
- Nested discussions with native disclosure controls and comment permalinks.
- User profiles and clear story metadata.
- Light and dark themes, readable typography, and layouts that work on smaller screens.

## Engineering Focus

Astro renders the pages on the server without adding a component framework. Shared layouts, reusable components, and native browser controls keep the interface straightforward to maintain.

The data layer uses multiple Hacker News providers, bounded request budgets, and timeouts. Caching and fallback behavior help preserve a useful reading experience when an upstream service is unavailable, while missing content and errors remain distinct from successful responses.

Navigation uses Astro’s client router for short transitions, history, and scroll restoration, with reduced-motion preferences respected.

## Delivery

The application is deployed to **superhn.org** on Cloudflare Workers. The repository includes build checks and a deployment workflow, connecting the public reading experience to a repeatable release process.

Super HN is an example of my web delivery work: taking an interface through implementation and into a live, maintained application.

## Links

- [Read Super HN](https://superhn.org)
- [Explore the public GitHub repository](https://github.com/motheki/super-hacker-news)
