import React from "react";

import classes from "./Data.css"

const data = (props) => {
	return(
		<td className = {classes.Data}>{props.text}</td>
	)
}

export default data;