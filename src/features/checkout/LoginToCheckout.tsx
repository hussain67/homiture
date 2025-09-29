import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function LoginToCheckout() {
	const [showMessage, setShowMessage] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setShowMessage(false);
		}, 1500);
	});

	if (showMessage) {
		return <h1 className="grid mt-10 place-content-center text-2xl">You must be logged in to checkout</h1>;
	}
	return <Navigate to="/signin" />;
}

export default LoginToCheckout;
