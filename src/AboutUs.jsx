import "./Aboutus.css";

function AboutUs(props) {
	console.log();
	return (
		<div className="aboutus">
			<div className="aboutus__container">
				<div className={"aboutus__content " + (props.reverse ? "reverse" : "")}>
					<div className="aboutus__image-wrapper">
						<img
							src={
								props.reverse
									? require("./assets/images/nha-bap.png")
									: require("./assets/images/cau-rong.png")
							}
							alt=""
						/>
					</div>
					<div className="aboutus__info">
						<h3 className="aboutus__heading">{props.data.title}</h3>
						<p className="aboutus__paraghrap">{props.data.subtitle}</p>
						{props.reverse ? (
							<button className="btn btn__primary text-uppercase">
								Đọc thêm
							</button>
						) : (
							<button className="btn btn__primary text-uppercase">
								Xem thêm
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
