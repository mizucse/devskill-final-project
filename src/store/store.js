import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

const consoleEnhencher = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(mainReducer, consoleEnhencher);

export const persistor = persistStore(store);