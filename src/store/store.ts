import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
// import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { gameReducer } from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer<any, any>(persistConfig, gameReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
