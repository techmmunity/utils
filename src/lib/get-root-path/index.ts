/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */

export const LEADING_BAR = /^\//;
/**
 * Get the root path of the process
 *
 * Extremely useful to create CLIs and Libs
 */
export const getRootPath = (path: string) => {
	const { resolve } = require("path");

	return resolve(process.cwd(), path.replace(LEADING_BAR, ""));
};
