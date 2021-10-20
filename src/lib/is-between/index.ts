import { getTypeof } from "../get-typeof";

export const isBetween = (value: number, min: number, max: number) => {
	if (
		getTypeof(value) !== "number" ||
		getTypeof(min) !== "number" ||
		getTypeof(max) !== "number"
	) {
		return false;
	}

	return value >= min && value <= max;
};
