import './Home.scss';
import Featured from './Featured';
import GithubStats from './GithubStats';
import PagesList from './PagesList';
import ReposList from './ReposList';
import socials from './Socials';
import SvgLink from 'components/SvgLink';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import SponsorButton from 'components/Sponsor/SponsorButton';
import greetings from 'data/greetings.json';
import getRepos from 'utils/api/github/getRepos';
import { useQuery } from "react-query";
import Stats from './Stats';

function Home(): JSX.Element
{
	const repoResponse = useQuery(
		'getRepos',
		() => getRepos({ owner: 'mightbesimon' }),
		{ staleTime: 300000 }
	);

	return (
		<SectionWrapper view='Home' title='SIMON' game height='60vh'>

			<div className='hello flex wrap'>
				<pre>{greetings.join('\n')}</pre>
				<div className='right'>
					<h1>Hi, I'm Simon</h1>
					<p>Auckland, NZ</p>
					<div className='flex wrap'>
						{socials.map(data => SvgLink(data))}
						<SponsorButton />
					</div>
				</div>
			</div>

			<Stats />

			<h2>✨ Featured</h2>
			<Featured />

			<h2>📦 My repositories to check out</h2>
			<ReposList data={repoResponse.data} />

			<h2>🌏 Pages to check out</h2>
			<PagesList />

			<h2>📊 My Github metrics</h2>
			<GithubStats data={repoResponse.data} />

		</SectionWrapper>
	);
}

export default Home;
