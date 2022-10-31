<script lang="ts">
	import { buildParamsString, openUrl } from '$lib/util';

	// Props
	export let hashtag: string = '';
	export let quote: string = '';
	export let url: string;

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

	// Svelte class prop
	let className: string = '';
	export { className as class };
</script>

<button on:click={onClick} class={className}> <slot /></button>
