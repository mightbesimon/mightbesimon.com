import './Header.scss';
import SimonSvg from 'components/SimonSvg/SimonSvg';

function Header() {
	return (
		<header className='flex wrap'>
			<SimonSvg />
			<h1>SIMON</h1>
		</header>
	)
}

export default Header;
