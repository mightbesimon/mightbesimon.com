import { Route } from 'react-location';
import Home from './Home/Home';
import AuthPage from './AuthPage/AuthPage';
import LoadingPage from './Showcase/LoadingPage/LoadingPage';
import NeonPage from './Showcase/NeonPage/NeonPage';
import FlagsPage from './Showcase/FlagsPage/FlagsPage';
import NotFound from './StatusCodes/NotFound/NotFound';
import Teapot from './StatusCodes/Teapot/Teapot';
import ButtonsPage from './Showcase/ButtonsPage/ButtonsPage';

type HidableRoute = Route & {
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
		path: '/loading',
		element: <LoadingPage />,
	},
	{
		path: '/neon',
		element: <NeonPage />,
	},
	{
		path: '/flags',
		element: <FlagsPage />,
	},
	{
		path: '/buttons',
		element: <ButtonsPage />,
	},
	{
		path: '/coffee',
		element: <Teapot />,
	},
	{
		path: '/teapot',
		element: <Teapot />,
	},
	{
		// NotFound must be last in routes array
		element: <NotFound />,
	},
];

export default unauthenticatedContent;
