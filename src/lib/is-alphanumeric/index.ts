import { getTypeof } from "../get-typeof";

const IS_ALPHANUMERIC = /^[a-z0-9]+$/i;

export const isAlphanumeric = (str?: string) =>
	getTypeof(str) === "string" && IS_ALPHANUMERIC.test(str!);
