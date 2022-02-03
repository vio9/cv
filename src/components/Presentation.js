import React from "react";
import githubwhite from "../datas/assets/githubwhite.png";
import gitlab from "../datas/assets/gitlab.png";
import linkedin from "../datas/assets/linkedin.png";
import violaine from "../datas/assets/violaine.jpeg";

const Presentation = () => {
	return (
		<div className="presentation">
			<h2>Bienvenue sur mon CV en ligne ! ✨</h2>
			<div className="presentation-sous-wrapper">
				<div className="profil-picture-wrapper">
					<img className="profil-picture" src={violaine} alt="photo Violaine" />
				</div>
				<p className="profil-texte">
					Après 7 ans à travailler comme webmaster / intégrateur ou chef de
					projet Web au sein de nombreuses entreprises en mission via des SSII
					ou en freelance, j'ai décidé de faire une formation développeur web /
					web mobile pour me réorienter car j'adore coder, construire des sites
					internets et des applications. Après un stage au sein de l'entreprise
					FLoax à l'issue de ma formation, je suis désormais à la recherche de
					mon premier emploi comme développeur front end.
				</p>
			</div>
			<div>
				<p>Retrouvez-moi sur les réseaux sociaux : </p>
				<div className="wrapper-social">
					<a href="https://github.com/vio9" target="_blank">
						<img className="social" src={githubwhite} alt="github-logo" />
					</a>
					{/* <a href="https://gitlab.com/violaine09" target="_blank">
						<img className="social" src={gitlab} alt="gitlab-logo" />
					</a> */}
					<a
						href="https://www.linkedin.com/in/violaine-ernotte/"
						target="_blank"
					>
						<img className="social" src={linkedin} alt="linkedin-logo" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Presentation;
