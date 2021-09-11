import { ActionType } from "../actionType";
import axios from "axios"; 

export const setUserSignInData = (user) => {
    return {
        type: ActionType.SIGN_IN,
        payload: user
    }
}

export const signInAction = (user) => {
    return async (dispatch, action) => {
        const response = await axios.post("http://localhost:8080/signin", {
            email: user.email,
            password: user.password,
        });
        dispatch(setUserSignInData(response.data));
    }
}