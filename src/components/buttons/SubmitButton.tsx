import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "./button";

function SubmitButton({ text, isPending }: { text: string; isPending: boolean }) {
	return (
		<Button className="w-full bg-blue-500 text-white hover:bg-blue-400 tracking-wider">
			{isPending && (
				<span className="flex">
					<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
					Submitting....
				</span>
			)}
			{!isPending && text}
		</Button>
	);
}

export default SubmitButton;
