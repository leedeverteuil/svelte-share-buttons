<script lang="ts">
	import Telegram from 'svelte-bootstrap-icons/lib/Telegram.svelte';
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

<button
	on:click={onClick}
	class="text-[#37aee2] hover:text-[#2981a7] rounded-full"
	aria-label="Share on Telegram">
	<Telegram class="w-8 h-8" />
</button>
