import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders, memoryCache } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://trevoropiyo.com",
  integrations: [mdx(), sitemap()],

  prefetch: {
    prefetchAll: true,
  },

  fonts: [{
    provider: fontProviders.google(),
    name: "Quantico",
    cssVariable: "--font-quantico",
    weights: [400, 700],
  }],

  experimental: {
   cache: {
      provider: memoryCache(),
    },
    clientPrerender: true,
    queuedRendering: {
      enabled: true,
      contentCache: true
    },
    rustCompiler: true
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

  vite: {
    plugins: [tailwindcss()],
  },
});