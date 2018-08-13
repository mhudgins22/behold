import React, {Component} from "react";
import {Route} from "react-router-dom"

import Navbar from "../../components/Navigation/Navbar/Navbar";
import Welcome from "../Welcome/Welcome";
import Create from "../Create/Create"

class Layout extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Route path = "/" exact component = {Welcome} />
				<Route path = "/create" component = {Create} />
			</div>
		)
	}
}

export default Layout;