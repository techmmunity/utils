import { isDateDMYS } from "../lib/is-date-dmys";

/**
 *
 * True
 *
 */

describe("isDateDMYS (return True)", () => {
	it("with valid date (1)", () => {
		expect(isDateDMYS("01/01/2020")).toBe(true);
	});

	it("with valid date (2)", () => {
		expect(isDateDMYS("31/12/2020")).toBe(true);
	});
});
