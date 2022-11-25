import { createContext, useEffect, useState } from 'react';

export enum ThemeEnum {
	marianaDark = 'mariana dark',
	marianaLight = 'mariana light',
}

type ThemeContextType = {
	theme: ThemeEnum,
	setTheme: (theme: ThemeEnum) => void,
};

type ThemeProviderProps = {
	children: JSX.Element[] | JSX.Element,
};

export const ThemeContext = createContext<ThemeContextType>(
	{
		theme: ThemeEnum.marianaDark,
		setTheme: () => { },
	}
);

export function ThemeProvider(props: ThemeProviderProps) {
	const tryGetTheme = () => {
		const storedTheme = localStorage.getItem('theme');
		return storedTheme && storedTheme === ThemeEnum.marianaLight ?
			ThemeEnum.marianaLight : ThemeEnum.marianaDark;
	};

	const [theme, setTheme] = useState<ThemeEnum>(tryGetTheme());

	const changeTheme = (newTheme: ThemeEnum) => {
		setTheme(newTheme);
		document.body.className = newTheme;
		localStorage.setItem('theme', newTheme);
	};

	useEffect(() => { changeTheme(theme); });

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme: changeTheme,
			}}
		>
			{props.children}
		</ThemeContext.Provider>
	);
}
