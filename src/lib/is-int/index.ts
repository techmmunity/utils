import { getTypeof } from "../get-typeof";

export const isInt = (value: number) => {
	if (getTypeof(value) === "number") {
		const valueString = String(value);
		const valueNumber = parseInt(valueString, 10);

		/**
		 * If is float, the pointing number will be gone,
		 * and the lengths will not match
		 *
		 * Ex: 20.1 -> 20
		 */
		return valueString.length === String(valueNumber).length;
	}

	return false;
};
