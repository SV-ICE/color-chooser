import chroma from "chroma-js";

export const setRandomColors = (setColors, hash) => {
    let isHash = hash.length > 0;

    setColors((prevColors) => {
        return prevColors.map((color, index) => {
            if (color.locked) {
                return color;
            }
            return {
                ...color,
                color: isHash ? hash[index] : chroma.random().hex(),
            };
        });
    });
}