/**
 * Returns true if the device is mobile or tablet
 */
export function isMobileOrTablet(): boolean {
	return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}
