import { hasHtmlTags } from "../lib/has-html-tags";

/**
 *
 * True
 *
 */

describe("hasHtmlTags (return True)", () => {
	it("with <a>", () => {
		expect(hasHtmlTags('<a href="goog.com">foo</a>')).toBe(true);
	});

	it("with <div>", () => {
		expect(hasHtmlTags("<div>foo</div>")).toBe(true);
	});

	it("with <i>", () => {
		expect(hasHtmlTags("<i>foo</i>")).toBe(true);
	});

	it("with <button>", () => {
		expect(hasHtmlTags("<button>foo</button>")).toBe(true);
	});

	it("with <link />", () => {
		expect(hasHtmlTags('<link rel="stylesheet" />')).toBe(true);
	});

	it("with tag inside tag", () => {
		expect(hasHtmlTags("<div> <button>Foo Bar</button>  </div>")).toBe(true);
	});

	it("with tag in the middle of string", () => {
		expect(hasHtmlTags("foo bar <b>Foo Bar</b> foo bar")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("hasHtmlTags (return False)", () => {
	it("without tags", () => {
		expect(hasHtmlTags("foo bar")).toBe(false);
	});

	it("with empty tag", () => {
		expect(hasHtmlTags("<>")).toBe(false);
	});
});
