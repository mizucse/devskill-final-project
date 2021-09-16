import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist';
import signInReducer from "./signInReducer";
import CategoryReducer from "./categoryReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage: storage,
}

export const userPersistedStore = persistReducer(persistConfig, signInReducer);
export const categoryListStore = persistReducer(persistConfig, CategoryReducer);

export const mainReducer = combineReducers({
    authStore: userPersistedStore,
    categoryStore: categoryListStore
});