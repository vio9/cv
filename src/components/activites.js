import React, { useContext } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import "../style/styles.scss";
import { ThemeContext } from "../utils/context/ThemeContext";
import { useState } from "react/cjs/react.development";
import Footer from "./Footer";

const Activites = () => {
	function ThemeChoice(props) {
		const { theme, updateTheme } = useContext(ThemeContext);

		const handleChange = (event) => {
			const value = event.currentTarget.value;
			updateTheme(value);
		};

		return (
			<select name="theme" defaultValue={theme} onChange={handleChange}>
				<option value="zen">Zen</option>
				<option value="pop">Pop</option>
			</select>
		);
	}

	function ToolBar(props) {
		return (
			<div>
				<ThemeChoice />
			</div>
		);
	}
	const [theme, setTheme] = useState("zen");
	const contextValue = {
		theme,
		updateTheme: setTheme,
	};

	return (
		<ThemeContext.Provider value={contextValue}>
			<div className="wrapper-home">
				<Header />
				<Navigation />

				<ToolBar />
				<div className={theme}>
					<h2 className="title-activités"> Lorem Ipsum is simply dummy te</h2>
					<p className="presentation-perso">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries.
					</p>
				</div>
			</div>
			<Footer />
		</ThemeContext.Provider>
	);
};

export default Activites;
