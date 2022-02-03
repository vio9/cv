import React from "react";
import { NavLink } from "react-router-dom";
import "../style/styles.scss";

const Navigation = () => {
	return (
		<div className="navbar">
			<NavLink className="nav-link" exact to="/">
				Home
			</NavLink>
			<NavLink className="nav-link" to="/Activites">
				Activités
			</NavLink>
			<NavLink className="nav-link" to="/Contact">
				Contact
			</NavLink>
		</div>
	);
};

export default Navigation;
