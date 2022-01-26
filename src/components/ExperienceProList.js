import React, { useEffect, useState } from "react";
import axios from "axios";
import "../datas/exp-pro-datas.json";
import ExperiencePro from "./ExperiencePro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
const ExperienceProList = () => {
	const [experiencePro, setExperiencePro] = useState([]);
	const [Clicked, setClicked] = useState(false);
	const [isShow, setIsShow] = useState(false);
	const [webmasterOnly, setWebmasterOnly] = useState(false);

	const getExperience = async () => {
		try {
			const result = await axios.get(
				"https://raw.githubusercontent.com/vio9/datas/main/cv.json"
			);
			setExperiencePro(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getExperience();
	}, []);

	const handleClick = () => {
		setIsShow(!isShow);
	};

	const handleClicked = () => {
		setClicked(!Clicked);
	};

	function webmasteronClick() {
		setWebmasterOnly(!webmasterOnly);
	}

	return (
		<>
			<span onClick={handleClicked}>
				<h2 className="comp-title-pre-wrapper" onClick={handleClick}>
					Expériences Professionnelles{" "}
					{Clicked ? (
						<FontAwesomeIcon icon={faAngleUp} />
					) : (
						<FontAwesomeIcon icon={faAngleDown} />
					)}
				</h2>
			</span>
			{isShow ? (
				<>
					<div className="wrapper-button">
						<button className="filter-button" onClick={webmasteronClick}>
							{webmasterOnly
								? "Voir uniquement Webmaster et développeur"
								: " Voir tout"}
						</button>
					</div>
					<div className="wrapper">
						{experiencePro
							.filter(
								(item) =>
									!webmasterOnly ||
									item.poste.includes("Webma") ||
									item.poste.includes("dev")
							)
							.map((item) => (
								<ExperiencePro {...item} />
							))}
					</div>
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default ExperienceProList;
