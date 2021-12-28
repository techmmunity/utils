/* eslint-disable sonarjs/no-duplicate-string */

import { getAspectRatio } from "../lib/get-aspect-ratio";

describe("getAspectRatio Util", () => {
	describe("With width bigger than height", () => {
		it("should return the aspect ratio (5:4)", () => {
			let result: any;

			try {
				result = getAspectRatio(1280, 1024);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("5:4");
		});

		it("should return the aspect ratio (6:5)", () => {
			let result: any;

			try {
				result = getAspectRatio(1152, 960);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("6:5");
		});

		it("should return the aspect ratio (4:3)", () => {
			let result: any;

			try {
				result = getAspectRatio(1280, 960);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("4:3");
		});

		it("should return the aspect ratio (16:9)", () => {
			let result: any;

			try {
				result = getAspectRatio(1920, 1080);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("16:9");
		});
	});

	describe("With height bigger than width", () => {
		it("should return the aspect ratio (4:5)", () => {
			let result: any;

			try {
				result = getAspectRatio(1024, 1280);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("4:5");
		});

		it("should return the aspect ratio (5:6)", () => {
			let result: any;

			try {
				result = getAspectRatio(960, 1152);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("5:6");
		});

		it("should return the aspect ratio (3:4)", () => {
			let result: any;

			try {
				result = getAspectRatio(960, 1280);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("3:4");
		});

		it("should return the aspect ratio (9:16)", () => {
			let result: any;

			try {
				result = getAspectRatio(1080, 1920);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("9:16");
		});
	});

	describe("With width equal to height", () => {
		it("should return the aspect ratio (1:1 - 1024)", () => {
			let result: any;

			try {
				result = getAspectRatio(1024, 1024);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("1:1");
		});

		it("should return the aspect ratio (1:1 - 960)", () => {
			let result: any;

			try {
				result = getAspectRatio(960, 960);
			} catch (err: any) {
				result = err;
			}

			expect(result).toBe("1:1");
		});
	});
});
