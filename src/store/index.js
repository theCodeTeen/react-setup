import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { defaultAxios } from "../utils/axios/default.axios";
import { userAxios } from "../utils/axios/user.axios";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => {
    let thunkWithParameters = thunk.withExtraArgument({
      apiService: {
        default: defaultAxios,
        user: userAxios,
      },
    });
    return [thunkWithParameters];
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);