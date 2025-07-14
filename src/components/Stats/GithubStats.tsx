import './GithubStats.scss';
import EllipsisSpinner from 'components/Spinner/EllipsisSpinner';
import getRepos from 'utils/api/github/getRepos';
import { useQuery } from 'react-query';
import { formatCount } from 'utils/extension/Functions';

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

	return (
		<div className='github stats'>
			{data ?
				<div className='table'>
					<div>GitHub</div>
					<table>
						<tbody>
							<tr key='stars'>
								<td>Stars</td>
								<td className='stroke'>⭐️</td>
								<td className='value'>{formatCount(data.stars)}</td>
							</tr>
							<tr key='repos'>
								<td>Repos</td>
								<td className='stroke'>💾</td>
								<td className='value'>{formatCount(data.repos)}</td>
							</tr>
							<tr key='forks'>
								<td>Forks</td>
								<td className='stroke'>🍴</td>
								<td className='value'>{formatCount(data.forks)}</td>
							</tr>
						</tbody>
					</table></div>
				:
				<EllipsisSpinner text='📊' />
			}
		</div>
	);
}

export default GithubStats;
