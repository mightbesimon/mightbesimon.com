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
		<SimonWrapper view='HiImSimon'>
			<div className='hello flex wrap'>
				<pre>{languages}</pre>
				<div className='right'>
					<h1 className='flex wrap'>
						<span>Hi,</span>
						<span>I'm Simon</span>
						<span>👋</span>
					</h1>
					<div className='flex wrap'>
						{
							socials.map(data => ImageLink(data))
						}
					</div>
					<p className='flex wrap'>
						<span>Auckland, NZ</span>
						<span>🛫</span>
						<span>San Jose, CA</span>
					</p>
				</div>
			</div>
			{/* <ImageLink
				name='github stats'
				image='https://github-readme-stats.vercel.app/api?username=mightbesimon&show_icons=true&theme=dracula'
				url='https://github.com/mightbesimon'
			/> */}
		</SimonWrapper>
	)
}

export default HiImSimon;
