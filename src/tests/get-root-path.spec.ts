/* eslint-disable sonarjs/no-duplicate-string */

import { LEADING_BAR } from "../lib/get-root-path";

describe("getRootPath", () => {
	it.todo(
		"it uses mainly node features and a regex, so this cannot be truly tested",
	);

	it("should replace correctly without /", () => {
		expect("asdasd/asdasd/asd".replace(LEADING_BAR, "")).toBe(
			"asdasd/asdasd/asd",
		);
	});

	it("should replace correctly with /", () => {
		expect("/asdasd/asdasd/asd".replace(LEADING_BAR, "")).toBe(
			"asdasd/asdasd/asd",
		);
	});
});
