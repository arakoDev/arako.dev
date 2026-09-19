export const projectCategories = [
	{ id: 'gameplay-systems', label: 'Gameplay systems' },
	{ id: 'tools-open-source', label: 'Tools and open source' },
	{ id: 'prototypes', label: 'Prototypes' },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]['id'];

export const projectCategoryIds = projectCategories.map(({ id }) => id) as [
	ProjectCategory,
	...ProjectCategory[],
];

export const projectStatuses = [
	{ id: 'shipped', label: 'Shipped' },
	{ id: 'ongoing', label: 'Ongoing' },
	{ id: 'prototype', label: 'Prototype' },
	{ id: 'archived', label: 'Archived' },
] as const;

export type ProjectStatus = (typeof projectStatuses)[number]['id'];

export const projectStatusIds = projectStatuses.map(({ id }) => id) as [
	ProjectStatus,
	...ProjectStatus[],
];

export const projectLinkTypes = [
	{ id: 'game', label: 'Play game' },
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
