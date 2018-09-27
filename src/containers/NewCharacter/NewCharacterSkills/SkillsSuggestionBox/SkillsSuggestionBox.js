import React from 'react';

import classes from '../../NewCharacter.css';

const SkillsSuggestionBox = (props) => {
  let firstSkill = null;
  let secondSkill = null;

  switch (props.background) {
    case ("Acolyte"):
      firstSkill = "Insight";
      secondSkill = "Religion";
      break;
    case ("Charlatan"):
      firstSkill = "Deception";
      secondSkill = "Sleight of Hand";
      break;
    case ("Criminal/Spy"):
      firstSkill = "Deception";
      secondSkill = "Stealth";
      break;
    case ("Entertainer"):
      firstSkill = "Acrobatics";
      secondSkill = "Performance";
      break;
    case ("Folk Hero"):
      firstSkill = "Animal Handling";
      secondSkill = "Survival";
      break;
    case ("Gladiator"):
      firstSkill = "Acrobatics";
      secondSkill = "Performance";
      break;
    case ("Guild Artisan/Guild Merchant"):
      firstSkill = "Insight";
      secondSkill = "Persusion";
      break;
    case ("Hermit"):
      firstSkill = "Medicine";
      secondSkill = "Religion";
      break;
    case ("Knight"):
      firstSkill = "History";
      secondSkill = "Persuasion";
      break;
    case ("Noble"):
      firstSkill = "History";
      secondSkill = "Persuasion";
      break;
    case ("Outlander"):
      firstSkill = "Athletics";
      secondSkill = "Survival";
      break;
    case ("Pirate"):
      firstSkill = "Athletics";
      secondSkill = "Perception";
      break;
    case ("Sage"):
      firstSkill = "Arcana";
      secondSkill = "History";
      break;
    case ("Sailor"):
      firstSkill = "Athletics";
      secondSkill = "Perception";
      break;
    case ("Soldier"):
      firstSkill = "Athletics";
      secondSkill = "Intimidation";
    case ("Urchin"):
      firstSkill = "Sleight of Hand";
      secondSkill = "Stealth";
      break;
  }

  return (
    <div className={classes.InfoBox}>
      <p>You have selected the {props.background} background, so you gain proficiencies in the {firstSkill} and {secondSkill} skills.</p>
    </div>
  );
};

export default SkillsSuggestionBox;
