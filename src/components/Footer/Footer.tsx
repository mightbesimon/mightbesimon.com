import './Footer.scss';
import ImageLink from 'components/Links/ImageLink';
import deployments from 'data/deployments.json';

function Footer()
{
	return (
		<footer className='flex wrap'>
			<div className='deployment flex wrap'>
				{deployments.map(data => ImageLink(data))}
			</div>
			<div className='copyright'>
				Copyright © 2022-2025 <a href='https://mightbesimon.com'>mightbesimon.com</a>
			</div>
		</footer>
	);
}

export default Footer;
