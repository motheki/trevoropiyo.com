import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import prefetch from "@astrojs/prefetch";
import compress from "astro-compress";
import critters from "astro-critters";
import htmlBeautifier from "astro-html-beautifier";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [prefetch(), critters(), htmlBeautifier(), compress()]
});
{
  site: 'https://trevoropiyo.com/';
}