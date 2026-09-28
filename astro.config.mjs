// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://arako.dev',

	redirects: {
		'/commissions': '/info',
		'/services': '/info',
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
