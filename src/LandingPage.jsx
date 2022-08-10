import AboutUs from "./AboutUs";
import Collaborate from "./Collaborate";
import Counter from "./Counter";
import CreateRoute from "./CreateRoute";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "./Slider";
import Suggestion from "./Suggestion";

function LandingPage() {
	const dataAboutUs = [
		{
			title: "Về chúng tôi",
			subtitle:
				"Những người trẻ đầy nhiệt huyết đến từ các tỉnh miền Trung, với niềm đam mê sáng tạo kết hợp tình yêu quê hương tạo ra Dananote - Trang web hỗ trợ người du lịch đến với Thành phố Đà Nẵng, với sứ mệnh giúp nâng tầm du lịch Đà nẵng nói riêng và tương lai là cả miền Trung Việt Nam.",
		},
		{
			title: "Về Đà Nẵng",
			subtitle:
				"Với vị trí là một trong ba trung tâm du lịch lớn trên bản đồ du lịch Việt Nam, Đà Nẵng thành phố biển xinh đẹp hiền hòa và mếm khách, nơi mà bạn có thể dễ dàng đến được bằng cả đường bộ, đường hàng không và đường thủy. Một dấu ấn địa lý và lịch sử, điểm trung chuyển tiện lợi đến các di sản văn hóa thế giới như Huế, Mỹ Sơn, Hội An và khu dự trữ sinh quyển thế giới Cù Lao Chàm. Qua năm tháng Đà Nẵng đang càng khẳng định là một điểm đến hấp dẫn và lý tưởng đối với bàn bè và du khách năm châu. Bạn sẽ đi từ ngạc nhiên này đến ngạc nhiên khác trong hành trình khám phá các di tích văn hóa, lịch sử, danh lam thắng cảnh, đèo Hải Vân – Thiên hạ đệ nhất hùng quang, Ngũ Hành Sơn huyền thoại, đến dải bờ biển tuyệt đẹp được tôn vinh là một trong sáu bải biển đẹp nhất hành tinh ...",
		},
	];
	return (
		<div className="landing-page">
			<Header />
			<Slider />
			<Counter />
			<CreateRoute />
			<Suggestion />
			<AboutUs data={dataAboutUs[0]} />
			<AboutUs reverse data={dataAboutUs[1]} />
			<Collaborate />
			<Footer />
		</div>
	);
}

export default LandingPage;
