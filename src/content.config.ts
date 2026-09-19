import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

import { projectCategoryIds, projectLinkTypeIds } from './config/projects';
import { getYouTubeEmbedUrl } from './utils/youtube';

const text = z.string().trim().min(1, 'Value cannot be empty.');
const youtubeUrl = z
	.url()
	.refine(
		(value) => getYouTubeEmbedUrl(value) !== undefined,
		'Hero video must be a valid HTTPS YouTube video URL.',
	);

const projectUrl = z.url().refine((value) => {
	const protocol = new URL(value).protocol;

	return protocol === 'https:' || protocol === 'http:';
}, 'Project links must use HTTP or HTTPS.');

const projects = defineCollection({
	loader: glob({
		base: './src/data/projects',
		pattern: '**/*.md',
	}),
	schema: ({ image }) =>
		z.object({
			title: text,
			summary: text.max(240, 'Summary must be 240 characters or fewer.'),
			categories: z
				.array(z.enum(projectCategoryIds))
				.min(1, 'Add at least one project category.'),
			heroImage: image(),
			heroAlt: z
				.string()
				.trim()
				.min(20, 'Hero alt text must meaningfully describe the image.'),
			heroVideo: youtubeUrl.optional(),
			heroCaption: text.optional(),
			featuredOrder: z.number().int().positive().optional(),
			draft: z.boolean().default(true),
			client: text.optional(),
			outcome: text.optional(),
			confidentiality: text.optional(),
			credits: z
				.array(
					z.object({
						name: text,
						role: text.optional(),
						url: projectUrl.optional(),
					}),
				)
				.default([]),
			links: z
				.array(
					z.object({
						type: z.enum(projectLinkTypeIds),
						url: projectUrl,
						label: text.optional(),
					}),
				)
				.default([]),
		}),
});

export const collections = { projects };
