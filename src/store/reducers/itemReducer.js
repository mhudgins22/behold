import * as actionTypes from "../actions/actionTypes";

const initialState = {
	customList: null,
	itemPreview: null
}

//Fetches items to populate list on ItemsPage
const fetchItemListSuccess = (state, action) => {
	return {
		...state,
		customList: action.itemList
	}
}

//
const previewItemCard = (state, action) => {
	return {
		...state,
		itemPreview: action.itemData
	}
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.FETCH_ITEM_LIST_SUCCESS: return fetchItemListSuccess(state, action);
		case actionTypes.PREVIEW_ITEM_CARD: return previewItemCard(state, action);
		default: return state;
	}
}

export default reducer;