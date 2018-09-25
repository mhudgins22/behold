import * as actionTypes from './actionTypes';
import axios from "../../axios";

export const updateCharacterBasics = (characterData) => {
	return {
		type: actionTypes.UPDATE_CHARACTER_BASICS,
    charData: characterData
	};
};

export const updateCharacterStats = (characterStats) => {
  return {
    type: actionTypes.UPDATE_CHARACTER_STATS,
    charStats: characterStats
  };
};

export const rollCharacterStats = () => {
  return {
    type: actionTypes.ROLL_CHARACTER_STATS
  };
};
