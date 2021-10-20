/**
 *
 * True
 *
 */

import { isBetween } from "../lib/is-between";

describe("isBetween (return true)", () => {
	it("with number between min and max (negative and positive)", () => {
		expect(isBetween(0, -1, 1)).toBe(true);
	});

	it("with number between min and max (only positive)", () => {
		expect(isBetween(2, 1, 3)).toBe(true);
	});

	it("with number between min and max (only negative)", () => {
		expect(isBetween(-2, -3, -1)).toBe(true);
	});

	it("with min value (negative and positive)", () => {
		expect(isBetween(-1, -1, 1)).toBe(true);
	});

	it("with min value (only positive)", () => {
		expect(isBetween(1, 1, 3)).toBe(true);
	});

	it("with min value (only negative)", () => {
		expect(isBetween(-1, -3, -1)).toBe(true);
	});

	it("with max value (negative and positive)", () => {
		expect(isBetween(1, -1, 1)).toBe(true);
	});

	it("with max value (only positive)", () => {
		expect(isBetween(3, 1, 3)).toBe(true);
	});

	it("with max value (only negative)", () => {
		expect(isBetween(-1, -3, -1)).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isBetween (return false)", () => {
	it("with invalid value type", () => {
		expect(isBetween("0" as any, -1, 1)).toBe(false);
	});

	it("with invalid min type", () => {
		expect(isBetween(0, "-1" as any, 1)).toBe(false);
	});

	it("with invalid max type", () => {
		expect(isBetween(0, -1, "1" as any)).toBe(false);
	});
});
