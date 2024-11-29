import { z, defineCollection } from 'astro:content';

const PostSchema = z.object({
  title: z.string(),
  publishedAt: z.date(),
  tags: z.array(z.string()),
});
export type Post = z.infer<typeof PostSchema>;

const postCollection = defineCollection({
  type: "content",
  schema: PostSchema,
});

export const collections = {
  'post': postCollection,
};
