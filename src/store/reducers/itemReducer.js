import * as actionTypes from "../actions/actionTypes";

const initialState = {
	customList: null,
	baseList: null,
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
		case actionTypes.FETCH_ITEM_LIST_SUCCESS: return fetchItemListSuccess(state, action);
		case actionTypes.FETCH_BASE_ITEMS_SUCCESS: return fetchBaseItemsSuccess(state, action);
		case actionTypes.PREVIEW_ITEM_CARD: return previewItemCard(state, action);
		case actionTypes.CLEAR_ITEM_PREVIEW: return clearItemPreview(state, action);
		default: return state;
	}
}

export default reducer;