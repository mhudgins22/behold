import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';

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

  rollStats = () => {
    let diceHolder = [];    //A place to temporarily hold our results
    let results = [];
    for (let i = 0; i < 6; i++) {   // Will run six times to give us 6 stat rolls
      for (let j = 0; j < 4; j++ ) {    //Will run four times to give us our 4 D6 rolls for each stat
        let rand = 1 + Math.floor(Math.random() * 6);
        diceHolder.push(rand);
      }
      diceHolder.sort();    //Order dice so we can get the lowest value at the front
      let removedNumber = diceHolder.shift();   //Remove lowest value from front
      let nextStat = diceHolder.reduce((a, b) => a + b);    //Add the remaining dice together
      results.push(nextStat);
      diceHolder = [];
      nextStat = 0;
    }
    console.log(results);
    this.setState({
      controls: {
        ...this.state.controls,
        storedStats: results
      }
    })
  }

  displayStatsNicely = (arr) => {          //Used so the app doesn't freak out when you try to call .join when the stats array is not yet defined
    let statDisplay = "";
    if (arr.length !== 0) {
      statDisplay = arr.join(", ")
    }
    return statDisplay;
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
          clicked={this.rollStats}
          text="Roll My Stats" />
          <h3>Your automatically rolled stat values are: {this.displayStatsNicely((this.state.controls.storedStats))}</h3>
          <br />
          <h3>Enter your values below:</h3>
          {form}
      </div>
    );
  }
 }

export default NewCharacterStats;
