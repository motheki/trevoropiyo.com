import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [partytown()]
});
