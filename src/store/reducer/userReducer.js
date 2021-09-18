import { ActionType } from "../actionType";

const user = {
    // name: null,
    // description: null,
    user : []
  };

const UserReducer = (state = user, action) => {
    switch(action.type) {
        case ActionType.USER_LIST_SUCCESS:
            return {
                ...user,
                // name: action.payload.categoryInfo.name,
                // description: action.payload.categoryInfo.description, 
                user : action.payload,
            }
            default :
                return state;
    }
}

export default UserReducer;