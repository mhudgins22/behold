import React from "react";

import classes from "./Input.css";


const input = props => {


	let inputElement = null;
	let inputClasses = [classes.Input];
	
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
			const options = props.options.map((option, i) => {
				return(
					<option value = {option.value} key = {option.value + i.toString()}>{option.label}</option>
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
					<label key = {option.value}>
						<input 
							{...props.elementConfig} 
							value = {option.value} 
							checked = {option.value === props.value}
							onChange = {props.changed}/>
						{option.label}
					</label>
					
				)
			});
			inputElement = (
				<div>
					{choices}
				</div>
			)
			break;
		case "checkbox":
				inputElement = (
					<label>
						{props.label}
						<input 
							{...props.elementConfig}
							checked = {props.value}
							onChange = {props.changed}/>
					</label>
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

	if (props.valid === false) {
		inputClasses.push(classes.Invalid);
	}

	//Trying to figure out how to make an input hidden by pushing a class not sure why it was not working earlier so removed for now
	return(
		<div className = {inputClasses.join(" ")}>
			{inputElement}
		</div>
	)
}

export default input;