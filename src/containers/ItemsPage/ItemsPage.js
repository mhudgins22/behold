import React, {Component} from "react";
import {Link} from "react-router-dom";

import classes from "./ItemsPage.css";

class ItemsPage extends Component {
	render() {
		return(
			<div>
				<div>
					<h1>Wonderous Items To Create and Use</h1>
				</div>
				<div>
					<Link to = {this.props.match.url + "/NewItem"}>
						<h3>+ Create New Item</h3>
					</Link>
				</div>
			</div>
		);
	}
}

export default ItemsPage;