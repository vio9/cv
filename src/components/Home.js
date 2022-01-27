import React, { useContext } from "react";
import Navigation from "./Navigation";
import "../style/styles.scss";
import Presentation from "./Presentation";
import ExperienceProList from "./ExperienceProList";
import Competences from "./Competences";
import Formation from "./Formation";
import Footer from "./Footer";
import Header from "./Header";
import GoToTop from "./GoToTop";

const Home = () => {
	return (
		<div className="wrapper-home">
			<Header />
			<Navigation />
			<Presentation />
			<Competences />
			<ExperienceProList />
			<Formation />
			<GoToTop />
			<Footer />
		</div>
	);
};

export default Home;
