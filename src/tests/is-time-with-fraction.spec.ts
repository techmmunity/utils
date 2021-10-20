/**
 *
 * True
 *
 */

import { isTimeWithFraction } from "../lib/is-time-with-fraction";

describe("isTimeWithFraction (return true)", () => {
	it("with 19:20:30.45", () => {
		expect(isTimeWithFraction("19:20:30.45")).toBe(true);
	});

	it("with 19:20:30.00", () => {
		expect(isTimeWithFraction("19:20:30.00")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isTimeWithFraction (return false)", () => {
	it("without hour", () => {
		expect(isTimeWithFraction(":20:30.45")).toBe(false);
	});

	it("without minute", () => {
		expect(isTimeWithFraction("19::30.45")).toBe(false);
	});

	it("without seconds", () => {
		expect(isTimeWithFraction("19:20:.45")).toBe(false);
	});

	it("without seconds fraction", () => {
		expect(isTimeWithFraction("19:20:30.")).toBe(false);
	});

	it("without hour :", () => {
		expect(isTimeWithFraction("1920:30.45")).toBe(false);
	});

	it("without minute :", () => {
		expect(isTimeWithFraction("19:2030.45")).toBe(false);
	});

	it("without seconds fraction .", () => {
		expect(isTimeWithFraction("19:20:3045")).toBe(false);
	});
});
