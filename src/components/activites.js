import React, { useContext, useState } from "react";
// import { useState } from "react/cjs/react.development";
import { ThemeContext } from "../utils/context/ThemeContext";
import Header from "./Header";
import Navigation from "./Navigation";
import "../style/styles.scss";
import Footer from "./Footer";
import musesbresil2 from "../datas/assets/musesbresil2.jpg";
import rio2 from "../datas/assets/rio2.jpg";
import tanjazz1 from "../datas/assets/tanjazz1.jpg";
import tanjazz2 from "../datas/assets/tanjazz2.jpg";
import SliderWrapper from "./SliderWrapper";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ReseauxMuses from "./ReseauxMuses";
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
				"🎺 Les muses Tanguent est une fanfare majoritairement féminine, issue de l'école d'Architecture de Versailles, qui existe depuis 2003.",
		},
		{
			id: 2,
			presentation:
				"🥁 Nous nous produisons dans des festivals musicaux, lors de concerts, parades, concours, mais aussi d'événements privés (mariages, anniversaires).",
		},
	]);

	const [details2, setDetails2] = useState([
		{
			presentation2:
				"Depuis que la fanfare existe, nous avons eu la chance de pouvoir partir visiter de nombreux pays et villes françaises pour y jouer.",
		},
		{
			presentation2:
				"Que cela soit dans le cadre de festivals de fanfare ou de musique, dans le cadre de la visite d'un membre de la fanfare résident dans un autre pays ou par curiosité touristique et envie de jouer ! ",
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
							<ReseauxMuses />
						</div>
						<div className="activity-card">
							<h2 className="title-activités">
								🇧🇷 🇷🇺 Quelques pays visités par les Muses Tanguent ! 🇺🇸 🇳🇱
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
							<strong>
								<p className="presentation-perso">
									Les muses au Brésil dans le cadre du festival Honk Rio ☆ﾟ. ｡
								</p>
							</strong>
							<p className="presentation-perso">Cliquez pour agrandir 👆</p>
							<div className="photos-wrapper">
								<Zoom>
									<img
										src={musesbresil2}
										alt="Les muses Tanguent à Rio"
										width="240"
										height="170"
									/>
								</Zoom>
								<Zoom>
									<img
										src={rio2}
										alt="Les muses Tanguent à Rio"
										width="240"
										height="170"
									/>
								</Zoom>
							</div>
							<strong>
								<p className="presentation-perso">
									Les muses au Maroc dans le cadre du Tanjazz Festival ☆ﾟ. * ･
								</p>
							</strong>
							<div className="photos-wrapper">
								<Zoom>
									<img
										src={tanjazz1}
										alt="Les muses Tanguent à Tanger"
										width="240"
										height="170"
									/>
								</Zoom>

								<Zoom>
									<img
										src={tanjazz2}
										alt="Les muses Tanguent à Tanger"
										width="240"
										height="170"
									/>
								</Zoom>
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
