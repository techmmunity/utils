import { getHexColorLuma } from "../get-hex-color-luma";
import { isHexColor } from "../is-hex-color";

/**
 * Check if a string is a dark hex color
 */
export const isDarkHexColor = (color: string) =>
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	isHexColor(color) && getHexColorLuma(color)! < 50;
