import { ActionType } from "../actionType";

const cart = { 
    data : []
  };

const OrderReducer = (state = cart, action) => { 
    switch(action.type) {
        case ActionType.ORDER_LIST:
            return {
                ...state, 
                data : action.payload,
            }
        default :
            return state;
    }
}

export default OrderReducer;