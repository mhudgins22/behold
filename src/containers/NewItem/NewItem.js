import React, {Component} from "react";

import Input from "../../components/UI/Input/Input";
import Card from "../../components/Card/Card";
import Button from "../../components/UI/Button/Button";

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
			armorClassCheckBox: {
				elementType: "checkbox",
				label: "AC",
				elementConfig: {
					type: "checkbox",
					name: "itemAttributes"
				},
				value: false,
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
				value: true,
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
				value: false,
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
						value: "",
						label: "# of Dice"
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
			damageDieOne: {
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
			damageBonusOne: {
				elementType: "select",
				options: [
					{
						value: "",
						label: "Damage Bonus"
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
			damageTypeOne: {
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
			numberOfDamageDiceTwo: {
				elementType: "select",
				elementConfig: {
				
				},
				options: [
					{
						value: "",
						label: "# of Dice"
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
			damageDieTwo: {
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
				visible: false
			},
			damageBonusTwo: {
				elementType: "select",
				options: [
					{
						value: "",
						label: "Damage Bonus"
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
			damageTypeTwo: {
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
				visible: false
			},
			numberOfDamageDiceThree: {
				elementType: "select",
				elementConfig: {
				
				},
				options: [
					{
						value: "",
						label: "# of Dice"
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
			damageDieThree: {
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
				visible: false
			},
			damageBonusThree: {
				elementType: "select",
				options: [
					{
						value: "",
						label: "Damage Bonus"
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
			damageTypeThree: {
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
				visible: false
			},
			armorClass: {
				elementType: "select",
				elementConfig: {
					
				},
				options: [
					{
						value: "",
						label: "Armor Class"
					}
				],
				value: "",
				validationRules: {
				
				},
				valid: true,
				touched: false,
				visible: false
			},
			armorClassBonus: {
				elementType: "select",
				options: [
					{
						value: "",
						label: "AC Bonus"
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
			numberOfHealingDice: {
				elementType: "select",
				elementConfig: {
				
				},
				options: [
					{
						value: "",
						label: "# of Dice"
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
			healingDie: {
				elementType: "select",
				elementConfig: {
					
				},
				options: [
					{
						value: "",
						label: "Healing Die"
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
				visible: false
			},
			healingBonus: {
				elementType: "select",
				options: [
					{
						value: "",
						label: "Healing Bonus"
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
			itemAbilities: {
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
					options: this.state.controls.numberOfDamageDiceTwo.options.concat(nums)
				},
				damageBonusTwo: {
					...this.state.controls.damageBonusTwo,
					options: this.state.controls.damageBonusTwo.options.concat(bonus)
				},
				numberOfDamageDiceThree: {
					...this.state.controls.numberOfDamageDiceThree,
					options: this.state.controls.numberOfDamageDiceThree.options.concat(nums)
				},
				damageBonusThree: {
					...this.state.controls.damageBonusThree,
					options: this.state.controls.damageBonusThree.options.concat(bonus)
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
		if (element == "itemType") {
			switch(event.target.value) {
				case "Weapon":
					//FIX SETSTATE ISSUE BY ONLY HAVING ONE SETSTATE FOR FUNCTION

					//alter visibility of selects for weapon/armor
					this.state.controls.weaponType.visible = true;
					this.state.controls.armorType.visible = false;

					//alter visibility of damage values
					this.state.controls.damageCheckBox.value = true;
					this.state.controls.numberOfDamageDiceOne.visible = true;
					this.state.controls.damageDieOne.visible = true;
					this.state.controls.damageTypeOne.visible = true;
					this.state.controls.damageBonusOne.visible = true;

					//alter visibility of armor values
					this.state.controls.armorClassCheckBox.value = false;
					this.state.controls.armorClass.visible = false;
					this.state.controls.armorClassBonus.visible = false;

					//resets properties
					this.state.controls.armorType.value = "";
					this.state.controls.itemProperties.value = "";

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

					
					this.state.controls.damageCheckBox.value = false;
					this.state.controls.numberOfDamageDiceOne.visible = false;
					this.state.controls.damageDieOne.visible = false;
					this.state.controls.damageTypeOne.visible = false;
					this.state.controls.damageBonusOne.visible = false;

					
					this.state.controls.armorClassCheckBox.value = true;
					this.state.controls.armorClass.visible = true;
					this.state.controls.armorClassBonus.visible = true;


					this.state.controls.weaponType.value = "";
					this.state.controls.itemProperties.value = "";
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
		//Adds assigned properties of weapon or armor to item card
		if (element === "weaponType" || element === "armorType") {
			let properties = "";
			for (let i = 0; i < this.state.controls[element].options.length; ++i) {
				if (this.state.controls[element].options[i].value === event.target.value) {
					properties = this.state.controls[element].options[i].properties;
				}
			}
			this.state.controls.itemProperties.value = properties;
		}
		if (element === "damageCheckBox") {
			this.state.controls.numberOfDamageDiceOne.visible = value;
			this.state.controls.damageDieOne.visible = value;
			this.state.controls.damageTypeOne.visible = value;
			this.state.controls.damageBonusOne.visible = value;
			/* Some reason this.setState will not make these inputs appear and disappear
			this.setState({
				controls: {
					...this.state.controls,
						numberOfDamageDiceOne: {
							...this.state.controls.numberOfDamageDiceOne,
							visible: value
						},
						damageDieOne: {
							...this.state.controls.damageDieOne,
							visible: value
						},
						damageTypeOne: {
							...this.state.controls.damageTypeOne,
							visible: value
						}
					
				}
			})
			*/
		} 
		
		if (element === "armorClassCheckBox") {
			this.state.controls.armorClass.visible = value;
			this.state.controls.armorClassBonus.visible = value;
		}
		if (element === "healingCheckBox") {
			this.state.controls.healingDie.visible = value;
			this.state.controls.healingBonus.visible = value;
			this.state.controls.numberOfHealingDice.visible = value;
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

	onVisibilityHandler = (event, number, die, bonus, type, bool) => {
		event.preventDefault();
		this.setState({
			controls: {
				...this.state.controls,
				[number]: {
					...this.state.controls[number],
					visible: bool
				},
				[die]: {
					...this.state.controls[die],
					visible: bool
				},
				[bonus]: {
					...this.state.controls[bonus],
					visible: bool
				},
				[type]: {
					...this.state.controls[type],
					visible: bool
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

		let infoForm = itemInfoElements.map((element, i) => {
			if(element.config.visible) {
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
						shouldValidate = {null}
						touched = {element.config.touched}
						changed = {(event) => this.onChangeHandler(event, element.id)}/>
				);
			}
		});
			

		let statForm = itemStatElements.map(element => {
			if (element.config.visible) {
				return (
					<Input 
						key = {element.id}
						label = {element.config.label}
						className = {classes.Input}
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
			}
		});

		let damageButtonOne = null;
		let damageButtonTwo = null;
		if (this.state.controls.damageCheckBox.value) {
			damageButtonOne = (
				<Button 
					buttonType = "" 
					text = "Add 2nd Damage" 
					clicked = {(event) => {this.onVisibilityHandler(event, "numberOfDamageDiceTwo", "damageDieTwo", "damageBonusTwo", "damageTypeTwo", true)}}/>
				);
		}
		if (this.state.controls.numberOfDamageDiceTwo.visible) {
			damageButtonTwo = (
				<Button
					buttonType = ""
					text = "Add 3rd Damage"
					clicked = {(event) => {this.onVisibilityHandler(event, "numberOfDamageDiceThree", "damageDieThree", "damageBonusThree", "damageTypeThree", true)}}/>
			);
		}
		
		

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
						{damageButtonOne}
						{damageButtonTwo}
					</div>
				</form>
				<Card 
					cardType = "item"  
					itemName = {this.state.controls.itemName.value} 
					itemRarity = {this.state.controls.itemRarity.value}
					itemType = {this.state.controls.weaponType.value || this.state.controls.armorType.value}
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

export default NewItem;