import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import compress from "astro-compress";

// https://astro.build/config
import critters from "astro-critters";

// https://astro.build/config
import htmlBeautifier from "astro-html-beautifier";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [partytown(), prefetch(), compress(), critters(), htmlBeautifier()]
});
{
  site: 'https://trevoropiyo.com';
}