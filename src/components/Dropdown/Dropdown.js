import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from "./Dropdown.css";

const dropdown = (props) => {
	let dropdownClasses = [classes.Dropdown]
	let toggle = null;

	if (!props.view) {
		dropdownClasses.push(classes.Collapsed)
		toggle = (
			<div>
				<FontAwesomeIcon className = {classes.Toggle} onClick = {props.clicked} icon="arrow-down" />
				Show Filter
			</div>
		)
	}

	if (props.view) {
		dropdownClasses.push(classes.Expanded)
		toggle = (
			<div>
				<FontAwesomeIcon className = {classes.Toggle} onClick = {props.clicked} icon = "arrow-up" />
				Hide Filter
				{props.form}
				<br/>
			</div>
		)
	}

	return(
		<div className = {dropdownClasses.join(" ")}>
			{toggle}
		</div>
	)
}

export default dropdown;