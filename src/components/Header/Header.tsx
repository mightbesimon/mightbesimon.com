import './Header.scss';
import { ReactComponent as Simon } from 'assets/simon.svg';
import { SvgLink } from "components/ImageLink";

function Header() {
	return (
		<header className='flex wrap'>
			<SvgLink
				name='simon'
				svg={Simon}
				url='https://github.com/mightbesimon'
			/>
			<h1>SIMON</h1>
		</header>
	)
}

export default Header;
