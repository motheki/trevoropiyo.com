import { getCollection } from "astro:content";
import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Trevor Opiyo",
    description: "Trevor Opiyo's Blog",
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/*.{md,mdx}'),
    ),
  });
}
