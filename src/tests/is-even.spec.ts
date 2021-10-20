import { isEven } from "../lib/is-even";

/**
 *
 * True
 *
 */

describe("isEven (return True)", () => {
	it("valid even number", () => {
		expect(isEven(2)).toBe(true);
		expect(isEven(4)).toBe(true);
		expect(isEven(10)).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isEven (return False)", () => {
	it("invalid even number", () => {
		expect(isEven(3)).toBe(false);
		expect(isEven(9)).toBe(false);
		expect(isEven(15)).toBe(false);
	});
});
