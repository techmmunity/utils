import { isIpv4WithMask } from "../lib/is-ipv4-with-mask";

/**
 *
 * True
 *
 */

describe("isIpv4WithMask (return True)", () => {
	it("valid IPV4 With mask (Class C > 3-3-3-0/24)", () => {
		expect(isIpv4WithMask("255.255.255.0/24")).toBe(true);
	});

	it("valid IPV4 With mask (Class B > 3-3-0-0/16)", () => {
		expect(isIpv4WithMask("255.255.0.0/16")).toBe(true);
	});

	it("valid IPV4 With mask (Class a > 3-0-0-0/8)", () => {
		expect(isIpv4WithMask("255.0.0.0/8")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isIpv4WithMask (return False)", () => {
	it("with letters", () => {
		expect(isIpv4WithMask("foo.bar.foo.bar")).toBe(false);
	});

	it("with invalid ip", () => {
		expect(isIpv4WithMask("300.251.0.1")).toBe(false);
	});
});
