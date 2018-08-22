import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import classes from "./ItemsPage.css";

import Card from "../../components/Card/Card";

import * as actions from "../../store/actions/index";

class ItemsPage extends Component {

	componentDidMount() {
		this.props.fetchItemListHandler();
	}

	render() {
		
		let customItems = null

		if (this.props.customList) {
			customItems = this.props.customList.map(item => {
				return(
					<article className = {classes.Item} key = {item.id}>
						<h3>{item.name}</h3>
						<p>{item.rarity} {item.type} {item.properties ? "- " + item.properties : null}</p>
					</article>
				)
			});
		}
		

		return(
			<div>
				<div className = {classes.Header}>
					<h1>Wonderous Items To Create and Use</h1>
				</div>
				<div className = {classes.List}>
					<div>
						<Link style = {{textDecoration: "none", color: "black"}} to = {this.props.match.url + "/NewItem"}>
							<h3>+ Create New Item</h3>
						</Link>
					</div>
					<div>
						{customItems}
					</div>
				</div>
				<div className = {classes.Card}>
					<Card 
						cardType = "item"/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		customList: state.items.customList
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchItemListHandler: () => dispatch(actions.fetchItemList())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);