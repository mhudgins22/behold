import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import classes from "./ItemsPage.css";

import Card from "../../components/Card/Card";
import ListItem from "../../components/ListItem/ListItem";
import Button from "../../components/UI/Button/Button";

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
		let buttons = null;
		if (this.props.itemPreview) {
			card = (
				<Card 
					cardType = "item"  
					itemName = {this.props.itemPreview.name} 
					itemRarity = {this.props.itemPreview.rarity}
					itemType = {this.props.itemPreview.type}
					itemProperties = {this.props.itemPreview.properties}
					numberOfDamageDiceOne = {this.props.itemPreview.damageValues[0].numberOfDice}
					damageDieOne = {this.props.itemPreview.damageValues[0].die}
					damageTypeOne = {this.props.itemPreview.damageValues[0].type}
					damageBonusOne = {this.props.itemPreview.damageValues[0].bonus}
					numberOfDamageDiceTwo = {this.props.itemPreview.damageValues[1].numberOfDice}
					damageDieTwo = {this.props.itemPreview.damageValues[1].die}
					damageBonusTwo = {this.props.itemPreview.damageValues[1].bonus}
					damageTypeTwo = {this.props.itemPreview.damageValues[1].type}
					numberOfDamageDiceThree = {this.props.itemPreview.damageValues[2].numberOfDice}
					damageDieThree = {this.props.itemPreview.damageValues[2].die}
					damageBonusThree = {this.props.itemPreview.damageValues[2].bonus}
					damageTypeThree = {this.props.itemPreview.damageValues[2].type}
					armorClass = {this.props.itemPreview.armorClassValues.AC}
					armorClassBonus = {this.props.itemPreview.armorClassValues.bonus}
					numberOfHealingDice = {this.props.itemPreview.healingValues.numberOfDice}
					healingDie = {this.props.itemPreview.healingValues.die}
					healingBonus = {this.props.itemPreview.healingValues.bonus}
					itemFlavorText = {this.props.itemPreview.flavorText}
					itemAbilities = {this.props.itemPreview.abilities}/>
			);

			buttons = (
				<div className = {classes.CardOptions}>
					<Button clicked = {() => this.props.history.push("/Create/Items/Edit/id=" + this.props.itemPreview.id)} buttonType = "Success" text = "Edit"/>
					<Button clicked = {null} buttonType = "Success" text = "Save as Image" />
				</div>
			)
		}
		
		return(
			<div>
				<div className = {classes.Header}>
					<h1>Wonderous Items To Create and Use</h1>
				</div>
				<div className = {classes.List}>
					<div>
						<Link onClick = {this.props.clearPreviewHandler} style = {{textDecoration: "none", color: "black"}} to = {this.props.match.url + "/NewItem"}>
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
				{buttons}
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
		itemPreviewHandler: (itemData) => dispatch(actions.previewItemCard(itemData)),
		clearPreviewHandler: () => dispatch(actions.clearItemPreview())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);