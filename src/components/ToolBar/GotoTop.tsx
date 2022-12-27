import FloatingButton from 'components/Buttons/FloatingButton';

function GotoTop()
{
	return (
		<FloatingButton className="theme"
			onClick={() => window.scrollTo(0, 0)}
			colour={'var(--main)'}
		>
			👆
		</FloatingButton>
	);
}

export default GotoTop;
