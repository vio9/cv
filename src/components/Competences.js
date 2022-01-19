import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCode,
	faCubes,
	faPager,
	faPen,
	faTerminal,
	faFileWord,
} from "@fortawesome/free-solid-svg-icons";

const Competences = () => {
	return (
		<div className="wrapper-competences">
			<h2>Compétences</h2>
			<ul>
				<p className="Title-comp">
					<FontAwesomeIcon icon={faCode} /> Langages / framework :
				</p>
				<div className="sous-wrap-comp">
					<span className="competence-span">HTML5</span>
					<span className="competence-span">CSS3 SCSS Styled-Component</span>
					<span className="competence-span"> JavaScript </span>
					<span className="competence-span">React.js</span>
					<span className="competence-span">Node.js / Express.js</span>
					<span className="competence-span">Context API</span>
					<span className="competence-span">
						MySQL Meurise (modélisation BDD)
					</span>
				</div>
				<li className="Title-comp">
					<FontAwesomeIcon icon={faCubes} /> CMS:
				</li>
				<li>Adobe CQ5, SharePoint Online, Hybris, Drupal, WordPress</li>
				<li className="Title-comp">
					<FontAwesomeIcon icon={faPager} /> Gestion de projets :
				</li>
				<li>GIT, Github, GitLab, Jira, AirTable, Trello, Agile, Figma</li>

				<li className="Title-comp">
					<FontAwesomeIcon icon={faTerminal} /> Développement :
				</li>
				<li>
					Site web / application en ReactJS + SCSS + NodeJS (Express) + BDD
					gérée en MySQL{" "}
				</li>
				<li className="Title-comp">
					{" "}
					<FontAwesomeIcon icon={faPen} /> Webmaster / édito :{" "}
				</li>
				<li>
					Contenus éditorial : articles, jeux concours, newsletter, graphisme
					web, Création de vidéos (format court web / intranet){" "}
				</li>
				<li className="Title-comp">
					{" "}
					<FontAwesomeIcon icon={faFileWord} /> Logiciels:
				</li>
				<li>VS Code, Photoshop, Premiere, suite Office</li>
			</ul>
		</div>
	);
};

export default Competences;
