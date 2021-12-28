/* eslint-disable no-mixed-operators */
import { getTypeof } from "../get-typeof";

/**
 * Divides an array in chunks with N items
 *
 * Ex:
 * ```ts
 * chunk([1, 2, 3], 1)
 * // [[1], [2], [3]]
 *
 * chunk([1, 2, 3], 2)
 * // [[1, 2], [3]]
 * ```
 */
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
