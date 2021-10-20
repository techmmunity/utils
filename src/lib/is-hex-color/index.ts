import { getTypeof } from "../get-typeof";

const IS_HEX_COLOR = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

/**
 * Check if a string is a hex color
 */
export const isHexColor = (value: any) =>
	getTypeof(value) === "string" && IS_HEX_COLOR.test(value);
