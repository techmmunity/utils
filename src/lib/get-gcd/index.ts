/**
 * Gets the Greatest Common Divisor (GCD)
 * of 2 numbers
 */
export const getGCD = (a: number, b: number): number =>
	b ? getGCD(b, a % b) : a;
