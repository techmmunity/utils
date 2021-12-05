/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */

import { getRootPath } from "../get-root-path";

/**
 * Verify if a package is installed
 *
 * Extremely useful to create CLIs and Libs
 */
export const isPackageInstalled = (packageName: string) => {
	const { existsSync } = require("fs");

	const pathsToTry = [
		getRootPath(`node_modules/${packageName}`),
		process.env.NODE_PATH &&
			getRootPath(`${process.env.NODE_PATH}/${packageName}`),
	].filter(Boolean);

	return pathsToTry.some(path => existsSync(path));
};
