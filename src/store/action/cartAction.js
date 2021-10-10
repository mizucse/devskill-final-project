import { ActionType } from "../actionType";
import { BASE_URL,DASHBOARD } from "../../utils/constants";
import axios from "axios"; 
// import { history } from "../../utils/helpers/history";
import notificationWithIcon from "../../utils/notification";
import {useHistory} from "react-router-dom";

export const setCartData = (product) => {
    // console.log(product, "product received in setCartData=====");
    return {
        type: ActionType.CART_LIST,
        payload: product
    }
}

export const setOrderListData = (product) => {
    // console.log(product, "product received in setOrderListData=====");
    return {
        type: ActionType.ORDER_LIST,
        payload: product
    }
}

export const cartAction = (productId, qty, title=null) => {
    return async (dispatch, getState) => { 
        const {authStore} = getState();
        const token = authStore.token; 
        // console.log(productId," --!!-- in cartAction --!!-- ", qty, "===qty===");
        try {
            const response = await axios.post(`${BASE_URL}/cart`,{
                product: { id: productId, quantity: qty }
            }, { headers: { authorization: `bearer ${token}` } });

            dispatch(setCartData(response.data?.products));
            if(qty == 0) {
                notificationWithIcon('success', "Product successfully deleted from cart.");  
            }else{
                if(title == null){
                    notificationWithIcon('success', "Successfully added to cart.");
                }else {
                    notificationWithIcon('success', title+" qty successfully updated.");
                }
                
            } 
            dispatch(getCartAction);
        }catch(error){
            notificationWithIcon('error', "Product add to cart Failed.");  
            console.log(error,"Product Details view error");
        }  
    }
}

export const getCartAction = () => {
    return async (dispatch, getState) => { 
        const {authStore} = getState();
        const token = authStore.token; 
        try {
            const response = await axios.get(`${BASE_URL}/cart`, { headers: { authorization: `bearer ${token}` } });
             
            dispatch(setCartData(response.data?.products));
            // console.log(response.data,"====get all cart from database===");
        }catch(error){
            console.log(error,"Cart Product load from getCartAction error");
        } 
    } 
}

export const DeleteCartProductAction = (id) => {
    return async (dispatch, getState) => { 
        const {authStore} = getState();
        const token = authStore.token; 
        try {
            const response = await axios.delete(`${BASE_URL}/cart/${id}`, { headers: { authorization: `bearer ${token}` } });
             
            notificationWithIcon('success', "product successfully deleted from cart.");  
            dispatch(getCartAction); 
            // console.log(response.data,"====get all cart from database===");
        }catch(error){
            notificationWithIcon('error', "product delete from cart failed.");  
            console.log(error,"product delete from cart failed");
        } 
    } 
}

export const CheckOutAction = () => {
    return async (dispatch, getState) => { 
        const {authStore} = getState();
        const token = authStore.token; 
        try {
            const response = await axios.get(`${BASE_URL}/order/checkout`, { headers: { authorization: `bearer ${token}` } });
             
            // dispatch(setCartData(response.data));
            notificationWithIcon('success', "Order placed successfully.");
            console.log(response.data,"====response from checkoutAction===");
            dispatch(getCartAction); 
            // alert(response.data.message)
        }catch(error){
            console.log(error,"response from checkoutAction error");
            notificationWithIcon('error', "Failed to place this order.");
        } 
    } 
}

export const ChangeOrderAction = (id, staus_value) => {
    return async (dispatch, getState) => { 
        console.log(staus_value, "======staus_value in --ChangeOrderAction====")
        const {authStore} = getState();
        const token = authStore.token; 
        try {
            const response = await axios.patch(`${BASE_URL}/order/${id}`,
            { status: staus_value }, { headers: { authorization: `bearer ${token}` } });
             
            if(staus_value == 0){
                notificationWithIcon('success', "Order changed to pending successfully.");
            }else if(staus_value == 1){
                notificationWithIcon('success', "Order accepeted successfully.");
            }else if(staus_value == 2){
                notificationWithIcon('success', "Order cancelled successfully.");
            }  
            dispatch(OrderListAction); 
            // alert(response.data.message)
        }catch(error){
            console.log(error,"Order status change error");
            notificationWithIcon('error', "Order status change error.");
        } 
    } 
}

export const OrderListAction = () => {
    return async (dispatch, getState) => { 
        const {authStore} = getState();
        const token = authStore.token; 
        try {
            const response = await axios.get(`${BASE_URL}/order/my-order`, { headers: { authorization: `bearer ${token}` } });
             
            dispatch(setOrderListData(response.data));
            console.log(response.data,"====response from OrderListAction===");
            // alert(response.data.message)
        }catch(error){
            console.log(error,"response from OrderListAction error");
        } 
    } 
}