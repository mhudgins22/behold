import React from 'react';

const SkillCard = (props) => {
  return (
    <div>
      <label>
        <input
        type="checkbox"
        value={props.value}
        checked={props.proficient}
        onChange={props.changed}/>
          {props.value} | {props.name}
      </label>
    </div>
  );
};

export default SkillCard;
