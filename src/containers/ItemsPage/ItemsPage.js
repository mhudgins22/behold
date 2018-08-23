import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import classes from "./ItemsPage.css";

import Card from "../../components/Card/Card";
import ListItem from "../../components/ListItem/ListItem";

import * as actions from "../../store/actions/index";

class ItemsPage extends Component {

	componentDidMount() {
		this.props.fetchItemListHandler();
	}

	onPreviewHandler = (data) => {
		this.props.itemPreviewHandler(data)
	}

	render() {
		
		let customItems = null

		if (this.props.customList) {
			customItems = this.props.customList.map(item => {
				return(
					<ListItem 
						key = {item.id}
						listType = "item"
						name = {item.name}
						rarity = {item.rarity}
						properties = {item.properties}
						type = {item.type}
						clicked = {() => this.onPreviewHandler(item)}/>
				)
			});
		}
		
		let card = <Card cardType = "item"/>;
		if (this.props.itemPreview) {
			card = (
				<Card 
					cardType = "item"  
					itemName = {this.props.itemPreview.name} 
					itemRarity = {this.props.itemPreview.rarity}
					itemType = {this.props.itemPreview.type}
					itemProperties = {this.props.itemPreview.properties}
					numberOfDamageDiceOne = {this.props.itemPreview.damage[0].numberOfDice}
					damageDieOne = {this.props.itemPreview.damage[0].die}
					damageTypeOne = {this.props.itemPreview.damage[0].type}
					damageBonusOne = {this.props.itemPreview.damage[0].bonus}
					numberOfDamageDiceTwo = {this.props.itemPreview.damage[1].numberOfDice}
					damageDieTwo = {this.props.itemPreview.damage[1].die}
					damageBonusTwo = {this.props.itemPreview.damage[1].bonus}
					damageTypeTwo = {this.props.itemPreview.damage[1].type}
					numberOfDamageDiceThree = {this.props.itemPreview.damage[2].numberOfDice}
					damageDieThree = {this.props.itemPreview.damage[2].die}
					damageBonusThree = {this.props.itemPreview.damage[2].bonus}
					damageTypeThree = {this.props.itemPreview.damage[2].type}
					armorClass = {this.props.itemPreview.armorClass.AC}
					armorClassBonus = {this.props.itemPreview.armorClass.bonus}
					numberOfHealingDice = {this.props.itemPreview.healing.numberOfDice}
					healingDie = {this.props.itemPreview.healing.die}
					healingBonus = {this.props.itemPreview.healing.bonus}
					itemFlavorText = {this.props.itemPreview.flavorText}
					itemAbilities = {this.props.itemPreview.abilities}/>
			)
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
					{card}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		customList: state.items.customList,
		itemPreview: state.items.itemPreview
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchItemListHandler: () => dispatch(actions.fetchItemList()),
		itemPreviewHandler: (itemData) => dispatch(actions.previewItemCard(itemData)) 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);