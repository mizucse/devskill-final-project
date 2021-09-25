import { ActionType } from "../actionType";

const cat = {
    // name: null,
    // description: null,
    category : []
  };

export const CategoryReducer = (state = cat, action) => {
 

    switch(action.type) {
        case ActionType.CATEGORY_LIST_SUCCESS:
            return {
                ...cat,
                // name: action.payload.categoryInfo.name,
                // description: action.payload.categoryInfo.description, 
                category : action.payload,
            }
            default :
                return state;
    }
}

const categoryDetails = {
    categoryDetails: {}
}

export const CategoryForUpdateReducer = (state = categoryDetails, action) => {
 

    switch(action.type) {
        case ActionType.SET_CATEGORY_FOR_UPDATE:
            return {
                ...categoryDetails,
                // name: action.payload.categoryInfo.name,
                // description: action.payload.categoryInfo.description, 
                categoryDetails : action.payload,
            }
            default :
                return state;
    }
}