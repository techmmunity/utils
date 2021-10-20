import { isOdd } from "../lib/is-odd";

/**
 *
 * True
 *
 */

describe("isOdd (return True)", () => {
	it("valid odd number", () => {
		expect(isOdd(3)).toBe(true);
		expect(isOdd(9)).toBe(true);
		expect(isOdd(15)).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isOdd (return False)", () => {
	it("invalid odd number", () => {
		expect(isOdd(2)).toBe(false);
		expect(isOdd(4)).toBe(false);
		expect(isOdd(10)).toBe(false);
	});
});
