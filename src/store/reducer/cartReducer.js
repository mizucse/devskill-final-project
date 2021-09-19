import { ActionType } from "../actionType";

const cart = { 
    data : []
  };

const CartReducer = (state = cart, action) => { 
    switch(action.type) {
        case ActionType.CART_LIST:
            return {
                ...state, 
                data : action.payload,
            }
        default :
            return state;
    }
}

export default CartReducer;