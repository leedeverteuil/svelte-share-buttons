<script lang="ts">
	import { buildParamsString, openUrl } from '$lib/util';

	// Props
	export let url: string; // URL to share
	export let hashtag: string = ''; // Hashtag for post
	export let quote: string = ''; // Not sure what this does

	// Reactives
	$: hashtagWithHash = `#${hashtag}`;
	$: apiUrlWithParams = buildUrl(url, quote, hashtagWithHash);

	// Constants
	const API_URL = 'https://www.facebook.com/sharer/sharer.php';

	// Functions
	function buildUrl(url: string, quote: string, hashtag: string) {
		const paramsObj = {
			u: url,
			...(quote !== '' ? { quote } : {}),
			...(hashtag !== '' ? { hashtag } : {})
		};

		const paramsStr = buildParamsString(paramsObj);

		return paramsStr === '' ? API_URL : `${API_URL}?${paramsStr}`;
	}

	function onClick() {
		openUrl(apiUrlWithParams);
	}
</script>

<button on:click={onClick} aria-label="Share on Facebook" {...$$restProps}>
  <!-- Default slot -->
	<slot />
</button>