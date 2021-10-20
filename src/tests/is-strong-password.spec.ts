import { isStrongPassword } from "../lib/is-strong-password";

/**
 *
 * True
 *
 */

describe("isStrongPassword (return True)", () => {
	it("with valid passwords", () => {
		expect(isStrongPassword("#fooBar0")).toBe(true);
		expect(isStrongPassword("f00B@r")).toBe(true);
		expect(isStrongPassword("b@rFo1")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isStrongPassword (return False)", () => {
	it("without Uppercase", () => {
		expect(isStrongPassword("foo#123")).toBe(false);
		expect(isStrongPassword("fo$#125")).toBe(false);
		expect(isStrongPassword("fo125%")).toBe(false);
	});

	it("without Lowercase", () => {
		expect(isStrongPassword("FOO#123")).toBe(false);
		expect(isStrongPassword("FO$#125")).toBe(false);
		expect(isStrongPassword("FO125%")).toBe(false);
	});

	it("without Numbers", () => {
		expect(isStrongPassword("Foo#bar")).toBe(false);
		expect(isStrongPassword("Fo$#Bar")).toBe(false);
		expect(isStrongPassword("FooBar%")).toBe(false);
	});

	it("without Special Characters", () => {
		expect(isStrongPassword("Foobar6foo")).toBe(false);
		expect(isStrongPassword("Foo3Bar")).toBe(false);
		expect(isStrongPassword("Foo123Bar")).toBe(false);
	});

	it("length < 6", () => {
		expect(isStrongPassword("F#Ba1")).toBe(false);
		expect(isStrongPassword("@Br3")).toBe(false);
		expect(isStrongPassword("F02a")).toBe(false);
	});
});
