import React from "react";

import classes from "./Input.css";


const input = props => {


	let inputElement = null;
	
	switch(props.elementType) {
		case "input":
			inputElement = (
				<input 
					{...props.elementConfig}
					value = {props.value}
					onChange = {props.changed}/>
			);
			break;
		case "select":
			const options = props.options.map(option => {
				return(
					<option value = {option.value} key = {option.value}>{option.label}</option>
				)
			})
			inputElement = (
				<select>
					{options}
				</select>
			);
			break;
		case "textarea":
			inputElement = (
				<textarea
					{...props.elementConfig}
					className = {classes.Textarea}
					value = {props.value}
					onChange = {props.changed}/>
			);
			break;
		default:
			inputElement = (
				<input
					{...props.elementConfig}
					value = {props.value}
					onChange = {props.changed}/>
			);
			break;
	}

	return(
		<div>
			{inputElement}
		</div>
	)
}

export default input;