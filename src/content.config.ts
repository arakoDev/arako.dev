import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

import { projectTabIds } from './config/workTabs';

const youtubeUrl = z.url().refine((value) => {
	const hostname = new URL(value).hostname;

	return (
		hostname === 'youtu.be' ||
		hostname.endsWith('youtube.com') ||
		hostname.endsWith('youtube-nocookie.com')
	);
}, 'Video must be a YouTube URL.');

const projects = defineCollection({
	loader: glob({
		base: './src/data/projects',
		pattern: '**/*.{md,mdx}',
	}),
	schema: z.object({
		title: z.string().min(1),
		slug: z.string().min(1),
		description: z.string().min(1),
		thumbnail: z.string().min(1),
		tabs: z.array(z.enum(projectTabIds)).min(1),
		year: z.number().int(),
		featured: z.boolean().default(false),
		video: youtubeUrl.optional(),
		gameUrl: z.url().optional(),
		sourceUrl: z.url().optional(),
		externalUrl: z.url().optional(),
	}),
});

export const collections = { projects };
