import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from "../../../../assets/classList/classes.json";
import Card from "../../../../components/Card/Card";

class NewCharacterAbilities extends Component {

  render () {

    let playerAbilities = [];
    if (this.props.class === "Barbarian") {
      for (let level in classes.Barbarian.abilities) {                //Loop through all levels in the classes' "abilities" section
        classes.Barbarian.abilities[level].forEach((ability) => {     //Perform action on all abilities in a given level
          if (ability.level <= this.props.level) {                    //Only act on abilities that apply to the player's chosen level
            playerAbilities.push({                                    //Push the ability information as a new object to playerAbilities
              id: ability.name,
              name: ability.name,
              description: ability.description,
              level: ability.level
            });
          }
        });
      };
    }

    if (this.props.class === "Bard") {
      for (let level in classes.Bard.abilities) {                     //Loop through all levels in the classes' "abilities" section
        classes.Bard.abilities[level].forEach((ability) => {          //Perform action on all abilities in a given level
          if (ability.level <= this.props.level) {                    //Only act on abilities that apply to the player's chosen level
            playerAbilities.push({                                    //Push the ability information as a new object to playerAbilities
              id: ability.name,
              name: ability.name,
              description: ability.description,
              level: ability.level
            });
          }
        });
      };
    }

    if (this.props.class === "Cleric") {
      for (let level in classes.Cleric.abilities) {                   //Loop through all levels in the classes' "abilities" section
        classes.Cleric.abilities[level].forEach((ability) => {        //Perform action on all abilities in a given level
          if (ability.level <= this.props.level) {                    //Only act on abilities that apply to the player's chosen level
            playerAbilities.push({                                    //Push the ability information as a new object to playerAbilities
              id: ability.name,
              name: ability.name,
              description: ability.description,
              level: ability.level
            });
          }
        });
      };
    }

    //Build the form with an ability card for each ability
    let form;
    if (playerAbilities.length !== 0) {
      form = playerAbilities.map(ability => (
        <Card
        cardType = "abilityCard"
        name = {ability.name}
        description = {ability.description}
        level = {ability.level}/>
      ));
    }
    else { //This is temporary
      form = <h3 style={{color: "red"}}><em>You need to pick a character class and level!</em></h3>
    }

    return (
      <div>
        <h3><strong>Your character will start with the following abilities:</strong></h3>
        {form}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    level: state.char.basicCharacterData.characterLevel,
    class: state.char.basicCharacterData.characterClass
  };
};

export default connect(mapStateToProps, null)(NewCharacterAbilities);
