/* eslint-disable max-nested-callbacks */

import { getTypeof } from "lib/get-typeof";

describe("getTypeof Util", () => {
	describe('type "array"', () => {
		it('should return "array" with empty array', () => {
			let result: any;

			try {
				result = getTypeof([]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("array");
		});

		it('should return "array" with array of numbers', () => {
			let result: any;

			try {
				result = getTypeof([1, 2, 3]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("array");
		});

		it('should return "array" with array of strings', () => {
			let result: any;

			try {
				result = getTypeof(["1", "2", "3"]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("array");
		});

		it('should return "array" with array of objects', () => {
			let result: any;

			try {
				result = getTypeof([{}, { foo: "bar" }]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("array");
		});
	});

	describe('type "boolean"', () => {
		it('should return "boolean" with "true"', () => {
			let result: any;

			try {
				result = getTypeof(true);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("boolean");
		});

		it('should return "boolean" with "false"', () => {
			let result: any;

			try {
				result = getTypeof(false);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("boolean");
		});
	});

	describe('type "class"', () => {
		it('should return "class" with a custom class', () => {
			let result: any;

			try {
				class Foo {}

				result = getTypeof(Foo);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("class");
		});
	});

	// eslint-disable-next-line sonarjs/cognitive-complexity
	describe('type "function"', () => {
		it('should return "function" with arrow function', () => {
			let result: any;

			try {
				// eslint-disable-next-line max-nested-callbacks
				result = getTypeof(() => {});
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("function");
		});

		it('should return "function" with anonymous function', () => {
			let result: any;

			try {
				// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
				result = getTypeof(function () {});
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("function");
		});

		it('should return "function" with named function', () => {
			let result: any;

			try {
				// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
				result = getTypeof(function x() {});
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("function");
		});

		it('should return "function" with an native javascript function (String)', () => {
			let result: any;

			try {
				result = getTypeof(String);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("function");
		});

		it('should return "function" with an native javascript function (Number)', () => {
			let result: any;

			try {
				result = getTypeof(Number);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("function");
		});

		it('should return "function" with an native javascript function (Object)', () => {
			let result: any;

			try {
				result = getTypeof(Object);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("function");
		});

		it('should return "function" with an native javascript function (Date)', () => {
			let result: any;

			try {
				result = getTypeof(Date);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("function");
		});

		it('should return "function" with an native javascript function (Boolean)', () => {
			let result: any;

			try {
				result = getTypeof(Boolean);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("function");
		});

		it('should return "function" with an native javascript function (Array)', () => {
			let result: any;

			try {
				result = getTypeof(Array);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("function");
		});
	});

	describe('type "number"', () => {
		it('should return "number" with "1"', () => {
			let result: any;

			try {
				result = getTypeof(1);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("number");
		});

		it('should return "number" with "0"', () => {
			let result: any;

			try {
				result = getTypeof(0);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("number");
		});
	});

	describe('type "object"', () => {
		it('should return "object" with an empty object', () => {
			let result: any;

			try {
				result = getTypeof({});
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("object");
		});

		it('should return "object" with a object with properties', () => {
			let result: any;

			try {
				result = getTypeof({ foo: "bar" });
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("object");
		});
	});

	describe('type "string"', () => {
		it('should return "string" with "foo"', () => {
			let result: any;

			try {
				result = getTypeof("foo");
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("string");
		});
	});

	describe('type "symbol"', () => {
		it('should return "symbol" with a symbol', () => {
			let result: any;

			try {
				result = getTypeof(Symbol("foo"));
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("symbol");
		});
	});

	describe('type "undefined"', () => {
		it('should return "undefined" with no value', () => {
			let result: any;

			try {
				result = getTypeof();
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("undefined");
		});

		it('should return "undefined" with "undefined"', () => {
			let result: any;

			try {
				result = getTypeof(undefined);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("undefined");
		});

		it('should return "undefined" with "null"', () => {
			let result: any;

			try {
				result = getTypeof(null);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("undefined");
		});
	});
});
