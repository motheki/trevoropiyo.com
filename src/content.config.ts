import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    rssSchema.extend({
      title: z.string(),
      description: z.string(),
      pubDate: z.union([z.string(), z.number(), z.date()]).transform((val) => new Date(val)),
      updatedDate: z
        .union([z.string(), z.number(), z.date()])
        .transform((val) => new Date(val))
        .optional(),
      heroImage: image().optional(),
      project: z
        .object({
          name: z.string(),
          role: z.string(),
          category: z.string(),
          order: z.number().int().nonnegative(),
          tags: z.array(z.string()),
          theme: z.enum(["light", "dark"]).default("dark"),
          website: z.url().optional(),
          repository: z.url().optional(),
        })
        .optional(),
    }),
});

export const collections = { blog };
