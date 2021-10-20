import { getTypeof } from "../get-typeof";

/**
 * Check if value is a leap year
 */
export const isLeap = (year: number | string) => {
	if (!["number", "string"].includes(getTypeof(year))) return false;

	const yearString = String(year);
	const yearNumber = parseInt(yearString, 10);

	/**
	 * If isn't an integer (Ex: 2020.1)
	 */
	if (yearString.length !== String(yearNumber).length) return false;

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	return new Date(yearNumber, 1, 29).getMonth() === 1;
};
