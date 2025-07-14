import './PypiStats.scss';
import EllipsisSpinner from 'components/Spinner/EllipsisSpinner';
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
		if (!downloads) return;

		const items = Object.entries(downloads)
			.map((kvp): Aggregated =>
			{
				return {
					date: new Date(kvp[0]),
					downloads: Object.entries(kvp[1] as any)
						.reduce((sum, item) => sum + (item[1] as number), 0),
					offset: 0,
					cummulative: 0,
				};
			});

		let cummulative = total - items.reduce((sum, item) => sum + item.downloads, 0);
		// let cummulative = 0;

		items.forEach(item =>
		{
			cummulative += item.downloads;
			item.offset = Math.floor(
				(item.date.getTime() - new Date().getTime()) / 86400000) + 91;
			item.cummulative = cummulative;
		});

		return items;
	};

	const data = responses.data?.map(
		(item, idx) =>
		{
			return {
				name: item?.id,
				downloads: item?.total_downloads as number,
				last30days: aggregate(item?.downloads, item?.total_downloads as number),
			};
		})
		.sort((a, b) => b.downloads - a.downloads);

	const totalDownloads = data?.reduce((sum, item) => sum + item.downloads, 0);

	const [showGraph, setShowGraph] = useState(false);
	const [index, setIndex] = useState(0);

	const getPath = (items: Aggregated[] | undefined) =>
	{
		if (!items) return;
		const total = items[items.length - 1].cummulative;
		let path = 'M';
		items.forEach(item =>
		{
			path += ` ${item.offset} ${48 - 47 * item.cummulative / total} L`;
		});

		return path + ' 89 1';
	};

	return (
		<div className='pypi stats'>
			<h3>My Python Packages</h3>
			{data ?
				<div className='table'
					style={{ borderRadius: showGraph ? '.5rem 0rem 0rem .5rem' : '.5rem' }}
				>
					<div className='total flex'>
						<div>total downloads</div>
						<div>{formatCount(totalDownloads)}</div>
					</div>
					<table>
						<tbody>
							{data.map((item, idx) =>
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
					<div className='graph flex column'
						style={{ display: showGraph ? 'flex' : 'none' }}
					>
						<div className='flex'>
							<span>{data[index].name}</span> last 90 days
						</div>
						<svg viewBox='0 0 89 48'
							preserveAspectRatio='none'
						>
							<rect fill='var(--body)' opacity={.9}
								width='100%' height='100%'
							/>
							<path fill='none'
								stroke='var(--text)' strokeWidth={.7}
								d={getPath(data[index].last30days)}
							/>
						</svg>
					</div>
				</div>
				:
				<EllipsisSpinner text='📊' />
			}
		</div>
	);
}

export default PypiStats;
