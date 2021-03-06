import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './NewCharacterSkills.css';
import * as actions from '../../../store/actions/index';

import SkillCard from '../../../components/SkillCard/SkillCard';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import SkillsSuggestionBox from './SkillsSuggestionBox/SkillsSuggestionBox';

class NewCharacterSkills extends Component {
  state = {
    controls: {
      skills: {
        strengthSkills: {
          athletics: {
            name: "Athletics",
            value: 0,
            proficient: false,
          }
        },
        dexteritySkills: {
          acrobatics: {
            name: "Acrobatics",
            value: 0,
            proficient: false
          },
          sleightOfHand: {
            name: "Sleight of Hand",
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
      }
    }
  };

  determineMod = (abilityScore) => {
    let score = parseInt(abilityScore, 10);
    let mod = 0;
    if (score % 2 === 0) {
      mod = (score / 2) - 5;
    } else {
      mod = ((score - 1) / 2 ) - 5;
    }
    return mod;
  };

  //Setting skill values based on attribute modifiers (received from global state)
  componentWillMount () {
    let strengthMod = this.determineMod(this.props.strength);
    let dexterityMod = this.determineMod(this.props.dexterity);
    let intelligenceMod = this.determineMod(this.props.intelligence);
    let wisdomMod = this.determineMod(this.props.wisdom);
    let charismaMod = this.determineMod(this.props.charisma);

    this.setState({
      controls: {
        ...this.state.controls,
        skills: {
          ...this.state.controls.skills,
          strengthSkills: {
            ...this.state.controls.skills.strengthSkills,
            athletics: {
              ...this.state.controls.skills.strengthSkills.athletics,
              value: strengthMod
            }
          },
          dexteritySkills: {
            ...this.state.controls.skills.dexteritySkills,
            acrobatics: {
              ...this.state.controls.skills.dexteritySkills.acrobatics,
              value: dexterityMod
            },
            sleightOfHand: {
              ...this.state.controls.skills.dexteritySkills.sleightOfHand,
              value: dexterityMod
            },
            stealth: {
              ...this.state.controls.skills.dexteritySkills.stealth,
              value: dexterityMod
            }
          },
          intelligenceSkills: {
            ...this.state.controls.skills.intelligenceSkills,
            arcana: {
              ...this.state.controls.skills.intelligenceSkills.arcana,
              value: intelligenceMod
            },
            history: {
              ...this.state.controls.skills.intelligenceSkills.history,
              value: intelligenceMod
            },
            investigation: {
              ...this.state.controls.skills.intelligenceSkills.investigation,
              value: intelligenceMod
            },
            nature: {
              ...this.state.controls.skills.intelligenceSkills.nature,
              value: intelligenceMod
            },
            religion: {
              ...this.state.controls.skills.intelligenceSkills.religion,
              value: intelligenceMod
            }
          },
          wisdomSkills: {
            ...this.state.controls.skills.wisdomSkills,
            animalHandling: {
              ...this.state.controls.skills.wisdomSkills.animalHandling,
              value: wisdomMod
            },
            insight: {
              ...this.state.controls.skills.wisdomSkills.insight,
              value: wisdomMod
            },
            medicine: {
              ...this.state.controls.skills.wisdomSkills.medicine,
              value: wisdomMod
            },
            perception: {
              ...this.state.controls.skills.wisdomSkills.perception,
              value: wisdomMod
            },
            survival: {
              ...this.state.controls.skills.wisdomSkills.survival,
              value: wisdomMod
            }
          },
          charismaSkills: {
            ...this.state.controls.skills.charismaSkills,
            deception: {
              ...this.state.controls.skills.charismaSkills.deception,
              value: charismaMod
            },
            intimidation: {
              ...this.state.controls.skills.charismaSkills.intimidation,
              value: charismaMod
            },
            performance: {
              ...this.state.controls.skills.charismaSkills.performance,
              value: charismaMod
            },
            persuasion: {
              ...this.state.controls.skills.charismaSkills.persuasion,
              value: charismaMod
            }
          }
        }
      }
    });
  }

  onChangeHandler = (event, element) => {
    // const updatedForm = {
    //   ...this.state.controls
    // };
    //
    // const updatedFormElement = {
    //   ...this.state.controls[element]
    // };
    //
    // for (let elements in updatedFormElement) {
    //   for (let skill in elements) {
    //     updatedFormElement[elements].skill.proficient = !updatedFormElement[elements].skill.proficient
    //   }
    // }
    //
    // updatedForm[element] = updatedFormElement;
    // this.setState({controls: updatedForm})

    //change strength proficiencies
    if (element === "athletics") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            strengthSkills: {
              ...this.state.controls.skills.strengthSkills,
              athletics: {
                ...this.state.controls.skills.strengthSkills.athletics,
                proficient: !this.state.controls.skills.strengthSkills.athletics.proficient
              }
            }
          }
        }
      });
    }

    //change dex proficiencies
    if (element === "acrobatics") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            dexteritySkills: {
              ...this.state.controls.skills.dexteritySkills,
              acrobatics: {
                ...this.state.controls.skills.dexteritySkills.acrobatics,
                proficient: !this.state.controls.skills.dexteritySkills.acrobatics.proficient
              }
            }
          }
        }
      });
    }
    if (element === "sleightOfHand") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            dexteritySkills: {
              ...this.state.controls.skills.dexteritySkills,
              sleightOfHand: {
                ...this.state.controls.skills.dexteritySkills.sleightOfHand,
                proficient: !this.state.controls.skills.dexteritySkills.sleightOfHand.proficient
              }
            }
          }
        }
      });
    }
    if (element === "stealth") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            dexteritySkills: {
              ...this.state.controls.skills.dexteritySkills,
              stealth: {
                ...this.state.controls.skills.dexteritySkills.stealth,
                proficient: !this.state.controls.skills.dexteritySkills.stealth.proficient
              }
            }
          }
        }
      });
    }

    //change intelligence proficiencies
    if (element === "arcana") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            intelligenceSkills: {
              ...this.state.controls.skills.intelligenceSkills,
              arcana: {
                ...this.state.controls.skills.intelligenceSkills.arcana,
                proficient: !this.state.controls.skills.intelligenceSkills.arcana.proficient
              }
            }
          }
        }
      });
    }
    if (element === "history") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            intelligenceSkills: {
              ...this.state.controls.skills.intelligenceSkills,
              history: {
                ...this.state.controls.skills.intelligenceSkills.history,
                proficient: !this.state.controls.skills.intelligenceSkills.history.proficient
              }
            }
          }
        }
      });
    }
    if (element === "investigation") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            intelligenceSkills: {
              ...this.state.controls.skills.intelligenceSkills,
              investigation: {
                ...this.state.controls.skills.intelligenceSkills.investigation,
                proficient: !this.state.controls.skills.intelligenceSkills.investigation.proficient
              }
            }
          }
        }
      });
    }
    if (element === "nature") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            intelligenceSkills: {
              ...this.state.controls.skills.intelligenceSkills,
              nature: {
                ...this.state.controls.skills.intelligenceSkills.nature,
                proficient: !this.state.controls.skills.intelligenceSkills.nature.proficient
              }
            }
          }
        }
      });
    }
    if (element === "religion") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            intelligenceSkills: {
              ...this.state.controls.skills.intelligenceSkills,
              religion: {
                ...this.state.controls.skills.intelligenceSkills.religion,
                proficient: !this.state.controls.skills.intelligenceSkills.religion.proficient
              }
            }
          }
        }
      });
    }

    //change wisdom proficiencies
    if (element === "animalHandling") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            wisdomSkills: {
              ...this.state.controls.skills.wisdomSkills,
              animalHandling: {
                ...this.state.controls.skills.wisdomSkills.animalHandling,
                proficient: !this.state.controls.skills.wisdomSkills.animalHandling.proficient
              }
            }
          }
        }
      });
    }
    if (element === "insight") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            wisdomSkills: {
              ...this.state.controls.skills.wisdomSkills,
              insight: {
                ...this.state.controls.skills.wisdomSkills.insight,
                proficient: !this.state.controls.skills.wisdomSkills.insight.proficient
              }
            }
          }
        }
      });
    }
    if (element === "medicine") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            wisdomSkills: {
              ...this.state.controls.skills.wisdomSkills,
              medicine: {
                ...this.state.controls.skills.wisdomSkills.medicine,
                proficient: !this.state.controls.skills.wisdomSkills.medicine.proficient
              }
            }
          }
        }
      });
    }
    if (element === "perception") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            wisdomSkills: {
              ...this.state.controls.skills.wisdomSkills,
              perception: {
                ...this.state.controls.skills.wisdomSkills.perception,
                proficient: !this.state.controls.skills.wisdomSkills.perception.proficient
              }
            }
          }
        }
      });
    }
    if (element === "survival") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            wisdomSkills: {
              ...this.state.controls.skills.wisdomSkills,
              survival: {
                ...this.state.controls.skills.wisdomSkills.survival,
                proficient: !this.state.controls.skills.wisdomSkills.survival.proficient
              }
            }
          }
        }
      });
    }

    //change charisma proficiencies
    if (element === "deception") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            charismaSkills: {
              ...this.state.controls.skills.charismaSkills,
              deception: {
                ...this.state.controls.skills.charismaSkills.deception,
                proficient: !this.state.controls.skills.charismaSkills.deception.proficient
              }
            }
          }
        }
      });
    }
    if (element === "intimidation") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            charismaSkills: {
              ...this.state.controls.skills.charismaSkills,
              intimidation: {
                ...this.state.controls.skills.charismaSkills.intimidation,
                proficient: !this.state.controls.skills.charismaSkills.intimidation.proficient
              }
            }
          }
        }
      });
    }
    if (element === "performance") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            charismaSkills: {
              ...this.state.controls.skills.charismaSkills,
              performance: {
                ...this.state.controls.skills.charismaSkills.performance,
                proficient: !this.state.controls.skills.charismaSkills.performance.proficient
              }
            }
          }
        }
      });
    }
    if (element === "persuasion") {
      this.setState({
        controls: {
          ...this.state.controls,
          skills: {
            ...this.state.controls.skills,
            charismaSkills: {
              ...this.state.controls.skills.charismaSkills,
              persuasion: {
                ...this.state.controls.skills.charismaSkills.persuasion,
                proficient: !this.state.controls.skills.charismaSkills.persuasion.proficient
              }
            }
          }
        }
      });
    }
  }

  onSaveCharacterSkills = (event) => {
    let characterSkills = {
      athletics: this.state.controls.skills.strengthSkills.athletics.value,
      acrobatics: this.state.controls.skills.dexteritySkills.acrobatics.value,
      sleightOfHand: this.state.controls.skills.dexteritySkills.sleightOfHand.value,
      stealth: this.state.controls.skills.dexteritySkills.stealth.value,
      arcana: this.state.controls.skills.intelligenceSkills.arcana.value,
      history: this.state.controls.skills.intelligenceSkills.history.value,
      investigation: this.state.controls.skills.intelligenceSkills.investigation.value,
      nature: this.state.controls.skills.intelligenceSkills.nature.value,
      religion: this.state.controls.skills.intelligenceSkills.religion.value,
      animalHandling: this.state.controls.skills.wisdomSkills.animalHandling.value,
      insight: this.state.controls.skills.wisdomSkills.insight.value,
      medicine: this.state.controls.skills.wisdomSkills.medicine.value,
      perception: this.state.controls.skills.wisdomSkills.perception.value,
      survival: this.state.controls.skills.wisdomSkills.survival.value,
      deception: this.state.controls.skills.charismaSkills.deception.value,
      intimidation: this.state.controls.skills.charismaSkills.intimidation.value,
      performance: this.state.controls.skills.charismaSkills.performance.value,
      persuasion: this.state.controls.skills.charismaSkills.persuasion.value
    };
    this.props.onSaveSkills(characterSkills);
  }

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

    let orderedSkillsArray = skillsArray.sort((a,b) => {
      let nameA = a.id.toUpperCase(); // ignore upper and lowercase
      let nameB = b.id.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    let skillsForm = orderedSkillsArray.map(element => (
      <div key={element.id}>
        <SkillCard
          name={element.config.name}
          value={element.config.value}
          proficient={element.config.proficient}
          level={this.props.level}
          changed = {(event) => this.onChangeHandler(event, element.id)}/>
      </div>
    ));


    return (
      <div>
        <h1>Skills & Proficiencies</h1>
        {directions}
        <SkillsSuggestionBox background={this.props.background}/>
        <div className={classes.SkillBoard}>
          {skillsForm}
        </div>
        <Link to={"/Create/Characters/NewCharacter/FeatsAndSpells"}>
          <Button
            buttonType="Success"
            clicked={this.onSaveCharacterSkills}
            text="Save and Continue" />
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    level: state.char.basicCharacterData.characterLevel,
    background: state.char.basicCharacterData.background,
    strength: state.char.playerStats.strengthScore,
    dexterity: state.char.playerStats.dexterityScore,
    intelligence: state.char.playerStats.intelligenceScore,
    wisdom: state.char.playerStats.wisdomScore,
    charisma: state.char.playerStats.charismaScore
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveSkills: (characterSkills) => dispatch(actions.saveCharacterSkills(characterSkills))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacterSkills);
