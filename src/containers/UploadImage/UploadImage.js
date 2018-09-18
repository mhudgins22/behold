import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Table from "../../components/Table/Table";

import classes from "./UploadImage.css";

class UploadImage extends Component {
	
	state = {
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
			localPath: {
				elementType: "input",
				elementConfig: {
					type: "file",
					placeholder: "File Path"
				},
				value: "",
				validationRules: {
					required: true
				},
				valid: false,
				touched: false,
				visible: true
			}
		},
		isValid: false
	}

	componentDidMount() {
		if (this.props.uploadType === "items") {
			this.itemUploadPrep();
		} else {
			switch (this.props.match.url) {
				case "/Create/Items/Upload":
					this.props.setUploadType("items");
					this.itemUploadPrep();
					break;
				default: 
					console.log("[COMPONENT DID MOUNT] Unknown uploadType");
					break;
			}
		}
	}

	itemUploadPrep = () => {
		this.setState({
			...this.state,
			controls: {
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
				...this.state.controls
			}
		})
	}

	//Change values for input and textarea elements
	onChangeHandler = (event, element) => {
		const value = event.target.value
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
				default:
					break;
			}
		}

		//Sets the value of input elements
		this.setState({
			controls: {
				...this.state.controls,
				[element]: {
					...this.state.controls[element],
					value: value,
					valid: this.checkValidity(element, value),
					touched: true
				},
			},
			isValid: this.shouldValidate()
		});
		this.checkValidity(element, value);
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


	//Changes visiblity on form elements
	onVisibilityHandler = (arr, bool) => {
		let updatedState = this.state;
		for (let i = 0; i < arr.length; ++i) {
			updatedState = {
				controls: {
					...updatedState.controls,
					[arr[i]]: {
						...updatedState.controls[arr[i]],
						validationRules: {
							required: bool
						},
						valid: !bool,
						visible: bool,
						value: ""
					}
				}
			}
		}
		this.state = updatedState;
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
						valid = {element.config.valid}
						touched = {element.config.touched}
						changed = {(event) => this.onChangeHandler(event, element.id)}/>
				)
			}
		});
	};

	stageUploadHandler = () => {
		const uploadData = {
			name: this.state.controls.imageName.value,
			localPath: this.state.controls.localPath.value,
			storagePath: this.props.uploadType + "/" + this.state.controls.itemType.value + "/" + this.state.controls.weaponType.value || this.state.controls.armorType.value || this.state.controls.consumableType.value + "/" + this.state.controls.localPath.value
		}
		this.props.onStageUpload(uploadData);
	}

	render() {
		//Form Creation
		let formElements = [];
		let form = null
		for (let element in this.state.controls) {
			formElements.push({
				id: element,
				config: this.state.controls[element]
			});
		}
		form = this.mapElements(formElements);
		
		//Table Creation
		let tableHeaders = [];
		let tableData = [];
		for (let element in this.props.stagedUploads) {
			tableData.push({
				name: this.props.stagedUploads[element].name,
				localPath: this.props.stagedUploads[element].localPath,
				storagePath: this.props.stagedUploads[element].storagePath
			});
		}
		for (let item in this.props.stagedUploads[0]) {
			tableHeaders.push(item.toString());
		}

		
		
		return(
			<div>
				{form}
				<Button buttonType = "Success" clicked = {this.stageUploadHandler} text = "Add File"/>
				<Table headers = {tableHeaders} data = {tableData}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		uploadType: state.upload.uploadType,
		stagedUploads: state.upload.stagedUploads
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setUploadType: (uploadType) => dispatch(actions.setUploadType(uploadType)),
		onStageUpload: (uploadData) => dispatch(actions.stageUpload(uploadData))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);