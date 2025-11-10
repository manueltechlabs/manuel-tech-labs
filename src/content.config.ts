import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts/' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(65, {
        message: 'Title cannot be longer than 65 characters',
      }),
      desc: z.string().max(165, {
        message: 'Description cannot be longer than 165 characters',
      }),
      heading: z.string(),
      author: z.string(),
      date: z.date(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      image: image(),
      permalink: z.string(),
      slug: z.string(),
      isDraft: z.boolean().optional(),
    }),
});



export const collections = {
  posts,
};
