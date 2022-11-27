import api from "../API";

export type ExtensionRequest = {
	extensionId: string,
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
		files:
		{
			assetType: string,
			source: string,
		}[],
		properties:
		{
			key: string,
			value: string,
		}[],
		assetUri: string,
		fallbackAssetUri: string,
	}[],
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

async function getExtension(
	{ extensionId }: ExtensionRequest
): Promise<ExtensionResponse | undefined>
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
								filterType: 7,
								value: extensionId,
							},
						],
					},
				],
				// Microsoft does not provide a clear API doc.
				// It seems that the flag value is calculated as
				// the combined hex values of the requested flags,
				// converted to base 10.
				// This was found using the vscode repo at:
				// https://github.com/microsoft/vscode/blob/main/src/vs/platform/extensionManagement/common/extensionGalleryService.ts
				// This flag value is 0x192.
				flags: 402,
			}),
		}
	);

	if (response.status !== 200)
	{
		console.log(response);
		return;
	}

	return (
		await response.json() as unknown as VscodeApiResponse
	).results[0].extensions[0];
}

export default getExtension;
