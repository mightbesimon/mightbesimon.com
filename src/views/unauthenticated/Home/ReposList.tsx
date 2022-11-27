import repositories from 'data/repositories.json';
import EllipsisLoader from 'components/Loader/EllipsisLoader';
import { RepositoryResponse } from 'utils/api/github/getRepos';

type ReposListProps = {
	data: RepositoryResponse[] | undefined,
};

function ReposList({ data }: ReposListProps): JSX.Element
{

	const engagement = (repo: RepositoryResponse) =>
		repo.stargazers_count +
		repo.forks_count;

	return (
		<div className='showcase repos flex wrap'>
			{
				data?.length ? data
					.filter(repo => repositories.map(x => x.repo).includes(repo.name) || engagement(repo) > 2)
					.sort((a, b) => engagement(a) - engagement(b))
					.reverse().map(repo => (
						<a key={repo.full_name} className='flex column' href={repo.html_url}>
							<div className='title'>
								<h3>{repo.name}</h3>
								<div className='description'>{repo.description}</div>
							</div>
							<div className='engagement flex'>
								<div>⭐️ {repo.stargazers_count}</div>
								<div>🍴 {repo.forks_count}</div>
							</div>
						</a>
					)) : <EllipsisLoader text='🌵' />
			}
		</div>
	);
}

export default ReposList;
