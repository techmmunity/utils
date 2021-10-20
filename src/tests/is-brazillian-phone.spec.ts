import { isBrazilianPhone } from "../lib/is-brazilian-phone";

/**
 *
 * True
 *
 */

describe("isBrazilianPhone (return True)", () => {
	it("valid number and DDD", () => {
		expect(isBrazilianPhone("19999999999")).toBe(true);
		expect(isBrazilianPhone("2199999999")).toBe(true);
		expect(isBrazilianPhone("31998154821")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isBrazilianPhone (return False)", () => {
	it("number with DDD 11 with only 8 numbers", () => {
		expect(isBrazilianPhone("1199999999")).toBe(false);
	});

	it("number with invalid DDD", () => {
		expect(isBrazilianPhone("3099999999")).toBe(false);
	});

	it("number bigger than allowed", () => {
		expect(isBrazilianPhone("119999999999")).toBe(false);
	});

	it("number lower than allowed", () => {
		expect(isBrazilianPhone("119999999")).toBe(false);
	});
});
