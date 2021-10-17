export const getEnumValues = <T>(ENUM: any) =>
	[...new Set(Object.values(ENUM))] as Array<T>;
