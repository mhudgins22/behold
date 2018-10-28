import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../../components/UI/Button/Button';

class NewCharacterWelcome extends Component {


  render () {

    let firstParagraph = "";
    let secondParagraph = "";
    

    return (
      <div>
        <h1>Welcome, {this.props.name}</h1>
        <h2>About the {this.props.class} class: </h2>
        <Link to={"/Create/Characters/NewCharacter/Stats"}>
          <Button
            buttonType="Success"
            clicked={null}
            text="Continue" />
        </Link>
      </div>
    );

  }


}

const mapStateToProps = (state) => {
  return {
    name: state.char.basicCharacterData.characterName,
    class: state.char.basicCharacterData.characterClass
  }
};

export default connect(mapStateToProps, null)(NewCharacterWelcome);
