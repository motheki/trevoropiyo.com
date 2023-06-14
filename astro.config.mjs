import { defineConfig } from 'astro/config';
import prefetch from "@astrojs/prefetch";
import htmlBeautifier from "astro-html-beautifier";
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  integrations: [prefetch(), htmlBeautifier(), critters()]
});
{
  site: 'https://trevoropiyo.com/';
}
