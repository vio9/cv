import React from "react";
import "../style/styles.scss";

const ExperiencePro = ({
	entreprise,
	date,
	mission1,
	mission2,
	mission3,
	mission4,
	environnement,
	image,
	poste,
	link,
	link2,
}) => {
	return (
		<div className="exp-card">
			<img src={image} className="image-exp-pro" />
			<h3 className="entreprise">{entreprise}</h3>
			<p className="poste">{poste}</p>
			<p className="date">📅 {date}</p>
			<p className="mission-title">💻 Missions :</p>
			<p className="mission">{mission1}</p>
			<p className="mission">{mission2}</p>
			<p className="mission">{mission3}</p>
			<p className="mission">{mission4}</p>
			<p className="mission">⚙️ {environnement}</p>
			<p className="link-p">
				<a href={link} target="_blank" className="link">
					{link}
				</a>
			</p>
			<p className="link-p">
				<a href={link2} target="_blank" className="link">
					{link2}
				</a>
			</p>
		</div>
	);
};

export default ExperiencePro;
