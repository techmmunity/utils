import { getTypeof } from "../get-typeof";

export const cleanObj = <T extends Record<string, any>>(obj: T) => {
	if (getTypeof(obj) !== "object") {
		throw new Error("Value must be an object");
	}

	return Object.entries(obj).reduce((acc, [key, value]) => {
		if (getTypeof(value) !== "undefined") {
			acc[key as keyof T] = value;
		}

		return acc;
	}, {} as T);
};
