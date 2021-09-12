import { ActionType } from "../actionType";
import { BASE_URL,DASHBOARD } from "../../utils/constants";
import axios from "axios"; 
import { history } from "../../utils/helpers/history";

export const setUserSignInData = (user) => {
    return {
        type: ActionType.SIGN_IN,
        payload: user
    }
}

export const signInAction = (user) => {
    return async (dispatch, action) => {
        const response = await axios.post(`${BASE_URL}/signin`, {
            email: user.email,
            password: user.password,
        });
        dispatch(setUserSignInData(response.data));
        history.push(`${DASHBOARD}`);
     }
}