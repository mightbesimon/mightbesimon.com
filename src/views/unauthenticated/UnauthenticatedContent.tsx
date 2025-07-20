import { Route } from 'react-location';
import Home from './Home/Home';
import AuthPage from './AuthPage/AuthPage';
import Contact from './Contact/Contact';
import ButtonsPage from './Showcase/ButtonsPage/ButtonsPage';
import FlagsPage from './Showcase/FlagsPage/FlagsPage';
import LoadingPage from './Showcase/LoadingPage/LoadingPage';
import NeonPage from './Showcase/NeonPage/NeonPage';
import Teapot from './StatusCodes/Teapot/Teapot';
import NotFound from './StatusCodes/NotFound/NotFound';

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
		path: '/buttons',
		element: <ButtonsPage />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
	{
		path: '/flags',
		element: <FlagsPage />,
	},
	{
		path: '/loading',
		element: <LoadingPage />,
	},
	{
		path: '/neon',
		element: <NeonPage />,
		hide: true,
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
