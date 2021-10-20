import { getTypeof } from "../get-typeof";
import { isCpf } from "../is-cpf";

const MASKED_CPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

export const isMaskedCpf = (maskedCPF: string) =>
	getTypeof(maskedCPF) === "string" &&
	MASKED_CPF.test(maskedCPF) &&
	isCpf(maskedCPF.replace(/\D/g, ""));
