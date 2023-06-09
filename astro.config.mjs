import { defineConfig } from 'astro/config';
import prefetch from "@astrojs/prefetch";
import critters from "astro-critters";
import htmlBeautifier from "astro-html-beautifier";

// https://astro.build/config
export default defineConfig({
  integrations: [prefetch(), critters(), htmlBeautifier()]
});
{
  site: 'https://trevoropiyo.com/';
}
