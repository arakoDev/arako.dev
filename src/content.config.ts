import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

import {
	projectCategoryIds,
	projectLinkTypeIds,
	projectStatusIds,
} from './config/projects';

const text = z.string().trim().min(1, 'Value cannot be empty.');
const youtubeHosts = new Set([
	'youtu.be',
	'youtube.com',
	'www.youtube.com',
	'm.youtube.com',
	'youtube-nocookie.com',
	'www.youtube-nocookie.com',
]);

const youtubeUrl = z.url().refine((value) => {
	const url = new URL(value);

	return url.protocol === 'https:' && youtubeHosts.has(url.hostname.toLowerCase());
}, 'Hero video must be an HTTPS URL on an approved YouTube hostname.');

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
		z
			.object({
				title: text,
				summary: text.max(240, 'Summary must be 240 characters or fewer.'),
				category: z.enum(projectCategoryIds),
				tags: z.array(text).min(1, 'Add at least one technical tag.'),
				role: text,
				services: z.array(text).default([]),
				status: z.enum(projectStatusIds),
				duration: text,
				team: text,
				year: z.number().int().min(2006),
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
				links: z
					.array(
						z.object({
							type: z.enum(projectLinkTypeIds),
							url: projectUrl,
							label: text.optional(),
						}),
					)
					.default([]),
			})
			.superRefine((project, context) => {
				if (!project.draft && project.services.length === 0) {
					context.addIssue({
						code: 'custom',
						message: 'Published projects must list at least one service.',
						path: ['services'],
					});
				}
			}),
});

export const collections = { projects };
