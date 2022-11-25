import { useContext } from "react";
import { ThemeContext, ThemeEnum } from "utils/contexts/Theme";

function ThemeButton() {
	const { theme, setTheme } = useContext(ThemeContext);

	const onClick = () => {
		if (theme === ThemeEnum.marianaDark) {
			setTheme(ThemeEnum.marianaLight);
			return;
		}
		if (theme === ThemeEnum.marianaLight) {
			setTheme(ThemeEnum.marianaDark);
			return;
		}
	};

	return (
		<div className="theme button"
			onClick={onClick}
		>
			<div>{theme === ThemeEnum.marianaDark ? '🔦' : '🌛'}</div>
		</div>
	);
}

export default ThemeButton;
