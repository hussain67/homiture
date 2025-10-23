import { useAppSelector } from "@/hooks";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
	const { user } = useAppSelector(state => state.userState);
	const location = window.location;

	if (!user) {
		return (
			<Navigate
				to={`/signin?redirect=${location.pathname}`}
				replace
			/>
		);
	}

	return children;
}

export default ProtectedRoute;
