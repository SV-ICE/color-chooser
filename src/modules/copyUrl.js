export const copyUrl = (url, setIsNotify) => {
	try{
		navigator.clipboard.writeText(url);
		setIsNotify("URL скопирован!")
	} catch(error) {
		console.log(error.message);
	}
}