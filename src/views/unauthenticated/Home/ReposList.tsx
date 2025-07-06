import repositories from 'data/repositories.json';
import EllipsisSpinner from 'components/Spinner/EllipsisSpinner';
import getRepos, { RepositoryResponse } from 'utils/api/github/getRepos';
import { useQuery } from 'react-query';

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
				.filter(repo => repositories.map(x => x.repo).includes(repo.name) || engagement(repo) > 2)
				.sort((a, b) => engagement(b) - engagement(a))
				.map(repo => (
					<a key={repo.full_name} className='flex column' href={repo.html_url}>
						<div className='title'>
							<h3>{repo.name}</h3>
							<div className='description'>{repo.description}</div>
						</div>
						<div className='engagement flex wrap'>
							<div>⭐️ {repo.stargazers_count}</div>
							<div>🍴 {repo.forks_count}</div>
						</div>
					</a>
				)) : <EllipsisSpinner text='🌵' />
			}
		</div>
	);
}

export default ReposList;
