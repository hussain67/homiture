import Carousel from "@/components/carousel/Carousel";
import HeroInfo from "@/components/HeroInfo";

function Home() {
	return (
		<section className="mx-auto lg:flex lg:gap-15">
			<HeroInfo />
			<div className="hidden lg:block">
				<Carousel />
			</div>
		</section>
	);
}

export default Home;
