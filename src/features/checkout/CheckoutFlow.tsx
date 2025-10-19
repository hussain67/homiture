import { useState } from "react";
import CreateOrder from "../orders/CreateOrder";
import CreatePayment from "@/features/checkout/CreatePayment";

export type ShippingInfo = {
	name: string;
	address: string;
};
function CheckoutFlow() {
	const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({ name: "", address: "" });
	const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

	return (
		<section className="h-full relative mt-5 md:mt-15">
			{isPaymentSuccessful && (
				<CreateOrder
					name={shippingInfo.name}
					address={shippingInfo.address}
				/>
			)}
			{!isPaymentSuccessful && (
				<CreatePayment
					shippingInfo={shippingInfo}
					setShippingInfo={setShippingInfo}
					setIsPaymentSuccessful={setIsPaymentSuccessful}
				/>
			)}
		</section>
	);
}

export default CheckoutFlow;
