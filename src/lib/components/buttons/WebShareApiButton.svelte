<script lang="ts">
	import { hasWebShareApi } from '$lib/util';
	import { createEventDispatcher } from 'svelte';

	// Props
	export let url: string;
	export let title: string;

	// Constants
	const dispatch = createEventDispatcher();

	// Variables
	let webShareSupported = hasWebShareApi();

	// Functions
	async function onClick() {
		try {
			navigator.share({
				title,
				text: `Shared from ${title}`,
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
	<button on:click={onClick}>
		<slot />
	</button>
{/if}
