import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from "../../components/UI/Button/Button";

class CharacterPage extends Component {
  render() {
    return (
      <div>
        <Link to={this.props.match.url + "/NewCharacter"}>
          <Button
            buttonType = "Character"
            clicked = {null}
            text = "Create New Character">
          </Button>
        </Link>
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
