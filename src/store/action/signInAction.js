import { ActionType } from "../actionType";
import { BASE_URL,ADMIN, HOME } from "../../utils/constants";
import axios from "axios"; 
import { history } from "../../utils/helpers/history";
import Dashboard from "../../admin/components/dashboard/dashboard";
import notificationWithIcon from "../../utils/notification";


export const setUserSignInData = (user) => {
    return {
        type: ActionType.SIGN_IN,
        payload: user
    }
}

export const SignInAction = (user) => {
    return async (dispatch, action) => {
        const response = await axios.post(`${BASE_URL}/signin`, {
            email: user.email,
            password: user.password,
        });
        // alert(response.data?.message);

        if(response.data.message !== "User not found"  &&  response.data.message !== "Wrong Password"){
            notificationWithIcon('success',"Login Successful"); 
            dispatch(setUserSignInData(response.data));
            if(response.data?.userInfo.role == "admin"){
                history.push('/admin');
                window.location.reload();
            }else{ 
                history.push('/');
                window.location.reload();
            }
        }else { 
            notificationWithIcon('error',response.data.message);
        }
            // alert(response.data.status);
        // console.log(response.data.userInfo.role,"=====signInAction role=====");
        // console.log(response.data,"=====signInAction msg=====");
        // window.location.reload();
     }
}