export const workTabs = [
	{ id: 'combat', label: 'Combat' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'open-source', label: 'Open Source' },
	{ id: 'prototypes', label: 'Prototypes' },
] as const;

export type WorkTabId = (typeof workTabs)[number]['id'];

export const workTabIds = workTabs.map(({ id }) => id) as [WorkTabId, ...WorkTabId[]];
