import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navitems from "../Navitems/Navitems";
import Logo from "../../Logo/Logo";

import classes from "./Navbar.css";



const navbar = (props) => {
	let navigation = ["Create", "Play", "Sign In"];
	return(
		<div className = {classes.Navbar}>
			<FontAwesomeIcon className = {classes.Toggle} onClick = {props.clicked} icon="bars" />
			<Link to = "/">
				<Logo className = {classes.Logo} image = "https://icon2.kisspng.com/20180323/aje/kisspng-sword-shield-clip-art-shield-5ab5be22208755.5271689515218601301332.jpg" altText = "Sword Shield Clip art - shield @kisspng"/>
			</Link>
			<Navitems nav = {navigation}/>
		</div>
	)
}

export default navbar;