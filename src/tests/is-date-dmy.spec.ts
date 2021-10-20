import { isDateDMY } from "../lib/is-date-dmy";

/**
 *
 * True
 *
 */

describe("isDateDMY (return True)", () => {
	it("with valid date (1)", () => {
		expect(isDateDMY("01-01-2020")).toBe(true);
	});

	it("with valid date (2)", () => {
		expect(isDateDMY("31-12-2020")).toBe(true);
	});
});
