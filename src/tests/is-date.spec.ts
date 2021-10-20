import { isDate } from "../lib/is-date";

/**
 *
 * True
 *
 */

describe("isDate (return false)", () => {
	it("with invalid format", () => {
		expect(isDate("01-01-2020", "DDD" as any, "-")).toBe(false);
	});

	it("missing date part", () => {
		expect(isDate("01-01", "DMY", "-")).toBe(false);
	});

	it("invalid day length", () => {
		expect(isDate("1-01-2020", "DMY", "-")).toBe(false);
	});

	it("invalid month length", () => {
		expect(isDate("01-1-2020", "DMY", "-")).toBe(false);
	});

	it("invalid year length", () => {
		expect(isDate("01-01-20205", "DMY", "-")).toBe(false);
	});

	it("float day", () => {
		expect(isDate(".1-01-2020", "DMY", "-")).toBe(false);
	});

	it("float month", () => {
		expect(isDate("01-.1-2020", "DMY", "-")).toBe(false);
	});

	it("float year", () => {
		expect(isDate("01-01-20.1", "DMY", "-")).toBe(false);
	});

	it("invalid day", () => {
		expect(isDate("32-01-2020", "DMY", "-")).toBe(false);
	});

	it("invalid month", () => {
		expect(isDate("01-13-2020", "DMY", "-")).toBe(false);
	});

	it("invalid date", () => {
		expect(isDate("31-02-2020", "DMY", "-")).toBe(false);
	});
});
