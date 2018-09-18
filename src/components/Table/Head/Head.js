import React from "react";

import Row from "../Row/Row";

const head = (props) => {
	
	let headers = [];

	if (props.headers) {
		headers = props.headers.map((header, i) => {
			return(
				<Row
					key = {header + i}
					rowType = "head"
					text = {header} />
			);
		})
	}

	return(
		<thead>
			<tr>
				{headers}
			</tr>
		</thead>
	)
}

export default head;