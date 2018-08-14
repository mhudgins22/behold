import React, { Component } from 'react';

class NewCharacter extends Component {
  render() {
    let form = (
      <form>
        <input className={null} type="text" name="characterName" placeholder="Character Name" />
        <input className={null} type="select" name="race" placeholder="Race" />
        <input className={null} type="select" name="class" placeholder="Class" />
      </form>
    );

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
