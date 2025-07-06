import { Link } from 'react-location';
import DimensionalButton from 'components/Buttons/DimensionalButton';
import ColourEnum from 'types/ColourEnums';
import url from 'data/other.json';

export function AuthButton(): JSX.Element
{
	return (
		<Link className='auth button' to='/auth'>
			<DimensionalButton width='8rem' height='2rem' colour={ColourEnum.dark}>
				<span className='auth'>Sign in ??</span>
			</DimensionalButton>
		</Link>
	);
}


export function SponsorButton(): JSX.Element
{
	return (
		<a className='sponsor button'
			href={url.sponsor}
			target='_blank' rel='noopener noreferrer'
		>
			<DimensionalButton width='8rem' height='2rem'>
				<span className='stroke'>👉</span>
				<span style={{ margin: '0 .5rem' }}>Sponsor</span>
				<span className='stroke'>👈</span>
			</DimensionalButton>
		</a >
	);
}

export function CVButton(): JSX.Element
{
	return (
		<a className='cv button'
			href={url.cv}
			target='_blank' rel='noopener noreferrer'
		>
			<DimensionalButton width='8rem' height='2rem' colour={ColourEnum.blue}>
				<span className='stroke'>💼</span>
				<span>&nbsp;Want my CV?</span>
			</DimensionalButton>
		</a>
	);
}
