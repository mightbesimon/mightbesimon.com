import { createContext, useEffect, useState } from 'react';

export enum ThemeEnum
{
	marianaDark = 'dark',
	marianaLight = 'light',
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
	const [theme, setTheme] = useState<ThemeEnum>(
		localStorage.getItem('theme') === ThemeEnum.marianaLight
			? ThemeEnum.marianaLight
			: ThemeEnum.marianaDark);

	const changeTheme = (newTheme: ThemeEnum) =>
	{
		const colour = newTheme === ThemeEnum.marianaLight ?
			'hsla(300, 35%, 82%, 100%)' :
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
			value={{ theme, setTheme: changeTheme }}
		>
			{props.children}
		</ThemeContext.Provider>
	);
}
