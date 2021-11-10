import React, { useState } from "react";
import Light from "./light.jsx";

const Home = () => {
	const [color, setColor] = useState({
		stoplight: "",
		waitlight: "",
		golight: ""
	});

	return (
		<div className="lights">
			<Light
				key="stop"
				color={color.stoplight}
				switchLight={() => {
					setColor({
						stoplight: "stop",
						slowlight: "",
						golight: ""
					});
				}}></Light>
			<Light
				key="wait"
				color={color.waitlight}
				switchLight={() => {
					setColor({
						stoplight: "",
						waitlight: "wait",
						golight: ""
					});
				}}></Light>
			<Light
				key="go"
				color={color.golight}
				switchLight={() => {
					setColor({
						stoplight: "",
						waitlight: "",
						golight: "go"
					});
				}}></Light>
		</div>
	);
};

export default Home;
