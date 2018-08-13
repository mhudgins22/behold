import React from "react";

import classes from "./Navitem.css"

const navitem = (props) => {
	return(
		<h3 className = {classes.Navitem}>{props.text}</h3>
	)
}

export default navitem;