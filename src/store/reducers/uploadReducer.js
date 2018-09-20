import * as actionTypes from "../actions/actionTypes";

const initialState = {
	uploadType: null,
	stagedUploads: null
}

const setUploadType = (state, action) => {
	return {
		...state,
		uploadType: action.uploadType
	}
}

const stageUpload = (state, action) => {
	if (state.stagedUploads === null) {
		return {
			...state,
			stagedUploads: [action.uploadData]
		}
	} else {
		return {
			...state,
			stagedUploads: state.stagedUploads.concat(action.uploadData)
		}
	}
	
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_UPLOAD_TYPE: return setUploadType(state, action);
		case actionTypes.STAGE_UPLOAD: return stageUpload(state, action);
		default: return state;
	}
}

export default reducer;