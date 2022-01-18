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
}) => {
	return (
		<div className="exp-card">
			<h3 className="entreprise">{entreprise}</h3>
			<p className="date">{date}</p>
			<p className="mission">{mission1}</p>
			<p className="mission">{mission2}</p>
			<p className="mission">{mission3}</p>
			<p className="mission">{mission4}</p>
			<p className="environnement">{environnement}</p>
		</div>
	);
};

export default ExperiencePro;
