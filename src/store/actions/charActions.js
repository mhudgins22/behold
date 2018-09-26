import * as actionTypes from './actionTypes';
import axios from "../../axios";

export const saveCharacterBasics = (characterData) => {
	return {
		type: actionTypes.SAVE_CHARACTER_BASICS,
    charData: characterData
	};
};

export const saveCharacterStats = (characterStats) => {
  return {
    type: actionTypes.SAVE_CHARACTER_STATS,
    charStats: characterStats
  };
};

export const saveCharacterSkills = (characterSkills) => {
  return {
    type: actionTypes.SAVE_CHARACTER_SKILLS,
    charSkills: characterSkills
  };
};

export const rollCharacterStats = () => {
  return {
    type: actionTypes.ROLL_CHARACTER_STATS
  };
};
