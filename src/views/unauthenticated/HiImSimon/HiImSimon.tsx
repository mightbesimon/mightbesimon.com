import './HiImSimon.scss';
import Instagram from 'assets/SocialMedia/instagram.svg';
import Github from 'assets/SocialMedia/github.svg';
import LinkedIn from 'assets/SocialMedia/linkedin.svg';
import ImageLink from 'components/ImageLink';
import SimonWrapper from 'components/SimonWrapper/SimonWrapper';

const socials = [
	{
		name: 'instagram',
		image: Instagram,
		url: 'https://www.instagram.com/definitely.not_simon',
	},
	{
		name: 'github',
		image: Github,
		url: 'https://github.com/mightbesimon',
	},
	{
		name: 'LinkedIn',
		image: LinkedIn,
		url: 'https://www.linkedin.com/in/mightbesimon',
	},
];

function HiImSimon(): JSX.Element {
	const languages = `🇳🇿 Kia ora,
🇩🇪 Hallo, ich heiße Simon 😎
🇫🇷 Salut, moi c'est Simon 😏
🇮🇪 Dia duit, is mise Simon 😙
🇨🇳 嗨, 我叫单泉`;

	return (
		<SimonWrapper>
			<div className='hello flex wrap'>
				<div className='left'>
					<h2>Hi, I'm Simon 👋</h2>
					<pre>{languages}</pre>

					<div className='flex wrap'>
						<p>Auckland, NZ 🛫 San Jose, CA</p>
						<div className='flex wrap'>
							{
								socials.map(data => ImageLink(data))
							}
						</div>
					</div>
				</div>
				<ImageLink
					name='github stats'
					image='https://github-readme-stats.vercel.app/api?username=mightbesimon&show_icons=true&theme=dracula'
					url='https://github.com/mightbesimon'
				/>
			</div>
		</SimonWrapper>
	)
}

export default HiImSimon;
