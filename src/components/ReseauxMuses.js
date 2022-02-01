import React from "react";
import instagram from "../datas/assets/instagram.png";

const ReseauxMuses = () => {
	return (
		<div>
			<p className="insta-texte-muses">
				*:・ﾟLes muses Tanguent sur Instagram ﾟ・:*
			</p>
			<a href="https://www.instagram.com/musestanguent/" target="_blank">
				<img src={instagram} className="insta" alt="insta logo" />
			</a>
		</div>
	);
};

export default ReseauxMuses;
