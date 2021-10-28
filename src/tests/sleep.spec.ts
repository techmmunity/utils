/**
 *
 * True
 *
 */

import { isBetween } from "../lib/is-between";
import { sleep } from "../lib/sleep";

describe("sleep", () => {
	it("with 1 second", async () => {
		const timeBefore = Date.now();

		await sleep(1);

		const timeAfter = Date.now();

		const offset = timeAfter - timeBefore;

		// Cannot test the exact time, so test a range
		expect(isBetween(offset, 1000, 1050)).toBeTruthy();
	});

	it("with 10 seconds", async () => {
		const timeBefore = Date.now();

		await sleep(10);

		const timeAfter = Date.now();

		const offset = timeAfter - timeBefore;

		// Cannot test the exact time, so test a range
		expect(isBetween(offset, 10000, 10050)).toBeTruthy();
	});
});
