import './Footer.scss';
import deployments from 'utils/data/deployments.json';
import ImageLink from 'components/ImageLink';

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
