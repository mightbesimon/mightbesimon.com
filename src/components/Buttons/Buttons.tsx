import { Link } from 'react-location';
import DimensionalButton from 'components/Buttons/DimensionalButton';
import ColourEnum from 'types/ColourEnums';

export function AuthButton(): JSX.Element
{
	return (
		<Link className='auth button' to='/auth'>
			<DimensionalButton width='8rem' height='2rem' colour={ColourEnum.dark}>
				<span className='auth'>Sign in ?</span>
			</DimensionalButton>
		</Link>
	);
}
