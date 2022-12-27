import './PypiStats.scss';
import EllipsisLoader from 'components/Loader/EllipsisLoader';
import getPackage from 'utils/api/pypi/getPackage';
import { formatCount } from 'utils/extension/Functions';
import { useQuery } from 'react-query';
import batchCall from 'utils/api/batchCall';

function PypiStats(): JSX.Element
{
	const requests = [
		{ package: 'lifehacks.metaclasses' },
		{ package: 'lifehacks.colour' },
		{ package: 'lifehacks' },
	];

	const responses = useQuery(
		'getPackagesDownloads',
		() => batchCall({ func: getPackage, requests }),
		{ staleTime: 300000 },
	);

	const data = responses.data?.map(
		(item, idx) =>
		{
			return {
				name: requests[idx].package,
				downloads: item?.total_downloads ?? 0,
			};
		},
	);

	const totalDownloads = data?.reduce((sum, item) => sum + item.downloads, 0);

	return (
		<div className='pypi stats'>
			<h3>My Python Packages</h3>
			{data ?
				<div className='table'>
					<div className='total flex'>
						<div>total downloads</div>
						<div>{formatCount(totalDownloads)}</div>
					</div>
					<table>
						<tbody>
							{data?.map(item =>
								<tr key={item.name}>
									<td className='name'>{item.name}</td>
									<td className='badge'><img alt='version' src={`https://img.shields.io/pypi/v/${item.name}?label=`} /></td>
									<td className='downloads'>{formatCount(item.downloads)}</td>
								</tr>
							)}
						</tbody>
					</table>
				</div> : <EllipsisLoader text='📊' />
			}
		</div>
	);
}

export default PypiStats;
