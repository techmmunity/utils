/**
 *
 * True
 *
 */

import { isTimezone } from "../lib/is-timezone";

describe("isTimezone (return true)", () => {
	it("with +01:00", () => {
		expect(isTimezone("+01:00")).toBe(true);
	});

	it("with UTC", () => {
		expect(isTimezone("UTC")).toBe(true);
	});

	it("with +13:00", () => {
		expect(isTimezone("+13:00")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isTimezone (return false)", () => {
	it("with +15:00", () => {
		expect(isTimezone("+15:00")).toBe(false);
	});

	it("with 01:00", () => {
		expect(isTimezone("01:00")).toBe(false);
	});

	it("with +01:01", () => {
		expect(isTimezone("+01:01")).toBe(false);
	});

	it("with Z", () => {
		expect(isTimezone("Z")).toBe(false);
	});

	it("with invalid type", () => {
		expect(isTimezone(1 as any)).toBe(false);
	});
});
