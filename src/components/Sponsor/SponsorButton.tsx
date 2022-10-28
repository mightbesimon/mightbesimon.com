import './SponsorButton.scss';

// function SponsorButton(): JSX.Element {
// 	return (
// 		<a className='sponsor button' href='https://github.com/sponsors/mightbesimon'>
// 			♥️ <span>Sponsor</span>
// 		</a>
// 	);
// }

function SponsorButton(): JSX.Element {
	return (
		<div className='sponsor button'>
			<a href='https://github.com/sponsors/mightbesimon'>
				<div>
					♥️ <span>Sponsor</span>
				</div>
			</a>
		</div>
	);
}

export default SponsorButton;
