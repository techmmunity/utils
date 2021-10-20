import { isDarkHexColor } from "../lib/is-dark-hex-color";

/**
 *
 * True
 *
 */

describe("isDarkHexColor (return True)", () => {
	it("with valid hex colors", () => {
		expect(isDarkHexColor("#000")).toBe(true);
		expect(isDarkHexColor("#000000")).toBe(true);
		expect(isDarkHexColor("#8b0000")).toBe(true);
		expect(isDarkHexColor("#381022")).toBe(true);
		expect(isDarkHexColor("#24110a")).toBe(true);
		expect(isDarkHexColor("#06040e")).toBe(true);
		expect(isDarkHexColor("#4c1551")).toBe(true);
		expect(isDarkHexColor("#4a1515")).toBe(true);
		expect(isDarkHexColor("#21195f")).toBe(true);
		expect(isDarkHexColor("#361148")).toBe(true);
		expect(isDarkHexColor("#21391e")).toBe(true);
		expect(isDarkHexColor("#140d07")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isDarkHexColor (return False)", () => {
	it("with light colors", () => {
		expect(isDarkHexColor("#fff")).toBe(false);
		expect(isDarkHexColor("#ffffff")).toBe(false);
		expect(isDarkHexColor("#add8e6")).toBe(false);
		expect(isDarkHexColor("#90ee90")).toBe(false);
		expect(isDarkHexColor("#FF9999")).toBe(false);
		expect(isDarkHexColor("#F5554D")).toBe(false);
		expect(isDarkHexColor("#FF3D0D")).toBe(false);
		expect(isDarkHexColor("#FCAF94")).toBe(false);
		expect(isDarkHexColor("#FB861A")).toBe(false);
		expect(isDarkHexColor("#FCB514")).toBe(false);
		expect(isDarkHexColor("#D5D2C1")).toBe(false);
		expect(isDarkHexColor("#B8B85A")).toBe(false);
		expect(isDarkHexColor("#B1DD27")).toBe(false);
	});

	it("without #", () => {
		expect(isDarkHexColor("000")).toBe(false);
		expect(isDarkHexColor("000000")).toBe(false);
	});

	it("length > 6", () => {
		expect(isDarkHexColor("#8b00000")).toBe(false);
		expect(isDarkHexColor("#3810222")).toBe(false);
		expect(isDarkHexColor("#24110aa")).toBe(false);
		expect(isDarkHexColor("#54a1515")).toBe(false);
	});

	it("3 < length > 6", () => {
		expect(isDarkHexColor("#8b000")).toBe(false);
		expect(isDarkHexColor("#3815")).toBe(false);
		expect(isDarkHexColor("#3845")).toBe(false);
		expect(isDarkHexColor("#97699")).toBe(false);
	});

	it("length < 3", () => {
		expect(isDarkHexColor("#3f")).toBe(false);
		expect(isDarkHexColor("#21")).toBe(false);
		expect(isDarkHexColor("#2")).toBe(false);
		expect(isDarkHexColor("#3")).toBe(false);
	});
});
