<script lang="ts">
	import FacebookShareButton from '$lib/components/buttons/FacebookShareButton.svelte';
	import ShareButtons from '$lib/components/buttons/ShareButtons.svelte';
	import TelegramShareButton from '$lib/components/buttons/TelegramShareButton.svelte';
	import TwitterShareButton from '$lib/components/buttons/TwitterShareButton.svelte';
	import WhatsappShareButton from '$lib/components/buttons/WhatsappShareButton.svelte';

	// Constants
	const url = 'www.superchex.com';
	const text = '10 Ways to Get Better Sleep';
	const hashtag = 'superchex';
	const hashtags = ['superchex'];
</script>

<ShareButtons {url} {text}>
	<div class="flex flex-row items-center justify-center gap-2">
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
