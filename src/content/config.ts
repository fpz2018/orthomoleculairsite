import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum([
      'darmgezondheid',
      'spier-en-botklachten',
      'voeding-en-supplementen',
      'leefstijl',
      'algemeen',
    ]),
    tags: z.array(z.string()).optional(),
    readingTime: z.string().optional(),
  }),
});

export const collections = { blog };
