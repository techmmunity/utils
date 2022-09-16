import { isCpf } from "../lib/is-cpf";

/**
 *
 * True
 *
 */

describe("isCpf (return True)", () => {
	it("with valid cpf (1)", () => {
		expect(isCpf("55357314047")).toBe(true);
	});

	it("with valid cpf (2)", () => {
		expect(isCpf("80158397002")).toBe(true);
	});

	it("with valid cpf (3)", () => {
		expect(isCpf("57609999075")).toBe(true);
	});

	it("with valid cpf (4)", () => {
		expect(isCpf("97497327070")).toBe(true);
	});

	it("with valid cpf (5)", () => {
		expect(isCpf("88541113094")).toBe(true);
	});

	it("with valid cpf (6)", () => {
		expect(isCpf("32876487306")).toBe(true);
	});

	it("with valid cpf (7)", () => {
		expect(isCpf("11886446458")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isCpf (return False)", () => {
	it("with empty cpf", () => {
		expect(isCpf("")).toBe(false);
	});

	it("with extra words", () => {
		expect(isCpf("55357314047 CPF")).toBe(false);
	});

	it("with masked cpf", () => {
		expect(isCpf("553.573.140-47")).toBe(false);
	});

	it("with invalid cpf (1)", () => {
		expect(isCpf("00000000000")).toBe(false);
	});

	it("with invalid cpf (2)", () => {
		expect(isCpf("88541113095")).toBe(false);
	});

	it("with invalid type", () => {
		expect(isCpf(123 as any)).toBe(false);
	});
});
