import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders, memoryCache } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://trevoropiyo.com",
  integrations: [mdx(), sitemap()],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  cache: {
    provider: memoryCache(),
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Quantico",
      cssVariable: "--font-quantico",
      weights: [400, 700],
    },
  ],

  experimental: {
    clientPrerender: true,
    contentIntellisense: true,
    chromeDevtoolsWorkspace: true,
    incrementalBuild: true,
  },

  image: {
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
