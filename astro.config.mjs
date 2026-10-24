// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nubotracker.com',
  integrations: [
    sitemap({
      filter: (page) => ![
        'https://www.nubotracker.com/how-it-works/',
        'https://www.nubotracker.com/blog/product/why-nubo-does-not-predict-your-baby/',
      ].includes(page),
    }),
    mdx(),
  ],
  output: 'static',
  trailingSlash: 'always',
});
