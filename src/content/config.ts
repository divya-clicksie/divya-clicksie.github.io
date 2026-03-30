import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.string(),
    dateModified: z.string(),
    author: z.string().default('Nubo Team'),
    heroImage: z.string().optional(),
    ogImage: z.string().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { guides };
