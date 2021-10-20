import { isDivisibleByTen } from "../lib/is-divisible-by-ten";

/**
 *
 * True
 *
 */

describe("isDivisibleByTen (return True)", () => {
	it("10", () => {
		expect(isDivisibleByTen(10)).toBe(true);
	});

	it("20", () => {
		expect(isDivisibleByTen(20)).toBe(true);
	});

	it("30", () => {
		expect(isDivisibleByTen(30)).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isDivisibleByTen (return False)", () => {
	it("15", () => {
		expect(isDivisibleByTen(15)).toBe(false);
	});

	it("23", () => {
		expect(isDivisibleByTen(23)).toBe(false);
	});

	it("27", () => {
		expect(isDivisibleByTen(27)).toBe(false);
	});
});
