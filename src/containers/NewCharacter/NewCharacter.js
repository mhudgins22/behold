import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './NewCharacter.css';
import * as actions from '../../store/actions/index';
import BackgroundDisplay from './BackgroundDisplay/BackgroundDisplay';
import ClassDisplay from './ClassDisplay/ClassDisplay';
import RaceDisplay from './RaceDisplay/RaceDisplay';

class NewCharacter extends Component {
  state = {
    controls: {
      characterName: {
        elementType: "input",
        elementConfig: {
          type: "input",
          placeholder: "Your Character's Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      characterLevel: {
        elementType: "select",
        elementConfig: {

        },
        options: [
          {
            value: "",
            label: "Starting Level"
          },
          {
            value: "1",
            label: "1"
          },
          {
            value: "2",
            label: "2"
          },
          {
            value: "3",
            label: "3"
          },
          {
            value: "4",
            label: "4"
          },
          {
            value: "5",
            label: "5"
          },
          {
            value: "6",
            label: "6"
          },
          {
            value: "7",
            label: "7"
          },
          {
            value: "8",
            label: "8"
          },
          {
            value: "9",
            label: "9"
          },
          {
            value: "10",
            label: "10"
          },
          {
            value: "11",
            label: "11"
          },
          {
            value: "12",
            label: "12"
          },
          {
            value: "13",
            label: "13"
          },
          {
            value: "14",
            label: "14"
          },
          {
            value: "15",
            label: "15"
          },
          {
            value: "16",
            label: "16"
          },
          {
            value: "17",
            label: "17"
          },
          {
            value: "18",
            label: "18"
          },
          {
            value: "19",
            label: "19"
          },
          {
            value: "20",
            label: "20"
          },
        ],
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      characterRace: {
        elementType: "select",
        elementConfig: {

        },
        options: [
          {
            value: "",
            label: "Select a Race"
          },
          {
            value: "Dragonborn",
            label: "Dragonborn"
          },
          {
            value: "Dwarf",
            label: "Dwarf"
          },
          {
            value: "Elf",
            label: "Elf"
          },
          {
            value: "Gnome",
            label: "Gnome"
          },
          {
            value: "Half-Elf",
            label: "Half-Elf"
          },
          {
            value: "Halfling",
            label: "Halfling"
          },
          {
            value: "Half-Orc",
            label: "Half-Orc"
          },
          {
            value: "Human",
            label: "Human"
          },
          {
            value: "Tiefling",
            label: "Tiefling"
          }
        ],
        value: 1,
        validation: {
					required: true
				},
				valid: false,
				touched: false,
				visible: true
      },
      characterClass: {
        elementType: "select",
        elementConfig: {

        },
        options: [
          {
            value: "",
            label: "Select a Class"
          },
          {
            value: "Barbarian",
            label: "Barbarian"
          },
          {
            value: "Bard",
            label: "Bard"
          },
          {
            value: "Cleric",
            label: "Cleric"
          },
          {
            value: "Druid",
            label: "Druid"
          },
          {
            value: "Fighter",
            label: "Fighter"
          },
          {
            value: "Monk",
            label: "Monk"
          },
          {
            value: "Paladin",
            label: "Paladin"
          },
          {
            value: "Ranger",
            label: "Ranger"
          },
          {
            value: "Rogue",
            label: "Rogue"
          },
          {
            value: "Sorcerer",
            label: "Sorcerer"
          },
          {
            value: "Warlock",
            label: "Warlock"
          },
          {
            value: "Wizard",
            label: "Wizard"
          },
        ],
        value: "",
        validation: {
					required: true
				},
				valid: false,
				touched: false,
				visible: true
      },
      background: {
        elementType: "select",
        elementConfig: {

        },
        options: [
          {
            value: "",
            label: "Select a Background"
          },
          {
            value: "Acolyte",
            label: "Acolyte"
          },
          {
            value: "Charlatan",
            label: "Charlatan"
          },
          {
            value: "Criminal/Spy",
            label: "Criminal/Spy"
          },
          {
            value: "Entertainer",
            label: "Entertainer"
          },
          {
            value: "Folk Hero",
            label: "Folk Hero"
          },
          {
            value: "Gladiator",
            label: "Gladiator"
          },
          {
            value: "Guild Artisan/Guild Merchant",
            label: "Guild Artisan/Guild Merchant"
          },
          {
            value: "Hermit",
            label: "Hermit"
          },
          {
            value: "Knight",
            label: "Knight"
          },
          {
            value: "Noble",
            label: "Noble"
          },
          {
            value: "Outlander",
            label: "Outlander"
          },
          {
            value: "Pirate",
            label: "Pirate"
          },
          {
            value: "Sage",
            label: "Sage"
          },
          {
            value: "Sailor",
            label: "Sailor"
          },
          {
            value: "Soldier",
            label: "Soldier"
          },
          {
            value: "Urchin",
            label: "Urchin"
          },
        ],
        value: "",
        validation: {
					required: true
				},
				valid: false,
				touched: false,
				visible: true
      }
    },
    pageIsValid: false
  }

  checkValidity (value, rules) {
    let isValid = false;

    if (rules.required) {
      isValid = value.trim() !== "";
    }

    return isValid;
  }


  onChangeHandler = (event, element) => {

    const updatedForm = {
      ...this.state.controls
    };

    const updatedFormElement = {
      ...updatedForm[element]
    }

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedForm[element] = updatedFormElement;

    let pageIsValid = true;
    for (let element in updatedForm) {
      pageIsValid = updatedForm[element].valid && pageIsValid;
    }


    this.setState({controls: updatedForm, pageIsValid: pageIsValid});
  }

  onSaveCharacterBasics = (event) => {
    //event.preventDefault();
    let basicCharacterData = {
      name: this.state.controls.characterName.value,
      level: this.state.controls.characterLevel.value,
      race: this.state.controls.characterRace.value,
      charClass: this.state.controls.characterClass.value,
      background: this.state.controls.background.value
    };
    this.props.onSaveBasics(basicCharacterData);
  }

  render() {

    //Build the form
    let formElements = [];
    for (let element in this.state.controls) {
      formElements.push({
        id: element,
        config: this.state.controls[element]
      });
    }

    const levelTip = "If you are creating this character for a specific campaign, consult with your DM as to what level everyone will be starting at.";

    let form = formElements.map(element => (
      <div
        className={classes.InfoBox}
        key = {element.id}>
        {element.id === "characterName" ? <h4>Character Name:</h4> : null}
        {element.id === "characterLevel" ? <h4 data-tip={levelTip}>Starting Level:</h4> : null}
        {element.id === "characterRace" ? <h4>Character Race:</h4> : null}
        {element.id === "characterClass" ? <h4>Character Class:</h4> : null}
        {element.id === "background" ? <h4>Character Background:</h4> : null}
        <Input
          elementType = {element.config.elementType}
          elementConfig = {element.config.elementConfig}
          options = {element.config.options}
          value = {element.config.value}
          validation = {element.config.validation}
          placeholder = {element.config.placeholder}
          valid = {element.config.valid}
          touched = {element.config.touched}
          shouldValidate = {null}
          changed = {(event) => this.onChangeHandler(event, element.id)}/>
        {element.id === "characterRace" ? <RaceDisplay race={this.state.controls.characterRace.value} /> : null}
        {element.id === "characterClass" ? <ClassDisplay class={this.state.controls.characterClass.value} /> : null}
        {element.id === "background" ? <BackgroundDisplay background={this.state.controls.background.value} /> : null}
      </div>
    ));

    return (
      <div>
        <h1>Character Creation Guide</h1>
        <h3>Use this page to create a new character that can easily be exported to any campaign that has been set up
          on this app. We have provided some general instructions and tips to help guide you though the process!
          We will start by defining some basic characteristics of your new character.</h3>
        <br />
        {form}
        <Link to={this.props.match.url + "/Welcome"}>
          <Button
            buttonType={this.state.pageIsValid ? "Success" : "Disabled" }
            disabled={!this.state.pageIsValid}
            clicked={this.onSaveCharacterBasics}
            text="Save and Continue" />
        </Link>
        <ReactTooltip />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    class: state.char.basicCharacterData.characterClass,
    level: state.char.basicCharacterData.characterLevel
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveBasics: (basicCharacterData) => dispatch(actions.saveCharacterBasics(basicCharacterData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacter);
