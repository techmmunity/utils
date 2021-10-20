import { getTypeof } from "../get-typeof";

/**
 * Check if is an even number
 */
export const isEven = (nbr: number) =>
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	getTypeof(nbr) === "number" && nbr % 2 === 0;
