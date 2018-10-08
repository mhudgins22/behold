import React from 'react';

import classes from '../../NewCharacter.css';

const StatsSuggestionBox = (props) => {
  let firstSuggestion = "";
  let secondSuggestion = "";
  // let additionalNotes = "";
  let raceBonusInfo = "";

  switch (props.class) {
    case "Barbarian":
      firstSuggestion = "Strength";
      secondSuggestion = "Constitution";
      break;
    case "Bard":
      firstSuggestion = "Charisma";
      secondSuggestion = "Dexterity";
      break;
    case "Cleric":
      firstSuggestion = "Wisdom";
      secondSuggestion = "Strength or Constitution";
      break;
    case "Druid":
      firstSuggestion = "Wisdom";
      secondSuggestion = "Constitution";
      break;
    case "Fighter":
      firstSuggestion = "Strength or Dexterity";
      secondSuggestion = "Constitution";
      // additionalNotes = "Your choice of strength or dexterity should depend on whether you would like to focus of melee weapons (strength) or ranged weapons (dexterity)";
      break;
    case "Monk":
      firstSuggestion = "Dexterity";
      secondSuggestion = "Wisdom";
      break;
    case "Paladin":
      firstSuggestion = "Strength";
      secondSuggestion = "Charisma";
      break;
    case "Ranger":
      firstSuggestion = "Dexterity";
      secondSuggestion = "Wisdom";
      break;
    case "Rogue":
      firstSuggestion = "Dexterity";
      secondSuggestion = "Intelligence";
      // additionalNotes = "Choose charisma instead of intelligence if you plan to emphasize deception and social interaction";
      break;
    case "Sorcerer":
      firstSuggestion = "Charisma";
      secondSuggestion = "Constitution";
      // additionalNotes = "Suggested cantrips: light, prestidigitation, ray of frost, and shocking grasp. Suggested first level spells: shield and magic missile.";
      break;
    case "Warlock":
      firstSuggestion = "Charisma";
      secondSuggestion = "Constitution";
      // additionalNotes = "Suggested cantrips: blast and chill touch. Suggested first level spells: charm person and witch bolt.";
      break;
    case "Wizard":
      firstSuggestion = "Intelligence";
      secondSuggestion = "Constitution or Dexterity";
      // additionalNotes = "Suggested cantrips: mage hand, light, and ray of frost. Suggested first level spells for your spellbook: burning hands, charm person, feather fall, mage armor, magic missile, and sleep.";
      break;
  };

  switch (props.race) {
    case "Dragonborn":
      raceBonusInfo = "+2 Strength and +1 Charisma";
      break;
    case "Dwarf":
      raceBonusInfo = "+2 Constitution";
      break;
    case "Elf":
      raceBonusInfo = "+2 Dexterity";
      break;
    case "Gnome":
      raceBonusInfo = "+2 Intelligence";
      break;
    case "Half-Elf":
      raceBonusInfo = "+2 Charisma and +1 to Two Other Ability Scores of Your Choice";
      break;
    case "Halfling":
      raceBonusInfo = "+2 Dexterity";
      break;
    case "Half-Orc":
      raceBonusInfo = "+2 Strength and +1 Constitution";
      break;
    case "Human":
      raceBonusInfo = "+1 to All Ability Scores";
      break;
    case "Tiefling":
      raceBonusInfo = "+2 Charisma and +1 Intelligence";
      break;
  };

  return (
    <div>
      <p>As a {props.class}, your suggested primary ability score is {firstSuggestion}, followed by {secondSuggestion}.</p>
      <p>As a {props.race}, you will receive {raceBonusInfo}.</p>
    </div>
  );
};

export default StatsSuggestionBox;
