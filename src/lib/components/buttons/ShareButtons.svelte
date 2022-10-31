<script lang="ts">
	import { hasWebShareApi } from '$lib/util';
	import WebShareApiButton from './WebShareApiButton.svelte';

	// Props
	export let url: string;
	export let title: string;

	// Variables
	let webShareSupported = hasWebShareApi();

	// Functions
	function onFallback() {}
</script>

{#if webShareSupported}
	<WebShareApiButton {url} {title} on:force-fallback={onFallback} />
{:else}
	<!-- Other share buttons -->
	<slot />
{/if}
