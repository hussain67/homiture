import { lazy, Suspense } from "react";
const Carousel = lazy(() => import("@/components/carousel/Carousel"));
import HeroInfo from "@/components/HeroInfo";
import FeaturedProducts from "@/features/products/featured-products/FeaturedProducts";
import Spinner from "@/components/Spinner";

function Home() {
	return (
		<main>
			<section className="mx-auto grid lg:grid-cols-[1fr_auto] lg:gap-10 justify-between">
				<HeroInfo />
				<div className="hidden lg:grid items-center ml-auto">
					<Suspense
						fallback={
							<div className="w-[450px]">
								<Spinner />
							</div>
						}
					>
						<Carousel />
					</Suspense>
				</div>
			</section>
			<section>
				<FeaturedProducts />
			</section>
		</main>
	);
}

export default Home;
