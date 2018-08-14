import React from "react";

import classes from "./Button.css";

const button = (props) => {
	let names = [classes.Button];

	if (props.buttonType === "Register") {
		names.push(classes.Register);
	}

	if (props.buttonType === "Character") {
		names.push(classes.Character);
	}

	return (
		<button className = {names.join(" ")} onClick = {props.clicked}>{props.text}</button>
	)
}

export default button;
