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
	} from 'svelte-share-icons';

	const url = 'www.svelte.dev';
	const text = 'Check out this cool framework';
	const hashtags = ['svelte'];
</script>

<ShareButtons {url} {text}>
	<div>
		<!-- Whatsapp -->
		<WhatsappShareButton {url} {text} />

		<!-- Twitter -->
		<TwitterShareButton {url} {text} {hashtags} />

		<!-- Facebook -->
		<FacebookShareButton {url} hashtag={hashtags[0]} />

		<!-- Telegram -->
		<TelegramShareButton {url} {text} />
	</div>
</ShareButtons>
```

## Notes

1. All hashtags should exclude a leading "#".
