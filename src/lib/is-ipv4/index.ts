import { getTypeof } from "../get-typeof";

const IS_IPV4 =
	/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
/**
 * Check if a string is an ipv4
 * - 192.168.1.1
 */
export const isIpv4 = (ip: string) =>
	getTypeof(ip) === "string" && IS_IPV4.test(ip);
