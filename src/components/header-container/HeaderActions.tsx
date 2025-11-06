import { useAppSelector } from "@/hooks";

import CartButton from "../../features/cart/CartButton";
import ThemeButton from "../../features/theme/ThemeButton";
import SignoutButton from "@/features/user/SignoutButton";
import RouteButton from "../buttons/RouteButton";
import { IoIosArrowForward } from "react-icons/io";
function HeaderActions() {
	const userName = useAppSelector(state => state.userState.user?.userName);

	return (
		<section className=" flex gap-2 sm:gap-5  items-center mr-3">
			{userName && (
				<div className="relative group group-hover:bg-background ">
					<h1 className="flex gap-1 items-center mb-1">
						Hello {userName} {<IoIosArrowForward />}
					</h1>
					<p className="hidden absolute group-hover:block group-hover:bg-background px-3 py-1 whitespace-nowrap rounded-md">
						<SignoutButton />
					</p>
				</div>
			)}
			{!userName && (
				<div className="flex gap-2 items-center ">
					<RouteButton
						to="/signin"
						text="Sign in"
						variant="link"
						className="border-none text-md w-14"
					/>
					<span>/</span>
					<RouteButton
						to="/signup"
						text="Sign up"
						variant="link"
						className="border-none text-md w-14"
					/>
				</div>
			)}

			<ThemeButton />
			<CartButton />
		</section>
	);
}

export default HeaderActions;
