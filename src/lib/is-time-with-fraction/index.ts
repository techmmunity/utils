import { getTypeof } from "../get-typeof";
import { isBetween } from "../is-between";

const IS_TIME = /^\d{2}:\d{2}:\d{2}.?\d{0,2}$/;

const isValidHour = (hour: string) =>
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	isBetween(parseInt(hour, 10), 0, 23);

const isValidMinute = (minute: string) =>
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	isBetween(parseFloat(minute), 0, 59);

const isValidSeconds = (rawSeconds: string) => {
	const [seconds, secondsFraction] = rawSeconds.split(".");

	const secondsNumber = parseFloat(seconds);
	const secondsFractionNumber = parseFloat(secondsFraction);

	return (
		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		isBetween(secondsNumber, 0, 59) && isBetween(secondsFractionNumber, 0, 99)
	);
};

/**
 * Check if a string is a valid time with fraction
 * - 19:20:30.45
 */
export const isTimeWithFraction = (value: string) => {
	if (getTypeof(value) === "string" && IS_TIME.test(value)) {
		const [hour, minute, seconds] = value.split(":");

		return (
			isValidHour(hour) && isValidMinute(minute) && isValidSeconds(seconds)
		);
	}

	return false;
};
