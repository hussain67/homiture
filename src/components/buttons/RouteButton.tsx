import { Link } from "react-router-dom";
import { Button } from "./button";

function RouteButton({ to, text, variant, className }: { to: string; text: string; variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "brand"; className?: string }) {
	return (
		<Button
			asChild
			className={className}
			variant={variant}
		>
			<Link to={to}>{text}</Link>
		</Button>
	);
}

export default RouteButton;
