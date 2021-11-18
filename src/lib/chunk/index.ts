/* eslint-disable no-mixed-operators */
import { getTypeof } from "../get-typeof";

export const chunk = <T extends Array<any>>(
	arr: T,
	length: number,
): Array<T> => {
	if (getTypeof(arr) !== "array") {
		throw new Error("Value must be an object");
	}

	const acc: Array<T> = [];

	const chunks = Math.ceil(arr.length / length);

	for (let i = 0; i < chunks; i++) {
		const start = i * length;
		const end = start + length;

		acc.push(arr.slice(start, end) as T);
	}

	return acc;
};
