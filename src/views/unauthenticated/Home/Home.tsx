import './Home.scss';
import Featured from './Featured';
import PagesList from './PagesList';
import ReposList from './ReposList';
import greetings from 'data/greetings.json';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import VscodeStats from 'components/Stats/VscodeStats';
import GithubStats from 'components/Stats/GithubStats';
import SocialButtons from 'components/Buttons/SocialButtons';
import { SponsorButton, CVButton } from 'components/Buttons/Buttons';

function Home(): JSX.Element
{
	return (
		<SectionWrapper view='Home' title='SIMON' height='60vh' auth game>

			<div className='hello flex wrap'>
				<div className='left'>
					{greetings.map(greeting =>
						<div className='flex' key={greeting.language}>
							<div className='stroke'>{greeting.flag}</div>
							<div>
								{greeting.greeting.map(text =>
									<div key={text}>{text}</div>)
								}
							</div>
						</div>
					)}
				</div>
				<div className='right'>
					<h1>Hi, I'm Simon</h1>
					<p>Auckland, New Zealand ∙ Darmstadt, Germany</p>
					<div className='flex wrap'>
						<SocialButtons />
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

			<h2>
				<span className='stroke'>✨</span>&nbsp;
				Featured&nbsp;
				<span className='stroke'>✨</span>
			</h2>
			<Featured />

			<h2>
				<span className='stroke'>🍴</span>&nbsp;
				Popular Repos&nbsp;
				<span className='stroke'>🍴</span>
			</h2>
			<ReposList />

			<h2>
				<span className='stroke'>🌍</span>&nbsp;
				Fun Pages&nbsp;
				<span className='stroke'>🌍</span>
			</h2>
			<PagesList />

		</SectionWrapper>
	);
}

export default Home;
