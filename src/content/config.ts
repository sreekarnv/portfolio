import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    tech: z.array(
      z.object({
        name: z.string(),
        color: z.string(),
      })
    ),
    github: z.string().url(),
    liveDemo: z.string().url().optional(),
    docs: z.string().url().optional(),
    screenshots: z.array(z.string()).optional(),
    gradient: z.string(),
    featured: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
