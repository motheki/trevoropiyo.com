import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import prefetch from "@astrojs/prefetch";
import critters from "astro-critters";
import htmlBeautifier from "astro-html-beautifier";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [prefetch(), critters(), htmlBeautifier()]
});
{
  site: 'https://trevoropiyo.com';
}
