import React from "react";
import "../style/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Formation = () => {
	const [isShow, setIsShow] = useState(true);
	const [Clicked, setClicked] = useState(true);

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
					Formation{" "}
					{Clicked ? (
						<FontAwesomeIcon icon={faAngleDown} />
					) : (
						<FontAwesomeIcon icon={faAngleUp} />
					)}
				</h2>
			</span>
			{isShow ? (
				<div className="wrapper-general-formation">
					<div className="wrapper-formation">
						<div>
							<img
								className="image-formation"
								src="https://www.wildcodeschool.com/static/imgs/logo.png"
							></img>
						</div>
						<p className="formation-p">
							<strong> Wild Code School</strong> - Mars à Juillet 2021 Formation
							Développeur Web / Web mobile
						</p>
					</div>
					<div className="wrapper-formation">
						<img
							className="image-formation"
							src="https://digitaltrainingfactory.paris/wp-content/uploads/elementor/thumbs/25ans-logo-baseline-transparent-p8f19y110lwkpgrosz04e8yd7tcna2urfl18g6y8bu.png"
						/>
						<p className="formation-p">
							<strong>L'Ecole Multimédia </strong>- Paris - 2011 / 2012
							Formation Webmaster
						</p>
					</div>
					<div className="wrapper-formation">
						<img
							src="https://www.univ-paris8.fr/squelettes/images/logo-p8.svg"
							className="image-formation"
						/>
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
