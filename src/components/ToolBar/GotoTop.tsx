import FloatingButton from 'components/Buttons/FloatingButton';

function GotoTop()
{
	return (
		<FloatingButton className="theme"
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			colour={'var(--main)'}
		>
			👆
		</FloatingButton>
	);
}

export default GotoTop;
