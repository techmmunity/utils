import { getTypeof } from "../get-typeof";

const IS_UUID_V4 =
	/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
/**
 * Check if valued is valid UUID (version 4)
 */
export const isUuidV4 = (value: string) =>
	getTypeof(value) === "string" && IS_UUID_V4.test(value);
