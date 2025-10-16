import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { imageList } from "./imageList";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

function Carousel() {
	const settings = {
		// dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "linear",
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		pauseOnHover: true, // pause when user hovers
		pauseOnFocus: true
	};
	return (
		<div className="mx-auto mt-5 w-full max-w-[450px] h-[300px]">
			<Slider {...settings}>
				{imageList.map((person, i) => (
					<article
						key={i}
						className="flex-shrink-0 w-full h-full"
					>
						<img
							src={person}
							alt={"Image1"}
							className="w-[500px] h-[300px] object-cover  border border-gray-300"
						/>
					</article>
				))}
			</Slider>
		</div>
	);
}

export default Carousel;
