import React from 'react';
import ReactTooltip from 'react-tooltip';

const RaceDisplay = (props) => {
  let description = "";
  let traits = "";

  switch (props.race) {
    case "Dragonborn":
      description = "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.";
      traits = "+2 Strength, +1 Charisma, Draconic Ancestry, Breath Weapon, Damage Resistance";
      break;
    case "Dwarf":
      description = "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.";
      traits = "+2 Constitution, Darkvision, Dwarven Resilience, Dwarven Combat Training, Stonecunning";
      break;
    case "Elf":
      description = "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.";
      traits = "+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance";
      break;
    case "Gnome":
      description = "A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body.";
      traits = "+2 Intelligence, Darkvision, Gnome Cunning";
      break;
    case "Half-Elf":
      description = "Half-elves combine what some say are the best qualities of their elf and human parents.";
      traits = "+2 Charisma, +1 to Two Other Ability Scores, Darkvision, Fey Ancestry, Skill Versatility";
      break;
    case "Halfling":
      description = "The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.";
      traits = "+2 Dexterity, Lucky, Brave, Halfling Nimbleness";
      break;
    case "Half-Orc":
      description = "Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see.";
      traits = "+2 Strength, +1 Constitution, Darkvision, Menacing, Relentless";
      break;
    case "Human":
      description = "Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.";
      traits = "+1 to All Ability Scores, Extra Language";
      break;
    case "Tiefling":
      description = "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.";
      traits = "+2 Charisma, +1 Intelligence, Darkvision, Hellish Resistance, Infernal Legacy";
      break;
  };

  return (
    <div>
      <hr />
      <p><strong>Race Description: </strong><em>{description}</em></p>
      <p data-tip="Each race includes racial traits that are common to members of that race"><strong>Race Traits: </strong><em>{traits}</em></p>
      <ReactTooltip />
    </div>
  );
};

export default RaceDisplay;
