import React from "react";

import classes from "./Modal.css"

import Button from "../Button/Button";

let buttons = null;


const modal = (props) => {
	return(
		<div className = {classes.Modal}>
			<div>
				<p>{props.text}</p>
			</div>
			<div>
				<Button 
					buttonType = {props.buttonOneType}
					text = {props.buttonOneText}
					clicked = {props.buttonOneClicked}/>
				<Button
					buttonType = {props.buttonTwoType}
					text = {props.buttonTwoText}
					clicked = {props.buttonTwoClicked}/>
			</div>
		</div>
	)
}

export default modal;