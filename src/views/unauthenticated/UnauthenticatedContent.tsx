import { Route } from 'react-location';
import AuthPage from './AuthPage/AuthPage';
import HiImSimon from './HiImSimon/HiImSimon';
import LoadingPage from './LoadingPage/LoadingPage';
import NeonPage from './NeonPage/NeonPage';
import NotFound from './NotFound/NotFound';
import Resume from './Resume/Resume';

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
		path: '/resume',
		element: <Resume />,
	},
	{
		path: '/showcase/loading',
		element: <LoadingPage />,
	},
	{
		path: '/showcase/neon',
		element: <NeonPage />,
	},
	{
		// NotFound must be last in routes array
		element: <NotFound />,
	},
];

export default unauthenticatedContent;
