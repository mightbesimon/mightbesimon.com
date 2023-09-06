import './SponsorButton.scss';
import DimensionalButton from 'components/Buttons/DimensionalButton';

function SponsorButton(): JSX.Element
{
	return (
		<a className='sponsor button'
			href='https://github.com/sponsors/mightbesimon'
			target='_blank' rel='noopener noreferrer'
		>
			<DimensionalButton width='8rem' height='2rem'>
				<span className='stroke'>👉</span>
				<span className='sponsor'>Sponsor</span>
				<span className='stroke'>👈</span>
			</DimensionalButton>
		</a>
	);
}

export default SponsorButton;
