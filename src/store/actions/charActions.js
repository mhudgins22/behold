import * as actionTypes from './actionTypes';
import axios from "../../axios";

export const postCharacterBasicsStart = () => {
	return {
		type: actionTypes.POST_CHARACTER_BASICS_START
	};
};

export const postCharacterBasicsSuccess = (id, characterData) => {
	return {
		type: actionTypes.POST_CHARACTER_BASICS_SUCCESS,
    charId: id,
    charData: characterData
	};
};

export const postCharacterBasicsFail = (error) => {
	return {
		type: actionTypes.POST_CHARACTER_BASICS_FAIL,
		error: error
	};
};

export const postCharacterBasics = (basicCharacterData) => {
	return dispatch => {
		dispatch(postCharacterBasicsStart());
		axios.post("/characters/custom.json", basicCharacterData)
		.then (response => {
			dispatch(postCharacterBasicsSuccess(response.data.name, basicCharacterData));
		})
		.catch(err => {
			dispatch(postCharacterBasicsFail(err));
		});
	}
}

export const postCharacterStatsStart = () => {
  return {
    type: actionTypes.POST_CHARACTER_STATS_START
  };
};

export const postCharacterStatsSuccess = (id, characterStats) => {
  return {
    type: actionTypes.POST_CHARACTER_STATS_SUCCESS,
    id: id,
    charStats: characterStats
  };
};

export const postCharacterStatsFail = (error) => {
  return {
    type: actionTypes.POST_CHARACTER_STATS_FAIL,
    error: error
  };
};

export const postCharacterStats = (characterStats) => {
  return dispatch => {
    dispatch(postCharacterStatsStart());
    axios.post("/characters/custom/stats.json", characterStats)
      .then(response => {
        dispatch(postCharacterStatsSuccess(response.data.name, characterStats));
      })
      .catch(err => {
        dispatch(postCharacterStatsFail(err));
      });
  };
};

export const rollCharacterStats = () => {
  return {
    type: actionTypes.ROLL_CHARACTER_STATS
  };
};
