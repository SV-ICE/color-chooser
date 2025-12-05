export const setLock = (id, setColors, setIsNotify) => {
	setColors((prevColors) => {
		return prevColors.map((color) => {
			if (color.id !== id) {
				return color;
			}
			let isLocked = color.locked;
			setIsNotify(isLocked ? "Цвет разблокирован" : "Цвет заблокирован");
			return {
				...color,
				locked: !isLocked,
			};
		});
	});
}