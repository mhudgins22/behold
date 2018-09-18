import React from "react";

import Head from "./Head/Head";
import Body from "./Body/Body";

const table = (props) => {
	return(
		<table>
			<Head headers = {props.headers}/>
			<Body data = {props.data}/>
		</table>
	)
}

export default table;