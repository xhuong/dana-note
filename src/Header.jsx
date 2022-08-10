import { Link } from "react-router-dom";
import "./Header.css";
import { IoIosSearch } from "react-icons/io";
function Header(props) {
	return (
		<div className="header">
			<div className="header__container">
				<div className="header__content">
					<div className="header__logo">
						<img src={require("./assets/images/logo.png")} alt="" />
						<h4 className="header__title">Dananote</h4>
					</div>
					{props.shop || props.landingPage ? (
						<div className="header__search">
							<form action="" className="header__search-form">
								<input
									type="text"
									placeholder="Tìm kiếm..."
									className="header__search-input"
								/>
								<button className="header__search-btn" type="submit">
									<IoIosSearch />
								</button>
							</form>
						</div>
					) : (
						""
					)}
					<div className="header__action">
						{props.shop ? (
							<ul className="header__list">
								<li className="header__item">
									<Link className="header__item-link">Về Đà Nẵng</Link>
								</li>
								<li className="header__item">
									<Link className="header__item-link">Địa điểm nổi bật</Link>
								</li>
								<li className="header__item">
									<Link className="header__item-link">Lộ trình của tôi</Link>
								</li>
							</ul>
						) : props.landingPage ? (
							<ul className="header__list">
								<li className="header__item">
									<Link className="header__item-link">Về Đà Nẵng</Link>
								</li>
								<li className="header__item">
									<Link className="header__item-link">Địa điểm nổi bật</Link>
								</li>
								<li className="header__item">
									<Link className="header__item-link">Kinh nghiệm du lịch</Link>
								</li>
								<li className="header__item">
									<Link className="header__item-link">Lộ trình của tôi</Link>
								</li>
							</ul>
						) : (
							<ul className="header__list">
								<li className="header__item">
									<Link className="header__item-link">Về chúng tôi</Link>
								</li>
								<li className="header__item">
									<Link className="header__item-link">Tin tức</Link>
								</li>
								<li className="header__item">
									<Link className="header__item-link">Liên hệ</Link>
								</li>
							</ul>
						)}
						<div className="header__language">
							{props.shop ? (
								<img
									style={{ height: "38px", width: "38px" }}
									src={require("./assets/images/profile-picture.png")}
									alt=""
								/>
							) : (
								<img src={require("./assets/images/vietnam.png")} alt="" />
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
