import Carousel from "@/components/carousel/Carousel";
import HeroInfo from "@/components/HeroInfo";
import FeaturedProducts from "@/features/products/featured-products/FeaturedProducts";

function Home() {
	return (
		<main>
			<section className="mx-auto lg:flex lg:gap-10">
				<HeroInfo />
				<div className="hidden lg:block">
					<Carousel />
				</div>
			</section>
			<section>
				<FeaturedProducts />
			</section>
		</main>
	);
}

export default Home;
