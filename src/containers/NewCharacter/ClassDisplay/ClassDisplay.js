import React from 'react';

const ClassDisplay = (props) => {
  let description = "";
  let hitDice = "";
  let primaryAbility = "";
  let savingThrows = "";

  switch (props.class) {
    case "Barbarian":
      description = "A fierce warrior of primitive background who can enter a battle rage.";
      hitDice = "d12";
      primaryAbility = "Strength";
      savingThrows = "Strength & Consitution";
      break;
    case "Bard":
      description = "An inspiring magician whose power echoes the music of creation.";
      hitDice = "d8";
      primaryAbility = "Charisma";
      savingThrows = "Dexterity & Charisma";
      break;
    case "Cleric":
      description = "A priestly champion who wields divine magic in service of a higher power.";
      hitDice = "d8";
      primaryAbility = "Charisma";
      savingThrows = "Wisdom & Charisma";
      break;
    case "Druid":
      description = "A priest of the Old Faith, wielding the powers of nature and adopting animal forms.";
      hitDice = "d8";
      primaryAbility = "Wisdom";
      savingThrows = "Intelligence & Wisdom";
      break;
    case "Fighter":
      description = "A master of martial combat, skilled with a variety of weapons and armor.";
      hitDice = "d10";
      primaryAbility = "Strength or Dexterity";
      savingThrows = "Strength & Constitution";
      break;
    case "Monk":
      description = "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.";
      hitDice = "d8";
      primaryAbility = "Dexterity & Wisdom";
      savingThrows = "Strength & Dexterity";
      break;
    case "Paladin":
      description = "A holy warrior bound to a sacred oath.";
      hitDice = "d10";
      primaryAbility = "Strength & Charisma";
      savingThrows = "Wisdom & Charisma";
      break;
    case "Ranger":
      description = "A warrior who combats threats on the edges of civilization.";
      hitDice = "d10";
      primaryAbility = "Dexterity & Wisdom";
      savingThrows = "Strength & Dexterity";
      break;
    case "Rouge":
      description = "A scoundrel who uses stealth and trickery to overcome obstacles and enemies.";
      hitDice = "d8";
      primaryAbility = "Dexterity";
      savingThrows = "Dexterity & Intelligence";
      break;
    case "Sorcerer":
      description = "A spellcaster who draws on inherent magic from a gift or bloodline.";
      hitDice = "d6";
      primaryAbility = "Charisma";
      savingThrows = "Consitution & Charisma";
      break;
    case "Warlock":
      description = "A wielder of magic that is derived from a bargain with an extraplanar entity.";
      hitDice = "d8";
      primaryAbility = "Charisma";
      savingThrows = "Wisdom & Charisma";
      break;
    case "Wizard":
      description = "A scholarly magic-user capable of manipulating the structures of reality.";
      hitDice = "d6";
      primaryAbility = "Intelligence";
      savingThrows = "Intelligence & Wisdom";
      break;
  }

  return (
    <div>
      <hr />
      <p><strong>Class Description: </strong> <em>{description}</em></p>
      <p><strong>Hit Dice: </strong> <em>{hitDice}</em></p>
      <p><strong>Primary Ability: </strong> <em>{primaryAbility}</em></p>
      <p><strong>Saving Throws: </strong> <em>{savingThrows}</em></p>
    </div>
  );
};

export default ClassDisplay;
