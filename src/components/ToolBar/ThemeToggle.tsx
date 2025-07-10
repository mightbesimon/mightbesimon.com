import FloatingButton from 'components/Buttons/FloatingButton';
import { ThemeContext, ThemeEnum } from "utils/contexts/Theme";
import { useContext } from "react";

function ThemeToggle()
{
	const { theme, setTheme } = useContext(ThemeContext);

	const onClick = () =>
	{
		setTheme(theme === ThemeEnum.dark
			? ThemeEnum.light
			: ThemeEnum.dark);
	};

	return (
		<FloatingButton className="theme"
			onClick={onClick}
			colour={theme === ThemeEnum.dark ?
				'var(--yellow)' : 'var(--blue1)'
			}
		>
			{theme === ThemeEnum.dark ? '🔦' : '🌛'}
		</FloatingButton>
	);
}

export default ThemeToggle;
