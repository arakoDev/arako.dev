const youtubeHosts = new Set([
	'youtu.be',
	'youtube.com',
	'www.youtube.com',
	'm.youtube.com',
	'youtube-nocookie.com',
	'www.youtube-nocookie.com',
]);

const videoIdPattern = /^[a-zA-Z0-9_-]{6,}$/;

export function getYouTubeVideoId(value: string) {
	let url: URL;

	try {
		url = new URL(value);
	} catch {
		return undefined;
	}

	const hostname = url.hostname.toLowerCase();

	if (url.protocol !== 'https:' || !youtubeHosts.has(hostname)) {
		return undefined;
	}

	let videoId: string | null | undefined;

	if (hostname === 'youtu.be') {
		videoId = url.pathname.split('/').filter(Boolean)[0];
	} else {
		videoId = url.searchParams.get('v');

		if (!videoId) {
			const [route, id] = url.pathname.split('/').filter(Boolean);

			if (['embed', 'live', 'shorts'].includes(route)) {
				videoId = id;
			}
		}
	}

	return videoId && videoIdPattern.test(videoId) ? videoId : undefined;
}

export function getYouTubeEmbedUrl(value: string) {
	const videoId = getYouTubeVideoId(value);

	return videoId
		? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`
		: undefined;
}
