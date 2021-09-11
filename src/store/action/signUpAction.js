import { ActionType } from "../actionType";
import axios from "axios"; 

export const setUserSignUpData = (signUpData) => {
    return {
        type: ActionType.SIGN_UP,
        payload: signUpData
    }
}

export const signUpAction = (signUpData) => {
    return async (dispatch, action) => {
        try {
                const response = await axios.post("http://localhost:8080/signup", {
                email: signUpData.email,
                username: signUpData.username,
                firstname: signUpData.firstname,
                lastname: signUpData.lastname,
                phone: signUpData.phone,
                password: signUpData.password  
            });
            dispatch(setUserSignUpData(response.data));
        }catch(error){
            console.log(error,"signup errooor");
        }

    }
}