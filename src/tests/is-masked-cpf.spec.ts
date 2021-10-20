import { isMaskedCpf } from "../lib/is-masked-cpf";

/**
 *
 * True
 *
 */

describe("isMaskedCpf (return True)", () => {
	it("with valid cpf (1)", () => {
		expect(isMaskedCpf("553.573.140-47")).toBe(true);
	});

	it("with valid cpf (2)", () => {
		expect(isMaskedCpf("801.583.970-02")).toBe(true);
	});

	it("with valid cpf (3)", () => {
		expect(isMaskedCpf("576.099.990-75")).toBe(true);
	});

	it("with valid cpf (4)", () => {
		expect(isMaskedCpf("974.973.270-70")).toBe(true);
	});

	it("with valid cpf (5)", () => {
		expect(isMaskedCpf("885.411.130-94")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isMaskedCpf (return False)", () => {
	it("with unmasked cpf (1)", () => {
		expect(isMaskedCpf("55357314047")).toBe(false);
	});

	it("with invalid cpf (1)", () => {
		expect(isMaskedCpf("000.000.000-00")).toBe(false);
	});

	it("with invalid cpf (2)", () => {
		expect(isMaskedCpf("885.411.130-95")).toBe(false);
	});
});
