import './Home.scss';
import Featured from './Featured';
import PagesList from './PagesList';
import ReposList from './ReposList';
import socials from './Socials';
import { CVButton } from 'components/Buttons/Buttons';
import SvgLink from 'components/Links/SvgLink';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import SponsorButton from 'components/Sponsor/SponsorButton';
import VscodeStats from 'components/Stats/VscodeStats';
import GithubStats from 'components/Stats/GithubStats';
import greetings from 'data/greetings.json';

function Home(): JSX.Element
{
	return (
		<SectionWrapper view='Home' title='SIMON' height='60vh' auth game>

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

			<div className='stats flex wrap'>
				<VscodeStats />
				<GithubStats />
				<div className='buttons flex column'>
					<CVButton />
				</div>
			</div>

			<h2>✨ Featured</h2>
			<Featured />

			<h2>💾 My repositories to check out</h2>
			<ReposList />

			<h2>🌏 Pages to check out</h2>
			<PagesList />

		</SectionWrapper>
	);
}

export default Home;
