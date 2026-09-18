import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const images = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/images' }),
    schema: z.object({
        title: z.string(),
        game: z.string(),
        image: z.string(),
        shortDescription: z.string(),
    }),
});

const jeux = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/jeux' }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        cover: z.string(),
        releaseDate: z.number(),
    }),
});

export const collections = { images, jeux };
