import React, { Component } from 'react';

import classes from "../../../../assets/classList/classes.json";

class NewCharacterAbilities extends Component {

  render () {

    let barbarianAbilities = classes.Barbarian.abilities.base.map(ability => (
      <div>
        <ul>
          <li>{ability.name} - {ability.description}</li>
        </ul>
      </div>
    ));

    return (
      <div>
        <h3><strong>Your character will have the following abilities:</strong></h3>
        {barbarianAbilities}
      </div>
    );
  }

}

export default NewCharacterAbilities;
