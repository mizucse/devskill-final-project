import { ActionType } from "../actionType";

const initialState = {
    email: null,
    role: null,
    token: null,
    //user: []
  };

const signInReducer = (state = initialState, action) => {
// action
//   |-- type
//   |-- payload

    switch(action.type) {
        case ActionType.SIGN_IN:
            return {
                ...initialState,
                email: action.payload.userInfo.user,
                role: action.payload.userInfo.role,
                token: action.payload.userInfo.token,
            }
        default :
            return state;
    }
}

export default signInReducer;