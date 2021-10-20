import { isDateYMDS } from "../lib/is-date-ymds";

/**
 *
 * True
 *
 */

describe("isDateYMDS (return True)", () => {
	it("with valid date (1)", () => {
		expect(isDateYMDS("2020/01/01")).toBe(true);
	});

	it("with valid date (2)", () => {
		expect(isDateYMDS("2020/12/31")).toBe(true);
	});
});
