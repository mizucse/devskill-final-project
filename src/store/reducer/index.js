import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist';
import signInReducer from "./signInReducer";
import CategoryReducer from "./categoryReducer";
import ProductReducer, { ProductDetailsReducer } from "./productReducer"; 
import UserReducer from "./userReducer";
import CartReducer from "./cartReducer";
import storage from "redux-persist/lib/storage";
import OrderReducer from "./orderReducer";

const persistConfig = {
    key: 'root',
    storage: storage,
}

export const userPersistedStore = persistReducer(persistConfig, signInReducer);
export const categoryListStore = persistReducer(persistConfig, CategoryReducer); 

export const mainReducer = combineReducers({
    authStore: userPersistedStore,
    categoryStore: categoryListStore,
    productStore: ProductReducer,
    productDetailsStore: ProductDetailsReducer,
    userStore: UserReducer,
    cartStore: CartReducer,
    orderStore: OrderReducer,
});