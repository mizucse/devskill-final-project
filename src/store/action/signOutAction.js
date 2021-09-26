import React from "react";
import { history } from "../../utils/helpers/history";
// import { useHistory } from 'react-router';
import { ActionType } from "../actionType";



export const SignOutAction = () => {
    // const history = useHistory();

    return async (dispatch, action) => { 
        dispatch(SignOutData());
        history.push('/login');
        window.location.reload(100);
    }
}

export const SignOutData = () => {
    return {
        type: ActionType.SIGN_OUT,
        payload: {
            authStore: {
                email: null,
                role: null,
                token: null
            }
        } 
    }
}
