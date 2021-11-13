import { isClassInstance } from "../lib/is-class-instance";

/**
 *
 * True
 *
 */

describe("isClassInstance (return True)", () => {
	class Foo {
		public bar = "bar";
	}

	const foo = new Foo();

	it("with valid instance", () => {
		expect(isClassInstance(foo)).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isClassInstance (return False)", () => {
	it("with string", () => {
		expect(isClassInstance("foo")).toBe(false);
	});

	it("with array", () => {
		expect(isClassInstance([])).toBe(false);
	});

	it("with object", () => {
		expect(isClassInstance({})).toBe(false);
	});

	it("with undefined", () => {
		expect(isClassInstance(undefined)).toBe(false);
	});

	it("with Symbol", () => {
		expect(isClassInstance(Symbol("foo"))).toBe(false);
	});

	it("with Map", () => {
		expect(isClassInstance(new Map())).toBe(false);
	});
});
