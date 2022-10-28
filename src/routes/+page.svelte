<script lang="ts">
	import TwitterShareButton from '$lib/components/buttons/TwitterShareButton.svelte';
	import WhatsappShareButton from '$lib/components/buttons/WhatsappShareButton.svelte';
</script>

<WhatsappShareButton url="www.google.com">Share on WhatsApp</WhatsappShareButton>
<TwitterShareButton url="www.google.com" title="10 Ways to Get Better Sleep"
	>Share on Twitter</TwitterShareButton>
