import { getTypeof } from "../get-typeof";

const HAS_HTML_TAGS = /<[^>]{1,}>/;
/**
 * Check if string has html tags
 */
export const hasHtmlTags = (value: string) =>
	getTypeof(value) === "string" && HAS_HTML_TAGS.test(value);
