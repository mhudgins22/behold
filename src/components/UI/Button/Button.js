import React from "react";

import classes from "./Button.css";

const button = (props) => {
	let names = [];

	if (props.buttonType === "Register") {
		names.push(classes.Register);
	}

	if (props.buttonType === "Character") {
		names.push(classes.Character);
	}

	if (props.buttonType === "Navigation") {
		names.push(classes.Navigation);
	}

	if (props.buttonType === "Success") {
		names.push(classes.Success);
	}

	if (props.buttonType === "Danger") {
		names.push(classes.Danger);
	}

	if (props.buttonType === "Tab") {
		names.push(classes.Tab);
	}

	if (props.buttonType === "ActiveTab") {
		names.push(classes.ActiveTab);
	}

	if (props.buttonType === "Disabled") {
		names.push(classes.Disabled)
	}

	if (props.buttonType === "Filter") {
		names.push(classes.Filter)
	}

	return (
		<button className = {names.join(" ")} onClick = {props.clicked} disabled = {props.disabled}>{props.text}</button>
	)
}

export default button;
