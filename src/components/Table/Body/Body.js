import React from "react";

import Row from "../Row/Row";

const body = (props) => {

	let rows = null;

	if (props.data) {
		rows = props.data.map((row, i) => {
			return(
				<Row
					key = {row + i}
					rowType = "body"
					data = {row}/>
			)
		})
	}

	return(
		<tbody>
			{rows}
		</tbody>
	)
}

export default body;