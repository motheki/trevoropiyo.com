import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [partytown(), prefetch()]
});
