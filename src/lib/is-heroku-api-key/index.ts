import { getTypeof } from "../get-typeof";

const IS_HEROKU_API_KEY =
	/^[A-Za-z0-9]{8}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12}$/;
/**
 * Check if value is a heroku API key
 */
export const isHerokuApiKey = (apiKey: string) =>
	getTypeof(apiKey) === "string" && IS_HEROKU_API_KEY.test(apiKey);
