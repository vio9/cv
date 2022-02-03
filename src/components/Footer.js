import React from "react";
import { NavLink } from "react-router-dom";
import githubwhite from "../datas/assets/githubwhite.png";
import gitlab from "../datas/assets/gitlab.png";
import linkedin from "../datas/assets/linkedin.png";

const Footer = () => {
	return (
		<div className="footer">
			<NavLink className="footer-link" exact to="/">
				Home
			</NavLink>
			{/* <NavLink className="footer-link" to="/Contact">
				Contact
			</NavLink> */}
			<NavLink className="footer-link" to="/Activites">
				Activités
			</NavLink>

			<a href="https://github.com/vio9" target="_blank">
				<img
					className="footer-link-image"
					src={githubwhite}
					alt="github-logo"
				/>
			</a>
			{/* <a href="https://gitlab.com/violaine09" target="_blank">
				<img className="footer-link-image" src={gitlab} alt="gitlab-logo" />
			</a> */}
			<a href="https://www.linkedin.com/in/violaine-ernotte/" target="_blank">
				<img className="footer-link-image" src={linkedin} alt="linkedin-logo" />
			</a>
		</div>
	);
};

export default Footer;
