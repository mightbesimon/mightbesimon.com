import api from "../API";

export type PublisherRequest = {
	publisherName: string,
};

export type ExtensionResponse = {
	publisher:
	{
		publisherId: string,
		publisherName: string,
		displayName: string,
		flags: string,
		domain: string,
		isDomainVerified: boolean,
	},
	extensionId: string,
	extensionName: string,
	displayName: string,
	flags: string,
	lastUpdated: Date,
	publishedDate: Date,
	releaseDate: Date,
	shortDescription: string,
	versions:
	{
		version: string,
		flags: string,
		lastUpdated: Date,
	},
	statistics:
	{
		statisticName: string,
		value: number,
	}[],
	deploymentType: number,
};

type VscodeApiResponse = {
	results: {
		extensions: ExtensionResponse[],
		pagingToken?: any,
		resultMetadata?: any[],
	}[],
};

async function getPublisher(
	{ publisherName }: PublisherRequest
): Promise<ExtensionResponse[] | undefined>
{
	const response = await fetch(
		`${api.vscode}`,
		{
			method: "POST",
			headers: {
				accept: 'application/json;api-version=3.0-preview.1',
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				filters: [
					{
						criteria: [
							{
								filterType: 10,
								value: `publisher:"${publisherName}"`,
							},
						],
					},
				],
				// The flag value is calculated as the combined hex values of the requested flags, converted to base 10.
				// https://github.com/microsoft/vscode/blob/main/src/vs/platform/extensionManagement/common/extensionGalleryService.ts
				flags: 257,
			}),
		}
	);

	if (response.status !== 200)
	{
		console.log(response);
		return;
	}

	return (await response.json() as VscodeApiResponse)
		.results[0].extensions;
}

export default getPublisher;
