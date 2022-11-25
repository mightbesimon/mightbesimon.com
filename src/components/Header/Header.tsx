import './Header.scss';
import { useState } from 'react';

type HeaderProps = {
	title?: string,
	image?: JSX.Element,
	neon?: boolean,
	height?: string,
};

function Header({ title, image, neon: defaultNeon, height }: HeaderProps) {
	const [neon, setNeon] = useState(defaultNeon);

	if (height && window.innerHeight < 750)
		height = undefined;

	return (
		<header className={neon ? 'neon flex wrap' : 'flex wrap'}
			onClick={() => { setNeon(!neon); }}
			style={{ height }}
		>
			{image}
			<h1>{title}</h1>
		</header>
	);
}

export default Header;
