import api from "../API";

export type PackageDownloadsRequest = {
	package: string,
};

export type PackageDownloadsResponse = {
	date: Date,
	downloads: number,
	category: string,
};

type PypiStatsApiResponse = {
	data: PackageDownloadsResponse[],
	package: string,
	type: string,

};

async function getPackageDownloads(
	{ package: packageName }: PackageDownloadsRequest
): Promise<PackageDownloadsResponse[] | undefined>
{
	const response = await fetch(
		`${api.pypi}/packages/${packageName}/overall`,
		{
			method: "GET",
		}
	);

	if (response.status !== 200)
	{
		console.log(response);
		return;
	}

	return (await response.json() as PypiStatsApiResponse).data;
}

export async function getPackagesDownloads(
	packages: string[]
): Promise<(PackageDownloadsResponse[] | undefined)[]>
{
	return await Promise.all(
		packages.map(async packageName =>
		{
			const response = await fetch(
				`${api.pypi}/packages/${packageName}/overall`,
				{
					method: "GET",
				}
			);

			if (response.status !== 200)
			{
				console.log(response);
				return;
			}

			return (await response.json() as PypiStatsApiResponse).data;
		})
	);
}

export default getPackageDownloads;
