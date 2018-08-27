import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import Navbar from "../../components/Navigation/Navbar/Navbar";
import Welcome from "../Welcome/Welcome";
import Create from "../Create/Create";
import Play from "../Play/Play";
import CharacterPage from "../CharacterPage/CharacterPage";
import ItemsPage from "../ItemsPage/ItemsPage";
import NewCharacter from "../NewCharacter/NewCharacter";
import NewCharacterStats from "../NewCharacter/NewCharacterStats/NewCharacterStats";
import NewItem from "../NewItem/NewItem";

import classes from "./Layout.css";

class Layout extends Component {
	render() {
		return (
			<div className = {classes.Layout}>
				<Navbar />
				<Route path = "/" exact component = {Welcome} />
				<Route path = "/Play" component = {Play} />
				<Route path = "/Create" exact component = {Create} />
				<Route path = "/Create/Characters" exact component = {CharacterPage} />
				<Route path = "/Create/Characters/NewCharacter" exact component = {NewCharacter} />
				<Route path = "/Create/Characters/NewCharacter/Stats" exact component = {NewCharacterStats} />
				<Route path = "/Create/Items" exact component = {ItemsPage} />
				<Route path = "/Create/Items/NewItem" component = {NewItem} />
				<Route path = "/Create/Items/Edit/:id" component = {NewItem} />
			</div>
		)
	}
}

export default Layout;
