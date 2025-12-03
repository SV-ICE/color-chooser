export const updateColorsHash = (colors) => {
	const colorsArray = colors.map(item => {
		return item.color.substring(1);
	});
	document.location.hash = colorsArray.join('-');
}