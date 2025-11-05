import { useAppSelector } from "@/hooks";

import CartButton from "../../features/cart/CartButton";
import ThemeButton from "../../features/theme/ThemeButton";
import SignoutButton from "@/features/user/SignoutButton";
import RouteButton from "../buttons/RouteButton";

function HeaderActions() {
	const userName = useAppSelector(state => state.userState.user?.userName);

	return (
		<section className=" flex gap-5  items-center mr-3">
			{userName && (
				<div className="flex gap-5 capitalize">
					<span className="block h-9 py-2 px-4 text-lg">Hello {userName} </span>

					<SignoutButton />
				</div>
			)}
			{!userName && (
				<div className="flex gap-3 ">
					<RouteButton
						to="/signin"
						text="Sign in"
						variant="outline"
						className="border-none text-lg"
					/>

					<RouteButton
						to="/signup"
						text="Sign up"
						variant="outline"
						className="border-none text-lg"
					/>
				</div>
			)}

			<ThemeButton />
			<CartButton />
		</section>
	);
}

export default HeaderActions;
