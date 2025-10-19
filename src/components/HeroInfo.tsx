import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function HeroInfo() {
	return (
		<section className="mb-10 lg:p-3">
			<h1 className="text-3xl mb-4">Style your space with ease</h1>
			<p className="mb-2">Transform your home into a haven with beautifully curated décor, furniture, and everyday essentials. Whether you're refreshing a room or designing from scratch, we make it simple to find pieces that match your taste and lifestyle.</p>
			<p className="mb-2">From cozy textures to sleek modern lines, our collections are designed to inspire and make styling effortless. Explore timeless accents, trend-forward finds, and functional pieces that feel as good as they look.</p>
			<p className="font-semibold mb-2 text-lg">Your dream space is just a few clicks away.</p>
			<Button
				asChild
				className="bg-blue-500 text-white mt-4"
			>
				<Link to="/products">Our Products</Link>
			</Button>
		</section>
	);
}

export default HeroInfo;
