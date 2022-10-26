import './SponsorButton.scss';

function SponsorButton(): JSX.Element {
	return (
		<a className='sponsor button' href='https://github.com/sponsors/mightbesimon'>
			♥️ <span>Sponsor</span>
		</a>
	);
}

export default SponsorButton;
