/* eslint-disable @typescript-eslint/no-magic-numbers */

import { getTypeof } from "../get-typeof";

/*
 * CPF validation according to Receita Federal
 * More info: https://www.geradorcnpj.com/algoritmo_do_cnpj.htm
 */

const notCnpj = [
	"00000000000000",
	"11111111111111",
	"22222222222222",
	"33333333333333",
	"44444444444444",
	"55555555555555",
	"66666666666666",
	"77777777777777",
	"88888888888888",
	"99999999999999",
];

/**
 * Check if a string is a valid cpf
 * - 55357314047
 */
export const isCnpj = (cnpj: string) => {
	if (getTypeof(cnpj) !== "string") return false;

	if (cnpj === "") return false;

	if (cnpj.length !== 14) return false;

	if (notCnpj.includes(cnpj)) return false;

	let length = cnpj.length - 2;
	let numbers = cnpj.substring(0, length);
	const digits = cnpj.substring(length);
	let sum = 0;
	let pos = length - 7;

	for (let i = length; i >= 1; i--) {
		const nbr = parseInt(numbers.charAt(length - i), 10);

		sum += nbr * pos--;

		if (pos < 2) pos = 9;
	}

	let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

	const firstChar = parseInt(digits.charAt(0), 10);

	if (result !== firstChar) return false;

	length += 1;
	numbers = cnpj.substring(0, length);
	sum = 0;
	pos = length - 7;

	for (let i = length; i >= 1; i--) {
		const nbr = parseInt(numbers.charAt(length - i), 10);

		sum += nbr * pos--;

		if (pos < 2) pos = 9;
	}

	result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

	const secondChar = parseInt(digits.charAt(1), 10);

	if (result !== secondChar) return false;

	return true;
};
