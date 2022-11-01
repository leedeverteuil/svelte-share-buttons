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
	<WebShareApiButton {url} {text} on:force-fallback={onFallback} {...$$restProps}>
		<slot />
	</WebShareApiButton>
{:else}
	<!-- Fallback share buttons -->
	<slot name="fallback" />
{/if}
