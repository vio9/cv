import React, { useEffect, useState } from "react";
import axios from "axios";
import "../datas/exp-pro-datas.json";
import ExperiencePro from "./ExperiencePro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const ExperienceProList = () => {
	const [experiencePro, setExperiencePro] = useState([]);

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

	const [isShow, setIsShow] = useState(true);
	const handleClick = () => {
		setIsShow(!isShow);
	};
	return (
		<>
			<h2 className="comp-title-pre-wrapper" onClick={handleClick}>
				Expériences Professionnelles <FontAwesomeIcon icon={faAngleDown} />
			</h2>
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
