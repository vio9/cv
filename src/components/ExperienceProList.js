import React, { useEffect, useState } from "react";
import axios from "axios";
import "../datas/exp-pro-datas.json";
import ExperiencePro from "./ExperiencePro";
const ExperienceProList = () => {
	const [experiencePro, setExperiencePro] = useState([]);

	const getExperience = async () => {
		try {
			const result = await axios.get(
				"https://raw.githubusercontent.com/vio9/datas/main/db.json"
			);
			setExperiencePro(result.data);
			console.log(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getExperience();
	}, []);

	return (
		<div>
			{experiencePro.map((item) => (
				<ExperiencePro {...item} />
			))}
		</div>
	);
};

export default ExperienceProList;
