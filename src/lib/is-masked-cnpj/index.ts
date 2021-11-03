import { getTypeof } from "../get-typeof";
import { isCnpj } from "../is-cnpj";

const MASKED_CNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

export const isMaskedCNPJ = (maskedCNPJ: string) =>
	getTypeof(maskedCNPJ) === "string" &&
	MASKED_CNPJ.test(maskedCNPJ) &&
	isCnpj(maskedCNPJ.replace(/[^\d]+/g, ""));
