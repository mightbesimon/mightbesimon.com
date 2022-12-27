import './PypiStats.scss';
import EllipsisLoader from 'components/Loader/EllipsisLoader';
import batchCall from 'utils/api/batchCall';
import getPackage from 'utils/api/pypi/getPackage';
import { formatCount } from 'utils/extension/Functions';
import { useState } from 'react';
import { useQuery } from 'react-query';

type Aggregated = {
	date: Date,
	downloads: number,
	offset: number,
	cummulative: number,
};

function PypiStats(): JSX.Element
{
	const requests = [
		{ package: 'lifehacks' },
		{ package: 'lifehacks.metaclasses' },
		{ package: 'lifehacks.colour' },
	];

	const responses = useQuery(
		'getPackagesDownloads',
		() => batchCall({ func: getPackage, requests }),
		{ staleTime: 300000 },
	);

	const aggregate = (downloads: any, total: number) =>
	{
		const items = Object.entries(downloads)
			.map((kvp): Aggregated =>
			{
				return {
					date: new Date(kvp[0]),
					downloads: kvp[1] as number,
					offset: 0,
					cummulative: 0,
				};
			});

		// let cummulative = total - items.reduce((sum, item) => sum + item.downloads, 0);
		let cummulative = 0;

		items.forEach(item =>
		{
			cummulative += item.downloads;
			item.offset = Math.floor((item.date.getTime() - new Date().getTime()) / 86400000) + 31;
			item.cummulative = cummulative;
		});

		console.log(items);
		return items;
	};

	const data = responses.data?.map(
		(item, idx) =>
		{
			return {
				name: requests[idx].package,
				downloads: item?.total_downloads as number,
				last30days: aggregate(item?.downloads, item?.total_downloads as number),
			};
		})
		.sort((a, b) => b.downloads - a.downloads);

	const totalDownloads = data?.reduce((sum, item) => sum + item.downloads, 0);

	const [showGraph, setShowGraph] = useState(false);
	const [index, setIndex] = useState(0);

	const getPath = (items: Aggregated[], total: number) =>
	{
		total = items[items.length - 1].cummulative;
		let path = 'M';
		items.forEach(item =>
		{
			path += ` ${item.offset} ${16 - 15 * item.cummulative / total} L`;
		});

		return path + ' 29 1';
	};

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
							{data?.map((item, idx) =>
								<tr key={item.name}
									onMouseEnter={() => { setShowGraph(true); setIndex(idx); }}
									onMouseLeave={() => { setShowGraph(false); }}
								>
									<td className='name'>{item.name}</td>
									<td className='badge'><img alt='version' src={`https://img.shields.io/pypi/v/${item.name}?label=`} /></td>
									<td className='downloads'>{formatCount(item.downloads)}</td>
								</tr>
							)}
						</tbody>
					</table>
					<div className='graph' style={{ display: showGraph ? 'block' : 'none' }}>
						<div>
							<span>{data?.at(index)?.name}</span> last 30 days
						</div>
						<svg viewBox='0 0 29 16'>
							<rect fill='var(--body)' opacity={.8} width='100%' height='100%' />
							<path
								fill='none'
								stroke='var(--text)'
								strokeWidth={.25}
								d={getPath(
									data?.at(index)?.last30days as Aggregated[],
									data?.at(index)?.downloads as number
								)} />
						</svg>
					</div>
				</div> : <EllipsisLoader text='📊' />
			}
		</div>
	);
}

export default PypiStats;
