// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://arako.dev',

	redirects: {
		'/services': '/commissions',
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
