import React, { useEffect, useState } from "react";
import axios from "axios";
import "../datas/exp-pro-datas.json";
import ExperiencePro from "./ExperiencePro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
const ExperienceProList = () => {
	const [experiencePro, setExperiencePro] = useState([]);
	const [Clicked, setClicked] = useState(false);
	const [isShow, setIsShow] = useState(true);

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

	return (
		<>
			<span onClick={handleClicked}>
				<h2 className="comp-title-pre-wrapper" onClick={handleClick}>
					Expériences Professionnelles{" "}
					{Clicked ? (
						<FontAwesomeIcon icon={faAngleDown} />
					) : (
						<FontAwesomeIcon icon={faAngleUp} />
					)}
				</h2>
			</span>
			{isShow ? (
				<div className="wrapper">
					{experiencePro.map((item) => (
						<ExperiencePro {...item} />
					))}
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default ExperienceProList;
