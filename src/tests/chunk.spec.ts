/* eslint-disable sonarjs/no-duplicate-string */

import { chunk } from "../lib/chunk";

describe("chunk Util", () => {
	const arr = ["foo", "bar", "abc", "xyz"];

	describe("With exact number of items", () => {
		it("should return the chunked object", () => {
			let result: any;

			try {
				result = chunk(arr, 4);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual([["foo", "bar", "abc", "xyz"]]);
		});
	});

	describe("With exact number of items to multiple chunks", () => {
		it("should return the chunked object", () => {
			let result: any;

			try {
				result = chunk(arr, 2);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual([
				["foo", "bar"],
				["abc", "xyz"],
			]);
		});
	});

	describe("With NOT exact number of items to multiple chunks", () => {
		it("should return the chunked object", () => {
			let result: any;

			try {
				result = chunk([...arr, "hgi"], 2);
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual([["foo", "bar"], ["abc", "xyz"], ["hgi"]]);
		});
	});

	describe("General errors", () => {
		it("should return error with not array", () => {
			let result: any;

			try {
				result = chunk("foo" as any, 2);
			} catch (err: any) {
				result = err;
			}

			expect(result instanceof Error).toBeTruthy();
			expect(result.message).toBe("Value must be an object");
		});
	});
});
