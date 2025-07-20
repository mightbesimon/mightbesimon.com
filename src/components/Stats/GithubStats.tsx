import './GithubStats.scss';
import EllipsisSpinner from 'components/Spinner/EllipsisSpinner';
import getRepos from 'utils/api/github/getRepos';
import { format } from 'utils/extensions/Functions';
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

	return data ?
		<div className='github stats flex'>
			<div key='repos'>
				<div className='flex'>
					<span className='stroke'>💾</span>
					{format(data.repos)}
				</div>
				<div>Repos</div>
			</div>
			<div key='stars'>
				<div className='flex'>
					<span className='stroke'>⭐️</span>
					{format(data.stars)}
				</div>
				<div>Stars</div>
			</div>
			<div key='forks'>
				<div className='flex'>
					<span className='stroke'>🍴</span>
					{format(data.forks)}
				</div>
				<div>Forks</div>
			</div>
		</div>
		:
		<EllipsisSpinner text='📊' />;
}

export default GithubStats;
