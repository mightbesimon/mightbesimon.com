import FloatingButton from 'components/Buttons/FloatingButton';
import { useEffect, useState } from 'react';

function ScrollTop()
{
	const [position, setPosition] = useState(0);

	useEffect(() =>
	{
		const handleScroll = () => setPosition(window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	return (
		<FloatingButton
			className={position > 500 ? 'scroll top show' : 'scroll top'}
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			colour={'var(--footer'}
		>
			👆
		</FloatingButton>
	);
}

export default ScrollTop;
