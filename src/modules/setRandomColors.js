import chroma from "chroma-js";

export const setRandomColors = (setColors) => {
    setColors((prevColors) => {
        return prevColors.map((color) => {
            if (color.locked) {
                return color;
            }
            return {
                ...color,
                color: chroma.random().hex(),
            };
        });
    });
}