import DimensionalButton from 'components/Buttons/DimensionalButton';
import './SponsorButton.scss';

function SponsorButton(): JSX.Element
{
	return (
		<a className='sponsor button' href='https://github.com/sponsors/mightbesimon'>
			<DimensionalButton
				height='2rem'
			>
				<>
					<span className='stroke'>👉</span>
					<span className='sponsor'>Sponsor</span>
					<span className='stroke'>👈</span>
				</>
			</DimensionalButton>
		</a>
	);
}

export default SponsorButton;
