<script lang="ts">
	import Facebook from 'svelte-bootstrap-icons/lib/Facebook.svelte';
	import { buildParamsString, openUrl } from '$lib/util';

	// Props
	export let url: string; // URL to share
	export let hashtag: string = ''; // Hashtag for post
	export let quote: string = ''; // Not sure what this does

	// Reactives
	$: apiUrlWithParams = buildUrl(url, quote, hashtag);

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

<button
	on:click={onClick}
	class="text-[#3b5998] hover:text-[#273b65] rounded-full"
	aria-label="Share on Facebook">
	<Facebook class="w-8 h-8" />
</button>
