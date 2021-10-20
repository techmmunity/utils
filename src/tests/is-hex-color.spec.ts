import { isHexColor } from "../lib/is-hex-color";

/**
 *
 * True
 *
 */

describe("isHexColor (return True)", () => {
	it("with valid hex colors", () => {
		expect(isHexColor("#fff")).toBe(true);
		expect(isHexColor("#000")).toBe(true);
		expect(isHexColor("#ffffff")).toBe(true);
		expect(isHexColor("#000000")).toBe(true);
		expect(isHexColor("#fadf6f")).toBe(true);
		expect(isHexColor("#b50607")).toBe(true);
		expect(isHexColor("#f1f7a4")).toBe(true);
		expect(isHexColor("#c9c908")).toBe(true);
		expect(isHexColor("#e7f9e9")).toBe(true);
		expect(isHexColor("#b50607")).toBe(true);
		expect(isHexColor("#e1a18c")).toBe(true);
		expect(isHexColor("#fbeabc")).toBe(true);
		expect(isHexColor("#54ba99")).toBe(true);
		expect(isHexColor("#fde074")).toBe(true);
		expect(isHexColor("#a577e1")).toBe(true);
		expect(isHexColor("#7b0d69")).toBe(true);
		expect(isHexColor("#eb74cb")).toBe(true);
		expect(isHexColor("#555acd")).toBe(true);
		expect(isHexColor("#9a7ddd")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isHexColor (return False)", () => {
	it("without #", () => {
		expect(isHexColor("fff")).toBe(false);
		expect(isHexColor("ffffff")).toBe(false);
		expect(isHexColor("000")).toBe(false);
		expect(isHexColor("000000")).toBe(false);
	});

	it("length > 6", () => {
		expect(isHexColor("#7b0d69f")).toBe(false);
		expect(isHexColor("#eb74cb0")).toBe(false);
		expect(isHexColor("#555acdc")).toBe(false);
		expect(isHexColor("#9a7ddd9")).toBe(false);
	});

	it("3 < length > 6", () => {
		expect(isHexColor("#7b0d6")).toBe(false);
		expect(isHexColor("#eb74")).toBe(false);
		expect(isHexColor("#555ac")).toBe(false);
		expect(isHexColor("#9a7d")).toBe(false);
	});

	it("length < 3", () => {
		expect(isHexColor("#7b")).toBe(false);
		expect(isHexColor("#eb")).toBe(false);
		expect(isHexColor("#5")).toBe(false);
		expect(isHexColor("#9")).toBe(false);
	});
});
