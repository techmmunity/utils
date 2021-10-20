import { getTypeof } from "../get-typeof";
import { isDate } from "../is-date";
import { isTimeWithFraction } from "../is-time-with-fraction";
import { isTimezone } from "../is-timezone";

const IS_ISO_DATE =
	/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/;
/**
 * Check if a string is a valid ISO date
 * - 1997-07-16T19:20:30.45+01:00
 */
export const isIsoDate = (value: string) => {
	if (getTypeof(value) === "string" && IS_ISO_DATE.test(value)) {
		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		const date = value.slice(0, 10);

		if (!isDate(date, "YMD", "-")) return false;

		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		const time = value.slice(11, 22);

		if (!isTimeWithFraction(time)) return false;

		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		const tz = value.slice(22);

		// ISO Date UTC TZ is defined by "Z" instead "UTC"
		return (tz === "Z" || isTimezone(tz)) && tz !== "UTC";
	}

	return false;
};
