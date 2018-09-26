import * as actionTypes from "../actions/actionTypes";

const initialState = {
	customList: null,
	baseList: null,
	imageOptions: [
		{
			value: "",
			label: "Select Image"
		}
	],
	itemPreview: {
		id: "",
		name: "",
		rarity: "",
		type: "",
		flavorText: "",
		abilities: "",
		properties: "",
		damage: true,
		healing: false,
		armor: false,
		imagePath: "",
		catagory: "Weapon",
		damageValues: [
			{
				numberOfDice: "",
				die: "",
				bonus: "",
				type: ""
			},
			{
				numberOfDice: "",
				die: "",
				bonus: "",
				type: ""
			},
			{
				numberOfDice: "",
				die: "",
				bonus: "",
				type: ""
			}
		],
		armorClassValues: {
			AC: "",
			bonus: ""
		},
		healingValues: {
			numberOfDice: "",
			die: "",
			bonus: ""
		}
	},
	loading: false,
	error: null,
	image: "",
	filter: null
}



//Post item function
const postItemStart = (state, action) => {
	return {
		...state,
		loading: true,
	}
}

const postItemSuccess = (state, action) => {
	return {
		...state,
		loading: false
	}
}

const postItemFail = (state, action) => {
	return {
		...state,
		loading: false,
		error: action.error
	}
}

//========================================================

//Put item functions
const putItemStart = (state, action) => {
	return {
		...state,
		loading: true
	}
}

const putItemSuccess = (state, action) => {
	return {
		...state,
		loading: false
	}
}

const putItemFail = (state, action) => {
	return {
		...state,
		loading: false,
		error: action.error
	}
}

//========================================================

//Fetches items to populate list on ItemsPage
const fetchItemListSuccess = (state, action) => {
	return {
		...state,
		customList: action.itemList
	}
}

const fetchBaseItemsSuccess = (state, action) => {
	return {
		...state,
		baseList: action.itemList
	}
}

//===============================================================

//Fetch item paths
const fetchItemPathsSuccess = (state, action) => {
	return {
		...state,
		imageOptions: [
			{
				value: "",
				label: "Select Image"
			},
			...action.imagePaths
		]
	}
}

//=====================================================================

//Fetchs Item image data
const fetchItemImageStart = (state, action) => {
	return {
		...state,
		loading: true
	}
}

const fetchItemImageSuccess = (state, action) => {
	return {
		...state,
		image: action.imageData,
		loading: false
	}
}

export const clearItemImage = (state, action) => {
	return {
		...state,
		image: ""
	}
}

//=========================================================================

//Populates itemPreview with data from selected item
const previewItemCard = (state, action) => {
	return {
		...state,
		itemPreview: action.itemData
	}
}

//Clears data in item PREVIEW_ITEM_CARD
const clearItemPreview = (state, action) => {
	return {
		...state,
		itemPreview: {
			id: "",
			name: "",
			rarity: "",
			type: "",
			flavorText: "",
			abilities: "",
			properties: "",
			damage: true,
			healing: false,
			armor: false,
			imagePath: "",
			catagory: "Weapon",
			damageValues: [
				{
					numberOfDice: "",
					die: "",
					bonus: "",
					type: ""
				},
				{
					numberOfDice: "",
					die: "",
					bonus: "",
					type: ""
				},
				{
					numberOfDice: "",
					die: "",
					bonus: "",
					type: ""
				}	
			],
			armorClassValues: {
				AC: "",
				bonus: ""
			},
			healingValues: {
				numberOfDice: "",
				die: "",
				bonus: ""
			}
		},
		loading: false,
		image: ""
	}
}

//=============================================================================
//Clears item filter
const clearitemFilter = (state, action) => {
	return {
		...state,
		filter: null
	}
}

//Sets Item filter
const setItemFilter = (state, action) => {
	return {
		...state,
		filter: action.filter
	}
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		//Post item cases
		case actionTypes.POST_ITEM_START: return postItemStart(state, action);
		case actionTypes.POST_ITEM_SUCCESS: return postItemSuccess(state, action);
		case actionTypes.POST_ITEM_FAIL: return postItemFail(state, action);
		//Put item cases
		case actionTypes.PUT_ITEM_FAIL: return putItemFail(state, action);
		//Fetch list cases
		case actionTypes.FETCH_ITEM_LIST_SUCCESS: return fetchItemListSuccess(state, action);
		case actionTypes.FETCH_BASE_ITEMS_SUCCESS: return fetchBaseItemsSuccess(state, action);
		//Fetch image cases
		case actionTypes.FETCH_ITEM_IMAGE_START: return fetchItemImageStart(state, action);
		case actionTypes.FETCH_ITEM_IMAGE_SUCCESS: return fetchItemImageSuccess(state, action);
		case actionTypes.CLEAR_ITEM_IMAGE: return clearItemImage(state, action);
		//Fetch paths cases
		case actionTypes.FETCH_ITEM_PATHS_SUCCESS: return fetchItemPathsSuccess(state,action);
		//Adjust preview cases
		case actionTypes.PREVIEW_ITEM_CARD: return previewItemCard(state, action);
		case actionTypes.CLEAR_ITEM_PREVIEW: return clearItemPreview(state, action);
		//Set/Clear Filters
		case actionTypes.CLEAR_ITEM_FILTER: return clearitemFilter(state, action);
		case actionTypes.SET_ITEM_FILTER: return setItemFilter(state, action);
		default: return state;
	}
}

export default reducer;