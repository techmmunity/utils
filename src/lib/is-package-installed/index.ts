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

	return existsSync(getRootPath(`node_modules/${packageName}`));
};
