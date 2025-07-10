import FloatingButton from 'components/Buttons/FloatingButton';
import { useEffect, useState } from 'react';

function GotoTop()
{
	const [scroll, setScroll] = useState(0);
	useEffect(() =>
	{
		const handleScroll = () =>
		{
			setScroll(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<FloatingButton className="theme"
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			colour={`color-mix(in hsl, var(--body), var(--footer) ${Math.min(100, scroll / 10)}%)`}
		>
			👆
		</FloatingButton>
	);
}

export default GotoTop;
