interface NavigationItem {
	label: string;
	href: string;
}

interface ContactConfig {
	email: string | null;
	discord: string | null;
	inquiryUrl: string | null;
}

interface SocialLink {
	label: string;
	href: string;
}

interface AvailabilityConfig {
	status: 'open' | 'limited' | 'closed' | null;
	message: string | null;
	responseTime: string | null;
}

interface SiteConfig {
	name: string;
	language: string;
	defaultDescription: string;
	themeColor: string;
	navigation: readonly NavigationItem[];
	contact: ContactConfig;
	socialLinks: readonly SocialLink[];
	availability: AvailabilityConfig;
}

export const site = {
	name: 'Arako',
	language: 'en',
	defaultDescription: "Arako's portfolio showcasing Roblox scripting and development experience.",
	themeColor: '#080b12',
	navigation: [
		{ label: 'Home', href: '/' },
		{ label: 'Work', href: '/work' },
		{ label: 'Services', href: '/services' },
	],
	contact: {
		email: 'contact@arako.dev',
		discord: 'arakodev',
		inquiryUrl: 'mailto:contact@arako.dev?subject=Commission%20inquiry',
	},
	socialLinks: [
		{ label: 'X', href: 'https://x.com/arakoDev' },
		{ label: 'Roblox', href: 'https://www.roblox.com/users/2324084048/profile' },
		{ label: 'GitHub', href: 'https://github.com/arakoDev' },
	],
	availability: {
		status: null,
		message: null,
		responseTime: null,
	},
} as const satisfies SiteConfig;
