import { ActionType } from "../actionType";
import { BASE_URL, SUCCESS, ERROR, INFO, WARNING } from "../../utils/constants";
import axios from "axios";  
import notificationWithIcon from "../../utils/notification";

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
            // console.log(response,"=======response ====response==== ");
            // if(response.data?.status == 200){
                notificationWithIcon('success',"Registration Successful"); 
            // }
            dispatch(setUserSignUpData(response.data));
        }catch(error){
            console.log(error,"signup errooor");
            notificationWithIcon('error',"Registration failed!");
        } 
    }
}

export const adminAddUserAction = (signUpData) => {
    return async (dispatch, getState) => {
        const {authStore} = getState();
        const token = authStore.token;

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
                    role: signUpData.role,
            },
            {
                headers: { authorization: `bearer ${token}` },
            }); 
                notificationWithIcon('success',`${signUpData.role}`+" added Successfully."); 
            // }
            dispatch(setUserSignUpData(response.data));
        }catch(error){
            console.log(error,"signup errooor");
            notificationWithIcon('error',"User Registration failed!");
        } 
    }
}

export const adminUpdateUserAction = (userUpdateData,id) => {
    return async (dispatch, getState) => {
        const {authStore} = getState();
        const token = authStore.token;
        console.log(userUpdateData,id, "=======userupdatedata, and id in adminUpdateUserAction=======")
        try {
                const response = await axios.patch(`${BASE_URL}/user/${id}`, {
                    address: {
                        geolocation: {
                            lat: userUpdateData.address.geolocation.lat,
                            long: userUpdateData.address.geolocation.long,
                        },
                        city: userUpdateData.address.city ,
                        number: userUpdateData.address.number,
                        zipcode: userUpdateData.address.zipcode
                    },
                    role: userUpdateData.role,
                    email: userUpdateData.email, 
                    username: userUpdateData.username, 
                    
                    firstname: userUpdateData.firstname ,
                    lastname: userUpdateData.lastname,
                    phone: userUpdateData.phone
            },
            {
                headers: { authorization: `bearer ${token}` },
            }); 
            notificationWithIcon('success',`${userUpdateData.role}`+" updated Successfully.");  
            dispatch(setUserSignUpData(response.data));
        }catch(error){
            console.log(error,"Update errooor");
            notificationWithIcon('error',"Update failed!");
        } 
    }
}

export const deleteUserFromAdmin = (id) => { 
    return async (dispatch, getState) => {
        const {authStore} = getState();
        const token = authStore.token;
        // console.log(id, "user id ==== in deleteUserFromAdmin =====");
        try {
            const response = await axios.delete(`${BASE_URL}/user/${id}`, { headers: { authorization: `bearer ${token}` } }); 
            notificationWithIcon('success'," Successfully deleted.");  
            dispatch(GetAllUserAction());
        }catch(error){
            console.log(error,"signup errooor");
            notificationWithIcon('error',"User delete failed!");
        } 
    }
}



export const setUserListData = (userListData) => {
    return {
        type: ActionType.USER_LIST_SUCCESS,
        payload: userListData
    }
}


export const setUserDetailstData = (userDetailsData) => {
    return {
        type: ActionType.USER_DETAILS_SUCCESS,
        payload: userDetailsData
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


export const GetUserDetailsAction = (id) => { 
    // console.log(id, '=====Get User Details in  GetUserDetailsAction====');
    return async (dispatch, getState) => {
        const {authStore} = getState();
        const token = authStore.token;
        try {
            const response = await axios.get(`${BASE_URL}/user/${id}`,
            {
                headers: { authorization: `bearer ${token}` },
            });
            console.log(response.data,'=====Get User Details in======  GetUserDetailsAction====');
            dispatch(setUserDetailstData(response.data));
        }catch(error){
            console.log(error,"Get User Details  Error");
        }

    }
}