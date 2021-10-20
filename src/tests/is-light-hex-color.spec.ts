import { isLightHexColor } from "../lib/is-light-hex-color";

/**
 *
 * True
 *
 */

describe("isLightHexColor (return True)", () => {
	it("with valid hex colors", () => {
		expect(isLightHexColor("#fff")).toBe(true);
		expect(isLightHexColor("#ffffff")).toBe(true);
		expect(isLightHexColor("#add8e6")).toBe(true);
		expect(isLightHexColor("#90ee90")).toBe(true);
		expect(isLightHexColor("#FF9999")).toBe(true);
		expect(isLightHexColor("#F5554D")).toBe(true);
		expect(isLightHexColor("#FF3D0D")).toBe(true);
		expect(isLightHexColor("#FCAF94")).toBe(true);
		expect(isLightHexColor("#FB861A")).toBe(true);
		expect(isLightHexColor("#FCB514")).toBe(true);
		expect(isLightHexColor("#D5D2C1")).toBe(true);
		expect(isLightHexColor("#B8B85A")).toBe(true);
		expect(isLightHexColor("#B1DD27")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isLightHexColor (return False)", () => {
	it("with dark colors", () => {
		expect(isLightHexColor("#000")).toBe(false);
		expect(isLightHexColor("#000000")).toBe(false);
		expect(isLightHexColor("#8b0000")).toBe(false);
		expect(isLightHexColor("#381022")).toBe(false);
		expect(isLightHexColor("#24110a")).toBe(false);
		expect(isLightHexColor("#06040e")).toBe(false);
		expect(isLightHexColor("#4c1551")).toBe(false);
		expect(isLightHexColor("#4a1515")).toBe(false);
		expect(isLightHexColor("#21195f")).toBe(false);
		expect(isLightHexColor("#361148")).toBe(false);
		expect(isLightHexColor("#21391e")).toBe(false);
		expect(isLightHexColor("#140d07")).toBe(false);
	});

	it("without #", () => {
		expect(isLightHexColor("fff")).toBe(false);
		expect(isLightHexColor("ffffff")).toBe(false);
	});

	it("length > 6", () => {
		expect(isLightHexColor("#90ee900")).toBe(false);
		expect(isLightHexColor("#FF99999")).toBe(false);
		expect(isLightHexColor("#F5554DD")).toBe(false);
		expect(isLightHexColor("#FF3D0DD")).toBe(false);
	});

	it("3 < length > 6", () => {
		expect(isLightHexColor("#90ee9")).toBe(false);
		expect(isLightHexColor("#FF99")).toBe(false);
		expect(isLightHexColor("#F555")).toBe(false);
		expect(isLightHexColor("#FF3D0")).toBe(false);
	});

	it("length < 3", () => {
		expect(isLightHexColor("#90")).toBe(false);
		expect(isLightHexColor("#FF")).toBe(false);
		expect(isLightHexColor("#F")).toBe(false);
		expect(isLightHexColor("#5")).toBe(false);
	});
});
