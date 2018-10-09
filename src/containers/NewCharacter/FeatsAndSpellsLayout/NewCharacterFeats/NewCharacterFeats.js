import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from "../../../../assets/classList/classes.json";
import Card from "../../../../components/Card/Card";

class NewCharacterFeats extends Component {

  render () {

    let playerFeatures = [];
    if (this.props.class === "Barbarian") {
      for (let level in classes.Barbarian.features) {                 //Loop through all levels in the classes' "abilities" section
        classes.Barbarian.features[level].forEach((feature) => {      //Perform action on all abilities in a given level
          if (feature.level <= this.props.level) {                    //Only act on abilities that apply to the player's chosen level
            playerFeatures.push({                                     //Push the ability information as a new object to playerAbilities
              id: feature.name,
              name: feature.name,
              description: feature.description,
              level: feature.level
            });
          }
        });
      };
    }

    if (this.props.class === "Bard") {
      for (let level in classes.Bard.features) {                      //Loop through all levels in the classes' "abilities" section
        classes.Bard.features[level].forEach((feature) => {           //Perform action on all abilities in a given level
          if (feature.level <= this.props.level) {                    //Only act on abilities that apply to the player's chosen level
            playerFeatures.push({                                     //Push the ability information as a new object to playerAbilities
              id: feature.name,
              name: feature.name,
              description: feature.description,
              level: feature.level
            });
          }
        });
      };
    }

    if (this.props.class === "Cleric") {
      for (let level in classes.Cleric.features) {                    //Loop through all levels in the classes' "abilities" section
        classes.Cleric.features[level].forEach((feature) => {         //Perform action on all abilities in a given level
          if (feature.level <= this.props.level) {                    //Only act on abilities that apply to the player's chosen level
            playerFeatures.push({                                     //Push the ability information as a new object to playerAbilities
              id: feature.name,
              name: feature.name,
              description: feature.description,
              level: feature.level
            });
          }
        });
      };
    }

    if (this.props.class === "Druid") {
      for (let level in classes.Druid.features) {                    //Loop through all levels in the classes' "abilities" section
        classes.Druid.features[level].forEach((feature) => {         //Perform action on all abilities in a given level
          if (feature.level <= this.props.level) {                   //Only act on abilities that apply to the player's chosen level
            playerFeatures.push({                                    //Push the ability information as a new object to playerAbilities
              id: feature.name,
              name: feature.name,
              description: feature.description,
              level: feature.level
            });
          }
        });
      };
    }

    if (this.props.class === "Fighter") {
      for (let level in classes.Fighter.features) {                   //Loop through all levels in the classes' "abilities" section
        classes.Fighter.features[level].forEach((feature) => {        //Perform action on all abilities in a given level
          if (feature.level <= this.props.level) {                    //Only act on abilities that apply to the player's chosen level
            playerFeatures.push({                                     //Push the ability information as a new object to playerAbilities
              id: feature.name,
              name: feature.name,
              description: feature.description,
              level: feature.level
            });
          }
        });
      };
    }

    if (this.props.class === "Monk") {
      for (let level in classes.Monk.features) {                      //Loop through all levels in the classes' "abilities" section
        classes.Monk.features[level].forEach((feature) => {           //Perform action on all abilities in a given level
          if (feature.level <= this.props.level) {                    //Only act on abilities that apply to the player's chosen level
            playerFeatures.push({                                     //Push the ability information as a new object to playerAbilities
              id: feature.name,
              name: feature.name,
              description: feature.description,
              level: feature.level
            });
          }
        });
      };
    }

    if (this.props.class === "Paladin") {
      for (let level in classes.Paladin.features) {                   //Loop through all levels in the classes' "abilities" section
        classes.Paladin.features[level].forEach((feature) => {        //Perform action on all abilities in a given level
          if (feature.level <= this.props.level) {                    //Only act on abilities that apply to the player's chosen level
            playerFeatures.push({                                     //Push the ability information as a new object to playerAbilities
              id: feature.name,
              name: feature.name,
              description: feature.description,
              level: feature.level
            });
          }
        });
      };
    }

    if (this.props.class === "Ranger") {
      for (let level in classes.Ranger.features) {                   //Loop through all levels in the classes' "abilities" section
        classes.Ranger.features[level].forEach((feature) => {        //Perform action on all abilities in a given level
          if (feature.level <= this.props.level) {                   //Only act on abilities that apply to the player's chosen level
            playerFeatures.push({                                    //Push the ability information as a new object to playerAbilities
              id: feature.name,
              name: feature.name,
              description: feature.description,
              level: feature.level
            });
          }
        });
      };
    }

    if (this.props.class === "Rogue") {
      for (let level in classes.Rogue.features) {                   //Loop through all levels in the classes' "abilities" section
        classes.Rogue.features[level].forEach((feature) => {        //Perform action on all abilities in a given level
          if (feature.level <= this.props.level) {                  //Only act on abilities that apply to the player's chosen level
            playerFeatures.push({                                   //Push the ability information as a new object to playerAbilities
              id: feature.name,
              name: feature.name,
              description: feature.description,
              level: feature.level
            });
          }
        });
      };
    }

    if (this.props.class === "Sorcerer") {
      for (let level in classes.Sorcerer.features) {                //Loop through all levels in the classes' "abilities" section
        classes.Sorcerer.features[level].forEach((feature) => {     //Perform action on all abilities in a given level
          if (feature.level <= this.props.level) {                  //Only act on abilities that apply to the player's chosen level
            playerFeatures.push({                                   //Push the ability information as a new object to playerAbilities
              id: feature.name,
              name: feature.name,
              description: feature.description,
              level: feature.level
            });
          }
        });
      };
    }

    if (this.props.class === "Warlock") {
      for (let level in classes.Warlock.features) {                   //Loop through all levels in the classes' "abilities" section
        classes.Warlock.features[level].forEach((feature) => {        //Perform action on all abilities in a given level
          if (feature.level <= this.props.level) {                    //Only act on abilities that apply to the player's chosen level
            playerFeatures.push({                                     //Push the ability information as a new object to playerAbilities
              id: feature.name,
              name: feature.name,
              description: feature.description,
              level: feature.level
            });
          }
        });
      };
    }

    if (this.props.class === "Wizard") {
      for (let level in classes.Wizard.features) {                   //Loop through all levels in the classes' "abilities" section
        classes.Wizard.features[level].forEach((feature) => {        //Perform action on all abilities in a given level
          if (feature.level <= this.props.level) {                   //Only act on abilities that apply to the player's chosen level
            playerFeatures.push({                                    //Push the ability information as a new object to playerAbilities
              id: feature.name,
              name: feature.name,
              description: feature.description,
              level: feature.level
            });
          }
        });
      };
    }

    //Build the form with an ability card for each ability
    let form;
    if (playerFeatures.length !== 0) {
      form = playerFeatures.map(feature => (
        <Card
        key={feature.name}
        cardType = "abilityCard"
        name = {feature.name}
        description = {feature.description}
        level = {feature.level}/>
      ));
    }
    else { //This is temporary
      form = <h3 style={{color: "red"}}><em>You need to pick a character class and level!</em></h3>
    }

    return (
      <div>
        <h3><strong>Your character will start with the following features:</strong></h3>
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

export default connect(mapStateToProps, null)(NewCharacterFeats);
