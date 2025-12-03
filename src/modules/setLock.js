export const setLock = (id, setColors, setIsNotify) => {
	setColors((prevColors) => {
			return prevColors.map((color) => {
				if (color.id !== id) {
					return {
						...color,
					}
				}
				let lock = color.locked;
				setIsNotify(lock ? "Цвет разблокирован" : "Цвет заблокирован");
				return {
					...color,
					locked: !lock,
				};
			});
		});
}