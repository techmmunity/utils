import { resolve } from "path";

export const LEADING_BAR = /^\//;
/**
 * Get the root path of the process
 *
 * Extremely useful to create CLIs
 */
export const getRootPath = (path: string) =>
	resolve(process.cwd(), path.replace(LEADING_BAR, ""));
