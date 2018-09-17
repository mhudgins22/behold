import React, { Component } from 'react';
import { connect } from 'react-redux';

import SkillCard from '../../../components/SkillCard/SkillCard';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import classes from './NewCharacterSkills.css';
import * as actions from '../../../store/actions/index';

class NewCharacterSkills extends Component {
  state = {
    controls: {
      skills: {
        strengthSkills: {
          athletics: {
            name: "Athletics",
            value: 0,
            proficient: false
          }
        },
        dexteritySkills: {
          acrobatics: {
            name: "Acrobatics",
            value: 0,
            proficient: false
          },
          slightOfHand: {
            name: "Slight of Hand",
            value: 0,
            proficient: false
          },
          stealth: {
            name: "Stealth",
            value: 0,
            proficient: false
          }
        },
        intelligenceSkills: {
          arcana: {
            name: "Arcana",
            value: 0,
            proficient: false
          },
          history: {
            name: "History",
            value: 0,
            proficient: false
          },
          investigation: {
            name: "Investigation",
            value: 0,
            proficient: false
          },
          nature: {
            name: "Nature",
            value: 0,
            proficient: false
          },
          religion: {
            name: "Religion",
            value: 0,
            proficient: false
          }
        },
        wisdomSkills: {
          animalHandling: {
            name: "Animal Handling",
            value: 0,
            proficient: false
          },
          insight: {
            name: "Insight",
            value: 0,
            proficient: false
          },
          medicine: {
            name: "Medicine",
            value: 0,
            proficient: false
          },
          perception: {
            name: "Perception",
            value: 0,
            proficient: false
          },
          survival: {
            name: "Survival",
            value: 0,
            proficient: false
          }
        },
        charismaSkills: {
          deception: {
            name: "Deception",
            value: 0,
            proficient: false
          },
          intimidation: {
            name: "Intimidation",
            value: 0,
            proficient: false
          },
          performance: {
            name: "Performance",
            value: 0,
            proficient: false
          },
          persuasion: {
            name: "Persuasion",
            value: 0,
            proficient: false
          }
        }
      },
      proficienyBonus: 0
    }
  };

  render() {
    const directions = (
      <h3>Use this page to determine the skills and proficiencies for your character. To begin, check the box below for each skill that you are profiient in.</h3>
    );

    let skillsArray = [];
    //there has to be a better way of doing this part, will refactor this code
    for (let element in this.state.controls.skills.strengthSkills) {
      skillsArray.push({
        id: element,
        config: this.state.controls.skills.strengthSkills[element]
      });
    }
    for (let element in this.state.controls.skills.dexteritySkills) {
      skillsArray.push({
        id: element,
        config: this.state.controls.skills.dexteritySkills[element]
      });
    }
    for (let element in this.state.controls.skills.intelligenceSkills) {
      skillsArray.push({
        id: element,
        config: this.state.controls.skills.intelligenceSkills[element]
      });
    }
    for (let element in this.state.controls.skills.wisdomSkills) {
      skillsArray.push({
        id: element,
        config: this.state.controls.skills.wisdomSkills[element]
      });
    }
    for (let element in this.state.controls.skills.charismaSkills) {
      skillsArray.push({
        id: element,
        config: this.state.controls.skills.charismaSkills[element]
      });
    }
    //figure out change stuff
    let skillsForm = skillsArray.map(element => (
      <div>
        <SkillCard
          name={element.config.name}
          value={element.config.value}
          proficient={element.config.proficient}/>
      </div>
    ));


    return (
      <div>
        <h1>Skills & Proficiencies</h1>
        {directions}
        {skillsForm}
      </div>
    )
  }
}

export default NewCharacterSkills;
