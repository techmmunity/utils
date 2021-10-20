import { getTypeof } from "../get-typeof";

/**
 * Check if a string contains only numbers
 */
export const isNumeric = (value: string) =>
	getTypeof(value) === "string" && /^\d+$/.test(value);
