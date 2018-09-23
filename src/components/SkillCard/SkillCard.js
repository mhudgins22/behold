import React from 'react';

const SkillCard = (props) => {
  let skillValue = 0;
  let proficiencyBonus = 0;
  if (props.level <= 4) {
    proficiencyBonus = 2;
  } else if (props.level > 4 && props.level <= 8) {
    proficiencyBonus = 3;
  } else if (props.level > 8 && props.level <= 12) {
    proficiencyBonus = 4;
  } else if (props.level > 12 && props.level <= 16) {
    proficiencyBonus = 5;
  } else if (props.level > 16 && props.level <= 20) {
    proficiencyBonus = 6;
  } else {
    proficiencyBonus = 2;
  }

  if (props.proficient) {
    skillValue = props.value + proficiencyBonus;
  }
  else {
    skillValue = props.value;
  }

  return (
    <div>
      <label>
        <input
        type="checkbox"
        value={skillValue}
        checked={props.proficient}
        onChange={props.changed}/>
          {skillValue} | {props.name}
      </label>
    </div>
  );
};

export default SkillCard;
