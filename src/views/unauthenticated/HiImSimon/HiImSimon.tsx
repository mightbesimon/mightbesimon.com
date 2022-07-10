import './HiImSimon.css';
import Simon from 'assets/simon.png';
import NoughtsCrosses from 'components/NoughtsCrosses/NoughtsCrosses';

const socials = [
	{
		name: 'instagram',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/24px-Instagram_logo_2016.svg.png',
		url: 'https://www.instagram.com/definitely.not_simon',
	},
];

function HiImSimon(): JSX.Element {
	const languages = `🇳🇿 Kia ora,
🇩🇪 Hallo, ich heiße Simon 😎
🇫🇷 Salut, moi c'est Simon 😏
🇮🇪 Dia duit, is mise Simon 😙
🇨🇳 嗨, 我叫单泉`;

	return (
		<main className='flex column'>
			<header className='flex wrap'>
				<a href='https://mightbesimon.com'>
					<img src={Simon} alt='simon' />
				</a>
				<h1>SIMON</h1>
			</header>


			<section className='flex column'>
				<div className='hello flex wrap'>
					<div className='left'>
						<h1>Hi, I'm Simon 👋</h1>
						<pre>{languages}</pre>

						<div className='flex wrap'>
							<p>Auckland, NZ 🛫 San Jose, CA</p>
							<div className='flex wrap'>
								{
									socials.map(data =>
										<a href={data.url} key={data.name}>
											<img alt={data.name} src={data.icon} />
										</a>
									)
								}
							</div>
						</div>
					</div>
					<a href='https://github.com/mightbesimon'>
						<img alt='github stats' src='https://github-readme-stats.vercel.app/api?username=mightbesimon&show_icons=true&theme=dracula' />
					</a>
				</div>
				<NoughtsCrosses />
			</section>


			<footer>
				Copyright © 2022 <a href='https://mightbesimon.com'>mightbesimon.com</a>
			</footer>
		</main>
	)
}

export default HiImSimon;
