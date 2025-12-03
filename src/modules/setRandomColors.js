import chroma from "chroma-js";

export const setRandomColors = (setColors, hash) => {
    if (hash.length > 0) {
        setColors((prevColors) => {
            return prevColors.map((color, index) => {
                if (color.locked) {
                    return color;
                }
                return {
                    ...color,
                    color: hash[index],
                };
            });
        });

    } else {
        setColors((prevColors) => {
            return prevColors.map((color, index) => {
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

}