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
	<button on:click={onClick} aria-label="Click to share">
		<!-- Icon -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			viewBox="0 0 16 16"
			><path
				d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" /></svg>
	</button>
{/if}

<style>
	* {
		box-sizing: border-box;
	}

	button {
    border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		padding: 0.5rem;
		border-radius: 100%;
		background-color: #3b82f6;
		color: #eff6ff;
		transition: background-color 0.2s;
		cursor: pointer;
	}

	button:hover {
		background-color: #2563eb;
	}

	svg {
		width: 1rem;
		height: 1rem;
	}
</style>
