import { isUsername } from "../lib/is-username";

/**
 *
 * True
 *
 */

describe("isUsername (return True)", () => {
	it("with lower and upper case", () => {
		expect(isUsername("Techmmunity")).toBe(true);
	});

	it("all upper case", () => {
		expect(isUsername("TECHMMUNITY")).toBe(true);
	});

	it("only letters", () => {
		expect(isUsername("techmmunity")).toBe(true);
	});

	it("letters and numbers in the end", () => {
		expect(isUsername("techmmunity123")).toBe(true);
	});

	it("letters and numbers in the start", () => {
		expect(isUsername("123techmmunity")).toBe(true);
	});

	it("with -", () => {
		expect(isUsername("tech-mmunity")).toBe(true);
	});

	it("with _", () => {
		expect(isUsername("tech_mmunity")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isUsername (return False)", () => {
	it("bigger than allowed", () => {
		expect(isUsername("techmmunitytechmu")).toBe(false);
	});

	it("lower than allowed", () => {
		expect(isUsername("te")).toBe(false);
	});

	it("with special characters (1)", () => {
		expect(isUsername("techmmunity#")).toBe(false);
	});

	it("with special characters (2)", () => {
		expect(isUsername("techmmunity$")).toBe(false);
	});

	it("with special characters (3)", () => {
		expect(isUsername("techmmunity@")).toBe(false);
	});

	it("with special characters (4)", () => {
		expect(isUsername("techmmunity/")).toBe(false);
	});

	it("with special characters (5)", () => {
		expect(isUsername("techmmunity'")).toBe(false);
	});
});
