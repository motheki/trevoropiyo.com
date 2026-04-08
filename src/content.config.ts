import { defineCollection} from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: rssSchema.extend({
    title: z.string(),
    description: z.string(),
    pubDate: z.union([z.string(), z.number(), z.date()]).transform((val) => new Date(val)),
    updatedDate: z.union([z.string(), z.number(), z.date()]).transform((val) => new Date(val)).optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
