import { ActionType } from "../actionType";

const cat = {
    // name: null,
    // description: null,
    category : []
  };

const CategoryReducer = (state = cat, action) => {
 

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

export default CategoryReducer;