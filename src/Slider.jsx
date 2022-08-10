import "./Slider.css";

function Slider() {
	return (
		<div className="slider">
			<div className="slider__container">
				<div className="slider__content">
					<div className="slider__introduce">
						<h2 className="slider__title">
							Trải nghiệm Đà Nẵng <br />
							với DanaNote
						</h2>
						<h5 className="slider__subtitle">
							Cộng đồng du lịch hàng đầu Miền trung <br />
							với vô số tiện ích tuyệt vời nhất
						</h5>
						<p className="slider__paraghrap">
							Trở thành thành viên để nhận ngay ưu đãi
						</p>
						<button className="btn btn__primary text-uppercase">
							Đăng kí ngay
						</button>
					</div>
					<ul className="slider__list-image">
						<li className="slider__item-image">
							<img src={require("./assets/images/cau-vang.png")} alt="" />
						</li>
						<li className="slider__item-image">
							<img src={require("./assets/images/khach-san.png")} alt="" />
						</li>
						<li className="slider__item-image">
							<img src={require("./assets/images/ca-chep.png")} alt="" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Slider;
