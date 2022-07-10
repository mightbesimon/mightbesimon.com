import './HiImSimon.scss';
import Instagram from 'assets/SocialMedia/instagram.svg';
import Github from 'assets/SocialMedia/github.svg';
import LinkedIn from 'assets/SocialMedia/linkedin.svg';
import NoughtsCrosses from 'components/NoughtsCrosses/NoughtsCrosses';
import ImageLink from 'components/ImageLink';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const socials = [
	{
		name: 'instagram',
		icon: Instagram,
		url: 'https://www.instagram.com/definitely.not_simon',
	},
	{
		name: 'github',
		icon: Github,
		url: 'https://github.com/mightbesimon',
	},
	{
		name: 'LinkedIn',
		icon: LinkedIn,
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
		<>
			<Header />

			<section className='flex column'>
				<div className='hello flex wrap'>
					<div className='left'>
						<h1>Hi, I'm Simon 👋</h1>
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
						icon='https://github-readme-stats.vercel.app/api?username=mightbesimon&show_icons=true&theme=dracula'
						url='https://github.com/mightbesimon'
					/>
				</div>
			</section>

			<section className='flex column'>
				<NoughtsCrosses />
			</section>

			<Footer />
		</>
	)
}

export default HiImSimon;
