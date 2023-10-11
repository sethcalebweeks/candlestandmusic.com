import { z, defineCollection } from 'astro:content';

const tracks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string()
  }),
});

export const collections = {
  'tracks': tracks,
};

