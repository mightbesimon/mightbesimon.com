import { useState } from "react";
import ThemeEnum from "types/ThemeEnum";

function ThemeButton() {
	const [theme, setTheme] = useState(ThemeEnum.marianaDark);

	const onClick = () => {
		if (theme === ThemeEnum.marianaDark) {
			setTheme(ThemeEnum.marianaLight);
			document.body.className = '';
			document.body.classList.add(...ThemeEnum.marianaLight.split(' '));
		}
		if (theme === ThemeEnum.marianaLight) {
			setTheme(ThemeEnum.marianaDark);
			document.body.className = '';
			document.body.classList.add(...ThemeEnum.marianaDark.split(' '));
		}
	};

	return (
		<div className="theme button"
			onClick={onClick}
		>
			<div>{theme === ThemeEnum.marianaDark ? '☀️' : '🌛'}</div>
		</div>
	)
}

export default ThemeButton;
