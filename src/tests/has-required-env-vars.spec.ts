import { hasRequiredEnvVars } from "lib/has-required-env-vars";

describe("hasRequiredEnvVars Util", () => {
	describe("With all env vars", () => {
		it("should return true", () => {
			let result: any;

			try {
				process.env.NODE_ENV = "dev";
				process.env.FOO = "bar";
				process.env.BAR = "foo";

				result = hasRequiredEnvVars(["NODE_ENV", "FOO", "BAR"]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(true);
		});
	});

	describe("With missing env vars", () => {
		it("should return true", () => {
			let result: any;

			try {
				process.env.NODE_ENV = "dev";

				result = hasRequiredEnvVars(["NODE_ENV", "FOO"]);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(true);
		});
	});
});
