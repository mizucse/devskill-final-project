import { ActionType } from "../actionType";
import { BASE_URL,ADMIN, HOME } from "../../utils/constants";
import axios from "axios"; 
import { history } from "../../utils/helpers/history";
import Dashboard from "../../admin/components/dashboard/dashboard";


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
        console.log(response.data.userInfo.role,"=====signInAction role=====");
        console.log(response.data.message,"=====signInAction msg=====");
        if(response.data?.userInfo.role == "admin")
            history.push('/admin');
        else{ 
            history.push('/');
        }
        window.location.reload();
     }
}