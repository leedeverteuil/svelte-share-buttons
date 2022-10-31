<script lang="ts">
	import { hasWebShareApi } from '$lib/util';
	import WebShareApiButton from './WebShareApiButton.svelte';

	// Props
	export let url: string;
	export let text: string;

	// Variables
	let webShareSupported = hasWebShareApi();

	// Functions
	function onFallback() {}
</script>

{#if webShareSupported}
	<WebShareApiButton {url} {text} on:force-fallback={onFallback} />
{:else}
	<!-- Other share buttons -->
	<slot />
{/if}
