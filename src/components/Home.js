import React from "react";
import Navigation from "./Navigation";
import "../style/styles.scss";
import Presentation from "./Presentation";
import ExperienceProList from "./ExperienceProList";
import Competences from "./Competences";
import Formation from "./Formation";
const Home = () => {
	return (
		<>
			<div className="title">
				<h1>Violaine Ernotte</h1>
				<h2>Développeur Web Front</h2>
			</div>

			<Navigation />
			<Presentation />
			<Competences />
			<ExperienceProList />
			<Formation />
		</>
	);
};

export default Home;
