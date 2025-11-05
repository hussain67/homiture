import { Button } from "@/components/buttons/button";
import { Link } from "react-router-dom";

function Error({ message = "Something went wrong!!!" }: { message?: string }) {
	return (
		<div className="h-full w-full text-center mt-24 ">
			<h1 className="text-red-500 text-3xl mb-6">{message}</h1>
			<Button className="bg-blue-500 text-lg py-2 px-4 hover:bg-blue-300">
				<Link to="/">Go Back to home page</Link>
			</Button>
		</div>
	);
}

export default Error;
