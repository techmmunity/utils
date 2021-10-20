import { isDateMDYS } from "../lib/is-date-mdys";

/**
 *
 * True
 *
 */

describe("isDateMDYS (return True)", () => {
	it("with valid date (1)", () => {
		expect(isDateMDYS("01/01/2020")).toBe(true);
	});

	it("with valid date (2)", () => {
		expect(isDateMDYS("12/31/2020")).toBe(true);
	});
});
