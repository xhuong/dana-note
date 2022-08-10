import "./Counter.css";

function Counter() {
	return (
		<div className="counter">
			<div className="counter__container">
				<div className="counter__content">
					<div className="counter__list">
						<div className="counter__item">
							<h3 className="counter__number">20K+</h3>
							<p className="counter__paraghrap">Người dùng</p>
						</div>
						<div className="counter__item">
							<h3 className="counter__number">100+</h3>
							<p className="counter__paraghrap">Thương hiệu hợp tác</p>
						</div>
						<div className="counter__item">
							<h3 className="counter__number">15K+</h3>
							<p className="counter__paraghrap">Phản hồi tích cực</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Counter;
