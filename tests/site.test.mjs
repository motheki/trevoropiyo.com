import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import test from "node:test";

const output = resolve("dist");
const origin = "https://trevoropiyo.com";
const slugs = [
  "athletiq-basketball-technology",
  "usbn-digital-platform",
  "super-hn-reader",
  "ambiance-football-explorer",
];
const pages = ["/", "/blog/", ...slugs.map((slug) => `/blog/${slug}/`)];
const readPage = (path) => readFileSync(join(output, path, "index.html"), "utf8");
const attributes = (tag) =>
  Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1], match[2]]),
  );
const text = (html) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");

for (const path of pages) {
  await test(`${path} has accessible landmarks, metadata, and local assets`, () => {
    const html = readPage(path);
    assert.equal([...html.matchAll(/<h1(?:\s[^>]*)?>/g)].length, 1, "exactly one h1");
    assert.match(html, /<html lang="en"/);
    assert.match(html, /href="#main-content"/);
    assert.match(html, /<main id="main-content"/);
    assert.match(html, /aria-label="Main navigation"/);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.match(html, /<meta property="og:image" content="https:\/\/trevoropiyo.com\//);
    assert.ok(html.includes(`rel="canonical" href="${origin}${path}"`));

    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, "unique element ids");

    for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
      const image = attributes(tag);
      assert.match(tag, /\salt(?:\s|=|>)/, "image alt text, including empty decorative alt");
      assert.ok(Number(image.width) > 0 && Number(image.height) > 0, "explicit image dimensions");
      assert.ok(existsSync(join(output, image.src)), `image exists: ${image.src}`);
    }

    for (const [tag] of html.matchAll(/<(?:a|link|script)\b[^>]*>/g)) {
      const attrs = attributes(tag);
      const href = attrs.href ?? attrs.src;
      if (!href || /^https?:\/\//.test(href)) continue;
      const url = new URL(href, `${origin}${path}`);
      const file = join(output, url.pathname, url.pathname.endsWith("/") ? "index.html" : "");
      assert.ok(existsSync(file), `local link or asset exists: ${href}`);
      if (url.hash) {
        assert.ok(
          readFileSync(file, "utf8").includes(`id="${url.hash.slice(1)}"`),
          `anchor exists: ${href}`,
        );
      }
    }
  });
}

await test("homepage and index feature all four projects with public links only", () => {
  for (const path of ["/", "/blog/"]) {
    const html = readPage(path);
    assert.equal([...html.matchAll(/class="project-card"/g)].length, 4);
    for (const slug of slugs) assert.ok(html.includes(`href="/blog/${slug}/"`));
    for (const url of [
      "https://superhn.org",
      "https://ambiance-five.vercel.app",
      "https://github.com/motheki/super-hacker-news",
    ]) {
      assert.ok(html.includes(`href="${url}"`));
    }
    assert.ok(!html.includes("github.com/motheki/ambiance"), "private repository is not linked");
  }
});

await test("homepage emphasizes shipping, senior role, contracts, and coordination", () => {
  const content = text(readPage("/"));
  for (const phrase of [
    "Senior Software Developer at AthletIQ",
    "delivered applications to the App Store and the web",
    "negotiating software contracts",
    "Linear",
    "software timelines",
    "Coordinating teams",
  ])
    assert.ok(content.includes(phrase), `visible copy includes: ${phrase}`);
  const athletiq = text(readPage("/blog/athletiq-basketball-technology/"));
  assert.match(athletiq, /Senior Software Developer at AthletIQ/);
  assert.match(athletiq, /App Store and the web/);
});

await test("new case studies are included in RSS and sitemap", () => {
  const rss = readFileSync(join(output, "rss.xml"), "utf8");
  const sitemap = readFileSync(join(output, "sitemap-0.xml"), "utf8");
  for (const slug of slugs) {
    assert.ok(rss.includes(`/blog/${slug}/`));
    assert.ok(sitemap.includes(`/blog/${slug}/`));
  }
});

await test("production CSS includes mobile layout, visible focus, and reduced motion", () => {
  const css = readdirSync(join(output, "_astro"))
    .filter((file) => file.endsWith(".css"))
    .map((file) => readFileSync(join(output, "_astro", file), "utf8"))
    .join("\n");
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /focus-visible/);
  assert.match(css, /grid-template-columns:1fr/);
  assert.match(css, /color-scheme:dark/);
});

await test("generated site contains no email addresses, mailto links, or email-protection code", () => {
  const files = readdirSync(output, { recursive: true }).filter((file) =>
    /\.(?:html|xml|js|css|json)$/i.test(file),
  );
  assert.ok(files.length > 0, "generated site files exist");
  for (const file of files) {
    assert.doesNotMatch(
      readFileSync(join(output, file), "utf8"),
      /mailto:|email-protection|data-cfemail|email_off|trevoropiyo@trevoropiyo\.com/i,
      `no email contact markup in ${String(file)}`,
    );
  }
});

await test("header omits the email CTA and footer retains LinkedIn and GitHub", () => {
  for (const path of pages) {
    const html = readPage(path);
    const header = html.match(/<header\b[^>]*class="site-header"[^>]*>[\s\S]*?<\/header>/)?.[0];
    assert.ok(header, "shared site header exists");
    assert.doesNotMatch(header, /Let’s Talk|mailto:|email-protection/);
    const footer = html.match(
      /<nav\b[^>]*aria-label="Footer navigation"[^>]*>([\s\S]*?)<\/nav>/,
    )?.[1];
    assert.ok(footer, "footer navigation exists");
    for (const href of ["https://www.linkedin.com/in/trevoropiyo", "https://github.com/motheki"])
      assert.ok(footer.includes(`href="${href}"`), `footer destination: ${href}`);
  }
});

await test("Cloudflare publishes Astro's static output directory", () => {
  const config = readFileSync("wrangler.toml", "utf8");
  assert.match(config, /pages_build_output_dir\s*=\s*"\.\/dist\/"/);
});
