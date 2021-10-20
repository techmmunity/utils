import { isDateMDY } from "../lib/is-date-mdy";

/**
 *
 * True
 *
 */

describe("isDateMDY (return True)", () => {
	it("with valid date (1)", () => {
		expect(isDateMDY("01-01-2020")).toBe(true);
	});

	it("with valid date (2)", () => {
		expect(isDateMDY("12-31-2020")).toBe(true);
	});
});
