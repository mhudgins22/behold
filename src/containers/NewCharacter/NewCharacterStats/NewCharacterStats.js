import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import * as actions from '../../../store/actions/index';

class NewCharacterStats extends Component {
  state = {
    controls: {
      attributes: {
        strength: {
          elementType: "input",
          elementConfig: {
            type: "input",
            placeholder: "Strength"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        dexterity: {
          elementType: "input",
          elementConfig: {
            type: "input",
            placeholder: "Dexterity"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        constitution: {
          elementType: "input",
          elementConfig: {
            type: "input",
            placeholder: "Constitution"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        intelligence: {
          elementType: "input",
          elementConfig: {
            type: "input",
            placeholder: "Intelligence"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        charisma: {
          elementType: "input",
          elementConfig: {
            type: "input",
            placeholder: "Charisma"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        wisdom: {
          elementType: "input",
          elementConfig: {
            type: "input",
            placeholder: "Wisdom"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        }
      },
      storedStats: []
    }
  }

  displayStatsNicely = (arr) => {          //Used so the app doesn't freak out when you try to call .join when the stats array is not yet defined
    let statDisplay = "";
    if (arr.length !== 0) {
      statDisplay = arr.join(", ")
    }
    return statDisplay;
  }

  onSaveCharacterStats = (event) => {
    let characterStats = {
      strength: this.state.controls.attributes.strength,
      dexterity: this.state.controls.attributes.dexterity,
      constitution: this.state.controls.attributes.constitution,
      intelligence: this.state.controls.attributes.intelligence,
      charisma: this.state.controls.attributes.charisma,
      wisdom: this.state.controls.attributes.wisdom
    }
    this.props.onSaveStats(characterStats);
  }

  render () {

    const directions = (
      <div>
        <h1>Roll Your Stats</h1>
        <h3>There are six attributes where you will need to define the stats for your character: Strength, Dexterity, Constitution, Wisdom, Intelligence, and Charisma. You can either roll your six stats automatically by
          pressing the button below or the "old fashioned way" by using four six-sided dice and by following
          the directions below:
        </h3>
        <ol>
          <li>Roll four six sided dice.</li>
          <li>Subtract the lowest dice roll from the group of four.</li>
          <li>Add the three remaining dice together and note the value.</li>
          <li>Complete steps 1 - 3 six times until you have your six stat values.</li>
          <li>Choose which stat values you would like to represent each of the attributes.</li>
        </ol>
      </div>
    );

    let formElements = [];
    for (let element in this.state.controls.attributes) {
      formElements.push({
        id: element,
        config: this.state.controls.attributes[element]
      });
    }

    let form = formElements.map(element => (
      <div key = {element.id}>
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
          changed = {null}/>
      </div>
    ));

    return (
      <div>
        {directions}
        <Button
          buttonType="Character"
          clicked={this.props.onRollStats}
          text="Roll My Stats" />
        <h3>Your automatically rolled stat values are: {this.displayStatsNicely(this.props.stats)}</h3>
        <br />
        <h3>Enter your values below:</h3>
        {form}
        <Button
          buttonType="Success"
          clicked={this.onSaveCharacterStats}
          text="Save and Continue" />
      </div>
    );
  }
 }

const mapStateToProps = (state) => {
  return {
    stats: state.char.rolledStats
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveStats: (characterStats) => dispatch(actions.postCharacterStats(characterStats)),
    onRollStats: () => dispatch(actions.rollCharacterStats())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacterStats);
