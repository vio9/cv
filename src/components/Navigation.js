import React from "react";
import { NavLink } from "react-router-dom";
import "../style/styles.scss";

const Navigation = () => {
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
			<div className="wrapper-night-mood">
				<button className="night-mood"></button>
			</div>
		</div>
	);
};

export default Navigation;
