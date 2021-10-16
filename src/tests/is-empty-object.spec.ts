import { isEmptyObject } from "lib/is-empty-object";

describe("isEmptyObject Util", () => {
	describe("With empty object", () => {
		it("should return true", () => {
			let result: any;

			try {
				result = isEmptyObject({});
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(true);
		});
	});

	describe("With NOT empty object", () => {
		it("should return false with NOT empty object", () => {
			let result: any;

			try {
				result = isEmptyObject({ foo: "bar" });
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
				result = isEmptyObject("bar");
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});

		it("should return false with number", () => {
			let result: any;

			try {
				result = isEmptyObject(1);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});

		it("should return false with empty array", () => {
			let result: any;

			try {
				result = isEmptyObject([]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});

		it("should return false with NOT empty array", () => {
			let result: any;

			try {
				result = isEmptyObject(["bar"]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});
	});
});
