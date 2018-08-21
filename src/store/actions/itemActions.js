import * as actionTypes from "./actionTypes";
import axios from "../../axios";



//Actions for posting an item
export const postItemStart = () => {
	return {
		type: actionTypes.POST_ITEM_START
	}
}

export const postItemFail = () => {
	return {
		type: actionTypes.POST_ITEM_FAIL
	}
}

export const postItemSuccess = (itemData) => {
	return {
		type: actionTypes.POST_ITEM_SUCCESS,
		itemData: itemData
	}
}

export const postItem = (itemData) => {
	return dispatch => {
		axios.post("items/custom.json", itemData);
	}
}