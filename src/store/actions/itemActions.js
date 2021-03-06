import * as actionTypes from "./actionTypes";
import axios from "../../axios";
import storage from "../../firebase";

//Actions for item images
export const fetchItemImageStart = () => {
	return {
		type: actionTypes.FETCH_ITEM_IMAGE_START
	}
}

export const fetchItemImageSuccess = (imageData) => {
	return {
		type: actionTypes.FETCH_ITEM_IMAGE_SUCCESS,
		imageData: imageData
	}
}

export const clearItemImage = () => {
	return {
		type: actionTypes.CLEAR_ITEM_IMAGE
	}
}

//Reaches to database to fetch item paths from storage, uses paths to fetch images stored there
export const fetchItemImage = (imagePath) => {
	return dispatch => {
		dispatch(clearItemImage());
		dispatch(fetchItemImageStart());
		const storageRef = storage.ref();
		storageRef.child(imagePath).getDownloadURL()
		.then(function(url){
			console.log(url);
			dispatch(fetchItemImageSuccess(url));
		})
		.catch(err => {
			console.log(err);
		});
	}
}
//=============================================================

//Actions for fetching paths to item images to create options
export const fetchItemPathSuccess = (imagePaths) => {
	return {
		type: actionTypes.FETCH_ITEM_PATHS_SUCCESS,
		imagePaths: imagePaths
	}
}


export const fetchItemPaths = (itemType, item) => {
	return dispatch => {
		let imagePaths = [];
		axios.get("/items/imagePath/" + itemType + "/" + item + ".json")
		.then(response => {
			for (let key in response.data) {
				imagePaths.push({
					value: response.data[key].path,
					label: response.data[key].name
				});
			}
			dispatch(fetchItemPathSuccess(imagePaths));
		});
	}
} 
//==============================================

//Actions for posting an item
export const postItemStart = () => {
	return {
		type: actionTypes.POST_ITEM_START
	}
}

export const postItemFail = (error) => {
	return {
		type: actionTypes.POST_ITEM_FAIL,
		error: error
	}
}

export const postItemSuccess = () => {
	return {
		type: actionTypes.POST_ITEM_SUCCESS,
	}
}

export const postItem = (itemData) => {
	return dispatch => {
		dispatch(postItemStart());
		axios.post("items/custom.json", itemData)
		.then (reponse => {
			dispatch(postItemSuccess());
		})
		.catch(err => {
			dispatch(postItemFail(err));
		});
	}
}

//=============================================================
//Actions for updating an item
export const putItemStart = () => {
	return {
		type: actionTypes.PUT_ITEM_START
	}
}

export const putItemFail = (error) => {
	return {
		type: actionTypes.PUT_ITEM_FAIL,
		error: error
	}
}

export const putItemSuccess = () => {
	return {
		type: actionTypes.PUT_ITEM_SUCCESS
	}
}

export const putItem = (itemData, id) => {
	return dispatch => {
		axios.put("items/custom/" + id + ".json", itemData)
		.then(() => {
			dispatch(putItemSuccess());
		})
		.catch(err => {
			dispatch(putItemFail(err));
		})
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

export const fetchBaseItemsSuccess = (itemList) => {
	return {
		type: actionTypes.FETCH_BASE_ITEMS_SUCCESS,
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
			dispatch(fetchItemListSuccess(data));
		})
		.catch(err => {
			console.log(err)
		});
		axios.get("items/base.json")
		.then(response => {
			let data = [];
			for (let key in response.data) {
				data.push({
					id: key,
					...response.data[key]
				});
			}
			dispatch(fetchBaseItemsSuccess(data));
		})
		.catch(err => {
			console.log(err)
		});
	}
}

//===========================================================
//Action to clear item filter
export const clearItemFilter = () => {
	return {
		type: actionTypes.CLEAR_ITEM_FILTER
	}
}

//Action to set item filter
export const setItemFilter = (filter) => {
	return {
		type: actionTypes.SET_ITEM_FILTER,
		filter: filter
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