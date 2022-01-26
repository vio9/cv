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
import ThemeContextProvider from "../utils/context/ThemeContext";

const Home = () => {
	return (
		<div className="wrapper-home">
			<ThemeContextProvider>
				<Header />
				<Navigation />
				<Presentation />
				<Competences />
				<ExperienceProList />
				<Formation />
				<GoToTop />
				<Footer />
			</ThemeContextProvider>
		</div>
	);
};

export default Home;
