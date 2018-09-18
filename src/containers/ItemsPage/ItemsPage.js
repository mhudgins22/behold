import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import classes from "./ItemsPage.css";

import Card from "../../components/Card/Card";
import ListItem from "../../components/ListItem/ListItem";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";

import * as actions from "../../store/actions/index";

class ItemsPage extends Component {

	state = {
		baseListVisible: true,
		customListVisible: false,
		baseTab: "ActiveTab",
		customTab: "Tab",
		showCard: false,
	}

	componentDidMount() {
		this.props.clearPreviewHandler();
		this.props.fetchItemListHandler();
	}

	onPreviewHandler = (data) => {
		this.props.itemPreviewHandler(data);
		this.props.fetchItemImage(data.imagePath);
		if (window.innerWidth < 1000) {
			this.setState({
				...this.state,
				showCard: true
			})
		}
	}

	makeListHandler = (items) => {
		return (
			items.map(item => {
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
			})
		)
	}

	render() {
		
		let list = <Spinner />;
		let items = null;
		let controls = null;
		let card  = <Card cardType = "item"/>;
		let cardClasses = [classes.Mobile];
		let listClasses = [classes.List];
		let controlClasses = [classes.Controls];

		if (this.props.itemPreview.name) {
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
					itemAbilities = {this.props.itemPreview.abilities}
					itemImage = {this.props.image}
					loading = {this.props.loading}/>
			);
			
			controls = (
				<div className = {classes.CardOptions}>
					<Button clicked = {() => this.props.history.push("/Create/Items/Edit/id=" + this.props.itemPreview.id)} buttonType = "Success" text = "Edit"/>
					<Button clicked = {null} buttonType = "Success" text = "Save as Image" />
				</div>
			);
		}

		if (this.state.showCard === false) {
			cardClasses.push(classes.Hidden);
		}

		if (this.state.showCard === true && window.innerWidth < 1000) {
			listClasses.push(classes.Hidden);
			controlClasses.push(classes.Hidden);
		}

		if (this.props.customList && this.state.customListVisible) {
			items = this.makeListHandler(this.props.customList);
			list = (
				<div>
					<div className = {listClasses.join(" ")}>
						<div>
							<Link 
								onClick = {this.props.clearPreviewHandler} 
								style = {{textDecoration: "none", color: "black"}} 
								to = {this.props.match.url + "/NewItem"}>
								<h3>+ Create New Item</h3>
							</Link>
						</div>
						<div>
							{items}
						</div>
					</div>
					<div className = {classes.Card}>
						{card}
					</div>
					<div className = {cardClasses.join(" ")}>
						{card}
						<div>
							<Button clicked = {() => this.setState({...this.state, showCard: false})} buttonType = "Danger" text = "Back to List" />
						</div>
					</div>
					{this.state.showCard || window.innerWidth >= 1000 ?
					<div>
						{controls}
					</div> 
					: null}
				</div>
			);
		}

		if (this.props.baseList && this.state.baseListVisible) {
			items = this.makeListHandler(this.props.baseList);
			list = (
				<div>
					<div className = {listClasses.join(" ")}>
						<div>
							<h3>Basic Items</h3>
						</div>
						<div>
							{items}
						</div>
					</div>
					<div className = {classes.Card}>
						{card}
					</div>
					<div className = {cardClasses.join(" ")}>
						{card}
						<div>
							<Button clicked = {() => {
								this.setState({
									...this.state, 
									showCard: false
								});
								this.props.clearPreviewHandler();
							}}
							buttonType = "Danger" 
							text = "Back to List" />
						</div>
					</div>
				</div>
			);
		}
		
		return(
			<div className = {classes.Page}>
				<div className = {classes.Header}>
					<h1>Items To Create and Use</h1>
					<Link onClick = {() => this.props.setUploadType("items")} style = {{textDecoration: "none", color: "black"}} to = {this.props.match.url + "/Upload"}>
						<h6>+Upload new images</h6>
					</Link>
				</div>
				<div className = {controlClasses.join(" ")}>
					<Button 
						buttonType = {this.state.baseTab}
						text = "Base Items"
						clicked = {() => {
							this.setState({
								baseListVisible: true,
								customListVisible: false,
								baseTab: "ActiveTab",
								customTab: "Tab"
							});
							this.props.clearPreviewHandler();
						}}/>
					<Button 
						buttonType = {this.state.customTab}
						text = "Custom Items"
						clicked = {() => {
							this.setState({
								baseListVisible: false,
								customListVisible: true,
								baseTab: "Tab",
								customTab: "ActiveTab"
							});
							this.props.clearPreviewHandler();
						}}/>
				</div>
				{list}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		customList: state.items.customList,
		baseList: state.items.baseList,
		itemPreview: state.items.itemPreview,
		image: state.items.image,
		loading: state.items.loading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchItemListHandler: () => dispatch(actions.fetchItemList()),
		itemPreviewHandler: (itemData) => dispatch(actions.previewItemCard(itemData)),
		fetchItemImage: (imagePath) => dispatch(actions.fetchItemImage(imagePath)),
		clearPreviewHandler: () => dispatch(actions.clearItemPreview()),
		setUploadType: (uploadType) => dispatch(actions.setUploadType(uploadType))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);