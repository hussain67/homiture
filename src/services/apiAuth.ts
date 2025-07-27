import type { SignupData } from "@/types/authenticationTypes";
import { axiosInstance } from "@/utils/axiosInstance";

export async function signup(data: SignupData) {
	// console.log(data);
	const resp = await axiosInstance.post("/auth/local/register", data);
	console.log(resp.data);
	return resp.data;
}
