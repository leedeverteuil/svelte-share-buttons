<script lang="ts">
	import FacebookShareButton from '$lib/components/buttons/FacebookShareButton.svelte';
	import TwitterShareButton from '$lib/components/buttons/TwitterShareButton.svelte';
	import WhatsappShareButton from '$lib/components/buttons/WhatsappShareButton.svelte';
</script>

<!-- Whatsapp -->
<WhatsappShareButton url="www.google.com">Share on WhatsApp</WhatsappShareButton>

<!-- Twitter -->
<TwitterShareButton url="www.google.com" title="10 Ways to Get Better Sleep"
	>Share on Twitter</TwitterShareButton>

<!-- Facebook -->
<FacebookShareButton url="www.superchex.com" hashtag="#superchex"
	>Share on Facebook</FacebookShareButton>
