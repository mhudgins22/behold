import React, {Component} from "react";

import Input from "../../components/UI/Input/Input";
import Card from "../../components/Card/Card";

class NewItem extends Component {

	state = {
		controls: {
			itemName: {
				elementType: "input",
				elementConfig: {
					type: "input",
					placeholder: "The Name of Your Item"
				},
				value: "",
				validationRules: {
					required: true
				},
				valid: false,
				touched: false
			},
			itemRarity: {
				elementType: "select",
				elementConfig: {
					
				},
				options: [
					{
						value: "",
						label: "Select a rarity"
					},
					{
						value: "Common",
						label: "Common"
					},
					{
						value: "Uncommon",
						label: "Uncommon"
					},
					{
						value: "Rare",
						label: "Rare"
					},
					{
						value: "Very Rare",
						label: "Very Rare"
					},
					{
						value: "Legendary",
						label: "Legendary"
					},
					{
						value: "Sentient",
						label: "Sentient"
					},
					{
						value: "Artifact",
						label: "Artifact"
					}
				], 
				value: "",
				validationRules: {
					required: true
				},
				valid: true,
				touched: false
			},
			itemType: {
				elementType: "input",
				elementConfig: {
					type: "input",
					placeholder: "Enter item type (ie. Battleaxe, Potion, Ammunition)"
				},
				value: "",
				validationRules: {
					required: true
				},
				valid: false,
				touched: false
			},
			itemProperties: {
				elementType: "input",
				elementConfig: {
					type: "input",
					placeholder: "ex: Light, Finess...."
				},
				value: "",
				validationRules: {
					required: false
				},
				valid: true,
				touched: false
			},
			numberOfDamageDice: {
				elementType: "select",
				elementConfig: {
				
				},
				options: [
				
				],
				value: "",
				validationRules: {
					required: false
				},
				valid: true,
				touched: false
			},
			damageDie: {
				elementType: "select",
				elementConfig: {
					
				},
				options: [
					{
						value: "",
						label: "Damage Die"
					},
					{
						value: "d4",
						label: "d4",
					},
					{
						value: "d6",
						label: "d6",
					},
					{
						value: "d8",
						label: "d8",
					},
					{
						value: "d10",
						label: "d10",
					},
					{
						value: "d12",
						label: "d12",
					},
					{
						value: "d20",
						label: "d20",
					},
					{
						value: "d100",
						label: "d100",
					},
				],
				value: "",
				validationRules: {
					required: false
				},
				valid: true,
				touched: false
			},
			damageType: {
				elementType: "select",
				elementConfig: {
				
				},
				options: [
					{
						value: "",
						label: "Damage Type"
					},
					{
						value: "Piercing",
						label: "Piercing"
					},
					{
						value: "Slashing",
						label: "Slashing"
					},
					{
						value: "Bludgeoning",
						label: "Bludgeoning"
					},
					{
						value: "Fire",
						label: "Fire"
					},
					{
						value: "Lightning",
						label: "Lightning"
					},
					{
						value: "Poison",
						label: "Poison"
					},
					{
						value: "Acid",
						label: "Acid"
					},
					{
						value: "Thunder",
						label: "Thunder"
					},
					{
						value: "Radiant",
						label: "Radiant"
					},
					{
						value: "Necrotic",
						label: "Necrotic"
					},
					{
						value: "Cold",
						label: "Cold"
					},
					{
						value: "Force",
						label: "Force"
					}
				],
				value: "",
				validationRules: {
					required: false
				},
				valid: true,
				touched: false
			},
			itemFlavorText: {
				elementType: "textarea",
				elementConfig: {
					type: "textarea",
					placeholder: "Item's lore, description or flavor text"
				},
				value: "",
				validationRules: {
					required: true
				},
				valid: false,
				touched: false
			},
			itemAttributes: {
				elementType: "textarea",
				elementConfig: {
					type: "textarea",
					placeholder: "Item's extra abilities (extra damage types, charges, effects)"
				},
				value: "",
				validationRules: {
					required: false
				},
				valid: true,
				touched: false
			}
		}
	}

	componentDidMount() {
	//I'm lazy so populates the number of dice with nums 1-100 for damage dice
	let nums = [{
		value: "",
		label: "# of Dice"
	}];
		for (let i = 1; i < 100; ++i) {
			nums.push({
				value: i,
				label: i
			});
		}
		this.setState({
			...this.state,
			controls: {
				...this.state.controls,
				numberOfDamageDice: {
					...this.state.controls.numberOfDamageDice,
					options: nums
				}
			}
		});
	}

	//Change values for input and textarea elements
	onChangeHandler = (event, element) => {
		this.setState({
			controls: {
				...this.state.controls,
				[element]: {
					...this.state.controls[element],
					value: event.target.value
				}
			}
		})
	}

	//Changes value for select elements currently doesn't work
	onSelectHandler = (event, element) => {
		this.setState({
			controls: {
				...this.state.controls,
				[element]: {
					...this.state.controls[element],
					value: event.target.value
				}
			}
		})
	}

	render() {
		let formElements = [];
		for (let element in this.state.controls) {
			formElements.push({
				id: element,
				config: this.state.controls[element]
			});
		}

		let form = formElements.map(element => {
			return (
				<Input 
					key = {element.id}
					elementType = {element.config.elementType}
					elementConfig = {element.config.elementConfig}
					options = {element.config.options}
					value = {element.config.value}
					validationRules = {element.config.validationRules}
					valid = {element.config.valid}
					shouldValidate = {null}
					touched = {element.config.touched}
					changed = {(event) => this.onChangeHandler(event, element.id)}/>
			);
		});

		return(
			<div>
				<h1>Create Your New Item </h1>
				<form>
					{form}
				</form>
				<Card 
					cardType = "item"  
					itemName = {this.state.controls.itemName.value} 
					itemRarity = {this.state.controls.itemRarity.value}
					itemType = {this.state.controls.itemType.value}
					itemProperties = {this.state.controls.itemProperties.value}
					numberOfDamageDice = {this.state.controls.numberOfDamageDice.value}
					damageDie = {this.state.controls.damageDie.value}
					damageType = {this.state.controls.damageType.value}
					itemFlavorText = {this.state.controls.itemFlavorText.value}
					itemAttributes = {this.state.controls.itemAttributes.value}/>
			</div>
		)
	}
}

export default NewItem;