export const projectCategories = [
	{ id: 'gameplay', label: 'Gameplay' },
	{ id: 'combat', label: 'Combat' },
	{ id: 'combat-skills', label: 'Combat Skills' },
	{ id: 'open-source', label: 'Open Source' },
	{ id: 'tool', label: 'Tool' },
	{ id: 'prototypes', label: 'Prototypes' },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]['id'];

export const projectCategoryIds = projectCategories.map(({ id }) => id) as [
	ProjectCategory,
	...ProjectCategory[],
];

export const projectCategoryLabels = Object.fromEntries(
	projectCategories.map(({ id, label }) => [id, label]),
) as Record<ProjectCategory, string>;

export const projectLinkTypes = [
	{ id: 'roblox-page', label: 'Roblox page' },
	{ id: 'source', label: 'View source' },
	{ id: 'demo', label: 'View demo' },
	{ id: 'documentation', label: 'Read documentation' },
	{ id: 'external', label: 'Visit project' },
] as const;

export type ProjectLinkType = (typeof projectLinkTypes)[number]['id'];

export const projectLinkTypeIds = projectLinkTypes.map(({ id }) => id) as [
	ProjectLinkType,
	...ProjectLinkType[],
];

export const projectLinkLabels = Object.fromEntries(
	projectLinkTypes.map(({ id, label }) => [id, label]),
) as Record<ProjectLinkType, string>;
