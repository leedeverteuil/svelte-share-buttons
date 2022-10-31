<script lang="ts">
	import { browser } from '$app/environment';
	import { buildParamsString, isMobileOrTablet, openUrl } from '$lib/util';

	// Props
	export let url: string; // The URL to share
	export let message: string = ''; // Optional message to send with URL

	// Constants
	const API_URL =
		browser && isMobileOrTablet()
			? 'https://api.whatsapp.com/send'
			: 'https://web.whatsapp.com/send';

	// Reactives
	$: apiUrlWithParams = buildUrl(url, message);

	// Functions
	function buildUrl(url: string, message: string) {
		const paramsObj = {
			text: message ? message + ' ' + url : url
		};

		const paramsStr = buildParamsString(paramsObj);

		return paramsStr === '' ? API_URL : `${API_URL}?${paramsStr}`;
	}

	function onClick() {
		openUrl(apiUrlWithParams);
	}

	// Svelte class prop
	let className: string = '';
	export { className as class };
</script>

<button on:click={onClick} class={className}>
	<slot />
</button>
