/**
 * Await the amount of time specified (in seconds)
 */
export const sleep = (seconds: number): Promise<void> =>
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	new Promise(resolve => setTimeout(resolve, seconds * 1000));
