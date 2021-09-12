import { history } from "../../utils/helpers/history";
import { ActionType } from "../actionType"; 


export const signOutAction = () => {
    return async (dispatch, action) => { 
        dispatch(SignOutData());
        history.push('/login');
    }
}

export const SignOutData = () => {
    return {
        type: ActionType.SIGN_OUT,
        payload: {user: {email: '', role: '', token: ''}}
    }
}
