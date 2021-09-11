import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist';
import signInReducer from "./signInReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage: storage,
}

export const userPersistedStore = persistReducer(persistConfig, signInReducer);

export const mainReducer = combineReducers({
    authStore: userPersistedStore
});