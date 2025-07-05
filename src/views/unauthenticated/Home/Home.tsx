import './Home.scss';
import Featured from './Featured';
import PagesList from './PagesList';
import ReposList from './ReposList';
import socials from './Socials';
import greetings from 'data/greetings.json';
import SvgLink from 'components/Links/SvgLink';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import VscodeStats from 'components/Stats/VscodeStats';
import GithubStats from 'components/Stats/GithubStats';
import { SponsorButton, CVButton } from 'components/Buttons/Buttons';

function Home(): JSX.Element
{
	return (
		<SectionWrapper view='Home' title='SIMON' height='60vh' auth game>

			<div className='hello flex wrap'>
				<pre>{greetings.join('\n')}</pre>
				<div className='right'>
					<h1>Hi, I'm Simon</h1>
					<p>Auckland, New Zealand ∙ Darmstadt, Germany</p>
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

			<h2>✨ Featured ✨</h2>
			<Featured />

			<h2>🍴 Popular Repos 🍴</h2>
			<ReposList />

			<h2>🌍 Fun Pages 🌏</h2>
			<PagesList />

		</SectionWrapper>
	);
}

export default Home;
