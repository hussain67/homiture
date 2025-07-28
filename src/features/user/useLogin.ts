import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "@/services/apiAuth";
import { useAppDispatch } from "@/hooks";
import { loginUser } from "./userSlice";
import { useNavigate } from "react-router-dom";
export function useLogin() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {
		mutate: login,
		error,
		isPending
	} = useMutation({
		mutationFn: loginApi,
		onSuccess: user => {
			console.log(user);
			const userData = { jwt: user.jwt, userName: user.user.username };
			dispatch(loginUser(userData));
			navigate("/");
		}
	});
	return { login, error, isPending };
}
