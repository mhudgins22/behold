import React from "react";
import {Link} from "react-router-dom";

import classes from "./Navitems.css";

import Navitem from "./Navitem/Navitem";

const navitems = (props) => {
	let nav = props.nav.map(item => {
		return(
			<Navitem text = {item} hidden = {props.hidden} sidedrawer = {props.sidedrawer} key = {item}/>
		)
	})
	return(
		<div>
			{nav}
		</div>
	)
}

export default navitems;