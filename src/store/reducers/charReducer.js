import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  basicCharacterData: {
    characterName: "",
    characterLevel: 1,
    characterRace: "",
    characterClass: "",
    background: ""
  },
  rolledStats: [],
  loading: false,
  playerStats: {
    strengthScore: 0,
    dexterityScore: 0,
    constitutionScore: 0,
    intelligenceScore: 0,
    wisdomScore: 0,
    charismaScore: 0
  }
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
		loading: false,
    basicCharacterData: {
      characterName: action.charData.name,
      characterLevel: action.charData.level,
      characterRace: action.charData.race,
      characterClass: action.charData.charClass,
      background: action.charData.background
    }
	};

};

const postCharacterBasicsFail = (state, action) => {
	return {
		...state,
		loading: false,
		error: action.error
	};
};

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
    playerStats: {
      strengthScore: action.charStats.strength,
      dexterityScore: action.charStats.dexterity,
      constitutionScore: action.charStats.constitution,
      intelligenceScore: action.charStats.intelligence,
      wisdomScore: action.charStats.wisdom,
      charismaScore: action.charStats.charisma
    }
  };
};

const postCharacterStatsFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error
  };
};

const rollCharacterStats = (state, action) => {
  let diceHolder = [];    //A place to temporarily hold our results
  let results = [];
  for (let i = 0; i < 6; i++) {   // Will run six times to give us 6 stat rolls
    for (let j = 0; j < 4; j++ ) {    //Will run four times to give us our 4 D6 rolls for each stat
      let rand = 1 + Math.floor(Math.random() * 6);
      diceHolder.push(rand);
    }
    diceHolder.sort();    //Order dice so we can get the lowest value at the front
    let removedNumber = diceHolder.shift();   //Remove lowest value from front
    let nextStat = diceHolder.reduce((a, b) => a + b);    //Add the remaining dice together
    results.push(nextStat);
    diceHolder = [];
    nextStat = 0;
  }
  console.log(results);
  return {
    ...state,
    rolledStats: results
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
    case actionTypes.ROLL_CHARACTER_STATS: return rollCharacterStats(state, action);
    default: return state;
  };
};

export default charReducer;
