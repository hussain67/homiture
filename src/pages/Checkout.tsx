import { useAppSelector } from "@/hooks";
import { Navigate } from "react-router-dom";

function Checkout() {
	const user = useAppSelector(state => state.userState.user);
	console.log(user);
	if (!user) {
		return <Navigate to="/logintocheckout" />;
	}
	return <div>Checkout!</div>;
}

export default Checkout;
