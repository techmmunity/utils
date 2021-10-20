/**
 *
 * True
 *
 */

import { isIsoDate } from "../lib/is-iso-date";

describe("isIsoDate (return true)", () => {
	it("with valid iso date", () => {
		expect(isIsoDate("1997-07-16T19:20:30.45+01:00")).toBe(true);
	});

	it("with UTC timezone (Z)", () => {
		expect(isIsoDate("1997-07-16T19:20:30.45Z")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isIsoDate (return false)", () => {
	it("without year", () => {
		expect(isIsoDate("-07-16T19:20:30.45+01:00")).toBe(false);
	});

	it("without month", () => {
		expect(isIsoDate("1997--16T19:20:30.45+01:00")).toBe(false);
	});

	it("without day", () => {
		expect(isIsoDate("1997-07-T19:20:30.45+01:00")).toBe(false);
	});

	it("without T", () => {
		expect(isIsoDate("1997-07-1619:20:30.45+01:00")).toBe(false);
	});

	it("without hour", () => {
		expect(isIsoDate("1997-07-16T:20:30.45+01:00")).toBe(false);
	});

	it("without minute", () => {
		expect(isIsoDate("1997-07-16T19::30.45+01:00")).toBe(false);
	});

	it("without seconds", () => {
		expect(isIsoDate("1997-07-16T19:20:.45+01:00")).toBe(false);
	});

	it("without seconds fraction", () => {
		expect(isIsoDate("1997-07-16T19:20:30.+01:00")).toBe(false);
	});

	it("without timezone signal", () => {
		expect(isIsoDate("1997-07-16T19:20:30.4501:00")).toBe(false);
	});

	it("without timezone hour", () => {
		expect(isIsoDate("1997-07-16T19:20:30.45+:00")).toBe(false);
	});

	it("without timezone minute", () => {
		expect(isIsoDate("1997-07-16T19:20:30.45+01:")).toBe(false);
	});

	it("with invalid date", () => {
		expect(isIsoDate("1997-02-31T19:20:30.45+01:00")).toBe(false);
	});

	it("with invalid time (hour)", () => {
		expect(isIsoDate("1997-07-16T24:20:30.45+01:00")).toBe(false);
	});

	it("with invalid timezone (UTC)", () => {
		expect(isIsoDate("1997-07-16T19:20:30.45UTC")).toBe(false);
	});
});
