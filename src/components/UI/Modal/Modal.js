import React from "react";

import classes from "./Modal.css"

import Button from "../Button/Button";

const modal = (props) => {
	return(
		<div className = {classes.Modal}>
			<div>
				<h2>{props.text}</h2>
			</div>
			<div className = {classes.Controls}>
				<div className = {classes.Option}>
					<Button 
						buttonType = {props.buttonOneType}
						text = {props.buttonOneText}
						clicked = {props.buttonOneClicked}/>
				</div>
				<div className = {classes.Option}>
					<Button
						buttonType = {props.buttonTwoType}
						text = {props.buttonTwoText}
						clicked = {props.buttonTwoClicked}/>
				</div>
			</div>
		</div>
	)
}

export default modal;