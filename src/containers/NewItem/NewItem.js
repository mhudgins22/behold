import React, {Component} from "react";

import Input from "../../components/UI/Input/Input";


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
				value: [
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
				value: [
				
				],
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
				value: [
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
				validationRules: {
					required: false
				},
				valid: true,
				touched: false
			},
			flavorText: {
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
			statistics: {
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
					value: nums
				}
			}
		});
	}

	render() {
		let formElements = [];
		for (let element in this.state.controls) {
			formElements.push({
				id: element,
				config: this.state.controls[element]
			});
		}

		let form = formElements.map(element => (
			<Input 
				key = {element.id}
				elementType = {element.config.elementType}
				elementConfig = {element.config.elementConfig}
				value = {element.config.value}
				validationRules = {element.config.validationRules}
				valid = {element.config.valid}
				shouldValidate = {null}
				touched = {element.config.touched}
				changed = {null}/>
		));

		return(
			<div>
				<h1>Create Your New Item </h1>
				<form>
					{form}
				</form>
				
			</div>
		)
	}
}

export default NewItem;