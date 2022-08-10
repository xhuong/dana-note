import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
	return (
		<div className="home">
			<Header landingPage />
			<Banner />
			<Footer />
		</div>
	);
}

export default Home;
