import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectLink = z.object({
	label: z.string(),
	url: z.string().url(),
});

const projects = defineCollection({
	loader: glob({
		base: './src/data/projects',
		pattern: '**/*.{md,mdx}',
	}),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		description: z.string(),
		category: z.string(),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		openSource: z.boolean().default(false),
		year: z.number().int(),
		thumbnail: z.string().optional(),
		video: z.string().optional(),
		links: z.array(projectLink).default([]),
	}),
});

export const collections = { projects };
