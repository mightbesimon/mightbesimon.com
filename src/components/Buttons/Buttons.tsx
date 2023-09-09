import { Link } from 'react-location';
import DimensionalButton from 'components/Buttons/DimensionalButton';
import ColourEnum from 'types/ColourEnums';

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

export function CVButton(): JSX.Element
{
	return (
		<a className='cv button'
			href='https://docs.google.com/document/d/1j9Ao758OLEx3xW7ADl4ITOiEEWZO5TCxVsSr4s7WyOE/edit?usp=sharing'
			target='_blank' rel='noopener noreferrer'
		>
			<DimensionalButton width='8rem' height='2rem' colour={ColourEnum.blue}>
				<span className='stroke'>💼</span>
				<span className='cv'>&nbsp;Want my CV?</span>
			</DimensionalButton>
		</a>
	);
}
