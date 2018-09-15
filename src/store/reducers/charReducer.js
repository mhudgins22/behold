import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  basicCharacterData: {
    characterName: "",
    characterRace: "",
    characterClass: "",
    background: ""
  },
  loading: false
};

//Post character basics
const postCharacterBasicsStart = (state, action) => {
	return {
		...state,
		loading: true,
	};
};

const postCharacterBasicsSuccess = (state, action) => {
	return {
		...state,
		loading: false
	}
}

const postCharacterBasicsFail = (state, action) => {
	return {
		...state,
		loading: false,
		error: action.error
	}
}

//Post character stats
const postCharacterStatsStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const postCharacterStatsSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
  };
};

const postCharacterStatsFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error
  };
};

const charReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_CHARACTER_BASICS_START: return postCharacterBasicsStart(state, action);
    case actionTypes.POST_CHARACTER_BASICS_SUCCESS: return postCharacterBasicsSuccess(state, action);
    case actionTypes.POST_CHARACTER_BASICS_FAIL: return postCharacterBasicsFail(state, action);
    case actionTypes.POST_CHARACTER_STATS_START: return postCharacterStatsStart(state, action);
    case actionTypes.POST_CHARACTER_STATS_SUCCESS: return postCharacterStatsSuccess(state, action);
    case actionTypes.POST_CHARACTER_STATS_FAIL: return postCharacterStatsFail(state, action);
    default: return state;
  };
};

export default charReducer;
