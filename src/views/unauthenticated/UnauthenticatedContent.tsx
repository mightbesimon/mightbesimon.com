import { Route } from "react-location";
import HiImSimon from "./HiImSimon/HiImSimon";
import NotFound from "./NotFound/NotFound";

function UnauthenticatedContent(): Route[] {
	return [
		{
			path: "/",
			element: <HiImSimon />,
		},
		{
			// NotFound must be last in routes array
			element: <NotFound />,
		},
	];
};

export default UnauthenticatedContent;
