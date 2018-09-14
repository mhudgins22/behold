import * as actionTypes from './actionTypes';
import axios from "../../axios";

export const postCharacterBasicsStart = () => {
	return {
		type: actionTypes.POST_CHARACTER_BASICS_START
	};
};

export const postCharacterBasicsFail = (error) => {
	return {
		type: actionTypes.POST_CHARACTER_BASICS_FAIL,
		error: error
	};
};

export const postCharacterBasicsSuccess = () => {
	return {
		type: actionTypes.POST_CHARACTER_BASICS_SUCCESS,
	};
};

export const postCharacterBasics = (basicCharacterData) => {
	return dispatch => {
		dispatch(postCharacterBasicsStart());
		axios.post("/characters/custom.json", basicCharacterData)
		.then (reponse => {
			dispatch(postCharacterBasicsSuccess());
      console.log("test: success?");
		})
		.catch(err => {
			dispatch(postCharacterBasicsFail(err));
		});
	}
}
