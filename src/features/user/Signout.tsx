import { useAppDispatch } from "@/hooks";
import { Navigate } from "react-router-dom";
import { signoutUser } from "./userSlice";
import { useEffect } from "react";
function Signout() {
	console.log(location.pathname);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(signoutUser());
	}, [dispatch]);
	return <Navigate to="/" />;
}

export default Signout;
