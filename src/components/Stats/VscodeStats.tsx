import './VscodeStats.scss';
import EllipsisSpinner from 'components/Spinner/EllipsisSpinner';
import getPublisher from 'utils/api/vscode/getPublisher';
import { format, wrapEmoji } from 'utils/extension/Functions';
import { useQuery } from 'react-query';

function VscodeStats(): JSX.Element
{
	const reponse = useQuery(
		'getExtension',
		() => getPublisher({ publisherName: 'mightbesimon' }),
		{ staleTime: 300000 },
	);

	const data = reponse.data
		?.map(item =>
		{
			return {
				extensionId: item.publisher.publisherName + '.' + item.extensionName,
				name: item.displayName,
				version: item.versions[0]?.version,
				installs: item.statistics.filter(x => x.statisticName === 'install')[0].value,
			};
		})
		.sort((a, b) => b.installs - a.installs);

	const totalInstalls = data?.reduce((sum, item) => sum + item.installs, 0);

	return data ?
		<div className='vscode stats'>
			<div className='total flex'>
				<span>Total VSCode Extension Installs</span>
				<span>{format(totalInstalls)}</span>
			</div>
			<table>
				<tbody>
					{data?.map(item =>
						<tr key={item.extensionId}>
							<td className='name'>{wrapEmoji(item.name)}</td>
							<td className='version'>
								<img
									className='badge'
									alt='version'
									src={`https://img.shields.io/badge/v${item.version}-blue`}
								/>
							</td>
							<td className='installs'>{format(item.installs)}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
		:
		<EllipsisSpinner text='📊' />;
}

export default VscodeStats;
