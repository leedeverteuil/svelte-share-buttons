# svelte-share

Shows Web API button if available, if not then shows fallback buttons specified in `<slot/>` for `<ShareButtons/>`.

## Usage

```svelte
<script>
	import {
		ShareButtons,
		WhatsappShareButton,
		TwitterShareButton,
		FacebookShareButton,
		TelegramShareButton
	} from 'svelte-share';

	const url = 'www.svelte.dev';
	const title = 'Check out this cool framework';
	const text = title;
	const message = title;
	const hashtag = '#svelte';
	const hashtags = ['svelte'];
</script>

<ShareButtons {url} {title}>
	<div>
		<!-- Whatsapp -->
		<WhatsappShareButton {url} {message} />

		<!-- Twitter -->
		<TwitterShareButton {url} {text} {hashtags} />

		<!-- Facebook -->
		<FacebookShareButton {url} {hashtag} />

		<!-- Telegram -->
		<TelegramShareButton {url} {text} />
	</div>
</ShareButtons>
```

## Notes

1. For `<TwitterShareButton />`, the `hashtags` prop takes an array of string hashtags, which exclude any leading "#".
2. For `<FacebookShareButton />`, the `hashtag` prop takes a string hashtag, which includes a leading "#".
