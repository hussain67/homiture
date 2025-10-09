import PaymentForm from "@/components/PaymentForm";
import ShippingInfoForm from "@/components/ShippingInfoForm";
import { useAppSelector } from "@/hooks";
import { formatAsPound } from "@/utils/formatAsPound";
import { useState } from "react";

import { Navigate } from "react-router-dom";
import CreateOrder from "../orders/CreateOrder";

export type Info = {
	name: string;
	address: string;
};
function ProcessCheckout() {
	const user = useAppSelector(state => state.userState.user);
	const total = useAppSelector(state => state.cartState.orderTotal);

	const [info, setInfo] = useState<Info>({ name: "", address: "" });

	const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

	const isNoInfo = info.name === "" && info.address === "";
	// console.log(info);
	if (!user) {
		return <Navigate to="/logintocheckout" />;
	}
	if (isPaymentSuccessful) {
		return (
			<CreateOrder
				name={info.name}
				address={info.address}
			/>
		);
	}
	return (
		<div className="grid md:grid-cols-2 mx-auto gap-6 md:mt-12">
			<ShippingInfoForm setInfo={setInfo} />
			<div>
				<h1 className="text-center mb-4">Total: {formatAsPound(total)}</h1>
				<PaymentForm
					isNoInfo={isNoInfo}
					setIsPaymentSuccessful={setIsPaymentSuccessful}
				/>
				<h2 className="mt-4">{isNoInfo ? "Please provide shipping info before pay." : ""}</h2>
			</div>
		</div>
	);
}

export default ProcessCheckout;
