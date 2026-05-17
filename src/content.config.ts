import { defineCollection } from "astro:content";

import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
  loader: glob({ base: "./content/blog", pattern: "**/*.{md,mdx}" }),
});

export const collections = { blog };
