import "./Description.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { AiFillStar, AiOutlineQuestion } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActionPage from "./ActionPage";

function Description() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
	};
	return (
		<div className="description">
			<div className="description__container">
				<div className="description__content">
					<div className="description__breadcrum">
						<Link className="description__breadcrum-link">Ăn uống</Link> &gt;
						<Link className="description__breadcrum-link">Nhà hàng</Link> &gt;
						<Link className="description__breadcrum-link">Dookki</Link>
					</div>
					{/* hero area  */}
					<div className="description__hero">
						{/* image area  */}
						<div className="description__hero__image-wrapper">
							<img
								src={require("./assets/images/description-image.png")}
								alt=""
							/>
						</div>
						{/* content area  */}
						<div className="description__hero-content">
							<h3 className="description__hero-heading">Lẩu Buffet TokkBoki</h3>
							<p className="description__hero-subheading">
								Dookki là chuỗi ẩm thực chuyên về món lẩu, buffet Topokki nổi
								tiếng được thành lập năm 2014 tại Hàn Quốc. Năm 2018, thương
								hiệu này chính thức có mặt tại Việt Nam và đến nay Dookki đã có
								hơn 70 chi nhánh trên toàn quốc.
							</p>
							<p className="description__hero-subheading">
								Dookki theo nghĩa tiếng Việt là “gấp đôi bữa ăn”. Điều này có
								nghĩa, khi đến với Dookki bạn sẽ được phục vụ gấp đôi so với bữa
								ăn bình thường và niềm vui vì thế cũng được nhân đôi.
							</p>
							<Link className="description__hero-viewmore">Xem thêm...</Link>
						</div>
						{/* action area  */}
						<ul className="description__hero-action-list">
							<li className="description__hero-action-item">
								<Link className="description__hero-action-item-link">
									<img src={require("./assets/images/like.png")} alt="" />
								</Link>
							</li>
							<li className="description__hero-action-item">
								<Link className="description__hero-action-item-link">
									<img src={require("./assets/images/map.png")} alt="" />
								</Link>
							</li>
						</ul>
					</div>
					<div className="description__body">
						<div className="description__body-main">
							<div className="description__story">
								<Slider {...settings}>
									<Link className="description__story-card">
										<div className="description__story-card-image-profile-wrapper">
											<img
												src={require("./assets/images/image-story-small.png")}
												alt=""
											/>
										</div>
										<div className="description__story-card-image-story">
											<img
												src={require("./assets/images/image-story-big.png")}
												alt=""
											/>
										</div>
										<h5 className="description__user">Phương Anh</h5>
									</Link>
									<Link className="description__story-card">
										<div className="description__story-card-image-profile-wrapper">
											<img
												src={require("./assets/images/image-story-small.png")}
												alt=""
											/>
										</div>
										<div className="description__story-card-image-story">
											<img
												src={require("./assets/images/image-story-big.png")}
												alt=""
											/>
										</div>
										<h5 className="description__user">Phương Anh</h5>
									</Link>
									<Link className="description__story-card">
										<div className="description__story-card-image-profile-wrapper">
											<img
												src={require("./assets/images/image-story-small.png")}
												alt=""
											/>
										</div>
										<div className="description__story-card-image-story">
											<img
												src={require("./assets/images/image-story-big.png")}
												alt=""
											/>
										</div>
										<h5 className="description__user">Phương Anh</h5>
									</Link>
									<Link className="description__story-card">
										<div className="description__story-card-image-profile-wrapper">
											<img
												src={require("./assets/images/image-story-small.png")}
												alt=""
											/>
										</div>
										<div className="description__story-card-image-story">
											<img
												src={require("./assets/images/image-story-big.png")}
												alt=""
											/>
										</div>
										<h5 className="description__user">Phương Anh</h5>
									</Link>
									<Link className="description__story-card">
										<div className="description__story-card-image-profile-wrapper">
											<img
												src={require("./assets/images/image-story-small.png")}
												alt=""
											/>
										</div>
										<div className="description__story-card-image-story">
											<img
												src={require("./assets/images/image-story-big.png")}
												alt=""
											/>
										</div>
										<h5 className="description__user">Phương Anh</h5>
									</Link>
									<Link className="description__story-card">
										<div className="description__story-card-image-profile-wrapper">
											<img
												src={require("./assets/images/image-story-small.png")}
												alt=""
											/>
										</div>
										<div className="description__story-card-image-story">
											<img
												src={require("./assets/images/image-story-big.png")}
												alt=""
											/>
										</div>
										<h5 className="description__user">Phương Anh</h5>
									</Link>
								</Slider>
							</div>
							<ul className="description__comment-list">
								<li className="description__comment-item">
									<div className="description__comment-author">
										<h6 className="description__comment-user">
											Nguyen Duy Duck
										</h6>
										<p className="description__comment-time">21/07</p>
										<ul className="description__star-list">
											<li className="description__star-item">
												<AiFillStar className="description__star-icon" />
											</li>
											<li className="description__star-item">
												<AiFillStar className="description__star-icon" />
											</li>
											<li className="description__star-item">
												<AiFillStar className="description__star-icon" />
											</li>
											<li className="description__star-item">
												<AiFillStar className="description__star-icon" />
											</li>
											<li className="description__star-item">
												<AiFillStar className="description__star-icon" />
											</li>
										</ul>
									</div>
									<p className="description__comment-content">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Natus similique molestias eius.
									</p>
								</li>
								<li className="description__comment-item">
									<div className="description__comment-author">
										<h6 className="description__comment-user">
											Nguyen Duy Duck
										</h6>
										<p className="description__comment-time">21/07</p>
										<ul className="description__star-list">
											<li className="description__star-item">
												<AiFillStar className="description__star-icon" />
											</li>
											<li className="description__star-item">
												<AiFillStar className="description__star-icon" />
											</li>
											<li className="description__star-item">
												<AiFillStar className="description__star-icon" />
											</li>
											<li className="description__star-item">
												<AiFillStar className="description__star-icon" />
											</li>
											<li className="description__star-item">
												<AiFillStar className="description__star-icon" />
											</li>
										</ul>
									</div>
									<p className="description__comment-content">
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Nesciunt officia repellat omnis accusantium ad recusandae!
									</p>
								</li>
							</ul>
						</div>

						<div className="description__ads">
							<div className="description__ads-image-wrapper">
								<img src={require("./assets/images/ads.png")} alt="" />
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
				color: "red",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				right: "36px",
				backgroundColor: "var(--primary-color)",
				borderRadius: "50%",
				width: "40px",
				height: "40px",
			}}
			onClick={onClick}
		/>
	);
}

export default Description;
