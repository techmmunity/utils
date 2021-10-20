import { getEnumValues } from "../lib/get-enum-values";

describe("getEnumValues Util", () => {
	describe("With enum that key-value match", () => {
		it("should return the enum values", () => {
			let result: any;

			try {
				enum TestEnum {
					FOO = "FOO",
					BAR = "BAR",
				}

				result = getEnumValues<TestEnum>(TestEnum);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual(["FOO", "BAR"]);
		});
	});

	describe("With enum that key-value DON'T match", () => {
		it("should return the enum values", () => {
			let result: any;

			try {
				enum TestEnum {
					FOO = "FOO1",
					BAR = "BAR1",
				}

				result = getEnumValues<TestEnum>(TestEnum);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual(["FOO1", "BAR1"]);
		});
	});
});
