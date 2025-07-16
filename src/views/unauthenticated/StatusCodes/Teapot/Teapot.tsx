import DimensionalButton from 'components/Buttons/DimensionalButton';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import url from 'data/links.json';

function Teapot()
{
	return (
		<SectionWrapper view='Teapot' title='418' game>
			<h1>I'M A TEAPOT <span className='stroke'>🫖</span></h1>
			<p>Can't make coffee, but you can!</p>
			<a className='sponsor button'
				href={url.sponsor}
				target='_blank' rel='noopener noreferrer'
				style={{ margin: '.25rem auto' }}
			>
				<DimensionalButton width='12.5rem' height='2rem'>
					<span className='stroke'>👉</span>
					<span style={{ margin: '0 .5rem' }}>Shout me a coffee</span>
					<span className='stroke'>👈</span>
				</DimensionalButton>
			</a>
		</SectionWrapper>
	);
}

export default Teapot;
