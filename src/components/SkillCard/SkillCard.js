import React from 'react';

const SkillCard = (props) => {
  let skillValue = 0;

  if (props.proficient) {
    skillValue = props.value + props.proficiencyBonus;
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
