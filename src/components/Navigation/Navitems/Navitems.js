import React from "react";
import {Link} from "react-router-dom";

import Navitem from "./Navitem/Navitem";

const navitems = (props) => {
	let nav = props.nav.map(item => {
		return(
			<Link style = {{color: "black", textDecoration: "none"}} to = {"/" + item.split(" ").join("")} key = {item}>
				<Navitem text = {item} />
			</Link>
		)
	})
	return(
		<div>
			{nav}
		</div>
	)
}

export default navitems;