import * as actionTypes from "../actions/actionTypes";

const initialState = {
	customList: null
}

const fetchItemListSuccess = (state, action) => {
	return {
		...state,
		customList: action.itemList
	}
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.FETCH_ITEM_LIST_SUCCESS: return fetchItemListSuccess(state, action);
		default: return state;
	}
}

export default reducer;