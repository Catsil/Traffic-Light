import React from "react";
import PropTypes from "prop-types";

const Light = props => {
	return (
		<div
			className={`bulb ${props.color}`}
			onClick={() => {
				props.switchLight(props.color);
			}}></div>
	);
};

Light.propTypes = {
	color: PropTypes.string,
	switchLight: PropTypes.func
};
export default Light;
