<script lang="ts">
	// Props
	export let url: string; // The URL to share
	export let hashtags: string[] = []; // Hashtags (excluding #)
	export let relatedUsers: string[] = []; // Twitter accounts to recommend following (including @)
	export let title: string = ''; // Title of the shared page
	export let viaUser: string = ''; // Referral user (including @)

	// Constants
	const apiUrlWithParams = buildApiUrl();

	// Functions
	function buildApiUrl() {
		const apiUrl = 'https://twitter.com/share';
		const paramsObj = {
			url,
			...(hashtags.length > 0 ? { hashtags: hashtags.join(',') } : {}),
			text: title,
			...(relatedUsers.length > 0 ? { related: relatedUsers.join(',') } : {}),
			...(viaUser.length > 0 ? { via: viaUser.slice(1) } : {})
		};

		const paramsStr = Object.entries(paramsObj)
			.filter(([, value]) => value ?? false)
			.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
			.join('&');

		return paramsStr === '' ? apiUrl : `${apiUrl}?${paramsStr}`;
	}

	function onClick() {
		return window.open(apiUrlWithParams);
	}
</script>

<button on:click={onClick}>
	<slot />
</button>
