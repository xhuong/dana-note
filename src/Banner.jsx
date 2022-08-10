import Slider from "react-slick";
import "./Banner.css";
import { Link } from "react-router-dom";
import ActionPage from "./ActionPage";

function Banner() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	const bannerSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<div className="banner">
			<div className="banner__container">
				<div className="banner__content">
					{/* slider area  */}
					<ul className="banner__list">
						<Slider {...settings}>
							<li className="banner__item">
								<Link className="banner__item-link">
									<div className="banner__item-image-wrapper">
										<img
											src={require("../src/assets/images/banner01.png")}
											alt=""
										/>
									</div>
									<div className="banner__item-content">
										<p className="banner__subcontent">
											Trải nghiệm du lịch tại thành phố hiện đại bậc nhất miền
											Trung
										</p>
										<h3 className="banner__title">Đà Nẵng</h3>
									</div>
								</Link>
							</li>
							<li className="banner__item">
								<Link className="banner__item-link">
									<div className="banner__item-image-wrapper">
										<img
											src={require("../src/assets/images/banner01.png")}
											alt=""
										/>
									</div>
									<div className="banner__item-content">
										<p className="banner__subtitle">
											Trải nghiệm du lịch tại thành phố hiện đại bậc nhất miền
											Trung
										</p>
										<h3 className="banner__title">Đà Nẵng</h3>
									</div>
								</Link>
							</li>
							<li className="banner__item">
								<Link className="banner__item-link">
									<div className="banner__item-image-wrapper">
										<img
											src={require("../src/assets/images/banner01.png")}
											alt=""
										/>
									</div>
									<div className="banner__item-content">
										<p className="banner__subcontent">
											Trải nghiệm du lịch tại thành phố hiện đại bậc nhất miền
											Trung
										</p>
										<h3 className="banner__title">Đà Nẵng</h3>
									</div>
								</Link>
							</li>
							<li className="banner__item">
								<Link className="banner__item-link">
									<div className="banner__item-image-wrapper">
										<img
											src={require("../src/assets/images/banner01.png")}
											alt=""
										/>
									</div>
									<div className="banner__item-content">
										<p className="banner__subcontent">
											Trải nghiệm du lịch tại thành phố hiện đại bậc nhất miền
											Trung
										</p>
										<h3 className="banner__title">Đà Nẵng</h3>
									</div>
								</Link>
							</li>
							<li className="banner__item">
								<Link className="banner__item-link">
									<div className="banner__item-image-wrapper">
										<img
											src={require("../src/assets/images/banner01.png")}
											alt=""
										/>
									</div>
									<div className="banner__item-content">
										<p className="banner__subcontent">
											Trải nghiệm du lịch tại thành phố hiện đại bậc nhất miền
											Trung
										</p>
										<h3 className="banner__title">Đà Nẵng</h3>
									</div>
								</Link>
							</li>
						</Slider>
					</ul>
					<div className="banner__body">
						<div className="banner__body-main">
							<div className="banner__story">
								<Slider {...bannerSettings}>
									<Link className="banner__story-card">
										<div className="banner__story-card-image-profile-wrapper">
											<img
												src={require("./assets/images/image-story-small.png")}
												alt=""
											/>
										</div>
										<div className="banner__story-card-image-story">
											<img
												src={require("./assets/images/image-story-big.png")}
												alt=""
											/>
										</div>
										<h5 className="banner__user">Phương Anh</h5>
									</Link>
									<Link className="banner__story-card">
										<div className="banner__story-card-image-profile-wrapper">
											<img
												src={require("./assets/images/image-story-small.png")}
												alt=""
											/>
										</div>
										<div className="banner__story-card-image-story">
											<img
												src={require("./assets/images/image-story-big.png")}
												alt=""
											/>
										</div>
										<h5 className="banner__user">Phương Anh</h5>
									</Link>
									<Link className="banner__story-card">
										<div className="banner__story-card-image-profile-wrapper">
											<img
												src={require("./assets/images/image-story-small.png")}
												alt=""
											/>
										</div>
										<div className="banner__story-card-image-story">
											<img
												src={require("./assets/images/image-story-big.png")}
												alt=""
											/>
										</div>
										<h5 className="banner__user">Phương Anh</h5>
									</Link>
									<Link className="banner__story-card">
										<div className="banner__story-card-image-profile-wrapper">
											<img
												src={require("./assets/images/image-story-small.png")}
												alt=""
											/>
										</div>
										<div className="banner__story-card-image-story">
											<img
												src={require("./assets/images/image-story-big.png")}
												alt=""
											/>
										</div>
										<h5 className="banner__user">Phương Anh</h5>
									</Link>
									<Link className="banner__story-card">
										<div className="banner__story-card-image-profile-wrapper">
											<img
												src={require("./assets/images/image-story-small.png")}
												alt=""
											/>
										</div>
										<div className="banner__story-card-image-story">
											<img
												src={require("./assets/images/image-story-big.png")}
												alt=""
											/>
										</div>
										<h5 className="banner__user">Phương Anh</h5>
									</Link>
									<Link className="banner__story-card">
										<div className="banner__story-card-image-profile-wrapper">
											<img
												src={require("./assets/images/image-story-small.png")}
												alt=""
											/>
										</div>
										<div className="banner__story-card-image-story">
											<img
												src={require("./assets/images/image-story-big.png")}
												alt=""
											/>
										</div>
										<h5 className="banner__user">Phương Anh</h5>
									</Link>
								</Slider>
							</div>
							<div className="banner__news">
								<ul className="banner__news__list">
									<li className="banner__news__item">
										<div className="banner__news__item-image-wrapper">
											<img src={require("./assets/images/news01.png")} alt="" />
										</div>
										<div className="banner__news__item-content">
											<div className="banner__news__item-info">
												<p className="banner__news__item-time">
													1 giờ trước | Nhà tài trợ
												</p>
												<h6 className="banner__news__item-title">
													Khai trương ba nhà hàng lớn tại Vincom Đà Nẵng
												</h6>
											</div>
											<Link className="banner__news__item-link">
												Xem chi tiết
											</Link>
										</div>
									</li>
									<li className="banner__news__item">
										<div className="banner__news__item-image-wrapper">
											<img src={require("./assets/images/news01.png")} alt="" />
										</div>
										<div className="banner__news__item-content">
											<div className="banner__news__item-info">
												<p className="banner__news__item-time">
													1 giờ trước | Nhà tài trợ
												</p>
												<h6 className="banner__news__item-title">
													Khai trương ba nhà hàng lớn tại Vincom Đà Nẵng Lorem
													ipsum dolor sit amet consectetur adipisicing elit.
													Omnis blanditiis pariatur quaerat?
												</h6>
											</div>
											<Link className="banner__news__item-link">
												Xem chi tiết
											</Link>
										</div>
									</li>
									<li className="banner__news__item">
										<div className="banner__news__item-image-wrapper">
											<img src={require("./assets/images/news01.png")} alt="" />
										</div>
										<div className="banner__news__item-content">
											<div className="banner__news__item-info">
												<p className="banner__news__item-time">
													1 giờ trước | Nhà tài trợ
												</p>
												<h6 className="banner__news__item-title">
													Khai trương ba nhà hàng lớn tại Vincom Đà Nẵng
												</h6>
											</div>
											<Link className="banner__news__item-link">
												Xem chi tiết
											</Link>
										</div>
									</li>
									<li className="banner__news__item">
										<div className="banner__news__item-image-wrapper">
											<img src={require("./assets/images/news01.png")} alt="" />
										</div>
										<div className="banner__news__item-content">
											<div className="banner__news__item-info">
												<p className="banner__news__item-time">
													1 giờ trước | Nhà tài trợ
												</p>
												<h6 className="banner__news__item-title">
													Khai trương ba nhà hàng lớn tại Vincom Đà Nẵng
												</h6>
											</div>
											<Link className="banner__news__item-link">
												Xem chi tiết
											</Link>
										</div>
									</li>
								</ul>
							</div>
							<div className="banner__location">
								<div className="banner__grid">
									<div className="banner__grid-item one">
										<img
											src={require("./assets/images/baotang3d.png")}
											alt=""
										/>
									</div>
									<div className="banner__grid-item two">
										<img
											src={require("./assets/images/baotangdongdinh.png")}
											alt=""
										/>
									</div>
									<div className="banner__grid-item three">
										<img
											src={require("./assets/images/cautinhyeu.png")}
											alt=""
										/>
									</div>
									<div className="banner__grid-item four">
										<img src={require("./assets/images/bairang.png")} alt="" />
									</div>
									<div className="banner__grid-item five">
										<img src={require("./assets/images/baidareu.png")} alt="" />
									</div>
								</div>
							</div>
						</div>

						<div className="banner__ads">
							<div className="banner__ads-image-wrapper">
								<img src={require("./assets/images/ads_bana.png")} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<ActionPage />
		</div>
	);
}

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				width: "40px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "40px",
				borderRadius: "50%",
				background: "var(--primary-color)",
				color: "var(--primary-color)",
			}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				width: "40px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "40px",
				borderRadius: "50%",
				background: "var(--primary-color)",
				color: "var(--primary-color) !important",
				zIndex: 1,
			}}
			onClick={onClick}
		/>
	);
}

export default Banner;
