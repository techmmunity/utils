/* eslint-disable sonarjs/no-identical-functions */

import { isPackageInstalled } from "..";

describe("isPackageInstalled", () => {
	describe("With normal package", () => {
		it("should return true if package exists", () => {
			let result: any;

			try {
				result = isPackageInstalled("jest");
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(true);
		});

		it("should return false if package doesn't exists", () => {
			let result: any;

			try {
				result = isPackageInstalled("foo");
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});
	});

	describe("With NODE_PATH", () => {
		beforeAll(() => {
			process.env.NODE_PATH = "src";
		});

		afterAll(() => {
			process.env.NODE_PATH = undefined;
		});

		it("should return true if package exists", () => {
			let result: any;

			try {
				result = isPackageInstalled("lib");
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(true);
		});

		it("should return false if package doesn't exists", () => {
			let result: any;

			try {
				result = isPackageInstalled("foo");
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(false);
		});
	});
});
