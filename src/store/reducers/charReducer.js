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
  playerStats: {
    strengthScore: 0,
    dexterityScore: 0,
    constitutionScore: 0,
    intelligenceScore: 0,
    wisdomScore: 0,
    charismaScore: 0
  },
  playerSkills: {
    athletics: 0,
    acrobatics: 0,
    slightOfHand: 0,
    stealth: 0,
    arcana: 0,
    history: 0,
    investigation: 0,
    nature: 0,
    religion: 0,
    animalHandling: 0,
    insight: 0,
    medicine: 0,
    perception: 0,
    survival: 0,
    deception: 0,
    intimidation: 0,
    performance: 0,
    persuasion: 0
  }
};

const saveCharacterBasics = (state, action) => {
  return {
    ...state,
    basicCharacterData: {
      characterName: action.charData.name,
      characterLevel: action.charData.level,
      characterRace: action.charData.race,
      characterClass: action.charData.charClass,
      background: action.charData.background
    }
  };
};

const saveCharacterStats = (state, action) => {
  return {
    ...state,
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

const saveCharacterSkills = (state, action) => {
  return {
    ...state,
    playerSkills: {
      athletics: action.charSkills.athletics,
      acrobatics: action.charSkills.acrobatics,
      slightOfHand: action.charSkills.slightOfHand,
      stealth: action.charSkills.stealth,
      arcana: action.charSkills.arcana,
      history: action.charSkills.history,
      investigation: action.charSkills.investigation,
      nature: action.charSkills.nature,
      religion: action.charSkills.religion,
      animalHandling: action.charSkills.animalHandling,
      insight: action.charSkills.insight,
      medicine: action.charSkills.medicine,
      perception: action.charSkills.perception,
      survival: action.charSkills.survival,
      deception: action.charSkills.deception,
      intimidation: action.charSkills.intimidation,
      performance: action.charSkills.performance,
      persuasion: action.charSkills.persuasion
    }
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
    case actionTypes.SAVE_CHARACTER_BASICS: return saveCharacterBasics(state, action);
    case actionTypes.SAVE_CHARACTER_STATS: return saveCharacterStats(state, action);
    case actionTypes.SAVE_CHARACTER_SKILLS: return saveCharacterSkills(state, action);
    case actionTypes.ROLL_CHARACTER_STATS: return rollCharacterStats(state, action);
    default: return state;
  };
};

export default charReducer;
