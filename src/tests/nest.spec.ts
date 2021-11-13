import { nest } from "../lib/nest";

/**
 *
 *
 *
 * The coverage will accuse that some lines of the
 * function aren't being tested, but it's a bug.
 *
 * If you look at the tests bellow and to the function, you
 * will see that every single case is being tested
 *
 *
 *
 */
describe("nest Util", () => {
	describe("With object with no undefined values", () => {
		class Foo {
			public bar = "bar";
		}

		const foo = new Foo();

		it("should return the same object (with simple object)", () => {
			let result: any;

			try {
				result = nest({
					foo: 1,
					xyz: 2,
					def: 3,
				});
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual({
				foo: 1,
				xyz: 2,
				def: 3,
			});
		});

		it("should return the same object (with nested object)", () => {
			let result: any;

			try {
				result = nest({
					"foo": 1,
					"bar.xyz": 2,
					"bar.abc.def": 3,
					"bar.abc.ufg.[0]": 1,
				});
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual({
				foo: 1,
				bar: {
					xyz: 2,
					abc: {
						def: 3,
						ufg: [1],
					},
				},
			});
		});

		it("should return the same object (with simple array)", () => {
			let result: any;

			try {
				result = nest({
					"ghi.[0]": 1,
					"ghi.[1]": 2,
					"ghi.[2]": 3,
				});
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual({
				ghi: [1, 2, 3],
			});
		});

		it("should return the same object (with array of objects)", () => {
			let result: any;

			try {
				result = nest({
					"ghi.[0].jkl": 4,
					"ghi.[1].foo": 5,
				});
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual({
				ghi: [
					{
						jkl: 4,
					},
					{
						foo: 5,
					},
				],
			});
		});

		it("should return the same object (with array of array)", () => {
			let result: any;

			try {
				result = nest({
					"ghi.[0].[0]": 1,
					"ghi.[1].[0]": 2,
					"ghi.[2].[0]": 3,
				});
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual({
				ghi: [[1], [2], [3]],
			});
		});

		it("should return the same object (with class)", () => {
			let result: any;

			try {
				result = nest({
					"bar.xyz": Foo,
				});
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual({
				bar: {
					xyz: Foo,
				},
			});
		});

		it("should return the same object (with class instance)", () => {
			let result: any;

			try {
				result = nest({
					"bar.xyz": foo,
				});
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual({
				bar: {
					xyz: foo,
				},
			});
		});
	});

	describe("With array with no undefined values", () => {
		it("should return the same object (with simple array)", () => {
			let result: any;

			try {
				result = nest({
					"[0]": "foo",
					"[1]": "xyz",
					"[2]": "def",
				});
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual(["foo", "xyz", "def"]);
		});

		it("should return the same object (with nested array)", () => {
			let result: any;

			try {
				result = nest({
					"[0].[0]": "foo",
					"[1].[0]": "xyz",
					"[2].[0]": "def",
				});
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual([["foo"], ["xyz"], ["def"]]);
		});
	});

	describe("With object with null or undefined values", () => {
		it("should return an empty object", () => {
			let result: any;

			try {
				result = nest({
					"foo": undefined,
					"bar.xyz": null,
					"ghi.[0]": undefined,
				});
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual({});
		});
	});

	describe("With NOT object", () => {
		it("should return an empty object", () => {
			let result: any;

			try {
				result = nest();
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual({});
		});

		it("should throw an error", () => {
			let result: any;

			try {
				result = nest("foo" as any);
			} catch (err: any) {
				result = err;
			}

			expect(result instanceof Error).toBeTruthy();
			expect(result.message).toBe("Value must be an object");
		});
	});
});
