import EllipsisLoader from 'components/Loader/EllipsisLoader';
import './PypiStats.scss';

function PypiStats(): JSX.Element
{

	const data = [
		'lifehacks.metaclasses',
		'lifehacks.colour',
		'lifehacks',
	];

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
								<tr key={item}>
									<td className='name'>{item}</td>
									<td className='badge'><img alt='version' src={`https://img.shields.io/pypi/v/${item}?label=`} /></td>
									<td className='downloads'><img alt='downloads' src={`https://img.shields.io/pypi/dm/${item}?color=white&label=&logo=python`} /></td>
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