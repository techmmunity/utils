import { isDate } from "../is-date";

/**
 * Check if a string is an valid date format
 * - 31-01-2020
 */
export const isDateDMY = (value: string) => isDate(value, "DMY", "-");
