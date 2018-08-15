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
				validation: {
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
				validation: {
					required: true
				},
				valid: true,
				touched: false
			}
		}
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
				validation = {element.config.validation}
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