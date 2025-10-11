import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useAppSelector } from "@/hooks";
type PaymentFormPropsType = {
	isNoInfo: boolean;
	setIsPaymentSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
};

const PaymentForm = ({ isNoInfo, setIsPaymentSuccessful }: PaymentFormPropsType) => {
	const stripe = useStripe();
	const elements = useElements();
	const amount = useAppSelector(state => state.cartState.orderTotal / 100);
	const total = Number(amount.toFixed(2));
	const currentUser = useAppSelector(state => state.userState.user?.userName);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);

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
		console.log(response);
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
		console.log(paymentResult);
		setIsProcessingPayment(false);
		if (paymentResult.error) {
			alert(paymentResult.error.message);
		} else {
			if (paymentResult.paymentIntent.status === "succeeded") {
				// alert("Payment Successful");
				setIsPaymentSuccessful(true);
			}
		}
	};

	return (
		<section className="relative min-w-[350px] lg:min-w-[400px] max-w-[450px] p-4">
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
								}
							}}
						/>
					}
				</div>
				<div className=" text-white">
					<button
						className={`${isProcessingPayment ? "bg-blue-200" : "bg-blue-500"} px-3 py-1 w-[50%] flex justify-center rounded-sm cursor-pointer disabled:cursor-not-allowed tracking-wider`}
						disabled={isProcessingPayment}
					>
						{isProcessingPayment ? "Processin" : "Submit order"}
					</button>
				</div>
			</form>
			{isNoInfo && <div className="absolute inset-0 bg-primary opacity-30 flex items-center justify-center z-1"></div>}
		</section>
	);
};
export default PaymentForm;
