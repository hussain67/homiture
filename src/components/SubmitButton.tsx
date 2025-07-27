import { Button } from "./ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
function SubmitButton({ text, className, isPending }: { text: string; className: string; isPending: boolean }) {
	return (
		<Button className={className}>
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
