import { getTypeof } from "../get-typeof";

const IS_URL = /^(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)[^\s/]*\.\S*$/;
/**
 * Check if a string is an url
 * - https://google.com
 * - http://localhost:9090
 * - www.google.com
 */
export const isUrl = (url: string) =>
	getTypeof(url) === "string" && IS_URL.test(url);
