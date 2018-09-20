import * as actionTypes from "./actionTypes";
import axios from "../../axios";
import storage from "../../firebase";

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

//Actions for uploading image to stroage and image path to database

export const uploadImageStart = () => {
	return {
		type: actionTypes.UPLOAD_IMAGE_START
	}
}

export const uploadImageSuccess = () => {
	return {
		type: actionTypes.UPLOAD_IMAGE_SUCCESS
	}
}

export const uploadImageFail = () => {
	return {
		type: actionTypes.UPLOAD_IMAGE_FAIL
	}
}

export const uploadImages = (imageData, uploadType) => {
	//Be sure for inputs with type = "file" to pass in the file list as this.state.controls.inputName.fileList[0] to properly look at the listed image
	return dispatch => {
		for (let image in imageData) {
			if (uploadType === "items") {
				axios.post("/items/imagePath/" + imageData[image].catagory + "/" + imageData[image].type + ".json", {name: imageData[image].name, path: imageData[image].storagePath});
				const storageRef = storage.ref();
				const imageRef = storageRef.child(imageData[image].fileName);
				const imagePathRef = storageRef.child(imageData[image].storagePath);
				const file = imageData[image].fileList
				imagePathRef.put(file).then(function(snapshot) {
					console.log('[UPLOAD_IMAGE_SUCCESS] Image Uploaded to Storage');
				});
			}
			
		}
	}
}