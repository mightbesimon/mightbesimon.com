import featured from 'data/featured.json';
import { ExtensionResponse } from 'utils/api/vscode/getExtension';

type FeaturedProps = {
	data: ExtensionResponse | undefined,
};

function Featured({ data: extensionData }: FeaturedProps): JSX.Element
{
	const downloads = extensionData?.statistics
		.filter(x => x.statisticName === 'install')[0]?.value;

	const repr = downloads ?
		(downloads / 1000).toFixed(1) + 'k+' : '';

	return (
		<div className='showcase featured flex wrap'>
			{featured.map(data => (
				<a key={data.title} className='flex column' href={data.url}>
					<div className='title'>
						<h3>{data.title}</h3>
						<div className='description'>
							{data.description?.replace('##downloads##', repr)}
						</div>
					</div>
					<div className='badges flex'>
						{data.badges && data.badges.map(badge =>
							<img alt='badge' src={badge} />
						)}
					</div>
				</a>
			))}
		</div>
	);
}

export default Featured;
