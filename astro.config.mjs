import { defineConfig, passthroughImageService } from 'astro/config';

export default defineConfig({
  image: {
   service: passthroughImageService(),
  },
  prefetch: {
    prefetchAll: true
  }
});

{
  site: 'https://trevoropiyo.com';
}
