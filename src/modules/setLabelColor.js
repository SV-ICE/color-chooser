import chroma from "chroma-js";

export const setLabelColor = (color) => {
	return chroma(color).luminance() > 0.5 ? "rgba(0, 0, 0, 0.85)" : "rgba(255, 255, 255, 0.85)";
}