# Portfolio design and content

The home page and `/blog/` use the same `ProjectCard` component, backed by validated project metadata in the existing Astro content collection. Add a case study in `src/content/blog/` with a `project` block to feature it on the home page; `order` controls its position. Existing case-study URLs are preserved.

## Design

The refresh keeps the navy/blue identity and Quantico display font, with system sans-serif body text, shared spacing and color tokens, responsive grids, keyboard focus styles, a skip link, and reduced-motion support. Shared page chrome lives in `BaseLayout`; component-specific CSS stays scoped.

App Store and web delivery, the Senior Software Developer role at AthletIQ, software contract negotiation, Linear-based team coordination, and software timelines are stated from the owner's supplied experience. No release counts, contract values, client outcomes, or App Store listing URLs are invented.

## Project sources

- Super HN: <https://superhn.org> and <https://github.com/motheki/super-hacker-news>. Copy is based on the public app and repository README. The local project supplied its existing `icon-512.png` brand asset. The case study retains attribution to Better HN.
- Ambiance: <https://ambiance-five.vercel.app>. Copy is grounded in the public app and its owner-authorized repository README. The existing `ambiance-light.webp` brand asset is reused. The private GitHub repository is intentionally not linked publicly.
- AthletIQ and USBN: existing site case studies, with the owner-supplied senior role added to AthletIQ.

## Astro documentation

Consulted the official documentation and its MCP server (`https://mcp.docs.astro.build/mcp`, `search_astro_docs`):

- [Scoped and global styles](https://docs.astro.build/en/guides/styling/)
- [Images in content collections](https://docs.astro.build/en/guides/images/#images-in-content-collections)
- [Collection schemas](https://docs.astro.build/en/guides/content-collections/#defining-the-collection-schema)
- [Astro MCP setup](https://docs.astro.build/en/guides/build-with-ai/)

## Verification and deployment

- `bun run test` builds the site and verifies generated routes, internal links and anchors, image dimensions/assets, metadata, four project cards, required experience copy, RSS, sitemap, and shared accessibility styles.
- `bun x oxlint --type-check --type-aware` runs lint without automatic fixes.
- `bun x oxfmt --check src tests package.json docs` checks formatting for these paths.
- The existing TypeScript 7 dependency is not supported by `astro check`. Verification preserves it by installing the full checker toolchain in a temporary directory: `npm install --prefix /tmp/portfolio-astro-check --no-audit --no-fund --ignore-scripts typescript@6.0.3 @astrojs/check@0.9.12`, then `node /tmp/portfolio-astro-check/node_modules/@astrojs/check/bin/astro-check.js --root "$PWD"`. The isolation is necessary because the checker's transitive dependencies also load TypeScript.
- Static Astro output is `dist/`. `wrangler.toml` points Cloudflare Pages at that directory, not `dist/client/`.
- Cloudflare Pages project `trevorsblog` is Git-connected; production deploys from `main` to `trevoropiyo.com`.
