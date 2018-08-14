import React, { Component } from "react";
import { Route } from "react-router-dom";

import Navbar from "../../components/Navigation/Navbar/Navbar";
import Welcome from "../Welcome/Welcome";
import Create from "../Create/Create";
import Play from "../Play/Play";
import CharacterPage from "../CharacterPage/CharacterPage";
import NewCharacter from "../NewCharacter/NewCharacter";
import classes from "./Layout.css";

class Layout extends Component {
	render() {
		return (
			<div className = {classes.Layout}>
				<Navbar />
				<Route path = "/" exact component = {Welcome} />
				<Route path = "/Create" component = {Create} />
				<Route path = "/Play" component = {Play} />
				<Route path = "/CharacterPage" component = {CharacterPage} />
				<Route path = "/NewCharacter" component = {NewCharacter} />
			</div>
		)
	}
}

export default Layout;
