import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './NewCharacter.css';

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

  render() {
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

    //display class information in box
    let classInfo = "";

    switch (this.state.controls.characterClass.value) {
      case "Barbarian":
        classInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Class Description: </strong> <em>A fierce warrior of primitive background who can enter a battle rage.</em></p>
            <p><strong>Hit Dice: </strong> <em>d12</em></p>
            <p><strong>Primary Ability: </strong> <em>Strength</em></p>
            <p><strong>Saving Throws: </strong> <em>Strength & Consitution</em></p>
          </div>
        );
        break;
      case "Bard":
        classInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Class Description: </strong> <em>An inspiring magician whose power echoes the music of creation.</em></p>
            <p><strong>Hit Dice: </strong> <em>d8</em></p>
            <p><strong>Primary Ability: </strong> <em>Charisma</em></p>
            <p><strong>Saving Throws: </strong> <em>Dexterity & Charisma</em></p>
          </div>
        );
        break;
      case "Cleric":
        classInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Class Description: </strong><em>A priestly champion who wields divine magic in service of a higher power.</em></p>
            <p><strong>Hit Dice: </strong> <em>d8</em></p>
            <p><strong>Primary Ability: </strong> <em>Charisma</em></p>
            <p><strong>Saving Throws: </strong> <em>Wisdom & Charisma</em></p>
          </div>
        );
        break;
      case "Druid":
        classInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Class Description: </strong> <em>A priest of the Old Faith, wielding the powers of nature and adopting animal forms.</em></p>
            <p><strong>Hit Dice: </strong> <em>d8</em></p>
            <p><strong>Primary Ability: </strong> <em>Wisdom</em></p>
            <p><strong>Saving Throws: </strong> <em>Intelligence & Wisdom</em></p>
          </div>
        );
        break;
      case "Fighter":
        classInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Class Description: </strong> <em>A master of martial combat, skilled with a variety of weapons and armor</em></p>
            <p><strong>Hit Dice: </strong> <em>d10</em></p>
            <p><strong>Primary Ability: </strong> <em>Strength or Dexterity</em></p>
            <p><strong>Saving Throws: </strong> <em>Strength & Constitution</em></p>
          </div>
        );
        break;
      case "Monk":
        classInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Class Description: </strong> <em>A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.</em></p>
            <p><strong>Hit Dice: </strong> <em>d8</em></p>
            <p><strong>Primary Ability: </strong> <em>Dexterity & Wisdom</em></p>
            <p><strong>Saving Throws: </strong> <em>Strength & Dexterity</em></p>
          </div>
        );
        break;
      case "Paladin":
        classInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Class Description: </strong> <em>A holy warrior bound to a sacred oath.</em></p>
            <p><strong>Hit Dice: </strong> <em>d10</em></p>
            <p><strong>Primary Ability: </strong> <em>Strength & Charisma</em></p>
            <p><strong>Saving Throws: </strong> <em>Wisdom & Charisma</em></p>
          </div>
        );
        break;
      case "Ranger":
        classInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Class Description: </strong> <em>A warrior who combats threats on the edges of civilization.</em></p>
            <p><strong>Hit Dice: </strong> <em>d10</em></p>
            <p><strong>Primary Ability: </strong> <em>Dexterity & Wisdom</em></p>
            <p><strong>Saving Throws: </strong> <em>Strength & Dexterity</em></p>
          </div>
        );
        break;
      case "Rouge":
        classInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Class Description: </strong> <em>A scoundrel who uses stealth and trickery to overcome obstacles and enemies.</em></p>
            <p><strong>Hit Dice: </strong> <em>d8</em></p>
            <p><strong>Primary Ability: </strong> <em>Dexterity</em></p>
            <p><strong>Saving Throws: </strong> <em>Dexterity & Intelligence</em></p>
          </div>
        );
        break;
      case "Sorcerer":
        classInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Class Description: </strong> <em>A spellcaster who draws on inherent magic from a gift or bloodline.</em></p>
            <p><strong>Hit Dice: </strong> <em>d6</em></p>
            <p><strong>Primary Ability: </strong> <em>Charisma</em></p>
            <p><strong>Saving Throws: </strong> <em>Consitution & Charisma</em></p>
          </div>
        );
        break;
      case "Warlock":
        classInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Class Description: </strong> <em>A wielder of magic that is derived from a bargain with an extraplanar entity.</em></p>
            <p><strong>Hit Dice: </strong> <em>d8</em></p>
            <p><strong>Primary Ability: </strong> <em>Charisma</em></p>
            <p><strong>Saving Throws: </strong> <em>Wisdom & Charisma</em></p>
          </div>
        );
        break;
      case "Wizard":
        classInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Class Description: </strong> <em>A scholarly magic-user capable of manipulating the structures of reality</em></p>
            <p><strong>Hit Dice: </strong> <em>d6</em></p>
            <p><strong>Primary Ability: </strong> <em>Intelligence</em></p>
            <p><strong>Saving Throws: </strong> <em>Intelligence & Wisdom</em></p>
          </div>
        )
        break;
      default:
        classInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Class Description: </strong> <em></em></p>
            <p><strong>Hit Dice: </strong> <em></em></p>
            <p><strong>Primary Ability: </strong> <em></em></p>
            <p><strong>Saving Throws: </strong> <em></em></p>
          </div>
        );
    }

    //display background information in box. Not done adding all the info
    let backgroundInfo = "";

    switch (this.state.controls.background.value) {
      case "Acolyte":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em>You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an
              intermediary between the realm of the holy and the mortal world, performing sacred rites and offering
              sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a
              cleric—performing sacred rites is not the same thing as channeling divine power.</em>
            </p>
            <p><strong>Skill Proficiencies: </strong> <em>Insight, Religion</em></p>
            <p><strong>Languages: </strong><em>Two of your choice</em></p>
            <p><strong>Equipment: </strong><em>A holy symbol (a gift to you when you entered the priesthood),
              a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a pouch
              containing 15 gp</em></p>
          </div>
        );
        break;
      case "Charlatan":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em></em>
            </p>
            <p><strong>Skill Proficiencies: </strong><em></em></p>
            <p><strong>Languages: </strong><em></em></p>
            <p><strong>Equipment: </strong><em></em></p>
          </div>
        );
        break;
      case "Criminal/Spy":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em>You are an experienced criminal with a history of breaking the law. You have spent a lot of time
              among other criminals and still have contacts within the criminal underworld. You’re far closer than
              most people to the world of murder, theft, and violence that pervades the underbelly of civilization,
              and you have survived up to this point by flouting the rules and regulations of society.</em>
            </p>
            <p><strong>Skill Proficiencies: </strong><em>Deception, Stealth</em></p>
            <p><strong>Tool Proficiencies: </strong><em>One type of gaming set, thieves’ tools</em></p>
            <p><strong>Equipment: </strong><em>A crowbar, a set of dark common clothes including a hood,
            and a pouch containing 15 gp</em></p>
          </div>
        );
        break;
      case "Entertainer":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em></em>
            </p>
            <p><strong>Skill Proficiencies: </strong><em></em></p>
            <p><strong>Languages: </strong><em></em></p>
            <p><strong>Equipment: </strong><em></em></p>
          </div>
        );
        break;
      case "Folk Hero":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em>You come from a humble social rank, but you are destined for so much more. Already the
              people of your home village regard you as their champion, and your destiny calls you to stand against
              the tyrants and monsters that threaten the common folk everywhere.</em>
            </p>
            <p><strong>Skill Proficiencies: </strong><em>Animal Handling, Survival</em></p>
            <p><strong>Tool Proficiencies: </strong><em>One type of artisan’s tools, vehicles (land)</em></p>
            <p><strong>Equipment: </strong><em>A set of artisan’s tools (one of your choice), a shovel,
            an iron pot, a set of common clothes, and a pouch containing 10 gp</em></p>
          </div>
        );
        break;
      case "Galdiator":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em></em>
            </p>
            <p><strong>Skill Proficiencies: </strong><em></em></p>
            <p><strong>Languages: </strong><em></em></p>
            <p><strong>Equipment: </strong><em></em></p>
          </div>
        );
        break;
      case "Guild Artisan/Guild Merchant":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em></em>
            </p>
            <p><strong>Skill Proficiencies: </strong><em></em></p>
            <p><strong>Languages: </strong><em></em></p>
            <p><strong>Equipment: </strong><em></em></p>
          </div>
        );
        break;
      case "Hermit":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em></em>
            </p>
            <p><strong>Skill Proficiencies: </strong><em></em></p>
            <p><strong>Languages: </strong><em></em></p>
            <p><strong>Equipment: </strong><em></em></p>
          </div>
        );
        break;
      case "Knight":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em></em>
            </p>
            <p><strong>Skill Proficiencies: </strong><em></em></p>
            <p><strong>Languages: </strong><em></em></p>
            <p><strong>Equipment: </strong><em></em></p>
          </div>
        );
        break;
      case "Noble":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em>You understand wealth, power, and privilege. You carry a noble title, and your family owns land,
              collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar
              with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel
              with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who
              cares deeply about the people who live and work on your land, keenly aware of
              your responsibility to them.</em>
            </p>
            <p><strong>Skill Proficiencies: </strong><em>History, Persuasion</em></p>
            <p><strong>Tool Proficiencies: </strong><em>One type of gaming set</em></p>
            <p><strong>Languages: </strong><em>One of your choice</em></p>
            <p><strong>Equipment: </strong><em>A set of fine clothes, a signet ring, a scroll of pedigree,
            and a purse containing 25 gp</em></p>
          </div>
        );
        break;
      case "Outlander":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em></em>
            </p>
            <p><strong>Skill Proficiencies: </strong><em></em></p>
            <p><strong>Languages: </strong><em></em></p>
            <p><strong>Equipment: </strong><em></em></p>
          </div>
        );
        break;
      case "Pirate":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em></em>
            </p>
            <p><strong>Skill Proficiencies: </strong><em></em></p>
            <p><strong>Languages: </strong><em></em></p>
            <p><strong>Equipment: </strong><em></em></p>
          </div>
        );
        break;
      case "Sage":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em>You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls,
              and listened to the greatest experts on the subjects that interest you. Your efforts have made you a
              master in your fields of study.</em>
            </p>
            <p><strong>Skill Proficiencies: </strong><em>Arcana, History</em></p>
            <p><strong>Languages: </strong><em>Two of your choice</em></p>
            <p><strong>Equipment: </strong><em>A bottle of black ink, a quill, a small knife, a letter from a dead
            colleague posing a question you have not yet been able to answer, a set of common clothes, and a pouch
            containing 10 gp</em></p>
          </div>
        );
        break;
      case "Sailor":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em></em>
            </p>
            <p><strong>Skill Proficiencies: </strong><em></em></p>
            <p><strong>Languages: </strong><em></em></p>
            <p><strong>Equipment: </strong><em></em></p>
          </div>
        );
        break;
      case "Soldier":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em>War has been your life for as long as you care to remember. You trained as a youth, studied the
              use of weapons and armor, learned basic survival techniques, including how to stay alive on the
              battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a
              member of a local militia who rose to prominence during a recent war.</em>
            </p>
            <p><strong>Skill Proficiencies: </strong><em>Athletics, Intimidation</em></p>
            <p><strong>Tool Proficiences: </strong><em>One type of gaming set, vehicles (land)</em></p>
            <p><strong>Equipment: </strong><em>An insignia of rank, a trophy taken from a fallen enemy
            (a dagger, broken blade, or piece of a banner), a set of bone dice or deck of cards, a set of common
            clothes, and a pouch containing 10 gp</em></p>
          </div>
        );
        break;
      case "Urchin":
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em></em>
            </p>
            <p><strong>Skill Proficiencies: </strong><em></em></p>
            <p><strong>Tool Proficiences: </strong><em></em></p>
            <p><strong>Languages: </strong><em></em></p>
            <p><strong>Equipment: </strong><em></em></p>
          </div>
        );
        break;
      default:
        backgroundInfo = (
          <div className={classes.InfoBox}>
            <p><strong>Background Description: </strong></p>
            <p>
              <em></em>
            </p>
            <p><strong>Skill Proficiencies: </strong> <em></em></p>
            <p><strong>Languages: </strong> <em></em></p>
            <p><strong>Equipment: </strong> <em></em></p>
          </div>
        );
    }

    return (
      <div>
        <h2>Character Creation Page</h2>
        <p>Use this page to create a new character that can easily be exported to any campaign that has been set up on this app. We have provided some general instructions and tips to help guide you though the process!</p>
        <br />
        {form}
        <br />
        {raceDescription}
        <br />
        {classInfo}
        <br />
        {backgroundInfo}
        <br />
        <Link to={this.props.match.url + "/Stats"}>
          <Button
            buttonType="Success"
            clicked={null}
            text="Save and Continue">
          </Button>
        </Link>
      </div>
    )
  }
}

export default NewCharacter;
