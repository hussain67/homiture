import SubmitButton from "@/components/SubmitButton";
import type { LoginData } from "@/types/authenticationTypes";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { useLogin } from "./useLogin";
import logoLight from "./logo-light.png";
import logoDark from "./logo-dark.png";

import { useAppSelector } from "@/hooks";
import { Link } from "react-router-dom";

// Style
const inputStyle = "border-slate-400 border-[1px] py-1 px-2 rounded-sm bg-background";
const divStyle = "flex flex-col gap-3";

// Signup component
function LoginUser() {
	const { theme } = useAppSelector(state => state.themeState);
	const { login, isPending, error } = useLogin();
	const errorMsg = error instanceof AxiosError ? "Invalid Email or Password" : "Login failed";

	const { handleSubmit, register, formState } = useForm<LoginData>();
	const { errors } = formState;

	function onSubmit(data: LoginData) {
		login(data);
	}

	return (
		<section className=" h-screen grid place-content-center">
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
						text="Signin"
						className="w-full"
						isPending={isPending}
					/>
				</form>
			</article>
		</section>
	);
}

export default LoginUser;
