import React, {Component} from "react";
import {connect} from "react-redux";


import Input from "../../components/UI/Input/Input";
import Card from "../../components/Card/Card";
import Button from "../../components/UI/Button/Button";
import ReactMarkdown from "react-markdown";
import Modal from "../../components/UI/Modal/Modal";
import Backdrop from "../../components/UI/Backdrop/Backdrop";


import * as actions from "../../store/actions/index";

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
				value: this.props.itemPreview.name,
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
						value: this.props.itemPreview.rarity || "",
						label: this.props.itemPreview.rarity || "Item Rarity",
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
				value: this.props.itemPreview.rarity,
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
				value: this.props.itemPreview.catagory,
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
						value: this.props.itemPreview.catagory === "Weapon" && this.props.itemPreview.type ? this.props.itemPreview.type : "",
						label: this.props.itemPreview.catagory === "Weapon" && this.props.itemPreview.type ? this.props.itemPreview.type : "Weapon Type",
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
				value: this.props.itemPreview.type,
				validationRules: {
					required: true
				},
				valid: false,
				touched: false,
				visible: this.props.itemPreview.catagory === "Weapon"
			},
			armorType: {
				elementType: "select",
				elementConfig: {
				
				},
				options: [
					{
						value: this.props.itemPreview.catagory === "Armor" && this.props.itemPreview.type ? this.props.itemPreview.type : "",
						label: this.props.itemPreview.catagory === "Armor" && this.props.itemPreview.type ? this.props.itemPreview.type : "Armor Type",
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
				value: this.props.itemPreview.type,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: this.props.itemPreview.catagory === "Armor"
			},
			consumableType: {
				elementType: "select",
				elementConfig: {
				
				},
				options: [
					{
						value: this.props.itemPreview.catagory === "Consumable" && this.props.itemPreview.type ? this.props.itemPreview.type : "",
						label: this.props.itemPreview.catagory === "Consumable" && this.props.itemPreview.type ? this.props.itemPreview.type : "Consumable Type",
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
				value: this.props.itemPreview.type,
				validationRules: {
				
				},
				valid: true,
				touched: false,
				visible: this.props.itemPreview.catagory === "Consumable"
			},
			otherType: {
				elementType: "input",
				elementConfig: {
					type: "input",
					placeholder: "Item Type"
				},
				value: this.props.itemPreview.type,
				validationRules: {
				
				},
				valid: true,
				touched: false,
				visible: this.props.itemPreview.catagory === "Other"
			},
			itemProperties: {
				elementType: "input",
				elementConfig: {
					type: "input",
					placeholder: "ex: Light, Finess...."
				},
				value: this.props.itemPreview.properties,
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
				value: this.props.itemPreview.flavorText,
				validationRules: {
					required: true
				},
				valid: false,
				touched: false,
				visible: true
			},
			armorClassCheckBox: {
				elementType: "checkbox",
				label: "AC",
				elementConfig: {
					type: "checkbox",
					name: "itemAttributes"
				},
				value: this.props.itemPreview.armor,
				validationRules: {
				
				},
				valid: true,
				touched: false,
				visible: true
			},
			damageCheckBox: {
				elementType: "checkbox",
				label: "Damage",
				elementConfig: {
					type: "checkbox",
					name: "itemAttributes"
				},
				value: this.props.itemPreview.damage,
				validationRules: {
				
				},
				valid: true,
				touched: false,
				visible: true
			},
			healingCheckBox: {
				elementType: "checkbox",
				label: "Healing",
				elementConfig: {
					type: "checkbox",
					name: "itemAttributes"
				},
				value: this.props.itemPreview.healing,
				validationRules: {
				
				},
				valid: true,
				touched: false,
				visible: true
			},
			numberOfDamageDiceOne: {
				elementType: "select",
				elementConfig: {
				
				},
				options: [
					{
						value: this.props.itemPreview.damageValues[0].numberOfDice || "",
						label: this.props.itemPreview.damageValues[0].numberOfDice || " # of Dice",
					}
				],
				value: this.props.itemPreview.damageValues[0].numberOfDice,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: true
			},
			damageDieOne: {
				elementType: "select",
				elementConfig: {
					
				},
				options: [
					{
						value: this.props.itemPreview.damageValues[0].die || "",
						label: this.props.itemPreview.damageValues[0].die || "Damage Die",
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
				value: this.props.itemPreview.damageValues[0].die,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: true
			},
			damageBonusOne: {
				elementType: "select",
				options: [
					{
						value: this.props.itemPreview.damageValues[0].bonus || "",
						label: this.props.itemPreview.damageValues[0].bonus || "Damage Bonus",
					}
				],
				value: this.props.itemPreview.damageValues[0].bonus,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: true
			},
			damageTypeOne: {
				elementType: "select",
				elementConfig: {
				
				},
				options: [
					{
						value: this.props.itemPreview.damageValues[0].type || "",
						label: this.props.itemPreview.damageValues[0].type || "Damage Type",
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
				value: this.props.itemPreview.damageValues[0].type,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: true
			},
			numberOfDamageDiceTwo: {
				elementType: "select",
				elementConfig: {
				
				},
				options: [
					{
						value: this.props.itemPreview.damageValues[1].numberOfDice || "",
						label: this.props.itemPreview.damageValues[1].numberOfDice || "# of Dice",
					}
				],
				value: this.props.itemPreview.damageValues[1].numberOfDice,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: false
			},
			damageDieTwo: {
				elementType: "select",
				elementConfig: {
					
				},
				options: [
					{
						value: this.props.itemPreview.damageValues[1].die || "",
						label: this.props.itemPreview.damageValues[1].die || "Damage Die",
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
				value: this.props.itemPreview.damageValues[1].die,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: false
			},
			damageBonusTwo: {
				elementType: "select",
				options: [
					{
						value: this.props.itemPreview.damageValues[1].bonus || "",
						label: this.props.itemPreview.damageValues[1].bonus || "Damage Bonus",
					}
				],
				value: this.props.itemPreview.damageValues[1].bonus,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: false
			},
			damageTypeTwo: {
				elementType: "select",
				elementConfig: {
				
				},
				options: [
					{
						value: this.props.itemPreview.damageValues[1].type || "",
						label: this.props.itemPreview.damageValues[1].type || "Damage Type",
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
				value: this.props.itemPreview.damageValues[1].type,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: false
			},
			numberOfDamageDiceThree: {
				elementType: "select",
				elementConfig: {
				
				},
				options: [
					{
						value: this.props.itemPreview.damageValues[2].numberOfDice || "",
						label: this.props.itemPreview.damageValues[2].numberOfDice || "# of Dice"
					}
				],
				value: this.props.itemPreview.damageValues[2].numberOfDice,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: false
			},
			damageDieThree: {
				elementType: "select",
				elementConfig: {
					
				},
				options: [
					{
						value: this.props.itemPreview.damageValues[2].die || "",
						label: this.props.itemPreview.damageValues[2].die || "Damage Die"
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
				value: this.props.itemPreview.damageValues[2].die,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: false
			},
			damageBonusThree: {
				elementType: "select",
				options: [
					{
						value: this.props.itemPreview.damageValues[2].bonus || "",
						label: this.props.itemPreview.damageValues[2].bonus || "Damage Bonus"
					}
				],
				value: this.props.itemPreview.damageValues[2].bonus,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: false
			},
			damageTypeThree: {
				elementType: "select",
				elementConfig: {
				
				},
				options: [
					{
						value: this.props.itemPreview.damageValues[2].type || "",
						label: this.props.itemPreview.damageValues[2].type || "Damage Type"
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
				value: this.props.itemPreview.damageValues[2].type,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: false
			},
			armorClass: {
				elementType: "select",
				elementConfig: {
					
				},
				options: [
					{
						value: this.props.itemPreview.armorClassValues.AC || "",
						label: this.props.itemPreview.armorClassValues.AC || "Armor Class"
					}
				],
				value: this.props.itemPreview.armorClassValues.AC,
				validationRules: {
				
				},
				valid: true,
				touched: false,
				visible: this.props.itemPreview.armor
			},
			armorClassBonus: {
				elementType: "select",
				options: [
					{
						value: this.props.itemPreview.armorClassValues.bonus || "",
						label: this.props.itemPreview.armorClassValues.bonus || "AC Bonus"
					}
				],
				value: this.props.itemPreview.armorClassValues.bonus,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: this.props.itemPreview.armor
			},
			numberOfHealingDice: {
				elementType: "select",
				elementConfig: {
				
				},
				options: [
					{
						value: this.props.itemPreview.healingValues.numberOfDice || "",
						label: this.props.itemPreview.healingValues.numberOfDice || "# of Dice"
					}
				],
				value: this.props.itemPreview.healingValues.numberOfDice,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: this.props.itemPreview.healing
			},
			healingDie: {
				elementType: "select",
				elementConfig: {
					
				},
				options: [
					{
						value: this.props.itemPreview.healingValues.die || "",
						label: this.props.itemPreview.healingValues.die || "Healing Die"
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
				value: this.props.itemPreview.healingValues.die,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: this.props.itemPreview.healing
			},
			healingBonus: {
				elementType: "select",
				options: [
					{
						value: this.props.itemPreview.healingValues.bonus || "",
						label: this.props.itemPreview.healingValues.bonus || "Healing Bonus"
					}
				],
				value: this.props.itemPreview.healingValues.bonus,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: this.props.itemPreview.healing
			},
			itemAbilities: {
				elementType: "textarea",
				elementConfig: {
					type: "textarea",
					placeholder: "Item's extra abilities (extra damage types, charges, effects)"
				},
				value: this.props.itemPreview.abilities,
				validationRules: {
					required: false
				},
				valid: true,
				touched: false,
				visible: true
			}
		},
		showModal: false
	}

	componentDidMount() {
		//I'm lazy so populates the number of dice with nums 1-100 for damage dice
		let nums = [
			
		];
		for (let i = 1; i < 100; ++i) {
			nums.push({
				value: i,
				label: i
			});
		}
		let bonus = [
			
		];
		for (let j = -10; j <= 10; ++j) {
			if (j < 0) {
				bonus.push({
					value: j,
					label: j
				});
			} else {
				bonus.push({
					value: "+" + j,
					label: "+" + j
				})
			}
			
		}
		this.setState({
			...this.state,
			controls: {
				...this.state.controls,
				numberOfDamageDiceOne: {
					...this.state.controls.numberOfDamageDiceOne,
					options: this.state.controls.numberOfDamageDiceOne.options.concat(nums)
				},
				damageBonusOne: {
					...this.state.controls.damageBonusOne,
					options: this.state.controls.damageBonusOne.options.concat(bonus)
				},
				numberOfDamageDiceTwo: {
					...this.state.controls.numberOfDamageDiceTwo,
					options: this.state.controls.numberOfDamageDiceTwo.options.concat(nums),
					visible: this.props.itemPreview.damageValues[1].numberOfDice
				},
				damageDieTwo: {
					...this.state.controls.damageDieTwo,
					visible: this.props.itemPreview.damageValues[1].numberOfDice
				},
				damageBonusTwo: {
					...this.state.controls.damageBonusTwo,
					options: this.state.controls.damageBonusTwo.options.concat(bonus),
					visible: this.props.itemPreview.damageValues[1].numberOfDice
				},
				damageTypeTwo: {
					...this.state.controls.damageTypeTwo,
					visible: this.props.itemPreview.damageValues[1].numberOfDice
				},
				numberOfDamageDiceThree: {
					...this.state.controls.numberOfDamageDiceThree,
					options: this.state.controls.numberOfDamageDiceThree.options.concat(nums),
					visible: this.props.itemPreview.damageValues[2].numberOfDice
				},
				damageDieThree: {
					...this.state.controls.damageDieThree,
					visible: this.props.itemPreview.damageValues[2].numberOfDice
				},
				damageBonusThree: {
					...this.state.controls.damageBonusThree,
					options: this.state.controls.damageBonusThree.options.concat(bonus),
					visible: this.props.itemPreview.damageValues[2].numberOfDice
				},
				damageTypeThree: {
					...this.state.controls.damageTypeThree,
					visible: this.props.itemPreview.damageValues[2].numberOfDice
				},
				armorClass: {
					...this.state.controls.armorClass,
					options: this.state.controls.armorClass.options.concat(nums)
				},
				armorClassBonus: {
					...this.state.controls.armorClassBonus,
					options: this.state.controls.armorClassBonus.options.concat(bonus)
				},
				numberOfHealingDice: {
					...this.state.controls.numberOfHealingDice,
					options: this.state.controls.numberOfHealingDice.options.concat(nums)
				},
				healingBonus: {
					...this.state.controls.healingBonus,
					options: this.state.controls.healingBonus.options.concat(bonus)
				}
			}
		});
	}

	//Change values for input and textarea elements
	onChangeHandler = (event, element) => {
		const value = this.state.controls[element].elementType === "checkbox" ? event.target.checked : event.target.value
		if (element === "itemType") {
			switch(event.target.value) {
				case "Weapon":
					//FIX SETSTATE ISSUE BY ONLY HAVING ONE SETSTATE FOR FUNCTION
					//Handles visiblity for form options
					this.onVisibilityHandler(["weaponType", "numberOfDamageDiceOne", "damageDieOne", "damageTypeOne", "damageBonusOne"], true);
					this.onVisibilityHandler(["armorType", "consumableType", "otherType", "armorClass", "armorClassBonus", "numberOfHealingDice", "healingDie", "healingBonus"], false);
					//checks box
					this.onCheckboxHandler(["damageCheckBox"], ["armorClassCheckBox", "healingCheckBox"]);
					//resets properties
					this.removePropertiesHandler();
					break;
				case "Armor":
					this.onVisibilityHandler(["armorType", "armorClass", "armorClassBonus"], true);
					this.onVisibilityHandler(["weaponType", "consumableType", "otherType", "numberOfDamageDiceOne", "numberOfDamageDiceTwo", "numberOfDamageDiceThree", "damageDieOne", "damageDieTwo", "damageDieThree", "damageBonusOne", "damageBonusTwo", "damageBonusThree", "damageTypeOne", "damageTypeTwo", "damageTypeThree", "numberOfHealingDice", "healingDie", "healingBonus"], false)
					//Adjusts check boxes
					this.onCheckboxHandler(["armorClassCheckBox"], ["damageCheckBox", "healingCheckBox"]);
					//Removes properties
					this.removePropertiesHandler();
					break;
				case "Consumable":
					//adjust visibility of item types
					this.onVisibilityHandler(["consumableType"], true);
					this.onVisibilityHandler(["weaponType", "armorType", "armorClass", "armorClassBonus", "numberOfDamageDiceOne", "numberOfDamageDiceTwo", "numberOfDamageDiceThree", "damageDieOne", "damageDieTwo", "damageDieThree", "damageBonusOne", "damageBonusTwo", "damageBonusThree", "damageTypeOne", "damageTypeTwo", "damageTypeThree", "numberOfHealingDice", "healingDie", "healingBonus"], false);
					//Adjust checkbox
					this.onCheckboxHandler([], ["damageCheckBox", "armorClassCheckBox", "healingCheckBox"]);
					//Removes properties
					this.removePropertiesHandler();
					break;
				case "Other":
					this.onVisibilityHandler(["otherType"], true);
					this.onVisibilityHandler(["weaponType", "armorType", "consumableType", "armorClass", "armorClassBonus", "numberOfDamageDiceOne", "numberOfDamageDiceTwo", "numberOfDamageDiceThree", "damageDieOne", "damageDieTwo", "damageDieThree", "damageBonusOne", "damageBonusTwo", "damageBonusThree", "damageTypeOne", "damageTypeTwo", "damageTypeThree", "numberOfHealingDice", "healingDie", "healingBonus"], false);
					break;
				default:
					break;
			}
		}


		//Adds assigned properties of weapon or armor to item card
		let properties = null;
		if (element === "weaponType" || element === "armorType") {
			for (let i = 0; i < this.state.controls[element].options.length; ++i) {
				if (this.state.controls[element].options[i].value === event.target.value) {
					properties = this.state.controls[element].options[i].properties;
				}
			}
			this.state.controls.itemProperties.value = properties;
		}


		//adjusts visiblity based on check box
		if (element === "damageCheckBox") {
			if (value === false) {
				this.onVisibilityHandler(["numberOfDamageDiceOne", "numberOfDamageDiceTwo", "numberOfDamageDiceThree", "damageDieOne", "damageDieTwo", "damageDieThree", "damageBonusOne", "damageBonusTwo", "damageBonusThree", "damageTypeOne", "damageTypeTwo", "damageTypeThree"], value);
			} else {
				this.onVisibilityHandler(["numberOfDamageDiceOne", "damageDieOne", "damageBonusOne", "damageTypeOne"], value);
			}
		} 
		if (element === "armorClassCheckBox") {
			this.onVisibilityHandler(["armorClass", "armorClassBonus"], value);
		}
		if (element === "healingCheckBox") {
			this.onVisibilityHandler(["numberOfHealingDice", "healingDie", "healingBonus"], value);
		}


		//Sets the value of input elements
		this.setState({
			controls: {
				...this.state.controls,
				[element]: {
					...this.state.controls[element],
					value: value
				}
			}
		});
	}

	//Changes visiblity on form elements
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

	//Adds up to three total damage types
	onAdjustDamageHandler = (event, number, die, bonus, type, bool) => {
		event.preventDefault();
		this.setState({
			controls: {
				...this.state.controls,
				[number]: {
					...this.state.controls[number],
					visible: bool,
					value: ""
				},
				[die]: {
					...this.state.controls[die],
					visible: bool,
					value: ""
				},
				[bonus]: {
					...this.state.controls[bonus],
					visible: bool,
					value: ""
				},
				[type]: {
					...this.state.controls[type],
					visible: bool,
					value: ""
				},
			}
		})
	}

	//sets Checkboxes to true or false
	onCheckboxHandler = (arrTrue, arrFalse) => {
		let updatedState = this.state;
		for (let i = 0; i < arrTrue.length + arrFalse.length; ++i) {
			updatedState = {
				controls: {
					...updatedState.controls,
					[arrTrue[i]]: {
						...updatedState.controls[arrTrue[i]],
						value: true
					},
					[arrFalse[i]]: {
						...updatedState.controls[arrFalse[i]],
						value: false
					}
				}
			}
		}
		this.state = updatedState;
	}

	removePropertiesHandler = () => {
		this.state.controls.itemProperties.value = "";
	}

	newItemHandler = () => {
		window.location.reload();
	}

	//Collects info from form to be posted on backend
	onSaveItemHandler = (event) => {
		event.preventDefault();
		let itemType = null;
		if (this.state.controls.weaponType.value) {
			itemType = this.state.controls.weaponType.value;
		} else if (this.state.controls.armorType.value) {
			itemType = this.state.controls.armorType.value;
		} else if (this.state.controls.consumableType.value) {
			itemType = this.state.controls.consumableType.value;
		} else {
			itemType = this.state.controls.otherType.value;
		}
		const itemData = {
			name: this.state.controls.itemName.value,
			rarity: this.state.controls.itemRarity.value,
			type: itemType,
			properties: this.state.controls.itemProperties.value,
			flavorText: this.state.controls.itemFlavorText.value,
			damage: this.state.controls.damageCheckBox.value,
			healing: this.state.controls.healingCheckBox.value,
			armor: this.state.controls.armorClassCheckBox.value,
			catagory: this.state.controls.itemType.value,
			damageValues: [
				{
					numberOfDice: this.state.controls.numberOfDamageDiceOne.value,
					die: this.state.controls.damageDieOne.value,
					bonus: this.state.controls.damageBonusOne.value,
					type: this.state.controls.damageTypeOne.value
				},
				{
					numberOfDice: this.state.controls.numberOfDamageDiceTwo.value,
					die: this.state.controls.damageDieTwo.value,
					bonus: this.state.controls.damageBonusTwo.value,
					type: this.state.controls.damageTypeTwo.value
				},
				{
					numberOfDice: this.state.controls.numberOfDamageDiceThree.value,
					die: this.state.controls.damageDieThree.value,
					bonus: this.state.controls.damageBonusThree.value,
					type: this.state.controls.damageTypeThree.value
				}
			],
			armorClassValues: {
				AC:	this.state.controls.armorClass.value,
				bonus: this.state.controls.armorClassBonus.value
			},
			healingValues: {
				numberOfDice: this.state.controls.numberOfHealingDice.value,
				die: this.state.controls.healingDie.value,
				bonus: this.state.controls.healingBonus.value
			},
			abilities: this.state.controls.itemAbilities.value
		};
		if (this.props.match.url === "/Create/Items/NewItem") {
			this.props.onSaveItem(itemData);
			this.setState({
				...this.state,
				showModal: true
			})
		} else {
			this.props.onUpateItem(itemData, this.props.itemPreview.id);
		}
	}

	onDeleteItemHandler = (event) => {
		event.preventDefault();
		this.props.onDeleteItem(this.props.itemPreview.id);
		this.props.history.push("/Create/Items");
	}

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
						validationRules = {element.config.validationRules}
						valid = {element.config.valid}
						shouldValidate = {null}
						touched = {element.config.touched}
						changed = {(event) => this.onChangeHandler(event, element.id)}/>
				)
			}
		});
	};

	render() {
		let itemInfoElements = [];
		let itemCheckboxElements = [];
		let itemDamageElements = [];
		let itemArmorElements = [];
		let itemHealingElements = [];
		let itemAbilitiesElements = [];
		let modal = null;
		let backdrop = null;
		let i = 0;


		//Splits the form elements into two sections
		for (let element in this.state.controls) {
			if (i < 9) {
				itemInfoElements.push({
					id: element,
					config: this.state.controls[element]
				});
			} else if (i >= 9 && i < 12) {
				itemCheckboxElements.push({
					id: element,
					config: this.state.controls[element]
				});
			} else if (i >= 12 && i < 24) {
				itemDamageElements.push({
					id: element,
					config: this.state.controls[element]
				});
			} else if (i >=24 && i < 26) {
				itemArmorElements.push({
					id: element,
					config: this.state.controls[element]
				});
			} else if (i >= 26 && i < 29) {
				itemHealingElements.push({
					id: element,
					config: this.state.controls[element]
				});
			} else {
				itemAbilitiesElements.push({
					id: element,
					config: this.state.controls[element]
				});
			}
			i += 1;
		}

		const infoForm = this.mapElements(itemInfoElements);
		const checkboxSection = this.mapElements(itemCheckboxElements);
		const damageSectionOne = this.mapElements(itemDamageElements.slice(0, 4));
		const damageSectionTwo = this.mapElements(itemDamageElements.slice(4, 8));
		const damageSectionThree = this.mapElements(itemDamageElements.slice(8));
		const armorSection = this.mapElements(itemArmorElements);
		const healingSection = this.mapElements(itemHealingElements);
		const abilitiesSection = this.mapElements(itemAbilitiesElements);

		let damageButtonOne = null;
		if (this.state.controls.damageCheckBox.value && !this.state.controls.numberOfDamageDiceTwo.visible) {
			damageButtonOne = (
				<Button 
					buttonType = "" 
					text = "Add 2nd Damage" 
					clicked = {(event) => {this.onAdjustDamageHandler(event,"numberOfDamageDiceTwo", "damageDieTwo", "damageBonusTwo", "damageTypeTwo", true)}}/>
				);
		}
		if (this.state.controls.numberOfDamageDiceTwo.visible && !this.state.controls.numberOfDamageDiceThree.visible) {
			damageButtonOne = (
				<Button
					buttonType = ""
					text = "Add 3rd Damage"
					clicked = {(event) => {this.onAdjustDamageHandler(event, "numberOfDamageDiceThree", "damageDieThree", "damageBonusThree", "damageTypeThree", true)}}/>
			);
		}
		let damageButtonTwo = null;
		if (this.state.controls.numberOfDamageDiceTwo.visible && ! this.state.controls.numberOfDamageDiceThree.visible) {
			damageButtonTwo = (
				<Button
					buttontype = ""
					text = "Remove Damage"
					clicked = {(event) => {this.onAdjustDamageHandler(event, "numberOfDamageDiceTwo","damageDieTwo", "damageBonusTwo", "damageTypeTwo", false)}}/>
			);
		}
		if (this.state.controls.numberOfDamageDiceThree.visible) {
			damageButtonTwo = (
				<Button
					buttontype = ""
					text = "Remove Damage"
					clicked = {(event) => {this.onAdjustDamageHandler(event, "numberOfDamageDiceThree","damageDieThree", "damageBonusThree", "damageTypeThree", false)}}/>
			);
		}

		if (this.state.showModal === true) {
			modal = (
				<Modal 
					text = {this.state.controls.itemName.value + " was saved!"} 
					buttonOneType = "Success"
					buttonOneText = "Create another item"
					buttonOneClicked = {(event) => this.newItemHandler(event)}
					buttonTwoType = "Danger"
					buttonTwoText = "Return to Items Page"
					buttonTwoClicked = {() => this.props.history.push("/Create/Items")}/>
			);
			backdrop = <Backdrop />
		}

		return(
			<div>
				{backdrop}
				{modal}
				<h1>Create Your New Item </h1>
				<form className = {classes.Form}>
					<div className = {classes.Section}>
						<h2>Item Info</h2>
						{infoForm}
					</div>
					<div className = {classes.Section}>
						<h2>Item Stats</h2>
						<div className = {classes.Part}>
							<h3>Stats</h3>
							{checkboxSection}
						</div> 
						{ this.state.controls.damageCheckBox.value ?
						<div className = {classes.Part}>
							<h3>Damage</h3>
							<div>
								{damageSectionOne}
							</div>
							<div>
								{damageSectionTwo}
							</div>
							<div>
								{damageSectionThree}
							</div>
							{damageButtonOne}
							{damageButtonTwo}
						</div> : null}

						{this.state.controls.armorClassCheckBox.value ?
						<div className = {classes.Part}>	
							<h3>Armor</h3>
							{armorSection}
						</div> : null}

						{this.state.controls.healingCheckBox.value ?
						<div className = {classes.Part}>
							<h3>Healing</h3>
							{healingSection}
						</div> : null}

						<div className = {classes.Part}>
							<h3>Abilities</h3>
							{abilitiesSection}
							<h4>Markdown Key:</h4>
							<p># H1 ## H2 ### H3 #### H4 ##### H5 ###### H6 *Italics* **Bold** **_Both_** ~~Strike through~~</p>
							<div>
								<ReactMarkdown source = "# H1"/>
								<ReactMarkdown source = "## H2"/>
								<ReactMarkdown source = "### H3"/>
								<ReactMarkdown source = "#### H4"/>
								<ReactMarkdown source = "##### H5"/>
								<ReactMarkdown source = "###### H6"/>
								<ReactMarkdown source = "*Italics*"/>
								<ReactMarkdown source = "**Bold**"/>
								<ReactMarkdown source = "**_Both_**"/>
								<ReactMarkdown source = "~~Strike Through~~"/>
							</div>
						</div>
					</div>
					<div className = {classes.Controls}>
						<Button 
							buttonType = "Success" 
							text = "Save Item" 
							clicked = {this.onSaveItemHandler}/>
						<Button 
							buttonType = "Danger"
							text = {this.props.match.url === "/Create/Items/NewItem" ? "Discard Item" : "Discard Changes"}
							clicked = {() => {this.props.history.push("/Create/Items")}}/>
						{this.props.match.url !== "/Create/Items/NewItem" ?
							<Button 
								buttonType = "Danger"
								text = "Delete Item"
								clicked = {this.onDeleteItemHandler}/>							
						: null}
					</div>
				</form>
				<Card 
					cardType = "item"  
					itemName = {this.state.controls.itemName.value} 
					itemRarity = {this.state.controls.itemRarity.value}
					itemType = {this.state.controls.weaponType.value || this.state.controls.armorType.value || this.state.controls.consumableType.value || this.state.controls.otherType.value}
					itemProperties = {this.state.controls.itemProperties.value}
					numberOfDamageDiceOne = {this.state.controls.numberOfDamageDiceOne.value}
					damageDieOne = {this.state.controls.damageDieOne.value}
					damageTypeOne = {this.state.controls.damageTypeOne.value}
					damageBonusOne = {this.state.controls.damageBonusOne.value}
					numberOfDamageDiceTwo = {this.state.controls.numberOfDamageDiceTwo.value}
					damageDieTwo = {this.state.controls.damageDieTwo.value}
					damageBonusTwo = {this.state.controls.damageBonusTwo.value}
					damageTypeTwo = {this.state.controls.damageTypeTwo.value}
					numberOfDamageDiceThree = {this.state.controls.numberOfDamageDiceThree.value}
					damageDieThree = {this.state.controls.damageDieThree.value}
					damageBonusThree = {this.state.controls.damageBonusThree.value}
					damageTypeThree = {this.state.controls.damageTypeThree.value}
					armorClass = {this.state.controls.armorClass.value}
					armorClassBonus = {this.state.controls.armorClassBonus.value}
					numberOfHealingDice = {this.state.controls.numberOfHealingDice.value}
					healingDie = {this.state.controls.healingDie.value}
					healingBonus = {this.state.controls.healingBonus.value}
					itemFlavorText = {this.state.controls.itemFlavorText.value}
					itemAbilities = {this.state.controls.itemAbilities.value}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		itemPreview: state.items.itemPreview,
		loading: state.items.loading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSaveItem: (itemData) => dispatch(actions.postItem(itemData)),
		setRedirectPath: (path) => dispatch(actions.setRedirectPath(path)),
		onUpateItem: (itemData, id) => dispatch(actions.putItem(itemData, id)),
		onDeleteItem: (id) => dispatch(actions.deleteItem(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);