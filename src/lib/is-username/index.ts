import { getTypeof } from "../get-typeof";

const IS_USERNAME = /^[a-zA-Z0-9_-]{3,16}$/;
/**
 * Check if a string is a simple username
 * - 3 to 16 characters
 * - Lower And Upper case allowed
 * - Allows only alphanumeric and `-` and `_`
 */
export const isUsername = (value: string) =>
	getTypeof(value) === "string" && IS_USERNAME.test(value);
