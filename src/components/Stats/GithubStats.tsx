import './GithubStats.scss';
import EllipsisLoader from 'components/Loader/EllipsisLoader';
import getRepos from 'utils/api/github/getRepos';
import { useQuery } from 'react-query';

function GithubStats(): JSX.Element
{
	const response = useQuery(
		'getRepos',
		() => getRepos({ owner: 'mightbesimon' }),
		{ staleTime: 300000 },
	);

	const data = {
		repos: response.data?.length,
		stars: response.data?.reduce((sum, item) => sum + item.stargazers_count, 0),
		forks: response.data?.reduce((sum, item) => sum + item.forks_count, 0),
	};

	const format = (downloads: number | undefined) =>
		downloads ? downloads.toLocaleString('en-NZ') : '-';

	return (
		<div className='github stats'>
			{data ?
				<div className='table'>
					<div>GitHub</div>
					<table>
						<tbody>
							<tr key='repos'>
								<td>Repos</td>
								<td>🗃</td>
								<td className='value'>{format(data.repos)}</td>
							</tr>
							<tr key='stars'>
								<td>Stars</td>
								<td>⭐️</td>
								<td className='value'>{format(data.stars)}</td>
							</tr>
							<tr key='forks'>
								<td>Forks</td>
								<td>🍴</td>
								<td className='value'>{format(data.forks)}</td>
							</tr>
						</tbody>
					</table></div> : <EllipsisLoader text='📊' />
			}
		</div>
	);
}

export default GithubStats;
