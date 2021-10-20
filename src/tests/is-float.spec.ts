/**
 *
 * True
 *
 */

import { isFloat } from "../lib/is-float";

describe("isFloat (return true)", () => {
	it("with 0.5", () => {
		expect(isFloat(0.05)).toBe(true);
	});

	it("with 1.00001", () => {
		expect(isFloat(1.00001)).toBe(true);
	});

	it("with 3.5", () => {
		expect(isFloat(3.5)).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isFloat (return false)", () => {
	it("with 0.0", () => {
		expect(isFloat(0.0)).toBe(false);
	});

	it("with 1.0", () => {
		expect(isFloat(1.0)).toBe(false);
	});

	it("with invalid value type", () => {
		expect(isFloat("1.1" as any)).toBe(false);
	});

	it("with integer", () => {
		expect(isFloat(1)).toBe(false);
	});
});
