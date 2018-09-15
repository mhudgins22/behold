import * as actionTypes from './actionTypes';
import axios from "../../axios";

export const postCharacterBasicsStart = () => {
	return {
		type: actionTypes.POST_CHARACTER_BASICS_START
	};
};

export const postCharacterBasicsSuccess = () => {
	return {
		type: actionTypes.POST_CHARACTER_BASICS_SUCCESS,
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
			dispatch(postCharacterBasicsSuccess());
      console.log("thisworking?");
		})
		.catch(err => {
			dispatch(postCharacterBasicsFail(err));
		});
	}
}

export const postCharacterStatsStart = () => {
  return {
    type: actionTypes.POST_CHARACTER_BASICS_START
  };
};

export const postCharacterStatsSuccess = () => {
  return {
    type: actionTypes.POST_CHARACTER_BASICS_SUCCESS
  };
};

export const postCharacterStatsFail = (error) => {
  return {
    type: actionTypes.POST_CHARACTER_BASICS_START,
    error: error
  };
};

export const postCharacterStats = (characterStats) => {
  return dispatch => {
    dispatch(postCharacterStatsStart());
    axios.post("/characters/custom/stats.json", characterStats)
      .then(response => {
        dispatch(postCharacterStatsSuccess());
        console.log("Post character stats success?")
      })
      .catch(err => {
        dispatch(postCharacterStatsFail(err))
      });
  };
};
