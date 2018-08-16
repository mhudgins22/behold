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
			});
			inputElement = (
				<select onChange = {props.changed}>
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
		case "radio":
			const choices = props.options.map(option => {
				return(
					<label key = {option.value}>{option.label}
						<input {...props.elementConfig} value = {option.value}/>
					</label>
				)
			});
			inputElement = (
				<div>
					{choices}
				</div>
			)
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
		<div className = {classes.Input}>
			{inputElement}
		</div>
	)
}

export default input;