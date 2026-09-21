const uploadDateFormatter = new Intl.DateTimeFormat('en-US', {
	day: 'numeric',
	month: 'short',
	timeZone: 'UTC',
	year: 'numeric',
});

export function formatUploadDate(date: string) {
	return uploadDateFormatter.format(new Date(`${date}T00:00:00Z`));
}
