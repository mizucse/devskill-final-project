import { ActionType } from "../actionType";
import { BASE_URL } from "../../utils/constants";
import axios from "axios"; 

export const setProductData = (productData) => {
    return {
        type: ActionType.ADD_PRODUCT,
        payload: productData
    }
}

export const AddProductAction = (productData) => {
    return async (dispatch, action) => {
        try {
                const response = await axios.post(`${BASE_URL}/products`, {
                    title: productData.title,
                    price: productData.price,
                    description: productData.price,
                    image: "BASE64",
                    stock: productData.stock,
                    category: {
                        _id: productData.category,
                    },
            });
            dispatch(setProductData(response.data));
        }catch(error){
            console.log(error,"signup errooor");
        }

    }
}