import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
	return (
		<footer>
			<div className="footer">
				<NavLink className="footer-link" exact to="/">
					Home
				</NavLink>
				<NavLink className="footer-link" to="Contact">
					Contact
				</NavLink>
				<NavLink className="footer-link" to="Activites">
					Activités
				</NavLink>
				<NavLink className="footer-link" to="Activites">
					Activités
				</NavLink>
			</div>
		</footer>
	);
};

export default Footer;
