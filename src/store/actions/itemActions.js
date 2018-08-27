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

export const postItemSuccess = () => {
	return {
		type: actionTypes.POST_ITEM_SUCCESS,
	}
}

export const postItem = (itemData) => {
	return dispatch => {
		axios.post("items/custom.json", itemData);
	}
}

//=============================================================
//Actions for updating an item
export const putItemStart = () => {
	return {
		type: actionTypes.PUT_ITEM_START
	}
}

export const putItemFail = () => {
	return {
		type: actionTypes.PUT_ITEM_FAIL
	}
}

export const putItemSuccess = () => {
	return {
		type: actionTypes.PUT_ITEM_SUCCESS
	}
}

export const putItem = (itemData, id) => {
	return dispatch => {
		axios.put("items/custom/" + id + ".json", itemData);
	}
}
//=================================================================
//Actions for deleting an item
export const deleteItemStart = () => {
	return {
		type: actionTypes.DELETE_ITEM_START
	}
}

export const deleteItemFail = () => {
	return {
		type: actionTypes.DELETE_ITEM_FAIL
	}
}

export const deleteItemSuccess = () => {
	return {
		type: actionTypes.DELETE_ITEM_SUCCESS
	}
}

export const deleteItem = (id) => {
	return dispatch => {
		axios.delete("/items/custom/" + id + ".json");
	}
}

//======================================================
//Actions for fetching item lists
export const fetchItemListStart = () => {
	return {
		type: actionTypes.FETCH_ITEM_LIST_START
	}
}

export const fetchItemListFail = () => {
	return {
		type: actionTypes.FETCH_ITEM_LIST_FAIL
	}
};

export const fetchItemListSuccess = (itemList) => {
	return {
		type: actionTypes.FETCH_ITEM_LIST_SUCCESS,
		itemList: itemList
	}
}

export const fetchItemList = () => {
	return dispatch => {
		axios.get("items/custom.json")
		.then(response => {
			let data = [];
			for (let key in response.data) {
				data.push({
					id: key,
					...response.data[key]
				});
			}
			console.log(data);
			dispatch(fetchItemListSuccess(data));
		})
		.catch(err => {
			console.log(err)
		});
	}
}

//========================================================

//Action to populate item card with data from clicked item
export const previewItemCard = (itemData) => {
	return {
		type: actionTypes.PREVIEW_ITEM_CARD,
		itemData: itemData
	}
}

//Action to remove data from itemCard and item PREVIEW_ITEM_CARD
export const clearItemPreview = () => {
	return {
		type: actionTypes.CLEAR_ITEM_PREVIEW
	}
}