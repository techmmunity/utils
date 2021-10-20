import { isEmptyArray } from "../lib/is-empty-array";

describe("isEmptyArray Util", () => {
	describe("With empty array", () => {
		it("should return true", () => {
			let result: any;

			try {
				result = isEmptyArray([]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(true);
		});
	});

	describe("With NOT empty array", () => {
		it("should return false", () => {
			let result: any;

			try {
				result = isEmptyArray([1]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});
	});

	describe("With NOT object", () => {
		it("should return false with string", () => {
			let result: any;

			try {
				result = isEmptyArray("bar");
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});

		it("should return false with number", () => {
			let result: any;

			try {
				result = isEmptyArray(1);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});

		it("should return false with empty object", () => {
			let result: any;

			try {
				result = isEmptyArray({});
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});

		it("should return false with NOT empty object", () => {
			let result: any;

			try {
				result = isEmptyArray({ foo: "bar" });
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});
	});
});
