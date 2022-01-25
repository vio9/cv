import React from "react";
import githubwhite from "../datas/assets/githubwhite.png";
import gitlab from "../datas/assets/gitlab.png";
import linkedin from "../datas/assets/linkedin.png";
const Presentation = () => {
	return (
		<div className="presentation">
			<h2>Bienvenue sur mon CV en ligne ! ✨</h2>
			<p>
				Retrouvez ci-dessous mes compétences, expériences professionnelles et
				formation. Pour me contacter, n'hésitez pas à cliquer sur la page
				contact ! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Mauris sapien felis, pharetra ac libero a, feugiat elementum massa. Ut
				cursus elit non metus dignissim, ut dictum dolor efficitur.
			</p>
			<div>
				<p>Retrouvez-moi sur les réseaux sociaux : </p>
				<div className="wrapper-social">
					<a href="https://github.com/vio9" target="_blank">
						<img className="social" src={githubwhite} alt="github-logo" />
					</a>
					<a href="https://gitlab.com/violaine09" target="_blank">
						<img className="social" src={gitlab} alt="gitlab-logo" />
					</a>
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
