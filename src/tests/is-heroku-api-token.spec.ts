import { isHerokuApiKey } from "../lib/is-heroku-api-key";

/**
 *
 * True
 *
 */

describe("isHerokuApiKey (return True)", () => {
	it("with heroku generated API key (1)", () => {
		expect(isHerokuApiKey("625628d3-8a45-466e-a55e-ead5c6886887")).toBe(true);
	});

	it("with heroku generated API key (2)", () => {
		expect(isHerokuApiKey("b3222d6a-4732-4292-9d28-b72f87cbf563")).toBe(true);
	});

	it("with heroku generated API key (3)", () => {
		expect(isHerokuApiKey("740a93e4-c7ec-4b11-a443-19af31bc313f")).toBe(true);
	});

	it("with heroku generated API key (4)", () => {
		expect(isHerokuApiKey("84425c67-d173-40cb-9424-ce469d910ffa")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isHerokuApiKey (return False)", () => {
	it("with special character at the first part", () => {
		expect(isHerokuApiKey("84425c6&-d173-40cb-9424-ce469d910ffa")).toBe(false);
	});

	it("with special character at the second part", () => {
		expect(isHerokuApiKey("84425c67-d17)-40cb-9424-ce469d910ffa")).toBe(false);
	});

	it("with special character at the third part", () => {
		expect(isHerokuApiKey("84425c67-d173-4#cb-9424-ce469d910ffa")).toBe(false);
	});

	it("with special character at the forth part", () => {
		expect(isHerokuApiKey("84425c67-d173-40cb-942$-ce469d910ffa")).toBe(false);
	});

	it("with special character at the last part", () => {
		expect(isHerokuApiKey("84425c67-d173-40cb-9424-ce469d910ff@")).toBe(false);
	});

	it("with wrong length at first part (less)", () => {
		expect(isHerokuApiKey("84425c6-d173-40cb-9424-ce469d910ffa")).toBe(false);
	});

	it("with wrong length at first part (more)", () => {
		expect(isHerokuApiKey("84425c677-d173-40cb-9424-ce469d910ffa")).toBe(false);
	});

	it("with wrong length at second part (less)", () => {
		expect(isHerokuApiKey("84425c67-d17-40cb-9424-ce469d910ffa")).toBe(false);
	});

	it("with wrong length at second part (more)", () => {
		expect(isHerokuApiKey("84425c67-d1733-40cb-9424-ce469d910ffa")).toBe(false);
	});

	it("with wrong length at third part (less)", () => {
		expect(isHerokuApiKey("84425c67-d173-40c-9424-ce469d910ffa")).toBe(false);
	});

	it("with wrong length at third part (more)", () => {
		expect(isHerokuApiKey("84425c67-d173-40cbb-9424-ce469d910ffa")).toBe(false);
	});

	it("with wrong length at fourth part (less)", () => {
		expect(isHerokuApiKey("84425c67-d173-40cb-942-ce469d910ffa")).toBe(false);
	});

	it("with wrong length at fourth part (more)", () => {
		expect(isHerokuApiKey("84425c67-d173-40cb-94244-ce469d910ffa")).toBe(false);
	});

	it("with wrong length at last part (less)", () => {
		expect(isHerokuApiKey("84425c67-d173-40cb-9424-ce469d910ff")).toBe(false);
	});

	it("with wrong length at last part (more)", () => {
		expect(isHerokuApiKey("84425c67-d173-40cb-9424-ce469d910ffaa")).toBe(false);
	});
});
