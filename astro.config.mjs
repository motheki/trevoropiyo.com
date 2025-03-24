// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://trevoropiyo.com',
	integrations: [mdx(), sitemap()],
	prefetch: {
	  prefetchAll: true
	},
	experimental: {
		responsiveImages : true
	},
	image: {
    // Example: Enable the Sharp-based image service with a custom config
    service: {
       entrypoint: 'astro/assets/services/sharp',
       config: {
         limitInputPixels: false,
      },
     },
    experimentalLayout: "responsive"
  }
});
