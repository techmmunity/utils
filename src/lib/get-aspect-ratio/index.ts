import { getGCD } from "../get-gcd";

/**
 * Gets the aspect ratio (like 16:9, 4:3)
 */
export const getAspectRatio = (width: number, height: number) => {
	const divisor = getGCD(width, height);

	return `${width / divisor}:${height / divisor}`;
};
