import React from "react";


import classes from "./Sidedrawer.css";

import Navitems from "../Navitems/Navitems";

const sidedrawer = (props) => {
	
	let navigation = ["Create", "Play", "Sign In"];
	return(
		<div>
			<Navitems hidden = {false} sidedrawer nav = {navigation}/>
		</div>
	)
}

export default sidedrawer;