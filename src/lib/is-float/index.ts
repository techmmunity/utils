import { getTypeof } from "../get-typeof";

export const isFloat = (value: number) =>
	getTypeof(value) === "number" && String(value).includes(".");
