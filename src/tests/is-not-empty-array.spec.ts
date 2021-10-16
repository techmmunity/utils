import { isNotEmptyArray } from "lib/is-not-empty-array";

describe("isNotEmptyArray Util", () => {
	describe("With NOT empty array", () => {
		it("should return true", () => {
			let result: any;

			try {
				result = isNotEmptyArray([1]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(true);
		});
	});

	describe("With empty array", () => {
		it("should return false", () => {
			let result: any;

			try {
				result = isNotEmptyArray([]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});
	});

	describe("With NOT array", () => {
		it("should return false with string", () => {
			let result: any;

			try {
				result = isNotEmptyArray("bar");
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});

		it("should return false with number", () => {
			let result: any;

			try {
				result = isNotEmptyArray(1);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});

		it("should return false with empty object", () => {
			let result: any;

			try {
				result = isNotEmptyArray({});
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});

		it("should return false with NOT empty object", () => {
			let result: any;

			try {
				result = isNotEmptyArray({ foo: "bar" });
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});
	});
});
