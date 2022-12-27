import api from "../API";

export type PackageRequest = {
	package: string,
};

export type PackageResponse = {
	id: string,
	total_downloads: number,
	downloads: any,
	versions: string[],
};

async function getPackage(
	{ package: packageName }: PackageRequest
): Promise<PackageResponse | undefined>
{
	const response = await fetch(
		`${api.pypi}/projects/${packageName}`,
		{
			method: "GET",
		}
	);

	if (response.status !== 200)
	{
		console.log(response);
		return;
	}

	return await response.json() as PackageResponse;
}

export default getPackage;
