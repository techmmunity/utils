import { getTypeof } from "../get-typeof";

export const isEmptyArray = (value: any) =>
	getTypeof(value) === "array" &&
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	value.length < 1;
