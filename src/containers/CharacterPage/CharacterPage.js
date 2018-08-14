import React, { Component } from 'react';

import Button from "../../components/UI/Button/Button";

class CharacterPage extends Component {
  render() {
    return (
      <div>
        <Button
          buttonType = "Character"
          clicked = {null}
          text = "Create New Character">
        </Button>
        <Button
          buttonType = "Character"
          clicked = {null}
          text = "Manage Characters">
        </Button>
      </div>
    )
  }
}

export default CharacterPage;
