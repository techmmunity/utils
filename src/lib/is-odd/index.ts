import { getTypeof } from "../get-typeof";

/**
 * Check if is an odd number
 */
export const isOdd = (value: number) =>
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	getTypeof(value) === "number" && value % 2 !== 0;
