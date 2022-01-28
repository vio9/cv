import React, { useContext, useState } from "react";
// import { useState } from "react/cjs/react.development";
import { ThemeContext } from "../utils/context/ThemeContext";
import Header from "./Header";
import Navigation from "./Navigation";
import "../style/styles.scss";
import Footer from "./Footer";
import musesbresil2 from "../datas/assets/musesbresil2.jpg";
import SliderWrapper from "./SliderWrapper";

const Activites = () => {
	function ThemeChoice(props) {
		const { theme, updateTheme } = useContext(ThemeContext);

		const handleChange = (event) => {
			const value = event.currentTarget.value;
			updateTheme(value);
		};

		return (
			<select
				className="select-theme"
				name="theme"
				defaultValue={theme}
				onChange={handleChange}
			>
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
	const [details, setDetails] = useState([
		{
			id: 1,
			presentation:
				"Les muses Tanguent est une fanfare majoritairement féminine, issue de l'école d'Architecture de Versailles, qui existe depuis 2003.",
		},
		{
			id: 2,
			presentation:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 2 etting industry. Lorem I printing and typesetting industry. Lorem Ipsum has",
		},
	]);

	const [details2, setDetails2] = useState([
		{
			presentation2:
				"Lorem Ipsum is simply dummy text of the printing and typesettin",
		},
		{
			presentation2:
				"presentation 2 AGAIN! Lorem Ipsum is simply dummy text of the nting and typesetting industry. Lorem I printing and typese",
		},
		{
			presentation2:
				"presentation 2 AGAIN! Lorem Ipsum is simply dummy text of the nting and typesetting industry. Lorem I printing and typesesimply dummy text of the nting and typesetting industry. Lorem I pri",
		},
	]);

	return (
		<ThemeContext.Provider value={contextValue}>
			<div className="wrapper-home">
				<Header />
				<Navigation />
				<div className={theme}>
					<ToolBar />
					<div className="activity-card-wrapper">
						<div className="activity-card">
							<h2 className="title-activités">
								Membre de la fanfare Les Muses Tanguent depuis 2008 !
							</h2>
							<div>
								{details.map((item) => (
									<p
										className="presentation-perso"
										key={item.id}
										presentation={item.presentation}
									>
										{item.presentation}
									</p>
								))}
							</div>
							<SliderWrapper />
						</div>
						<div className="activity-card">
							<h2 className="title-activités">
								Quelques pays visités par les Muses Tanguent!
							</h2>
							{details2.map((item) => (
								<p
									className="presentation-perso"
									key={item.id}
									presentation={item.presentation2}
								>
									{item.presentation2}
								</p>
							))}

							<div className="photos-wrapper">
								<div className="photo">
									<img src={musesbresil2} alt="Les muses Tanguent au Brésil" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</ThemeContext.Provider>
	);
};

export default Activites;
