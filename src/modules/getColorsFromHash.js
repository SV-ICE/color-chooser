export const getColorsFromHash = (setColorsFromHash) => {
	if (document.location.hash.length > 1) {
		setColorsFromHash(document.location.hash.substring(1).split('-').map(color => '#' + color));
	}
		setColorsFromHash([]);
	return [];
}