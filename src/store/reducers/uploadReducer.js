import * as actionTypes from "../actions/actionTypes";

const initialState = {
	uploadType: null,
	stagedUploads: null,
	loading: false,
	error: null
}

const setUploadType = (state, action) => {
	return {
		...state,
		uploadType: action.uploadType
	}
}

//=========================================================

//Staging and clearing staged uploads
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

const clearStagedUploads = (state, action) => {
	return {
		...state,
		stagedUploads: null
	}
}

//=============================================================
//Uploading images loading state

const uploadImageStart = (state, action) => {
	return {
		...state,
		loading: true
	}
}

const uploadImageSuccess = (state, action) => {
	return {
		...state,
		loading: false
	}
}

const uploadImageFail = (state, action) => {
	return {
		...state,
		loading: false,
		error: action.error
	}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_UPLOAD_TYPE: return setUploadType(state, action);
		case actionTypes.STAGE_UPLOAD: return stageUpload(state, action);
		case actionTypes.CLEAR_STAGED_UPLOADS: return clearStagedUploads(state, action);
		case actionTypes.UPLOAD_IMAGE_START: return uploadImageStart(state, action);
		case actionTypes.UPLOAD_IMAGE_SUCCESS: return uploadImageSuccess(state, action);
		case actionTypes.UPLOAD_IMAGE_FAIL: return uploadImageFail(state, action);
		default: return state;
	}
}

export default reducer;