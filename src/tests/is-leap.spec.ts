import { isLeap } from "../lib/is-leap";

/**
 *
 * True
 *
 */

describe("isLeap (return True)", () => {
	it("1904", () => {
		expect(isLeap("1904")).toBe(true);
	});

	it("1936", () => {
		expect(isLeap("1936")).toBe(true);
	});

	it("1968", () => {
		expect(isLeap("1968")).toBe(true);
	});

	it("2000", () => {
		expect(isLeap("2000")).toBe(true);
	});

	it("2020 (string)", () => {
		expect(isLeap("2020")).toBe(true);
	});

	it("2020 (number)", () => {
		expect(isLeap(2020)).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isLeap (return False)", () => {
	it("1902", () => {
		expect(isLeap("1902")).toBe(false);
	});

	it("1930", () => {
		expect(isLeap("1930")).toBe(false);
	});

	it("1969", () => {
		expect(isLeap("1969")).toBe(false);
	});

	it("2007", () => {
		expect(isLeap("2007")).toBe(false);
	});

	it("2013", () => {
		expect(isLeap("2013")).toBe(false);
	});

	it("2020.0", () => {
		expect(isLeap("2020.0")).toBe(false);
	});

	it("2020.1", () => {
		expect(isLeap("2020.1")).toBe(false);
	});

	it("[]", () => {
		expect(isLeap([] as any)).toBe(false);
	});
});
