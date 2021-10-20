/* eslint-disable @typescript-eslint/no-magic-numbers */

import { getTypeof } from "../get-typeof";

// Index of Day - Month - Year
const datePositions = {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	DMY: [0, 1, 2],
	// eslint-disable-next-line @typescript-eslint/naming-convention
	YMD: [2, 1, 0],
	// eslint-disable-next-line @typescript-eslint/naming-convention
	MDY: [1, 0, 2],
};

const isInvalidFormat = (format: string) =>
	!["DMY", "MDY", "YMD"].includes(format);

const isDifferent = (formatted: number, brute: string) =>
	`${formatted}`.padStart(2, "0") !== brute;

const outOfRange = (number: number, min: number, max: number) =>
	number < min || number > max;

const isInvalidDate = (day: number, month: number, year: number) => {
	const date = new Date(year, month - 1, day);

	const wrongDay = date.getUTCDate() !== day;
	if (wrongDay) return true;

	const wrongMonth = date.getMonth() + 1 !== month;
	if (wrongMonth) return true;

	return false;
};

export const isDate = (
	value: string,
	format: keyof typeof datePositions,
	separator: "-" | "/",
) => {
	if (
		getTypeof(value) !== "string" ||
		getTypeof(format) !== "string" ||
		getTypeof(separator) !== "string" ||
		isInvalidFormat(format)
	) {
		return false;
	}

	const dateSplitted = value.split(separator);

	if (dateSplitted.length !== 3) return false;

	const position = datePositions[format];

	const [DAY_INDEX, MONTH_INDEX, YEAR_INDEX] = position;

	const dayBrute = dateSplitted[DAY_INDEX];
	const monthBrute = dateSplitted[MONTH_INDEX];
	const yearBrute = dateSplitted[YEAR_INDEX];

	if (dayBrute.length !== 2) return false;
	if (monthBrute.length !== 2) return false;
	if (outOfRange(yearBrute.length, 1, 4)) return false;

	const dateFormatted = dateSplitted.map(nbr => parseInt(nbr, 10));

	const day = dateFormatted[DAY_INDEX];
	const month = dateFormatted[MONTH_INDEX];
	const year = dateFormatted[YEAR_INDEX];

	if (isDifferent(day, dayBrute)) return false;
	if (isDifferent(month, monthBrute)) return false;
	if (isDifferent(year, yearBrute)) return false;

	if (outOfRange(day, 1, 31)) return false;
	if (outOfRange(month, 1, 12)) return false;

	if (isInvalidDate(day, month, year)) return false;

	return true;
};
