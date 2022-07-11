import { Route } from "react-location";
import AuthPage from "./AuthPage/AuthPage";
import HiImSimon from "./HiImSimon/HiImSimon";
import NotFound from "./NotFound/NotFound";

function UnauthenticatedContent(): Route[] {
	return [
		{
			path: "/",
			element: <HiImSimon />,
		},
		{
			path: "/auth",
			element: <AuthPage />,
		},
		{
			// NotFound must be last in routes array
			element: <NotFound />,
		},
	];
};

export default UnauthenticatedContent;
