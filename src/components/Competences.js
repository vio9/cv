import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCode,
	faCubes,
	faPager,
	faPen,
	faTerminal,
	faFileWord,
	faAngleDown,
	faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

const Competences = () => {
	const [isShow, setIsShow] = useState(false);
	const [Clicked, setClicked] = useState(false);

	const handleClick = () => {
		setIsShow(!isShow);
	};

	const handleClicked = () => {
		setClicked(!Clicked);
	};

	return (
		<>
			<span onClick={handleClicked}>
				<h2 className="comp-title-pre-wrapper" onClick={handleClick}>
					Compétences{" "}
					{Clicked ? (
						<FontAwesomeIcon icon={faAngleUp} />
					) : (
						<FontAwesomeIcon icon={faAngleDown} />
					)}
				</h2>
			</span>
			{isShow ? (
				<div className="wrapper-general">
					<div className="wrapper-competences">
						<p className="Title-comp">
							<FontAwesomeIcon icon={faCode} /> Langages / framework :
						</p>
						<div className="sous-wrap-comp">
							<span className="competence-span">HTML5</span>
							<span className="competence-span">
								CSS3 SCSS Styled-Component
							</span>
							<span className="competence-span"> JavaScript </span>
							<span className="competence-span">React.js</span>
							<span className="competence-span">Node.js / Express.js</span>
							<span className="competence-span">Context API</span>
							<span className="competence-span">MySQL</span>
							<span className="competence-span">
								Meurise (modélisation BDD)
							</span>
						</div>
					</div>
					<div className="wrapper-competences">
						<p className="Title-comp">
							<FontAwesomeIcon icon={faCubes} /> CMS:
						</p>
						<div className="sous-wrap-comp">
							<span className="competence-span-green">Adobe CQ5</span>
							<span className="competence-span-green">SharePoint Online,</span>
							<span className="competence-span-green">Hybris</span>
							<span className="competence-span-green">Drupal</span>
							<span className="competence-span-green"> WordPress</span>
						</div>
					</div>
					<div className="wrapper-competences">
						<p className="Title-comp">
							<FontAwesomeIcon icon={faPager} /> Gestion de projets :
						</p>
						<div className="sous-wrap-comp">
							<span className="competence-span">GIT</span>
							<span className="competence-span">Github</span>
							<span className="competence-span">GitLab</span>
							<span className="competence-span">Jira</span>
							<span className="competence-span">AirTable</span>
							<span className="competence-span">Trello</span>
							<span className="competence-span">Agile</span>
							<span className="competence-span">Figma</span>
						</div>
					</div>
					<div className="wrapper-competences">
						<p className="Title-comp">
							<FontAwesomeIcon icon={faTerminal} /> Développement :
						</p>
						<div className="sous-wrap-comp">
							<span className="competence-span">
								Front : HTML SCSS / CSS3 / React / JavaScript
							</span>
							<span className="competence-span">
								Back: NodeJS (Express) + BDD gérée en MySQL
							</span>
						</div>
					</div>
					<div className="wrapper-competences">
						<p className="Title-comp">
							<FontAwesomeIcon icon={faPen} /> Webmaster / édito :
						</p>
						<div className="sous-wrap-comp">
							<span className="competence-span-clear">
								Contenus éditorial : articles, jeux concours, newsletter
							</span>
							<span className="competence-span-clear"> graphisme web </span>
							<span className="competence-span-clear">
								Création de vidéos (format court web / intranet)
							</span>
						</div>
					</div>
					<div className="wrapper-competences">
						<p className="Title-comp">
							<FontAwesomeIcon icon={faFileWord} /> Logiciels:
						</p>
						<div className="sous-wrap-comp">
							<span className="competence-span-clear">VS Code</span>
							<span className="competence-span-clear">Photoshop</span>
							<span className="competence-span-clear">Premiere</span>
							<span className="competence-span-clear">suite Office</span>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default Competences;
