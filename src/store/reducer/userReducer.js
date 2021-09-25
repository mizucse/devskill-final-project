import { ActionType } from "../actionType";

const user = {
    // name: null,
    // description: null,
    user : []
  };

export const UserReducer = (state = user, action) => {
    switch(action.type) {
        case ActionType.USER_LIST_SUCCESS:
            return {
                ...user, user : action.payload,
            }
            default :
                return state;
    }
}

// export default UserReducer;

const userDetails = {
    // name: null,
    // description: null,
    userDetails : ""
  };

export const UserDetailsReducer = (state = userDetails, action) => {
    switch(action.type) {
        case ActionType.USER_DETAILS_SUCCESS:
            return {
                ...userDetails,
                // name: action.payload.categoryInfo.name,
                // description: action.payload.categoryInfo.description, 
                userDetails : action.payload,
            }
            default :
                return state;
    }
}
 