export const hasRequiredEnvVars = (requiredEnvVars: Array<string>) => {
	const envVars = Object.keys(process.env);

	return requiredEnvVars.every(envVar => envVars.includes(envVar));
};
