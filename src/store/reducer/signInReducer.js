import { ActionType } from "../actionType";

const user  = {
    email: null,
    role: null,
    token: null,
    //user: []
  };

const signInReducer = (state = user, action) => {
// action
//   |-- type
//   |-- payload

    switch(action.type) {
        case ActionType.SIGN_IN:
            return {
                ...user,
                email: action.payload.userInfo.user,
                role: action.payload.userInfo.role,
                token: action.payload.userInfo.token,
            }
        case ActionType.SIGN_OUT:
            return {
                ...user, initialState: []
            }
        default :
            return state;
    }
}

export default signInReducer;