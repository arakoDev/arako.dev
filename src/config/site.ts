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
	themeColor: '#080b11',
	navigation: [
		{ label: 'Work', href: '/work' },
		{ label: 'About', href: '/#about' },
		{ label: 'Contact', href: '/#contact' },
	],
	contact: {
		email: null,
		discord: null,
		inquiryUrl: null,
	},
	socialLinks: [],
	availability: {
		status: null,
		message: null,
		responseTime: null,
	},
} as const satisfies SiteConfig;
