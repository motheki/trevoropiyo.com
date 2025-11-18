import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import fontGoogle from "@astrojs/font-google";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://trevoropiyo.com",
  integrations: [
    mdx(),
    sitemap(),
    fontGoogle({
      families: {
        Quantico: true,
      },
    }),
  ],
  prefetch: {
    prefetchAll: true,
  },
  experimental: {
    clientPrerender: true,
  },
  image: {
    // Example: Enable the Sharp-based image service with a custom config
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: false,
      },
    },
    experimentalLayout: "constrained",
  },
});
