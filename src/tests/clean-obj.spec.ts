import { cleanObj } from "lib/clean-obj";

describe("cleanObj Util", () => {
	describe("With object with no undefined values", () => {
		it("should return the same object", () => {
			let result: any;

			try {
				result = cleanObj({ foo: "bar" });
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual({ foo: "bar" });
		});
	});

	describe("With object with undefined values", () => {
		it("should return an empty object", () => {
			let result: any;

			try {
				result = cleanObj({ foo: undefined });
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual({});
		});
	});

	describe("With object with null values", () => {
		it("should return an empty object", () => {
			let result: any;

			try {
				result = cleanObj({ foo: null });
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual({});
		});
	});

	describe("With NOT object", () => {
		it("should throw an error", () => {
			let result: any;

			try {
				result = cleanObj("foo" as any);
			} catch (err: any) {
				result = err;
			}

			expect(result instanceof Error).toBeTruthy();
			expect(result.message).toBe("Value must be an object");
		});
	});
});
