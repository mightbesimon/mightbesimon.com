import './PypiStats.scss';
import EllipsisLoader from 'components/Loader/EllipsisLoader';
import { getPackagesDownloads } from 'utils/api/pypi/getPackageDownloads';
import { useQuery } from 'react-query';

function PypiStats(): JSX.Element
{
	const packages = [
		'lifehacks.metaclasses',
		'lifehacks.colour',
		'lifehacks',
	];

	const responses = useQuery(
		'getPackagesDownloads',
		() => getPackagesDownloads(packages),
		{ staleTime: 300000 },
	);

	const data = responses.data?.map(
		(item, idx) =>
		{
			return {
				name: packages[idx],
				downloads: item?.reduce((sum, x) => sum + x.downloads, 0),
			};
		},
	);

	const format = (downloads: number | undefined) =>
		downloads ? downloads.toLocaleString('en-NZ') : '-';

	return (
		<div className='pypi stats'>
			<h3>My Python Packages</h3>
			{data ?
				<div className='table'>
					<div className='total flex'>
						<div>badges</div>
					</div>
					<table>
						<tbody>
							{data?.map(item =>
								<tr key={item.name}>
									<td className='name'>{item.name}</td>
									<td className='badge'><img alt='version' src={`https://img.shields.io/pypi/v/${item.name}?label=`} /></td>
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

export default PypiStats;
