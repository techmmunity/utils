import { isMaskedCNPJ } from "../lib/is-masked-cnpj";

/**
 *
 * True
 *
 */

describe("isMaskedCNPJ (return True)", () => {
	it("with valid cnpj (1)", () => {
		expect(isMaskedCNPJ("30.424.723/0001-89")).toBe(true);
	});

	it("with valid cnpj (2)", () => {
		expect(isMaskedCNPJ("17.024.335/0001-42")).toBe(true);
	});

	it("with valid cnpj (3)", () => {
		expect(isMaskedCNPJ("56.440.046/0001-86")).toBe(true);
	});

	it("with valid cnpj (4)", () => {
		expect(isMaskedCNPJ("63.551.672/0001-05")).toBe(true);
	});

	it("with valid cnpj (5)", () => {
		expect(isMaskedCNPJ("58.410.040/0001-91")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isMaskedCNPJ (return False)", () => {
	it("with unmasked cnpj (1)", () => {
		expect(isMaskedCNPJ("58410040000191")).toBe(false);
	});

	it("with invalid cnpj (1)", () => {
		expect(isMaskedCNPJ("00.000.000/0000-00")).toBe(false);
	});

	it("with invalid cnpj (2)", () => {
		expect(isMaskedCNPJ("18.424.560/0001-31")).toBe(false);
	});
});
