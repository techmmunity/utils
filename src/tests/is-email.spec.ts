import { isEmail } from "../lib/is-email";

/**
 *
 * True
 *
 */

describe("isEmail (return True)", () => {
	it("with .com", () => {
		expect(isEmail("email@test.com")).toBe(true);
	});

	it("with .com.br", () => {
		expect(isEmail("email@test.com.br")).toBe(true);
	});

	it("with numbers at the end", () => {
		expect(isEmail("email123@test.com")).toBe(true);
	});

	it("with numbers at the start", () => {
		expect(isEmail("123email@test.com")).toBe(true);
	});

	it("with dot in the middle", () => {
		expect(isEmail("email.test@test.com")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isEmail (return False)", () => {
	it("without @", () => {
		expect(isEmail("emailtest.com")).toBe(false);
	});

	it("without @ ands with number", () => {
		expect(isEmail("emailtest123.com")).toBe(false);
	});

	it("without dot", () => {
		expect(isEmail("email@test")).toBe(false);
	});

	it("without dot at the end and with dot at the middle", () => {
		expect(isEmail("email.test@test")).toBe(false);
	});
});
