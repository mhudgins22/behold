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
          playerAbilities.push({                                      //Push the ability information as a new object to playerAbilities
            id: ability.name,
            name: ability.name,
            description: ability.description,
            level: ability.level
          });
        });
      };
    }
    if (this.props.class === "Bard") {
      for (let level in classes.Bard.abilities) {                //Loop through all levels in the classes' "abilities" section
        classes.Bard.abilities[level].forEach((ability) => {     //Perform action on all abilities in a given level
          playerAbilities.push({                                 //Push the ability information as a new object to playerAbilities
            id: ability.name,
            name: ability.name,
            description: ability.description,
            level: ability.level
          });
        });
      };
    }

    //Will be replaced with an ability card functional component
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
        <h3><strong>Your character will have the following abilities:</strong></h3>
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
