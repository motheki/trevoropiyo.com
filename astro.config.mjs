import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://trevoropiyo.com",
  integrations: [mdx(), sitemap()],
  prefetch: {
    prefetchAll: true,
  },
  experimental: {
    clientPrerender: true,
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Quantico",
        cssVariable: "--font-quantico",
        weights: [400, 700],
      },
    ],
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
