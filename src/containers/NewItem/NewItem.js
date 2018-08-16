import React, {Component} from "react";

import Input from "../../components/UI/Input/Input";
import Card from "../../components/Card/Card";

import classes from "./NewItem.css";

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
				touched: false,
				visible: true
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
						value: "Weapon",
						label: "Weapon",
					},
					{
						value: "Armor",
						label: "Armor",
					},
					{
						value: "Consumable",
						label: "Consumable",
					},
					{
						value: "Other",
						label: "Other",
					}
				],
				value: "Weapon",
				validationRules: {
					required: true
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
						label: "Weapon Type"
					},
					{
						value: "Club",
						label: "Club",
					},
					{
						value: "Dagger",
						label: "Dagger"
					},
					{
						value: "Greatclub",
						label: "Greatclub"
					},
					{
						value: "Handaxe",
						label: "Handaxe"
					},
					{
						value: "Javelin",
						label: "Javelin"
					},
					{
						value: "Light Hammer",
						label: "Light Hammer"
					},
					{
						value: "Mace",
						label: "Mace"
					},
					{
						value: "Quarterstaff",
						label: "Quarterstaff"
					},
					{
						value: "Sickle",
						label: "Sickle"
					},
					{
						value: "Spear",
						label: "Spear"
					},
					{
						value: "Light Crossbow",
						label: "Light Crossbow"
					},
					{
						value: "Dart",
						label: "Dart"
					},
					{
						value: "Shortbow",
						label: "Shortbow"
					},
					{
						value: "Sling",
						label: "Sling"
					},
					{
						value: "Battleaxe",
						label: "Battleaxe"
					},
					{
						value: "Flail",
						label: "Flail"
					},
					{
						value: "Glaive",
						label: "Glaive"
					},
					{
						value: "Greataxe",
						label: "Greataxe"
					},
					{
						value: "Greatsword",
						label: "Greatsword"
					},
					{
						value: "Halberd",
						label: "Halberd"
					},
					{
						value: "Lance",
						label: "Lance"
					},
					{
						value: "Longsword",
						label: "Longsword"
					},
					{
						value: "Maul",
						label: "Maul"
					},
					{
						value: "Morningstar",
						label: "Morningstar"
					},
					{
						value: "Pike",
						label: "Pike"
					},
					{
						value: "Rapier",
						label: "Rapier"
					},
					{
						value: "Scimitar",
						label: "Scimitar"
					},
					{
						value: "Shortsword",
						label: "Shortsword"
					},
					{
						value: "Trident",
						label: "Trident"
					},
					{
						value: "War Pick",
						label: "War Pick"
					},
					{
						value: "Warhammer",
						label: "Warhammer"
					},
					{
						value: "Whip",
						label: "Whip"
					},
					{
						value: "Blowgun",
						label: "Blowgun"
					},
					{
						value: "Hand Crossbow",
						label: "Hand Crossbow"
					},
					{
						value: "Heavy Crossbow",
						label: "Heavy Crossbow"
					},
					{
						value: "Longbow",
						label: "Longbow"
					},
					{
						value: "Net",
						label: "Net"
					},
				],
				value: "",
				validationRules: {
					required: true
				},
				valid: false,
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
						label: "Armor Type"
					},
					{
						value: "Padded Armor",
						label: "Padded Armor"
					},
					{
						value: "Leather Armor",
						label: "Leather Armor"
					},
					{
						value: "Studded Leather Armor",
						label: "Studded Leather Armor"
					},
					{
						value: "Hide Armor",
						label: "Hide Armor"
					},
					{
						value: "Chain Shirt",
						label: "Chain Shirt"
					},
					{
						value: "Scale Mail",
						label: "Scale Mail"
					},
					{
						value: "Breastplate",
						label: "Breastplate"
					},
					{
						value: "Half Plate",
						label: "Half Plate"
					},
					{
						value: "Ring Mail",
						label: "Ring Mail"
					},
					{
						value: "Chain Mail",
						label: "Chain Mail"
					},
					{
						value: "Splint Mail",
						label: "Splint Mail"
					},
					{
						value: "Plate Mail",
						label: "Plate Mail"
					},
					{
						value: "Shield",
						label: "Shield"
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
				touched: false,
				visible: true
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
				touched: false,
				visible: true
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
				touched: false,
				visible: true
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
				touched: false,
				visible: true
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
				touched: false,
				visible: true
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
				touched: false,
				visible: true
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
		console.log(event.target.value);
		if (element == "itemType") {
			switch(event.target.value) {
				case "Weapon":
					this.setState({
						controls: {
							...this.state.controls,
							weaponType: {
								...this.state.controls.weaponType,
								visible: true
							},
							armorType: {
								...this.state.controls.armorType,
								visible: false
							},
						}
					});
					break;
				case "Armor":
					this.setState({
						controls: {
							...this.state.controls,
							weaponType: {
								...this.state.controls.weaponType,
								visible: false
							},
							armorType: {
								...this.state.controls.armorType,
								visible: true
							},
						}
					});
					break;
			}
		}
		this.setState({
			controls: {
				...this.state.controls,
				[element]: {
					...this.state.controls[element],
					value: event.target.value
				}
			}
		});
	}


	render() {
		let itemInfoElements = [];
		let itemStatElements = [];
		let i = 0;
		for (let element in this.state.controls) {
			if (i < 7) {
				itemInfoElements.push({
					id: element,
					config: this.state.controls[element]
				});
			} else {
				itemStatElements.push({
					id: element,
					config: this.state.controls[element]
				});
			}
			i += 1;
		}

		let infoForm = itemInfoElements.map(element => {
			return (
				<Input 
					key = {element.id}
					className = {classes.Input}
					elementType = {element.config.elementType}
					elementConfig = {element.config.elementConfig}
					options = {element.config.options}
					value = {element.config.value}
					validationRules = {element.config.validationRules}
					valid = {element.config.valid}
					visible = {element.config.visible}
					shouldValidate = {null}
					touched = {element.config.touched}
					changed = {(event) => this.onChangeHandler(event, element.id)}/>
			);
		});
			

		let statForm = itemStatElements.map(element => {
			return (
				<Input 
					key = {element.id}
					className = {classes.Input}
					elementType = {element.config.elementType}
					elementConfig = {element.config.elementConfig}
					options = {element.config.options}
					value = {element.config.value}
					validationRules = {element.config.validationRules}
					valid = {element.config.valid}
					visible = {element.config.visible}
					shouldValidate = {null}
					touched = {element.config.touched}
					changed = {(event) => this.onChangeHandler(event, element.id)}/>
			);
		});

		return(
			<div>
				<h1>Create Your New Item </h1>
				<form className = {classes.Form}>
					<div className = {classes.Section}>
						<h2>Item Info</h2>
						{infoForm}
					</div>
					<div className = {classes.Section}>
						<h2>Item Stats</h2>
						{statForm}
					</div>
				</form>
				<Card 
					cardType = "item"  
					itemName = {this.state.controls.itemName.value} 
					itemRarity = {this.state.controls.itemRarity.value}
					itemType = {this.state.controls.weaponType.value}
					itemProperties = {this.state.controls.itemProperties.value}
					numberOfDamageDice = {this.state.controls.numberOfDamageDice.value}
					damageDie = {this.state.controls.damageDie.value}
					damageType = {this.state.controls.damageType.value}
					itemFlavorText = {this.state.controls.itemFlavorText.value}
					itemAttributes = {this.state.controls.itemAttributes.value}/>
				{this.state.controls.weaponType.visible === true ? <p>A OK</p> : <p>Thats a Neg</p>}
			</div>
		)
	}
}

export default NewItem;