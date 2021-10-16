export const isClass = (value: any) => {
	if (value.toString().startsWith("class")) return true;

	return ["String", "Number", "Boolean", "Object", "Array"].includes(
		value.name,
	);
};
