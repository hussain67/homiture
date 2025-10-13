import type { SigninData, SignupData } from "@/types/authenticationTypes";
import { axiosInstance } from "@/utils/axiosInstance";

export async function signup(data: SignupData) {
	const resp = await axiosInstance.post("/auth/local/register", data);
	return resp.data;
}

export async function signin(data: SigninData) {
	const resp = await axiosInstance.post("/auth/local", {
		identifier: data?.email,
		password: data?.password
	});
	return resp.data;
}
