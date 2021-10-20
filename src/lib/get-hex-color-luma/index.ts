/* eslint-disable @typescript-eslint/no-magic-numbers */

import { isHexColor } from "../is-hex-color";

const getColorWithCorrectLength = (color: string) => {
	if (color.length === 3) {
		const colorSplitted = color.split("");

		const [r, g, b] = colorSplitted;

		/**
		 * Duplicate the values, to make the code have length of six
		 */
		const colorWithLengthSix = [r, r, g, g, b, b];

		return colorWithLengthSix.join("");
	}

	return color;
};

export const getHexColorLuma = (color: string) => {
	if (!isHexColor(color)) return;

	const colorWithOutHashtag = color.substring(1);

	const colorWithLengthSix = getColorWithCorrectLength(colorWithOutHashtag);

	const rgb = parseInt(colorWithLengthSix, 16);

	const r = (rgb >> 16) & 0xff;
	const g = (rgb >> 8) & 0xff;
	const b = (rgb >> 0) & 0xff;

	const rLuma = 0.2126 * r;
	const gLuma = 0.7152 * g;
	const bLuma = 0.0722 * b;

	return rLuma + gLuma + bLuma;
};
