// import { useContext } from "react";
import { Outlet, ReactLocation, Router, Navigate } from "react-location";
import unauthenticatedContent from "./unauthenticated/UnauthenticatedContent";
import authenticatedContent from "./unauthenticated/UnauthenticatedContent";

const location = new ReactLocation();

type AuthCheckProps = {
	authenticationRequired: boolean;
};

const ContentRouter = () => {
	// const { authenticated } = useContext(AuthContext);
	const authenticated = false;

	const AuthCheck = ({ authenticationRequired }: AuthCheckProps) => {
		return !authenticationRequired || authenticated ?
			<Outlet /> : <Navigate to="/auth" replace={true} />
	};

	return (
		<Router
			location={location}
			routes={[
				{
					path: "/user",
					element: <AuthCheck authenticationRequired={true} />,
					children: authenticatedContent(),
				},
				{
					element: <AuthCheck authenticationRequired={false} />,
					children: unauthenticatedContent(),
				},
			]}
		>
			<Outlet />
		</Router>
	);
};

export default ContentRouter;
