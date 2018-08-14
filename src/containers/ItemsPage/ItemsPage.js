import React, {Component} from "react";
import {Link} from "react-router-dom";

class ItemsPage extends Component {
	render() {
		return(
			<div>
				<h1>Wonderous Items To Create and Use</h1>
				<Link to = {this.props.match.url + "/NewItem"}>
					<h3>+ Create New Item</h3>
				</Link>
			</div>
		);
	}
}

export default ItemsPage;