import EllipsisLoader from 'components/Loader/EllipsisLoader';
import { useQuery } from 'react-query';
import getPublisher from 'utils/api/vscode/getPublisher';
import './VscodeStats.scss';

function VscodeStats(): JSX.Element
{
	const reponse = useQuery(
		'getExtension',
		() => getPublisher({ publisherName: 'mightbesimon' }),
		{ staleTime: 300000 }
	);

	const data = reponse.data
		?.map(item =>
		{
			return {
				extensionId: item.publisher.publisherName + '.' + item.extensionName,
				name: item.displayName,
				downloads: item.statistics.filter(x => x.statisticName === 'install')[0].value,
			};
		})
		.sort((a, b) => b.downloads - a.downloads);

	const totalDownloads = data?.reduce((sum, item) => sum + item.downloads, 0);

	const format = (downloads: number | undefined) =>
		downloads ? downloads.toLocaleString('en-NZ') : '-';

	return (
		<div className='vscode stats'>
			<h3>My VSCode Extensions</h3>
			{data ?
				<div className='table'>
					<div className='total flex'>
						<div>total downloads</div>
						<div>{format(totalDownloads)}</div>
					</div>
					<table>
						<tbody>
							{data?.map(item =>
								<tr key={item.extensionId}>
									<td className='name'>{item.name}</td>
									<td className='version'><img alt='version' src={`https://img.shields.io/visual-studio-marketplace/v/${item.extensionId}?label=`} /></td>
									<td className='downloads'>{format(item.downloads)}</td>
								</tr>
							)}
						</tbody>
					</table>
				</div> : <EllipsisLoader text='📊' />
			}
		</div>
	);
}

export default VscodeStats;
