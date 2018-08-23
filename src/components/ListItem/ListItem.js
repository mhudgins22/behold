import React from "react";

import classes from "./ListItem.css";

const listItem = (props) => {

	let item = null;
	if (props.listType === "item") {
		item = (
			<article className = {classes.Item} onClick = {props.clicked}>
				<h3>{props.name}</h3>
				<p>{props.rarity} {props.type} {props.properties ? "- " + props.properties : null}</p>
			</article>
		)
	}

	return(
		item
	)
}

export default listItem;