import { isNumeric } from "../lib/is-numeric";

/**
 *
 * True
 *
 */

describe("isNumeric (return True)", () => {
	it("valid value (1)", () => {
		expect(isNumeric("123")).toBe(true);
	});

	it("valid value (2)", () => {
		expect(isNumeric("456")).toBe(true);
	});

	it("valid value (3)", () => {
		expect(isNumeric("90816")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isNumeric (return False)", () => {
	it("with letters", () => {
		expect(isNumeric("12abc")).toBe(false);
	});

	it("with special chars", () => {
		expect(isNumeric("123@1")).toBe(false);
	});

	it("empty", () => {
		expect(isNumeric("")).toBe(false);
	});
});
