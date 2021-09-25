import { ActionType } from "../actionType";
import { BASE_URL } from "../../utils/constants";
import axios from "axios"; 
import notificationWithIcon from "../../utils/notification";

export const setProductData = (productData) => {
    return {
        type: ActionType.ADD_PRODUCT,
        payload: productData
    }
}

export const setProductListData = (productData) => {
    return {
        type: ActionType.PRODUCT_LIST_SUCCESS,
        payload: productData
    }
}
export const AddProductAction = (productData) => {
    console.log(productData.category,"category id on submit =======");
    return async (dispatch, getState) => {
        const {authStore} = getState();
        const token = authStore.token;
        try {
            const response = await axios.post(`${BASE_URL}/products`, {
                title: productData.title,
                price: parseFloat(productData.price),
                description: productData.description,
                image: productData.image,
                stock: parseInt(productData.stock),
                category: {
                    _id: productData.category._id,
                },
            },
            {
                headers: { authorization: `bearer ${token}` },
            });
            notificationWithIcon('success',productData.title+" added successfully."); 
            dispatch(setProductData(response.data));
        }catch(error){
            notificationWithIcon('error',productData.title+" add failed."); 
            console.log(error,"Product Add Error");
        }

    }
}
export const UpdateProductAction = (id, productData) => {
    console.log(productData.category,"category id on submit =======");
    return async (dispatch, getState) => {
        const {authStore} = getState();
        const token = authStore.token;
        try {
            const response = await axios.patch(`${BASE_URL}/products/${id}`, {
                title: productData.title,
                price: parseFloat(productData.price),
                description: productData.description,
                image: productData.image,
                stock: parseInt(productData.stock),
                category: {
                    _id: productData.category._id,
                },
            },
            {
                headers: { authorization: `bearer ${token}` },
            });
            notificationWithIcon('success',productData.title+" updated successfully."); 
            dispatch(setProductData(response.data));
        }catch(error){
            notificationWithIcon('error',productData.title+" update failed."); 
            console.log(error,"Product Add Error");
        }

    }
}

export const GetAllProductAction = () => { 
    return async (dispatch, getState) => {
        const {authStore} = getState();
        const token = authStore.token;
        try {
            const response = await axios.get(`${BASE_URL}/products`,{},  
            {
                headers: { authorization: `bearer ${token}` },
            });
            dispatch(setProductListData(response.data));
        }catch(error){
            console.log(error,"Product Add Error");
        }

    }
}

export const setProductDetailsData = (productData) => {
    return {
        type: ActionType.PRODUCT_DETAILS_SUCCESS,
        payload: productData
    }
}
export const GetProductDetailsAction = (id) => { 
    return async (dispatch, getState) => { 
        try {
            const response = await axios.get(`${BASE_URL}/products/${id}`);
            dispatch(setProductDetailsData(response.data));
            // console.log(response.data,"----- details");
        }catch(error){
            console.log(error,"Product Details view error");
        }

    }
}
export const DeleteProductAction = (id) => { 
    return async (dispatch, getState) => { 
        const {authStore} = getState();
        const token = authStore.token;
        try {
            const response = await axios.delete(`${BASE_URL}/products/${id}`,
            {
                headers: { authorization: `bearer ${token}` },
            })
            notificationWithIcon('success',"Successfully deleted."); 
            dispatch(GetAllProductAction);
            // console.log(response.data,"----- details");
        }catch(error){
            notificationWithIcon('error',"Failed to delete."); 
            console.log(error,"Product Details view error");
        }

    }
}