import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';

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
      }
    }
  }

  onChangeHandler = (event, element) => {
    console.log(event.target.value);
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
      <Input
        key = {element.id}
        elementType = {element.config.elementType}
        elementConfig = {element.config.elementConfig}
        options = {element.config.options}
        value = {element.config.value}
        validation = {element.config.validation}
        placeholder = {element.config.placeholder}
        valid = {element.config.valid}
        touched = {element.config.touched}
        shouldValidate = {null}
        changed = {(event) => this.onChangeHandler(event, element.id)}
        />
    ));

    //display race information
    let raceDescription = "";
    let raceTraits ="";

    switch (this.state.controls.characterRace.value) {
      case "Dragonborn":
        raceDescription = (
          <p><em>Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.</em></p>
        );
        raceTraits = (
          <p><em>Race traits: +2 Strength, +1 Charisma, Draconic Ancestry, Breath Weapon, Damage Resistance</em></p>
        );
        break;
      case "Dwarf":
        raceDescription = (
          <p><em>Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.</em></p>
        );
        raceTraits = (
          <p><em>Race traits: +2 Constitution, Darkvision, Dwarven Resilience, Dwarven Combat Training, Stonecunning</em></p>
        );
        break;
      case "Elf":
        raceDescription = (
          <p><em>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.</em></p>
        );
        raceTraits = (
          <p><em>Race traits: +2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance</em></p>
        );
        break;
      case "Gnome":
        raceDescription = (
          <p><em>A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body.</em></p>
        );
        raceTraits = (
          <p><em>Race traits: +2 Intelligence, Darkvision, Gnome Cunning</em></p>
        );
        break;
      case "Half-Elf":
        raceDescription = (
          <p><em>Half-elves combine what some say are the best qualities of their elf and human parents.</em></p>
        );
        raceTraits = (
          <p><em>Race traits: +2 Charisma, +1 to Two Other Ability Scores, Darkvision, Fey Ancestry, Skill Versatility</em></p>
        );
        break;
      case "Halfling":
        raceDescription = (
          <p><em>The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.</em></p>
        );
        raceTraits = (
          <p><em>Race traits: The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.</em></p>
        );
        break;
      case "Half-Orc":
        raceDescription = (
          <p><em>Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see.</em></p>
        );
        raceTraits = (
          <p><em>+2 Strength, +1 Constitution, Darkvision, Menacing, Relentless </em></p>
        );
        break;
      case "Human":
        raceDescription = (
          <p><em>Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.</em></p>
        );
        raceTraits = (
          <p><em>Race traits: Race traits: +1 to All Ability Scores, Extra Language</em></p>
        );
        break;
      case "Tiefling":
        raceDescription = (
          <p><em>To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.</em></p>
        );
        raceTraits = (
          <p><em>Race traits: +2 Charisma, +1 Intelligence, Darkvision, Hellish Resistance, Infernal Legacy</em></p>
        );
        break;
      }

    //display class information. I need to add more styling to this section
    let classInfo = "";

    switch (this.state.controls.characterClass.value) {
      case "Barbarian":
        classInfo = (
          <div>
            <p>A fierce warrior of primitive background who can enter a battle rage.</p>
            <br />
            <p>Hit Die: d12</p>
            <p>Primary Ability: Strength</p>
            <p>Saving Throws: Strength & Consitution</p>
          </div>
        );
        break;
      case "Bard":
        classInfo = (
          <div>
            <p>An inspiring magician whose power echoes the music of creation</p>
            <br />
            <p>Hit Die: d8</p>
            <p>Primary Ability: Charisma</p>
            <p>Saving Throws: Dexterity & Charisma</p>
          </div>
        );
        break;
      case "Cleric":
        classInfo = (
          <div>
            <p>A priestly champion who wields divine magic in service of a higher power</p>
            <br />
            <p>Hit Die: d8</p>
            <p>Primary Ability: Charisma</p>
            <p>Saving Throws: Wisdom & Charisma</p>
          </div>
        );
        break;
      case "Druid":
        classInfo = (
          <div>
            <p>A priest of the Old Faith, wielding the powers of nature and adopting animal forms</p>
            <br />
            <p>Hit Die: d8</p>
            <p>Primary Ability: Wisdom</p>
            <p>Saving Throws: Intelligence & Wisdom</p>
          </div>
        );
        break;
      case "Fighter":
        classInfo = (
          <div>
            <p>A master of martial combat, skilled with a variety of weapons and armor</p>
            <br />
            <p>Hit Die: d10</p>
            <p>Primary Ability: Strength or Dexterity</p>
            <p>Saving Throws: Strength & Constitution</p>
          </div>
        );
        break;
      case "Monk":
        classInfo = (
          <div>
            <p>A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection</p>
            <br />
            <p>Hit Die: d8</p>
            <p>Primary Ability: Dexterity & Wisdom</p>
            <p>Saving Throws: Strength & Dexterity</p>
          </div>
        );
        break;
      case "Paladin":
        classInfo = (
          <div>
            <p>A holy warrior bound to a sacred oath</p>
            <br />
            <p>Hit Die: d10</p>
            <p>Primary Ability: Strength & Charisma</p>
            <p>Saving Throws: Wisdom & Charisma</p>
          </div>
        );
        break;
      case "Ranger":
        classInfo = (
          <div>
            <p>A warrior who combats threats on the edges of civilization</p>
            <br />
            <p>Hit Die: d10</p>
            <p>Primary Ability: Dexterity & Wisdom</p>
            <p>Saving Throws: Strength & Dexterity</p>
          </div>
        );
        break;
      case "Rouge":
        classInfo = (
          <div>
            <p>A scoundrel who uses stealth and trickery to overcome obstacles and enemies</p>
            <br />
            <p>Hit Die: d8</p>
            <p>Primary Ability: Dexterity</p>
            <p>Saving Throws: Dexterity & Intelligence</p>
          </div>
        );
        break;
      case "Sorcerer":
        classInfo = (
          <div>
            <p>A spellcaster who draws on inherent magic from a gift or bloodline</p>
            <br />
            <p>Hit Die: d6</p>
            <p>Primary Ability: Charisma</p>
            <p>Saving Throws: Consitution & Charisma</p>
          </div>
        );
        break;
      case "Warlock":
        classInfo = (
          <div>
            <p>A wielder of magic that is derived from a bargain with an extraplanar entity</p>
            <br />
            <p>Hit Die: d8</p>
            <p>Primary Ability: Charisma</p>
            <p>Saving Throws: Wisdom & Charisma</p>
          </div>
        );
        break;
      case "Wizard":
        classInfo = (
          <div>
            <p>A scholarly magic-user capable of manipulating the structures of reality</p>
            <br />
            <p>Hit Die: d6</p>
            <p>Primary Ability: Intelligence</p>
            <p>Saving Throws: Intelligence & Wisdom</p>
          </div>
        )
        break;
    }


    return ( //I will take all of the <br /> out once I figure out proper styling
      <div>
        <h2>Character Creation Page</h2>
        <p>Use this page to create a new character that can easily be exported to any campaign that has been set up on this app. We have provided some general instructions and tips to help guide you though the process!</p>
        <br />
        {form}
        <br />
        {raceDescription}
        <br />
        <br />
        {raceTraits}
        <br />
        <br />
        {classInfo}
      </div>
    )
  }
}

export default NewCharacter;
