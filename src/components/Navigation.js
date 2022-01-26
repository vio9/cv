import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../style/styles.scss";
import { ThemeContext } from "../utils/context/ThemeContext";
import BoutonMode from "./BoutonMode";

const Navigation = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className="navbar">
			<NavLink className="nav-link" exact to="/">
				Home
			</NavLink>
			<NavLink className="nav-link" to="/Contact">
				Contact
			</NavLink>
			<NavLink className="nav-link" to="/Activites">
				Activités
			</NavLink>
			<BoutonMode />
		</div>
	);
};

export default Navigation;
