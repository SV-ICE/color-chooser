export const copyColor = async (color, setIsNotify) => {
	try{
		navigator.clipboard.writeText(color);
		setIsNotify("Цвет скопирован!")
	} catch(error) {
		console.log(error.message);
	}
};