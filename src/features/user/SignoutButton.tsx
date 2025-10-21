import { useAppDispatch } from "@/hooks";
import { Navigate } from "react-router-dom";
import { signoutUser } from "./userSlice";

function Signout() {
	const dispatch = useAppDispatch();
	function handleClick() {
		dispatch(signoutUser());
		return <Navigate to={"/"} />;
	}
	return (
		<button
			className="cursor-pointer"
			onClick={handleClick}
		>
			Signout
		</button>
	);
}

export default Signout;
