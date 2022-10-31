<script lang="ts">
	import { hasWebShareApi } from '$lib/util';
	import { createEventDispatcher } from 'svelte';

	// Props
	export let url: string;
	export let text: string;

	// Constants
	const dispatch = createEventDispatcher();

	// Variables
	let webShareSupported = hasWebShareApi();

	// Functions
	async function onClick() {
		try {
			navigator.share({
				title: text,
				text: `Shared from ${text}`,
				url
			});
		} catch (err) {
			webShareSupported = false;

			// Web share isn't available,
			// communicate to parent to fallback
			// to individual icons
			dispatch('force-fallback');
		}
	}
</script>

{#if webShareSupported}
	<button on:click={onClick} aria-label="Click to share" {...$$restProps}>
		<!-- Default slot -->
		<slot />
	</button>
{/if}