import './HiImSimon.scss';
import { ReactComponent as Instagram } from 'assets/SocialMedia/instagram.svg';
import { ReactComponent as Github } from 'assets/SocialMedia/github.svg';
import { ReactComponent as LinkedIn } from 'assets/SocialMedia/linkedin.svg';
import EllipsisLoader from 'components/Loader/EllipsisLoader';
import { ImageLink, SvgLink } from 'components/ImageLink';
import SimonWrapper from 'components/SimonWrapper/SimonWrapper';
import getRepos, { RepositoryResponse } from 'utils/api/github/getRepos';
import greetings from 'utils/data/greetings.json';
import repositories from 'utils/data/repositories.json';
import unauthenticatedContent from "views/unauthenticated/UnauthenticatedContent";
import { Link } from 'react-location';
import { useQuery } from "react-query";

const socials = [
	{
		name: 'instagram',
		svg: Instagram,
		url: 'https://www.instagram.com/definitely.not_simon',
	},
	{
		name: 'github',
		svg: Github,
		url: 'https://github.com/mightbesimon',
	},
	{
		name: 'LinkedIn',
		svg: LinkedIn,
		url: 'https://www.linkedin.com/in/mightbesimon',
	},
];

function HiImSimon(): JSX.Element {
	const repoResponse = useQuery(
		'getRepo',
		() => getRepos({ owner: 'mightbesimon' })
	);

	const engagement = (repo: RepositoryResponse) =>
		repo.stargazers_count +
		repo.watchers_count +
		repo.forks_count;

	return (
		<SimonWrapper view='HiImSimon'>
			<div className='hello flex wrap'>
				<pre>{greetings.join('\n')}</pre>
				<div className='right'>
					<h1>Hi, I'm Simon 👋</h1>
					<p className='flex wrap'>
						<span>Auckland, NZ</span>
						<span>🛫</span>
						<span>San Jose, CA</span>
					</p>
					<div className='flex wrap'>
						{
							socials.map(data => SvgLink(data))
						}
					</div>
				</div>
			</div>
			<h2>My repositories to check out</h2>
			<div className='showcase repos flex wrap'>
				{
					repoResponse.data ? repoResponse.data
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
									<div>👀 {repo.watchers_count}</div>
									<div>🍴 {repo.forks_count}</div>
								</div>
							</a>
						)) : <EllipsisLoader text='🌵' />
				}
			</div>
			<h2>Pages to check out</h2>
			<div className='showcase pages flex wrap'>
				{
					unauthenticatedContent.filter(page => page.path)
						.map(page => (
							<Link key={page.path} to={page.path}>
								<div className='title'>
									<h3>mightbesimon.com{page.path}</h3>
								</div>
							</Link>
						))
				}
			</div>
			<h2>My Github stats</h2>
			<ImageLink
				name='github stats'
				image='https://github-readme-stats.vercel.app/api?username=mightbesimon&show_icons=true&theme=dracula'
				url='https://github.com/mightbesimon'
			/>
		</SimonWrapper>
	)
}

export default HiImSimon;
