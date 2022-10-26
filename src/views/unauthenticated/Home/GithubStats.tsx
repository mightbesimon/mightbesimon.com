import './GithubStats.scss';
import ImageLink from 'components/ImageLink';
import EllipsisLoader from 'components/Loader/EllipsisLoader';
import { RepositoryResponse } from 'utils/api/github/getRepos';

type GithubStatsProps = {
	data: RepositoryResponse[] | undefined
};

function GithubStats({ data }: GithubStatsProps): JSX.Element {
	return (
		<div className='stats'>
			<ImageLink
				name='github stats'
				image='https://github-readme-stats.vercel.app/api?username=mightbesimon&show_icons=true&theme=dracula'
				url='https://github.com/mightbesimon'
			/>
			{
				data ? (
					<div className='engagement flex'>
						<div>📦 {data.length}</div>
						<div>⭐️ {data.reduce((sum, repo) => sum + repo.stargazers_count, 0)}</div>
						<div>👀 {data.reduce((sum, repo) => sum + repo.watchers_count, 0)}</div>
						<div>🍴 {data.reduce((sum, repo) => sum + repo.forks_count, 0)}</div>
					</div>
				) : <EllipsisLoader text='📊' />
			}
		</div>
	);
}

export default GithubStats;
