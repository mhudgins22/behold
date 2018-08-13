import React from "react";

import Navitems from "../Navitems/Navitems";

import classes from "./Navbar.css";

const navbar = (props) => {
	let navigation = ["Create", "Play", "Sign In"];
	return(
		<div className = {classes.Navbar}>
			<Navitems nav = {navigation}/>
		</div>
	)
}

export default navbar;