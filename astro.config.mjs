import { defineConfig, passthroughImageService } from 'astro/config';
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  image: {
   service: passthroughImageService(),
  },
  integrations: [prefetch()]
});
{
  site: 'https://trevoropiyo.com';
}
