import FloatingButton from 'components/Buttons/FloatingButton';
import { useContext } from "react";
import { ThemeContext, ThemeEnum } from "utils/contexts/Theme";

function ThemeButton()
{
	const { theme, setTheme } = useContext(ThemeContext);

	const onClick = () =>
	{
		if (theme === ThemeEnum.marianaDark)
		{
			setTheme(ThemeEnum.marianaLight);
			return;
		}
		if (theme === ThemeEnum.marianaLight)
		{
			setTheme(ThemeEnum.marianaDark);
			return;
		}
	};

	return (
		<FloatingButton className="theme"
			onClick={onClick}
			colour={'var(--text)'}
		>
			{theme === ThemeEnum.marianaDark ? '🔦' : '🌛'}
		</FloatingButton>
	);
}

export default ThemeButton;
