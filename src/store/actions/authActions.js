import * as actionTypes from "./actionTypes";

//Changes redirect paths
export const setRedirectPath = (path) => {
	return {
		type: actionTypes.SET_REDIRECT_PATH,
		path: path
	}
}