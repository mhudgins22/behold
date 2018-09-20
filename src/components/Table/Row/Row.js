import React from "react";

import Data from "./Data/Data";

import classes from "./Row.css";

const row = (props) => {
	
	let row = null;

	switch(props.rowType) {
		case "head":
			row = (
				<th className = {classes.TabelHead}>{props.text}</th>
			)
			break;
		case "body":
			let dataPoints = [];
			for (let point in props.data) {
				dataPoints.push(
					<Data 
						key = {point}
						text = {props.data[point]}/>
				)
			}
			row = (
				<tr>
					{dataPoints}
				</tr>
			)
			break;
		default: break;
	}

	return (
		row
	)
}

export default row;