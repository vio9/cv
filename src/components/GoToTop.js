import React from "react";
import { useState } from "react";
import "../style/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const GoToTop = ({ scrollStepInPx, delayInMs }) => {
	const [scroll, setScroll] = useState(false);

	const scrollStep = () => {
		if (window.pageYOffset === 0) {
			clearInterval(intervalId);
			setScroll(false);
		}
		window.scroll(0, window.pageYOffset - scrollStepInPx);
	};
	const intervalId = scroll ? setInterval(scrollStep, delayInMs) : undefined;
	return (
		<div>
			<FontAwesomeIcon
				className="scrollToTop"
				onClick={(e) => scroll || setScroll(true)}
				icon={faArrowCircleUp}
			/>
			{/* <button
				className="scrollToTop"
				onClick={(e) => scroll || setScroll(true)}
			></button> */}
		</div>
	);
};

export default GoToTop;
