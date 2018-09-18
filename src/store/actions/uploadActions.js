import * as actionTypes from "./actionTypes";

export const setUploadType = (uploadType) => {
	return {
		type: actionTypes.SET_UPLOAD_TYPE,
		uploadType: uploadType
	}
}

export const stageUpload = (uploadData) => {
	return {
		type: actionTypes.STAGE_UPLOAD,
		uploadData: uploadData
	}
}