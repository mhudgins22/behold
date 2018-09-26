import React, {Component} from "react";
import {connect} from "react-redux";

import classes from "./Filter.css";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";

class Filter extends Component {

	state = {
		showFilter: false
	};

	componentWillMount() {
		this.itemFilterPrep();
	}

	itemFilterPrep = () => {
		this.setState({
			...this.state,
			isValid: false,
			controls: {
				imageName: {
					elementType: "input",
					elementConfig: {
						type: "input",
						placeholder: "Image Name"
					},
					value: "",
					validationRules: {
						required: true
					},
					valid: false,
					touched: false,
					visible: true
				},
				itemType: {
					elementType: "radio",
					elementConfig: {
						type: "radio",
						name: "item"
					},
					options: [
						{
							value: "weaponType",
							label: "Weapon",
						},
						{
							value: "armorType",
							label: "Armor",
						},
						{
							value: "consumableType",
							label: "Consumable",
						},
						{
							value: "otherType",
							label: "Other"
						}
					],
					value: "weaponType",
					validationRules: {
					
					},
					valid: true,
					touched: false,
					visible: true
				},
				weaponType: {
					elementType: "select",
					elementConfig: {
					
					},
					options: [
						{
							value: "",
							label: "Weapon Type",
						},
						{
							value: "Club",
							label: "Club",
						},
						{
							value: "Dagger",
							label: "Dagger",
						},
						{
							value: "Greatclub",
							label: "Greatclub",
						},
						{
							value: "Handaxe",
							label: "Handaxe",
						},
						{
							value: "Javelin",
							label: "Javelin",
						},
						{
							value: "Light Hammer",
							label: "Light Hammer",
						},
						{
							value: "Mace",
							label: "Mace",

						},
						{
							value: "Quarterstaff",
							label: "Quarterstaff",
						},
						{
							value: "Sickle",
							label: "Sickle",
						},
						{
							value: "Spear",
							label: "Spear",
						},
						{
							value: "Light Crossbow",
							label: "Light Crossbow",
						},
						{
							value: "Dart",
							label: "Dart",
						},
						{
							value: "Shortbow",
							label: "Shortbow",
						},
						{
							value: "Sling",
							label: "Sling",
						},
						{
							value: "Battleaxe",
							label: "Battleaxe",
						},
						{
							value: "Flail",
							label: "Flail",
						},
						{
							value: "Glaive",
							label: "Glaive",
						},
						{
							value: "Greataxe",
							label: "Greataxe",
						},
						{
							value: "Greatsword",
							label: "Greatsword",
						},
						{
							value: "Halberd",
							label: "Halberd",
						},
						{
							value: "Lance",
							label: "Lance",
						},
						{
							value: "Longsword",
							label: "Longsword",
						},
						{
							value: "Maul",
							label: "Maul",
						},
						{
							value: "Morningstar",
							label: "Morningstar",
						},
						{
							value: "Pike",
							label: "Pike",
						},
						{
							value: "Rapier",
							label: "Rapier",
						},
						{
							value: "Scimitar",
							label: "Scimitar",
						},
						{
							value: "Shortsword",
							label: "Shortsword",
						},
						{
							value: "Trident",
							label: "Trident",
						},
						{
							value: "War Pick",
							label: "War Pick",
						},
						{
							value: "Warhammer",
							label: "Warhammer",
						},
						{
							value: "Whip",
							label: "Whip",
						},
						{
							value: "Blowgun",
							label: "Blowgun",
						},
						{
							value: "Hand Crossbow",
							label: "Hand Crossbow",
						},
						{
							value: "Heavy Crossbow",
							label: "Heavy Crossbow",
						},
						{
							value: "Longbow",
							label: "Longbow",
						},
						{
							value: "Net",
							label: "Net",
						},
					],
					value: "",
					validationRules: {
						required: false
					},
					valid: true,
					touched: false,
					visible: true
				},
				armorType: {
					elementType: "select",
					elementConfig: {
				
					},
					options: [
						{
							value: "",
							label: "Armor Type",
						},
						{
							value: "Padded Armor",
							label: "Padded Armor",
						},
						{
							value: "Leather Armor",
							label: "Leather Armor",
						},
						{
							value: "Studded Leather Armor",
							label: "Studded Leather Armor",
						},
						{
							value: "Hide Armor",
							label: "Hide Armor",
						},
						{
							value: "Chain Shirt",
							label: "Chain Shirt",
						},
						{
							value: "Scale Mail",
							label: "Scale Mail",
						},
						{
							value: "Breastplate",
							label: "Breastplate",
						},
						{
							value: "Half Plate",
							label: "Half Plate",
						},
						{
							value: "Ring Mail",
							label: "Ring Mail",
						},
						{
							value: "Chain Mail",
							label: "Chain Mail",
						},
						{
							value: "Splint Mail",
							label: "Splint Mail",
						},
						{
							value: "Plate Mail",
							label: "Plate Mail",
						},
						{
							value: "Shield",
							label: "Shield",
						},
					],
					value: "",
					validationRules: {
						required: false
					},
					valid: true,
					touched: false,
					visible: false
				},
				consumableType: {
					elementType: "select",
					elementConfig: {
				
					},
					options: [
						{
							value: "",
							label: "Consumable Type",
						},
						{
							value: "Potion",
							label: "Potion"
						},
						{
							value: "Poison",
							label: "Poison"
						},
						{
							value: "Sroll",
							label: "Scroll"
						},
						{
							value: "Adventuring Gear",
							label: "Adventuring Gear"
						},
						{
							value: "Wonderous Item",
							label: "Wonderous Item"
						}
					],
					value: "",
					validationRules: {
						required: false
					},
					valid: true,
					touched: false,
					visible: false
				},
				otherType: {
					elementType: "input",
					elementConfig: {
						type: "input",
						placeholder: "Item Type"
					},
					value: "",
					validationRules: {
						required: false
					},
					valid: true,
					touched: false,
					visible: false
				},
			}
		})
	}

	onChangeHandler = (event, element) => {
		let value = event.target.value
		if (element === "itemType") {
			switch(event.target.value) {
				case "weaponType":
					//FIX SETSTATE ISSUE BY ONLY HAVING ONE SETSTATE FOR FUNCTION
					//Handles visiblity for form options
					this.onVisibilityHandler(["weaponType"], true);
					this.onVisibilityHandler(["armorType", "consumableType"], false);
					break;
				case "armorType":
					this.onVisibilityHandler(["armorType"], true);
					this.onVisibilityHandler(["weaponType", "consumableType"], false)
					break;
				case "consumableType":
					//adjust visibility of item types
					this.onVisibilityHandler(["consumableType"], true);
					this.onVisibilityHandler(["weaponType", "armorType"], false);
					break;
				case "otherType":
					this.onVisibilityHandler(["otherType"], true);
					this.onVisibilityHandler(['weaponType', "armorType", "consumableType"], false);
				default:
					break;
			}
		}

		//Sets the value of input elements
		this.setState({
			...this.state,
			controls: {
				...this.state.controls,
				[element]: {
					...this.state.controls[element],
					value: value,
					valid: this.checkValidity(element, value),
					touched: true
				},
			},
		});
	}

	//Update valid state of element
	checkValidity = (element, value) => {
		let valid = true
		if (this.state.controls[element].validationRules.required && value === "") {
			valid = false
		}

		if (this.state.controls[element].validationRules.minLength && value.length < this.state.controls[element].validationRules.minLength) {
			valid = false
		}
		return valid;
	}


	//Determines if save is enabled
	shouldValidate = () => {
		for (let element in this.state.controls) {
			if (this.state.controls[element].valid === false) {
				return false;
			}
		}
		return true;
	}

	onVisibilityHandler = (arr, bool) => {
		let updatedState = this.state;
		for (let i = 0; i < arr.length; ++i) {
			updatedState = {
				controls: {
					...updatedState.controls,
					[arr[i]]: {
						...updatedState.controls[arr[i]],
						visible: bool,
						value: ""
					}
				}
			}
		}
		this.state = updatedState;
	}

	//Maps state to input Elements
	mapElements = (elements) => {
		return elements.map((element, i) => {
			if (element.config.visible) {
				return(
					<Input 
						key = {element.id + i}
						className = {classes.Input}
						elementType = {element.config.elementType}
						elementConfig = {element.config.elementConfig}
						options = {element.config.options}
						label = {element.config.label}
						value = {element.config.value}
						valid = {element.config.valid}
						touched = {element.config.touched}
						changed = {(event) => this.onChangeHandler(event, element.id)}/>
				)
			}
		});
	};

	toggleFilterHandler = () => {
		this.setState({
			...this.state,
			showFilter: !this.state.showFilter
		})
	}

	render() {
		
		let formElements = [];
		let form = null
		for (let element in this.state.controls) {
			formElements.push({
				id: element,
				config: this.state.controls[element]
			});
		}
		form = this.mapElements(formElements);

		return(
			<div>
				<Dropdown form = {form} view = {this.state.showFilter} clicked = {this.toggleFilterHandler}/>
			</div>
		)
	}
}

export default Filter