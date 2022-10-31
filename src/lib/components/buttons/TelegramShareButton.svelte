<script lang="ts">
	import { buildParamsString, openUrl } from '$lib/util';

	// Props
	export let url: string;
	export let text: string = '';

	// Constants
	const API_URL = 'https://telegram.me/share/url';

	// Reactives
	$: apiUrlWithParams = buildUrl(url, text);

	// Functions
	function buildUrl(url: string, text: string) {
		const paramsObj = {
			url,
			text
		};

		const paramsStr = buildParamsString(paramsObj);

		return paramsStr === '' ? API_URL : `${API_URL}?${paramsStr}`;
	}

	function onClick() {
		openUrl(apiUrlWithParams);
	}
</script>

<button on:click={onClick} aria-label="Share on Telegram" {...$$restProps}>
	<!-- Default slot -->
	<slot />
</button>
