import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const parser = new MarkdownIt();

export async function GET(context) {
	const blog = await getCollection("blog");
	return rss({
		title: "Trevor Opiyo",
		description: "Trevor Opiyo's Blog",
		site: context.site,
		items: blog.map((post) => ({
			link: `/blog/${post.id}/`,
			trailingSlash: false,
			content: sanitizeHtml(parser.render(post.body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
			}),
			...post.data,
		})),
	});
}
