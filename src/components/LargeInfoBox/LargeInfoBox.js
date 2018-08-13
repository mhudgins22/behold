import React from "react";

import * as classes from "./LargeInfoBox.css";

const largeInfoBox = (props) => {
	return(
		<div className = {classes.LargeInfoBox}>
			<h1>{props.header}</h1>
			<div className = {classes.Main}>
				<p>{props.main}</p>
				<div>
					<img src = {props.image} alt ="" />
				</div>
			</div>
			
			<h3>{props.subHeader}</h3>
			<p>{props.secondary}</p>
		</div>
	);
}

export default largeInfoBox;