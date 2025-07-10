import FloatingButton from 'components/Buttons/FloatingButton';
import { ThemeContext, ThemeEnum } from "utils/contexts/Theme";
import { useContext } from "react";

function ThemeToggle()
{
	const { theme, setTheme } = useContext(ThemeContext);

	const onClick = () =>
	{
		setTheme(theme === ThemeEnum.marianaDark
			? ThemeEnum.marianaLight
			: ThemeEnum.marianaDark);
	};

	return (
		<FloatingButton className="theme"
			onClick={onClick}
			colour={theme === ThemeEnum.marianaDark ?
				'var(--yellow)' : 'var(--blue1)'
			}
		>
			{theme === ThemeEnum.marianaDark ? '🔦' : '🌛'}
		</FloatingButton>
	);
}

export default ThemeToggle;
