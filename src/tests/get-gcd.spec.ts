import { getGCD } from "../lib/get-gcd";

describe("getGCD Util", () => {
	describe("With a bigger than b", () => {
		it("should return the GCD (256)", () => {
			let result: any;

			try {
				result = getGCD(1280, 1024);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(256);
		});

		it("should return the GCD (192)", () => {
			let result: any;

			try {
				result = getGCD(1152, 960);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(192);
		});

		it("should return the GCD (320)", () => {
			let result: any;

			try {
				result = getGCD(1280, 960);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(320);
		});

		it("should return the GCD (120)", () => {
			let result: any;

			try {
				result = getGCD(1920, 1080);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(120);
		});
	});

	describe("With b bigger than a", () => {
		it("should return the GCD (256)", () => {
			let result: any;

			try {
				result = getGCD(1024, 1280);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(256);
		});

		it("should return the GCD (192)", () => {
			let result: any;

			try {
				result = getGCD(960, 1152);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(192);
		});

		it("should return the GCD (320)", () => {
			let result: any;

			try {
				result = getGCD(960, 1280);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(320);
		});

		it("should return the GCD (120)", () => {
			let result: any;

			try {
				result = getGCD(1080, 1920);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(120);
		});
	});

	describe("With a equal to a", () => {
		it("should return the GCD (1024)", () => {
			let result: any;

			try {
				result = getGCD(1024, 1024);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(1024);
		});

		it("should return the GCD (960)", () => {
			let result: any;

			try {
				result = getGCD(960, 960);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe(960);
		});
	});
});
