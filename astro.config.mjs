import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import critters from "astro-critters";

// https://astro.build/config
import htmlBeautifier from "astro-html-beautifier";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [prefetch(), critters(), htmlBeautifier()]
});
{
  site: 'https://trevoropiyo.com';
}
