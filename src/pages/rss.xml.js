import rss, {
  pagesGlobToRssItems
} from '@astrojs/rss';

export async function get(context) {
  return rss({
    title: "Trevor Opiyo | Blog",
    description: "Trevor Opiyo's Blog",
    site: 'https://trevoropiyo.com',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.astro')),
    customData: `<language>en-us</language>`,
  });
}
