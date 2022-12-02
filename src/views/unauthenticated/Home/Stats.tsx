import { useQuery } from 'react-query';
import getPublisher from 'utils/api/vscode/getPublisher';

function Stats(): JSX.Element
{
	const extensions = useQuery(
		'getExtension',
		() => getPublisher({ publisherName: 'mightbesimon' }),
		{ staleTime: 300000 }
	);

	const data = extensions.data?.map(item =>
	{
		return {
			extensionId: item.publisher.publisherName + '.' + item.extensionName,
			name: item.displayName,
			downloads: item.statistics.filter(x => x.statisticName === 'install')[0].value,
		};
	}).sort((a, b) => b.downloads - a.downloads);

	const totalDownloads = data?.reduce((sum, item) => sum + item.downloads, 0);

	const format = (downloads: number | undefined) =>
		!downloads ? '' :
			downloads >= 1000 ? (Math.floor(downloads / 100) / 10).toFixed(1) + 'k+' :
				downloads.toString();

	return (
		<div>
			<h3>VSCode extensions</h3>
			<p>
				total downloads
				{format(totalDownloads)}
			</p>
			<table>
				<tbody>
					{data?.map(item =>
						<tr key={item.extensionId}>
							<td>{item.name}</td>
							<td><img alt='version' src={`https://img.shields.io/visual-studio-marketplace/v/${item.extensionId}?label=`} /></td>
							<td>{format(item.downloads)}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}

export default Stats;
