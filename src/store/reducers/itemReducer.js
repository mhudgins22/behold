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
	error: null
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

//Fetches items to populate list on ItemsPage
const fetchItemListSuccess = (state, action) => {
	return {
		...state,
		customList: action.itemList
	}
}

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

//Fetchs Item image data
const fetchItemImageSuccess = (state, action) => {
	return {
		...state,
		itemPreview: {
			...state.itemPreview,
			imagePath: action.imagePath
		}
	}
}

//Fetches list of input items
const fetchBaseItemsSuccess = (state, action) => {
	return {
		...state,
		baseList: action.itemList
	}
}

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
		loading: false
	}
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.POST_ITEM_START: return postItemStart(state, action);
		case actionTypes.POST_ITEM_SUCCESS: return postItemSuccess(state, action);
		case actionTypes.POST_ITEM_FAIL: return postItemFail(state, action);
		case actionTypes.PUT_ITEM_FAIL: return putItemFail(state, action);
		case actionTypes.FETCH_ITEM_LIST_SUCCESS: return fetchItemListSuccess(state, action);
		case actionTypes.FETCH_BASE_ITEMS_SUCCESS: return fetchBaseItemsSuccess(state, action);
		case actionTypes.FETCH_ITEM_IMAGE_SUCCESS: return fetchItemImageSuccess(state, action);
		case actionTypes.FETCH_ITEM_PATHS_SUCCESS: return fetchItemPathsSuccess(state,action);
		case actionTypes.PREVIEW_ITEM_CARD: return previewItemCard(state, action);
		case actionTypes.CLEAR_ITEM_PREVIEW: return clearItemPreview(state, action);
		default: return state;
	}
}

export default reducer;