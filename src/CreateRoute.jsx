import "./CreateRoute.css";

function CreateRoute() {
	return (
		<div className="create-route">
			<div className="create-route__container">
				<div className="create-route__content">
					<h3 className="create-route__heading">Tạo lộ trình cho riêng bạn</h3>
					<ul className="create-route__list">
						<li className="create-route__item">
							<div className="create-route__image-wrapper">
								<img src={require("./assets/images/people.jpg")} alt="" />
							</div>
							<p className="create-route__paraghrap">
								Lên kế hoạch và lịch trình của bạn
							</p>
						</li>
						<li className="create-route__item">
							<div className="create-route__image-wrapper">
								<img src={require("./assets/images/people.jpg")} alt="" />
							</div>
							<p className="create-route__paraghrap">
								Chọn khu vực và lĩnh vực
							</p>
						</li>
						<li className="create-route__item">
							<div className="create-route__image-wrapper">
								<img src={require("./assets/images/people.jpg")} alt="" />
							</div>
							<p className="create-route__paraghrap">
								Chọn điểm đến bạn muốn ghé thăm
							</p>
						</li>
						<li className="create-route__item">
							<div className="create-route__image-wrapper">
								<img src={require("./assets/images/people.jpg")} alt="" />
							</div>
							<p className="create-route__paraghrap">
								Chọn phương tiện bạn muốn di chuyển
							</p>
						</li>
						<li className="create-route__item">
							<div className="create-route__image-wrapper">
								<img src={require("./assets/images/people.jpg")} alt="" />
							</div>
							<p className="create-route__paraghrap">
								Tận hưởng chuyến đi của bạn
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default CreateRoute;
