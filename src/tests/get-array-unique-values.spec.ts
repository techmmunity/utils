import { getArrayUniqueValues } from "lib/get-array-unique-values";

describe("getArrayUniqueValues Util", () => {
	describe("With empty array", () => {
		it("should return an empty array", () => {
			let result: any;

			try {
				result = getArrayUniqueValues([]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual([]);
		});
	});

	describe("With array with unique values", () => {
		it("should return an array with unique values (string)", () => {
			let result: any;

			try {
				result = getArrayUniqueValues(["foo", "bar", "fooBar"]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual(["foo", "bar", "fooBar"]);
		});

		it("should return an array with unique values (number)", () => {
			let result: any;

			try {
				result = getArrayUniqueValues([1, 2, 3]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual([1, 2, 3]);
		});

		it("should return an array with unique values (object)", () => {
			let result: any;

			try {
				result = getArrayUniqueValues([{ foo: "bar" }, { bar: "foo" }]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual([{ foo: "bar" }, { bar: "foo" }]);
		});

		it("should return an array with unique values (arrays of strings)", () => {
			let result: any;

			try {
				result = getArrayUniqueValues([
					["foo", "bar"],
					["fooBar", "barFoo"],
				]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual([
				["foo", "bar"],
				["fooBar", "barFoo"],
			]);
		});

		it("should return an array with unique values (arrays of numbers)", () => {
			let result: any;

			try {
				result = getArrayUniqueValues([
					[1, 2],
					[3, 2],
				]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual([
				[1, 2],
				[3, 2],
			]);
		});

		it("should return an array with unique values (arrays of objects)", () => {
			let result: any;

			try {
				result = getArrayUniqueValues([
					[{ foo: "bar" }, { bar: "foo" }],
					[{ fooBar: "barFoo", barFoo: "fooBar" }],
				]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual([
				[{ foo: "bar" }, { bar: "foo" }],
				[{ fooBar: "barFoo", barFoo: "fooBar" }],
			]);
		});
	});

	describe("With array with duplicated values", () => {
		it("should return an array with unique values (string)", () => {
			let result: any;

			try {
				result = getArrayUniqueValues(["foo", "foo"]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual(["foo"]);
		});

		it("should return an array with unique values (number)", () => {
			let result: any;

			try {
				result = getArrayUniqueValues([1, 1]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual([1]);
		});
	});

	describe("With non-primitive values", () => {
		it("should return the same value (object)", () => {
			let result: any;

			try {
				result = getArrayUniqueValues([{ foo: "bar" }, { foo: "bar" }]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual([{ foo: "bar" }, { foo: "bar" }]);
		});

		it("should return the same value (arrays of strings)", () => {
			let result: any;

			try {
				result = getArrayUniqueValues([
					["foo", "bar"],
					["foo", "bar"],
				]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual([
				["foo", "bar"],
				["foo", "bar"],
			]);
		});

		it("should return the same value (arrays of numbers)", () => {
			let result: any;

			try {
				result = getArrayUniqueValues([
					[1, 2],
					[1, 2],
				]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual([
				[1, 2],
				[1, 2],
			]);
		});

		it("should return the same value (receive array of objects)", () => {
			let result: any;

			try {
				result = getArrayUniqueValues([
					[{ foo: "bar" }, { bar: "foo" }],
					[{ foo: "bar" }, { bar: "foo" }],
				]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual([
				[{ foo: "bar" }, { bar: "foo" }],
				[{ foo: "bar" }, { bar: "foo" }],
			]);
		});
	});
});
