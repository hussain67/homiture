import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useAppSelector } from "@/hooks";
import ShippingInfoForm from "@/features/checkout/ShippingInfoForm";
import { formatAsPound } from "@/utils/formatAsPound";
import type { ShippingInfo } from "@/features/checkout/CheckoutFlow";
import CheckoutStatus from "./CheckoutStatus";

// Type
type PaymentFormProps = {
	shippingInfo: ShippingInfo;
	setShippingInfo: React.Dispatch<React.SetStateAction<ShippingInfo>>;
	setIsPaymentSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
};

const PaymentForm = ({ shippingInfo, setShippingInfo, setIsPaymentSuccessful }: PaymentFormProps) => {
	const stripe = useStripe();
	const elements = useElements();
	const amount = useAppSelector(state => state.cartState.orderTotal / 100);
	const total = Number(amount.toFixed(2));

	const currentUser = useAppSelector(state => state.userState.user?.userName);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);
	const hasShippingInfo = shippingInfo.name !== "" && shippingInfo.address !== "";

	const paymentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		const cardElement = elements.getElement(CardElement); // ✅ inside
		if (!cardElement) return;
		setIsProcessingPayment(true);
		// Response
		const response = await fetch("/.netlify/functions/create-payment-intent", {
			method: "post",
			headers: {
				"Content-type": "application/json"
			},
			// body: JSON.stringify({ amount: 100 })
			body: JSON.stringify({ amount: total * 100 })
		}).then(res => res.json());

		const {
			paymentIntent: { client_secret }
		} = response;
		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: cardElement,
				billing_details: {
					name: currentUser ? currentUser : "Guest"
				}
			}
		});

		if (paymentResult.error) {
			alert(paymentResult.error.message);
		} else {
			if (paymentResult.paymentIntent.status === "succeeded") {
				setIsProcessingPayment(false);
				setIsPaymentSuccessful(true);
			}
		}
	};

	return (
		<section className="grid md:grid-cols-2 mx-auto max-w-[450px] md:max-w-[900px] gap-6 ">
			<ShippingInfoForm setInfo={setShippingInfo} />
			<div className="relative">
				<h1 className="text-center mb-4">Total: {formatAsPound(total * 100)}</h1>

				<form
					className=" bg-muted   w-full h-[200px]  p-4 "
					onSubmit={paymentHandler}
				>
					<h2 className="mb-8 text-xl text-center">Card payment</h2>
					<div className="border-1 p-1 border-slate-300  mb-8 bg-white">
						{
							<CardElement
								className="w-full"
								options={{
									style: {
										base: {
											fontSize: "16px",

											lineHeight: "24px",
											// color: "#32325d",
											backgroundColor: "white",
											"::placeholder": { fontStyle: "italic" }
										}
									},
									hidePostalCode: true
								}}
							/>
						}
					</div>
					<div className=" text-white">
						<button className={`bg-blue-500 px-3 py-1 w-[50%] flex justify-center rounded-sm cursor-pointer disabled:cursor-not-allowed tracking-wider`}>Submit order</button>
					</div>
				</form>
				<h2 className="mt-4">{hasShippingInfo ? " " : "Please provide shipping info before pay."}</h2>

				{!hasShippingInfo && <div className="absolute inset-0 bg-primary opacity-30 flex items-center justify-center z-1"></div>}
			</div>
			<div>{isProcessingPayment && <CheckoutStatus />}</div>
		</section>
	);
};
export default PaymentForm;
