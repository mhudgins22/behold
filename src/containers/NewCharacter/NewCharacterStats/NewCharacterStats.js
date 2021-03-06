import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import classes from './NewCharacterStats.css';
import * as actions from '../../../store/actions/index';
import StatsSuggestionBox from './StatsSuggestionBox/StatsSuggestionBox';

class NewCharacterStats extends Component {
  state = {
    abilityScores: {
      strength: {
        elementType: "select",
        elementConfig: {

        },
        options: [
          {
            value: 0,
            label: "Strength"
          },
          {
            value: 3,
            label: "3"
          },
          {
            value: 4,
            label: "4"
          },
          {
            value: 5,
            label: "5"
          },
          {
            value: 6,
            label: "6"
          },
          {
            value: 7,
            label: "7"
          },
          {
            value: 8,
            label: "8"
          },
          {
            value: 9,
            label: "9"
          },
          {
            value: 10,
            label: "10"
          },
          {
            value: 11,
            label: "11"
          },
          {
            value: 12,
            label: "12"
          },
          {
            value: 13,
            label: "13"
          },
          {
            value: 14,
            label: "14"
          },
          {
            value: 15,
            label: "15"
          },
          {
            value: 16,
            label: "16"
          },
          {
            value: 17,
            label: "17"
          },
          {
            value: 18,
            label: "18"
          }
        ],
        value: 0,
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      dexterity: {
        elementType: "select",
        elementConfig: {

        },
        options: [
          {
            value: 0,
            label: "Dexterity"
          },
          {
            value: 3,
            label: "3"
          },
          {
            value: 4,
            label: "4"
          },
          {
            value: 5,
            label: "5"
          },
          {
            value: 6,
            label: "6"
          },
          {
            value: 7,
            label: "7"
          },
          {
            value: 8,
            label: "8"
          },
          {
            value: 9,
            label: "9"
          },
          {
            value: 10,
            label: "10"
          },
          {
            value: 11,
            label: "11"
          },
          {
            value: 12,
            label: "12"
          },
          {
            value: 13,
            label: "13"
          },
          {
            value: 14,
            label: "14"
          },
          {
            value: 15,
            label: "15"
          },
          {
            value: 16,
            label: "16"
          },
          {
            value: 17,
            label: "17"
          },
          {
            value: 18,
            label: "18"
          }
        ],
        value: 0,
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      constitution: {
        elementType: "select",
        elementConfig: {

        },
        options: [
          {
            value: 0,
            label: "Constitution"
          },
          {
            value: 3,
            label: "3"
          },
          {
            value: 4,
            label: "4"
          },
          {
            value: 5,
            label: "5"
          },
          {
            value: 6,
            label: "6"
          },
          {
            value: 7,
            label: "7"
          },
          {
            value: 8,
            label: "8"
          },
          {
            value: 9,
            label: "9"
          },
          {
            value: 10,
            label: "10"
          },
          {
            value: 11,
            label: "11"
          },
          {
            value: 12,
            label: "12"
          },
          {
            value: 13,
            label: "13"
          },
          {
            value: 14,
            label: "14"
          },
          {
            value: 15,
            label: "15"
          },
          {
            value: 16,
            label: "16"
          },
          {
            value: 17,
            label: "17"
          },
          {
            value: 18,
            label: "18"
          }
        ],
        value: 0,
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      intelligence: {
        elementType: "select",
        elementConfig: {

        },
        options: [
          {
            value: 0,
            label: "Intelligence"
          },
          {
            value: 3,
            label: "3"
          },
          {
            value: 4,
            label: "4"
          },
          {
            value: 5,
            label: "5"
          },
          {
            value: 6,
            label: "6"
          },
          {
            value: 7,
            label: "7"
          },
          {
            value: 8,
            label: "8"
          },
          {
            value: 9,
            label: "9"
          },
          {
            value: 10,
            label: "10"
          },
          {
            value: 11,
            label: "11"
          },
          {
            value: 12,
            label: "12"
          },
          {
            value: 13,
            label: "13"
          },
          {
            value: 14,
            label: "14"
          },
          {
            value: 15,
            label: "15"
          },
          {
            value: 16,
            label: "16"
          },
          {
            value: 17,
            label: "17"
          },
          {
            value: 18,
            label: "18"
          }
        ],
        value: 0,
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      charisma: {
        elementType: "select",
        elementConfig: {

        },
        options: [
          {
            value: 0,
            label: "Charisma"
          },
          {
            value: 3,
            label: "3"
          },
          {
            value: 4,
            label: "4"
          },
          {
            value: 5,
            label: "5"
          },
          {
            value: 6,
            label: "6"
          },
          {
            value: 7,
            label: "7"
          },
          {
            value: 8,
            label: "8"
          },
          {
            value: 9,
            label: "9"
          },
          {
            value: 10,
            label: "10"
          },
          {
            value: 11,
            label: "11"
          },
          {
            value: 12,
            label: "12"
          },
          {
            value: 13,
            label: "13"
          },
          {
            value: 14,
            label: "14"
          },
          {
            value: 15,
            label: "15"
          },
          {
            value: 16,
            label: "16"
          },
          {
            value: 17,
            label: "17"
          },
          {
            value: 18,
            label: "18"
          }
        ],
        value: 0,
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      wisdom: {
        elementType: "select",
        elementConfig: {

        },
        options: [
          {
            value: 0,
            label: "Wisdom"
          },
          {
            value: 3,
            label: "3"
          },
          {
            value: 4,
            label: "4"
          },
          {
            value: 5,
            label: "5"
          },
          {
            value: 6,
            label: "6"
          },
          {
            value: 7,
            label: "7"
          },
          {
            value: 8,
            label: "8"
          },
          {
            value: 9,
            label: "9"
          },
          {
            value: 10,
            label: "10"
          },
          {
            value: 11,
            label: "11"
          },
          {
            value: 12,
            label: "12"
          },
          {
            value: 13,
            label: "13"
          },
          {
            value: 14,
            label: "14"
          },
          {
            value: 15,
            label: "15"
          },
          {
            value: 16,
            label: "16"
          },
          {
            value: 17,
            label: "17"
          },
          {
            value: 18,
            label: "18"
          }
        ],
        value: 0,
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    storedStats: [],
    pageIsValid: false
  }

  displayStatsNicely = (arr) => {          //Used so the app doesn't freak out when you try to call .join when the stats array is not yet defined
    let statDisplay = "";
    if (arr.length !== 0) {
      statDisplay = arr.join(", ")
    }
    return statDisplay;
  }

  checkValidity (value, rules) {
    let isValid = false;

    if (rules.required) {
      isValid = value !== 0;
    }

    return isValid;
  }

  onChangeHandler = (event, element) => {

    const updatedForm = {
      ...this.state.abilityScores
    };

    const updatedFormElement = {
      ...updatedForm[element]
    };

    //Compare the validation to NewCharacter to fix it.
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    updatedForm[element] = updatedFormElement;

    let pageIsValid = true;
    for (let element in updatedForm) {
      pageIsValid = updatedForm[element].valid && pageIsValid;
    }

    this.setState({abilityScores: updatedForm, pageIsValid: pageIsValid});

  }


  onSaveCharacterStats = (event) => {
    let characterStats = {
      strength: this.state.abilityScores.strength.value,
      dexterity: this.state.abilityScores.dexterity.value,
      constitution: this.state.abilityScores.constitution.value,
      intelligence: this.state.abilityScores.intelligence.value,
      charisma: this.state.abilityScores.charisma.value,
      wisdom: this.state.abilityScores.wisdom.value
    };
    this.props.onSaveStats(characterStats);
  }

  render () {

    const directions = (
      <div>
        <h1>Roll Your Stats</h1>
        <h3>There are six ability scores where you will need to define the stats for your character: Strength, Dexterity, Constitution, Wisdom, Intelligence, and Charisma. You can either roll your six stats automatically by
          pressing the button below or the "old fashioned way" by using four six-sided dice and by following
          the directions below:
        </h3>
        <ol>
          <li>Roll four six sided dice.</li>
          <li>Subtract the lowest dice roll from the group of four.</li>
          <li>Add the three remaining dice together and note the value.</li>
          <li>Complete steps 1 - 3 six times until you have your six stat values.</li>
          <li>Choose which stat values you would like to represent each of the ability scores.</li>
        </ol>
      </div>
    );

    let formElements = [];
    for (let element in this.state.abilityScores) {
      formElements.push({
        id: element,
        config: this.state.abilityScores[element]
      });
    }

    let form = formElements.map(element => (
      <div key = {element.id}>
        <p className = {classes.FormLabels}>{element.id}:</p>
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
      </div>
    ));

    return (
      <div>
        {directions}
        <Button
          buttonType={"Character"}
          clicked={this.props.onRollStats}
          text="Roll My Stats" />
        <h3>Your automatically rolled stat values are: {this.displayStatsNicely(this.props.stats)}</h3>
        <br />
        <StatsSuggestionBox class={this.props.class} race={this.props.race}/>
        <br />
        <h3>Enter your values below:</h3>
        {form}
        <Link to={"/Create/Characters/NewCharacter/Skills"}>
          <Button
            buttonType= {this.state.pageIsValid ? "Success" : "Disabled"}
            clicked={this.onSaveCharacterStats}
            text="Save and Continue" />
        </Link>
      </div>
    );
  }
 }

const mapStateToProps = (state) => {
  return {
    stats: state.char.rolledStats,
    class: state.char.basicCharacterData.characterClass,
    race: state.char.basicCharacterData.characterRace
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveStats: (characterStats) => dispatch(actions.saveCharacterStats(characterStats)),
    onRollStats: () => dispatch(actions.rollCharacterStats())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacterStats);
