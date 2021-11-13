import { getTypeof } from "../get-typeof";

const nestProperty = (
	acc: Record<string, any>,
	originalKeys: Array<string>,
	value: any,
) => {
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	const lastIndex = originalKeys.length - 1;

	originalKeys.reduce((subAcc, currentKey, idx) => {
		const formattedKey = currentKey.includes("[")
			? parseInt(currentKey.replace(/[[\]]/g, ""), 10)
			: currentKey;

		if (idx === lastIndex) {
			subAcc[formattedKey] = value;

			return subAcc[formattedKey];
		}

		// Property already exists, but isn't the last one
		if (subAcc[formattedKey]) {
			return subAcc[formattedKey];
		}

		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		const nextValue = originalKeys[idx + 1];

		if (nextValue.startsWith("[")) {
			subAcc[formattedKey] = [];
		} else {
			subAcc[formattedKey] = {};
		}

		return subAcc[formattedKey];
	}, acc);
};

/**
 * Nest an object that have been nested
 *
 * Ex:
 *
 * Input
 * ```
 * {
 *   foo: 1,
 *   "bar.xyz": 2,
 *   "bar.abc.def": 3,
 *   "ghi.[0].jkl": 4,
 * }
 * ```
 *
 * Output
 * ```
 * {
 *   foo: 1,
 *   bar: {
 *     xyz: 2,
 *     abc: {
 *       def: 3,
 *     }
 *   },
 *   ghi: [
 *     {
 *       jkl: 4,
 *     }
 *   ]
 * }
 * ```
 */
export const nest = (obj?: Record<string, any>) => {
	if (!["undefined", "object"].includes(getTypeof(obj))) {
		throw new Error("Value must be an object");
	}

	const isArray = Object.keys(obj || {})
		.shift()
		?.startsWith("[");

	return Object.entries(obj || {}).reduce(
		(acc, [key, value]) => {
			if (getTypeof(value) === "undefined") return acc;

			const originalKeys = key.split(".");

			nestProperty(acc, originalKeys, value);

			return acc;
		},
		isArray ? [] : {},
	);
};
