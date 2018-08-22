import React, { Component } from 'react';

class NewCharacterStats extends Component {
  state = {
    control: {
      strength: {
        value: null
      },
      dexterity: {
        value: null
      },
      constitution: {
        value: null
      },
      intelligence: {
        value: null
      },
      charisma: {
        value: null
      },
      wisdom: {
        value: null
      }
    }
  }


  render () {
    const directions = (
      <div>
        <h2>Roll Your Stats</h2>
        <h4>There are six attributes where you will need to define the stats for your character (descriptions of the
          attributes are below where you will also input them). You can either roll your six stats automatically by
          pressing the button below or the "old fashioned way" by using four six-sided dice and by following
          the directions below:
        </h4>
        <ol>
          <li>Roll four six sided dice.</li>
          <li>Subtract the lowest dice roll from the group of four.</li>
          <li>Note the number that you receive after the subtraction in step 2.</li>
          <li>Complete steps 1 - 3 six times until you have your six stat values.</li>
          <li>Choose which stat values you would like to represent each of the attributes.</li>
        </ol>
      </div>
    );

    return (
      <div>
        {directions}
      </div>
    );
  }
 }

export default NewCharacterStats;
