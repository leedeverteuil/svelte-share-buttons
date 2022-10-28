<script lang="ts">
	import { browser } from '$app/environment';
	import { isMobileOrTablet } from '$lib/util';

	// Props
	export let url: string; // The URL to share
	export let message: string = ''; // Optional message to send with URL

	// Constants
	const apiUrlWithParams = buildApiUrl();

  // Functions
	function buildApiUrl() {
		const apiUrl =
			browser && isMobileOrTablet()
				? 'https://api.whatsapp.com/send'
				: 'https://web.whatsapp.com/send';

		const paramsObj = {
			text: message ? message + ' ' + url : url
		};

		const paramsStr = Object.entries(paramsObj)
			.filter(([, value]) => value ?? false)
			.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
			.join('&');

		return paramsStr === '' ? apiUrl : `${apiUrl}?${paramsStr}`;
	}

	function onClick() {
		return window.open(apiUrlWithParams);
	}

	// Svelte class prop
	let className: string = '';
	export { className as class };
</script>

<button on:click={onClick} class={className}>
	<slot />
</button>
