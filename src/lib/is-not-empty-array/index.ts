import { getTypeof } from "lib/get-typeof";

export const isNotEmptyArray = (value: any) =>
	getTypeof(value) === "array" &&
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	value.length > 0;
