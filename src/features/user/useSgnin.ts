import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "@/services/apiAuth";
import { useAppDispatch } from "@/hooks";
import { signinUser } from "./userSlice";
import { useLocation, useNavigate } from "react-router-dom";

//

export function useSignin() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const redirectPath = params.get("redirect") || "/";

	const {
		mutate: signin,
		error,
		isPending
	} = useMutation({
		mutationFn: loginApi,
		onSuccess: user => {
			const userData = { jwt: user.jwt, userName: user.user.username };
			dispatch(signinUser(userData));
			navigate(redirectPath);
		}
	});
	return { signin, error, isPending };
}
