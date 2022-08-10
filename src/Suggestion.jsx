import "./Suggestion.css";
import Slider from "react-slick";
import { dataSuggestion } from "./dataSuggestion";
// import slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Suggestion() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};
	return (
		<div className="suggestion">
			<div className="suggestion__container">
				<div className={"suggestion__content"}>
					<h3 className="suggestion__heading">Gợi ý dành cho bạn</h3>
					<Slider {...settings}>
						<div className="suggestion__card" style={{ margin: "20px" }}>
							<img src={require("./assets/images/suggestion1.png")} alt="" />
							<p className="suggestion__card-title">
								Những Khách sạn sang xịn nhất
							</p>
						</div>
						<div className="suggestion__card" style={{ margin: "20px" }}>
							<img src={require("./assets/images/suggestion2.png")} alt="" />
							<p className="suggestion__card-title">Buffer ngon nhất</p>
						</div>
						<div className="suggestion__card" style={{ margin: "20px" }}>
							<img src={require("./assets/images/suggestion3.png")} alt="" />
							<p className="suggestion__card-title">Khu vui chơi hot nhất</p>
						</div>
						<div className="suggestion__card" style={{ margin: "20px" }}>
							<img src={require("./assets/images/suggestion1.png")} alt="" />
							<p className="suggestion__card-title">
								Những Khách sạn sang xịn nhất
							</p>
						</div>
						<div className="suggestion__card" style={{ margin: "20px" }}>
							<img src={require("./assets/images/suggestion2.png")} alt="" />
							<p className="suggestion__card-title">Buffer ngon nhất</p>
						</div>
						<div className="suggestion__card" style={{ margin: "20px" }}>
							<img src={require("./assets/images/suggestion3.png")} alt="" />
							<p className="suggestion__card-title">Khu vui chơi hot nhất</p>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
}

export default Suggestion;
