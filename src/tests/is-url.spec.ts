import { isUrl } from "../lib/is-url";

/**
 *
 * True
 *
 */

describe("isUrl (return True)", () => {
	it("with https", () => {
		expect(isUrl("https://google.com")).toBe(true);
	});

	it("with http", () => {
		expect(isUrl("http://google.com")).toBe(true);
	});

	it("with www", () => {
		expect(isUrl("www.google.com")).toBe(true);
	});

	it("with .com.br", () => {
		expect(isUrl("http://google.com.br")).toBe(true);
	});

	it("with .io", () => {
		expect(isUrl("http://google.io")).toBe(true);
	});

	it("with .tech", () => {
		expect(isUrl("http://google.tech")).toBe(true);
	});

	it("with https and www", () => {
		expect(isUrl("https://www.google.com")).toBe(true);
	});

	it("with subdomain", () => {
		expect(isUrl("https://www.subdomain.google.com")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isUrl (return False)", () => {
	it("with https and without .com", () => {
		expect(isUrl("https://google")).toBe(false);
	});

	it("with http and without .com", () => {
		expect(isUrl("http://emailtest")).toBe(false);
	});

	it("without http or https", () => {
		expect(isUrl("emailtest.com")).toBe(false);
	});

	it("with port", () => {
		expect(isUrl("http://localhost:9090")).toBe(false);
	});
});
