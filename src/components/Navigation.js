import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="Navbar">
			<NavLink className="nav-link" exact to="/">
				Home
			</NavLink>
			<NavLink className="nav-link" to="Contact">
				Contact
			</NavLink>
		</div>
	);
};

export default Navigation;
