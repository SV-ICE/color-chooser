export const setLock = (id, setColors) => {
	setColors((prevColors) => {
			return prevColors.map((color) => {
				if (color.id !== id) {
					return {
						...color,
					}
				}
				let l = color.locked;
				return {
					...color,
					locked: !l,
				};
			});
		});
}