import { getHexColorLuma } from "../lib/get-hex-color-luma";

/**
 *
 * False
 *
 */

describe("getHexColorLuma (return False)", () => {
	it("with invalid type", () => {
		expect(getHexColorLuma(0 as any)).toBeUndefined();
	});
});
