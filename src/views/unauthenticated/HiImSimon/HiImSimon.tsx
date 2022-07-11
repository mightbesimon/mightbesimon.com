import './HiImSimon.scss';
import { ReactComponent as Instagram } from 'assets/SocialMedia/instagram.svg';
import { ReactComponent as Github } from 'assets/SocialMedia/github.svg';
import { ReactComponent as LinkedIn } from 'assets/SocialMedia/linkedin.svg';
import { SvgLink } from 'components/ImageLink';
import SimonWrapper from 'components/SimonWrapper/SimonWrapper';

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
			{/* <ImageLink
				name='github stats'
				image='https://github-readme-stats.vercel.app/api?username=mightbesimon&show_icons=true&theme=dracula'
				url='https://github.com/mightbesimon'
			/> */}
		</SimonWrapper>
	)
}

export default HiImSimon;
