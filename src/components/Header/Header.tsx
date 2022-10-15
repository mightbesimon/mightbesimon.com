import './Header.scss';
import SimonSvg from 'components/SimonSvg/SimonSvg';
import { useState } from 'react';

type HeaderProps = {
	title?: string,
	image?: JSX.Element,
	neon?: boolean,
}

function Header({ title, image, neon: defaultNeon }: HeaderProps) {
	const [neon, setNeon] = useState(defaultNeon);

	return (
		<header className={neon ? 'neon flex wrap' : 'flex wrap'}
			onClick={() => { setNeon(!neon) }}
		>
			<SimonSvg />
			<h1>{title}</h1>
		</header>
	)
}

export default Header;
