export const setLock = (id, locked, setColors, setIsNotify) => {
	setIsNotify(locked ? "Цвет разблокирован" : "Цвет заблокирован");
	setColors((prevColors) => {
		return prevColors.map((color) => {
			if (color.id !== id) {
				return color;
			}
			return {
				...color,
				locked: !color.locked,
			};
		});
	});
}