import './Home.scss';
import Featured from './Featured';
import PagesList from './PagesList';
import ReposList from './ReposList';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import VscodeStats from 'components/Stats/VscodeStats';
import GithubStats from 'components/Stats/GithubStats';
import SocialButtons from 'components/Buttons/SocialButtons';
import { CVButton } from 'components/Buttons/Buttons';
import Greetings from 'components/Greetings/Greetings';

function Home(): JSX.Element
{
	return (
		<SectionWrapper view='Home' title='SIMON' height='60vh' auth game>

			<div className='hello flex wrap'>
				<Greetings />
				<div className='info'>
					<h1>Hi, I'm Simon</h1>
					<p>Auckland, New Zealand ∙ Darmstadt, Germany</p>
					<div className='flex wrap'>
						<SocialButtons />
						<CVButton />
					</div>
				</div>
			</div>

			<div className='stats flex wrap'>
				<VscodeStats />
				<GithubStats />
			</div>

			<h2>
				<span className='stroke'>✨</span>
				&nbsp;Featured&nbsp;
				<span className='stroke'>✨</span>
			</h2>
			<Featured />

			<h2>
				<span className='stroke'>🍴</span>
				&nbsp;Popular Repos&nbsp;
				<span className='stroke'>🍴</span>
			</h2>
			<ReposList />

			<h2>
				<span className='stroke'>🌍</span>
				&nbsp;Fun Pages&nbsp;
				<span className='stroke'>🌍</span>
			</h2>
			<PagesList />

		</SectionWrapper>
	);
}

export default Home;
