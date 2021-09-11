import { ActionType } from "../actionType";

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    username: '',
    password: ''
    //user: []
  };

const signUpReducer = (state = initialState, action) => {
// action
//   |-- type
//   |-- payload

    switch(action.type) {
        case ActionType.SIGN_UP:
            return {
                ...initialState,
                firstname: action.payload.userInfo.firstname,
                lastname: action.payload.userInfo.lastname,
                email: action.payload.userInfo.email,
                phone: action.payload.userInfo.phone,
                username: action.payload.userInfo.username,
                password:action.payload.userInfo.password,
            }
        default :
            return state;
    }
}

export default signUpReducer;