import { hasEmojis } from "../lib/has-emojis";

/**
 *
 * True
 *
 */

describe("hasEmojis (return True)", () => {
	it("with emoji in the start", () => {
		expect(hasEmojis("😀 foo bar")).toBe(true);
	});

	it("with emoji in the middle", () => {
		expect(hasEmojis("foo 😀 bar")).toBe(true);
	});

	it("with emoji in the end", () => {
		expect(hasEmojis("foo bar 😀")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("hasEmojis (return False)", () => {
	it("without emojis", () => {
		expect(hasEmojis("foo bar")).toBe(false);
	});

	it("with simbols", () => {
		expect(hasEmojis("foo ✢ bar")).toBe(false);
	});
});
