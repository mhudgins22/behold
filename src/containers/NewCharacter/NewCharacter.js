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
        value = {element.config.value}
        validation = {element.config.validation}
        placeholder = {element.config.placeholder}
        valid = {element.config.valid}
        touched = {element.config.touched}
        shouldValidate = {null}
        changed = {null}
        />
    ));

    return (
      <div>
        <h2>Character Creation Page</h2>
        <p>Use this page to create a new character that can easily be exported to any campaign that has been set up on this app. We have provided some general instructions and tips to help guide you though the process!</p>
        {form}
      </div>
    )
  }
}

export default NewCharacter;
