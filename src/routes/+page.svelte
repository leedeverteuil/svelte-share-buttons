<script lang="ts">
	import FacebookShareButton from '$lib/components/buttons/FacebookShareButton.svelte';
	import ShareButtons from '$lib/components/buttons/ShareButtons.svelte';
	import TelegramShareButton from '$lib/components/buttons/TelegramShareButton.svelte';
	import TwitterShareButton from '$lib/components/buttons/TwitterShareButton.svelte';
	import WebShareApiButton from '$lib/components/buttons/WebShareApiButton.svelte';
	import WhatsappShareButton from '$lib/components/buttons/WhatsappShareButton.svelte';

	// Constants
	const url = 'www.svelte.dev';
	const text = 'A cool JS framework';
	const hashtag = 'svelte';
	const hashtags = ['svelte', 'js'];
</script>

<main>
	<h3>Web share API button and fallback example</h3>
	<ShareButtons {url} {text}>
		<!-- Inner text for web share API button -->
		Web Share API

		<!-- Fallback buttons -->
		<div slot="fallback">
			<!-- Whatsapp -->
			<WhatsappShareButton {url} {text}>Share on WhatsApp</WhatsappShareButton>

			<!-- Twitter -->
			<TwitterShareButton {url} {text} {hashtags}>Share on Twitter</TwitterShareButton>

			<!-- Facebook -->
			<FacebookShareButton {url} {hashtag}>Share on Facebook</FacebookShareButton>

			<!-- Telegram -->
			<TelegramShareButton {url} {text}>Share on Telegram</TelegramShareButton>
		</div>
	</ShareButtons>

	<hr />

	<h3>All buttons individual examples</h3>

	<!-- Fallback buttons -->
	<div>
		<!-- Web share API button -->
		<WebShareApiButton {url} {text}>Web Share API</WebShareApiButton>

		<!-- Whatsapp -->
		<WhatsappShareButton {url} {text}>Share on WhatsApp</WhatsappShareButton>

		<!-- Twitter -->
		<TwitterShareButton {url} {text} {hashtags}>Share on Twitter</TwitterShareButton>

		<!-- Facebook -->
		<FacebookShareButton {url} {hashtag}>Share on Facebook</FacebookShareButton>

		<!-- Telegram -->
		<TelegramShareButton {url} {text}>Share on Telegram</TelegramShareButton>
	</div>
</main>

<style>
	main {
		text-align: center;
	}

  hr {
    margin: 50px 0;
  }

	div {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		align-items: center;
		justify-content: center;
	}
</style>
