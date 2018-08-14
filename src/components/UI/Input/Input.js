import React from "react";
import Dropdown from 'react-dropdown';
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
		case "dropdown":
			console.log(props.value);
			const defaultOption = props.value[0];
			inputElement = (
				<Dropdown 
					{...props.elementConfig}
					options = {props.value}
					onChange = {props.changed}
					value = {defaultOption}/>
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