import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  characterName: "",
  characterRace: "",
  characterClass: "",
  background: ""
};

const saveCharBasics = (state, action) => { //Needs fixing
  // return updateObject(state, {results: updatedArray});
};

const charReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_CHAR_BASICS: return saveCharBasics(state, action);
    default: return state;
  };
};

export default charReducer;
