interface NavigationItem {
	label: string;
	href: string;
	matchPaths?: readonly string[];
}

interface ContactConfig {
	discord: string | null;
	email: string | null;
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
	secondaryNavigation: readonly NavigationItem[];
	contact: ContactConfig;
	socialLinks: readonly SocialLink[];
	availability: AvailabilityConfig;
}

export const site = {
	name: 'Arako',
	language: 'en',
	defaultDescription: 'Roblox scripter with over 5 years of coding experience and 2 years working with Roblox. I focus on building reliable, well-structured systems that are easy to maintain and expand as a project grows.',
	themeColor: '#080b12',
	navigation: [
		{ label: 'Work', href: '/work' },
		{
			label: 'Commission Info',
			href: '/commissions',
			matchPaths: ['/commissions', '/pricing', '/payments', '/terms'],
		},
	],
	secondaryNavigation: [
		{ label: 'Pricing', href: '/pricing' },
		{ label: 'Payments', href: '/payments' },
		{ label: 'Terms', href: '/terms' },
	],
	contact: {
		discord: 'arakodev',
		email: 'contact@arako.dev',
	},
	socialLinks: [
		{ label: 'GitHub', href: 'https://github.com/arakoDev' },
		{ label: 'X', href: 'https://x.com/arakoDev' },
		{ label: 'Roblox', href: 'https://www.roblox.com/users/2324084048/profile' },
	],
	availability: {
		status: 'open',
		message: 'Available',
		responseTime: null,
	},
} as const satisfies SiteConfig;
