import React from "react";

import Head from "./Head/Head";
import Body from "./Body/Body";

import classes from "./Table.css";

const table = (props) => {
	let tableClasses = [classes.Table];

	if (props.headers.length === 0) {
		tableClasses.push(classes.Hidden);
	}

	return(
		<table className = {tableClasses.join(" ")}>
			<Head headers = {props.headers}/>
			<Body data = {props.data}/>
		</table>
	)
}

export default table;