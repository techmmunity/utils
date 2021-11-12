import { isAlphanumeric } from "../lib/is-alphanumeric";

/**
 *
 * True
 *
 */

describe("isAlphanumeric (return True)", () => {
	it("valid value (1)", () => {
		expect(isAlphanumeric("123")).toBe(true);
	});

	it("valid value (2)", () => {
		expect(isAlphanumeric("abc")).toBe(true);
	});

	it("valid value (3)", () => {
		expect(isAlphanumeric("abc123")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isAlphanumeric (return False)", () => {
	it("with spaces", () => {
		expect(isAlphanumeric("12 abc")).toBe(false);
	});

	it("with special chars", () => {
		expect(isAlphanumeric("123@1")).toBe(false);
	});

	it("empty", () => {
		expect(isAlphanumeric("")).toBe(false);
	});
});
