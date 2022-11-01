<script lang="ts">
	import { browser } from '$app/environment';
	import { buildParamsString, isMobileOrTablet, openUrl } from '$lib/util';

	// Props
	export let url: string; // The URL to share
	export let text: string = ''; // Optional message to send with URL

	// Constants
	const API_URL =
		browser && isMobileOrTablet()
			? 'https://api.whatsapp.com/send'
			: 'https://web.whatsapp.com/send';

	// Reactives
	$: apiUrlWithParams = buildUrl(url, text);

	// Functions
	function buildUrl(url: string, text: string) {
		const paramsObj = {
			text: text ? text + ' ' + url : url
		};

		const paramsStr = buildParamsString(paramsObj);

		return paramsStr === '' ? API_URL : `${API_URL}?${paramsStr}`;
	}

	function onClick() {
		openUrl(apiUrlWithParams);
	}
</script>

<button on:click={onClick} aria-label="Share on Whatsapp" {...$$restProps}>
  <!-- Default slot -->
	<slot />
</button>
