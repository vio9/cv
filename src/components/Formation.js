import React from "react";
import "../style/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Formation = () => {
	const [isShow, setIsShow] = useState(true);

	const handleClick = () => {
		setIsShow(!isShow);
	};
	return (
		<>
			<h2 className="comp-title-pre-wrapper" onClick={handleClick}>
				Formation <FontAwesomeIcon icon={faAngleDown} />
			</h2>
			{isShow ? (
				<div className="wrapper-general">
					<div className="wrapper-formation">
						<p className="formation-p">
							<strong> Wild Code School</strong> - Mars à Juillet 2021 Formation
							Développeur Web / Web mobile
						</p>
						<p className="formation-p">
							<strong>L'Ecole Multimédia </strong>- Paris - 2011 / 2012
							Formation Webmaster
						</p>
						<p className="formation-p">
							<strong>Université Paris 8 </strong> 2010 - Master 2 Industries
							Créatives communication médias web art
						</p>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default Formation;