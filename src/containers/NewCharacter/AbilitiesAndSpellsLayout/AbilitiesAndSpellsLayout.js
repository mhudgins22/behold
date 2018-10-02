import React, { Component } from 'react';

import NewCharacterAbilities from './NewCharacterAbilities/NewCharacterAbilities';
import NewCharacterSpells from './NewCharacterSpells/NewCharacterSpells';

class AbilitiesAndSpellsLayout extends Component {

  render () {
    return (
      <div>
        <h1>Your Abilities and Spells</h1>
        <p>Based on your chosen class, race, level, and background, your character will have the following abilities and spells:</p>
        <NewCharacterAbilities />
        <NewCharacterSpells />
      </div>
    );
  }

}

export default AbilitiesAndSpellsLayout;
