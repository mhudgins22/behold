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
						label: "Weapon Type",
						properties: ""
					},
					{
						value: "Club",
						label: "Club",
						properties: "Light"
					},
					{
						value: "Dagger",
						label: "Dagger",
						properties: "Finesse, Light, Thrown(Range 20/60)"
					},
					{
						value: "Greatclub",
						label: "Greatclub",
						properties: "Two-handed"
					},
					{
						value: "Handaxe",
						label: "Handaxe",
						properties: "Light, Thrown(Range 20/60)"
					},
					{
						value: "Javelin",
						label: "Javelin",
						properties: "Thrown(Range 30/120)"
					},
					{
						value: "Light Hammer",
						label: "Light Hammer",
						properties: "Light, Thrown(Range 20/60)"
					},
					{
						value: "Mace",
						label: "Mace",
						properties: ""

					},
					{
						value: "Quarterstaff",
						label: "Quarterstaff",
						properties: "Versatile(1d8)"
					},
					{
						value: "Sickle",
						label: "Sickle",
						properties: "Light"
					},
					{
						value: "Spear",
						label: "Spear",
						properties: "Thrown(range 20/60), Versatile(1d8)"
					},
					{
						value: "Light Crossbow",
						label: "Light Crossbow",
						properties: "Ammunition(Range 80/320), Loading, Two-handed"
					},
					{
						value: "Dart",
						label: "Dart",
						properties: "Finesse, Thrown(Range 20/60)"
					},
					{
						value: "Shortbow",
						label: "Shortbow",
						properties: "Ammunition(Range 80/320), Two-handed"
					},
					{
						value: "Sling",
						label: "Sling",
						properties: "Ammunition(Range 30/120)"
					},
					{
						value: "Battleaxe",
						label: "Battleaxe",
						properties: "Versatile(1d10)"
					},
					{
						value: "Flail",
						label: "Flail",
						properties: ""
					},
					{
						value: "Glaive",
						label: "Glaive",
						properties: "Heavy, Reach, Two-handed"
					},
					{
						value: "Greataxe",
						label: "Greataxe",
						properties: "Heavy, Two-handed"
					},
					{
						value: "Greatsword",
						label: "Greatsword",
						properties: "Heavy, Two-handed"
					},
					{
						value: "Halberd",
						label: "Halberd",
						properties: "Heavy, Reach, Two-handed"
					},
					{
						value: "Lance",
						label: "Lance",
						properties: "Reach, Special"
					},
					{
						value: "Longsword",
						label: "Longsword",
						properties: "Versatile(1d10)"
					},
					{
						value: "Maul",
						label: "Maul",
						properties: "Heavy, Two-handed"
					},
					{
						value: "Morningstar",
						label: "Morningstar",
						properties: ""
					},
					{
						value: "Pike",
						label: "Pike",
						properties: "Heavy, Reach, Two-handed"
					},
					{
						value: "Rapier",
						label: "Rapier",
						properties: "Finesse"
					},
					{
						value: "Scimitar",
						label: "Scimitar",
						properties: "Finesse, Light"
					},
					{
						value: "Shortsword",
						label: "Shortsword",
						properties: "Finesse, Light"
					},
					{
						value: "Trident",
						label: "Trident",
						properties: "Thrown(Range 20/60), Versatile(1d8)"
					},
					{
						value: "War Pick",
						label: "War Pick",
						properties: ""
					},
					{
						value: "Warhammer",
						label: "Warhammer",
						properties: "Versatile(1d10)"
					},
					{
						value: "Whip",
						label: "Whip",
						properties: "Finesse, Reach"
					},
					{
						value: "Blowgun",
						label: "Blowgun",
						properties: "Ammunition(Range 25/100), Loading"
					},
					{
						value: "Hand Crossbow",
						label: "Hand Crossbow",
						properties: "Ammunition(Range 30/120), Light, Loading"
					},
					{
						value: "Heavy Crossbow",
						label: "Heavy Crossbow",
						properties: "Ammunition(Range 100/400), Heavy, Loading, Two-handed"
					},
					{
						value: "Longbow",
						label: "Longbow",
						properties: "Ammunition(Range 150/600), Heavy, Two-handed"
					},
					{
						value: "Net",
						label: "Net",
						properties: "Special, Thrown(Range 5/15)"
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
						label: "Armor Type",
						properties: ""
					},
					{
						value: "Padded Armor",
						label: "Padded Armor",
						properties: "Light, Stealth Disadvantage"
					},
					{
						value: "Leather Armor",
						label: "Leather Armor",
						properties: "Light"
					},
					{
						value: "Studded Leather Armor",
						label: "Studded Leather Armor",
						properties: "Light"
					},
					{
						value: "Hide Armor",
						label: "Hide Armor",
						properties: "Medium"
					},
					{
						value: "Chain Shirt",
						label: "Chain Shirt",
						properties: "Medium"
					},
					{
						value: "Scale Mail",
						label: "Scale Mail",
						properties: "Medium, Stealth Disadvantage"
					},
					{
						value: "Breastplate",
						label: "Breastplate",
						properties: "Medium"
					},
					{
						value: "Half Plate",
						label: "Half Plate",
						properties: "Medium, Stealth Disadvantage"
					},
					{
						value: "Ring Mail",
						label: "Ring Mail",
						properties: "Heavy, Stealth Disadvantage"
					},
					{
						value: "Chain Mail",
						label: "Chain Mail",
						properties: "Heavy, Stealth Disadvantage"
					},
					{
						value: "Splint Mail",
						label: "Splint Mail",
						properties: "Heavy, Stealth Disadvantage"
					},
					{
						value: "Plate Mail",
						label: "Plate Mail",
						properties: "Heavy, Stealth Disadvantage"
					},
					{
						value: "Shield",
						label: "Shield",
						properties: ""
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
			itemCheckBoxes: {
				elementType: "checkbox",
				elementConfig: {
					type: "checkbox"
				},
				options: [
					{
						value: "AC",
						label: "AC",
						checked: false
					},
					{
						value: "Damage",
						label: "Damage",
						checked: true
					},
					{
						value: "Healing",
						label: "Healing",
						checked: false
					}
				],
				value: "",
				validationRules: {
				
				},
				valid: true,
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
		if (element == "itemType") {
			switch(event.target.value) {
				case "Weapon":
					//Bad way to set state will fix later
					this.state.controls.weaponType.visible = true;
					this.state.controls.armorType.visible = false;
					this.state.controls.itemCheckBoxes.options[1].checked = true;
					this.state.controls.itemCheckBoxes.options[0].checked = false;
					/*this.setState({
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
							itemCheckBoxes: {
								...this.state.controls.itemCheckBoxes,
								options: [
									...this.state.controls.itemCheckBoxes.options,
									[1]: {
										checked: true
									}
								]
							}
						}
					});*/
					break;
				case "Armor":
					//Bad way to set state it will fix later
					this.state.controls.weaponType.visible = false;
					this.state.controls.armorType.visible = true;
					this.state.controls.itemCheckBoxes.options[0].checked = true;
					this.state.controls.itemCheckBoxes.options[1].checked = false;
					/*this.setState({
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
					});*/
					break;
			}
		}
		if (element === "weaponType") {
			let properties = "";
			for (let i = 0; i < this.state.controls[element].options.length; ++i) {
				if (this.state.controls[element].options[i].value === event.target.value) {
					properties = this.state.controls[element].options[i].properties;
				}
			}
			this.state.controls.itemProperties.value = properties;
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
		console.log(this.state);
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