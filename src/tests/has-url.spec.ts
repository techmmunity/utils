import { hasUrl } from "../lib/has-url";

/**
 *
 * True
 *
 */

describe("hasUrl (return True)", () => {
	it("with link at the start", () => {
		expect(hasUrl("https://google.com foo bar foo bar")).toBe(true);
	});

	it("with link at the end", () => {
		expect(hasUrl("foo bar foo bar www.google.com")).toBe(true);
	});

	it("with link at the middle", () => {
		expect(hasUrl("foo bar http://google.com.br foo bar")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("hasUrl (return False)", () => {
	it("with invalid link at the start", () => {
		expect(hasUrl("https://google foo bar foo bar")).toBe(false);
	});

	it("with invalid link at the end", () => {
		expect(hasUrl("foo bar foo bar emailtest.com")).toBe(false);
	});

	it("with invalid link at the middle", () => {
		expect(hasUrl("foo bar http://localhost:9090 foo bar")).toBe(false);
	});
});
