<script lang="ts">
	import ShareFill from 'svelte-bootstrap-icons/lib/ShareFill.svelte';
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
	<button
		on:click={onClick}
		class="flex flex-row items-center justify-center p-2 rounded-full
            bg-blue-500 text-blue-50 hover:bg-blue-600"
		aria-label="Click to share">
		<ShareFill class="w-4 h-4" />
	</button>
{/if}
