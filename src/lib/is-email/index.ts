import { getTypeof } from "../get-typeof";

const IS_EMAIL =
	// eslint-disable-next-line no-control-regex
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Check if value is an email
 */
export const isEmail = (email: string) =>
	getTypeof(email) === "string" && IS_EMAIL.test(email);
