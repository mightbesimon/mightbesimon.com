import './Footer.scss';
import ImageLink from 'components/ImageLink';
import deployments from 'data/deployments.json';

function Footer() {
	return (
		<footer className='flex wrap'>
			<div className='deployment flex wrap'>
				{deployments.map(data => ImageLink(data))}
			</div>
			<div className='copyright'>
				Copyright © 2022 <a href='https://mightbesimon.com'>mightbesimon.com</a>
			</div>
		</footer>
	)
}

export default Footer;
