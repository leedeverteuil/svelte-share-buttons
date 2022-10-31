import { browser } from '$app/environment';

/** Returns true if the device is mobile or tablet */
export function isMobileOrTablet(): boolean {
	return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}

/** Build encoded URL parameter string */
export function buildParamsString(paramsObj: { [k: string]: string | number }) {
	return (
		Object.entries(paramsObj)
			// Filter out undefined/null values
			.filter(([, value]) => value ?? false)

			// Make array with encoded params
			.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)

			// Join together with ampersand
			.join('&')
	);
}

/** Open the URL in a separate tab/window */
export function openUrl(url: string) {
	window.open(url);
}

/** Check if web share API is available */
export function hasWebShareApi() {
	return browser && typeof navigator.share !== 'undefined';
}
