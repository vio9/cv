import React from "react";
import { useContext } from "react/cjs/react.development";
import "../style/styles.scss";
import { ThemeContext } from "../utils/context/ThemeContext";

export default function BoutonMode() {
	const { toggleTheme, theme } = useContext(ThemeContext);

	return (
		<div onClick={toggleTheme} className="bouton-mode">
			{theme ? "Dark 🌜" : "Light 🌞"}
		</div>
	);
}
