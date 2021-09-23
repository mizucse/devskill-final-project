import { ActionType } from "../actionType";
import { BASE_URL, SUCCESS, ERROR, INFO, WARNING } from "../../utils/constants";
import axios from "axios"; 
import Alerts from '../../utils/alert'; 

export const setUserSignUpData = (signUpData) => {
    return {
        type: ActionType.SIGN_UP,
        payload: signUpData
    }
}

export const signUpAction = (signUpData) => {
    return async (dispatch, action) => {
        try {
                const response = await axios.post(`${BASE_URL}/signup`, {
                email: signUpData.email,
                username: signUpData.username,
                password: signUpData.password,
                firstname: signUpData.firstname,
                lastname: signUpData.lastname,
                address: {
                    city: signUpData.address.city,
                    street: signUpData.address.street,
                    number: signUpData.address.number,
                    zipcode: signUpData.address.zipcode,
                    geolocation: {
                        lat: signUpData.geolocation.lat,
                        long: signUpData.geolocation.long,
                    },
                },
                phone: signUpData.phone,
            });
            console.log(response,"=======response ====response==== ");
            if(response.data?.status == 200){
                Alerts(SUCCESS,"Registration Successful");
            }
            dispatch(setUserSignUpData(response.data));
        }catch(error){
            console.log(error,"signup errooor");
        } 
    }
}



export const setUserListData = (userListData) => {
    return {
        type: ActionType.USER_LIST_SUCCESS,
        payload: userListData
    }
}


export const GetAllUserAction = () => { 
    return async (dispatch, getState) => {
        const {authStore} = getState();
        const token = authStore.token;
        try {
            const response = await axios.get(`${BASE_URL}/user`,
            {
                headers: { authorization: `bearer ${token}` },
            });
            dispatch(setUserListData(response.data));
            console.log(response.data,null, ' ');
        }catch(error){
            console.log(error,"Get User List  Error");
        }

    }
}