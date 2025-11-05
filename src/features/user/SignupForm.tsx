import { useSignup } from "./useSignup";
import type { SignupData } from "@/types/authenticationTypes";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { useAppSelector } from "@/hooks";
import logoDark from "../../assets/logo-dark.png";
import logoLight from "../../assets/logo-light.png";
import { Link } from "react-router-dom";
import useShowComponent from "@/utils/useShowComponent";
import SubmitButton from "@/components/buttons/SubmitButton";

// Style
const inputStyle = "border-slate-400 border-[1px] py-1 px-2 rounded-sm bg-background";
const divStyle = "flex flex-col gap-3";

// Signup component
function SignupForm() {
	const { theme } = useAppSelector(state => state.themeState);
	const { signup, isPending, error } = useSignup();
	const errorMsg = error instanceof AxiosError ? error.response?.data.error.message : "Registration failed";
	const { handleSubmit, register, formState } = useForm<SignupData>();
	const { errors } = formState;
	const animateForm = useShowComponent(false, 100);

	function onSubmit(data: SignupData) {
		signup(data);
	}

	return (
		<section className={`h-screen grid place-content-center  ${!animateForm ? "scale-50 opacity-0" : "scale-100 opacity-100 transition-all duration-1500"}`}>
			<div className="mx-auto mb-6 w-[70px]">
				<Link to="/home">
					<img
						src={theme === "dark" ? logoDark : logoLight}
						alt="Homiture logo"
					/>
				</Link>
			</div>
			<article className="bg-muted w-[400px] sm:w-[500px] rounded-md p-6">
				<h1 className="mb-6 text-3xl text-center">Signup</h1>
				<div className="text-center">{error && <span className="text-red-500 text-md ">{errorMsg}</span>}</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={`${divStyle}`}>
						<label>User Name</label>
						<input
							type="text"
							className={`${inputStyle}`}
							{...register("username", {
								required: "This field is required"
							})}
						/>
						<span className="text-red-400">{errors?.username?.message}</span>
					</div>
					<div className={`${divStyle}`}>
						<label>Email</label>
						<input
							type="email"
							className={`${inputStyle}`}
							{...register("email", {
								required: "This field is required",
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: "Provide a valid email"
								}
							})}
						/>
						<span className="text-red-400">{errors?.email?.message}</span>
					</div>
					<div className={`${divStyle}`}>
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
						text="Register"
						isPending={isPending}
					/>
				</form>
			</article>
		</section>
	);
}

export default SignupForm;
