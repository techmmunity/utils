import { getTypeof } from "../get-typeof";

export const isNotEmptyObject = (value: any) =>
	getTypeof(value) === "object" &&
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	Object.keys(value).length > 0;
