import { useAppDispatch } from "@/hooks";
import { Navigate } from "react-router-dom";
import { signoutUser } from "./userSlice";

function Signout() {
	const dispatch = useAppDispatch();
	dispatch(signoutUser());
	return <Navigate to={"/"} />;
}

export default Signout;
