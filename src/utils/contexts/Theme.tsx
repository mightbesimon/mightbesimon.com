import { createContext, useEffect, useState } from 'react';

export enum ThemeEnum
{
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

export function ThemeProvider(props: ThemeProviderProps)
{
	const tryGetTheme = () =>
	{
		const storedTheme = localStorage.getItem('theme');
		return storedTheme && storedTheme === ThemeEnum.marianaLight ?
			ThemeEnum.marianaLight : ThemeEnum.marianaDark;
	};

	const [theme, setTheme] = useState<ThemeEnum>(tryGetTheme());

	const changeTheme = (newTheme: ThemeEnum) =>
	{
		const colour = newTheme === ThemeEnum.marianaLight ?
			'hsla(219, 28%, 88%, 100%)' :
			'hsla(215, 15%, 16%, 100%)';

		document.body
			.setAttribute('class', newTheme);

		document.head
			.querySelector(`meta[name='theme-color']`)
			?.setAttribute('content', colour);

		localStorage.setItem('theme', newTheme);

		setTheme(newTheme);
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
