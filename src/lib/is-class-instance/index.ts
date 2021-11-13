export const isClassInstance = (instance: any, className = "") =>
	instance?.constructor?.toString().startsWith(`class ${className}`) || false;
