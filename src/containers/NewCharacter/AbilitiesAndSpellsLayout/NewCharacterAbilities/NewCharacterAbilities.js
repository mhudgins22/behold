import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from "../../../../assets/classList/classes.json";

class NewCharacterAbilities extends Component {

  render () {

    let playerAbilities = [];
    for (let level in classes.Barbarian.abilities) {                //Loop through all levels in the classes' "abilities" section
      classes.Barbarian.abilities[level].forEach((ability) => {     //Loop through all abilities in a given level
        playerAbilities.push({                                      //Push the ability information as a new object to abilityHolder
          id: ability.name,
          name: ability.name,
          description: ability.description,
          level: ability.level
        });
      });
    };

    //Will be replaced with an ability card functional component
    let form = playerAbilities.map(ability => (
      <div key={ability.name}>
        <h3>Name: {ability.name}</h3>
        <h3>Description: {ability.description}</h3>
      </div>
    ));

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
