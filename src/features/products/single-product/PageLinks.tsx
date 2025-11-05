import { Button } from "@/components/buttons/button";
import { Link } from "react-router-dom";

function PageLinks() {
	return (
		<section className="mb-4">
			<Button variant="link">
				<Link to="/">Home</Link>
			</Button>
			<Button variant="link">
				<Link to="/products">Products</Link>
			</Button>
		</section>
	);
}

export default PageLinks;
