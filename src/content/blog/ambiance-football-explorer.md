---
title: "Ambiance: Football in Focus"
description: "An NFL statistics explorer that connects player histories, team schedules, and game data through a focused, searchable web experience."
pubDate: "2026-11-16"
heroImage: "../../images/ambiance-logo.webp"
project:
  name: "Ambiance"
  role: "Full-Stack Web Development"
  category: "Sports Data · Web Application"
  order: 4
  tags: ["Next.js", "React", "Convex"]
  theme: "light"
  website: "https://ambiance-five.vercel.app"
---

[Ambiance](https://ambiance-five.vercel.app) brings NFL statistics into a focused web application for exploring players, teams, and games. My work connects the data pipeline to an interface that makes football information easier to find and understand.

## Product Scope

The application supports several ways to explore football:

- Search players by name and narrow results by season, team, or position.
- Browse player histories and season statistics.
- Explore teams, schedules, games, and play-by-play where data is available.
- Ask supported statistical questions, including season leaders and named-player comparisons.
- Review data sources and coverage rather than treating every result as complete.

## Engineering Focus

The application uses Next.js and React for the web experience, Convex for its backend, and Recharts for data visualization. The interface connects searchable views with the data needed to follow a player, team, or game in context.

Public NFLverse datasets are processed into application-ready records. Data validation and controlled updates keep the read experience separate from ingestion work.

An important product principle is to preserve uncertainty: missing statistics are not presented as zero, regular season and postseason remain distinct, and historical results reflect available coverage. Game scores are snapshots rather than a live scoring feed.

## Delivery

Ambiance is delivered as a public web application on Vercel. It demonstrates full-stack product work across data modeling, backend integration, interface development, and web deployment.

The source repository is private; the live application is available to explore below.

## Links

- [Explore Ambiance](https://ambiance-five.vercel.app)
