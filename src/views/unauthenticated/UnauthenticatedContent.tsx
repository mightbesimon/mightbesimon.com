import { Route } from 'react-location';
import AuthPage from './AuthPage/AuthPage';
import Home from './Home/Home';
import LoadingPage from './LoadingPage/LoadingPage';
import NeonPage from './NeonPage/NeonPage';
import NotFound from './NotFound/NotFound';
import Resume from './Resume/Resume';
import Teapot from './Teapot/Teapot';

export type HidableRoute = Route & {
	hide?: boolean,
};

const unauthenticatedContent: HidableRoute[] = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/auth',
		element: <AuthPage />,
	},
	{
		path: '/resume',
		hide: true,
		element: <Resume />,
	},
	{
		path: '/cv',
		hide: true,
		element: <Resume />,
	},
	// {
	// 	path: '/showcase',
	// 	children: [
	// 		{
	// 			path: '/',
	// 			element: <></>,
	// 		},
	// 		{
	// 			path: '/loading',
	// 			element: <LoadingPage />,
	// 		},
	// 		{
	// 			path: '/neon',
	// 			element: <NeonPage />,
	// 		},
	// 	],
	// },
	{
		path: '/loading',
		element: <LoadingPage />,
	},
	{
		path: '/neon',
		element: <NeonPage />,
	},
	{
		path: '/coffee',
		element: <Teapot />,
	},
	{
		// NotFound must be last in routes array
		element: <NotFound />,
	},
];

export default unauthenticatedContent;
