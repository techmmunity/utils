/* eslint-disable multiline-comment-style */
/* eslint-disable capitalized-comments */

module.exports = {
	moduleFileExtensions: ["js", "json", "ts"],
	rootDir: "src",
	testRegex: ".*\\.spec\\.ts$",
	transform: {
		"^.+\\.(t|j)s$": "ts-jest",
	},
	collectCoverageFrom: [
		"**/*.ts",
		"!./index.ts",
		"!./lib/get-root-path/index.ts",
		"!./lib/is-package-installed/index.ts",
	],
	coverageDirectory: "../coverage",
	testEnvironment: "node",
	moduleDirectories: ["node_modules", "src"],
	resetMocks: true,
	coverageThreshold: {
		global: {
			statements: 99.15,
			branches: 97.5,
			functions: 100,
			lines: 99.7,
		},
	},
};
