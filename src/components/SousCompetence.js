import React from "react";
import "../style/styles.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCode,
	faCubes,
	faPager,
	faPen,
	faTerminal,
	faFileWord,
} from "@fortawesome/free-solid-svg-icons";

const SousCompetence = () => {
	const [competenceDetail, setCompetenceDetail] = useState([]);

	const getCompetence = async () => {
		try {
			const result = await axios.get(
				"https://raw.githubusercontent.com/vio9/datas/main/sousdatas.json"
			);
			setCompetenceDetail(result.data);
			console.log(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCompetence();
	}, []);

	return (
		<>
			{competenceDetail.map((item) => {
				<div {...item}></div>;
			})}
		</>
	);
};

export default SousCompetence;
