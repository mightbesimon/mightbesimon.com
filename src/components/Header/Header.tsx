import './Header.scss';
import SimonSvg from 'components/SimonSvg/SimonSvg';
import { useState } from 'react';

function Header() {
	const [lights, setLights] = useState(true);

	return (
		<header className={lights ? 'flex wrap' : 'flex wrap lights-out'}>
			<SimonSvg />
			<h1
				onMouseEnter={() => { setLights(false) }}
				onMouseLeave={() => { setLights(true) }}
			>SIMON</h1>
		</header>
	)
}

export default Header;
