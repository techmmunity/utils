/**
 *
 * True
 *
 */

import { isInt } from "../lib/is-int";

describe("isInt (return true)", () => {
	it("with 0", () => {
		expect(isInt(0)).toBe(true);
	});

	it("with 1", () => {
		expect(isInt(1)).toBe(true);
	});

	it("with -4", () => {
		expect(isInt(-4)).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isInt (return false)", () => {
	it("with invalid value type", () => {
		expect(isInt("1" as any)).toBe(false);
	});

	it("with float", () => {
		expect(isInt(1.1)).toBe(false);
	});
});
