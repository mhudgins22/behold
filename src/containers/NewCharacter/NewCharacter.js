import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './NewCharacter.css';
import * as actions from '../../store/actions/index';
import BackgroundDisplay from './BackgroundDisplay/BackgroundDisplay';
import ClassDisplay from './ClassDisplay/ClassDisplay';

class NewCharacter extends Component {
  state = {
    controls: {
      characterName: {
        elementType: "input",
        elementConfig: {
          type: "input",
          placeholder: "Your Character's Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      characterRace: {
        elementType: "select",
        elementConfig: {

        },
        options: [
          {
            value: "",
            label: "Select a Race"
          },
          {
            value: "Dragonborn",
            label: "Dragonborn"
          },
          {
            value: "Dwarf",
            label: "Dwarf"
          },
          {
            value: "Elf",
            label: "Elf"
          },
          {
            value: "Gnome",
            label: "Gnome"
          },
          {
            value: "Half-Elf",
            label: "Half-Elf"
          },
          {
            value: "Halfling",
            label: "Halfling"
          },
          {
            value: "Half-Orc",
            label: "Half-Orc"
          },
          {
            value: "Human",
            label: "Human"
          },
          {
            value: "Tiefling",
            label: "Tiefling"
          }
        ],
        value: "",
        validationRules: {
					required: true
				},
				valid: true,
				touched: false,
				visible: true
      },
      characterClass: {
        elementType: "select",
        elementConfig: {

        },
        options: [
          {
            value: "",
            label: "Select a Class"
          },
          {
            value: "Barbarian",
            label: "Barbarian"
          },
          {
            value: "Bard",
            label: "Bard"
          },
          {
            value: "Cleric",
            label: "Cleric"
          },
          {
            value: "Druid",
            label: "Druid"
          },
          {
            value: "Fighter",
            label: "Fighter"
          },
          {
            value: "Monk",
            label: "Monk"
          },
          {
            value: "Paladin",
            label: "Paladin"
          },
          {
            value: "Ranger",
            label: "Ranger"
          },
          {
            value: "Rouge",
            label: "Rouge"
          },
          {
            value: "Sorcerer",
            label: "Sorcerer"
          },
          {
            value: "Warlock",
            label: "Warlock"
          },
          {
            value: "Wizard",
            label: "Wizard"
          },
        ],
        value: "",
        validationRules: {
					required: true
				},
				valid: true,
				touched: false,
				visible: true
      },
      background: {
        elementType: "select",
        elementConfig: {

        },
        options: [
          {
            value: "",
            label: "Select a Background"
          },
          {
            value: "Acolyte",
            label: "Acolyte"
          },
          {
            value: "Charlatan",
            label: "Charlatan"
          },
          {
            value: "Criminal/Spy",
            label: "Criminal/Spy"
          },
          {
            value: "Entertainer",
            label: "Entertainer"
          },
          {
            value: "Folk Hero",
            label: "Folk Hero"
          },
          {
            value: "Gladiator",
            label: "Gladiator"
          },
          {
            value: "Guild Artisan/Guild Merchant",
            label: "Guild Artisan/Guild Merchant"
          },
          {
            value: "Hermit",
            label: "Hermit"
          },
          {
            value: "Knight",
            label: "Knight"
          },
          {
            value: "Noble",
            label: "Noble"
          },
          {
            value: "Outlander",
            label: "Outlander"
          },
          {
            value: "Pirate",
            label: "Pirate"
          },
          {
            value: "Sage",
            label: "Sage"
          },
          {
            value: "Sailor",
            label: "Sailor"
          },
          {
            value: "Soldier",
            label: "Soldier"
          },
          {
            value: "Urchin",
            label: "Urchin"
          },
        ],
        value: "",
        validationRules: {
					required: true
				},
				valid: true,
				touched: false,
				visible: true
      }
    }
  }

  onChangeHandler = (event, element) => {

    console.log(event.target.value);
    if (element === "characterName") {
      this.setState({
        controls: {
          ...this.state.controls,
          characterName: {
            ...this.state.controls.characterName,
            value: event.target.value
          }
        }
      });
    }

    if (element === "characterRace") {
      switch (event.target.value) {
        case ("Dragonborn"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterRace: {
                ...this.state.controls.characterRace,
                value: "Dragonborn"
              }
            }
          });
          break;
        case ("Dwarf"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterRace: {
                ...this.state.controls.characterRace,
                value: "Dwarf"
              }
            }
          });
          break;
        case ("Elf"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterRace: {
                ...this.state.controls.characterRace,
                value: "Elf"
              }
            }
          });
          break;
        case ("Gnome"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterRace: {
                ...this.state.controls.characterRace,
                value: "Gnome"
              }
            }
          });
          break;
        case ("Half-Elf"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterRace: {
                ...this.state.controls.characterRace,
                value: "Half-Elf"
              }
            }
          });
          break;
        case ("Halfling"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterRace: {
                ...this.state.controls.characterRace,
                value: "Halfling"
              }
            }
          });
          break;
        case ("Half-Orc"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterRace: {
                ...this.state.controls.characterRace,
                value: "Half-Orc"
              }
            }
          });
          break;
        case ("Human"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterRace: {
                ...this.state.controls.characterRace,
                value: "Human"
              }
            }
          });
          break;
        case ("Tiefling"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterRace: {
                ...this.state.controls.characterRace,
                value: "Tiefling"
              }
            }
          });
          break;
      }
    }
    if (element === "characterClass") {
      switch (event.target.value) {
        case ("Barbarian"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterClass: {
                ...this.state.controls.characterClass,
                value: "Barbarian"
              }
            }
          });
          break;
        case ("Bard"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterClass: {
                ...this.state.controls.characterClass,
                value: "Bard"
              }
            }
          });
          break;
        case ("Cleric"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterClass: {
                ...this.state.controls.characterClass,
                value: "Cleric"
              }
            }
          });
          break;
        case ("Druid"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterClass: {
                ...this.state.controls.characterClass,
                value: "Druid"
              }
            }
          });
          break;
        case ("Fighter"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterClass: {
                ...this.state.controls.characterClass,
                value: "Fighter"
              }
            }
          });
          break;
        case ("Monk"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterClass: {
                ...this.state.controls.characterClass,
                value: "Monk"
              }
            }
          });
          break;
        case ("Paladin"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterClass: {
                ...this.state.controls.characterClass,
                value: "Paladin"
              }
            }
          });
          break;
        case ("Ranger"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterClass: {
                ...this.state.controls.characterClass,
                value: "Ranger"
              }
            }
          });
          break;
        case ("Rouge"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterClass: {
                ...this.state.controls.characterClass,
                value: "Rouge"
              }
            }
          });
          break;
        case ("Sorcerer"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterClass: {
                ...this.state.controls.characterClass,
                value: "Sorcerer"
              }
            }
          });
          break;
        case ("Warlock"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterClass: {
                ...this.state.controls.characterClass,
                value: "Warlock"
              }
            }
          });
          break;
        case ("Wizard"):
          this.setState({
            controls: {
              ...this.state.controls,
              characterClass: {
                ...this.state.controls.characterClass,
                value: "Wizard"
              }
            }
          });
          break;
      }
    }

    if (element === "background") {
      switch (event.target.value) {
        case ("Acolyte"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Acolyte"
              }
            }
          });
          break;
        case ("Charlatan"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Charlatan"
              }
            }
          });
          break;
        case ("Criminal/Spy"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Criminal/Spy"
              }
            }
          });
          break;
        case ("Entertainer"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Entertainer"
              }
            }
          });
          break;
        case ("Folk Hero"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Folk Hero"
              }
            }
          });
          break;
        case ("Gladiator"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Gladiator"
              }
            }
          });
          break;
        case ("Guild Artisan/Guild Merchant"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Guild Artisan/Guild Merchant"
              }
            }
          });
          break;
        case ("Hermit"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Hermit"
              }
            }
          });
          break;
        case ("Knight"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Knight"
              }
            }
          });
          break;
        case ("Noble"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Noble"
              }
            }
          });
          break;
        case ("Outlander"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Outlander"
              }
            }
          });
          break;
        case ("Pirate"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Pirate"
              }
            }
          });
          break;
        case ("Sage"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Sage"
              }
            }
          });
          break;
        case ("Sailor"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Sailor"
              }
            }
          });
          break;
        case ("Soldier"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Soldier"
              }
            }
          });
          break;
        case ("Urchin"):
          this.setState({
            controls: {
              ...this.state.controls,
              background: {
                ...this.state.controls.background,
                value: "Urchin"
              }
            }
          });
          break;
      }
    }
  }

  onSaveCharacterBasics = (event) => {
    //event.preventDefault();
    let basicCharacterData = {
      name: this.state.controls.characterName.value,
      race: this.state.controls.characterRace.value,
      charClass: this.state.controls.characterClass.value,
      background: this.state.controls.background.value
    }
    this.props.onSaveBasics(basicCharacterData);
  }

  render() {

    //Build the form
    let formElements = [];
    for (let element in this.state.controls) {
      formElements.push({
        id: element,
        config: this.state.controls[element]
      });
    }

    let form = formElements.map(element => (
      <div
        className={classes.Input}
        key = {element.id}>
        <Input
          elementType = {element.config.elementType}
          elementConfig = {element.config.elementConfig}
          options = {element.config.options}
          value = {element.config.value}
          validation = {element.config.validation}
          placeholder = {element.config.placeholder}
          valid = {element.config.valid}
          touched = {element.config.touched}
          shouldValidate = {null}
          changed = {(event) => this.onChangeHandler(event, element.id)}/>
      </div>
    ));

    //display race information in box
    let raceDescription = "";

    switch (this.state.controls.characterRace.value) {
      case "Dragonborn":
        raceDescription = (
          <div className={classes.InfoBox}>
            <p><strong>Race Description: </strong><em>Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.</em></p>
            <p><strong>Race Traits: </strong><em>+2 Strength, +1 Charisma, Draconic Ancestry, Breath Weapon, Damage Resistance</em></p>
          </div>
        );
        break;
      case "Dwarf":
        raceDescription = (
          <div className={classes.InfoBox}>
            <p><strong>Race Description: </strong><em>Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.</em></p>
            <p><strong>Race Traits: </strong><em>+2 Constitution, Darkvision, Dwarven Resilience, Dwarven Combat Training, Stonecunning</em></p>
          </div>
        );
        break;
      case "Elf":
        raceDescription = (
          <div className={classes.InfoBox}>
            <p><strong>Race Description: </strong><em>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.</em></p>
            <p><strong>Race Traits: </strong><em>+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance</em></p>
          </div>
        );
        break;
      case "Gnome":
        raceDescription = (
          <div className={classes.InfoBox}>
            <p><strong>Race Description: </strong><em>A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body.</em></p>
            <p><strong>Race Traits: </strong><em>+2 Intelligence, Darkvision, Gnome Cunning</em></p>
          </div>
        );
        break;
      case "Half-Elf":
        raceDescription = (
          <div className={classes.InfoBox}>
            <p><strong>Race Description: </strong><em>Half-elves combine what some say are the best qualities of their elf and human parents.</em></p>
            <p><strong>Race Traits: </strong><em>+2 Charisma, +1 to Two Other Ability Scores, Darkvision, Fey Ancestry, Skill Versatility</em></p>
          </div>
        );
        break;
      case "Halfling":
        raceDescription = (
          <div className={classes.InfoBox}>
            <p><strong>Race Description: </strong><em>The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.</em></p>
            <p><strong>Race Traits: </strong><em>+2 Dexterity, Lucky, Brave, Halfling Nimbleness</em></p>
          </div>
        );
        break;
      case "Half-Orc":
        raceDescription = (
          <div className={classes.InfoBox}>
            <p><strong>Race Description: </strong><em>Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see.</em></p>
            <p><strong>Race Traits: </strong><em>+2 Strength, +1 Constitution, Darkvision, Menacing, Relentless </em></p>
          </div>
        );
        break;
      case "Human":
        raceDescription = (
          <div className={classes.InfoBox}>
            <p><strong>Race Description: </strong><em>Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.</em></p>
            <p><strong>Race Traits: </strong><em>+1 to All Ability Scores, Extra Language</em></p>
          </div>
        );
        break;
      case "Tiefling":
        raceDescription = (
          <div className={classes.InfoBox}>
            <p><strong>Race Description: </strong><em>To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.</em></p>
            <p><strong>Race Traits: </strong><em>+2 Charisma, +1 Intelligence, Darkvision, Hellish Resistance, Infernal Legacy</em></p>
          </div>
        );
        break;
      default:
        raceDescription = (
          <div className={classes.InfoBox}>
            <p><strong>Race Description: </strong></p>
            <p><strong>Race Traits: </strong></p>
          </div>
        )
      }

    return (
      <div>
        <h1>Character Creation Guide</h1>
        <h3>Use this page to create a new character that can easily be exported to any campaign that has been set up
          on this app. We have provided some general instructions and tips to help guide you though the process!
          We will start by defining some basic characteristics of your new character.</h3>
        <br />
        {form}
        <br />
        {raceDescription}
        <br />
        <ClassDisplay class={this.state.controls.characterClass.value} />
        <br />
        <BackgroundDisplay background={this.state.controls.background.value} />
        <br />
        <Link to={this.props.match.url + "/Stats"}>
          <Button
            buttonType="Success"
            clicked={this.onSaveCharacterBasics}
            text="Save and Continue" />
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    class: state.char.basicCharacterData.characterClass
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveBasics: (basicCharacterData) => dispatch(actions.postCharacterBasics(basicCharacterData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacter);
