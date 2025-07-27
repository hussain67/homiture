import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "@/services/apiAuth";
import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "@/hooks";

export function useSignup() {
	const navigate = useNavigate();
	// const dispatch = useAppDispatch();
	const {
		mutate: signup,
		isPending,
		error
	} = useMutation({
		mutationFn: signupApi,
		onSuccess: () => {
			navigate("/login");
		}
	});
	return { signup, isPending, error };
}
