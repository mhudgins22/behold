import * as actionTypes from "../actions/actionTypes";

const initialState = {
	redirectPath: null
};

const setRedirectPath = (state, action) => {
	return {
		...state,
		redirectPath: action.path
	}
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.SET_REDIRECT_PATH: return setRedirectPath(state, action);
		default: return state;
	}
}

export default reducer;