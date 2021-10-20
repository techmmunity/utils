import { getTypeof } from "../get-typeof";

const IS_TIMEZONE = /^[-+]{1}\d{2}:\d{2}$/;

export const isTimezone = (value: string) => {
	if (getTypeof(value) === "string") {
		if (value === "UTC") return true;
		if (!IS_TIMEZONE.test(value)) return false;

		const [hourWithSignal, minutes] = value.split(":");

		if (minutes !== "00") return false;

		return [
			"+01",
			"+02",
			"+03",
			"+04",
			"+05",
			"+06",
			"+07",
			"+08",
			"+09",
			"+10",
			"+11",
			"+12",
			"+13",
			"+14",
			"-01",
			"-02",
			"-03",
			"-04",
			"-05",
			"-06",
			"-07",
			"-08",
			"-09",
			"-10",
			"-11",
		].includes(hourWithSignal);
	}

	return false;
};
