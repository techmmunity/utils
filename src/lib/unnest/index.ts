import { getTypeof } from "../get-typeof";

interface HandleArrayParams {
	acc: Record<string, any>;
	key: string;
	value: Array<any>;
}

interface HandleObjectParams {
	acc: Record<string, any>;
	key: string;
	value: any;
}

const handleArray = ({
	acc,
	key: fatherKey,
	value: fatherValue,
}: HandleArrayParams) => {
	fatherValue.forEach((val, idx) => {
		const key = `${fatherKey}[${idx}]`;
		const value = val;

		switch (getTypeof(val)) {
			case "array":
				handleArray({
					acc,
					key,
					value: val,
				});
				break;

			case "object":
				// eslint-disable-next-line @typescript-eslint/no-use-before-define
				handleObject({
					acc,
					key,
					value,
				});
				break;

			case "string":
			case "number":
			case "boolean":
				acc[key] = value;
				break;

			default:
				break;
		}
	});
};

const handleObject = ({ acc, key, value }: HandleObjectParams) => {
	// Classes or classes instances should be the same
	if (
		getTypeof(value) === "class" ||
		value?.constructor?.toString()?.startsWith("class")
	) {
		acc[key] = value;

		return;
	}

	Object.entries(value).forEach(([subKey, subValue]) => {
		switch (getTypeof(subValue)) {
			case "array":
				handleArray({
					acc,
					key: `${key}.${subKey}`,
					value: subValue as Array<any>,
				});
				break;

			case "object":
				handleObject({
					acc,
					key: `${key}.${subKey}`,
					value: subValue,
				});
				break;

			case "string":
			case "number":
			case "boolean":
			case "class":
				acc[`${key}.${subKey}`] = subValue;
				break;

			default:
				break;
		}
	});
};

/**
 * Unnest an object to have keys with the complete path
 *
 * Ex:
 *
 * Input
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
 *
 * Output
 * ```
 * {
 *   foo: 1,
 *   "bar.xyz": 2,
 *   "bar.abc.def": 3,
 *   "ghi[0].jkl": 4,
 * }
 * ```
 */
export const unnest = (obj?: Array<any> | Record<string, any>) => {
	if (!["undefined", "array", "object"].includes(getTypeof(obj))) {
		throw new Error("Value must be an object");
	}

	return Object.entries(obj || {}).reduce((acc, [key, value]) => {
		switch (getTypeof(value)) {
			case "array":
				handleArray({
					acc,
					key,
					value,
				});
				break;

			case "object":
				handleObject({
					acc,
					key,
					value,
				});
				break;

			case "string":
			case "number":
			case "boolean":
				acc[key] = value;
				break;

			default:
				break;
		}

		return acc;
	}, {} as Record<string, any>);
};
