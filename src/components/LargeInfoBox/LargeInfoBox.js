import React from "react";

import * as classes from "./LargeInfoBox.css";

const largeInfoBox = (props) => {
	return(
		<div className = {classes.LargeInfoBox}>
			<h1>{props.header}</h1>
			<div className = {classes.MainBox}>
				<p className = {classes.MainInfo}>{props.main}</p>
				<div className = {classes.MainImage}>
					<img src = {props.image} alt ="" />
				</div>
			</div>
			<div className = {classes.SubBox}>
				<h3>{props.subHeader}</h3>
				<p className = {classes.SubInfo}>{props.secondary}</p>
			</div>
		</div>
	);
}

export default largeInfoBox;