import { useMutation } from "@tanstack/react-query";
import { signin as signinApi } from "@/services/apiAuth";
import { useAppDispatch } from "@/hooks";
import { signinUser } from "./userSlice";
import { useLocation, useNavigate } from "react-router-dom";

export function useSignin() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const redirectPath = params.get("redirect") || "/home";

	const {
		mutate: signin,
		error,
		isPending
	} = useMutation({
		mutationFn: signinApi,
		onSuccess: user => {
			const userData = { jwt: user.jwt, userName: user.user.username };
			dispatch(signinUser(userData));

			navigate(redirectPath, { replace: true });
		}
	});
	return { signin, error, isPending };
}
