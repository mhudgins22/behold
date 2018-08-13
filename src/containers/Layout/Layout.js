import React, {Component} from "react";
import {Route} from "react-router-dom"

import Navbar from "../../components/Navigation/Navbar/Navbar";
import Welcome from "../Welcome/Welcome";
import Create from "../Create/Create";
import Play from "../Play/Play";

import classes from "./Layout.css";

class Layout extends Component {
	render() {
		return (
			<div className = {classes.Layout}>
				<Navbar />
				<Route path = "/" exact component = {Welcome} />
				<Route path = "/Create" component = {Create} />
				<Route path = "/Play" component = {Play} />
			</div>
		)
	}
}

export default Layout;