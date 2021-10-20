import { getTypeof } from "../get-typeof";

const IS_BRAZILIAN_PHONE =
	/^((?:(?:1[2-9]|2[1|2|4|7|8]|3[1-5|7-8]|4[1-9]|5[1|3-5]|6[1-9]|7[1|3-5|7|9]|8[1-9]|9[1-9])\d{8,9})|(?:119\d{8}))$/;
/**
 * Check if a string is a clean Brazilian Phone (With Valid DD)
 * - 19999904610
 * - 2199999999
 */
export const isBrazilianPhone = (value: string) =>
	getTypeof(value) === "string" && IS_BRAZILIAN_PHONE.test(value);
