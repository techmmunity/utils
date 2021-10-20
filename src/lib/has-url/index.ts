import { getTypeof } from "../get-typeof";

const HAS_URL = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)[^\s/]*\.\S*/;
/**
 * Check if has urls in the string
 * - https://google.com
 * - http://localhost:9090
 * - www.google.com
 */
export const hasUrl = (value: string) =>
	getTypeof(value) === "string" && HAS_URL.test(value);
