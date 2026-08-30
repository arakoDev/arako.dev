export const workTabs = [
	{ id: 'all', label: 'All' },
	{ id: 'combat', label: 'Combat' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'open-source', label: 'Open Source' },
	{ id: 'prototypes', label: 'Prototypes' },
] as const;

export type WorkTabId = Exclude<(typeof workTabs)[number]['id'], 'all'>;

export const projectTabIds = workTabs
	.filter(({ id }) => id !== 'all')
	.map(({ id }) => id) as [WorkTabId, ...WorkTabId[]];
