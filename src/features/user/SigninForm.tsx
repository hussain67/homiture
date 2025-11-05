import { Link } from "react-router-dom";
import type { SigninData } from "@/types/authenticationTypes";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { useSignin } from "./useSgnin";

import logoDark from "../../assets/logo-dark.png";
import logoLight from "../../assets/logo-light.png";
import { useAppSelector } from "@/hooks";
import useShowComponent from "@/utils/useShowComponent";
import SubmitButton from "@/components/buttons/SubmitButton";

// Style
const inputStyle = "border-slate-400 border-[1px] py-1 px-2 rounded-sm bg-background";
const divStyle = "flex flex-col gap-3 mb-2";

// Signup component
function SigninForm() {
	const { theme } = useAppSelector(state => state.themeState);
	const { signin, isPending, error } = useSignin();
	const errorMsg = error instanceof AxiosError ? "Invalid Email or Password" : "Signin failed";

	const { handleSubmit, register, formState } = useForm<SigninData>();
	const { errors } = formState;

	// For Animation
	const animateForm = useShowComponent(false, 200);

	// Function onSubmit
	function onSubmit(data: SigninData) {
		signin(data);
	}

	return (
		<section className={` grid h-full place-content-center transition-all duration-1500 ${!animateForm ? "scale-50 opacity-5" : "scale-100 opacity-100 "} `}>
			<div className="mx-auto mb-6 w-[70px]">
				<Link to="/">
					<img
						src={theme === "dark" ? logoDark : logoLight}
						alt="Homiture logo"
					/>
				</Link>
			</div>
			<article className="bg-muted w-[400px] sm:w-[500px] rounded-md p-6">
				<h1 className="mb-5 text-3xl text-center"> Signin</h1>
				<div className="text-center">{error && <span className="text-red-500 text-md ">{errorMsg}</span>}</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={`${divStyle}`}>
						<label>Email</label>
						<input
							type="email"
							className={`${inputStyle}`}
							{...register("email", {
								required: "This field is required",
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: "Enter a valid email"
								}
							})}
						/>
						<span className="text-red-400">{errors?.email?.message}</span>
					</div>
					<div className={`${divStyle} mb-3`}>
						<label>Password</label>
						<input
							type="password"
							className={`${inputStyle}`}
							{...register("password", {
								required: "This field is required",
								minLength: {
									value: 6,
									message: "Password needs a minimum of 6 characters "
								}
							})}
						/>
						<span className="text-red-400">{errors?.password?.message}</span>
					</div>
					<SubmitButton
						text="Sign in"
						isPending={isPending}
					/>
				</form>
			</article>
		</section>
	);
}

export default SigninForm;
