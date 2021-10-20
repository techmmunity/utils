import { isDateYMD } from "../lib/is-date-ymd";

/**
 *
 * True
 *
 */

describe("isDateYMD (return True)", () => {
	it("with valid date (1)", () => {
		expect(isDateYMD("2020-01-01")).toBe(true);
	});

	it("with valid date (2)", () => {
		expect(isDateYMD("2020-12-31")).toBe(true);
	});
});
