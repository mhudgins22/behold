import React from "react";

import classes from "./Logo.css"

const logo = (props) => {
	return(
		<img 
			className = {classes.Logo} 
			src = {props.image} 
			alt = {props.altText}/>
	);
}

export default logo