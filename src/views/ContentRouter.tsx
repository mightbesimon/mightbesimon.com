// import { useContext } from 'react';
import { Outlet, ReactLocation, Router, Navigate } from 'react-location';
import unauthenticatedContent from './unauthenticated/UnauthenticatedContent';
import authenticatedContent from './authenticated/AuthenticatedContent';

const location = new ReactLocation();

type AuthCheckProps = {
	authenticationRequired: boolean;
};

const ContentRouter = () =>
{
	// const { authenticated } = useContext(AuthContext);
	const authenticated = false;

	const AuthCheck = ({ authenticationRequired }: AuthCheckProps) =>
	{
		return !authenticationRequired || authenticated ?
			<Outlet /> : <Navigate to='/auth' replace={true} />;
	};

	return (
		<Router
			location={location}
			routes={[
				{
					path: '',
					element: <AuthCheck authenticationRequired={false} />,
					children: unauthenticatedContent,
				},
				{
					path: '/user',
					element: <AuthCheck authenticationRequired={true} />,
					children: authenticatedContent,
				},
			]}
		>
			<Outlet />
		</Router>
	);
};

export default ContentRouter;
