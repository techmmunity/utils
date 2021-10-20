import { isIpv4 } from "../lib/is-ipv4";

/**
 *
 * True
 *
 */

describe("isIpv4 (return True)", () => {
	it("valid IPV4 > 1-1-1-1", () => {
		expect(isIpv4("0.0.0.0")).toBe(true);
	});

	it("valid IPV4 > 2-3-1-3", () => {
		expect(isIpv4("91.204.5.133")).toBe(true);
	});

	it("valid IPV4 > 2-3-3-2", () => {
		expect(isIpv4("74.200.196.55")).toBe(true);
	});

	it("valid IPV4 > 2-3-3-3", () => {
		expect(isIpv4("77.227.249.182")).toBe(true);
	});

	it("valid IPV4 > 3-1-3-2", () => {
		expect(isIpv4("164.4.192.15")).toBe(true);
	});

	it("valid IPV4 > 3-2-2-3", () => {
		expect(isIpv4("118.50.48.150")).toBe(true);
	});

	it("valid IPV4 > 3-2-3-2", () => {
		expect(isIpv4("202.38.163.19")).toBe(true);
	});

	it("valid IPV4 > 3-2-3-3", () => {
		expect(isIpv4("177.68.210.206")).toBe(true);
	});

	it("valid IPV4 > 3-3-2-2", () => {
		expect(isIpv4("159.141.24.25")).toBe(true);
	});

	it("valid IPV4 > 3-3-3-1", () => {
		expect(isIpv4("191.220.151.10")).toBe(true);
	});

	it("valid IPV4 > 3-3-3-3", () => {
		expect(isIpv4("140.214.219.234")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isIpv4 (return False)", () => {
	it("with letters", () => {
		expect(isIpv4("foo.bar.foo.bar")).toBe(false);
	});

	it("with invalid ip", () => {
		expect(isIpv4("300.251.0.1")).toBe(false);
	});
});
