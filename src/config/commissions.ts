export const commissionMinimum = '$20';

export const priceRanges = [
	{
		label: 'Simple',
		range: '$20–$60',
		description:
			'Small, isolated work such as tools, interactions, cooldowns, leaderstats, simple shops, UI logic, bug fixes, or minor additions to existing code.',
	},
	{
		label: 'Intermediate',
		range: '$60–$100',
		description:
			'More involved work such as inventories, quests, round logic, abilities, progression, DataStore integration, matchmaking, wave logic, or multi-part features.',
	},
	{
		label: 'Advanced / Frameworks',
		range: '$100–$500+',
		description:
			'Complete or highly modular combat, ability, FPS, tower defense, battlegrounds, inventory, loot, progression, or RPG frameworks.',
	},
] as const;

export const paymentMethods = [
	'Wise',
	'PayPal',
	'Robux',
	'USDT',
	'Bitcoin (Lightning only)',
] as const;

export const paymentRules = [
	'A 30% upfront payment may be required, especially for new clients or people I have not worked with before.',
	'PayPal payments have an additional 7.5% fee.',
	'Any transaction, network, or conversion fees are paid by the client.',
	'For Robux paid through a gamepass, the quote excludes Roblox’s 30% fee. I must receive the full agreed amount after that fee.',
	'For group payouts, add me to the group as early as possible because Roblox requires a minimum membership period before a payout can be made.',
	'For Robux or cryptocurrency payments, the final amount uses the conversion rate agreed at the time of payment.',
	'Revenue share or percentage-based payment is accepted very rarely. I may consider it for established projects or reputable groups with a proven track record, an existing player base, or strong evidence that the project is viable.',
	'New or unknown projects should expect to pay normally.',
	'Payment is only complete once I receive the full agreed amount.',
	'Only send payments to accounts, usernames, or wallet addresses provided directly by me.',
] as const;

export const commissionBriefItems = [
	'A brief description of the project',
	'The system or features you want',
	'Any useful references or examples',
	'Your deadline, budget, and whether an existing codebase is involved',
] as const;

export const commissionTermGroups = [
	{
		id: 'before-work',
		number: '01',
		title: 'Before work begins',
		items: [
			'We agree on the final price, scope, and estimated deadline before I start.',
			'If I miss the agreed deadline because of a delay on my side, you may request a refund of the upfront payment.',
		],
	},
	{
		id: 'during-project',
		number: '02',
		title: 'During the project',
		items: [
			'Changes or features outside the original scope may cost extra and extend the deadline.',
			'If you cancel after I have started working, any upfront payment already made is non-refundable.',
		],
	},
	{
		id: 'after-delivery',
		number: '03',
		title: 'After delivery',
		items: [
			'For 30 days after delivery, I will fix bugs caused by my code and make reasonable small changes for free.',
			'Free support does not apply if the relevant code has been modified by you or another developer.',
			'After full payment, you may use, modify, adapt, and integrate the delivered code however you want, including having other developers work on it.',
			'You may not claim authorship of code written by me.',
			'Unless agreed otherwise, I may show the finished work in my portfolio. Private source code will not be shared publicly.',
		],
	},
] as const;
