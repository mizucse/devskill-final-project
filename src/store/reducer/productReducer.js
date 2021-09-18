import { ActionType } from "../actionType";

const product = {
    // name: null,
    // description: null,
    product : []
  };

const ProductReducer = (state = product, action) => {
 

    switch(action.type) {
        case ActionType.PRODUCT_LIST_SUCCESS:
            return {
                ...product,
                // name: action.payload.categoryInfo.name,
                // description: action.payload.categoryInfo.description, 
                product : action.payload,
            }
            default :
                return state;
    }
}

export default ProductReducer;


const productDetails = {
    // name: null,
    // description: null,
    productDetails : {}
  };

  export const ProductDetailsReducer = (state = productDetails, action) => {
 

    switch(action.type) {
        case ActionType.PRODUCT_DETAILS_SUCCESS:
            return {
                ...productDetails,
                // name: action.payload.categoryInfo.name,
                // description: action.payload.categoryInfo.description, 
                productDetails : action.payload,
            }
            default :
                return state;
    }
}
 