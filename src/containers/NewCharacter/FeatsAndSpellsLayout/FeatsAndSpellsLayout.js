import React, { Component } from 'react';

import NewCharacterFeats from './NewCharacterFeats/NewCharacterFeats';
import NewCharacterSpells from './NewCharacterSpells/NewCharacterSpells';

class FeatsAndSpellsLayout extends Component {

  render () {
    return (
      <div>
        <h1>Your Abilities and Spells</h1>
        <p>Based on your chosen class, race, level, and background, your character will have the following abilities and spells:</p>
        <NewCharacterFeats />
        <NewCharacterSpells />
      </div>
    );
  }

}

export default FeatsAndSpellsLayout;
