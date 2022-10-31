<script lang="ts">
	import { buildParamsString, openUrl } from '$lib/util';

	// Props
	export let url: string; // The URL to share
	export let hashtags: string[] = []; // Hashtags (excluding #)
	export let relatedUsers: string[] = []; // Twitter accounts to recommend following (including @)
	export let text: string = ''; // Title of the shared page
	export let viaUser: string = ''; // Referral user (including @)

	// Constants
	const API_URL = 'https://twitter.com/share';

	// Reactives
	$: apiUrlWithParams = buildUrl(url, hashtags, relatedUsers, text, viaUser);

	// Functions
	function buildUrl(
		url: string,
		hashtags: string[],
		relatedUsers: string[],
		text: string,
		viaUser: string
	) {
		const paramsObj = {
			url,
			...(hashtags.length > 0 ? { hashtags: hashtags.join(',') } : {}),
			text,
			...(relatedUsers.length > 0 ? { related: relatedUsers.join(',') } : {}),
			...(viaUser.length > 0 ? { via: viaUser.slice(1) } : {})
		};

		const paramsStr = buildParamsString(paramsObj);

		return paramsStr === '' ? API_URL : `${API_URL}?${paramsStr}`;
	}

	function onClick() {
		openUrl(apiUrlWithParams);
	}
</script>

<button on:click={onClick} aria-label="Share on Twitter" {...$$restProps}>
	<!-- Default slot -->
	<slot />
</button>
