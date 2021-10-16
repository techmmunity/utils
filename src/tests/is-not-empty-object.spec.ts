import { isNotEmptyObject } from "lib/is-not-empty-object";

describe("isNotEmptyObject Util", () => {
	describe("With NOT empty object", () => {
		it("should return true with NOT empty object", () => {
			let result: any;

			try {
				result = isNotEmptyObject({ foo: "bar" });
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(true);
		});
	});

	describe("With empty object", () => {
		it("should return false with empty object", () => {
			let result: any;

			try {
				result = isNotEmptyObject({});
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
				result = isNotEmptyObject("bar");
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});

		it("should return false with number", () => {
			let result: any;

			try {
				result = isNotEmptyObject(1);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});

		it("should return false with empty array", () => {
			let result: any;

			try {
				result = isNotEmptyObject([]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});

		it("should return false with NOT empty array", () => {
			let result: any;

			try {
				result = isNotEmptyObject(["bar"]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});
	});
});
