import EllipsisSpinner from 'components/Spinner/EllipsisSpinner';
import getRepos, { RepositoryResponse } from 'utils/api/github/getRepos';
import { useQuery } from 'react-query';

const THRESHOLD = 10;

function ReposList(): JSX.Element
{
	const response = useQuery(
		'getRepos',
		() => getRepos({ owner: 'mightbesimon' }),
		{ staleTime: 300000 },
	);

	const engagement = (repo: RepositoryResponse) =>
		repo.stargazers_count +
		repo.forks_count;

	return (
		<div className='showcase repos flex wrap'>
			{response.data ? response.data
				.filter(repo => engagement(repo) >= THRESHOLD)
				.sort((a, b) => engagement(b) - engagement(a))
				.map(repo => (
					<a key={repo.full_name} className='flex column' href={repo.html_url}>
						<div className='title'>
							<h3>{repo.name}</h3>
							<div className='description'>{repo.description}</div>
						</div>
						<div className='engagement flex wrap'>
							<div className='badge'>
								<span className='stroke'>⭐️</span>
								{repo.stargazers_count}
							</div>
							<div className='badge'>
								<span className='stroke'>🍴</span>
								{repo.forks_count}
							</div>
						</div>
					</a>
				)) : <EllipsisSpinner text='🌵' />
			}
		</div>
	);
}

export default ReposList;
