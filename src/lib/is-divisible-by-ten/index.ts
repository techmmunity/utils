import { getTypeof } from "../get-typeof";

/**
 * Check if is an number divisible by 10
 */
export const isDivisibleByTen = (value: number) =>
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	getTypeof(value) === "number" && value % 10 === 0;
