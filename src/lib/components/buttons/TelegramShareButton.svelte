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

<button on:click={onClick} aria-label="Share on Telegram">
	<!-- Icon -->
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="currentColor"
		viewBox="0 0 16 16"
		><path
			d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" /></svg>
</button>

<style>
	* {
		box-sizing: border-box;
	}

	button {
		background: none;
		padding: 0;
		width: 2rem;
		height: 2rem;
		border: none;
		color: #37aee2;
		transition: color 0.2s;
		border-radius: 100%;
    cursor: pointer;
	}

	button:hover {
		color: #2981a7;
	}

	svg {
		width: 2rem;
		height: 2rem;
	}
</style>
