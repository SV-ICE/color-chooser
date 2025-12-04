import chroma from "chroma-js";

export const setLabelColor = ({color}) => {
	return chroma(color).luminance() > 0.5 ? "black" : "white";
}