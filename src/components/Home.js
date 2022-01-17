import React from "react";
import Navigation from "./Navigation";
import "../style/styles.scss";
const Home = () => {
	return (
		<>
			<div>
				<h1>Bonjour depuis la home</h1>
				<p className="test">test</p>
			</div>
			;
			<Navigation />
		</>
	);
};

export default Home;
