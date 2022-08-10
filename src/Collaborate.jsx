import "./Collaborate.css";

function Collaborate() {
	return (
		<div className="collaborate">
			<div className="collaborate__container">
				<div className="collaborate__content">
					<h3 className="collaborate__heading">Đơn vị hợp tác</h3>
					<ul className="collaborate__list">
						<li className="collaborate__item">
							<div className="collaborate__image-wrapper">
								<img src={require("./assets/images/gmit.png")} alt="" />
							</div>
						</li>
						<li className="collaborate__item">
							<div className="collaborate__image-wrapper">
								<img src={require("./assets/images/19-train.png")} alt="" />
							</div>
						</li>
						<li className="collaborate__item">
							<div className="collaborate__image-wrapper">
								<img src={require("./assets/images/hackathon.png")} alt="" />
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Collaborate;
