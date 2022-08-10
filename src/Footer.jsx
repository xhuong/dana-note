import "./Footer.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__container">
				<div className="footer__content">
					<ul className="footer__list">
						<li className="footer__item">
							<div className="footer__logo">
								<img src={require("./assets/images/logo.png")} alt="" />
								<h4 className="footer__title">Dananote</h4>
							</div>
						</li>
						<li className="footer__item">
							<ul className="footer__list-info">
								<li className="footer__item-info active">Thông tin</li>
								<li className="footer__item-info">Sự kiện</li>
								<li className="footer__item-info">Tìm kiếm</li>
								<li className="footer__item-info">Hỗ trợ</li>
							</ul>
						</li>
						<li className="footer__item">
							<ul className="footer__list-info">
								<li className="footer__item-info active">Liên hệ</li>
								<li className="footer__item-info">084 0808 6688</li>
								<li className="footer__item-info">dananote.vn@gmail.com</li>
								<li className="footer__item-info">
									dananote.international@gmail.com
								</li>
							</ul>
						</li>
						<li className="footer__item">
							<p className="footer__item-social-title">Theo dõi qua</p>
							<ul className="footer__list-social">
								<li className="footer__item-social">
									<FaInstagram className="footer__social-icon" />
								</li>
								<li className="footer__item-social">
									<AiOutlineYoutube className="footer__social-icon" />
								</li>
								<li className="footer__item-social">
									<IoLogoTiktok className="footer__social-icon" />
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<p className="footer__paraghrap">
				Copyright © 2022 <strong>DanaNote</strong>. All Rights Reserved
			</p>
		</div>
	);
}

export default Footer;
