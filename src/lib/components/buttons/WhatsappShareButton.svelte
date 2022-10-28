<script lang="ts">
	import { browser } from '$app/environment';
	import { isMobileOrTablet } from '$lib/util';

	// Props
	export let url: string; // The URL to share
	export let message: string = ''; // Optional message to send with URL

	// Constants
	const apiUrlWithParams = buildApiUrl();
	const windowConfigStr = buildWindowConfigStr();

	// Functions
	function buildWindowConfigStr() {
		const windowCfg = {
			height: 550,
			width: 400,
			location: 'no',
			toolbar: 'no',
			status: 'no',
			directories: 'no',
			menubar: 'no',
			scrollbars: 'yes',
			resizable: 'no',
			centerscreen: 'yes',
			chrome: 'yes'
		};

		return Object.keys(windowCfg)
			.map((key) => `${key}=${windowCfg[key as keyof typeof windowCfg]}`)
			.join(',');
	}

	function buildApiUrl() {
		const apiUrl =
			browser && isMobileOrTablet()
				? 'https://api.whatsapp.com/send'
				: 'https://web.whatsapp.com/send';

		const paramsObj = {
			text: message ? message + ' ' + url : url
		};

		const params = Object.entries(paramsObj)
			.filter(([, value]) => value ?? false)
			.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
			.join('&');

		return params === '' ? apiUrl : `${apiUrl}?${params}`;
	}

	function onClick() {
		return window.open(apiUrlWithParams, '', windowConfigStr);
	}

	// Svelte class prop
	let className: string = '';
	export { className as class };
</script>

<button on:click={onClick} class={className}>
	<slot />
</button>
