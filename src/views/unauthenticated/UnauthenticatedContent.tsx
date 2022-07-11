import { Route } from 'react-location';
import AuthPage from './AuthPage/AuthPage';
import HiImSimon from './HiImSimon/HiImSimon';
import LoadingPage from './LoadingPage/LoadingPage';
import NotFound from './NotFound/NotFound';

const unauthenticatedContent: Route[] = [
	{
		path: '/',
		element: <HiImSimon />,
	},
	{
		path: '/auth',
		element: <AuthPage />,
	},
	{
		path: '/loading',
		element: <LoadingPage />
	},
	{
		// NotFound must be last in routes array
		element: <NotFound />,
	},
];

export default unauthenticatedContent;
