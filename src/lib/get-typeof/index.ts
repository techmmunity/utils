export type Type =
	| "array"
	| "boolean"
	| "class"
	| "function"
	| "number"
	| "object"
	| "string"
	| "symbol"
	| "undefined"
	| "unknown";

export const getTypeof = (value?: any): Type => {
	switch (typeof value) {
		case "object": {
			switch (true) {
				case value === null:
					return "undefined";

				case Array.isArray(value):
					return "array";

				/**
				 * INSTANCES OF CLASSES SHOULD BE OBJECTS!!!!
				 * DO NOT ADD A VALIDATION HERE!!!!
				 *
				 * class -> Thing that you can do `new Class()`
				 * instance -> Thing that you **CAN'T** do `new Class()`
				 */

				default:
					return "object";
			}
		}

		case "string":
			return "string";

		case "number":
		case "bigint":
			if (isNaN(value as number)) return "unknown";

			return "number";

		case "boolean":
			return "boolean";

		case "function":
			/**
			 * INSTANCES OF CLASSES SHOULD BE OBJECTS!!!!
			 * DO NOT ADD A VALIDATION HERE!!!!
			 *
			 * class -> Thing that you can do `new Class()`
			 * instance -> Thing that you **CAN'T** do `new Class()`
			 */
			if (value.toString().startsWith("class")) {
				return "class";
			}

			return "function";

		case "symbol":
			return "symbol";

		case "undefined":
			return "undefined";

		default:
			return "unknown";
	}
};
