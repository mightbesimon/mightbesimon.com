import './Footer.scss';
import ImageLink from "components/ImageLink";

const deployments = [
	{
		name: 'development',
		icon: 'https://github.com/mightbesimon/mightbesimon.com/actions/workflows/deploy-development.yml/badge.svg',
		url: 'https://github.com/mightbesimon/mightbesimon.com/actions/workflows/deploy-development.yml',
	},
	{
		name: 'production',
		icon: 'https://github.com/mightbesimon/mightbesimon.com/actions/workflows/deploy-production.yml/badge.svg',
		url: 'https://github.com/mightbesimon/mightbesimon.com/actions/workflows/deploy-production.yml',
	},
];

function Footer() {
	return (
		<footer className='flex wrap'>
			<div className='deployment flex wrap'>
				{
					deployments.map(data => ImageLink(data))
				}
			</div>
			<div className='copyright'>
				Copyright © 2022 <a href='https://mightbesimon.com'>mightbesimon.com</a>
			</div>
		</footer>
	)
}

export default Footer;
