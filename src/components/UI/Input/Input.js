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
			const options = props.options.map(option => {
				return(
					<option value = {option.value} key = {option.value}>{option.label}</option>
				)
			});
			inputElement = (
				<select onChange = {props.changed} className = {classes.Hidden}>
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
			return props.options.map(option => {
				return(
					<label key = {option.value}>
						<input 
							{...props.elementConfig}
							value = {option.value}
							checked = {option.checked}
							onChange = {props.changed}/>
						{option.label}
					</label>
				)
			})
		default:
			inputElement = (
				<input
					{...props.elementConfig}
					value = {props.value}
					onChange = {props.changed}/>
			);
			break;
	}


	//Trying to figure out how to make an input hidden by pushing a class not sure why it was not working earlier so removed for now
	return(
		<div className = {inputClasses.join(" ")}>
			{inputElement}
		</div>
	)
}

export default input;