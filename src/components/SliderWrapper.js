import React from "react";
import Slider from "react-touch-drag-slider";
import images from "../datas/assets/images";

function SliderWrapper() {
	return (
		<>
			<p>Glissez pour faire défiler 👈</p>
			<Slider
				onSlideComplete={(i) => {
					console.log("finished dragging, current slide is", i);
				}}
				onSlideStart={(i) => {
					console.log("started dragging on slide", i);
				}}
				activeIndex={0}
				threshHold={100}
				transition={0.5}
				scaleOnDrag={true}
			>
				{images.map(({ url, title }, index) => (
					<img src={url} key={index} alt={title} />
				))}
			</Slider>
		</>
	);
}

export default SliderWrapper;
