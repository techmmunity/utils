import { isCnpj } from "../lib/is-cnpj";

/**
 *
 * True
 *
 */

describe("isCnpj (return True)", () => {
	it("with valid cnpj (1)", () => {
		expect(isCnpj("25024527000187")).toBe(true);
	});

	it("with valid cnpj (2)", () => {
		expect(isCnpj("46884275000136")).toBe(true);
	});

	it("with valid cnpj (3)", () => {
		expect(isCnpj("60722144000183")).toBe(true);
	});

	it("with valid cnpj (4)", () => {
		expect(isCnpj("82304005000172")).toBe(true);
	});

	it("with valid cnpj (5)", () => {
		expect(isCnpj("67141300000161")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isCnpj (return False)", () => {
	it("with empty cnpj", () => {
		expect(isCnpj("")).toBe(false);
	});

	it("with masked cnpj", () => {
		expect(isCnpj("67.141.300/0001-61")).toBe(false);
	});

	it("with invalid cnpj (1)", () => {
		expect(isCnpj("00000000000000")).toBe(false);
	});

	it("with invalid cnpj (2)", () => {
		expect(isCnpj("38048166000151")).toBe(false);
	});

	it("with invalid type", () => {
		expect(isCnpj(32457606000147 as any)).toBe(false);
	});
});
